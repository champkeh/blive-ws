/**
 * id: yABZ
 * path: ./live-player-tool
 */

(function(require,module,exports) {
"use strict";function e(e,r){if(r.some(function(r){return r.value===e.code.toString()}))return e.code.toString();for(var t=r[r.length-1],n=r.length-1;n>=0;n-=1){if(Number(r[n].value)>e.code&&null!=t)return String(t.value);t=r[n]}return String(t.value)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.getHEVCDowngradeQn=void 0,exports.getHEVCDowngradeQn=e;
})()