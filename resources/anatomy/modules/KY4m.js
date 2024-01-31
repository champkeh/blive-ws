/**
 * id: KY4m
 * path: ../common/utils
 */

(function(require,module,exports) {
"use strict";var e=this&&this.__awaiter||function(e,r,n,t){return new(n||(n=Promise))(function(o,i){function c(e){try{a(t.next(e))}catch(r){i(r)}}function u(e){try{a(t.throw(e))}catch(r){i(r)}}function a(e){var r;e.done?o(e.value):(r=e.value,r instanceof n?r:new n(function(e){e(r)})).then(c,u)}a((t=t.apply(e,r||[])).next())})},r=this&&this.__generator||function(e,r){var n,t,o,i,c={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return i={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function u(u){return function(a){return function(u){if(n)throw new TypeError("Generator is already executing.");for(;i&&(i=0,u[0]&&(c=0)),c;)try{if(n=1,t&&(o=2&u[0]?t.return:u[0]?t.throw||((o=t.return)&&o.call(t),0):t.next)&&!(o=o.call(t,u[1])).done)return o;switch(t=0,o&&(u=[2&u[0],o.value]),u[0]){case 0:case 1:o=u;break;case 4:return c.label++,{value:u[1],done:!1};case 5:c.label++,t=u[1],u=[0];continue;case 7:u=c.ops.pop(),c.trys.pop();continue;default:if(!(o=(o=c.trys).length>0&&o[o.length-1])&&(6===u[0]||2===u[0])){c=0;continue}if(3===u[0]&&(!o||u[1]>o[0]&&u[1]<o[3])){c.label=u[1];break}if(6===u[0]&&c.label<o[1]){c.label=o[1],o=u;break}if(o&&c.label<o[2]){c.label=o[2],c.ops.push(u);break}o[2]&&c.ops.pop(),c.trys.pop();continue}u=r.call(e,c)}catch(a){u=[6,a],t=0}finally{n=o=0}if(5&u[0])throw u[1];return{value:u[0]?u[1]:void 0,done:!0}}([u,a])}}};Object.defineProperty(exports,"__esModule",{value:!0}),exports.maxRetryChecker=exports.blockStream=exports.loadingOrCoverImg=exports.backoffById=exports.retry=void 0;var n=require("@bilibili-live/web-player-common"),t=require("@bilibili-live/web-player-video");function o(t,o){var i=this,c=-1;return function(){for(var u=[],a=0;a<arguments.length;a++)u[a]=arguments[a];return e(i,void 0,void 0,function(){return r(this,function(i){switch(i.label){case 0:return[4,new Promise(function(i,a){(function t(i){return e(this,void 0,Promise,function(){var e,u,a;return r(this,function(r){switch(r.label){case 0:return-1!==c?[3,1]:(c+=1,[3,3]);case 1:return e=o[c],n.logger.error("retry times: ".concat(c,", delay: ").concat(e)),c+=1,[4,(0,n.sleep)(e)];case 2:r.sent(),r.label=3;case 3:return r.trys.push([3,5,,9]),[4,i()];case 4:return u=r.sent(),c=-1,[2,u];case 5:return a=r.sent(),n.logger.error(a),c<o.length?[4,t(i)]:[3,7];case 6:return[2,r.sent()];case 7:throw n.logger.error("retry failed"),a;case 8:return[3,9];case 9:return[2]}})})})(function(){return t.apply(void 0,u)}).then(function(e){i(e)}).catch(function(e){a(e)})})];case 1:return[2,i.sent()]}})})}}function i(e,r){var t;return null==r||""===r?(t=(0,n.loading)(e),(0,n.coverImg)(null,e)):(0,n.coverImg)(r,e),function(){null==t||t()}}function c(e,r){null==e||e.destroy(!0);var n=null==e?void 0:e.getVideoEl();if(null!=n){n.addEventListener("play",function e(){n.removeEventListener("play",e),r()})}}exports.retry=o,exports.backoffById=function(){var t=[[0,0],[.5,2],[2,4],[4,6]].map(function(e){return e.map(function(e){return 1e3*e})}),o=new Map;return function(i,c){return e(void 0,void 0,void 0,function(){var e,u,a,l,s,f;return r(this,function(r){switch(r.label){case 0:if(c=c>4?4:c,null==(e=o.get(i))&&(e={count:0,removeTimer:0},o.set(i,e)),clearTimeout(e.removeTimer),(u=e.count)>=c)throw o.delete(i),new Error("backoff failed");return e.removeTimer=window.setTimeout(function(){o.delete(i)},2*t[t.length-1][1]),e.count+=1,a=t[u],l=a[0],s=a[1],f=Math.round(Math.random()*(s-l)+l),n.logger.warn("backoff delay: sleepTime: ".concat(f,", count: ").concat(e.count)),[4,(0,n.sleep)(f)];case 1:return r.sent(),[2,e.count]}})})}}(),exports.loadingOrCoverImg=i,exports.blockStream=c,exports.maxRetryChecker=function(){var e=0,r=function(){e>0||(e=performance.now())};return function(n){return n.once(t.EventType.FirstFrame,function(){e=0}),n.once(t.EventType.Error,r),n.once(t.EventType.Ended,r),function(){return!(e>0&&performance.now()-e>6e4)}}}();
})()