var AppDispatcher = require("../actions/ActionCreators");
var assign = require("object-assign");
var CHANGE_EVENT = "change";

var AppStore = assign({}, EventEmitter.prototype, {
    
    emitChange: function() {
        console.log("emitting change");
        this.emit(CHANGE_EVENT);
    }
});