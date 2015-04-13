var React = require("react");
var Notes = React.createClass({
    
    handleClick: function() {
        console.log("clicked");
    },
    
    render: function() {
        return(
            <div>
                <h1>Notes</h1>
                <input type="submit" onClick={this.handleClick} />
            </div>
        );
    }
});

module.exports = Notes;