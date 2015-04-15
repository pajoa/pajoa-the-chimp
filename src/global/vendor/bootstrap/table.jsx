var classSet = React.addons.classSet;
var Table = React.createClass({
  propTypes: {
    hover: React.PropTypes.bool,
    striped: React.PropTypes.bool,
    bordered: React.PropTypes.bool,
    collapsed: React.PropTypes.bool,
    condensed: React.PropTypes.bool,
    responsive: React.PropTypes.bool,

    alignTop: React.PropTypes.bool,
    alignMiddle: React.PropTypes.bool,
    alignBottom: React.PropTypes.bool
  },
  render: function() {
    var classes = classSet({
      'table': true,
      'table-hover': this.props.hover,
      'table-striped': this.props.striped,
      'table-bordered': this.props.bordered,
      'table-collapsed': this.props.collapsed,
      'table-condensed': this.props.condensed,
      'table-top-align': this.props.alignTop,
      'table-middle-align': this.props.alignMiddle,
      'table-bottom-align': this.props.alignBottom
    });

    var props = React.mergeProps({
      className: classes
    }, this.props);

    var table = (
      <table {...props}>
        {this.props.children}
      </table>
    );

    if(this.props.responsive) {
      return (
        <div className='table-responsive'>
          {table}
        </div>
      );
    } else return table;
  }
});

module.exports = Table;
