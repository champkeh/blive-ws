/**
 * id: wPfs
 * path: ./formatter
 */

(function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.Formatter=void 0;var t=require("./utils"),e=function(t){var e,n;return["".concat(location.href),"".concat(null==t.spmId?"":t.spmId+".").concat(t.evtId),"",Date.now(),"","","".concat(screen.width,"x").concat(screen.height),"",JSON.stringify(Object.assign(Object.assign({},null!==(e=t.data)&&void 0!==e?e:{}),null!==(n=null==t?void 0:t.tags)&&void 0!==n?n:{}))]},n={"011778":e,"000527":e,"000358":function(e){var n,o;return["".concat(location.href),"".concat(null!==(n=document.referrer)&&void 0!==n?n:""),"".concat(null==e.spmId?"":e.spmId+".").concat(e.evtId),Date.now(),null!==(o=(0,t.getCookie)("fts"))&&void 0!==o?o:"","".concat(screen.width,"x").concat(screen.height),(0,t.isMobile)()?2:1,null==e.data?"":JSON.stringify(e.data),"",0]}};exports.Formatter=n;
})()