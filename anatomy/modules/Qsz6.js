/**
 * id: Qsz6
 * path: ./video-enhance
 */

function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.startVideoCAS=void 0;var e=require("@bilibili-live/web-player"),r=require("./cas");function i(i){var o=function(){},t=function(){var e=i.getVideoEl();if(null!=e){var t=r.videoCAS(e),n=t.canvas,a=t.supported,d=t.stop;a&&(o(),o=d,i.container.appendChild(n))}};t();var n=i.on(e.VideoEventType.FirstFrame,function(){o(),t()}),a=i.on(e.VideoEventType.Ended,o),d=i.on(e.VideoEventType.Error,o);return function(){o(),n(),a(),d()}}exports.startVideoCAS=i;
}