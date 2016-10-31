import React from 'react';
import ReactDOM from 'react-dom';
import All from './all';

import './../scss/application.scss';

const app = document.getElementById('app');

ReactDOM.render(
  <All />, app
);

/*
$(document).foundation();

function cardFavorite(e) {
  var src = $(e).find('i');
  src.toggleClass("fa-heart-o fa-heart")
return false
}
*/
