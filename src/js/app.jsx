import React from 'react';
import { render } from 'react-dom';
import { Router, Route, hashHistory } from 'react-router';

import Upload from './components/upload';
import All from './all';

render(
	(
		<Router history={hashHistory}>
			<Route path="/" component={All} />
			<Route path="upload" component={Upload} />
			<Route path="event/:guid" component={All} />
			<Route path="user/profile" component={All} />
			<Route path="user/settings" component={All} />
			<Route path="user/signout" component={All} />
		</Router>
	),
  document.getElementById('app')
);

/*
	<Route path="event/:url" component={Test} />
*/
