var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");

var SingleNote = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    
    handleClick: function(event) {
        var text = React.findDOMNode(this.refs.text).value;
        var activeNoteId = this.context.router.getCurrentParams().noteId;


        console.log(text);
        var edit = {
            text: text,
            activeNoteId: activeNoteId
        };
        ActionCreators.editNote(edit);
    },
    
    render: function() {
        console.log('in single note');
        var activeNoteId = this.context.router.getCurrentParams().noteId;
        var i;
        var data = this.props.data;
        var dataLength = data.length;

        for (i=0; i < dataLength; i++) {
            if (data[i].id.toString() === activeNoteId) {
                var activeNote = data[i];
            }
        }
        return(
            <div className="container">
                <div className="noteBox">
                    <input placeholder="Enter title here" className="noteTextarea form-control" value={activeNote.title} />
                    <h4 className="noteHeading">Title:</h4>
                    <input className="noteTextarea form-control" value={activeNote.title} />
                    <h4 className="noteHeading">Body:</h4>
                    <textarea className="noteTextarea form-control" ref="text" defaultValue={activeNote.text}></textarea>
                    <input className="saveButton form-control" type="submit" value="save" onClick={this.handleClick} />
                </div>
            </div>
        );
    }
});

module.exports = SingleNote;