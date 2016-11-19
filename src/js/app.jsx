import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import All from './all';

const Routes = (
	<Route path="/" component={All} />
);

render(
	<Router history={browserHistory} routes={Routes} />,
  document.getElementById('app')
);
