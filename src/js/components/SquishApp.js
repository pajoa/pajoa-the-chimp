var React          = require("react");
var Notes          = require("./sections/Notes");
var Navbar         = require('./sections/Navbar');
var Footer         = require("./Sections/Footer");
var SingleNote     = require("./sections/SingleNote");
var AppStore       = require('../stores/AppStore');
var Calendar       = require('./sections/Calendar');
var ActionCreators = require('../actions/ActionCreators');

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
        this.setState(getStateFromStore());
    },
    
	render: function() {
        if (this.state.route === "Notes") {
            return(
                <div>
                    <div className="container">
				        <Navbar user={this.state.user} />
				        <Notes data={this.state.data}/>
                    </div>
                    <div className="container-fluid">
                        <Footer />
                    </div>
                </div>
            );
        }
        
        else if (this.state.route === "SingleNote"){
            return (
                <div>
                    <div className="container">
                        <Navbar user={this.state.user}/>
                        <SingleNote data={this.state.data} activeNoteId={this.state.activeNoteId} />
                    </div>
                    <div className="container-fluid">
                        <Footer />
                    </div>
                </div>
                );
            
        } else if (this.state.route ==="Calendar"){
            return (
                <div>
                    <div className="container">
                        <Navbar user={this.state.user}/>
                        <h1> My Squish Calendar </h1>
                        <Calendar />
                    </div>
                    <div className="container-fluid">
                        <Footer />
                    </div>
                </div>
                );
        } else if (this.state.route ==="Notifications"){
            return (
                <div>
                    <div className="container">
                        <Navbar user={this.state.user}/>
                        <h1>Notifications</h1>
                 </div>
                <div className="container-fluid">
                    <Footer />
                    </div>
                </div>
                );
        } else if (this.state.route ==="Logout"){
            return (
                <div>
                    <div className="container">
                        <Navbar user={this.state.user}/>
                        <h1>Logout</h1>
                    </div>
                <div className="container-fluid">
                        <Footer />
                    </div>
                </div>
                );
        } else if (this.state.route ==="Points"){
            return (
                <div>
                <div className="container">
                    <Navbar user={this.state.user}/>
                    <h1>Points</h1>
                </div>
                <div className="container-fluid">
                        <Footer />
                    </div>
                </div>
         );
        }


    }
});

module.exports = SquishApp;