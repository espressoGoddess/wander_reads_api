import express, { Request, Response } from "express";
import { Bookshelf } from "./models/bookshelf";
import { Book } from "./models/book";
import {
  loadDataByAuthor,
  loadDataByIsbn,
  loadDataByTitle,
} from "./open-library";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  const result = await Bookshelf.findAll({
    where: {
      userId: 2,
    },
    include: Book,
  });
  res.send({ result });
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
