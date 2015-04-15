var classSet = React.addons.classSet;

var Form = require('./form.jsx');
var Button = require('./button.jsx');

var NavMixin = {
  propTypes: {
    left: React.PropTypes.bool,
    right: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      left: false,
      right: false
    };
  },
  getInitialState: function() {
    return {
      children: []
    };
  },
  classSet: function(obj) {
    obj['navbar-left'] = this.props.left;
    obj['navbar-right'] = this.props.right;
    return classSet(obj);
  },
  preRender: function(ComponentClass, obj) {
    var classes = this.classSet(obj);

    var props = React.mergeProps({
      className: classes
    }, this.props);

    return (
      <ComponentClass {...props}>
        {this.state.children}
      </ComponentClass>
    );
  }
};

var NavButton = React.createClass({
  mixins: [NavMixin],
  componentWillMount: function() {
    this.setState({
      children: this.props.children
    });
  },
  render: function() {
    return this.preRender(Button);
  }
});

var NavLink = React.createClass({
  mixins: [NavMixin],
  componentWillMount: function() {
    this.setState({
      children: this.props.children
    });
  },
  render: function() {
    return this.preRender('a', {
      'navbar-link': true
    });
  }
});

var NavText = React.createClass({
  mixins: [NavMixin],
  componentWillMount: function() {
    this.setState({
      children: this.props.children
    });
  },
  render: function() {
    return this.preRender('p', {
      'navbar-text': true
    });
  }
});

var NavToggle = React.createClass({
  getInitialState: function() {
    return {
      active: this.props.active || false
    };
  },
  press: function(cb) {
    this.setState({
      active: true
    }, cb);
  },
  unpress: function(cb) {
    this.setState({
      active: false
    }, cb);
  },
  isActive: function() {
    return this.state.active;
  },
  handleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var container = this.props.container.refs;
    var nav = this.props.nav;
    if(container.hasOwnProperty(nav)) {
      if(this.isActive()) {
        this.unpress(function() {
          container[nav].collapse();
        });
      } else {
        this.press(function() {
          container[nav].expand();
        });
      }
    }
  },
  render: function() {
    var classes = classSet({
      'navbar-toggle': true,
      'active': this.state.active
    });
    return (
      <Button className={classes} data-toggle='collapse' onClick={this.handleClick} onTouchEnd={this.handleClick}>
        <span className='sr-only'>{this.props.children}</span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
        <span className='icon-bar'></span>
      </Button>
    );
  }
});

var NavForm = React.createClass({
  mixins: [NavMixin],
  getDefaultProps: function() {
    return {
      role: 'search'
    };
  },
  componentWillMount: function() {
    this.setState({
      children: this.props.children
    });
  },
  render: function() {
    return this.preRender(Form, {
      'navbar-form': true,
      'form-inline': true
    });
  }
});

var NavItem = React.createClass({
  propTypes: {
    direct: React.PropTypes.bool,
    active: React.PropTypes.bool,
    divider: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      active: this.props.active || false
    };
  },
  press: function(cb) {
    this.setState({
      active: true
    }, cb);
  },
  unpress: function(cb) {
    this.setState({
      active: false
    }, cb);
  },
  isActive: function() {
    return this.state.active;
  },
  handleClick: function(e) {
    if(!this.props.direct)
      e.preventDefault();
      e.stopPropagation();
    this.props.parent.deactivateAll(function() {
      this.press();
      this.props.parent.props.onItemSelect(this.props);
      if(typeof this.props.onTouchEnd === 'function') return this.props.onTouchEnd();
      if(typeof this.props.onClick === 'function') this.props.onClick();
    }.bind(this));
  },
  focus: function() {
    if(this.refs.link) this.refs.link.getDOMNode().focus();
  },
  click: function() {
    if(this.refs.link) this.refs.link.getDOMNode().click();
  },
  componentWillReceiveProps: function(nextProps) {
    if(!nextProps.active) {
      this.state.active = false;
      this.setState(this.state);
    } else {
      this.state.active = true;
      this.props.parent.activeItem = this;
      this.setState(this.state);
    }
  },
  render: function() {
    if(this.props.divider) {
      var props = React.mergeProps({
        className: 'divider'
      }, this.props);

      return (
        <li {...props}></li>
      );
    }
    var classes = classSet({
      'active': this.state.active
    });
    var children = null, linkProps;
    if(this.props.href) {
      linkProps = React.mergeProps(this.props, {
        href: this.props.href,
        onClick: this.handleClick,
        onTouchEnd: this.handleClick
      });
      children = <a ref='link' {...linkProps}>{this.props.children}</a>;
    } else {
      if(this.props.dropdown) {
        classes = 'dropdown';
      }
      children = this.props.children;
    }

    var props = React.mergeProps({
      className: classes
    }, this.props);

    return (
      <li {...props}>
        {children}
      </li>
    );
  }
});

