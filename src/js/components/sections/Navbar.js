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

  return (
    <div className = 'container'>
    <div className = 'row'>
      <div className='col-md-12'>
        <nav className="navbar navbar-default">
          <div className="container-fluid">
            <div className="navbar-header">
              <a className="navbar-brand" name="Notes" onClick={this.handleClick}>Squish</a>
            </div>
            <div>
              <ul className="nav navbar-nav">
                <li><a name="Calendar" onClick={this.handleClick}>Calendar</a></li>
                <li><a name="Points" onClick={this.handleClick}>Points</a></li>
                <li><a name="Notifications" onClick={this.handleClick}>Notifications</a></li>
                <li><a name="Logout" onClick={this.handleClick}>Logout</a></li>

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

