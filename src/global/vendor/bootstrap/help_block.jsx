var HelpBlock = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'help-block'
    }, this.props);
    return (
      <p {...props}>
        {this.props.children}
      </p>
    );
  }
});

module.exports = HelpBlock;
