/**
 * id: hY1T
 * path: ./log-storage
 */

function(require,module,exports) {
"use strict";var e;Object.defineProperty(exports,"__esModule",{value:!0}),exports.logStorageConfig=exports.goldMiner=exports.logLevelColos=void 0;var o=require("@bilibili-live/web-player-common"),r=require("@bilibili-live/gold-miner"),t=require("./biz-common");exports.logLevelColos=((e={})[o.LogLevel.Error]="red",e[o.LogLevel.Info]="blue",e[o.LogLevel.Warn]="orange",e[o.LogLevel.Debug]="gray",e);var n,i="indexedDB"in window||"webkitIndexedDB"in window||"mozIndexedDB"in window;function l(e){i&&exports.goldMiner.recieveMsg(e,{source:"socket-report",latestCount:20})}function s(e){i&&(exports.goldMiner.init({roomId:e.roomId,uid:t.getUserId(),ref:window.location.href,createTime:Date.now(),updateTime:Date.now()}),null!=e.socket&&(null!=n&&n(),n=e.socket.on("message",l)))}exports.goldMiner=new r.GoldMiner({appName:"live-web-player"}),exports.goldMiner.formatter(function(e){return{content:e.$content,ts:e.$createTime,color:exports.logLevelColos[e.$type]}}),i&&o.logger.watch(function(e){exports.goldMiner.log({content:e.content,ts:e.ts,type:e.level})}),exports.logStorageConfig=s;
}