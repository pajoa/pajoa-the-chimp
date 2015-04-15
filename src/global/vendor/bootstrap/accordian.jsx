var AccordianContent = React.createClass({
  getInitialState: function() {
    return {
      height: 0,
      opened: false
    };
  },
  collapse: function() {
    var node = this.refs.content.getDOMNode();
    $(node).animate({height: 0}, 250);
    this.setState({opened: false});
  },
  expand: function() {
    var node = this.refs.content.getDOMNode();
    $(node).animate({height: this.state.height}, 250);
    this.setState({opened: true}, function() {
      this.props.parent.setActiveItem(this.props, function() {
        this.props.parent.props.onItemSelect(this.props);
      }.bind(this));
    }.bind(this));
  },
  handleStateChange: function(paneID) {
    if(this.props.paneID === paneID) {
      if(this.state.opened) {
        this.collapse();
      } else {
        this.expand();
      }
    } else {
      this.collapse();
    }
  },
  handleKV: function(key, value) {
    if(this.props.hasOwnProperty(key) && this.props[key] === value) {
      this.expand();
    } else {
      this.collapse();
    }
  },
  componentWillMount: function() {
    ReactBootstrap.Dispatcher.on('accordian:'+this.props.accordianID, this.handleStateChange);
    ReactBootstrap.Dispatcher.on('accordian:kv:'+this.props.accordianID, this.handleKV);
  },
  componentDidMount: function() {
    var node = this.refs.content.getDOMNode();
    var height = $(node).outerHeight();
    $(node).css('height', 0);
    this.setState({height: height}, function() {
      if(this.props.active)
        this.expand();
    }.bind(this));
  },
  componentWillUnmount: function() {
    ReactBootstrap.Dispatcher.off('accordian:'+this.props.accordianID, this.handleStateChange);
    ReactBootstrap.Dispatcher.off('accordian:kv:'+this.props.accordianID, this.handleKV);
  },
  render: function() {
    var props = React.mergeProps({
      ref: 'content',
      className: 'accordian-content',
      style: {overflow: 'hidden'}
    }, this.props);

    return (
      <div {...props}>
        <div className='accordian-body'>{this.props.children}</div>
      </div>
    );
  }
});

var AccordianTitle = React.createClass({
  handleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();

    ReactBootstrap.Dispatcher.emit('accordian:'+this.props.accordianID, this.props.paneID);
  },
  render: function() {
    var props = React.mergeProps({
      href: '#',
      className: 'accordian-title',
      onClick: this.handleClick
    }, this.props);

    return (
      <a {...props}>
        {this.props.children}
      </a>
    );
  }
});

var AccordianPane = React.createClass({
  statics: {
    ID: 0,
    getID: function() {
      return AccordianPane.ID++;
    },
    resetID: function() {
      AccordianPane.ID = 0;
    }
  },
  getInitialState: function() {
    return {
      id: AccordianPane.getID(),
      children: []
    };
  },
  componentWillReceiveProps: function(nextProps) {
    var children = React.Children.map(nextProps.children, function(child, i) {
      return React.withContext(this._currentElement.context, function() {
        return React.addons.cloneWithProps(child, {
          key: i, paneID: this.state.id, accordianID: this.props.accordianID, active: this.props.active, parent: this.props.parent
        });
      }.bind(this));
    }, this);
    this.setState({
      children: children
    });
  },
  componentWillMount: function() {
    var children = React.Children.map(this.props.children, function(child, i) {
      return React.withContext(this._currentElement.context, function() {
        return React.addons.cloneWithProps(child, {
          key: i, paneID: this.state.id, accordianID: this.props.accordianID, active: this.props.active, parent: this.props.parent
        });
      }.bind(this));
    }, this);

    this.setState({children: children});
  },
  render: function() {
    var props = React.mergeProps({
      className: 'accordian-pane'
    }, this.props);

    return (
      <li {...props}>
        {this.state.children}
      </li>
    );
  }
});

var Accordian = React.createClass({
  statics: {
    ID: 0,
    getID: function() {
      return Accordian.ID++;
    }
  },
  propTypes: {
    onItemSelect: React.PropTypes.func
  },
  getDefaultProps: function() {
    return {
      onItemSelect: function() {}
    };
  },
  getInitialState: function() {
    return {
      activeItem: null,
      id: Accordian.getID(),
      children: []
    };
  },
  setActiveItem: function(props, cb) {
    this.setState({activeItem: props}, cb);
  },
  getActiveItem: function() {
    return this.state.props;
  },
  selectItem: function(key, value) {
    ReactBootstrap.Dispatcher.emit('accordian:kv:'+this.state.id, key, value);
  },
  componentWillReceiveProps: function(nextProps) {
    var children = React.Children.map(nextProps.children, function(child, i) {
      return React.withContext(this._currentElement._context, function() {
        return React.addons.cloneWithProps(child, {
          parent: this, key: i, accordianID: this.state.id
        });
      }.bind(this));
    }, this);
    this.setState({
      children: children
    });
  },
  componentWillMount: function() {
    var children = React.Children.map(this.props.children, function(child, i) {
      return React.withContext(this._currentElement.context, function() {
        return React.addons.cloneWithProps(child, {
          parent: this, key: i, accordianID: this.state.id
        });
      }.bind(this));
    }, this);

    this.setState({children: children});
  },
  render: function() {
    AccordianPane.resetID();

    var props = React.mergeProps({
      className: 'accordian'
    }, this.props);

    return (
      <ul {...props}>
        {this.state.children}
      </ul>
    );
  }
});

module.exports.Accordian = Accordian;
module.exports.AccordianPane = AccordianPane;
module.exports.AccordianTitle = AccordianTitle;
module.exports.AccordianContent = AccordianContent;
