var Button = require('./button.jsx');

var Alert = React.createClass({
  propTypes: {
    info: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    success: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    dismissible: React.PropTypes.bool,

    collapseBottom: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      hidden: false
    };
  },
  handleClose: function() {
    this.setState({hidden: true});
  },
  render: function() {
    var classes = React.addons.classSet({
      'alert': true,
      'hidden': this.state.hidden,
      'alert-info': this.props.info,
      'alert-danger': this.props.danger,
      'alert-success': this.props.success,
      'alert-warning': this.props.warning,
      'alert-dismissible': this.props.dismissible
    });

    var children = this.props.children;

    if(this.props.dismissible) {
      children = (
        <div>
          <Button close onClick={this.handleClose}>
            <span aria-hidden='true'>&times;</span>
            <span className='sr-only'>Close</span>
          </Button>
          {this.props.children}
        </div>
      );
    }

    var props = React.mergeProps({
      role: 'alert',
      className: classes.trim(),
      style: {
        marginBottom: this.props.collapseBottom ? 0 : null
      }
    }, this.props);

    return (
      <div {...props}>
        {children}
      </div>
    );
  }
});

var AlertLink = React.createClass({
  render: function() {
    var props = React.mergeProps({
      href: this.props.href,
      className: 'alert-link'
    }, this.props);

    return (
      <a {...props}>
        {this.props.children}
      </a>
    );
  }
});

module.exports.Alert = Alert;
module.exports.AlertLink = AlertLink;
