const express = require("express");
const path = require("path");
const app = express();
const bodyParser = require("body-parser");

// Get Form Data
app.use(bodyParser.urlencoded());

// Static File
app.use("/static", express.static("static"));

// Set Template with the help of PUG
app.set("view engine", "pug");

// Set the directory
app.set("views", path.join(__dirname, "template"));

// End point
app.get("/", (req, res) => {
  const con = "Get the Gym membership for $60";
  const params = { title: "Go To Gym Fit Your Body", content: con };
  res.status(200).render("index", params);
});

app.post("/form-data", (req, res) => {
  //   console.log(req.body);
  let name = req.body.name;
  let age = req.body.age;
  let gender = req.body.gender;
  let mobile = req.body.mobile;
  console.log(name);
  const con = "Get the Gym membership for $60";
  const params = { title: "Go To Gym Fit Your Body", content: con };
  res.status(200).render("index", params);
});

const port = 80;
app.listen(port, () => {
  console.log(`Application is run on ${port}`);
});
