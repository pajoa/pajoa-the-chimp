var React = require("react");
var Notes = require("./sections/Notes");
var Navbar = require('./sections/Navbar');
var SingleNote = require("./sections/SingleNote");
var AppStore = require('../stores/AppStore');
var Calendar = require('./sections/Calendar');

function getStateFromStore() {
    
    var route = AppStore.getRoute(); 
    
    return {
        route: route
    };
}

var SquishApp = React.createClass({
	
    getInitialState: function() {
      return getStateFromStore();
    },

    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
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
                <div >
				    <Navbar />
				    <Notes />
			     </div>
            );
        }
        
        else if (this.state.route ==="SingleNote"){
            return (
                <div >
                    <Navbar />
                    <SingleNote />
                 </div>
                );
        } else if (this.state.route ==="Calendar"){
            return (
                <div >
                    <Navbar />
                    <h1>Calendar</h1>
                    <Calendar />
                 </div>
                );
        } else if (this.state.route ==="Notifications"){
            return (
                <div >
                    <Navbar />
                    <h1>Notifications</h1>
                 </div>
                );
        } else if (this.state.route ==="Logout"){
            return (
                <div >
                    <Navbar />
                    <h1>Logout</h1>
                 </div>
                );
        } else if (this.state.route ==="Points"){
            return (
                <div >
                    <Navbar />
                    <h1>Points</h1>
                 </div>
         );
        }


    }
});

module.exports = SquishApp;