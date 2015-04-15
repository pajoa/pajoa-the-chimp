var classSet = React.addons.classSet;
var MenuItem = React.createClass({
  propTypes: {
    focus: React.PropTypes.bool,
    direct: React.PropTypes.bool,
    header: React.PropTypes.bool,
    noHover: React.PropTypes.bool,
    divider: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    autoHide: React.PropTypes.bool,
    alwaysInactive: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      active: (this.props.alwaysInactive ? false : (this.props.active || false))
    };
  },
  getDefaultProps: function() {
    return {
      autoHide: false,
      alwaysInactive: false
    };
  },
  activate: function(cb) {
    if(this.props.alwaysInactive) return;
    this.setState({active: true}, cb);
  },
  deactivate: function(cb) {
    if(this.props.alwaysInactive) return;
    this.setState({active: false}, cb);
  },
  componentWillReceiveProps: function(nextProps) {
    if(!nextProps.active) {
      this.deactivate();
    } else {
      this.props.parent.activeItem = this;
      this.activate(function() {
        this.focus();
      }.bind(this));
    }
  },
  handleClick: function(e) {
    if(!this.props.direct)
      e.preventDefault();
    e.preventDefault();
    e.stopPropagation();
    if(this.props.disabled)
      return;
    this.props.parent.activateItem(this.props.count, function() {
      this.props.parent.props.onItemSelect(this.props, this.props.parent);
      if(this.props.autoHide) {
        this.props.parent.hide();
      }
      this.activate();
    }.bind(this));
  },
  focus: function() {
    if(this.refs.link) this.refs.link.getDOMNode().focus();
  },
  click: function() {
    if(this.refs.link) this.refs.link.getDOMNode().click();
  },
  componentWillMount: function() {
    if(this.props.active)
      this.props.parent.activeItem = this;
  },
  render: function() {
    if(this.props.header)
      return <li role='presentation' className='dropdown-header'>{this.props.children}</li>;
    if(this.props.divider)
      return <li role='presentation' className='divider'></li>;

    var classes = classSet({
      'active': this.state.active,
      'disabled': this.props.disabled
    });

    if(this.props.noHover) {
      var props = React.mergeProps({
        role: 'presentation',
        className: classes
      }, this.props);

      return (
        <li {...props}>
          {this.props.children}
        </li>
      );
    }

    var props = React.mergeProps({
      role: 'presentation',
      className: classes
    }, this.props);

    return (
      <li ref='li' {...props}>
        <a ref='link' role='menuitem' tabIndex='-1' href={this.props.href ? this.props.href : null} onClick={this.handleClick} onTouchEnd={this.handleClick}>
          {this.props.children}
        </a>
      </li>
    );
  }
});

module.exports = MenuItem;
