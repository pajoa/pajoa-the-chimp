var server = require("./api/server");
var agenda = require("./api/agenda");

server.server.start(function() {
	console.log("Server running at " + server.server.info.uri);
	agenda.agendaStart();

	var http = require("http");
	setInterval(function() {
	    http.get("http://pajoa.herokuapp.com");
	    console.log("pinging heroku site");
	    console.log(http.get("http://pajoa.herokuapp.com"));
	}, 600000); // every 10 minutes (600000)
});