var React = require("react");
var Navbar = require('./sections/Navbar.js');

var SquishApp = React.createClass({
	
	render: function() {
		return(
			<div >
				<Navbar />
				<h1>I love React</h1>
				
			</div>
		);
	}
});

module.exports = SquishApp;