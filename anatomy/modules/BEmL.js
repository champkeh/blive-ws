/**
 * id: BEmL
 * path: ./player-debug
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.DebugUrlParamKeys=void 0;var e,o=new URL(location.href).searchParams;!function(e){e.P2PType="wpdP2PType",e.SupportHEVC="wpdSupportHEVC",e.Log2Console="wpdLog2Console",e.SocketMsg2Console="wpdSocketMsg2Console",e.DMRenderType="wpdDMRenderType"}(e=exports.DebugUrlParamKeys||(exports.DebugUrlParamKeys={}));var r=o.get(e.P2PType),p=o.get(e.Log2Console),l=o.get(e.SupportHEVC),s=o.get(e.SocketMsg2Console);exports.default={P2PType:null==r?null:Number(r),Log2Console:null!=p&&"0"!==p,SupportHEVC:null!=l&&"0"!==l,SocketMsg2Console:null!=s&&"0"!==s,DMRenderType:o.get(e.DMRenderType)};
})()