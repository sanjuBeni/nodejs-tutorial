const express = require("express");
const mongodb = require("mongodb");
const apiDb = require("./apiDB");

const app = express();

app.get("/", async (req, res) => {
  const dbConnect = await apiDb.products();
  const fetchData = await dbConnect.find().toArray();
  res.send({ fetchData });
});

app.use(express.json()); // When use post method use express.json()
app.post("/insert", async (req, res) => {
  const dbConnect = await apiDb.products();
  const insertData = await dbConnect.insertOne({
    company: req.body.company,
    phone: req.body.phone,
    rating: req.body.rating,
  });
  console.log(req.body);
  insertData.acknowledged
    ? res.send(req.body)
    : res.send({ error: "Data not insert" });
});

app.put("/update", async (req, res) => {
  const dbConnect = await apiDb.products();
  const updateData = await dbConnect.updateOne(
    { company: "beniwal done" },
    {
      $set: req.body,
      //   $set: {
      //     company: req.body.company,
      //     phone: req.body.phone,
      //     rating: req.body.rating,
      //   },
    }
  );
  console.log(req.body);
  updateData.acknowledged
    ? res.send(req.body)
    : res.send({ error: "Data not update" });
});

// app.delete("/delete", async (req, res) => {
//   const dbConnect = await apiDb.products();
//   const deleteData = await dbConnect.deleteOne({
//     company: req.body.company,
//     rating: req.body.rating,
//   });
//   console.log(req.body);
//   deleteData.acknowledged
//     ? res.send(req.body)
//     : res.send({ error: "Data not update" });
// });

// Delete with ID

app.delete("/delete/:id", async (req, res) => {
  const dbConnect = await apiDb.products();
  const deleteData = await dbConnect.deleteOne({
    _id: new mongodb.ObjectId(req.params.id),
  });
  console.log(req.body);
  deleteData.acknowledged
    ? res.send({ success: "Deleted Successfully" })
    : res.send({ error: "Data not update" });
});

app.listen(1000);
