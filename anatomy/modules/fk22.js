/**
 * id: fk22
 * path: ./create-element
 */

(function(require,module,exports) {
"use strict";function t(t,e){void 0===e&&(e={});var s=document.createElement(t),n=Object.assign({classname:"",attributes:[],text:"",textAsHtml:!1},e);return s.className=n.classname,s[n.textAsHtml?"innerHTML":"textContent"]=n.text,n.attributes.forEach(function(t){s.setAttribute(t[0],t[1])}),s}Object.defineProperty(exports,"__esModule",{value:!0}),exports.createElement=void 0,exports.createElement=t;
})()