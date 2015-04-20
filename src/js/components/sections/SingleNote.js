var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");
var moment = require("moment");


var SingleNote = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    
    handleClick: function(event) {
        // when someone clicks "save", this function is triggered
        var text = React.findDOMNode(this.refs.text).value;
        var activeNoteId = this.context.router.getCurrentParams().noteId;
        console.log(text);
        var edit = {
            text: text,
            activeNoteId: activeNoteId
        };
        ActionCreators.editNote(edit);
    },

    claimPoint: function(deadlineObject,activeNoteId){
        var content = {
            deadlineObject: deadlineObject,
            activeNoteId: activeNoteId
        }
        ActionCreators.claimPoint(content);
    },
    
    render: function() {
        var activeNoteId = this.context.router.getCurrentParams().noteId;
        var i;
        var data = this.props.data;
        var dataLength = data.length;

        // find the actual note to show. activeNoteId is pulled from the URL
        for (i=0; i < dataLength; i++) {
            if (data[i].id.toString() === activeNoteId) {
                var activeNote = data[i];
            }
        }
        var claimPointsButton;
        var todayIsDeadlineDay = false;
        var today = moment().format("dddd, MMMM Do YYYY");
        var deadlineObject;
        console.log('in single note. activeNote: ', activeNote);
        activeNote.deadlines.forEach(function(deadline){
            if (deadline.day === today){
                todayIsDeadlineDay = true;
                deadlineObject = deadline;
            }   
        });

        if (todayIsDeadlineDay === true){
            claimPointsButton = <input type="submit" value="Claim point!" onClick={this.claimPoint.bind(null,deadlineObject,activeNoteId)} />;
        };

        return(
            <div className="container">
                <div className="noteBox">
                    <h4 className="noteHeading">Title:</h4>
                    <input className="noteInput form-control" value={activeNote.title} />
                    <h4 className="noteHeading">Body:</h4>
                    <textarea className="noteTextarea form-control" ref="text" defaultValue={activeNote.text}></textarea>
					<div className="row">
                    {claimPointsButton}
                    <input className="saveButton form-control" type="submit" value="save" onClick={this.handleClick} />
					</div>
                </div>
            </div>
        );
    }
});

module.exports = SingleNote;