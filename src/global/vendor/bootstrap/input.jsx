var classSet = React.addons.classSet;
var Input = React.createClass({
  propTypes: {
    type: React.PropTypes.string.isRequired,

    lg: React.PropTypes.bool,
    sm: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      type: 'text'
    };
  },
  getInputDOMNode: function() {
    return this.refs.input.getDOMNode();
  },
  getChecked: function() {
    if(this.props.type === 'checkbox' || this.props.type === 'radio')
      return this.getInputDOMNode().checked;
    else throw Error('Input type not checkbox or radio');
  },
  setChecked: function(value) {
    if(this.props.type === 'checkbox' || this.props.type === 'radio')
      this.getInputDOMNode().checked = value;
    else throw Error('Input type not checkbox or radio');
  },
  getValue: function() {
    return this.getInputDOMNode().value;
  },
  render: function() {
    var classesObj = {
      'input-lg': this.props.lg,
      'input-sm': this.props.sm
    };
    switch(this.props.type) {
      case 'tel':
      case 'url':
      case 'date':
      case 'time':
      case 'week':
      case 'text':
      case 'color':
      case 'month':
      case 'email':
      case 'number':
      case 'search':
      case 'password':
      case 'datetime':
      case 'datetime-local':
        classesObj['form-control'] = true;
      break;
      default:
      break;
    }
    var classes = classSet(classesObj);

    var props = React.mergeProps({
      ref: 'input',
      className: classes
    }, this.props);

    return (
      <input {...props} />
    );
  }
});

module.exports = Input;
