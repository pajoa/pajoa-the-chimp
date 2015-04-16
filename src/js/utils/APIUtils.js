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
        console.log('AJAX done: here is res: ', res);
  			ServerActionCreators.editNote(res.body.notes);
  		});
 	},

  createNote: function(info){
    Request.post("/createnote")
      .send(info)
      .end(function(err,res) {
        console.log('AJAX done: here is res: ', res);
        ServerActionCreators.createNote(res.body);
      });
  }
}

