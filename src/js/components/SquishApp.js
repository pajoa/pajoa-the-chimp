var React = require("react");
var Notes = require("./sections/Notes");

var SquishApp = React.createClass({
	
    getInitialState: function() {
        return {
            router: "notes"
        };
    },
    
	render: function() {
        if (this.state.router === "notes") {
            return(
                <Notes />
            );
        }
    }
});

module.exports = SquishApp;
