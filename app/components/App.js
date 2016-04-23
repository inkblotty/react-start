var React = require('react');
var Note = require('./Note.js');

var App = React.createClass({
	render: function() {
		return (
			<Note />
		)
	}
});

module.exports = App;