var TextArea = React.createClass({
  getInputDOMNode: function() {
    return this.refs.textarea.getDOMNode();
  },
  getValue: function() {
    return this.getInputDOMNode().value;
  },
  render: function() {
    var props = React.mergeProps({
      className: 'form-control',
      defaultValue: this.props.children
    }, this.props);

    return (
      <textarea ref='textarea' {...props}/>
    );
  }
});

module.exports = TextArea;
