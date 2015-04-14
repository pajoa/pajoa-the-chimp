var React = require('react');
var ActionCreators = require("../../actions/ActionCreators");
// var Calendar = React.createClass({

//   render: function() {
//     console.log("rendering function");
//   	return (
//   		<iframe src="https://www.google.com/calendar/embed?title=My%20Squish%20Timetbale&amp;height=600&amp;wkst=2&amp;bgcolor=%23FFFFFF&amp;src=week9project%40gmail.com&amp;color=%231B887A&amp;ctz=Europe%2FLondon" style=" border-width:0 " width="800" height="600" frameborder="0" scrolling="no"></iframe>
//   	);
//   }

// });


var Calendar = React.createClass({
    render: function() {
        return React.DOM.iframe({
            src: 'https://www.google.com/calendar/embed?src=week9project%40gmail.com&ctz=Europe/London',
            height: '600',
            width: '800',
            frameborder: 10,
            scrolling: 'no',
            onLoad: function() {console.log('react iframe loaded');},
        });
    }
});

window.onload = function() {
    React.renderComponent(Iframe(), document.getElementById("container"));
};




module.exports = Calendar;