var React = require('react');
var moment = require("moment");

var Day = React.createClass({

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
    var deadline = "Thu Apr 02 2015 00:00:00 GMT+0100 (BST)";
    var deadlineMomentFormat = moment(deadline).format("dddd, MMMM Do YYYY");
    console.log("deadline in moment format: ", deadlineMomentFormat);
    // console.log(this.props.day.day._d);
    if (this.props.day.day._d == deadline) {
      return (
        <div onClick={this._onClick} className={this.props.day.classes}>
          <span className='deadline'>{this.props.day.day.date()}</span>
        </div>
        );

    } else {
    return (
      <div onClick={this._onClick} className={this.props.day.classes}>
        <span className='day-number'>{this.props.day.day.date()}</span>
      </div>
    );
  }
  }
});

module.exports = Day;