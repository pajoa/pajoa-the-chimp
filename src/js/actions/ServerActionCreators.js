var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;
var AppDispatcher = require('../dispatcher/AppDispatcher');


// these functions are called from APIUtils, after we have talked to the server/db
// they all dispatch info to the store.
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
		AppDispatcher.dispatch({
			type: ActionTypes.CREATE_NOTE,
			data: data
		});
	},

	claimPoints: function(data){
		AppDispatcher.dispatch({
			type: ActionTypes.CLAIM_POINTS,
			data: data.notes,
			points: data.points
		});
	}
}