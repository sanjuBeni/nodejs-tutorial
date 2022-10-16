const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";

const client = new MongoClient(url);

const dbConnect = async () => {
  const connect = await client.connect();
  const db = connect.db("crud");
  return db.collection("products");
};

module.exports = dbConnect;
