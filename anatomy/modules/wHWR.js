/**
 * id: wHWR
 * path: ./toast
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.setToastCssText=void 0;var t=null,e=function(e){t=e};function n(e,n){document.querySelectorAll(".web-player-toast").forEach(function(t){return t.remove()});var o=document.createElement("div");o.classList.add("web-player-toast"),o.textContent=e,o.style.cssText=null!=t?t:"\n      font-size: 14px;\n      color: #fff;\n      background-color: rgba(0, 0, 0, 0.6);\n      position: absolute;\n      top: 50%;\n      left: 50%;\n      transform: translate(-50%, -50%);\n      z-index: 11;\n      padding: 6px 12px;\n      border-radius: 6px;\n      transition: opacity 1s;\n    ",n.appendChild(o),setTimeout(function(){o.style.opacity="0"},1500),setTimeout(function(){o.remove()},2500)}exports.setToastCssText=e,exports.default=n;
})()