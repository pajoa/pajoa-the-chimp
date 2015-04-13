var React = require("react");
var Notes = require("./sections/Notes");
var Navbar = require('./sections/Navbar.js');

var SquishApp = React.createClass({
	
    getInitialState: function() {
        return {
            router: "notes"
        };
    },
    
	render: function() {
        if (this.state.router === "notes") {
            return(
                <div >
				    <Navbar />
				    <Notes />
				
			     </div>
            );
        }
    }
});

module.exports = SquishApp;