var Row = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'row'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Row;
