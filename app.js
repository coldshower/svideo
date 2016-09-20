require('babel-register');

const express = require('express');
const React = require('react');
const ReactDOMServer = require('react-dom/server');

const ReactRouter = require('react-router');
const match = ReactRouter.match;
const RouterContext = ReactRouter.RouterContext;

const ReactRedux = require('react-redux');
const Provider = ReactRedux.Provider;

const store = require('./js/store.jsx').store;
const _ = require('lodash');

const fs = require('fs');
const port = 8080;
const baseTemplate = fs.readFileSync('./index.html');
const template = _.template(baseTemplate);
const Routes = require('./js/app.jsx').Routes; 

const app = express();

app.use('/public', express.static('./public'));

app.use((req, res, next) => {
	match({
		routes: Routes(),
		location: req.url
	}, (err, redirectLocation, renderProps) => {
		if (err) {
			res.status(500).send(err.message);
		} else if (redirectLocation) {
			res.redirect(302, redirectLocation.pathname + redirectLocation.search);
		} else if (renderProps) {
			const body = ReactDOMServer.renderToString(
				React.createElement(
					Provider, {store}, React.createElement(RouterContext, renderProps)
				)
			);
			res.status(200).send(template({body}));
		} else {
			res.status(404).send('not found');
		}

	});
});

app.listen(port, () => {
	console.log('app listening on port ' + port);
});