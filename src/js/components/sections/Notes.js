var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");

var Notes = React.createClass({
    handleClicker: function(e) {
        console.log("clicking to a single note");
            var info = {
                route: "SingleNote",
                id: e.target.name
            };
        ActionCreators.navigateToANote(info);
    },

    createNote: function(){
        ActionCreators.createNote();
    },
		
    render: function() {
//				var arraysOfThree = [];
//				var notesArray = this.props.data;
//				var i = 0;
//				for (j=notesArray.length; i < j; i+=3) {
//						tempArray = notesArray.slice(i, i+3);
//						arraysOfThree.push(tempArray);
//				}
				
        console.log('data in notes: ',this.props.data);
        var self = this;
        var notes = this.props.data.map(function(note){
            return (
                <div key={note.text} className="col-md-4 col-sm-6 col-xs-12 col-lg-3">
                    <div className="notesCard">
                        <div className="notesCardTitle"><h3><a className="noteTitle" name={note.id} href="#" onClick={self.handleClicker}>{note.title}</a></h3></div>
                        <div className="notesCardText"><p>{note.text}</p></div>
                    </div>
                </div>
            );
        });
        
        return (
            <div className="row">
            <button onClick={this.createNote} className="glyphicon glyphicon-plus"></button>
            <div>{notes}</div>
            </div>
        );
		}
});

module.exports = Notes;