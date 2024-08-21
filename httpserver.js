const http = require("http");

const port = process.env.PORT || 8080;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("context-type", "text/html");
  res.end("<h1>This is backend code</h1> <p> this code is running on nodejs");
});

server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
