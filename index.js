'use strict';

const methods = {
  // ready: function (handler) {
  //   document.addEventListener('DOMContentLoaded', handler, false);
  // }
}

function J$ (selector) {
  return Object.assign(document.querySelectorAll(selector), methods);
}

J$.ready = function (handler) {
  document.addEventListener('DOMContentLoaded', handler, false)
}

// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = J$;
}
