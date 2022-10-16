const { MongoClient } = require("mongodb");

const url = "mongodb://localhost:27017";
const clinet = new MongoClient(url);

const products = async () => {
  const connect = await clinet.connect();
  const db = connect.db("crud");
  const collection = db.collection("products");
  return collection;
};

module.exports = {
  products: products,
};
