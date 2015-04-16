var moment = require('moment');
var db = require('mongojs').connect('mongodb://per:per@ds030827.mongolab.com:30827/blog2', ['user']);

var today= moment().format("dddd, MMMM Do YYYY");
var date = moment("12-04-2015", "DD-MM-YYYY");

//DATABASE
var database = {
	username: "per",
	note: "mynote",
	date: date
}

console.log(db.user);

var databaseformat = moment(database.date).format("dddd, MMMM Do YYYY");

var add1 = moment(database.date).add(1, "days").format("dddd, MMMM Do YYYY");
var add7 = moment(database.date).add(7, "days").format("dddd, MMMM Do YYYY");
var add30 = moment(database.date).add(30, "days").format("dddd, MMMM Do YYYY");
console.log("database date", databaseformat);
console.log("one day after", add1);
console.log("seven days after", add7);
console.log("thirty days", add30);

if(today == add1) {
	console.log("first day");
	var mail = require("./mail.js");
}

if(today == add7) {
	console.log("7th day");
	var mail = require("./mail.js");
}

if(today == add30) {
	console.log("30th day");
	var mail = require("./mail.js");
}