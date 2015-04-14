var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");

var SingleNote = React.createClass({

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
            <div>
                <h1>{activeNote.title}</h1>
				<p>{activeNote.text}</p>
            </div>
        );
    }
});

module.exports = SingleNote;