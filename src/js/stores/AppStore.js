var AppDispatcher = require("../actions/ActionCreators");
var assign = require("object-assign");
var CHANGE_EVENT = "change";

//these represent their non-underscore counterpart, when they are in a 'changed' state
var _route = null;

var AppStore = assign({}, EventEmitter.prototype, {
    
    getRoute: function() {
        return _route;
    },
    
    emitChange: function() {
        console.log("emitting change");
        this.emit(CHANGE_EVENT);
    }
    
});

AppDispatcher.register(function(action){
    
    switch (action.type) {
            
        case ActionTypes.NAVIGATE_TO:
            _route = action.route;
            AppStore.emitChange();
            break;
    }
});
