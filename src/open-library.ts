import fetch from "node-fetch";

export async function loadDataByIsbn(isbn: string) {
  const isbnResult = await openLibraryGet(`/isbn/${isbn}.json`);
  const works = await openLibraryGet(`${isbnResult.works[0].key}.json`);
  let author;
  if (works.authors) {
    author = await openLibraryGet(`${works.authors[0].author.key}.json`);
  }
  return formatDataFromIsbn(isbnResult, works, author);
}

export async function loadDataByAuthor(authorName: string) {
  const searchResults = await openLibraryGet(
    `/search/authors.json?q=${authorName}`,
  );
  const author = await openLibraryGet(
    `/authors/${searchResults.docs[0].key}.json`,
  );
  const works = await openLibraryGet(`${author.key}/works.json`);
  const formattedData = formatDataFromAuthor(works.entries, author);
  //need to filter out duplicates based on title?
  return formattedData;
}

const SEARCH_RESULT_LIMIT = 20;

export async function loadDataByTitle(title: string) {
  const searchResults = await openLibraryGet(`/search.json?title=${title}`);
  const books = [];
  for (
    let i = 0;
    i < Math.min(searchResults.docs.length, SEARCH_RESULT_LIMIT);
    i++
  ) {
    const bookData = await openLibraryGet(`${searchResults.docs[i].key}.json`);
    books.push({
      title: bookData.title,
      cover: `https://covers.openlibrary.org/b/id/${searchResults.docs[i].cover_i}-L.jpg`,
      author: getAuthor(searchResults.docs[i].author_name),
      description: bookData.description?.value,
      id: searchResults.docs[i].key,
    });
  }
  return books;
}

async function openLibraryGet<T = any>(path: string) {
  const response = await fetch(`https://openlibrary.org${path}`);
  return response.json() as any as T;
}

//Keep in sync with FE /types
interface SearchResult {
  id: string;
  author: string;
  title: string;
  cover?: string;
  description?: string;
}

function getAuthor(author: string | string[]) {
  return Array.isArray(author) ? author[0] : author;
}

function formatDataFromIsbn(
  isbnData: any,
  works: any,
  author: any,
): SearchResult {
  return {
    author: getAuthor(author.name),
    title: isbnData.title,
    cover: isbnData.covers
      ? `https://covers.openlibrary.org/b/id/${isbnData.covers[0]}-L.jpg`
      : undefined,
    description: works.description?.value || author.description?.value,
    id: isbnData.key || works.key || author.key || Date.now(),
  };
}

function formatDataFromAuthor(works: any[], author: any): SearchResult[] {
  return works.map((item) => ({
    author: getAuthor(author.name),
    title: item.title,
    cover: item.covers
      ? `https://covers.openlibrary.org/b/id/${item.covers[0]}-L.jpg`
      : undefined,
    description: item.description?.value,
    id: item.key || Date.now(),
  }));
}
