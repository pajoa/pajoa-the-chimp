var server = require("./api/server");

server.server.start(function() {
	require("./api/cron.js");
	console.log("Server running at " + server.server.info.uri);
});