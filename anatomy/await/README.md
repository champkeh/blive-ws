# await 反编译

在分析代码的时候会遇到大量的`__awaiter`、`__generator`等辅助函数，比如下面这样的代码：

```js
function getDanmuInfo(roomId) {
    return __awaiter(this, undefined, Promise, function () {
        return __generator(this, function (t) {
            switch (t.label) {
                case 0:
                    return [4, webPlayerCommon.ajax("/xlive/web-room/v1/index/getDanmuInfo?id=" + roomId + "&type=0")];
                case 1:
                    return [2, t.sent()]
            }
        })
    })
}
```

可以看到，内部采用`switch/case`处理大量分支逻辑，至于这些分支之间的关系以及源代码是什么样的，很难看出逻辑来，猜测可能是对`async/await`语法的降级处理。

这些辅助函数的实现如下：
```js
const __awaiter = function (thisArg, args, Promise, fn) {
    return new Promise((resolve, reject) => {
        function onFulfilled(value) {
            try {
                l(fn.next(value))
            } catch (err) {
                reject(err)
            }
        }

        function onRejected(reason) {
            try {
                l(fn.throw(reason))
            } catch (err) {
                reject(err)
            }
        }

        function l(iterator) {
            let t
            if (iterator.done) {
                resolve(iterator.value)
            } else {
                t = iterator.value
                (t instanceof Promise ? t : Promise.resolve(t)).then(onFulfilled, onRejected)
            }
        }
        fn = fn.apply(thisArg, args || [])
        l(fn.next())
    })
}
const __generator = function (e, t) {
    var n, o, r, i, s = {
        label: 0, sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1]
        }, trys: [], ops: []
    };
    return i = {
        next: a(0),
        throw: a(1),
        return: a(2)
    }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
        return this
    }), i;

    function a(i) {
        return function (a) {
            return function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s;) try {
                    if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                    switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                        case 0:
                        case 1:
                            r = i;
                            break;
                        case 4:
                            return s.label++, {value: i[1], done: !1};
                        case 5:
                            s.label++, o = i[1], i = [0];
                            continue;
                        case 7:
                            i = s.ops.pop(), s.trys.pop();
                            continue;
                        default:
                            if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                s = 0;
                                continue
                            }
                            if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                s.label = i[1];
                                break
                            }
                            if (6 === i[0] && s.label < r[1]) {
                                s.label = r[1], r = i;
                                break
                            }
                            if (r && s.label < r[2]) {
                                s.label = r[2], s.ops.push(i);
                                break
                            }
                            r[2] && s.ops.pop(), s.trys.pop();
                            continue
                    }
                    i = t.call(e, s)
                } catch (a) {
                    i = [6, a], o = 0
                } finally {
                    n = r = 0
                }
                if (5 & i[0]) throw i[1];
                return {value: i[0] ? i[1] : void 0, done: !0}
            }([i, a])
        }
    }
}
```
