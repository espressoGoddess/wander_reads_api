const express = require("express");
const cors = require("cors");
const db = require("./models/index");

const app = express();
const port = 3001;
app.set("port", port);

app.listen(port, () => {
  console.log(`server has started on port ${port} 💸 🔦 💫`);
});

// routes

app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.get("/", async (req, res) => {
  const result = await db.Bookshelf.findAll({
    where: {
      userId: 2,
    },
    include: db.Book,
  });
  res.send({ result });
});

app.get("/api/v1/bookshelf", (req, res) => {
  res.send("GET bookshelf");
});