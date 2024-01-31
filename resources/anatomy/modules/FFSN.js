/**
 * id: FFSN
 * path: ./events/user-operation
 */

(function(require,module,exports) {
"use strict";function e(e,t){var n=e.onChange(function(e,n){if("subtitle"===e)for(var r in n)t({path:"ctrl.subtitle.".concat(r),value:n[r]})});return function(){n()}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.bindUserOperation=void 0,exports.bindUserOperation=e;
})()