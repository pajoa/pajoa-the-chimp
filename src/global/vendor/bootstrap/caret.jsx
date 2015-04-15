var Caret = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'caret'
    }, this.props);

    return (
      <span {...props}></span>
    );
  }
});

module.exports = Caret;
