const http = require('http');
const fs = require('fs');

const hostName = "127.0.0.1";
const port = 80;

const home = fs.readFileSync('index.html');

const about = fs.readFileSync('about.html');

const service = fs.readFileSync('service.html');

const contact = fs.readFileSync('contact.html');

const server = http.createServer((req,res) => {
    console.log(req.url);
    let url = req.url;
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/') res.end(home);
    else if (url == '/about') {
        res.end(about);
    } else if (url == '/service') {
        res.end(service);
    }else if (url == '/contact') {
        res.end(contact);
    }else {
        res.end('<h1>404  <h2>Not Found.....</h2></h1>');
    }
});

server.listen(port,hostName, () => {
    console.log(`Server start at ${port}`);
})