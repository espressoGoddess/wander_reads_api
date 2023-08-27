const express = require("express");
const app = express();
// const cors = require("cors");
const port = 3001;
app.set("port", port);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`server has started on port ${port} 💸 🔦 💫`);
});

//routes

app.get("/api/v1/bookshelf", (req, res) => {
  res.send("GET bookshelf");
});
