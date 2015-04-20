module.exports = {
	db: {
		dbuser: process.env.DBUSER 		   || require('./creds.json').database.dbuser,
		dbpwd: process.env.DBPWD 		   || require('./creds.json').database.dbpwd,
		dburl: process.env.DBURL 		   || require('./creds.json').database.dburl,
	
	},
	google: {
		password: process.env.GOOGLEPASSWORD || require('./creds.json').google.password,
		cKey: process.env.GOOGLECKEY 	   || require('./creds.json').google.cKey,
		cSecret: process.env.GOOGLESECRET  || require('./creds.json').google.cSecret
	},
	cookie: {
		password: process.env.COOKIESECRET || require('./creds.json').cookie.password
	}
};