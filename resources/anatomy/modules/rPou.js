/**
 * id: rPou
 * path: ../common/track-video
 */

(function(require,module,exports) {
"use strict";var e=this&&this.__assign||function(){return(e=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},t=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n);var o=Object.getOwnPropertyDescriptor(t,n);o&&("get"in o?t.__esModule:!o.writable&&!o.configurable)||(o={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,r,o)}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),n=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),r=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var r={};if(null!=e)for(var o in e)"default"!==o&&Object.prototype.hasOwnProperty.call(e,o)&&t(r,e,o);return n(r,e),r},o=this&&this.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(o,i){function a(e){try{u(r.next(e))}catch(t){i(t)}}function l(e){try{u(r.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?o(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(a,l)}u((r=r.apply(e,t||[])).next())})},i=this&&this.__generator||function(e,t){var n,r,o,i,a={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:l(0),throw:l(1),return:l(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function l(l){return function(u){return function(l){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,l[0]&&(a=0)),a;)try{if(n=1,r&&(o=2&l[0]?r.return:l[0]?r.throw||((o=r.return)&&o.call(r),0):r.next)&&!(o=o.call(r,l[1])).done)return o;switch(r=0,o&&(l=[2&l[0],o.value]),l[0]){case 0:case 1:o=l;break;case 4:return a.label++,{value:l[1],done:!1};case 5:a.label++,r=l[1],l=[0];continue;case 7:l=a.ops.pop(),a.trys.pop();continue;default:if(!(o=(o=a.trys).length>0&&o[o.length-1])&&(6===l[0]||2===l[0])){a=0;continue}if(3===l[0]&&(!o||l[1]>o[0]&&l[1]<o[3])){a.label=l[1];break}if(6===l[0]&&a.label<o[1]){a.label=o[1],o=l;break}if(o&&a.label<o[2]){a.label=o[2],a.ops.push(l);break}o[2]&&a.ops.pop(),a.trys.pop();continue}l=t.call(e,a)}catch(u){l=[6,u],r=0}finally{n=o=0}if(5&l[0])throw l[1];return{value:l[0]?l[1]:void 0,done:!0}}([l,u])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.createVideoTracker=void 0;var a=require("@bilibili-live/web-player-video"),l=r(require("@bilibili-live/web-player-track")),u=require("@bilibili-live/web-player-common"),c=l.default.PerfCode,f=l.default.EventCode,s=l.default.CustomCode;function d(){var t=this,n=!1,r=!1,d=!1;window.addEventListener("unload",function(){d=!0});var p=new WeakMap,v=function(v){l.default.event(f.CreateVideo,null,{sampleRate:.1,extFields:["sProtocol","sHost","p2pType","sCodec","sName","sFormat"],randDelay:0}),v.once(a.EventType.NetworkResponse,function(e){var t,n,r=e.headers.get("x-service-module");null!=r&&l.default.updateDynamicInfo(((t={})["x-service-module"]=((n={})[r]=1,n),t))}),v.once(a.EventType.FirstFrame,function(e){l.default.perf(c.FirstFrame,e,{sampleRate:.1,extFields:"all"})}),v.once(a.EventType.FirstPacket,function(e){l.default.perf(c.FirstPacket,e,{sampleRate:.05})}),v.once(a.EventType.MetaData,function(e){l.default.perf(c.VideoMeta,e,{sampleRate:.05})}),v.on(a.EventType.WaitStart,function(){var e=v.getNetworkState();null!=e&&l.default.error(l.ErrorCode.NetworkException,JSON.stringify(Object.assign({},e,{trigger:"wait",bufLen:1e3*(0,u.remainBufferLength)(v.getVideoEl())})),{sampleRate:.1})}),v.once(a.EventType.Ended,function(){return o(t,void 0,void 0,function(){return i(this,function(e){return n=!0,[2]})})}),v.once(a.EventType.FirstFrame,function(){n=!1,r=!1}),v.once(a.EventType.Error,function(e){if(!d&&!r)if(r=!0,n);else{l.default.error(e.code,JSON.stringify(e.errInfo));var t=v.getNetworkState();e.code in a.NetworkErrorCode&&null!=t&&l.default.error(l.ErrorCode.NetworkException,JSON.stringify(Object.assign({},t,{errCode:e.code,bufLen:1e3*(0,u.remainBufferLength)(v.getVideoEl())})),{sampleRate:.1})}});var y=l.default.fixedDynamicFieldsVerIns(),b={};v.on(a.EventType.WaitReport,function(t){var n,r,o={},i=p.get(v);null!=(null==i?void 0:i.getP2PDataCollectionStatus)&&(null===(r=null==i?void 0:i.getP2PDataCollectionStatus)||void 0===r?void 0:r.call(i)).getQueryServerInfo().bvcServiceModule.forEach(function(e,t){o[t]=e});var a=(0,u.minusObject)(b,o);b=o;null!=i&&y.updateDynamicInfo(((n={})["x-service-module"]=a,n)),y.custom(s.Waiting,e({},t),{randDelay:5e3,extFields:"all"})})};return v.setP2PInstance=function(e,t){p.set(e,t)},v}exports.createVideoTracker=d;
})()