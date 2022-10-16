const express = require('express');
const path = require('path');
const app = express();

// Static file access on server without login required...
app.use('/static', express.static('static'));

// Set Template with the help of pug

app.set('view engine','pug');

// set the directory

app.set('views', path.join(__dirname, 'template'));

// End point

app.get('/demo', (req,res) =>{
    res.status(200).render('demo', { title: 'Hey PUG Title', message: 'Hello there!' })
})

// Routing with the help of express JS

app.get('/', (req,res)=>{
    res.send("<h2>Now we used the express module. " + req.url + "</h2>");
});

app.get('/about', (req,res) => {
    res.send("This is about page");
});

app.get('/contact', (req,res) =>{
    res.send("This is contact page");
})

// run the server with the help of express module
const port = 80;
app.listen(port, ()=>{
    console.log(`This application is run on the ${port}`);
})