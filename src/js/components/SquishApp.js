var React          = require("react");
var Notes          = require("./sections/Notes");
var Footer         = require("./sections/Footer");
var SingleNote     = require("./sections/SingleNote");
var AppStore       = require('../stores/AppStore');
var Calendar       = require('./sections/Calendar');
var Router = require('react-router'); // or var Router = ReactRouter; in browsers
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var Route = Router.Route;
var RouteHandler = Router.RouteHandler;
var ActionCreators = require('../actions/ActionCreators');
var NewNote = require("./sections/NewNote");
var Feedback = require("./sections/Feedback");
var Points = require("./sections/Points");


function getStateFromStore() {
      
    var route = AppStore.getRoute(); 
    var data = AppStore.getData();
    var activeNoteId = AppStore.getActiveNoteId();
    var user = AppStore.getUser();
    var points = AppStore.getPoints();

    return {
        route: route,
        data: data,
        activeNoteId: activeNoteId,
        user: user,
        points: points
    };
}

var SquishApp = React.createClass({
    
    getInitialState: function() {
      return getStateFromStore();
    },  

    // hook up the event listener, so that is listens for canges in the store 
    componentDidMount: function(){
        AppStore.addChangeListener(this._onChange);
        ActionCreators.fetchUserFromDB();

    },

    // remove the even listener when the user is leaving the site
    componentWillUnmount: function(){
        AppStore.removeChangeListener(this._onChange);
    },

    // this is called every time is hears that the store has been updated. _onChange then updates the state according to the new store data.
    _onChange: function(){
        this.setState(getStateFromStore());
    },

    render: function(){
        console.log('points: ', this.state.points);
        var user = this.state.user;
        console.log('user: ', user);
        console.log('data is: ', this.state.data);
        var loginButton;
            if (this.state.user) {
                loginButton = <li><a href="/logout">Log out</a></li>;
            } else {
                loginButton = <li><a href="/google">Login</a></li>;
            }

        return (
            <div>
                <div className ='container'>
                    <div className = 'row'>
                      <div className='col-md-12'>
                        <nav className="navbar navbar-default">
                          <div className="container-fluid">
                            <div className="navbar-header">
                                <Link to="SquishApp" title="Home" className="navbar-brand">Squish</Link>
                            </div>
                            <div>
                              <ul className="nav navbar-nav">
                                <li><Link to="calendar" title="Calendar" className="glyphicon glyphicon-calendar"></Link></li>
                                <li><Link to="newnote" title="Create Note" className="glyphicon glyphicon-plus"></Link></li>
                              </ul>
                              <ul className="nav navbar-nav navbar-right">  
                                <li><a >{user}</a></li>
                                <li><Link to="points" title="Points Dashboard" className="glyphicon glyphicon-tower" name="Points">{this.state.points}</Link></li>
                                <li><Link to="feedback" title="Feedback" className="Feedback">Feedback</Link></li>
                                {loginButton}
                              </ul>
                            </div>
                          </div>
                        </nav>
                      </div>
                    </div>
                  <RouteHandler data={this.state.data} user={this.state.user} points={this.state.points}/>
                </div>
                <div className="container-fluid">
                    <Footer />
                </div>
            </div>
            );
    }  
});


// Routes are added here: the handler refers to the React component, and the name to the url
var routes = (
    <Route name="SquishApp" path="/" handler={SquishApp}>
        <Route name="newnote" handler={NewNote} />       
        <Route name="calendar" handler={Calendar} />
        <Route name="points" handler={Points} />
        <Route name="feedback" handler={Feedback} />
        <Route name=":noteId" handler={SingleNote} />
        <DefaultRoute handler={Notes} />
    </Route>
    );


// Add Router.HistoryLocation to remove the urgy hash from the URL, bur then the dynamic urls dont work...
Router.run(routes , function(Handler){
    React.render(<Handler/>, document.body);
});

module.exports = SquishApp;