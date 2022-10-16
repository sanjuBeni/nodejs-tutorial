const express = require("express");
// const path = require("path");

const app = express();
// const publicPath = path.join(__dirname, 'folderName');

app.set("view engine", "ejs");

app.get("/", (_, res) => {
  let data = {
    name: "Pratiksh Beniwal",
    email: "pratikshbeniwal@gmail.com",
  };
  let arr = ["JS", "PHP", "ReactJS", "NodeJS", "Laravel"];
  res.render("home", { data, arr });
});

app.get("/about", (_, res) => {
  let about = {
    name: "about page",
    email: "about@gmail.com",
  };
  res.render("about", { about });
});

app.get("/login", (_, res) => {
  let user = "This is login page";
  res.render("login", { user });
});

app.listen(80);
