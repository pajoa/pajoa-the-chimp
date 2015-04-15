var Jumbotron = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'jumbotron'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Jumbotron;
