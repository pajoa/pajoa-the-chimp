var server = require("./api/server");
var agenda = require("./api/agenda");

server.server.start(function() {
	console.log("Server running at " + server.server.info.uri);
	agenda.agendaStart();
});