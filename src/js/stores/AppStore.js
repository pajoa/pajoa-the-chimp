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
var _points = null;
var AppStore = assign({}, EventEmitter.prototype, {
    

    
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },

    // this enables React to listen for when the store is updated, so that React can update its state accordingly.
    // this event listener is called on the initial rendering of SquishApp.js
    addChangeListener: function(callback){
        this.on(CHANGE_EVENT, callback);
    },

    // removing the eventlistener when were leaving the page (cleaning up after us.)
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT, callback);
    },
		
    getActiveNoteId: function() {
        return _activeNoteId;

    },

    getPoints: function(){
        return _points;
    },

    // is not used anymore, so we should remove it.
    getRoute: function() {
        return _route;
    },

    getUser: function(){
        return _user;
    },
    
    getData: function() {
        return data;
    },
    
});


// listen for what ActionCreators and ServerActionCreators are dispatching. 
// Each swhich statement updates the store and calls AppStore.emitChange().
// When SquishApp hears this, it updates its state according to the store.

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
            data = action.user.notes;
            _user = action.user.email;
            _points = action.user.points;
            console.log(_user);
            AppStore.emitChange();
            break;

        case ActionTypes.CREATE_NOTE:
            data = action.data;
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

