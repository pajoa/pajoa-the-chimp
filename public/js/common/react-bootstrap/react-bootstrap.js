/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = window.ReactBootstrap = {
	  Dispatcher: new EventEmitter2({
	    maxListeners: 999999999
	  }),
	  Container: __webpack_require__(1),
	  Grid: __webpack_require__(2),
	  Row: __webpack_require__(3),
	  Col: __webpack_require__(4).Col,
	  ColMixin: __webpack_require__(4).ColMixin,
	  Lead: __webpack_require__(5),
	  Table: __webpack_require__(6),
	  Form: __webpack_require__(7),
	  FormGroup: __webpack_require__(8),
	  Label: __webpack_require__(9),
	  Input: __webpack_require__(10),
	  InputGroup: __webpack_require__(11).InputGroup,
	  InputGroupAddon: __webpack_require__(11).InputGroupAddon,
	  InputGroupButton: __webpack_require__(11).InputGroupButton,
	  Checkbox: __webpack_require__(12).Checkbox,
	  Radio: __webpack_require__(12).Radio,
	  Button: __webpack_require__(13),
	  Textarea: __webpack_require__(14),
	  Select: __webpack_require__(15),
	  Static: __webpack_require__(16),
	  Icon: __webpack_require__(17),
	  HelpBlock: __webpack_require__(18),
	  Img: __webpack_require__(19),
	  Caret: __webpack_require__(20),
	  Dropdown: __webpack_require__(21),
	  DropdownButton: __webpack_require__(22),
	  Menu: __webpack_require__(23),
	  MenuItem: __webpack_require__(24),
	  ButtonGroup: __webpack_require__(25),
	  ButtonToolbar: __webpack_require__(26),
	  Tab: __webpack_require__(27).Tab,
	  TabList: __webpack_require__(27).TabList,
	  TabPane: __webpack_require__(27).TabPane,
	  TabContent: __webpack_require__(27).TabContent,
	  TabContainer: __webpack_require__(27).TabContainer,
	  Nav: __webpack_require__(28).Nav,
	  NavBar: __webpack_require__(28).NavBar,
	  NavText: __webpack_require__(28).NavText,
	  NavLink: __webpack_require__(28).NavLink,
	  NavItem: __webpack_require__(28).NavItem,
	  NavForm: __webpack_require__(28).NavForm,
	  NavBrand: __webpack_require__(28).NavBrand,
	  NavHeader: __webpack_require__(28).NavHeader,
	  NavToggle: __webpack_require__(28).NavToggle,
	  NavButton: __webpack_require__(28).NavButton,
	  NavContent: __webpack_require__(28).NavContent,
	  BLink: __webpack_require__(29).BLink,
	  Breadcrumb: __webpack_require__(29).Breadcrumb,
	  Page: __webpack_require__(30).Page,
	  Pager: __webpack_require__(30).Pager,
	  Pagination: __webpack_require__(30).Pagination,
	  Badge: __webpack_require__(31).Badge,
	  BLabel: __webpack_require__(31).BLabel,
	  Jumbotron: __webpack_require__(32),
	  Progress: __webpack_require__(33).Progress,
	  ProgressGroup: __webpack_require__(33).ProgressGroup,
	  Media: __webpack_require__(34).Media,
	  MediaDiv: __webpack_require__(34).MediaDiv,
	  MediaBody: __webpack_require__(34).MediaBody,
	  MediaList: __webpack_require__(34).MediaList,
	  MediaObject: __webpack_require__(34).MediaObject,
	  MediaHeading: __webpack_require__(34).MediaHeading,
	  ListGroup: __webpack_require__(35).ListGroup,
	  ListGroupItem: __webpack_require__(35).ListGroupItem,
	  ListGroupItemText: __webpack_require__(35).ListGroupItemText,
	  ListGroupItemHeading: __webpack_require__(35).ListGroupItemHeading,
	  Well: __webpack_require__(36),
	  Modal: __webpack_require__(37).Modal,
	  ModalBody: __webpack_require__(37).ModalBody,
	  ModalHeader: __webpack_require__(37).ModalHeader,
	  ModalFooter: __webpack_require__(37).ModalFooter,
	  ModalManager: __webpack_require__(37).ModalManager,
	  Panel: __webpack_require__(38).Panel,
	  PanelBody: __webpack_require__(38).PanelBody,
	  PanelHeader: __webpack_require__(38).PanelHeader,
	  PanelFooter: __webpack_require__(38).PanelFooter,
	  PanelLeft: __webpack_require__(38).PanelLeft,
	  PanelRight: __webpack_require__(38).PanelRight,
	  PanelContainer: __webpack_require__(38).PanelContainer,
	  LoremIpsum: __webpack_require__(39),
	  TimelineView: __webpack_require__(40).TimelineView,
	  TimelineItem: __webpack_require__(40).TimelineItem,
	  TimelineHeader: __webpack_require__(40).TimelineHeader,
	  TimelineIcon: __webpack_require__(40).TimelineIcon,
	  TimelineAvatar: __webpack_require__(40).TimelineAvatar,
	  TimelineTitle: __webpack_require__(40).TimelineTitle,
	  TimelineBody: __webpack_require__(40).TimelineBody,
	  Accordian: __webpack_require__(41).Accordian,
	  AccordianPane: __webpack_require__(41).AccordianPane,
	  AccordianTitle: __webpack_require__(41).AccordianTitle,
	  AccordianContent: __webpack_require__(41).AccordianContent,
	  IonTabContainer: __webpack_require__(42).IonTabContainer,
	  IonTabHead: __webpack_require__(42).IonTabHead,
	  IonTabBody: __webpack_require__(42).IonTabBody,
	  IonTab: __webpack_require__(42).IonTab,
	  IonTabItem: __webpack_require__(42).IonTabItem,
	  PricingTable: __webpack_require__(43).PricingTable,
	  PricingFeature: __webpack_require__(43).PricingFeature,
	  PricingTableBody: __webpack_require__(43).PricingTableBody,
	  PricingTablePrice: __webpack_require__(43).PricingTablePrice,
	  PricingTableHeader: __webpack_require__(43).PricingTableHeader,
	  PricingTableContainer: __webpack_require__(43).PricingTableContainer,
	  PricingButtonContainer: __webpack_require__(43).PricingButtonContainer,
	  Alert: __webpack_require__(44).Alert,
	  AlertLink: __webpack_require__(44).AlertLink,
	  Tag: __webpack_require__(45),
	  Sidebar: __webpack_require__(46).Sidebar,
	  SidebarNav: __webpack_require__(46).SidebarNav,
	  SidebarBtn: __webpack_require__(46).SidebarBtn,
	  SidebarMixin: __webpack_require__(46).SidebarMixin,
	  SidebarNavItem: __webpack_require__(46).SidebarNavItem,
	  SidebarControls: __webpack_require__(46).SidebarControls,
	  SidebarControlBtn: __webpack_require__(46).SidebarControlBtn,
	};


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Container = React.createClass({displayName: "Container",
	  propTypes: {
	    fluid: React.PropTypes.bool,
	    fixed: React.PropTypes.bool
	  },
	  render: function() {
	    var classes = classSet({
	      'container': this.props.fixed,
	      'container-fluid': this.props.fluid
	    });
	    var props = React.mergeProps({
	      className: classes
	    }, this.props);
	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Container;


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	var Grid = React.createClass({displayName: "Grid",
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
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Grid;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	var Row = React.createClass({displayName: "Row",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'row'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Row;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var ColMixin = {
	  classes: '',
	  propTypes: {
	    xs: React.PropTypes.number,
	    sm: React.PropTypes.number,
	    md: React.PropTypes.number,
	    lg: React.PropTypes.number,

	    className: React.PropTypes.string,

	    collapseTop: React.PropTypes.bool,
	    collapseLeft: React.PropTypes.bool,
	    collapseRight: React.PropTypes.bool,
	    collapseBottom: React.PropTypes.bool,

	    clearfix: React.PropTypes.bool,

	    hidden: React.PropTypes.string,
	    visible: React.PropTypes.string,

	    xsOffset: React.PropTypes.number,
	    smOffset: React.PropTypes.number,
	    mdOffset: React.PropTypes.number,
	    lgOffset: React.PropTypes.number,

	    xsPush: React.PropTypes.number,
	    smPush: React.PropTypes.number,
	    mdPush: React.PropTypes.number,
	    lgPush: React.PropTypes.number,

	    xsPull: React.PropTypes.number,
	    smPull: React.PropTypes.number,
	    mdPull: React.PropTypes.number,
	    lgPull: React.PropTypes.number
	  },
	  hyphenate: function(str) {
	    return str.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
	  },
	  camelCase: function(str) {
	    return str.toLowerCase().replace(/-([a-z])/g, function(g) {return g[1].toUpperCase();});
	  },
	  hyphenateColClass: function(prop) {
	    return 'col-'+this.hyphenate(prop)+' ';
	  },
	  hyphenateColClassWithValue: function(prop) {
	    return this.hyphenateColClass(prop).trim()+'-'+this.props[prop]+' ';
	  },
	  preRender: function() {
	    var classes = '', sizes = {}, collapse = {}, gutter = {};
	    for(var prop in this.props) {
	      switch(prop) {
	        case 'xs':
	        case 'sm':
	        case 'md':
	        case 'lg':
	          sizes[prop] = 1;
	          classes += this.hyphenateColClassWithValue(prop);
	        break;
	        case 'collapseTop':
	        case 'collapseLeft':
	        case 'collapseRight':
	        case 'collapseBottom':
	          collapse[prop] = 1;
	        break;
	        case 'gutterTop':
	        case 'gutterLeft':
	        case 'gutterRight':
	        case 'gutterBottom':
	          gutter[prop] = 1;
	        break;
	        case 'clearfix':
	          classes += 'clearfix ';
	        break;
	        case 'hidden':
	        case 'visible':
	          var classes;
	          var classeses = this.props[prop].split(',');
	          for(var i=0; i < classeses.length; i++) {
	            classes += prop+'-'+classeses[i].trim()+' ';
	          }
	        break;
	        case 'children':
	          // do nothing
	        break;
	        default:
	          if((prop.search('Gutter') !== -1) || (prop.search('Collapse') !== -1)) {
	            classes += this.hyphenateColClass(prop);
	          } else if((prop.search('Offset') !== -1) || (prop.search('Push') !== -1) || (prop.search('Pull') !== -1)) {
	            classes += this.hyphenateColClassWithValue(prop);
	          }
	        break;
	      }
	    }

	    for(var dir in collapse) {
	      dir = this.hyphenate(dir);
	      for(var size in sizes)
	        classes += this.hyphenateColClass(this.camelCase(size+'-'+dir));
	    }

	    for(var dir in gutter) {
	      dir = this.hyphenate(dir);
	      for(var size in sizes)
	        classes += this.hyphenateColClass(this.camelCase(size+'-'+dir));
	    }

	    this.classes = classes;
	  }
	};

	var Col = React.createClass({displayName: "Col",
	  mixins: [ColMixin],
	  render: function() {
	    this.preRender();

	    var props = React.mergeProps({
	      hidden: null,
	      className: this.classes.trim()
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.Col = Col;
	module.exports.ColMixin = ColMixin;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var Lead = React.createClass({displayName: "Lead",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'lead'
	    }, this.props);

	    return (
	      React.createElement("p", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Lead;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Table = React.createClass({displayName: "Table",
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
	      React.createElement("table", React.__spread({},  props), 
	        this.props.children
	      )
	    );

	    if(this.props.responsive) {
	      return (
	        React.createElement("div", {className: "table-responsive"}, 
	          table
	        )
	      );
	    } else return table;
	  }
	});

	module.exports = Table;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Form = React.createClass({displayName: "Form",
	  propTypes: {
	    inline: React.PropTypes.bool,
	    horizontal: React.PropTypes.bool,
	    allowAutoComplete: React.PropTypes.bool
	  },
	  render: function() {
	    var fakeInputs = '';
	    if(!this.props.allowAutoComplete) {
	      fakeInputs = (
	        React.createElement("div", {style: {display: 'none'}}, 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("input", {type: "text"})
	          ), 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("input", {type: "email"})
	          ), 
	          React.createElement("div", {className: "form-group"}, 
	            React.createElement("input", {type: "password"})
	          )
	        )
	      );
	    }
	    var classes = classSet({
	      'form-inline': this.props.inline,
	      'form-horizontal': this.props.horizontal
	    });

	    var props = React.mergeProps({
	      role: 'form',
	      className: classes,
	      autoComplete: (!this.props.allowAutoComplete ? 'off' : 'on')
	    }, this.props);

	    return (
	      React.createElement("form", React.__spread({},  props), 
	        fakeInputs, 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Form;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var FormGroup = React.createClass({displayName: "FormGroup",
	  propTypes: {
	    lg: React.PropTypes.bool,
	    sm: React.PropTypes.bool,
	    error: React.PropTypes.bool,
	    success: React.PropTypes.bool,
	    warning: React.PropTypes.bool,
	    feedback: React.PropTypes.bool
	  },
	  render: function() {
	    var classes = classSet({
	      'form-group': true,
	      'error': this.props.error,
	      'success': this.props.success,
	      'warning': this.props.warning,
	      'feedback': this.props.feedback,
	      'form-group-lg': this.props.lg,
	      'form-group-sm': this.props.sm
	    });

	    var props = React.mergeProps({
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = FormGroup;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var ColMixin = __webpack_require__(4).ColMixin;

	var Label = React.createClass({displayName: "Label",
	  mixins: [ColMixin],
	  propTypes: {
	    inline: React.PropTypes.bool,
	    control: React.PropTypes.bool
	  },
	  getLabelDOMNode: function() {
	    return this.refs.label.getDOMNode();
	  },
	  render: function() {
	    this.preRender();
	    var classes = React.addons.classSet({
	      'control-label': this.props.control,
	      inline: this.props.inline
	    });
	    this.classes += ' ' + classes;

	    var props = React.mergeProps({
	      ref: 'label',
	      hidden: null,
	      className: this.classes
	    }, this.props);

	    return (
	      React.createElement("label", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Label;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Input = React.createClass({displayName: "Input",
	  propTypes: {
	    type: React.PropTypes.string.isRequired,

	    lg: React.PropTypes.bool,
	    sm: React.PropTypes.bool
	  },
	  getDefaultProps: function() {
	    return {
	      type: 'text'
	    };
	  },
	  getInputDOMNode: function() {
	    return this.refs.input.getDOMNode();
	  },
	  getChecked: function() {
	    if(this.props.type === 'checkbox' || this.props.type === 'radio')
	      return this.getInputDOMNode().checked;
	    else throw Error('Input type not checkbox or radio');
	  },
	  setChecked: function(value) {
	    if(this.props.type === 'checkbox' || this.props.type === 'radio')
	      this.getInputDOMNode().checked = value;
	    else throw Error('Input type not checkbox or radio');
	  },
	  getValue: function() {
	    return this.getInputDOMNode().value;
	  },
	  render: function() {
	    var classesObj = {
	      'input-lg': this.props.lg,
	      'input-sm': this.props.sm
	    };
	    switch(this.props.type) {
	      case 'tel':
	      case 'url':
	      case 'date':
	      case 'time':
	      case 'week':
	      case 'text':
	      case 'color':
	      case 'month':
	      case 'email':
	      case 'number':
	      case 'search':
	      case 'password':
	      case 'datetime':
	      case 'datetime-local':
	        classesObj['form-control'] = true;
	      break;
	      default:
	      break;
	    }
	    var classes = classSet(classesObj);

	    var props = React.mergeProps({
	      ref: 'input',
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("input", React.__spread({},  props))
	    );
	  }
	});

	module.exports = Input;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var InputGroup = React.createClass({displayName: "InputGroup",
	  propTypes: {
	    lg: React.PropTypes.bool,
	    sm: React.PropTypes.bool
	  },
	  render: function() {
	    var classes = classSet({
	      'input-group': true,
	      'input-group-lg': this.props.lg,
	      'input-group-sm': this.props.sm
	    });

	    var props = React.mergeProps({
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var InputGroupAddon = React.createClass({displayName: "InputGroupAddon",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'input-group-addon'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});


	var InputGroupButton = React.createClass({displayName: "InputGroupButton",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'input-group-btn'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.InputGroup = InputGroup;
	module.exports.InputGroupAddon = InputGroupAddon;
	module.exports.InputGroupButton = InputGroupButton;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	var Label = __webpack_require__(9);
	var Input = __webpack_require__(10);

	var classSet = React.addons.classSet;

	var CRMixin = {
	  propTypes: {
	    id: React.PropTypes.string,
	    name: React.PropTypes.string,
	    inline: React.PropTypes.bool,
	    defaultChecked: React.PropTypes.bool,
	    value: React.PropTypes.string,
	    disabled: React.PropTypes.bool
	  },
	  getDefaultProps: function() {
	    return {
	      disabled: false,
	      defaultChecked: false
	    };
	  },
	  getChecked: function() {
	    return this.refs.input.getChecked();
	  },
	  setChecked: function(value) {
	    this.refs.input.setChecked(value);
	  },
	  isChecked: function() {
	    return this.getChecked() === true;
	  },
	  getValue: function() {
	    return this.refs.span.getDOMNode().innerText;
	  },
	  preRender: function(type) {
	    if(type !== 'radio' && type !== 'checkbox')
	      throw Error('radio or checkbox required');

	    var classes_obj = {
	      'disabled': this.props.disabled
	    };
	    classes_obj[type] = true;
	    var classes = classSet(classes_obj);

	    var inputProps = React.mergeProps({
	      ref: 'input',
	      type: type,
	      value: this.props.value,
	      name: this.props.name,
	      id: this.props.id,
	      disabled: this.props.disabled,
	      defaultChecked: this.props.defaultChecked
	    }, this.props);
	    var input = React.createElement(Input, React.__spread({},  inputProps));

	    if(this.props.native)
	      return input;

	    var combined = React.createElement("div", null, input, React.createElement("span", {ref: "span"}, this.props.children));

	    if(this.props.inline) {
	      var labelProps = React.mergeProps({
	        className: type + '-inline'
	      }, this.props);

	      return (
	        React.createElement(Label, React.__spread({},  labelProps), 
	          combined
	        )
	      );
	    }

	    return (
	      React.createElement("div", {className: classes}, 
	        React.createElement(Label, null, 
	          combined
	        )
	      )
	    );
	  }
	};

	var Checkbox = React.createClass({displayName: "Checkbox",
	  mixins: [CRMixin],
	  render: function() {
	    return this.preRender('checkbox');
	  }
	});

	var Radio = React.createClass({displayName: "Radio",
	  mixins: [CRMixin],
	  render: function() {
	    return this.preRender('radio');
	  }
	});

	module.exports.Radio = Radio;
	module.exports.Checkbox = Checkbox;


/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;

	var Button = React.createClass({displayName: "Button",
	  propTypes: {
	    xs: React.PropTypes.bool,
	    sm: React.PropTypes.bool,
	    lg: React.PropTypes.bool,
	    close: React.PropTypes.bool,
	    block: React.PropTypes.bool,
	    type: React.PropTypes.string,
	    navbar: React.PropTypes.bool,
	    active: React.PropTypes.bool,
	    inverse: React.PropTypes.bool,
	    rounded: React.PropTypes.bool,
	    outlined: React.PropTypes.bool,
	    bsStyle: React.PropTypes.string,
	    onlyOnHover: React.PropTypes.bool,
	    retainBackground: React.PropTypes.bool
	  },
	  getDefaultProps: function() {
	    return {
	      type: 'button',
	      inverse: false,
	      outlined: false,
	      bsStyle: 'default',
	      componentClass: 'button'
	    }
	  },
	  focus: function() {
	    this.refs.button.getDOMNode().focus();
	  },
	  render: function() {
	    var ComponentClass = this.props.componentClass;
	    var classesObj = {
	      'btn': true,
	      'btn-xs': this.props.xs,
	      'btn-sm': this.props.sm,
	      'btn-lg': this.props.lg,
	      'active': this.props.active,
	      'btn-block': this.props.block,
	      'navbar-btn': this.props.navbar,
	      'btn-inverse': (this.props.retainBackground ? true : false) || this.props.inverse,
	      'btn-rounded': this.props.rounded,
	      'btn-outlined': (this.props.inverse ? true : false) || (this.props.onlyOnHover ? true : false) || (this.props.retainBackground ? true : false) || this.props.outlined,
	      'btn-onlyOnHover': this.props.onlyOnHover,
	      'btn-retainBg': this.props.retainBackground
	    };

	    var classes = null;

	    var bsStyles=this.props.bsStyle.split(',');
	    for(var i=0; i < bsStyles.length; i++) {
	      classesObj['btn-'+bsStyles[i].trim()] = true;
	    }

	    classes = classSet(classesObj);

	    var children = this.props.children;

	    /*overrides all previous classes*/
	    if(this.props.close) {
	      classes = 'close';

	      children = (
	        React.createElement("span", null, React.createElement("span", {"aria-hidden": "true"}, "×"), React.createElement("span", {className: "sr-only"}, "Close"))
	      );
	    }

	    var props = React.mergeProps({
	      ref: 'button',
	      role: 'button',
	      className: classes
	    }, this.props);

	    return (
	      React.createElement(ComponentClass, React.__spread({},  props), 
	        children
	      )
	    );
	  }
	});

	module.exports = Button;


/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	var TextArea = React.createClass({displayName: "TextArea",
	  getInputDOMNode: function() {
	    return this.refs.textarea.getDOMNode();
	  },
	  getValue: function() {
	    return this.getInputDOMNode().value;
	  },
	  render: function() {
	    var props = React.mergeProps({
	      className: 'form-control',
	      defaultValue: this.props.children
	    }, this.props);

	    return (
	      React.createElement("textarea", React.__spread({ref: "textarea"},  props))
	    );
	  }
	});

	module.exports = TextArea;


/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Select = React.createClass({displayName: "Select",
	  propTypes: {
	    lg: React.PropTypes.bool,
	    sm: React.PropTypes.bool
	  },
	  getInputDOMNode: function() {
	    return this.refs.select.getDOMNode();
	  },
	  getSelected: function() {
	    var selected = [];
	    var selectedOptions = this.getInputDOMNode().selectedOptions;
	    for(var i=0; i < selectedOptions.length; i++) {
	      selected.push(selectedOptions[i].value);
	    }
	    return selected;
	  },
	  render: function() {
	    var classes = classSet({
	      'form-control': true,
	      'input-lg': this.props.lg,
	      'input-sm': this.props.sm
	    });

	    var props = React.mergeProps({
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("select", React.__spread({ref: "select"},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Select;


/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	var Static = React.createClass({displayName: "Static",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'form-control-static'
	    }, this.props);
	    return (
	      React.createElement("p", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Static;


/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Icon = React.createClass({displayName: "Icon",
	  propTypes: {
	    feedback: React.PropTypes.bool,
	    bundle: React.PropTypes.string,
	    glyph: React.PropTypes.string.isRequired
	  },
	  render: function() {
	    var classesObj = {
	      'rubix-icon': true,
	      'form-control-feedback': this.props.feedback || false
	    };
	    if(this.props.bundle) {
	      classesObj[this.props.bundle] = true;
	      classesObj['icon-'+this.props.bundle+'-'+this.props.glyph] = true;
	    } else {
	      classesObj[this.props.glyph] = true;
	    }

	    var classes = classSet(classesObj);

	    var props = React.mergeProps({
	      className: classes.trim()
	    }, this.props);

	    return (
	      React.createElement("span", React.__spread({},  props))
	    );
	  }
	});

	module.exports = Icon;


/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var HelpBlock = React.createClass({displayName: "HelpBlock",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'help-block'
	    }, this.props);
	    return (
	      React.createElement("p", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = HelpBlock;


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Img = React.createClass({displayName: "Img",
	  propTypes: {
	    circle: React.PropTypes.bool,
	    rounded: React.PropTypes.bool,
	    thumbnail: React.PropTypes.bool,
	    responsive: React.PropTypes.bool
	  },
	  render: function() {
	    var style={};
	    var classes = classSet({
	      'img-circle': this.props.circle,
	      'img-rounded': this.props.rounded,
	      'img-thumbnail': this.props.thumbnail,
	      'img-responsive': this.props.responsive
	    });
	    if(!this.props.src.length) {
	      this.props.src = '/imgs/blank.gif';
	      style.backgroundColor = '#EEEEEE';
	    }

	    var props = React.mergeProps({
	      style: style,
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("img", React.__spread({},  props))
	    );
	  }
	});

	module.exports = Img;


/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	var Caret = React.createClass({displayName: "Caret",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'caret'
	    }, this.props);

	    return (
	      React.createElement("span", React.__spread({},  props))
	    );
	  }
	});

	module.exports = Caret;


/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	var Dropdown = React.createClass({displayName: "Dropdown",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'dropdown'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Dropdown;


/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	var Button = __webpack_require__(13);

	var classSet = React.addons.classSet;
	var DropdownButton = React.createClass({displayName: "DropdownButton",
	  propTypes: {
	    menu: React.PropTypes.string.isRequired,
	    container: React.PropTypes.object.isRequired
	  },
	  getInitialState: function() {
	    return {
	      pressed: false
	    };
	  },
	  unpress: function(cb) {
	    var parents = $(this.refs.button.getDOMNode()).parents('.dropdown, .b-tab').removeClass('open');
	    if(!parents.find('.active').length) {
	      parents.removeClass('active');
	    }
	    this.setState({
	      pressed: false
	    }, cb);
	  },
	  press: function(cb) {
	    $(this.refs.button.getDOMNode()).parents('.dropdown, .b-tab').addClass('open').addClass('active');
	    this.setState({
	      pressed: true
	    }, cb);
	  },
	  pressed: function() {
	    return this.state.pressed;
	  },
	  focus: function() {
	    try {
	      this.refs.button.focus();
	    } catch(e) {
	      this.refs.button.getDOMNode().focus();
	    }
	  },
	  handleClick: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var menu = this.props.container.refs[this.props.menu];
	    if(this.pressed()) {
	      menu.hide();
	    } else {
	      this.press(function() {
	        menu.show();
	      });
	    }
	  },
	  handleMouseOver: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var menu = this.props.container.refs[this.props.menu];
	    this.press();
	    menu.show();
	  },
	  componentDidMount: function() {
	    this.props.container.refs[this.props.menu].setToggle(this);
	  },
	  render: function() {
	    var classes = classSet({
	      'dropdown-toggle': true,
	      'active': this.state.pressed
	    });
	    if(this.props.tab || this.props.nav) {
	      var props = React.mergeProps({
	        href: '#',
	        ref: 'button',
	        className: classes,
	        'data-toggle': 'dropdown',
	        onClick: this.handleClick,
	        onTouchEnd: this.handleClick,
	        onMouseOver: this.props.toggleOnHover ? this.handleMouseOver : null
	      }, this.props);

	      return (
	        React.createElement("a", React.__spread({},  props), 
	          this.props.children
	        )
	      );
	    }

	    var props = React.mergeProps({
	      ref: 'button',
	      type: 'button',
	      className: classes,
	      'data-toggle': 'dropdown',
	      onClick: this.handleClick,
	      onTouchEnd: this.handleClick,
	      onMouseOver: this.props.toggleOnHover ? this.handleMouseOver : null
	    }, this.props);

	    return (
	      React.createElement(Button, React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = DropdownButton;


/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Menu = React.createClass({displayName: "Menu",
	  activeItem: null,
	  toggle: null,
	  timer: null,
	  count: 0,
	  propTypes: {
	    noTimer: React.PropTypes.bool,
	    autoHide: React.PropTypes.bool,
	    alwaysInactive: React.PropTypes.bool,

	    alignLeft: React.PropTypes.bool,
	    alignRight: React.PropTypes.bool,

	    onItemSelect: React.PropTypes.func,
	    onShow: React.PropTypes.func,
	    onShown: React.PropTypes.func,
	    onHide: React.PropTypes.func,
	    onHidden: React.PropTypes.func,

	    bsStyle: React.PropTypes.string
	  },
	  getInitialState: function() {
	    return {
	      menuItems: [],
	      ul: {
	        display: 'none'
	      }
	    };
	  },
	  getDefaultProps: function() {
	    return {
	      autoHide: false,
	      bsStyle: 'default',
	      onItemSelect: function() {},
	      onShow: function() {},
	      onShown: function() {},
	      onHide: function() {},
	      onHidden: function() {}
	    };
	  },
	  setToggle: function(toggle) {
	    this.toggle = toggle;
	  },
	  activateItem: function(count, cb) {
	    var active = false, item = null;
	    var menuItems = this.state.menuItems;
	    for(var i=0; i < menuItems.length; i++) {
	      item = menuItems[i];
	      active = (item.props.count === count ? true : false);
	      menuItems[i] = React.addons.cloneWithProps(item, {active: active, key: item.key});
	    }
	    this.setState({menuItems: menuItems}, cb);
	  },
	  getActiveItem: function() {
	    if(this.activeItem)
	      return this.activeItem;
	    else
	      return {};
	  },
	  getActiveItemProps: function() {
	    return this.getActiveItem().props || {};
	  },
	  selectItem: function(key, value) {
	    var item = null, active = false;
	    var menuItems = this.state.menuItems;
	    for(var i=0; i < menuItems.length; i++) {
	      active = false;
	      item = menuItems[i];
	      if(item.props[key] === value) {
	        active = true;
	      }
	      menuItems[i] = React.addons.cloneWithProps(item, {
	        active: active, key: item.key
	      });
	    }
	    this.setState({menuItems: menuItems});
	  },
	  show: function(cb) {
	    if(!this.isMounted()) return;
	    this.props.onShow();
	    this.state.ul.display = 'block';
	    this.setState(this.state, function() {
	      if(this.activeItem) {
	        this.activeItem.focus();
	      }
	      if(cb) cb();
	      this.props.onShown();
	      setTimeout(function() {
	        $(window).trigger('resize');
	      }, 15);
	    }.bind(this));
	  },
	  hide: function(cb) {
	    if(!this.isMounted()) return;
	    this.props.onHide();
	    this.state.ul.display = 'none';
	    this.setState(this.state, function() {
	      try {
	        this.toggle.unpress();
	      } catch(e) {}

	      if(cb) cb();
	      this.props.onHidden();
	    }.bind(this));
	  },
	  componentWillMount: function() {
	    var menuItems = Array.isArray(this.props.children) ? this.props.children : [this.props.children];
	    var count = 0;
	    for(var i=0; i < menuItems.length; i++) {
	      var component = React.addons.cloneWithProps(menuItems[i], {
	        parent: this, autoHide: this.props.autoHide, alwaysInactive: this.props.alwaysInactive, key: i, count: ((menuItems[i].props.hasOwnProperty('href') && !menuItems[i].props.hasOwnProperty('disabled') ) ? ++count : null)
	      });
	      menuItems[i] = component;
	    }
	    this.count = count;
	    this.setState({menuItems: menuItems});
	  },
	  componentDidMount: function() {
	    var parent = $(this.refs.ul.getDOMNode()).parent('.dropdown, .btn-group, .input-group-btn, .b-tab');
	    $('body').bind('click.menu.'+this._currentElement.ref, function(e) {
	      if(parent.find(e.target).length)
	        return;
	      this.hide();
	    }.bind(this));
	    $('body').bind('mouseover.menu.'+this._currentElement.ref, function(e) {
	      clearTimeout(this.timer);
	      if(parent.find(e.target).length)
	        return;
	      if(this.props.noTimer)
	        return this.hide();
	      this.timer = setTimeout(function() {
	        try {
	          this.hide();
	        } catch(e) {}
	      }.bind(this), 500);
	    }.bind(this));
	  },
	  componentWillUnmount: function() {
	    $('body').unbind('click.menu.'+this._currentElement.ref);
	    $('body').unbind('mouseover.menu.'+this._currentElement.ref);
	  },
	  handleKeyUp: function(e) {
	    e.preventDefault();
	  },
	  handleKeyDown: function(e) {
	    e.preventDefault();
	    if(e.key === 'ArrowDown') { // down arrow
	      var newCount = 1;
	      if(this.activeItem) newCount = this.activeItem.props.count + 1;
	      if(newCount > this.count) newCount = 1;
	      this.activateItem(newCount);
	    } else if(e.key === 'ArrowUp') { // up arrow
	      var newCount = this.count;
	      if(this.activeItem) newCount = this.activeItem.props.count - 1;
	      if(newCount < 1) newCount = this.count;
	      this.activateItem(newCount);
	    } else if(e.key === 'Escape') { // escape
	      this.hide();
	      this.toggle.focus();
	    } else if(e.key === 'Enter') { // return
	      this.props.onItemSelect(this.getActiveItemProps(), this);
	      $(e.target).find('>.div-b-tab').trigger('click');
	    }
	  },
	  render: function() {
	    var classesObj = {
	      'dropdown-menu': true,
	      'dropdown-menu-left': this.props.alignLeft,
	      'dropdown-menu-right': this.props.alignRight
	    };

	    var bsStyles=this.props.bsStyle.split(',');
	    for(var i=0; i < bsStyles.length; i++) {
	      classesObj['menu-'+bsStyles[i].trim()] = true;
	    }

	    var classes = classSet(classesObj);

	    var props = React.mergeProps({
	      role: 'menu',
	      style: this.state.ul,
	      onKeyUp: this.handleKeyUp,
	      onKeyDown: this.handleKeyDown,
	      'aria-labelledby': this._currentElement.ref,
	      className: (classes.length ? classes : null)
	    }, this.props);

	    return (
	      React.createElement("ul", React.__spread({},  props, {ref: "ul"}), 
	        this.state.menuItems
	      )
	    );
	  }
	});

	module.exports = Menu;


/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var MenuItem = React.createClass({displayName: "MenuItem",
	  propTypes: {
	    focus: React.PropTypes.bool,
	    direct: React.PropTypes.bool,
	    header: React.PropTypes.bool,
	    noHover: React.PropTypes.bool,
	    divider: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    autoHide: React.PropTypes.bool,
	    alwaysInactive: React.PropTypes.bool
	  },
	  getInitialState: function() {
	    return {
	      active: (this.props.alwaysInactive ? false : (this.props.active || false))
	    };
	  },
	  getDefaultProps: function() {
	    return {
	      autoHide: false,
	      alwaysInactive: false
	    };
	  },
	  activate: function(cb) {
	    if(this.props.alwaysInactive) return;
	    this.setState({active: true}, cb);
	  },
	  deactivate: function(cb) {
	    if(this.props.alwaysInactive) return;
	    this.setState({active: false}, cb);
	  },
	  componentWillReceiveProps: function(nextProps) {
	    if(!nextProps.active) {
	      this.deactivate();
	    } else {
	      this.props.parent.activeItem = this;
	      this.activate(function() {
	        this.focus();
	      }.bind(this));
	    }
	  },
	  handleClick: function(e) {
	    if(!this.props.direct)
	      e.preventDefault();
	    e.preventDefault();
	    e.stopPropagation();
	    if(this.props.disabled)
	      return;
	    this.props.parent.activateItem(this.props.count, function() {
	      this.props.parent.props.onItemSelect(this.props, this.props.parent);
	      if(this.props.autoHide) {
	        this.props.parent.hide();
	      }
	      this.activate();
	    }.bind(this));
	  },
	  focus: function() {
	    if(this.refs.link) this.refs.link.getDOMNode().focus();
	  },
	  click: function() {
	    if(this.refs.link) this.refs.link.getDOMNode().click();
	  },
	  componentWillMount: function() {
	    if(this.props.active)
	      this.props.parent.activeItem = this;
	  },
	  render: function() {
	    if(this.props.header)
	      return React.createElement("li", {role: "presentation", className: "dropdown-header"}, this.props.children);
	    if(this.props.divider)
	      return React.createElement("li", {role: "presentation", className: "divider"});

	    var classes = classSet({
	      'active': this.state.active,
	      'disabled': this.props.disabled
	    });

	    if(this.props.noHover) {
	      var props = React.mergeProps({
	        role: 'presentation',
	        className: classes
	      }, this.props);

	      return (
	        React.createElement("li", React.__spread({},  props), 
	          this.props.children
	        )
	      );
	    }

	    var props = React.mergeProps({
	      role: 'presentation',
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("li", React.__spread({ref: "li"},  props), 
	        React.createElement("a", {ref: "link", role: "menuitem", tabIndex: "-1", href: this.props.href ? this.props.href : null, onClick: this.handleClick, onTouchEnd: this.handleClick}, 
	          this.props.children
	        )
	      )
	    );
	  }
	});

	module.exports = MenuItem;


/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var ButtonGroup = React.createClass({displayName: "ButtonGroup",
	  propTypes: {
	    lg: React.PropTypes.bool,
	    sm: React.PropTypes.bool,
	    xs: React.PropTypes.bool,

	    vertical: React.PropTypes.bool,
	    justified: React.PropTypes.bool,

	    dropup: React.PropTypes.bool
	  },
	  render: function() {
	    var isVertical = this.props.vertical ? true : false;
	    var classes = classSet({
	      'btn-group': !isVertical,

	      'btn-group-lg': this.props.lg,
	      'btn-group-sm': this.props.sm,
	      'btn-group-xs': this.props.xs,

	      'btn-group-vertical': isVertical,
	      'btn-group-justified': this.props.justified,

	      'dropup': this.props.dropup
	    });

	    var props = React.mergeProps({
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = ButtonGroup;


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	var ButtonToolbar = React.createClass({displayName: "ButtonToolbar",
	  render: function() {
	    var props = React.mergeProps({
	      role: 'toolbar',
	      className: 'btn-toolbar'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = ButtonToolbar;


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/** @jsx React.DOM */

	var classSet = React.addons.classSet;

	var TabPane = React.createClass({displayName: "TabPane",
	  listName: null,
	  paneName: null,
	  propTypes: {
	    tab: React.PropTypes.string.isRequired
	  },
	  getInitialState: function() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  stateChangeCallback: function(paneName) {
	    if(this.paneName === paneName) {
	      this.setState({active: true});
	    } else {
	      this.setState({active: false});
	    }
	  },
	  componentDidMount: function() {
	    ReactBootstrap.Dispatcher.on('tab:'+this.listName, this.stateChangeCallback);
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('tab:'+this.listName, this.stateChangeCallback);
	  },
	  render: function() {
	    var pane_str = this.props.tab.split(':');
	    this.listName = pane_str[0];
	    this.paneName = pane_str[1];

	    var classes = classSet({
	      'tab-pane': true,
	      'active': this.state.active
	    });

	    var props = React.mergeProps({
	      active: null,
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({ref: "pane"},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var TabContent = React.createClass({displayName: "TabContent",
	  render: function() {
	    var classes = classSet({
	      'tab-content': true
	    });

	    var props = React.mergeProps({
	      className: classes.trim()
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var Tab = React.createClass({displayName: "Tab",
	  listName: null,
	  paneName: null,
	  propTypes: {
	    pane: React.PropTypes.string,
	    disabled: React.PropTypes.bool
	  },
	  getInitialState: function() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  handleRawClick: function(e) {
	    if(this.props.disabled) return;
	    this.state.active = !this.state.active;
	    this.setState(this.state, function() {
	      if(this.props.dropdown) {
	        var node = $(this.refs.div.getDOMNode());
	        node.parents('li.b-tab').addClass('active');
	        node.parents('li[role=presentation]').addClass('active');
	      }
	      ReactBootstrap.Dispatcher.emit('tab:'+this.listName, this.paneName);
	    }.bind(this));
	  },
	  handleClick: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    this.handleRawClick();
	  },
	  stateChangeCallback: function(paneName) {
	    if(this.paneName === paneName) {
	      this.setState({active: true}, function() {
	        setTimeout(function() { $(window).trigger('resize'), 15});
	        if(!this.props.dropdown) {
	          var node = $(this.refs.li.getDOMNode());
	          node.siblings('.active').removeClass('active');
	        }
	        ReactBootstrap.Dispatcher.emit('tab:_tabchange_', this.listName, this.props);
	      }.bind(this));
	    } else {
	      this.setState({active: false});
	      if(this.props.dropdown) {
	        var node = $(this.refs.div.getDOMNode());
	        node.parents('li[role=presentation]').removeClass('active');
	      }
	    }
	  },
	  selectTabListener: function(data) {
	    if(this.props.hasOwnProperty(data.key) && this.props[data.key] === data.value)
	      this.handleRawClick();
	  },
	  componentDidMount: function() {
	    ReactBootstrap.Dispatcher.on('tab:'+this.listName, this.stateChangeCallback);
	    ReactBootstrap.Dispatcher.on('tab:select_tab', this.selectTabListener);
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('tab:'+this.listName, this.stateChangeCallback);
	    ReactBootstrap.Dispatcher.off('tab:select_tab', this.selectTabListener);
	  },
	  render: function() {
	    if(this.props.hasOwnProperty('pane')) {
	      var pane_str = this.props.pane.split(':');
	      this.listName = pane_str[0];
	      this.paneName = pane_str[1];
	    }

	    var classes = classSet({
	      'b-tab': true,
	      'active': this.state.active,
	      'dropdown': this.props.dropdown,
	      'disabled': this.props.disabled
	    });
	    if(this.props.dropdown) {
	      var props = React.mergeProps({
	        className: 'div-b-tab',
	        onClick: this.handleClick,
	        onTouchEnd: this.handleClick
	      }, this.props);
	      return (
	        React.createElement("div", React.__spread({ref: "div"},  props), this.props.children)
	      );
	    }
	    if(!this.props.hasOwnProperty('pane')) {
	      var props = React.mergeProps({
	        className: 'b-tab'
	      }, this.props);
	      return (
	        React.createElement("li", React.__spread({ref: "li"},  props), this.props.children)
	      );
	    }

	    var props = React.mergeProps({
	      active: null,
	      className: classes
	    });
	    return (
	      React.createElement("li", React.__spread({ref: "li"},  props), 
	        React.createElement("a", {href: "#", role: "tab", "data-toggle": "tab", onClick: this.handleClick, onTouchEnd: this.handleClick}, this.props.children)
	      )
	    );
	  }
	});

	var TabList = React.createClass({displayName: "TabList",
	  propTypes: {
	    pills: React.PropTypes.bool,
	    stacked: React.PropTypes.bool,
	    justified: React.PropTypes.bool,
	    bsStyle: React.PropTypes.string,
	    onTabSelect: React.PropTypes.func,
	    listName: React.PropTypes.string
	  },
	  getDefaultProps: function() {
	    return {
	      bsStyle: 'default',
	      onTabSelect: function() {}
	    };
	  },
	  onTabSelect: function(listName, child_props) {
	    if(child_props.parent === this || this.props.listName === listName) {
	      this.props.onTabSelect(child_props);
	    }
	  },
	  componentWillMount: function() {
	    var children = React.Children.map(this.props.children, function(child, i) {
	      return React.withContext(this._currentElement._context, function() {
	        return React.addons.cloneWithProps(child, {
	          parent: this, key: i
	        });
	      }.bind(this));
	    }, this);
	    this.setState({
	      children: children
	    });
	    ReactBootstrap.Dispatcher.on('tab:_tabchange_', this.onTabSelect);
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('tab:_tabchange_', this.onTabSelect);
	  },
	  selectTab: function(key, value) {
	    ReactBootstrap.Dispatcher.emit('tab:select_tab', {key: key, value: value});
	  },
	  render: function() {
	    var isPills = this.props.pills ? true : false;
	    var isStacked = this.props.stacked ? (
	                      this.props.pills ? true : false
	                    ) : false;
	    var classesObj = {
	      'nav': true,
	      'nav-tabs': !isPills,
	      'nav-pills': isPills,
	      'nav-stacked': isStacked,
	      'nav-justified': this.props.justified
	    };

	    var bsStyles=this.props.bsStyle.split(',');
	    for(var i=0; i < bsStyles.length; i++) {
	      classesObj['nav-'+bsStyles[i].trim()] = true;
	    }

	    var classes = classSet(classesObj);

	    var tablist = classSet({
	      'tablist': !isPills ? true : false
	    });

	    var props = React.mergeProps({
	      className: classes,
	      role: tablist
	    }, this.props);

	    return (
	      React.createElement("ul", React.__spread({},  props), 
	        this.state.children
	      )
	    );
	  }
	});

	var TabContainer = React.createClass({displayName: "TabContainer",
	  render: function() {
	    var props = React.mergeProps({
	      className:'tab-container'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.Tab = Tab;
	module.exports.TabList = TabList;
	module.exports.TabPane = TabPane;
	module.exports.TabContent = TabContent;
	module.exports.TabContainer = TabContainer;


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;

	var Form = __webpack_require__(7);
	var Button = __webpack_require__(13);

	var NavMixin = {
	  propTypes: {
	    left: React.PropTypes.bool,
	    right: React.PropTypes.bool
	  },
	  getDefaultProps: function() {
	    return {
	      left: false,
	      right: false
	    };
	  },
	  getInitialState: function() {
	    return {
	      children: []
	    };
	  },
	  classSet: function(obj) {
	    obj['navbar-left'] = this.props.left;
	    obj['navbar-right'] = this.props.right;
	    return classSet(obj);
	  },
	  preRender: function(ComponentClass, obj) {
	    var classes = this.classSet(obj);

	    var props = React.mergeProps({
	      className: classes
	    }, this.props);

	    return (
	      React.createElement(ComponentClass, React.__spread({},  props), 
	        this.state.children
	      )
	    );
	  }
	};

	var NavButton = React.createClass({displayName: "NavButton",
	  mixins: [NavMixin],
	  componentWillMount: function() {
	    this.setState({
	      children: this.props.children
	    });
	  },
	  render: function() {
	    return this.preRender(Button);
	  }
	});

	var NavLink = React.createClass({displayName: "NavLink",
	  mixins: [NavMixin],
	  componentWillMount: function() {
	    this.setState({
	      children: this.props.children
	    });
	  },
	  render: function() {
	    return this.preRender('a', {
	      'navbar-link': true
	    });
	  }
	});

	var NavText = React.createClass({displayName: "NavText",
	  mixins: [NavMixin],
	  componentWillMount: function() {
	    this.setState({
	      children: this.props.children
	    });
	  },
	  render: function() {
	    return this.preRender('p', {
	      'navbar-text': true
	    });
	  }
	});

	var NavToggle = React.createClass({displayName: "NavToggle",
	  getInitialState: function() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  press: function(cb) {
	    this.setState({
	      active: true
	    }, cb);
	  },
	  unpress: function(cb) {
	    this.setState({
	      active: false
	    }, cb);
	  },
	  isActive: function() {
	    return this.state.active;
	  },
	  handleClick: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    var container = this.props.container.refs;
	    var nav = this.props.nav;
	    if(container.hasOwnProperty(nav)) {
	      if(this.isActive()) {
	        this.unpress(function() {
	          container[nav].collapse();
	        });
	      } else {
	        this.press(function() {
	          container[nav].expand();
	        });
	      }
	    }
	  },
	  render: function() {
	    var classes = classSet({
	      'navbar-toggle': true,
	      'active': this.state.active
	    });
	    return (
	      React.createElement(Button, {className: classes, "data-toggle": "collapse", onClick: this.handleClick, onTouchEnd: this.handleClick}, 
	        React.createElement("span", {className: "sr-only"}, this.props.children), 
	        React.createElement("span", {className: "icon-bar"}), 
	        React.createElement("span", {className: "icon-bar"}), 
	        React.createElement("span", {className: "icon-bar"})
	      )
	    );
	  }
	});

	var NavForm = React.createClass({displayName: "NavForm",
	  mixins: [NavMixin],
	  getDefaultProps: function() {
	    return {
	      role: 'search'
	    };
	  },
	  componentWillMount: function() {
	    this.setState({
	      children: this.props.children
	    });
	  },
	  render: function() {
	    return this.preRender(Form, {
	      'navbar-form': true,
	      'form-inline': true
	    });
	  }
	});

	var NavItem = React.createClass({displayName: "NavItem",
	  propTypes: {
	    direct: React.PropTypes.bool,
	    active: React.PropTypes.bool,
	    divider: React.PropTypes.bool
	  },
	  getInitialState: function() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  press: function(cb) {
	    this.setState({
	      active: true
	    }, cb);
	  },
	  unpress: function(cb) {
	    this.setState({
	      active: false
	    }, cb);
	  },
	  isActive: function() {
	    return this.state.active;
	  },
	  handleClick: function(e) {
	    if(!this.props.direct)
	      e.preventDefault();
	      e.stopPropagation();
	    this.props.parent.deactivateAll(function() {
	      this.press();
	      this.props.parent.props.onItemSelect(this.props);
	      if(typeof this.props.onTouchEnd === 'function') return this.props.onTouchEnd();
	      if(typeof this.props.onClick === 'function') this.props.onClick();
	    }.bind(this));
	  },
	  focus: function() {
	    if(this.refs.link) this.refs.link.getDOMNode().focus();
	  },
	  click: function() {
	    if(this.refs.link) this.refs.link.getDOMNode().click();
	  },
	  componentWillReceiveProps: function(nextProps) {
	    if(!nextProps.active) {
	      this.state.active = false;
	      this.setState(this.state);
	    } else {
	      this.state.active = true;
	      this.props.parent.activeItem = this;
	      this.setState(this.state);
	    }
	  },
	  render: function() {
	    if(this.props.divider) {
	      var props = React.mergeProps({
	        className: 'divider'
	      }, this.props);

	      return (
	        React.createElement("li", React.__spread({},  props))
	      );
	    }
	    var classes = classSet({
	      'active': this.state.active
	    });
	    var children = null, linkProps;
	    if(this.props.href) {
	      linkProps = React.mergeProps(this.props, {
	        href: this.props.href,
	        onClick: this.handleClick,
	        onTouchEnd: this.handleClick
	      });
	      children = React.createElement("a", React.__spread({ref: "link"},  linkProps), this.props.children);
	    } else {
	      if(this.props.dropdown) {
	        classes = 'dropdown';
	      }
	      children = this.props.children;
	    }

	    var props = React.mergeProps({
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("li", React.__spread({},  props), 
	        children
	      )
	    );
	  }
	});

	var Nav = React.createClass({displayName: "Nav",
	  activeItem: null,
	  mixins: [NavMixin],
	  propTypes: {
	    onItemSelect: React.PropTypes.func
	  },
	  getDefaultProps: function() {
	    return {
	      onItemSelect: function() {}
	    };
	  },
	  deactivateAll: function(cb) {
	    var children = React.Children.map(this.props.children, function(child, i) {
	      return React.addons.cloneWithProps(child, {
	        parent: this, active: false, key: i
	      });
	    }, this);
	    this.setState({
	      children: children
	    }, cb)
	  },
	  getActiveItem: function() {
	    if(this.activeItem)
	      return this.activeItem;
	    else
	      return {};
	  },
	  getActiveItemProps: function() {
	    return this.activeItem().props || {};
	  },
	  selectItem: function(key, value, cb) {
	    var active = false;
	    var children = React.Children.map(this.props.children, function(child, i) {
	      if(!this.state.children[i].props.dropdown) {
	        active = false;
	        if(child.props[key] === value) active = true;
	        return React.withContext(this._currentElement._context, function() {
	          return React.addons.cloneWithProps(child, {
	            parent: this, active: active, key: i
	          });
	        }.bind(this));
	      }
	    }, this);
	    this.setState({
	      children: children
	    }, cb);
	  },
	  componentWillMount: function() {
	    var children = React.Children.map(this.props.children, function(child, i) {
	      return React.withContext(this._currentElement._context, function() {
	        return React.addons.cloneWithProps(child, {
	          parent: this, key: i
	        });
	      }.bind(this));
	    }, this);
	    this.setState({
	      children: children
	    });
	  },
	  componentWillReceiveProps: function(nextProps) {
	    var children = React.Children.map(nextProps.children, function(child, i) {
	      return React.withContext(this._currentElement._context, function() {
	        return React.addons.cloneWithProps(child, {
	          parent: this, key: i
	        });
	      }.bind(this));
	    }, this);
	    this.setState({
	      children: children
	    });
	  },
	  render: function() {
	    return this.preRender('ul', {
	      'nav': true,
	      'navbar-nav': true
	    });
	  }
	});

	var NavContent = React.createClass({displayName: "NavContent",
	  propTypes: {
	    collapse: React.PropTypes.bool
	  },
	  getInitialState: function() {
	    return {
	      collapse: this.props.collapse || false
	    };
	  },
	  collapse: function() {
	    this.setState({
	      collapse: true
	    });
	  },
	  expand: function() {
	    this.setState({
	      collapse: false
	    });
	  },
	  render: function() {
	    var isCollapse = this.state.collapse ? true : false;
	    var classes = classSet({
	      'navbar-content': true,
	      'collapse': isCollapse,
	      'navbar-collapse': isCollapse
	    });

	    var props = React.mergeProps({
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var NavBrand = React.createClass({displayName: "NavBrand",
	  render: function() {
	    var props = React.mergeProps({
	      to: '#',
	      className: 'navbar-brand'
	    }, this.props);

	    return (
	      React.createElement("a", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var NavHeader = React.createClass({displayName: "NavHeader",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'navbar-header'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var NavBar = React.createClass({displayName: "NavBar",
	  propTypes: {
	    inverse: React.PropTypes.bool,
	    fixedTop: React.PropTypes.bool,
	    staticTop: React.PropTypes.bool,
	    fixedBottom: React.PropTypes.bool
	  },
	  statics: {
	    zIndex: 9999999,
	    getZIndex: function() {
	      return --NavBar.zIndex;
	    }
	  },
	  render: function() {
	    var classes = classSet({
	      'navbar': true,
	      'navbar-default': true,
	      'navbar-inverse': this.props.inverse,
	      'navbar-fixed-top': this.props.fixedTop,
	      'navbar-static-top': this.props.staticTop,
	      'navbar-fixed-bottom': this.props.fixedBottom
	    });

	    var props = React.mergeProps({
	      className: classes,
	      role: 'navigation',
	      style: {
	        zIndex: NavBar.getZIndex()
	      }
	    }, this.props);

	    return (
	      React.createElement("nav", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.Nav = Nav;
	module.exports.NavBar = NavBar;
	module.exports.NavItem = NavItem;
	module.exports.NavText = NavText;
	module.exports.NavLink = NavLink;
	module.exports.NavForm = NavForm;
	module.exports.NavBrand = NavBrand;
	module.exports.NavHeader = NavHeader;
	module.exports.NavButton = NavButton;
	module.exports.NavContent = NavContent;
	module.exports.NavToggle = NavToggle;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var BLink = React.createClass({displayName: "BLink",
	  propTypes: {
	    active: React.PropTypes.bool
	  },
	  render: function() {
	    var classes = classSet({
	      'active': this.props.active
	    });
	    var children = (
	      React.createElement("a", {href: this.props.href}, 
	        React.createElement("span", null, this.props.children), 
	        React.createElement("span", null, " ")
	      )
	    );
	    if(this.props.active)
	      children = this.props.children;

	    var props = React.mergeProps({
	      href: null,
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("li", React.__spread({},  props), 
	        children
	      )
	    );
	  }
	});

	var Breadcrumb = React.createClass({displayName: "Breadcrumb",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'breadcrumb'
	    }, this.props);

	    return (
	      React.createElement("ol", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.BLink = BLink;
	module.exports.Breadcrumb = Breadcrumb;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Page = React.createClass({displayName: "Page",
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
	      children = React.createElement("span", null, this.props.children, " →")
	    } else if(this.props.previous) {
	      children = React.createElement("span", null, "← ", this.props.children)
	    } else if(this.props.active) {
	      children = React.createElement("span", null, this.props.children, React.createElement("span", {className: "sr-only"}, "(current)"))
	    } else {
	      children = this.props.children
	    }

	    var props = React.mergeProps({
	      href: null,
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("li", React.__spread({},  props), 
	        React.createElement("a", {href: this.props.href || '#'}, 
	          children
	        )
	      )
	    );
	  }
	});

	var Pagination = React.createClass({displayName: "Pagination",
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
	      React.createElement("ul", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var Pager = React.createClass({displayName: "Pager",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'pager'
	    }, this.props);

	    return (
	      React.createElement("ul", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.Page = Page;
	module.exports.Pager = Pager;
	module.exports.Pagination = Pagination;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

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
	      React.createElement("span", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	};

	var Badge = React.createClass({displayName: "Badge",
	  mixins: [BMixin],
	  render: function() {
	    return this.preRender({
	      'badge': true
	    }, 'badge');
	  }
	});

	var BLabel = React.createClass({displayName: "BLabel",
	  mixins: [BMixin],
	  render: function() {
	    return this.preRender({
	      'label': true
	    }, 'label')
	  }
	});

	module.exports.Badge = Badge;
	module.exports.BLabel = BLabel;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Jumbotron = React.createClass({displayName: "Jumbotron",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'jumbotron'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Jumbotron;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;

	var ProgressGroup = React.createClass({displayName: "ProgressGroup",
	  propTypes: {
	    collapseBottom: React.PropTypes.bool
	  },
	  componentWillMount: function() {
	    var children = this.props.children;

	    if(Array.isArray(children)) {
	      children = React.Children.map(this.props.children, function(child, i) {
	        return React.addons.cloneWithProps(child, {
	          stack: true, key: child.props.key
	        });
	      }, this);
	    }

	    this.setState({
	      children: children
	    });
	  },
	  render: function() {
	    var classes = React.addons.classSet({
	      'progress': true,
	      'progress-collapse-bottom': this.props.collapseBottom
	    });

	    var props = React.mergeProps({
	      className: classes.trim(),
	      style: {
	        background: this.props.background || null
	      }
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.state.children
	      )
	    );
	  }
	});

	var Progress = React.createClass({displayName: "Progress",
	  propTypes: {
	    min: React.PropTypes.number,
	    max: React.PropTypes.number,
	    value: React.PropTypes.number,

	    stack: React.PropTypes.bool,
	    active: React.PropTypes.bool,

	    info: React.PropTypes.bool,
	    danger: React.PropTypes.bool,
	    success: React.PropTypes.bool,
	    warning: React.PropTypes.bool,
	    striped: React.PropTypes.bool,
	    withLabel: React.PropTypes.oneOfType([
	      React.PropTypes.bool,
	      React.PropTypes.string
	    ]),

	    color: React.PropTypes.string,
	    fgColor: React.PropTypes.string,
	    background: React.PropTypes.string,
	    collapseBottom: React.PropTypes.bool
	  },
	  getInitialState: function() {
	    return {
	      min: this.props.min || 0,
	      max: this.props.max || 100,
	      value: this.props.value || 0
	    };
	  },
	  setValue: function(value) {
	    this.state.value = value;
	    this.setState(this.state);
	  },
	  getValue: function() {
	    return this.state.value;
	  },
	  setMin: function(min) {
	    this.state.min = min;
	    this.setState(this.state);
	  },
	  getMin: function() {
	    return this.state.min;
	  },
	  setMax: function(max) {
	    this.state.max = max;
	    this.setState(this.state);
	  },
	  getMax: function() {
	    return this.state.max;
	  },
	  render: function() {
	    var classes = classSet({
	      'progress-bar': true,
	      'active': this.props.active,
	      'progress-bar-info': this.props.info,
	      'progress-bar-danger': this.props.danger,
	      'progress-bar-success': this.props.success,
	      'progress-bar-warning': this.props.warning,
	      'progress-bar-striped': this.props.striped,
	      'progress-collapse-bottom': this.props.collapseBottom && this.props.stack
	    });

	    var suffix = '';
	    for(var prop in this.props) {
	      switch(prop) {
	        case 'info':
	        case 'danger':
	        case 'success':
	        case 'warning':
	          suffix = ' ('+prop+')';
	        break;
	        default:
	        break;
	      }
	    }

	    var child = React.createElement("span", {className: "sr-only"}, this.state.value, "% Complete", suffix);
	    if(this.props.withLabel)
	      child = React.createElement("span", {style: {color: this.props.fgColor}}, this.props.withLabel || this.state.value+'%');

	    if(this.props.stack) {
	      var props = React.mergeProps({
	        className: classes,
	        role: 'progressbar',
	        'aria-valuenow': this.state.value,
	        'aria-valuemin': this.state.min,
	        'aria-valuemax': this.state.max,
	        style: {
	          width: this.state.value + '%',
	          background: this.props.color || null,
	          minWidth: this.props.minWidth
	        }
	      }, this.props);

	      return (
	        React.createElement("div", React.__spread({},  props), 
	          child
	        )
	      );
	    }

	    return (
	      React.createElement(ProgressGroup, React.__spread({},  this.props), 
	        React.createElement("div", {className: classes, role: "progressbar", "aria-valuenow": this.state.value, "aria-valuemin": this.state.min, "aria-valuemax": this.state.max, style: {width: this.state.value+'%', background: this.props.color || null, minWidth: this.props.minWidth}}, 
	          child
	        )
	      )
	    );
	  }
	});

	module.exports.Progress = Progress;
	module.exports.ProgressGroup = ProgressGroup;


/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var MediaBody = React.createClass({displayName: "MediaBody",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'media-body'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var Media = React.createClass({displayName: "Media",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'media'
	    }, this.props);

	    return (
	      React.createElement("li", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});


	var MediaDiv = React.createClass({displayName: "MediaDiv",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'media'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var MediaList = React.createClass({displayName: "MediaList",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'media-list'
	    }, this.props);

	    return (
	      React.createElement("ul", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var MediaObject = React.createClass({displayName: "MediaObject",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'media-object'
	    }, this.props);

	    return (
	      React.createElement("img", React.__spread({},  props))
	    );
	  }
	});

	var MediaHeading = React.createClass({displayName: "MediaHeading",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'media-heading fg-black50'
	    }, this.props);

	    return (
	      React.createElement("h4", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.Media = Media;
	module.exports.MediaDiv = MediaDiv;
	module.exports.MediaBody = MediaBody;
	module.exports.MediaList = MediaList;
	module.exports.MediaObject = MediaObject;
	module.exports.MediaHeading = MediaHeading;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;

	var ListGroupItemText = React.createClass({displayName: "ListGroupItemText",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'list-group-item-text'
	    }, this.props);

	    return (
	      React.createElement("p", React.__spread({},  props), this.props.children)
	    );
	  }
	});

	var ListGroupItemHeading = React.createClass({displayName: "ListGroupItemHeading",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'list-group-item-heading'
	    }, this.props);

	    return (
	      React.createElement("h4", React.__spread({},  props), this.props.children)
	    );
	  }
	});

	var ListGroupItem = React.createClass({displayName: "ListGroupItem",
	  propTypes: {
	    active: React.PropTypes.bool,
	    disabled: React.PropTypes.bool,
	    bsStyle: React.PropTypes.string,

	    info: React.PropTypes.bool,
	    danger: React.PropTypes.bool,
	    warning: React.PropTypes.bool,
	    success: React.PropTypes.bool
	  },
	  render: function() {
	    var classesObj = {
	      'list-group-item': true,
	      'active': this.props.active,
	      'disabled': this.props.disabled,
	      'list-group-item-info': this.props.info,
	      'list-group-item-danger': this.props.danger,
	      'list-group-item-warning': this.props.warning,
	      'list-group-item-success': this.props.success
	    };

	    if(this.props.bsStyle) {
	      var bsStyles=this.props.bsStyle.split(',');
	      for(var i=0; i < bsStyles.length; i++) {
	        classesObj['list-group-'+bsStyles[i].trim()] = true;
	      }
	    }

	    var classes = classSet(classesObj);

	    var props = React.mergeProps({
	      href: '#',
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("a", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var ListGroup = React.createClass({displayName: "ListGroup",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'list-group'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.ListGroup = ListGroup;
	module.exports.ListGroupItem = ListGroupItem;
	module.exports.ListGroupItemText = ListGroupItemText;
	module.exports.ListGroupItemHeading = ListGroupItemHeading;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;
	var Well = React.createClass({displayName: "Well",
	  propTypes: {
	    lg: React.PropTypes.bool,
	    sm: React.PropTypes.bool
	  },
	  render: function() {
	    var classes = classSet({
	      'well': true,
	      'well-lg': this.props.lg,
	      'well-sm': this.props.sm
	    });
	    var style = {};
	    if(this.props.noMargin) style.margin = 0;

	    var props = React.mergeProps({
	      style: style,
	      className: classes
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports = Well;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;

	var ModalManager = {};
	var ModalFooter = React.createClass({displayName: "ModalFooter",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'modal-footer'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var ModalBody = React.createClass({displayName: "ModalBody",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'modal-body'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var ModalHeader = React.createClass({displayName: "ModalHeader",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'modal-header'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var Modal = React.createClass({displayName: "Modal",
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
	      React.createElement("div", React.__spread({ref: "modal"},  props), 
	        React.createElement("div", {className: modalDialogClasses.trim()}, 
	          React.createElement("div", {className: "modal-content"}, 
	            this.props.children
	          )
	        )
	      )
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


/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var Icon = __webpack_require__(17);
	var Button = __webpack_require__(13);

	var classSet = React.addons.classSet;

	var PanelRight = React.createClass({displayName: "PanelRight",
	  render: function() {
	    var props = React.mergeProps({
	      className: classSet({
	        'rubix-panel-right': true,
	        noRadius: this.props.noRadius
	      }).trim()
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var PanelLeft = React.createClass({displayName: "PanelLeft",
	  render: function() {
	    var props = React.mergeProps({
	      className: classSet({
	        'rubix-panel-left': true,
	        noRadius: this.props.noRadius
	      }).trim()
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var PanelFooter = React.createClass({displayName: "PanelFooter",
	  render: function() {
	    var props = React.mergeProps({
	      className: classSet({
	        'rubix-panel-footer': true,
	        noRadius: this.props.noRadius
	      }).trim()
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var PanelHeader = React.createClass({displayName: "PanelHeader",
	  render: function() {
	    var props = React.mergeProps({
	      className: classSet({
	        'rubix-panel-header': true,
	        noRadius: this.props.noRadius
	      }).trim()
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var PanelBody = React.createClass({displayName: "PanelBody",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'rubix-panel-body'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var Panel = React.createClass({displayName: "Panel",
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
	      React.createElement("div", React.__spread({},  props), 
	        React.createElement("div", null, this.props.children)
	      )
	    );
	  }
	});

	var PanelContainer = React.createClass({displayName: "PanelContainer",
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
	        React.createElement("div", {className: controlClasses}, 
	          React.createElement(Button, null, 
	            React.createElement(Icon, {bundle: "fontello", glyph: "loop-alt-1"})
	          ), 
	          React.createElement(Button, {onClick: this.toggle, onTouchEnd: this.toggle}, 
	            React.createElement(Icon, {bundle: "fontello", glyph: this.state.collapseIcon})
	          ), 
	          React.createElement(Button, {onClick: this.remove, onTouchEnd: this.remove}, 
	            React.createElement(Icon, {bundle: "fontello", glyph: "cancel"})
	          )
	        )
	      );
	    }

	    if(this.props.customControls) {
	      controls = (
	        React.createElement("div", {className: controlClasses}, 
	          this.props.customControls
	        )
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
	      React.createElement("div", React.__spread({},  props), 
	        controls, 
	        React.createElement("div", {ref: "container", className: containerClasses.trim()}, 
	          this.props.children
	        )
	      )
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


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * @copyright https://github.com/f/loremjs
	 * @licence https://github.com/f/loremjs/blob/master/LICENSE
	 */

	var Lorem;
	(function() {

	    //Create a class named Lorem and constructor
	    Lorem = function() {
	        //Default values.
	        this.type = null;
	        this.query = null;
	        this.data = null;
	    };
	    //Static variables
	    Lorem.IMAGE = 1;
	    Lorem.TEXT = 2;
	    Lorem.TYPE = {
	        PARAGRAPH: 1,
	        SENTENCE: 2,
	        WORD: 3
	    };
	    //Words to create lorem ipsum text.
	    Lorem.WORDS = [
	        "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "ut", "aliquam,", "purus", "sit", "amet", "luctus", "venenatis,", "lectus", "magna", "fringilla", "urna,", "porttitor", "rhoncus", "dolor", "purus", "non", "enim", "praesent", "elementum", "facilisis", "leo,", "vel", "fringilla", "est", "ullamcorper", "eget", "nulla", "facilisi", "etiam", "dignissim", "diam", "quis", "enim", "lobortis", "scelerisque", "fermentum", "dui", "faucibus", "in", "ornare", "quam", "viverra", "orci", "sagittis", "eu", "volutpat", "odio", "facilisis", "mauris", "sit", "amet", "massa", "vitae", "tortor", "condimentum", "lacinia", "quis", "vel", "eros", "donec", "ac", "odio", "tempor", "orci", "dapibus", "ultrices", "in", "iaculis", "nunc", "sed", "augue", "lacus,", "viverra", "vitae", "congue", "eu,", "consequat", "ac", "felis", "donec", "et", "odio", "pellentesque", "diam", "volutpat", "commodo", "sed", "egestas", "egestas", "fringilla", "phasellus", "faucibus", "scelerisque", "eleifend", "donec", "pretium", "vulputate", "sapien", "nec", "sagittis", "aliquam", "malesuada", "bibendum", "arcu", "vitae", "elementum",
	        "curabitur", "vitae", "nunc", "sed", "velit", "dignissim", "sodales", "ut", "eu", "sem", "integer", "vitae", "justo", "eget", "magna", "fermentum", "iaculis", "eu", "non", "diam", "phasellus", "vestibulum", "lorem", "sed", "risus", "ultricies", "tristique", "nulla", "aliquet", "enim", "tortor,", "at", "auctor", "urna", "nunc", "id", "cursus", "metus", "aliquam", "eleifend", "mi", "in", "nulla", "posuere", "sollicitudin", "aliquam", "ultrices", "sagittis", "orci,", "a", "scelerisque", "purus", "semper", "eget", "duis", "at", "tellus", "at", "urna", "condimentum", "mattis", "pellentesque", "id", "nibh", "tortor,", "id", "aliquet", "lectus", "proin", "nibh", "nisl,", "condimentum", "id", "venenatis", "a,", "condimentum", "vitae", "sapien", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "sed", "tempus,", "urna", "et", "pharetra", "pharetra,", "massa", "massa", "ultricies", "mi,", "quis", "hendrerit", "dolor", "magna", "eget", "est", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "integer", "eget", "aliquet", "nibh", "praesent", "tristique", "magna", "sit", "amet", "purus", "gravida", "quis", "blandit", "turpis", "cursus", "in", "hac", "habitasse", "platea", "dictumst", "quisque", "sagittis,", "purus", "sit", "amet", "volutpat", "consequat,", "mauris", "nunc", "congue", "nisi,", "vitae", "suscipit", "tellus", "mauris", "a", "diam",
	        "maecenas", "sed", "enim", "ut", "sem", "viverra", "aliquet", "eget", "sit", "amet", "tellus", "cras", "adipiscing", "enim", "eu", "turpis", "egestas", "pretium", "aenean", "pharetra,", "magna", "ac", "placerat", "vestibulum,", "lectus", "mauris", "ultrices", "eros,", "in", "cursus", "turpis", "massa", "tincidunt", "dui", "ut", "ornare", "lectus", "sit", "amet", "est", "placerat", "in", "egestas", "erat", "imperdiet", "sed", "euismod", "nisi", "porta", "lorem", "mollis", "aliquam", "ut", "porttitor", "leo", "a", "diam", "sollicitudin", "tempor", "id", "eu", "nisl", "nunc", "mi", "ipsum,", "faucibus", "vitae", "aliquet", "nec,", "ullamcorper", "sit", "amet", "risus", "nullam", "eget", "felis", "eget", "nunc", "lobortis", "mattis", "aliquam", "faucibus", "purus", "in", "massa", "tempor", "nec", "feugiat", "nisl", "pretium", "fusce", "id", "velit", "ut", "tortor", "pretium", "viverra", "suspendisse", "potenti", "nullam", "ac", "tortor", "vitae", "purus", "faucibus", "ornare", "suspendisse", "sed", "nisi", "lacus,", "sed", "viverra", "tellus", "in", "hac", "habitasse", "platea", "dictumst", "vestibulum", "rhoncus", "est", "pellentesque", "elit", "ullamcorper", "dignissim", "cras", "tincidunt", "lobortis", "feugiat", "vivamus", "at", "augue", "eget", "arcu", "dictum", "varius", "duis", "at", "consectetur", "lorem",
	        "donec", "massa", "sapien,", "faucibus", "et", "molestie", "ac,", "feugiat", "sed", "lectus", "vestibulum", "mattis", "ullamcorper", "velit", "sed", "ullamcorper", "morbi", "tincidunt", "ornare", "massa,", "eget", "egestas", "purus", "viverra", "accumsan", "in", "nisl", "nisi,", "scelerisque", "eu", "ultrices", "vitae,", "auctor", "eu", "augue", "ut", "lectus", "arcu,", "bibendum", "at", "varius", "vel,", "pharetra", "vel", "turpis", "nunc", "eget", "lorem", "dolor,", "sed", "viverra", "ipsum", "nunc", "aliquet", "bibendum", "enim,", "facilisis", "gravida", "neque", "convallis", "a", "cras", "semper", "auctor", "neque,", "vitae", "tempus", "quam", "pellentesque", "nec", "nam", "aliquam", "sem", "et", "tortor", "consequat", "id", "porta", "nibh", "venenatis", "cras", "sed", "felis", "eget", "velit", "aliquet", "sagittis", "id", "consectetur", "purus", "ut", "faucibus", "pulvinar", "elementum", "integer", "enim", "neque,", "volutpat", "ac", "tincidunt", "vitae,", "semper", "quis", "lectus", "nulla", "at", "volutpat", "diam", "ut", "venenatis", "tellus", "in", "metus", "vulputate", "eu", "scelerisque", "felis", "imperdiet", "proin", "fermentum", "leo", "vel", "orci", "porta", "non", "pulvinar", "neque", "laoreet", "suspendisse", "interdum", "consectetur", "libero,", "id", "faucibus", "nisl", "tincidunt", "eget", "nullam", "non", "nisi", "est,", "sit", "amet", "facilisis", "magna",
	        "etiam", "tempor,", "orci", "eu", "lobortis", "elementum,", "nibh", "tellus", "molestie", "nunc,", "non", "blandit", "massa", "enim", "nec", "dui", "nunc", "mattis", "enim", "ut", "tellus", "elementum", "sagittis", "vitae", "et", "leo", "duis", "ut", "diam", "quam", "nulla", "porttitor", "massa", "id", "neque", "aliquam", "vestibulum", "morbi", "blandit", "cursus", "risus,", "at", "ultrices", "mi", "tempus", "imperdiet", "nulla", "malesuada", "pellentesque", "elit", "eget", "gravida", "cum", "sociis", "natoque", "penatibus", "et", "magnis", "dis", "parturient", "montes,", "nascetur", "ridiculus", "mus", "mauris", "vitae", "ultricies", "leo", "integer", "malesuada", "nunc", "vel", "risus", "commodo", "viverra", "maecenas", "accumsan,", "lacus", "vel", "facilisis", "volutpat,", "est", "velit", "egestas", "dui,", "id", "ornare", "arcu", "odio", "ut", "sem", "nulla", "pharetra", "diam", "sit", "amet", "nisl", "suscipit", "adipiscing", "bibendum", "est", "ultricies", "integer", "quis", "auctor", "elit",
	        "sed", "vulputate", "mi", "sit", "amet", "mauris", "commodo", "quis", "imperdiet", "massa", "tincidunt", "nunc", "pulvinar", "sapien", "et", "ligula", "ullamcorper", "malesuada", "proin", "libero", "nunc,", "consequat", "interdum", "varius", "sit", "amet,", "mattis", "vulputate", "enim", "nulla", "aliquet", "porttitor", "lacus,", "luctus", "accumsan", "tortor", "posuere", "ac", "ut", "consequat", "semper", "viverra", "nam", "libero", "justo,", "laoreet", "sit", "amet", "cursus", "sit", "amet,", "dictum", "sit", "amet", "justo", "donec", "enim", "diam,", "vulputate", "ut", "pharetra", "sit", "amet,", "aliquam", "id", "diam", "maecenas", "ultricies", "mi", "eget", "mauris", "pharetra", "et", "ultrices", "neque", "ornare", "aenean", "euismod", "elementum", "nisi,", "quis", "eleifend", "quam", "adipiscing", "vitae", "proin", "sagittis,", "nisl", "rhoncus", "mattis", "rhoncus,", "urna", "neque", "viverra", "justo,", "nec", "ultrices", "dui", "sapien", "eget", "mi", "proin", "sed", "libero", "enim,", "sed", "faucibus", "turpis", "in", "eu", "mi", "bibendum", "neque", "egestas", "congue", "quisque", "egestas", "diam", "in", "arcu", "cursus", "euismod", "quis", "viverra", "nibh", "cras", "pulvinar", "mattis", "nunc,", "sed", "blandit", "libero", "volutpat", "sed", "cras", "ornare", "arcu", "dui", "vivamus", "arcu", "felis,", "bibendum", "ut", "tristique", "et,", "egestas", "quis", "ipsum", "suspendisse", "ultrices", "gravida", "dictum",
	        "fusce", "ut", "placerat", "orci", "nulla", "pellentesque", "dignissim", "enim,", "sit", "amet", "venenatis", "urna", "cursus", "eget", "nunc", "scelerisque", "viverra", "mauris,", "in", "aliquam", "sem", "fringilla", "ut", "morbi", "tincidunt", "augue", "interdum", "velit", "euismod", "in", "pellentesque", "massa", "placerat", "duis", "ultricies", "lacus", "sed", "turpis", "tincidunt", "id", "aliquet", "risus", "feugiat", "in", "ante", "metus,", "dictum", "at", "tempor", "commodo,", "ullamcorper", "a", "lacus", "vestibulum", "sed", "arcu", "non", "odio", "euismod", "lacinia", "at", "quis", "risus", "sed", "vulputate", "odio", "ut", "enim", "blandit", "volutpat", "maecenas", "volutpat", "blandit", "aliquam", "etiam", "erat", "velit,", "scelerisque", "in", "dictum", "non,", "consectetur", "a", "erat", "nam", "at", "lectus", "urna", "duis", "convallis", "convallis", "tellus,", "id", "interdum", "velit", "laoreet", "id", "donec", "ultrices", "tincidunt", "arcu,", "non", "sodales", "neque", "sodales", "ut", "etiam", "sit", "amet", "nisl", "purus,", "in", "mollis", "nunc",
	        "sed", "id", "semper", "risus", "in", "hendrerit", "gravida", "rutrum", "quisque", "non", "tellus", "orci,", "ac", "auctor", "augue", "mauris", "augue", "neque,", "gravida", "in", "fermentum", "et,", "sollicitudin", "ac", "orci", "phasellus", "egestas", "tellus", "rutrum", "tellus", "pellentesque", "eu", "tincidunt", "tortor", "aliquam", "nulla", "facilisi", "cras", "fermentum,", "odio", "eu", "feugiat", "pretium,", "nibh", "ipsum", "consequat", "nisl,", "vel", "pretium", "lectus", "quam", "id", "leo", "in", "vitae", "turpis", "massa", "sed", "elementum", "tempus", "egestas", "sed", "sed", "risus", "pretium", "quam", "vulputate", "dignissim", "suspendisse", "in", "est", "ante", "in", "nibh", "mauris,", "cursus", "mattis", "molestie", "a,", "iaculis", "at", "erat",
	        "pellentesque", "adipiscing", "commodo", "elit,", "at", "imperdiet", "dui", "accumsan", "sit", "amet", "nulla", "facilisi", "morbi", "tempus", "iaculis", "urna,", "id", "volutpat", "lacus", "laoreet", "non", "curabitur", "gravida", "arcu", "ac", "tortor", "dignissim", "convallis", "aenean", "et", "tortor", "at", "risus", "viverra", "adipiscing", "at", "in", "tellus", "integer", "feugiat", "scelerisque", "varius", "morbi", "enim", "nunc,", "faucibus", "a", "pellentesque", "sit", "amet,", "porttitor", "eget", "dolor", "morbi", "non", "arcu", "risus,", "quis", "varius", "quam", "quisque", "id", "diam", "vel", "quam", "elementum", "pulvinar", "etiam", "non", "quam", "lacus", "suspendisse", "faucibus", "interdum", "posuere", "lorem", "ipsum", "dolor", "sit", "amet,", "consectetur", "adipiscing", "elit", "duis", "tristique", "sollicitudin", "nibh", "sit", "amet", "commodo", "nulla", "facilisi",
	        "nullam", "vehicula", "ipsum", "a", "arcu", "cursus", "vitae", "congue", "mauris", "rhoncus", "aenean", "vel", "elit", "scelerisque", "mauris", "pellentesque", "pulvinar", "pellentesque", "habitant", "morbi", "tristique", "senectus", "et", "netus", "et", "malesuada", "fames", "ac", "turpis", "egestas", "maecenas", "pharetra", "convallis", "posuere", "morbi", "leo", "urna,", "molestie", "at", "elementum", "eu,", "facilisis", "sed", "odio", "morbi", "quis", "commodo", "odio", "aenean", "sed", "adipiscing", "diam", "donec", "adipiscing", "tristique", "risus", "nec", "feugiat", "in", "fermentum", "posuere", "urna", "nec", "tincidunt", "praesent", "semper", "feugiat", "nibh", "sed", "pulvinar", "proin", "gravida", "hendrerit", "lectus", "a", "molestie"
	    ];
	    //random integer method.
	    Lorem.prototype.randomInt = function (min, max) {
	        return Math.floor(Math.random() * (max - min + 1)) + min;
	    };
	    //text creator method with parameters: how many, what
	    Lorem.prototype.createText = function(count, type) {
	        switch (type) {
	            //paragraphs are loads of sentences.
	            case Lorem.TYPE.PARAGRAPH:
	                var paragraphs = new Array;
	                for (var i = 0; i < count; i++) {
	                    var paragraphLength = this.randomInt(10, 20);
	                    var paragraph = this.createText(paragraphLength, Lorem.TYPE.SENTENCE);
	                    paragraphs.push('<p>'+paragraph+'</p>');
	                }
	                return paragraphs.join('\n');
	                break;
	            //sentences are loads of words.
	            case Lorem.TYPE.SENTENCE:
	                var sentences = new Array;
	                for (var i = 0; i < count; i++) {
	                    var sentenceLength = this.randomInt(5, 10);
	                    var words = this.createText(sentenceLength, Lorem.TYPE.WORD).split(' ');
	                    words[0] = words[0].substr(0, 1).toUpperCase() + words[0].substr(1);
	                    var sentence = words.join(' ');

	                    sentences.push(sentence);
	                }
	                return (sentences.join('. ') + '.').replace(/(\.\,|\,\.)/g, '.');
	                break;
	            //words are words
	            case Lorem.TYPE.WORD:
	                var wordIndex = this.randomInt(0, Lorem.WORDS.length - count - 1);

	                return Lorem.WORDS.slice(wordIndex, wordIndex + count).join(' ').replace(/\.|\,/g, '');
	                break;
	        }
	    };
	    Lorem.prototype.createLorem = function(element) {

	        var lorem = new Array;
	        var count;

	        if (/\d+-\d+[psw]/.test(this.query)){
	            var range = this.query.replace(/[a-z]/,'').split("-");
	            count = Math.floor(Math.random() * parseInt(range[1])) + parseInt(range[0]);
	        }else{
	            count = parseInt(this.query);
	        }

	        if (/\d+p/.test(this.query)) {
	            var type = Lorem.TYPE.PARAGRAPH;
	        }
	        else if (/\d+s/.test(this.query)) {
	            var type = Lorem.TYPE.SENTENCE;
	        }
	        else if (/\d+w/.test(this.query)) {
	            var type = Lorem.TYPE.WORD;
	        }

	        lorem.push(this.createText(count, type));
	        lorem = lorem.join(' ');

	        if (element) {
	            if (this.type == Lorem.TEXT)
	                element.innerHTML += lorem;
	            else if (this.type == Lorem.IMAGE) {
	                //TODO: for now, using lorempixel.
	                var path = '';
	                var options = this.query.split(' ');
	                if (options[0] == 'gray') {
	                    path += '/g';
	                    options[0] = '';
	                }
	                if (element.getAttribute('width'))
	                    path += '/' + element.getAttribute('width');

	                if (element.getAttribute('height'))
	                    path += '/' + element.getAttribute('height');

	                path += '/' + options.join(' ').replace(/(^\s+|\s+$)/, '');
	                element.src = 'http://lorempixel.com'+path.replace(/\/\//, '/');
	            }
	        }

	        if (element == null)
	            return lorem;
	    };
	})();

	var LoremIpsum = React.createClass({displayName: "LoremIpsum",
	  propTypes: {
	    type: React.PropTypes.string,
	    query: React.PropTypes.string.isRequired
	  },
	  getDefaultProps: function() {
	    return {
	      type: 'text'
	    };
	  },
	  componentDidMount: function() {
	    var lorem = new Lorem();

	    switch(this.props.type) {
	      case 'img':
	        lorem.type = Lorem.IMAGE;
	      break;
	      case 'text':
	      default:
	        lorem.type = Lorem.TEXT;
	      break;
	    }

	    lorem.query = this.props.query;
	    var l = lorem.createLorem(this.refs.node.getDOMNode());
	  },
	  render: function() {
	    var props = React.mergeProps({
	      type: null,
	      query: null,
	      ref: 'node'
	    }, this.props);

	    var ComponentClass;
	    if(this.props.type === 'text')
	      return React.createElement("span", React.__spread({},  props))
	    else
	      return React.createElement("img", React.__spread({},  props))
	  }
	});

	module.exports = LoremIpsum;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var Icon = __webpack_require__(17);
	var classSet = React.addons.classSet;
	var TimelineView = React.createClass({displayName: "TimelineView",
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
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var TimelineItem = React.createClass({displayName: "TimelineItem",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'rubix-timeline-item'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var TimelineHeader = React.createClass({displayName: "TimelineHeader",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'rubix-timeline-header'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var TimelineIcon = React.createClass({displayName: "TimelineIcon",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'rubix-timeline-icon'
	    }, this.props);

	    return (
	      React.createElement(Icon, React.__spread({},  props))
	    );
	  }
	});

	var TimelineAvatar = React.createClass({displayName: "TimelineAvatar",
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
	      React.createElement("img", React.__spread({},  props))
	    );
	  }
	});

	var TimelineTitle = React.createClass({displayName: "TimelineTitle",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'rubix-timeline-title'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var TimelineBody = React.createClass({displayName: "TimelineBody",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'rubix-timeline-body'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
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


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var AccordianContent = React.createClass({displayName: "AccordianContent",
	  getInitialState: function() {
	    return {
	      height: 0,
	      opened: false
	    };
	  },
	  collapse: function() {
	    var node = this.refs.content.getDOMNode();
	    $(node).animate({height: 0}, 250);
	    this.setState({opened: false});
	  },
	  expand: function() {
	    var node = this.refs.content.getDOMNode();
	    $(node).animate({height: this.state.height}, 250);
	    this.setState({opened: true}, function() {
	      this.props.parent.setActiveItem(this.props, function() {
	        this.props.parent.props.onItemSelect(this.props);
	      }.bind(this));
	    }.bind(this));
	  },
	  handleStateChange: function(paneID) {
	    if(this.props.paneID === paneID) {
	      if(this.state.opened) {
	        this.collapse();
	      } else {
	        this.expand();
	      }
	    } else {
	      this.collapse();
	    }
	  },
	  handleKV: function(key, value) {
	    if(this.props.hasOwnProperty(key) && this.props[key] === value) {
	      this.expand();
	    } else {
	      this.collapse();
	    }
	  },
	  componentWillMount: function() {
	    ReactBootstrap.Dispatcher.on('accordian:'+this.props.accordianID, this.handleStateChange);
	    ReactBootstrap.Dispatcher.on('accordian:kv:'+this.props.accordianID, this.handleKV);
	  },
	  componentDidMount: function() {
	    var node = this.refs.content.getDOMNode();
	    var height = $(node).outerHeight();
	    $(node).css('height', 0);
	    this.setState({height: height}, function() {
	      if(this.props.active)
	        this.expand();
	    }.bind(this));
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('accordian:'+this.props.accordianID, this.handleStateChange);
	    ReactBootstrap.Dispatcher.off('accordian:kv:'+this.props.accordianID, this.handleKV);
	  },
	  render: function() {
	    var props = React.mergeProps({
	      ref: 'content',
	      className: 'accordian-content',
	      style: {overflow: 'hidden'}
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        React.createElement("div", {className: "accordian-body"}, this.props.children)
	      )
	    );
	  }
	});

	var AccordianTitle = React.createClass({displayName: "AccordianTitle",
	  handleClick: function(e) {
	    e.preventDefault();
	    e.stopPropagation();

	    ReactBootstrap.Dispatcher.emit('accordian:'+this.props.accordianID, this.props.paneID);
	  },
	  render: function() {
	    var props = React.mergeProps({
	      href: '#',
	      className: 'accordian-title',
	      onClick: this.handleClick
	    }, this.props);

	    return (
	      React.createElement("a", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var AccordianPane = React.createClass({displayName: "AccordianPane",
	  statics: {
	    ID: 0,
	    getID: function() {
	      return AccordianPane.ID++;
	    },
	    resetID: function() {
	      AccordianPane.ID = 0;
	    }
	  },
	  getInitialState: function() {
	    return {
	      id: AccordianPane.getID(),
	      children: []
	    };
	  },
	  componentWillReceiveProps: function(nextProps) {
	    var children = React.Children.map(nextProps.children, function(child, i) {
	      return React.withContext(this._currentElement.context, function() {
	        return React.addons.cloneWithProps(child, {
	          key: i, paneID: this.state.id, accordianID: this.props.accordianID, active: this.props.active, parent: this.props.parent
	        });
	      }.bind(this));
	    }, this);
	    this.setState({
	      children: children
	    });
	  },
	  componentWillMount: function() {
	    var children = React.Children.map(this.props.children, function(child, i) {
	      return React.withContext(this._currentElement.context, function() {
	        return React.addons.cloneWithProps(child, {
	          key: i, paneID: this.state.id, accordianID: this.props.accordianID, active: this.props.active, parent: this.props.parent
	        });
	      }.bind(this));
	    }, this);

	    this.setState({children: children});
	  },
	  render: function() {
	    var props = React.mergeProps({
	      className: 'accordian-pane'
	    }, this.props);

	    return (
	      React.createElement("li", React.__spread({},  props), 
	        this.state.children
	      )
	    );
	  }
	});

	var Accordian = React.createClass({displayName: "Accordian",
	  statics: {
	    ID: 0,
	    getID: function() {
	      return Accordian.ID++;
	    }
	  },
	  propTypes: {
	    onItemSelect: React.PropTypes.func
	  },
	  getDefaultProps: function() {
	    return {
	      onItemSelect: function() {}
	    };
	  },
	  getInitialState: function() {
	    return {
	      activeItem: null,
	      id: Accordian.getID(),
	      children: []
	    };
	  },
	  setActiveItem: function(props, cb) {
	    this.setState({activeItem: props}, cb);
	  },
	  getActiveItem: function() {
	    return this.state.props;
	  },
	  selectItem: function(key, value) {
	    ReactBootstrap.Dispatcher.emit('accordian:kv:'+this.state.id, key, value);
	  },
	  componentWillReceiveProps: function(nextProps) {
	    var children = React.Children.map(nextProps.children, function(child, i) {
	      return React.withContext(this._currentElement._context, function() {
	        return React.addons.cloneWithProps(child, {
	          parent: this, key: i, accordianID: this.state.id
	        });
	      }.bind(this));
	    }, this);
	    this.setState({
	      children: children
	    });
	  },
	  componentWillMount: function() {
	    var children = React.Children.map(this.props.children, function(child, i) {
	      return React.withContext(this._currentElement.context, function() {
	        return React.addons.cloneWithProps(child, {
	          parent: this, key: i, accordianID: this.state.id
	        });
	      }.bind(this));
	    }, this);

	    this.setState({children: children});
	  },
	  render: function() {
	    AccordianPane.resetID();

	    var props = React.mergeProps({
	      className: 'accordian'
	    }, this.props);

	    return (
	      React.createElement("ul", React.__spread({},  props), 
	        this.state.children
	      )
	    );
	  }
	});

	module.exports.Accordian = Accordian;
	module.exports.AccordianPane = AccordianPane;
	module.exports.AccordianTitle = AccordianTitle;
	module.exports.AccordianContent = AccordianContent;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var IonTabItem = React.createClass({displayName: "IonTabItem",
	  statics: {
	    ID: 0,
	    getID: function() {
	      return IonTabItem.ID++;
	    },
	    resetID: function() {
	      IonTabItem.ID = 0;
	    }
	  },
	  getInitialState: function() {
	    return {
	      id: 'tab-'+IonTabItem.getID()+'-name'
	    };
	  },
	  render: function() {
	    var props = React.mergeProps({
	      className: 'ionTabs__item',
	      'data-name': this.state.id
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var IonTabBody = React.createClass({displayName: "IonTabBody",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'ionTabs__body'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children, 
	        React.createElement("div", {className: "ionTabs__preloader"})
	      )
	    );
	  }
	});

	var IonTab = React.createClass({displayName: "IonTab",
	  statics: {
	    ID: 0,
	    getID: function() {
	      return IonTab.ID++;
	    },
	    resetID: function() {
	      IonTab.ID = 0;
	    }
	  },
	  getInitialState: function() {
	    return {
	      id: 'tab-'+IonTab.getID()+'-name'
	    };
	  },
	  handleChange: function(key, value) {
	    if(this.props.hasOwnProperty(key) && this.props[key] === value) {
	      $.ionTabs.setTab(this.props.containerID, this.state.id);
	    }
	  },
	  componentWillMount: function() {
	    ReactBootstrap.Dispatcher.on('ionTabs:'+this.props.containerID, this.handleChange);
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('ionTabs:'+this.props.containerID, this.handleChange);
	  },
	  render: function() {
	    var props = React.mergeProps({
	      className: 'ionTabs__tab',
	      'data-target': this.state.id
	    }, this.props);

	    return (
	      React.createElement("li", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var IonTabHead = React.createClass({displayName: "IonTabHead",
	  render: function() {
	    var children = React.Children.map(this.props.children, function(child, i) {
	      return React.withContext(this._currentElement._context, function() {
	        return React.addons.cloneWithProps(child, {
	          containerID: this.props.containerID
	        });
	      }.bind(this))
	    }, this);

	    var props = React.mergeProps({
	      className: 'ionTabs__head'
	    }, this.props);

	    return (
	      React.createElement("ul", React.__spread({},  props), 
	        children
	      )
	    );
	  }
	});

	var IonTabContainer = React.createClass({displayName: "IonTabContainer",
	  statics: {
	    ID: 0,
	    getID: function() {
	      return IonTabContainer.ID++;
	    }
	  },
	  getInitialState: function() {
	    return {
	      id: 'tab-group-'+IonTabContainer.getID()
	    };
	  },
	  setTab: function(key, value) {
	    ReactBootstrap.Dispatcher.emit('ionTabs:'+this.state.id, key, value);
	  },
	  componentDidMount: function() {
	    $.ionTabs(this.refs.tab.getDOMNode(), {
	      type: 'none'
	    });
	  },
	  render: function() {
	    IonTab.resetID();
	    IonTabItem.resetID();
	    var children = React.Children.map(this.props.children, function(child, i) {
	      return React.withContext(this._currentElement._context, function() {
	        return React.addons.cloneWithProps(child, {
	          containerID: this.state.id
	        });
	      }.bind(this))
	    }, this);

	    var props = React.mergeProps({
	      className: 'ionTabs',
	      'data-name': this.state.id
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({ref: "tab"},  props), 
	        children
	      )
	    );
	  }
	});

	module.exports.IonTabContainer = IonTabContainer;
	module.exports.IonTabHead = IonTabHead;
	module.exports.IonTabBody = IonTabBody;
	module.exports.IonTab = IonTab;
	module.exports.IonTabItem = IonTabItem;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var Grid = __webpack_require__(2);
	var Row = __webpack_require__(3);
	var Col = __webpack_require__(4).Col;

	var PricingTableContainer = React.createClass({displayName: "PricingTableContainer",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'container-sm-height'
	    }, this.props);

	    return (
	      React.createElement(Grid, React.__spread({},  props), 
	        React.createElement(Row, {className: "row-sm-height"}, 
	          this.props.children
	        )
	      )
	    );
	  }
	});

	var PricingTable = React.createClass({displayName: "PricingTable",
	  propTypes: {
	    preferred: React.PropTypes.bool
	  },
	  render: function() {
	    var classes = React.addons.classSet({
	      'col-sm-height': true,
	      'pricing-table': true,
	      'preferred': this.props.preferred
	    });

	    var props = React.mergeProps({
	      xs: 12,
	      className: classes.trim()
	    }, this.props);

	    return (
	      React.createElement(Col, React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var PricingTableHeader = React.createClass({displayName: "PricingTableHeader",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'pricing-table-header text-center text-uppercase'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        React.createElement("h3", null, this.props.children)
	      )
	    );
	  }
	});

	var PricingTablePrice = React.createClass({displayName: "PricingTablePrice",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'pricing-table-price text-center text-uppercase'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        React.createElement("h2", null, this.props.children)
	      )
	    );
	  }
	});

	var PricingTableBody = React.createClass({displayName: "PricingTableBody",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'pricing-table-body text-center'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var PricingFeature = React.createClass({displayName: "PricingFeature",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'pricing-table-feature text-center'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});


	var PricingButtonContainer = React.createClass({displayName: "PricingButtonContainer",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'pricing-btn-container text-center'
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.PricingTable = PricingTable;
	module.exports.PricingFeature = PricingFeature;
	module.exports.PricingTableBody = PricingTableBody;
	module.exports.PricingTablePrice = PricingTablePrice;
	module.exports.PricingTableHeader = PricingTableHeader;
	module.exports.PricingTableContainer = PricingTableContainer;
	module.exports.PricingButtonContainer = PricingButtonContainer;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var Button = __webpack_require__(13);

	var Alert = React.createClass({displayName: "Alert",
	  propTypes: {
	    info: React.PropTypes.bool,
	    danger: React.PropTypes.bool,
	    success: React.PropTypes.bool,
	    warning: React.PropTypes.bool,
	    dismissible: React.PropTypes.bool,

	    collapseBottom: React.PropTypes.bool
	  },
	  getInitialState: function() {
	    return {
	      hidden: false
	    };
	  },
	  handleClose: function() {
	    this.setState({hidden: true});
	  },
	  render: function() {
	    var classes = React.addons.classSet({
	      'alert': true,
	      'hidden': this.state.hidden,
	      'alert-info': this.props.info,
	      'alert-danger': this.props.danger,
	      'alert-success': this.props.success,
	      'alert-warning': this.props.warning,
	      'alert-dismissible': this.props.dismissible
	    });

	    var children = this.props.children;

	    if(this.props.dismissible) {
	      children = (
	        React.createElement("div", null, 
	          React.createElement(Button, {close: true, onClick: this.handleClose}, 
	            React.createElement("span", {"aria-hidden": "true"}, "×"), 
	            React.createElement("span", {className: "sr-only"}, "Close")
	          ), 
	          this.props.children
	        )
	      );
	    }

	    var props = React.mergeProps({
	      role: 'alert',
	      className: classes.trim(),
	      style: {
	        marginBottom: this.props.collapseBottom ? 0 : null
	      }
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({},  props), 
	        children
	      )
	    );
	  }
	});

	var AlertLink = React.createClass({displayName: "AlertLink",
	  render: function() {
	    var props = React.mergeProps({
	      href: this.props.href,
	      className: 'alert-link'
	    }, this.props);

	    return (
	      React.createElement("a", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	module.exports.Alert = Alert;
	module.exports.AlertLink = AlertLink;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var Tag = React.createClass({displayName: "Tag",
	  getDefaultProps: function() {
	    return {
	      href: '#',
	      color: 'darkgreen45'
	    };
	  },
	  render: function() {
	    return (
	      React.createElement("a", {href: this.props.href, className: 'left-tag border-hover-'+this.props.color+' bg-hover-'+this.props.color+' fg-hover-white bg-lightgray50 border-lightgray50 fg-text'}, this.props.children)
	    );
	  }
	});

	module.exports = Tag;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var classSet = React.addons.classSet;

	var openState = (!Modernizr.touch) ? (localStorage.getItem('sidebar-open-state') === 'true' ? true : false) : false;
	var SidebarMixin = {
	  getInitialState: function() {
	    return {
	      open: openState
	    };
	  },
	  sidebarStateChangeCallback: function(open) {
	    if(this.state.open === open) return;
	    if(open !== undefined)
	      openState = open;
	    else
	      openState = !this.state.open;
	    this.setState({
	      open: openState // toggle sidebar
	    });
	    localStorage.setItem('sidebar-open-state', openState);
	  },
	  componentWillMount: function() {
	    ReactBootstrap.Dispatcher.on('sidebar', this.sidebarStateChangeCallback);
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('sidebar', this.sidebarStateChangeCallback);
	  }
	};

	var SidebarControlBtn = React.createClass({displayName: "SidebarControlBtn",
	  propTypes: {
	    sidebar: React.PropTypes.number.isRequired
	  },
	  getInitialState: function() {
	    return {
	      active: this.props.active || false
	    };
	  },
	  handleClick: function(e) {
	    e.preventDefault();
	    e.stopPropagation();
	    ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', this.props);
	    ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
	  },
	  handleState: function(props) {
	    if(props.hasOwnProperty('sidebar')) {
	      if(props.sidebar === this.props.sidebar) {
	        this.setState({active: true});
	      } else {
	        this.setState({active: false});
	      }
	    }
	  },
	  componentDidMount: function() {
	    ReactBootstrap.Dispatcher.on('sidebar:controlbtn', this.handleState);
	    var scrollToTop = function() {
	      if($(window).scrollTop() === 0) return;
	      setTimeout(function() {
	        $('html, body, #body').scrollTop(0);
	        $(window).scrollTop(0);
	        scrollToTop();
	      }, 15);
	    };

	    scrollToTop();
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('sidebar:controlbtn', this.handleState);
	  },
	  render: function() {
	    var classes = classSet({
	      'sidebar-control-btn': true,
	      'active': this.state.active
	    });

	    var props = React.mergeProps({
	      tabIndex: '-1',
	      className: classes.trim(),
	      onClick: this.handleClick
	    }, this.props);
	    return (
	      React.createElement("li", React.__spread({},  props), 
	        React.createElement("a", {href: "#", tabIndex: "-1"}, 
	          React.createElement(ReactBootstrap.Icon, {bundle: this.props.bundle, glyph: this.props.glyph})
	        )
	      )
	    );
	  }
	});

	var SidebarControls = React.createClass({displayName: "SidebarControls",
	  render: function() {
	    var props = React.mergeProps({
	      dir: 'ltr',
	      className: 'sidebar-controls-container'
	    }, this.props);
	    return (
	      React.createElement("div", React.__spread({},  props), 
	        React.createElement("div", {className: "sidebar-controls", tabIndex: "-1"}, 
	          this.props.children
	        )
	      )
	    );
	  }
	});

	var Sidebar = React.createClass({displayName: "Sidebar",
	  propTypes: {
	    active: React.PropTypes.bool,
	    sidebar: React.PropTypes.number.isRequired
	  },
	  timer: null,
	  getInitialState: function() {
	    return {
	      left: ((this.props.sidebar * 100) + '%'),
	      visibility: (this.props.sidebar === 0) ? 'visible' : 'hidden'
	    };
	  },
	  handleKeyChange: function(sidebar) {
	    var newLeft = ((this.props.sidebar*100) - (sidebar*100))+'%';
	    var styles = {left: newLeft};
	    styles.visibility = 'visible';
	    this.setState(styles, function() {
	      if(newLeft !== '0%') {
	        setTimeout(function() {
	          this.setState({visibility: 'hidden'});
	        }.bind(this), 300);
	      } else if(newLeft === '0%') {
	        var height = $(this.refs.innersidebar.getDOMNode()).height();
	        if($('html').hasClass('static')) {
	          $('#body').css('min-height', height+400);
	        } else {
	          $('#body').css('min-height', '');
	        }
	      }
	    }.bind(this));
	  },
	  updateScrollbar: function() {
	    if(!Modernizr.touch) {
	      $(this.refs.sidebar.getDOMNode()).perfectScrollbar('update');
	    }
	  },
	  repositionScrollbar: function(child_node, top, height) {
	    clearTimeout(this.timer);
	    var node = $(this.refs.sidebar.getDOMNode());
	    var scrollTo = top - node.offset().top + node.scrollTop();
	    if(node.find(child_node).length) {
	      if(scrollTo > ($(window).height() / 2)) {
	        this.timer = setTimeout(function() {
	          node.scrollTop(scrollTo - ($(window).height() / 2) + 100);
	        }, 15);
	      }
	    }
	    if(!Modernizr.touch)
	      this.updateScrollbar()
	  },
	  destroyScrollbar: function() {
	    $(this.refs.sidebar.getDOMNode()).perfectScrollbar('destroy');
	  },
	  initializeScrollbar: function() {
	    $(this.refs.sidebar.getDOMNode()).perfectScrollbar({
	      suppressScrollX: true
	    });
	  },
	  componentWillMount: function() {
	    ReactBootstrap.Dispatcher.on('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.on('sidebar:keychange', this.handleKeyChange);
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('sidebar:reinitialize', this.initializeScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:destroy', this.destroyScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:update', this.updateScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:reposition', this.repositionScrollbar);
	    ReactBootstrap.Dispatcher.off('sidebar:keychange', this.handleKeyChange);
	  },
	  componentDidMount: function() {
	    if(!Modernizr.touch) {
	      this.initializeScrollbar();
	    }

	    if(this.props.active) {
	      setTimeout(function() {
	        ReactBootstrap.Dispatcher.emit('sidebar:controlbtn', {sidebar: this.props.sidebar});
	        ReactBootstrap.Dispatcher.emit('sidebar:keychange', this.props.sidebar);
	      }.bind(this), 15);
	    }
	  },
	  render: function() {
	    var props = React.mergeProps({
	      className: 'sidebar',
	      style: {
	        left: this.state.left,
	        visibility: this.state.visibility,
	        transition: 'all 0.3s ease',
	        OTransition: 'all 0.3s ease',
	        MsTransition: 'all 0.3s ease',
	        MozTransition: 'all 0.3s ease',
	        WebkitTransition: 'all 0.3s ease'
	      }
	    }, this.props);

	    return (
	      React.createElement("div", React.__spread({ref: "sidebar"},  props), 
	        React.createElement("div", {ref: "innersidebar"}, this.props.children)
	      )
	    );
	  }
	});

	var SidebarNavItem = React.createClass({displayName: "SidebarNavItem",
	  mixins: [ReactRouter.State, ReactRouter.Navigation],
	  propTypes: {
	    open: React.PropTypes.bool,
	    active: React.PropTypes.bool,
	    href: React.PropTypes.string,
	    autoHeight: React.PropTypes.bool
	  },
	  getInitialState: function() {
	    return {
	      open: this.props.open || false,
	      active: this.props.active || false,
	      toggleOpen: this.props.open || false,
	      dir: 'left',
	      opposite: false
	    };
	  },
	  emitOpen: function(open) {
	    var node = this.refs.node.getDOMNode();
	    if(open)
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node, open);
	    else
	      ReactBootstrap.Dispatcher.emit('sidebar:openstate', node);
	  },
	  handleClick: function(e) {
	    if(!this.props.href)
	      e.preventDefault();
	      e.stopPropagation();
	    this.emitOpen();
	  },
	  collapse: function(node, cb) {
	    this.setState({
	      toggleOpen: false
	    }, function() {
	      var height = $(node).height();
	      $(node).css('height', height).animate({
	        height: '45px'
	      }, 125, 'easeInOutSine', function() {
	        $(node).css('height', '');
	        try {
	          this.setState({
	            open: false,
	            toggleOpen: false
	          }, function() {
	            if(cb) cb();
	          });
	        } catch(e) {}
	      }.bind(this));
	    }.bind(this));
	  },
	  expand: function(node, cb) {
	    this.setState({
	      toggleOpen: true
	    }, function() {
	      var height = $(node).addClass('open').height();
	      $(node).removeClass('open');
	      $(node).css('height', '45px').animate({
	        height: height
	      }, 125, 'easeInOutSine', function() {
	        $(node).css('height', '');
	        try {
	          this.setState({
	            open: true
	          }, function() {
	            if(cb) cb();
	          });
	        } catch(e) {}
	      }.bind(this));
	    }.bind(this));
	  },
	  handleOpenState: function(child_node, open) {
	    if(this.props.children) {
	      var node = this.refs.node.getDOMNode();
	      if(open) {
	        if($(node).find(child_node).length) {
	          this.setState({
	            open: true,
	            toggleOpen: true
	          });
	        }
	        return;
	      }
	      if($(node).is(child_node)) {
	        if(this.state.open) {
	          this.collapse(node, function() {
	            ReactBootstrap.Dispatcher.emit('sidebar:update');
	          });
	        } else {
	          this.expand(node, function() {
	            ReactBootstrap.Dispatcher.emit('sidebar:update');
	          });
	        }
	        return;
	      }
	      if(!($(node).find(child_node).length)) {
	        if(this.state.open)
	          this.collapse(node);
	      }
	    }
	  },
	  handleLayoutDirChange: function(dir) {
	    this.setState({
	      dir: dir === 'ltr' ? 'left' : 'right',
	      opposite: dir === 'ltr' ? false : true
	    });
	  },
	  componentWillMount: function() {
	    ReactBootstrap.Dispatcher.on('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.on('sidebar:openstate', this.handleOpenState);
	  },
	  componentWillUnmount: function() {
	    ReactBootstrap.Dispatcher.off('layout:dir', this.handleLayoutDirChange);
	    ReactBootstrap.Dispatcher.off('sidebar:openstate', this.handleOpenState);
	  },
	  componentDidMount: function() {
	    var active = (this.getPathname() === this.props.href) || this.props.active;

	    if(active) {
	      this.setState({active: true});
	      this.emitOpen(true);
	      var node = this.refs.node.getDOMNode();
	      var height = $(node).height();
	      var top = $(node).offset().top;
	      ReactBootstrap.Dispatcher.emit('sidebar:reposition', node, top, height);
	    }
	  },
	  render: function() {
	    var classes = classSet({
	      'open': this.state.open,
	      'active': this.state.active
	    });
	    var toggleClasses = classSet({
	      'toggle-button': true,
	      'open': this.state.toggleOpen,
	      'opposite': this.state.opposite
	    });
	    var icon=null, toggleButton = null;
	    if(this.props.children) {
	      toggleButton = React.createElement(ReactBootstrap.Icon, {className: toggleClasses.trim(), bundle: "fontello", glyph: this.state.dir+'-open-3'});
	    }
	    if(this.props.glyph || this.props.bundle) {
	      icon = React.createElement(ReactBootstrap.Icon, {bundle: this.props.bundle, glyph: this.props.glyph});
	    }
	    var style = {height: this.props.autoHeight ? 'auto' : ''};

	    var props = React.mergeProps({
	      name: null,
	      style: style,
	      tabIndex: '-1',
	      className: classes.trim()
	    }, this.props);

	    var RouteLink = 'a';
	    var componentProps = {
	      name: null,
	      tabIndex: -1,
	      href: this.props.href || '',
	      onClick: this.handleClick,
	      style: style
	    };

	    if(this.props.hasOwnProperty('href') && this.props.href.length && this.props.href !== '#') {
	      RouteLink = ReactRouter.Link;
	      componentProps.to = this.props.href;
	      delete componentProps.href;
	    }

	    return (
	      React.createElement("li", React.__spread({ref: "node"},  props), 
	        React.createElement(RouteLink, React.__spread({},  componentProps), 
	          icon, 
	          React.createElement("span", {className: "name"}, this.props.name), 
	          toggleButton
	        ), 
	        this.props.children
	      )
	    );
	  }
	});

	var SidebarNav = React.createClass({displayName: "SidebarNav",
	  render: function() {
	    var props = React.mergeProps({
	      className: 'sidebar-nav'
	    }, this.props);

	    return (
	      React.createElement("ul", React.__spread({},  props), 
	        this.props.children
	      )
	    );
	  }
	});

	var SidebarBtn = React.createClass({displayName: "SidebarBtn",
	  handleSidebarStateChange: function(props) {
	    if(props['data-id'] === 'sidebar-btn') {
	      ReactBootstrap.Dispatcher.emit('sidebar');
	    }
	  },
	  render: function() {
	    var props = React.mergeProps({
	      className: 'pull-left visible-xs-inline-block'
	    }, this.props);

	    return (
	      React.createElement(ReactBootstrap.NavContent, React.__spread({},  props), 
	        React.createElement(ReactBootstrap.Nav, {onItemSelect: this.handleSidebarStateChange}, 
	          React.createElement(ReactBootstrap.NavItem, {"data-id": "sidebar-btn", className: "sidebar-btn", href: "/"}, 
	            React.createElement(ReactBootstrap.Icon, {bundle: "fontello", glyph: "th-list-5"})
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = {
	  Sidebar: Sidebar,
	  SidebarNav: SidebarNav,
	  SidebarBtn: SidebarBtn,
	  SidebarMixin: SidebarMixin,
	  SidebarNavItem: SidebarNavItem,
	  SidebarControls: SidebarControls,
	  SidebarControlBtn: SidebarControlBtn
	};


/***/ }
/******/ ]);