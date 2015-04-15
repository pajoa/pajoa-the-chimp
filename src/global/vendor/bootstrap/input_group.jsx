var classSet = React.addons.classSet;
var InputGroup = React.createClass({
  propTypes: {
    lg: React.PropTypes.bool,
    sm: React.PropTypes.bool
  },
  render: function() {
    var classes = classSet({
      'input-group': true,
      'input-group-lg': this.props.lg,
      'input-group-sm': this.props.sm
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

var InputGroupAddon = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'input-group-addon'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});


var InputGroupButton = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'input-group-btn'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports.InputGroup = InputGroup;
module.exports.InputGroupAddon = InputGroupAddon;
module.exports.InputGroupButton = InputGroupButton;
