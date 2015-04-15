var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");

var SingleNote = React.createClass({

    handleClick: function(event) {
        var text = React.findDOMNode(this.refs.text).value;
        var activeNoteId = this.props.activeNoteId;

        console.log(text);
        var edit = {
            text: text,
            activeNoteId: activeNoteId
        };
        ActionCreators.editNote(edit);
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
        return(
            <div className="container">
                <div className="noteBox">
                    <input value={activeNote.title} />
                    <hr/>
                    <textarea className="noteTextarea form-control" ref="text" defaultValue={activeNote.text}></textarea>
                    <button className="glyphicon glyphicon-pencil"></button>
                    <input className="saveButton form-control" type="submit" value="save" onClick={this.handleClick} />
                </div>
            </div>
        );
    }
});

module.exports = SingleNote;