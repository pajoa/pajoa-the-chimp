var CronJob = require('cron').CronJob;
var db = require('mongojs').connect('mongodb://per:per@ds030827.mongolab.com:30827/blog2', ['user']);
var moment  = require('moment');

var today = moment().format("dddd, MMMM Do YYYY");
var oneday = moment().add(1, "days").format("dddd, MMMM Do YYYY");
var sevenday = moment().add(7, "days").format("dddd, MMMM Do YYYY");
var thirtyday = moment().add(30, "days").format("dddd, MMMM Do YYYY");


var mock = {
        title: "jason",
        text: "mynotes",
        id: "1234",
        date: today,
        deadlines: [oneday, sevenday, thirtyday]
}

console.log(mock.deadlines);

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