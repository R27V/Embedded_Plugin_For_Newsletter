const express = require("express");
const router = express.Router();
const Model = require("../models/subscriberModel");

router.post("/add", (req, res) => {
  const formdata = req.body;
  console.log(formdata);
  

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

router.get("/getbyowner/:ownerid", (req, res) => {
  console.log(req.params.email);

  Model.find({ owner: req.params.ownerid })
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
module.exports = router;
