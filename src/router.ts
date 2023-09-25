import express, { Request, Response } from "express";
import { Bookshelf, ShelfType } from "./models/bookshelf";
import { Book } from "./models/book";
import {
  loadDataByAuthor,
  loadDataByIsbn,
  loadDataByTitle,
} from "./open-library";
import { Author } from "./models/author";

const router = express.Router();

router.get("/api/v1/bookshelf", async (req: Request, res: Response) => {
  const shelfType = req.query.shelfType;
  const where = { userId: 2 };
  if (shelfType) {
    (where as any).shelfType = shelfType;
  }
  const result = await Bookshelf.findAll({
    where,
    include: [
      {
        model: Book,
        include: [Author],
      },
    ],
  });
  const books = result.map((item) => ({
    author: item.book.author.name,
    title: item.book.title,
    cover: item.book.coverUrl,
    description: item.book.description,
    id: item.id,
  }));
  res.send({ books });
});

interface AddBookToShelfPayload {
  author: string;
  title: string;
  shelfType: ShelfType;
  cover?: string;
  description?: string;
}

router.post("/api/v1/bookshelf", async (req, res) => {
  try {
    const userId = 2;
    const { author, title, cover, description, shelfType } =
      req.body as AddBookToShelfPayload;

    let authorInstance = await Author.findOne({ where: { name: author } });
    if (!authorInstance) {
      authorInstance = await Author.create({
        name: author,
      });
    }

    let bookInstance = await Book.findOne({
      where: {
        title: title,
        authorId: authorInstance.id,
      },
    });
    if (!bookInstance) {
      bookInstance = await Book.create({
        title: title,
        description: description,
        coverUrl: cover,
        authorId: authorInstance.id,
      });
    }

    await Bookshelf.create({
      shelfType: shelfType,
      userId: userId,
      bookId: bookInstance.id,
    });

    res.sendStatus(204);
  } catch (error) {
    console.error("Error adding book to shelf:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.post("/api/v1/search", async (req: Request, res: Response) => {
  let data: any;
  if (typeof req.body?.isbn === "string") {
    data = [await loadDataByIsbn(req.body.isbn)];
  } else if (typeof req.body?.author === "string") {
    data = await loadDataByAuthor(req.body.author);
  } else if (typeof req.body?.title === "string") {
    data = await loadDataByTitle(req.body.title);
  } else {
    res.status(400).send({ message: "Must provide isbn, author, or title" });
    return;
  }
  res.send({ data });
});

export default router;
