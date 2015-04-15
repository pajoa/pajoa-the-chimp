var classSet = React.addons.classSet;
var Icon = React.createClass({
  propTypes: {
    feedback: React.PropTypes.bool,
    bundle: React.PropTypes.string,
    glyph: React.PropTypes.string.isRequired
  },
  render: function() {
    var classesObj = {
      'rubix-icon': true,
      'form-control-feedback': this.props.feedback || false
    };
    if(this.props.bundle) {
      classesObj[this.props.bundle] = true;
      classesObj['icon-'+this.props.bundle+'-'+this.props.glyph] = true;
    } else {
      classesObj[this.props.glyph] = true;
    }

    var classes = classSet(classesObj);

    var props = React.mergeProps({
      className: classes.trim()
    }, this.props);

    return (
      <span {...props}></span>
    );
  }
});

module.exports = Icon;
