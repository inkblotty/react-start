var React = require('react');
var ReactDOM = require('react-dom');

// styles
require('./styles/main.scss');

// components
var App = require('./components/App.js');

ReactDOM.render(
	<App />,
	document.getElementById('app')
)