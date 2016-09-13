const React = require('react');
const ReactDOM = require('react-dom');

const Landing = require('./landing');
const Search = require('./search');
const Layout = require('./layout');
const Details = require('./details');
const { shows } = require('../public/data');

const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const hashHistory = ReactRouter.hashHistory;
const IndexRoute = ReactRouter.IndexRoute;

// OR
// const {Router, Route, hashHistory} = require('react-router');

const App = () => (
	<Router history={hashHistory}>
		<Route path="/" component={Layout}>
			<IndexRoute component={Landing} />
			<Route path="/search" component={Search} shows={shows} />
			<Route path="/details/:id" component={Details} />
		</Route>
	</Router>
);

ReactDOM.render(<App />, document.getElementById('app'));