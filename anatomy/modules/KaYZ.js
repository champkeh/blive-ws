/**
 * id: KaYZ
 * path: ./compatibility-check
 */

(function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.isHardSupportHEVC=void 0;var t=e(require("./ua"));function r(e,t){var r;void 0===t&&(t="video/mp4");var o=document.createElement("video");if("function"!=typeof o.canPlayType||"function"!=typeof(null===(r=window.MediaSource)||void 0===r?void 0:r.isTypeSupported))return!1;var n=t+'; codecs="'+e+'"',i=o.canPlayType(n).toLowerCase();return!("maybe"!==i&&"probably"!==i||!window.MediaSource.isTypeSupported(n))}function o(){var e,t=document.createElement("canvas"),r=!1;try{var o=null!==(e=t.getContext("webgl"))&&void 0!==e?e:t.getContext("experimental-webgl");if(null==o)return r;var n=o.getExtension("WEBGL_debug_renderer_info");if(null==n)return r;-1===o.getParameter(n.UNMASKED_RENDERER_WEBGL).toString().toLowerCase().indexOf("swiftshader")&&(r=!0)}catch(i){}return r}function n(){return t.default.isIOS()||r("hvc1.1.6.L123")&&(t.default.isSafari()||o()&&(t.default.isChrome()||t.default.isEdg()&&t.default.version()>99))}exports.isHardSupportHEVC=n;
})()