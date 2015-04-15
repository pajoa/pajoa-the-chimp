var keyMirror = require("react/lib/keyMirror");

module.exports = {
    
    ActionTypes: keyMirror({
        
        NAVIGATE_TO: null,
        NAVIGATE_TO_A_NOTE: null,
        EDIT_NOTE: null,
        
        //Server
        RECEIVE_USER: null

    })
};