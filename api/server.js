var Path 	= require('path');
var Hapi 	= require('hapi');
var server 	= new Hapi.Server();
var Bell 	= require('bell');

var db = require('mongojs').connect('mongodb://per:per@ds030827.mongolab.com:30827/blog2', ['user']);

function user(name,email){
	this.username 	 = name;
	this.email       = email;
}


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

	server.route([{
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
					var g = request.auth.credentials;
					db.user.findOne({email: g.email}, function(err,user){
				    if (err){
				        throw err;
				        console.log(err);
				       	reply.file(index);

				    }
				    if (user) {
                        console.log('This user already exists');
				       	reply.file(index);
					    } else {
                        var new_user = {
                        	email 		: g.email
                        };
				    	db.user.save(new_user,function(err,user){
                            console.log('Creating new user. New user is ', user);
                            request.auth.session.set(user);
				       	reply.file(index);
                        });
				    }
				});

				} else {
					console.log('isnt authenticated');
					console.log('request.auth.credentials: ', request.auth.credentials);
					reply.file(index);
				}
			}
		}
	},

	{
		path: '/{param*}',
		method: 'GET',
		handler: {
	        directory: {
	            path: Path.resolve(__dirname + '/../public'),
	        	index: true
	        }
		}
	},

	{
        method: 'GET',
        path: '/logout',
        config: {
            auth: {
                strategy: 'session',
                mode: 'try'
            },
            handler: function(request,reply){
            	if (request.auth.isAuthenticated){
			        console.log('is authenticated, so logging out!') 
			        request.auth.session.clear();
			        reply.redirect('/');
			    } else {
			        reply.redirect('/');
			    }
			}
        }
    },

    {
        method  : ['GET', 'POST'],
        path    : '/google',
        config  : {
            auth: 'google',
            handler: function(request, reply){
            	var g = request.auth.credentials.profile;
                var profile = {
                    //id: g.id,
                    //username: g.username,
                    //displayname: g.displayName,
                    //firstname: g.name.first,
                    //lastname: g.name.last,
                    email: g.email,
                    //link: g.raw.link,
                    //picture: g.raw.picture,
                    //gender: g.raw.male
                };
                request.auth.session.clear();
            	request.auth.session.set(profile);
				reply.redirect('/');

            }
        }
    }, 
    {
    	method: 'GET',
    	path: '/user',
    	config: {
    		auth: {
	            strategy: 'session',
                mode: 'try'
            },
            handler: function(request,reply){
            	console.log('recieving ajax');
            	if (request.auth.isAuthenticated){
            	console.log('is authenticated');
            	var g = request.auth.credentials;
            	console.log('g is: ', g);
            	db.user.findOne({email: g.email}, function(err,user){
				    if (err){
			       		throw err;
			       		console.log(err);	
				    }
            		if (user){ 
		        		console.log('user found in db')
		        		console.log('user is: ', user);
						reply(user);
            		} else if (!user){
            			console.log('couldnt find user');
            		}
    
				});
            	} else {
					console.log('isnt authenticated');
					console.log('request.auth.credentials: ', request.auth.credentials);
					reply('youre not authenticated');
				}
            }
    	}
    }



    ]);





});



module.exports = server;