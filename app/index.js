var React = require('react');
var ReactDOM = require('react-dom');
var PropTypes = require('prop-types');
require('./index.css');

var App = require('./components/App');

// a component has
// state
// lifecycle events
// UI

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
