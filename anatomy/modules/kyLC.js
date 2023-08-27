/**
 * id: kyLC
 * path: ../utils
 */

function(require,module,exports) {
"use strict";function o(t){return(o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(o){return typeof o}:function(o){return o&&"function"==typeof Symbol&&o.constructor===Symbol&&o!==Symbol.prototype?"symbol":typeof o})(t)}function t(o){var t,e;return null!==(e=null===(t=RegExp("[;\\s]*".concat(o,"=([^;\\s]+)")).exec(document.cookie))||void 0===t?void 0:t[1])&&void 0!==e?e:""}function e(){return/ipad|iphone os|android/i.test(navigator.userAgent)}function n(){}function r(t,e){if(t===e)return!0;if("object"===o(t)){for(var n in t)if(!r(t[n],e[n]))return!1;return!0}return!1}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getCookie=t,exports.isMobile=e,exports.noop=n,exports.deepEqual=r;
}