/**
 * id: Qw13
 * path: ./media-action
 */

function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var e=require("./event-bus"),n=new e.EventBus;function t(e,t){return n.on(e,t)}function i(){n.destroy(),n=new e.EventBus}null!=navigator.mediaSession&&(navigator.mediaSession.setActionHandler("pause",function(){n.emit("pause")}),navigator.mediaSession.setActionHandler("play",function(){n.emit("play")})),exports.default={on:t,destroy:i};
}