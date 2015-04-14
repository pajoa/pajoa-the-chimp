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
    
    editNote: function(content) {
        AppDispatcher.dispatch({
            type: ActionTypes.EDIT_NOTE,
            value: content.value
        });
    }
    
};