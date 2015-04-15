var classSet = React.addons.classSet;
var Form = React.createClass({
  propTypes: {
    inline: React.PropTypes.bool,
    horizontal: React.PropTypes.bool,
    allowAutoComplete: React.PropTypes.bool
  },
  render: function() {
    var fakeInputs = '';
    if(!this.props.allowAutoComplete) {
      fakeInputs = (
        <div style={{display: 'none'}}>
          <div className='form-group'>
            <input type='text' />
          </div>
          <div className='form-group'>
            <input type='email' />
          </div>
          <div className='form-group'>
            <input type='password' />
          </div>
        </div>
      );
    }
    var classes = classSet({
      'form-inline': this.props.inline,
      'form-horizontal': this.props.horizontal
    });

    var props = React.mergeProps({
      role: 'form',
      className: classes,
      autoComplete: (!this.props.allowAutoComplete ? 'off' : 'on')
    }, this.props);

    return (
      <form {...props}>
        {fakeInputs}
        {this.props.children}
      </form>
    );
  }
});

module.exports = Form;
