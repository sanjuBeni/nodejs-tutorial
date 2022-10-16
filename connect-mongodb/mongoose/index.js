const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/crud");
const productSchema = new mongoose.Schema({
  company: String,
  phone: String,
  rating: Number,
});
// const insertData = async () => {
//   const productModel = mongoose.model("products", productSchema);
//   let data = new productModel({
//     company: "ASUS",
//     phone: "Gaming 1.0",
//     rating: 4.5,
//   });
//   (await data.save())
//     ? console.log("Data is Saved.")
//     : console.log("Data is not saved.");
// };

// insertData();

// const updateData = async () => {
//   const productModel = mongoose.model("products", productSchema);
//   let updateData = await productModel.updateOne(
//     { company: "Apple" },
//     {
//       $set: { rating: 5.0 },
//     }
//   );
//   updateData
//     ? console.log("Data is updated")
//     : console.log("Data is not updated");
// };

// updateData();

// const deleteData = async () => {
//   const productModel = mongoose.model("products", productSchema);
//   let deleteData = await productModel.deleteOne({ company: "Vivo" });
//   deleteData
//     ? console.log("Data is deleted")
//     : console.log("Data is not delteted");
// };

// deleteData();

const readData = async () => {
  const productModel = mongoose.model("products", productSchema);
  let fetch = await productModel.find();
  fetch ? console.log("Data is " + fetch) : console.log("Data is not ");
};

readData();
