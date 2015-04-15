var classSet = React.addons.classSet;

var ListGroupItemText = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'list-group-item-text'
    }, this.props);

    return (
      <p {...props}>{this.props.children}</p>
    );
  }
});

var ListGroupItemHeading = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'list-group-item-heading'
    }, this.props);

    return (
      <h4 {...props}>{this.props.children}</h4>
    );
  }
});

var ListGroupItem = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    bsStyle: React.PropTypes.string,

    info: React.PropTypes.bool,
    danger: React.PropTypes.bool,
    warning: React.PropTypes.bool,
    success: React.PropTypes.bool
  },
  render: function() {
    var classesObj = {
      'list-group-item': true,
      'active': this.props.active,
      'disabled': this.props.disabled,
      'list-group-item-info': this.props.info,
      'list-group-item-danger': this.props.danger,
      'list-group-item-warning': this.props.warning,
      'list-group-item-success': this.props.success
    };

    if(this.props.bsStyle) {
      var bsStyles=this.props.bsStyle.split(',');
      for(var i=0; i < bsStyles.length; i++) {
        classesObj['list-group-'+bsStyles[i].trim()] = true;
      }
    }

    var classes = classSet(classesObj);

    var props = React.mergeProps({
      href: '#',
      className: classes
    }, this.props);

    return (
      <a {...props}>
        {this.props.children}
      </a>
    );
  }
});

var ListGroup = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'list-group'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports.ListGroup = ListGroup;
module.exports.ListGroupItem = ListGroupItem;
module.exports.ListGroupItemText = ListGroupItemText;
module.exports.ListGroupItemHeading = ListGroupItemHeading;
