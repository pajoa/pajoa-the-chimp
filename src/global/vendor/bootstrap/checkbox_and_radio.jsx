var Label = require('./label.jsx');
var Input = require('./input.jsx');

var classSet = React.addons.classSet;

var CRMixin = {
  propTypes: {
    id: React.PropTypes.string,
    name: React.PropTypes.string,
    inline: React.PropTypes.bool,
    defaultChecked: React.PropTypes.bool,
    value: React.PropTypes.string,
    disabled: React.PropTypes.bool
  },
  getDefaultProps: function() {
    return {
      disabled: false,
      defaultChecked: false
    };
  },
  getChecked: function() {
    return this.refs.input.getChecked();
  },
  setChecked: function(value) {
    this.refs.input.setChecked(value);
  },
  isChecked: function() {
    return this.getChecked() === true;
  },
  getValue: function() {
    return this.refs.span.getDOMNode().innerText;
  },
  preRender: function(type) {
    if(type !== 'radio' && type !== 'checkbox')
      throw Error('radio or checkbox required');

    var classes_obj = {
      'disabled': this.props.disabled
    };
    classes_obj[type] = true;
    var classes = classSet(classes_obj);

    var inputProps = React.mergeProps({
      ref: 'input',
      type: type,
      value: this.props.value,
      name: this.props.name,
      id: this.props.id,
      disabled: this.props.disabled,
      defaultChecked: this.props.defaultChecked
    }, this.props);
    var input = <Input {...inputProps}/>;

    if(this.props.native)
      return input;

    var combined = <div>{input}<span ref='span'>{this.props.children}</span></div>;

    if(this.props.inline) {
      var labelProps = React.mergeProps({
        className: type + '-inline'
      }, this.props);

      return (
        <Label {...labelProps}>
          {combined}
        </Label>
      );
    }

    return (
      <div className={classes}>
        <Label>
          {combined}
        </Label>
      </div>
    );
  }
};

var Checkbox = React.createClass({
  mixins: [CRMixin],
  render: function() {
    return this.preRender('checkbox');
  }
});

var Radio = React.createClass({
  mixins: [CRMixin],
  render: function() {
    return this.preRender('radio');
  }
});

module.exports.Radio = Radio;
module.exports.Checkbox = Checkbox;
