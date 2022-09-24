const express = require("express");
const router = express.Router();
const nodemailer = require('nodemailer');

let mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "renuprojects27@gmail.com",
    pass: "ptqaqzovhwvmpxpc",
  },
  port: 465,
  host: "smtp.gmail.com",
});

router.post('/textmail',(req, res) => {
     const { to, subject, html } = req.body;
     let mailData = {
        from: 'renuprojects27@gmail.com',
        to: to,
        subject: subject,
      
        html: html
    };
    
   
  
  mailTransporter.sendMail(mailData, (err) => {
      if(err) {
        return console.log('Error Occurs',err);
      }
      res.status.send({ message: "Mail Send"});
     });
    });
    
    module.exports = router;