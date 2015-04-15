var classSet = React.addons.classSet;

var ProgressGroup = React.createClass({
  propTypes: {
    collapseBottom: React.PropTypes.bool
  },
  componentWillMount: function() {
    var children = this.props.children;

    if(Array.isArray(children)) {
      children = React.Children.map(this.props.children, function(child, i) {
        return React.addons.cloneWithProps(child, {
          stack: true, key: child.props.key
        });
      }, this);
    }

    this.setState({
      children: children
    });
  },
  render: function() {
    var classes = React.addons.classSet({
      'progress': true,
      'progress-collapse-bottom': this.props.collapseBottom
    });

    var props = React.mergeProps({
      className: classes.trim(),
      style: {
        background: this.props.background || null
      }
    }, this.props);

    return (
      <div {...props}>
        {this.state.children}
      </div>
    );
  }
});

var Progress = React.createClass({
  propTypes: {
    min: React.PropTypes.number,
    max: React.PropTypes.number,
    value: React.PropTypes.number,

    stack: React.PropTypes.bool,
    active: React.PropTypes.bool,

    info: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    success: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    withLabel: React.PropTypes.oneOfType([
      React.PropTypes.bool,
      React.PropTypes.string
    ]),

    color: React.PropTypes.string,
    fgColor: React.PropTypes.string,
    background: React.PropTypes.string,
    collapseBottom: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      min: this.props.min || 0,
      max: this.props.max || 100,
      value: this.props.value || 0
    };
  },
  setValue: function(value) {
    this.state.value = value;
    this.setState(this.state);
  },
  getValue: function() {
    return this.state.value;
  },
  setMin: function(min) {
    this.state.min = min;
    this.setState(this.state);
  },
  getMin: function() {
    return this.state.min;
  },
  setMax: function(max) {
    this.state.max = max;
    this.setState(this.state);
  },
  getMax: function() {
    return this.state.max;
  },
  render: function() {
    var classes = classSet({
      'progress-bar': true,
      'active': this.props.active,
      'progress-bar-info': this.props.info,
      'progress-bar-danger': this.props.danger,
      'progress-bar-success': this.props.success,
      'progress-bar-warning': this.props.warning,
      'progress-bar-striped': this.props.striped,
      'progress-collapse-bottom': this.props.collapseBottom && this.props.stack
    });

    var suffix = '';
    for(var prop in this.props) {
      switch(prop) {
        case 'info':
        case 'danger':
        case 'success':
        case 'warning':
          suffix = ' ('+prop+')';
        break;
        default:
        break;
      }
    }

    var child = <span className='sr-only'>{this.state.value}% Complete{suffix}</span>;
    if(this.props.withLabel)
      child = <span style={{color: this.props.fgColor}}>{this.props.withLabel || this.state.value+'%'}</span>;

    if(this.props.stack) {
      var props = React.mergeProps({
        className: classes,
        role: 'progressbar',
        'aria-valuenow': this.state.value,
        'aria-valuemin': this.state.min,
        'aria-valuemax': this.state.max,
        style: {
          width: this.state.value + '%',
          background: this.props.color || null,
          minWidth: this.props.minWidth
        }
      }, this.props);

      return (
        <div {...props}>
          {child}
        </div>
      );
    }

    return (
      <ProgressGroup {...this.props}>
        <div className={classes} role='progressbar' aria-valuenow={this.state.value} aria-valuemin={this.state.min} aria-valuemax={this.state.max} style={{width: this.state.value+'%', background: this.props.color || null, minWidth: this.props.minWidth}}>
          {child}
        </div>
      </ProgressGroup>
    );
  }
});

module.exports.Progress = Progress;
module.exports.ProgressGroup = ProgressGroup;
