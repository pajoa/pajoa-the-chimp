var nodemailer = require('nodemailer');

var Sendmail = function(){

// create reusable transporter object using SMTP transport
var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'squishreminder@gmail.com',
        pass: 'pajoalovesn0de'
    }
});

var user = "JSON";
var link = "http://localhost:8000/";
var note = "mynote";
// NB! No need to recreate the transporter object. You can use
// the same transporter object for all e-mails

// setup e-mail data with unicode symbols
var mailOptions = {
    from: 'Squish Reminder <squishreminder@gmail.com>', // sender address
    to: 'jason.c.luu@hotmail.co.uk', // list of receivers
    subject: 'Revise today! ✔', // Subject line
    text: 'Hello ' + user + '! Revise today and stay on top of your notes. You will get a point, so login here: ' + link, // plaintext body
    html: '<b>Hello ' + user + '! Revise today and stay on top of your notes! You will get a point if you login today: <a href=' + link + '>' + note + '</a></b>' // html body
};

// send mail with defined transport object
transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
});

};

module.exports = Sendmail;