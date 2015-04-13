var server = require("./api/server");

server.start(function() {
	console.log("Server running at " + server.info.uri);
});