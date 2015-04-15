/** @jsx React.DOM */

var classSet = React.addons.classSet;

var TabPane = React.createClass({
  listName: null,
  paneName: null,
  propTypes: {
    tab: React.PropTypes.string.isRequired
  },
  getInitialState: function() {
    return {
      active: this.props.active || false
    };
  },
  stateChangeCallback: function(paneName) {
    if(this.paneName === paneName) {
      this.setState({active: true});
    } else {
      this.setState({active: false});
    }
  },
  componentDidMount: function() {
    ReactBootstrap.Dispatcher.on('tab:'+this.listName, this.stateChangeCallback);
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('tab:'+this.listName, this.stateChangeCallback);
  },
  render: function() {
    var pane_str = this.props.tab.split(':');
    this.listName = pane_str[0];
    this.paneName = pane_str[1];

    var classes = classSet({
      'tab-pane': true,
      'active': this.state.active
    });

    var props = React.mergeProps({
      active: null,
      className: classes
    }, this.props);

    return (
      <div ref='pane' {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TabContent = React.createClass({
  render: function() {
    var classes = classSet({
      'tab-content': true
    });

    var props = React.mergeProps({
      className: classes.trim()
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var Tab = React.createClass({
  listName: null,
  paneName: null,
  propTypes: {
    pane: React.PropTypes.string,
    disabled: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      active: this.props.active || false
    };
  },
  handleRawClick: function(e) {
    if(this.props.disabled) return;
    this.state.active = !this.state.active;
    this.setState(this.state, function() {
      if(this.props.dropdown) {
        var node = $(this.refs.div.getDOMNode());
        node.parents('li.b-tab').addClass('active');
        node.parents('li[role=presentation]').addClass('active');
      }
      ReactBootstrap.Dispatcher.emit('tab:'+this.listName, this.paneName);
    }.bind(this));
  },
  handleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.handleRawClick();
  },
  stateChangeCallback: function(paneName) {
    if(this.paneName === paneName) {
      this.setState({active: true}, function() {
        setTimeout(function() { $(window).trigger('resize'), 15});
        if(!this.props.dropdown) {
          var node = $(this.refs.li.getDOMNode());
          node.siblings('.active').removeClass('active');
        }
        ReactBootstrap.Dispatcher.emit('tab:_tabchange_', this.listName, this.props);
      }.bind(this));
    } else {
      this.setState({active: false});
      if(this.props.dropdown) {
        var node = $(this.refs.div.getDOMNode());
        node.parents('li[role=presentation]').removeClass('active');
      }
    }
  },
  selectTabListener: function(data) {
    if(this.props.hasOwnProperty(data.key) && this.props[data.key] === data.value)
      this.handleRawClick();
  },
  componentDidMount: function() {
    ReactBootstrap.Dispatcher.on('tab:'+this.listName, this.stateChangeCallback);
    ReactBootstrap.Dispatcher.on('tab:select_tab', this.selectTabListener);
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('tab:'+this.listName, this.stateChangeCallback);
    ReactBootstrap.Dispatcher.off('tab:select_tab', this.selectTabListener);
  },
  render: function() {
    if(this.props.hasOwnProperty('pane')) {
      var pane_str = this.props.pane.split(':');
      this.listName = pane_str[0];
      this.paneName = pane_str[1];
    }

    var classes = classSet({
      'b-tab': true,
      'active': this.state.active,
      'dropdown': this.props.dropdown,
      'disabled': this.props.disabled
    });
    if(this.props.dropdown) {
      var props = React.mergeProps({
        className: 'div-b-tab',
        onClick: this.handleClick,
        onTouchEnd: this.handleClick
      }, this.props);
      return (
        <div ref='div' {...props}>{this.props.children}</div>
      );
    }
    if(!this.props.hasOwnProperty('pane')) {
      var props = React.mergeProps({
        className: 'b-tab'
      }, this.props);
      return (
        <li ref='li' {...props}>{this.props.children}</li>
      );
    }

    var props = React.mergeProps({
      active: null,
      className: classes
    });
    return (
      <li ref='li' {...props}>
        <a href='#' role='tab' data-toggle='tab' onClick={this.handleClick} onTouchEnd={this.handleClick}>{this.props.children}</a>
      </li>
    );
  }
});

var TabList = React.createClass({
  propTypes: {
    pills: React.PropTypes.bool,
    stacked: React.PropTypes.bool,
    justified: React.PropTypes.bool,
    bsStyle: React.PropTypes.string,
    onTabSelect: React.PropTypes.func,
    listName: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      bsStyle: 'default',
      onTabSelect: function() {}
    };
  },
  onTabSelect: function(listName, child_props) {
    if(child_props.parent === this || this.props.listName === listName) {
      this.props.onTabSelect(child_props);
    }
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
    ReactBootstrap.Dispatcher.on('tab:_tabchange_', this.onTabSelect);
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('tab:_tabchange_', this.onTabSelect);
  },
  selectTab: function(key, value) {
    ReactBootstrap.Dispatcher.emit('tab:select_tab', {key: key, value: value});
  },
  render: function() {
    var isPills = this.props.pills ? true : false;
    var isStacked = this.props.stacked ? (
                      this.props.pills ? true : false
                    ) : false;
    var classesObj = {
      'nav': true,
      'nav-tabs': !isPills,
      'nav-pills': isPills,
      'nav-stacked': isStacked,
      'nav-justified': this.props.justified
    };

    var bsStyles=this.props.bsStyle.split(',');
    for(var i=0; i < bsStyles.length; i++) {
      classesObj['nav-'+bsStyles[i].trim()] = true;
    }

    var classes = classSet(classesObj);

    var tablist = classSet({
      'tablist': !isPills ? true : false
    });

    var props = React.mergeProps({
      className: classes,
      role: tablist
    }, this.props);

    return (
      <ul {...props}>
        {this.state.children}
      </ul>
    );
  }
});

var TabContainer = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className:'tab-container'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports.Tab = Tab;
module.exports.TabList = TabList;
module.exports.TabPane = TabPane;
module.exports.TabContent = TabContent;
module.exports.TabContainer = TabContainer;
