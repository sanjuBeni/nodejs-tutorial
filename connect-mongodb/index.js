const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const database = "crud";
const client = new MongoClient(url);

const connectWithDB = async () => {
  let connect = await client.connect();
  let db = connect.db(database);
  let collection = db.collection("products");
  let response = await collection.find().toArray();
  console.log(response);
};

connectWithDB();
