/**
 * @preserve Glift: A Responsive Javascript library for the game Go.
 *
 * @copyright Josh Hoak
 * @license MIT License (see LICENSE.txt)
 * @version 1.1.0
 * --------------------------------------
 */

// Define some closure primitives for backwards compatibility. Closure compiler
// works off of regular expressions, so this shouldn't be an issue.
// Allows us to use goog.require and goog.provides in dev mode.
if (!window['goog']) {
  window['goog'] = {}
  window['goog']['provide'] = function(){};
  window['goog']['require'] = function(){};
}

goog.provide('glift');

(function(w) {
var glift = glift || w.glift || {};
if (w) {
  // expose Glift as a global.
  w.glift = glift;
}
})(window);
