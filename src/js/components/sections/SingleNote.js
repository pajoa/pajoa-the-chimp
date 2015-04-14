var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");

var SingleNote = React.createClass({

    handleClick: function(e) {
        var info = {
            value: e.target.value
                   
        };
        
    },
    
    render: function() {
        var i;
        var data = this.props.data;
        var dataLength = data.length;
        var activeNoteId = this.props.activeNoteId;

        for (i=0; i < dataLength; i++) {
            if (data[i].id === activeNoteId) {
                var activeNote = data[i];
            }
        }
        var self = this;
        return(
            <div className="container">
                <h1>{activeNote.title}</h1>
				<textarea defaultValue={activeNote.text}></textarea>
                <button>edit</button>
                <input type="submit" value="save" onClick={self.handleClick} />
            </div>
        );
    }
});

module.exports = SingleNote;