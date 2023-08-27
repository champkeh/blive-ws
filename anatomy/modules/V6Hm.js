/**
 * id: V6Hm
 * path: ./qvb-p2p
 */

function(require,module,exports) {
"use strict";var e=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(exports,"__esModule",{value:!0});var r=require("@bilibili-live/web-player-common"),t=e(require("@bilibili-live/fmp4.js")),i=e(require("./qvb-fetcher")),n=!1;function o(e){var o=e.corePlayer,u=e.videoEl;return o instanceof t.default.fMp4Player?i.default.isSupported()?n?(r.logger.warn("p2p P2P_ERROR_FLAG fallback"),!1):(o.createFetcher=function(e,t,o){var l=new i.default(function(r){e(new a(r))},t,function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];n=!0,r.logger.error("third fetcher Error: "+JSON.stringify(e)),o.apply(void 0,e)});return l.videoElement=u,l},!0):(r.logger.error("QVB unsupported or sdk not loaded"),!1):(r.logger.error("QVB p2p must use be fMp4Player instance"),!1)}exports.default=o;var u=function(){function e(){this.map={}}return e.prototype.get=function(e){return this.map[e]},e.prototype.set=function(e,r){this.map[e]=r},e}(),a=function(){return function(e){this.status=e,this.ok=e>=200&&e<=299,this.headers=new u}}();
}