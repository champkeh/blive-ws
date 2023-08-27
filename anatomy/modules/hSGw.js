/**
 * id: hSGw
 * path: ./fps-monitor
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.monitorFPS=void 0;var e=[],n=new Set,t=0,r=0,i=[],o=!1,a=0,u=function u(){t++;var c=performance.now(),f=c-r;if(f>=1e3){var l=Math.round(1e3*t/f);if(r=c,t=0,i.push(l),10===(i=i.slice(-10)).length)for(var s=Math.max.apply(Math,i),d=0,v=e;d<v.length;d++){var h=v[d],m=h[0],p=h[1];s<m&&p.forEach(function(e){return e()})}var y=i.reduce(function(e,n){return e+n},0)/i.length;n.forEach(function(e){return e(y)})}o&&(a=requestAnimationFrame(u))};function c(){r=performance.now(),i=[],t=0,cancelAnimationFrame(a),a=requestAnimationFrame(u)}function f(t,r){if("alert"===t.type){var i=e.find(function(e){var n=e[0];return t.threshold===n});null==i&&(i=[t.threshold,new Set],e.push(i),e.sort(function(e,n){return e[0]-n[0]})),i[1].add(r)}else"avg"===t.type&&n.add(r);return o||(o=!0,c()),function(){var i;"alert"===t.type?null===(i=e.find(function(e){return e[0]===t.threshold}))||void 0===i||i[1].delete(r):"avg"===t.type&&n.delete(r),e.map(function(e){return e[1]}).every(function(e){return 0===e.size})&&0===n.size&&(o=!1,cancelAnimationFrame(a))}}document.addEventListener("visibilitychange",function(){"visible"===document.visibilityState&&c()}),exports.monitorFPS=f;
})()