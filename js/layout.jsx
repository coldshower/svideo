const React = require('react');

const Layout = (props) => (
	<div className="app-container">
		{props.children}
	</div>
);

const { element } = React.PropTypes;
// equivalent to const element = React.PropTypes.element;

Layout.propTypes = {
	children: element
};

module.exports = Layout;
