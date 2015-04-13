var Path 	= require('path');
var Hapi 	= require('hapi');
var server 	= new Hapi.Server();

server.connection({
	port: process.env.PORT || 8000
});

server.route([
	{
		path: '/{param*}',
		method: 'GET',
		handler: {
	        directory: {
	            path: Path.resolve(__dirname + '/../public'),
	        	index: true
	        }
		}
	}
]);

module.exports = server;