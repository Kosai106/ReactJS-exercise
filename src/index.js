import jQuery from 'jquery';

window.jQuery = jQuery;
require('./../node_modules/foundation-sites/dist/foundation.js');

jQuery(document).ready(($) => {
  $(document).foundation();
});

document.body.appendChild(
  require('./js/app.jsx')
);