var Nav = React.createClass({
  activeItem: null,
  mixins: [NavMixin],
  propTypes: {
    onItemSelect: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      onItemSelect: function() {}
    };
  },
  deactivateAll: function(cb) {
    var children = React.Children.map(this.props.children, function(child, i) {
      return React.addons.cloneWithProps(child, {
        parent: this, active: false, key: i
      });
    }, this);
    this.setState({
      children: children
    }, cb)
  },
  getActiveItem: function() {
    if(this.activeItem)
      return this.activeItem;
    else
      return {};
  },
  getActiveItemProps: function() {
    return this.activeItem().props || {};
  },
  selectItem: function(key, value, cb) {
    var active = false;
    var children = React.Children.map(this.props.children, function(child, i) {
      if(!this.state.children[i].props.dropdown) {
        active = false;
        if(child.props[key] === value) active = true;
        return React.withContext(this._currentElement._context, function() {
          return React.addons.cloneWithProps(child, {
            parent: this, active: active, key: i
          });
        }.bind(this));
      }
    }, this);
    this.setState({
      children: children
    }, cb);
  },
  componentWillMount: function() {
    var children = React.Children.map(this.props.children, function(child, i) {
      return React.withContext(this._currentElement._context, function() {
        return React.addons.cloneWithProps(child, {
          parent: this, key: i
        });
      }.bind(this));
    }, this);
    this.setState({
      children: children
    });
  },
  componentWillReceiveProps: function(nextProps) {
    var children = React.Children.map(nextProps.children, function(child, i) {
      return React.withContext(this._currentElement._context, function() {
        return React.addons.cloneWithProps(child, {
          parent: this, key: i
        });
      }.bind(this));
    }, this);
    this.setState({
      children: children
    });
  },
  render: function() {
    return this.preRender('ul', {
      'nav': true,
      'navbar-nav': true
    });
  }
});

var NavContent = React.createClass({
  propTypes: {
    collapse: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      collapse: this.props.collapse || false
    };
  },
  collapse: function() {
    this.setState({
      collapse: true
    });
  },
  expand: function() {
    this.setState({
      collapse: false
    });
  },
  render: function() {
    var isCollapse = this.state.collapse ? true : false;
    var classes = classSet({
      'navbar-content': true,
      'collapse': isCollapse,
      'navbar-collapse': isCollapse
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

var NavBrand = React.createClass({
  render: function() {
    var props = React.mergeProps({
      to: '#',
      className: 'navbar-brand'
    }, this.props);

    return (
      <a {...props}>
        {this.props.children}
      </a>
    );
  }
});

var NavHeader = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'navbar-header'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var NavBar = React.createClass({
  propTypes: {
    inverse: React.PropTypes.bool,
    fixedTop: React.PropTypes.bool,
    staticTop: React.PropTypes.bool,
    fixedBottom: React.PropTypes.bool
  },
  statics: {
    zIndex: 9999999,
    getZIndex: function() {
      return --NavBar.zIndex;
    }
  },
  render: function() {
    var classes = classSet({
      'navbar': true,
      'navbar-default': true,
      'navbar-inverse': this.props.inverse,
      'navbar-fixed-top': this.props.fixedTop,
      'navbar-static-top': this.props.staticTop,
      'navbar-fixed-bottom': this.props.fixedBottom
    });

    var props = React.mergeProps({
      className: classes,
      role: 'navigation',
      style: {
        zIndex: NavBar.getZIndex()
      }
    }, this.props);

    return (
      <nav {...props}>
        {this.props.children}
      </nav>
    );
  }
});

module.exports.Nav = Nav;
module.exports.NavBar = NavBar;
module.exports.NavItem = NavItem;
module.exports.NavText = NavText;
module.exports.NavLink = NavLink;
module.exports.NavForm = NavForm;
module.exports.NavBrand = NavBrand;
module.exports.NavHeader = NavHeader;
module.exports.NavButton = NavButton;
module.exports.NavContent = NavContent;
module.exports.NavToggle = NavToggle;
