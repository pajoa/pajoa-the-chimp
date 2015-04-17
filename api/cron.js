var server = require('./server.js');
var CronJob = require('cron').CronJob;
var nodemailer = require('nodemailer');

console.log("cron has started");
var job = new CronJob('00 11 * * *', function() {
  console.log("check's everyday at 11am");

  server.User.find({},function(err,users){
    users.forEach(function(user){
      user.notes.forEach(function(note){
        note.deadlines.forEach(function(deadline){
          if (deadline === today){
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

    var link = "http://localhost:8080/"

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
  
  }, function () {
    //runs when it's finished?
  },
  true
);

//* * * * *
//minute, hour, dayofmonth, month, dayofweek
//00 12 * * 1-5, example weekdays only, at 12pm