/**
 * id: jM0N
 * path: requestidlecallback-polyfill
 */

function(require,module,exports) {
window.requestIdleCallback=window.requestIdleCallback||function(e){var n=Date.now();return setTimeout(function(){e({didTimeout:!1,timeRemaining:function(){return Math.max(0,50-(Date.now()-n))}})},1)},window.cancelIdleCallback=window.cancelIdleCallback||function(e){clearTimeout(e)};
}