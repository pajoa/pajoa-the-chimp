var classSet = React.addons.classSet;
var Page = React.createClass({
  propTypes: {
    active: React.PropTypes.bool,
    disabled: React.PropTypes.bool,
    begin: React.PropTypes.bool,
    end: React.PropTypes.bool,
    next: React.PropTypes.bool,
    previous: React.PropTypes.bool
  },
  getInitialState: function() {
    return {
      active: this.props.active || false,
      disabled: this.props.disabled || false
    };
  },
  render: function() {
    var classes = classSet({
      'next': this.props.next,
      'active': this.state.active,
      'disabled': this.state.disabled,
      'previous': this.props.previous
    });
    var children = null;
    if(this.props.begin) {
      children = '«';
    } else if(this.props.end) {
      children = '»';
    } else if(this.props.next) {
      children = <span>{this.props.children} →</span>
    } else if(this.props.previous) {
      children = <span>← {this.props.children}</span>
    } else if(this.props.active) {
      children = <span>{this.props.children}<span className='sr-only'>(current)</span></span>
    } else {
      children = this.props.children
    }

    var props = React.mergeProps({
      href: null,
      className: classes
    }, this.props);

    return (
      <li {...props}>
        <a href={this.props.href || '#'}>
          {children}
        </a>
      </li>
    );
  }
});

var Pagination = React.createClass({
  propTypes: {
    lg: React.PropTypes.bool,
    sm: React.PropTypes.bool
  },
  render: function() {
    var classes = classSet({
      'pagination': true,
      'pagination-lg': this.props.lg,
      'pagination-sm': this.props.sm
    });

    var props = React.mergeProps({
      className: classes
    }, this.props);

    return (
      <ul {...props}>
        {this.props.children}
      </ul>
    );
  }
});

var Pager = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'pager'
    }, this.props);

    return (
      <ul {...props}>
        {this.props.children}
      </ul>
    );
  }
});

module.exports.Page = Page;
module.exports.Pager = Pager;
module.exports.Pagination = Pagination;
