/*! rubix - v2.0.0 - 2015-01-21 [copyright: SketchPixy LLP, email: support@sketchpixy.com] */
(function() {
/*DO NOT MODIFY*/

//
// showdown.js -- A javascript port of Markdown.
//
// Copyright (c) 2007 John Fraser.
//
// Original Markdown Copyright (c) 2004-2005 John Gruber
//   <http://daringfireball.net/projects/markdown/>
//
// Redistributable under a BSD-style open source license.
// See license.txt for more information.
//
// The full source distribution is at:
//
//        A A L
//        T C A
//        T K B
//
//   <http://www.attacklab.net/>
//
//
// Wherever possible, Showdown is a straight, line-by-line port
// of the Perl version of Markdown.
//
// This is not a normal parser design; it's basically just a
// series of string substitutions.  It's hard to read and
// maintain this way,  but keeping Showdown close to the original
// design makes it easier to port new features.
//
// More importantly, Showdown behaves like markdown.pl in most
// edge cases.  So web applications can do client-side preview
// in Javascript, and then build identical HTML on the server.
//
// This port needs the new RegExp functionality of ECMA 262,
// 3rd Edition (i.e. Javascript 1.5).  Most modern web browsers
// should do fine.  Even with the new regular expression features,
// We do a lot of work to emulate Perl's regex functionality.
// The tricky changes in this file mostly have the "attacklab:"
// label.  Major or self-explanatory changes don't.
//
// Smart diff tools like Araxis Merge will be able to match up
// this file with markdown.pl in a useful way.  A little tweaking
// helps: in a copy of markdown.pl, replace "#" with "//" and
// replace "$text" with "text".  Be sure to ignore whitespace
// and line endings.
//
//
// Showdown usage:
//
//   var text = "Markdown *rocks*.";
//
//   var converter = new Showdown.converter();
//   var html = converter.makeHtml(text);
//
//   alert(html);
//
// Note: move the sample code to the bottom of this
// file before uncommenting it.
//
//
// Showdown namespace
//
var Showdown={extensions:{}},forEach=Showdown.forEach=function(a,b){if(typeof a.forEach=="function")a.forEach(b);else{var c,d=a.length;for(c=0;c<d;c++)b(a[c],c,a)}},stdExtName=function(a){return a.replace(/[_-]||\s/g,"").toLowerCase()};Showdown.converter=function(a){var b,c,d,e=0,f=[],g=[];if(typeof module!="undefind"&&typeof exports!="undefined"&&typeof require!="undefind"){var h=require("fs");if(h){var i=h.readdirSync((__dirname||".")+"/extensions").filter(function(a){return~a.indexOf(".js")}).map(function(a){return a.replace(/\.js$/,"")});Showdown.forEach(i,function(a){var b=stdExtName(a);Showdown.extensions[b]=require("./extensions/"+a)})}}this.makeHtml=function(a){return b={},c={},d=[],a=a.replace(/~/g,"~T"),a=a.replace(/\$/g,"~D"),a=a.replace(/\r\n/g,"\n"),a=a.replace(/\r/g,"\n"),a="\n\n"+a+"\n\n",a=M(a),a=a.replace(/^[ \t]+$/mg,""),Showdown.forEach(f,function(b){a=k(b,a)}),a=z(a),a=m(a),a=l(a),a=o(a),a=K(a),a=a.replace(/~D/g,"$$"),a=a.replace(/~T/g,"~"),Showdown.forEach(g,function(b){a=k(b,a)}),a};if(a&&a.extensions){var j=this;Showdown.forEach(a.extensions,function(a){typeof a=="string"&&(a=Showdown.extensions[stdExtName(a)]);if(typeof a!="function")throw"Extension '"+a+"' could not be loaded.  It was either not found or is not a valid extension.";Showdown.forEach(a(j),function(a){a.type?a.type==="language"||a.type==="lang"?f.push(a):(a.type==="output"||a.type==="html")&&g.push(a):g.push(a)})})}var k=function(a,b){if(a.regex){var c=new RegExp(a.regex,"g");return b.replace(c,a.replace)}if(a.filter)return a.filter(b)},l=function(a){return a+="~0",a=a.replace(/^[ ]{0,3}\[(.+)\]:[ \t]*\n?[ \t]*<?(\S+?)>?[ \t]*\n?[ \t]*(?:(\n*)["(](.+?)[")][ \t]*)?(?:\n+|(?=~0))/gm,function(a,d,e,f,g){return d=d.toLowerCase(),b[d]=G(e),f?f+g:(g&&(c[d]=g.replace(/"/g,"&quot;")),"")}),a=a.replace(/~0/,""),a},m=function(a){a=a.replace(/\n/g,"\n\n");var b="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del|style|section|header|footer|nav|article|aside",c="p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside";return a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|ins|del)\b[^\r]*?\n<\/\2>[ \t]*(?=\n+))/gm,n),a=a.replace(/^(<(p|div|h[1-6]|blockquote|pre|table|dl|ol|ul|script|noscript|form|fieldset|iframe|math|style|section|header|footer|nav|article|aside)\b[^\r]*?<\/\2>[ \t]*(?=\n+)\n)/gm,n),a=a.replace(/(\n[ ]{0,3}(<(hr)\b([^<>])*?\/?>)[ \t]*(?=\n{2,}))/g,n),a=a.replace(/(\n\n[ ]{0,3}<!(--[^\r]*?--\s*)+>[ \t]*(?=\n{2,}))/g,n),a=a.replace(/(?:\n\n)([ ]{0,3}(?:<([?%])[^\r]*?\2>)[ \t]*(?=\n{2,}))/g,n),a=a.replace(/\n\n/g,"\n"),a},n=function(a,b){var c=b;return c=c.replace(/\n\n/g,"\n"),c=c.replace(/^\n/,""),c=c.replace(/\n+$/g,""),c="\n\n~K"+(d.push(c)-1)+"K\n\n",c},o=function(a){a=v(a);var b=A("<hr />");return a=a.replace(/^[ ]{0,2}([ ]?\*[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\-[ ]?){3,}[ \t]*$/gm,b),a=a.replace(/^[ ]{0,2}([ ]?\_[ ]?){3,}[ \t]*$/gm,b),a=x(a),a=y(a),a=E(a),a=m(a),a=F(a),a},p=function(a){return a=B(a),a=q(a),a=H(a),a=t(a),a=r(a),a=I(a),a=G(a),a=D(a),a=a.replace(/  +\n/g," <br />\n"),a},q=function(a){var b=/(<[a-z\/!$]("[^"]*"|'[^']*'|[^'">])*>|<!(--.*?--\s*)+>)/gi;return a=a.replace(b,function(a){var b=a.replace(/(.)<\/?code>(?=.)/g,"$1`");return b=N(b,"\\`*_"),b}),a},r=function(a){return a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,s),a=a.replace(/(\[((?:\[[^\]]*\]|[^\[\]])*)\]\([ \t]*()<?(.*?(?:\(.*?\).*?)?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,s),a=a.replace(/(\[([^\[\]]+)\])()()()()()/g,s),a},s=function(a,d,e,f,g,h,i,j){j==undefined&&(j="");var k=d,l=e,m=f.toLowerCase(),n=g,o=j;if(n==""){m==""&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m;if(b[m]!=undefined)n=b[m],c[m]!=undefined&&(o=c[m]);else{if(!(k.search(/\(\s*\)$/m)>-1))return k;n=""}}n=N(n,"*_");var p='<a href="'+n+'"';return o!=""&&(o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"'),p+=">"+l+"</a>",p},t=function(a){return a=a.replace(/(!\[(.*?)\][ ]?(?:\n[ ]*)?\[(.*?)\])()()()()/g,u),a=a.replace(/(!\[(.*?)\]\s?\([ \t]*()<?(\S+?)>?[ \t]*((['"])(.*?)\6[ \t]*)?\))/g,u),a},u=function(a,d,e,f,g,h,i,j){var k=d,l=e,m=f.toLowerCase(),n=g,o=j;o||(o="");if(n==""){m==""&&(m=l.toLowerCase().replace(/ ?\n/g," ")),n="#"+m;if(b[m]==undefined)return k;n=b[m],c[m]!=undefined&&(o=c[m])}l=l.replace(/"/g,"&quot;"),n=N(n,"*_");var p='<img src="'+n+'" alt="'+l+'"';return o=o.replace(/"/g,"&quot;"),o=N(o,"*_"),p+=' title="'+o+'"',p+=" />",p},v=function(a){function b(a){return a.replace(/[^\w]/g,"").toLowerCase()}return a=a.replace(/^(.+)[ \t]*\n=+[ \t]*\n+/gm,function(a,c){return A('<h1 id="'+b(c)+'">'+p(c)+"</h1>")}),a=a.replace(/^(.+)[ \t]*\n-+[ \t]*\n+/gm,function(a,c){return A('<h2 id="'+b(c)+'">'+p(c)+"</h2>")}),a=a.replace(/^(\#{1,6})[ \t]*(.+?)[ \t]*\#*\n+/gm,function(a,c,d){var e=c.length;return A("<h"+e+' id="'+b(d)+'">'+p(d)+"</h"+e+">")}),a},w,x=function(a){a+="~0";var b=/^(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/gm;return e?a=a.replace(b,function(a,b,c){var d=b,e=c.search(/[*+-]/g)>-1?"ul":"ol";d=d.replace(/\n{2,}/g,"\n\n\n");var f=w(d);return f=f.replace(/\s+$/,""),f="<"+e+">"+f+"</"+e+">\n",f}):(b=/(\n\n|^\n?)(([ ]{0,3}([*+-]|\d+[.])[ \t]+)[^\r]+?(~0|\n{2,}(?=\S)(?![ \t]*(?:[*+-]|\d+[.])[ \t]+)))/g,a=a.replace(b,function(a,b,c,d){var e=b,f=c,g=d.search(/[*+-]/g)>-1?"ul":"ol",f=f.replace(/\n{2,}/g,"\n\n\n"),h=w(f);return h=e+"<"+g+">\n"+h+"</"+g+">\n",h})),a=a.replace(/~0/,""),a};w=function(a){return e++,a=a.replace(/\n{2,}$/,"\n"),a+="~0",a=a.replace(/(\n)?(^[ \t]*)([*+-]|\d+[.])[ \t]+([^\r]+?(\n{1,2}))(?=\n*(~0|\2([*+-]|\d+[.])[ \t]+))/gm,function(a,b,c,d,e){var f=e,g=b,h=c;return g||f.search(/\n{2,}/)>-1?f=o(L(f)):(f=x(L(f)),f=f.replace(/\n$/,""),f=p(f)),"<li>"+f+"</li>\n"}),a=a.replace(/~0/g,""),e--,a};var y=function(a){return a+="~0",a=a.replace(/(?:\n\n|^)((?:(?:[ ]{4}|\t).*\n+)+)(\n*[ ]{0,3}[^ \t\n]|(?=~0))/g,function(a,b,c){var d=b,e=c;return d=C(L(d)),d=M(d),d=d.replace(/^\n+/g,""),d=d.replace(/\n+$/g,""),d="<pre><code>"+d+"\n</code></pre>",A(d)+e}),a=a.replace(/~0/,""),a},z=function(a){return a+="~0",a=a.replace(/(?:^|\n)```(.*)\n([\s\S]*?)\n```/g,function(a,b,c){var d=b,e=c;return e=C(e),e=M(e),e=e.replace(/^\n+/g,""),e=e.replace(/\n+$/g,""),e="<pre><code"+(d?' class="'+d+'"':"")+">"+e+"\n</code></pre>",A(e)}),a=a.replace(/~0/,""),a},A=function(a){return a=a.replace(/(^\n+|\n+$)/g,""),"\n\n~K"+(d.push(a)-1)+"K\n\n"},B=function(a){return a=a.replace(/(^|[^\\])(`+)([^\r]*?[^`])\2(?!`)/gm,function(a,b,c,d,e){var f=d;return f=f.replace(/^([ \t]*)/g,""),f=f.replace(/[ \t]*$/g,""),f=C(f),b+"<code>"+f+"</code>"}),a},C=function(a){return a=a.replace(/&/g,"&amp;"),a=a.replace(/</g,"&lt;"),a=a.replace(/>/g,"&gt;"),a=N(a,"*_{}[]\\",!1),a},D=function(a){return a=a.replace(/(\*\*|__)(?=\S)([^\r]*?\S[*_]*)\1/g,"<strong>$2</strong>"),a=a.replace(/(\*|_)(?=\S)([^\r]*?\S)\1/g,"<em>$2</em>"),a},E=function(a){return a=a.replace(/((^[ \t]*>[ \t]?.+\n(.+\n)*\n*)+)/gm,function(a,b){var c=b;return c=c.replace(/^[ \t]*>[ \t]?/gm,"~0"),c=c.replace(/~0/g,""),c=c.replace(/^[ \t]+$/gm,""),c=o(c),c=c.replace(/(^|\n)/g,"$1  "),c=c.replace(/(\s*<pre>[^\r]+?<\/pre>)/gm,function(a,b){var c=b;return c=c.replace(/^  /mg,"~0"),c=c.replace(/~0/g,""),c}),A("<blockquote>\n"+c+"\n</blockquote>")}),a},F=function(a){a=a.replace(/^\n+/g,""),a=a.replace(/\n+$/g,"");var b=a.split(/\n{2,}/g),c=[],e=b.length;for(var f=0;f<e;f++){var g=b[f];g.search(/~K(\d+)K/g)>=0?c.push(g):g.search(/\S/)>=0&&(g=p(g),g=g.replace(/^([ \t]*)/g,"<p>"),g+="</p>",c.push(g))}e=c.length;for(var f=0;f<e;f++)while(c[f].search(/~K(\d+)K/)>=0){var h=d[RegExp.$1];h=h.replace(/\$/g,"$$$$"),c[f]=c[f].replace(/~K\d+K/,h)}return c.join("\n\n")},G=function(a){return a=a.replace(/&(?!#?[xX]?(?:[0-9a-fA-F]+|\w+);)/g,"&amp;"),a=a.replace(/<(?![a-z\/?\$!])/gi,"&lt;"),a},H=function(a){return a=a.replace(/\\(\\)/g,O),a=a.replace(/\\([`*_{}\[\]()>#+-.!])/g,O),a},I=function(a){return a=a.replace(/<((https?|ftp|dict):[^'">\s]+)>/gi,'<a href="$1">$1</a>'),a=a.replace(/<(?:mailto:)?([-.\w]+\@[-a-z0-9]+(\.[-a-z0-9]+)*\.[a-z]+)>/gi,function(a,b){return J(K(b))}),a},J=function(a){var b=[function(a){return"&#"+a.charCodeAt(0)+";"},function(a){return"&#x"+a.charCodeAt(0).toString(16)+";"},function(a){return a}];return a="mailto:"+a,a=a.replace(/./g,function(a){if(a=="@")a=b[Math.floor(Math.random()*2)](a);else if(a!=":"){var c=Math.random();a=c>.9?b[2](a):c>.45?b[1](a):b[0](a)}return a}),a='<a href="'+a+'">'+a+"</a>",a=a.replace(/">.+:/g,'">'),a},K=function(a){return a=a.replace(/~E(\d+)E/g,function(a,b){var c=parseInt(b);return String.fromCharCode(c)}),a},L=function(a){return a=a.replace(/^(\t|[ ]{1,4})/gm,"~0"),a=a.replace(/~0/g,""),a},M=function(a){return a=a.replace(/\t(?=\t)/g,"    "),a=a.replace(/\t/g,"~A~B"),a=a.replace(/~B(.+?)~A/g,function(a,b,c){var d=b,e=4-d.length%4;for(var f=0;f<e;f++)d+=" ";return d}),a=a.replace(/~A/g,"    "),a=a.replace(/~B/g,""),a},N=function(a,b,c){var d="(["+b.replace(/([\[\]\\])/g,"\\$1")+"])";c&&(d="\\\\"+d);var e=new RegExp(d,"g");return a=a.replace(e,O),a},O=function(a,b){var c=b.charCodeAt(0);return"~E"+c+"E"}},typeof module!="undefined"&&(module.exports=Showdown),typeof define=="function"&&define.amd&&define("showdown",function(){return Showdown});

/*REACT-ROUTER*/
var _RTR_=window.ReactRouter || {};
var Route=_RTR_.Route,
    Link=_RTR_.Link,
    DefaultRoute=_RTR_.DefaultRoute,
    NotFoundRoute=_RTR_.NotFoundRoute,
    RouteHandler=_RTR_.RouteHandler;

/*REACTBOOTSTRAP+EXTRAS*/
var _RB32_=window.ReactBootstrap || {};
var Container=_RB32_.Container,
    Grid=_RB32_.Grid,
    Row=_RB32_.Row,
    Col=_RB32_.Col,
    ColMixin=_RB32_.ColMixin,
    Lead=_RB32_.Lead,
    Table=_RB32_.Table,
    Form=_RB32_.Form,
    FormGroup=_RB32_.FormGroup,
    Label=_RB32_.Label,
    Input=_RB32_.Input,
    InputGroup=_RB32_.InputGroup,
    InputGroupAddon=_RB32_.InputGroupAddon,
    InputGroupButton=_RB32_.InputGroupButton,
    Checkbox=_RB32_.Checkbox,
    Radio=_RB32_.Radio,
    Button=_RB32_.Button,
    Textarea=_RB32_.Textarea,
    Select=_RB32_.Select,
    Static=_RB32_.Static,
    Icon=_RB32_.Icon,
    HelpBlock=_RB32_.HelpBlock,
    Img=_RB32_.Img,
    Caret=_RB32_.Caret,
    Dropdown=_RB32_.Dropdown,
    DropdownButton=_RB32_.DropdownButton,
    Menu=_RB32_.Menu,
    MenuItem=_RB32_.MenuItem,
    ButtonGroup=_RB32_.ButtonGroup,
    ButtonToolbar=_RB32_.ButtonToolbar,
    Tab=_RB32_.Tab,
    TabPane=_RB32_.TabPane,
    TabList=_RB32_.TabList,
    TabContent=_RB32_.TabContent,
    TabContainer=_RB32_.TabContainer,
    Nav=_RB32_.Nav,
    NavBar=_RB32_.NavBar,
    NavText=_RB32_.NavText,
    NavLink=_RB32_.NavLink,
    NavItem=_RB32_.NavItem,
    NavForm=_RB32_.NavForm,
    NavBrand=_RB32_.NavBrand,
    NavHeader=_RB32_.NavHeader,
    NavToggle=_RB32_.NavToggle,
    NavButton=_RB32_.NavButton,
    NavContent=_RB32_.NavContent,
    BLink=_RB32_.BLink,
    Breadcrumb=_RB32_.Breadcrumb,
    Page=_RB32_.Page,
    Pager=_RB32_.Pager,
    Pagination=_RB32_.Pagination,
    Badge=_RB32_.Badge,
    BLabel=_RB32_.BLabel,
    Jumbotron=_RB32_.Jumbotron,
    Progress=_RB32_.Progress,
    ProgressGroup=_RB32_.ProgressGroup,
    Media=_RB32_.Media,
    MediaDiv=_RB32_.MediaDiv,
    MediaBody=_RB32_.MediaBody,
    MediaList=_RB32_.MediaList,
    MediaObject=_RB32_.MediaObject,
    MediaHeading=_RB32_.MediaHeading,
    ListGroup=_RB32_.ListGroup,
    ListGroupItem=_RB32_.ListGroupItem,
    ListGroupItemText=_RB32_.ListGroupItemText,
    ListGroupItemHeading=_RB32_.ListGroupItemHeading,
    Well=_RB32_.Well,
    Modal=_RB32_.Modal,
    ModalBody=_RB32_.ModalBody,
    ModalHeader=_RB32_.ModalHeader,
    ModalFooter=_RB32_.ModalFooter,
    ModalManager=_RB32_.ModalManager,
    Panel=_RB32_.Panel,
    PanelBody=_RB32_.PanelBody,
    PanelHeader=_RB32_.PanelHeader,
    PanelFooter=_RB32_.PanelFooter,
    PanelLeft=_RB32_.PanelLeft,
    PanelRight=_RB32_.PanelRight,
    PanelContainer=_RB32_.PanelContainer,
    LoremIpsum=_RB32_.LoremIpsum,
    TimelineView=_RB32_.TimelineView,
    TimelineItem=_RB32_.TimelineItem,
    TimelineHeader=_RB32_.TimelineHeader,
    TimelineIcon=_RB32_.TimelineIcon,
    TimelineAvatar=_RB32_.TimelineAvatar,
    TimelineTitle=_RB32_.TimelineTitle,
    TimelineBody=_RB32_.TimelineBody,
    Accordian=_RB32_.Accordian,
    AccordianPane=_RB32_.AccordianPane,
    AccordianTitle=_RB32_.AccordianTitle,
    AccordianContent=_RB32_.AccordianContent,
    IonTabContainer=_RB32_.IonTabContainer,
    IonTabHead=_RB32_.IonTabHead,
    IonTabBody=_RB32_.IonTabBody,
    IonTab=_RB32_.IonTab,
    IonTabItem=_RB32_.IonTabItem,
    PricingTable=_RB32_.PricingTable,
    PricingFeature=_RB32_.PricingFeature,
    PricingTableBody=_RB32_.PricingTableBody,
    PricingTablePrice=_RB32_.PricingTablePrice,
    PricingTableHeader=_RB32_.PricingTableHeader,
    PricingTableContainer=_RB32_.PricingTableContainer,
    PricingButtonContainer=_RB32_.PricingButtonContainer,
    Alert=_RB32_.Alert,
    AlertLink=_RB32_.AlertLink,
    Tag=_RB32_.Tag,
    Sidebar=_RB32_.Sidebar,
    SidebarNav=_RB32_.SidebarNav,
    SidebarBtn=_RB32_.SidebarBtn,
    SidebarMixin=_RB32_.SidebarMixin,
    SidebarNavItem=_RB32_.SidebarNavItem,
    SidebarControls=_RB32_.SidebarControls,
    SidebarControlBtn=_RB32_.SidebarControlBtn,
    TransitionEndEvent='webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend';

/*L20N*/
var _RL20n_=window.ReactL20n;
var l20n=_RL20n_.l20n,
    Entity=_RL20n_.Entity;

/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/* Initialize Locales */
	l20n.initializeLocales('app', {
	  'locales': ['en-US'],
	  'default': 'en-US'
	});

	/* Initializing touch events */
	React.initializeTouchEvents(true);

	__webpack_require__(1);

	var routes = __webpack_require__(2);

	Pace.once('hide', function() {
	  $('#pace-loader').removeClass('pace-big').addClass('pace-small');
	});

	var InitializeRouter = function(View) {
	  // cleanup
	  if(window.Rubix) window.Rubix.Cleanup();
	  Pace.restart();
	  if(window.hasOwnProperty('ga') && typeof window.ga === 'function') {
	    window.ga('send', 'pageview', {
	     'page': window.location.pathname + window.location.search  + window.location.hash
	    });
	  }

	  React.render(React.createElement(View, null), document.getElementById('app-container'), function() {
	    // l20n initialized only after everything is rendered/updated

	    l20n.ready();
	    setTimeout(function() {
	      $('body').removeClass('fade-out');
	    }, 500);
	  });
	};

	if(Modernizr.history)
	  ReactRouter.run(routes, ReactRouter.HistoryLocation, InitializeRouter);
	else
	  ReactRouter.run(routes, InitializeRouter);


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var __HUA = (function () { var React = __webpack_require__(3); var getHotUpdateAPI = __webpack_require__(4); return getHotUpdateAPI(React, "preloader.jsx", module.id); })(); if (false) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "preloader.jsx" + ": " + err.message); } }); module.hot.dispose(function () { var nextTick = require("/Users/shripadkrishna/projects/rubix/rubix-1.2/node_modules/react-hot-loader/node_modules/next-tick/index.js"); nextTick(__HUA.updateMountedInstances); }); }

	var Ploader = __HUA.createClass({displayName: "Ploader",
	  getInitialState: function() {
	    return {
	      display: 'none'
	    };
	  },
	  show: function(cb) {
	    this.setState({display: 'block'}, cb);
	  },
	  hide: function(cb) {
	    this.setState({display: 'none'}, cb);
	  },
	  render: function() {
	    return (
	      React.createElement("div", {className: "preloader", style: {display: this.state.display}}, 
	        React.createElement("img", {src: "/imgs/preloader.gif", width: "128", height: "128"})
	      )
	    );
	  }
	});

	window.Preloader = React.render(React.createElement(Ploader, null), document.getElementById('app-preloader'));


/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/* ERROR PAGES */
	var notfound = __webpack_require__(5);

	/* APP PAGES */
	var blank = __webpack_require__(6);

	/* ROUTES */
	module.exports = (
	  React.createElement(Route, {handler: ReactRouter.RouteHandler}, 
	    React.createElement(DefaultRoute, {handler: blank}), 
	    React.createElement(Route, {path: "/", handler: blank}), 
	    React.createElement(NotFoundRoute, {handler: notfound})
	  )
	);


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = React;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var updaters = {},
	    makeModuleUpdater = __webpack_require__(7);

	function getHotUpdateAPI(React, filename, moduleId) {
	  var exists = updaters.hasOwnProperty(moduleId);
	  if (!exists) {
	    updaters[moduleId] = makeModuleUpdater(React, filename);
	  }

	  var updater = updaters[moduleId];
	  return {
	    createClass: exists ? updater.updateClass : updater.createClass,
	    updateMountedInstances: updater.updateMountedInstances
	  };
	}

	module.exports = getHotUpdateAPI;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var __HUA = (function () { var React = __webpack_require__(3); var getHotUpdateAPI = __webpack_require__(4); return getHotUpdateAPI(React, "notfound.jsx", module.id); })(); if (false) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "notfound.jsx" + ": " + err.message); } }); module.hot.dispose(function () { var nextTick = require("/Users/shripadkrishna/projects/rubix/rubix-1.2/node_modules/react-hot-loader/node_modules/next-tick/index.js"); nextTick(__HUA.updateMountedInstances); }); }

	var Header = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var Footer = __webpack_require__(10);

	var Body = __HUA.createClass({displayName: "Body",
	  render: function() {
	    return (
	      React.createElement(Container, {id: "body"}, 
	        React.createElement(Grid, {gutterBottom: true}, 
	          React.createElement(Row, null, 
	            React.createElement(Col, {sm: 12, className: "text-center"}, 
	              React.createElement(PanelContainer, null, 
	                React.createElement(Panel, null, 
	                  React.createElement(PanelBody, null, 
	                    React.createElement(Grid, null, 
	                      React.createElement(Row, null, 
	                        React.createElement(Col, {xs: 12}, 
	                          React.createElement("div", null, 
	                            React.createElement(Icon, {style: {fontSize: 288, lineHeight: 1}, glyph: "icon-mfizz-ghost"})
	                          ), 
	                          React.createElement("h1", {style: {marginBottom: 25, marginTop: 0}}, "Page not found!")
	                        )
	                      )
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var classSet = React.addons.classSet;
	var PageNotFound = __HUA.createClass({displayName: "PageNotFound",
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = classSet({
	      'container-open': this.state.open
	    });
	    return (
	      React.createElement(Container, {id: "container", className: classes}, 
	        React.createElement(Sidebar, null), 
	        React.createElement(Header, null), 
	        React.createElement(Body, null), 
	        React.createElement(Footer, null)
	      )
	    );
	  }
	});

	module.exports = PageNotFound;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var __HUA = (function () { var React = __webpack_require__(3); var getHotUpdateAPI = __webpack_require__(4); return getHotUpdateAPI(React, "blank.jsx", module.id); })(); if (false) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "blank.jsx" + ": " + err.message); } }); module.hot.dispose(function () { var nextTick = require("/Users/shripadkrishna/projects/rubix/rubix-1.2/node_modules/react-hot-loader/node_modules/next-tick/index.js"); nextTick(__HUA.updateMountedInstances); }); }

	var Header = __webpack_require__(8);
	var Sidebar = __webpack_require__(9);
	var Footer = __webpack_require__(10);

	var Body = __HUA.createClass({displayName: "Body",
	  render: function() {
	    return (
	      React.createElement(Container, {id: "body"}, 
	        React.createElement(Grid, null, 
	          React.createElement(Row, null, 
	            React.createElement(Col, {sm: 12}, 
	              React.createElement(PanelContainer, null, 
	                React.createElement(Panel, null, 
	                  React.createElement(PanelBody, {className: "text-center"}, 
	                    React.createElement("p", null, "BLANK PAGE")
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var Page = __HUA.createClass({displayName: "Page",
	  mixins: [SidebarMixin],
	  render: function() {
	    var classes = React.addons.classSet({
	      'container-open': this.state.open
	    });
	    return (
	      React.createElement(Container, {id: "container", className: classes}, 
	        React.createElement(Sidebar, null), 
	        React.createElement(Header, null), 
	        React.createElement(Body, null), 
	        React.createElement(Footer, null)
	      )
	    );
	  }
	});

	module.exports = Page;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Provides `createClass` and `updateClass` which can be used as drop-in
	 * replacement for `React.createClass` in a module. If multiple components
	 * are defined in the same module, assumes their `displayName`s are different.
	 */
	module.exports = function (React, filename) {
	  var componentUpdaters = {};

	  function createClass(spec) {
	    var displayName = spec.displayName,
	        componentUpdater;

	    if (componentUpdaters[displayName]) {
	      throw new Error(
	        'Found duplicate displayName in ' + filename + ': "' + displayName + '".\n' +
	        'react-hot-loader uses displayName to distinguish between several components in one file.'
	      );
	    }

	    componentUpdater = __webpack_require__(11)(React);
	    componentUpdaters[displayName] = componentUpdater;

	    return componentUpdater.createClass(spec);
	  }

	  function updateClass(spec) {
	    var displayName = spec.displayName,
	        componentUpdater = componentUpdaters[displayName];

	    return componentUpdater ?
	      componentUpdater.updateClass(spec) :
	      createClass(spec);
	  }

	  function updateMountedInstances() {
	    Object.keys(componentUpdaters).forEach(function (displayName) {
	      componentUpdaters[displayName].updateMountedInstances();
	    });
	  }

	  return {
	    createClass: createClass,
	    updateClass: updateClass,
	    updateMountedInstances: updateMountedInstances
	  };
	};

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var __HUA = (function () { var React = __webpack_require__(3); var getHotUpdateAPI = __webpack_require__(4); return getHotUpdateAPI(React, "header.jsx", module.id); })(); if (false) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "header.jsx" + ": " + err.message); } }); module.hot.dispose(function () { var nextTick = require("/Users/shripadkrishna/projects/rubix/rubix-1.2/node_modules/react-hot-loader/node_modules/next-tick/index.js"); nextTick(__HUA.updateMountedInstances); }); }

	var Brand = __HUA.createClass({displayName: "Brand",
	  render: function() {
	    return (
	      React.createElement(NavHeader, React.__spread({},  this.props), 
	        React.createElement(NavBrand, {tabIndex: "-1"}, 
	          React.createElement("img", {src: "/imgs/logo.png", alt: "rubix", width: "111", height: "28"})
	        )
	      )
	    );
	  }
	});

	var Navigation = __HUA.createClass({displayName: "Navigation",
	  mixins: [ReactRouter.State, ReactRouter.Navigation],
	  render: function() {
	    var props = React.mergeProps({
	      className: 'pull-right'
	    }, this.props);

	    return (
	      React.createElement(NavContent, React.__spread({},  props), 
	        React.createElement(Nav, null, 
	          React.createElement(NavItem, {className: "logout", href: "#"}, 
	            React.createElement(Icon, {bundle: "fontello", glyph: "off-1"})
	          )
	        )
	      )
	    );
	  }
	});

	var Header = __HUA.createClass({displayName: "Header",
	  render: function() {
	    return (
	      React.createElement(Grid, React.__spread({},  this.props, {id: "navbar"}), 
	        React.createElement(Row, null, 
	          React.createElement(Col, {xs: 12}, 
	            React.createElement(NavBar, {fixedTop: true, id: "rubix-nav-header"}, 
	              React.createElement(Container, {fluid: true}, 
	                React.createElement(Row, null, 
	                  React.createElement(Col, {xs: 3, visible: "xs"}, 
	                    React.createElement(SidebarBtn, null)
	                  ), 
	                  React.createElement(Col, {xs: 6, sm: 4}, 
	                    React.createElement(Brand, null)
	                  ), 
	                  React.createElement(Col, {xs: 3, sm: 8}, 
	                    React.createElement(Navigation, null)
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Header;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var __HUA = (function () { var React = __webpack_require__(3); var getHotUpdateAPI = __webpack_require__(4); return getHotUpdateAPI(React, "sidebar.jsx", module.id); })(); if (false) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "sidebar.jsx" + ": " + err.message); } }); module.hot.dispose(function () { var nextTick = require("/Users/shripadkrishna/projects/rubix/rubix-1.2/node_modules/react-hot-loader/node_modules/next-tick/index.js"); nextTick(__HUA.updateMountedInstances); }); }

	var ApplicationSidebar = __HUA.createClass({displayName: "ApplicationSidebar",
	  render: function() {
	    return (
	      React.createElement("div", null, 
	        React.createElement(Grid, null, 
	          React.createElement(Row, null, 
	            React.createElement(Col, {xs: 12}, 
	              React.createElement("div", {className: "sidebar-header"}, "PAGES"), 
	              React.createElement("div", {className: "sidebar-nav-container"}, 
	                React.createElement(SidebarNav, {style: {marginBottom: 0}}, 
	                  React.createElement(SidebarNavItem, {glyph: "icon-fontello-gauge", name: "Blank", href: "/"}), 
	                  React.createElement(SidebarNavItem, {glyph: "icon-feather-mail", name: React.createElement("span", null, "Menu ", React.createElement(BLabel, {className: "bg-darkgreen45 fg-white"}, "3"))}, 
	                    React.createElement(SidebarNav, null, 
	                      React.createElement(SidebarNavItem, {glyph: "icon-feather-inbox", name: "Inbox"}), 
	                      React.createElement(SidebarNavItem, {glyph: "icon-outlined-mail-open", name: "Mail"}), 
	                      React.createElement(SidebarNavItem, {glyph: "icon-dripicons-message", name: "Compose"})
	                    )
	                  )
	                )
	              )
	            )
	          )
	        )
	      )
	    );
	  }
	});

	var DummySidebar = __HUA.createClass({displayName: "DummySidebar",
	  render: function() {
	    return (
	      React.createElement(Grid, null, 
	        React.createElement(Row, null, 
	          React.createElement(Col, {xs: 12}, 
	            React.createElement("div", {className: "sidebar-header"}, "DUMMY SIDEBAR"), 
	            React.createElement(LoremIpsum, {query: "1p"})
	          )
	        )
	      )
	    );
	  }
	});

	var SidebarSection = __HUA.createClass({displayName: "SidebarSection",
	  render: function() {
	    return (
	      React.createElement("div", React.__spread({id: "sidebar"},  this.props), 
	        React.createElement("div", {id: "avatar"}, 
	          React.createElement(Grid, null, 
	            React.createElement(Row, {className: "fg-white"}, 
	              React.createElement(Col, {xs: 4, collapseRight: true}, 
	                React.createElement("img", {src: "/imgs/avatars/avatar0.png", width: "40", height: "40"})
	              ), 
	              React.createElement(Col, {xs: 8, collapseLeft: true, id: "avatar-col"}, 
	                React.createElement("div", {style: {top: 23, fontSize: 16, lineHeight: 1, position: 'relative'}}, "Anna Sanchez"), 
	                React.createElement("div", null, 
	                  React.createElement(Progress, {id: "demo-progress", value: 30, min: 0, max: 100, color: "#ffffff"}), 
	                  React.createElement("a", {href: "#"}, React.createElement(Icon, {id: "demo-icon", bundle: "fontello", glyph: "lock-5"}))
	                )
	              )
	            )
	          )
	        ), 
	        React.createElement(SidebarControls, null, 
	          React.createElement(SidebarControlBtn, {bundle: "fontello", glyph: "docs", sidebar: 0}), 
	          React.createElement(SidebarControlBtn, {bundle: "fontello", glyph: "chat-1", sidebar: 1}), 
	          React.createElement(SidebarControlBtn, {bundle: "fontello", glyph: "chart-pie-2", sidebar: 2}), 
	          React.createElement(SidebarControlBtn, {bundle: "fontello", glyph: "th-list-2", sidebar: 3}), 
	          React.createElement(SidebarControlBtn, {bundle: "fontello", glyph: "bell-5", sidebar: 4})
	        ), 
	        React.createElement("div", {id: "sidebar-container"}, 
	          React.createElement(Sidebar, {sidebar: 0, active: true}, 
	            React.createElement(ApplicationSidebar, null)
	          ), 
	          React.createElement(Sidebar, {sidebar: 1}, 
	            React.createElement(DummySidebar, null)
	          ), 
	          React.createElement(Sidebar, {sidebar: 2}, 
	            React.createElement(DummySidebar, null)
	          ), 
	          React.createElement(Sidebar, {sidebar: 3}, 
	            React.createElement(DummySidebar, null)
	          ), 
	          React.createElement(Sidebar, {sidebar: 4}, 
	            React.createElement(DummySidebar, null)
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = SidebarSection;


/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	var __HUA = (function () { var React = __webpack_require__(3); var getHotUpdateAPI = __webpack_require__(4); return getHotUpdateAPI(React, "footer.jsx", module.id); })(); if (false) { module.hot.accept(function (err) { if (err) { console.error("Cannot not apply hot update to " + "footer.jsx" + ": " + err.message); } }); module.hot.dispose(function () { var nextTick = require("/Users/shripadkrishna/projects/rubix/rubix-1.2/node_modules/react-hot-loader/node_modules/next-tick/index.js"); nextTick(__HUA.updateMountedInstances); }); }

	var Footer = __HUA.createClass({displayName: "Footer",
	  getInitialState: function() {
	    return {
	      version: 0
	    };
	  },
	  componentDidMount: function() {
	    this.setState({
	      version: document.getElementsByTagName('body')[0].getAttribute('data-version')
	    });
	  },
	  render: function() {
	    return (
	      React.createElement("div", {id: "footer-container"}, 
	        React.createElement(Grid, {id: "footer", className: "text-center"}, 
	          React.createElement(Row, null, 
	            React.createElement(Col, {xs: 12}, 
	              React.createElement("div", null, "© 2014 SketchPixy Creative - v", this.state.version)
	            )
	          )
	        )
	      )
	    );
	  }
	});

	module.exports = Footer;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	/**
	 * Provides `createClass` and `updateClass` which can be used to create and
	 * later patch a single component with a new version of itself.
	 */
	module.exports = function (React) {
	  var mounted = [];

	  /**
	   * Keeps track of mounted instances.
	   */
	  var TrackInstancesMixin = {
	    componentDidMount: function () {
	      mounted.push(this);
	    },

	    componentWillUnmount: function () {
	      mounted.splice(mounted.indexOf(this), 1);
	    }
	  };


	  /**
	   * Establishes a prototype as the "source of truth" and updates its methods on
	   * subsequent invocations, also patching fresh prototypes to pass calls to it.
	   */
	  var assimilatePrototype = (function () {
	    var storedPrototype,
	        knownPrototypes = [];

	    function wrapFunction(key) {
	      return function () {
	        if (storedPrototype[key]) {
	          return storedPrototype[key].apply(this, arguments);
	        }
	      };
	    }

	    function patchProperty(proto, key) {
	      proto[key] = storedPrototype[key];

	      if (typeof proto[key] !== 'function' ||
	        key === 'type' ||
	        key === 'constructor') {
	        return;
	      }

	      proto[key] = wrapFunction(key);

	      if (proto.__reactAutoBindMap[key]) {
	        proto.__reactAutoBindMap[key] = proto[key];
	      }
	    }

	    function updateStoredPrototype(freshPrototype) {
	      storedPrototype = {};

	      for (var key in freshPrototype) {
	        if (freshPrototype.hasOwnProperty(key)) {
	          storedPrototype[key] = freshPrototype[key];
	        }
	      }
	    }

	    function reconcileWithStoredPrototypes(freshPrototype) {
	      knownPrototypes.push(freshPrototype);
	      knownPrototypes.forEach(function (proto) {
	        for (var key in storedPrototype) {
	          patchProperty(proto, key);
	        }
	      });
	    }

	    return function (freshPrototype) {
	      updateStoredPrototype(freshPrototype);
	      reconcileWithStoredPrototypes(freshPrototype);
	    };
	  })();


	  /**
	   * Mixes instance tracking into the spec, lets React produce a fresh version
	   * of the component and assimilates its changes into the old version.
	   */
	  function injectMixinAndAssimilatePrototype(spec) {
	    spec.mixins = spec.mixins || [];
	    spec.mixins.push(TrackInstancesMixin);
	    var Component = (React.createClass)(spec);
	    assimilatePrototype(Component.type.prototype);
	    return Component;
	  }


	  /**
	   * Updates a React component recursively, so even if children define funky
	   * `shouldComponentUpdate`, they are forced to re-render.
	   */
	  function forceUpdateTree(instance) {
	    if (instance.forceUpdate) {
	      instance.forceUpdate();
	    }

	    if (instance._renderedComponent) {
	      forceUpdateTree(instance._renderedComponent);
	    }

	    for (var key in instance._renderedChildren) {
	      forceUpdateTree(instance._renderedChildren[key]);
	    }
	  }


	  var Component;

	  /**
	   * Proxies React.createClass to enable hot updates.
	   */
	  function createClass(spec) {
	    if (Component) {
	      throw new Error('createClass may only be called once for a given updater.');
	    }

	    Component = injectMixinAndAssimilatePrototype(spec);
	    return Component;
	  }

	  /**
	   * Proxies React.createClass to apply hot update.
	   */
	  function updateClass(spec) {
	    if (!Component) {
	      throw new Error('updateClass may only be called after createClass.');
	    }

	    injectMixinAndAssimilatePrototype(spec);
	    return Component;
	  }

	  /**
	   * Re-binds methods of mounted instances and re-renders them.
	   */
	  function updateMountedInstances() {
	    mounted.forEach(function (instance) {
	      instance._bindAutoBindMethods();
	      forceUpdateTree(instance);
	    });
	  }

	  return {
	    createClass: createClass,
	    updateClass: updateClass,
	    updateMountedInstances: updateMountedInstances
	  };
	};


/***/ }
/******/ ])
})();