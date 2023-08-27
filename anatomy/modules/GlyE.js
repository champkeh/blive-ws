/**
 * id: GlyE
 * path: ./ua
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var i=navigator.userAgent,e={chrome:/(?!Chrom.*OPR)Chrom(?:e|ium)\/([0-9.]+)/,edg:/Edg\/([0-9._]+)/,safari:/Version\/([0-9._]+).*Safari/},n=i.includes("Windows NT"),r=i.includes("Mac OS X"),t=["iPad Simulator","iPhone Simulator","iPod Simulator","iPad","iPhone","iPod","iOS"].includes(navigator.platform)||i.includes("Mac")&&"ontouchend"in document,o=e.safari.test(i),u=e.chrome.test(i),a=e.edg.test(i),s=function(){function n(e){var n;return Number(null===(n=e.exec(i))||void 0===n?void 0:n[1].split(".")[0])}return u?n(e.chrome):a?n(e.edg):o?n(e.safari):0}();exports.default={isWin:function(){return n},isMac:function(){return r},isIOS:function(){return t},isSafari:function(){return o},isChrome:function(){return u},isEdg:function(){return a},version:function(){return s}};
})()