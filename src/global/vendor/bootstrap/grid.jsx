var Grid = React.createClass({
  propTypes: {
    fixed: React.PropTypes.bool,

    collapse: React.PropTypes.bool,

    gutter: React.PropTypes.bool,
    gutterTop: React.PropTypes.bool,
    gutterLeft: React.PropTypes.bool,
    gutterRight: React.PropTypes.bool,
    gutterBottom: React.PropTypes.bool
  },
  statics: {
    zIndex: 9999999,
    getZIndex: function() {
      return --Grid.zIndex;
    }
  },
  constructGridGutterClass: function(type) {
    return 'grid-gutter-'+(type.replace('gutter','').toLowerCase())+' ';
  },
  render: function() {
    var classes = (this.props.fixed ? 'container' : 'container-fluid') + ' rubix-grid ';
    for(var prop in this.props) {
      switch(prop) {
        case 'gutter':
          classes += 'grid-gutter ';
        break;
        case 'collapse':
          classes += 'grid-collapse ';
        break;
        case 'gutterTop':
        case 'gutterLeft':
        case 'gutterRight':
        case 'gutterBottom':
          classes += this.constructGridGutterClass(prop);
        break;
        default:
        break;
      }
    }

    var props = React.mergeProps({
      className: classes.trim(),
      style: {
        zIndex: Grid.getZIndex()
      }
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

module.exports = Grid;
