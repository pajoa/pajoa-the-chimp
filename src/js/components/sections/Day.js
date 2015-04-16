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
    var deadline = ["Thu Apr 02 2015 00:00:00 GMT+0100 (BST)", "Thu Apr 30 2015 00:00:00 GMT+0100 (BST)"];
//    var deadlineMomentFormat = moment(deadline).format("dddd, MMMM Do YYYY");
//    console.log("deadline in moment format: ", deadlineMomentFormat);
     var self = this;
//      console.log(this.props.day.day._d);
    var deadlineday = deadline.map(function(index){
            if (self.props.day.day._d == index) {
                return (
                    <div onClick={self._onClick} className={self.props.day.classes}>
                        <span className='deadline'>{self.props.day.day.date()}</span>
                    </div>
                );
            } else {
                return (
                  <div onClick={self._onClick} className={self.props.day.classes}>
                    <span className='day-number'>{self.props.day.day.date()}</span>
                  </div>
                );
            }
        });

    return (
        <div>
            {deadlineday}
        </div>  
        );
    }
});


module.exports = Day;