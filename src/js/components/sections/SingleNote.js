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

    claimPoints: function(deadlineObject,activeNoteId){
        var content = {
            deadlineObject: deadlineObject,
            activeNoteId: activeNoteId
        }
        ActionCreators.claimPoints(content);
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
        activeNote.deadlines.forEach(function(deadline){
            if (deadline.day === today && deadline.points === 0){
                todayIsDeadlineDay = true;
                deadlineObject = deadline;
            }
        });

        if (todayIsDeadlineDay === true){
            claimPointsButton = <input type="submit" className="form-control"   value="Claim point!" onClick={this.claimPoints.bind(null,deadlineObject,activeNoteId)} />;
        };

        if(activeNote.deadlines[0].points === 0) {
            firstD = "";
        } else if(activeNote.deadlines[0].points === -5){
            firstD = "✘";
        }else{
            firstD = "✔";
        };

        if(activeNote.deadlines[1].points === 0) {
            secondD = "";
        } else if(activeNote.deadlines[1].points === -5){
            secondD = "✘";
        }else{
            secondD = "✔";
        };

        if(activeNote.deadlines[2].points === 0) {
            thirdD = "";
        } else if(activeNote.deadlines[2].points === -5){
            thirdD = "✘";
        }else{
            thirdD = "✔";
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
                        <span className="record">{firstD}{secondD}{thirdD}</span>
                    <input className="saveButton form-control" type="submit" value="save" onClick={this.handleClick} />
					</div>
                </div>
            </div>
        );
    }
});

module.exports = SingleNote;