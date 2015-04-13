var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");
var Notes = React.createClass({
    
    handleClick: function() {
        
        var view = "singleNote";
        ActionCreators.navigateTo(view);
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