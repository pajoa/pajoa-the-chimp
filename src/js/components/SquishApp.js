var React = require("react");
var Notes = require("./sections/Notes");
var Navbar = require('./sections/Navbar');
var SingleNote = require("./sections/SingleNote");
var AppStore = require('../stores/AppStore');
var Calendar = require('./sections/Calendar');
<<<<<<< HEAD
var ActionCreators = require('../actions/ActionCreators');
=======
>>>>>>> master

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

var SquishApp = React.createClass({
	
    getInitialState: function() {
      return getStateFromStore();
    },  

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
        ActionCreators.fetchUserFromDB();
    },

    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    _onChange: function(){
        console.log('onchange triggered');
        this.setState(getStateFromStore());
    },
    
		render: function() {
        console.log('SquishApp component');

        if (this.state.route === "Notes") {
            return(
                <div className="container">
<<<<<<< HEAD
				    <Navbar user={this.state.user} />
=======
				    <Navbar />
>>>>>>> master
				    <Notes data={this.state.data}/>
			     </div>
            );
        }
        
        else if (this.state.route ==="SingleNote"){
            return (
                <div className="container">
                    <Navbar />
                    <SingleNote data={this.state.data} activeNoteId={this.state.activeNoteId} />
                 </div>
                );
            
        } else if (this.state.route ==="Calendar"){
            return (
                <div className="container">
                    <Navbar />
                    <Calendar />
<<<<<<< HEAD
                 </div>
=======
                </div>
>>>>>>> master
                );
        } else if (this.state.route ==="Notifications"){
            return (
                <div className="container">
                    <Navbar />
                    <h1>Notifications</h1>
                 </div>
                );
        } else if (this.state.route ==="Logout"){
            return (
                <div className="container">
                    <Navbar />
                    <h1>Logout</h1>
                 </div>
                );
        } else if (this.state.route ==="Points"){
            return (
                <div className="container">
                    <Navbar />
                    <h1>Points</h1>
                 </div>
         );
        }


    }
});

module.exports = SquishApp;