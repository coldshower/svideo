const React = require('react');

const Landing = require('./landing');
const Search = require('./search');
const Layout = require('./layout');
const Details = require('./details');

const ReactRouter = require('react-router');

const { store } = require('./store');
const { Provider } = require('react-redux');


const myRoutes = props => (
	<Route path="/" component={Layout}>
		<IndexRoute component={Landing} />
		<Route path="/search" component={Search}/>
		<Route path="/details/:id" component={Details} />
	</Route>
);

// OR
const {Router, Route, browserHistory, IndexRoute} = require('react-router');

class App extends React.Component {
	render () {
		return (
			<Provider store={store}>
				<Router history={browserHistory}>
					{myRoutes()}
				</Router>
			</Provider>
		)
	}
}

App.Routes = myRoutes;

module.exports = App;