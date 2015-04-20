var Path 	= require('path');
var Hapi 	= require('hapi');
var server 	= new Hapi.Server();
var Bell 	= require('bell');
var moment  = require('moment');
var config 	= require('./config.js');
var mongoose = require('mongoose');
mongoose.connect(config.db.dburl);
var index = Path.resolve(__dirname + '/../public/index.html');

// Seeting up schema and models form mongoose db
var Schema = mongoose.Schema;
var userSchema = new Schema({
    email: String,
    notes: Array,
    points: Number
});
var User = mongoose.model('User', userSchema);



server.connection({
	port: process.env.PORT || 8000,
    host: "0.0.0.0" || "localhost"
});

server.register([require('bell'), require('hapi-auth-cookie')], function(err){
		
	server.auth.strategy('google', 'bell', {
		provider		: 'google',
		password    	: config.google.password,
		clientId		: config.google.cKey,
		clientSecret 	: config.google.cSecret,
		isSecure 		: false 
	});

    server.auth.strategy('session', 'cookie', {
        password        : config.cookie.password,
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

                // Check if user is authenticated
				if (request.auth.isAuthenticated){
					console.log('Is authenticated. Request.auth.credentials: ', request.auth.credentials);
					var g = request.auth.credentials;
					
                    // Query the db to check if the user exists there
                    User.findOne({email: g.email}, function(err,user){
				    if (err){
				        throw err;
				        console.log(err);
				       	reply.file(index);

				    }

                    // if the user exists, simply reply without doing anything
				    if (user) {
				       	reply.file(index);
					} 

                    // if the user doesn't exist
                    else {

                        //create new user object
                        var new_user = new User();
                        new_user.email = g.email;
                        new_user.points = 100;
                        new_user.notes = [];

                        // save the user to the db
                        new_user.save( function(err){
                            if (err){
                                console.log('error when saving new member');
                                throw error;
                            }
                            console.log('registration successful');
                            reply.file(index);
                        });
			    }
				});

				} 

                // if the user isn't authenticated
                else {
					reply.file(index);
				}
			}
		}
	},

	{
        // for serving static files
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
            	if (request.auth.isAuthenticated) {
			        console.log('is authenticated, so logging out!');
			        request.auth.session.clear();
			        reply.redirect('/');
			    } else {
			        reply.redirect('/');
			    }
			}
        }
    },{
        // google authentication handler
        method  : ['GET', 'POST'],
        path    : '/google',
        config  : {
            auth: 'google',
            handler: function(request, reply){
            	var g = request.auth.credentials.profile;

                // create a profile to add to the session (Additional info commented out, but can be included)
                var profile = {
                    email: g.email,
                    //username: g.username,
                    //displayname: g.displayName,
                    //firstname: g.name.first,
                    //lastname: g.name.last,
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
        // handler for when the user save's an old note. (not for when the user saves a new note at '/newnote')
    	method: 'POST',
    	path: '/editnote',
    	config: {
    		auth: {
	            strategy: 'session',
                mode: 'try'
            },
	        handler: function(request,reply){
    	    	if (request.auth.isAuthenticated){
        			
                    //fetch the text, title and id from the payload (sent to the server via AJAX)
                    var payload = request.payload;
        			var id = payload.activeNoteId;
        			var text = payload.text;
                    var title = payload.title;

                    // get the users credentials/email
                    var g = request.auth.credentials;
                    console.log('id: ', id);


                    //find the user
                    User.findOne({email: g.email}, function(err,res){
                        
                        // loop through the users notes
                        res.notes.forEach(function(note,i){

                            //find the spesific note
                            if (note.id.toString() === id){

                                //change the text
                                note.text = text;
                                console.log('res.notes: ');
                                console.log(res.notes);
                                res.markModified('notes');

                                //save the updated
                                res.save(function(err){
                                    if (err){
                                    console.log(err);
                                    }
                                });
                                reply(res.notes);
                            }

                        });

                    });
                }
 	   		}	
    	}
    },{ 
        // check if the user that's logged in actually exists in the db. This function is no longer nessecary, so we should remove it. Will do it later.
    	method: 'GET',
    	path: '/user',
    	config: {
    		auth: {
	            strategy: 'session',
                mode: 'try'
            },
            handler: function(request,reply){
                // if user is authenticated
            	if (request.auth.isAuthenticated){
                	console.log('is authenticated');
                	var g = request.auth.credentials;
                	console.log('g is: ', g);

                // query the db for the user
            	User.findOne({email: g.email}, function(err,user){
				    if (err){
			       		throw err;
			       		console.log(err);	
				    }

                    // if the user is registered
            		if (user){ 
		        		console.log('user is: ', user);
						reply(user);

                    // if the user isn't registered
            		} else if (!user){
            			console.log('couldnt find user');
            		}
    
				});

                // if the user isnt authenticated
            	} else {
					console.log('request.auth.credentials: ', request.auth.credentials);
					reply('youre not authenticated');
				}
            }
    	}
    },{

        // for createing a new note. (When the user hits "save" in the /newnote page)
    	method: 'POST',
    	path: '/createnote',
    	config: {
    		auth: {
	            strategy: 'session',
                mode: 'try'
            },
            handler: function(request,reply){

                // if the user is authenticated
            	if (request.auth.isAuthenticated){

                    // fetch the relevant info from the payload
                    var payload = request.payload;
                    var text = payload.text;
                    var title = payload.title;
                    var g = request.auth.credentials;

                    // create a 'unique' id (not unique right now) for the new note 
            	   	var new_id = Math.floor(Math.random()*100000);

            		var today = moment().format("dddd, MMMM Do YYYY");

                    // deadline days
                    var oneday = moment().add(1, "days").format("dddd, MMMM Do YYYY");
                    var sevenday = moment().add(7, "days").format("dddd, MMMM Do YYYY");
                    var thirtyday = moment().add(30, "days").format("dddd, MMMM Do YYYY");

                    // setup the structure for the new note
            		var new_note = {
            			title: title,
            			text: text,
            			id: new_id,
            			date: today,
                        deadlines: [       
                            {day: oneday   , points: 0}, 
                            {day: sevenday , points: 0}, 
                            {day: thirtyday, points: 0}]
            		};

                    // find the user in the db 
                    var query = {email: g.email};

                    // push new_note to the user's note array 
                    var update = { $push: {"notes": new_note} };
                    var options = {new: true};

                    // do the stuff
                    User.findOneAndUpdate(query,update,options, function(err,user){
                        console.log('found and updated a user : ', user);   
                        reply(user.notes);
                    });  

            	}
            }
    	}
    }
	]);

});

module.exports = {
    server: server,
    User: User};