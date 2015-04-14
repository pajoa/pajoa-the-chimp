var AppDispatcher   = require('../dispatcher/AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');
var Constants       = require('../constants/Constants');
var ActionTypes     = Constants.ActionTypes;

var CHANGE_EVENT = "change";

//these represent their non-underscore counterpart, when they are in a 'changed' state
var _route = "Notes";


var AppStore = assign({}, EventEmitter.prototype, {
    
    getRoute: function() {
        console.log('getrouteTriggered: _route is:', _route);
        return _route;
    },
    
    emitChange: function() {
        console.log("emitting change");
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
        console.log('addChangeListener triggered');
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    }

});


AppDispatcher.register(function(action){
    
    switch (action.type) {
            
        case ActionTypes.NAVIGATE_TO:
            _route = action.route;
            console.log('_route is: ', _route);
            AppStore.emitChange();
            break;

        default:
            console.log('default');
    }
});


module.exports = AppStore;

