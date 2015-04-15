var Static = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'form-control-static'
    }, this.props);
    return (
      <p {...props}>
        {this.props.children}
      </p>
    );
  }
});

module.exports = Static;
