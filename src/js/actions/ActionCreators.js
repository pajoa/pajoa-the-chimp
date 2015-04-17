var Constants = require('../constants/Constants');
var ActionTypes = Constants.ActionTypes;
var AppDispatcher = require('../dispatcher/AppDispatcher');
var APIUtils = require('../utils/APIUtils');

// these functions dispatch info to the store or passes the info on to APIUtils, if communications with the server/db is needed
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
        
    },

    createNote: function(info){
        APIUtils.createNote(info);
    }
    
};