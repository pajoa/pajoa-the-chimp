var classSet = React.addons.classSet;
var Select = React.createClass({
  propTypes: {
    lg: React.PropTypes.bool,
    sm: React.PropTypes.bool
  },
  getInputDOMNode: function() {
    return this.refs.select.getDOMNode();
  },
  getSelected: function() {
    var selected = [];
    var selectedOptions = this.getInputDOMNode().selectedOptions;
    for(var i=0; i < selectedOptions.length; i++) {
      selected.push(selectedOptions[i].value);
    }
    return selected;
  },
  render: function() {
    var classes = classSet({
      'form-control': true,
      'input-lg': this.props.lg,
      'input-sm': this.props.sm
    });

    var props = React.mergeProps({
      className: classes
    }, this.props);

    return (
      <select ref='select' {...props}>
        {this.props.children}
      </select>
    );
  }
});

module.exports = Select;
