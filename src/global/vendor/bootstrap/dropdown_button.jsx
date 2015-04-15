var Button = require('./button.jsx');

var classSet = React.addons.classSet;
var DropdownButton = React.createClass({
  propTypes: {
    menu: React.PropTypes.string.isRequired,
    container: React.PropTypes.object.isRequired
  },
  getInitialState: function() {
    return {
      pressed: false
    };
  },
  unpress: function(cb) {
    var parents = $(this.refs.button.getDOMNode()).parents('.dropdown, .b-tab').removeClass('open');
    if(!parents.find('.active').length) {
      parents.removeClass('active');
    }
    this.setState({
      pressed: false
    }, cb);
  },
  press: function(cb) {
    $(this.refs.button.getDOMNode()).parents('.dropdown, .b-tab').addClass('open').addClass('active');
    this.setState({
      pressed: true
    }, cb);
  },
  pressed: function() {
    return this.state.pressed;
  },
  focus: function() {
    try {
      this.refs.button.focus();
    } catch(e) {
      this.refs.button.getDOMNode().focus();
    }
  },
  handleClick: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var menu = this.props.container.refs[this.props.menu];
    if(this.pressed()) {
      menu.hide();
    } else {
      this.press(function() {
        menu.show();
      });
    }
  },
  handleMouseOver: function(e) {
    e.preventDefault();
    e.stopPropagation();
    var menu = this.props.container.refs[this.props.menu];
    this.press();
    menu.show();
  },
  componentDidMount: function() {
    this.props.container.refs[this.props.menu].setToggle(this);
  },
  render: function() {
    var classes = classSet({
      'dropdown-toggle': true,
      'active': this.state.pressed
    });
    if(this.props.tab || this.props.nav) {
      var props = React.mergeProps({
        href: '#',
        ref: 'button',
        className: classes,
        'data-toggle': 'dropdown',
        onClick: this.handleClick,
        onTouchEnd: this.handleClick,
        onMouseOver: this.props.toggleOnHover ? this.handleMouseOver : null
      }, this.props);

      return (
        <a {...props}>
          {this.props.children}
        </a>
      );
    }

    var props = React.mergeProps({
      ref: 'button',
      type: 'button',
      className: classes,
      'data-toggle': 'dropdown',
      onClick: this.handleClick,
      onTouchEnd: this.handleClick,
      onMouseOver: this.props.toggleOnHover ? this.handleMouseOver : null
    }, this.props);

    return (
      <Button {...props}>
        {this.props.children}
      </Button>
    );
  }
});

module.exports = DropdownButton;
