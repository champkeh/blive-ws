/**
 * @bilibili/bili-mirror
 *  version:1.4.16. Powered by main-frotend
 *  bilibili-前端上报、性能、错误监控sdk,
 *  author:yuguangchao
 */

!function (global, factory) {
    "object" === typeof exports && "undefined" !== typeof module
        ? factory(exports)
        : "function" === typeof define && define.amd
            ? define(["exports"], factory)
            : factory((global = "undefined" !== typeof globalThis ? globalThis : global || self).biliMirror = {})
}(this, (function factory(exports) {
    "use strict";
    let n = function () {
        return n = Object.assign || function (e) {
            for (var n, t = 1, r = arguments.length; t < r; t++) for (var i in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, i) && (e[i] = n[i]);
            return e
        }, n.apply(this, arguments)
    };

    function t(e, n, t, r) {
        return new (t || (t = Promise))((function (i, o) {
            function a(e) {
                try {
                    u(r.next(e))
                } catch (e) {
                    o(e)
                }
            }

            function c(e) {
                try {
                    u(r.throw(e))
                } catch (e) {
                    o(e)
                }
            }

            function u(e) {
                var n;
                e.done ? i(e.value) : (n = e.value, n instanceof t ? n : new t((function (e) {
                    e(n)
                }))).then(a, c)
            }

            u((r = r.apply(e, n || [])).next())
        }))
    }

    function r(e, n) {
        var t, r, i, o, a = {
            label: 0, sent: function () {
                if (1 & i[0]) throw i[1];
                return i[1]
            }, trys: [], ops: []
        };
        return o = {
            next: c(0),
            throw: c(1),
            return: c(2)
        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
            return this
        }), o;

        function c(o) {
            return function (c) {
                return function (o) {
                    if (t) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (t = 1, r && (i = 2 & o[0] ? r.return : o[0] ? r.throw || ((i = r.return) && i.call(r), 0) : r.next) && !(i = i.call(r, o[1])).done) return i;
                        switch (r = 0, i && (o = [2 & o[0], i.value]), o[0]) {
                            case 0:
                            case 1:
                                i = o;
                                break;
                            case 4:
                                return a.label++, {value: o[1], done: !1};
                            case 5:
                                a.label++, r = o[1], o = [0];
                                continue;
                            case 7:
                                o = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = a.trys, (i = i.length > 0 && i[i.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === o[0] && (!i || o[1] > i[0] && o[1] < i[3])) {
                                    a.label = o[1];
                                    break
                                }
                                if (6 === o[0] && a.label < i[1]) {
                                    a.label = i[1], i = o;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(o);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        o = n.call(e, a)
                    } catch (e) {
                        o = [6, e], r = 0
                    } finally {
                        t = i = 0
                    }
                    if (5 & o[0]) throw o[1];
                    return {value: o[0] ? o[1] : void 0, done: !0}
                }([o, c])
            }
        }
    }

    let _inBrowser = false

    function inBrowser() {
        if (_inBrowser === false) {
            _inBrowser = typeof window !== "undefined"
        }
        return _inBrowser
    }

    let a
    let c = function (e) {
        var n = e.method.toLocaleUpperCase(), t = "POST" === n ? JSON.stringify(e.data) : "",
            r = "GET" === n ? function (e) {
                if (!Object.keys(e).length) return "";
                var n = "";
                for (var t in e) n += "".concat(t, "=").concat(e[t], "&");
                return n.substring(0, n.length - 1)
            }(e.data) : "",
            i = r ? -1 !== e.url.indexOf("?") ? "".concat(e.url, "&").concat(r) : "".concat(e.url, "?").concat(r) : e.url;
        return new Promise((function (r, o) {
            var a = new XMLHttpRequest;
            if (a.onreadystatechange = function () {
                if (a.readyState === XMLHttpRequest.DONE) if (200 === a.status) {
                    var e = null;
                    try {
                        e = JSON.parse(a.responseText)
                    } catch (n) {
                        e = a.responseText
                    }
                    r(e)
                } else o(a.responseText)
            }, a.withCredentials = !0, a.open(n, i, !0), "POST" === n && e.headers && "object" == typeof e.headers) for (var c in e.headers) a.setRequestHeader(c, e.headers[c]);
            a.send(t)
        }))
    }
    let u = function (e) {
        return t(void 0, void 0, void 0, (function () {
            var t, i;
            return r(this, (function (r) {
                return t = {
                    eventId: e.eventId,
                    ctime: Date.now(),
                    extendedFields: {referer: document.referrer, ua: navigator.userAgent}
                }, i = [n(n({}, t), {
                    mid: s("DedeUserID"),
                    buvid: s("buvid3") ? s("buvid3") : s("buvid4"),
                    extendedFields: n(n(n({}, t.extendedFields), {apmType: e.type}), e.msg)
                })], [2, new Promise((function (e, n) {
                    c({
                        url: "https://api.bilibili.com/x/web-frontend/data/collector",
                        method: "POST",
                        data: i,
                        headers: {"Content-Type": "text/plain;charset=UTF-8"}
                    }).then((function (n) {
                        return e(n)
                    })).catch((function (e) {
                        return n(e)
                    }))
                }))]
            }))
        }))
    }
    let s = function (e) {
        if (inBrowser()) {
            for (var n = {}, t = decodeURIComponent(document.cookie).split(";"), r = !0 === e, i = 0; i < t.length; i++) {
                for (var a = t[i]; " " === a.charAt(0);) a = a.substring(1);
                var c = a.split("="), u = c[0], s = c[1];
                if (n[u] = s, e === u) return n[e]
            }
            return r ? n : ""
        }
        return ""
    }
    // let window = function () {
    //     if (inBrowser()) {
    //         return window
    //     }
    // }()

    function getBiliMirror() {
        if (inBrowser()) {
            window.__biliMirror__ = window.__biliMirror__ || {}
            return window.__biliMirror__
        }
    }

    let d = inBrowser() && (null === (a = document.getElementsByTagName("meta").spm_prefix) || void 0 === a ? void 0 : a.content) || "0.0";

    function addEventListener(target, type, handler, options = false) {
        target.addEventListener(type, handler, options)
    }

    function v() {
        return Date.now()
    }

    let m = Object.prototype.toString;

    function h(e) {
        return function (n) {
            return m.call(n) === "[object ".concat(e, "]")
        }
    }

    let g = {
        isNumber: h("Number"),
        isString: h("String"),
        isBoolean: h("Boolean"),
        isNull: h("Null"),
        isUndefined: h("Undefined"),
        isSymbol: h("Symbol"),
        isFunction: h("Function"),
        isObject: h("Object"),
        isArray: h("Array"),
        isProcess: h("process"),
        isWindow: h("Window")
    };
    let b = "1.4.16"
    let y = "@bilibili/bili-mirror"
    let w = b
    let O = getBiliMirror()
    let E = function () {
        function e() {
            this.origin = "bili", this.module = "common", this.config = {}
        }

        return e.prototype.getConfig = function () {
            var e = this;
            fetch("//s1.hdslb.com/bfs/seed/jinkela/short/b-mirror/mirror-config.json").then((function (e) {
                return e.json()
            })).then((function (n) {
                e.config.white = n.white
            })).catch((function (e) {
                console.warn("bili-mirror配置文件获取失败")
            }))
        }, e.prototype.bindOptions = function (e) {
            var n = this;
            void 0 === e && (e = {}), O.mirrorVersion = w;
            var t = e.origin, r = e.module, i = e.whiteList, o = e.spmId, a = e.pbOptions, c = e.pbOtherNameIns;
            (null == t ? void 0 : t.length) && (this.origin = t), (null == r ? void 0 : r.length) && (this.module = r), (null == o ? void 0 : o.length) && (this.spmId = o), a && (this.pbOptions = a), c && (this.pbOtherNameIns = c), i ? g.isString(i) ? fetch(i, {method: "GET"}).then((function (e) {
                return e.json()
            })).then((function (e) {
                n.config.white = e
            })).catch((function (e) {
                console.warn("配置接口请求错误:", e)
            })) : this.config.white = i : this.getConfig()
        }, e
    }();

    let N = inBrowser() ? O.options || (O.options = new E) : null;

    function S(e) {
        void 0 === e && (e = {}), inBrowser() && N.bindOptions(e)
    }

    let T, R, P, I, _ = -1
    let j = function (e) {
        addEventListener("pageshow", (function (n) {
            n.persisted && (_ = n.timeStamp, e(n))
        }), !0)
    }
    let k = function () {
        return window.performance && performance.getEntriesByType && performance.getEntriesByType("navigation")[0]
    }
    let x = function () {
        var e = k();
        return e && e.activationStart || 0
    }
    let C = function (e, n) {
        var t = k(), r = "navigate";
        return _ >= 0 ? r = "back-forward-cache" : t && (r = document.prerendering || x() > 0 ? "prerender" : document.wasDiscarded ? "restore" : t.type.replace(/_/g, "-")), {
            name: e,
            value: void 0 === n ? -1 : n,
            rating: "good",
            delta: 0,
            entries: [],
            id: "v3-".concat(Date.now(), "-").concat(Math.floor(8999999999999 * Math.random()) + 1e12),
            navigationType: r
        }
    }
    let L = function (e, n, t) {
        try {
            if (PerformanceObserver.supportedEntryTypes.includes(e)) {
                var r = new PerformanceObserver((function (e) {
                    Promise.resolve().then((function () {
                        n(e.getEntries())
                    }))
                }));
                return r.observe(Object.assign({type: e, buffered: !0}, t || {})), r
            }
        } catch (e) {
        }
    }
    let A = function (e, n, t, r) {
        var i, o;
        return function (a) {
            n.value >= 0 && (a || r) && ((o = n.value - (i || 0)) || void 0 === i) && (i = n.value, n.delta = o, n.rating = function (e, n) {
                return e > n[1] ? "poor" : e > n[0] ? "needs-improvement" : "good"
            }(n.value, t), e(n))
        }
    }
    let F = function (e) {
        requestAnimationFrame((function () {
            return requestAnimationFrame((function () {
                return e()
            }))
        }))
    }
    let D = function (e) {
        var n = function (n) {
            "pagehide" !== n.type && "hidden" !== document.visibilityState || e(n)
        };
        addEventListener("visibilitychange", n, !0), addEventListener("pagehide", n, !0)
    }
    let M = function (e) {
        var n = !1;
        return function (t) {
            n || (e(t), n = !0)
        }
    }
    let B = -1
    let H = function () {
        return "hidden" !== document.visibilityState || document.prerendering ? 1 / 0 : 0
    }
    let U = function (e) {
        "hidden" === document.visibilityState && B > -1 && (B = "visibilitychange" === e.type ? e.timeStamp : 0, $())
    }
    let J = function () {
        addEventListener("visibilitychange", U, !0), addEventListener("prerenderingchange", U, !0)
    }
    let $ = function () {
        removeEventListener("visibilitychange", U, !0), removeEventListener("prerenderingchange", U, !0)
    }
    let W = function () {
        return B < 0 && (B = H(), J(), j((function () {
            setTimeout((function () {
                B = H(), J()
            }), 0)
        }))), {
            get firstHiddenTime() {
                return B
            }
        }
    }
    let V = function (e) {
        document.prerendering ? addEventListener("prerenderingchange", (function () {
            return e()
        }), !0) : e()
    }
    let q = [1800, 3e3]
    let K = function (e, n) {
        n = n || {}, V((function () {
            var t, r = W(), i = C("FCP"), o = L("paint", (function (e) {
                e.forEach((function (e) {
                    "first-contentful-paint" === e.name && (o.disconnect(), e.startTime < r.firstHiddenTime && (i.value = Math.max(e.startTime - x(), 0), i.entries.push(e), t(!0)))
                }))
            }));
            o && (t = A(e, i, q, n.reportAllChanges), j((function (r) {
                i = C("FCP"), t = A(e, i, q, n.reportAllChanges), F((function () {
                    i.value = performance.now() - r.timeStamp, t(!0)
                }))
            })))
        }))
    }
    let G = [.1, .25]
    let X = {passive: !0, capture: !0}
    let z = new Date
    let Q = function (e, n) {
        T || (T = n, R = e, P = new Date, ee(removeEventListener), Y())
    }
    let Y = function () {
        if (R >= 0 && R < P - z) {
            var e = {
                entryType: "first-input",
                name: T.type,
                target: T.target,
                cancelable: T.cancelable,
                startTime: T.timeStamp,
                processingStart: T.timeStamp + R
            };
            I.forEach((function (n) {
                n(e)
            })), I = []
        }
    }
    let Z = function (e) {
        if (e.cancelable) {
            var n = (e.timeStamp > 1e12 ? new Date : performance.now()) - e.timeStamp;
            "pointerdown" == e.type ? function (e, n) {
                var t = function () {
                    Q(e, n), i()
                }, r = function () {
                    i()
                }, i = function () {
                    removeEventListener("pointerup", t, X), removeEventListener("pointercancel", r, X)
                };
                addEventListener("pointerup", t, X), addEventListener("pointercancel", r, X)
            }(n, e) : Q(n, e)
        }
    }
    let ee = function (e) {
        ["mousedown", "keydown", "touchstart", "pointerdown"].forEach((function (n) {
            return e(n, Z, X)
        }))
    }
    let ne = [100, 300]
    let te = [2500, 4e3]
    let re = {}
    let ie = [800, 1800]
    let oe = function e(n) {
        document.prerendering ? V((function () {
            return e(n)
        })) : "complete" !== document.readyState ? addEventListener("load", (function () {
            return e(n)
        }), !0) : setTimeout(n, 0)
    }
    let ae = function (e, n) {
        n = n || {};
        var t = C("TTFB"), r = A(e, t, ie, n.reportAllChanges);
        oe((function () {
            var i = k();
            if (i) {
                var o = i.responseStart;
                if (o <= 0 || o > performance.now()) return;
                t.value = Math.max(o - x(), 0), t.entries = [i], r(!0), j((function () {
                    t = C("TTFB", 0), (r = A(e, t, ie, n.reportAllChanges))(!0)
                }))
            }
        }))
    }
    let ce = function (e) {
        return !!inBrowser() && function () {
            try {
                return inBrowser() && PerformanceObserver ? PerformanceObserver.supportedEntryTypes || [] : null
            } catch (e) {
                console.error("bili-mirror: supportList 解析异常:", e)
            }
        }().includes(e)
    };

    function ue(e) {
        /Safari/.test(navigator.userAgent) && !/Chrome/.test(navigator.userAgent) ? (function (e) {
            if (ce("first-input")) {
                var n = new PerformanceObserver((function (t) {
                    for (var r = 0, i = t.getEntries(); r < i.length; r++) {
                        var o = i[r];
                        n.disconnect();
                        var a = o.processingStart - o.startTime;
                        e({
                            name: "FID",
                            value: a,
                            rating: a < 100 ? "good" : a > 100 && a < 300 ? "normal" : "poor"
                        })
                    }
                }));
                n.observe({type: "first-input", buffered: !0})
            }
        }((function (n) {
            e(n)
        })), function (e) {
            if (ce("paint")) {
                var n = new PerformanceObserver((function (t) {
                    for (var r = 0, i = t.getEntries(); r < i.length; r++) {
                        var o = i[r];
                        "first-contentful-paint" === o.name && (n.disconnect(), e({
                            name: "FCP",
                            value: o.startTime,
                            rating: o.startTime < 1600 ? "good" : o.startTime > 1600 && o.startTime < 3e3 ? "normal" : "poor"
                        }))
                    }
                }));
                n.observe({type: "paint", buffered: !0})
            }
        }((function (n) {
            e(n)
        })), function (e) {
            if (ce("largest-contentful-paint")) {
                var n = new PerformanceObserver((function (t) {
                    for (var r = 0, i = t.getEntries(); r < i.length; r++) {
                        var o = i[r];
                        n.disconnect(), e({
                            name: "LCP",
                            value: o.startTime,
                            rating: o.startTime < 1600 ? "good" : o.startTime > 1600 && o.startTime < 3e3 ? "normal" : "poor"
                        })
                    }
                }));
                n.observe({type: "largest-contentful-paint", buffered: !0})
            }
        }((function (n) {
            e(n)
        })), function (e) {
            window.addEventListener("load", (function () {
                var n = window.performance.timing, t = n.responseStart - n.navigationStart;
                e({name: "TTFB", value: t, rating: t < 200 ? "good" : t > 200 && t < 500 ? "normal" : "poor"})
            }))
        }((function (n) {
            e(n)
        }))) : (!function (e, n) {
            n = n || {}, V((function () {
                var t, r = W(), i = C("LCP"), o = function (e) {
                    var n = e[e.length - 1];
                    n && n.startTime < r.firstHiddenTime && (i.value = Math.max(n.startTime - x(), 0), i.entries = [n], t())
                }, a = L("largest-contentful-paint", o);
                if (a) {
                    t = A(e, i, te, n.reportAllChanges);
                    var c = M((function () {
                        re[i.id] || (o(a.takeRecords()), a.disconnect(), re[i.id] = !0, t(!0))
                    }));
                    ["keydown", "click"].forEach((function (e) {
                        addEventListener(e, c, !0)
                    })), D(c), j((function (r) {
                        i = C("LCP"), t = A(e, i, te, n.reportAllChanges), F((function () {
                            i.value = performance.now() - r.timeStamp, re[i.id] = !0, t(!0)
                        }))
                    }))
                }
            }))
        }((function (n) {
            e(n)
        })), function (e, n) {
            n = n || {}, V((function () {
                var t, r = W(), i = C("FID"), o = function (e) {
                    e.startTime < r.firstHiddenTime && (i.value = e.processingStart - e.startTime, i.entries.push(e), t(!0))
                }, a = function (e) {
                    e.forEach(o)
                }, c = L("first-input", a);
                t = A(e, i, ne, n.reportAllChanges), c && D(M((function () {
                    a(c.takeRecords()), c.disconnect()
                }))), c && j((function () {
                    var r;
                    i = C("FID"), t = A(e, i, ne, n.reportAllChanges), I = [], R = -1, T = null, ee(addEventListener), r = o, I.push(r), Y()
                }))
            }))
        }((function (n) {
            e(n)
        })), function (e, n) {
            n = n || {}, K(M((function () {
                var t, r = C("CLS", 0), i = 0, o = [], a = function (e) {
                    e.forEach((function (e) {
                        if (!e.hadRecentInput) {
                            var n = o[0], t = o[o.length - 1];
                            i && e.startTime - t.startTime < 1e3 && e.startTime - n.startTime < 5e3 ? (i += e.value, o.push(e)) : (i = e.value, o = [e])
                        }
                    })), i > r.value && (r.value = i, r.entries = o, t())
                }, c = L("layout-shift", a);
                c && (t = A(e, r, G, n.reportAllChanges), D((function () {
                    a(c.takeRecords()), t(!0)
                })), j((function () {
                    i = 0, r = C("CLS", 0), t = A(e, r, G, n.reportAllChanges), F((function () {
                        return t()
                    }))
                })), setTimeout(t, 0))
            })))
        }((function (n) {
            e(n)
        })), K((function (n) {
            e(n)
        })), ae((function (n) {
            e(n)
        })))
    }

    let se = null
    let le = null
    let fe = "BILI_MIRROR_REPORT_POOL"
    let de = function () {
        function e() {
            this.timeID = null, this.func = null
        }

        return e.prototype.repeat = function (e, n) {
            var t = this;
            null === this.func && (this.func = e), this.func === e && (this.timeID = setTimeout((function () {
                e(), t.repeat(e, n)
            }), n))
        }, e.prototype.clear = function () {
            clearTimeout(this.timeID)
        }, e
    }()
    let pe = function () {
        try {
            var e = JSON.parse(localStorage.getItem(fe) || "{}");
            if (!Object.keys(e).length) return;
            Object.entries(e).forEach((function (e) {
                var t = e[0], r = e[1];
                Object.entries(r).forEach((function (e) {
                    var r = e[0], i = e[1];
                    se.tech(t, n({api: r}, i))
                }))
            })), localStorage.setItem(fe, "{}")
        } catch (e) {
        }
    }
    let ve = function () {
        le || ((le = new de).repeat(pe, 3e5), addEventListener(window, "beforeunload", (function () {
            pe(), me()
        })))
    }
    let me = function () {
        se && se.flush && se.flush(), le.clear(), le = null
    }
    let he = "//s1.hdslb.com/bfs/seed/jinkela/short/reporter-pb/index.js"
    let ge = []
    let be = false
    let ye = ""
    let we = null;

    function Oe() {
        if (ge.length && !be) {
            be = !0;
            var e = ge.shift(), n = e[0], t = e[1], r = e[2], i = e[3];
            if ("middleWare" === t) {
                if (we) return Re(r, i), void Oe();
                n(!0).then((function (e) {
                    var n;
                    be = !1, se !== (n = we = e) && (se = n), Pe(r, i), Oe()
                }))
            } else n().then((function () {
                be = !1, t && r && t(r, i || void 0), Oe()
            }))
        }
    }

    let Ee = function (e) {
        (ye ? window[ye] : window.__biliMirrorPbInstance__)[(e = je(e)).type](e.otherSpmId ? "".concat(e.otherSpmId, ".").concat(e.eventId) : N.spmId ? "".concat(N.spmId, ".").concat(e.eventId) : "".concat(d, ".").concat(e.eventId), e.msg)
    }
    let Ne = function (e, n) {
        n && Object.keys(n).length > 0 && Ie(n), e = je(e);
        var t = "".concat(e.otherSpmId ? e.otherSpmId : N.spmId ? N.spmId : d, ".").concat(e.eventId);
        (ye ? window[ye] : window.__biliMirrorPbInstance__).tech(t, Object.assign(e.msg || {}, {type: e.type || "custom"}, {mirrorVersion: b}))
    }
    let Se = function (e) {
        ge.push([_e, Ee, e]), Oe()
    }
    let Te = function (e, n) {
        ge.push([_e, Ne, e, n]), Oe()
    }
    let Re = function (e, n) {
        we ? Pe(e, n) : (ge.push([_e, "middleWare", e, n]), Oe())
    }
    let Pe = function (e, t) {
        t && void 0 !== (null == t ? void 0 : t.isBatch) || (t = Object.assign(t || {}, {isBatch: !1}));
        var r = ((null == t ? void 0 : t.spmId) || d) + "." + ((null == t ? void 0 : t.origin) || N.origin) + "." + ((null == t ? void 0 : t.module) || N.module);
        (null == t ? void 0 : t.isBatch) ? function (e, t, r) {
            var i;
            if ("custom" === r.type) {
                var o = (null === (i = null == t ? void 0 : t.api) || void 0 === i ? void 0 : i.split("?")[0]) || "";
                try {
                    var a = JSON.parse(localStorage.getItem(fe) || "{}");
                    a[e] || (a[e] = {}), a[e][o] ? a[e][o].count++ : a[e][o] = n({count: 1}, r), localStorage.setItem(fe, JSON.stringify(a))
                } catch (e) {
                }
                ve()
            }
        }(r + (t.eventId || ".DATA.successReport"), e.msg, {
            type: e.type || "custom",
            mirrorVersion: b
        }) : we.tech(r + (t.eventId || ".ERROR.errorReport"), Object.assign(e.msg || {}, {type: e.type || "custom"}, {mirrorVersion: b}))
    }
    let Ie = function (e) {
        void 0 === e && (e = {feature: {tech: !0}});
        window.__biliMirrorPbInstance__.options = Object.assign({feature: {tech: !0}}, e)
    }
    let _e = function (e) {
        void 0 === e && (e = !1);
        try {
            return new Promise((function (t, r) {
                if (inBrowser() || r("not support in server"), e) {
                    (c = document.createElement("script")).src = he, document.getElementsByTagName("body")[0].appendChild(c);
                    var i = {feature: {tech: !0}, autoPv: !1};
                    c.onload = function () {
                        var e = new window.ReporterPb(n({}, i));
                        t(e)
                    }
                } else {
                    var a = N.pbOtherNameIns ? N.pbOtherNameIns : "reporterPb";
                    if (g.isObject(window[a]) && Object.keys(window[a]).length) return ye = a, console.warn("Is using".concat(a, " to report,Please confirm open [tech] config")), void t();
                    if (window.__biliMirrorPbInstance__) t(); else {
                        var c;
                        (c = document.createElement("script")).src = he, document.getElementsByTagName("body")[0].appendChild(c);
                        var u = {feature: {tech: !0}};
                        c.onload = function () {
                            window.__biliMirrorPbInstance__ = new window.ReporterPb(n(n({}, u), N.pbOptions)), t()
                        }
                    }
                }
            }))
        } catch (e) {
            console.error("bili-mirror:load pb-report-Error load failed:", e)
        }
    };

    function je(e) {
        return e.event && !e.eventId && (e.eventId = e.event), e.eventId.split(".").length <= 1 && (e.eventId = "".concat(N.origin, ".").concat(N.module, ".").concat(e.eventId)), "appear" === e.type && (e.type = "exposure"), e
    }

    function ke(e, n) {
        return e(n = {exports: {}}, n.exports), n.exports
    }

    let xe
    let Ce
    let Le = ke((function (e, n) {
        e.exports = function () {
            function e(e) {
                return !isNaN(parseFloat(e)) && isFinite(e)
            }

            function n(e) {
                return e.charAt(0).toUpperCase() + e.substring(1)
            }

            function t(e) {
                return function () {
                    return this[e]
                }
            }

            var r = ["isConstructor", "isEval", "isNative", "isToplevel"], i = ["columnNumber", "lineNumber"],
                o = ["fileName", "functionName", "source"], a = ["args"], c = ["evalOrigin"],
                u = r.concat(i, o, a, c);

            function s(e) {
                if (e) for (var t = 0; t < u.length; t++) void 0 !== e[u[t]] && this["set" + n(u[t])](e[u[t]])
            }

            s.prototype = {
                getArgs: function () {
                    return this.args
                }, setArgs: function (e) {
                    if ("[object Array]" !== Object.prototype.toString.call(e)) throw new TypeError("Args must be an Array");
                    this.args = e
                }, getEvalOrigin: function () {
                    return this.evalOrigin
                }, setEvalOrigin: function (e) {
                    if (e instanceof s) this.evalOrigin = e; else {
                        if (!(e instanceof Object)) throw new TypeError("Eval Origin must be an Object or StackFrame");
                        this.evalOrigin = new s(e)
                    }
                }, toString: function () {
                    var e = this.getFileName() || "", n = this.getLineNumber() || "",
                        t = this.getColumnNumber() || "",
                        r = this.getFunctionName() || "";
                    return this.getIsEval() ? e ? "[eval] (" + e + ":" + n + ":" + t + ")" : "[eval]:" + n + ":" + t : r ? r + " (" + e + ":" + n + ":" + t + ")" : e + ":" + n + ":" + t
                }
            }, s.fromString = function (e) {
                var n = e.indexOf("("), t = e.lastIndexOf(")"), r = e.substring(0, n),
                    i = e.substring(n + 1, t).split(","), o = e.substring(t + 1);
                if (0 === o.indexOf("@")) var a = /@(.+?)(?::(\d+))?(?::(\d+))?$/.exec(o, ""), c = a[1], u = a[2],
                    l = a[3];
                return new s({
                    functionName: r,
                    args: i || void 0,
                    fileName: c,
                    lineNumber: u || void 0,
                    columnNumber: l || void 0
                })
            };
            for (var l = 0; l < r.length; l++) s.prototype["get" + n(r[l])] = t(r[l]), s.prototype["set" + n(r[l])] = function (e) {
                return function (n) {
                    this[e] = Boolean(n)
                }
            }(r[l]);
            for (var f = 0; f < i.length; f++) s.prototype["get" + n(i[f])] = t(i[f]), s.prototype["set" + n(i[f])] = function (n) {
                return function (t) {
                    if (!e(t)) throw new TypeError(n + " must be a Number");
                    this[n] = Number(t)
                }
            }(i[f]);
            for (var d = 0; d < o.length; d++) s.prototype["get" + n(o[d])] = t(o[d]), s.prototype["set" + n(o[d])] = function (e) {
                return function (n) {
                    this[e] = String(n)
                }
            }(o[d]);
            return s
        }()
    }))
    let Ae = ke((function (e, n) {
        var t, r, i, o;
        e.exports = (t = Le, r = /(^|@)\S+:\d+/, i = /^\s*at .*(\S+:\d+|\(native\))/m, o = /^(eval@)?(\[native code])?$/, {
            parse: function (e) {
                if (void 0 !== e.stacktrace || void 0 !== e["opera#sourceloc"]) return this.parseOpera(e);
                if (e.stack && e.stack.match(i)) return this.parseV8OrIE(e);
                if (e.stack) return this.parseFFOrSafari(e);
                throw new Error("Cannot parse given Error object")
            }, extractLocation: function (e) {
                if (-1 === e.indexOf(":")) return [e];
                var n = /(.+?)(?::(\d+))?(?::(\d+))?$/.exec(e.replace(/[()]/g, ""));
                return [n[1], n[2] || void 0, n[3] || void 0]
            }, parseV8OrIE: function (e) {
                return e.stack.split("\n").filter((function (e) {
                    return !!e.match(i)
                }), this).map((function (e) {
                    e.indexOf("(eval ") > -1 && (e = e.replace(/eval code/g, "eval").replace(/(\(eval at [^()]*)|(,.*$)/g, ""));
                    var n = e.replace(/^\s+/, "").replace(/\(eval code/g, "(").replace(/^.*?\s+/, ""),
                        r = n.match(/ (\(.+\)$)/);
                    n = r ? n.replace(r[0], "") : n;
                    var i = this.extractLocation(r ? r[1] : n), o = r && n || void 0,
                        a = ["eval", "<anonymous>"].indexOf(i[0]) > -1 ? void 0 : i[0];
                    return new t({functionName: o, fileName: a, lineNumber: i[1], columnNumber: i[2], source: e})
                }), this)
            }, parseFFOrSafari: function (e) {
                return e.stack.split("\n").filter((function (e) {
                    return !e.match(o)
                }), this).map((function (e) {
                    if (e.indexOf(" > eval") > -1 && (e = e.replace(/ line (\d+)(?: > eval line \d+)* > eval:\d+:\d+/g, ":$1")), -1 === e.indexOf("@") && -1 === e.indexOf(":")) return new t({functionName: e});
                    var n = /((.*".+"[^@]*)?[^@]*)(?:@)/, r = e.match(n), i = r && r[1] ? r[1] : void 0,
                        o = this.extractLocation(e.replace(n, ""));
                    return new t({functionName: i, fileName: o[0], lineNumber: o[1], columnNumber: o[2], source: e})
                }), this)
            }, parseOpera: function (e) {
                return !e.stacktrace || e.message.indexOf("\n") > -1 && e.message.split("\n").length > e.stacktrace.split("\n").length ? this.parseOpera9(e) : e.stack ? this.parseOpera11(e) : this.parseOpera10(e)
            }, parseOpera9: function (e) {
                for (var n = /Line (\d+).*script (?:in )?(\S+)/i, r = e.message.split("\n"), i = [], o = 2, a = r.length; o < a; o += 2) {
                    var c = n.exec(r[o]);
                    c && i.push(new t({fileName: c[2], lineNumber: c[1], source: r[o]}))
                }
                return i
            }, parseOpera10: function (e) {
                for (var n = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i, r = e.stacktrace.split("\n"), i = [], o = 0, a = r.length; o < a; o += 2) {
                    var c = n.exec(r[o]);
                    c && i.push(new t({
                        functionName: c[3] || void 0,
                        fileName: c[2],
                        lineNumber: c[1],
                        source: r[o]
                    }))
                }
                return i
            }, parseOpera11: function (e) {
                return e.stack.split("\n").filter((function (e) {
                    return !!e.match(r) && !e.match(/^Error created at/)
                }), this).map((function (e) {
                    var n, r = e.split("@"), i = this.extractLocation(r.pop()), o = r.shift() || "",
                        a = o.replace(/<anonymous function(: (\w+))?>/, "$2").replace(/\([^)]*\)/g, "") || void 0;
                    o.match(/\(([^)]*)\)/) && (n = o.replace(/^[^(]+\(([^)]*)\)$/, "$1"));
                    var c = void 0 === n || "[arguments not available]" === n ? void 0 : n.split(",");
                    return new t({
                        functionName: a,
                        args: c,
                        fileName: i[0],
                        lineNumber: i[1],
                        columnNumber: i[2],
                        source: e
                    })
                }), this)
            }
        })
    }))
    let Fe = function (e) {
        var t = e.target;
        if (null == t ? void 0 : t.localName) {
            var r = function (e) {
                return {time: v(), message: e.src || e.href || "", name: e.localName}
            }(t);
            return n(n({}, r), {type: "resourceError"})
        }
        return null
    }

    !function (e) {
        e.ERROR = "error", e.UNHANDLEDREJECTION = "unhandledrejection", e.RESOURCE = "resource", e.PERFORMANCE = "performance", e.WHITESCREEN = "whiteScreen"
    }(xe || (xe = {}))

    !function (e) {
        e.BEFORE = "mirrorHandlerBefore", e.AFTER = "mirrorHandlerAfter"
    }(Ce || (Ce = {}));


    let Me = function (e, n) {
        void 0 === n && (n = "before");
        var i = [], o = !1, a = 0;
        return {
            start: function () {
                var c = this;
                return new Promise((function (u) {
                    return t(c, void 0, void 0, (function () {
                        var t, c, s, l, f;
                        return r(this, (function (r) {
                            switch (r.label) {
                                case 0:
                                    if (o) return [2];
                                    o = !0, r.label = 1;
                                case 1:
                                    return a < e.length ? (t = e[a], "before" !== n ? [3, 3] : (s = (c = i).push, [4, null == t ? void 0 : t.mirrorHandlerBefore()])) : [3, 6];
                                case 2:
                                    return s.apply(c, [r.sent()]), [3, 5];
                                case 3:
                                    return f = (l = i).push, [4, null == t ? void 0 : t.mirrorHandlerAfter()];
                                case 4:
                                    f.apply(l, [r.sent()]), r.label = 5;
                                case 5:
                                    return a++, o ? [3, 1] : [2];
                                case 6:
                                    return o = !1, u(i), [2]
                            }
                        }))
                    }))
                }))
            }
        }
    }
    let Be = []
    let He = function (e, n) {
        void 0 === n && (n = ["chrome-extension"]);
        var t = (null == e ? void 0 : e.message) || (null == e ? void 0 : e.fileName) || "";
        if (!t) return !0;
        if ((t = t.split("?")[0]).includes(location.hostname)) return !0;
        if (!n.length) return !1;
        for (var r = !1, i = 0; i < n.length; i++) if (t && -1 !== t.indexOf(n[i]) || t && -1 !== n[i].indexOf(t)) {
            r = !0;
            break
        }
        return r
    }
    let Ue = function (e) {
        var n,
            t = (n = (null == e ? void 0 : e.message) || (null == e ? void 0 : e.fileName), window.btoa(decodeURIComponent(encodeURIComponent(n))));
        return Be.some((function (e) {
            return e === t
        })) ? (console.warn("Duplicate error, not reported,".concat(null == e ? void 0 : e.message)), !1) : (Be.push(t), !0)
    }
    let Je = function (e, n) {
        return g.isFunction(e) && e(n)
    }
    let $e = {
        handleError: function (e, n) {
            var i, o, a, c, u, s;
            return void 0 === n && (n = {error: [], resource: []}), t(this, void 0, void 0, (function () {
                var t, l, f, d, p, m, h, g;
                return r(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            t = e.target, r.label = 1;
                        case 1:
                            return r.trys.push([1, 10, , 11]), !t || e.target && !e.target.localName ? n.error.length ? [4, Me(n.error).start()] : [3, 3] : [3, 5];
                        case 2:
                            r.sent(), r.label = 3;
                        case 3:
                            return l = function (e) {
                                var n, t = e.target;
                                if (!t || e.target && !(null === (n = e.target) || void 0 === n ? void 0 : n.localName)) {
                                    var r = Ae.parse(t ? e.error : e)[0], i = r.fileName, o = r.columnNumber,
                                        a = r.lineNumber, c = r.source,
                                        u = c ? JSON.stringify(c.split(" ").join("").split("./")) : "";
                                    return {
                                        type: "error",
                                        time: v(),
                                        message: e.message,
                                        fileName: i,
                                        line: a,
                                        column: o,
                                        stack: u
                                    }
                                }
                                return null
                            }(e), Je(null === (i = null == N ? void 0 : N.config) || void 0 === i ? void 0 : i.white, e) ? [2] : (f = null === (a = null === (o = null == N ? void 0 : N.config) || void 0 === o ? void 0 : o.white) || void 0 === a ? void 0 : a.error, d = He(l, f), !l || d ? [3, 5] : Ue(l) ? (Te({
                                type: "error",
                                eventId: "".concat(N.origin, ".").concat(N.module, ".ERROR.jsError"),
                                msg: l
                            }, N.pbOptions || {}), n.error.length ? [4, Me(n.error, "after").start()] : [3, 5]) : [2]);
                        case 4:
                            r.sent(), r.label = 5;
                        case 5:
                            return (null == t ? void 0 : t.localName) ? n.resource.length ? [4, Me(n.resource).start()] : [3, 7] : [3, 9];
                        case 6:
                            r.sent(), r.label = 7;
                        case 7:
                            return p = Fe(e), Je(null === (c = null == N ? void 0 : N.config) || void 0 === c ? void 0 : c.white, e) ? [2] : (m = null === (s = null === (u = null == N ? void 0 : N.config) || void 0 === u ? void 0 : u.white) || void 0 === s ? void 0 : s.resource, h = He(p, m), !p || h ? [3, 9] : Ue(p) ? (Te({
                                type: "error",
                                eventId: "".concat(N.origin, ".").concat(N.module, ".ERROR.resourceError"),
                                msg: Object.assign({error_type: "AssetsError"}, p)
                            }, N.pbOptions || {}), n.resource ? [4, Me(n.resource, "after").start()] : [3, 9]) : [2]);
                        case 8:
                            r.sent(), r.label = 9;
                        case 9:
                            return [3, 11];
                        case 10:
                            return g = r.sent(), console.warn("bili-mirror: handleError-Error parsing failed:", g), [3, 11];
                        case 11:
                            return [2]
                    }
                }))
            }))
        },
        handleUnhandleRejection: function (e, n) {
            var i, o, a;
            return void 0 === n && (n = []), t(this, void 0, void 0, (function () {
                var t, c, u, s;
                return r(this, (function (r) {
                    switch (r.label) {
                        case 0:
                            return r.trys.push([0, 5, , 6]), n.length ? [4, Me(n).start()] : [3, 2];
                        case 1:
                            r.sent(), r.label = 2;
                        case 2:
                            return t = function (e) {
                                var n, t = Ae.parse(e.reason)[0], r = t.fileName, i = t.columnNumber,
                                    o = t.lineNumber,
                                    a = t.source, c = a ? JSON.stringify(a.split(" ").join("").split("./")) : "";
                                return {
                                    type: "rejectionError",
                                    time: v(),
                                    message: (n = e.reason.message || e.reason.stack, g.isString(n) ? n : g.isUndefined(n) ? "undefined" : JSON.stringify(n)),
                                    fileName: r,
                                    line: o,
                                    column: i,
                                    stack: c
                                }
                            }(e), Je(null === (i = null == N ? void 0 : N.config) || void 0 === i ? void 0 : i.white, e) ? [2] : (c = null === (a = null === (o = null == N ? void 0 : N.config) || void 0 === o ? void 0 : o.white) || void 0 === a ? void 0 : a.rejection, u = He(t, c), !t || u ? [3, 4] : Ue(t) ? (Te({
                                type: "error",
                                eventId: "".concat(N.origin, ".").concat(N.module, ".ERROR.rejectionError"),
                                msg: t
                            }, N.pbOptions || {}), n.length ? [4, Me(n, "after").start()] : [3, 4]) : [2]);
                        case 3:
                            r.sent(), r.label = 4;
                        case 4:
                            return [3, 6];
                        case 5:
                            return s = r.sent(), console.warn("bili-mirror: handleUnhandleRejection-Error parsing failed:", s), [3, 6];
                        case 6:
                            return [2]
                    }
                }))
            }))
        },
        handlePerformance: function (e) {
            return void 0 === e && (e = []), t(this, void 0, void 0, (function () {
                var n;
                return r(this, (function (t) {
                    switch (t.label) {
                        case 0:
                            return t.trys.push([0, 3, , 4]), PerformanceObserver && (null === PerformanceObserver || void 0 === PerformanceObserver ? void 0 : PerformanceObserver.supportedEntryTypes) ? e.length ? [4, Me(e).start()] : [3, 2] : [2];
                        case 1:
                            t.sent(), t.label = 2;
                        case 2:
                            return ue((function (e) {
                                if (Math.floor(10 * Math.random() + 1) > 1) return ge.push([_e]), void Oe();
                                var n = e.name, t = e.rating, r = e.value;
                                Te({
                                    type: "performance",
                                    eventId: "".concat(N.origin, ".").concat(N.module, ".PERFORMANCE.").concat(e.name),
                                    msg: {name: n, rating: t, value: r}
                                }, N.pbOptions || {})
                            })), [3, 4];
                        case 3:
                            return n = t.sent(), console.warn("bili-mirror: performance-Error parsing failed:", n), [3, 4];
                        case 4:
                            return [2]
                    }
                }))
            }))
        },
        handlerPlugins: function (plugins) {
            return new Promise((resolve, reject) => {
                const errorPlugins = []
                const resourcePlugins = []
                const rejectionPlugins = []
                const performancePlugins = []
                const whiteScreenPlugins = []

                if (plugins && plugins.length) {
                    plugins.forEach(plugin => {
                        if (plugin && xe[plugin.type]) {
                            switch (plugin.type) {
                                case "ERROR":
                                    errorPlugins.push(plugin);
                                    break
                                case "RESOURCE":
                                    resourcePlugins.push(plugin);
                                    break
                                case "UNHANDLEDREJECTION":
                                    rejectionPlugins.push(plugin);
                                    break
                                case "PERFORMANCE":
                                    performancePlugins.push(plugin);
                                    break
                                case "WHITESCREEN":
                                    whiteScreenPlugins.push(plugin)
                                    break
                            }
                        } else {
                            console.warn("bili-mirror插件注入失败,请检查类型", plugin)
                        }
                    })
                    resolve({
                        errorPlugins: errorPlugins,
                        resourcePlugins: resourcePlugins,
                        rejectionPlugins: rejectionPlugins,
                        performancePlugins: performancePlugins,
                        whiteScreenPlugins: whiteScreenPlugins
                    })
                } else {
                    resolve({
                        errorPlugins: errorPlugins,
                        resourcePlugins: resourcePlugins,
                        rejectionPlugins: rejectionPlugins,
                        performancePlugins: performancePlugins,
                        whiteScreenPlugins: whiteScreenPlugins
                    })
                }
            })
        },
    };

    const De = {
        ERROR: "error",
        OK: "ok",
    }

    let We = {
        errorPlugins: [],
        resourcePlugins: [],
        rejectionPlugins: [],
        performancePlugins: [],
        whiteScreenPlugins: []
    };

    function Ve(config, pluginsConfig) {
        const {
            errorPlugins,
            resourcePlugins,
            rejectionPlugins,
            performancePlugins,
            whiteScreenPlugins = [],
        } = pluginsConfig

        addEventListener(window, "error", (e) => {
            $e.handleError(e, {
                error: errorPlugins,
                resource: resourcePlugins,
            })
        }, true)
        addEventListener(window, "unhandledrejection", (e) => {
            $e.handleUnhandleRejection(e, rejectionPlugins)
        })
        $e.handlePerformance(performancePlugins)

        if (config == null ? undefined : config.whiteScreen) {
            try {
                const whiteScreen = config.whiteScreen

                let t = whiteScreen.checkNum || 3
                let r = whiteScreen.maxLoop || 9
                const elemArray = whiteScreen.elemArry || whiteScreen.checkDom || ["html", "body", "#app"]
                let callback = whiteScreen.callback || function () {
                }

                const biliMirror = getBiliMirror()
                let c = 0
                let u = []
                let s = []

                function appear(element) {
                    const selector = element.id
                        ? "#" + element.id
                        : element.className && typeof element.className === "string"
                            ? "." + element.className.split(" ").filter(e => !!e).join(".")
                            : element.nodeName.toLowerCase()
                    if (whiteScreen.isSkeleton) {
                        c ? s.push(selector) : u.push(selector)
                    }
                    return elemArray.includes(selector)
                }

                function p() {
                    whiteScreenPlugins.length && Me(whiteScreenPlugins).start();
                    let isWhiteScreen = true
                    for (let f = 1; f <= 9; f += 2) {
                        const hElements = document.elementsFromPoint(window.innerWidth * f / 10, window.innerHeight / 2)
                        const vElements = document.elementsFromPoint(window.innerWidth / 2, window.innerHeight * f / 10)
                        if (hElements.length > t) {
                            for (let h = 0; h < hElements.length; h++) {
                                if (appear(hElements[h])) {
                                    isWhiteScreen = false
                                    break
                                }
                            }
                        }
                        if (!isWhiteScreen) {
                            break
                        }

                        if (isWhiteScreen && vElements.length > t && 5 != f) {
                            for (let g = 0; g < vElements.length; g++) {
                                if (appear(vElements[g])) {
                                    isWhiteScreen = !1;
                                    break
                                }
                            }
                        }
                        if (!isWhiteScreen) {
                            break
                        }
                    }

                    if (isWhiteScreen) {
                        v()
                    } else {
                        if (whiteScreen.isSkeleton) {
                            if (!c) {
                                return v()
                            }
                            if (s.join() === u.join()) {
                                return callback({status: De.ERROR})
                            }
                        }
                        whiteScreenPlugins.length && Me(whiteScreenPlugins, "after").start()
                        biliMirror._loopTimer && clearTimeout(biliMirror._loopTimer)
                        biliMirror._loopTimer = null
                    }
                    callback({
                        status: isWhiteScreen ? De.ERROR : De.OK,
                        loop: c,
                    })
                    if (c >= r) {
                        Te({
                            type: "error",
                            eventId: "".concat(N.origin, ".").concat(N.module, ".ERROR.whiteScreen")
                        })
                        whiteScreenPlugins.length && Me(whiteScreenPlugins, "after").start()
                    }
                }

                function v() {
                    if (c >= r && biliMirror._loopTimer) {
                        clearTimeout(biliMirror._loopTimer)
                        biliMirror._loopTimer = null
                    } else {
                        biliMirror._loopTimer = setTimeout(() => {
                            c++
                            whiteScreen.isSkeleton && (s = [])
                            p()
                        }, 1000)
                    }
                }

                if (whiteScreen.isSkeleton) {
                    if (document.readyState !== "complete") {
                        p()
                    }
                } else if (document.readyState === "complete") {
                    p()
                } else {
                    window.addEventListener("load", p)
                }
            } catch (e) {
                console.error("bili-mirror: whiteScreen错误解析异常:", e)
            }
        }
    }

    function qe(obj) {
        let config, plugins;
        S(obj)
        config = obj == null ? undefined : obj.config
        undefined === (plugins = obj == null ? undefined : obj.plugins) && (plugins = [])
        inBrowser() && $e.handlerPlugins(plugins).then(pluginConfig => {
            Ve(config, pluginConfig)
        }).catch(() => {
            Ve(config, We)
        })
    }

    let Ke = {
        SDK_NAME: y, SDK_VERSION: w, init: qe, install: function (e, n) {
            void 0 === n && (n = {});
            var t = e.config.errorHandler;
            e.config.errorHandler = function (e, n, r) {
                $e.handleError(e), t && t.apply(null, [e, n, r])
            }, qe(n)
        }, errorBoundary: function (e) {
            $e.handleError(e)
        }
    };

    inBrowser() && (window.__INITIAL_MIRROR__ = qe)

    exports.canBatchTechReport = function (e, n) {
        Re(e, n)
    }
    exports.cheangePbOptions = function (e) {
        Ie(e)
    }
    exports.customReport = function () {
        console.warn("已停止维护,建议更换customReportPb,旧方法不会上报任何数据")
    }
    exports.customReportPb = function (e) {
        Se(e)
    }
    exports.customReportPv = function () {
        console.warn("已停止维护,建议更换customReportPb,旧方法不会上报任何数据")
    }
    exports.default = Ke
    exports.misakaReport = function (e) {
        return function (e) {
            if (!e.eventId) throw new Error("apm report must need eventid");
            if (inBrowser()) return u(e)
        }(e)
    }
    exports.pbReportPv = function (e) {
        Se({type: "pv", eventId: "0.0", msg: e})
    }
    exports.tech = function (e) {
        Te(e)
    }
    exports.techReport = function () {
        console.warn("已停止维护,建议更换tech 或 techReportPb,旧方法不会上报任何数据")
    }
    exports.techReportPb = function (e) {
        Te(e)
    }

    Object.defineProperty(exports, "__esModule", {value: true})
}));
