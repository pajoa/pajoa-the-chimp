var server = require("./api/server");

server.server.start(function() {
	console.log("Server running at " + server.server.info.uri);
});