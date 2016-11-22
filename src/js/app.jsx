import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, hashHistory } from 'react-router';
import All from './all';
import Test from './test';

render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={All} />
			<Route path="event/:url" component={Test} />
		</Router>
	),
  document.getElementById('app')
);
