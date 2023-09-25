import express, { Request, Response } from "express";
import { Bookshelf } from "./models/bookshelf";
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
