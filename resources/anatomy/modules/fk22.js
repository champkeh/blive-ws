/**
 * id: fk22
 * path: ./create-element
 */

(function(require,module,exports) {
"use strict";function t(t,e){void 0===e&&(e={});var s=document.createElement(t),r=Object.assign({classname:"",attributes:[],text:"",textAsHtml:!1},e);return s.className=r.classname,s[r.textAsHtml?"innerHTML":"textContent"]=r.text,r.attributes.forEach(function(t){var e=t[0],r=t[1];s.setAttribute(e,r)}),s}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=void 0,exports.createElement=t;
})()