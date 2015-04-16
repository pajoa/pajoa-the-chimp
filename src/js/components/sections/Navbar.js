var React = require('react');
var ActionCreators = require("../../actions/ActionCreators");
var Navbar = React.createClass({

  handleClick: function(e) {
    e.preventDefault();
    view = e.target.name;
    console.log('e.target.name: ', e.target.name);
    ActionCreators.navigateTo(view);
  },

  render: function() {
    var user = this.props.user;
    console.log('user is', user);
		var loginButton;
			if (this.props.user) {
				loginButton = <li><a href="/logout">Logout</a></li>;
			} else {
				loginButton = <li><a href="/google">Login</a></li>;
			}
		
  return (
    <div className = 'container'>
    <div className = 'row'>
      <div className='col-md-12'>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" name="Notes" href="" onClick={this.handleClick}>Squish </a>
            </div>
            <div>
              <ul className="nav navbar-nav">
                <li><a name="Calendar" href="" onClick={this.handleClick}>Calendar</a></li>
              </ul>
              <ul className="nav navbar-nav navbar-right">  
                <li><a >{this.props.user}</a></li>
                <li><a className="glyphicon glyphicon-tower" name="Points" href="" onClick={this.handleClick}></a></li>
                <li><a className="glyphicon glyphicon-bell" name="notifications" href="" onClick={this.handleClick}></a></li>
                {loginButton}
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </div>
  </div>);
    }
});

module.exports = Navbar;

