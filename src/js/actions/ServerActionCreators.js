var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;
var AppDispatcher = require('../dispatcher/AppDispatcher');

module.exports = {

	receiveUser: function(user){
		AppDispatcher.dispatch({
			type: ActionTypes.RECEIVE_USER,
			user: user
		});
	},

	editNote: function(data){
		AppDispatcher.dispatch({
            type: ActionTypes.EDIT_NOTE,
            data: data
        });
	},

	createNote: function(data){
		console.log('data in serveraC: ', data);
		AppDispatcher.dispatch({
			type: ActionTypes.CREATE_NOTE,
			data: data
		});
	} 
}