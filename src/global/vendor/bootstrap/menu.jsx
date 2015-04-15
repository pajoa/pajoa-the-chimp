var classSet = React.addons.classSet;
var Menu = React.createClass({
  activeItem: null,
  toggle: null,
  timer: null,
  count: 0,
  propTypes: {
    noTimer: React.PropTypes.bool,
    autoHide: React.PropTypes.bool,
    alwaysInactive: React.PropTypes.bool,

    alignLeft: React.PropTypes.bool,
    alignRight: React.PropTypes.bool,

    onItemSelect: React.PropTypes.func,
    onShow: React.PropTypes.func,
    onShown: React.PropTypes.func,
    onHide: React.PropTypes.func,
    onHidden: React.PropTypes.func,

    bsStyle: React.PropTypes.string
  },
  getInitialState: function() {
    return {
      menuItems: [],
      ul: {
        display: 'none'
      }
    };
  },
  getDefaultProps: function() {
    return {
      autoHide: false,
      bsStyle: 'default',
      onItemSelect: function() {},
      onShow: function() {},
      onShown: function() {},
      onHide: function() {},
      onHidden: function() {}
    };
  },
  setToggle: function(toggle) {
    this.toggle = toggle;
  },
  activateItem: function(count, cb) {
    var active = false, item = null;
    var menuItems = this.state.menuItems;
    for(var i=0; i < menuItems.length; i++) {
      item = menuItems[i];
      active = (item.props.count === count ? true : false);
      menuItems[i] = React.addons.cloneWithProps(item, {active: active, key: item.key});
    }
    this.setState({menuItems: menuItems}, cb);
  },
  getActiveItem: function() {
    if(this.activeItem)
      return this.activeItem;
    else
      return {};
  },
  getActiveItemProps: function() {
    return this.getActiveItem().props || {};
  },
  selectItem: function(key, value) {
    var item = null, active = false;
    var menuItems = this.state.menuItems;
    for(var i=0; i < menuItems.length; i++) {
      active = false;
      item = menuItems[i];
      if(item.props[key] === value) {
        active = true;
      }
      menuItems[i] = React.addons.cloneWithProps(item, {
        active: active, key: item.key
      });
    }
    this.setState({menuItems: menuItems});
  },
  show: function(cb) {
    if(!this.isMounted()) return;
    this.props.onShow();
    this.state.ul.display = 'block';
    this.setState(this.state, function() {
      if(this.activeItem) {
        this.activeItem.focus();
      }
      if(cb) cb();
      this.props.onShown();
      setTimeout(function() {
        $(window).trigger('resize');
      }, 15);
    }.bind(this));
  },
  hide: function(cb) {
    if(!this.isMounted()) return;
    this.props.onHide();
    this.state.ul.display = 'none';
    this.setState(this.state, function() {
      try {
        this.toggle.unpress();
      } catch(e) {}

      if(cb) cb();
      this.props.onHidden();
    }.bind(this));
  },
  componentWillMount: function() {
    var menuItems = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
    var count = 0;
    for(var i=0; i < menuItems.length; i++) {
      var component = React.addons.cloneWithProps(menuItems[i], {
        parent: this, autoHide: this.props.autoHide, alwaysInactive: this.props.alwaysInactive, key: i, count: ((menuItems[i].props.hasOwnProperty('href') && !menuItems[i].props.hasOwnProperty('disabled') ) ? ++count : null)
      });
      menuItems[i] = component;
    }
    this.count = count;
    this.setState({menuItems: menuItems});
  },
  componentDidMount: function() {
    var parent = $(this.refs.ul.getDOMNode()).parent('.dropdown, .btn-group, .input-group-btn, .b-tab');
    $('body').bind('click.menu.'+this._currentElement.ref, function(e) {
      if(parent.find(e.target).length)
        return;
      this.hide();
    }.bind(this));
    $('body').bind('mouseover.menu.'+this._currentElement.ref, function(e) {
      clearTimeout(this.timer);
      if(parent.find(e.target).length)
        return;
      if(this.props.noTimer)
        return this.hide();
      this.timer = setTimeout(function() {
        try {
          this.hide();
        } catch(e) {}
      }.bind(this), 500);
    }.bind(this));
  },
  componentWillUnmount: function() {
    $('body').unbind('click.menu.'+this._currentElement.ref);
    $('body').unbind('mouseover.menu.'+this._currentElement.ref);
  },
  handleKeyUp: function(e) {
    e.preventDefault();
  },
  handleKeyDown: function(e) {
    e.preventDefault();
    if(e.key === 'ArrowDown') { // down arrow
      var newCount = 1;
      if(this.activeItem) newCount = this.activeItem.props.count + 1;
      if(newCount > this.count) newCount = 1;
      this.activateItem(newCount);
    } else if(e.key === 'ArrowUp') { // up arrow
      var newCount = this.count;
      if(this.activeItem) newCount = this.activeItem.props.count - 1;
      if(newCount < 1) newCount = this.count;
      this.activateItem(newCount);
    } else if(e.key === 'Escape') { // escape
      this.hide();
      this.toggle.focus();
    } else if(e.key === 'Enter') { // return
      this.props.onItemSelect(this.getActiveItemProps(), this);
      $(e.target).find('>.div-b-tab').trigger('click');
    }
  },
  render: function() {
    var classesObj = {
      'dropdown-menu': true,
      'dropdown-menu-left': this.props.alignLeft,
      'dropdown-menu-right': this.props.alignRight
    };

    var bsStyles=this.props.bsStyle.split(',');
    for(var i=0; i < bsStyles.length; i++) {
      classesObj['menu-'+bsStyles[i].trim()] = true;
    }

    var classes = classSet(classesObj);

    var props = React.mergeProps({
      role: 'menu',
      style: this.state.ul,
      onKeyUp: this.handleKeyUp,
      onKeyDown: this.handleKeyDown,
      'aria-labelledby': this._currentElement.ref,
      className: (classes.length ? classes : null)
    }, this.props);

    return (
      <ul {...props} ref='ul'>
        {this.state.menuItems}
      </ul>
    );
  }
});

module.exports = Menu;
