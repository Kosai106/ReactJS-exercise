import jQuery from 'jquery';

require('font-awesome-webpack');

window.jQuery = jQuery;
require('./../node_modules/foundation-sites/dist/foundation.js');

jQuery(document).ready(($) => {
	$(document).foundation();
});

document.body.appendChild(
  require('./js/app.jsx')
);
