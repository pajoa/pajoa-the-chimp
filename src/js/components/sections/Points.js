var React = require('react');
var ActionCreators = require("../../actions/ActionCreators");
var Points = React.createClass({
    
    render: function() {
    console.log("this is points: ", this.props);
        return (
            <div>
            	<h1>Points Dashboard</h1>
            		<h4>Welcome to your Points Dashboard, where you can keep an eye on how well you are doing</h4>
            	<img src="../img/trophy.png" className="points" />
            </div>
        );
    }
});

module.exports = Points;