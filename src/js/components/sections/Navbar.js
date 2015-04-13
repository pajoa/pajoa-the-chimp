var React = require('react');

var Navbar = React.createClass({

render: function() { 
  return (
  <div className = 'container'>
  <div className = 'row'>
    <div className='col-md-12'>
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <a className="navbar-brand" href="#">Squish</a>
          </div>
          <div>
            <ul className="nav navbar-nav">
              <li className="active"><a href="#">Home</a></li>
              <li><a href="#">Notes</a></li>
              <li><a href="#">Notifications</a></li>
              <li><a href="#">Points</a></li>
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

