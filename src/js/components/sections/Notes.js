var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

 function getStateFromStore() {
      
    var route = AppStore.getRoute(); 
    var data = AppStore.getData();
    var activeNoteId = AppStore.getActiveNoteId();
    var user = AppStore.getUser();
     
    return {
        route: route,
        data: data,
        activeNoteId: activeNoteId,
        user: user
    };
}

var Notes = React.createClass({

    render: function() {
        console.log('data in notes: ',this.props.data);
        var self = this;

        var notes = this.props.data.map(function(note){
            maxLengthtext = 100;
            maxLengthtitle = 20;
            var ret = note.text;
            var rett = note.title;
            if (ret.length > maxLengthtext) {
                ret = ret.substr(0,maxLengthtext-1) + "...";
            }
            if (rett.length > maxLengthtitle) {
                rett = ret.substr(0,maxLengthtitle-1) + "...";
            }


            return (
                <div key={note.id} className="col-md-4 col-sm-6 col-xs-12 col-lg-4">
                    <div className="notesCard">
                        <div className="notesCardTitle">
                            <h3><a className="noteTitle" href={"/#/" + note.id} name={note.id}>{rett}</a></h3>
                        </div>
                        <div className="notesCardText"><p>{ret}</p></div>
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