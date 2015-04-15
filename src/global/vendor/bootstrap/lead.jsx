var Lead = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'lead'
    }, this.props);

    return (
      <p {...props}>
        {this.props.children}
      </p>
    );
  }
});

module.exports = Lead;
