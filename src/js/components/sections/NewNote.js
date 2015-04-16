var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

var NewNote = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    
    handleClick: function(event) {

    },

    createNote: function(){
        console.log('create note from NewNotes');
        var text = React.findDOMNode(this.refs.text).value;
        var title = React.findDOMNode(this.refs.title).value;
        console.log('text: ', text);
        console.log('title: ', title);
        var activeNoteId = this.context.router.getCurrentParams().noteId;

        var info = {
            text: text,
            title: title
        };
        ActionCreators.createNote(info);
    },
    
    render: function() {
        console.log('in newnote');
        return(
            <div className="container">
                <div className="noteBox">

                    <input ref="title" className="noteTextarea form-control" />
                    <hr/>
                    <textarea className="noteTextarea form-control" ref="text"></textarea>
                    <button className="glyphicon glyphicon-pencil"></button>
                    <Link to="SquishApp" onClick={this.createNote}><input className="saveButton form-control" type="submit" value="save"  /></Link>
                </div>
            </div>
        );
    }
});

module.exports = NewNote;