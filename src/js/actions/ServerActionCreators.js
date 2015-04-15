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
	receiveNewNoteID: function(data){
		AppDispatcher.dispatch({
			type: ActionTypes.NAVIGATE_TO_A_NOTE,
			route: data.route,
			id: data.id
		});
	} 
}