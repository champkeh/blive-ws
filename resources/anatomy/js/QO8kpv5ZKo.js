parcelRequire = function (modules, cache, entries, globalName) {
    let globalError
    let o = "function" === typeof parcelRequire && parcelRequire
    const nativeRequire = "function" === typeof require && require

    function customRequire(id, n) {
        function p(e) {
            return customRequire(p.resolve(e))
        }

        if (!cache[id]) {
            if (!modules[id]) {
                let i = "function" === typeof parcelRequire && parcelRequire;
                if (!n && i) {
                    return i(id, true)
                }
                if (o) {
                    return o(id, true)
                }
                if (nativeRequire && "string" === typeof id) {
                    return nativeRequire(id)
                }

                const error = new Error("Cannot find module '" + id + "'")
                error.code = "MODULE_NOT_FOUND"
                throw error
            }
            p.resolve = function (r) {
                return modules[id][1][r] || r
            }
            p.cache = {}
            const module = cache[id] = new customRequire.Module(id)
            modules[id][0].call(module.exports, p, module, module.exports, this)
        }
        return cache[id].exports
    }

    customRequire.isParcelRequire = true
    customRequire.Module = function (id) {
        this.id = id
        this.bundle = customRequire
        this.exports = {}
    }
    customRequire.modules = modules
    customRequire.cache = cache
    customRequire.parent = o
    customRequire.register = function (id, exports) {
        modules[id] = [function (require, module) {
            module.exports = exports
        }, {}]
    }

    for (let c = 0; c < entries.length; c++) {
        try {
            customRequire(entries[c])
        } catch (e) {
            globalError || (globalError = e)
        }
    }
    if (entries.length) {
        let l = customRequire(entries[entries.length - 1])
        "object" === typeof exports && "undefined" !== typeof module
            ? module.exports = l
            : "function" == typeof define && define.amd
                ? define(function () {
                    return l
                })
                : globalName && (this[globalName] = l)
    }
    parcelRequire = customRequire
    if (globalError) {
        throw globalError
    }

    return customRequire
}({
    "lMVo": [function (require, module, exports) {
        let assign = this && this.__assign || function () {
            return (assign = Object.assign || function (e) {
                for (var n, t = 1, i = arguments.length; t < i; t++) for (var o in n = arguments[t]) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                return e
            }).apply(this, arguments)
        }
        exports.__esModule = true

        window._BiliIntegration_ = function () {
            function BiliIntegration(options = {}) {
                this.name = "CommonFilter"
                this._options = {
                    ignoreTypeList: [],
                    ignoreMessageList: [],
                    ignoreFileNameList: [],
                    ignoreFunctionList: []
                }
                this._options = assign({}, options)
                this._options.ignoreTypeList = BiliIntegration.IGNORE_TYPE_LIST.concat(options.ignoreTypeList || [])
                this._options.ignoreMessageList = BiliIntegration.IGNORE_MESSAGE_LIST.concat(options.ignoreMessageList || [])
                this._options.ignoreFileNameList = BiliIntegration.IGNORE_FILENAME_LIST.concat(options.ignoreFileNameList || [])
                this._options.ignoreFunctionList = BiliIntegration.IGNORE_FUNCTION_LIST.concat(options.ignoreFunctionList || [])
            }

            BiliIntegration.prototype._filter = function (e, n) {
                return [
                    "Failed to construct 'RTCPeerConnection'",
                    "RTCPeerConnection is not defined",
                    "Failed to execute 'createDataChannel' on 'RTCPeerConnection'",
                    "this.pc.addEventListener",
                    "Cannot read properties of undefined (reading 'Config')"
                ].some(n => {
                    return -1 !== e.indexOf(n)
                }) || [".js"].some(e => {
                    return -1 === n.indexOf(e)
                }) || ["PromiseRejectionEvent"].some(n => {
                    return -1 !== e.indexOf(n)
                })
            }
            BiliIntegration.prototype.setupOnce = function (e, t) {
                var i = this;
                e(function (e) {
                    var o = t().getIntegration(BiliIntegration);
                    if (o && e.exception) {
                        var r = o._options, s = e.exception.values[0], c = s.type, a = s.value,
                            u = s.stacktrace.frames,
                            _ = u.reduce(function (e, n) {
                                return "".concat(e, ", ").concat("string" == typeof n ? n : n.abs_path || n.filename || n)
                            }, ""), f = u.reduce(function (e, n) {
                                return "".concat(e, ", ").concat("string" == typeof n ? n : n.function || n)
                            }, ""), p = r.ignoreTypeList.some(function (e) {
                                return -1 !== c.indexOf(e)
                            }), g = r.ignoreMessageList.some(function (e) {
                                return -1 !== a.indexOf(e)
                            }), E = r.ignoreFileNameList.some(function (e) {
                                return -1 !== _.indexOf(e)
                            }), l = r.ignoreFunctionList.some(function (e) {
                                return -1 !== f.indexOf(e)
                            });
                        return i._filter(a, _) || p || g || E || l ? null : e
                    }
                    return e
                })
            }

            BiliIntegration.IGNORE_TYPE_LIST = [
                "SecurityError",
                "NS_ERROR_STORAGE_IOERR",
                "NS_ERROR_FILE_NO_DEVICE_SPACE",
                "NS_ERROR_FILE_CORRUPTED",
            ]
            BiliIntegration.IGNORE_MESSAGE_LIST = [
                "Network Error",
                "$ is not defined",
                "timeout of",
                "apply is not a function",
            ]
            BiliIntegration.IGNORE_FILENAME_LIST = [
                "file://",
                "-extension://",
                "/bfs/seed/log/report/log-reporter.js",
                "vue-router/dist/vue-router.esm",
                "global code",
                "(<anonymous>)",
                "applyUI",
                "/common/js/xazx.min.js",
            ]
            BiliIntegration.IGNORE_FUNCTION_LIST = ["applyUI"]
            BiliIntegration.id = "CommonFilter"

            return BiliIntegration
        }()
    }, {}]
}, {}, ["lMVo"], null)
