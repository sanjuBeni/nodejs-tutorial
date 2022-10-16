const express = require("express");
const multer = require("multer");

const app = express();

const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, callback) {
      callback(null, "H:/nodeJs/connect-mongodb/mongoose/models"); // models folder where file store
    },
    filename: function (req, file, callback) {
      callback(null, `${file.fieldname}-${Date.now()}.png`);
    },
  }),
}).single("user_file"); // user_file is the file name that pass into body

app.post("/fileupload", upload, (req, res) => {
  res.send("File upload");
});

app.listen(1000);
