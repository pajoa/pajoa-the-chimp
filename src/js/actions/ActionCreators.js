var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;
var AppDispatcher = require('../dispatcher/AppDispatcher');
module.exports = {
    
    navigateTo: function(info) {
        var route = info;
        AppDispatcher.dispatch({
            type: ActionTypes.NAVIGATE_TO,
            route: route
        });
    }, 
		
		navigateToANote: function(info) {
				AppDispatcher.dispatch({
						type: ActionTypes.NAVIGATE_TO_A_NOTE,
						route: info.route,
						id: info.id
				});
		},
    
    saveNote: function(content) {
        var saveNoteObj = {
            username: content.username,
            title: content.title,
            text: content.text,
            date: new Date()  
        };
        AppDispatcher.dispatch({
            type: ActionTypes.SAVE_NOTE,
            route: saveNoteObj
        });
    }
    
};