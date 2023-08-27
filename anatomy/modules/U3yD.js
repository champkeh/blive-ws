/**
 * id: U3yD
 * path: ./user-setting
 */

(function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++)for(var n in t=arguments[r])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e}).apply(this,arguments)},t=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=t(require("./logger")),a="web-player-ui-config",n=0;function u(){var e,t=localStorage.getItem(a+":"+n),u={volume:{value:90,disabled:!1},danmaku:{display:!0,opacity:100,fontScale:100,density:100,area:4,showMaskOption:!1,enableMask:!0}};if(null===t)return u;try{e=JSON.parse(t)}catch(o){return r.default.error(o),u}return e=Object.assign({},u,e)}function o(e){n=e}function i(){return u().danmaku}function l(){return u().volume}function s(t){var r=u();localStorage.setItem(a+":"+n,JSON.stringify(e(e({},r),{volume:t})))}function c(t){var r=u();localStorage.setItem(a+":"+n,JSON.stringify(e(e({},r),{danmaku:t})))}exports.default={getDanmaku:i,getVolume:l,init:o,setDanmaku:c,setVolume:s};
})()