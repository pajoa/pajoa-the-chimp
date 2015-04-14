var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");

var SingleNote = React.createClass({

    handleClick: function(event) {
        var text = React.findDOMNode(this.refs.text).value;
        console.log(text);
        var edit = {
            text: text
        };
        ActionCreators.navigateToANote(edit);
    },
    
//    handleSave: function(text, id) {
//        if (id) {
//        }
//    },
    
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
        return(
            <div className="container">
                <h1>{activeNote.title}</h1>
				<textarea ref="text" defaultValue={activeNote.text}></textarea>
                <button>edit</button>
                <input type="submit" value="save" onClick={this.handleClick} />
            </div>
        );
    }
});

module.exports = SingleNote;