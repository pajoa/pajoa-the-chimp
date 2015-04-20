'use strict';

var React = require('react');

var Day = React.createClass({displayName: "Day",

  getDefaultProps: function() {
    return {
      classes: ''
    };
  },

  _onClick: function() {
    if (this.props.onClick)
      this.props.onClick(this.props.day.day);
  },

  render: function() {
    return (
      React.createElement("div", {onClick: this._onClick, className: this.props.day.classes}, 
        React.createElement("span", {className: "day-number"}, this.props.day.day.date())
      )
    );
  }
});

module.exports = Day;
