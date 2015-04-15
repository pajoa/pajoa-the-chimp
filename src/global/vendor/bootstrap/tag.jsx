var Tag = React.createClass({
  getDefaultProps: function() {
    return {
      href: '#',
      color: 'darkgreen45'
    };
  },
  render: function() {
    return (
      <a href={this.props.href} className={'left-tag border-hover-'+this.props.color+' bg-hover-'+this.props.color+' fg-hover-white bg-lightgray50 border-lightgray50 fg-text'}>{this.props.children}</a>
    );
  }
});

module.exports = Tag;
