var AppDispatcher   = require('../dispatcher/AppDispatcher');
var EventEmitter    = require('events').EventEmitter;
var assign          = require('object-assign');
var Constants       = require('../constants/Constants');
var ActionTypes     = Constants.ActionTypes;

var CHANGE_EVENT = "change";

//these represent their non-underscore counterpart, when they are in a 'changed' state
var _route = "Notes";
var _editNote = null;
var _activeNoteId = null;

var data = [{
    
    title: "my 1st note",
    text: "i love making notes",
    username: "neats",
		id: "123"
},{ 
    title: "my 2nd note",
    text: "i love making gssgnotes",
    username: "neats",
		id: "1234"
                
}, {
    title: "my 3rd note",
    text: "i love making ndfs/sotes",
    username: "neats",
		id: "12345"
}, 
{
    title: "my 4th note",
    text: "i love making ndfs/sotes",
    username: "neats",
		id: "123456"
} 
];

var AppStore = assign({}, EventEmitter.prototype, {
    
    getRoute: function() {
        console.log('getrouteTriggered: _route is:', _route);
        return _route;
    },
    
    getData: function() {
        return data;
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
    },
		
    getActiveNoteId: function() {
        return _activeNoteId;
    },
    
    editNote: function() {
        var i;
        var dataLength = data.length;
        for (i=0; i < dataLength; i++) {
            if (data[i].id === _activeNoteId) {
                data[i].text = data[i].text;
            }
        }
    }

});


AppDispatcher.register(function(action){
    
    switch (action.type) {
            
        case ActionTypes.NAVIGATE_TO:
            _route = action.route;
            console.log('_route is: ', _route);
            AppStore.emitChange();
            break;
        
        case ActionTypes.NAVIGATE_TO_A_NOTE:
            _activeNoteId = action.id;
            _route = action.route;
            AppStore.emitChange();
            break;
        
        case ActionTypes.EDIT_NOTE:
            data = action.value;
            AppStore.emitChange();
            break;
            
        default:
            console.log('default');
    }
});


module.exports = AppStore;

