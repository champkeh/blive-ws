/**
 * id: BuDO
 * path: @bilibili-live/live-web-track
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.createDirective=i,Object.defineProperty(exports,"Tracker",{enumerable:!0,get:function(){return e.Tracker}}),Object.defineProperty(exports,"BizCommonPerf",{enumerable:!0,get:function(){return t.BizCommonPerf}});var e=require("./core"),r=require("./directives/directives"),t=require("./perf");function i(t){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=new e.Tracker(t,i);return(0,r.genDirectives)(n)}
})()