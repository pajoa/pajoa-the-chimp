var ColMixin = require('./col.jsx').ColMixin;

var Label = React.createClass({
  mixins: [ColMixin],
  propTypes: {
    inline: React.PropTypes.bool,
    control: React.PropTypes.bool
  },
  getLabelDOMNode: function() {
    return this.refs.label.getDOMNode();
  },
  render: function() {
    this.preRender();
    var classes = React.addons.classSet({
      'control-label': this.props.control,
      inline: this.props.inline
    });
    this.classes += ' ' + classes;

    var props = React.mergeProps({
      ref: 'label',
      hidden: null,
      className: this.classes
    }, this.props);

    return (
      <label {...props}>
        {this.props.children}
      </label>
    );
  }
});

module.exports = Label;
