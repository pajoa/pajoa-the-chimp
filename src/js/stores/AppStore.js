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
var _user = null;
var data = [];

var AppStore = assign({}, EventEmitter.prototype, {
    
    getRoute: function() {
        return _route;
    },

    getUser: function(){
        return _user;
    },
    
    getData: function() {
        return data;
    },
    
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback)
    },

    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
		
    getActiveNoteId: function() {
        return _activeNoteId;
    }
    
});


AppDispatcher.register(function(action){
    
    switch (action.type) {
            
        case ActionTypes.NAVIGATE_TO:
            _route = action.route;
            AppStore.emitChange();
            break;
        
        case ActionTypes.NAVIGATE_TO_A_NOTE:
            _activeNoteId = action.id;
            _route = action.route;
            AppStore.emitChange();
            break;
        case ActionTypes.RECEIVE_USER:
            console.log('user.notes in AppStore: ', action.user.notes);
            data = action.user.notes;
            _user = action.user.email;
            console.log(_user);
            AppStore.emitChange();
            break;
        
        case ActionTypes.EDIT_NOTE:
            data = action.data;
            AppStore.emitChange();
            break;
            
        default:
            console.log('default');
    }
});


module.exports = AppStore;

