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

function __generator(e, t) {
    let n, o, r
    let s = {
        label: 0,
        sent: function () {
            if (1 & r[0]) throw r[1];
            return r[1]
        },
        trys: [],
        ops: [],
    };

    function a(i) {
        return function (a) {
            return function (i) {
                if (n) throw new TypeError("Generator is already executing.");
                for (; s;)
                    try {
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
                        i = [6, a]
                        o = 0
                    } finally {
                        n = r = 0
                    }
                if (5 & i[0]) throw i[1];
                return {
                    value: i[0] ? i[1] : undefined,
                    done: true,
                }
            }([i, a])
        }
    }

    return {
        next: a(0),
        throw: a(1),
        return: a(2),
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
