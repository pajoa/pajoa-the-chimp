var classSet = React.addons.classSet;
var Container = React.createClass({
  propTypes: {
    fluid: React.PropTypes.bool,
    fixed: React.PropTypes.bool
  },
  render: function() {
    var classes = classSet({
      'container': this.props.fixed,
      'container-fluid': this.props.fluid
    });
    var props = React.mergeProps({
      className: classes
    }, this.props);
    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Container;
