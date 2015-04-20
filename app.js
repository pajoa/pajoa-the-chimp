var server = require("./api/server");

server.server.start(function() {
	console.log("Server running at " + server.server.info.uri);
//	var cron = require("./api/cron.js"); //schedule
});