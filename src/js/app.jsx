import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import All from './all';

render(
  <Router history={browserHistory}>
    <Route path="/" component={All} />
  </Router>,
  document.getElementById('app')
);
