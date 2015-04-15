var Icon = require('./icon.jsx');
var Button = require('./button.jsx');

var classSet = React.addons.classSet;

var PanelRight = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: classSet({
        'rubix-panel-right': true,
        noRadius: this.props.noRadius
      }).trim()
    }, this.props);

    return (
      <div {...props} >
        {this.props.children}
      </div>
    );
  }
});

var PanelLeft = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: classSet({
        'rubix-panel-left': true,
        noRadius: this.props.noRadius
      }).trim()
    }, this.props);

    return (
      <div {...props} >
        {this.props.children}
      </div>
    );
  }
});

var PanelFooter = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: classSet({
        'rubix-panel-footer': true,
        noRadius: this.props.noRadius
      }).trim()
    }, this.props);

    return (
      <div {...props} >
        {this.props.children}
      </div>
    );
  }
});

var PanelHeader = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: classSet({
        'rubix-panel-header': true,
        noRadius: this.props.noRadius
      }).trim()
    }, this.props);

    return (
      <div {...props} >
        {this.props.children}
      </div>
    );
  }
});

var PanelBody = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'rubix-panel-body'
    }, this.props);

    return (
      <div {...props} >
        {this.props.children}
      </div>
    );
  }
});

var Panel = React.createClass({
  propTypes: {
    horizontal: React.PropTypes.bool
  },
  render: function() {
    var panelClasses = 'rubix-panel';
    if(this.props.horizontal)
      panelClasses += ' horizontal';

    var props = React.mergeProps({
      ref: 'panel',
      className: panelClasses
    }, this.props);

    return (
      <div {...props}>
        <div>{this.props.children}</div>
      </div>
    );
  }
});

var PanelContainer = React.createClass({
  propTypes: {
    bordered: React.PropTypes.bool,
    noControls: React.PropTypes.bool,
    gutterBottom: React.PropTypes.bool,
    collapseBottom: React.PropTypes.bool,
    controlStyles: React.PropTypes.string,
    containerStyles: React.PropTypes.string,
    plain: React.PropTypes.bool
  },
  statics: {
    zIndex: 9999999,
    getZIndex: function() {
      return --PanelContainer.zIndex;
    }
  },
  height: 0,
  getInitialState: function() {
    return {
      removed: false,
      collapseIcon: 'minus',
      collapsed: this.props.collapsed || false
    }
  },
  collapse: function(cb) {
    cb = typeof cb === 'function' ? cb : function() {};
    this.setState({
      collapsed: true,
      collapseIcon: 'plus'
    });
    var container = $(this.refs.container.getDOMNode());
    this.height = container.height();
    $(container).css('overflow', 'hidden');
    if(this.props.horizontal)
      $(container).css('display', 'block');
    $(container).animate({
      height: 16
    }, 250, 'swing', cb);
  },
  expand: function(cb) {
    cb = typeof cb === 'function' ? cb : function() {};
    this.setState({
      collapsed: false,
      collapseIcon: 'minus'
    });
    var container = $(this.refs.container.getDOMNode());
    $(container).animate({
      height: this.height
    }, 250, 'swing', function() {
      $(container).css({
        height: '',
        overflow: ''
      });
      if(this.props.horizontal)
        $(container).css('display', 'table');
      cb();
    }.bind(this));
  },
  toggle: function(e) {
    e.preventDefault();
    e.stopPropagation();
    if(this.state.collapsed) {
      this.expand();
    } else {
      this.collapse();
    }
  },
  remove: function(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      removed: true
    });
  },
  render: function() {
    var controlClasses = 'rubix-panel-controls', controls = null;
    if(this.props.controlStyles)
      controlClasses += ' ' + this.props.controlStyles;

    var containerClasses = classSet({
      'rubix-panel-container': true,
      'bordered': this.props.bordered,
      'noOverflow': this.props.noOverflow,
      'panel-plain': this.props.plain,
      'panel-gutter-bottom': this.props.gutterBottom,
      'panel-collapse-bottom': this.props.collapseBottom,
    });

    if(this.props.containerClasses)
      containerClasses += ' ' + this.props.containerClasses;

    if(this.props.plain)
      this.props.noControls = true;

    if(!this.props.noControls) {
      controls = (
        <div className={controlClasses}>
          <Button>
            <Icon bundle='fontello' glyph='loop-alt-1'/>
          </Button>
          <Button onClick={this.toggle} onTouchEnd={this.toggle}>
            <Icon bundle='fontello' glyph={this.state.collapseIcon}/>
          </Button>
          <Button onClick={this.remove} onTouchEnd={this.remove}>
            <Icon bundle='fontello' glyph='cancel'/>
          </Button>
        </div>
      );
    }

    if(this.props.customControls) {
      controls = (
        <div className={controlClasses}>
          {this.props.customControls}
        </div>
      );
    }

    if(this.state.removed) return null;

    var props = React.mergeProps({
      className: 'rubix-panel-container-with-controls '  + (this.state.collapsed ? 'active ': ' '),
      style: {
        zIndex: PanelContainer.getZIndex()
      }
    }, this.props);

    return (
      <div {...props}>
        {controls}
        <div ref='container' className={containerClasses.trim()}>
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports.Panel = Panel;
module.exports.PanelBody = PanelBody;
module.exports.PanelLeft = PanelLeft;
module.exports.PanelRight = PanelRight;
module.exports.PanelHeader = PanelHeader;
module.exports.PanelFooter = PanelFooter;
module.exports.PanelContainer = PanelContainer;
