import express from "express";
import cors from "cors";
import * as db from "./db";
import routes from "./router";

const app = express();
const port = process.env.PORT || 3001;
app.set("port", port);

app.use(
  cors({
    origin: ["http://localhost:3000"],
  }),
);

app.use(express.json());

app.use(routes);

async function boot() {
  await db.initialize();

  app.listen(port, () => {
    console.log(`server has started on port ${port} 💸 🔦 💫`);
  });
}

boot();
