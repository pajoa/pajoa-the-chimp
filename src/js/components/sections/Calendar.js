var React = require('react');
var ActionCreators = require("../../actions/ActionCreators");
var Calendar = React.createClass({

  render: function() {
    console.log("rendering function");
  	return (
  		<iframe src="https://www.google.com/calendar/embed?title=My%20Squish%20Timetbale&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=week9project%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>
  	);
  }

});

module.exports = Calendar;