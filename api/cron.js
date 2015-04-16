var CronJob = require('cron').CronJob;
var nodemailer = require('nodemailer');
var server = require('./server.js');
var moment  = require('moment');
var today = moment().format("dddd, MMMM Do YYYY");
var date = moment("15-04-2015", "DD-MM-YYYY");
var oneday = moment(date).add(1, "days").format("dddd, MMMM Do YYYY");
var sevenday = moment().add(7, "days").format("dddd, MMMM Do YYYY");
var thirtyday = moment().add(30, "days").format("dddd, MMMM Do YYYY");

//not deadline
var datee = moment("16-04-2015", "DD-MM-YYYY");
var onedayy = moment(datee).add(1, "days").format("dddd, MMMM Do YYYY");
server.User.find({},function(err,users){
  users.forEach(function(user){
    user.notes.forEach(function(note){
      note.deadlines.forEach(function(deadline){
        if (deadline === today){
//          sendMail(user.email,'subject','text');
            console.log('Send a mail to:', user.email);
        }
      });
    });
  });
});





/*

var mock = [{
        title: "jason",
        text: "mynotes not deadline",
        id: "1234",
        date: today,
        deadlines: [onedayy, sevenday, thirtyday]
},
{
        title: "jason",
        text: "mynotes with deadline",
        id: "1235",
        date: today,
        deadlines: [oneday, sevenday, thirtyday]
},
{
        title: "jason",
        text: "mynotes with another deadline",
        id: "1235",
        date: today,
        deadlines: [oneday, sevenday, thirtyday]
}]

var array = [];
for(j=0; j<mock.length;j++){
  var d = mock[j].deadlines
  for(i=0; i<d.length; i++){
    if(today == d[i]) {
      array.push({
        title: mock[j].title,
        text: mock[j].text,
        id: mock[j].id,
        date: mock[j].date
      })
    }
  }
}
console.log("here", array);

var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'squishreminder@gmail.com',
        pass: 'pajoalovesn0de'
    }
});

var user = "JSON";
var link = "http://localhost:8080/"
var note = "mynote"

if(array.length == 1) {

  var mailOptions = {
    from: 'Squish Reminder <squishreminder@gmail.com>',
    to: 'jason.c.luu@hotmail.co.uk',
    subject: 'Revise today! ✔',
    text: 'Hello ' + user + '! Revise today and stay on top of your notes. You will get a point, so login here: ' + link,
    html: '<b>Hello ' + user + '! Revise today and stay on top of your notes! You will get a point if you login today: <a href=' + link + '>' + note + '</a></b>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
  });
}
else {
  var mailOptions = {
      from: 'Squish Reminder <squishreminder@gmail.com>',
      to: 'jason.c.luu@hotmail.co.uk',
      subject: 'Revise today! ✔',
      text: 'Hello ' + user + '! Revise today and stay on top of your notes. You will get a point, so login here: ' + link,
      html: '<b>Hello ' + user + '! Revise today and stay on top of your notes! You will get a point if you login today: <a href=' + link + '>' + note + '</a></b>'
  };

  transporter.sendMail(mailOptions, function(error, info){
    if(error){
        console.log(error);
    }else{
        console.log('Message sent: ' + info.response);
    }
  });
}

var job = new CronJob('* * * * *', function() {
  console.log("check every minute");

  

  }, function () {
    //runs when it's finished?
  },
  true
);

//* * * * *
//minute, hour, dayofmonth, month, dayofweek
//00 12 * * 1-5, example weekdays only, at 12pm

*/