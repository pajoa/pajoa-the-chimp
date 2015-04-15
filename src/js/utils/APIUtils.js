var Request = require("superagent");
var ServerActionCreators = require('../actions/ServerActionCreators');

module.exports = {

  fetchUserFromDB: function(username) {

	var userObj = {
		username: username
	};

	Request.get("/user")
		.end(function(err, res) {
				ServerActionCreators.receiveUser(res.body);
		});
  },

  editNote: function(content){
  	console.log('edit note triggered');
  	Request.post("/editnote")
  		.send(content)
  		.end(function(err, res){
  			if (err){
  				console.log(err);
  				throw err;
  			}
  			ServerActionCreators.editNote(content);
  		});
 	}
}

