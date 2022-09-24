const express = require("express");
const userRouter = require("./routers/userRouter");
const subscriberRouter = require("./routers/subscriberRouter");
const util = require("./routers/util");
const cors = require('cors');
// const nodemailer = require('nodemailer');


const app = express();
const port = 5000;

// middleware
// to covert json to javascipt
app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

app.use("/user", userRouter);

app.use("/subscriber", subscriberRouter);

app.use("/util", util);

app.get("/", (req, res) => {
  res.send("Response from Express");
});

app.listen(port, () => {
  console.log("Server Started..");
});
