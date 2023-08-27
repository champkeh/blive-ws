/**
 * id: weyG
 * path: ./ui-components/preround-conuter
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("@bilibili-live/web-player-common");function n(n,o,a){void 0===a&&(a=300),e.logger.info("start round count down");var i=n.getElementsByClassName("web-player-video-round-counter");1===i.length&&i[0].remove();var l=document.createElement("div");l.innerHTML='\n    <p style="'+r(20)+'">\n      <span>'+t(a)+'</span>\n      后\n      </p>\n    <p style="'+r(30)+'">主播的投稿视频将轮流播放</p>\n  ',l.classList.add("web-player-video-round-counter"),l.style.cssText="\n    width: 400px;\n    position: absolute;\n    z-index: 10;\n    pointer-events: none;\n    left: 50%;\n    top: 50%;\n    margin-left: -200px;\n    margin-top: -66px;\n    color: #aaa;\n  ";var s=l.getElementsByTagName("span");s[0].style.fontSize="50px",n.append(l);var p=window.setInterval(function(){a>1?s[0].innerText=t(--a):(clearInterval(p),l.remove(),o().catch(function(n){e.logger.error(n)}))},1e3);return function(){clearInterval(p),l.remove()}}function t(e){var n=Math.floor(e/60),t=Math.floor(e%60);return"0"+n+":"+(t<10?"0"+t.toString():t)}function r(e){return"\n    text-align: center;\n    line-height: 50px;\n    letter-spacing: 3px;\n    font-weight: normal;\n    font-size: "+e+"px;\n    line-height: 1;\n  "}exports.default=n;
})()