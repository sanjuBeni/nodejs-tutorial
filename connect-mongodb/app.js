const { MongoClient } = require("mongodb");
const url = "mongodb://localhost:27017";
const dbName = "crud";
const client = new MongoClient(url);

const connectWithDB = async () => {
  const connection = await client.connect();
  let db = connection.db(dbName);
  let collection = db.collection("products");
  let response = await collection.find().toArray();

  // when conditon is used :=>  await collection.find({key : value}).toArray();
  console.log(response);
};

connectWithDB();
