import express, { Request, Response } from "express";
import cors from "cors";
import * as db from "./db";
import { Bookshelf } from "./models/bookshelf";
import { Book } from "./models/book";

const app = express();
const port = 3001;
app.set("port", port);

async function boot() {
  await db.initialize();

  app.listen(port, () => {
    console.log(`server has started on port ${port} 💸 🔦 💫`);
  });
}
boot();

// routes

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.get("/", async (req: Request, res: Response) => {
  const result = await Bookshelf.findAll({
    where: {
      userId: 2,
    },
    include: Book,
  });
  res.send({ result });
});

app.get("/api/v1/bookshelf", (req: Request, res: Response) => {
  res.send("GET bookshelf");
});
