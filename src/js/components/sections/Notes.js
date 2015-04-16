var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;


var Notes = React.createClass({
    handleClicker: function(e) {
        console.log("clicking to a single note");
            var info = {
                route: "SingleNote",
                id: e.target.name
            };
        ActionCreators.navigateToANote(info);
    },

		
    render: function() {
        console.log('data in notes: ',this.props.data);
        var self = this;
        var notes = this.props.data.map(function(note){
            return (
                <div key={note.id} className="col-md-4 col-sm-6 col-xs-12 col-lg-3">
                    <div className="notesCard">
                        <div className="notesCardTitle"><h3><a className="noteTitle" href={"/#/" + note.id} name={note.id}>{note.title}</a></h3></div>
                        <div className="notesCardText"><p>{note.text}</p></div>
                    </div>
                </div>
            );
        });
        
        return (
            <div className="row">
            <div>{notes}</div>
            </div>
        );
    }
});

module.exports = Notes;