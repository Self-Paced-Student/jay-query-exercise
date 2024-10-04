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

methods.toggleClass = function (className) {
  loop(this, function (el) {
    el.classList.toggle(className);
  });
  return this;
};

methods.hide = function () {
  loop(this, function (el) {
    const computedDisplay = window.getComputedStyle(el).display;
    if (computedDisplay !== 'none') {
      el.dataDisplay = computedDisplay;
      el.style.display = 'none';
    }
  });
};

methods.show = function () {
  loop(this, function (el) {
    const computedDisplay = window.getComputedStyle(el).display;
    if (computedDisplay === 'none') {
      el.style.display = el.dataDisplay || 'inline';
      delete el.dataDisplay;
    }
  });
};

methods.toggle = function () {
  loop(this, function (el) {
    const computedDisplay = window.getComputedStyle(el).display;
    if (computedDisplay === 'none') methods.show.call(el);
    else methods.hide.call(el);
  });
};

methods.click = function (handler) {
  loop(this, function (el) {
    el.onclick = handler;
  });
};

// methods.append = function (content) {
//   loop(this, function (el) {
//     el.insertAdjacentHTML('beforeend', content);
//   });
//   return this;
// };

// methods.text = function (content) {
//   if (content !== undefined) {
//     loop(this, function (el) {
//       el.textContent = content;
//     });
//     return this;
//   } else {
//     const res = [];
//     loop(this, function (el) {
//       res.push(el.textContent);
//     });
//     return res.join(' ');
//   }
// };

// methods.data = function (el, key, val) {

//   if (val) storeData(el, key, val); // Store data
//   else retrieveData(el, key); // Retrieve data

//   function storeData (el, key, val) {
//     var id;
//     if (el.dataUniqueId) id = el.dataUniqueId; // If the element already has a unique ID, use it
//     else el.dataUniqueId = id = Symbol(); // Otherwise assign a new unique ID to it
//     if (memo[id] === undefined) memo[id] = {}; // If there's no store yet for the unique ID, let's create one
//     memo[id][key] = val; // And finally store the data
//   }

//   function retrieveData (el, key) {
//     var id = el.dataUniqueId;
//     if (id) return memo[id][key];
//   }

// };


// Allow tests to run on the server (leave at the bottom)
if (typeof window === 'undefined') {
  module.exports = J$;
}
