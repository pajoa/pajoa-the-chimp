var Path 	= require('path');
var Hapi 	= require('hapi');
var server 	= new Hapi.Server();
var Bell 	= require('bell');
var moment  = require('moment');
var db = require('mongojs').connect('mongodb://squish:squish@ds027758.mongolab.com:27758/squish', ['user']);

function user(name,email,notes,deadlines){
	this.username      = name;
	this.email         = email;
	this.notes 	       = notes;
    this.deadlines     = deadlines;
};




var index = Path.resolve(__dirname + '/../public/index.html');


server.connection({
	port: process.env.PORT || 8000,
    host: "localhost" //added this because otherwise it will revert to http://*mymacusername*:8000 which google+ rejects 
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
                        	email 		: g.email,
                            points      : 100
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
    },{
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
    },{
    	method: 'POST',
    	path: '/editnote',
    	config: {
    		auth: {
	            strategy: 'session',
                mode: 'try'
            },
	        handler: function(request,reply){
    	    	if (request.auth.isAuthenticated){
        			var payload = request.payload;
        			var id = payload.activeNoteId;
        			var text = payload.text;
                    var g = request.auth.credentials;

                    console.log('id: ', id);

                    db.user.update({})

/*
                   db.user.findAndModify({
                        query  : { "notes.id": id } , 
                        update : { $set: { "notes.$.text": text} },
                        new: true,
                    }, function(err,doc,last){
                            if (err){
                                console.log(err);
                                throw err;
                            }
                            console.log(' note edited, here is the err in callback: ', err);
                            console.log(' note edited, here is the doc in callback: ', doc);
                            console.log(' note edited, here is the last in callback: ', last);

                            reply('success hopefully');
                        }
                    );

*/




       





//            		db.user.findAndModify( {"notes.id": id}, { "$set": {"notes.$.text": text} })
  //     			      reply('hopefully success');
                }
 	   		}	
    	}
    },{ 
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
    },{
    	method: 'POST',
    	path: '/createnote',
    	config: {
    		auth: {
	            strategy: 'session',
                mode: 'try'
            },
            handler: function(request,reply){
            	if (request.auth.isAuthenticated){
            		console.log('is authenticated');
                    var payload = request.payload;
                    var text = payload.text;

                    var title = payload.title;
            	    console.log('title: ', title);
                    console.log('text: ', text);

                    var g = request.auth.credentials;
            	   	var new_id = Math.floor(Math.random()*10000);

            		var today = moment().format("dddd, MMMM Do YYYY");
                    var day1 = moment(today).add(1, "days").format("dddd, MMMM Do YYYY");
                    var day7 = moment(today).add(7, "days").format("dddd, MMMM Do YYYY");
                    var day30 = moment(today).add(30, "days").format("dddd, MMMM Do YYYY");

            		var new_note = {
            			title: title,
            			text: text,
            			id: new_id,
            			date: today,
                        deadlines: [day1, day7, day30]
            		};

            	    db.user.findAndModify({
						query: {"email": g.email}, 
						update: { $push: {"notes": new_note} },
                        new: true,
					}, function(err,res){
                            if (err){
                                console.log(err);
                                throw err;
                            }
                            console.log('new note created, here are notes from callback: ', res.notes);
	            	    	console.log('res: ', res);
	            	    	reply(res.notes);
            	    	}
            	    );


            	}
            }
    	}
    }
	]);

  





});



module.exports = server;