var classSet = React.addons.classSet;

var ModalManager = {};
var ModalFooter = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'modal-footer'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var ModalBody = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'modal-body'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var ModalHeader = React.createClass({
  render: function() {
    var props = React.mergeProps({
      className: 'modal-header'
    }, this.props);

    return (
      <div {...props}>
        {this.props.children}
      </div>
    );
  }
});

var Modal = React.createClass({
  propTypes: {
    lg: React.PropTypes.bool,
    sm: React.PropTypes.bool,
    onShow: React.PropTypes.func,
    onShown: React.PropTypes.func,
    onHide: React.PropTypes.func,
    onHidden: React.PropTypes.func
  },
  getInitialState: function() {
    return {
      styles: {}
    };
  },
  getDefaultProps: function() {
    return {
      onShow: function() {},
      onShown: function() {},
      onHide: function() {},
      onHidden: function() {}
    };
  },
  bindEvents: function() {
    $('body').bind('click.modal', function(e) {
      if($(this.refs.modal.getDOMNode()).find(e.target).length)
        return;
      e.preventDefault();
      e.stopPropagation();
      this.close();
    }.bind(this));
    $('body').bind('keydown.modal', function(e) {
      e.preventDefault();
      e.stopPropagation();
      if(e.which === 27) { // escape
        this.close();
      }
    }.bind(this));
  },
  unbindEvents: function() {
    $('body').unbind('click.modal');
    $('body').unbind('keydown.modal');
    $('body').removeClass('modal-open').find('>.modal-backdrop').remove()
  },
  componentWillUnmount: function() {
    this.unbindEvents();
  },
  open: function() {
    this.props.onShow();
    this.bindEvents();
    this.state.styles = {display: 'block'};
    this.setState(this.state, this.props.onShown);
    $('html, body').css('overflow', 'hidden');
  },
  close: function() {
    this.props.onHide();
    this.unbindEvents();
    this.state.styles = {display: 'none'};
    this.setState(this.state, this.props.onHidden);
    ModalManager.remove();
  },
  render: function() {
    var modalDialogClasses = classSet({
      'modal-dialog': true,
      'modal-lg': this.props.lg,
      'modal-sm': this.props.sm
    });

    var modalClasses = classSet({
      'modal': true,
      'fade': true,
      'in': this.state.styles.display === 'block' ? true : false,
      'out': this.state.styles.display === 'none' ? true : false
    });

    var props = React.mergeProps({
      role: 'dialog',
      tabIndex: '-1',
      style: this.state.styles,
      className: modalClasses.trim()
    }, this.props);

    return (
      <div ref='modal' {...props}>
        <div className={modalDialogClasses.trim()}>
          <div className='modal-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    );
  }
});

ModalManager.create = function(modal) {
  $('body').addClass('modal-open').append("<div class='modal-backdrop fade in'></div>").append("<div id='modal-container'></div>");

  var component = React.render(modal, document.getElementById('modal-container'));
  component.open();
};
ModalManager.remove = function() {
  $('html, body').css('overflow', '');
  React.unmountComponentAtNode(document.getElementById('modal-container'));
  $('body').find('>#modal-container').remove();
};

module.exports.Modal = Modal;
module.exports.ModalBody = ModalBody;
module.exports.ModalHeader = ModalHeader;
module.exports.ModalFooter = ModalFooter;
module.exports.ModalManager = ModalManager;
