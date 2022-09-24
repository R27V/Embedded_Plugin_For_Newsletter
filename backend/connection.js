const mongoose = require("mongoose");

const dbName = "Embedded_PlugIn_For_Newsletter";
const url = `mongodb+srv://admin:adminname@cluster0.bx2fjji.mongodb.net/${dbName}?retryWrites=true&w=majority`;

//asynchronous function - returns promise
mongoose
  .connect(url)
  .then((result) => {
    console.log("database connected");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = mongoose;
