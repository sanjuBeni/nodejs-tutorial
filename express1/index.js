const express = require("express");
const path = require("path");

const app = express();

const publicPath = path.join(__dirname, "public");
// console.log(publicPath);

// app.use(express.static(publicPath));

// when req method not required then use (_)
app.get("/", (_, res) => {
  res.sendFile(`${publicPath}/index.html`);
});

app.get("/about", (_, res) => {
  res.sendFile(`${publicPath}/about.html`);
});

app.get("/help", (_, res) => {
  res.sendFile(`${publicPath}/help.html`);
});

// Make a 404 page

app.get("*", (_, res) => {
  res.sendFile(`${publicPath}/page404.html`);
});

// app.get("/", (req, res) => {
//   res.send("This is Home page");
// });

app.listen(80);
