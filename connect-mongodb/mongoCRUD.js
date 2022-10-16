const dbConnect = require("./db");

// dbConnect().then((data) => {
//   data
//     .find()
//     .toArray()
//     .then((res) => {
//       console.log(res);
//     });
// });

const fetchData = async () => {
  let res = await dbConnect();
  console.log(await res.find().toArray());
};

const cond = async () => {
  let res = await dbConnect();
  console.log(await res.find({ phone: "Glaxy" }).toArray());
};

console.log(cond());
