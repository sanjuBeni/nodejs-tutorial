const express = require("express");
const filterUser = require("./middlewaremodule/filterUser");

const app = express();
const route = express.Router();

// route is use for group middleware
route.use(filterUser);

app.get("/", (req, res) => {
  res.send("Welecome to Home page");
});

route.get("/about", (req, res) => {
  res.send("Welecome to about page");
});

// route is use for group middleware
route.get("/help", (req, res) => {
  res.send("Welecome to help page");
});

// page not found is comment when use group-middleware
// app.get("*", (req, res) => {
//   res.send("Page note found");
// });

// This code use when use group middleware
app.use("", route);
app.listen(80);
