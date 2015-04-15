/**
 * @providesModule ReactStyleHead
 * @jsx React.DOM
 */

'use strict'

var ReactStyle = require('./ReactStyle.jsx');

var ReactStyleHead = React.createClass({
  componentDidMount: function() {
    ReactStyle.addEventListener('change', this.handleStyleChange);
  },

  componentWillUnmount: function() {
    ReactStyle.removeEventListener('change', this.handleStyleChange);
  },

  handleStyleChange: function() {
    this.forceUpdate();
  },

  render: function() {
    return (
      <head {...this.props}>
        {this.props.children}
        {ReactStyle.renderToComponents()}
      </head>
    );
  }
});

module.exports = ReactStyleHead;
