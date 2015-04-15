var classSet = React.addons.classSet;
var FormGroup = React.createClass({
  propTypes: {
    lg: React.PropTypes.bool,
    sm: React.PropTypes.bool,
    error: React.PropTypes.bool,
    success: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    feedback: React.PropTypes.bool
  },
  render: function() {
    var classes = classSet({
      'form-group': true,
      'error': this.props.error,
      'success': this.props.success,
      'warning': this.props.warning,
      'feedback': this.props.feedback,
      'form-group-lg': this.props.lg,
      'form-group-sm': this.props.sm
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

module.exports = FormGroup;
