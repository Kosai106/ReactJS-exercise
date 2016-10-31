import jQuery from 'jquery';

window.jQuery = jQuery;

jQuery(document).ready(function($) {
  $(document).foundation();
});

require('./../node_modules/foundation-sites/dist/foundation.js');
const component = require('./js/app.jsx');

document.body.appendChild(component());
