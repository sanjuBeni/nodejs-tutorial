const express = require("express");

const app = express();
app.set("view engine", "ejs");

const middlerWare = (req, res, next) => {
  if (!req.query.age) {
    res.send("Please enter age");
  } else if (req.query.age < 18) {
    res.send("You can not access this page");
  } else {
    next();
  }
};

// Application-level middleware
app.use(middlerWare);

app.get("/", (req, res) => {
  let user = {
    name: "Pratiksh Beniwal",
  };
  res.render("index", { user });
});

app.get("*", (_, res) => {
  res.render("page404");
});

app.listen(80);
