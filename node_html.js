const http = require('http');
const fs = require('fs');

const hostName = "127.0.0.1";
const port = 80; // 80 port is used for the direct hit the URL

const htmlFile = fs.readFileSync('./first.html');

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end(htmlFile);
});

server.listen(port,hostName, () => {
    console.log('Server start');
});




