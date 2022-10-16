const dbConnect = require("./db");

// Single result insert
// const insert = async () => {
//   let db = await dbConnect();
//   let dataInsert = await db.insertOne({
//     company: "Vivo",
//     phone: "V9 Pro",
//     rating: "3.5",
//   });
//   dataInsert.acknowledged
//     ? console.log("Data inserted successfully")
//     : console.log("Data not inserted.");
// };

// Multiple result insert

const insertMulti = async () => {
  const db = await dbConnect();
  let dataInsert = await db.insertMany([
    { company: "ABC", phone: "A9 Pro", rating: "4.5" },
    { company: "XYZ", phone: "P9 Pro", rating: "3.5" },
    { company: "PQR", phone: "Q9 Pro", rating: "4.0" },
  ]);

  dataInsert.acknowledged
    ? console.log("Data inserted successfully")
    : console.log("Data not inserted.");
};

insertMulti();
