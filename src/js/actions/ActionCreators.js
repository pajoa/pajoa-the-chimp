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
    }
    
};