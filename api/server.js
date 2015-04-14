var Path 	= require('path');
var Hapi 	= require('hapi');
var server 	= new Hapi.Server();
var Bell 	= require('bell');

var index = Path.resolve(__dirname + '/../public/index.html');


server.connection({
	port: process.env.PORT || 8000
});

server.register([require('bell'), require('hapi-auth-cookie')], function(err){
		
	server.auth.strategy('google', 'bell', {
		provider		: 'google',
		password    	: 'cookie_encryption_password',
		clientId		: '107798555367-ccsfjoctt2f9e9sja5nqi3tsa979kh5l.apps.googleusercontent.com',
		clientSecret 	: '9WTSgM9n2CM4vRGPDIAf88IT',
		isSecure 		: false 
	});

    server.auth.strategy('session', 'cookie', {
        password        : 'password',
        cookie          : 'sid',
        reddirectTo     : '/',
        isSecure        : false
    });

	server.route({
		method: 'GET',
		path: '/',
		config: {
			auth: {
				strategy: 'session',
				mode: 'try'
			},
			handler: function(request,reply){
				if (request.auth.isAuthenticated){
					console.log('is authenticated');
					console.log('request.auth.credentials: ', request.auth.credentials);
					reply.file(index);				
				} else {
					console.log('isnt authenticated');
					console.log('request.auth.credentials: ', request.auth.credentials);
					reply.file(index);
				}
			}
		}
	})


	server.route({
		path: '/{param*}',
		method: 'GET',
		handler: {
	        directory: {
	            path: Path.resolve(__dirname + '/../public'),
	        	index: true
	        }
		}
	});

	server.route({
        method  : ['GET', 'POST'],
        path    : '/google',
        config  : {
            auth: 'google',
            handler: function(request, reply){
            	
            	var g = request.auth.credentials.profile;
                var profile = {
                    id: g.id,
                    username: g.username,
                    displayname: g.displayName,
                    firstname: g.name.first,
                    lastname: g.name.last,
                    email: g.email,
                    link: g.raw.link,
                    picture: g.raw.picture,
                    gender: g.raw.male
                };

            	request.auth.session.clear();
            	request.auth.session.set(profile);
				reply.redirect('/');
            }
        }
    });


});



module.exports = server;