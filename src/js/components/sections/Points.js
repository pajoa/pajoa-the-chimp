var React = require('react');
var ActionCreators = require("../../actions/ActionCreators");
var AppStore = require("../../stores/AppStore");
var Points = React.createClass({
    
    render: function() {
    console.log("this is points: ", this.props.points);
        return (
            <div>
            	<h1>Points Dashboard</h1>
            		<h4 className="pointsTitle">Welcome to your Points Dashboard, where you can keep an eye on how well you are doing</h4>
                    <img src="../img/trophy.png" className="points" />
            	<div className="myPoints">
                    <h2>{this.props.points}</h2>
                    <h4>POINTS</h4>
                </div>
            </div>
        );
    }
});

module.exports = Points;