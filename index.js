'use strict';

function J$ (selector) {
  return Object.assign(document.querySelectorAll(selector), methods);
}

J$.ready = function (handler) {
  document.addEventListener('DOMContentLoaded', handler, false)
}

function loop (coll, iterator) {
  if (coll.length) {
    for (var i = 0; i < coll.length; i++) {
      iterator(coll[i]);
    }
  } else {
    iterator(coll);
  }
}

// Functional approach with shared methods
const methods = {};

methods.addClass = function (className) {
  loop(this, function (el) {
    el.classList.add(className);
  });
  return this;
};

methods.removeClass = function (className) {
  loop(this, function (el) {
    el.classList.remove(className);
  });
  return this;
};


// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = J$;
}
