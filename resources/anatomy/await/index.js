function __awaiter(thisArg, args, Promise, fn) {
    return new Promise((resolve, reject) => {
        function onFulfilled(value) {
            try {
                c(fn.next(value))
            } catch (err) {
                reject(err)
            }
        }

        function onRejected(reason) {
            try {
                c(fn.throw(reason))
            } catch (err) {
                reject(err)
            }
        }

        function c(e) {
            let t
            if (e.done) {
                resolve(e.value)
            } else {
                t = e.value
                (t instanceof Promise ? t : Promise.resolve(t)).then(onFulfilled, onRejected)
            }
        }

        fn = fn.apply(thisArg, args || [])
        c(fn.next())
    })
}

function __generator(thisArg, fn) {
    let executing, o, r
    let state = {
        label: 0,
        sent: function () {
            if (1 & r[0]) {
                throw r[1]
            }
            return r[1]
        },
        trys: [],
        ops: [],
    }

    function createFn(flag) {
        return function (yieldValue) {
            if (executing) {
                throw new TypeError("Generator is already executing.")
            }

            for (; state;) {
                try {
                    executing = true
                    if (o && (r = 2 & flag ? o.return : flag ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, yieldValue)).done) return r;

                    o = 0
                    if (r) {
                        [flag, yieldValue] = [2 & flag, r.value]
                    }
                    switch (flag) {
                        case 0:
                        case 1:
                            r = [flag, yieldValue]
                            break
                        case 4:
                            state.label++
                            return {value: yieldValue, done: false}
                        case 5:
                            state.label++
                            o = yieldValue
                            ;[flag, yieldValue] = [0]
                            continue
                        case 7:
                            [flag, yieldValue] = state.ops.pop()
                            state.trys.pop()
                            continue
                        default:
                            if (!(r = (r = state.trys).length > 0 && r[r.length - 1]) && (flag === 6 || flag === 2)) {
                                state = 0
                                // 退出 for 循环
                                continue
                            }
                            if (3 === flag && (!r || yieldValue > r[0] && yieldValue < r[3])) {
                                state.label = yieldValue
                                break
                            }
                            if (6 === flag && state.label < r[1]) {
                                state.label = r[1]
                                r = [flag, yieldValue]
                                break
                            }
                            if (r && state.label < r[2]) {
                                state.label = r[2]
                                state.ops.push([flag, yieldValue])
                                break
                            }
                            r[2] && state.ops.pop()
                            state.trys.pop()
                            continue
                    }

                    [flag, yieldValue] = fn.call(thisArg, state)
                } catch (error) {
                    [flag, yieldValue] = [6, error]
                    o = 0
                } finally {
                    r = 0
                    executing = false
                }
            }

            if (5 & flag) {
                throw yieldValue
            }
            return {
                value: flag ? yieldValue : undefined,
                done: true,
            }
        }
    }

    return {
        next: createFn(0),
        throw: createFn(1),
        return: createFn(2),
        [Symbol.iterator]: function () {
            return this
        }
    }
}

function getDanmuInfo(roomId) {
    return __awaiter(this, undefined, Promise, function () {
        return __generator(this, function (t) {
            switch (t.label) {
                case 0:
                    return [4, fetch(`/xlive/web-room/v1/index/getDanmuInfo?id=${roomId}&type=0`)]
                case 1:
                    return [2, t.sent()]
            }
        })
    })
}
