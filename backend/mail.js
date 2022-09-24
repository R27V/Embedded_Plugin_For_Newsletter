const nodemailer = require('nodemailer');


let mailTransporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: 'renuprojects27@gmail.com',
		pass: 'ptqaqzovhwvmpxpc'
	},
    port: 454,
    host: "smtp.gmail.com",
});

let mailDetails = {
	from: 'renuprojects27@gmail.com',
	to: 'vermarenu007@gmail.com',
	subject: 'Test mail',
	text: 'Node.js testing mail',
    html: '<h1>Testing Nodemailer</h1>'
};

mailTransporter.sendMail(mailDetails, (err ) => {
	if(err) {
		console.log('Error Occurs',err);
	} else {
		console.log('Email sent successfully');
	}
});
