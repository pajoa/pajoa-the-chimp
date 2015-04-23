var server = require('./server.js');
var nodemailer = require('nodemailer');
var moment  = require('moment');
var today = moment().format("dddd, MMMM Do YYYY");

function agendaStart() {

	console.log("agenda started...");
	var config = require("./config.js");
	var Agenda = require('agenda');
	var agenda = new Agenda({db: { address: config.db.dburl}});

	agenda.define('check deadline', function(job, done) {
	  console.log("agenda is checking deadline dates now...");

	  server.User.find(function(err,users){
	    users.forEach(function(user){
	      user.notes.forEach(function(note){
	        note.deadlines.forEach(function(deadline){
	          if (deadline.day === today){
	            console.log(user.email);
	            console.log(note.title);
	            Sendmail(user.email, note.title);
	          }
	        });
	      });
	    });
	  });

	  var Sendmail = function(email, title) {

	    var transporter = nodemailer.createTransport({
	        service: 'Gmail',
	        auth: {
	            user: 'squishreminder@gmail.com',
	            pass: 'pajoalovesn0de'
	        }
	    });

	    var link = "http://localhost:8000/"

	    var mailOptions = {
	      from: 'Squish Reminder <squishreminder@gmail.com>',
	      to: email,
	      subject: 'Revise today! ✔',
	      text: 'Revise today and stay on top of your notes. You will get a point if you login today: ' + link + ' Your notes: ' + title,
	      html: 'Revise today and stay on top of your notes! You will get a point if you login today: <a href=' + link + '>' + title + '</a></b>'
	    };
	    
	    transporter.sendMail(mailOptions, function(error, info){
	      if(error){
	          console.log(error);
	      }else{
	          console.log('Message sent: ' + info.response);
	      }
	    });

	  }

	  done();
	});

	agenda.every('40 13 * * *', 'check deadline');
	 
	agenda.start();
}

module.exports = {
	agendaStart: agendaStart
};