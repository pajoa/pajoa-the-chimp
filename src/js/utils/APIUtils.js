var Request = require("superagent");
var ServerActionCreators = require('../actions/ServerActionCreators');
module.exports = {

  fetchUserFromDB: function(username) {

	var userObj = {
		username: username
	};

	Request.get("/user")
		.end(function(err, res) {
				console.log('AJAX response: ',res);
				ServerActionCreators.receiveUser(res.body);
		});
  }
}
