/**
 * id: cQRo
 * path: ./utils
 */

(function(require,module,exports) {
"use strict";function t(t){var e,r;const{cookie:o}=document;return null==o?"":null!==(r=null===(e=o.split(";").filter(t=>t.trim().length>0).map(t=>t.split("=")).map(([t,e])=>[t.trim(),e.trim()]).find(([e])=>e===t))||void 0===e?void 0:e[1])&&void 0!==r?r:""}function e(t){return new Promise(e=>{setTimeout(e,t)})}function r(){return Number(t("DedeUserID"))}function o(){return n(8)}function n(t=12){const e=[];for(let r=0;r<t;r++){const t=10*Math.random();e.push(Math.floor(t<1&&0===r?10*Math.random():t))}return Number(e.join(""))}function s(t){return void 0===t?2:t.replace(/[\u0391-\uFFF5]/g,"aa").length}function i(t){let e=null;return s(e="string"==typeof t?t:JSON.stringify(t))}function p(t){const e=new FormData;for(const r in t)if(Object.prototype.hasOwnProperty.call(t,r)){const o=t[r];e.append(r,o)}return e}Object.defineProperty(exports,"__esModule",{value:!0}),exports.Object2FormData=exports.getSizeInBytes=exports.getStringLength=exports.UUID=exports.shortUUID=exports.getUserId=exports.sleep=exports.getCookie=void 0,exports.getCookie=t,exports.sleep=e,exports.getUserId=r,exports.shortUUID=o,exports.UUID=n,exports.getStringLength=s,exports.getSizeInBytes=i,exports.Object2FormData=p;
})()