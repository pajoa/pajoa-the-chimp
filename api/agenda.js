var server = require('./server.js');
var nodemailer = require('nodemailer');
var moment  = require('moment');
var today = moment().format("YYYY MM DD");

function agendaStart() {

	console.log("agenda started...");
	var config = require("./config.js");

	var Agenda = require('agenda');
	var agenda = new Agenda({db: { address: config.db.dburl}});

	agenda.define('checking deadline', function(job, done) {
		console.log("agenda is checking deadline dates now...");

		server.User.find(function(err,users){
			users.forEach(function(user){
	  			user.notes.forEach(function(note){
	    			note.deadlines.forEach(function(deadline){
	      				if (deadline.day === today && deadline.points == 0){
		        			console.log("Found: " + user.email + " with note: " + note.title);
		        			Sendmail(user.email, note.title, users.length);
		        		}
		        	});
		        });
		    });
		});

		var Sendmail = function(email, title, users) {

		    var transporter = nodemailer.createTransport({
		        service: 'Gmail',
		        auth: {
		            user: config.reminder.email,
		            pass: config.reminder.password
		        }
		    });

		    var link = "http://pajoa.herokuapp.com/"

		    var mailOptions = {
				from: 'Squish Reminder <contactsquish@gmail.com>',
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

	      //   var adminOptions = {
	    		// from: 'Squish Reminder <support@squish.com>',
	    		// to: 'jasoncluu@gmail.com',
	    		// subject: 'Users today',
	    		// text: 'Your total number of users today is: ' + users,
	    		// html: '<b>Your total number of users today is: ' + users + '</b>'
	      //   };
	        
	      //   transporter.sendMail(adminOptions, function(error, info){
	      //   	if(error){
	      //   		console.log(error);
	      //   	}else{
	      //   		console.log('Message sent: ' + info.response);
	      //   	}
	      //   });
		};
		done();
		console.log("its's done");
	});

	agenda.every('00 15 * * *', 'checking deadline');
	 
	agenda.start();
};

module.exports = {
	agendaStart: agendaStart
};