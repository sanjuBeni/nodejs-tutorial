const http = require("http"); // request and response handle by the http module

const hostName = "localhost";
const port = 80;

const server = http.createServer((req, res) => {
  res.write("<h1>This is heading 1</h1>");
  res.end();
});

server.listen(port, hostName, () => {
  console.log("Server is start");
});
