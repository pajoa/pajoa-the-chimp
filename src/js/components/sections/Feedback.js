var React = require('react');
var ActionCreators = require("../../actions/ActionCreators");
var Feedback = React.createClass({
    
    render: function() {
        return (
            <div>
            	<iframe className="feedback" src="http://goo.gl/forms/vqbeAaCrnB"></iframe>
            </div>
        );
    }
});

module.exports = Feedback;