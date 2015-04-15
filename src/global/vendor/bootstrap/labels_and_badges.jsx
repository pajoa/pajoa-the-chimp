var classSet = React.addons.classSet;

var BMixin = {
  propTypes: {
    bsStyle: React.PropTypes.string
  },
  getDefaultProps: function() {
    return {
      bsStyle: 'default'
    };
  },
  preRender: function(classesObj, type) {
    var classes = null;

    if(this.props.bsStyle) {
      var bsStyles=this.props.bsStyle.split(',');
      for(var i=0; i < bsStyles.length; i++) {
        classesObj[type+'-'+bsStyles[i].trim()] = true;
      }
    }

    classes = classSet(classesObj);

    var props = React.mergeProps({
      className: classes
    }, this.props);

    return (
      <span {...props}>
        {this.props.children}
      </span>
    );
  }
};

var Badge = React.createClass({
  mixins: [BMixin],
  render: function() {
    return this.preRender({
      'badge': true
    }, 'badge');
  }
});

var BLabel = React.createClass({
  mixins: [BMixin],
  render: function() {
    return this.preRender({
      'label': true
    }, 'label')
  }
});

module.exports.Badge = Badge;
module.exports.BLabel = BLabel;
