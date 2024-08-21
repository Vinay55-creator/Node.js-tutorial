const http = require("http");
const fs = require("fs");

const port = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("context-type", "text/html");

  if ((req.url = "/")) {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  }
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
