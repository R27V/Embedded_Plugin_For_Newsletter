const express = require("express");
const router = express.Router();
const Model = require("../models/userModel");
const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

router.post("/add", (req, res) => {
  const formdata = req.body;
  console.log(formdata);
  const hash = bcrypt.hashSync(formdata.password, salt);
  formdata.password = hash;

  // to save data
  new Model(formdata)
    .save()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// to Fetch data
router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// to fetch data by email
router.get("/getbyemail/:email", (req, res) => {
  console.log(req.params.email);

  Model.find({ email: req.params.email })
    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status.json(err);
    });
});

// to delete
router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)

    .then((result) => {
      console.log(result);
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// for authentication



// to send email


// router.post('/textmail',(req, res) => {
//  const { to, subject, text } = req.body;
//  const mailData = {
//   from: 'renuverma29jan@gmail.com',
//   to: 'vermarenu007@gmail.com',
//   subject: 'Sending Email using Node.js',
//   text: 'That was easy!',
//   html: '<b>Hey there! </b><br> This is our first message sent with Nodemailer<br/>',
//  };
//  transporter.sendMail(mailData, (error, info) => {
//   if(error) {
//     return console.log(error);
//   }
//   res.status.send({ message: "Mail Send", message_id: info.messageId });
//  });
// });

module.exports = router;
