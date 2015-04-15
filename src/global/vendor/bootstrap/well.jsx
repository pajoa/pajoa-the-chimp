var classSet = React.addons.classSet;
var Well = React.createClass({
  propTypes: {
    lg: React.PropTypes.bool,
    sm: React.PropTypes.bool
  },
  render: function() {
    var classes = classSet({
      'well': true,
      'well-lg': this.props.lg,
      'well-sm': this.props.sm
    });
    var style = {};
    if(this.props.noMargin) style.margin = 0;

    var props = React.mergeProps({
      style: style,
      className: classes
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Well;
