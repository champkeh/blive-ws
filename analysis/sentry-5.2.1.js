var Sentry = function (sentry) {
    "use strict";
    const setPrototypeOf = function (obj, proto) {
        return (Object.setPrototypeOf || {__proto__: []} instanceof Array && function (n, t) {
            n.__proto__ = t
        } || function (n, t) {
            for (var r in t) t.hasOwnProperty(r) && (n[r] = t[r])
        })(obj, proto)
    };

    function setSuperClass(obj, proto) {
        function e() {
            this.constructor = obj
        }

        setPrototypeOf(obj, proto)
        obj.prototype = proto === null ? Object.create(proto) : (e.prototype = proto.prototype, new e)
    }

    let LevelEnum, o, u = function () {
        return (u = Object.assign || function (n) {
            for (var t, r = 1, e = arguments.length; r < e; r++) for (var i in t = arguments[r]) Object.prototype.hasOwnProperty.call(t, i) && (n[i] = t[i]);
            return n
        }).apply(this, arguments)
    };

    function c(n, t) {
        var r = "function" == typeof Symbol && n[Symbol.iterator];
        if (!r) return n;
        var e, i, o = r.call(n), u = [];
        try {
            for (; (void 0 === t || t-- > 0) && !(e = o.next()).done;) u.push(e.value)
        } catch (n) {
            i = {error: n}
        } finally {
            try {
                e && !e.done && (r = o.return) && r.call(o)
            } finally {
                if (i) throw i.error
            }
        }
        return u
    }

    function s() {
        for (var n = [], t = 0; t < arguments.length; t++) n = n.concat(c(arguments[t]));
        return n
    }

    !function (n) {
        n[n.None = 0] = "None"
        n[n.Error = 1] = "Error"
        n[n.Debug = 2] = "Debug"
        n[n.Verbose = 3] = "Verbose"
    }(LevelEnum || (LevelEnum = {}))

    sentry.Severity = sentry.Severity || {}
    sentry.Severity.Fatal = "fatal"
    sentry.Severity.Error = "error"
    sentry.Severity.Warning = "warning"
    sentry.Severity.Log = "log"
    sentry.Severity.Info = "info"
    sentry.Severity.Debug = "debug"
    sentry.Severity.Critical = "critical"
    sentry.Severity.fromString = function (str) {
        switch (str) {
            case"debug":
                return sentry.Severity.Debug
            case"info":
                return sentry.Severity.Info
            case"warn":
            case"warning":
                return sentry.Severity.Warning
            case"error":
                return sentry.Severity.Error
            case"fatal":
                return sentry.Severity.Fatal
            case"critical":
                return sentry.Severity.Critical
            case"log":
            default:
                return sentry.Severity.Log
        }
    }

    sentry.Status = sentry.Status || {}
    sentry.Status.Unknown = "unknown"
    sentry.Status.Skipped = "skipped"
    sentry.Status.Success = "success"
    sentry.Status.RateLimit = "rate_limit"
    sentry.Status.Invalid = "invalid"
    sentry.Status.Failed = "failed"
    sentry.Status.fromHttpCode = function (code) {
        if (code >= 200 && code < 300) {
            return sentry.Status.Success
        } else if (code === 429) {
            return sentry.Status.RateLimit
        } else if (code >= 400 && code < 500) {
            return sentry.Status.Invalid
        } else if (code >= 500) {
            return sentry.Status.Failed
        } else {
            return sentry.Status.Unknown
        }
    }

    class CustomError extends Error {
        constructor(msg) {
            super(msg)
        }
    }

    function isErrorObject(n) {
        switch (Object.prototype.toString.call(n)) {
            case"[object Error]":
            case"[object Exception]":
            case"[object DOMException]":
                return true
            default:
                return n instanceof Error
        }
    }

    function isErrorEvent(n) {
        return "[object ErrorEvent]" === Object.prototype.toString.call(n)
    }

    function isDomError(n) {
        return "[object DOMError]" === Object.prototype.toString.call(n)
    }

    function isString(n) {
        return "[object String]" === Object.prototype.toString.call(n)
    }

    function d(n) {
        return null === n || "object" !== typeof n && "function" !== typeof n
    }

    function isObject(n) {
        return "[object Object]" === Object.prototype.toString.call(n)
    }

    function isPromise(n) {
        return Boolean(n && n.then && "function" == typeof n.then)
    }

    const globalObject = {}

    function getGlobalObject() {
        return "[object process]" === Object.prototype.toString.call("undefined" !== typeof process ? process : 0)
            ? global
            : "undefined" !== typeof window
                ? window
                : "undefined" !== typeof self
                    ? self
                    : globalObject
    }

    function genRandId() {
        let n = getGlobalObject()
        let crypto = n.crypto || n.msCrypto

        if (undefined !== crypto && crypto.getRandomValues) {
            var r = new Uint16Array(8)
            crypto.getRandomValues(r)
            // 4095  = 0000_1111_1111_1111
            // 16384 = 0100_0000_0000_0000
            // 16383 = 0011_1111_1111_1111
            // 32768 = 1000_0000_0000_0000

            // 把 r[3] 变成 0100_xxxx_xxxx_xxxx
            r[3] = 4095 & r[3] | 16384
            // 把 r[4] 变成 10xx_xxxx_xxxx_xxxx
            r[4] = 16383 & r[4] | 32768

            var e = function (n) {
                let t = n.toString(16)
                for (; t.length < 4;) {
                    t = "0" + t
                }
                return t
            };
            return e(r[0]) + e(r[1]) + e(r[2]) + e(r[3]) + e(r[4]) + e(r[5]) + e(r[6]) + e(r[7])
        }
        return "xxxx.xxxx.xxxx.4xxx.yxxx.xxxx.xxxx.xxxx".replace(/[xy]/g, function (n) {
            var t = 16 * Math.random() | 0;
            return ("x" === n ? t : 3 & t | 8).toString(16)
        })
    }

    function parseUrl(url) {
        if (!url) {
            return {}
        }
        let matchRes = url.match(/^(?<schema>(?<protocol>[^:\/?#]+):)?(\/\/(?<host>[^\/?#]*))?(?<path>[^?#]*)(?<query>\?([^#]*))?(#(?<hash>.*))?$/)
        if (!matchRes) {
            return {}
        }

        let r = matchRes[6] || ""
        let e = matchRes[8] || ""
        return {
            host: matchRes[4],
            path: matchRes[5],
            protocol: matchRes[2],
            relative: matchRes[5] + r + e
        }
    }

    function getErrorMessage(n) {
        if (n.message) return n.message;
        if (n.exception && n.exception.values && n.exception.values[0]) {
            var t = n.exception.values[0];
            if (t.type && t.value) {
                return t.type + ": " + t.value
            } else {
                return t.type || t.value || n.event_id || "<unknown>"
            }
        }
        return n.event_id || "<unknown>"
    }

    function j(n) {
        var t = getGlobalObject()
        if (!("console" in t)) {
            return n()
        }

        let originalConsole = t.console
        let wrappedConsole = {}
        ;["debug", "info", "warn", "error", "log", "assert"].forEach((method) => {
            if (method in originalConsole && originalConsole[method].__sentry__) {
                wrappedConsole[method] = originalConsole[method].__sentry_wrapped__
                originalConsole[method] = originalConsole[method].__sentry_original__
            }
        })
        let i = n()
        Object.keys(wrappedConsole).forEach((method) => {
            originalConsole[method] = wrappedConsole[method]
        })
        return i
    }

    function setException(error, value, type, mechanism) {
        if (mechanism === undefined) {
            mechanism = {
                handled: true,
                type: "generic"
            }
        }

        error.exception = error.exception || {}
        error.exception.values = error.exception.values || []
        error.exception.values[0] = error.exception.values[0] || {}
        error.exception.values[0].value = error.exception.values[0].value || value || ""
        error.exception.values[0].type = error.exception.values[0].type || type || "Error"
        error.exception.values[0].mechanism = error.exception.values[0].mechanism || mechanism
    }

    let _ = getGlobalObject()
    let S = "Sentry Logger "
    let Logger = function () {
        function Logger() {
            this.t = false
        }

        Logger.prototype.disable = function () {
            this.t = false
        }
        Logger.prototype.enable = function () {
            this.t = true
        }
        Logger.prototype.log = function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            this.t && j(function () {
                _.console.log(S + "[Log]: " + n.join(" "))
            })
        }
        Logger.prototype.warn = function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            this.t && j(function () {
                _.console.warn(S + "[Warn]: " + n.join(" "))
            })
        }
        Logger.prototype.error = function () {
            for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
            this.t && j(function () {
                _.console.error(S + "[Error]: " + n.join(" "))
            })
        }
        return Logger
    }()

    _.__SENTRY__ = _.__SENTRY__ || {}
    let logger = _.__SENTRY__.logger || (_.__SENTRY__.logger = new Logger)
    let Cache = function () {
        function Cache() {
            this.i = "function" == typeof WeakSet
            this.o = this.i ? new WeakSet : []
        }

        Cache.prototype.memoize = function (n) {
            if (this.i) return !!this.o.has(n) || (this.o.add(n), !1);
            for (var t = 0; t < this.o.length; t++) {
                if (this.o[t] === n) return !0
            }
            return this.o.push(n), !1
        }
        Cache.prototype.unmemoize = function (n) {
            if (this.i) this.o.delete(n); else for (var t = 0; t < this.o.length; t++) if (this.o[t] === n) {
                this.o.splice(t, 1);
                break
            }
        }
        return Cache
    }();

    function R(obj, key, r) {
        if (key in obj) {
            let e = obj[key]
            let i = r(e)
            if ("function" == typeof i) {
                try {
                    i.prototype = i.prototype || {}
                    Object.defineProperties(i, {
                        __sentry__: {enumerable: false, value: true},
                        __sentry_original__: {enumerable: false, value: e},
                        __sentry_wrapped__: {enumerable: false, value: i}
                    })
                } catch (n) {
                }
            }
            obj[key] = i
        }
    }

    function D(n) {
        return function (n) {
            return ~-encodeURI(n).split(/%..|./).length
        }(JSON.stringify(n))
    }

    function I(obj, depth, r) {
        undefined === depth && (depth = 3)
        undefined === r && (r = 102400)
        let e = deepClone(obj, depth)
        if (D(e) > r) {
            return I(obj, depth - 1, r)
        }
        return e
    }

    function strify(value, key) {
        if (key === "domain" && typeof value === "object" && value.u) {
            return "[Domain]"
        } else if (key === "domainEmitter") {
            return "[DomainEmitter]"
        } else if ("undefined" !== typeof global && value === global) {
            return "[Global]"
        } else if ("undefined" != typeof window && value === window) {
            return "[Window]"
        } else if ("undefined" != typeof document && value === document) {
            return "[Document]"
        } else if ("undefined" != typeof Event && value instanceof Event) {
            if (Object.getPrototypeOf(value)) {
                return value.constructor.name
            } else {
                return "Event"
            }
        } else if (isObject(value) && "nativeEvent" in value && "preventDefault" in value && "stopPropagation" in value) {
            return "[SyntheticEvent]"
        } else if (Number.isNaN(value)) {
            return "[NaN]"
        } else if (value === undefined) {
            return "[undefined]"
        } else if (typeof value === "function") {
            return "[Function: " + (value.name || "<unknown-function-name>") + "]"
        } else {
            return value
        }
    }

    function A(key, value, depth, cache) {
        undefined === depth && (depth = Infinity)
        undefined === cache && (cache = new Cache)

        if (depth === 0) {
            if (typeof value === "string") {
                return value
            }

            var t = Object.prototype.toString.call(value)
            if ("[object Object]" === t) {
                return "[Object]"
            }
            if ("[object Array]" === t) {
                return "[Array]"
            }
            var r = strify(value)
            return d(r) ? r : t
        }

        if (null != value && "function" == typeof value.toJSON) return value.toJSON();
        var i = strify(value, key);
        if (d(i)) return i;
        var o = isErrorObject(value) ? function (n) {
            var t = {message: n.message, name: n.name, stack: n.stack};
            for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
            return t
        }(value) : value

        let u = Array.isArray(value) ? [] : {}
        if (cache.memoize(value)) {
            return "[Circular ~]"
        }
        for (let key in o) {
            if (Object.prototype.hasOwnProperty.call(o, key)) {
                u[key] = A(key, o[key], depth - 1, cache)
            }
        }
        cache.unmemoize(value)
        return u
    }

    function deepClone(obj, depth) {
        try {
            return JSON.parse(JSON.stringify(obj, function (key, value) {
                return A(key, value, depth)
            }))
        } catch (n) {
            return "**non-serializable**"
        }
    }

    let TaskQueue = function () {
        function TaskQueue(n) {
            this.s = n
            this.h = []
        }

        TaskQueue.prototype.isReady = function () {
            return undefined === this.s || this.length() < this.s
        }
        TaskQueue.prototype.add = function (task) {
            let _this = this;
            if (this.isReady()) {
                if (!this.h.includes(task)) {
                    this.h.push(task)
                }
                task.then(function () {
                    return _this.remove(task)
                }).catch(function () {
                    return _this.remove(task).catch(function () {
                    })
                })
                return task
            } else {
                Promise.reject(new CustomError("Not adding Promise due to buffer limit reached."))
            }
        }
        TaskQueue.prototype.remove = function (n) {
            return this.h.splice(this.h.indexOf(n), 1)[0]
        }
        TaskQueue.prototype.length = function () {
            return this.h.length
        }
        TaskQueue.prototype.drain = function (timeout) {
            return new Promise((resolve) => {
                let timer = setTimeout(function () {
                    timeout && timeout > 0 && resolve(false)
                }, timeout)

                Promise.all(this.h).then(() => {
                    clearTimeout(timer)
                    resolve(true)
                }).catch(() => {
                    resolve(true)
                })
            })
        }
        return TaskQueue
    }()

    function substr(str, len) {
        if (len === undefined) {
            len = 0
        }
        if (len === 0) {
            return str
        } else if (len >= str.length) {
            return str
        } else {
            return str.substr(0, len) + "..."
        }
    }


    function serializeArray(arr, delimiter) {
        if (!Array.isArray(arr)) return ""
        let result = []
        for (let i = 0; i < arr.length; i++) {
            try {
                result.push(String(arr[i]))
            } catch (n) {
                result.push("[value cannot be serialized]")
            }
        }
        return result.join(delimiter)
    }

    function P(n, len) {
        if (len === undefined) {
            len = 40
        }
        if (n.length === 0) {
            return "[object has no keys]"
        }
        if (n[0].length >= len) {
            return substr(n[0], len)
        }
        for (let r = n.length; r > 0; r--) {
            var e = n.slice(0, r).join(", ");
            if (!(e.length > len)) return r === n.length ? e : substr(e, len)
        }
        return ""
    }

    function include(str, subStr) {
        if (Object.prototype.toString.call(subStr) === "[object RegExp]") {
            return subStr.test(str)
        } else {
            return "string" == typeof subStr && str.includes(subStr);
        }
    }

    function q() {
        if (!("fetch" in getGlobalObject())) return false
        try {
            new Headers
            new Request("")
            new Responses
            return true
        } catch (e) {
            return false
        }
    }

    function H() {
        if (!q()) return false
        try {
            new Request("_", {referrerPolicy: "origin"})
            return true
        } catch (e) {
            return false
        }
    }

    const L = {
        PENDING: "PENDING",
        RESOLVED: "RESOLVED",
        REJECTED: "REJECTED",
    }

    let SyncPromise = function () {
        function SyncPromise(executor) {
            var t = this
            this.l = L.PENDING
            this.v = []
            this.p = function (n) {
                t.m(n, L.RESOLVED)
            }
            this.g = function (n) {
                t.m(n, L.REJECTED)
            }
            this.m = function (n, r) {
                t.l === L.PENDING && (isPromise(n) ? n.then(t.p, t.g) : (t.j = n, t.l = r, t._()))
            }
            this._ = function () {
                t.l !== L.PENDING && (t.l === L.REJECTED ? t.v.forEach(function (n) {
                    return n.onFail && n.onFail(t.j)
                }) : t.v.forEach(function (n) {
                    return n.onSuccess && n.onSuccess(t.j)
                }), t.v = [])
            }
            this.S = function (n) {
                t.v = t.v.concat(n), t._()
            }
            try {
                executor(this.p, this.g)
            } catch (n) {
                this.g(n)
            }
        }

        SyncPromise.prototype.then = function (onfulfilled, onrejected) {
            return new SyncPromise((resolve, reject) => {
                this.S({
                    onFail: function (t) {
                        if (onrejected) {
                            try {
                                return void resolve(onrejected(t))
                            } catch (n) {
                                return void reject(n)
                            }
                        } else {
                            reject(t)
                        }
                    },
                    onSuccess: function (r) {
                        if (onfulfilled) {
                            try {
                                return void resolve(onfulfilled(r))
                            } catch (n) {
                                return void reject(n)
                            }
                        } else {
                            resolve(r)
                        }
                    }
                })
            })
        }
        SyncPromise.prototype.catch = function (onrejected) {
            return this.then(function (val) {
                return val
            }, onrejected)
        }
        SyncPromise.prototype.toString = function () {
            return "[object SyncPromise]"
        }
        SyncPromise.resolve = function (value) {
            return new SyncPromise((resolve) => {
                resolve(value)
            })
        }
        SyncPromise.reject = function (error) {
            return new SyncPromise(function (resolve, reject) {
                reject(error)
            })
        }
        return SyncPromise
    }()

    let B = /([0-9a-f]{2})-([0-9a-f]{32})-([0-9a-f]{16})-([0-9a-f]{2})/
    let J = function () {
        function n(traceId, spanId, r, parent) {
            if (traceId === undefined) {
                traceId = genRandId()
            }
            if (spanId === undefined) {
                spanId = genRandId().substring(16)
            }
            if (r === undefined) {
                r = false
            }
            this.O = traceId
            this.k = spanId
            this.T = r
            this.R = parent
        }

        n.fromTraceparent = function (t) {
            var r = t.match(B);
            if (r) {
                var e = new n(r[2], r[3], "01" === r[4]);
                return new n(r[2], void 0, void 0, e)
            }
        }
        n.prototype.toTraceparent = function () {
            return "00-" + this.O + "-" + this.k + "-" + (this.T ? "01" : "00")
        }
        n.prototype.toJSON = function () {
            return {
                parent: this.R && this.R.toJSON() || undefined,
                span_id: this.k,
                trace_id: this.O,
            }
        }
        return n
    }()
    let Scope = function () {
        function n() {
            this.D = false
            this.I = []
            this.N = []
            this.A = []
            this.C = {}
            this.L = {}
            this.M = {}
            this.F = {}
        }

        n.prototype.addScopeListener = function (handler) {
            this.I.push(handler)
        }
        n.prototype.addEventProcessor = function (handler) {
            this.N.push(handler)
            return this
        }
        n.prototype.U = function () {
            if (!this.D) {
                this.D = true
                setTimeout(() => {
                    this.I.forEach((t) => {
                        t(this)
                    })
                    this.D = false
                })
            }
        }
        n.prototype.P = function (n, t, r, e) {
            var i = this;
            void 0 === e && (e = 0)
            return new SyncPromise(function (resolve, reject) {
                var s = n[e];
                if (null === t || "function" != typeof s) {
                    resolve(t);
                } else {
                    var a = s(u({}, t), r);
                    isPromise(a) ? a.then(function (t) {
                        return i.P(n, t, r, e + 1).then(resolve)
                    }).catch(reject) : i.P(n, a, r, e + 1).then(resolve).catch(reject)
                }
            })
        }
        n.prototype.setUser = function (n) {
            this.C = deepClone(n)
            this.U()
            return this
        }
        n.prototype.setTags = function (n) {
            this.L = u({}, this.L, deepClone(n))
            this.U()
            return this
        }
        n.prototype.setTag = function (n, t) {
            let r = {}
            r[n] = deepClone(t)
            this.L = u({}, this.L, r)
            this.U()
            return this
        }
        n.prototype.setExtras = function (n) {
            this.M = u({}, this.M, deepClone(n))
            this.U()
            return this
        }
        n.prototype.setExtra = function (n, t) {
            let r = {}
            r[n] = deepClone(t)
            this.M = u({}, this.M, r)
            this.U()
            return this
        }
        n.prototype.setFingerprint = function (n) {
            this.$ = deepClone(n)
            this.U()
            return this
        }
        n.prototype.setLevel = function (n) {
            this.q = deepClone(n)
            this.U()
            return this
        }
        n.prototype.setTransaction = function (n) {
            this.H = n
            this.U()
            return this
        }
        n.prototype.setContext = function (n, t) {
            this.F[n] = t ? deepClone(t) : undefined
            this.U()
            return this
        }
        n.prototype.setSpan = function (n) {
            this.W = n
            this.U()
            return this
        }
        n.prototype.startSpan = function () {
            let n = new J
            this.setSpan(n)
            return n
        }
        n.prototype.getSpan = function () {
            return this.W
        }
        n.clone = function (t) {
            var r = new n
            Object.assign(r, t, {I: []})
            if (t) {
                r.A = s(t.A)
                r.L = u({}, t.L)
                r.M = u({}, t.M)
                r.F = u({}, t.F)
                r.C = t.C
                r.q = t.q
                r.W = t.W
                r.H = t.H
                r.$ = t.$
                r.N = s(t.N)
            }
            return r
        }
        n.prototype.clear = function () {
            this.A = []
            this.L = {}
            this.M = {}
            this.C = {}
            this.F = {}
            this.q = void 0
            this.H = void 0
            this.$ = void 0
            this.W = void 0
            this.U()
            return this
        }
        n.prototype.addBreadcrumb = function (n, t) {
            var r = (new Date).getTime() / 1e3, e = u({timestamp: r}, n);
            this.A = void 0 !== t && t >= 0
                ? s(this.A, [deepClone(e)]).slice(-t)
                : s(this.A, [deepClone(e)])
            this.U()
            return this
        }
        n.prototype.clearBreadcrumbs = function () {
            this.A = []
            this.U()
            return this
        }
        n.prototype.B = function (n) {
            n.fingerprint = n.fingerprint
                ? Array.isArray(n.fingerprint)
                    ? n.fingerprint
                    : [n.fingerprint]
                : []
            this.$ && (n.fingerprint = n.fingerprint.concat(this.$))
            n.fingerprint && !n.fingerprint.length && delete n.fingerprint
        }
        n.prototype.applyToEvent = function (n, t) {
            this.M && Object.keys(this.M).length && (n.extra = u({}, this.M, n.extra))
            this.L && Object.keys(this.L).length && (n.tags = u({}, this.L, n.tags))
            this.C && Object.keys(this.C).length && (n.user = u({}, this.C, n.user))
            this.F && Object.keys(this.F).length && (n.contexts = u({}, this.F, n.contexts))
            this.q && (n.level = this.q)
            this.H && (n.transaction = this.H)
            this.W && (n.contexts = n.contexts || {}, n.contexts.trace = this.W)
            this.B(n)
            n.breadcrumbs = s(n.breadcrumbs || [], this.A)
            n.breadcrumbs = n.breadcrumbs.length > 0 ? n.breadcrumbs : void 0
            return this.P(s(getGlobalEventProcessors(), this.N), n, t)
        }
        return n
    }()

    function getGlobalEventProcessors() {
        var n = getGlobalObject();
        n.__SENTRY__ = n.__SENTRY__ || {}
        n.__SENTRY__.globalEventProcessors = n.__SENTRY__.globalEventProcessors || []
        return n.__SENTRY__.globalEventProcessors
    }

    function addGlobalEventProcessor(handler) {
        getGlobalEventProcessors().push(handler)
    }

    let V = 3
    let SentryHub = function () {
        function SentryHub(n, t, r) {
            void 0 === t && (t = new Scope), void 0 === r && (r = V), this.J = r, this.X = [], this.X.push({
                client: n,
                scope: t
            })
        }

        SentryHub.prototype.G = function (n) {
            for (var t, r = [], e = 1; e < arguments.length; e++) r[e - 1] = arguments[e];
            var i = this.getStackTop();
            i && i.client && i.client[n] && (t = i.client)[n].apply(t, s(r, [i.scope]))
        }
        SentryHub.prototype.isOlderThan = function (n) {
            return this.J < n
        }
        SentryHub.prototype.bindClient = function (n) {
            this.getStackTop().client = n
        }
        SentryHub.prototype.pushScope = function () {
            var n = this.getStack(), t = n.length > 0 ? n[n.length - 1].scope : void 0, r = Scope.clone(t);
            return this.getStack().push({client: this.getClient(), scope: r}), r
        }
        SentryHub.prototype.popScope = function () {
            return void 0 !== this.getStack().pop()
        }
        SentryHub.prototype.withScope = function (n) {
            var t = this.pushScope();
            try {
                n(t)
            } finally {
                this.popScope()
            }
        }
        SentryHub.prototype.getClient = function () {
            return this.getStackTop().client
        }
        SentryHub.prototype.getScope = function () {
            return this.getStackTop().scope
        }
        SentryHub.prototype.getStack = function () {
            return this.X
        }
        SentryHub.prototype.getStackTop = function () {
            return this.X[this.X.length - 1]
        }
        SentryHub.prototype.captureException = function (n, t) {
            var r = this.V = genRandId();
            return this.G("captureException", n, u({}, t, {event_id: r})), r
        }
        SentryHub.prototype.captureMessage = function (n, t, r) {
            var e = this.V = genRandId();
            return this.G("captureMessage", n, t, u({}, r, {event_id: e})), e
        }
        SentryHub.prototype.captureEvent = function (n, t) {
            var r = this.V = genRandId();
            return this.G("captureEvent", n, u({}, t, {event_id: r})), r
        }
        SentryHub.prototype.lastEventId = function () {
            return this.V
        }
        SentryHub.prototype.addBreadcrumb = function (n, t) {
            var r = this.getStackTop();
            if (r.scope && r.client) {
                var e = r.client.getOptions && r.client.getOptions() || {}, i = e.beforeBreadcrumb,
                    o = void 0 === i ? null : i, c = e.maxBreadcrumbs, s = void 0 === c ? 30 : c;
                if (!(s <= 0)) {
                    var a = (new Date).getTime() / 1e3, f = u({timestamp: a}, n), h = o ? j(function () {
                        return o(f, t)
                    }) : f;
                    null !== h && r.scope.addBreadcrumb(h, Math.min(s, 100))
                }
            }
        }
        SentryHub.prototype.configureScope = function (n) {
            var t = this.getStackTop();
            t.scope && t.client && n(t.scope)
        }
        SentryHub.prototype.run = function (n) {
            var t = Q(this);
            try {
                n(this)
            } finally {
                Q(t)
            }
        }
        SentryHub.prototype.getIntegration = function (n) {
            var t = this.getClient();
            if (!t) return null;
            try {
                return t.getIntegration(n)
            } catch (t) {
                return logger.warn("Cannot retrieve integration " + n.id + " from the current Hub"), null
            }
        }
        SentryHub.prototype.traceHeaders = function () {
            var n = this.getStackTop();
            if (n.scope && n.client) {
                var t = n.scope.getSpan();
                if (t) return {"sentry-trace": t.toTraceparent()}
            }
            return {}
        }
        return SentryHub
    }();

    function setupSentry() {
        var n = getGlobalObject()
        n.__SENTRY__ = n.__SENTRY__ || {hub: undefined}
        return n
    }

    function Q(n) {
        let t = setupSentry()
        let r = getHubFromCarrier(t)
        setSentryHub(t, n)
        return r
    }

    function getCurrentHub() {
        var n, t, r = setupSentry();
        nn(r) && !getHubFromCarrier(r).isOlderThan(V) || setSentryHub(r, new SentryHub);
        try {
            n = module
            t = "domain"
            var e = n.require(t).active
            if (!e) return getHubFromCarrier(r)
            if (!nn(e) || getHubFromCarrier(e).isOlderThan(V)) {
                var i = getHubFromCarrier(r).getStackTop();
                setSentryHub(e, new SentryHub(i.client, Scope.clone(i.scope)))
            }
            return getHubFromCarrier(e)
        } catch (n) {
            return getHubFromCarrier(r)
        }
    }

    function nn(global) {
        return !!(global && global.__SENTRY__ && global.__SENTRY__.hub)
    }

    function getHubFromCarrier(global) {
        if (global && global.__SENTRY__ && global.__SENTRY__.hub) {
            return global.__SENTRY__.hub
        } else {
            global.__SENTRY__ = global.__SENTRY__ || {}
            global.__SENTRY__.hub = new SentryHub()
            return global.__SENTRY__.hub
        }
    }

    function setSentryHub(global, hub) {
        if (!!global) {
            global.__SENTRY__ = global.__SENTRY__ || {}
            global.__SENTRY__.hub = hub
            return true
        }
        return false
    }

    function en(n) {
        const t = []
        for (let i = 1; i < arguments.length; i++) {
            t[i - 1] = arguments[i]
        }
        const e = getCurrentHub();
        if (e && e[n]) {
            return e[n].apply(e, s(t))
        }
        throw new Error("No hub defined or " + n + " was not found on the hub, please open a bug report.")
    }

    function captureException(n) {
        var t;
        try {
            throw new Error("Sentry syntheticException")
        } catch (n) {
            t = n
        }
        return en("captureException", n, {
            originalException: n,
            syntheticException: t
        })
    }

    function on(n) {
        en("withScope", n)
    }

    let urlRe = /^(?:(?<protocol>\w+):)\/\/(?:(?<user>\w+)(?::(?<pass>\w+))?@)(?<host>[\w\.-]+)(?::(?<port>\d+))?\/(?<path>.+)/
    let Dsn = function () {
        function Dsn(n) {
            "string" == typeof n ? this.K(n) : this.Z(n), this.Y()
        }

        Dsn.prototype.toString = function (n) {
            if (n === undefined) {
                n = false
            }
            const {protocol, user, host, path, pass, port, projectId} = this
            return protocol + "://" + user + (n && pass ? ":" + pass : "") + "@" + host + (port ? ":" + port : "") + "/" + (path ? path + "/" : path) + projectId
        }
        Dsn.prototype.K = function (n) {
            let t = urlRe.exec(n);
            if (!t) {
                throw new CustomError("Invalid Dsn")
            }

            let r = c(t.slice(1), 6)
            let protocol = r[0]
            let user = r[1]
            let o = r[2]
            let pass = void 0 === o ? "" : o
            let host = r[3]
            let f = r[4]
            let port = void 0 === f ? "" : f
            let path = ""
            let projectId = r[5]
            let d = projectId.split("/");

            if (d.length > 1) {
                path = d.slice(0, -1).join("/")
                projectId = d.pop()
            }
            Object.assign(this, {
                host: host,
                pass: pass,
                path: path,
                projectId: projectId,
                port: port,
                protocol: protocol,
                user: user
            })
        }
        Dsn.prototype.Z = function (n) {
            this.protocol = n.protocol
            this.user = n.user
            this.pass = n.pass || ""
            this.host = n.host
            this.port = n.port || ""
            this.path = n.path || ""
            this.projectId = n.projectId
        }
        Dsn.prototype.Y = function () {
            // 必填
            ["protocol", "user", "host", "projectId"].forEach((t) => {
                if (!this[t]) {
                    throw new CustomError("Invalid Dsn")
                }
            })
            if ("http" !== this.protocol && "https" !== this.protocol) {
                throw new CustomError("Invalid Dsn")
            }
            if (this.port && Number.isNaN(parseInt(this.port, 10))) {
                throw new CustomError("Invalid Dsn")
            }
        }
        return Dsn
    }()

    let sn = function () {
        function n(n) {
            this.dsn = n
            this.nn = new Dsn(n)
        }

        n.prototype.getDsn = function () {
            return this.nn
        }
        n.prototype.getStoreEndpoint = function () {
            return "" + this.tn() + this.getStoreEndpointPath()
        }
        n.prototype.getStoreEndpointWithUrlEncodedAuth = function () {
            let obj = {
                sentry_key: this.nn.user,
                sentry_version: "7"
            };
            return this.getStoreEndpoint() + "?" + Object.keys(obj).map(key => {
                return encodeURIComponent(key) + "=" + encodeURIComponent(obj[key])
            }).join("&")
        }
        n.prototype.tn = function () {
            let n = this.nn
            let protocol = n.protocol ? n.protocol + ":" : ""
            let port = n.port ? ":" + n.port : ""
            return protocol + "//" + n.host + port
        }
        n.prototype.getStoreEndpointPath = function () {
            let n = this.nn;
            return (n.path ? "/" + n.path : "") + "/api/" + n.projectId + "/store/"
        }
        n.prototype.getRequestHeaders = function (n, t) {
            let r = this.nn
            let e = ["Sentry sentry_version=7"]
            e.push("sentry_timestamp=" + (new Date).getTime())
            e.push("sentry_client=" + n + "/" + t)
            e.push("sentry_key=" + r.user)
            r.pass && e.push("sentry_secret=" + r.pass)
            return {
                "Content-Type": "application/json",
                "X-Sentry-Auth": e.join(", ")
            }
        }
        n.prototype.getReportDialogEndpoint = function (n) {
            void 0 === n && (n = {});
            let t = this.nn
            let r = this.tn() + (t.path ? "/" + t.path : "") + "/api/embed/error-page/"
            let e = []
            for (let i in e.push("dsn=" + t.toString()), n) if ("user" === i) {
                if (!n.user) continue;
                n.user.name && e.push("name=" + encodeURIComponent(n.user.name)), n.user.email && e.push("email=" + encodeURIComponent(n.user.email))
            } else e.push(encodeURIComponent(i) + "=" + encodeURIComponent(n[i]));
            return e.length ? r + "?" + e.join("&") : r
        }
        return n
    }()
    let an = [];

    function fn(n) {
        const t = {}

        function aaa(n) {
            let t = n.defaultIntegrations && s(n.defaultIntegrations) || []
            let r = n.integrations
            let e = [];
            if (Array.isArray(r)) {
                let i = r.map((n) => n.name)
                let o = [];
                t.forEach(function (n) {
                    -1 === i.indexOf(n.name) && -1 === o.indexOf(n.name) && (e.push(n), o.push(n.name))
                })
                r.forEach(n => {
                    if (o.indexOf(n.name) === -1) {
                        e.push(n)
                        o.push(n.name)
                    }
                })
            } else {
                if ("function" != typeof r) return s(t);
                e = r(t)
                e = Array.isArray(e) ? e : [e]
            }
            return e
        }

        (n).forEach(function (n) {
            t[n.name] = n

            function aaa(n) {
                -1 === an.indexOf(n.name) && (n.setupOnce(addGlobalEventProcessor, getCurrentHub), an.push(n.name), logger.log("Integration installed: " + n.name))
            }

            (n)
        })
        return t
    }

    let hn
    let ln = function () {
        function n(n, t) {
            this.rn = !1, this.en = new n(t), this.in = t, t.dsn && (this.on = new Dsn(t.dsn)), this.un = fn(this.in)
        }

        return n.prototype.captureException = function (n, t, r) {
            var e = this, i = t && t.event_id;
            return this.rn = !0, this.cn().eventFromException(n, t).then(function (n) {
                return e.sn(n, t, r)
            }).then(function (n) {
                i = n && n.event_id, e.rn = !1
            }).catch(function (n) {
                logger.error(n), e.rn = !1
            }), i
        }, n.prototype.captureMessage = function (n, t, r, e) {
            var i = this, o = r && r.event_id;
            return this.rn = !0, (d(n) ? this.cn().eventFromMessage("" + n, t, r) : this.cn().eventFromException(n, r)).then(function (n) {
                return i.sn(n, r, e)
            }).then(function (n) {
                o = n && n.event_id, i.rn = !1
            }).catch(function (n) {
                logger.error(n), i.rn = !1
            }), o
        }, n.prototype.captureEvent = function (n, t, r) {
            var e = this, i = t && t.event_id;
            return this.rn = !0, this.sn(n, t, r).then(function (n) {
                i = n && n.event_id, e.rn = !1
            }).catch(function (n) {
                logger.error(n), e.rn = !1
            }), i
        }, n.prototype.getDsn = function () {
            return this.on
        }, n.prototype.getOptions = function () {
            return this.in
        }, n.prototype.flush = function (n) {
            var t = this;
            return this.an(n).then(function (r) {
                return t.fn && clearInterval(t.fn), t.cn().getTransport().close(n).then(function (n) {
                    return r && n
                })
            })
        }, n.prototype.close = function (n) {
            var t = this;
            return this.flush(n).then(function (n) {
                return t.getOptions().enabled = !1, n
            })
        }, n.prototype.getIntegrations = function () {
            return this.un || {}
        }, n.prototype.getIntegration = function (n) {
            try {
                return this.un[n.id] || null
            } catch (t) {
                return logger.warn("Cannot retrieve integration " + n.id + " from the current Client"), null
            }
        }, n.prototype.an = function (n) {
            var t = this;
            return new Promise(function (r) {
                var e = 0;
                t.fn && clearInterval(t.fn), t.fn = setInterval(function () {
                    t.rn ? (e += 1, n && e >= n && r(!1)) : r(!0)
                }, 1)
            })
        }, n.prototype.cn = function () {
            return this.en
        }, n.prototype.hn = function () {
            return !1 !== this.getOptions().enabled && void 0 !== this.on
        }, n.prototype.ln = function (n, t, r) {
            var e = this.getOptions(), i = e.environment, o = e.release, c = e.dist, s = e.maxValueLength,
                a = void 0 === s ? 250 : s, f = u({}, n);
            void 0 === f.environment && void 0 !== i && (f.environment = i), void 0 === f.release && void 0 !== o && (f.release = o), void 0 === f.dist && void 0 !== c && (f.dist = c), f.message && (f.message = substr(f.message, a));
            var h = f.exception && f.exception.values && f.exception.values[0];
            h && h.value && (h.value = substr(h.value, a));
            var l = f.request;
            l && l.url && (l.url = substr(l.url, a)), void 0 === f.event_id && (f.event_id = genRandId()), this.vn(f.sdk);
            var v = SyncPromise.resolve(f);
            return t && (v = t.applyToEvent(f, r)), v
        }, n.prototype.vn = function (n) {
            var t = Object.keys(this.un);
            n && t.length > 0 && (n.integrations = t)
        }, n.prototype.sn = function (n, t, r) {
            var e = this, i = this.getOptions(), o = i.beforeSend, u = i.sampleRate;
            return this.hn() ? "number" == typeof u && Math.random() > u ? SyncPromise.reject("This event has been sampled, will not send event.") : new SyncPromise(function (i, u) {
                e.ln(n, r, t).then(function (n) {
                    if (null !== n) {
                        var r = n;
                        try {
                            if (t && t.data && !0 === t.data.__sentry__ || !o) return e.cn().sendEvent(r), void i(r);
                            var c = o(n, t);
                            if (void 0 === c) logger.error("`beforeSend` method has to return `null` or a valid event."); else if (isPromise(c)) e.dn(c, i, u); else {
                                if (null === (r = c)) return logger.log("`beforeSend` returned `null`, will not send event."), void i(null);
                                e.cn().sendEvent(r), i(r)
                            }
                        } catch (n) {
                            e.captureException(n, {
                                data: {__sentry__: !0},
                                originalException: n
                            }), u("`beforeSend` throw an error, will not send event.")
                        }
                    } else u("An event processor returned null, will not send event.")
                })
            }) : SyncPromise.reject("SDK not enabled, will not send event.")
        }, n.prototype.dn = function (n, t, r) {
            var e = this;
            n.then(function (n) {
                null !== n ? (e.cn().sendEvent(n), t(n)) : r("`beforeSend` returned `null`, will not send event.")
            }).catch(function (n) {
                r("beforeSend rejected with " + n)
            })
        }, n
    }()
    let vn = function () {
        function t() {
        }

        return t.prototype.sendEvent = function (t) {
            return Promise.resolve({
                reason: "NoopTransport: Event has been skipped because no Dsn is configured.",
                status: sentry.Status.Skipped
            })
        }, t.prototype.close = function (n) {
            return Promise.resolve(!0)
        }, t
    }()
    let dn = function () {
        function n(n) {
            this.in = n, this.in.dsn || logger.warn("No DSN provided, backend will not do anything."), this.pn = this.mn()
        }

        return n.prototype.mn = function () {
            return new vn
        }, n.prototype.eventFromException = function (n, t) {
            throw new CustomError("Backend has to implement `eventFromException` method")
        }, n.prototype.eventFromMessage = function (n, t, r) {
            throw new CustomError("Backend has to implement `eventFromMessage` method")
        }, n.prototype.sendEvent = function (n) {
            this.pn.sendEvent(n).catch(function (n) {
                logger.error("Error while sending event: " + n)
            })
        }, n.prototype.getTransport = function () {
            return this.pn
        }, n
    }()
    let pn = function () {
        function n() {
            this.name = n.id
        }

        return n.prototype.setupOnce = function () {
            hn = Function.prototype.toString, Function.prototype.toString = function () {
                for (var n = [], t = 0; t < arguments.length; t++) n[t] = arguments[t];
                var r = this.__sentry__ ? this.__sentry_original__ : this;
                return hn.apply(r, n)
            }
        }, n.id = "FunctionToString", n
    }()
    let mn = [/^Script error\.?$/, /^Javascript error: Script error\.? on line 0$/]
    let yn = function () {
        function n(t) {
            void 0 === t && (t = {}), this.in = t, this.name = n.id
        }

        return n.prototype.setupOnce = function () {
            addGlobalEventProcessor(function (t) {
                var r = getCurrentHub();
                if (!r) return t;
                var e = r.getIntegration(n);
                if (e) {
                    var i = r.getClient(), o = i ? i.getOptions() : {}, u = e.yn(o);
                    if (e.bn(t, u)) return null
                }
                return t
            })
        }, n.prototype.bn = function (n, t) {
            return this.wn(n, t) ? (logger.warn("Event dropped due to being internal Sentry Error.\nEvent: " + getErrorMessage(n)), !0) : this.gn(n, t) ? (logger.warn("Event dropped due to being matched by `ignoreErrors` option.\nEvent: " + getErrorMessage(n)), !0) : this.En(n, t) ? (logger.warn("Event dropped due to being matched by `blacklistUrls` option.\nEvent: " + getErrorMessage(n) + ".\nUrl: " + this.jn(n)), !0) : !this.xn(n, t) && (logger.warn("Event dropped due to not being matched by `whitelistUrls` option.\nEvent: " + getErrorMessage(n) + ".\nUrl: " + this.jn(n)), !0)
        }, n.prototype.wn = function (n, t) {
            if (void 0 === t && (t = {}), !t.ignoreInternal) return !1;
            try {
                return "SentryError" === n.exception.values[0].type
            } catch (n) {
                return !1
            }
        }, n.prototype.gn = function (n, t) {
            return void 0 === t && (t = {}), !(!t.ignoreErrors || !t.ignoreErrors.length) && this._n(n).some(function (n) {
                return t.ignoreErrors.some(function (t) {
                    return include(n, t)
                })
            })
        }, n.prototype.En = function (n, t) {
            if (void 0 === t && (t = {}), !t.blacklistUrls || !t.blacklistUrls.length) return !1;
            var r = this.jn(n);
            return !!r && t.blacklistUrls.some(function (n) {
                return include(r, n)
            })
        }, n.prototype.xn = function (n, t) {
            if (void 0 === t && (t = {}), !t.whitelistUrls || !t.whitelistUrls.length) return !0;
            var r = this.jn(n);
            return !r || t.whitelistUrls.some(function (n) {
                return include(r, n)
            })
        }, n.prototype.yn = function (n) {
            return void 0 === n && (n = {}), {
                blacklistUrls: s(this.in.blacklistUrls || [], n.blacklistUrls || []),
                ignoreErrors: s(this.in.ignoreErrors || [], n.ignoreErrors || [], mn),
                ignoreInternal: void 0 === this.in.ignoreInternal || this.in.ignoreInternal,
                whitelistUrls: s(this.in.whitelistUrls || [], n.whitelistUrls || [])
            }
        }, n.prototype._n = function (n) {
            if (n.message) return [n.message];
            if (n.exception) try {
                var t = n.exception.values[0], r = t.type, e = t.value;
                return ["" + e, r + ": " + e]
            } catch (t) {
                return logger.error("Cannot extract message for event " + getErrorMessage(n)), []
            }
            return []
        }, n.prototype.jn = function (n) {
            try {
                if (n.stacktrace) {
                    var t = n.stacktrace.frames;
                    return t[t.length - 1].filename
                }
                if (n.exception) {
                    var r = n.exception.values[0].stacktrace.frames;
                    return r[r.length - 1].filename
                }
                return null
            } catch (t) {
                return logger.error("Cannot extract url for event " + getErrorMessage(n)), null
            }
        }, n.id = "InboundFilters", n
    }()
    let bn = Object.freeze({FunctionToString: pn, InboundFilters: yn})
    let wn = getGlobalObject()
    let gn = {Sn: !1, On: !1, kn: !1, Tn: !1}
    let En = "?"
    let jn = /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/

    function xn(n, t) {
        return Object.prototype.hasOwnProperty.call(n, t)
    }

    function _n() {
        return "undefined" == typeof document || null == document.location ? "" : document.location.href
    }

    gn.Sn = function () {
        var n, t, r = [], e = null, i = null;

        function o(n, t, e) {
            var i = null;
            if (!t || gn.On) {
                for (var o in r) if (xn(r, o)) try {
                    r[o](n, t, e)
                } catch (n) {
                    i = n
                }
                if (i) throw i
            }
        }

        function c(t, r, e, c, s) {
            var l = null;
            if (s = isErrorEvent(s) ? s.error : s, t = isErrorEvent(t) ? t.message : t, i) gn.kn.Rn(i, r, e, t), a(); else if (s && isErrorObject(s)) (l = gn.kn(s)).mechanism = "onerror", o(l, !0, s); else {
                var v, d = {url: r, line: e, column: c}, p = t;
                if ("[object String]" === {}.toString.call(t)) {
                    var m = t.match(jn);
                    m && (v = m[1], p = m[2])
                }
                d.func = En, d.context = null, o(l = {
                    name: v,
                    message: p,
                    mode: "onerror",
                    mechanism: "onerror",
                    stack: [u({}, d, {url: d.url || _n()})]
                }, !0, null)
            }
            return !!n && n.apply(this, arguments)
        }

        function s(n) {
            var t = n && (n.detail ? n.detail.reason : n.reason) || n, r = gn.kn(t);
            r.mechanism = "onunhandledrejection", o(r, !0, t)
        }

        function a() {
            var n = i, t = e;
            i = null, e = null, o(n, !1, t)
        }

        function l(n) {
            if (i) {
                if (e === n) return;
                a()
            }
            var t = gn.kn(n);
            throw i = t, e = n, setTimeout(function () {
                e === n && a()
            }, t.incomplete ? 2e3 : 0), n
        }

        return l.Dn = function (n) {
            r.push(n)
        }, l.In = function () {
            !0 !== t && (n = wn.onerror, wn.onerror = c, t = !0)
        }, l.Nn = function () {
            wn.onunhandledrejection = s
        }, l
    }()
    gn.kn = function () {
        function n(n) {
            if (!n || !n.stack) return null;
            for (var t, r, e, i = /^\s*at (?:(.*?) ?\()?((?:file|https?|blob|chrome-extension|native|eval|webpack|<anonymous>|[a-z]:|\/).*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i, o = /^\s*(.*?)(?:\((.*?)\))?(?:^|@)((?:file|https?|blob|chrome|webpack|resource|moz-extension).*?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js))(?::(\d+))?(?::(\d+))?\s*$/i, u = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:file|ms-appx|https?|webpack|blob):.*?):(\d+)(?::(\d+))?\)?\s*$/i, c = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i, s = /\((\S*)(?::(\d+))(?::(\d+))\)/, a = n.stack.split("\n"), f = [], h = /^(.*) is undefined$/.exec(n.message), l = 0, v = a.length; l < v; ++l) {
                if (r = i.exec(a[l])) r[2] && 0 === r[2].indexOf("eval") && (t = s.exec(r[2])) && (r[2] = t[1], r[3] = t[2], r[4] = t[3]), e = {
                    url: r[2],
                    func: r[1] || En,
                    args: [],
                    line: r[3] ? +r[3] : null,
                    column: r[4] ? +r[4] : null
                }; else if (r = u.exec(a[l])) e = {
                    url: r[2],
                    func: r[1] || En,
                    args: [],
                    line: +r[3],
                    column: r[4] ? +r[4] : null
                }; else {
                    if (!(r = o.exec(a[l]))) continue;
                    r[3] && r[3].indexOf(" > eval") > -1 && (t = c.exec(r[3])) ? (r[3] = t[1], r[4] = t[2], r[5] = "") : 0 !== l || r[5] || void 0 === n.columnNumber || (f[0].column = n.columnNumber + 1), e = {
                        url: r[3],
                        func: r[1] || En,
                        args: r[2] ? r[2].split(",") : [],
                        line: r[4] ? +r[4] : null,
                        column: r[5] ? +r[5] : null
                    }
                }
                !e.func && e.line && (e.func = En), e.context = null, f.push(e)
            }
            return f.length ? (f[0] && f[0].line && !f[0].column && h && (f[0].column = null), {
                mode: "stack",
                name: n.name,
                message: n.message,
                stack: f
            }) : null
        }

        function t(n, t, r, e) {
            var i = {url: t, line: r};
            if (i.url && i.line) {
                if (n.incomplete = !1, i.func || (i.func = En), i.context || (i.context = null), / '([^']+)' /.exec(e) && (i.column = null), n.stack.length > 0 && n.stack[0].url === i.url) {
                    if (n.stack[0].line === i.line) return !1;
                    if (!n.stack[0].line && n.stack[0].func === i.func) return n.stack[0].line = i.line, n.stack[0].context = i.context, !1
                }
                return n.stack.unshift(i), n.partial = !0, !0
            }
            return n.incomplete = !0, !1
        }

        function r(n, e) {
            for (var i, o, u = /function\s+([_$a-zA-Z\xA0-\uFFFF][_$a-zA-Z0-9\xA0-\uFFFF]*)?\s*\(/i, c = [], s = {}, a = !1, f = r.caller; f && !a; f = f.caller) if (f !== Tn && f !== gn.Sn) {
                if (o = {
                    url: null,
                    func: En,
                    args: [],
                    line: null,
                    column: null
                }, f.name ? o.func = f.name : (i = u.exec(f.toString())) && (o.func = i[1]), void 0 === o.func) try {
                    o.func = i.input.substring(0, i.input.indexOf("{"))
                } catch (n) {
                }
                s["" + f] ? a = !0 : s["" + f] = !0, c.push(o)
            }
            e && c.splice(0, e);
            var h = {mode: "callers", name: n.name, message: n.message, stack: c};
            return t(h, n.sourceURL || n.fileName, n.line || n.lineNumber, n.message || n.description), h
        }

        function e(t, e) {
            var i = null;
            e = null == e ? 0 : +e;
            try {
                if (i = function (n) {
                    var t = n.stacktrace;
                    if (t) {
                        for (var r, e = / line (\d+).*script (?:in )?(\S+)(?:: in function (\S+))?$/i, i = / line (\d+), column (\d+)\s*(?:in (?:<anonymous function: ([^>]+)>|([^\)]+))\((.*)\))? in (.*):\s*$/i, o = t.split("\n"), u = [], c = 0; c < o.length; c += 2) {
                            var s = null;
                            (r = e.exec(o[c])) ? s = {
                                url: r[2],
                                line: +r[1],
                                column: null,
                                func: r[3],
                                args: []
                            } : (r = i.exec(o[c])) && (s = {
                                url: r[6],
                                line: +r[1],
                                column: +r[2],
                                func: r[3] || r[4],
                                args: r[5] ? r[5].split(",") : []
                            }), s && (!s.func && s.line && (s.func = En), s.line && (s.context = null), s.context || (s.context = [o[c + 1]]), u.push(s))
                        }
                        return u.length ? {mode: "stacktrace", name: n.name, message: n.message, stack: u} : null
                    }
                }(t)) return i
            } catch (n) {
            }
            try {
                if (i = n(t)) return i
            } catch (n) {
            }
            try {
                if (i = function (n) {
                    var t = n.message.split("\n");
                    if (t.length < 4) return null;
                    var r, e = /^\s*Line (\d+) of linked script ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                        i = /^\s*Line (\d+) of inline#(\d+) script in ((?:file|https?|blob)\S+)(?:: in function (\S+))?\s*$/i,
                        o = /^\s*Line (\d+) of function script\s*$/i, u = [],
                        c = wn && wn.document && wn.document.getElementsByTagName("script"), s = [];
                    for (var a in c) xn(c, a) && !c[a].src && s.push(c[a]);
                    for (var f = 2; f < t.length; f += 2) {
                        var h = null;
                        (r = e.exec(t[f])) ? h = {
                            url: r[2],
                            func: r[3],
                            args: [],
                            line: +r[1],
                            column: null
                        } : (r = i.exec(t[f])) ? h = {
                            url: r[3],
                            func: r[4],
                            args: [],
                            line: +r[1],
                            column: null
                        } : (r = o.exec(t[f])) && (h = {
                            url: _n().replace(/#.*$/, ""),
                            func: "",
                            args: [],
                            line: r[1],
                            column: null
                        }), h && (h.func || (h.func = En), h.context = [t[f + 1]], u.push(h))
                    }
                    return u.length ? {mode: "multiline", name: n.name, message: t[0], stack: u} : null
                }(t)) return i
            } catch (n) {
            }
            try {
                if (i = r(t, e + 1)) return i
            } catch (n) {
            }
            return {original: t, name: t.name, message: t.message, mode: "failed"}
        }

        return e.Rn = t, e.An = n, e
    }()
    gn.On = !0
    gn.Tn = 11
    let Sn = gn.Sn.Dn
    let On = gn.Sn.In
    let kn = gn.Sn.Nn
    let Tn = gn.kn
    let Rn = 50

    function Dn(n) {
        var t = Nn(n.stack), r = {type: n.name, value: n.message};
        return t && t.length && (r.stacktrace = {frames: t}), void 0 === r.type && "" === r.value && (r.value = "Unrecoverable error caught"), r
    }

    function In(n) {
        return {exception: {values: [Dn(n)]}}
    }

    function Nn(n) {
        if (!n || !n.length) return [];
        var t = n, r = t[0].func || "", e = t[t.length - 1].func || "";
        return (r.includes("captureMessage") || r.includes("captureException")) && (t = t.slice(1)), e.includes("sentryWrapped") && (t = t.slice(0, -1)), t.map(function (n) {
            return {colno: n.column, filename: n.url || t[0].url, function: n.func || "?", in_app: !0, lineno: n.line}
        }).slice(0, Rn).reverse()
    }

    let An
    let Cn
    let Ln = function () {
        function n(n) {
            this.options = n, this.h = new TaskQueue(30), this.url = new sn(this.options.dsn).getStoreEndpointWithUrlEncodedAuth()
        }

        return n.prototype.sendEvent = function (n) {
            throw new CustomError("Transport Class has to implement `sendEvent` method")
        }, n.prototype.close = function (n) {
            return this.h.drain(n)
        }, n
    }()
    let Mn = getGlobalObject()
    let Fn = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return setSuperClass(e, t), e.prototype.sendEvent = function (t) {
            var r = {body: JSON.stringify(t), method: "POST", referrerPolicy: H() ? "origin" : ""};
            return this.h.add(Mn.fetch(this.url, r).then(function (t) {
                return {status: sentry.Status.fromHttpCode(t.status)}
            }))
        }, e
    }(Ln)
    let Un = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return setSuperClass(e, t), e.prototype.sendEvent = function (t) {
            var r = this;
            return this.h.add(new Promise(function (e, i) {
                var o = new XMLHttpRequest;
                o.onreadystatechange = function () {
                    4 === o.readyState && (200 === o.status && e({status: sentry.Status.fromHttpCode(o.status)}), i(o))
                }, o.open("POST", r.url), o.send(JSON.stringify(t))
            }))
        }, e
    }(Ln)
    let Transports = Object.freeze({BaseTransport: Ln, FetchTransport: Fn, XHRTransport: Un})
    let $n = function (t) {
        function e() {
            return null !== t && t.apply(this, arguments) || this
        }

        return setSuperClass(e, t), e.prototype.mn = function () {
            if (!this.in.dsn) return t.prototype.mn.call(this);
            var n = this.in.transportOptions ? this.in.transportOptions : {dsn: this.in.dsn};
            return this.in.transport ? new this.in.transport(n) : q() ? new Fn(n) : new Un(n)
        }, e.prototype.eventFromException = function (t, r) {
            var e, i, o = this;
            if (isErrorEvent(t) && t.error) return t = t.error, e = In(Tn(t)), SyncPromise.resolve(this.Cn(e, r));
            if (isDomError(t) || (i = t, "[object DOMException]" === Object.prototype.toString.call(i))) {
                var u = t, c = u.name || (isDomError(u) ? "DOMError" : "DOMException"),
                    s = u.message ? c + ": " + u.message : c;
                return this.eventFromMessage(s, sentry.Severity.Error, r).then(function (n) {
                    return setException(n, s), SyncPromise.resolve(o.Cn(n, r))
                })
            }
            if (isErrorObject(t)) return e = In(Tn(t)), SyncPromise.resolve(this.Cn(e, r));
            if (isObject(t) && r && r.syntheticException) return setException(e = function (n, t) {
                var r = Object.keys(n).sort(),
                    e = {extra: {__serialized__: I(n)}, message: "Non-Error exception captured with keys: " + P(r)};
                if (t) {
                    var i = Nn(Tn(t).stack);
                    e.stacktrace = {frames: i}
                }
                return e
            }(t, r.syntheticException), "Custom Object", void 0, {
                handled: !0,
                synthetic: !0,
                type: "generic"
            }), e.level = sentry.Severity.Error, SyncPromise.resolve(this.Cn(e, r));
            var a = t;
            return this.eventFromMessage(a, void 0, r).then(function (t) {
                return setException(t, "" + a, void 0, {
                    handled: !0,
                    synthetic: !0,
                    type: "generic"
                }), t.level = sentry.Severity.Error, SyncPromise.resolve(o.Cn(t, r))
            })
        }, e.prototype.Cn = function (n, t) {
            return u({}, n, {event_id: t && t.event_id})
        }, e.prototype.eventFromMessage = function (t, r, e) {
            void 0 === r && (r = sentry.Severity.Info);
            var i = {event_id: e && e.event_id, level: r, message: t};
            if (this.in.attachStacktrace && e && e.syntheticException) {
                var o = Nn(Tn(e.syntheticException).stack);
                i.stacktrace = {frames: o}
            }
            return SyncPromise.resolve(i)
        }, e
    }(dn)
    let sdkName = "sentry.javascript.browser"
    let BrowserClient = function (n) {
        function BrowserClient(t) {
            if (t === undefined) {
                t = {}
            }
            return n.call(this, $n, t) || this
        }

        setSuperClass(BrowserClient, n)
        BrowserClient.prototype.ln = function (t, r, e) {
            t.platform = t.platform || "javascript"
            t.sdk = u({}, t.sdk, {
                name: sdkName,
                packages: s(t.sdk && t.sdk.packages || [], [{name: "npm:@sentry/browser", version: "5.2.1"}]),
                version: "5.2.1"
            })
            return n.prototype.ln.call(this, t, r, e)
        }
        BrowserClient.prototype.showReportDialog = function (n) {
            void 0 === n && (n = {});
            var t = getGlobalObject().document;
            if (t) if (this.hn()) {
                var r = n.dsn || this.getDsn();
                if (n.eventId) if (r) {
                    var e = t.createElement("script");
                    e.async = !0, e.src = new sn(r).getReportDialogEndpoint(n), n.onLoad && (e.onload = n.onLoad), (t.head || t.body).appendChild(e)
                } else logger.error("Missing `Dsn` option in showReportDialog call"); else logger.error("Missing `eventId` option in showReportDialog call")
            } else logger.error("Trying to call showReportDialog with Sentry Client is disabled")
        }
        return BrowserClient
    }(ln)
    let Wn = 1e3
    let Bn = 0

    function Jn(n, t, r) {
        if (void 0 === t && (t = {}), "function" != typeof n) return n;
        try {
            if (n.__sentry__) return n;
            if (n.__sentry_wrapped__) return n.__sentry_wrapped__
        } catch (t) {
            return n
        }
        var sentryWrapped = function () {
            r && "function" == typeof r && r.apply(this, arguments);
            var e = Array.prototype.slice.call(arguments);
            try {
                var i = e.map(function (n) {
                    return Jn(n, t)
                });
                return n.handleEvent ? n.handleEvent.apply(this, i) : n.apply(this, i)
            } catch (n) {
                throw Bn += 1, setTimeout(function () {
                    Bn -= 1
                }), on(function (r) {
                    r.addEventProcessor(function (n) {
                        var r = u({}, n);
                        return t.mechanism && setException(r, void 0, void 0, t.mechanism), r.extra = u({}, r.extra, {arguments: deepClone(e, 3)}), r
                    }), captureException(n)
                }), n
            }
        };
        try {
            for (var e in n) Object.prototype.hasOwnProperty.call(n, e) && (sentryWrapped[e] = n[e])
        } catch (n) {
        }
        n.prototype = n.prototype || {}, sentryWrapped.prototype = n.prototype, Object.defineProperty(n, "__sentry_wrapped__", {
            enumerable: !1,
            value: sentryWrapped
        }), Object.defineProperties(sentryWrapped, {
            __sentry__: {enumerable: !1, value: !0},
            __sentry_original__: {enumerable: !1, value: n}
        });
        try {
            Object.defineProperty(sentryWrapped, "name", {
                get: function () {
                    return n.name
                }
            })
        } catch (n) {
        }
        return sentryWrapped
    }

    var Xn = 0;

    function Gn(n, t) {
        return void 0 === t && (t = !1), function (r) {
            if (An = void 0, r && Cn !== r) {
                Cn = r;
                var e = function () {
                    var t;
                    try {
                        t = r.target ? Vn(r.target) : Vn(r)
                    } catch (n) {
                        t = "<unknown>"
                    }
                    0 !== t.length && getCurrentHub().addBreadcrumb({category: "ui." + n, message: t}, {
                        event: r,
                        name: n
                    })
                };
                Xn && clearTimeout(Xn), t ? Xn = setTimeout(e) : e()
            }
        }
    }

    function zn() {
        return function (n) {
            var t;
            try {
                t = n.target
            } catch (n) {
                return
            }
            var r = t && t.tagName;
            r && ("INPUT" === r || "TEXTAREA" === r || t.isContentEditable) && (An || Gn("input")(n), clearTimeout(An), An = setTimeout(function () {
                An = void 0
            }, Wn))
        }
    }

    function Vn(n) {
        for (var t, r = n, e = [], i = 0, o = 0, u = " > ".length; r && i++ < 5 && !("html" === (t = Kn(r)) || i > 1 && o + e.length * u + t.length >= 80);) e.push(t), o += t.length, r = r.parentNode;
        return e.reverse().join(" > ")
    }

    function Kn(n) {
        var t, r, e, i, o, u = [];
        if (!n || !n.tagName) return "";
        if (u.push(n.tagName.toLowerCase()), n.id && u.push("#" + n.id), (t = n.className) && isString(t)) for (r = t.split(/\s+/), o = 0; o < r.length; o++) u.push("." + r[o]);
        var c = ["type", "name", "title", "alt"];
        for (o = 0; o < c.length; o++) e = c[o], (i = n.getAttribute(e)) && u.push("[" + e + '="' + i + '"]');
        return u.join("")
    }

    var Zn = function () {
        function n(t) {
            this.name = n.id, this.in = u({onerror: !0, onunhandledrejection: !0}, t)
        }

        return n.prototype.setupOnce = function () {
            Error.stackTraceLimit = 50, Sn(function (t, r, e) {
                if (!(Bn > 0)) {
                    var i = getCurrentHub().getIntegration(n);
                    i && getCurrentHub().captureEvent(i.Ln(t), {data: {stack: t}, originalException: e})
                }
            }), this.in.onerror && (logger.log("Global Handler attached: onerror"), On()), this.in.onunhandledrejection && (logger.log("Global Handler attached: onunhandledrejection"), kn())
        }, n.prototype.Ln = function (n) {
            if (!isString(n.message) && "onunhandledrejection" !== n.mechanism) {
                var t = n.message;
                n.message = t.error && isString(t.error.message) ? t.error.message : "No error message"
            }
            var r = In(n), e = {mode: n.mode};
            n.message && (e.message = n.message), n.name && (e.name = n.name);
            var i = getCurrentHub().getClient(), o = i && i.getOptions().maxValueLength || 250;
            return setException(r, n.original ? substr(JSON.stringify(deepClone(n.original)), o) : "", "onunhandledrejection" === n.mechanism ? "UnhandledRejection" : "Error", {
                data: e,
                handled: !1,
                type: n.mechanism
            }), r
        }, n.id = "GlobalHandlers", n
    }()
    let Qn = function () {
        function n() {
            this.Mn = 0, this.name = n.id
        }

        return n.prototype.Fn = function (n) {
            return function () {
                for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                var e = t[0];
                return t[0] = Jn(e, {
                    mechanism: {
                        data: {function: Yn(n)},
                        handled: !0,
                        type: "instrument"
                    }
                }), n.apply(this, t)
            }
        }, n.prototype.Un = function (n) {
            return function (t) {
                return n(Jn(t, {
                    mechanism: {
                        data: {function: "requestAnimationFrame", handler: Yn(n)},
                        handled: !0,
                        type: "instrument"
                    }
                }))
            }
        }, n.prototype.Pn = function (n) {
            var t = getGlobalObject(), r = t[n] && t[n].prototype;
            r && r.hasOwnProperty && r.hasOwnProperty("addEventListener") && (R(r, "addEventListener", function (t) {
                return function (r, e, i) {
                    try {
                        e.handleEvent = Jn(e.handleEvent.bind(e), {
                            mechanism: {
                                data: {
                                    function: "handleEvent",
                                    handler: Yn(e),
                                    target: n
                                }, handled: !0, type: "instrument"
                            }
                        })
                    } catch (n) {
                    }
                    return t.call(this, r, Jn(e, {
                        mechanism: {
                            data: {
                                function: "addEventListener",
                                handler: Yn(e),
                                target: n
                            }, handled: !0, type: "instrument"
                        }
                    }), i)
                }
            }), R(r, "removeEventListener", function (n) {
                return function (t, r, e) {
                    var i = r;
                    try {
                        i = i && (i.__sentry_wrapped__ || i)
                    } catch (n) {
                    }
                    return n.call(this, t, i, e)
                }
            }))
        }, n.prototype.setupOnce = function () {
            this.Mn = this.Mn;
            var n = getGlobalObject();
            R(n, "setTimeout", this.Fn.bind(this)), R(n, "setInterval", this.Fn.bind(this)), R(n, "requestAnimationFrame", this.Un.bind(this)), ["EventTarget", "Window", "Node", "ApplicationCache", "AudioTrackList", "ChannelMergerNode", "CryptoOperation", "EventSource", "FileReader", "HTMLUnknownElement", "IDBDatabase", "IDBRequest", "IDBTransaction", "KeyOperation", "MediaController", "MessagePort", "ModalWindow", "Notification", "SVGElementInstance", "Screen", "TextTrack", "TextTrackCue", "TextTrackList", "WebSocket", "WebSocketWorker", "Worker", "XMLHttpRequest", "XMLHttpRequestEventTarget", "XMLHttpRequestUpload"].forEach(this.Pn.bind(this))
        }, n.id = "TryCatch", n
    }()

    function Yn(n) {
        try {
            return n && n.name || "<anonymous>"
        } catch (n) {
            return "<anonymous>"
        }
    }

    let nt
    let global = getGlobalObject()
    let rt = function () {
        function t(n) {
            this.name = t.id
            this.in = u({console: !0, dom: !0, fetch: !0, history: !0, sentry: !0, xhr: !0}, n)
        }

        t.prototype.$n = function () {
            "console" in global && ["debug", "info", "warn", "error", "log", "assert"].forEach(function (r) {
                r in global.console && R(global.console, r, function (e) {
                    return function () {
                        for (var i = [], o = 0; o < arguments.length; o++) i[o] = arguments[o];
                        var u = {
                            category: "console",
                            data: {extra: {arguments: deepClone(i, 3)}, logger: "console"},
                            level: sentry.Severity.fromString(r),
                            message: serializeArray(i, " ")
                        };
                        "assert" === r && !1 === i[0] && (u.message = "Assertion failed: " + (serializeArray(i.slice(1), " ") || "console.assert"), u.data.extra.arguments = deepClone(i.slice(1), 3)), t.addBreadcrumb(u, {
                            input: i,
                            level: r
                        }), e && Function.prototype.apply.call(e, global.console, i)
                    }
                })
            })
        }
        t.prototype.qn = function () {
            if ("document" in global) {
                global.document.addEventListener("click", Gn("click"), false)
                global.document.addEventListener("keypress", zn(), false)
                ;["EventTarget", "Node"].forEach(function (n) {
                    let proto = global[n] && global[n].prototype
                    if (proto && proto.hasOwnProperty && proto.hasOwnProperty("addEventListener")) {
                        R(proto, "addEventListener", function (n) {
                            return function (t, r, e) {
                                return r && r.handleEvent ? ("click" === t && R(r, "handleEvent", function (n) {
                                    return function (t) {
                                        return Gn("click")(t), n.call(this, t)
                                    }
                                }), "keypress" === t && R(r, "handleEvent", zn())) : ("click" === t && Gn("click", !0)(this), "keypress" === t && zn()(this)), n.call(this, t, r, e)
                            }
                        })
                        R(proto, "removeEventListener", function (n) {
                            return function (t, r, e) {
                                var i = r;
                                try {
                                    i = i && (i.__sentry_wrapped__ || i)
                                } catch (n) {
                                }
                                return n.call(this, t, i, e)
                            }
                        })
                    }
                })
            }
        }
        t.prototype.Hn = function () {
            if (q() && -1 !== getGlobalObject().fetch.toString().indexOf("native")) {
                R(global, "fetch", function (r) {
                    return function () {
                        let args = []
                        for (let i = 0; i < arguments.length; i++) {
                            args[i] = arguments[i]
                        }
                        let url
                        let u = args[0]
                        let method = "GET"
                        if (typeof u === "string") {
                            url = u
                        } else if ("Request" in global && u instanceof Request) {
                            url = u.url
                            if (u.method) {
                                method = u.method
                            }
                        } else {
                            url = String(u)
                        }

                        if (args[1] && args[1].method) {
                            method = args[1].method
                        }
                        let client = getCurrentHub().getClient()
                        let dsn = client && client.getDsn()
                        if (dsn) {
                            let f = new sn(dsn).getStoreEndpoint();
                            if (f && url.includes(f)) {
                                if ("POST" === method && args[1] && args[1].body) {
                                    et(args[1].body)
                                }
                                return r.apply(global, args)
                            }
                        }
                        let h = {method: method, url: url};
                        return r.apply(global, args).then(function (resp) {
                            h.status_code = resp.status
                            t.addBreadcrumb({
                                category: "fetch",
                                data: h,
                                type: "http"
                            }, {input: args, response: resp})
                            return  resp
                        }).catch(function (r) {
                            throw t.addBreadcrumb({
                                category: "fetch",
                                data: h,
                                level: sentry.Severity.Error,
                                type: "http"
                            }, {error: r, input: args}), r
                        })
                    }
                })
            }

        }
        t.prototype.Wn = function () {
            var n = this;
            if (r = getGlobalObject(), e = r.chrome, i = e && e.app && e.app.runtime, o = "history" in r && !!r.history.pushState && !!r.history.replaceState, !i && o) {
                var r, e, i, o, u = function (n, r) {
                    var e = parseUrl(global.location.href), i = parseUrl(r), o = parseUrl(n);
                    o.path || (o = e), nt = r, e.protocol === i.protocol && e.host === i.host && (r = i.relative), e.protocol === o.protocol && e.host === o.host && (n = o.relative), t.addBreadcrumb({
                        category: "navigation",
                        data: {from: n, to: r}
                    })
                }, c = global.onpopstate;
                global.onpopstate = function () {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    var e = global.location.href;
                    if (u(nt, e), c) return c.apply(n, t)
                }, R(global.history, "pushState", s), R(global.history, "replaceState", s)
            }

            function s(n) {
                return function () {
                    for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                    var e = t.length > 2 ? t[2] : void 0;
                    return e && u(nt, String(e)), n.apply(this, t)
                }
            }
        }
        t.prototype.Bn = function () {
            if ("XMLHttpRequest" in global) {
                var n = XMLHttpRequest.prototype;
                R(n, "open", function (n) {
                    return function () {
                        for (var t = [], r = 0; r < arguments.length; r++) t[r] = arguments[r];
                        var e = t[1];
                        this.__sentry_xhr__ = {method: t[0], url: t[1]};
                        var i = getCurrentHub().getClient(), o = i && i.getDsn();
                        if (o) {
                            var u = new sn(o).getStoreEndpoint();
                            isString(e) && u && e.includes(u) && (this.__sentry_own_request__ = !0)
                        }
                        return n.apply(this, t)
                    }
                }), R(n, "send", function (n) {
                    return function () {
                        for (var r = [], e = 0; e < arguments.length; e++) r[e] = arguments[e];
                        var i = this;

                        function o() {
                            if (4 === i.readyState) {
                                if (i.__sentry_own_request__) return;
                                try {
                                    i.__sentry_xhr__ && (i.__sentry_xhr__.status_code = i.status)
                                } catch (n) {
                                }
                                t.addBreadcrumb({category: "xhr", data: i.__sentry_xhr__, type: "http"}, {xhr: i})
                            }
                        }

                        return i.__sentry_own_request__ && et(r[0]), ["onload", "onerror", "onprogress"].forEach(function (n) {
                            !function (n, t) {
                                n in t && "function" == typeof t[n] && R(t, n, function (t) {
                                    return Jn(t, {
                                        mechanism: {
                                            data: {
                                                function: n,
                                                handler: t && t.name || "<anonymous>"
                                            }, handled: !0, type: "instrument"
                                        }
                                    })
                                })
                            }(n, i)
                        }), "onreadystatechange" in i && "function" == typeof i.onreadystatechange ? R(i, "onreadystatechange", function (n) {
                            return Jn(n, {
                                mechanism: {
                                    data: {
                                        function: "onreadystatechange",
                                        handler: n && n.name || "<anonymous>"
                                    }, handled: !0, type: "instrument"
                                }
                            }, o)
                        }) : i.onreadystatechange = o, n.apply(this, r)
                    }
                })
            }
        }
        t.addBreadcrumb = function (n, r) {
            getCurrentHub().getIntegration(t) && getCurrentHub().addBreadcrumb(n, r)
        }
        t.prototype.setupOnce = function () {
            this.in.console && this.$n(), this.in.dom && this.qn(), this.in.xhr && this.Bn(), this.in.fetch && this.Hn(), this.in.history && this.Wn()
        }
        t.id = "Breadcrumbs"
        return t
    }()

    function et(t) {
        try {
            var r = JSON.parse(t);
            rt.addBreadcrumb({
                category: "sentry",
                event_id: r.event_id,
                level: r.level || sentry.Severity.fromString("error"),
                message: getErrorMessage(r)
            }, {event: r})
        } catch (n) {
            logger.error("Error while adding sentry type breadcrumb")
        }
    }

    let it = "cause"
    let ot = 5
    let ut = function () {
        function n(t) {
            void 0 === t && (t = {}), this.name = n.id, this.Jn = t.key || it, this.s = t.limit || ot
        }

        return n.prototype.setupOnce = function () {
            addGlobalEventProcessor(function (t, r) {
                var e = getCurrentHub().getIntegration(n);
                return e ? e.Xn(t, r) : t
            })
        }, n.prototype.Xn = function (n, t) {
            if (!(n.exception && n.exception.values && t && t.originalException instanceof Error)) return n;
            var r = this.Gn(t.originalException, this.Jn);
            return n.exception.values = s(r, n.exception.values), n
        }, n.prototype.Gn = function (n, t, r) {
            if (void 0 === r && (r = []), !(n[t] instanceof Error) || r.length + 1 >= this.s) return r;
            var e = Dn(Tn(n[t]));
            return this.Gn(n[t], t, s([e], r))
        }, n.id = "LinkedErrors", n
    }()
    let ct = getGlobalObject()
    let st = function () {
        function n() {
            this.name = n.id
        }

        return n.prototype.setupOnce = function () {
            addGlobalEventProcessor(function (t) {
                if (getCurrentHub().getIntegration(n)) {
                    if (!ct.navigator || !ct.location) return t;
                    var r = t.request || {};
                    return r.url = r.url || ct.location.href, r.headers = r.headers || {}, r.headers["User-Agent"] = ct.navigator.userAgent, u({}, t, {request: r})
                }
                return t
            })
        }, n.id = "UserAgent", n
    }()
    let at = Object.freeze({GlobalHandlers: Zn, TryCatch: Qn, Breadcrumbs: rt, LinkedErrors: ut, UserAgent: st})
    let defaultIntegrations = [new yn, new pn, new Qn, new rt, new Zn, new ut, new st]

    let ht = {}
    let lt = getGlobalObject()
    lt.Sentry && lt.Sentry.Integrations && (ht = lt.Sentry.Integrations)

    let Integrations = u({}, ht, bn, at)
    sentry.BrowserClient = BrowserClient
    sentry.Hub = SentryHub
    sentry.Integrations = Integrations
    sentry.SDK_NAME = sdkName
    sentry.SDK_VERSION = "5.2.1"
    sentry.Scope = Scope
    sentry.Transports = Transports
    sentry.addBreadcrumb = function (n) {
        en("addBreadcrumb", n)
    }
    sentry.addGlobalEventProcessor = addGlobalEventProcessor
    sentry.captureEvent = function (n) {
        return en("captureEvent", n)
    }
    sentry.captureException = captureException
    sentry.captureMessage = function (n, t) {
        var r;
        try {
            throw new Error(n)
        } catch (n) {
            r = n
        }
        return en("captureMessage", n, t, {originalException: n, syntheticException: r})
    }
    sentry.close = function (n) {
        const client = getCurrentHub().getClient();
        return client ? client.close(n) : Promise.reject(false)
    }
    sentry.configureScope = function (n) {
        en("configureScope", n)
    }
    sentry.defaultIntegrations = defaultIntegrations
    sentry.flush = function (n) {
        const client = getCurrentHub().getClient();
        return client ? client.flush(n) : Promise.reject(false)
    }
    sentry.forceLoad = function () {
    }
    sentry.getCurrentHub = getCurrentHub
    sentry.getHubFromCarrier = getHubFromCarrier
    sentry.init = function (n) {
        if (n === undefined) {
            n = {}
        }
        if (n.defaultIntegrations === undefined) {
            n.defaultIntegrations = defaultIntegrations
        }

        if (n.debug) {
            logger.enable()
        }
        getCurrentHub().bindClient(new BrowserClient(n))
    }
    sentry.lastEventId = function () {
        return getCurrentHub().lastEventId()
    }
    sentry.onLoad = function (n) {
        n()
    }
    sentry.showReportDialog = function (n) {
        void 0 === n && (n = {})
        n.eventId || (n.eventId = getCurrentHub().lastEventId())
        const client = getCurrentHub().getClient()
        client && client.showReportDialog(n)
    }
    sentry.withScope = on
    sentry.wrap = function (n) {
        Jn(n)()
    }
    return sentry
}({})
