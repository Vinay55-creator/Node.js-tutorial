const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World2!");
});

app.get("/about", (req, res) => {
  res.send("Hello this is about page!");
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});
