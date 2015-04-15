var MediaBody = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'media-body'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var Media = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'media'
    }, this.props);

    return (
      <li {...props}>
        {this.props.children}
      </li>
    );
  }
});


var MediaDiv = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'media'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var MediaList = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'media-list'
    }, this.props);

    return (
      <ul {...props}>
        {this.props.children}
      </ul>
    );
  }
});

var MediaObject = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'media-object'
    }, this.props);

    return (
      <img {...props} />
    );
  }
});

var MediaHeading = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'media-heading fg-black50'
    }, this.props);

    return (
      <h4 {...props}>
        {this.props.children}
      </h4>
    );
  }
});

module.exports.Media = Media;
module.exports.MediaDiv = MediaDiv;
module.exports.MediaBody = MediaBody;
module.exports.MediaList = MediaList;
module.exports.MediaObject = MediaObject;
module.exports.MediaHeading = MediaHeading;
