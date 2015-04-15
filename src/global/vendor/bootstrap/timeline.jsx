var Icon = require('./icon.jsx');
var classSet = React.addons.classSet;
var TimelineView = React.createClass({
  propTypes: {
    centered: React.PropTypes.bool,
    withHeader: React.PropTypes.bool
  },
  render: function() {
    var classes = classSet({
      'rubix-timeline-view': true,
      'rubix-timeline-centered': this.props.centered || false,
      'rubix-timeline-with-header': this.props.withHeader || false,
      'rubix-timeline-normal': !this.props.withHeader
    });

    var props = React.mergeProps({
      centered: null,
      withHeader: null,
      className: classes.trim()
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TimelineItem = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'rubix-timeline-item'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TimelineHeader = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'rubix-timeline-header'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TimelineIcon = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'rubix-timeline-icon'
    }, this.props);

    return (
      <Icon {...props} />
    );
  }
});

var TimelineAvatar = React.createClass({
  render: function() {
    var props = React.mergeProps({
      width: 30,
      height: 30,
      className: 'rubix-timeline-avatar',
      style: {
        borderWidth: 2,
        borderStyle: 'solid',
        borderRadius: 100,
        padding: 2,
        position: 'absolute',
        top: 0
      }
    }, this.props);

    return (
      <img {...props} />
    );
  }
});

var TimelineTitle = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'rubix-timeline-title'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var TimelineBody = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'rubix-timeline-body'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports.TimelineView = TimelineView;
module.exports.TimelineItem = TimelineItem;
module.exports.TimelineHeader = TimelineHeader;
module.exports.TimelineIcon = TimelineIcon;
module.exports.TimelineAvatar = TimelineAvatar;
module.exports.TimelineTitle = TimelineTitle;
module.exports.TimelineBody = TimelineBody;
