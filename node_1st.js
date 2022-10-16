
const http = require('http');

const hostName = '127.0.0.5';
const port = 5000;

const server = http.createServer((req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<h2>Now JS is run on the server</h2>');
});

server.listen(port, hostName, () => {
    console.log(`Server running at http://${hostName}:${port}/`);
});