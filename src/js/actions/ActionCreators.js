var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var APIUtils = require('../utils/APIUtils');

module.exports = {
    
    navigateTo: function(info) {
        var route = info;
        AppDispatcher.dispatch({
            type: ActionTypes.NAVIGATE_TO,
            route: route
        });
    },

    fetchUserFromDB: function(){
        APIUtils.fetchUserFromDB();
    },
		
    navigateToANote: function(info) {
        AppDispatcher.dispatch({
            type: ActionTypes.NAVIGATE_TO_A_NOTE,
            route: info.route,
            id: info.id
        });
    },
    
    editNote: function(content) {
        console.log('APIUtils.editnote to be triggered');
        APIUtils.editNote(content);
        
    }
    
};