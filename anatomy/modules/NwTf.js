/**
 * id: NwTf
 * path: ./report
 */

function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,t,o,a){return new(o||(o=Promise))(function(r,i){function n(e){try{u(a.next(e))}catch(t){i(t)}}function c(e){try{u(a.throw(e))}catch(t){i(t)}}function u(e){var t;e.done?r(e.value):(t=e.value,t instanceof o?t:new o(function(e){e(t)})).then(n,c)}u((a=a.apply(e,t||[])).next())})};Object.defineProperty(exports,"__esModule",{value:!0}),exports.reportLog=void 0;const t=require("./ajax"),o=require("./utils");function a(a,r=""){return e(this,void 0,void 0,function*(){const e=new Blob(["--"+JSON.stringify(a.data)]);"prod"===r&&(r=""),r&&(r=`ff-${r}-`);try{const{location:n}=yield(0,t.ajax)(`//${r?"uat-":""}api.bilibili.com/x/upload/web/image`,{method:"POST",data:(0,o.Object2FormData)({bucket:"live-log-ttl",dir:a.appName,file:e})});if(null==n||""===n)return!1;const c={appName:a.appName,userID:(0,o.getUserId)(),source:a.sourceType,url:n.replace(".txt","")};return null!=a.appId&&(c.appID=a.appId),null!=a.msgId&&(c.msgID=a.msgId),yield(0,t.ajax)(`//${r}api.live.bilibili.com/xlive/open-interface/v1/webLogAgent/setWebAppLogRecord`,{method:"POST",data:(0,o.Object2FormData)(c)}),!0}catch(i){return console.warn(i),!1}})}exports.reportLog=a;
}