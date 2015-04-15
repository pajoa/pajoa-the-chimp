var ButtonToolbar = React.createClass({
  render: function() {
    var props = React.mergeProps({
      role: 'toolbar',
      className: 'btn-toolbar'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = ButtonToolbar;
