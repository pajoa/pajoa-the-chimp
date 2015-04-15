var classSet = React.addons.classSet;
var BLink = React.createClass({
  propTypes: {
    active: React.PropTypes.bool
  },
  render: function() {
    var classes = classSet({
      'active': this.props.active
    });
    var children = (
      <a href={this.props.href}>
        <span>{this.props.children}</span>
        <span> </span>
      </a>
    );
    if(this.props.active)
      children = this.props.children;

    var props = React.mergeProps({
      href: null,
      className: classes
    }, this.props);

    return (
      <li {...props}>
        {children}
      </li>
    );
  }
});

var Breadcrumb = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'breadcrumb'
    }, this.props);

    return (
      <ol {...props}>
        {this.props.children}
      </ol>
    );
  }
});

module.exports.BLink = BLink;
module.exports.Breadcrumb = Breadcrumb;
