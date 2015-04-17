var React = require("react");
var ActionCreators = require("../../actions/ActionCreators");
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var Link = Router.Link;

var NewNote = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    

    // triggered when the user hits 'save'
    createNote: function(){
        // pull the text and title from the DOM nodes
        var text = React.findDOMNode(this.refs.text).value;
        var title = React.findDOMNode(this.refs.title).value;
        var activeNoteId = this.context.router.getCurrentParams().noteId;

        // create an object to be sent with the ActionCreators.createNote()
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