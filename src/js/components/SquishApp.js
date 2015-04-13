var React = require("react");
var Notes = require("./sections/Notes");
var Navbar = require('./sections/Navbar.js');

function getStateFromStore() {
    
    var route = AppStore.getRoute();
    
    return {
        route: route;
    }
}


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