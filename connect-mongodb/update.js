const dbConnect = require("./db");

const update = async () => {
  const db = await dbConnect();

  // Single update same name or diff-2 name
  //   let updateData = await db.updateOne(
  //     { company: "abc" },
  //     { $set: { phone: "ABC 11" } }
  //   );

  // Multiple update same name

  let updateData = await db.updateMany(
    { company: "Oppo" },
    { $set: { phone: "ABC 15" } }
  );
  updateData.acknowledged
    ? console.log("Data updated")
    : console.log("Data not updated");
};
update();
