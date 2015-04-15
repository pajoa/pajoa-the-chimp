var classSet = React.addons.classSet;

var Button = React.createClass({
  propTypes: {
    xs: React.PropTypes.bool,
    sm: React.PropTypes.bool,
    lg: React.PropTypes.bool,
    close: React.PropTypes.bool,
    block: React.PropTypes.bool,
    type: React.PropTypes.string,
    navbar: React.PropTypes.bool,
    active: React.PropTypes.bool,
    inverse: React.PropTypes.bool,
    rounded: React.PropTypes.bool,
    outlined: React.PropTypes.bool,
    bsStyle: React.PropTypes.string,
    onlyOnHover: React.PropTypes.bool,
    retainBackground: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      type: 'button',
      inverse: false,
      outlined: false,
      bsStyle: 'default',
      componentClass: 'button'
    }
  },
  focus: function() {
    this.refs.button.getDOMNode().focus();
  },
  render: function() {
    var ComponentClass = this.props.componentClass;
    var classesObj = {
      'btn': true,
      'btn-xs': this.props.xs,
      'btn-sm': this.props.sm,
      'btn-lg': this.props.lg,
      'active': this.props.active,
      'btn-block': this.props.block,
      'navbar-btn': this.props.navbar,
      'btn-inverse': (this.props.retainBackground ? true : false) || this.props.inverse,
      'btn-rounded': this.props.rounded,
      'btn-outlined': (this.props.inverse ? true : false) || (this.props.onlyOnHover ? true : false) || (this.props.retainBackground ? true : false) || this.props.outlined,
      'btn-onlyOnHover': this.props.onlyOnHover,
      'btn-retainBg': this.props.retainBackground
    };

    var classes = null;

    var bsStyles=this.props.bsStyle.split(',');
    for(var i=0; i < bsStyles.length; i++) {
      classesObj['btn-'+bsStyles[i].trim()] = true;
    }

    classes = classSet(classesObj);

    var children = this.props.children;

    /*overrides all previous classes*/
    if(this.props.close) {
      classes = 'close';

      children = (
        <span><span aria-hidden='true'>&times;</span><span className='sr-only'>Close</span></span>
      );
    }

    var props = React.mergeProps({
      ref: 'button',
      role: 'button',
      className: classes
    }, this.props);

    return (
      <ComponentClass {...props}>
        {children}
      </ComponentClass>
    );
  }
});

module.exports = Button;
