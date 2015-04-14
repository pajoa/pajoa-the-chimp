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
		
    render: function() {
//        console.log("notes render func");
        var self = this;
        var notes = this.props.data.map(function(note){
            return (
                    <div key={note.title} className="col-md-4 col-sm-6 col-xs-12 col-lg-3">
                        <h3><a name={note.id} onClick={self.handleClicker}>{note.title}</a></h3>
                        <p>{note.text}</p>
                    </div>
				);
        });
        
        return (
            <div>{notes}</div>
        );
    }
});

module.exports = Notes;