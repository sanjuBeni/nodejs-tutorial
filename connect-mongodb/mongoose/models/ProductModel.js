const express = require("express");
const mongoose = require("mongoose");
require("../db/config");
const productSchema = require("../schema/ProductSchema");

const app = express();
app.use(express.json()); // get body data

app.post("/create", async (req, res) => {
  let data = new productSchema(req.body);
  let result = await data.save();
  console.log(result);
  res.status(200).json({ data: result });
});

app.get("/read", async (req, res) => {
  let result = await productSchema.find();
  res.status(200).json(result);
});

app.put("/update/:_id", async (req, res) => {
  let updateResult = await productSchema.updateOne(req.params, {
    $set: req.body,
  });
  res.send(updateResult);
});

app.delete("/delete/:_id", async (req, res) => {
  let result = await productSchema.deleteOne(req.params);
  res.send(result);
});

// search api

app.get("/search/:key", async (req, res) => {
  // single search
  // let searchData = await productSchema.find({
  //   $or: [{ company: { $regex: req.params.key } }],
  // });

  // multiple search

  let searchData = await productSchema.find({
    $or: [
      { company: { $regex: req.params.key } },
      { phone: { $regex: req.params.key } },
    ],
  });
  res.send(searchData);
});

app.listen(80);
