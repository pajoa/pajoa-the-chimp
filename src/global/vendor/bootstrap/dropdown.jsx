var Dropdown = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'dropdown'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Dropdown;
