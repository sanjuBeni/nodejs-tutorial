// const { MongoClient } = require("mongodb");

// const url = "mongodb://localhost:27017";
// const client = new MongoClient(url);

// const productsConeect = async () => {
//   const connect = await client.connect();
//   const dbConnect = connect.db("crud");
//   let response = await dbConnect.collection("products");
//   return response;
// };

// module.exports = {
//   products: productsConeect,
// };

const dbConnect = require("./db");

// Single Record Delete
// const deleteData = async () => {
//   const db = await dbConnect();
//   const res = await db.deleteOne({ company: "ABC" });
//   res.acknowledged
//     ? console.log("Data Delete Successfully.")
//     : console.log("Data not Delete");
// };

// deleteData();

// Multiple record delete

const MultiDelete = async () => {
  const db = await dbConnect();
  //   console.log(db);
  const res = await db.deleteMany({ company: "PQR" });
  res.acknowledged
    ? console.log("Data Delete Successfully.")
    : console.log("Data not Delete");
};

MultiDelete();
