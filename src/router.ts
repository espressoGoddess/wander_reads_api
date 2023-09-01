import express, { Request, Response } from "express";
import { Bookshelf } from "./models/bookshelf";
import { Book } from "./models/book";

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

router.get("/api/v1/bookshelf", (req: Request, res: Response) => {
  res.send("GET bookshelf");
});

export default router;