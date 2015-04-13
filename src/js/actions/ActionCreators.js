var Constants = require('../constants/Constants.js');
var ActionTypes = Constants.ActionTypes;

module.exports = {
    
    navigateTo: function(info) {
        var route = info;
        AppDispatcher.dispatch({
            type: ActionTypes.NAVIGATE_TO,
            route: route
        })
    }
    
};