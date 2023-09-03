/**
 * id: GTYV
 * path: @bilibili-live/sisters-p2p
 */

let define
let process = require("process")
let t
let e = require("process")
let n = "2022-12-23 03:40:09"

!function (e, n) {
    "object" == typeof exports && "object" == typeof module ? module.exports = n() : "function" == typeof t && t.amd ? t([], n) : "object" == typeof exports ? exports["sisters-player"] = n() : e["sisters-player"] = n()
}(window, function () {
    return function (t) {
        var e = {};

        function n(r) {
            if (e[r]) return e[r].exports;
            var o = e[r] = {i: r, l: !1, exports: {}};
            return t[r].call(o.exports, o, o.exports, n), o.l = !0, o.exports
        }

        return n.m = t, n.c = e, n.d = function (t, e, r) {
            n.o(t, e) || Object.defineProperty(t, e, {enumerable: !0, get: r})
        }, n.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, n.t = function (t, e) {
            if (1 & e && (t = n(t)), 8 & e) return t;
            if (4 & e && "object" == typeof t && t && t.__esModule) return t;
            var r = Object.create(null);
            if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: t
            }), 2 & e && "string" != typeof t) for (var o in t) n.d(r, o, function (e) {
                return t[e]
            }.bind(null, o));
            return r
        }, n.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return n.d(e, "a", e), e
        }, n.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, n.p = "", n(n.s = 137)
    }([
        function (t, e, n) {
            var r = n(136), o = n(186);
            t.exports = function (t, e, n) {
                return (e = o(e)) in t ? r(t, e, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : t[e] = n, t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        function (t, e, n) {
            var r = n(327)();
            t.exports = r;
            try {
                regeneratorRuntime = r
            } catch (t) {
                "object" == typeof globalThis ? globalThis.regeneratorRuntime = r : Function("r", "regeneratorRuntime = r")(r)
            }
        },
        function (t, e) {
            t.exports = function (t, e) {
                if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        function (t, e, n) {
            var r = n(136), o = n(186);

            function i(t, e) {
                for (var n = 0; n < e.length; n++) {
                    var i = e[n];
                    i.enumerable = i.enumerable || !1, i.configurable = !0, "value" in i && (i.writable = !0), r(t, o(i.key), i)
                }
            }

            t.exports = function (t, e, n) {
                return e && i(t.prototype, e), n && i(t, n), r(t, "prototype", {writable: !1}), t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        function (t, e, n) {
            t.exports = n(175)
        },
        function (t, e, n) {
            t.exports = n(187)
        },
        function (t, e, n) {
            var r = n(174);

            function o(t, e, n, o, i, a, s) {
                try {
                    var c = t[a](s), u = c.value
                } catch (t) {
                    return void n(t)
                }
                c.done ? e(u) : r.resolve(u).then(o, i)
            }

            t.exports = function (t) {
                return function () {
                    var e = this, n = arguments;
                    return new r(function (r, i) {
                        var a = t.apply(e, n);

                        function s(t) {
                            o(a, r, i, s, c, "next", t)
                        }

                        function c(t) {
                            o(a, r, i, s, c, "throw", t)
                        }

                        s(void 0)
                    })
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        function (t, e, n) {
            "use strict";
            var r = n(15), o = n(84), i = n(101), a = n(18), s = n(85).f, c = n(145), u = n(16), l = n(43), f = n(48),
                h = n(25), p = function (t) {
                    var e = function (n, r, i) {
                        if (this instanceof e) {
                            switch (arguments.length) {
                                case 0:
                                    return new t;
                                case 1:
                                    return new t(n);
                                case 2:
                                    return new t(n, r)
                            }
                            return new t(n, r, i)
                        }
                        return o(t, this, arguments)
                    };
                    return e.prototype = t.prototype, e
                };
            t.exports = function (t, e) {
                var n, o, d, v, g, y, x, C, m = t.target, w = t.global, k = t.stat, b = t.proto,
                    S = w ? r : k ? r[m] : (r[m] || {}).prototype, P = w ? u : u[m] || f(u, m, {})[m], A = P.prototype;
                for (d in e) n = !c(w ? d : m + (k ? "." : "#") + d, t.forced) && S && h(S, d), g = P[d], n && (y = t.dontCallGetSet ? (C = s(S, d)) && C.value : S[d]), v = n && y ? y : e[d], n && typeof g == typeof v || (x = t.bind && n ? l(v, r) : t.wrap && n ? p(v) : b && a(v) ? i(v) : v, (t.sham || v && v.sham || g && g.sham) && f(x, "sham", !0), f(P, d, x), b && (h(u, o = m + "Prototype") || f(u, o, {}), f(u[o], d, v), t.real && A && !A[d] && f(A, d, v)))
            }
        },
        function (t, e, n) {
            "use strict";
            (function (t) {
                n.d(e, "b", function () {
                    return r
                }), n.d(e, "a", function () {
                    return o
                }), n.d(e, "c", function () {
                    return a
                }), n.d(e, "d", function () {
                    return W
                });
                var r, o, i, a, s = n(40), c = n.n(s), u = n(119), l = n.n(u), f = n(120), h = n.n(f), p = n(81),
                    d = n.n(p), v = n(82), g = n.n(v), y = n(2), x = n.n(y), C = n(3), m = n.n(C), w = n(0), k = n.n(w),
                    b = n(32), S = n.n(b), P = n(5), A = n.n(P), E = n(29), R = n.n(E), I = n(9), T = n.n(I), D = n(14),
                    L = n.n(D), F = n(41), O = n.n(F), U = n(26), N = n(201), M = n(11);

                function B(t, e) {
                    var n = void 0 !== h.a && d()(t) || t["@@iterator"];
                    if (!n) {
                        if (g()(t) || (n = function (t, e) {
                            var n;
                            if (t) {
                                if ("string" == typeof t) return _(t, e);
                                var r = c()(n = Object.prototype.toString.call(t)).call(n, 8, -1);
                                return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? l()(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? _(t, e) : void 0
                            }
                        }(t)) || e && t && "number" == typeof t.length) {
                            n && (t = n);
                            var r = 0, o = function () {
                            };
                            return {
                                s: o, n: function () {
                                    return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                                }, e: function (t) {
                                    throw t
                                }, f: o
                            }
                        }
                        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                    }
                    var i, a = !0, s = !1;
                    return {
                        s: function () {
                            n = n.call(t)
                        }, n: function () {
                            var t = n.next();
                            return a = t.done, t
                        }, e: function (t) {
                            s = !0, i = t
                        }, f: function () {
                            try {
                                a || null == n.return || n.return()
                            } finally {
                                if (s) throw i
                            }
                        }
                    }
                }

                function _(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                    return r
                }

                !function (t) {
                    t[t.SERVER = 0] = "SERVER", t[t.P2P = 1] = "P2P", t[t.TYPE_COUNT = 2] = "TYPE_COUNT"
                }(r || (r = {})), function (t) {
                    t[t.SEED = 0] = "SEED", t[t.EXCHANGE = 1] = "EXCHANGE", t[t.LACKED = 2] = "LACKED", t[t.TYPE_COUNT = 3] = "TYPE_COUNT"
                }(o || (o = {})), function (t) {
                    t[t.SUCCESS = 0] = "SUCCESS", t[t.REPEAT_SETTINGS = 1] = "REPEAT_SETTINGS", t[t.UNDEFINED = 2] = "UNDEFINED", t[t.DATALENGTH_ERROR = 3] = "DATALENGTH_ERROR", t[t.NULL = 4] = "NULL", t[t.REVERTED_DUE_P2P = 5] = "REVERTED_DUE_P2P"
                }(i || (i = {})), function (t) {
                    t[t.END_SUCCESS = 0] = "END_SUCCESS", t[t.END_ERROR = 1] = "END_ERROR", t[t.NULL = 2] = "NULL"
                }(a || (a = {}));
                var z = function () {
                    function e(t) {
                        x()(this, e), k()(this, "data", void 0), k()(this, "status", void 0), k()(this, "future", void 0), k()(this, "dataSourceType", void 0), k()(this, "dataRoleType", void 0), k()(this, "dataSourcePeerId", void 0), this.data = t, this.status = i.NULL, this.future = new U.b
                    }

                    return m()(e, [{
                        key: "getGhostPeerId", value: function () {
                            return this.dataSourcePeerId
                        }
                    }, {
                        key: "onDataResolved", value: function (t) {
                            this.future.onResolved(t)
                        }
                    }, {
                        key: "setData", value: function (e, n, r, o) {
                            return this.status == i.SUCCESS ? i.REPEAT_SETTINGS : (void 0 !== e && e.byteLength == this.data.byteLength ? (void 0 !== o && (this.dataSourcePeerId = o), this.status == i.REVERTED_DUE_P2P && t.from(e.buffer).equals(t.from(this.data.buffer)) && (this.dataSourcePeerId = void 0), this.data.set(e), this.dataSourceType = n, this.dataRoleType = r, this.status = i.SUCCESS, this.future.setResult(this.data)) : null == e ? (this.status = i.UNDEFINED, this.future.setResult(void 0)) : void 0 !== e && e.byteLength !== this.data.byteLength && (this.status = i.DATALENGTH_ERROR), this.status)
                        }
                    }, {
                        key: "isSucceed", value: function () {
                            return this.status == i.SUCCESS
                        }
                    }, {
                        key: "resetStatus", value: function () {
                            return this.dataSourceType == r.P2P && (this.status = i.REVERTED_DUE_P2P, !0)
                        }
                    }]), e
                }(), j = m()(function t() {
                    x()(this, t), k()(this, "startBlockId", void 0), k()(this, "nextFinishedBlockId", void 0), k()(this, "curCount", void 0), k()(this, "maxCount", void 0), k()(this, "sliceSize", void 0), k()(this, "shareSize", void 0), k()(this, "statArray", void 0), k()(this, "roleArray", void 0), this.statArray = new Array;
                    for (var e = 0; e < r.TYPE_COUNT; ++e) this.statArray[e] = 0;
                    for (this.roleArray = new Array, e = 0; e < o.TYPE_COUNT; ++e) this.roleArray[e] = 0
                }), q = function () {
                    function t(e, n, i, s) {
                        x()(this, t), k()(this, "p2pContext", void 0), k()(this, "blockCount", void 0), k()(this, "fragmentName", void 0), k()(this, "fragmentSize", void 0), k()(this, "buffer", void 0), k()(this, "fragStat", void 0), k()(this, "fragEndErrorMsg", void 0), k()(this, "trustedCrc", void 0), k()(this, "requestDownloadToSeedbox", void 0), k()(this, "blockSize", void 0), k()(this, "blocks", void 0), k()(this, "sliceProgressArray", void 0), k()(this, "blockFinishCount", void 0), k()(this, "future", void 0), k()(this, "statArray", void 0), k()(this, "roleArray", void 0), k()(this, "distances", void 0), k()(this, "shareSize", void 0), k()(this, "shareQuota", void 0), k()(this, "sliceBlockRangeRecord", {}), k()(this, "sliceIdsInCharge", void 0), k()(this, "ghostPeerIds", void 0), k()(this, "queryServerNum", void 0), k()(this, "crcErrorCallback", void 0), k()(this, "isCrcErrorToRefetch", !1), this.p2pContext = e, this.fragmentName = n, this.fragmentSize = i, this.requestDownloadToSeedbox = !0, this.trustedCrc = s, this.fragStat = a.NULL, this.blocks = new Array, this.statArray = new Array;
                        for (var c = 0; c < r.TYPE_COUNT; ++c) this.statArray[c] = 0;
                        for (this.roleArray = new Array, c = 0; c < o.TYPE_COUNT; ++c) this.roleArray[c] = 0;
                        for (this.sliceProgressArray = new Array, c = 0; c < this.p2pContext.Config.sliceCount; ++c) this.sliceProgressArray[c] = new j;
                        this.blockFinishCount = 0, this.future = new U.b, this.shareSize = 0, this.sliceIdsInCharge = new S.a, this.ghostPeerIds = new S.a, this.queryServerNum = 0, this.initFragmentBySize(i)
                    }

                    return m()(t, [{
                        key: "doOnceQueryServer", value: function () {
                            this.queryServerNum++
                        }
                    }, {
                        key: "getQueryServerNum", value: function () {
                            return this.queryServerNum
                        }
                    }, {
                        key: "setCrcErrorCallback", value: function (t) {
                            this.crcErrorCallback = t
                        }
                    }, {
                        key: "setSliceIds", value: function (t) {
                            var e = this;
                            A()(t).call(t, function (t) {
                                e.sliceIdsInCharge.add(t)
                            })
                        }
                    }, {
                        key: "getSliceIds", value: function () {
                            return this.sliceIdsInCharge
                        }
                    }, {
                        key: "getStatArray", value: function () {
                            return this.statArray
                        }
                    }, {
                        key: "getRoleArray", value: function () {
                            return this.roleArray
                        }
                    }, {
                        key: "getDistances", value: function () {
                            return this.distances
                        }
                    }, {
                        key: "getBlockCount", value: function () {
                            return this.blockCount
                        }
                    }, {
                        key: "getBlockSize", value: function () {
                            return this.blockSize
                        }
                    }, {
                        key: "getBlockByteRange", value: function (t) {
                            if (t < 0 || t >= this.blockCount) return new Array;
                            var e = this.blockSize * t, n = Math.min(this.fragmentSize, e + this.blockSize);
                            return new Array(e, n)
                        }
                    }, {
                        key: "getSliceBlockRange", value: function (t) {
                            var e = this.sliceBlockRangeRecord[t];
                            return t < 0 || t >= this.p2pContext.Config.sliceCount || null == e ? new Array : new Array(e.begin, e.end)
                        }
                    }, {
                        key: "getBlockBelongSlice", value: function (t) {
                            if (t < 0 || t >= this.blockCount) return -1;
                            for (var e = 0; e < this.p2pContext.Config.sliceCount; ++e) {
                                var n = this.sliceBlockRangeRecord[e];
                                if (null != n && t < n.end) return e
                            }
                            return -1
                        }
                    }, {
                        key: "getSliceByteRange", value: function (t) {
                            var e = this.getSliceBlockRange(t);
                            if (2 !== e.length || e[0] == e[1]) return new Array(0, 0);
                            var n = this.getBlockByteRange(e[0]), r = this.getBlockByteRange(e[1] - 1);
                            return 0 === n.length || 0 === r.length ? new Array(0, 0) : new Array(n[0], r[1])
                        }
                    }, {
                        key: "getBlock", value: function (t) {
                            if (!(t < 0 || t >= this.blockCount || t >= this.blocks.length)) return this.blocks[t]
                        }
                    }, {
                        key: "initFragmentBySize", value: function (t) {
                            var e;
                            t < this.p2pContext.Config.blockSize * this.p2pContext.Config.sliceCount ? (this.blockCount = this.p2pContext.Config.sliceCount, this.blockSize = Math.ceil(this.fragmentSize / this.blockCount)) : (this.blockSize = this.p2pContext.Config.blockSize, this.blockCount = Math.ceil(t / this.blockSize)), this.buffer = new Uint8Array(t), this.distances = new Uint8Array(this.blockCount);
                            for (var n = 0; n < this.blockCount; ++n) this.distances[n] |= 127;
                            var r, o = B(this.getSliceIds());
                            try {
                                for (o.s(); !(r = o.n()).done;) for (var i = r.value, a = this.getSliceBlockRange(i), s = a[0]; s < a[1]; ++s) this.distances[s] |= 128
                            } catch (t) {
                                o.e(t)
                            } finally {
                                o.f()
                            }
                            var c = this.p2pContext.Config.fragmentShareOverride;
                            !0 === this.p2pContext.Config.multiTabsShareLimitEnable && this.p2pContext.totalSistersCount >= 1 && this.p2pContext.totalSistersCount < 32 && (c /= this.p2pContext.totalSistersCount), this.shareQuota = this.fragmentSize * c, this.shareQuota > this.p2pContext.Config.fragmentShareOverrideMaxBytes && (this.shareQuota = this.p2pContext.Config.fragmentShareOverrideMaxBytes);
                            var u = this.p2pContext.P2P.P2PDataShareQuotaController.takeShareQuota(t * this.p2pContext.Config.fragmentExtraShareRatio);
                            this.addShareQuotaBytes(u);
                            for (var l = 0; l < this.p2pContext.Config.sliceCount; ++l) {
                                var f = Math.floor(this.blockCount / this.p2pContext.Config.sliceCount * l),
                                    h = Math.floor(this.blockCount / this.p2pContext.Config.sliceCount * (l + 1));
                                this.sliceBlockRangeRecord[l] = {begin: f, end: h}
                            }
                            for (R()(e = this.blocks).call(e, 0, this.blocks.length), l = 0; l < this.blockCount; ++l) {
                                var p = this.getBlockByteRange(l);
                                this.blocks.push(new z(this.buffer.subarray(p[0], p[1])))
                            }
                            for (l = 0; l < this.p2pContext.Config.sliceCount; ++l) {
                                var d = this.getSliceBlockRange(l);
                                this.sliceProgressArray[l].curCount = 0, this.sliceProgressArray[l].maxCount = d[1] - d[0], this.sliceProgressArray[l].startBlockId = d[0], this.sliceProgressArray[l].nextFinishedBlockId = d[0];
                                var v = this.getSliceByteRange(l);
                                this.sliceProgressArray[l].sliceSize = v[1] - v[0], this.sliceProgressArray[l].shareSize = 0
                            }
                        }
                    }, {
                        key: "getFragmentName", value: function () {
                            return this.fragmentName
                        }
                    }, {
                        key: "getFragmentSize", value: function () {
                            return this.fragmentSize
                        }
                    }, {
                        key: "getFragmentData", value: function () {
                            return this.getFragStat() == a.END_SUCCESS ? this.buffer : void 0
                        }
                    }, {
                        key: "getFragmentCRC32", value: function () {
                            return this.trustedCrc
                        }
                    }, {
                        key: "enableUseSeedbox", value: function (t) {
                            this.requestDownloadToSeedbox = t
                        }
                    }, {
                        key: "isUseSeedboxEnabled", value: function () {
                            return this.requestDownloadToSeedbox
                        }
                    }, {
                        key: "setNonP2PFragmentData", value: function (t, e, n) {
                            if (null != t) for (var o = 0; o < this.blockCount; o++) {
                                var i = this.getBlockByteRange(o);
                                if (i.length > 0) {
                                    var a = t.subarray(i[0], i[1]);
                                    this.setBlockData(o, a, r.SERVER, e) || this.p2pContext.P2PDataCollectionStatus.addWastedDataSize(a.byteLength, M.e.CDN_REPEAT)
                                }
                            } else this.setFragmentData(t, n)
                        }
                    }, {
                        key: "setBlockData", value: function (t, e, n, r, o) {
                            var a = this.getBlock(t);
                            if (void 0 === a) return !1;
                            if (a.isSucceed()) return !1;
                            if (a.setData(e, n, r, o) == i.SUCCESS) {
                                this.statArray[n] += e.byteLength, this.roleArray[r] += e.byteLength, null != this.p2pContext.P2PDataCollectionStatus && this.p2pContext.P2PDataCollectionStatus.addDownloadSizeRealtime(e.byteLength, n);
                                var s, c = this.getBlockBelongSlice(t);
                                return ++this.sliceProgressArray[c].curCount, this.sliceProgressArray[c].statArray[n] += e.byteLength, this.sliceProgressArray[c].roleArray[r] += e.byteLength, this.isCrcErrorToRefetch && void 0 !== a.getGhostPeerId() && (this.p2pContext.GhostPeerIds.add(a.getGhostPeerId()), null === (s = this.p2pContext.PeerSched) || void 0 === s || s.closePeer(a.getGhostPeerId())), this.distances[t] &= 128, ++this.blockFinishCount, this.blockFinishCount === this.blockCount && this.setFragmentData(this.buffer), !0
                            }
                            return !1
                        }
                    }, {
                        key: "isBlockFinished", value: function (t) {
                            var e = this.getBlock(t);
                            return void 0 !== e && e.isSucceed()
                        }
                    }, {
                        key: "isSliceFinished", value: function (t) {
                            return this.sliceProgressArray[t].curCount === this.sliceProgressArray[t].maxCount
                        }
                    }, {
                        key: "getRoleRatioForSlice", value: function (t, e) {
                            if (e < 0 || e >= this.p2pContext.Config.sliceCount) return 0;
                            var n = this.sliceProgressArray[e];
                            return 0 == n.sliceSize ? 0 : n.roleArray[t] / n.sliceSize
                        }
                    }, {
                        key: "getSourceRatioForSlice", value: function (t, e) {
                            if (e < 0 || e >= this.p2pContext.Config.sliceCount) return 0;
                            var n = this.sliceProgressArray[e];
                            return 0 == n.sliceSize ? 0 : n.statArray[t] / n.sliceSize
                        }
                    }, {
                        key: "getSliceSharedRatio", value: function (t) {
                            if (t < 0 || t >= this.p2pContext.Config.sliceCount) return 0;
                            var e = this.sliceProgressArray[t];
                            if (0 == e.sliceSize) return 0;
                            var n = e.shareSize / e.sliceSize,
                                r = this.fragmentSize * this.p2pContext.Config.fragmentShareOverride;
                            return r > this.p2pContext.Config.fragmentShareOverrideMaxBytes && (n = n * r / this.p2pContext.Config.fragmentShareOverrideMaxBytes), n
                        }
                    }, {
                        key: "onBlockFinished", value: function (t, e) {
                            var n = this.getBlock(t);
                            return void 0 !== n && (n.onDataResolved(e), !0)
                        }
                    }, {
                        key: "setFragmentData", value: function (t, e) {
                            if (null == t || 0 !== this.buffer.byteLength && t.byteLength !== this.buffer.byteLength) {
                                if (this.fragStat !== a.NULL) return void this.p2pContext.P2PDataCollectionStatus.addFetchError(M.b.ERROR_NO_EFFECT);
                                for (var n = 0; n < this.getBlockCount(); ++n) {
                                    var i, s;
                                    null !== (i = this.getBlock(n)) && void 0 !== i && i.isSucceed() || null === (s = this.getBlock(n)) || void 0 === s || s.setData(void 0, void 0, void 0)
                                }
                                this.fragStat = a.END_ERROR, this.fragEndErrorMsg = e
                            } else if (t.byteLength == this.buffer.byteLength) {
                                if (null != this.trustedCrc && this.p2pContext.Config.crcVerifyEnable) {
                                    var c = N.a.crc32(t, this.p2pContext.Config.crc32Interval);
                                    if (c != this.trustedCrc) {
                                        var u, l, f, h;
                                        if (this.p2pContext.printExtLog(0, T()(u = T()(l = "frag name: ".concat(this.fragmentName, " local crc: ")).call(l, c.toString(16), " trust crc: ")).call(u, this.trustedCrc.toString(16))), this.p2pContext.Config.allowPrintLog(0) && console.warn(T()(f = T()(h = "[SistersPlayer] frag name: ".concat(this.fragmentName, " local crc: ")).call(h, c.toString(16), " trust crc: ")).call(f, this.trustedCrc.toString(16))), this.statArray[r.P2P] > 0) {
                                            this.isCrcErrorToRefetch = !0;
                                            for (var p = 0; p < this.p2pContext.Config.sliceCount; ++p) if (!this.sliceIdsInCharge.has(p)) {
                                                var d = this.getSliceBlockRange(p);
                                                this.statArray[r.P2P] -= this.sliceProgressArray[p].statArray[r.P2P], this.p2pContext.P2PDataCollectionStatus.addWastedDataSize(this.sliceProgressArray[p].statArray[r.P2P], M.e.ERROR_DATA), this.sliceProgressArray[p].statArray[r.P2P] = 0;
                                                for (var v = d[1] - 1; v >= d[0]; --v) this.getBlock(v).resetStatus() && (--this.blockFinishCount, --this.sliceProgressArray[p].curCount)
                                            }
                                            return void this.crcErrorCallback()
                                        }
                                        this.p2pContext.printExtLog(1, "frag name: ".concat(this.fragmentName, " --- all from server , but crc is still error")), this.p2pContext.Config.allowPrintLog(1) && console.warn("[SistersPlayer] frag name: ".concat(this.fragmentName, " --- all from server , but crc is still error"))
                                    }
                                }
                                this.fragStat = a.END_SUCCESS, this.buffer.set(t)
                            } else if (0 == this.buffer.byteLength) {
                                for (this.fragmentSize = t.byteLength, this.initFragmentBySize(this.fragmentSize), p = 0; p < this.blockCount; ++p) {
                                    var g = this.getBlockByteRange(p);
                                    this.setBlockData(p, t.subarray(g[0], g[1]), r.SERVER, o.SEED)
                                }
                                return
                            }
                            this.future.setResult(this)
                        }
                    }, {
                        key: "onFinished", value: function (t) {
                            this.future.onResolved(t)
                        }
                    }, {
                        key: "isFinished", value: function () {
                            return this.fragStat == a.END_SUCCESS
                        }
                    }, {
                        key: "getFragStat", value: function () {
                            return this.fragStat
                        }
                    }, {
                        key: "getFragEndErrorMsg", value: function () {
                            return this.fragEndErrorMsg
                        }
                    }, {
                        key: "addShareData", value: function (t, e) {
                            var n = this.getBlockBelongSlice(t);
                            this.sliceProgressArray[n].shareSize += e, this.shareSize += e
                        }
                    }, {
                        key: "canShare", value: function () {
                            return this.shareSize < this.shareQuota
                        }
                    }, {
                        key: "addShareQuotaBytes", value: function (t) {
                            this.shareQuota += t
                        }
                    }, {
                        key: "getRemainingShareQuotaBytes", value: function () {
                            return Math.max(0, this.shareQuota - this.shareSize)
                        }
                    }, {
                        key: "getShareSize", value: function () {
                            return this.shareSize
                        }
                    }, {
                        key: "getSharedRatio", value: function () {
                            return 0 == this.fragmentSize ? 0 : this.shareSize / this.fragmentSize
                        }
                    }, {
                        key: "destroy", value: function () {
                            this.fragStat == a.NULL && this.setFragmentData(void 0)
                        }
                    }]), t
                }(), W = function () {
                    function t(e) {
                        x()(this, t), k()(this, "p2pContext", void 0), k()(this, "collection", new L.a), k()(this, "queue", new Array), k()(this, "sliceIdController", void 0), this.p2pContext = e
                    }

                    return m()(t, [{
                        key: "setSliceIdController", value: function (t) {
                            this.sliceIdController = t
                        }
                    }, {
                        key: "addFragment", value: function (t, e, n) {
                            var r = this.collection.get(t);
                            if (void 0 !== r) {
                                if (r.getFragmentSize() !== e) return;
                                if (null != r.getFragmentCRC32() && null != n && r.getFragmentCRC32() != n) return;
                                return r
                            }
                            return r = new q(this.p2pContext, t, e, n), this.collection.set(t, r), this.queue.push(t), r
                        }
                    }, {
                        key: "getFragment", value: function (t) {
                            return this.collection.get(t)
                        }
                    }, {
                        key: "deleteFragment", value: function (t) {
                            var e, n, r = O()(e = this.queue).call(e, t);
                            if (r >= 0 && R()(n = this.queue).call(n, r, 1), this.collection.has(t)) {
                                var o = this.collection.get(t);
                                return null == o || o.destroy(), this.collection.delete(t), !0
                            }
                            return !1
                        }
                    }, {
                        key: "deleteFragmentUntil", value: function (t) {
                            for (var e, n = O()(e = this.queue).call(e, t); n > this.p2pContext.Config.fragmentCountOutdated;) {
                                var r = this.queue.shift();
                                if (void 0 !== r) {
                                    var o = this.collection.get(r);
                                    void 0 !== o && (null != this.p2pContext.P2PDataCollectionStatus && (this.p2pContext.P2PDataCollectionStatus.addFragmentDataCollection(o), this.p2pContext.P2P.P2PDataShareQuotaController.addFragmentDataCollection(o)), void 0 !== this.sliceIdController && void 0 !== o && this.sliceIdController.addFragmentShareData(o), o.destroy()), this.collection.delete(r)
                                }
                                --n
                            }
                        }
                    }, {
                        key: "destroy", value: function () {
                            var t;
                            A()(t = this.collection).call(t, function (t) {
                                t.destroy()
                            })
                        }
                    }]), t
                }()
            }).call(this, n(417).Buffer)
        },
        function (t, e, n) {
            t.exports = n(426)
        },
        function (t, e, n) {
            t.exports = n(374)
        },
        function (t, e, n) {
            "use strict";
            n.d(e, "e", function () {
                return r
            }), n.d(e, "b", function () {
                return o
            }), n.d(e, "d", function () {
                return i
            }), n.d(e, "c", function () {
                return b
            });
            var r, o, i, a = n(67), s = n.n(a), c = n(2), u = n.n(c), l = n(3), f = n.n(l), h = n(0), p = n.n(h),
                d = n(32),
                v = n.n(d), g = n(14), y = n.n(g), x = n(5), C = n.n(x), m = n(19), w = n.n(m), k = n(8);
            n.d(e, "a", function () {
                return k.a
            }), function (t) {
                t[t.P2P_LATE = 0] = "P2P_LATE", t[t.ERROR_DATA = 1] = "ERROR_DATA", t[t.CDN_REPEAT = 2] = "CDN_REPEAT", t[t.TYPE_COUNT = 3] = "TYPE_COUNT"
            }(r || (r = {})), function (t) {
                t[t.ERROR_TO_RELOAD = 0] = "ERROR_TO_RELOAD", t[t.ERROR_NO_EFFECT = 1] = "ERROR_NO_EFFECT", t[t.TYPE_COUNT = 2] = "TYPE_COUNT"
            }(o || (o = {})), function (t) {
                t[t.TX_PEER = 0] = "TX_PEER", t[t.RX_PEER = 1] = "RX_PEER", t[t.LAG_PEER = 2] = "LAG_PEER", t[t.TX_SEEDBOX = 3] = "TX_SEEDBOX", t[t.RX_SEEDBOX = 4] = "RX_SEEDBOX", t[t.LAG_SEEDBOX = 5] = "LAG_SEEDBOX"
            }(i || (i = {}));
            var b = function () {
                function t() {
                    u()(this, t), p()(this, "statArray", new Array), p()(this, "roleArray", new Array), p()(this, "shareSize", 0), p()(this, "lastestDeleteFragName", "--"), p()(this, "statRealtimeArray", new Array), p()(this, "p2pSendSizeRealtime", 0), p()(this, "lastestFragName", "--"), p()(this, "lastestSaveRatio", "0.000"), p()(this, "lastestShareRatio", "0.000"), p()(this, "wastedDataArray", new Array), p()(this, "fetchRepeatFragmentNameList", new v.a), p()(this, "fetchErrorArray", new Array), p()(this, "queryServerInfo", {
                        fragNum: 0,
                        queryNum: 0,
                        largestQPF: 0,
                        bvcServiceModule: new y.a
                    }), p()(this, "trackerInfo", {
                        reqSuccCount: 0,
                        reqFailCount: 0,
                        reqCostTimeMs: 0,
                        conSuccCount: 0,
                        conFailCount: 0
                    }), p()(this, "peerConnectionInfo", {
                        conSuccCount: 0,
                        conFailCount: 0,
                        conAbortCount: 0
                    }), p()(this, "peerMessageInfo", {
                        pmTxP: 0,
                        pmRxP: 0,
                        pmLagP: 0,
                        pmTxS: 0,
                        pmRxS: 0,
                        pmLagS: 0
                    }), this.initToEmpty()
                }

                return f()(t, [{
                    key: "initToEmpty", value: function () {
                        for (var t = 0; t < k.b.TYPE_COUNT; ++t) this.statArray[t] = 0;
                        for (this.shareSize = 0, t = 0; t < k.b.TYPE_COUNT; ++t) this.statRealtimeArray[t] = 0;
                        for (this.p2pSendSizeRealtime = 0, t = 0; t < r.TYPE_COUNT; ++t) this.wastedDataArray[t] = 0;
                        for (t = 0; t < o.TYPE_COUNT; ++t) this.fetchErrorArray[t] = 0;
                        for (t = 0; t < k.a.TYPE_COUNT; ++t) this.roleArray[t] = 0;
                        this.fetchRepeatFragmentNameList.clear(), this.queryServerInfo.fragNum = 0, this.queryServerInfo.queryNum = 0, this.queryServerInfo.largestQPF = 0, this.queryServerInfo.bvcServiceModule.clear(), this.trackerInfo.reqSuccCount = 0, this.trackerInfo.reqFailCount = 0, this.trackerInfo.reqCostTimeMs = 0, this.trackerInfo.conSuccCount = 0, this.trackerInfo.conFailCount = 0, this.peerConnectionInfo.conSuccCount = 0, this.peerConnectionInfo.conFailCount = 0, this.peerConnectionInfo.conAbortCount = 0, this.peerMessageInfo = {
                            pmTxP: 0,
                            pmRxP: 0,
                            pmLagP: 0,
                            pmTxS: 0,
                            pmRxS: 0,
                            pmLagS: 0
                        }
                    }
                }, {
                    key: "addPeerMessageDataCollection", value: function (t, e) {
                        switch (t) {
                            case i.TX_PEER:
                                this.peerMessageInfo.pmTxP += e;
                                break;
                            case i.RX_PEER:
                                this.peerMessageInfo.pmRxP += e;
                                break;
                            case i.LAG_PEER:
                                this.peerMessageInfo.pmLagP += e;
                                break;
                            case i.TX_SEEDBOX:
                                this.peerMessageInfo.pmTxS += e;
                                break;
                            case i.RX_SEEDBOX:
                                this.peerMessageInfo.pmRxS += e;
                                break;
                            case i.LAG_SEEDBOX:
                                this.peerMessageInfo.pmLagS += e
                        }
                    }
                }, {
                    key: "addFragmentDataCollection", value: function (t) {
                        var e, n, r = this;
                        C()(e = t.getStatArray()).call(e, function (t, e) {
                            r.statArray[e] += t
                        }), C()(n = t.getRoleArray()).call(n, function (t, e) {
                            r.roleArray[e] += t
                        }), this.shareSize += t.getShareSize(), this.lastestDeleteFragName = t.getFragmentName()
                    }
                }, {
                    key: "addPeerConnectCount", value: function (t, e) {
                        t ? this.peerConnectionInfo.conAbortCount++ : e ? this.peerConnectionInfo.conSuccCount++ : this.peerConnectionInfo.conFailCount++
                    }
                }, {
                    key: "getExtendReportInfo", value: function () {
                        return {
                            seedSize: this.roleArray[k.a.SEED],
                            xchgSize: this.roleArray[k.a.EXCHANGE],
                            lackSize: this.roleArray[k.a.LACKED],
                            peerConSucc: this.peerConnectionInfo.conSuccCount,
                            peerConAvail: this.peerConnectionInfo.conSuccCount + this.peerConnectionInfo.conFailCount,
                            peerConTotal: this.peerConnectionInfo.conSuccCount + this.peerConnectionInfo.conFailCount + this.peerConnectionInfo.conAbortCount,
                            pmTxP: this.peerMessageInfo.pmTxP,
                            pmRxP: this.peerMessageInfo.pmRxP,
                            pmLagP: this.peerMessageInfo.pmLagP,
                            pmTxS: this.peerMessageInfo.pmTxS,
                            pmRxS: this.peerMessageInfo.pmRxS,
                            pmLagS: this.peerMessageInfo.pmLagS
                        }
                    }
                }, {
                    key: "addDownloadSizeDataCollection", value: function (t, e, n) {
                        this.statArray[e] += t
                    }
                }, {
                    key: "getP2PDownload", value: function () {
                        return this.statArray[k.b.P2P]
                    }
                }, {
                    key: "getServerDownload", value: function () {
                        return this.statArray[k.b.SERVER]
                    }
                }, {
                    key: "getP2PSend", value: function () {
                        return this.shareSize
                    }
                }, {
                    key: "getP2PSaveRatio", value: function () {
                        var t = this.statArray[k.b.P2P] + this.statArray[k.b.SERVER];
                        return 0 == t ? "0.000" : (this.statArray[k.b.P2P] / t * 100).toFixed(3)
                    }
                }, {
                    key: "getP2PShareRatio", value: function () {
                        var t = this.statArray[k.b.P2P] + this.statArray[k.b.SERVER];
                        return 0 == t ? "0.000" : (this.shareSize / t * 100).toFixed(3)
                    }
                }, {
                    key: "addDownloadSizeRealtime", value: function (t, e) {
                        this.statRealtimeArray[e] += t
                    }
                }, {
                    key: "addP2PSendSizeRealtime", value: function (t) {
                        this.p2pSendSizeRealtime += t
                    }
                }, {
                    key: "getServerSizeRealtime", value: function () {
                        return this.statRealtimeArray[k.b.SERVER]
                    }
                }, {
                    key: "getP2PSendSizeRealtime", value: function () {
                        return this.p2pSendSizeRealtime
                    }
                }, {
                    key: "getP2PDownloadSizeRealtime", value: function () {
                        return this.statRealtimeArray[k.b.P2P]
                    }
                }, {
                    key: "addLastestFragmentDataCollection", value: function (t) {
                        if (this.lastestFragName = t.getFragmentName(), 0 == t.getFragmentSize()) this.lastestShareRatio = "0.000", this.lastestSaveRatio = "0.000"; else {
                            var e = t.getShareSize() / t.getFragmentSize();
                            this.lastestShareRatio = (100 * e).toFixed(3);
                            var n = t.getStatArray()[k.b.P2P] / t.getFragmentSize();
                            this.lastestSaveRatio = (100 * n).toFixed(3)
                        }
                        this.queryServerInfo.fragNum++, this.queryServerInfo.queryNum += t.getQueryServerNum(), t.getQueryServerNum() > this.queryServerInfo.largestQPF && (this.queryServerInfo.largestQPF = t.getQueryServerNum())
                    }
                }, {
                    key: "addFetchResponseHeadersCount", value: function (t) {
                        var e, n, r = null !== (e = t.get("x-service-module")) && void 0 !== e ? e : "unknown",
                            o = null !== (n = this.queryServerInfo.bvcServiceModule.get(r)) && void 0 !== n ? n : 0;
                        this.queryServerInfo.bvcServiceModule.set(r, o + 1)
                    }
                }, {
                    key: "getLastestFragmentDataCollection", value: function () {
                        return {
                            lastestFragName: this.lastestFragName,
                            lastestShareRatio: this.lastestShareRatio,
                            lastestSaveRatio: this.lastestSaveRatio
                        }
                    }
                }, {
                    key: "getLastestDeleteFragmentName", value: function () {
                        return this.lastestDeleteFragName
                    }
                }, {
                    key: "addWastedDataSize", value: function (t, e, n) {
                        this.wastedDataArray[e] += t, void 0 !== n && e == r.CDN_REPEAT && this.fetchRepeatFragmentNameList.add(n.fragname + " , " + w()(s()(n.sliceIds)))
                    }
                }, {
                    key: "getWastedDataSize", value: function (t) {
                        return this.wastedDataArray[t]
                    }
                }, {
                    key: "getFetchRepeatFragnameListInfo", value: function () {
                        return w()(s()(this.fetchRepeatFragmentNameList))
                    }
                }, {
                    key: "addFetchError", value: function (t) {
                        this.fetchErrorArray[t]++
                    }
                }, {
                    key: "getFetchErrorNum", value: function (t) {
                        return this.fetchErrorArray[t]
                    }
                }, {
                    key: "addTrackerConnect", value: function (t) {
                        t ? this.trackerInfo.conSuccCount += 1 : this.trackerInfo.conFailCount += 1
                    }
                }, {
                    key: "addTrackerResponse", value: function (t, e) {
                        t ? this.trackerInfo.reqSuccCount += 1 : this.trackerInfo.reqFailCount += 1, this.trackerInfo.reqCostTimeMs += e
                    }
                }, {
                    key: "getTrackerInfo", value: function () {
                        return this.trackerInfo
                    }
                }, {
                    key: "getQueryServerInfo", value: function () {
                        return this.queryServerInfo
                    }
                }, {
                    key: "clearP2PDataInfo", value: function () {
                        this.initToEmpty()
                    }
                }]), t
            }()
        },
        function (t, e) {
            t.exports = function (t) {
                try {
                    return !!t()
                } catch (t) {
                    return !0
                }
            }
        },
        function (t, e, n) {
            var r = n(100), o = Function.prototype, i = o.call, a = r && o.bind.bind(i, i);
            t.exports = r ? a : function (t) {
                return function () {
                    return i.apply(t, arguments)
                }
            }
        },
        function (t, e, n) {
            t.exports = n(365)
        },
        function (t, e, n) {
            (function (e) {
                var n = function (t) {
                    return t && t.Math == Math && t
                };
                t.exports = n("object" == typeof globalThis && globalThis) || n("object" == typeof window && window) || n("object" == typeof self && self) || n("object" == typeof e && e) || function () {
                    return this
                }() || Function("return this")()
            }).call(this, n(141))
        },
        function (t, e) {
            t.exports = {}
        },
        function (t, e, n) {
            var r = n(15), o = n(87), i = n(25), a = n(106), s = n(73), c = n(143), u = o("wks"), l = r.Symbol,
                f = l && l.for, h = c ? l : l && l.withoutSetter || a;
            t.exports = function (t) {
                if (!i(u, t) || !s && "string" != typeof u[t]) {
                    var e = "Symbol." + t;
                    s && i(l, t) ? u[t] = l[t] : u[t] = c && f ? f(e) : h(e)
                }
                return u[t]
            }
        },
        function (t, e, n) {
            var r = n(142), o = r.all;
            t.exports = r.IS_HTMLDDA ? function (t) {
                return "function" == typeof t || t === o
            } : function (t) {
                return "function" == typeof t
            }
        },
        function (t, e, n) {
            t.exports = n(372)
        },
        function (t, e, n) {
            var r = n(16), o = n(25), i = n(114), a = n(31).f;
            t.exports = function (t) {
                var e = r.Symbol || (r.Symbol = {});
                o(e, t) || a(e, t, {value: i.f(t)})
            }
        },
        function (t, e, n) {
            var r = n(13);
            t.exports = r({}.isPrototypeOf)
        },
        function (t, e, n) {
            var r = n(12);
            t.exports = !r(function () {
                return 7 != Object.defineProperty({}, 1, {
                    get: function () {
                        return 7
                    }
                })[1]
            })
        },
        function (t, e, n) {
            var r = n(100), o = Function.prototype.call;
            t.exports = r ? o.bind(o) : function () {
                return o.apply(o, arguments)
            }
        },
        function (t, e, n) {
            var r = n(18), o = n(142), i = o.all;
            t.exports = o.IS_HTMLDDA ? function (t) {
                return "object" == typeof t ? null !== t : r(t) || t === i
            } : function (t) {
                return "object" == typeof t ? null !== t : r(t)
            }
        },
        function (t, e, n) {
            var r = n(13), o = n(34), i = r({}.hasOwnProperty);
            t.exports = Object.hasOwn || function (t, e) {
                return i(o(t), e)
            }
        },
        function (t, e, n) {
            "use strict";
            n.d(e, "d", function () {
                return P
            }), n.d(e, "b", function () {
                return A
            }), n.d(e, "c", function () {
                return E
            }), n.d(e, "a", function () {
                return R
            });
            var r = n(67), o = n.n(r), i = n(6), a = n.n(i), s = n(2), c = n.n(s), u = n(3), l = n.n(u), f = n(0),
                h = n.n(f), p = n(1), d = n.n(p), v = n(14), g = n.n(v), y = n(5), x = n.n(y), C = n(4), m = n.n(C),
                w = n(29), k = n.n(w), b = n(9), S = n.n(b), P = function () {
                    function t() {
                        c()(this, t), h()(this, "notifyList", void 0), h()(this, "notifyId", 0), this.notifyList = new g.a
                    }

                    return l()(t, [{
                        key: "connect", value: function (t) {
                            var e = this.notifyId++;
                            return this.notifyList.set(e, t), e
                        }
                    }, {
                        key: "disconnect", value: function (t) {
                            return this.notifyList.delete(t)
                        }
                    }, {
                        key: "call", value: function (t) {
                            var e;
                            x()(e = this.notifyList).call(e, function (e) {
                                e(t)
                            })
                        }
                    }]), t
                }(), A = function () {
                    function t() {
                        c()(this, t), h()(this, "result", void 0), h()(this, "callbacks_res", new Array)
                    }

                    return l()(t, [{
                        key: "setResult", value: function (t) {
                            if (this.result = t, void 0 !== this.callbacks_res) {
                                for (var e = 0; e < this.callbacks_res.length; ++e) this.callbacks_res[e](t);
                                this.callbacks_res = void 0
                            }
                        }
                    }, {
                        key: "onResolved", value: function (t) {
                            return void 0 === this.callbacks_res ? t(this.result) : this.callbacks_res.push(t), this
                        }
                    }, {
                        key: "isResolved", value: function () {
                            return void 0 === this.callbacks_res
                        }
                    }]), t
                }(), E = function () {
                    function t() {
                        c()(this, t), h()(this, "waitingList_", void 0), h()(this, "isLocked_", void 0), h()(this, "mutexId_", void 0), this.waitingList_ = new Array, this.isLocked_ = !1, this.mutexId_ = ++t.maxMutexId_
                    }

                    return l()(t, [{
                        key: "lock", value: function () {
                            var t = this;
                            return !0 === this.isLocked_ ? new m.a(function (e) {
                                return t.waitingList_.push(e)
                            }) : (this.isLocked_ = !0, m.a.resolve())
                        }
                    }, {
                        key: "unlock", value: function () {
                            var t = this.waitingList_.shift();
                            void 0 !== t ? t() : this.isLocked_ = !1
                        }
                    }, {
                        key: "isLocked", value: function () {
                            return this.isLocked_
                        }
                    }, {
                        key: "getId", value: function () {
                            return this.mutexId_
                        }
                    }]), t
                }();
            h()(E, "maxMutexId_", 0);
            var R = function () {
                function t() {
                    c()(this, t), h()(this, "notifyList", void 0), h()(this, "notifyingList", void 0), this.notifyList = new Array, this.notifyingList = new Array
                }

                var e;
                return l()(t, [{
                    key: "waitUntilAsync", value: (e = a()(d.a.mark(function t(e, n) {
                        var r, o, i = this;
                        return d.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return e.unlock(), t.next = 3, new m.a(function (t) {
                                        return i.notifyList.push(t)
                                    });
                                case 3:
                                    return r = t.sent, t.next = 6, e.lock();
                                case 6:
                                    if (o = n(), !0 !== r && !1 !== o || this.notify(r), !0 !== o) {
                                        t.next = 10;
                                        break
                                    }
                                    return t.abrupt("break", 12);
                                case 10:
                                    t.next = 0;
                                    break;
                                case 12:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, n) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "waitUntil", value: function (t, e) {
                        return !0 === e() ? m.a.resolve() : this.waitUntilAsync(t, e)
                    }
                }, {
                    key: "prepareNotify", value: function () {
                        var t, e, n;
                        k()(t = this.notifyingList).apply(t, S()(e = [this.notifyingList.length, 0]).call(e, o()(this.notifyList))), k()(n = this.notifyList).call(n, 0, this.notifyList.length)
                    }
                }, {
                    key: "notify", value: function (t) {
                        var e = this.notifyingList.shift();
                        void 0 !== e && e(t)
                    }
                }, {
                    key: "notifyOne", value: function () {
                        this.prepareNotify(), this.notify(!1)
                    }
                }, {
                    key: "notifyAll", value: function () {
                        this.prepareNotify(), this.notify(!0)
                    }
                }]), t
            }()
        },
        function (t, n, r) {
            "use strict";
            r.r(n), r.d(n, "PeerRole", function () {
                return Z
            }), r.d(n, "PeerExtensionData", function () {
                return dt
            }), r.d(n, "PeerRequest", function () {
                return gt
            }), r.d(n, "PeerResponse", function () {
                return yt
            }), r.d(n, "PeerMessage", function () {
                return xt
            }), r.d(n, "NyaPeer", function () {
                return mt
            });
            var o, i, a, s = r(6), c = r.n(s), u = r(3), l = r.n(u), f = r(2), h = r.n(f), p = r(0), d = r.n(p),
                v = r(1),
                g = r.n(v), y = r(4), x = r.n(y), C = r(10), m = r.n(C), w = r(14), k = r.n(w), b = r(32), S = r.n(b),
                P = r(5), A = r.n(P), E = r(29), R = r.n(E), I = r(83), T = r.n(I), D = r(204), L = r.n(D);

            function F(t, e, n) {
                var r = Math.floor(n / 4294967296), o = n;
                t.setUint32(e, r), t.setUint32(e + 4, o)
            }

            function O(t, e) {
                return 4294967296 * t.getInt32(e) + t.getUint32(e + 4)
            }

            var U = (void 0 === e || "never" !== (null === (o = null == e ? void 0 : e.env) || void 0 === o ? void 0 : o.TEXT_ENCODING)) && "undefined" != typeof TextEncoder && "undefined" != typeof TextDecoder;

            function N(t) {
                for (var e = t.length, n = 0, r = 0; r < e;) {
                    var o = t.charCodeAt(r++);
                    if (0 != (4294967168 & o)) if (0 == (4294965248 & o)) n += 2; else {
                        if (o >= 55296 && o <= 56319 && r < e) {
                            var i = t.charCodeAt(r);
                            56320 == (64512 & i) && (++r, o = ((1023 & o) << 10) + (1023 & i) + 65536)
                        }
                        n += 0 == (4294901760 & o) ? 3 : 4
                    } else n++
                }
                return n
            }

            var M = U ? new TextEncoder : void 0,
                B = U ? void 0 !== e && "force" !== (null === (i = null == e ? void 0 : e.env) || void 0 === i ? void 0 : i.TEXT_ENCODING) ? 200 : 0 : 4294967295,
                _ = (null == M ? void 0 : M.encodeInto) ? function (t, e, n) {
                    M.encodeInto(t, e.subarray(n))
                } : function (t, e, n) {
                    e.set(M.encode(t), n)
                };

            function z(t, e, n) {
                for (var r = e, o = r + n, i = [], a = ""; r < o;) {
                    var s = t[r++];
                    if (0 == (128 & s)) i.push(s); else if (192 == (224 & s)) {
                        var c = 63 & t[r++];
                        i.push((31 & s) << 6 | c)
                    } else if (224 == (240 & s)) {
                        c = 63 & t[r++];
                        var u = 63 & t[r++];
                        i.push((31 & s) << 12 | c << 6 | u)
                    } else if (240 == (248 & s)) {
                        var l = (7 & s) << 18 | (c = 63 & t[r++]) << 12 | (u = 63 & t[r++]) << 6 | 63 & t[r++];
                        l > 65535 && (l -= 65536, i.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), i.push(l)
                    } else i.push(s);
                    i.length >= 4096 && (a += String.fromCharCode.apply(String, i), i.length = 0)
                }
                return i.length > 0 && (a += String.fromCharCode.apply(String, i)), a
            }

            var j, q = U ? new TextDecoder : null,
                W = U ? void 0 !== e && "force" !== (null === (a = null == e ? void 0 : e.env) || void 0 === a ? void 0 : a.TEXT_DECODER) ? 200 : 0 : 4294967295,
                V = function (t, e) {
                    this.type = t, this.data = e
                }, G = (j = function (t, e) {
                    return (j = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                        t.__proto__ = e
                    } || function (t, e) {
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                    })(t, e)
                }, function (t, e) {
                    if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                    function n() {
                        this.constructor = t
                    }

                    j(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                }), H = function (t) {
                    function e(n) {
                        var r = t.call(this, n) || this, o = Object.create(e.prototype);
                        return Object.setPrototypeOf(r, o), Object.defineProperty(r, "name", {
                            configurable: !0,
                            enumerable: !1,
                            value: e.name
                        }), r
                    }

                    return G(e, t), e
                }(Error), Y = {
                    type: -1, encode: function (t) {
                        var e, n, r, o;
                        return t instanceof Date ? function (t) {
                            var e, n = t.sec, r = t.nsec;
                            if (n >= 0 && r >= 0 && n <= 17179869183) {
                                if (0 === r && n <= 4294967295) {
                                    var o = new Uint8Array(4);
                                    return (e = new DataView(o.buffer)).setUint32(0, n), o
                                }
                                var i = n / 4294967296, a = 4294967295 & n;
                                return o = new Uint8Array(8), (e = new DataView(o.buffer)).setUint32(0, r << 2 | 3 & i), e.setUint32(4, a), o
                            }
                            return o = new Uint8Array(12), (e = new DataView(o.buffer)).setUint32(0, r), F(e, 4, n), o
                        }((r = 1e6 * ((e = t.getTime()) - 1e3 * (n = Math.floor(e / 1e3))), {
                            sec: n + (o = Math.floor(r / 1e9)),
                            nsec: r - 1e9 * o
                        })) : null
                    }, decode: function (t) {
                        var e = function (t) {
                            var e = new DataView(t.buffer, t.byteOffset, t.byteLength);
                            switch (t.byteLength) {
                                case 4:
                                    return {sec: e.getUint32(0), nsec: 0};
                                case 8:
                                    var n = e.getUint32(0);
                                    return {sec: 4294967296 * (3 & n) + e.getUint32(4), nsec: n >>> 2};
                                case 12:
                                    return {sec: O(e, 4), nsec: e.getUint32(0)};
                                default:
                                    throw new H("Unrecognized data size for timestamp (expected 4, 8, or 12): ".concat(t.length))
                            }
                        }(t);
                        return new Date(1e3 * e.sec + e.nsec / 1e6)
                    }
                }, Q = function () {
                    function t() {
                        this.builtInEncoders = [], this.builtInDecoders = [], this.encoders = [], this.decoders = [], this.register(Y)
                    }

                    return t.prototype.register = function (t) {
                        var e = t.type, n = t.encode, r = t.decode;
                        if (e >= 0) this.encoders[e] = n, this.decoders[e] = r; else {
                            var o = 1 + e;
                            this.builtInEncoders[o] = n, this.builtInDecoders[o] = r
                        }
                    }, t.prototype.tryToEncode = function (t, e) {
                        for (var n = 0; n < this.builtInEncoders.length; n++) if (null != (r = this.builtInEncoders[n]) && null != (o = r(t, e))) return new V(-1 - n, o);
                        for (n = 0; n < this.encoders.length; n++) {
                            var r, o;
                            if (null != (r = this.encoders[n]) && null != (o = r(t, e))) return new V(n, o)
                        }
                        return t instanceof V ? t : null
                    }, t.prototype.decode = function (t, e, n) {
                        var r = e < 0 ? this.builtInDecoders[-1 - e] : this.decoders[e];
                        return r ? r(t, e, n) : new V(e, t)
                    }, t.defaultCodec = new t, t
                }();

            function K(t) {
                return t instanceof Uint8Array ? t : ArrayBuffer.isView(t) ? new Uint8Array(t.buffer, t.byteOffset, t.byteLength) : t instanceof ArrayBuffer ? new Uint8Array(t) : Uint8Array.from(t)
            }

            var X = function () {
                function t(t, e, n, r, o, i, a, s) {
                    void 0 === t && (t = Q.defaultCodec), void 0 === e && (e = void 0), void 0 === n && (n = 100), void 0 === r && (r = 2048), void 0 === o && (o = !1), void 0 === i && (i = !1), void 0 === a && (a = !1), void 0 === s && (s = !1), this.extensionCodec = t, this.context = e, this.maxDepth = n, this.initialBufferSize = r, this.sortKeys = o, this.forceFloat32 = i, this.ignoreUndefined = a, this.forceIntegerToFloat = s, this.pos = 0, this.view = new DataView(new ArrayBuffer(this.initialBufferSize)), this.bytes = new Uint8Array(this.view.buffer)
                }

                return t.prototype.reinitializeState = function () {
                    this.pos = 0
                }, t.prototype.encodeSharedRef = function (t) {
                    return this.reinitializeState(), this.doEncode(t, 1), this.bytes.subarray(0, this.pos)
                }, t.prototype.encode = function (t) {
                    return this.reinitializeState(), this.doEncode(t, 1), this.bytes.slice(0, this.pos)
                }, t.prototype.doEncode = function (t, e) {
                    if (e > this.maxDepth) throw new Error("Too deep objects in depth ".concat(e));
                    null == t ? this.encodeNil() : "boolean" == typeof t ? this.encodeBoolean(t) : "number" == typeof t ? this.encodeNumber(t) : "string" == typeof t ? this.encodeString(t) : this.encodeObject(t, e)
                }, t.prototype.ensureBufferSizeToWrite = function (t) {
                    var e = this.pos + t;
                    this.view.byteLength < e && this.resizeBuffer(2 * e)
                }, t.prototype.resizeBuffer = function (t) {
                    var e = new ArrayBuffer(t), n = new Uint8Array(e), r = new DataView(e);
                    n.set(this.bytes), this.view = r, this.bytes = n
                }, t.prototype.encodeNil = function () {
                    this.writeU8(192)
                }, t.prototype.encodeBoolean = function (t) {
                    !1 === t ? this.writeU8(194) : this.writeU8(195)
                }, t.prototype.encodeNumber = function (t) {
                    Number.isSafeInteger(t) && !this.forceIntegerToFloat ? t >= 0 ? t < 128 ? this.writeU8(t) : t < 256 ? (this.writeU8(204), this.writeU8(t)) : t < 65536 ? (this.writeU8(205), this.writeU16(t)) : t < 4294967296 ? (this.writeU8(206), this.writeU32(t)) : (this.writeU8(207), this.writeU64(t)) : t >= -32 ? this.writeU8(224 | t + 32) : t >= -128 ? (this.writeU8(208), this.writeI8(t)) : t >= -32768 ? (this.writeU8(209), this.writeI16(t)) : t >= -2147483648 ? (this.writeU8(210), this.writeI32(t)) : (this.writeU8(211), this.writeI64(t)) : this.forceFloat32 ? (this.writeU8(202), this.writeF32(t)) : (this.writeU8(203), this.writeF64(t))
                }, t.prototype.writeStringHeader = function (t) {
                    if (t < 32) this.writeU8(160 + t); else if (t < 256) this.writeU8(217), this.writeU8(t); else if (t < 65536) this.writeU8(218), this.writeU16(t); else {
                        if (!(t < 4294967296)) throw new Error("Too long string: ".concat(t, " bytes in UTF-8"));
                        this.writeU8(219), this.writeU32(t)
                    }
                }, t.prototype.encodeString = function (t) {
                    if (t.length > B) {
                        var e = N(t);
                        this.ensureBufferSizeToWrite(5 + e), this.writeStringHeader(e), _(t, this.bytes, this.pos), this.pos += e
                    } else e = N(t), this.ensureBufferSizeToWrite(5 + e), this.writeStringHeader(e), function (t, e, n) {
                        for (var r = t.length, o = n, i = 0; i < r;) {
                            var a = t.charCodeAt(i++);
                            if (0 != (4294967168 & a)) {
                                if (0 == (4294965248 & a)) e[o++] = a >> 6 & 31 | 192; else {
                                    if (a >= 55296 && a <= 56319 && i < r) {
                                        var s = t.charCodeAt(i);
                                        56320 == (64512 & s) && (++i, a = ((1023 & a) << 10) + (1023 & s) + 65536)
                                    }
                                    0 == (4294901760 & a) ? (e[o++] = a >> 12 & 15 | 224, e[o++] = a >> 6 & 63 | 128) : (e[o++] = a >> 18 & 7 | 240, e[o++] = a >> 12 & 63 | 128, e[o++] = a >> 6 & 63 | 128)
                                }
                                e[o++] = 63 & a | 128
                            } else e[o++] = a
                        }
                    }(t, this.bytes, this.pos), this.pos += e
                }, t.prototype.encodeObject = function (t, e) {
                    var n = this.extensionCodec.tryToEncode(t, this.context);
                    if (null != n) this.encodeExtension(n); else if (Array.isArray(t)) this.encodeArray(t, e); else if (ArrayBuffer.isView(t)) this.encodeBinary(t); else {
                        if ("object" != typeof t) throw new Error("Unrecognized object: ".concat(Object.prototype.toString.apply(t)));
                        this.encodeMap(t, e)
                    }
                }, t.prototype.encodeBinary = function (t) {
                    var e = t.byteLength;
                    if (e < 256) this.writeU8(196), this.writeU8(e); else if (e < 65536) this.writeU8(197), this.writeU16(e); else {
                        if (!(e < 4294967296)) throw new Error("Too large binary: ".concat(e));
                        this.writeU8(198), this.writeU32(e)
                    }
                    var n = K(t);
                    this.writeU8a(n)
                }, t.prototype.encodeArray = function (t, e) {
                    var n = t.length;
                    if (n < 16) this.writeU8(144 + n); else if (n < 65536) this.writeU8(220), this.writeU16(n); else {
                        if (!(n < 4294967296)) throw new Error("Too large array: ".concat(n));
                        this.writeU8(221), this.writeU32(n)
                    }
                    for (var r = 0, o = t; r < o.length; r++) {
                        var i = o[r];
                        this.doEncode(i, e + 1)
                    }
                }, t.prototype.countWithoutUndefined = function (t, e) {
                    for (var n = 0, r = 0, o = e; r < o.length; r++) void 0 !== t[o[r]] && n++;
                    return n
                }, t.prototype.encodeMap = function (t, e) {
                    var n = Object.keys(t);
                    this.sortKeys && n.sort();
                    var r = this.ignoreUndefined ? this.countWithoutUndefined(t, n) : n.length;
                    if (r < 16) this.writeU8(128 + r); else if (r < 65536) this.writeU8(222), this.writeU16(r); else {
                        if (!(r < 4294967296)) throw new Error("Too large map object: ".concat(r));
                        this.writeU8(223), this.writeU32(r)
                    }
                    for (var o = 0, i = n; o < i.length; o++) {
                        var a = i[o], s = t[a];
                        this.ignoreUndefined && void 0 === s || (this.encodeString(a), this.doEncode(s, e + 1))
                    }
                }, t.prototype.encodeExtension = function (t) {
                    var e = t.data.length;
                    if (1 === e) this.writeU8(212); else if (2 === e) this.writeU8(213); else if (4 === e) this.writeU8(214); else if (8 === e) this.writeU8(215); else if (16 === e) this.writeU8(216); else if (e < 256) this.writeU8(199), this.writeU8(e); else if (e < 65536) this.writeU8(200), this.writeU16(e); else {
                        if (!(e < 4294967296)) throw new Error("Too large extension object: ".concat(e));
                        this.writeU8(201), this.writeU32(e)
                    }
                    this.writeI8(t.type), this.writeU8a(t.data)
                }, t.prototype.writeU8 = function (t) {
                    this.ensureBufferSizeToWrite(1), this.view.setUint8(this.pos, t), this.pos++
                }, t.prototype.writeU8a = function (t) {
                    var e = t.length;
                    this.ensureBufferSizeToWrite(e), this.bytes.set(t, this.pos), this.pos += e
                }, t.prototype.writeI8 = function (t) {
                    this.ensureBufferSizeToWrite(1), this.view.setInt8(this.pos, t), this.pos++
                }, t.prototype.writeU16 = function (t) {
                    this.ensureBufferSizeToWrite(2), this.view.setUint16(this.pos, t), this.pos += 2
                }, t.prototype.writeI16 = function (t) {
                    this.ensureBufferSizeToWrite(2), this.view.setInt16(this.pos, t), this.pos += 2
                }, t.prototype.writeU32 = function (t) {
                    this.ensureBufferSizeToWrite(4), this.view.setUint32(this.pos, t), this.pos += 4
                }, t.prototype.writeI32 = function (t) {
                    this.ensureBufferSizeToWrite(4), this.view.setInt32(this.pos, t), this.pos += 4
                }, t.prototype.writeF32 = function (t) {
                    this.ensureBufferSizeToWrite(4), this.view.setFloat32(this.pos, t), this.pos += 4
                }, t.prototype.writeF64 = function (t) {
                    this.ensureBufferSizeToWrite(8), this.view.setFloat64(this.pos, t), this.pos += 8
                }, t.prototype.writeU64 = function (t) {
                    this.ensureBufferSizeToWrite(8), function (t, e, n) {
                        var r = n / 4294967296, o = n;
                        t.setUint32(e, r), t.setUint32(e + 4, o)
                    }(this.view, this.pos, t), this.pos += 8
                }, t.prototype.writeI64 = function (t) {
                    this.ensureBufferSizeToWrite(8), F(this.view, this.pos, t), this.pos += 8
                }, t
            }(), $ = {};

            function J(t) {
                return "".concat(t < 0 ? "-" : "", "0x").concat(Math.abs(t).toString(16).padStart(2, "0"))
            }

            var Z, tt = function () {
                function t(t, e) {
                    void 0 === t && (t = 16), void 0 === e && (e = 16), this.maxKeyLength = t, this.maxLengthPerKey = e, this.hit = 0, this.miss = 0, this.caches = [];
                    for (var n = 0; n < this.maxKeyLength; n++) this.caches.push([])
                }

                return t.prototype.canBeCached = function (t) {
                    return t > 0 && t <= this.maxKeyLength
                }, t.prototype.find = function (t, e, n) {
                    t:for (var r = 0, o = this.caches[n - 1]; r < o.length; r++) {
                        for (var i = o[r], a = i.bytes, s = 0; s < n; s++) if (a[s] !== t[e + s]) continue t;
                        return i.str
                    }
                    return null
                }, t.prototype.store = function (t, e) {
                    var n = this.caches[t.length - 1], r = {bytes: t, str: e};
                    n.length >= this.maxLengthPerKey ? n[Math.random() * n.length | 0] = r : n.push(r)
                }, t.prototype.decode = function (t, e, n) {
                    var r = this.find(t, e, n);
                    if (null != r) return this.hit++, r;
                    this.miss++;
                    var o = z(t, e, n), i = Uint8Array.prototype.slice.call(t, e, e + n);
                    return this.store(i, o), o
                }, t
            }(), et = function (t, e) {
                var n, r, o, i, a = {
                    label: 0, sent: function () {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    }, trys: [], ops: []
                };
                return i = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function () {
                    return this
                }), i;

                function s(i) {
                    return function (s) {
                        return function (i) {
                            if (n) throw new TypeError("Generator is already executing.");
                            for (; a;) try {
                                if (n = 1, r && (o = 2 & i[0] ? r.return : i[0] ? r.throw || ((o = r.return) && o.call(r), 0) : r.next) && !(o = o.call(r, i[1])).done) return o;
                                switch (r = 0, o && (i = [2 & i[0], o.value]), i[0]) {
                                    case 0:
                                    case 1:
                                        o = i;
                                        break;
                                    case 4:
                                        return a.label++, {value: i[1], done: !1};
                                    case 5:
                                        a.label++, r = i[1], i = [0];
                                        continue;
                                    case 7:
                                        i = a.ops.pop(), a.trys.pop();
                                        continue;
                                    default:
                                        if (!((o = (o = a.trys).length > 0 && o[o.length - 1]) || 6 !== i[0] && 2 !== i[0])) {
                                            a = 0;
                                            continue
                                        }
                                        if (3 === i[0] && (!o || i[1] > o[0] && i[1] < o[3])) {
                                            a.label = i[1];
                                            break
                                        }
                                        if (6 === i[0] && a.label < o[1]) {
                                            a.label = o[1], o = i;
                                            break
                                        }
                                        if (o && a.label < o[2]) {
                                            a.label = o[2], a.ops.push(i);
                                            break
                                        }
                                        o[2] && a.ops.pop(), a.trys.pop();
                                        continue
                                }
                                i = e.call(t, a)
                            } catch (t) {
                                i = [6, t], r = 0
                            } finally {
                                n = o = 0
                            }
                            if (5 & i[0]) throw i[1];
                            return {value: i[0] ? i[1] : void 0, done: !0}
                        }([i, s])
                    }
                }
            }, nt = function (t) {
                if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                var e, n = t[Symbol.asyncIterator];
                return n ? n.call(t) : (t = "function" == typeof __values ? __values(t) : t[Symbol.iterator](), e = {}, r("next"), r("throw"), r("return"), e[Symbol.asyncIterator] = function () {
                    return this
                }, e);

                function r(n) {
                    e[n] = t[n] && function (e) {
                        return new Promise(function (r, o) {
                            !function (t, e, n, r) {
                                Promise.resolve(r).then(function (e) {
                                    t({value: e, done: n})
                                }, e)
                            }(r, o, (e = t[n](e)).done, e.value)
                        })
                    }
                }
            }, rt = function (t) {
                return this instanceof rt ? (this.v = t, this) : new rt(t)
            }, ot = new DataView(new ArrayBuffer(0)), it = new Uint8Array(ot.buffer), at = function () {
                try {
                    ot.getInt8(0)
                } catch (t) {
                    return t.constructor
                }
                throw new Error("never reached")
            }(), st = new at("Insufficient data"), ct = new tt, ut = function () {
                function t(t, e, n, r, o, i, a, s) {
                    void 0 === t && (t = Q.defaultCodec), void 0 === e && (e = void 0), void 0 === n && (n = 4294967295), void 0 === r && (r = 4294967295), void 0 === o && (o = 4294967295), void 0 === i && (i = 4294967295), void 0 === a && (a = 4294967295), void 0 === s && (s = ct), this.extensionCodec = t, this.context = e, this.maxStrLength = n, this.maxBinLength = r, this.maxArrayLength = o, this.maxMapLength = i, this.maxExtLength = a, this.keyDecoder = s, this.totalPos = 0, this.pos = 0, this.view = ot, this.bytes = it, this.headByte = -1, this.stack = []
                }

                return t.prototype.reinitializeState = function () {
                    this.totalPos = 0, this.headByte = -1, this.stack.length = 0
                }, t.prototype.setBuffer = function (t) {
                    this.bytes = K(t), this.view = function (t) {
                        if (t instanceof ArrayBuffer) return new DataView(t);
                        var e = K(t);
                        return new DataView(e.buffer, e.byteOffset, e.byteLength)
                    }(this.bytes), this.pos = 0
                }, t.prototype.appendBuffer = function (t) {
                    if (-1 !== this.headByte || this.hasRemaining(1)) {
                        var e = this.bytes.subarray(this.pos), n = K(t), r = new Uint8Array(e.length + n.length);
                        r.set(e), r.set(n, e.length), this.setBuffer(r)
                    } else this.setBuffer(t)
                }, t.prototype.hasRemaining = function (t) {
                    return this.view.byteLength - this.pos >= t
                }, t.prototype.createExtraByteError = function (t) {
                    var e = this.view, n = this.pos;
                    return new RangeError("Extra ".concat(e.byteLength - n, " of ").concat(e.byteLength, " byte(s) found at buffer[").concat(t, "]"))
                }, t.prototype.decode = function (t) {
                    this.reinitializeState(), this.setBuffer(t);
                    var e = this.doDecodeSync();
                    if (this.hasRemaining(1)) throw this.createExtraByteError(this.pos);
                    return e
                }, t.prototype.decodeMulti = function (t) {
                    return et(this, function (e) {
                        switch (e.label) {
                            case 0:
                                this.reinitializeState(), this.setBuffer(t), e.label = 1;
                            case 1:
                                return this.hasRemaining(1) ? [4, this.doDecodeSync()] : [3, 3];
                            case 2:
                                return e.sent(), [3, 1];
                            case 3:
                                return [2]
                        }
                    })
                }, t.prototype.decodeAsync = function (t) {
                    var e, n, r, o;
                    return function (t, e, n, r) {
                        return new (n || (n = Promise))(function (o, i) {
                            function a(t) {
                                try {
                                    c(r.next(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function s(t) {
                                try {
                                    c(r.throw(t))
                                } catch (t) {
                                    i(t)
                                }
                            }

                            function c(t) {
                                var e;
                                t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function (t) {
                                    t(e)
                                })).then(a, s)
                            }

                            c((r = r.apply(t, e || [])).next())
                        })
                    }(this, void 0, void 0, function () {
                        var i, a, s, c, u, l, f, h;
                        return et(this, function (p) {
                            switch (p.label) {
                                case 0:
                                    i = !1, p.label = 1;
                                case 1:
                                    p.trys.push([1, 6, 7, 12]), e = nt(t), p.label = 2;
                                case 2:
                                    return [4, e.next()];
                                case 3:
                                    if ((n = p.sent()).done) return [3, 5];
                                    if (s = n.value, i) throw this.createExtraByteError(this.totalPos);
                                    this.appendBuffer(s);
                                    try {
                                        a = this.doDecodeSync(), i = !0
                                    } catch (t) {
                                        if (!(t instanceof at)) throw t
                                    }
                                    this.totalPos += this.pos, p.label = 4;
                                case 4:
                                    return [3, 2];
                                case 5:
                                    return [3, 12];
                                case 6:
                                    return c = p.sent(), r = {error: c}, [3, 12];
                                case 7:
                                    return p.trys.push([7, , 10, 11]), n && !n.done && (o = e.return) ? [4, o.call(e)] : [3, 9];
                                case 8:
                                    p.sent(), p.label = 9;
                                case 9:
                                    return [3, 11];
                                case 10:
                                    if (r) throw r.error;
                                    return [7];
                                case 11:
                                    return [7];
                                case 12:
                                    if (i) {
                                        if (this.hasRemaining(1)) throw this.createExtraByteError(this.totalPos);
                                        return [2, a]
                                    }
                                    throw l = (u = this).headByte, f = u.pos, h = u.totalPos, new RangeError("Insufficient data in parsing ".concat(J(l), " at ").concat(h, " (").concat(f, " in the current buffer)"))
                            }
                        })
                    })
                }, t.prototype.decodeArrayStream = function (t) {
                    return this.decodeMultiAsync(t, !0)
                }, t.prototype.decodeStream = function (t) {
                    return this.decodeMultiAsync(t, !1)
                }, t.prototype.decodeMultiAsync = function (t, e) {
                    return function (t, e, n) {
                        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
                        var r, o = n.apply(t, e || []), i = [];
                        return r = {}, a("next"), a("throw"), a("return"), r[Symbol.asyncIterator] = function () {
                            return this
                        }, r;

                        function a(t) {
                            o[t] && (r[t] = function (e) {
                                return new Promise(function (n, r) {
                                    i.push([t, e, n, r]) > 1 || s(t, e)
                                })
                            })
                        }

                        function s(t, e) {
                            try {
                                (n = o[t](e)).value instanceof rt ? Promise.resolve(n.value.v).then(c, u) : l(i[0][2], n)
                            } catch (t) {
                                l(i[0][3], t)
                            }
                            var n
                        }

                        function c(t) {
                            s("next", t)
                        }

                        function u(t) {
                            s("throw", t)
                        }

                        function l(t, e) {
                            t(e), i.shift(), i.length && s(i[0][0], i[0][1])
                        }
                    }(this, arguments, function () {
                        var n, r, o, i, a, s, c, u, l;
                        return et(this, function (f) {
                            switch (f.label) {
                                case 0:
                                    n = e, r = -1, f.label = 1;
                                case 1:
                                    f.trys.push([1, 13, 14, 19]), o = nt(t), f.label = 2;
                                case 2:
                                    return [4, rt(o.next())];
                                case 3:
                                    if ((i = f.sent()).done) return [3, 12];
                                    if (a = i.value, e && 0 === r) throw this.createExtraByteError(this.totalPos);
                                    this.appendBuffer(a), n && (r = this.readArraySize(), n = !1, this.complete()), f.label = 4;
                                case 4:
                                    f.trys.push([4, 9, , 10]), f.label = 5;
                                case 5:
                                    return [4, rt(this.doDecodeSync())];
                                case 6:
                                    return [4, f.sent()];
                                case 7:
                                    return f.sent(), 0 == --r ? [3, 8] : [3, 5];
                                case 8:
                                    return [3, 10];
                                case 9:
                                    if (!((s = f.sent()) instanceof at)) throw s;
                                    return [3, 10];
                                case 10:
                                    this.totalPos += this.pos, f.label = 11;
                                case 11:
                                    return [3, 2];
                                case 12:
                                    return [3, 19];
                                case 13:
                                    return c = f.sent(), u = {error: c}, [3, 19];
                                case 14:
                                    return f.trys.push([14, , 17, 18]), i && !i.done && (l = o.return) ? [4, rt(l.call(o))] : [3, 16];
                                case 15:
                                    f.sent(), f.label = 16;
                                case 16:
                                    return [3, 18];
                                case 17:
                                    if (u) throw u.error;
                                    return [7];
                                case 18:
                                    return [7];
                                case 19:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.doDecodeSync = function () {
                    t:for (; ;) {
                        var t = this.readHeadByte(), e = void 0;
                        if (t >= 224) e = t - 256; else if (t < 192) if (t < 128) e = t; else if (t < 144) {
                            if (0 != (r = t - 128)) {
                                this.pushMapState(r), this.complete();
                                continue t
                            }
                            e = {}
                        } else if (t < 160) {
                            if (0 != (r = t - 144)) {
                                this.pushArrayState(r), this.complete();
                                continue t
                            }
                            e = []
                        } else {
                            var n = t - 160;
                            e = this.decodeUtf8String(n, 0)
                        } else if (192 === t) e = null; else if (194 === t) e = !1; else if (195 === t) e = !0; else if (202 === t) e = this.readF32(); else if (203 === t) e = this.readF64(); else if (204 === t) e = this.readU8(); else if (205 === t) e = this.readU16(); else if (206 === t) e = this.readU32(); else if (207 === t) e = this.readU64(); else if (208 === t) e = this.readI8(); else if (209 === t) e = this.readI16(); else if (210 === t) e = this.readI32(); else if (211 === t) e = this.readI64(); else if (217 === t) n = this.lookU8(), e = this.decodeUtf8String(n, 1); else if (218 === t) n = this.lookU16(), e = this.decodeUtf8String(n, 2); else if (219 === t) n = this.lookU32(), e = this.decodeUtf8String(n, 4); else if (220 === t) {
                            if (0 !== (r = this.readU16())) {
                                this.pushArrayState(r), this.complete();
                                continue t
                            }
                            e = []
                        } else if (221 === t) {
                            if (0 !== (r = this.readU32())) {
                                this.pushArrayState(r), this.complete();
                                continue t
                            }
                            e = []
                        } else if (222 === t) {
                            if (0 !== (r = this.readU16())) {
                                this.pushMapState(r), this.complete();
                                continue t
                            }
                            e = {}
                        } else if (223 === t) {
                            if (0 !== (r = this.readU32())) {
                                this.pushMapState(r), this.complete();
                                continue t
                            }
                            e = {}
                        } else if (196 === t) {
                            var r = this.lookU8();
                            e = this.decodeBinary(r, 1)
                        } else if (197 === t) r = this.lookU16(), e = this.decodeBinary(r, 2); else if (198 === t) r = this.lookU32(), e = this.decodeBinary(r, 4); else if (212 === t) e = this.decodeExtension(1, 0); else if (213 === t) e = this.decodeExtension(2, 0); else if (214 === t) e = this.decodeExtension(4, 0); else if (215 === t) e = this.decodeExtension(8, 0); else if (216 === t) e = this.decodeExtension(16, 0); else if (199 === t) r = this.lookU8(), e = this.decodeExtension(r, 1); else if (200 === t) r = this.lookU16(), e = this.decodeExtension(r, 2); else {
                            if (201 !== t) throw new H("Unrecognized type byte: ".concat(J(t)));
                            r = this.lookU32(), e = this.decodeExtension(r, 4)
                        }
                        this.complete();
                        for (var o = this.stack; o.length > 0;) {
                            var i = o[o.length - 1];
                            if (0 === i.type) {
                                if (i.array[i.position] = e, i.position++, i.position !== i.size) continue t;
                                o.pop(), e = i.array
                            } else {
                                if (1 === i.type) {
                                    if (void 0, "string" != (a = typeof e) && "number" !== a) throw new H("The type of key must be string or number but " + typeof e);
                                    if ("__proto__" === e) throw new H("The key __proto__ is not allowed");
                                    i.key = e, i.type = 2;
                                    continue t
                                }
                                if (i.map[i.key] = e, i.readCount++, i.readCount !== i.size) {
                                    i.key = null, i.type = 1;
                                    continue t
                                }
                                o.pop(), e = i.map
                            }
                        }
                        return e
                    }
                    var a
                }, t.prototype.readHeadByte = function () {
                    return -1 === this.headByte && (this.headByte = this.readU8()), this.headByte
                }, t.prototype.complete = function () {
                    this.headByte = -1
                }, t.prototype.readArraySize = function () {
                    var t = this.readHeadByte();
                    switch (t) {
                        case 220:
                            return this.readU16();
                        case 221:
                            return this.readU32();
                        default:
                            if (t < 160) return t - 144;
                            throw new H("Unrecognized array type byte: ".concat(J(t)))
                    }
                }, t.prototype.pushMapState = function (t) {
                    if (t > this.maxMapLength) throw new H("Max length exceeded: map length (".concat(t, ") > maxMapLengthLength (").concat(this.maxMapLength, ")"));
                    this.stack.push({type: 1, size: t, key: null, readCount: 0, map: {}})
                }, t.prototype.pushArrayState = function (t) {
                    if (t > this.maxArrayLength) throw new H("Max length exceeded: array length (".concat(t, ") > maxArrayLength (").concat(this.maxArrayLength, ")"));
                    this.stack.push({type: 0, size: t, array: new Array(t), position: 0})
                }, t.prototype.decodeUtf8String = function (t, e) {
                    var n;
                    if (t > this.maxStrLength) throw new H("Max length exceeded: UTF-8 byte length (".concat(t, ") > maxStrLength (").concat(this.maxStrLength, ")"));
                    if (this.bytes.byteLength < this.pos + e + t) throw st;
                    var r, o = this.pos + e;
                    return r = this.stateIsMapKey() && (null === (n = this.keyDecoder) || void 0 === n ? void 0 : n.canBeCached(t)) ? this.keyDecoder.decode(this.bytes, o, t) : t > W ? function (t, e, n) {
                        var r = t.subarray(e, e + n);
                        return q.decode(r)
                    }(this.bytes, o, t) : z(this.bytes, o, t), this.pos += e + t, r
                }, t.prototype.stateIsMapKey = function () {
                    return this.stack.length > 0 && 1 === this.stack[this.stack.length - 1].type
                }, t.prototype.decodeBinary = function (t, e) {
                    if (t > this.maxBinLength) throw new H("Max length exceeded: bin length (".concat(t, ") > maxBinLength (").concat(this.maxBinLength, ")"));
                    if (!this.hasRemaining(t + e)) throw st;
                    var n = this.pos + e, r = this.bytes.subarray(n, n + t);
                    return this.pos += e + t, r
                }, t.prototype.decodeExtension = function (t, e) {
                    if (t > this.maxExtLength) throw new H("Max length exceeded: ext length (".concat(t, ") > maxExtLength (").concat(this.maxExtLength, ")"));
                    var n = this.view.getInt8(this.pos + e), r = this.decodeBinary(t, e + 1);
                    return this.extensionCodec.decode(r, n, this.context)
                }, t.prototype.lookU8 = function () {
                    return this.view.getUint8(this.pos)
                }, t.prototype.lookU16 = function () {
                    return this.view.getUint16(this.pos)
                }, t.prototype.lookU32 = function () {
                    return this.view.getUint32(this.pos)
                }, t.prototype.readU8 = function () {
                    var t = this.view.getUint8(this.pos);
                    return this.pos++, t
                }, t.prototype.readI8 = function () {
                    var t = this.view.getInt8(this.pos);
                    return this.pos++, t
                }, t.prototype.readU16 = function () {
                    var t = this.view.getUint16(this.pos);
                    return this.pos += 2, t
                }, t.prototype.readI16 = function () {
                    var t = this.view.getInt16(this.pos);
                    return this.pos += 2, t
                }, t.prototype.readU32 = function () {
                    var t = this.view.getUint32(this.pos);
                    return this.pos += 4, t
                }, t.prototype.readI32 = function () {
                    var t = this.view.getInt32(this.pos);
                    return this.pos += 4, t
                }, t.prototype.readU64 = function () {
                    var t, e, n = (t = this.view, e = this.pos, 4294967296 * t.getUint32(e) + t.getUint32(e + 4));
                    return this.pos += 8, n
                }, t.prototype.readI64 = function () {
                    var t = O(this.view, this.pos);
                    return this.pos += 8, t
                }, t.prototype.readF32 = function () {
                    var t = this.view.getFloat32(this.pos);
                    return this.pos += 4, t
                }, t.prototype.readF64 = function () {
                    var t = this.view.getFloat64(this.pos);
                    return this.pos += 8, t
                }, t
            }(), lt = {}, ft = r(26), ht = r(11), pt = r(121);
            !function (t) {
                t[t.Peer = 0] = "Peer", t[t.Leech = 1] = "Leech", t[t.Seedbox = 2] = "Seedbox"
            }(Z || (Z = {}));
            var dt = l()(function t() {
                h()(this, t), d()(this, "peerId", ""), d()(this, "isDownloadBlockReport", !1), d()(this, "isAnswerAccepted", !1), d()(this, "candidate_resolver", void 0)
            }), vt = l()(function t(e) {
                var n = this;
                h()(this, t), d()(this, "buf", void 0), d()(this, "promise", void 0), d()(this, "resolver", void 0), this.buf = e, this.promise = new x.a(function (t) {
                    n.resolver = t
                })
            }), gt = l()(function t() {
                h()(this, t), d()(this, "action", ""), d()(this, "data", void 0)
            }), yt = l()(function t() {
                h()(this, t), d()(this, "requestId", -1), d()(this, "status", "not_implemented"), d()(this, "data", void 0)
            }), xt = l()(function t() {
                h()(this, t), d()(this, "type", ""), d()(this, "requestId", -1), d()(this, "action_type", ""), d()(this, "action", ""), d()(this, "data", void 0)
            }), Ct = function () {
                function t(e, n) {
                    var r = this;
                    h()(this, t), d()(this, "p2pContext", void 0), d()(this, "dc", void 0), d()(this, "sendQueue", new Array), d()(this, "isSending", !1), this.p2pContext = e, this.dc = n, this.dc.binaryType = "arraybuffer", this.dc.bufferedAmountLowThreshold = 262144, this.dc.onbufferedamountlow = function () {
                        return r.onDCWritable()
                    }
                }

                return l()(t, [{
                    key: "onDCWritable", value: function () {
                        var t = this;
                        this.isSending = !0;
                        for (var e, n, r = this.dc.bufferedAmount; r < 1048576;) {
                            var o, i = this.sendQueue.shift();
                            if (void 0 === i) {
                                this.isSending = !1;
                                break
                            }
                            void 0 !== i.buf.data && null !== i.buf.data && void 0 !== i.buf.data.length && i.buf.data.length > 1024 || (this.p2pContext.printExtLog(6, "send: " + i.buf), this.p2pContext.Config.allowPrintLog(6) && console.log("send: " + i.buf));
                            try {
                                if ("open" === this.dc.readyState) {
                                    var a = (e = i.buf, void 0 === (n = void 0) && (n = $), new X(n.extensionCodec, n.context, n.maxDepth, n.initialBufferSize, n.sortKeys, n.forceFloat32, n.ignoreUndefined, n.forceIntegerToFloat).encodeSharedRef(e));
                                    this.dc.send(a), r += a.length
                                }
                            } catch (t) {
                                this.p2pContext.printExtLog(0, "One sister forcibly disconnected from the Misaka Network. QwQ"), this.p2pContext.Config.allowPrintLog(0) && console.info("[SistersPlayer] One sister forcibly disconnected from the Misaka Network. QwQ")
                            }
                            null === (o = i.resolver) || void 0 === o || o.call(i)
                        }
                        this.sendQueue.length > 0 && r > 1048576 && this.dc.bufferedAmount < this.dc.bufferedAmountLowThreshold && m()(function () {
                            return t.onDCWritable()
                        }, 0)
                    }
                }, {
                    key: "dataChannel", value: function () {
                        return this.dc
                    }
                }, {
                    key: "send", value: function (t) {
                        var e = new vt(t);
                        return this.sendQueue.push(e), !1 === this.isSending && this.onDCWritable(), e.promise
                    }
                }]), t
            }(), mt = function () {
                function t(e, n, r) {
                    var o, i = this;
                    h()(this, t), d()(this, "p2pContext", void 0), d()(this, "peerSched", void 0), d()(this, "incoming", void 0), d()(this, "pc", void 0), d()(this, "dc", void 0), d()(this, "requestId", 0), d()(this, "pendingRequests", new k.a), d()(this, "dc_resolver", void 0), d()(this, "dc_future", void 0), d()(this, "extData", new dt), d()(this, "onCandidate", void 0), d()(this, "candidates", new Array), d()(this, "role_", Z.Peer), d()(this, "seedSliceIds_", new S.a), d()(this, "seedScore", 100), d()(this, "natType", "non-sym"), this.p2pContext = e, this.incoming = r, this.peerSched = n;
                    var a = [];
                    if (A()(o = this.p2pContext.Config.stunServers).call(o, function (t) {
                        var e = {urls: t};
                        a.push(e)
                    }), this.pc = new RTCPeerConnection({
                        iceServers: a,
                        iceCandidatePoolSize: this.p2pContext.Config.iceCandidatePoolSize,
                        iceTransportPolicy: "all"
                    }), !this.pc) throw "Emtpy RTCPeerConnection object after creating.";
                    this.pc.addEventListener("datachannel", function (t) {
                        "misaka-denpa" === t.channel.label && (i.dc = new Ct(i.p2pContext, t.channel), i.dc.dataChannel().onmessage = function (t) {
                            return i.onMessageReceived(t.data)
                        }, void 0 !== i.dc_resolver && i.dc_resolver())
                    }), this.pc.addEventListener("icegatheringstatechange", function (t) {
                        switch (i.p2pContext.printExtLog(4, "peer " + i.extData.peerId + " icegatheringstatechange state: " + i.pc.iceGatheringState), i.p2pContext.Config.allowPrintLog(4) && console.log("peer " + i.extData.peerId + " icegatheringstatechange state: " + i.pc.iceGatheringState), i.pc.iceGatheringState) {
                            case"new":
                            case"gathering":
                                break;
                            case"complete":
                                i.extData.candidate_resolver && i.extData.candidate_resolver(!0)
                        }
                    }), this.pc.addEventListener("iceconnectionstatechange", function (t) {
                        switch (i.p2pContext.printExtLog(4, "peer " + i.extData.peerId + " iceconnection state: " + i.pc.iceConnectionState), i.p2pContext.Config.allowPrintLog(4) && console.log("peer " + i.extData.peerId + " iceconnection state: " + i.pc.iceConnectionState), i.pc.iceConnectionState) {
                            case"new":
                            case"checking":
                            case"connected":
                            case"completed":
                                break;
                            case"disconnected":
                                i.peerSched.onPeerDisConnected(i);
                                break;
                            case"failed":
                                i.peerSched.onPeerConnectComplete(i, !1);
                                break;
                            case"closed":
                                i.peerSched.onPeerDisConnected(i)
                        }
                    }), this.pc.addEventListener("signalingstatechange", function (t) {
                        i.p2pContext.printExtLog(4, "peer " + i.extData.peerId + " signaling state: " + i.pc.iceConnectionState), i.p2pContext.Config.allowPrintLog(4) && console.log("peer " + i.extData.peerId + " signaling state: " + i.pc.iceConnectionState), i.pc.signalingState
                    }), this.pc.addEventListener("icecandidate", function (t) {
                        null != t.candidate && i.onCandidate(t.candidate)
                    }), this.onCandidate = function (t) {
                        null != t && null != t.candidate && "" != t.candidate && i.candidates.push(t)
                    }
                }

                var e, n, r, o, i, a, s;
                return l()(t, [{
                    key: "peerRole", get: function () {
                        return this.role_
                    }
                }, {
                    key: "seedSliceIds", get: function () {
                        return this.seedSliceIds_
                    }
                }, {
                    key: "close", value: function () {
                        var t, e, n;
                        0 == this.extData.isDownloadBlockReport && (1 == this.extData.isAnswerAccepted ? null === (e = this.p2pContext.PeerSched) || void 0 === e || e.reportDownloadBlockAwaysFail(this) : null === (n = this.p2pContext.PeerSched) || void 0 === n || n.reportConnectionAbort(this)), null === (t = this.dc) || void 0 === t || t.dataChannel().close(), "closed" != this.pc.signalingState && this.pc.close()
                    }
                }, {
                    key: "isIncoming", value: function () {
                        return this.incoming
                    }
                }, {
                    key: "setCandidateCallback", value: function (t) {
                        var e = this;
                        new x.a(function (t) {
                            return t(e.candidates)
                        }).then(function (e) {
                            A()(e).call(e, function (e) {
                                return t(e)
                            })
                        }), this.onCandidate = t, this.candidates = new Array
                    }
                }, {
                    key: "createNyaOffer", value: (s = c()(g.a.mark(function t(e) {
                        var n, r = this;
                        return g.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return this.dc = new Ct(this.p2pContext, this.pc.createDataChannel("misaka-denpa", {
                                        ordered: !1,
                                        negotiated: !1,
                                        maxPacketLifeTime: this.p2pContext.Config.peerPacketLifeTime
                                    })), this.dc_future = x.a.resolve(), this.dc.dataChannel().onmessage = function (t) {
                                        return r.onMessageReceived(t.data)
                                    }, t.next = 5, this.pc.createOffer({
                                        iceRestart: !0,
                                        offerToReceiveAudio: !1,
                                        offerToReceiveVideo: !1
                                    });
                                case 5:
                                    return n = t.sent, this.pc.setLocalDescription(n), t.abrupt("return", this.waitForCandidate(e, n));
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "answerNyaOffer", value: (a = c()(g.a.mark(function t(e, n) {
                        var r, o = this;
                        return g.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return this.dc_future = new x.a(function (t) {
                                        return o.dc_resolver = t
                                    }), t.next = 3, this.pc.setRemoteDescription(e);
                                case 3:
                                    return t.next = 5, this.pc.createAnswer({
                                        iceRestart: !0,
                                        offerToReceiveAudio: !1,
                                        offerToReceiveVideo: !1
                                    });
                                case 5:
                                    return r = t.sent, this.pc.setLocalDescription(r), t.abrupt("return", this.waitForCandidate(n, r));
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, e) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "waitForCandidate", value: (i = c()(g.a.mark(function t(e, n) {
                        var r, o, i, a, s = this;
                        return g.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return r = new x.a(function (t) {
                                        return s.extData.candidate_resolver = t
                                    }), t.next = 3, x.a.race(new Array(new x.a(function (t) {
                                        return o = m()(function () {
                                            return t(!0)
                                        }, s.p2pContext.Config.candidateWaitMaxTimeMs)
                                    }), r));
                                case 3:
                                    clearTimeout(o), i = void 0;
                                    try {
                                        i = this.pc.localDescription
                                    } catch (t) {
                                        this.p2pContext.Config.allowPrintLog(3) && console.log("localDescription get erreo: ", t)
                                    }
                                    return null == i ? i = new RTCSessionDescription(n) : R()(a = this.candidates).call(a, 0, this.candidates.length), this.setCandidateCallback(e), t.abrupt("return", i);
                                case 9:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, e) {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "acceptNyaAnswer", value: (o = c()(g.a.mark(function t(e) {
                        var n = this;
                        return g.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return this.pc.setRemoteDescription(e).catch(function (t) {
                                        n.p2pContext.printExtLog(2, "accept answer failed: " + t.message), n.p2pContext.Config.allowPrintLog(2) && console.warn("accept answer failed: " + t.message), n.extData.isAnswerAccepted = !1
                                    }), this.extData.isAnswerAccepted = !0, t.next = 4, this.waitForConnected();
                                case 4:
                                    return t.abrupt("return", t.sent);
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "addRemoteCandidate", value: (r = c()(g.a.mark(function t(e) {
                        return g.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.prev = 0, t.next = 3, this.pc.addIceCandidate(e);
                                case 3:
                                    return t.abrupt("return", t.sent);
                                case 6:
                                    return t.prev = 6, t.t0 = t.catch(0), t.abrupt("return");
                                case 9:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this, [[0, 6]])
                    })), function (t) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "waitForConnected", value: (n = c()(g.a.mark(function t() {
                        var e, n, r, o, i, a = this;
                        return g.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = new ft.b, void 0 === this.dc_future) {
                                        t.next = 6;
                                        break
                                    }
                                    return n = void 0, t.next = 5, x.a.race([this.dc_future, new x.a(function (t) {
                                        n = m()(t, a.p2pContext.Config.peerConnectionTimeoutMs)
                                    })]);
                                case 5:
                                    void 0 !== n && clearTimeout(n);
                                case 6:
                                    if (void 0 !== this.dc) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 8:
                                    if (r = void 0, "open" !== this.dc.dataChannel().readyState && (r = new x.a(function (t) {
                                        if (void 0 !== a.dc) {
                                            a.dc.dataChannel().onopen = function (e) {
                                                return t(!0)
                                            }, a.dc.dataChannel().onerror = function (e) {
                                                return t(!1)
                                            };
                                            var n = function (e) {
                                                "failed" === a.pc.iceConnectionState && (a.p2pContext.printExtLog(2, "ice connection state failed when wait for connected."), a.p2pContext.Config.allowPrintLog(2) && console.log("ice connection state failed when wait for connected."), t(!1))
                                            };
                                            a.pc.addEventListener("iceconnectionstatechange", n), e.onResolved(function () {
                                                return a.pc.removeEventListener("iceconnectionstatechange", n)
                                            })
                                        }
                                    })), o = !1, void 0 === r) {
                                        t.next = 24;
                                        break
                                    }
                                    if (!(this.p2pContext.Config.peerConnectionTimeoutMs > 0)) {
                                        t.next = 19;
                                        break
                                    }
                                    return t.next = 15, x.a.race(new Array(r, new x.a(function (t) {
                                        i = m()(function () {
                                            return t(!1)
                                        }, a.p2pContext.Config.peerConnectionTimeoutMs)
                                    })));
                                case 15:
                                    o = t.sent, clearTimeout(i), t.next = 22;
                                    break;
                                case 19:
                                    return t.next = 21, r;
                                case 21:
                                    o = t.sent;
                                case 22:
                                    t.next = 25;
                                    break;
                                case 24:
                                    o = !0;
                                case 25:
                                    return !0 === o && (this.dc.dataChannel().onclose = function (t) {
                                        return a.peerSched.onPeerDisConnected(a)
                                    }), e.setResult(1), t.abrupt("return", o);
                                case 28:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "sendRequestMessage", value: function (t) {
                        return this.sendMessage(function () {
                            var e = t();
                            if (void 0 !== e) return {
                                type: "request",
                                requestId: -1,
                                action_type: "action",
                                action: e.action,
                                data: e.data
                            }
                        })
                    }
                }, {
                    key: "sendResponseMessage", value: function (t) {
                        return this.sendMessage(function () {
                            var e = t();
                            if (void 0 !== e) return {
                                type: "response",
                                requestId: e.requestId,
                                action_type: "status",
                                action: e.status,
                                data: e.data
                            }
                        })
                    }
                }, {
                    key: "sendMessage", value: (e = c()(g.a.mark(function t(e) {
                        var n, r, o, i, a, s, c, u = this;
                        return g.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if ("open" != (null === (n = this.dc) || void 0 === n ? void 0 : n.dataChannel().readyState)) {
                                        t.next = 16;
                                        break
                                    }
                                    if (void 0 !== (r = e())) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return", void 0);
                                case 4:
                                    return o = r.requestId < 0, r.requestId < 0 && (++this.requestId, r.requestId = this.requestId), (i = {
                                        type: r.type,
                                        requestId: r.requestId,
                                        data: r.data
                                    })[r.action_type] = r.action, a = this.pendingRequests, s = this.dc, t.next = 12, new x.a(function (t) {
                                        if (o) {
                                            a.has(i.requestId) && console.log("duplicated request id!");
                                            var e = void 0;
                                            u.p2pContext.Config.peerTimeoutMs > 0 && (e = m()(function () {
                                                a.delete(i.requestId), t(!1)
                                            }, u.p2pContext.Config.peerTimeoutMs)), void 0 !== e ? a.set(i.requestId, function (n) {
                                                clearTimeout(e), t(n)
                                            }) : a.set(i.requestId, t)
                                        } else t(!0);
                                        null == s || s.send(i)
                                    });
                                case 12:
                                    return c = t.sent, t.abrupt("return", c);
                                case 16:
                                    return t.abrupt("return", void 0);
                                case 17:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "terminateAllPendingRequests", value: function () {
                        var t;
                        A()(t = this.pendingRequests).call(t, function (t, e) {
                            t(void 0)
                        }), this.pendingRequests.clear()
                    }
                }, {
                    key: "onMessageReceived", value: function (t) {
                        try {
                            var e = (n = t, void 0 === r && (r = lt), new ut(r.extensionCodec, r.context, r.maxStrLength, r.maxBinLength, r.maxArrayLength, r.maxMapLength, r.maxExtLength).decode(n));
                            null !== e.data && void 0 !== e.data && void 0 !== e.data.length && e.data.length > 1024 || (this.p2pContext.printExtLog(6, this.extData.peerId + " recv: " + e), this.p2pContext.Config.allowPrintLog(6) && console.log(this.extData.peerId + " recv: ", e)), "response" == e.type && T()(e.requestId) && e.requestId > 0 ? this.dispatchResponse(e) : "request" == e.type && T()(e.requestId) && this.peerSched.onPeerRequestMessage(this, e)
                        } catch (t) {
                            void 0 !== e && this.p2pContext.P2PDataCollectionStatus.addWastedDataSize(e.byteLength, ht.e.ERROR_DATA), this.p2pContext.GhostPeerIds.add(this.extData.peerId), this.close(), console.log(t)
                        }
                        var n, r
                    }
                }, {
                    key: "dispatchResponse", value: function (t) {
                        var e, n = this.pendingRequests.get(t.requestId);
                        void 0 !== n ? (this.pendingRequests.delete(t.requestId), n(t)) : "ok" === t.status && void 0 !== (null === (e = t.data) || void 0 === e ? void 0 : e.length) && (this.p2pContext.printExtLog(4, "no request for received response " + t.data.byteLength), this.p2pContext.Config.allowPrintLog(4) && console.log("no request for received response " + t.data.byteLength), this.peerSched.getP2PContext().P2PDataCollectionStatus.addWastedDataSize(t.data.byteLength, ht.e.P2P_LATE))
                    }
                }, {
                    key: "parsePeerRole", value: function (t) {
                        var e;
                        null != t && ("leech" !== t.type ? "seed" === t.type && t.sliceProvider instanceof Array && L()(e = t.sliceProvider).call(e, function (t, e) {
                            return t && "number" == typeof e
                        }, !0) && (this.role_ = Z.Seedbox, this.seedSliceIds_ = new S.a(t.sliceProvider)) : this.role_ = Z.Leech)
                    }
                }, {
                    key: "onDownloadBlockFailed", value: function () {
                        this.peerRole == Z.Seedbox && (this.seedScore -= this.p2pContext.Config.seedScoreDown, this.seedScore <= 0 && this.close())
                    }
                }, {
                    key: "onDownloadBlockSucceed", value: function () {
                        this.peerRole == Z.Seedbox && this.seedScore < this.p2pContext.Config.seedBoxScoreMax && (this.seedScore += this.p2pContext.Config.seedScoreUp)
                    }
                }, {
                    key: "shouldUsedAsSeed", value: function () {
                        return Object(pt.b)(100) < this.seedScore
                    }
                }]), t
            }()
        },
        function (t, e, n) {
            var r = n(16);
            t.exports = function (t) {
                return r[t + "Prototype"]
            }
        },
        function (t, e, n) {
            t.exports = n(421)
        },
        function (t, e, n) {
            var r = n(16), o = n(15), i = n(18), a = function (t) {
                return i(t) ? t : void 0
            };
            t.exports = function (t, e) {
                return arguments.length < 2 ? a(r[t]) || a(o[t]) : r[t] && r[t][e] || o[t] && o[t][e]
            }
        },
        function (t, e, n) {
            var r = n(22), o = n(144), i = n(146), a = n(35), s = n(104), c = TypeError, u = Object.defineProperty,
                l = Object.getOwnPropertyDescriptor;
            e.f = r ? i ? function (t, e, n) {
                if (a(t), e = s(e), a(n), "function" == typeof t && "prototype" === e && "value" in n && "writable" in n && !n.writable) {
                    var r = l(t, e);
                    r && r.writable && (t[e] = n.value, n = {
                        configurable: "configurable" in n ? n.configurable : r.configurable,
                        enumerable: "enumerable" in n ? n.enumerable : r.enumerable,
                        writable: !1
                    })
                }
                return u(t, e, n)
            } : u : function (t, e, n) {
                if (a(t), e = s(e), a(n), o) try {
                    return u(t, e, n)
                } catch (t) {
                }
                if ("get" in n || "set" in n) throw c("Accessors not supported");
                return "value" in n && (t[e] = n.value), t
            }
        },
        function (t, e, n) {
            t.exports = n(388)
        },
        function (t, e, n) {
            var r = n(107), o = n(313);

            function i(e) {
                return t.exports = i = "function" == typeof r && "symbol" == typeof o ? function (t) {
                    return typeof t
                } : function (t) {
                    return t && "function" == typeof r && t.constructor === r && t !== r.prototype ? "symbol" : typeof t
                }, t.exports.__esModule = !0, t.exports.default = t.exports, i(e)
            }

            t.exports = i, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        function (t, e, n) {
            var r = n(72), o = Object;
            t.exports = function (t) {
                return o(r(t))
            }
        },
        function (t, e, n) {
            var r = n(24), o = String, i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw i(o(t) + " is not an object")
            }
        },
        function (t, e, n) {
            var r = n(149);
            t.exports = function (t) {
                return r(t.length)
            }
        },
        function (t, e, n) {
            var r = n(59), o = String;
            t.exports = function (t) {
                if ("Symbol" === r(t)) throw TypeError("Cannot convert a Symbol value to a string");
                return o(t)
            }
        },
        function (t, e, n) {
            var r = n(18), o = n(75), i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw i(o(t) + " is not a function")
            }
        },
        function (t, e) {
            t.exports = !0
        },
        function (t, e, n) {
            t.exports = n(166)
        },
        function (t, e, n) {
            t.exports = n(377)
        },
        function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, "Configuration", function () {
                return u
            });
            var r = n(2), o = n.n(r), i = n(3), a = n.n(i), s = n(0), c = n.n(s), u = function () {
                function t() {
                    o()(this, t), c()(this, "trackerServers", ["wss://tracker.chat.bilibili.com/"]), c()(this, "stunServers", ["stun:stun6.chat.bilibili.com:3478", "stun:stun.chat.bilibili.com:3478"]), c()(this, "natCheckStunServers", []), c()(this, "natFilteringCheckServers", []), c()(this, "allowedChangeBooleanValues", ["p2pTransferSecondhandDataEnable", "multiTabsShareLimitEnable", "useSeedBox", "enableReverseOrder", "enableHideOwner"]), c()(this, "nonP2PFragmentCountAllowedRange", [0, 8]), c()(this, "nonP2PFragmentCount", 4), c()(this, "p2pBufferLengthSecAllowedRange", [0, 8]), c()(this, "p2pBufferLengthSec", 2.5), c()(this, "iceCandidatePoolSizeAllowedRange", [0, 10]), c()(this, "iceCandidatePoolSize", 10), c()(this, "serverTimeoutMsAllowedRange", [1e3, 1e4]), c()(this, "serverTimeoutMs", 3e3), c()(this, "peerConnectionTimeoutMsAllowedRange", [1e3, 1e4]), c()(this, "peerConnectionTimeoutMs", 5e3), c()(this, "peerTimeoutMsAllowedRange", [1e3, 1e4]), c()(this, "peerTimeoutMs", 3e3), c()(this, "uploadMaxWaitTimeoutMsAllowedRange", [1e3, 1e4]), c()(this, "uploadMaxWaitTimeoutMs", 2700), c()(this, "peerPacketLifetimeAllowedRange", [1e3, 1e4]), c()(this, "peerPacketLifeTime", 2500), c()(this, "refreshPeerProgressIntervalMsAllowedRange", [100, 1e3]), c()(this, "refreshPeerProgressIntervalMs", 200), c()(this, "sliceCount", 4), c()(this, "blockSize", 61440), c()(this, "inConnectingLimitAllowedRange", [1, 64]), c()(this, "inConnectingLimit", 8), c()(this, "outConnectingLimitAllowedRange", [1, 64]), c()(this, "outConnectingLimit", 8), c()(this, "connectedLimitAllowedRange", [0, 64]), c()(this, "connectedLimit", 12), c()(this, "leechConnectNumAllowedRange", [0, 64]), c()(this, "leechConnectNum", 4), c()(this, "seedboxConnectNumBySliceIdAllowedRange", [0, 64]), c()(this, "seedboxConnectNumBySliceId", 1), c()(this, "revisibleMarkAllowedRange", [1, 64]), c()(this, "revisibleMark", 8), c()(this, "reconnectWaitTimeSecAllowedRange", [1, 120]), c()(this, "reconnectWaitTimeSec", 10), c()(this, "fragmentCountOutdatedAllowedRange", [2, 120]), c()(this, "fragmentCountOutdated", 8), c()(this, "fragmentShareOverrideAllowedRange", [0, 100]), c()(this, "fragmentShareOverride", 1), c()(this, "fragmentShareOverrideMaxBytesAllowedRange", [0, 1e7]), c()(this, "fragmentShareOverrideMaxBytes", 125e4), c()(this, "fragmentExtraShareRatioAllowedRange", [0, 50]), c()(this, "fragmentExtraShareRatio", this.fragmentShareOverride / 2), c()(this, "totalDownloadInstancesAllowedRange", [2, 48]), c()(this, "totalDownloadInstances", 1.5 * this.connectedLimit), c()(this, "minDownloadInstancesPerPeer", 1), c()(this, "maxDownloadInstancesPerPeerAllowedRange", [1, 32]), c()(this, "maxDownloadInstancesPerPeer", 4), c()(this, "cdnFetchInstancesAllowedRange", [1, 32]), c()(this, "cdnFetchInstances", 2), c()(this, "fallbackCDNFetchInstancesAllowedRange", [1, 64]), c()(this, "fallbackCDNFetchInstances", 4), c()(this, "fetchCDNTimeoutMsAllowedRange", [500, 6e4]), c()(this, "fetchCDNTimeoutMs", 7e3), c()(this, "crcVerifyEnable", !0), c()(this, "crc32Interval", 1), c()(this, "developmentLogLevel", 2), c()(this, "productionLogLevel", 0), c()(this, "developmentExtLogLevel", 2), c()(this, "productionExtLogLevel", 1), c()(this, "p2pSafeBufferDurationForDelayStopMsAllowedRange", [0, 15e3]), c()(this, "p2pSafeBufferDurationForDelayStopMs", 2e3), c()(this, "p2pDelayStopMaxMsAllowedRange", [0, 15e3]), c()(this, "p2pDelayStopMaxMs", 1e3), c()(this, "p2pFetchDataObCycleCountAllowedRange", [1, 32]), c()(this, "p2pFetchDataObCycleCount", 4), c()(this, "p2pShareDataObCycleCountAllowedRange", [1, 32]), c()(this, "p2pShareDataObCycleCount", 3), c()(this, "p2pSliceIdControlFetchCheckIntervalMsAllowedRange", [2e3, 3e4]), c()(this, "p2pSliceIdControlFetchCheckIntervalMs", 4e3), c()(this, "p2pSliceIdControlShareCheckIntervalMsAllowedRange", [2e3, 3e4]), c()(this, "p2pSliceIdControlShareCheckIntervalMs", 3e3), c()(this, "p2pFetchLowestRatioAllowedRange", [.2, 1]), c()(this, "p2pFetchLowestRatio", .6), c()(this, "p2pShareLargestAllowedFetchRatioAllowedRange", [.2, 1]), c()(this, "p2pShareLargestAllowedFetchRatio", .8), c()(this, "p2pShareLowestRatioAllowedRange", [.2, 1]), c()(this, "p2pShareLowestRatio", .6), c()(this, "p2pAddSliceProbabilityAllowedRange", [0, 1]), c()(this, "p2pAddSliceProbability", .25), c()(this, "p2pDeleteSliceProbabilityAllowedRange", [0, 1]), c()(this, "p2pDeleteSliceProbability", .33), c()(this, "reportPeerSuccessProbabilityAllowedRange", [0, 1]), c()(this, "reportPeerSuccessProbability", 1), c()(this, "reportPeerFailedProbabilityAllowedRange", [0, 1]), c()(this, "reportPeerFailedProbability", .05), c()(this, "trackerStatusReportProbabilityAllowedRange", [0, 1]), c()(this, "trackerStatusReportProbability", .01), c()(this, "p2pTransferSecondhandDataEnable", !0), c()(this, "multiTabsShareLimitEnable", !0), c()(this, "useSeedBox", !0), c()(this, "seedScoreUpAllowedRange", [1, 20]), c()(this, "seedScoreUp", 1), c()(this, "seedScoreDownAllowedRange", [1, 50]), c()(this, "seedScoreDown", 12), c()(this, "seedBoxScoreMaxAllowedRange", [100, 1e3]),c()(this, "seedBoxScoreMax", 200),c()(this, "multiCheckBasicNatMinCountAllowedRange", [1, 16]),c()(this, "multiCheckBasicNatMinCount", 3),c()(this, "checkBasicNatTimeoutMsAllowedRange", [0, 3e4]),c()(this, "checkBasicNatTimeoutMs", 2e3),c()(this, "natDowngradeLimitAllowedRange", [1, 32]),c()(this, "natDowngradeLimit", 5),c()(this, "natFilteringCheckPortAllowedRange", [0, 65535]),c()(this, "natFilteringCheckPort", 53007),c()(this, "natFilteringCheckAltPortAllowedRange", [0, 65535]),c()(this, "natFilteringCheckAltPort", 53017),c()(this, "natFilteringCheckTimeoutMsAllowedRange", [0, 3e4]),c()(this, "natFilteringCheckTimeoutMs", 2e3),c()(this, "natKakushinTimeoutMsAllowedRange", [0, 6048e5]),c()(this, "natKakushinTimeoutMs", 9e5),c()(this, "getPeersIntervalMsAllowedRange", [0, 36e5]),c()(this, "getPeersIntervalMs", 1e4),c()(this, "candidateWaitMaxTimeMsAllowedRange", [0, 3e4]),c()(this, "candidateWaitMaxTimeMs", 150),c()(this, "maxDistanceAllowedRange", [0, 16]),c()(this, "maxDistance", 1),c()(this, "enableReverseOrder", !1),c()(this, "enableHideOwner", !0)
                }

                return a()(t, [{
                    key: "allowPrintLog", value: function (e) {
                        return "development" === t.curNodeEnv ? e <= this.developmentLogLevel : e <= this.productionLogLevel
                    }
                }, {
                    key: "allowPrintExtLog", value: function (e) {
                        return "development" === t.curNodeEnv ? e <= this.developmentExtLogLevel : e <= this.productionExtLogLevel
                    }
                }]), t
            }();
            c()(u, "curNodeEnv", "production"), c()(u, "ProtocolVersion", 10), c()(u, "failbackFetchCDNTimeoutMs", 7e3)
        },
        function (t, e, n) {
            var r = n(101), o = n(38), i = n(100), a = r(r.bind);
            t.exports = function (t, e) {
                return o(t), void 0 === e ? t : i ? a(t, e) : function () {
                    return t.apply(e, arguments)
                }
            }
        },
        function (t, e, n) {
            var r = n(48);
            t.exports = function (t, e, n, o) {
                return o && o.enumerable ? t[e] = n : r(t, e, n), t
            }
        },
        function (t, e, n) {
            t.exports = n(429)
        },
        function (t, e, n) {
            var r = n(103), o = n(72);
            t.exports = function (t) {
                return r(o(t))
            }
        },
        function (t, e, n) {
            t.exports = n(458)
        },
        function (t, e, n) {
            var r = n(22), o = n(31), i = n(56);
            t.exports = r ? function (t, e, n) {
                return o.f(t, e, i(1, n))
            } : function (t, e, n) {
                return t[e] = n, t
            }
        },
        function (t, e, n) {
            var r = n(128), o = n(31).f, i = n(48), a = n(25), s = n(225), c = n(17)("toStringTag");
            t.exports = function (t, e, n, u) {
                if (t) {
                    var l = n ? t : t.prototype;
                    a(l, c) || o(l, c, {configurable: !0, value: e}), u && !r && i(l, "toString", s)
                }
            }
        },
        function (t, e, n) {
            n(51);
            var r = n(247), o = n(15), i = n(59), a = n(48), s = n(78), c = n(17)("toStringTag");
            for (var u in r) {
                var l = o[u], f = l && l.prototype;
                f && i(f) !== c && a(f, c, u), s[u] = s.Array
            }
        },
        function (t, e, n) {
            "use strict";
            var r = n(46), o = n(132), i = n(78), a = n(60), s = n(31).f, c = n(133), u = n(134), l = n(39), f = n(22),
                h = a.set, p = a.getterFor("Array Iterator");
            t.exports = c(Array, "Array", function (t, e) {
                h(this, {type: "Array Iterator", target: r(t), index: 0, kind: e})
            }, function () {
                var t = p(this), e = t.target, n = t.kind, r = t.index++;
                return !e || r >= e.length ? (t.target = void 0, u(void 0, !0)) : u("keys" == n ? r : "values" == n ? e[r] : [r, e[r]], !1)
            }, "values");
            var d = i.Arguments = i.Array;
            if (o("keys"), o("values"), o("entries"), !l && f && "values" !== d.name) try {
                s(d, "name", {value: "values"})
            } catch (t) {
            }
        },
        function (t, e, n) {
            t.exports = n(392)
        },
        function (t, e, n) {
            t.exports = n(414)
        },
        function (t, e, n) {
            t.exports = n(381)
        },
        function (t, e, n) {
            var r = n(13), o = r({}.toString), i = r("".slice);
            t.exports = function (t) {
                return i(o(t), 8, -1)
            }
        },
        function (t, e) {
            t.exports = function (t, e) {
                return {enumerable: !(1 & t), configurable: !(2 & t), writable: !(4 & t), value: e}
            }
        },
        function (t, e, n) {
            var r = n(30);
            t.exports = r("navigator", "userAgent") || ""
        },
        function (t, e, n) {
            var r = n(55);
            t.exports = Array.isArray || function (t) {
                return "Array" == r(t)
            }
        },
        function (t, e, n) {
            var r = n(128), o = n(18), i = n(55), a = n(17)("toStringTag"), s = Object,
                c = "Arguments" == i(function () {
                    return arguments
                }());
            t.exports = r ? i : function (t) {
                var e, n, r;
                return void 0 === t ? "Undefined" : null === t ? "Null" : "string" == typeof (n = function (t, e) {
                    try {
                        return t[e]
                    } catch (t) {
                    }
                }(e = s(t), a)) ? n : c ? i(e) : "Object" == (r = i(e)) && o(e.callee) ? "Arguments" : r
            }
        },
        function (t, e, n) {
            var r, o, i, a = n(226), s = n(15), c = n(24), u = n(48), l = n(25), f = n(125), h = n(111), p = n(90),
                d = s.TypeError, v = s.WeakMap;
            if (a || f.state) {
                var g = f.state || (f.state = new v);
                g.get = g.get, g.has = g.has, g.set = g.set, r = function (t, e) {
                    if (g.has(t)) throw d("Object already initialized");
                    return e.facade = t, g.set(t, e), e
                }, o = function (t) {
                    return g.get(t) || {}
                }, i = function (t) {
                    return g.has(t)
                }
            } else {
                var y = h("state");
                p[y] = !0, r = function (t, e) {
                    if (l(t, y)) throw d("Object already initialized");
                    return e.facade = t, u(t, y, e), e
                }, o = function (t) {
                    return l(t, y) ? t[y] : {}
                }, i = function (t) {
                    return l(t, y)
                }
            }
            t.exports = {
                set: r, get: o, has: i, enforce: function (t) {
                    return i(t) ? o(t) : r(t, {})
                }, getterFor: function (t) {
                    return function (e) {
                        var n;
                        if (!c(e) || (n = o(e)).type !== t) throw d("Incompatible receiver, " + t + " required");
                        return n
                    }
                }
            }
        },
        function (t, e, n) {
            var r = n(43), o = n(23), i = n(35), a = n(75), s = n(171), c = n(36), u = n(21), l = n(135), f = n(92),
                h = n(170), p = TypeError, d = function (t, e) {
                    this.stopped = t, this.result = e
                }, v = d.prototype;
            t.exports = function (t, e, n) {
                var g, y, x, C, m, w, k, b = n && n.that, S = !(!n || !n.AS_ENTRIES), P = !(!n || !n.IS_RECORD),
                    A = !(!n || !n.IS_ITERATOR), E = !(!n || !n.INTERRUPTED), R = r(e, b), I = function (t) {
                        return g && h(g, "normal", t), new d(!0, t)
                    }, T = function (t) {
                        return S ? (i(t), E ? R(t[0], t[1], I) : R(t[0], t[1])) : E ? R(t, I) : R(t)
                    };
                if (P) g = t.iterator; else if (A) g = t; else {
                    if (!(y = f(t))) throw p(a(t) + " is not iterable");
                    if (s(y)) {
                        for (x = 0, C = c(t); C > x; x++) if ((m = T(t[x])) && u(v, m)) return m;
                        return new d(!1)
                    }
                    g = l(t, y)
                }
                for (w = P ? t.next : g.next; !(k = o(w, g)).done;) {
                    try {
                        m = T(k.value)
                    } catch (t) {
                        h(g, "throw", t)
                    }
                    if ("object" == typeof m && m && u(v, m)) return m
                }
                return new d(!1)
            }
        },
        function (t, e, n) {
            "use strict";
            var r = n(38), o = TypeError, i = function (t) {
                var e, n;
                this.promise = new t(function (t, r) {
                    if (void 0 !== e || void 0 !== n) throw o("Bad Promise constructor");
                    e = t, n = r
                }), this.resolve = r(e), this.reject = r(n)
            };
            t.exports.f = function (t) {
                return new i(t)
            }
        },
        function (t, e, n) {
            var r, o = n(35), i = n(151), a = n(130), s = n(90), c = n(153), u = n(126), l = n(111)("IE_PROTO"),
                f = function () {
                }, h = function (t) {
                    return "<script>" + t + "<\/script>"
                }, p = function (t) {
                    t.write(h("")), t.close();
                    var e = t.parentWindow.Object;
                    return t = null, e
                }, d = function () {
                    try {
                        r = new ActiveXObject("htmlfile")
                    } catch (t) {
                    }
                    var t, e;
                    d = "undefined" != typeof document ? document.domain && r ? p(r) : ((e = u("iframe")).style.display = "none", c.appendChild(e), e.src = String("javascript:"), (t = e.contentWindow.document).open(), t.write(h("document.F=Object")), t.close(), t.F) : p(r);
                    for (var n = a.length; n--;) delete d.prototype[a[n]];
                    return d()
                };
            s[l] = !0, t.exports = Object.create || function (t, e) {
                var n;
                return null !== t ? (f.prototype = o(t), n = new f, f.prototype = null, n[l] = t) : n = d(), void 0 === e ? n : i.f(n, e)
            }
        },
        function (t, e, n) {
            "use strict";
            var r = n(163).charAt, o = n(37), i = n(60), a = n(133), s = n(134), c = i.set,
                u = i.getterFor("String Iterator");
            a(String, "String", function (t) {
                c(this, {type: "String Iterator", string: o(t), index: 0})
            }, function () {
                var t, e = u(this), n = e.string, o = e.index;
                return o >= n.length ? s(void 0, !0) : (t = r(n, o), e.index += t.length, s(t, !1))
            })
        },
        function (t, e, n) {
            var r = n(207), o = n(216), i = n(164), a = n(273);
            t.exports = function (t, e) {
                return r(t) || o(t, e) || i(t, e) || a()
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        function (t, e, n) {
            t.exports = n(384)
        },
        function (t, e, n) {
            var r = n(304), o = n(305), i = n(164), a = n(306);
            t.exports = function (t) {
                return r(t) || o(t) || i(t) || a()
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        },
        function (t, e, n) {
            t.exports = n(393)
        },
        function (t, e, n) {
            t.exports = n(436)
        },
        function (t, e, n) {
            t.exports = n(407)
        },
        function (t, e, n) {
            t.exports = n(400)
        },
        function (t, e, n) {
            var r = n(86), o = TypeError;
            t.exports = function (t) {
                if (r(t)) throw o("Can't call method on " + t);
                return t
            }
        },
        function (t, e, n) {
            var r = n(74), o = n(12);
            t.exports = !!Object.getOwnPropertySymbols && !o(function () {
                var t = Symbol();
                return !String(t) || !(Object(t) instanceof Symbol) || !Symbol.sham && r && r < 41
            })
        },
        function (t, e, n) {
            var r, o, i = n(15), a = n(57), s = i.process, c = i.Deno, u = s && s.versions || c && c.version,
                l = u && u.v8;
            l && (o = (r = l.split("."))[0] > 0 && r[0] < 4 ? 1 : +(r[0] + r[1])), !o && a && (!(r = a.match(/Edge\/(\d+)/)) || r[1] >= 74) && (r = a.match(/Chrome\/(\d+)/)) && (o = +r[1]), t.exports = o
        },
        function (t, e) {
            var n = String;
            t.exports = function (t) {
                try {
                    return n(t)
                } catch (t) {
                    return "Object"
                }
            }
        },
        function (t, e, n) {
            "use strict";
            var r = n(104), o = n(31), i = n(56);
            t.exports = function (t, e, n) {
                var a = r(e);
                a in t ? o.f(t, a, i(0, n)) : t[a] = n
            }
        },
        function (t, e) {
        },
        function (t, e) {
            t.exports = {}
        },
        function (t, e) {
            t.exports = function (t) {
                try {
                    return {error: !1, value: t()}
                } catch (t) {
                    return {error: !0, value: t}
                }
            }
        },
        function (t, e, n) {
            var r = n(15);
            t.exports = r.Promise
        },
        function (t, e, n) {
            t.exports = n(256)
        },
        function (t, e, n) {
            t.exports = n(140)
        },
        function (t, e, n) {
            t.exports = n(449)
        },
        function (t, e, n) {
            var r = n(100), o = Function.prototype, i = o.apply, a = o.call;
            t.exports = "object" == typeof Reflect && Reflect.apply || (r ? a.bind(i) : function () {
                return a.apply(i, arguments)
            })
        },
        function (t, e, n) {
            var r = n(22), o = n(23), i = n(102), a = n(56), s = n(46), c = n(104), u = n(25), l = n(144),
                f = Object.getOwnPropertyDescriptor;
            e.f = r ? f : function (t, e) {
                if (t = s(t), e = c(e), l) try {
                    return f(t, e)
                } catch (t) {
                }
                if (u(t, e)) return a(!o(i.f, t, e), t[e])
            }
        },
        function (t, e) {
            t.exports = function (t) {
                return null == t
            }
        },
        function (t, e, n) {
            var r = n(39), o = n(125);
            (t.exports = function (t, e) {
                return o[t] || (o[t] = void 0 !== e ? e : {})
            })("versions", []).push({
                version: "3.26.1",
                mode: r ? "pure" : "global",
                copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)",
                license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE",
                source: "https://github.com/zloirock/core-js"
            })
        },
        function (t, e, n) {
            var r = n(12), o = n(17), i = n(74), a = o("species");
            t.exports = function (t) {
                return i >= 51 || !r(function () {
                    var e = [];
                    return (e.constructor = {})[a] = function () {
                        return {foo: 1}
                    }, 1 !== e[t](Boolean).foo
                })
            }
        },
        function (t, e, n) {
            var r = n(152), o = n(130);
            t.exports = Object.keys || function (t) {
                return r(t, o)
            }
        },
        function (t, e) {
            t.exports = {}
        }, function (t, e, n) {
            var r = n(43), o = n(13), i = n(103), a = n(34), s = n(36), c = n(108), u = o([].push), l = function (t) {
                var e = 1 == t, n = 2 == t, o = 3 == t, l = 4 == t, f = 6 == t, h = 7 == t, p = 5 == t || f;
                return function (d, v, g, y) {
                    for (var x, C, m = a(d), w = i(m), k = r(v, g), b = s(w), S = 0, P = y || c, A = e ? P(d, b) : n || h ? P(d, 0) : void 0; b > S; S++) if ((p || S in w) && (C = k(x = w[S], S, m), t)) if (e) A[S] = C; else if (C) switch (t) {
                        case 3:
                            return !0;
                        case 5:
                            return x;
                        case 6:
                            return S;
                        case 2:
                            u(A, x)
                    } else switch (t) {
                        case 4:
                            return !1;
                        case 7:
                            u(A, x)
                    }
                    return f ? -1 : o || l ? l : A
                }
            };
            t.exports = {
                forEach: l(0),
                map: l(1),
                filter: l(2),
                some: l(3),
                every: l(4),
                find: l(5),
                findIndex: l(6),
                filterReject: l(7)
            }
        }, function (t, e, n) {
            var r = n(59), o = n(124), i = n(86), a = n(78), s = n(17)("iterator");
            t.exports = function (t) {
                if (!i(t)) return o(t, s) || o(t, "@@iterator") || a[r(t)]
            }
        }, function (t, e, n) {
            var r = n(55), o = n(15);
            t.exports = "process" == r(o.process)
        }, function (t, e, n) {
            var r = n(21), o = TypeError;
            t.exports = function (t, e) {
                if (r(e, t)) return t;
                throw o("Incorrect invocation")
            }
        }, function (t, e, n) {
            var r = n(15), o = n(80), i = n(18), a = n(145), s = n(150), c = n(17), u = n(293), l = n(181), f = n(39),
                h = n(74), p = o && o.prototype, d = c("species"), v = !1, g = i(r.PromiseRejectionEvent),
                y = a("Promise", function () {
                    var t = s(o), e = t !== String(o);
                    if (!e && 66 === h) return !0;
                    if (f && (!p.catch || !p.finally)) return !0;
                    if (!h || h < 51 || !/native code/.test(t)) {
                        var n = new o(function (t) {
                            t(1)
                        }), r = function (t) {
                            t(function () {
                            }, function () {
                            })
                        };
                        if ((n.constructor = {})[d] = r, !(v = n.then(function () {
                        }) instanceof r)) return !0
                    }
                    return !e && (u || l) && !g
                });
            t.exports = {CONSTRUCTOR: y, REJECTION_EVENT: g, SUBCLASSING: v}
        }, function (t, e, n) {
            t.exports = n(411)
        }, function (t, e, n) {
            var r = n(221);
            t.exports = function (t) {
                var e = +t;
                return e != e || 0 === e ? 0 : r(e)
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(12);
            t.exports = function (t, e) {
                var n = [][t];
                return !!n && r(function () {
                    n.call(null, e || function () {
                        return 1
                    }, 1)
                })
            }
        }, function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, "UrlHelper", function () {
                return s
            });
            var r = n(2), o = n.n(r), i = n(3), a = n.n(i), s = function () {
                function t() {
                    o()(this, t)
                }

                return a()(t, null, [{
                    key: "urlElementGet", value: function (t, e) {
                        var n, r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 1;
                        return null !== (n = t.exec(e)) && n[r] ? n[r] : void 0
                    }
                }, {
                    key: "getFileName", value: function (t) {
                        return this.urlElementGet(/.+[\\|\/](.*?)(?=\?|$)/gm, t)
                    }
                }, {
                    key: "getUrlWithoutArguments", value: function (t) {
                        return this.urlElementGet(/^(.*?)(?=\?|$)/gm, t)
                    }
                }, {
                    key: "getStreamName", value: function (t) {
                        return this.urlElementGet(/\/(live_.*?)(\/|\.(flv|m3u8|mpd))/gm, t, 1)
                    }
                }]), t
            }()
        }, function (t, e, n) {
            var r = n(12);
            t.exports = !r(function () {
                var t = function () {
                }.bind();
                return "function" != typeof t || t.hasOwnProperty("prototype")
            })
        }, function (t, e, n) {
            var r = n(55), o = n(13);
            t.exports = function (t) {
                if ("Function" === r(t)) return o(t)
            }
        }, function (t, e, n) {
            "use strict";
            var r = {}.propertyIsEnumerable, o = Object.getOwnPropertyDescriptor, i = o && !r.call({1: 2}, 1);
            e.f = i ? function (t) {
                var e = o(this, t);
                return !!e && e.enumerable
            } : r
        }, function (t, e, n) {
            var r = n(13), o = n(12), i = n(55), a = Object, s = r("".split);
            t.exports = o(function () {
                return !a("z").propertyIsEnumerable(0)
            }) ? function (t) {
                return "String" == i(t) ? s(t, "") : a(t)
            } : a
        }, function (t, e, n) {
            var r = n(213), o = n(105);
            t.exports = function (t) {
                var e = r(t, "string");
                return o(e) ? e : e + ""
            }
        }, function (t, e, n) {
            var r = n(30), o = n(18), i = n(21), a = n(143), s = Object;
            t.exports = a ? function (t) {
                return "symbol" == typeof t
            } : function (t) {
                var e = r("Symbol");
                return o(e) && i(e.prototype, s(t))
            }
        }, function (t, e, n) {
            var r = n(13), o = 0, i = Math.random(), a = r(1..toString);
            t.exports = function (t) {
                return "Symbol(" + (void 0 === t ? "" : t) + ")_" + a(++o + i, 36)
            }
        }, function (t, e, n) {
            t.exports = n(217)
        }, function (t, e, n) {
            var r = n(222);
            t.exports = function (t, e) {
                return new (r(t))(0 === e ? 0 : e)
            }
        }, function (t, e, n) {
            var r = n(13), o = n(12), i = n(18), a = n(59), s = n(30), c = n(150), u = function () {
                }, l = [], f = s("Reflect", "construct"), h = /^\s*(?:class|function)\b/, p = r(h.exec), d = !h.exec(u),
                v = function (t) {
                    if (!i(t)) return !1;
                    try {
                        return f(u, l, t), !0
                    } catch (t) {
                        return !1
                    }
                }, g = function (t) {
                    if (!i(t)) return !1;
                    switch (a(t)) {
                        case"AsyncFunction":
                        case"GeneratorFunction":
                        case"AsyncGeneratorFunction":
                            return !1
                    }
                    try {
                        return d || !!p(h, c(t))
                    } catch (t) {
                        return !0
                    }
                };
            g.sham = !0, t.exports = !f || o(function () {
                var t;
                return v(v.call) || !v(Object) || !v(function () {
                    t = !0
                }) || t
            }) ? g : v
        }, function (t, e, n) {
            var r = n(97), o = Math.max, i = Math.min;
            t.exports = function (t, e) {
                var n = r(t);
                return n < 0 ? o(n + e, 0) : i(n, e)
            }
        }, function (t, e, n) {
            var r = n(87), o = n(106), i = r("keys");
            t.exports = function (t) {
                return i[t] || (i[t] = o(t))
            }
        }, function (t, e, n) {
            var r = n(152), o = n(130).concat("length", "prototype");
            e.f = Object.getOwnPropertyNames || function (t) {
                return r(t, o)
            }
        }, function (t, e) {
            e.f = Object.getOwnPropertySymbols
        }, function (t, e, n) {
            var r = n(17);
            e.f = r
        }, function (t, e, n) {
            var r = n(13);
            t.exports = r([].slice)
        }, function (t, e, n) {
            var r = n(25), o = n(18), i = n(34), a = n(111), s = n(162), c = a("IE_PROTO"), u = Object, l = u.prototype;
            t.exports = s ? u.getPrototypeOf : function (t) {
                var e = i(t);
                if (r(e, c)) return e[c];
                var n = e.constructor;
                return o(n) && e instanceof n ? n.prototype : e instanceof u ? l : null
            }
        }, function (t, e, n) {
            var r = n(13), o = n(35), i = n(246);
            t.exports = Object.setPrototypeOf || ("__proto__" in {} ? function () {
                var t, e = !1, n = {};
                try {
                    (t = r(Object.getOwnPropertyDescriptor(Object.prototype, "__proto__").set))(n, []), e = n instanceof Array
                } catch (t) {
                }
                return function (n, r) {
                    return o(n), i(r), e ? t(n, r) : n.__proto__ = r, n
                }
            }() : void 0)
        }, function (t, e) {
            var n = TypeError;
            t.exports = function (t, e) {
                if (t < e) throw n("Not enough arguments");
                return t
            }
        }, function (t, e, n) {
            t.exports = n(168)
        }, function (t, e, n) {
            t.exports = n(147)
        }, function (t, e, n) {
            "use strict";
            n.d(e, "b", function () {
                return u
            }), n.d(e, "a", function () {
                return l
            });
            var r = n(2), o = n.n(r), i = n(3), a = n.n(i), s = n(0), c = n.n(s);

            function u(t) {
                return Math.floor(Math.random() * Math.floor(t))
            }

            n(52), n(53);
            var l = a()(function t(e) {
                o()(this, t), c()(this, "data", void 0), this.data = e
            })
        }, function (t, e, n) {
            t.exports = n(461)
        }, function (t, e, n) {
            t.exports = n(446)
        }, function (t, e, n) {
            var r = n(38), o = n(86);
            t.exports = function (t, e) {
                var n = t[e];
                return o(n) ? void 0 : r(n)
            }
        }, function (t, e, n) {
            var r = n(15), o = n(215), i = r["__core-js_shared__"] || o("__core-js_shared__", {});
            t.exports = i
        }, function (t, e, n) {
            var r = n(15), o = n(24), i = r.document, a = o(i) && o(i.createElement);
            t.exports = function (t) {
                return a ? i.createElement(t) : {}
            }
        }, function (t, e) {
            var n = TypeError;
            t.exports = function (t) {
                if (t > 9007199254740991) throw n("Maximum allowed index exceeded");
                return t
            }
        }, function (t, e, n) {
            var r = {};
            r[n(17)("toStringTag")] = "z", t.exports = "[object z]" === String(r)
        }, function (t, e, n) {
            var r = n(46), o = n(110), i = n(36), a = function (t) {
                return function (e, n, a) {
                    var s, c = r(e), u = i(c), l = o(a, u);
                    if (t && n != n) {
                        for (; u > l;) if ((s = c[l++]) != s) return !0
                    } else for (; u > l; l++) if ((t || l in c) && c[l] === n) return t || l || 0;
                    return !t && -1
                }
            };
            t.exports = {includes: a(!0), indexOf: a(!1)}
        }, function (t, e) {
            t.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
        }, function (t, e, n) {
            var r = n(110), o = n(36), i = n(76), a = Array, s = Math.max;
            t.exports = function (t, e, n) {
                for (var c = o(t), u = r(e, c), l = r(void 0 === n ? c : n, c), f = a(s(l - u, 0)), h = 0; u < l; u++, h++) i(f, h, t[u]);
                return f.length = h, f
            }
        }, function (t, e) {
            t.exports = function () {
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(23), i = n(39), a = n(245), s = n(18), c = n(160), u = n(116), l = n(117), f = n(49),
                h = n(48), p = n(44), d = n(17), v = n(78), g = n(161), y = a.PROPER, x = a.CONFIGURABLE,
                C = g.IteratorPrototype, m = g.BUGGY_SAFARI_ITERATORS, w = d("iterator"), k = function () {
                    return this
                };
            t.exports = function (t, e, n, a, d, g, b) {
                c(n, e, a);
                var S, P, A, E = function (t) {
                        if (t === d && L) return L;
                        if (!m && t in T) return T[t];
                        switch (t) {
                            case"keys":
                            case"values":
                            case"entries":
                                return function () {
                                    return new n(this, t)
                                }
                        }
                        return function () {
                            return new n(this)
                        }
                    }, R = e + " Iterator", I = !1, T = t.prototype, D = T[w] || T["@@iterator"] || d && T[d],
                    L = !m && D || E(d), F = "Array" == e && T.entries || D;
                if (F && (S = u(F.call(new t))) !== Object.prototype && S.next && (i || u(S) === C || (l ? l(S, C) : s(S[w]) || p(S, w, k)), f(S, R, !0, !0), i && (v[R] = k)), y && "values" == d && D && "values" !== D.name && (!i && x ? h(T, "name", "values") : (I = !0, L = function () {
                    return o(D, this)
                })), d) if (P = {
                    values: E("values"),
                    keys: g ? L : E("keys"),
                    entries: E("entries")
                }, b) for (A in P) (m || I || !(A in T)) && p(T, A, P[A]); else r({
                    target: e,
                    proto: !0,
                    forced: m || I
                }, P);
                return i && !b || T[w] === L || p(T, w, L, {name: d}), v[e] = L, P
            }
        }, function (t, e) {
            t.exports = function (t, e) {
                return {value: t, done: e}
            }
        }, function (t, e, n) {
            var r = n(23), o = n(38), i = n(35), a = n(75), s = n(92), c = TypeError;
            t.exports = function (t, e) {
                var n = arguments.length < 2 ? s(t) : e;
                if (o(n)) return i(r(n, t));
                throw c(a(t) + " is not iterable")
            }
        }, function (t, e, n) {
            t.exports = n(307)
        }, function (t, e, n) {
            "use strict";
            n.r(e), n.d(e, "WastedDataType", function () {
                return Bt.e
            }), n.d(e, "FetchErrorType", function () {
                return Bt.b
            }), n.d(e, "DataRoleType", function () {
                return Bt.a
            }), n.d(e, "EventReport", function () {
                return r
            }), n.d(e, "SistersPlayerContext", function () {
                return se
            });
            var r = {};
            n.r(r), n.d(r, "EventReportType", function () {
                return o
            }), n.d(r, "DataReportTypeCode", function () {
                return i
            }), n.d(r, "ConfigUpdateEvent", function () {
                return kt
            }), n.d(r, "TrackerStatusDataReportEvent", function () {
                return bt
            });
            var o, i, a = n(65), s = n.n(a), c = n(6), u = n.n(c), l = n(67), f = n.n(l), h = n(2), p = n.n(h),
                d = n(3),
                v = n.n(d), g = n(0), y = n.n(g), x = n(1), C = n.n(x), m = n(14), w = n.n(m), k = n(19), b = n.n(k),
                S = n(5), P = n.n(S), A = n(10), E = n.n(A), R = n(40), I = n.n(R), T = n(4), D = n.n(T), L = n(41),
                F = n.n(L), O = n(54), U = n.n(O), N = n(66), M = n.n(N), B = n(33), _ = n.n(B), z = n(32), j = n.n(z),
                q = n(52), W = n.n(q), V = n(68), G = n.n(V), H = n(71), Y = n.n(H), Q = n(70), K = n.n(Q), X = n(96),
                $ = n.n(X), J = n(53), Z = n.n(J), tt = n(8), et = n(45), nt = n.n(et), rt = n(202), ot = n.n(rt),
                it = n(69), at = n.n(it), st = n(9), ct = n.n(st), ut = n(203), lt = n.n(ut), ft = n(123), ht = n.n(ft),
                pt = n(27), dt = n(83), vt = n.n(dt), gt = n(82), yt = n.n(gt), xt = n(26);
            !function (t) {
                t[t.DataReport = 0] = "DataReport", t[t.ConfigUpdate = 1] = "ConfigUpdate"
            }(o || (o = {})), function (t) {
                t[t.TrackerClosedReport = 0] = "TrackerClosedReport"
            }(i || (i = {}));
            var Ct, mt, wt, kt = v()(function t(e) {
                p()(this, t), y()(this, "type", o.ConfigUpdate), y()(this, "body", void 0), this.body = e
            }), bt = v()(function t(e, n) {
                p()(this, t), y()(this, "type", o.DataReport), y()(this, "body", void 0), this.body = {
                    code: i.TrackerClosedReport,
                    data: {statusCode: e, hostname: n}
                }
            }), St = n(42), Pt = n(47), At = n.n(Pt);
            !function (t) {
                t[t.Unknown = -1] = "Unknown", t[t.IPv4Reserved = 0] = "IPv4Reserved", t[t.IPv4Unreserved = 1] = "IPv4Unreserved", t[t.IPv6Reserved = 2] = "IPv6Reserved", t[t.IPv6Unreserved = 3] = "IPv6Unreserved"
            }(Ct || (Ct = {})), function (t) {
                t[t.Unknown = -3] = "Unknown", t[t.UDPBlock = -2] = "UDPBlock", t[t.PublicAddress = -1] = "PublicAddress", t[t.FullConeOrRestrictedCone = 0] = "FullConeOrRestrictedCone", t[t.UnknownCone = 1] = "UnknownCone", t[t.PortRestrictedCone = 2] = "PortRestrictedCone", t[t.Symmetric = 3] = "Symmetric"
            }(mt || (mt = {})), function (t) {
                t[t.Unknown = -1] = "Unknown", t[t.EndpointIndependent = 0] = "EndpointIndependent", t[t.AddressDependent = 1] = "AddressDependent", t[t.AddressAndPortDependent = 2] = "AddressAndPortDependent"
            }(wt || (wt = {}));
            var Et, Rt = function () {
                function t(e, n, r) {
                    p()(this, t), y()(this, "ipv6", void 0), y()(this, "natTypeChangedCallback", void 0), y()(this, "curNatType", mt.Unknown), y()(this, "p2pContext", void 0), y()(this, "natDowngradeCount", 0), y()(this, "kakushinMode", !1), this.natTypeChangedCallback = r, this.p2pContext = e, this.ipv6 = n;
                    var o = t.loadNatTypeCache();
                    if (void 0 !== o) {
                        var i = !1 === this.checkKakushinExpired();
                        this.setCurrentNatType(o, i, !0)
                    }
                }

                var e, n, r;
                return v()(t, [{
                    key: "getCurrentNatType", value: function () {
                        return this.curNatType
                    }
                }, {
                    key: "setCurrentNatType", value: function (e, n, r) {
                        var o, i;
                        if (e !== mt.Unknown && ((this.kakushinMode !== n || r) && (this.kakushinMode = n, this.kakushinMode && 0 == r && t.saveKakushinTime(), this.p2pContext.printExtLog(0, ct()(o = "NAT Kakushin Mode".concat(r ? " (Preload)" : "", ": ")).call(o, this.kakushinMode, ".")), this.p2pContext.Config.allowPrintLog(0) && console.info(ct()(i = "[SistersPlayer] NAT Kakushin Mode".concat(r ? " (Preload)" : "", ": ")).call(i, this.kakushinMode, "."))), this.curNatType !== e)) {
                            var a, s;
                            if (e === mt.UnknownCone && (this.curNatType === mt.FullConeOrRestrictedCone || this.curNatType === mt.PortRestrictedCone)) return;
                            this.curNatType = e, t.saveNatTypeCache(e), this.p2pContext.printExtLog(0, ct()(a = "NAT TYPE".concat(r ? " (Preload)" : "", ": ")).call(a, mt[e], ".")), this.p2pContext.Config.allowPrintLog(0) && console.info(ct()(s = "[SistersPlayer] NAT TYPE".concat(r ? " (Preload)" : "", ": ")).call(s, mt[e], ".")), this.natTypeChangedCallback(e)
                        }
                    }
                }, {
                    key: "checkNatTypeAndUpdate", value: (r = u()(C.a.mark(function e() {
                        var n, r, o, i, a, s, c, u, l;
                        return C.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return e.next = 2, this.multiCheckBasicNatType();
                                case 2:
                                    if ((n = e.sent) !== mt.Unknown) {
                                        e.next = 5;
                                        break
                                    }
                                    return e.abrupt("return");
                                case 5:
                                    if (r = !1, o = this.checkKakushinExpired(), n !== mt.UnknownCone) {
                                        e.next = 37;
                                        break
                                    }
                                    if (i = wt.Unknown, a = this.p2pContext.Config.natFilteringCheckServers, !o) {
                                        e.next = 36;
                                        break
                                    }
                                    if (!(a.length > 0)) {
                                        e.next = 34;
                                        break
                                    }
                                    return s = this.p2pContext.Config.natFilteringCheckPort, c = this.p2pContext.Config.natFilteringCheckAltPort, u = this.p2pContext.Config.natFilteringCheckTimeoutMs, l = a[Math.floor(Math.random() * a.length)], e.prev = 16, e.next = 19, t.checkNatFilteringBehavior(l, s, c, u);
                                case 19:
                                    i = e.sent, e.next = 24;
                                    break;
                                case 22:
                                    e.prev = 22, e.t0 = e.catch(16);
                                case 24:
                                    e.t1 = i, e.next = e.t1 === wt.EndpointIndependent || e.t1 === wt.AddressDependent ? 27 : e.t1 === wt.AddressAndPortDependent ? 30 : (e.t1, wt.Unknown, 33);
                                    break;
                                case 27:
                                    return n = mt.FullConeOrRestrictedCone, r = !0, e.abrupt("break", 34);
                                case 30:
                                    return n = mt.PortRestrictedCone, r = !0, e.abrupt("break", 34);
                                case 33:
                                    return e.abrupt("break", 34);
                                case 34:
                                    e.next = 37;
                                    break;
                                case 36:
                                    r = !0;
                                case 37:
                                    this.setCurrentNatType(n, r, !1), this.natDowngradeCount = 0;
                                case 39:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this, [[16, 22]])
                    })), function () {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "onSymmetricConnect", value: function (t) {
                        !1 === this.kakushinMode && (t ? (this.natDowngradeCount = 0, this.setCurrentNatType(mt.FullConeOrRestrictedCone, !1, !1)) : this.natDowngradeCount = this.natDowngradeCount + 1, this.curNatType !== mt.Symmetric && this.natDowngradeCount >= this.p2pContext.Config.natDowngradeLimit && this.setCurrentNatType(mt.PortRestrictedCone, !1, !1))
                    }
                }, {
                    key: "checkKakushinExpired", value: function () {
                        var e = Z()(), n = t.loadKakushinTime(), r = t.loadNatTypeCache(),
                            o = e - n > this.p2pContext.Config.natKakushinTimeoutMs;
                        return (n > e || 0 == (r === mt.PortRestrictedCone || r === mt.FullConeOrRestrictedCone)) && (o = !0), o
                    }
                }, {
                    key: "multiCheckBasicNatType", value: (n = u()(C.a.mark(function e() {
                        var n, r, o, i, a, s, c, u = this;
                        return C.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    if (n = void 0, r = new w.a, o = this.p2pContext.Config.natCheckStunServers, i = this.p2pContext.Config.checkBasicNatTimeoutMs, !(o.length >= 2)) {
                                        e.next = 28;
                                        break
                                    }
                                case 5:
                                    if (void 0 !== n) {
                                        e.next = 26;
                                        break
                                    }
                                    return a = mt.Unknown, e.prev = 7, e.next = 10, t.checkBasicNatType(o, this.ipv6, i);
                                case 10:
                                    a = e.sent, e.next = 18;
                                    break;
                                case 13:
                                    e.prev = 13, e.t0 = e.catch(7), s = e.t0.message, this.p2pContext.printExtLog(0, s), this.p2pContext.Config.allowPrintLog(0) && console.warn("[SistersPlayer] " + s);
                                case 18:
                                    if (a != mt.Symmetric) {
                                        e.next = 21;
                                        break
                                    }
                                    return n = mt.Symmetric, e.abrupt("break", 26);
                                case 21:
                                    void 0 === (c = r.get(a)) ? r.set(a, 1) : r.set(a, c + 1), P()(r).call(r, function (t, e) {
                                        t >= u.p2pContext.Config.multiCheckBasicNatMinCount && (n = e)
                                    }), e.next = 5;
                                    break;
                                case 26:
                                    e.next = 29;
                                    break;
                                case 28:
                                    n = mt.Unknown;
                                case 29:
                                    return e.abrupt("return", n);
                                case 30:
                                case"end":
                                    return e.stop()
                            }
                        }, e, this, [[7, 13]])
                    })), function () {
                        return n.apply(this, arguments)
                    })
                }], [{
                    key: "loadKakushinTime", value: function () {
                        var t, e,
                            n = null === (t = window) || void 0 === t || null === (e = t.localStorage) || void 0 === e ? void 0 : e.getItem("misakaNetworkTypeKakushinJikoku"),
                            r = 0;
                        if (null != n) {
                            var o = U()(n);
                            o && (r = o)
                        }
                        return r
                    }
                }, {
                    key: "saveKakushinTime", value: function () {
                        var t, e, n = Z()();
                        null === (t = window) || void 0 === t || null === (e = t.localStorage) || void 0 === e || e.setItem("misakaNetworkTypeKakushinJikoku", n.toString())
                    }
                }, {
                    key: "loadNatTypeCache", value: function () {
                        var t, e,
                            n = null === (t = window) || void 0 === t || null === (e = t.localStorage) || void 0 === e ? void 0 : e.getItem("misakaNetworkType"),
                            r = void 0;
                        return null != n && (r = mt[n]), r
                    }
                }, {
                    key: "saveNatTypeCache", value: function (t) {
                        var e, n;
                        null === (e = window) || void 0 === e || null === (n = e.localStorage) || void 0 === n || n.setItem("misakaNetworkType", mt[t].toString())
                    }
                }, {
                    key: "ip2long", value: function (t) {
                        var e;
                        if (e = t.match(/^(\d{1,3})\.(\d{1,3})\.(\d{1,3})\.(\d{1,3})$/)) {
                            for (var n = 0, r = 1, o = 4; o >= 1; o -= 1) n += r * At()(e[o]), r *= 256;
                            return n
                        }
                        return -1
                    }
                }, {
                    key: "inSubNet", value: function (t, e) {
                        var n, r, o = this.ip2long(t);
                        if ((n = e.match(/^(.*?)\/(\d{1,2})$/)) && (r = this.ip2long(n[1])) >= 0) {
                            var i = Math.pow(2, 32 - At()(n[2]));
                            return (o > r || o === r) && (o < r + i - 1 || o === r + i - 1)
                        }
                        return !1
                    }
                }, {
                    key: "getAddressType", value: function (t) {
                        var e = this;
                        if (this.ip2long(t) > -1) {
                            var n = ["0.0.0.0/8", "10.0.0.0/8", "100.64.0.0/10", "127.0.0.0/8", "169.254.0.0/16", "172.16.0.0/12", "192.0.0.0/24", "192.0.0.0/29", "192.0.0.8/32", "192.0.0.9/32", "192.0.0.10/32", "192.0.0.170/32", "192.0.0.171/32", "192.0.2.0/24", "192.31.196.0/24", "192.52.193.0/24", "192.88.99.0/24", "192.168.0.0/16", "192.175.48.0/24", "198.18.0.0/15", "198.51.100.0/24", "203.0.113.0/24", "240.0.0.0/4", "255.255.255.255/32"],
                                r = !1;
                            return P()(n).call(n, function (n) {
                                e.inSubNet(t, n) && (r = !0)
                            }), r ? Ct.IPv4Reserved : Ct.IPv4Unreserved
                        }
                        return /^\s*((([0-9A-Fa-f]{1,4}:){7}([0-9A-Fa-f]{1,4}|:))|(([0-9A-Fa-f]{1,4}:){6}(:[0-9A-Fa-f]{1,4}|((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){5}(((:[0-9A-Fa-f]{1,4}){1,2})|:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3})|:))|(([0-9A-Fa-f]{1,4}:){4}(((:[0-9A-Fa-f]{1,4}){1,3})|((:[0-9A-Fa-f]{1,4})?:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){3}(((:[0-9A-Fa-f]{1,4}){1,4})|((:[0-9A-Fa-f]{1,4}){0,2}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){2}(((:[0-9A-Fa-f]{1,4}){1,5})|((:[0-9A-Fa-f]{1,4}){0,3}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(([0-9A-Fa-f]{1,4}:){1}(((:[0-9A-Fa-f]{1,4}){1,6})|((:[0-9A-Fa-f]{1,4}){0,4}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:))|(:(((:[0-9A-Fa-f]{1,4}){1,7})|((:[0-9A-Fa-f]{1,4}){0,5}:((25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)(\.(25[0-5]|2[0-4]\d|1\d\d|[1-9]?\d)){3}))|:)))(%.+)?\s*$/.test(t) ? /^::$/.test(t) || /^::1$/.test(t) || /^::f{4}:([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(t) || /^::f{4}:0.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(t) || /^64:ff9b::([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})\.([0-9]{1,3})$/.test(t) || /^100::([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(t) || /^2001::([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(t) || /^2001:2[0-9a-fA-F]:([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(t) || /^2001:db8:([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(t) || /^2002:([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4}):?([0-9a-fA-F]{0,4})$/.test(t) || /^f[c-d]([0-9a-fA-F]{2,2}):/i.test(t) || /^fe[8-9a-bA-B][0-9a-fA-F]:/i.test(t) || /^ff([0-9a-fA-F]{2,2}):/i.test(t) ? Ct.IPv6Reserved : Ct.IPv6Unreserved : Ct.Unknown
                    }
                }, {
                    key: "getFixedAnswer", value: function (t, e) {
                        var n, r, o, i;
                        return {
                            type: "answer",
                            sdp: ct()(n = ct()(r = ct()(o = ct()(i = "v=0\no=- 154894363573307000 2 IN IP4 127.0.0.1\ns=-\nt=0 0\na=group:BUNDLE 0\na=extmap-allow-mixed\na=msid-semantic: WMS\nm=application 9 UDP/DTLS/SCTP webrtc-datachannel\nc=IN IP4 0.0.0.0\na=candidate:2715078485 1 udp 1677729535 ".concat(t, " ")).call(i, e.toString(), " typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag ")).call(o, "Misk", " network-cost 999\na=ice-ufrag:")).call(r, "Misk", "\na=ice-pwd:")).call(n, "MisakaNetworkMackerelAngo", "\na=ice-options:trickle\na=fingerprint:sha-256 19:D9:0C:C7:B5:A2:34:9A:70:FD:DC:43:E1:24:A5:E6:40:C9:F5:42:C0:CC:19:64:C8:35:8F:EF:C4:0F:66:99\na=setup:active\na=mid:0\na=sctp-port:5000\na=max-message-size:262144\n")
                        }
                    }
                }, {
                    key: "getFixedCandidate", value: function (t, e) {
                        var n, r;
                        return {
                            candidate: ct()(n = ct()(r = "candidate:2715078485 1 udp 1677729535 ".concat(t, " ")).call(r, e.toString(), " typ srflx raddr 0.0.0.0 rport 0 generation 0 ufrag ")).call(n, "Misk", " network-cost 999"),
                            sdpMid: "0",
                            sdpMLineIndex: 0
                        }
                    }
                }, {
                    key: "checkNatFilteringBehavior", value: function (e, n, r) {
                        var o = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 2e3;
                        return new D.a(function (i, a) {
                            var s, c = new RTCPeerConnection({iceServers: [], iceCandidatePoolSize: 0}),
                                l = wt.AddressDependent, f = void 0;
                            c.createDataChannel("TGSAN-NAT-TEST"), c.oniceconnectionstatechange = function (t) {
                                "connected" == c.iceConnectionState && (c.close(), i(l), clearTimeout(f))
                            }, c.createOffer().then((s = u()(C.a.mark(function s(u) {
                                return C.a.wrap(function (s) {
                                    for (; ;) switch (s.prev = s.next) {
                                        case 0:
                                            void 0 !== u.sdp && (u.sdp = u.sdp.replace(/a\=ice\-ufrag\:.*/m, "a=ice-ufrag:Mikt"), u.sdp = u.sdp.replace(/a\=ice\-pwd\:.*/m, "a=ice-pwd:MisakaNetworkTanmatsuAngo")), c.setLocalDescription(u).then(function () {
                                                var s = t.getFixedAnswer(e, n);
                                                c.setRemoteDescription(s), f = E()(function () {
                                                    var n = t.getFixedCandidate(e, r);
                                                    l = wt.AddressAndPortDependent, c.addIceCandidate(n).then(function () {
                                                        f = E()(function () {
                                                            c.close(), l = wt.Unknown, i(l)
                                                        }, o)
                                                    }).catch(function (t) {
                                                        a(t)
                                                    })
                                                }, o)
                                            }).catch(function (t) {
                                                a(t)
                                            });
                                        case 2:
                                        case"end":
                                            return s.stop()
                                    }
                                }, s)
                            })), function (t) {
                                return s.apply(this, arguments)
                            }))
                        })
                    }
                }, {
                    key: "checkBasicNatType", value: (e = u()(C.a.mark(function t(e) {
                        var n, r, o = this, i = arguments;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return n = i.length > 1 && void 0 !== i[1] && i[1], r = i.length > 2 && void 0 !== i[2] ? i[2] : 2e3, t.abrupt("return", new D.a(function (t, i) {
                                        try {
                                            var a = void 0, s = !1, c = !1, u = function () {
                                                if (clearTimeout(a), h.close(), 1 === $()(l).length) {
                                                    var e = l[$()(l)[0]];
                                                    t(1 === e.length ? mt.UnknownCone : mt.Symmetric)
                                                } else t((!0 === n ? c : s) ? mt.PublicAddress : mt.UDPBlock)
                                            }, l = {}, f = [];
                                            P()(e).call(e, function (t) {
                                                f.push({urls: t})
                                            });
                                            var h = new RTCPeerConnection({iceServers: f});
                                            h.createDataChannel("MisakaNetwork-NAT-Check"), h.onicecandidate = function (t) {
                                                var e;
                                                if (t.candidate && -1 !== F()(e = t.candidate.candidate).call(e, "srflx")) {
                                                    var n = function (t) {
                                                        for (var e, n = {
                                                            foundation: (e = 0 === F()(t).call(t, "a=candidate:") ? t.substring(12).split(" ") : t.substring(10).split(" "))[0],
                                                            component: e[1],
                                                            protocol: e[2].toLowerCase(),
                                                            priority: At()(e[3], 10),
                                                            ip: e[4],
                                                            port: At()(e[5], 10),
                                                            type: e[7],
                                                            relatedAddress: "",
                                                            relatedPort: NaN,
                                                            tcpType: "unknown"
                                                        }, r = 8; r < e.length; r += 2) switch (e[r]) {
                                                            case"raddr":
                                                                n.relatedAddress = e[r + 1];
                                                                break;
                                                            case"rport":
                                                                n.relatedPort = At()(e[r + 1], 10);
                                                                break;
                                                            case"tcptype":
                                                                n.tcpType = e[r + 1]
                                                        }
                                                        return n
                                                    }(t.candidate.candidate);
                                                    if ("srflx" === n.type) l[n.relatedPort] || (l[n.relatedPort] = []), l[n.relatedPort].push(n.port); else if ("host" === n.type) {
                                                        var r = o.getAddressType(n.ip);
                                                        r === Ct.IPv4Unreserved && (s = !0), r === Ct.IPv6Unreserved && (c = !0)
                                                    }
                                                } else t.candidate || u()
                                            }, h.createOffer().then(function (t) {
                                                h.setLocalDescription(t).then(function () {
                                                    a = E()(function () {
                                                        console.debug("[SistersPlayer] Basic test timeout."), u()
                                                    }, r)
                                                })
                                            })
                                        } catch (t) {
                                            i(new Error("Failed to check NAT type."))
                                        }
                                    }));
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }, t)
                    })), function (t) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "getTrackerNatTypeStr", value: function (t) {
                        var e = void 0;
                        switch (t) {
                            case mt.Symmetric:
                                e = "sym";
                                break;
                            case mt.UnknownCone:
                                e = "non-sym";
                                break;
                            case mt.PortRestrictedCone:
                                e = "port-restricted";
                                break;
                            case mt.FullConeOrRestrictedCone:
                                e = "ip-restricted"
                        }
                        return e
                    }
                }]), t
            }(), It = function () {
                function t(e, n, r) {
                    p()(this, t), y()(this, "p2pContext", void 0), y()(this, "needDestroy", !1), y()(this, "ws", void 0), y()(this, "requestId", 0), y()(this, "pendingRequests", new w.a), y()(this, "messageSink", void 0), y()(this, "trackerSourceParam", void 0), y()(this, "onReconnected", function () {
                    }), this.p2pContext = e, this.trackerSourceParam = n, this.messageSink = r
                }

                var e, n, r, o, i;
                return v()(t, [{
                    key: "trackerConnect", value: (i = u()(C.a.mark(function t() {
                        var e, n = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (this.p2pContext.printExtLog(0, "Last Order (re)connecting."), this.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Last Order (re)connecting."), !1 !== this.needDestroy) {
                                        t.next = 20;
                                        break
                                    }
                                    return t.next = 5, this.newTrackerConnect();
                                case 5:
                                    if (void 0 !== (e = t.sent)) {
                                        t.next = 11;
                                        break
                                    }
                                    return this.p2pContext.P2PDataCollectionStatus.addTrackerConnect(!1), t.abrupt("return", void 0);
                                case 11:
                                    return this.p2pContext.P2PDataCollectionStatus.addTrackerConnect(!0), this.ws = e, this.ws.onmessage = function (t) {
                                        n.onMessageReceived(t.data)
                                    }, this.onReconnected(), this.p2pContext.printExtLog(0, "Last Order (re)connect done."), this.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Last Order (re)connect done."), t.abrupt("return", e);
                                case 18:
                                    t.next = 22;
                                    break;
                                case 20:
                                    this.p2pContext.printExtLog(0, "Last Order (re)connect cancel."), this.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Last Order (re)connect cancel.");
                                case 22:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "newTrackerConnect", value: (o = u()(C.a.mark(function t() {
                        var e = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new D.a(function (t) {
                                        var n = e.p2pContext.Config.trackerServers[e.p2pContext.trackerPositionInServers],
                                            r = new WebSocket(n + e.trackerSourceParam);
                                        e.p2pContext.trackerPositionInServers = ++e.p2pContext.trackerPositionInServers % e.p2pContext.Config.trackerServers.length, r.onopen = function (o) {
                                            e.p2pContext.eventReportCallback(new bt(-1, n)), e.needDestroy ? (r.close(), t(void 0)) : t(r)
                                        }, r.onclose = function (r) {
                                            var o;
                                            e.p2pContext.eventReportCallback(new bt(r.code, n)), e.p2pContext.printExtLog(0, "Last Order connection is closed. (code: " + r.code + "), url: " + n), e.p2pContext.Config.allowPrintLog(0) && console.warn("[SistersPlayer] Last Order connection is closed. (code: " + r.code + "), url: " + n), P()(o = e.pendingRequests).call(o, function (t, e) {
                                                return t(void 0)
                                            }), e.pendingRequests.clear(), 0 == e.needDestroy ? 0 == e.p2pContext.trackerPositionInServers ? (e.p2pContext.printExtLog(0, "Misaka will reconnect to the Last Order in " + e.p2pContext.Config.reconnectWaitTimeSec + " seconds."), e.p2pContext.Config.allowPrintLog(0) && console.warn("[SistersPlayer] Misaka will reconnect to the Last Order in " + e.p2pContext.Config.reconnectWaitTimeSec + " seconds."), E()(function () {
                                                e.trackerConnect()
                                            }, 1e3 * e.p2pContext.Config.reconnectWaitTimeSec)) : (e.p2pContext.printExtLog(0, "Misaka will reconnect to the Last Order immediately."), e.p2pContext.Config.allowPrintLog(0) && console.warn("[SistersPlayer] Misaka will reconnect to the Last Order immediately."), e.trackerConnect()) : (e.p2pContext.printExtLog(0, "Last Order reconnect cancel."), e.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Last Order reconnect cancel.")), t(void 0)
                                        }
                                    }));
                                case 1:
                                case"end":
                                    return t.stop()
                            }
                        }, t)
                    })), function () {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "dispatchResponse", value: function (t) {
                        var e = this.pendingRequests.get(t.requestId);
                        void 0 !== e && (this.pendingRequests.delete(t.requestId), e(t))
                    }
                }, {
                    key: "sendMessage", value: function (t, e, n, r, o, i) {
                        var a = this, s = this.ws;
                        if (null != s && s.readyState == s.OPEN) {
                            0 == n && (++this.requestId, n = this.requestId);
                            var c = {type: e, requestId: n};
                            c[r] = o, null !== t && (c.from = this.p2pContext.CurPeerId, c.to = t), void 0 !== i && (c.data = i);
                            var u = this.pendingRequests;
                            return new D.a(function (t) {
                                null != s && s.readyState == s.OPEN ? (a.p2pContext.Config.allowPrintLog(7) && console.log("send: ", c), u.set(n, t), s.send(b()(c))) : t(void 0)
                            })
                        }
                        return new D.a(function (t) {
                            return t(void 0)
                        })
                    }
                }, {
                    key: "sendServerRequest", value: (r = u()(C.a.mark(function t(e, n, r) {
                        var o, i, a, s, c, u = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return o = performance.now(), i = this.sendMessage(null, "request", n, "action", e, r), t.next = 4, D.a.race(new Array(new D.a(function (t) {
                                        return a = E()(function () {
                                            return t(void 0)
                                        }, u.p2pContext.Config.serverTimeoutMs)
                                    }), i));
                                case 4:
                                    if (s = t.sent, clearTimeout(a), !(n < 0)) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return", s);
                                case 8:
                                    return c = performance.now(), void 0 === s ? this.p2pContext.P2PDataCollectionStatus.addTrackerResponse(!1, c - o) : this.p2pContext.P2PDataCollectionStatus.addTrackerResponse(!0, c - o), t.abrupt("return", s);
                                case 11:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, e, n) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "sendPeerRequest", value: (n = u()(C.a.mark(function t(e, n, r, o) {
                        var i, a, s, c = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return i = this.sendMessage(e, "request", r, "action", n, o), t.next = 3, D.a.race(new Array(new D.a(function (t) {
                                        return a = E()(function () {
                                            return t(void 0)
                                        }, c.p2pContext.Config.peerConnectionTimeoutMs)
                                    }), i));
                                case 3:
                                    return s = t.sent, clearTimeout(a), t.abrupt("return", s);
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, e, r, o) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "sendPeerResponse", value: function (t, e, n, r) {
                        return this.sendMessage(t, "response", e, "status", n, r)
                    }
                }, {
                    key: "onPeerRequest", value: function (t) {
                        this.messageSink.onPeerMessage(this, t.from, t, t.requestId)
                    }
                }, {
                    key: "onServerRequest", value: function (t) {
                        this.messageSink.onServerMessage(this, t)
                    }
                }, {
                    key: "onMessageReceived", value: function (t) {
                        if (0 == this.needDestroy) try {
                            var e = JSON.parse(t);
                            this.p2pContext.Config.allowPrintLog(7) && console.log("recv: ", e), "response" == e.type && vt()(e.requestId) && e.requestId > 0 ? this.dispatchResponse(e) : "request" == e.type && vt()(e.requestId) && (null == e.from ? this.onServerRequest(e) : this.onPeerRequest(e))
                        } catch (t) {
                            console.log(t)
                        }
                    }
                }, {
                    key: "destroy", value: function () {
                        var t;
                        this.needDestroy = !0, null != this.ws && (this.ws.close(), this.ws = void 0), P()(t = this.pendingRequests).call(t, function (t, e) {
                            return t(void 0)
                        }), this.pendingRequests.clear()
                    }
                }], [{
                    key: "connect", value: (e = u()(C.a.mark(function e(n, r, o, i) {
                        var a;
                        return C.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return a = new t(n, r, o), e.next = 3, new D.a(function (t) {
                                        a.onReconnected = function () {
                                            t()
                                        }, a.trackerConnect()
                                    });
                                case 3:
                                    return a.onReconnected = i, e.abrupt("return", a);
                                case 5:
                                case"end":
                                    return e.stop()
                            }
                        }, e)
                    })), function (t, n, r, o) {
                        return e.apply(this, arguments)
                    })
                }]), t
            }(), Tt = function () {
                function t(e, n) {
                    p()(this, t), y()(this, "curVisibilityState", Et.BROADCAST), y()(this, "needDestroy", !1), y()(this, "p2pContext", void 0), y()(this, "tracker", void 0), y()(this, "peerSched", void 0), this.p2pContext = e, this.peerSched = n
                }

                var e, n, r, o, i;
                return v()(t, [{
                    key: "initTracker", value: function (t) {
                        this.tracker = t, 1 == this.needDestroy && this.destroy()
                    }
                }, {
                    key: "onTrackerReconnected", value: function () {
                        var t = this;
                        this.setSelfVisible(this.curVisibilityState).then(function (e) {
                            t.p2pContext.printExtLog(0, "SetVisible after reconnect."), t.p2pContext.Config.allowPrintLog(0) && console.warn("[SistersPlayer] SetVisible after reconnect.")
                        }), this.sendNatType()
                    }
                }, {
                    key: "getPeers", value: (i = u()(C.a.mark(function t() {
                        var e;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = {peers: [], leeches: [], seedboxes: new w.a}, null == this.tracker) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.next = 4, this.tracker.sendServerRequest("getPeers", 0, {roles: ["peer", "leech", "seedbox"]}).then(function (t) {
                                        if (null != t && t.data && (t.data.peers && (e.peers = t.data.peers), t.data.leeches && (e.leeches = t.data.leeches), t.data.seedboxes)) for (var n = 0, r = M()(t.data.seedboxes); n < r.length; n++) {
                                            var o = s()(r[n], 2), i = o[0], a = o[1];
                                            yt()(a) && e.seedboxes.set(i, a)
                                        }
                                        return e
                                    });
                                case 4:
                                    return t.abrupt("return", t.sent);
                                case 7:
                                    return t.abrupt("return", new D.a(function (t) {
                                        return t(e)
                                    }));
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "sendPeerCandidate", value: (o = u()(C.a.mark(function t(e, n, r) {
                        var o;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (null == this.tracker) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.next = 3, this.tracker.sendPeerRequest(e, "candidate", -1, {
                                        direction: n,
                                        cand: r
                                    });
                                case 3:
                                    if ("ok" != (null == (o = t.sent) ? void 0 : o.status)) {
                                        t.next = 8;
                                        break
                                    }
                                    return t.abrupt("return", !0);
                                case 8:
                                    return t.abrupt("return", !1);
                                case 9:
                                    t.next = 12;
                                    break;
                                case 11:
                                    return t.abrupt("return", !1);
                                case 12:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, e, n) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "connectPeer", value: (r = u()(C.a.mark(function t(e, n) {
                        var r, o, i, a, s, c, u, l, f, h, p = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return r = new pt.NyaPeer(this.p2pContext, this.peerSched, !1), null == n || n(r), r.extData.peerId = e, o = new xt.c, t.next = 6, o.lock();
                                case 6:
                                    return t.next = 8, r.createNyaOffer(function (t) {
                                        o.lock().then(function () {
                                            p.sendPeerCandidate(e, "offer", t), o.unlock()
                                        })
                                    });
                                case 8:
                                    if (i = t.sent, a = void 0, null == this.tracker) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.next = 13, this.tracker.sendPeerRequest(e, "connect", 0, {
                                        protocol: St.Configuration.ProtocolVersion,
                                        offer: i,
                                        role: {type: "peer"},
                                        nat: null !== (s = Rt.getTrackerNatTypeStr(this.p2pContext.P2P.nat.getCurrentNatType())) && void 0 !== s ? s : "non-sym"
                                    });
                                case 13:
                                    a = t.sent;
                                case 14:
                                    if (o.unlock(), null != a) {
                                        t.next = 18;
                                        break
                                    }
                                    return this.peerSched.onPeerConnectComplete(r, !1), t.abrupt("return");
                                case 18:
                                    if (t.prev = 18, "ok" === a.status) {
                                        t.next = 23;
                                        break
                                    }
                                    this.peerSched.onPeerConnectComplete(r, !1), t.next = 52;
                                    break;
                                case 23:
                                    if (u = a.data, l = u.answer, this.p2pContext.printExtLog(3, "peer connecting " + e), this.p2pContext.Config.allowPrintLog(3) && console.log("peer connecting " + e), r.natType = null !== (c = u.nat) && void 0 !== c ? c : "non-sym", r.parsePeerRole(u.role), r.peerRole != pt.PeerRole.Seedbox) {
                                        t.next = 46;
                                        break
                                    }
                                    if (h = !1, P()(f = r.seedSliceIds).call(f, function (t) {
                                        p.peerSched.getSeedboxNeedConnectNum(t) > 0 && (h = !0)
                                    }), 1 != h) {
                                        t.next = 41;
                                        break
                                    }
                                    return t.t0 = this.peerSched, t.t1 = r, t.next = 37, r.acceptNyaAnswer(l);
                                case 37:
                                    t.t2 = t.sent, t.t0.onPeerConnectComplete.call(t.t0, t.t1, t.t2), t.next = 44;
                                    break;
                                case 41:
                                    this.p2pContext.printExtLog(2, "not need this seedbox: " + e), this.p2pContext.Config.allowPrintLog(2) && console.log("not need this seedbox: " + e), this.peerSched.onPeerConnectComplete(r, !1);
                                case 44:
                                    t.next = 52;
                                    break;
                                case 46:
                                    return t.t3 = this.peerSched, t.t4 = r, t.next = 50, r.acceptNyaAnswer(l);
                                case 50:
                                    t.t5 = t.sent, t.t3.onPeerConnectComplete.call(t.t3, t.t4, t.t5);
                                case 52:
                                    t.next = 58;
                                    break;
                                case 54:
                                    t.prev = 54, t.t6 = t.catch(18), console.log(t.t6), this.peerSched.onPeerConnectComplete(r, !1);
                                case 58:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this, [[18, 54]])
                    })), function (t, e) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "getVisibilityState", value: function () {
                        return this.curVisibilityState
                    }
                }, {
                    key: "setSelfVisible", value: (n = u()(C.a.mark(function t(e) {
                        var n, r, o, i, a, s;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (r = !1, e == Et.GONE ? r = !1 : e == Et.BROADCAST && (r = !0), this.tracker) {
                                        t.next = 4;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 4:
                                    return t.next = 6, null === (n = this.tracker) || void 0 === n ? void 0 : n.sendServerRequest("setVisible", 0, {value: r});
                                case 6:
                                    if ("ok" !== (null == (o = t.sent) ? void 0 : o.status)) {
                                        t.next = 16;
                                        break
                                    }
                                    return t.next = 10, null === (i = this.p2pContext.PeerSched) || void 0 === i ? void 0 : i.getConnectMutex().lock();
                                case 10:
                                    return this.curVisibilityState = e, null === (a = this.p2pContext.PeerSched) || void 0 === a || a.getConnectCV().notifyAll(), null === (s = this.p2pContext.PeerSched) || void 0 === s || s.getConnectMutex().unlock(), t.abrupt("return", !0);
                                case 16:
                                    return t.abrupt("return", !1);
                                case 17:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "sendNatType", value: function () {
                        var t, e = this.p2pContext.P2P.nat.getCurrentNatType(), n = Rt.getTrackerNatTypeStr(e);
                        return void 0 !== n && (null === (t = this.tracker) || void 0 === t || t.sendServerRequest("setNatType", -1, {type: n}), !0)
                    }
                }, {
                    key: "reportDownloadBlockSuccessOrAwaysFail", value: function (t, e) {
                        var n, r, o, i;
                        return this.p2pContext.printExtLog(3, ct()(n = "peerId ".concat(t, " report ")).call(n, e ? "peerConnected" : "peerConnectFailed", " to tracker.")), this.p2pContext.Config.allowPrintLog(3) && console.log(ct()(i = "peerId ".concat(t, " report ")).call(i, e ? "peerConnected" : "peerConnectFailed", " to tracker.")), null !== (r = null === (o = this.tracker) || void 0 === o ? void 0 : o.sendServerRequest("report", -1, {
                            id: e ? "peerConnected" : "peerConnectFailed",
                            remote: t
                        }).then(function (t) {
                            return void 0 !== t && "ok" === (null == t ? void 0 : t.status)
                        })) && void 0 !== r ? r : D.a.resolve(!1)
                    }
                }, {
                    key: "onPeerMessage", value: function (t, e, n, r) {
                        return this.peerSched.onPeerRelayMessage(e, n, r)
                    }
                }, {
                    key: "onServerMessage", value: function (t, e) {
                        switch (e.action) {
                            case"setPeerId":
                                this.p2pContext.CurPeerId = e.data.id;
                                break;
                            case"updateConfig":
                                this.p2pContext.setConfiguration(e.data.jsonstr);
                                break;
                            case"move":
                                this.p2pContext.setConfiguration(b()({trackerServers: [e.data.target]})), this.peerSched.recreateTracker()
                        }
                    }
                }, {
                    key: "sendPeerResponse", value: function (t, e, n, r) {
                        return null != this.tracker ? this.tracker.sendPeerResponse(t, e, n, r) : new D.a(function (t) {
                            return t(void 0)
                        })
                    }
                }, {
                    key: "destroy", value: function () {
                        var t;
                        this.needDestroy = !0, null === (t = this.tracker) || void 0 === t || t.destroy()
                    }
                }], [{
                    key: "connect", value: (e = u()(C.a.mark(function e(n, r, o, i) {
                        var a, s;
                        return C.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return a = new t(n, o), e.next = 3, It.connect(n, r, a, function () {
                                        a.onTrackerReconnected()
                                    });
                                case 3:
                                    return s = e.sent, a.initTracker(s), a.setSelfVisible(Et.BROADCAST), a.sendNatType(), e.abrupt("return", a);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }, e)
                    })), function (t, n, r, o) {
                        return e.apply(this, arguments)
                    })
                }]), t
            }();
            !function (t) {
                t[t.GONE = 0] = "GONE", t[t.BROADCAST = 1] = "BROADCAST"
            }(Et || (Et = {}));
            var Dt = function () {
                function t(e, n, r, o) {
                    p()(this, t), y()(this, "p2pContext", void 0), y()(this, "pendingIncomingPeers", new w.a), y()(this, "pendingOutcomingPeers", new w.a), y()(this, "connectedPeers", new w.a), y()(this, "curSliceIds", void 0), y()(this, "cancelToken", void 0), y()(this, "trackerSourceParam", void 0), y()(this, "sliceId", void 0), y()(this, "allSeedboxConnectNumBySlice", new w.a), y()(this, "tracker", void 0), y()(this, "trackerConnecting", !1), y()(this, "connectMutex", new xt.c), y()(this, "connectCV", new xt.a), this.trackerSourceParam = r, this.sliceId = o, this.p2pContext = e, this.cancelToken = n, this.curSliceIds = new j.a, this.updateAllSeedboxConnectNumBySlice()
                }

                var e, n, r, o, i;
                return v()(t, [{
                    key: "allowedInConnectNewPeer", value: function () {
                        var t = this.pendingIncomingPeers.size < this.p2pContext.Config.inConnectingLimit,
                            e = this.connectedPeers.size < this.p2pContext.Config.connectedLimit;
                        return t && e
                    }
                }, {
                    key: "getConnectMutex", value: function () {
                        return this.connectMutex
                    }
                }, {
                    key: "getConnectCV", value: function () {
                        return this.connectCV
                    }
                }, {
                    key: "getLeechNeedConnectNum", value: function () {
                        var t;
                        return this.p2pContext.Config.leechConnectNum - nt()(t = this.getConnectedPeers()).call(t, function (t) {
                            return t.peerRole == pt.PeerRole.Leech
                        }).length
                    }
                }, {
                    key: "getSeedboxNeedConnectNum", value: function (t) {
                        var e = this.allSeedboxConnectNumBySlice.get(t);
                        return e || (e = 0), this.p2pContext.Config.seedboxConnectNumBySliceId - e
                    }
                }, {
                    key: "recreateTracker", value: (i = u()(C.a.mark(function t() {
                        var e = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new D.a(function (t) {
                                        null != e.tracker ? (e.p2pContext.printExtLog(2, "Misaka will reconnect to the Last Order. (Service Redirect)"), e.p2pContext.Config.allowPrintLog(2) && console.warn("Misaka will reconnect to the Last Order. (Service Redirect)"), e.tracker.destroy(), e.tracker = void 0, e.trackerConnecting = !0, Tt.connect(e.p2pContext, e.trackerSourceParam, e, e.sliceId).then(function (n) {
                                            e.tracker = n, e.trackerConnecting = !0, t(!0)
                                        }).catch(function (e) {
                                            t(!1)
                                        })) : t(!1)
                                    }));
                                case 1:
                                case"end":
                                    return t.stop()
                            }
                        }, t)
                    })), function () {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "getTracker", value: function () {
                        return this.tracker
                    }
                }, {
                    key: "getP2PContext", value: function () {
                        return this.p2pContext
                    }
                }, {
                    key: "updateAllSeedboxConnectNumBySlice", value: function () {
                        for (var t, e = new w.a, n = 0; n < this.p2pContext.Config.sliceCount; n++) e.set(n, 0);
                        P()(t = this.connectedPeers).call(t, function (t) {
                            P()(t).call(t, function (t) {
                                var n;
                                t.peerRole == pt.PeerRole.Seedbox && P()(n = t.seedSliceIds).call(n, function (t) {
                                    var n = e.get(t);
                                    e.set(t, (n || 0) + 1)
                                })
                            })
                        }), this.allSeedboxConnectNumBySlice = e;
                        var r = "Update Seedbox Connect Number By Slice: \n" + b()(ot()(e));
                        this.p2pContext.printExtLog(3, r), this.p2pContext.Config.allowPrintLog(3) && console.log(r)
                    }
                }, {
                    key: "checkVisibilityStateNeedChange", value: (o = u()(C.a.mark(function t() {
                        var e = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.abrupt("return", new D.a(function (t) {
                                        var n = e.connectedPeers.size < e.p2pContext.Config.connectedLimit,
                                            r = e.connectedPeers.size <= e.p2pContext.Config.revisibleMark;
                                        null != e.tracker && 0 == e.trackerConnecting ? 1 == n && 1 == r && e.tracker.getVisibilityState() == Et.GONE ? (e.p2pContext.printExtLog(0, "Misaka will broadcast."), e.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Misaka will broadcast."), e.tracker.setSelfVisible(Et.BROADCAST), t()) : 0 == n && 0 == r && e.tracker.getVisibilityState() == Et.BROADCAST ? (e.p2pContext.printExtLog(0, "Misaka will gone."), e.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Misaka will gone."), e.tracker.setSelfVisible(Et.GONE), t()) : t() : t()
                                    }));
                                case 1:
                                case"end":
                                    return t.stop()
                            }
                        }, t)
                    })), function () {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "doConnect", value: function (t) {
                        var e = this;
                        if (this.tracker) {
                            if (this.p2pContext.GhostPeerIds.has(t)) return this.p2pContext.printExtLog(2, "has a ghost peerId: " + t), void (this.p2pContext.Config.allowPrintLog(2) && console.warn("has a ghost peerId: " + t));
                            if (this.pendingOutcomingPeers.has(t) || this.pendingIncomingPeers.has(t)) return;
                            if (this.connectedPeers.has(t) && this.connectedPeers.get(t).length > 0) return;
                            if (this.p2pContext.CurPeerId === t) return;
                            return new D.a(function (n) {
                                e.tracker ? e.tracker.connectPeer(t, function (r) {
                                    e.pendingOutcomingPeers.set(t, r), n()
                                }) : n()
                            })
                        }
                        return D.a.resolve()
                    }
                }, {
                    key: "createConnectPeerTask", value: function (t) {
                        var e = this;
                        return u()(C.a.mark(function n() {
                            return C.a.wrap(function (n) {
                                for (; ;) switch (n.prev = n.next) {
                                    case 0:
                                        return n.next = 2, e.connectMutex.lock();
                                    case 2:
                                        return n.next = 4, e.connectCV.waitUntil(e.connectMutex, function () {
                                            return !!e.cancelToken.hasCancel || !(e.p2pContext.Config.connectedLimit < e.connectedPeers.size) && (e.p2pContext.Config.connectedLimit - e.connectedPeers.size - e.pendingIncomingPeers.size - e.pendingOutcomingPeers.size > 0 || e.pendingOutcomingPeers.size < e.p2pContext.Config.outConnectingLimit)
                                        });
                                    case 4:
                                        if (!1 !== e.cancelToken.hasCancel) {
                                            n.next = 7;
                                            break
                                        }
                                        return n.next = 7, e.doConnect(t);
                                    case 7:
                                        e.connectMutex.unlock();
                                    case 8:
                                    case"end":
                                        return n.stop()
                                }
                            }, n)
                        }))
                    }
                }, {
                    key: "beginConnectPeers", value: (r = u()(C.a.mark(function t() {
                        var e, n = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    e = C.a.mark(function t() {
                                        var e, r, o, i, a, s, c, u, l, f, h, p, d, v, g, y, x, m, w;
                                        return C.a.wrap(function (t) {
                                            for (; ;) switch (t.prev = t.next) {
                                                case 0:
                                                    return e = performance.now(), t.next = 3, n.connectMutex.lock();
                                                case 3:
                                                    return t.next = 5, n.connectCV.waitUntil(n.connectMutex, function () {
                                                        return !(null != n.tracker && !n.cancelToken.hasCancel) || n.tracker.getVisibilityState() != Et.GONE
                                                    });
                                                case 5:
                                                    if (n.connectMutex.unlock(), null == n.tracker) {
                                                        t.next = 32;
                                                        break
                                                    }
                                                    return r = function (t) {
                                                        var e, n;
                                                        return at()(e = G()(n = at()(t).call(t, function (t) {
                                                            return [Math.random(), t]
                                                        })).call(n, function (t, e) {
                                                            return t[0] - e[0]
                                                        })).call(e, function (t) {
                                                            return t[1]
                                                        })
                                                    }, t.next = 10, n.tracker.getPeers();
                                                case 10:
                                                    if (o = t.sent, i = (i = o.peers) ? r(i) : new Array, a = o.leeches, s = n.getLeechNeedConnectNum(), a = a ? I()(c = r(a)).call(c, 0, s) : new Array, n.p2pContext.printExtLog(2, "ready to connect leeches: " + b()(a)), n.p2pContext.Config.allowPrintLog(2) && console.warn("ready to connect leeches: " + b()(a)), u = new Array, n.p2pContext.Config.useSeedBox) {
                                                        for (l = 0; l < n.p2pContext.Config.sliceCount; l++) (f = o.seedboxes.get(l.toString())) && (h = n.getSeedboxNeedConnectNum(l)) > 0 && (u = ct()(u).call(u, I()(p = r(f)).call(p, 0, h)));
                                                        n.p2pContext.printExtLog(2, "ready to connect seedboxes: " + b()(u)), n.p2pContext.Config.allowPrintLog(2) && console.warn("ready to connect seedboxes: " + b()(u))
                                                    }
                                                    d = new Array, P()(u).call(u, function (t) {
                                                        var e = n.createConnectPeerTask(t);
                                                        null != e && d.push(e)
                                                    }), P()(a).call(a, function (t) {
                                                        var e = n.createConnectPeerTask(t);
                                                        null != e && d.push(e)
                                                    }), P()(i).call(i, function (t) {
                                                        var e = n.createConnectPeerTask(t);
                                                        null != e && d.push(e)
                                                    }), v = 0, g = d;
                                                case 25:
                                                    if (!(v < g.length)) {
                                                        t.next = 32;
                                                        break
                                                    }
                                                    return y = g[v], t.next = 29, y();
                                                case 29:
                                                    v++, t.next = 25;
                                                    break;
                                                case 32:
                                                    return x = performance.now(), m = x - e, (w = n.p2pContext.Config.getPeersIntervalMs - m) < 0 && (w = 0), t.next = 38, new D.a(function (t) {
                                                        return E()(function () {
                                                            return t()
                                                        }, w)
                                                    });
                                                case 38:
                                                case"end":
                                                    return t.stop()
                                            }
                                        }, t)
                                    });
                                case 1:
                                    if (this.cancelToken.hasCancel) {
                                        t.next = 5;
                                        break
                                    }
                                    return t.delegateYield(e(), "t0", 3);
                                case 3:
                                    t.next = 1;
                                    break;
                                case 5:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "IteratorToArray", value: function (t) {
                        for (var e = new Array; ;) {
                            var n = t.next();
                            if (n.done) break;
                            e.push(n.value)
                        }
                        return e
                    }
                }, {
                    key: "getConnectedPeers", value: function () {
                        var t, e;
                        return lt()(t = this.IteratorToArray(ht()(e = this.connectedPeers).call(e))).call(t, function (t) {
                            return t
                        })
                    }
                }, {
                    key: "getConnectingPeers", value: function () {
                        var t, e, n;
                        return ct()(t = this.IteratorToArray(ht()(e = this.pendingIncomingPeers).call(e))).call(t, this.IteratorToArray(ht()(n = this.pendingOutcomingPeers).call(n)))
                    }
                }, {
                    key: "onConnectionStatusChanged", value: function () {
                        this.updateAllSeedboxConnectNumBySlice(), this.checkVisibilityStateNeedChange(), this.connectCV.notifyAll()
                    }
                }, {
                    key: "onPeerConnectComplete", value: function (t, e) {
                        try {
                            if (!1 === t.isIncoming() ? this.pendingOutcomingPeers.delete(t.extData.peerId) : this.pendingIncomingPeers.delete(t.extData.peerId), "sym" === t.natType && this.p2pContext.P2P.nat.onSymmetricConnect(e), !1 === e) return void t.close();
                            if (this.cancelToken.hasCancel) return this.p2pContext.printExtLog(2, "Cancel connect. target peerId: " + t.extData.peerId + " when cur peerId: " + this.p2pContext.CurPeerId), this.p2pContext.Config.allowPrintLog(2) && console.warn("Cancel connect. target peerId: " + t.extData.peerId + " when cur peerId: " + this.p2pContext.CurPeerId), void this.onPeerDisConnected(t);
                            try {
                                this.p2pContext.printExtLog(2, "peer connected: id:" + t.extData.peerId), this.p2pContext.Config.allowPrintLog(2) && console.log("peer connected: id:" + t.extData.peerId), !1 === this.connectedPeers.has(t.extData.peerId) && this.connectedPeers.set(t.extData.peerId, new Array), this.connectedPeers.get(t.extData.peerId).push(t)
                            } catch (t) {
                                console.log(t)
                            }
                        } finally {
                            this.onConnectionStatusChanged()
                        }
                    }
                }, {
                    key: "onPeerDisConnected", value: function (t) {
                        try {
                            t.close(), t.terminateAllPendingRequests();
                            var e = this.connectedPeers.get(t.extData.peerId);
                            if (void 0 !== e) {
                                var n = nt()(e).call(e, function (e) {
                                    return e != t
                                });
                                n.length > 0 ? (this.p2pContext.printExtLog(2, "remove peerId ".concat(t.extData.peerId, " connect.")), this.p2pContext.Config.allowPrintLog(2) && console.log("remove peerId ".concat(t.extData.peerId, " connect.")), this.connectedPeers.set(t.extData.peerId, n)) : (this.p2pContext.printExtLog(2, "clear empty peerId ".concat(t.extData.peerId, " connect from connectedPeers.")), this.p2pContext.Config.allowPrintLog(2) && console.log("clear empty peerId ".concat(t.extData.peerId, " connect from connectedPeers.")), this.connectedPeers.delete(t.extData.peerId))
                            }
                        } finally {
                            this.onConnectionStatusChanged()
                        }
                    }
                }, {
                    key: "closePeer", value: function (t) {
                        var e = this, n = this.connectedPeers.get(t);
                        void 0 !== n && P()(n).call(n, function (t) {
                            e.onPeerDisConnected(t)
                        })
                    }
                }, {
                    key: "initSliceId", value: function (t) {
                        void 0 !== t && this.curSliceIds.add(t)
                    }
                }, {
                    key: "addSliceId", value: function (t) {
                        this.curSliceIds.add(t)
                    }
                }, {
                    key: "deleteSliceId", value: function (t) {
                        this.curSliceIds.delete(t)
                    }
                }, {
                    key: "getSliceIds", value: function () {
                        return this.curSliceIds
                    }
                }, {
                    key: "onPeerRelayMessage", value: (n = u()(C.a.mark(function t(e, n, r) {
                        var o, i, a, s, c, u, l, f, h, p, d, v = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (null == this.tracker) {
                                        t.next = 30;
                                        break
                                    }
                                    if ("connect" != (null == n ? void 0 : n.action)) {
                                        t.next = 29;
                                        break
                                    }
                                    if (!(void 0 !== this.connectedPeers.get(e) && this.connectedPeers.get(e).length > 0 || 1 == this.cancelToken.hasCancel || 0 == this.allowedInConnectNewPeer() || this.p2pContext.GhostPeerIds.has(e))) {
                                        t.next = 7;
                                        break
                                    }
                                    1 == this.cancelToken.hasCancel && (this.p2pContext.printExtLog(2, "refused connection, because exiting from the Misaka Network."), this.p2pContext.Config.allowPrintLog(2) && console.warn("refused connection, because exiting from the Misaka Network.")), this.tracker.sendPeerResponse(e, r, "refused"), t.next = 27;
                                    break;
                                case 7:
                                    if ((null == n || null === (o = n.data) || void 0 === o ? void 0 : o.protocol) === St.Configuration.ProtocolVersion) {
                                        t.next = 11;
                                        break
                                    }
                                    this.tracker.sendPeerResponse(e, r, "protocol_incompatible"), t.next = 27;
                                    break;
                                case 11:
                                    try {
                                        i = new pt.NyaPeer(this.p2pContext, this, !0)
                                    } catch (t) {
                                        this.p2pContext.printExtLog(0, "create peer failed: " + t), this.p2pContext.Config.allowPrintLog(0) && console.warn("create peer failed: " + t)
                                    }
                                    if (void 0 === i) {
                                        t.next = 27;
                                        break
                                    }
                                    return i.natType = null !== (a = null == n || null === (s = n.data) || void 0 === s ? void 0 : s.nat) && void 0 !== a ? a : "non-sym", i.extData.peerId = e, this.pendingIncomingPeers.set(e, i), u = null == n || null === (c = n.data) || void 0 === c ? void 0 : c.offer, i.answerNyaOffer(u, function (t) {
                                        null != v.tracker && v.tracker.sendPeerCandidate(e, "answer", t)
                                    }).then(function (t) {
                                        if (void 0 !== v.tracker && void 0 !== i) {
                                            var o = function () {
                                                var n;
                                                v.tracker && v.tracker.sendPeerResponse(e, r, "ok", {
                                                    answer: t,
                                                    role: {type: "peer"},
                                                    nat: null !== (n = Rt.getTrackerNatTypeStr(v.p2pContext.P2P.nat.getCurrentNatType())) && void 0 !== n ? n : "non-sym"
                                                })
                                            };
                                            if (i.parsePeerRole(n.data.role), i.peerRole == pt.PeerRole.Seedbox) {
                                                var a, s = !1;
                                                P()(a = i.seedSliceIds).call(a, function (t) {
                                                    v.getSeedboxNeedConnectNum(t) > 0 && (s = !0)
                                                }), 1 == s ? o() : (v.p2pContext.printExtLog(2, "not need this seedbox: " + e), v.p2pContext.Config.allowPrintLog(2) && console.log("not need this seedbox: " + e))
                                            } else o()
                                        }
                                    }).catch(function (t) {
                                        v.p2pContext.printExtLog(0, "answerNyaOffer failed: " + t), v.p2pContext.Config.allowPrintLog(0) && console.warn("answerNyaOffer failed: " + t)
                                    }), t.next = 20, i.waitForConnected();
                                case 20:
                                    if (!t.sent) {
                                        t.next = 24;
                                        break
                                    }
                                    this.onPeerConnectComplete(i, !0), t.next = 27;
                                    break;
                                case 24:
                                    this.onPeerConnectComplete(i, !1), this.p2pContext.printExtLog(2, "peer connect timeout " + e), this.p2pContext.Config.allowPrintLog(2) && console.log("peer connect timeout " + e);
                                case 27:
                                    t.next = 30;
                                    break;
                                case 29:
                                    "candidate" == (null == n ? void 0 : n.action) ? (h = null === (l = n.data) || void 0 === l ? void 0 : l.cand, p = null === (f = n.data) || void 0 === f ? void 0 : f.direction, d = void 0, "offer" == p ? d = this.pendingIncomingPeers.get(e) : "answer" == p && (d = this.pendingOutcomingPeers.get(e)), void 0 !== d && d.addRemoteCandidate(h)) : this.tracker.sendPeerResponse(e, r, "not_implemented");
                                case 30:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, e, r) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "onPeerRequestMessage", value: function (t, e) {
                        var n = this, r = e.requestId;
                        switch (e.action) {
                            case"downloadAndStat":
                                var o = e.data.frag, i = this.p2pContext.FragMan.getFragment(o), a = e.data.blockId,
                                    s = null == i ? void 0 : i.getBlock(a);
                                if (null == i) t.sendResponseMessage(function () {
                                    return {requestId: r, status: "not_found"}
                                }); else if (a >= 0 && void 0 === s) t.sendResponseMessage(function () {
                                    return {requestId: r, status: "not_found"}
                                }); else if (i.canShare()) {
                                    var c = performance.now(), u = e.data.nonblocking, l = function () {
                                        if (null == i) return null;
                                        var t = i.getDistances();
                                        return n.p2pContext.Config.enableHideOwner && (t = at()(t).call(t, function (t) {
                                            return 127 & t
                                        })), t
                                    };
                                    if (void 0 === s || !s.isSucceed() && u) t.sendResponseMessage(function () {
                                        return {requestId: r, status: "ok", data: {block: null, distances: l()}}
                                    }); else {
                                        var f = i.getBlockByteRange(a);
                                        i.addShareData(a, f[1] - f[0]), s.onDataResolved(function (e) {
                                            null != i && null != e && t.sendResponseMessage(function () {
                                                var t;
                                                if (null != i) return performance.now() - c > n.p2pContext.Config.uploadMaxWaitTimeoutMs ? (n.p2pContext.printExtLog(2, "drop datablock response due to timeout"), void (n.p2pContext.Config.allowPrintLog(2) && console.log("drop datablock response due to timeout"))) : (null === (t = n.p2pContext.P2PDataCollectionStatus) || void 0 === t || t.addP2PSendSizeRealtime(e.byteLength), {
                                                    requestId: r,
                                                    status: "ok",
                                                    data: {block: e, distances: l()}
                                                })
                                            })
                                        })
                                    }
                                } else this.p2pContext.printExtLog(2, (null == i ? void 0 : i.getFragmentName()) + " is overload"), this.p2pContext.Config.allowPrintLog(2) && console.warn((null == i ? void 0 : i.getFragmentName()) + " is overload"), t.sendResponseMessage(function () {
                                    return {requestId: r, status: "overload"}
                                })
                        }
                    }
                }, {
                    key: "reportDownloadBlockSuccess", value: function (t) {
                        var e;
                        t.extData.isDownloadBlockReport || (this.p2pContext.P2PDataCollectionStatus.addPeerConnectCount(!1, !0), Math.random() < this.p2pContext.Config.reportPeerSuccessProbability && (null === (e = this.tracker) || void 0 === e || e.reportDownloadBlockSuccessOrAwaysFail(t.extData.peerId, !0)), t.extData.isDownloadBlockReport = !0)
                    }
                }, {
                    key: "reportDownloadBlockAwaysFail", value: function (t) {
                        var e;
                        this.p2pContext.P2PDataCollectionStatus.addPeerConnectCount(!1, !1), Math.random() < this.p2pContext.Config.reportPeerFailedProbability && (null === (e = this.tracker) || void 0 === e || e.reportDownloadBlockSuccessOrAwaysFail(t.extData.peerId, !1))
                    }
                }, {
                    key: "reportConnectionAbort", value: function (t) {
                        this.p2pContext.P2PDataCollectionStatus.addPeerConnectCount(!0, !1)
                    }
                }, {
                    key: "destroy", value: function () {
                        var t, e, n, r = this;
                        null != this.tracker && (this.tracker.destroy(), this.tracker = void 0), P()(t = this.pendingIncomingPeers).call(t, function (t) {
                            t.close()
                        }), P()(e = this.pendingOutcomingPeers).call(e, function (t) {
                            t.close()
                        }), P()(n = this.getConnectedPeers()).call(n, function (t) {
                            r.onPeerDisConnected(t)
                        })
                    }
                }], [{
                    key: "create", value: (e = u()(C.a.mark(function e(n, r, o, i) {
                        var a, s;
                        return C.a.wrap(function (e) {
                            for (; ;) switch (e.prev = e.next) {
                                case 0:
                                    return (a = new t(n, r, o, i)).trackerConnecting = !0, e.next = 4, Tt.connect(n, o, a, i);
                                case 4:
                                    return s = e.sent, a.tracker = s, a.trackerConnecting = !1, e.abrupt("return", a);
                                case 8:
                                case"end":
                                    return e.stop()
                            }
                        }, e)
                    })), function (t, n, r, o) {
                        return e.apply(this, arguments)
                    })
                }]), t
            }(), Lt = n(119), Ft = n.n(Lt), Ot = n(120), Ut = n.n(Ot), Nt = n(81), Mt = n.n(Nt), Bt = n(11);

            function _t(t, e) {
                var n = void 0 !== Ut.a && Mt()(t) || t["@@iterator"];
                if (!n) {
                    if (yt()(t) || (n = function (t, e) {
                        var n;
                        if (t) {
                            if ("string" == typeof t) return zt(t, e);
                            var r = I()(n = Object.prototype.toString.call(t)).call(n, 8, -1);
                            return "Object" === r && t.constructor && (r = t.constructor.name), "Map" === r || "Set" === r ? Ft()(t) : "Arguments" === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? zt(t, e) : void 0
                        }
                    }(t)) || e && t && "number" == typeof t.length) {
                        n && (t = n);
                        var r = 0, o = function () {
                        };
                        return {
                            s: o, n: function () {
                                return r >= t.length ? {done: !0} : {done: !1, value: t[r++]}
                            }, e: function (t) {
                                throw t
                            }, f: o
                        }
                    }
                    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                }
                var i, a = !0, s = !1;
                return {
                    s: function () {
                        n = n.call(t)
                    }, n: function () {
                        var t = n.next();
                        return a = t.done, t
                    }, e: function (t) {
                        s = !0, i = t
                    }, f: function () {
                        try {
                            a || null == n.return || n.return()
                        } finally {
                            if (s) throw i
                        }
                    }
                }
            }

            function zt(t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }

            var jt, qt = function () {
                function t(e, n) {
                    p()(this, t), y()(this, "localDistanceChanged", Array()), y()(this, "p2pCtx", void 0), y()(this, "frag", void 0), y()(this, "blockMinDistances", void 0), this.frag = n, this.p2pCtx = e;
                    var r = n.getBlockCount();
                    this.blockMinDistances = new Uint8Array(r);
                    for (var o = 0; o < r; ++o) this.blockMinDistances[o] = e.Config.maxDistance
                }

                return v()(t, [{
                    key: "updateLocalDistances", value: function (t) {
                        t(this.frag.getDistances());
                        var e, n = _t(this.localDistanceChanged);
                        try {
                            for (n.s(); !(e = n.n()).done;) (0, e.value)()
                        } catch (t) {
                            n.e(t)
                        } finally {
                            n.f()
                        }
                    }
                }]), t
            }(), Wt = function () {
                function t(e, n) {
                    var r = this;
                    p()(this, t), y()(this, "ctx", void 0), y()(this, "peer", void 0), y()(this, "updateDistancesTS", null), y()(this, "distancesUpdateLock", new xt.c), y()(this, "distances", null), y()(this, "isDistanceFinal", !1), y()(this, "taskAvailableMutex", new xt.c), y()(this, "taskAvailableCV", new xt.a), y()(this, "blockIds", void 0), y()(this, "abandoned", !1), this.ctx = e, this.peer = n, e.frag.onFinished(function () {
                        r.stopAllInstance()
                    }), e.localDistanceChanged.push(function () {
                        r.wakeUpWorkers()
                    });
                    var o = !1;
                    if (e.p2pCtx.Config.enableReverseOrder) {
                        var i = this.peer.extData.peerId;
                        i.length > 0 && i.charCodeAt(i.length - 1) % 2 == 0 && (o = !0)
                    }
                    var a = e.frag.getBlockCount();
                    if (this.blockIds = new Uint8Array(a), o) for (var s = 0; s < a; ++s) this.blockIds[s] = a - 1 - s; else for (var c = 0; c < a; ++c) this.blockIds[c] = c
                }

                var e, n, r, o, i, a, s, c, l;
                return v()(t, [{
                    key: "wakeUpWorkers", value: (l = u()(C.a.mark(function t() {
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.taskAvailableMutex.lock();
                                case 2:
                                    this.taskAvailableCV.notifyAll(), this.taskAvailableMutex.unlock();
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return l.apply(this, arguments)
                    })
                }, {
                    key: "suspendCurrentWorker", value: (c = u()(C.a.mark(function t() {
                        var e;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return e = 0, t.next = 3, this.taskAvailableMutex.lock();
                                case 3:
                                    return t.next = 5, this.taskAvailableCV.waitUntil(this.taskAvailableMutex, function () {
                                        return e++ > 0
                                    });
                                case 5:
                                    this.taskAvailableMutex.unlock();
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return c.apply(this, arguments)
                    })
                }, {
                    key: "launchInstance", value: (s = u()(C.a.mark(function t() {
                        var e, n, r;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    this.ctx.p2pCtx.Config.allowPrintLog(5) && console.log("start process peer " + this.peer.extData.peerId + " for " + this.ctx.frag.getFragmentName()), e = 0;
                                case 2:
                                    if (this.abandoned || this.ctx.frag.isFinished()) {
                                        t.next = 31;
                                        break
                                    }
                                    if (!(++e > 100)) {
                                        t.next = 7;
                                        break
                                    }
                                    return console.warn("p2pdownloader instance: loop too many times"), t.abrupt("return");
                                case 7:
                                    return t.next = 9, this.updateDistance(!1);
                                case 9:
                                    if (!((n = t.sent) < 0)) {
                                        t.next = 12;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 12:
                                    return t.next = 14, this.runDownloadLoop();
                                case 14:
                                    if (!((r = t.sent) < 0)) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 17:
                                    if (0 != n || 0 != r) {
                                        t.next = 28;
                                        break
                                    }
                                    return t.next = 20, this.updateDistance(!0);
                                case 20:
                                    if (!((n = t.sent) < 0)) {
                                        t.next = 25;
                                        break
                                    }
                                    return t.abrupt("return");
                                case 25:
                                    if (0 != n) {
                                        t.next = 28;
                                        break
                                    }
                                    return t.next = 28, this.suspendCurrentWorker();
                                case 28:
                                    t.next = 2;
                                    break;
                                case 31:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return s.apply(this, arguments)
                    })
                }, {
                    key: "stopAllInstance", value: function () {
                        this.abandoned = !0, this.wakeUpWorkers()
                    }
                }, {
                    key: "sendRequest", value: (a = u()(C.a.mark(function t(e) {
                        var n, r = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.peer.sendRequestMessage(function () {
                                        if (!r.abandoned) return e()
                                    });
                                case 2:
                                    return n = t.sent, t.abrupt("return", n);
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return a.apply(this, arguments)
                    })
                }, {
                    key: "ban", value: function () {
                        var t;
                        this.ctx.p2pCtx.Config.allowPrintLog(1) && console.log("ban peer " + this.peer.extData.peerId), this.ctx.p2pCtx.GhostPeerIds.add(this.peer.extData.peerId), null === (t = this.ctx.p2pCtx.PeerSched) || void 0 === t || t.closePeer(this.peer.extData.peerId), this.stopAllInstance()
                    }
                }, {
                    key: "setRemoteDistance", value: function (t) {
                        var e = !1;
                        if (null == this.distances) e = !0; else {
                            var n = this.distances.length;
                            if (t.length != n) return !1;
                            for (var r = 0; r < n && t[r] == this.distances[r]; ++r) ;
                            r < n && (e = !0)
                        }
                        return t.length == nt()(t).call(t, function (t) {
                            return 0 == (127 & t)
                        }).length && (this.isDistanceFinal = !0), this.distances = t, this.updateDistancesTS = performance.now(), e && this.wakeUpWorkers(), !0
                    }
                }, {
                    key: "sendGetProgress", value: (i = u()(C.a.mark(function t() {
                        var e = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.sendRequest(function () {
                                        return {
                                            action: "downloadAndStat",
                                            data: {frag: e.ctx.frag.getFragmentName(), blockId: -1, nonblocking: !0}
                                        }
                                    });
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function () {
                        return i.apply(this, arguments)
                    })
                }, {
                    key: "sendDownloadBlock", value: (o = u()(C.a.mark(function t(e) {
                        var n = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.sendRequest(function () {
                                        return {
                                            action: "downloadAndStat",
                                            data: {frag: n.ctx.frag.getFragmentName(), blockId: e, nonblocking: !1}
                                        }
                                    });
                                case 2:
                                    return t.abrupt("return", t.sent);
                                case 3:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return o.apply(this, arguments)
                    })
                }, {
                    key: "updateDistance", value: (r = u()(C.a.mark(function t(e) {
                        var n, r, o, i;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (!this.distancesUpdateLock.isLocked()) {
                                        t.next = 2;
                                        break
                                    }
                                    return t.abrupt("return", 0);
                                case 2:
                                    return t.next = 4, this.distancesUpdateLock.lock();
                                case 4:
                                    if (t.prev = 4, !this.abandoned) {
                                        t.next = 7;
                                        break
                                    }
                                    return t.abrupt("return", -1);
                                case 7:
                                    if (null == this.updateDistancesTS) {
                                        t.next = 16;
                                        break
                                    }
                                    if (n = this.updateDistancesTS + this.ctx.p2pCtx.Config.refreshPeerProgressIntervalMs - performance.now(), !((n = Math.min(n, this.ctx.p2pCtx.Config.refreshPeerProgressIntervalMs)) > 0) || e) {
                                        t.next = 14;
                                        break
                                    }
                                    return t.abrupt("return", 0);
                                case 14:
                                    return t.next = 16, new D.a(function (t) {
                                        return E()(t, n)
                                    });
                                case 16:
                                    if (!this.abandoned) {
                                        t.next = 18;
                                        break
                                    }
                                    return t.abrupt("return", -1);
                                case 18:
                                    if (!this.isDistanceFinal) {
                                        t.next = 20;
                                        break
                                    }
                                    return t.abrupt("return", 0);
                                case 20:
                                    return t.next = 22, this.sendGetProgress();
                                case 22:
                                    if (null != (r = t.sent) && "overload" != r.status) {
                                        t.next = 27;
                                        break
                                    }
                                    return t.abrupt("return", -1);
                                case 27:
                                    if ("not_found" != r.status) {
                                        t.next = 31;
                                        break
                                    }
                                    this.updateDistancesTS = performance.now(), t.next = 36;
                                    break;
                                case 31:
                                    if ("ok" != r.status) {
                                        t.next = 36;
                                        break
                                    }
                                    if (i = null === (o = r.data) || void 0 === o ? void 0 : o.distances, this.setRemoteDistance(i)) {
                                        t.next = 36;
                                        break
                                    }
                                    return this.ban(), t.abrupt("return", -1);
                                case 36:
                                    return t.abrupt("return", 1);
                                case 37:
                                    return t.prev = 37, this.distancesUpdateLock.unlock(), t.finish(37);
                                case 40:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this, [[4, , 37, 40]])
                    })), function (t) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "doDownload", value: (n = u()(C.a.mark(function t(e, n) {
                        var r, o, i, a, s, c, u, l, f, h, p, d, v, g, y, x, m, w;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return r = this.peer.peerRole == pt.PeerRole.Seedbox ? Bt.d.TX_SEEDBOX : Bt.d.TX_PEER, o = this.peer.peerRole == pt.PeerRole.Seedbox ? Bt.d.RX_SEEDBOX : Bt.d.RX_PEER, i = this.peer.peerRole == pt.PeerRole.Seedbox ? Bt.d.LAG_SEEDBOX : Bt.d.LAG_PEER, a = this.peer.peerRole == pt.PeerRole.Seedbox ? Bt.a.SEED : Bt.a.EXCHANGE, (s = this.ctx.frag.getDistances())[e] = 128 & s[e] | n, c = !1, t.prev = 7, u = performance.now(), t.next = 11, this.sendDownloadBlock(e);
                                case 11:
                                    if (void 0 === (l = t.sent) || (!1 === l ? this.ctx.p2pCtx.P2PDataCollectionStatus.addPeerMessageDataCollection(r, 1) : (this.ctx.p2pCtx.P2PDataCollectionStatus.addPeerMessageDataCollection(i, Math.round(performance.now() - u)), this.ctx.p2pCtx.P2PDataCollectionStatus.addPeerMessageDataCollection(r, 1), this.ctx.p2pCtx.P2PDataCollectionStatus.addPeerMessageDataCollection(o, 1))), null != l && "overload" != l.status && "not_found" != l.status) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 17:
                                    if ("ok" != l.status) {
                                        t.next = 38;
                                        break
                                    }
                                    if (g = null !== (f = null === (h = l.data) || void 0 === h || null === (p = h.block) || void 0 === p ? void 0 : p.byteLength) && void 0 !== f ? f : 0, null == (y = null === (d = l.data) || void 0 === d ? void 0 : d.distances) || this.setRemoteDistance(y)) {
                                        t.next = 24;
                                        break
                                    }
                                    return this.ctx.p2pCtx.P2PDataCollectionStatus.addWastedDataSize(g, Bt.e.ERROR_DATA), this.ban(), t.abrupt("return", !1);
                                case 24:
                                    if (null != (x = null === (v = l.data) || void 0 === v ? void 0 : v.block) && null != x) {
                                        t.next = 27;
                                        break
                                    }
                                    return t.abrupt("return", !1);
                                case 27:
                                    if ((m = this.ctx.frag.getBlockByteRange(e))[1] - m[0] == x.length) {
                                        t.next = 32;
                                        break
                                    }
                                    return this.ctx.p2pCtx.P2PDataCollectionStatus.addWastedDataSize(g, Bt.e.ERROR_DATA), this.ban(), t.abrupt("return", !1);
                                case 32:
                                    return this.ctx.frag.setBlockData(e, x, tt.b.P2P, a, this.peer.extData.peerId) || this.ctx.p2pCtx.P2PDataCollectionStatus.addWastedDataSize(g, Bt.e.P2P_LATE), c = !0, t.abrupt("return", !0);
                                case 38:
                                    return t.abrupt("return", !1);
                                case 39:
                                    return t.prev = 39, c ? (null === (w = this.ctx.p2pCtx.PeerSched) || void 0 === w || w.reportDownloadBlockSuccess(this.peer), this.peer.onDownloadBlockSucceed()) : (this.ctx.updateLocalDistances(function (t) {
                                        return t[e] |= 127
                                    }), this.peer.onDownloadBlockFailed()), t.finish(39);
                                case 42:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this, [[7, , 39, 42]])
                    })), function (t, e) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "runDownloadLoop", value: (e = u()(C.a.mark(function t() {
                        var e, n, r, o, i, a, s, c, u, l;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    if (e = 0, null != this.distances) {
                                        t.next = 3;
                                        break
                                    }
                                    return t.abrupt("return", e);
                                case 3:
                                    n = this.ctx.frag.getDistances(), r = this.distances;
                                case 5:
                                    if (this.abandoned || this.ctx.frag.isFinished()) {
                                        t.next = 54;
                                        break
                                    }
                                    o = -1, i = 127, a = 0;
                                case 9:
                                    if (!(a < 2)) {
                                        t.next = 42;
                                        break
                                    }
                                    s = _t(this.blockIds), t.prev = 11, s.s();
                                case 13:
                                    if ((c = s.n()).done) {
                                        t.next = 27;
                                        break
                                    }
                                    if (u = c.value, 0 != a || 128 != (128 & r[u])) {
                                        t.next = 17;
                                        break
                                    }
                                    return t.abrupt("continue", 25);
                                case 17:
                                    if (127 == (127 & n[u])) {
                                        t.next = 19;
                                        break
                                    }
                                    return t.abrupt("continue", 25);
                                case 19:
                                    if (!((l = 127 & r[u]) > this.ctx.blockMinDistances[u])) {
                                        t.next = 22;
                                        break
                                    }
                                    return t.abrupt("continue", 25);
                                case 22:
                                    if (l < i && (o = u, i = l), 0 != i) {
                                        t.next = 25;
                                        break
                                    }
                                    return t.abrupt("break", 27);
                                case 25:
                                    t.next = 13;
                                    break;
                                case 27:
                                    t.next = 32;
                                    break;
                                case 29:
                                    t.prev = 29, t.t0 = t.catch(11), s.e(t.t0);
                                case 32:
                                    return t.prev = 32, s.f(), t.finish(32);
                                case 35:
                                    if (!(o >= 0)) {
                                        t.next = 37;
                                        break
                                    }
                                    return t.abrupt("break", 42);
                                case 37:
                                    if (0 != i) {
                                        t.next = 39;
                                        break
                                    }
                                    return t.abrupt("break", 42);
                                case 39:
                                    ++a, t.next = 9;
                                    break;
                                case 42:
                                    if (!(o < 0)) {
                                        t.next = 44;
                                        break
                                    }
                                    return t.abrupt("break", 54);
                                case 44:
                                    return this.ctx.blockMinDistances[o] = Math.max(3, 127 & r[o]), t.next = 47, this.doDownload(o, i + 2);
                                case 47:
                                    if (!t.sent) {
                                        t.next = 51;
                                        break
                                    }
                                    ++e, t.next = 52;
                                    break;
                                case 51:
                                    return t.abrupt("return", -1);
                                case 52:
                                    t.next = 5;
                                    break;
                                case 54:
                                    return t.abrupt("return", e);
                                case 55:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this, [[11, 29, 32, 35]])
                    })), function () {
                        return e.apply(this, arguments)
                    })
                }]), t
            }(), Vt = function () {
                function t(e) {
                    p()(this, t), y()(this, "peerFragWorkers", new Array), y()(this, "frag", void 0), this.frag = e
                }

                var e;
                return v()(t, [{
                    key: "startDownload", value: (e = u()(C.a.mark(function t(e, n) {
                        var r, o, i, a, s, c, u, l, f, h, p, d, v, g, y, x, m, w, k, b, S, P = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    o = this.frag.getDistances(), i = new Array, a = _t(this.frag.getSliceIds());
                                    try {
                                        for (a.s(); !(s = a.n()).done;) for (c = s.value, i.push(c), u = this.frag.getSliceBlockRange(c), l = u[0]; l < u[l]; ++l) o[l] = 128 & o[l] | 1
                                    } catch (t) {
                                        a.e(t)
                                    } finally {
                                        a.f()
                                    }
                                    for (f = new qt(e.getP2PContext(), this.frag), this.frag.isUseSeedboxEnabled() && (g = nt()(h = nt()(p = e.getConnectedPeers()).call(p, function (t) {
                                        return t.peerRole == pt.PeerRole.Seedbox
                                    })).call(h, function (t) {
                                        return t.shouldUsedAsSeed()
                                    }), i = at()(d = nt()(v = at()(i).call(i, function (t) {
                                        return {
                                            sliceid: t, seedboxes: nt()(g).call(g, function (e) {
                                                return e.seedSliceIds.has(t)
                                            })
                                        }
                                    })).call(v, function (t) {
                                        if (t.seedboxes.length > 0) {
                                            var e = P.frag.getSliceBlockRange(t.sliceid);
                                            if (2 == e.length && e[1] - e[0] > 0) for (var n = new Array(t.seedboxes.length), r = e[0]; r < e[1]; ++r) {
                                                var o, i = r % n.length;
                                                null == n[i] && (n[i] = new Wt(f, t.seedboxes[i])), null === (o = n[i]) || void 0 === o || o.doDownload(r, 1)
                                            }
                                            return !1
                                        }
                                        return !0
                                    })).call(d, function (t) {
                                        return t.sliceid
                                    })), n(i), y = nt()(r = e.getConnectedPeers()).call(r, function (t) {
                                        return t.peerRole == pt.PeerRole.Peer
                                    }), x = e.getP2PContext().Config, m = Math.min(x.totalDownloadInstances, y.length), w = Math.min(x.totalDownloadInstances, y.length * x.maxDownloadInstancesPerPeer), k = 0; k < m; ++k) this.peerFragWorkers.push(new Wt(f, y[k]));
                                    for (b = [], S = 0; S < w; ++S) b.push(this.peerFragWorkers[S % m].launchInstance());
                                    return t.next = 16, D.a.all(b);
                                case 16:
                                    return t.abrupt("return");
                                case 17:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t, n) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "stopDownload", value: function () {
                        var t, e = _t(this.peerFragWorkers);
                        try {
                            for (e.s(); !(t = e.n()).done;) t.value.stopAllInstance()
                        } catch (t) {
                            e.e(t)
                        } finally {
                            e.f()
                        }
                    }
                }]), t
            }(), Gt = function () {
                function t(e, n) {
                    p()(this, t), y()(this, "url", void 0), y()(this, "p2pContext", void 0), this.p2pContext = e, this.url = n
                }

                return v()(t, [{
                    key: "FetchSize", value: function (t) {
                        var e = this;
                        return null == t && (t = !1), new D.a(function (n) {
                            fetch(e.url, {method: "HEAD", cache: t ? "default" : "no-store"}).then(function (t) {
                                if (e.p2pContext.P2PDataCollectionStatus.addFetchResponseHeadersCount(t.headers), t.ok && null != t.headers.get("Content-Length")) {
                                    var r = At()(t.headers.get("Content-Length"));
                                    n(null != r ? r : void 0)
                                } else n(void 0)
                            }).catch(function (t) {
                                n(void 0)
                            })
                        })
                    }
                }, {
                    key: "FetchPart", value: function (t) {
                        var e = this, n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                            r = arguments.length > 2 ? arguments[2] : void 0,
                            o = arguments.length > 3 ? arguments[3] : void 0;
                        null == o && (o = !1);
                        var i = {};
                        n >= 0 && r > 0 && (i.Range = "bytes=" + n + "-" + (r - 1));
                        var a, s = !!window.AbortController,
                            c = {mode: "cors", method: "GET", headers: i, cache: o ? "default" : "no-store"};
                        return s && (a = new AbortController, c.signal = a.signal), new D.a(function (n) {
                            var r = E()(function () {
                                a && a.abort(), n({
                                    state: {
                                        ok: !1,
                                        msg: "HTTP Part fetch response timeout " + t + " ms, aborted when CDN fetching"
                                    }, data: void 0
                                })
                            }, t);
                            fetch(e.url, c).then(function (t) {
                                if (e.p2pContext.P2PDataCollectionStatus.addFetchResponseHeadersCount(t.headers), t.ok) {
                                    if (clearTimeout(r), null != t.body) return t.arrayBuffer();
                                    n({
                                        state: {
                                            ok: !1,
                                            msg: "HTTP Part fetch empty body, status code: " + t.status.toString() + " (" + t.statusText + ")"
                                        }, data: void 0
                                    })
                                } else n({
                                    state: {
                                        ok: !1,
                                        msg: "HTTP Part fetch error, status code: " + t.status.toString() + " (" + t.statusText + ")"
                                    }, data: void 0
                                })
                            }).then(function (t) {
                                var e = new Uint8Array(t);
                                n({state: {ok: !0, msg: "ok"}, data: e})
                            }).catch(function (t) {
                                n({
                                    state: {ok: !1, msg: "HTTP Part fetch error, message: " + t.toString()},
                                    data: void 0
                                })
                            })
                        })
                    }
                }, {
                    key: "FetchPartByBlock", value: function (t, e, n, r, o, i) {
                        var a = this;
                        if (r == o) return new D.a(function (t) {
                            t({ok: !0, msg: "ok"})
                        });
                        null == i && (i = !1);
                        var s = {};
                        r >= 0 && o > 0 && (s.Range = "bytes=" + r + "-" + (o - 1));
                        var c, u = !!window.AbortController,
                            l = {mode: "cors", method: "GET", headers: s, cache: i ? "default" : "no-store"}, f = !1;
                        return u && (c = new AbortController, l.signal = c.signal), new D.a(function (r) {
                            var o = E()(function () {
                                c && c.abort(), f = !0, r({
                                    ok: !1,
                                    msg: "HTTP Stream fetch response timeout " + t + " ms, aborted when CDN fetching"
                                })
                            }, t);
                            fetch(a.url, l).then(function (t) {
                                if (a.p2pContext.P2PDataCollectionStatus.addFetchResponseHeadersCount(t.headers), t.ok) {
                                    if (null != t.body) return clearTimeout(o), t.body;
                                    r({
                                        ok: !1,
                                        msg: "HTTP Stream fetch empty body, status code: " + t.status.toString() + " (" + t.statusText + ")"
                                    })
                                } else r({
                                    ok: !1,
                                    msg: "HTTP Stream fetch error, status code: " + t.status.toString() + " (" + t.statusText + ")"
                                })
                            }).then(function (t) {
                                var o = null == t ? void 0 : t.getReader(), i = new Uint8Array(0), a = 0;
                                null == o || o.read().then(function t(s) {
                                    if (!1 === f) if (void 0 !== s.value) {
                                        var c = s.value;
                                        if (i.length > 0) {
                                            var u = new Uint8Array(i.length + c.length);
                                            u.set(i, 0), u.set(c, i.length), c = u
                                        }
                                        for (var l, h = 0; ;) {
                                            if (!((l = c.subarray(h, h + n)).length >= n)) {
                                                i = l;
                                                break
                                            }
                                            e(l, a++, !1), i = new Uint8Array(0), h += n
                                        }
                                        s.done ? (e(i, a++, !0), r({
                                            ok: !0,
                                            msg: "ok"
                                        })) : null == o || o.read().then(t).catch(function (t) {
                                            r({ok: !1, msg: "HTTP Stream fetch reader error, message: " + t.toString()})
                                        })
                                    } else s.done && (e(i, a++, !0), r({ok: !0, msg: "ok"}))
                                }).catch(function (t) {
                                    r({ok: !1, msg: "HTTP Stream fetch reader error, message: " + t.toString()})
                                })
                            }).catch(function (t) {
                                r({ok: !1, msg: "HTTP Stream fetch error, message: " + t.toString()})
                            })
                        })
                    }
                }]), t
            }(), Ht = function () {
                function t(e) {
                    p()(this, t), y()(this, "p2pContext", void 0), y()(this, "fragMan", void 0), y()(this, "downloadForceStopArray", new w.a), this.p2pContext = e, this.fragMan = new tt.d(this.p2pContext)
                }

                return v()(t, [{
                    key: "addDownloadTask", value: function (t, e, n) {
                        return this.fragMan.addFragment(t, e, n)
                    }
                }, {
                    key: "startDownload", value: function (t, e, n, r) {
                        var o = this, i = this.fragMan.getFragment(n);
                        if (null != i) {
                            var a = i;
                            void 0 !== t && a.setSliceIds(t.getSliceIds());
                            var s = new Gt(this.p2pContext, e);
                            if (a.setCrcErrorCallback(function () {
                                o.checkFragmentData(a, s)
                            }), 0 != a.getFragmentSize()) if (null == t || void 0 !== t && 0 == t.getConnectedPeers().length) this.p2pContext.CDNFetchTaskWorker.post(function () {
                                return a.doOnceQueryServer(), s.FetchPartByBlock(o.p2pContext.Config.fetchCDNTimeoutMs, function (t, e, n) {
                                    e >= 0 && e < a.getBlockCount() && a.setBlockData(e, t, tt.b.SERVER, tt.a.SEED) || o.p2pContext.P2PDataCollectionStatus.addWastedDataSize(t.byteLength, Bt.e.CDN_REPEAT, {
                                        fragname: a.getFragmentName(),
                                        sliceIds: a.getSliceIds()
                                    })
                                }, a.getBlockSize(), 0, a.getFragmentSize())
                            }, !1).then(function (t) {
                                null != t && t.ok || a.setNonP2PFragmentData(void 0, tt.a.SEED, null == t ? void 0 : t.msg)
                            }); else {
                                var c = function (t) {
                                    if (t.length > 1) {
                                        var e = G()(t).call(t), n = new Array;
                                        P()(e).call(e, function (t) {
                                            var e = a.getSliceBlockRange(t);
                                            n.push(e[0]), n.push(e[1])
                                        });
                                        for (var r = -1, i = -1, c = 0; c < n.length; c += 2) -1 == r ? (r = n[c], i = n[c + 1]) : (i == n[c] || (null != i && r != i && i - 1 >= 0 && o.pullFragmentData(a, s, r, i - 1, tt.a.SEED), r = n[c]), i = n[c + 1]);
                                        null != r && null != i && r != i && i - 1 >= 0 && o.pullFragmentData(a, s, r, i - 1, tt.a.SEED)
                                    } else P()(t).call(t, function (t) {
                                        var e = a.getSliceBlockRange(t);
                                        e[0] >= 0 && e[1] > 0 && e[0] != e[1] && e[1] - 1 >= 0 && o.pullFragmentData(a, s, e[0], e[1] - 1, tt.a.SEED)
                                    })
                                }, l = new Vt(a), f = Array();
                                if (null != r) {
                                    var h = new D.a(function (t) {
                                        E()(function () {
                                            t(!1)
                                        }, r)
                                    });
                                    f.push(h)
                                }
                                var p = new D.a(function (t) {
                                    o.downloadForceStopArray.set(n, t)
                                });
                                f.push(p);
                                var d = new D.a(function (t) {
                                    a.onFinished(function (e) {
                                        t(!0)
                                    })
                                });
                                f.push(d);
                                var v = new D.a(function () {
                                    var e = u()(C.a.mark(function e(n) {
                                        return C.a.wrap(function (e) {
                                            for (; ;) switch (e.prev = e.next) {
                                                case 0:
                                                    return e.next = 2, l.startDownload(t, c);
                                                case 2:
                                                    n(!1);
                                                case 3:
                                                case"end":
                                                    return e.stop()
                                            }
                                        }, e)
                                    }));
                                    return function (t) {
                                        return e.apply(this, arguments)
                                    }
                                }());
                                f.push(v), D.a.race(f).then(function (t) {
                                    o.stopDownload(a.getFragmentName()), t || (l.stopDownload(), o.checkFragmentData(a, s))
                                })
                            } else this.p2pContext.FallbackFetchTaskWorker.post(function () {
                                return a.doOnceQueryServer(), s.FetchPart(o.p2pContext.Config.fetchCDNTimeoutMs)
                            }, !1).then(function (t) {
                                null != t && t.state.ok ? a.setNonP2PFragmentData(t.data, tt.a.LACKED) : a.setNonP2PFragmentData(void 0, tt.a.LACKED, null == t ? void 0 : t.state.msg)
                            })
                        }
                    }
                }, {
                    key: "checkFragmentData", value: function (t, e) {
                        for (var n = void 0, r = 0; r < t.getBlockCount(); ++r) t.isBlockFinished(r) && null != n ? (this.pullFragmentData(t, e, n, r - 1, tt.a.LACKED), n = void 0) : t.isBlockFinished(r) || null != n || (n = r);
                        null != n && this.pullFragmentData(t, e, n, t.getBlockCount() - 1, tt.a.LACKED)
                    }
                }, {
                    key: "pullFragmentData", value: function (t, e, n, r, o) {
                        var i = this;
                        this.p2pContext.FallbackFetchTaskWorker.post(function () {
                            return t.getBlockByteRange(n)[0] == t.getBlockByteRange(r)[1] ? new D.a(function (t) {
                                t({ok: !0, msg: "ok"})
                            }) : (t.doOnceQueryServer(), e.FetchPartByBlock(i.p2pContext.Config.fetchCDNTimeoutMs, function (e, a, s) {
                                (a += n) >= n && a <= r && t.setBlockData(a, e, tt.b.SERVER, o) || i.p2pContext.P2PDataCollectionStatus.addWastedDataSize(e.byteLength, Bt.e.CDN_REPEAT, {
                                    fragname: t.getFragmentName(),
                                    sliceIds: t.getSliceIds()
                                })
                            }, t.getBlockSize(), t.getBlockByteRange(n)[0], t.getBlockByteRange(r)[1]))
                        }, !1).then(function (e) {
                            null != e && e.ok || t.setNonP2PFragmentData(void 0, o, null == e ? void 0 : e.msg)
                        })
                    }
                }, {
                    key: "stopDownload", value: function (t) {
                        var e = this.downloadForceStopArray.get(t);
                        null != e && (this.downloadForceStopArray.delete(t), e(!1))
                    }
                }, {
                    key: "destroy", value: function () {
                        var t;
                        P()(t = this.downloadForceStopArray).call(t, function (t) {
                            t(!1)
                        }), this.downloadForceStopArray.clear()
                    }
                }]), t
            }(), Yt = n(29), Qt = n.n(Yt), Kt = n(122), Xt = n.n(Kt), $t = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 255,
                        n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    p()(this, t), y()(this, "maxLine", 255), y()(this, "logBuffer", []), y()(this, "isStart", !1), this.maxLine = e, this.isStart = n
                }

                return v()(t, [{
                    key: "formatTime", value: function (t) {
                        var e, n, r, o, i, a = function (t, e) {
                            for (var n = t.toString(); n.length < e;) n = "0" + n;
                            return n
                        };
                        return ct()(e = ct()(n = ct()(r = ct()(o = ct()(i = "".concat(a(t.getMonth() + 1, 2), "-")).call(i, a(t.getDate(), 2), " ")).call(o, a(t.getHours(), 2), ":")).call(r, a(t.getMinutes(), 2), ":")).call(n, a(t.getSeconds(), 2), ".")).call(e, a(t.getMilliseconds(), 3))
                    }
                }, {
                    key: "log", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                        if (this.isStart) for (this.logBuffer.push(this.formatTime(new Date) + " : " + t); this.logBuffer.length > this.maxLine;) this.logBuffer.shift()
                    }
                }, {
                    key: "start", value: function () {
                        this.isStart = !0
                    }
                }, {
                    key: "stop", value: function () {
                        this.isStart = !1
                    }
                }, {
                    key: "clear", value: function () {
                        var t;
                        Qt()(t = this.logBuffer).call(t, 0, this.logBuffer.length)
                    }
                }, {
                    key: "get", value: function () {
                        var t, e = "";
                        return P()(t = this.logBuffer).call(t, function (t) {
                            e += t + "\n"
                        }), e
                    }
                }, {
                    key: "download", value: function () {
                        var t = document.createElement("a");
                        t.href = Xt.a.createObjectURL(new Blob([this.get()])), t.download = "logfile.log", t.click(), Xt.a.revokeObjectURL(t.href)
                    }
                }]), t
            }(), Jt = function () {
                function t(e) {
                    p()(this, t), y()(this, "elements", void 0), y()(this, "_size", void 0), this.elements = new Array, this._size = e
                }

                return v()(t, [{
                    key: "push", value: function (t) {
                        return this.elements.length == this._size && this.pop(), this.elements.push(t), !0
                    }
                }, {
                    key: "pop", value: function () {
                        return this.elements.shift()
                    }
                }, {
                    key: "front", value: function () {
                        return this.elements.length > 0 ? this.elements[0] : void 0
                    }
                }, {
                    key: "forEach", value: function (t, e) {
                        var n;
                        P()(n = this.elements).call(n, t)
                    }
                }, {
                    key: "size", value: function () {
                        return this.elements.length
                    }
                }, {
                    key: "empty", value: function () {
                        return 0 == this.size()
                    }
                }, {
                    key: "clear", value: function () {
                        this.elements = new Array
                    }
                }]), t
            }(), Zt = function () {
                function t(e, n) {
                    var r = this;
                    p()(this, t), y()(this, "p2pContext", void 0), y()(this, "lackedDataArray", void 0), y()(this, "currentShareDataLMQueue", void 0), y()(this, "lastestShareDataArray", void 0), y()(this, "sched", void 0), y()(this, "fetchControlIntervalId", void 0), y()(this, "shareControlIntervalId", void 0), y()(this, "lastestShareSliceIds", new j.a), y()(this, "intervalMSChangeId", void 0), this.p2pContext = e, this.sched = n, this.lackedDataArray = new Array(this.p2pContext.Config.sliceCount), this.currentShareDataLMQueue = new Jt(this.p2pContext.Config.p2pFetchDataObCycleCount), this.lastestShareDataArray = new Array(this.p2pContext.Config.sliceCount);
                    for (var o = 0; o < this.p2pContext.Config.sliceCount; ++o) this.lackedDataArray[o] = new Jt(this.p2pContext.Config.p2pFetchDataObCycleCount), this.lastestShareDataArray[o] = new Jt(this.p2pContext.Config.p2pShareDataObCycleCount);
                    this.startSliceIdControl(), this.intervalMSChangeId = e.sliceIdAutoChangeIntervalSignal.connect(function () {
                        r.startSliceIdControl()
                    })
                }

                return v()(t, [{
                    key: "startSliceIdControl", value: function () {
                        var t = this;
                        this.stopSliceIdControl(), this.fetchControlIntervalId = W()(function () {
                            t.checkFetch()
                        }, this.p2pContext.Config.p2pSliceIdControlFetchCheckIntervalMs), this.shareControlIntervalId = W()(function () {
                            t.checkShare()
                        }, this.p2pContext.Config.p2pSliceIdControlShareCheckIntervalMs)
                    }
                }, {
                    key: "stopSliceIdControl", value: function () {
                        void 0 !== this.fetchControlIntervalId && (clearInterval(this.fetchControlIntervalId), this.fetchControlIntervalId = void 0), void 0 !== this.shareControlIntervalId && (clearInterval(this.shareControlIntervalId), this.shareControlIntervalId = void 0), this.currentShareDataLMQueue.clear();
                        for (var t = 0; t < this.p2pContext.Config.sliceCount; ++t) this.lackedDataArray[t].clear(), this.lastestShareDataArray[t].clear()
                    }
                }, {
                    key: "addFragmentFetchData", value: function (t) {
                        if (void 0 === this.p2pContext.PeerSched || 0 != this.p2pContext.PeerSched.getConnectedPeers().length) {
                            if (!this.isSame(this.sched.getSliceIds(), t.getSliceIds())) {
                                void 0 !== this.fetchControlIntervalId && this.checkFetch();
                                for (var e = 0; e < this.p2pContext.Config.sliceCount; ++e) this.lackedDataArray[e].clear(), this.currentShareDataLMQueue.clear()
                            }
                            for (e = 0; e < this.p2pContext.Config.sliceCount; ++e) this.lackedDataArray[e].push(t.getRoleRatioForSlice(Bt.a.LACKED, e));
                            this.currentShareDataLMQueue.push(t.getSharedRatio())
                        } else this.p2pContext.PeerSched.getSliceIds().clear()
                    }
                }, {
                    key: "isSame", value: function (t, e) {
                        if (t.size == e.size) {
                            var n = !0;
                            return P()(t).call(t, function (t) {
                                e.has(t) || (n = !1)
                            }), n
                        }
                        return !1
                    }
                }, {
                    key: "addFragmentShareData", value: function (t) {
                        if (void 0 === this.p2pContext.PeerSched || 0 != this.p2pContext.PeerSched.getConnectedPeers().length) {
                            var e = !0;
                            if (void 0 !== this.lastestShareSliceIds && (e = this.isSame(this.lastestShareSliceIds, t.getSliceIds())), !e) {
                                void 0 !== this.shareControlIntervalId && this.checkShare();
                                for (var n = 0; n < this.p2pContext.Config.sliceCount; ++n) this.lastestShareDataArray[n].clear()
                            }
                            for (n = 0; n < this.p2pContext.Config.sliceCount; ++n) this.lastestShareDataArray[n].push(t.getSliceSharedRatio(n));
                            this.lastestShareSliceIds = t.getSliceIds()
                        } else this.p2pContext.PeerSched.getSliceIds().clear()
                    }
                }, {
                    key: "checkFetch", value: function () {
                        if (void 0 === this.p2pContext.PeerSched || 0 != this.p2pContext.PeerSched.getConnectedPeers().length) {
                            if (!(this.lackedDataArray[0].size() < this.p2pContext.Config.p2pFetchDataObCycleCount)) for (var t = 0; t < this.p2pContext.Config.sliceCount; ++t) {
                                var e, n, r = 0;
                                P()(e = this.lackedDataArray[t]).call(e, function (t) {
                                    r += t
                                }), r /= this.lackedDataArray[t].size();
                                var o = 0;
                                P()(n = this.currentShareDataLMQueue).call(n, function (t) {
                                    o += t
                                }), o /= this.currentShareDataLMQueue.size(), !this.sched.getSliceIds().has(t) && o < this.p2pContext.Config.p2pShareLargestAllowedFetchRatio * this.p2pContext.Config.fragmentShareOverride && r >= this.p2pContext.Config.p2pFetchLowestRatio && (this.p2pContext.printExtLog(4, "fetch: want to add " + t), this.p2pContext.Config.allowPrintLog(4) && console.log("fetch: want to add " + t), Math.random() < this.p2pContext.Config.p2pAddSliceProbability && this.sched.addSliceId(t))
                            }
                        } else this.p2pContext.PeerSched.getSliceIds().clear()
                    }
                }, {
                    key: "checkShare", value: function () {
                        if (void 0 === this.p2pContext.PeerSched || 0 != this.p2pContext.PeerSched.getConnectedPeers().length) {
                            if (!(this.lastestShareDataArray[0].size() < this.p2pContext.Config.p2pShareDataObCycleCount)) for (var t = 0; t < this.p2pContext.Config.sliceCount; ++t) {
                                var e, n = 0;
                                P()(e = this.lastestShareDataArray[t]).call(e, function (t) {
                                    n += t
                                }), n /= this.lastestShareDataArray[t].size(), this.lastestShareSliceIds.has(t) && n <= this.p2pContext.Config.p2pShareLowestRatio && (this.p2pContext.printExtLog(4, "share: want to delete " + t), this.p2pContext.Config.allowPrintLog(4) && console.log("share: want to delete " + t), Math.random() < this.p2pContext.Config.p2pDeleteSliceProbability && this.sched.deleteSliceId(t))
                            }
                        } else this.p2pContext.PeerSched.getSliceIds().clear()
                    }
                }, {
                    key: "destroy", value: function () {
                        this.stopSliceIdControl(), void 0 !== this.intervalMSChangeId && this.p2pContext.sliceIdAutoChangeIntervalSignal.disconnect(this.intervalMSChangeId)
                    }
                }]), t
            }(), te = function () {
                function t() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    p()(this, t), y()(this, "latestWorkerId", -1), y()(this, "minAllowRunningWorkerId", 0), y()(this, "tasks", []), y()(this, "mutex", new xt.c), y()(this, "cv", new xt.a), e < 0 && (e = 0), this.addWorker(e)
                }

                var e, n, r;
                return v()(t, [{
                    key: "post", value: (r = u()(C.a.mark(function t(e) {
                        var n, r = this, o = arguments;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return n = o.length > 1 && void 0 !== o[1] && o[1], t.next = 3, this.mutex.lock();
                                case 3:
                                    return t.abrupt("return", new D.a(function (t) {
                                        var o, i = {
                                            task: (o = u()(C.a.mark(function t() {
                                                return C.a.wrap(function (t) {
                                                    for (; ;) switch (t.prev = t.next) {
                                                        case 0:
                                                            return t.next = 2, e();
                                                        case 2:
                                                            return t.abrupt("return", t.sent);
                                                        case 3:
                                                        case"end":
                                                            return t.stop()
                                                    }
                                                }, t)
                                            })), function () {
                                                return o.apply(this, arguments)
                                            }), r: function (e) {
                                                return t(e)
                                            }
                                        };
                                        n ? r.tasks.unshift(i) : r.tasks.push(i), r.cv.notifyOne(), r.mutex.unlock()
                                    }));
                                case 4:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return r.apply(this, arguments)
                    })
                }, {
                    key: "getTask", value: (n = u()(C.a.mark(function t(e) {
                        var n, r, o = this;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return n = !1, t.next = 3, this.mutex.lock();
                                case 3:
                                    return t.next = 5, this.cv.waitUntil(this.mutex, function () {
                                        return e < o.minAllowRunningWorkerId ? (n = !0, !0) : o.tasks.length > 0
                                    });
                                case 5:
                                    return !1 === n && (r = this.tasks.shift()), this.mutex.unlock(), t.abrupt("return", r);
                                case 8:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return n.apply(this, arguments)
                    })
                }, {
                    key: "workerCoroutine", value: (e = u()(C.a.mark(function t(e) {
                        var n;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, this.getTask(e);
                                case 2:
                                    if (null == (n = t.sent)) {
                                        t.next = 11;
                                        break
                                    }
                                    return t.t0 = n, t.next = 7, n.task();
                                case 7:
                                    t.t1 = t.sent, t.t0.r.call(t.t0, t.t1), t.next = 12;
                                    break;
                                case 11:
                                    return t.abrupt("break", 14);
                                case 12:
                                    t.next = 0;
                                    break;
                                case 14:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "getWorkerNum", value: function () {
                        return this.latestWorkerId - this.minAllowRunningWorkerId + 1
                    }
                }, {
                    key: "addWorker", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        t < 0 && (t = 0);
                        for (var e = 0; e < t; e++) this.latestWorkerId++, this.workerCoroutine(this.latestWorkerId);
                        return this.getWorkerNum()
                    }
                }, {
                    key: "removeWorker", value: function () {
                        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 1;
                        t < 0 && (t = 0);
                        for (var e = this.getWorkerNum(), n = 0; n < t && e > 0; n++) this.minAllowRunningWorkerId++, this.cv.notifyAll(), e = this.getWorkerNum();
                        return e
                    }
                }, {
                    key: "removeAllTask", value: function () {
                        for (; this.tasks.length > 0;) {
                            var t = this.tasks.pop();
                            null != t && t.r(void 0)
                        }
                    }
                }, {
                    key: "removeAllWorker", value: function () {
                        this.minAllowRunningWorkerId = this.latestWorkerId + 1, this.cv.notifyAll()
                    }
                }, {
                    key: "setWorkerNum", value: function () {
                        var t = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0) - this.getWorkerNum();
                        t > 0 && this.addWorker(t), t < 0 && this.removeWorker(0 - t)
                    }
                }]), t
            }(), ee = n(121), ne = function () {
                function t() {
                    p()(this, t), y()(this, "remainingShareQuotaQueue", new Jt(10))
                }

                return v()(t, [{
                    key: "addFragmentDataCollection", value: function (t) {
                        this.remainingShareQuotaQueue.push(new ee.a(t.getRemainingShareQuotaBytes()))
                    }
                }, {
                    key: "takeShareQuota", value: function (t) {
                        for (var e = 0; !(this.remainingShareQuotaQueue.empty() || e >= t);) {
                            var n = t - e;
                            if (n > 0) {
                                var r = n, o = this.remainingShareQuotaQueue.front();
                                r > o.data && (r = o.data), e += r, o.data -= r, o.data <= 0 && this.remainingShareQuotaQueue.pop()
                            }
                        }
                        return e
                    }
                }]), t
            }();
            !function (t) {
                t[t.DONE = 0] = "DONE", t[t.ERROR = 1] = "ERROR", t[t.NOTFOUND = 2] = "NOTFOUND"
            }(jt || (jt = {}));
            var re, oe = function () {
                function t(e, n, r) {
                    var o = this;
                    p()(this, t), y()(this, "Config", void 0), y()(this, "CDNFetchTaskWorker", new te), y()(this, "FallbackFetchTaskWorker", new te), y()(this, "P2PDataCollectionStatus", new Bt.c), y()(this, "LogFile", new $t(Number.MAX_VALUE)), y()(this, "P2P", void 0), y()(this, "CurPeerId", ""), y()(this, "DataFetch", void 0), y()(this, "FragMan", void 0), y()(this, "PeerSched", void 0), y()(this, "GhostPeerIds", new j.a), y()(this, "printExtLog", void 0), y()(this, "eventReportCallback", void 0), y()(this, "sliceIdAutoChangeIntervalSignal", new xt.d), y()(this, "totalSistersCount", 1), y()(this, "trackerPositionInServers", 0), y()(this, "tabsCheckInterval", 3e3), y()(this, "tabsCheckTimer", null), this.Config = e, this.printExtLog = n, this.eventReportCallback = r, this.compatibleRTC(), this.P2P = new ie(this), this.DataFetch = new Ht(this), this.FragMan = this.DataFetch.fragMan, this.tabsCheckTimer = W()(function () {
                        return o.checkMultipleTabs()
                    }, this.tabsCheckInterval + 100 * Math.random())
                }

                return v()(t, [{
                    key: "onConfigurationUpdate", value: function (t, e) {
                        var n = function (t, e) {
                            var n, r;
                            return b()(G()(n = I()(t).call(t)).call(n)) !== b()(G()(r = I()(e).call(e)).call(r))
                        };
                        Y()(t).call(t, "cdnFetchInstances") && this.CDNFetchTaskWorker.getWorkerNum() > 0 && (this.printExtLog(1, "[Notify] cdnFetchInstances: " + this.CDNFetchTaskWorker.getWorkerNum() + " -> " + this.Config.cdnFetchInstances), this.Config.allowPrintLog(1) && console.log("[Notify] cdnFetchInstances: " + this.CDNFetchTaskWorker.getWorkerNum() + " -> " + this.Config.cdnFetchInstances), this.CDNFetchTaskWorker.setWorkerNum(this.Config.cdnFetchInstances)), Y()(t).call(t, "fallbackCDNFetchInstances") && this.FallbackFetchTaskWorker.getWorkerNum() > 0 && (this.printExtLog(1, "[Notify] fallbackCDNFetchInstances: " + this.FallbackFetchTaskWorker.getWorkerNum() + " -> " + this.Config.fallbackCDNFetchInstances), this.Config.allowPrintLog(1) && console.log("[Notify] fallbackCDNFetchInstances: " + this.FallbackFetchTaskWorker.getWorkerNum() + " -> " + this.Config.fallbackCDNFetchInstances), this.FallbackFetchTaskWorker.setWorkerNum(this.Config.fallbackCDNFetchInstances)), null != this.PeerSched && this.PeerSched.onConnectionStatusChanged(), (Y()(t).call(t, "natCheckStunServers") || Y()(t).call(t, "natFilteringCheckServers")) && (n(this.Config.natCheckStunServers, e.natCheckStunServers) || n(this.Config.natFilteringCheckServers, e.natFilteringCheckServers)) && this.P2P.resetNatType()
                    }
                }, {
                    key: "setConfiguration", value: function (t) {
                        var e = this, n = function (t, n, r) {
                            if (1 == r) {
                                var o = "Config: " + t + " = " + b()(n);
                                e.printExtLog(1, o), e.Config.allowPrintLog(2) && console.log(o), e.sliceIdAutoChangeIntervalSignal.call()
                            } else {
                                var i = "[Warning] Config: " + t + " = " + b()(n) + " not allowed.";
                                e.printExtLog(1, i), e.Config.allowPrintLog(2) && console.log(i)
                            }
                        }, r = JSON.parse(b()(this.Config));
                        try {
                            for (var o = JSON.parse(t), i = function () {
                                var t, r = s()(c[a], 2), o = r[0], i = r[1];
                                if (_()(o) == _()("")) switch (o) {
                                    case"trackerServers":
                                        var u = [];
                                        i instanceof Array ? (P()(i).call(i, function (t) {
                                            _()(t) == _()("") && (K()(t).call(t, "wss://") || K()(t).call(t, "ws://")) && 0 == (K()(t).call(t, "wss:///") || K()(t).call(t, "ws:///")) ? u.push(t) : (e.printExtLog(1, "Value: " + i + " not tracker server address."), e.Config.allowPrintLog(1) && console.log("Value: " + i + " not tracker server address."))
                                        }), u.length > 0 && (e.Config[o] = u, e.trackerPositionInServers = 0, n(o, i, !0))) : n(o, i, !1);
                                        break;
                                    case"stunServers":
                                    case"natCheckStunServers":
                                        var l = [];
                                        i instanceof Array ? (P()(i).call(i, function (t) {
                                            _()(t) == _()("") && new RegExp("^(stun|turn):.+?:[0-9]{1,5}$").exec(t) ? l.push(t) : (e.printExtLog(1, "Value: " + i + " not stun/turn server address."), e.Config.allowPrintLog(1) && console.log("Value: " + i + " not stun/turn server address."))
                                        }), (l.length > 0 || "natCheckStunServers" == o) && (e.Config[o] = l, n(o, i, !0))) : n(o, i, !1);
                                        break;
                                    case"natFilteringCheckServers":
                                        i instanceof Array ? (e.Config[o] = i, n(o, i, !0)) : n(o, i, !1);
                                        break;
                                    default:
                                        if (e.Config.hasOwnProperty(o + "AllowedRange") && e.Config.hasOwnProperty(o)) {
                                            var f = e.Config[o + "AllowedRange"][0],
                                                h = e.Config[o + "AllowedRange"][1];
                                            e.printExtLog(2, "Key: " + o + " found range."), e.Config.allowPrintLog(2) && console.log("Key: " + o + " found range."), _()(i) == _()(0) && i >= f && i <= h ? (e.Config[o] = i, n(o, i, !0)) : n(o, i, !1)
                                        } else e.Config.hasOwnProperty(o) && _()(i) == _()(!0) && F()(t = e.Config.allowedChangeBooleanValues).call(t, o) > -1 ? (e.Config[o] = i, n(o, i, !0)) : n(o, i, !1)
                                }
                            }, a = 0, c = M()(o); a < c.length; a++) i();
                            this.onConfigurationUpdate($()(o), r), this.eventReportCallback(new kt(o))
                        } catch (t) {
                            this.printExtLog(1, "Parse / Set Configuration Fail: " + t), this.Config.allowPrintLog(1) && console.warn("Parse / Set Configuration Fail: " + t)
                        }
                    }
                }, {
                    key: "destroy", value: function () {
                        this.GhostPeerIds.clear(), this.P2P.destroy(), this.DataFetch.destroy(), this.FragMan.destroy(), this.CDNFetchTaskWorker.removeAllWorker(), this.CDNFetchTaskWorker.removeAllTask(), this.FallbackFetchTaskWorker.removeAllWorker(), this.FallbackFetchTaskWorker.removeAllTask(), null !== this.tabsCheckTimer && clearInterval(this.tabsCheckTimer)
                    }
                }, {
                    key: "compatibleRTC", value: function () {
                        var t = window.RTCDataChannel || window.DataChannel;
                        t && (window.RTCDataChannel || (window.RTCDataChannel = t), window.DataChannel || (window.DataChannel = t));
                        var e = window.RTCPeerConnection || window.mozRTCPeerConnection || window.webkitRTCPeerConnection;
                        e && (window.RTCPeerConnection || (window.RTCPeerConnection = e), window.mozRTCPeerConnection || (window.mozRTCPeerConnection = e), window.webkitRTCPeerConnection || (window.webkitRTCPeerConnection = e))
                    }
                }, {
                    key: "checkMultipleTabs", value: function () {
                        var t = window.localStorage;
                        if (void 0 !== t) {
                            var e = void 0, n = t.getItem("sistersInstances");
                            if (null !== n) try {
                                e = JSON.parse(n)
                            } catch (t) {
                            }
                            void 0 === e && (e = new Object);
                            var r = Z()();
                            e[this.CurPeerId] = r;
                            var o = [], i = 0;
                            for (var a in e) if (Object.prototype.hasOwnProperty.call(e, a)) {
                                var s = e[a];
                                Math.abs(s - r) > 2.5 * this.tabsCheckInterval ? o.push(a) : ++i
                            }
                            for (var c = 0; c < o.length; ++c) delete e[o[c]];
                            t.setItem("sistersInstances", b()(e)), this.totalSistersCount = i
                        }
                    }
                }]), t
            }(), ie = function () {
                function t(e) {
                    var n = this;
                    p()(this, t), y()(this, "p2pContext", void 0), y()(this, "cancelToken", {hasCancel: !1}), y()(this, "sliceIdController", void 0), y()(this, "P2PDataShareQuotaController", new ne), y()(this, "nat", void 0), this.p2pContext = e, this.nat = new Rt(this.p2pContext, !1, function (t) {
                        var e, r;
                        null === (e = n.p2pContext.PeerSched) || void 0 === e || null === (r = e.getTracker()) || void 0 === r || r.sendNatType()
                    }), this.resetNatType()
                }

                var e;
                return v()(t, [{
                    key: "resetNatType", value: function () {
                        this.nat.checkNatTypeAndUpdate()
                    }
                }, {
                    key: "initPeers", value: (e = u()(C.a.mark(function t(e) {
                        var n;
                        return C.a.wrap(function (t) {
                            for (; ;) switch (t.prev = t.next) {
                                case 0:
                                    return t.next = 2, Dt.create(this.p2pContext, this.cancelToken, e);
                                case 2:
                                    n = t.sent, this.p2pContext.printExtLog(0, "Last Order is Connected."), this.p2pContext.Config.allowPrintLog(0) && console.info("[SistersPlayer] Last Order is Connected."), 1 == this.cancelToken.hasCancel ? n.destroy() : (this.p2pContext.PeerSched = n, this.sliceIdController = new Zt(this.p2pContext, this.p2pContext.PeerSched), this.p2pContext.FragMan.setSliceIdController(this.sliceIdController), this.p2pContext.PeerSched.beginConnectPeers());
                                case 6:
                                case"end":
                                    return t.stop()
                            }
                        }, t, this)
                    })), function (t) {
                        return e.apply(this, arguments)
                    })
                }, {
                    key: "createDownloadFragment", value: function (t, e, n) {
                        var r = this;
                        void 0 !== this.p2pContext.FragMan.getFragment(t) && this.p2pContext.FragMan.deleteFragment(t);
                        var o = this.p2pContext.DataFetch.addDownloadTask(t, null != e && e >= 0 ? e : 0, n);
                        return null == o || o.onFinished(function (t) {
                            var e;
                            void 0 !== t && t.getFragStat() == tt.c.END_SUCCESS ? (null != r.p2pContext.P2PDataCollectionStatus && null != t && r.p2pContext.P2PDataCollectionStatus.addLastestFragmentDataCollection(t), null === (e = r.sliceIdController) || void 0 === e || e.addFragmentFetchData(t)) : r.p2pContext.P2PDataCollectionStatus.addFetchError(Bt.b.ERROR_TO_RELOAD)
                        }), o
                    }
                }, {
                    key: "startDownloadFragment", value: function (t, e, n, r, o) {
                        var i = this.createDownloadFragment(t, n, r);
                        return null != i && this.p2pContext.DataFetch.startDownload(this.p2pContext.PeerSched, e, t, o), i
                    }
                }, {
                    key: "startDownloadExtraFile", value: function (t, e, n, r, o) {
                        var i = this.createDownloadFragment(t, n, r);
                        return null != i && (i.enableUseSeedbox(!1), this.p2pContext.DataFetch.startDownload(this.p2pContext.PeerSched, e, t, o)), i
                    }
                }, {
                    key: "shareFragment", value: function (t, e) {
                        var n = this.createDownloadFragment(t, e.length, void 0);
                        return null == n || n.setNonP2PFragmentData(e, Bt.a.SEED, void 0), n
                    }
                }, {
                    key: "stopDownloadFragment", value: function (t) {
                        this.p2pContext.DataFetch.stopDownload(t), this.p2pContext.FragMan.deleteFragmentUntil(t)
                    }
                }, {
                    key: "onFragmentFinished", value: function (t, e) {
                        var n = this;
                        D.a.resolve().then(function () {
                            var r = n.p2pContext.FragMan.getFragment(t);
                            null != r ? r.onFinished(function (t) {
                                void 0 !== t && t.getFragStat() == tt.c.END_SUCCESS ? e(jt.DONE, t.getFragmentData()) : e(jt.ERROR, void 0, null == r ? void 0 : r.getFragEndErrorMsg())
                            }) : e(jt.NOTFOUND)
                        })
                    }
                }, {
                    key: "destroy", value: function () {
                        var t, e, n, r = this;
                        null === (t = this.sliceIdController) || void 0 === t || t.destroy(), null === (e = this.p2pContext.PeerSched) || void 0 === e || e.destroy(), this.cancelToken.hasCancel = !0, null === (n = this.p2pContext.PeerSched) || void 0 === n || n.getConnectMutex().lock().then(function () {
                            var t, e;
                            null === (t = r.p2pContext.PeerSched) || void 0 === t || t.getConnectCV().notifyAll(), null === (e = r.p2pContext.PeerSched) || void 0 === e || e.getConnectMutex().unlock()
                        })
                    }
                }]), t
            }(), ae = n(99);
            !function (t) {
                t[t.ErrorNetworkTimeout = 11e3] = "ErrorNetworkTimeout", t[t.ErrorNetworkFetch = 11001] = "ErrorNetworkFetch", t[t.ErrorNetworkRead = 11002] = "ErrorNetworkRead", t[t.ErrorMseOpen = 11003] = "ErrorMseOpen", t[t.ErrorMseAppend = 11004] = "ErrorMseAppend", t[t.ErrorPlayList = 11010] = "ErrorPlayList"
            }(re || (re = {}));
            var se = function () {
                function t(e, n) {
                    var r = this;
                    p()(this, t), y()(this, "extLogCallback", function () {
                    }), y()(this, "p2pContext", void 0), y()(this, "trackerSourceParam", void 0), y()(this, "preloadPlaylistItems", new w.a), y()(this, "p2pEnable", !1), y()(this, "realtimeData", {
                        lastFetchItem: "--",
                        lastPlaylistItem: "--"
                    }), y()(this, "canStartP2PTask", !1), y()(this, "onRealtimeDataUpdate", function () {
                    }), y()(this, "onEventReport", function (t) {
                    }), null != e && (this.extLogCallback = e);
                    var o, i, a, s = new St.Configuration;
                    if (this.trackerSourceParam = t.getTrackerParamsString(n.trackerParams), this.p2pContext = new oe(s, function (t, e) {
                        return r.printExtLog(t, e)
                    }, function (t) {
                        return r.eventReportCallback(t)
                    }), null != n.sdkParams) {
                        var c = b()(n.sdkParams);
                        c.length > 2 && (this.printExtLog(1, "-> Init Configuration Start <-"), this.p2pContext.Config.allowPrintLog(2) && console.log("[SistersPlayer] -> Init Configuration Start <-"), this.p2pContext.setConfiguration(c), this.printExtLog(1, "-> Init Configuration Done. <-"), this.p2pContext.Config.allowPrintLog(2) && console.log("[SistersPlayer] -> Init Configuration Done. <-"))
                    }
                    this.p2pContext.P2P.initPeers(this.trackerSourceParam), this.p2pContext.CDNFetchTaskWorker.setWorkerNum(this.p2pContext.Config.cdnFetchInstances), this.p2pContext.FallbackFetchTaskWorker.setWorkerNum(this.p2pContext.Config.fallbackCDNFetchInstances), this.p2pEnable = !0, this.preloadPlaylistItems.clear(), null != (null === (o = Object({
                        env: "production",
                        buildtime: "2022-12-23 03:40:09",
                        version: "1.4.36-69d81050-master",
                        packageVersion: "1.4.36-69d81050",
                        git: Object({
                            version: "sistersplayer-next-207-g69d8105",
                            commithash: "69d81050f8cc4838004a7e09a320b81bed610114",
                            branch: "master"
                        })
                    })) || void 0 === o ? void 0 : o.env) && (this.printExtLog(0, "Environment: production"), this.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Environment: production")), null != (null === (i = Object({
                        env: "production",
                        buildtime: "2022-12-23 03:40:09",
                        version: "1.4.36-69d81050-master",
                        packageVersion: "1.4.36-69d81050",
                        git: Object({
                            version: "sistersplayer-next-207-g69d8105",
                            commithash: "69d81050f8cc4838004a7e09a320b81bed610114",
                            branch: "master"
                        })
                    })) || void 0 === i ? void 0 : i.buildtime) && (this.printExtLog(0, "Build Time: 2022-12-23 03:40:09"), this.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Build Time: 2022-12-23 03:40:09")), null != (null === (a = Object({
                        env: "production",
                        buildtime: "2022-12-23 03:40:09",
                        version: "1.4.36-69d81050-master",
                        packageVersion: "1.4.36-69d81050",
                        git: Object({
                            version: "sistersplayer-next-207-g69d8105",
                            commithash: "69d81050f8cc4838004a7e09a320b81bed610114",
                            branch: "master"
                        })
                    })) || void 0 === a ? void 0 : a.version) && (this.printExtLog(0, "Version: 1.4.36-69d81050-master"), this.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Version: 1.4.36-69d81050-master")), this.printExtLog(0, "Misaka has been created. >w<"), this.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Misaka has been created. >w<")
                }

                return v()(t, [{
                    key: "eventReportCallback", value: function (t) {
                        var e, n = !0;
                        if (t.type == o.DataReport) switch (null === (e = t.body) || void 0 === e ? void 0 : e.code) {
                            case i.TrackerClosedReport:
                                Math.random() < this.p2pContext.Config.trackerStatusReportProbability && (n = !1);
                                break;
                            default:
                                n = !1
                        } else n = !1;
                        if (0 == n) try {
                            this.onEventReport(t)
                        } catch (t) {
                            console.info("[SistersPlayer] Event Report Error: ", t)
                        }
                    }
                }, {
                    key: "printExtLog", value: function (t, e) {
                        var n;
                        e = "[SistersPlayer] " + e, null !== (n = this.p2pContext) && void 0 !== n && n.Config.allowPrintExtLog(t) && this.extLogCallback(t, e)
                    }
                }, {
                    key: "destroy", value: function () {
                        1 == this.p2pEnable && (this.p2pEnable = !1, this.p2pContext.destroy(), this.printExtLog(0, "Misaka has been destroyed. OxO"), this.p2pContext.Config.allowPrintLog(0) && console.log("[SistersPlayer] Misaka has been destroyed. OxO"))
                    }
                }, {
                    key: "getDestroyState", value: function () {
                        return 0 == this.p2pEnable
                    }
                }, {
                    key: "getP2PDataCollectionStatus", value: function () {
                        return 1 == this.p2pEnable ? this.p2pContext.P2PDataCollectionStatus : void 0
                    }
                }, {
                    key: "getP2PInfo", value: function () {
                        return {p2pEnable: this.p2pEnable, protocolVersion: St.Configuration.ProtocolVersion}
                    }
                }, {
                    key: "getCurPeerIdInfo", value: function () {
                        if (null != this.p2pContext.PeerSched) {
                            var t = this.p2pContext.CurPeerId, e = b()(f()(this.p2pContext.PeerSched.getSliceIds()));
                            return null != this.p2pContext.PeerSched.getTracker() ? "当前 PeerId: " + t + " , SliceIds: " + e : "当前 PeerId (已主动断开): " + t + " , SliceIds: " + e
                        }
                        return "正在连接..."
                    }
                }, {
                    key: "getPeerIdList", value: function () {
                        var t, e, n = Array();
                        return null != this.p2pContext.PeerSched && (P()(t = this.p2pContext.PeerSched.getConnectedPeers()).call(t, function (t) {
                            n.push({
                                incoming: t.isIncoming(),
                                connected: !0,
                                peerId: t.extData.peerId,
                                peerRole: t.peerRole
                            })
                        }), P()(e = this.p2pContext.PeerSched.getConnectingPeers()).call(e, function (t) {
                            n.push({
                                incoming: t.isIncoming(),
                                connected: !1,
                                peerId: t.extData.peerId,
                                peerRole: t.peerRole
                            })
                        })), n
                    }
                }, {
                    key: "mergeChunkToDownloadFragment", value: function (t, e) {
                        var n = ae.UrlHelper.getFileName(t);
                        if (null != n) {
                            var r = this.preloadPlaylistItems.get(n);
                            if (null != r && r.fileSize > 0) {
                                var o = this.p2pContext.FragMan.getFragment(n);
                                if (null != o) {
                                    var i = r.fileSize, a = new Uint8Array(i), s = 0;
                                    P()(e).call(e, function (t) {
                                        a.set(t, s), s += t.length
                                    }), o.setNonP2PFragmentData(a, tt.a.LACKED)
                                }
                            }
                        }
                    }
                }, {
                    key: "cdnFetchAsBuffer", value: function (t, e, n, r) {
                        var o = this, i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4],
                            a = arguments.length > 5 && void 0 !== arguments[5] && arguments[5];
                        if (window.fetch) {
                            var s, c = !!window.AbortController, u = {method: "GET", cache: i ? "default" : "no-store"},
                                l = !1;
                            c && (s = new AbortController, u.signal = s.signal);
                            var f = E()(function () {
                                s && s.abort(), l = !0, t(n, re.ErrorNetworkTimeout, "Failback HTTP fetch response timeout " + St.Configuration.failbackFetchCDNTimeoutMs + " ms, aborted.")
                            }, St.Configuration.failbackFetchCDNTimeoutMs);
                            fetch(n, u).then(function (i) {
                                if (o.p2pContext.P2PDataCollectionStatus.addFetchResponseHeadersCount(i.headers), i.ok) if (clearTimeout(f), i.body) {
                                    if (!1 === l) if (window.ReadableStream) {
                                        var s = new Array, c = i.body.getReader(), u = function () {
                                        }, h = function (t) {
                                            var r;
                                            null != t.value ? (s.push(I()(r = t.value).call(r)), e(n, t.value.buffer, t.done), t.done && o.mergeChunkToDownloadFragment(n, s)) : (e(n, new ArrayBuffer(0), t.done), t.done && o.mergeChunkToDownloadFragment(n, s)), t.done || u()
                                        };
                                        (u = function () {
                                            c.read().then(h).catch(function (e) {
                                                t(n, re.ErrorNetworkRead, e.toString())
                                            })
                                        })()
                                    } else i.arrayBuffer().then(function (t) {
                                        1 == a && 1 == o.p2pEnable && null != o.p2pContext.P2PDataCollectionStatus && o.p2pContext.P2PDataCollectionStatus.addDownloadSizeDataCollection(t.byteLength, tt.b.SERVER, r), e(n, t, !0)
                                    }).catch(function (e) {
                                        t(n, re.ErrorNetworkRead, e.toString())
                                    })
                                } else t(n, re.ErrorNetworkRead, "response.body is empty."); else t(n, re.ErrorNetworkRead, "response.ok is false.")
                            }).catch(function (e) {
                                t(n, re.ErrorNetworkFetch, e.toString())
                            })
                        } else {
                            var h = new XMLHttpRequest;
                            h.onreadystatechange = function (t) {
                                2 === h.readyState && h.status >= 200 && h.status
                            }, h.onload = function (t) {
                                h.status >= 200 && h.status <= 299 && (null != h.response && 1 == a && 1 == o.p2pEnable && null != o.p2pContext.P2PDataCollectionStatus && o.p2pContext.P2PDataCollectionStatus.addDownloadSizeDataCollection(h.response.byteLength, tt.b.SERVER, r), e(n, h.response, !0))
                            }, h.onerror = function (e) {
                                t(n, h.readyState > 2 ? re.ErrorNetworkRead : re.ErrorNetworkFetch, e.toString())
                            }, h.open("GET", n), h.responseType = "arraybuffer", h.send()
                        }
                    }
                }, {
                    key: "p2pFetchAsBuffer", value: function (t, e, n, r) {
                        var o = this, i = arguments.length > 4 && void 0 !== arguments[4] && arguments[4];
                        if (1 == this.p2pEnable) {
                            !1 === this.canStartP2PTask && n() > 500 && this.preloadPlaylistItems.size > this.p2pContext.Config.nonP2PFragmentCount && (this.canStartP2PTask = !0);
                            var a = this.p2pContext, s = ae.UrlHelper.getFileName(r);
                            if (null != s && !1 === this.preloadPlaylistItems.has(s)) {
                                var c = s;
                                this.realtimeData.lastFetchItem = c, this.onRealtimeDataUpdate();
                                var u = Math.floor(n()) - this.p2pContext.Config.p2pSafeBufferDurationForDelayStopMs;
                                u > 0 ? (u = Math.min(u, this.p2pContext.Config.p2pDelayStopMaxMs), E()(function () {
                                    a.P2P.stopDownloadFragment(c)
                                }, u)) : a.P2P.stopDownloadFragment(c);
                                a.P2P.onFragmentFinished(c, function (n, a, s) {
                                    switch (n) {
                                        case jt.DONE:
                                            null != a ? e(r, a.buffer, !0) : (1 == o.p2pEnable && (o.printExtLog(0, "Fetch Error: p2p download data lost. URL: " + r), o.p2pContext.Config.allowPrintLog(0) && console.warn("[SistersPlayer] Fetch Error: p2p download data lost. URL: " + r)), o.cdnFetchAsBuffer(t, e, r, tt.a.LACKED, i, !1));
                                            break;
                                        case jt.ERROR:
                                            1 == o.p2pEnable && (null != s ? (o.printExtLog(0, "Fetch Error: " + s + ". on " + r), o.p2pContext.Config.allowPrintLog(0) && console.warn("[SistersPlayer] Fetch Error: " + s + ". URL: " + r)) : (o.printExtLog(0, "Fetch Error: p2p download error, no message. URL: " + r), o.p2pContext.Config.allowPrintLog(0) && console.warn("[SistersPlayer] Fetch Error: p2p download error, no message. URL: " + r))), o.cdnFetchAsBuffer(t, e, r, tt.a.LACKED, i, !1);
                                            break;
                                        case jt.NOTFOUND:
                                            o.cdnFetchAsBuffer(t, e, r, tt.a.LACKED, i, !0)
                                    }
                                })
                            } else this.cdnFetchAsBuffer(t, e, r, tt.a.SEED, i, !1)
                        } else this.cdnFetchAsBuffer(t, e, r, tt.a.SEED, i, !1)
                    }
                }, {
                    key: "downloadExtraFile", value: function (t, e, n, r, o) {
                        var i, a = this.p2pContext;
                        return new D.a((i = u()(C.a.mark(function i(s, c) {
                            return C.a.wrap(function (i) {
                                for (; ;) switch (i.prev = i.next) {
                                    case 0:
                                        if (null == a.P2P.startDownloadExtraFile(t, e, n, r)) {
                                            i.next = 8;
                                            break
                                        }
                                        return a.P2P.onFragmentFinished(t, function (e, n, r) {
                                            var o = !1;
                                            if (e == jt.DONE && null != n) {
                                                var i = a.FragMan.getFragment(t);
                                                if (null != i) {
                                                    var u = i.getRoleArray();
                                                    s({
                                                        data: n,
                                                        p2pBytes: u[tt.a.EXCHANGE],
                                                        seedBytes: u[tt.a.SEED],
                                                        lackBytes: u[tt.a.LACKED]
                                                    }), o = !0
                                                }
                                            }
                                            o || c(new Error("download " + t + " failed."))
                                        }), i.next = 5, new D.a(function (t) {
                                            return E()(t, o)
                                        });
                                    case 5:
                                        a.P2P.stopDownloadFragment(t), i.next = 9;
                                        break;
                                    case 8:
                                        c(new Error("fail to start download " + t));
                                    case 9:
                                    case"end":
                                        return i.stop()
                                }
                            }, i)
                        })), function (t, e) {
                            return i.apply(this, arguments)
                        }))
                    }
                }, {
                    key: "shareExtraFile", value: function (t, e) {
                        this.p2pContext.P2P.shareFragment(t, e)
                    }
                }, {
                    key: "parsePlaylistItem", value: function (t) {
                        var e = ae.UrlHelper.getFileName(t.uri), n = [], r = 0, o = void 0;
                        if (null != t.title) {
                            var i, a = void 0;
                            F()(i = t.title).call(i, "|") >= 0 ? (n = t.title.split("|"), a = 16) : (n = t.title.split(";"), a = 10), null != n[0] && (r = U()(n[0], a)), null != n[1] && (o = U()(n[1], a))
                        }
                        return {uri: t.uri, duration: t.duration, title: t.title, crc: o, fileSize: r, fragName: e}
                    }
                }, {
                    key: "updatePlaylist", value: function (t, e) {
                        if (1 == this.p2pEnable) {
                            var n = this.parsePlaylistItem(e);
                            if (null != n.fragName) if (this.realtimeData.lastPlaylistItem = n.fragName, this.onRealtimeDataUpdate(), t || !n.title) ; else {
                                var r = n.fragName, o = n.uri, i = n.fileSize, a = n.crc;
                                this.preloadPlaylistItems.size <= this.p2pContext.Config.nonP2PFragmentCount && (this.preloadPlaylistItems.set(r, n), this.p2pContext.P2P.createDownloadFragment(r, i, a)), !0 === this.canStartP2PTask && this.p2pContext.P2P.startDownloadFragment(r, o, i, a)
                            }
                        }
                    }
                }], [{
                    key: "checkP2PSupport", value: function () {
                        var t, e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : window,
                            n = !!e.WebSocket, r = !!(e.MediaSource || e.WebKitMediaSource),
                            o = !!(e.RTCPeerConnection || e.mozRTCPeerConnection || e.webkitRTCPeerConnection),
                            i = e.RTCDataChannel || e.DataChannel, a = !!i,
                            s = !!a && (null == i || null === (t = i.prototype) || void 0 === t ? void 0 : t.hasOwnProperty("onbufferedamountlow")),
                            c = !!e.ReadableStream, u = n && r && o && a && s && c,
                            l = "Misaka Network Check: ".concat(u ? "Supported" : "Unsupported");
                        if ("development" == St.Configuration.curNodeEnv) {
                            var f = "[SistersPlayer] ".concat(l, "\n\t") + "WebSocket: ".concat(n, "\n\t") + "MediaSource: ".concat(r, "\n\t") + "RTCPeerConnection: ".concat(o, "\n\t") + "RTCDataChannel: ".concat(a, "\n\t") + "RTCDataChannel onbufferedamountlow: ".concat(s, "\n\t") + "Fetch API ReadableStream: ".concat(c);
                            console.log(f)
                        } else console.log("[SistersPlayer] ".concat(l));
                        return u
                    }
                }, {
                    key: "checkP2PSupportBypass", value: function () {
                        var t = document.createElement("iframe");
                        t.src = "about:blank", t.hidden = !0, document.body.appendChild(t);
                        var e = !1;
                        return t.contentWindow && (e = this.checkP2PSupport(t.contentWindow)), document.body.removeChild(t), e
                    }
                }, {
                    key: "checkIsCheater", value: function () {
                        var t = !1;
                        return 0 == this.checkP2PSupport() && 1 == this.checkP2PSupportBypass() && (t = !0), t
                    }
                }, {
                    key: "getTrackerParamsString", value: function (t) {
                        var e = "?protocol=" + St.Configuration.ProtocolVersion.toString();
                        if (null != t) for (var n = 0, r = M()(t); n < r.length; n++) {
                            var o = s()(r[n], 2), i = o[0], a = o[1];
                            null != a && (e = e + "&" + encodeURIComponent(i) + "=" + encodeURIComponent(a.toString()))
                        }
                        return e
                    }
                }]), t
            }()
        }, function (t, e) {
            t.exports = "\t\n\v\f\r                　\u2028\u2029\ufeff"
        }, function (t, e, n) {
            t.exports = n(208)
        }, function (t, e, n) {
            var r = n(211);
            t.exports = r
        }, function (t, e) {
            var n;
            n = function () {
                return this
            }();
            try {
                n = n || new Function("return this")()
            } catch (t) {
                "object" == typeof window && (n = window)
            }
            t.exports = n
        }, function (t, e) {
            var n = "object" == typeof document && document.all, r = void 0 === n && void 0 !== n;
            t.exports = {all: n, IS_HTMLDDA: r}
        }, function (t, e, n) {
            var r = n(73);
            t.exports = r && !Symbol.sham && "symbol" == typeof Symbol.iterator
        }, function (t, e, n) {
            var r = n(22), o = n(12), i = n(126);
            t.exports = !r && !o(function () {
                return 7 != Object.defineProperty(i("div"), "a", {
                    get: function () {
                        return 7
                    }
                }).a
            })
        }, function (t, e, n) {
            var r = n(12), o = n(18), i = /#|\.prototype\./, a = function (t, e) {
                var n = c[s(t)];
                return n == l || n != u && (o(e) ? r(e) : !!e)
            }, s = a.normalize = function (t) {
                return String(t).replace(i, ".").toLowerCase()
            }, c = a.data = {}, u = a.NATIVE = "N", l = a.POLYFILL = "P";
            t.exports = a
        }, function (t, e, n) {
            var r = n(22), o = n(12);
            t.exports = r && o(function () {
                return 42 != Object.defineProperty(function () {
                }, "prototype", {value: 42, writable: !1}).prototype
            })
        }, function (t, e, n) {
            var r = n(220);
            n(50), t.exports = r
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(12), i = n(58), a = n(24), s = n(34), c = n(36), u = n(127), l = n(76), f = n(108),
                h = n(88), p = n(17), d = n(74), v = p("isConcatSpreadable"), g = d >= 51 || !o(function () {
                    var t = [];
                    return t[v] = !1, t.concat()[0] !== t
                }), y = h("concat"), x = function (t) {
                    if (!a(t)) return !1;
                    var e = t[v];
                    return void 0 !== e ? !!e : i(t)
                };
            r({target: "Array", proto: !0, arity: 1, forced: !g || !y}, {
                concat: function (t) {
                    var e, n, r, o, i, a = s(this), h = f(a, 0), p = 0;
                    for (e = -1, r = arguments.length; e < r; e++) if (x(i = -1 === e ? a : arguments[e])) for (o = c(i), u(p + o), n = 0; n < o; n++, p++) n in i && l(h, p, i[n]); else u(p + 1), l(h, p++, i);
                    return h.length = p, h
                }
            })
        }, function (t, e, n) {
            var r = n(97), o = Math.min;
            t.exports = function (t) {
                return t > 0 ? o(r(t), 9007199254740991) : 0
            }
        }, function (t, e, n) {
            var r = n(13), o = n(18), i = n(125), a = r(Function.toString);
            o(i.inspectSource) || (i.inspectSource = function (t) {
                return a(t)
            }), t.exports = i.inspectSource
        }, function (t, e, n) {
            var r = n(22), o = n(146), i = n(31), a = n(35), s = n(46), c = n(89);
            e.f = r && !o ? Object.defineProperties : function (t, e) {
                a(t);
                for (var n, r = s(e), o = c(e), u = o.length, l = 0; u > l;) i.f(t, n = o[l++], r[n]);
                return t
            }
        }, function (t, e, n) {
            var r = n(13), o = n(25), i = n(46), a = n(129).indexOf, s = n(90), c = r([].push);
            t.exports = function (t, e) {
                var n, r = i(t), u = 0, l = [];
                for (n in r) !o(s, n) && o(r, n) && c(l, n);
                for (; e.length > u;) o(r, n = e[u++]) && (~a(l, n) || c(l, n));
                return l
            }
        }, function (t, e, n) {
            var r = n(30);
            t.exports = r("document", "documentElement")
        }, function (t, e, n) {
            var r = n(55), o = n(46), i = n(112).f, a = n(131),
                s = "object" == typeof window && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];
            t.exports.f = function (t) {
                return s && "Window" == r(t) ? function (t) {
                    try {
                        return i(t)
                    } catch (t) {
                        return a(s)
                    }
                }(t) : i(o(t))
            }
        }, function (t, e, n) {
            var r = n(23), o = n(30), i = n(17), a = n(44);
            t.exports = function () {
                var t = o("Symbol"), e = t && t.prototype, n = e && e.valueOf, s = i("toPrimitive");
                e && !e[s] && a(e, s, function (t) {
                    return r(n, this)
                }, {arity: 1})
            }
        }, function (t, e, n) {
            var r = n(73);
            t.exports = r && !!Symbol.for && !!Symbol.keyFor
        }, function (t, e, n) {
            var r = n(7), o = n(30), i = n(84), a = n(23), s = n(13), c = n(12), u = n(58), l = n(18), f = n(24),
                h = n(105), p = n(115), d = n(73), v = o("JSON", "stringify"), g = s(/./.exec), y = s("".charAt),
                x = s("".charCodeAt), C = s("".replace), m = s(1..toString), w = /[\uD800-\uDFFF]/g,
                k = /^[\uD800-\uDBFF]$/, b = /^[\uDC00-\uDFFF]$/, S = !d || c(function () {
                    var t = o("Symbol")();
                    return "[null]" != v([t]) || "{}" != v({a: t}) || "{}" != v(Object(t))
                }), P = c(function () {
                    return '"\\udf06\\ud834"' !== v("\udf06\ud834") || '"\\udead"' !== v("\udead")
                }), A = function (t, e) {
                    var n = p(arguments), r = e;
                    if ((f(e) || void 0 !== t) && !h(t)) return u(e) || (e = function (t, e) {
                        if (l(r) && (e = a(r, this, t, e)), !h(e)) return e
                    }), n[1] = e, i(v, null, n)
                }, E = function (t, e, n) {
                    var r = y(n, e - 1), o = y(n, e + 1);
                    return g(k, t) && !g(b, o) || g(b, t) && !g(k, r) ? "\\u" + m(x(t, 0), 16) : t
                };
            v && r({target: "JSON", stat: !0, arity: 3, forced: S || P}, {
                stringify: function (t, e, n) {
                    var r = p(arguments), o = i(S ? A : v, null, r);
                    return P && "string" == typeof o ? C(o, w, E) : o
                }
            })
        }, function (t, e, n) {
            n(20)("iterator")
        }, function (t, e, n) {
            var r = n(20), o = n(155);
            r("toPrimitive"), o()
        }, function (t, e, n) {
            "use strict";
            var r = n(161).IteratorPrototype, o = n(63), i = n(56), a = n(49), s = n(78), c = function () {
                return this
            };
            t.exports = function (t, e, n, u) {
                var l = e + " Iterator";
                return t.prototype = o(r, {next: i(+!u, n)}), a(t, l, !1, !0), s[l] = c, t
            }
        }, function (t, e, n) {
            "use strict";
            var r, o, i, a = n(12), s = n(18), c = n(24), u = n(63), l = n(116), f = n(44), h = n(17), p = n(39),
                d = h("iterator"), v = !1;
            [].keys && ("next" in (i = [].keys()) ? (o = l(l(i))) !== Object.prototype && (r = o) : v = !0), !c(r) || a(function () {
                var t = {};
                return r[d].call(t) !== t
            }) ? r = {} : p && (r = u(r)), s(r[d]) || f(r, d, function () {
                return this
            }), t.exports = {IteratorPrototype: r, BUGGY_SAFARI_ITERATORS: v}
        }, function (t, e, n) {
            var r = n(12);
            t.exports = !r(function () {
                function t() {
                }

                return t.prototype.constructor = null, Object.getPrototypeOf(new t) !== t.prototype
            })
        }, function (t, e, n) {
            var r = n(13), o = n(97), i = n(37), a = n(72), s = r("".charAt), c = r("".charCodeAt), u = r("".slice),
                l = function (t) {
                    return function (e, n) {
                        var r, l, f = i(a(e)), h = o(n), p = f.length;
                        return h < 0 || h >= p ? t ? "" : void 0 : (r = c(f, h)) < 55296 || r > 56319 || h + 1 === p || (l = c(f, h + 1)) < 56320 || l > 57343 ? t ? s(f, h) : r : t ? u(f, h, h + 2) : l - 56320 + (r - 55296 << 10) + 65536
                    }
                };
            t.exports = {codeAt: l(!1), charAt: l(!0)}
        }, function (t, e, n) {
            var r = n(165), o = n(167), i = n(173);
            t.exports = function (t, e) {
                var n;
                if (t) {
                    if ("string" == typeof t) return i(t, e);
                    var a = r(n = Object.prototype.toString.call(t)).call(n, 8, -1);
                    return "Object" === a && t.constructor && (a = t.constructor.name), "Map" === a || "Set" === a ? o(t) : "Arguments" === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a) ? i(t, e) : void 0
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            t.exports = n(261)
        }, function (t, e, n) {
            var r = n(264);
            t.exports = r
        }, function (t, e, n) {
            t.exports = n(267)
        }, function (t, e, n) {
            var r = n(270);
            t.exports = r
        }, function (t, e, n) {
            "use strict";
            var r = n(43), o = n(23), i = n(34), a = n(272), s = n(171), c = n(109), u = n(36), l = n(76), f = n(135),
                h = n(92), p = Array;
            t.exports = function (t) {
                var e = i(t), n = c(this), d = arguments.length, v = d > 1 ? arguments[1] : void 0, g = void 0 !== v;
                g && (v = r(v, d > 2 ? arguments[2] : void 0));
                var y, x, C, m, w, k, b = h(e), S = 0;
                if (!b || this === p && s(b)) for (y = u(e), x = n ? new this(y) : p(y); y > S; S++) k = g ? v(e[S], S) : e[S], l(x, S, k); else for (w = (m = f(e, b)).next, x = n ? new this : []; !(C = o(w, m)).done; S++) k = g ? a(m, v, [C.value, S], !0) : C.value, l(x, S, k);
                return x.length = S, x
            }
        }, function (t, e, n) {
            var r = n(23), o = n(35), i = n(124);
            t.exports = function (t, e, n) {
                var a, s;
                o(t);
                try {
                    if (!(a = i(t, "return"))) {
                        if ("throw" === e) throw n;
                        return n
                    }
                    a = r(a, t)
                } catch (t) {
                    s = !0, a = t
                }
                if ("throw" === e) throw n;
                if (s) throw a;
                return o(a), n
            }
        }, function (t, e, n) {
            var r = n(17), o = n(78), i = r("iterator"), a = Array.prototype;
            t.exports = function (t) {
                return void 0 !== t && (o.Array === t || a[i] === t)
            }
        }, function (t, e, n) {
            var r = n(17)("iterator"), o = !1;
            try {
                var i = 0, a = {
                    next: function () {
                        return {done: !!i++}
                    }, return: function () {
                        o = !0
                    }
                };
                a[r] = function () {
                    return this
                }, Array.from(a, function () {
                    throw 2
                })
            } catch (t) {
            }
            t.exports = function (t, e) {
                if (!e && !o) return !1;
                var n = !1;
                try {
                    var i = {};
                    i[r] = function () {
                        return {
                            next: function () {
                                return {done: n = !0}
                            }
                        }
                    }, t(i)
                } catch (t) {
                }
                return n
            }
        }, function (t, e) {
            t.exports = function (t, e) {
                (null == e || e > t.length) && (e = t.length);
                for (var n = 0, r = new Array(e); n < e; n++) r[n] = t[n];
                return r
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            t.exports = n(274)
        }, function (t, e, n) {
            var r = n(277);
            n(50), t.exports = r
        }, function (t, e, n) {
            n(278)
        }, function (t, e, n) {
            "use strict";
            var r = n(30), o = n(31), i = n(17), a = n(22), s = i("species");
            t.exports = function (t) {
                var e = r(t), n = o.f;
                a && e && !e[s] && n(e, s, {
                    configurable: !0, get: function () {
                        return this
                    }
                })
            }
        }, function (t, e, n) {
            var r = n(35), o = n(287), i = n(86), a = n(17)("species");
            t.exports = function (t, e) {
                var n, s = r(t).constructor;
                return void 0 === s || i(n = r(s)[a]) ? e : o(n)
            }
        }, function (t, e, n) {
            var r, o, i, a, s = n(15), c = n(84), u = n(43), l = n(18), f = n(25), h = n(12), p = n(153), d = n(115),
                v = n(126), g = n(118), y = n(180), x = n(93), C = s.setImmediate, m = s.clearImmediate, w = s.process,
                k = s.Dispatch, b = s.Function, S = s.MessageChannel, P = s.String, A = 0, E = {};
            try {
                r = s.location
            } catch (t) {
            }
            var R = function (t) {
                if (f(E, t)) {
                    var e = E[t];
                    delete E[t], e()
                }
            }, I = function (t) {
                return function () {
                    R(t)
                }
            }, T = function (t) {
                R(t.data)
            }, D = function (t) {
                s.postMessage(P(t), r.protocol + "//" + r.host)
            };
            C && m || (C = function (t) {
                g(arguments.length, 1);
                var e = l(t) ? t : b(t), n = d(arguments, 1);
                return E[++A] = function () {
                    c(e, void 0, n)
                }, o(A), A
            }, m = function (t) {
                delete E[t]
            }, x ? o = function (t) {
                w.nextTick(I(t))
            } : k && k.now ? o = function (t) {
                k.now(I(t))
            } : S && !y ? (a = (i = new S).port2, i.port1.onmessage = T, o = u(a.postMessage, a)) : s.addEventListener && l(s.postMessage) && !s.importScripts && r && "file:" !== r.protocol && !h(D) ? (o = D, s.addEventListener("message", T, !1)) : o = "onreadystatechange" in v("script") ? function (t) {
                p.appendChild(v("script")).onreadystatechange = function () {
                    p.removeChild(this), R(t)
                }
            } : function (t) {
                setTimeout(I(t), 0)
            }), t.exports = {set: C, clear: m}
        }, function (t, e, n) {
            var r = n(57);
            t.exports = /(?:ipad|iphone|ipod).*applewebkit/i.test(r)
        }, function (t, e) {
            t.exports = "object" == typeof Deno && Deno && "object" == typeof Deno.version
        }, function (t, e, n) {
            var r = n(80), o = n(172), i = n(95).CONSTRUCTOR;
            t.exports = i || !o(function (t) {
                r.all(t).then(void 0, function () {
                })
            })
        }, function (t, e, n) {
            var r = n(35), o = n(24), i = n(62);
            t.exports = function (t, e) {
                if (r(t), o(e) && e.constructor === t) return e;
                var n = i.f(t);
                return (0, n.resolve)(e), n.promise
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(23), i = n(38), a = n(62), s = n(79), c = n(61);
            r({target: "Promise", stat: !0}, {
                allSettled: function (t) {
                    var e = this, n = a.f(e), r = n.resolve, u = n.reject, l = s(function () {
                        var n = i(e.resolve), a = [], s = 0, u = 1;
                        c(t, function (t) {
                            var i = s++, c = !1;
                            u++, o(n, e, t).then(function (t) {
                                c || (c = !0, a[i] = {status: "fulfilled", value: t}, --u || r(a))
                            }, function (t) {
                                c || (c = !0, a[i] = {status: "rejected", reason: t}, --u || r(a))
                            })
                        }), --u || r(a)
                    });
                    return l.error && u(l.value), n.promise
                }
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(23), i = n(38), a = n(30), s = n(62), c = n(79), u = n(61);
            r({target: "Promise", stat: !0}, {
                any: function (t) {
                    var e = this, n = a("AggregateError"), r = s.f(e), l = r.resolve, f = r.reject, h = c(function () {
                        var r = i(e.resolve), a = [], s = 0, c = 1, h = !1;
                        u(t, function (t) {
                            var i = s++, u = !1;
                            c++, o(r, e, t).then(function (t) {
                                u || h || (h = !0, l(t))
                            }, function (t) {
                                u || h || (u = !0, a[i] = t, --c || f(new n(a, "No one promise resolved")))
                            })
                        }), --c || f(new n(a, "No one promise resolved"))
                    });
                    return h.error && f(h.value), r.promise
                }
            })
        }, function (t, e, n) {
            var r = n(33).default, o = n(319);
            t.exports = function (t) {
                var e = o(t, "string");
                return "symbol" === r(e) ? e : String(e)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            n(50);
            var r = n(59), o = n(25), i = n(21), a = n(346), s = Array.prototype, c = {DOMTokenList: !0, NodeList: !0};
            t.exports = function (t) {
                var e = t.forEach;
                return t === s || i(s, t) && e === s.forEach || o(c, r(t)) ? a : e
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(15), i = n(189), a = n(12), s = n(48), c = n(61), u = n(94), l = n(18), f = n(24),
                h = n(49), p = n(31).f, d = n(91).forEach, v = n(22), g = n(60), y = g.set, x = g.getterFor;
            t.exports = function (t, e, n) {
                var g, C = -1 !== t.indexOf("Map"), m = -1 !== t.indexOf("Weak"), w = C ? "set" : "add", k = o[t],
                    b = k && k.prototype, S = {};
                if (v && l(k) && (m || b.forEach && !a(function () {
                    (new k).entries().next()
                }))) {
                    var P = (g = e(function (e, n) {
                        y(u(e, P), {type: t, collection: new k}), null != n && c(n, e[w], {that: e, AS_ENTRIES: C})
                    })).prototype, A = x(t);
                    d(["add", "clear", "delete", "forEach", "get", "has", "set", "keys", "values", "entries"], function (t) {
                        var e = "add" == t || "set" == t;
                        !(t in b) || m && "clear" == t || s(P, t, function (n, r) {
                            var o = A(this).collection;
                            if (!e && m && !f(n)) return "get" == t && void 0;
                            var i = o[t](0 === n ? 0 : n, r);
                            return e ? this : i
                        })
                    }), m || p(P, "size", {
                        configurable: !0, get: function () {
                            return A(this).collection.size
                        }
                    })
                } else g = n.getConstructor(e, t, C, w), i.enable();
                return h(g, t, !1, !0), S[t] = g, r({global: !0, forced: !0}, S), m || n.setStrong(g, t, C), g
            }
        }, function (t, e, n) {
            var r = n(7), o = n(13), i = n(90), a = n(24), s = n(25), c = n(31).f, u = n(112), l = n(154), f = n(369),
                h = n(106), p = n(371), d = !1, v = h("meta"), g = 0, y = function (t) {
                    c(t, v, {value: {objectID: "O" + g++, weakData: {}}})
                }, x = t.exports = {
                    enable: function () {
                        x.enable = function () {
                        }, d = !0;
                        var t = u.f, e = o([].splice), n = {};
                        n[v] = 1, t(n).length && (u.f = function (n) {
                            for (var r = t(n), o = 0, i = r.length; o < i; o++) if (r[o] === v) {
                                e(r, o, 1);
                                break
                            }
                            return r
                        }, r({target: "Object", stat: !0, forced: !0}, {getOwnPropertyNames: l.f}))
                    }, fastKey: function (t, e) {
                        if (!a(t)) return "symbol" == typeof t ? t : ("string" == typeof t ? "S" : "P") + t;
                        if (!s(t, v)) {
                            if (!f(t)) return "F";
                            if (!e) return "E";
                            y(t)
                        }
                        return t[v].objectID
                    }, getWeakData: function (t, e) {
                        if (!s(t, v)) {
                            if (!f(t)) return !0;
                            if (!e) return !1;
                            y(t)
                        }
                        return t[v].weakData
                    }, onFreeze: function (t) {
                        return p && d && f(t) && !s(t, v) && y(t), t
                    }
                };
            i[v] = !0
        }, function (t, e, n) {
            "use strict";
            var r = n(31).f, o = n(63), i = n(191), a = n(43), s = n(94), c = n(86), u = n(61), l = n(133), f = n(134),
                h = n(177), p = n(22), d = n(189).fastKey, v = n(60), g = v.set, y = v.getterFor;
            t.exports = {
                getConstructor: function (t, e, n, l) {
                    var f = t(function (t, r) {
                        s(t, h), g(t, {
                            type: e,
                            index: o(null),
                            first: void 0,
                            last: void 0,
                            size: 0
                        }), p || (t.size = 0), c(r) || u(r, t[l], {that: t, AS_ENTRIES: n})
                    }), h = f.prototype, v = y(e), x = function (t, e, n) {
                        var r, o, i = v(t), a = C(t, e);
                        return a ? a.value = n : (i.last = a = {
                            index: o = d(e, !0),
                            key: e,
                            value: n,
                            previous: r = i.last,
                            next: void 0,
                            removed: !1
                        }, i.first || (i.first = a), r && (r.next = a), p ? i.size++ : t.size++, "F" !== o && (i.index[o] = a)), t
                    }, C = function (t, e) {
                        var n, r = v(t), o = d(e);
                        if ("F" !== o) return r.index[o];
                        for (n = r.first; n; n = n.next) if (n.key == e) return n
                    };
                    return i(h, {
                        clear: function () {
                            for (var t = v(this), e = t.index, n = t.first; n;) n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete e[n.index], n = n.next;
                            t.first = t.last = void 0, p ? t.size = 0 : this.size = 0
                        }, delete: function (t) {
                            var e = v(this), n = C(this, t);
                            if (n) {
                                var r = n.next, o = n.previous;
                                delete e.index[n.index], n.removed = !0, o && (o.next = r), r && (r.previous = o), e.first == n && (e.first = r), e.last == n && (e.last = o), p ? e.size-- : this.size--
                            }
                            return !!n
                        }, forEach: function (t) {
                            for (var e, n = v(this), r = a(t, arguments.length > 1 ? arguments[1] : void 0); e = e ? e.next : n.first;) for (r(e.value, e.key, this); e && e.removed;) e = e.previous
                        }, has: function (t) {
                            return !!C(this, t)
                        }
                    }), i(h, n ? {
                        get: function (t) {
                            var e = C(this, t);
                            return e && e.value
                        }, set: function (t, e) {
                            return x(this, 0 === t ? 0 : t, e)
                        }
                    } : {
                        add: function (t) {
                            return x(this, t = 0 === t ? 0 : t, t)
                        }
                    }), p && r(h, "size", {
                        get: function () {
                            return v(this).size
                        }
                    }), f
                }, setStrong: function (t, e, n) {
                    var r = e + " Iterator", o = y(e), i = y(r);
                    l(t, e, function (t, e) {
                        g(this, {type: r, target: t, state: o(t), kind: e, last: void 0})
                    }, function () {
                        for (var t = i(this), e = t.kind, n = t.last; n && n.removed;) n = n.previous;
                        return t.target && (t.last = n = n ? n.next : t.state.first) ? f("keys" == e ? n.key : "values" == e ? n.value : [n.key, n.value], !1) : (t.target = void 0, f(void 0, !0))
                    }, n ? "entries" : "values", !n, !0), h(e)
                }
            }
        }, function (t, e, n) {
            var r = n(44);
            t.exports = function (t, e, n) {
                for (var o in e) n && n.unsafe && t[o] ? t[o] = e[o] : r(t, o, e[o], n);
                return t
            }
        }, function (t, e, n) {
            n(375), n(376)
        }, function (t, e, n) {
            var r = n(15), o = n(84), i = n(18), a = n(57), s = n(115), c = n(118), u = /MSIE .\./.test(a),
                l = r.Function,
                f = function (t) {
                    return u ? function (e, n) {
                        var r = c(arguments.length, 1) > 2, a = i(e) ? e : l(e), u = r ? s(arguments, 2) : void 0;
                        return t(r ? function () {
                            o(a, this, u)
                        } : a, n)
                    } : t
                };
            t.exports = {setTimeout: f(r.setTimeout), setInterval: f(r.setInterval)}
        }, function (t, e, n) {
            var r = n(15), o = n(12), i = n(13), a = n(37), s = n(205).trim, c = n(138), u = r.parseInt, l = r.Symbol,
                f = l && l.iterator, h = /^[+-]?0x/i, p = i(h.exec),
                d = 8 !== u(c + "08") || 22 !== u(c + "0x16") || f && !o(function () {
                    u(Object(f))
                });
            t.exports = d ? function (t, e) {
                var n = s(a(t));
                return u(n, e >>> 0 || (p(h, n) ? 16 : 10))
            } : u
        }, function (t, e, n) {
            "use strict";
            var r = n(75), o = TypeError;
            t.exports = function (t, e) {
                if (!delete t[e]) throw o("Cannot delete property " + r(e) + " of " + r(t))
            }
        }, function (t, e, n) {
            var r = n(131), o = Math.floor, i = function (t, e) {
                var n = t.length, c = o(n / 2);
                return n < 8 ? a(t, e) : s(t, i(r(t, 0, c), e), i(r(t, c), e), e)
            }, a = function (t, e) {
                for (var n, r, o = t.length, i = 1; i < o;) {
                    for (r = i, n = t[i]; r && e(t[r - 1], n) > 0;) t[r] = t[--r];
                    r !== i++ && (t[r] = n)
                }
                return t
            }, s = function (t, e, n, r) {
                for (var o = e.length, i = n.length, a = 0, s = 0; a < o || s < i;) t[a + s] = a < o && s < i ? r(e[a], n[s]) <= 0 ? e[a++] : n[s++] : a < o ? e[a++] : n[s++];
                return t
            };
            t.exports = i
        }, function (t, e, n) {
            var r = n(406), o = TypeError;
            t.exports = function (t) {
                if (r(t)) throw o("The method doesn't accept regular expressions");
                return t
            }
        }, function (t, e, n) {
            var r = n(17)("match");
            t.exports = function (t) {
                var e = /./;
                try {
                    "/./"[t](e)
                } catch (n) {
                    try {
                        return e[r] = !1, "/./"[t](e)
                    } catch (t) {
                    }
                }
                return !1
            }
        }, function (t, e, n) {
            var r = n(12), o = n(17), i = n(39), a = o("iterator");
            t.exports = !r(function () {
                var t = new URL("b?a=1&b=2&c=3", "http://a"), e = t.searchParams, n = "";
                return t.pathname = "c%20d", e.forEach(function (t, r) {
                    e.delete("b"), n += r + t
                }), i && !t.toJSON || !e.sort || "http://a/c%20d?a=1&c=3" !== t.href || "3" !== e.get("c") || "a=1" !== String(new URLSearchParams("?a=1")) || !e[a] || "a" !== new URL("https://a@b").username || "b" !== new URLSearchParams(new URLSearchParams("a=b")).get("a") || "xn--e1aybc" !== new URL("http://тест").host || "#%D0%B1" !== new URL("http://a#б").hash || "a1c3" !== n || "x" !== new URL("http://x", void 0).host
            })
        }, function (t, e, n) {
            "use strict";
            n(51);
            var r = n(7), o = n(15), i = n(23), a = n(13), s = n(22), c = n(199), u = n(44), l = n(191), f = n(49),
                h = n(160), p = n(60), d = n(94), v = n(18), g = n(25), y = n(43), x = n(59), C = n(35), m = n(24),
                w = n(37), k = n(63), b = n(56), S = n(135), P = n(92), A = n(118), E = n(17), R = n(196),
                I = E("iterator"), T = p.set, D = p.getterFor("URLSearchParams"),
                L = p.getterFor("URLSearchParamsIterator"), F = Object.getOwnPropertyDescriptor, O = function (t) {
                    if (!s) return o[t];
                    var e = F(o, t);
                    return e && e.value
                }, U = O("fetch"), N = O("Request"), M = O("Headers"), B = N && N.prototype, _ = M && M.prototype,
                z = o.RegExp,
                j = o.TypeError, q = o.decodeURIComponent, W = o.encodeURIComponent, V = a("".charAt), G = a([].join),
                H = a([].push), Y = a("".replace), Q = a([].shift), K = a([].splice), X = a("".split), $ = a("".slice),
                J = /\+/g, Z = Array(4), tt = function (t) {
                    return Z[t - 1] || (Z[t - 1] = z("((?:%[\\da-f]{2}){" + t + "})", "gi"))
                }, et = function (t) {
                    try {
                        return q(t)
                    } catch (e) {
                        return t
                    }
                }, nt = function (t) {
                    var e = Y(t, J, " "), n = 4;
                    try {
                        return q(e)
                    } catch (t) {
                        for (; n;) e = Y(e, tt(n--), et);
                        return e
                    }
                }, rt = /[!'()~]|%20/g, ot = {"!": "%21", "'": "%27", "(": "%28", ")": "%29", "~": "%7E", "%20": "+"},
                it = function (t) {
                    return ot[t]
                }, at = function (t) {
                    return Y(W(t), rt, it)
                }, st = h(function (t, e) {
                    T(this, {type: "URLSearchParamsIterator", iterator: S(D(t).entries), kind: e})
                }, "Iterator", function () {
                    var t = L(this), e = t.kind, n = t.iterator.next(), r = n.value;
                    return n.done || (n.value = "keys" === e ? r.key : "values" === e ? r.value : [r.key, r.value]), n
                }, !0), ct = function (t) {
                    this.entries = [], this.url = null, void 0 !== t && (m(t) ? this.parseObject(t) : this.parseQuery("string" == typeof t ? "?" === V(t, 0) ? $(t, 1) : t : w(t)))
                };
            ct.prototype = {
                type: "URLSearchParams", bindURL: function (t) {
                    this.url = t, this.update()
                }, parseObject: function (t) {
                    var e, n, r, o, a, s, c, u = P(t);
                    if (u) for (n = (e = S(t, u)).next; !(r = i(n, e)).done;) {
                        if (a = (o = S(C(r.value))).next, (s = i(a, o)).done || (c = i(a, o)).done || !i(a, o).done) throw j("Expected sequence with length 2");
                        H(this.entries, {key: w(s.value), value: w(c.value)})
                    } else for (var l in t) g(t, l) && H(this.entries, {key: l, value: w(t[l])})
                }, parseQuery: function (t) {
                    if (t) for (var e, n, r = X(t, "&"), o = 0; o < r.length;) (e = r[o++]).length && (n = X(e, "="), H(this.entries, {
                        key: nt(Q(n)),
                        value: nt(G(n, "="))
                    }))
                }, serialize: function () {
                    for (var t, e = this.entries, n = [], r = 0; r < e.length;) t = e[r++], H(n, at(t.key) + "=" + at(t.value));
                    return G(n, "&")
                }, update: function () {
                    this.entries.length = 0, this.parseQuery(this.url.query)
                }, updateURL: function () {
                    this.url && this.url.update()
                }
            };
            var ut = function () {
                d(this, lt);
                var t = arguments.length > 0 ? arguments[0] : void 0;
                T(this, new ct(t))
            }, lt = ut.prototype;
            if (l(lt, {
                append: function (t, e) {
                    A(arguments.length, 2);
                    var n = D(this);
                    H(n.entries, {key: w(t), value: w(e)}), n.updateURL()
                }, delete: function (t) {
                    A(arguments.length, 1);
                    for (var e = D(this), n = e.entries, r = w(t), o = 0; o < n.length;) n[o].key === r ? K(n, o, 1) : o++;
                    e.updateURL()
                }, get: function (t) {
                    A(arguments.length, 1);
                    for (var e = D(this).entries, n = w(t), r = 0; r < e.length; r++) if (e[r].key === n) return e[r].value;
                    return null
                }, getAll: function (t) {
                    A(arguments.length, 1);
                    for (var e = D(this).entries, n = w(t), r = [], o = 0; o < e.length; o++) e[o].key === n && H(r, e[o].value);
                    return r
                }, has: function (t) {
                    A(arguments.length, 1);
                    for (var e = D(this).entries, n = w(t), r = 0; r < e.length;) if (e[r++].key === n) return !0;
                    return !1
                }, set: function (t, e) {
                    A(arguments.length, 1);
                    for (var n, r = D(this), o = r.entries, i = !1, a = w(t), s = w(e), c = 0; c < o.length; c++) (n = o[c]).key === a && (i ? K(o, c--, 1) : (i = !0, n.value = s));
                    i || H(o, {key: a, value: s}), r.updateURL()
                }, sort: function () {
                    var t = D(this);
                    R(t.entries, function (t, e) {
                        return t.key > e.key ? 1 : -1
                    }), t.updateURL()
                }, forEach: function (t) {
                    for (var e, n = D(this).entries, r = y(t, arguments.length > 1 ? arguments[1] : void 0), o = 0; o < n.length;) r((e = n[o++]).value, e.key, this)
                }, keys: function () {
                    return new st(this, "keys")
                }, values: function () {
                    return new st(this, "values")
                }, entries: function () {
                    return new st(this, "entries")
                }
            }, {enumerable: !0}), u(lt, I, lt.entries, {name: "entries"}), u(lt, "toString", function () {
                return D(this).serialize()
            }, {enumerable: !0}), f(ut, "URLSearchParams"), r({
                global: !0,
                constructor: !0,
                forced: !c
            }, {URLSearchParams: ut}), !c && v(M)) {
                var ft = a(_.has), ht = a(_.set), pt = function (t) {
                    if (m(t)) {
                        var e, n = t.body;
                        if ("URLSearchParams" === x(n)) return e = t.headers ? new M(t.headers) : new M, ft(e, "content-type") || ht(e, "content-type", "application/x-www-form-urlencoded;charset=UTF-8"), k(t, {
                            body: b(0, w(n)),
                            headers: b(0, e)
                        })
                    }
                    return t
                };
                if (v(U) && r({global: !0, enumerable: !0, dontCallGetSet: !0, forced: !0}, {
                    fetch: function (t) {
                        return U(t, arguments.length > 1 ? pt(arguments[1]) : {})
                    }
                }), v(N)) {
                    var dt = function (t) {
                        return d(this, B), new N(t, arguments.length > 1 ? pt(arguments[1]) : {})
                    };
                    B.constructor = dt, dt.prototype = B, r({
                        global: !0,
                        constructor: !0,
                        dontCallGetSet: !0,
                        forced: !0
                    }, {Request: dt})
                }
            }
            t.exports = {URLSearchParams: ut, getState: D}
        }, function (t, e, n) {
            "use strict";
            n.d(e, "a", function () {
                return u
            });
            var r = n(2), o = n.n(r), i = n(3), a = n.n(i), s = n(0), c = n.n(s), u = function () {
                function t() {
                    o()(this, t)
                }

                return a()(t, null, [{
                    key: "crc32", value: function (t) {
                        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 1,
                            n = new Uint32Array(1);
                        new Uint32Array(1)[0] = e;
                        var r = new Uint32Array(1);
                        for (r[0] = 0, r[0] ^= 4294967295, n[0] = 0; n[0] < t.length; n[0] += e) r[0] = this.crc32_tab[255 & (r[0] ^ t[n[0]])] ^ r[0] >> 8 & 16777215;
                        return r[0] = 4294967295 ^ r[0], r[0] < 0 && (r[0] += 4294967296), r[0]
                    }
                }]), t
            }();
            c()(u, "crc32_tab", new Uint32Array([0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685, 2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995, 2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648, 2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990, 1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755, 2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145, 1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206, 2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980, 1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705, 3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527, 1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772, 4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290, 251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719, 3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925, 453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202, 4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960, 984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733, 3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467, 855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048, 3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054, 702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443, 3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945, 2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430, 2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580, 2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225, 1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143, 2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732, 1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850, 2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135, 1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109, 3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954, 1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920, 3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877, 83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603, 3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992, 534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934, 4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795, 376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105, 3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270, 936918e3, 2847714899, 3736837829, 1202900863, 817233897, 3183342108, 3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449, 601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471, 3272380065, 1510334235, 755167117]))
        }, function (t, e, n) {
            t.exports = n(433)
        }, function (t, e, n) {
            t.exports = n(440)
        }, function (t, e, n) {
            t.exports = n(453)
        }, function (t, e, n) {
            var r = n(13), o = n(72), i = n(37), a = n(138), s = r("".replace), c = "[" + a + "]",
                u = RegExp("^" + c + c + "*"), l = RegExp(c + c + "*$"), f = function (t) {
                    return function (e) {
                        var n = i(o(e));
                        return 1 & t && (n = s(n, u, "")), 2 & t && (n = s(n, l, "")), n
                    }
                };
            t.exports = {start: f(1), end: f(2), trim: f(3)}
        }, , function (t, e, n) {
            var r = n(139);
            t.exports = function (t) {
                if (r(t)) return t
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            t.exports = n(209)
        }, function (t, e, n) {
            var r = n(210);
            t.exports = r
        }, function (t, e, n) {
            var r = n(140);
            t.exports = r
        }, function (t, e, n) {
            n(212);
            var r = n(16);
            t.exports = r.Array.isArray
        }, function (t, e, n) {
            n(7)({target: "Array", stat: !0}, {isArray: n(58)})
        }, function (t, e, n) {
            var r = n(23), o = n(24), i = n(105), a = n(124), s = n(214), c = n(17), u = TypeError,
                l = c("toPrimitive");
            t.exports = function (t, e) {
                if (!o(t) || i(t)) return t;
                var n, c = a(t, l);
                if (c) {
                    if (void 0 === e && (e = "default"), n = r(c, t, e), !o(n) || i(n)) return n;
                    throw u("Can't convert object to primitive value")
                }
                return void 0 === e && (e = "number"), s(t, e)
            }
        }, function (t, e, n) {
            var r = n(23), o = n(18), i = n(24), a = TypeError;
            t.exports = function (t, e) {
                var n, s;
                if ("string" === e && o(n = t.toString) && !i(s = r(n, t))) return s;
                if (o(n = t.valueOf) && !i(s = r(n, t))) return s;
                if ("string" !== e && o(n = t.toString) && !i(s = r(n, t))) return s;
                throw a("Can't convert object to primitive value")
            }
        }, function (t, e, n) {
            var r = n(15), o = Object.defineProperty;
            t.exports = function (t, e) {
                try {
                    o(r, t, {value: e, configurable: !0, writable: !0})
                } catch (n) {
                    r[t] = e
                }
                return e
            }
        }, function (t, e, n) {
            var r = n(107), o = n(81);
            t.exports = function (t, e) {
                var n = null == t ? null : void 0 !== r && o(t) || t["@@iterator"];
                if (null != n) {
                    var i, a, s, c, u = [], l = !0, f = !1;
                    try {
                        if (s = (n = n.call(t)).next, 0 === e) {
                            if (Object(n) !== n) return;
                            l = !1
                        } else for (; !(l = (i = s.call(n)).done) && (u.push(i.value), u.length !== e); l = !0) ;
                    } catch (t) {
                        f = !0, a = t
                    } finally {
                        try {
                            if (!l && null != n.return && (c = n.return(), Object(c) !== c)) return
                        } finally {
                            if (f) throw a
                        }
                    }
                    return u
                }
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            t.exports = n(218)
        }, function (t, e, n) {
            var r = n(219);
            n(248), n(249), n(250), n(251), n(252), n(253), n(254), n(255), t.exports = r
        }, function (t, e, n) {
            var r = n(147);
            t.exports = r
        }, function (t, e, n) {
            n(148), n(77), n(223), n(230), n(231), n(232), n(233), n(158), n(234), n(235), n(236), n(237), n(238), n(239), n(159), n(240), n(241), n(242), n(243), n(244);
            var r = n(16);
            t.exports = r.Symbol
        }, function (t, e) {
            var n = Math.ceil, r = Math.floor;
            t.exports = Math.trunc || function (t) {
                var e = +t;
                return (e > 0 ? r : n)(e)
            }
        }, function (t, e, n) {
            var r = n(58), o = n(109), i = n(24), a = n(17)("species"), s = Array;
            t.exports = function (t) {
                var e;
                return r(t) && (e = t.constructor, (o(e) && (e === s || r(e.prototype)) || i(e) && null === (e = e[a])) && (e = void 0)), void 0 === e ? s : e
            }
        }, function (t, e, n) {
            n(224), n(227), n(228), n(157), n(229)
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(15), i = n(23), a = n(13), s = n(39), c = n(22), u = n(73), l = n(12), f = n(25),
                h = n(21),
                p = n(35), d = n(46), v = n(104), g = n(37), y = n(56), x = n(63), C = n(89), m = n(112), w = n(154),
                k = n(113), b = n(85), S = n(31), P = n(151), A = n(102), E = n(44), R = n(87), I = n(111), T = n(90),
                D = n(106), L = n(17), F = n(114), O = n(20), U = n(155), N = n(49), M = n(60), B = n(91).forEach,
                _ = I("hidden"), z = M.set, j = M.getterFor("Symbol"), q = Object.prototype, W = o.Symbol,
                V = W && W.prototype, G = o.TypeError, H = o.QObject, Y = b.f, Q = S.f, K = w.f, X = A.f,
                $ = a([].push),
                J = R("symbols"), Z = R("op-symbols"), tt = R("wks"), et = !H || !H.prototype || !H.prototype.findChild,
                nt = c && l(function () {
                    return 7 != x(Q({}, "a", {
                        get: function () {
                            return Q(this, "a", {value: 7}).a
                        }
                    })).a
                }) ? function (t, e, n) {
                    var r = Y(q, e);
                    r && delete q[e], Q(t, e, n), r && t !== q && Q(q, e, r)
                } : Q, rt = function (t, e) {
                    var n = J[t] = x(V);
                    return z(n, {type: "Symbol", tag: t, description: e}), c || (n.description = e), n
                }, ot = function (t, e, n) {
                    t === q && ot(Z, e, n), p(t);
                    var r = v(e);
                    return p(n), f(J, r) ? (n.enumerable ? (f(t, _) && t[_][r] && (t[_][r] = !1), n = x(n, {enumerable: y(0, !1)})) : (f(t, _) || Q(t, _, y(1, {})), t[_][r] = !0), nt(t, r, n)) : Q(t, r, n)
                }, it = function (t, e) {
                    p(t);
                    var n = d(e), r = C(n).concat(ut(n));
                    return B(r, function (e) {
                        c && !i(at, n, e) || ot(t, e, n[e])
                    }), t
                }, at = function (t) {
                    var e = v(t), n = i(X, this, e);
                    return !(this === q && f(J, e) && !f(Z, e)) && (!(n || !f(this, e) || !f(J, e) || f(this, _) && this[_][e]) || n)
                }, st = function (t, e) {
                    var n = d(t), r = v(e);
                    if (n !== q || !f(J, r) || f(Z, r)) {
                        var o = Y(n, r);
                        return !o || !f(J, r) || f(n, _) && n[_][r] || (o.enumerable = !0), o
                    }
                }, ct = function (t) {
                    var e = K(d(t)), n = [];
                    return B(e, function (t) {
                        f(J, t) || f(T, t) || $(n, t)
                    }), n
                }, ut = function (t) {
                    var e = t === q, n = K(e ? Z : d(t)), r = [];
                    return B(n, function (t) {
                        !f(J, t) || e && !f(q, t) || $(r, J[t])
                    }), r
                };
            u || (E(V = (W = function () {
                if (h(V, this)) throw G("Symbol is not a constructor");
                var t = arguments.length && void 0 !== arguments[0] ? g(arguments[0]) : void 0, e = D(t),
                    n = function (t) {
                        this === q && i(n, Z, t), f(this, _) && f(this[_], e) && (this[_][e] = !1), nt(this, e, y(1, t))
                    };
                return c && et && nt(q, e, {configurable: !0, set: n}), rt(e, t)
            }).prototype, "toString", function () {
                return j(this).tag
            }), E(W, "withoutSetter", function (t) {
                return rt(D(t), t)
            }), A.f = at, S.f = ot, P.f = it, b.f = st, m.f = w.f = ct, k.f = ut, F.f = function (t) {
                return rt(L(t), t)
            }, c && (Q(V, "description", {
                configurable: !0, get: function () {
                    return j(this).description
                }
            }), s || E(q, "propertyIsEnumerable", at, {unsafe: !0}))), r({
                global: !0,
                constructor: !0,
                wrap: !0,
                forced: !u,
                sham: !u
            }, {Symbol: W}), B(C(tt), function (t) {
                O(t)
            }), r({target: "Symbol", stat: !0, forced: !u}, {
                useSetter: function () {
                    et = !0
                }, useSimple: function () {
                    et = !1
                }
            }), r({target: "Object", stat: !0, forced: !u, sham: !c}, {
                create: function (t, e) {
                    return void 0 === e ? x(t) : it(x(t), e)
                }, defineProperty: ot, defineProperties: it, getOwnPropertyDescriptor: st
            }), r({target: "Object", stat: !0, forced: !u}, {getOwnPropertyNames: ct}), U(), N(W, "Symbol"), T[_] = !0
        }, function (t, e, n) {
            "use strict";
            var r = n(128), o = n(59);
            t.exports = r ? {}.toString : function () {
                return "[object " + o(this) + "]"
            }
        }, function (t, e, n) {
            var r = n(15), o = n(18), i = r.WeakMap;
            t.exports = o(i) && /native code/.test(String(i))
        }, function (t, e, n) {
            var r = n(7), o = n(30), i = n(25), a = n(37), s = n(87), c = n(156), u = s("string-to-symbol-registry"),
                l = s("symbol-to-string-registry");
            r({target: "Symbol", stat: !0, forced: !c}, {
                for: function (t) {
                    var e = a(t);
                    if (i(u, e)) return u[e];
                    var n = o("Symbol")(e);
                    return u[e] = n, l[n] = e, n
                }
            })
        }, function (t, e, n) {
            var r = n(7), o = n(25), i = n(105), a = n(75), s = n(87), c = n(156), u = s("symbol-to-string-registry");
            r({target: "Symbol", stat: !0, forced: !c}, {
                keyFor: function (t) {
                    if (!i(t)) throw TypeError(a(t) + " is not a symbol");
                    if (o(u, t)) return u[t]
                }
            })
        }, function (t, e, n) {
            var r = n(7), o = n(73), i = n(12), a = n(113), s = n(34);
            r({
                target: "Object", stat: !0, forced: !o || i(function () {
                    a.f(1)
                })
            }, {
                getOwnPropertySymbols: function (t) {
                    var e = a.f;
                    return e ? e(s(t)) : []
                }
            })
        }, function (t, e, n) {
            n(20)("asyncIterator")
        }, function (t, e) {
        }, function (t, e, n) {
            n(20)("hasInstance")
        }, function (t, e, n) {
            n(20)("isConcatSpreadable")
        }, function (t, e, n) {
            n(20)("match")
        }, function (t, e, n) {
            n(20)("matchAll")
        }, function (t, e, n) {
            n(20)("replace")
        }, function (t, e, n) {
            n(20)("search")
        }, function (t, e, n) {
            n(20)("species")
        }, function (t, e, n) {
            n(20)("split")
        }, function (t, e, n) {
            var r = n(30), o = n(20), i = n(49);
            o("toStringTag"), i(r("Symbol"), "Symbol")
        }, function (t, e, n) {
            n(20)("unscopables")
        }, function (t, e, n) {
            var r = n(15);
            n(49)(r.JSON, "JSON", !0)
        }, function (t, e) {
        }, function (t, e) {
        }, function (t, e, n) {
            var r = n(22), o = n(25), i = Function.prototype, a = r && Object.getOwnPropertyDescriptor,
                s = o(i, "name"),
                c = s && "something" === function () {
                }.name, u = s && (!r || r && a(i, "name").configurable);
            t.exports = {EXISTS: s, PROPER: c, CONFIGURABLE: u}
        }, function (t, e, n) {
            var r = n(18), o = String, i = TypeError;
            t.exports = function (t) {
                if ("object" == typeof t || r(t)) return t;
                throw i("Can't set " + o(t) + " as a prototype")
            }
        }, function (t, e) {
            t.exports = {
                CSSRuleList: 0,
                CSSStyleDeclaration: 0,
                CSSValueList: 0,
                ClientRectList: 0,
                DOMRectList: 0,
                DOMStringList: 0,
                DOMTokenList: 1,
                DataTransferItemList: 0,
                FileList: 0,
                HTMLAllCollection: 0,
                HTMLCollection: 0,
                HTMLFormElement: 0,
                HTMLSelectElement: 0,
                MediaList: 0,
                MimeTypeArray: 0,
                NamedNodeMap: 0,
                NodeList: 1,
                PaintRequestList: 0,
                Plugin: 0,
                PluginArray: 0,
                SVGLengthList: 0,
                SVGNumberList: 0,
                SVGPathSegList: 0,
                SVGPointList: 0,
                SVGStringList: 0,
                SVGTransformList: 0,
                SourceBufferList: 0,
                StyleSheetList: 0,
                TextTrackCueList: 0,
                TextTrackList: 0,
                TouchList: 0
            }
        }, function (t, e, n) {
            n(20)("asyncDispose")
        }, function (t, e, n) {
            n(20)("dispose")
        }, function (t, e, n) {
            n(20)("matcher")
        }, function (t, e, n) {
            n(20)("metadataKey")
        }, function (t, e, n) {
            n(20)("observable")
        }, function (t, e, n) {
            n(20)("metadata")
        }, function (t, e, n) {
            n(20)("patternMatch")
        }, function (t, e, n) {
            n(20)("replaceAll")
        }, function (t, e, n) {
            t.exports = n(257)
        }, function (t, e, n) {
            var r = n(258);
            t.exports = r
        }, function (t, e, n) {
            var r = n(259);
            t.exports = r
        }, function (t, e, n) {
            var r = n(260);
            n(50), t.exports = r
        }, function (t, e, n) {
            n(51), n(64);
            var r = n(92);
            t.exports = r
        }, function (t, e, n) {
            t.exports = n(262)
        }, function (t, e, n) {
            var r = n(263);
            t.exports = r
        }, function (t, e, n) {
            var r = n(166);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(265), i = Array.prototype;
            t.exports = function (t) {
                var e = t.slice;
                return t === i || r(i, t) && e === i.slice ? o : e
            }
        }, function (t, e, n) {
            n(266);
            var r = n(28);
            t.exports = r("Array").slice
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(58), i = n(109), a = n(24), s = n(110), c = n(36), u = n(46), l = n(76), f = n(17),
                h = n(88), p = n(115), d = h("slice"), v = f("species"), g = Array, y = Math.max;
            r({target: "Array", proto: !0, forced: !d}, {
                slice: function (t, e) {
                    var n, r, f, h = u(this), d = c(h), x = s(t, d), C = s(void 0 === e ? d : e, d);
                    if (o(h) && (n = h.constructor, (i(n) && (n === g || o(n.prototype)) || a(n) && null === (n = n[v])) && (n = void 0), n === g || void 0 === n)) return p(h, x, C);
                    for (r = new (void 0 === n ? g : n)(y(C - x, 0)), f = 0; x < C; x++, f++) x in h && l(r, f, h[x]);
                    return r.length = f, r
                }
            })
        }, function (t, e, n) {
            t.exports = n(268)
        }, function (t, e, n) {
            var r = n(269);
            t.exports = r
        }, function (t, e, n) {
            var r = n(168);
            t.exports = r
        }, function (t, e, n) {
            n(64), n(271);
            var r = n(16);
            t.exports = r.Array.from
        }, function (t, e, n) {
            var r = n(7), o = n(169);
            r({
                target: "Array", stat: !0, forced: !n(172)(function (t) {
                    Array.from(t)
                })
            }, {from: o})
        }, function (t, e, n) {
            var r = n(35), o = n(170);
            t.exports = function (t, e, n, i) {
                try {
                    return i ? e(r(n)[0], n[1]) : e(n)
                } catch (e) {
                    o(t, "throw", e)
                }
            }
        }, function (t, e) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            t.exports = n(275)
        }, function (t, e, n) {
            var r = n(276);
            n(300), n(301), n(302), n(303), t.exports = r
        }, function (t, e, n) {
            var r = n(175);
            t.exports = r
        }, function (t, e, n) {
            n(176), n(51), n(77), n(285), n(184), n(185), n(299), n(64);
            var r = n(16);
            t.exports = r.Promise
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(21), i = n(116), a = n(117), s = n(279), c = n(63), u = n(48), l = n(56), f = n(281),
                h = n(282), p = n(61), d = n(283), v = n(17), g = n(284), y = v("toStringTag"), x = Error, C = [].push,
                m = function (t, e) {
                    var n, r = arguments.length > 2 ? arguments[2] : void 0, s = o(w, this);
                    a ? n = a(x(), s ? i(this) : w) : (n = s ? this : c(w), u(n, y, "Error")), void 0 !== e && u(n, "message", d(e)), g && u(n, "stack", f(n.stack, 1)), h(n, r);
                    var l = [];
                    return p(t, C, {that: l}), u(n, "errors", l), n
                };
            a ? a(m, x) : s(m, x, {name: !0});
            var w = m.prototype = c(x.prototype, {
                constructor: l(1, m),
                message: l(1, ""),
                name: l(1, "AggregateError")
            });
            r({global: !0, constructor: !0, arity: 2}, {AggregateError: m})
        }, function (t, e, n) {
            var r = n(25), o = n(280), i = n(85), a = n(31);
            t.exports = function (t, e, n) {
                for (var s = o(e), c = a.f, u = i.f, l = 0; l < s.length; l++) {
                    var f = s[l];
                    r(t, f) || n && r(n, f) || c(t, f, u(e, f))
                }
            }
        }, function (t, e, n) {
            var r = n(30), o = n(13), i = n(112), a = n(113), s = n(35), c = o([].concat);
            t.exports = r("Reflect", "ownKeys") || function (t) {
                var e = i.f(s(t)), n = a.f;
                return n ? c(e, n(t)) : e
            }
        }, function (t, e, n) {
            var r = n(13), o = Error, i = r("".replace), a = String(o("zxcasd").stack), s = /\n\s*at [^:]*:[^\n]*/,
                c = s.test(a);
            t.exports = function (t, e) {
                if (c && "string" == typeof t && !o.prepareStackTrace) for (; e--;) t = i(t, s, "");
                return t
            }
        }, function (t, e, n) {
            var r = n(24), o = n(48);
            t.exports = function (t, e) {
                r(e) && "cause" in e && o(t, "cause", e.cause)
            }
        }, function (t, e, n) {
            var r = n(37);
            t.exports = function (t, e) {
                return void 0 === t ? arguments.length < 2 ? "" : e : r(t)
            }
        }, function (t, e, n) {
            var r = n(12), o = n(56);
            t.exports = !r(function () {
                var t = Error("a");
                return !("stack" in t) || (Object.defineProperty(t, "stack", o(1, 7)), 7 !== t.stack)
            })
        }, function (t, e, n) {
            n(286), n(294), n(295), n(296), n(297), n(298)
        }, function (t, e, n) {
            "use strict";
            var r, o, i, a = n(7), s = n(39), c = n(93), u = n(15), l = n(23), f = n(44), h = n(117), p = n(49),
                d = n(177),
                v = n(38), g = n(18), y = n(24), x = n(94), C = n(178), m = n(179).set, w = n(288), k = n(291),
                b = n(79),
                S = n(292), P = n(60), A = n(80), E = n(95), R = n(62), I = E.CONSTRUCTOR, T = E.REJECTION_EVENT,
                D = E.SUBCLASSING, L = P.getterFor("Promise"), F = P.set, O = A && A.prototype, U = A, N = O,
                M = u.TypeError, B = u.document, _ = u.process, z = R.f, j = z,
                q = !!(B && B.createEvent && u.dispatchEvent), W = function (t) {
                    var e;
                    return !(!y(t) || !g(e = t.then)) && e
                }, V = function (t, e) {
                    var n, r, o, i = e.value, a = 1 == e.state, s = a ? t.ok : t.fail, c = t.resolve, u = t.reject,
                        f = t.domain;
                    try {
                        s ? (a || (2 === e.rejection && K(e), e.rejection = 1), !0 === s ? n = i : (f && f.enter(), n = s(i), f && (f.exit(), o = !0)), n === t.promise ? u(M("Promise-chain cycle")) : (r = W(n)) ? l(r, n, c, u) : c(n)) : u(i)
                    } catch (t) {
                        f && !o && f.exit(), u(t)
                    }
                }, G = function (t, e) {
                    t.notified || (t.notified = !0, w(function () {
                        for (var n, r = t.reactions; n = r.get();) V(n, t);
                        t.notified = !1, e && !t.rejection && Y(t)
                    }))
                }, H = function (t, e, n) {
                    var r, o;
                    q ? ((r = B.createEvent("Event")).promise = e, r.reason = n, r.initEvent(t, !1, !0), u.dispatchEvent(r)) : r = {
                        promise: e,
                        reason: n
                    }, !T && (o = u["on" + t]) ? o(r) : "unhandledrejection" === t && k("Unhandled promise rejection", n)
                }, Y = function (t) {
                    l(m, u, function () {
                        var e, n = t.facade, r = t.value;
                        if (Q(t) && (e = b(function () {
                            c ? _.emit("unhandledRejection", r, n) : H("unhandledrejection", n, r)
                        }), t.rejection = c || Q(t) ? 2 : 1, e.error)) throw e.value
                    })
                }, Q = function (t) {
                    return 1 !== t.rejection && !t.parent
                }, K = function (t) {
                    l(m, u, function () {
                        var e = t.facade;
                        c ? _.emit("rejectionHandled", e) : H("rejectionhandled", e, t.value)
                    })
                }, X = function (t, e, n) {
                    return function (r) {
                        t(e, r, n)
                    }
                }, $ = function (t, e, n) {
                    t.done || (t.done = !0, n && (t = n), t.value = e, t.state = 2, G(t, !0))
                }, J = function (t, e, n) {
                    if (!t.done) {
                        t.done = !0, n && (t = n);
                        try {
                            if (t.facade === e) throw M("Promise can't be resolved itself");
                            var r = W(e);
                            r ? w(function () {
                                var n = {done: !1};
                                try {
                                    l(r, e, X(J, n, t), X($, n, t))
                                } catch (e) {
                                    $(n, e, t)
                                }
                            }) : (t.value = e, t.state = 1, G(t, !1))
                        } catch (e) {
                            $({done: !1}, e, t)
                        }
                    }
                };
            if (I && (N = (U = function (t) {
                x(this, N), v(t), l(r, this);
                var e = L(this);
                try {
                    t(X(J, e), X($, e))
                } catch (t) {
                    $(e, t)
                }
            }).prototype, (r = function (t) {
                F(this, {
                    type: "Promise",
                    done: !1,
                    notified: !1,
                    parent: !1,
                    reactions: new S,
                    rejection: !1,
                    state: 0,
                    value: void 0
                })
            }).prototype = f(N, "then", function (t, e) {
                var n = L(this), r = z(C(this, U));
                return n.parent = !0, r.ok = !g(t) || t, r.fail = g(e) && e, r.domain = c ? _.domain : void 0, 0 == n.state ? n.reactions.add(r) : w(function () {
                    V(r, n)
                }), r.promise
            }), o = function () {
                var t = new r, e = L(t);
                this.promise = t, this.resolve = X(J, e), this.reject = X($, e)
            }, R.f = z = function (t) {
                return t === U || void 0 === t ? new o(t) : j(t)
            }, !s && g(A) && O !== Object.prototype)) {
                i = O.then, D || f(O, "then", function (t, e) {
                    var n = this;
                    return new U(function (t, e) {
                        l(i, n, t, e)
                    }).then(t, e)
                }, {unsafe: !0});
                try {
                    delete O.constructor
                } catch (t) {
                }
                h && h(O, N)
            }
            a({global: !0, constructor: !0, wrap: !0, forced: I}, {Promise: U}), p(U, "Promise", !1, !0), d("Promise")
        }, function (t, e, n) {
            var r = n(109), o = n(75), i = TypeError;
            t.exports = function (t) {
                if (r(t)) return t;
                throw i(o(t) + " is not a constructor")
            }
        }, function (t, e, n) {
            var r, o, i, a, s, c, u, l, f = n(15), h = n(43), p = n(85).f, d = n(179).set, v = n(180), g = n(289),
                y = n(290), x = n(93), C = f.MutationObserver || f.WebKitMutationObserver, m = f.document,
                w = f.process,
                k = f.Promise, b = p(f, "queueMicrotask"), S = b && b.value;
            S || (r = function () {
                var t, e;
                for (x && (t = w.domain) && t.exit(); o;) {
                    e = o.fn, o = o.next;
                    try {
                        e()
                    } catch (t) {
                        throw o ? a() : i = void 0, t
                    }
                }
                i = void 0, t && t.enter()
            }, v || x || y || !C || !m ? !g && k && k.resolve ? ((u = k.resolve(void 0)).constructor = k, l = h(u.then, u), a = function () {
                l(r)
            }) : x ? a = function () {
                w.nextTick(r)
            } : (d = h(d, f), a = function () {
                d(r)
            }) : (s = !0, c = m.createTextNode(""), new C(r).observe(c, {characterData: !0}), a = function () {
                c.data = s = !s
            })), t.exports = S || function (t) {
                var e = {fn: t, next: void 0};
                i && (i.next = e), o || (o = e, a()), i = e
            }
        }, function (t, e, n) {
            var r = n(57), o = n(15);
            t.exports = /ipad|iphone|ipod/i.test(r) && void 0 !== o.Pebble
        }, function (t, e, n) {
            var r = n(57);
            t.exports = /web0s(?!.*chrome)/i.test(r)
        }, function (t, e, n) {
            var r = n(15);
            t.exports = function (t, e) {
                var n = r.console;
                n && n.error && (1 == arguments.length ? n.error(t) : n.error(t, e))
            }
        }, function (t, e) {
            var n = function () {
                this.head = null, this.tail = null
            };
            n.prototype = {
                add: function (t) {
                    var e = {item: t, next: null};
                    this.head ? this.tail.next = e : this.head = e, this.tail = e
                }, get: function () {
                    var t = this.head;
                    if (t) return this.head = t.next, this.tail === t && (this.tail = null), t.item
                }
            }, t.exports = n
        }, function (t, e, n) {
            var r = n(181), o = n(93);
            t.exports = !r && !o && "object" == typeof window && "object" == typeof document
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(23), i = n(38), a = n(62), s = n(79), c = n(61);
            r({target: "Promise", stat: !0, forced: n(182)}, {
                all: function (t) {
                    var e = this, n = a.f(e), r = n.resolve, u = n.reject, l = s(function () {
                        var n = i(e.resolve), a = [], s = 0, l = 1;
                        c(t, function (t) {
                            var i = s++, c = !1;
                            l++, o(n, e, t).then(function (t) {
                                c || (c = !0, a[i] = t, --l || r(a))
                            }, u)
                        }), --l || r(a)
                    });
                    return l.error && u(l.value), n.promise
                }
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(39), i = n(95).CONSTRUCTOR, a = n(80), s = n(30), c = n(18), u = n(44),
                l = a && a.prototype;
            if (r({target: "Promise", proto: !0, forced: i, real: !0}, {
                catch: function (t) {
                    return this.then(void 0, t)
                }
            }), !o && c(a)) {
                var f = s("Promise").prototype.catch;
                l.catch !== f && u(l, "catch", f, {unsafe: !0})
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(23), i = n(38), a = n(62), s = n(79), c = n(61);
            r({target: "Promise", stat: !0, forced: n(182)}, {
                race: function (t) {
                    var e = this, n = a.f(e), r = n.reject, u = s(function () {
                        var a = i(e.resolve);
                        c(t, function (t) {
                            o(a, e, t).then(n.resolve, r)
                        })
                    });
                    return u.error && r(u.value), n.promise
                }
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(23), i = n(62);
            r({target: "Promise", stat: !0, forced: n(95).CONSTRUCTOR}, {
                reject: function (t) {
                    var e = i.f(this);
                    return o(e.reject, void 0, t), e.promise
                }
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(30), i = n(39), a = n(80), s = n(95).CONSTRUCTOR, c = n(183), u = o("Promise"),
                l = i && !s;
            r({target: "Promise", stat: !0, forced: i || s}, {
                resolve: function (t) {
                    return c(l && this === u ? a : this, t)
                }
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(39), i = n(80), a = n(12), s = n(30), c = n(18), u = n(178), l = n(183), f = n(44),
                h = i && i.prototype;
            if (r({
                target: "Promise", proto: !0, real: !0, forced: !!i && a(function () {
                    h.finally.call({
                        then: function () {
                        }
                    }, function () {
                    })
                })
            }, {
                finally: function (t) {
                    var e = u(this, s("Promise")), n = c(t);
                    return this.then(n ? function (n) {
                        return l(e, t()).then(function () {
                            return n
                        })
                    } : t, n ? function (n) {
                        return l(e, t()).then(function () {
                            throw n
                        })
                    } : t)
                }
            }), !o && c(i)) {
                var p = s("Promise").prototype.finally;
                h.finally !== p && f(h, "finally", p, {unsafe: !0})
            }
        }, function (t, e, n) {
            n(176)
        }, function (t, e, n) {
            n(184)
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(62), i = n(79);
            r({target: "Promise", stat: !0, forced: !0}, {
                try: function (t) {
                    var e = o.f(this), n = i(t);
                    return (n.error ? e.reject : e.resolve)(n.value), e.promise
                }
            })
        }, function (t, e, n) {
            n(185)
        }, function (t, e, n) {
            var r = n(139), o = n(173);
            t.exports = function (t) {
                if (r(t)) return o(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            var r = n(107), o = n(81), i = n(167);
            t.exports = function (t) {
                if (void 0 !== r && null != o(t) || null != t["@@iterator"]) return i(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e) {
            t.exports = function () {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            t.exports = n(308)
        }, function (t, e, n) {
            var r = n(309);
            t.exports = r
        }, function (t, e, n) {
            var r = n(310);
            t.exports = r
        }, function (t, e, n) {
            var r = n(311);
            t.exports = r
        }, function (t, e, n) {
            n(312);
            var r = n(16).Object, o = t.exports = function (t, e, n) {
                return r.defineProperty(t, e, n)
            };
            r.defineProperty.sham && (o.sham = !0)
        }, function (t, e, n) {
            var r = n(7), o = n(22), i = n(31).f;
            r({target: "Object", stat: !0, forced: Object.defineProperty !== i, sham: !o}, {defineProperty: i})
        }, function (t, e, n) {
            t.exports = n(314)
        }, function (t, e, n) {
            t.exports = n(315)
        }, function (t, e, n) {
            var r = n(316);
            t.exports = r
        }, function (t, e, n) {
            var r = n(317);
            t.exports = r
        }, function (t, e, n) {
            var r = n(318);
            n(50), t.exports = r
        }, function (t, e, n) {
            n(51), n(77), n(64), n(158);
            var r = n(114);
            t.exports = r.f("iterator")
        }, function (t, e, n) {
            var r = n(320), o = n(33).default;
            t.exports = function (t, e) {
                if ("object" !== o(t) || null === t) return t;
                var n = t[r];
                if (void 0 !== n) {
                    var i = n.call(t, e || "default");
                    if ("object" !== o(i)) return i;
                    throw new TypeError("@@toPrimitive must return a primitive value.")
                }
                return ("string" === e ? String : Number)(t)
            }, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            t.exports = n(321)
        }, function (t, e, n) {
            t.exports = n(322)
        }, function (t, e, n) {
            var r = n(323);
            t.exports = r
        }, function (t, e, n) {
            var r = n(324);
            t.exports = r
        }, function (t, e, n) {
            var r = n(325);
            t.exports = r
        }, function (t, e, n) {
            n(326), n(159);
            var r = n(114);
            t.exports = r.f("toPrimitive")
        }, function (t, e) {
        }, function (t, e, n) {
            var r = n(33).default, o = n(136), i = n(107), a = n(328), s = n(335), c = n(342), u = n(350), l = n(174),
                f = n(357), h = n(165);

            function p() {
                "use strict";
                t.exports = p = function () {
                    return e
                }, t.exports.__esModule = !0, t.exports.default = t.exports;
                var e = {}, n = Object.prototype, d = n.hasOwnProperty, v = o || function (t, e, n) {
                        t[e] = n.value
                    }, g = "function" == typeof i ? i : {}, y = g.iterator || "@@iterator",
                    x = g.asyncIterator || "@@asyncIterator", C = g.toStringTag || "@@toStringTag";

                function m(t, e, n) {
                    return o(t, e, {value: n, enumerable: !0, configurable: !0, writable: !0}), t[e]
                }

                try {
                    m({}, "")
                } catch (t) {
                    m = function (t, e, n) {
                        return t[e] = n
                    }
                }

                function w(t, e, n, r) {
                    var o = e && e.prototype instanceof S ? e : S, i = a(o.prototype), s = new N(r || []);
                    return v(i, "_invoke", {value: L(t, n, s)}), i
                }

                function k(t, e, n) {
                    try {
                        return {type: "normal", arg: t.call(e, n)}
                    } catch (t) {
                        return {type: "throw", arg: t}
                    }
                }

                e.wrap = w;
                var b = {};

                function S() {
                }

                function P() {
                }

                function A() {
                }

                var E = {};
                m(E, y, function () {
                    return this
                });
                var R = s && s(s(M([])));
                R && R !== n && d.call(R, y) && (E = R);
                var I = A.prototype = S.prototype = a(E);

                function T(t) {
                    var e;
                    c(e = ["next", "throw", "return"]).call(e, function (e) {
                        m(t, e, function (t) {
                            return this._invoke(e, t)
                        })
                    })
                }

                function D(t, e) {
                    var n;
                    v(this, "_invoke", {
                        value: function (o, i) {
                            function a() {
                                return new e(function (n, a) {
                                    !function n(o, i, a, s) {
                                        var c = k(t[o], t, i);
                                        if ("throw" !== c.type) {
                                            var u = c.arg, l = u.value;
                                            return l && "object" == r(l) && d.call(l, "__await") ? e.resolve(l.__await).then(function (t) {
                                                n("next", t, a, s)
                                            }, function (t) {
                                                n("throw", t, a, s)
                                            }) : e.resolve(l).then(function (t) {
                                                u.value = t, a(u)
                                            }, function (t) {
                                                return n("throw", t, a, s)
                                            })
                                        }
                                        s(c.arg)
                                    }(o, i, n, a)
                                })
                            }

                            return n = n ? n.then(a, a) : a()
                        }
                    })
                }

                function L(t, e, n) {
                    var r = "suspendedStart";
                    return function (o, i) {
                        if ("executing" === r) throw new Error("Generator is already running");
                        if ("completed" === r) {
                            if ("throw" === o) throw i;
                            return {value: void 0, done: !0}
                        }
                        for (n.method = o, n.arg = i; ;) {
                            var a = n.delegate;
                            if (a) {
                                var s = F(a, n);
                                if (s) {
                                    if (s === b) continue;
                                    return s
                                }
                            }
                            if ("next" === n.method) n.sent = n._sent = n.arg; else if ("throw" === n.method) {
                                if ("suspendedStart" === r) throw r = "completed", n.arg;
                                n.dispatchException(n.arg)
                            } else "return" === n.method && n.abrupt("return", n.arg);
                            r = "executing";
                            var c = k(t, e, n);
                            if ("normal" === c.type) {
                                if (r = n.done ? "completed" : "suspendedYield", c.arg === b) continue;
                                return {value: c.arg, done: n.done}
                            }
                            "throw" === c.type && (r = "completed", n.method = "throw", n.arg = c.arg)
                        }
                    }
                }

                function F(t, e) {
                    var n = e.method, r = t.iterator[n];
                    if (void 0 === r) return e.delegate = null, "throw" === n && t.iterator.return && (e.method = "return", e.arg = void 0, F(t, e), "throw" === e.method) || "return" !== n && (e.method = "throw", e.arg = new TypeError("The iterator does not provide a '" + n + "' method")), b;
                    var o = k(r, t.iterator, e.arg);
                    if ("throw" === o.type) return e.method = "throw", e.arg = o.arg, e.delegate = null, b;
                    var i = o.arg;
                    return i ? i.done ? (e[t.resultName] = i.value, e.next = t.nextLoc, "return" !== e.method && (e.method = "next", e.arg = void 0), e.delegate = null, b) : i : (e.method = "throw", e.arg = new TypeError("iterator result is not an object"), e.delegate = null, b)
                }

                function O(t) {
                    var e = {tryLoc: t[0]};
                    1 in t && (e.catchLoc = t[1]), 2 in t && (e.finallyLoc = t[2], e.afterLoc = t[3]), this.tryEntries.push(e)
                }

                function U(t) {
                    var e = t.completion || {};
                    e.type = "normal", delete e.arg, t.completion = e
                }

                function N(t) {
                    this.tryEntries = [{tryLoc: "root"}], c(t).call(t, O, this), this.reset(!0)
                }

                function M(t) {
                    if (t) {
                        var e = t[y];
                        if (e) return e.call(t);
                        if ("function" == typeof t.next) return t;
                        if (!isNaN(t.length)) {
                            var n = -1, r = function e() {
                                for (; ++n < t.length;) if (d.call(t, n)) return e.value = t[n], e.done = !1, e;
                                return e.value = void 0, e.done = !0, e
                            };
                            return r.next = r
                        }
                    }
                    return {next: B}
                }

                function B() {
                    return {value: void 0, done: !0}
                }

                return P.prototype = A, v(I, "constructor", {value: A, configurable: !0}), v(A, "constructor", {
                    value: P,
                    configurable: !0
                }), P.displayName = m(A, C, "GeneratorFunction"), e.isGeneratorFunction = function (t) {
                    var e = "function" == typeof t && t.constructor;
                    return !!e && (e === P || "GeneratorFunction" === (e.displayName || e.name))
                }, e.mark = function (t) {
                    return u ? u(t, A) : (t.__proto__ = A, m(t, C, "GeneratorFunction")), t.prototype = a(I), t
                }, e.awrap = function (t) {
                    return {__await: t}
                }, T(D.prototype), m(D.prototype, x, function () {
                    return this
                }), e.AsyncIterator = D, e.async = function (t, n, r, o, i) {
                    void 0 === i && (i = l);
                    var a = new D(w(t, n, r, o), i);
                    return e.isGeneratorFunction(n) ? a : a.next().then(function (t) {
                        return t.done ? t.value : a.next()
                    })
                }, T(I), m(I, C, "Generator"), m(I, y, function () {
                    return this
                }), m(I, "toString", function () {
                    return "[object Generator]"
                }), e.keys = function (t) {
                    var e = Object(t), n = [];
                    for (var r in e) n.push(r);
                    return f(n).call(n), function t() {
                        for (; n.length;) {
                            var r = n.pop();
                            if (r in e) return t.value = r, t.done = !1, t
                        }
                        return t.done = !0, t
                    }
                }, e.values = M, N.prototype = {
                    constructor: N, reset: function (t) {
                        var e;
                        if (this.prev = 0, this.next = 0, this.sent = this._sent = void 0, this.done = !1, this.delegate = null, this.method = "next", this.arg = void 0, c(e = this.tryEntries).call(e, U), !t) for (var n in this) "t" === n.charAt(0) && d.call(this, n) && !isNaN(+h(n).call(n, 1)) && (this[n] = void 0)
                    }, stop: function () {
                        this.done = !0;
                        var t = this.tryEntries[0].completion;
                        if ("throw" === t.type) throw t.arg;
                        return this.rval
                    }, dispatchException: function (t) {
                        if (this.done) throw t;
                        var e = this;

                        function n(n, r) {
                            return i.type = "throw", i.arg = t, e.next = n, r && (e.method = "next", e.arg = void 0), !!r
                        }

                        for (var r = this.tryEntries.length - 1; r >= 0; --r) {
                            var o = this.tryEntries[r], i = o.completion;
                            if ("root" === o.tryLoc) return n("end");
                            if (o.tryLoc <= this.prev) {
                                var a = d.call(o, "catchLoc"), s = d.call(o, "finallyLoc");
                                if (a && s) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0);
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                } else if (a) {
                                    if (this.prev < o.catchLoc) return n(o.catchLoc, !0)
                                } else {
                                    if (!s) throw new Error("try statement without catch or finally");
                                    if (this.prev < o.finallyLoc) return n(o.finallyLoc)
                                }
                            }
                        }
                    }, abrupt: function (t, e) {
                        for (var n = this.tryEntries.length - 1; n >= 0; --n) {
                            var r = this.tryEntries[n];
                            if (r.tryLoc <= this.prev && d.call(r, "finallyLoc") && this.prev < r.finallyLoc) {
                                var o = r;
                                break
                            }
                        }
                        o && ("break" === t || "continue" === t) && o.tryLoc <= e && e <= o.finallyLoc && (o = null);
                        var i = o ? o.completion : {};
                        return i.type = t, i.arg = e, o ? (this.method = "next", this.next = o.finallyLoc, b) : this.complete(i)
                    }, complete: function (t, e) {
                        if ("throw" === t.type) throw t.arg;
                        return "break" === t.type || "continue" === t.type ? this.next = t.arg : "return" === t.type ? (this.rval = this.arg = t.arg, this.method = "return", this.next = "end") : "normal" === t.type && e && (this.next = e), b
                    }, finish: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.finallyLoc === t) return this.complete(n.completion, n.afterLoc), U(n), b
                        }
                    }, catch: function (t) {
                        for (var e = this.tryEntries.length - 1; e >= 0; --e) {
                            var n = this.tryEntries[e];
                            if (n.tryLoc === t) {
                                var r = n.completion;
                                if ("throw" === r.type) {
                                    var o = r.arg;
                                    U(n)
                                }
                                return o
                            }
                        }
                        throw new Error("illegal catch attempt")
                    }, delegateYield: function (t, e, n) {
                        return this.delegate = {
                            iterator: M(t),
                            resultName: e,
                            nextLoc: n
                        }, "next" === this.method && (this.arg = void 0), b
                    }
                }, e
            }

            t.exports = p, t.exports.__esModule = !0, t.exports.default = t.exports
        }, function (t, e, n) {
            t.exports = n(329)
        }, function (t, e, n) {
            t.exports = n(330)
        }, function (t, e, n) {
            var r = n(331);
            t.exports = r
        }, function (t, e, n) {
            var r = n(332);
            t.exports = r
        }, function (t, e, n) {
            var r = n(333);
            t.exports = r
        }, function (t, e, n) {
            n(334);
            var r = n(16).Object;
            t.exports = function (t, e) {
                return r.create(t, e)
            }
        }, function (t, e, n) {
            n(7)({target: "Object", stat: !0, sham: !n(22)}, {create: n(63)})
        }, function (t, e, n) {
            t.exports = n(336)
        }, function (t, e, n) {
            t.exports = n(337)
        }, function (t, e, n) {
            var r = n(338);
            t.exports = r
        }, function (t, e, n) {
            var r = n(339);
            t.exports = r
        }, function (t, e, n) {
            var r = n(340);
            t.exports = r
        }, function (t, e, n) {
            n(341);
            var r = n(16);
            t.exports = r.Object.getPrototypeOf
        }, function (t, e, n) {
            var r = n(7), o = n(12), i = n(34), a = n(116), s = n(162);
            r({
                target: "Object", stat: !0, forced: o(function () {
                    a(1)
                }), sham: !s
            }, {
                getPrototypeOf: function (t) {
                    return a(i(t))
                }
            })
        }, function (t, e, n) {
            t.exports = n(343)
        }, function (t, e, n) {
            t.exports = n(344)
        }, function (t, e, n) {
            var r = n(345);
            t.exports = r
        }, function (t, e, n) {
            var r = n(187);
            t.exports = r
        }, function (t, e, n) {
            var r = n(347);
            t.exports = r
        }, function (t, e, n) {
            n(348);
            var r = n(28);
            t.exports = r("Array").forEach
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(349);
            r({target: "Array", proto: !0, forced: [].forEach != o}, {forEach: o})
        }, function (t, e, n) {
            "use strict";
            var r = n(91).forEach, o = n(98)("forEach");
            t.exports = o ? [].forEach : function (t) {
                return r(this, t, arguments.length > 1 ? arguments[1] : void 0)
            }
        }, function (t, e, n) {
            t.exports = n(351)
        }, function (t, e, n) {
            t.exports = n(352)
        }, function (t, e, n) {
            var r = n(353);
            t.exports = r
        }, function (t, e, n) {
            var r = n(354);
            t.exports = r
        }, function (t, e, n) {
            var r = n(355);
            t.exports = r
        }, function (t, e, n) {
            n(356);
            var r = n(16);
            t.exports = r.Object.setPrototypeOf
        }, function (t, e, n) {
            n(7)({target: "Object", stat: !0}, {setPrototypeOf: n(117)})
        }, function (t, e, n) {
            t.exports = n(358)
        }, function (t, e, n) {
            t.exports = n(359)
        }, function (t, e, n) {
            var r = n(360);
            t.exports = r
        }, function (t, e, n) {
            var r = n(361);
            t.exports = r
        }, function (t, e, n) {
            var r = n(362);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(363), i = Array.prototype;
            t.exports = function (t) {
                var e = t.reverse;
                return t === i || r(i, t) && e === i.reverse ? o : e
            }
        }, function (t, e, n) {
            n(364);
            var r = n(28);
            t.exports = r("Array").reverse
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(13), i = n(58), a = o([].reverse), s = [1, 2];
            r({target: "Array", proto: !0, forced: String(s) === String(s.reverse())}, {
                reverse: function () {
                    return i(this) && (this.length = this.length), a(this)
                }
            })
        }, function (t, e, n) {
            var r = n(366);
            n(50), t.exports = r
        }, function (t, e, n) {
            n(51), n(367), n(77), n(64);
            var r = n(16);
            t.exports = r.Map
        }, function (t, e, n) {
            n(368)
        }, function (t, e, n) {
            "use strict";
            n(188)("Map", function (t) {
                return function () {
                    return t(this, arguments.length ? arguments[0] : void 0)
                }
            }, n(190))
        }, function (t, e, n) {
            var r = n(12), o = n(24), i = n(55), a = n(370), s = Object.isExtensible, c = r(function () {
                s(1)
            });
            t.exports = c || a ? function (t) {
                return !!o(t) && (!a || "ArrayBuffer" != i(t)) && (!s || s(t))
            } : s
        }, function (t, e, n) {
            var r = n(12);
            t.exports = r(function () {
                if ("function" == typeof ArrayBuffer) {
                    var t = new ArrayBuffer(8);
                    Object.isExtensible(t) && Object.defineProperty(t, "a", {value: 8})
                }
            })
        }, function (t, e, n) {
            var r = n(12);
            t.exports = !r(function () {
                return Object.isExtensible(Object.preventExtensions({}))
            })
        }, function (t, e, n) {
            var r = n(373);
            t.exports = r
        }, function (t, e, n) {
            n(157);
            var r = n(16), o = n(84);
            r.JSON || (r.JSON = {stringify: JSON.stringify}), t.exports = function (t, e, n) {
                return o(r.JSON.stringify, null, arguments)
            }
        }, function (t, e, n) {
            n(192);
            var r = n(16);
            t.exports = r.setTimeout
        }, function (t, e, n) {
            var r = n(7), o = n(15), i = n(193).setInterval;
            r({global: !0, bind: !0, forced: o.setInterval !== i}, {setInterval: i})
        }, function (t, e, n) {
            var r = n(7), o = n(15), i = n(193).setTimeout;
            r({global: !0, bind: !0, forced: o.setTimeout !== i}, {setTimeout: i})
        }, function (t, e, n) {
            var r = n(378);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(379), i = Array.prototype;
            t.exports = function (t) {
                var e = t.indexOf;
                return t === i || r(i, t) && e === i.indexOf ? o : e
            }
        }, function (t, e, n) {
            n(380);
            var r = n(28);
            t.exports = r("Array").indexOf
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(101), i = n(129).indexOf, a = n(98), s = o([].indexOf),
                c = !!s && 1 / s([1], 1, -0) < 0,
                u = a("indexOf");
            r({target: "Array", proto: !0, forced: c || !u}, {
                indexOf: function (t) {
                    var e = arguments.length > 1 ? arguments[1] : void 0;
                    return c ? s(this, t, e) || 0 : i(this, t, e)
                }
            })
        }, function (t, e, n) {
            var r = n(382);
            t.exports = r
        }, function (t, e, n) {
            n(383);
            var r = n(16);
            t.exports = r.Number.parseInt
        }, function (t, e, n) {
            var r = n(7), o = n(194);
            r({target: "Number", stat: !0, forced: Number.parseInt != o}, {parseInt: o})
        }, function (t, e, n) {
            var r = n(385);
            t.exports = r
        }, function (t, e, n) {
            n(386);
            var r = n(16);
            t.exports = r.Object.entries
        }, function (t, e, n) {
            var r = n(7), o = n(387).entries;
            r({target: "Object", stat: !0}, {
                entries: function (t) {
                    return o(t)
                }
            })
        }, function (t, e, n) {
            var r = n(22), o = n(13), i = n(89), a = n(46), s = o(n(102).f), c = o([].push), u = function (t) {
                return function (e) {
                    for (var n, o = a(e), u = i(o), l = u.length, f = 0, h = []; l > f;) n = u[f++], r && !s(o, n) || c(h, t ? [n, o[n]] : o[n]);
                    return h
                }
            };
            t.exports = {entries: u(!0), values: u(!1)}
        }, function (t, e, n) {
            var r = n(389);
            n(50), t.exports = r
        }, function (t, e, n) {
            n(51), n(77), n(390), n(64);
            var r = n(16);
            t.exports = r.Set
        }, function (t, e, n) {
            n(391)
        }, function (t, e, n) {
            "use strict";
            n(188)("Set", function (t) {
                return function () {
                    return t(this, arguments.length ? arguments[0] : void 0)
                }
            }, n(190))
        }, function (t, e, n) {
            n(192);
            var r = n(16);
            t.exports = r.setInterval
        }, function (t, e, n) {
            var r = n(394);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(395), i = Array.prototype;
            t.exports = function (t) {
                var e = t.sort;
                return t === i || r(i, t) && e === i.sort ? o : e
            }
        }, function (t, e, n) {
            n(396);
            var r = n(28);
            t.exports = r("Array").sort
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(13), i = n(38), a = n(34), s = n(36), c = n(195), u = n(37), l = n(12), f = n(196),
                h = n(98), p = n(397), d = n(398), v = n(74), g = n(399), y = [], x = o(y.sort), C = o(y.push),
                m = l(function () {
                    y.sort(void 0)
                }), w = l(function () {
                    y.sort(null)
                }), k = h("sort"), b = !l(function () {
                    if (v) return v < 70;
                    if (!(p && p > 3)) {
                        if (d) return !0;
                        if (g) return g < 603;
                        var t, e, n, r, o = "";
                        for (t = 65; t < 76; t++) {
                            switch (e = String.fromCharCode(t), t) {
                                case 66:
                                case 69:
                                case 70:
                                case 72:
                                    n = 3;
                                    break;
                                case 68:
                                case 71:
                                    n = 4;
                                    break;
                                default:
                                    n = 2
                            }
                            for (r = 0; r < 47; r++) y.push({k: e + r, v: n})
                        }
                        for (y.sort(function (t, e) {
                            return e.v - t.v
                        }), r = 0; r < y.length; r++) e = y[r].k.charAt(0), o.charAt(o.length - 1) !== e && (o += e);
                        return "DGBEFHACIJK" !== o
                    }
                });
            r({target: "Array", proto: !0, forced: m || !w || !k || !b}, {
                sort: function (t) {
                    void 0 !== t && i(t);
                    var e = a(this);
                    if (b) return void 0 === t ? x(e) : x(e, t);
                    var n, r, o = [], l = s(e);
                    for (r = 0; r < l; r++) r in e && C(o, e[r]);
                    for (f(o, function (t) {
                        return function (e, n) {
                            return void 0 === n ? -1 : void 0 === e ? 1 : void 0 !== t ? +t(e, n) || 0 : u(e) > u(n) ? 1 : -1
                        }
                    }(t)), n = s(o), r = 0; r < n;) e[r] = o[r++];
                    for (; r < l;) c(e, r++);
                    return e
                }
            })
        }, function (t, e, n) {
            var r = n(57).match(/firefox\/(\d+)/i);
            t.exports = !!r && +r[1]
        }, function (t, e, n) {
            var r = n(57);
            t.exports = /MSIE|Trident/.test(r)
        }, function (t, e, n) {
            var r = n(57).match(/AppleWebKit\/(\d+)\./);
            t.exports = !!r && +r[1]
        }, function (t, e, n) {
            var r = n(401);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(402), i = n(404), a = Array.prototype, s = String.prototype;
            t.exports = function (t) {
                var e = t.includes;
                return t === a || r(a, t) && e === a.includes ? o : "string" == typeof t || t === s || r(s, t) && e === s.includes ? i : e
            }
        }, function (t, e, n) {
            n(403);
            var r = n(28);
            t.exports = r("Array").includes
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(129).includes, i = n(12), a = n(132);
            r({
                target: "Array", proto: !0, forced: i(function () {
                    return !Array(1).includes()
                })
            }, {
                includes: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            }), a("includes")
        }, function (t, e, n) {
            n(405);
            var r = n(28);
            t.exports = r("String").includes
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(13), i = n(197), a = n(72), s = n(37), c = n(198), u = o("".indexOf);
            r({target: "String", proto: !0, forced: !c("includes")}, {
                includes: function (t) {
                    return !!~u(s(a(this)), s(i(t)), arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, function (t, e, n) {
            var r = n(24), o = n(55), i = n(17)("match");
            t.exports = function (t) {
                var e;
                return r(t) && (void 0 !== (e = t[i]) ? !!e : "RegExp" == o(t))
            }
        }, function (t, e, n) {
            var r = n(408);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(409), i = String.prototype;
            t.exports = function (t) {
                var e = t.startsWith;
                return "string" == typeof t || t === i || r(i, t) && e === i.startsWith ? o : e
            }
        }, function (t, e, n) {
            n(410);
            var r = n(28);
            t.exports = r("String").startsWith
        }, function (t, e, n) {
            "use strict";
            var r, o = n(7), i = n(101), a = n(85).f, s = n(149), c = n(37), u = n(197), l = n(72), f = n(198),
                h = n(39),
                p = i("".startsWith), d = i("".slice), v = Math.min, g = f("startsWith");
            o({
                target: "String",
                proto: !0,
                forced: !(!h && !g && (r = a(String.prototype, "startsWith"), r && !r.writable) || g)
            }, {
                startsWith: function (t) {
                    var e = c(l(this));
                    u(t);
                    var n = s(v(arguments.length > 1 ? arguments[1] : void 0, e.length)), r = c(t);
                    return p ? p(e, r, n) : d(e, n, n + r.length) === r
                }
            })
        }, function (t, e, n) {
            var r = n(412);
            t.exports = r
        }, function (t, e, n) {
            n(413);
            var r = n(16);
            t.exports = r.Object.keys
        }, function (t, e, n) {
            var r = n(7), o = n(34), i = n(89);
            r({
                target: "Object", stat: !0, forced: n(12)(function () {
                    i(1)
                })
            }, {
                keys: function (t) {
                    return i(o(t))
                }
            })
        }, function (t, e, n) {
            var r = n(415);
            t.exports = r
        }, function (t, e, n) {
            n(416);
            var r = n(16);
            t.exports = r.Date.now
        }, function (t, e, n) {
            var r = n(7), o = n(13), i = Date, a = o(i.prototype.getTime);
            r({target: "Date", stat: !0}, {
                now: function () {
                    return a(new i)
                }
            })
        }, function (t, e, n) {
            "use strict";
            (function (t) {
                var r = n(418), o = n(419), i = n(420);

                function a() {
                    return c.TYPED_ARRAY_SUPPORT ? 2147483647 : 1073741823
                }

                function s(t, e) {
                    if (a() < e) throw new RangeError("Invalid typed array length");
                    return c.TYPED_ARRAY_SUPPORT ? (t = new Uint8Array(e)).__proto__ = c.prototype : (null === t && (t = new c(e)), t.length = e), t
                }

                function c(t, e, n) {
                    if (!(c.TYPED_ARRAY_SUPPORT || this instanceof c)) return new c(t, e, n);
                    if ("number" == typeof t) {
                        if ("string" == typeof e) throw new Error("If encoding is specified then the first argument must be a string");
                        return f(this, t)
                    }
                    return u(this, t, e, n)
                }

                function u(t, e, n, r) {
                    if ("number" == typeof e) throw new TypeError('"value" argument must not be a number');
                    return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer ? function (t, e, n, r) {
                        if (e.byteLength, n < 0 || e.byteLength < n) throw new RangeError("'offset' is out of bounds");
                        if (e.byteLength < n + (r || 0)) throw new RangeError("'length' is out of bounds");
                        return e = void 0 === n && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, n) : new Uint8Array(e, n, r), c.TYPED_ARRAY_SUPPORT ? (t = e).__proto__ = c.prototype : t = h(t, e), t
                    }(t, e, n, r) : "string" == typeof e ? function (t, e, n) {
                        if ("string" == typeof n && "" !== n || (n = "utf8"), !c.isEncoding(n)) throw new TypeError('"encoding" must be a valid string encoding');
                        var r = 0 | d(e, n), o = (t = s(t, r)).write(e, n);
                        return o !== r && (t = t.slice(0, o)), t
                    }(t, e, n) : function (t, e) {
                        if (c.isBuffer(e)) {
                            var n = 0 | p(e.length);
                            return 0 === (t = s(t, n)).length || e.copy(t, 0, 0, n), t
                        }
                        if (e) {
                            if ("undefined" != typeof ArrayBuffer && e.buffer instanceof ArrayBuffer || "length" in e) return "number" != typeof e.length || (r = e.length) != r ? s(t, 0) : h(t, e);
                            if ("Buffer" === e.type && i(e.data)) return h(t, e.data)
                        }
                        var r;
                        throw new TypeError("First argument must be a string, Buffer, ArrayBuffer, Array, or array-like object.")
                    }(t, e)
                }

                function l(t) {
                    if ("number" != typeof t) throw new TypeError('"size" argument must be a number');
                    if (t < 0) throw new RangeError('"size" argument must not be negative')
                }

                function f(t, e) {
                    if (l(e), t = s(t, e < 0 ? 0 : 0 | p(e)), !c.TYPED_ARRAY_SUPPORT) for (var n = 0; n < e; ++n) t[n] = 0;
                    return t
                }

                function h(t, e) {
                    var n = e.length < 0 ? 0 : 0 | p(e.length);
                    t = s(t, n);
                    for (var r = 0; r < n; r += 1) t[r] = 255 & e[r];
                    return t
                }

                function p(t) {
                    if (t >= a()) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + a().toString(16) + " bytes");
                    return 0 | t
                }

                function d(t, e) {
                    if (c.isBuffer(t)) return t.length;
                    if ("undefined" != typeof ArrayBuffer && "function" == typeof ArrayBuffer.isView && (ArrayBuffer.isView(t) || t instanceof ArrayBuffer)) return t.byteLength;
                    "string" != typeof t && (t = "" + t);
                    var n = t.length;
                    if (0 === n) return 0;
                    for (var r = !1; ;) switch (e) {
                        case"ascii":
                        case"latin1":
                        case"binary":
                            return n;
                        case"utf8":
                        case"utf-8":
                        case void 0:
                            return _(t).length;
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return 2 * n;
                        case"hex":
                            return n >>> 1;
                        case"base64":
                            return z(t).length;
                        default:
                            if (r) return _(t).length;
                            e = ("" + e).toLowerCase(), r = !0
                    }
                }

                function v(t, e, n) {
                    var r = t[e];
                    t[e] = t[n], t[n] = r
                }

                function g(t, e, n, r, o) {
                    if (0 === t.length) return -1;
                    if ("string" == typeof n ? (r = n, n = 0) : n > 2147483647 ? n = 2147483647 : n < -2147483648 && (n = -2147483648), n = +n, isNaN(n) && (n = o ? 0 : t.length - 1), n < 0 && (n = t.length + n), n >= t.length) {
                        if (o) return -1;
                        n = t.length - 1
                    } else if (n < 0) {
                        if (!o) return -1;
                        n = 0
                    }
                    if ("string" == typeof e && (e = c.from(e, r)), c.isBuffer(e)) return 0 === e.length ? -1 : y(t, e, n, r, o);
                    if ("number" == typeof e) return e &= 255, c.TYPED_ARRAY_SUPPORT && "function" == typeof Uint8Array.prototype.indexOf ? o ? Uint8Array.prototype.indexOf.call(t, e, n) : Uint8Array.prototype.lastIndexOf.call(t, e, n) : y(t, [e], n, r, o);
                    throw new TypeError("val must be string, number or Buffer")
                }

                function y(t, e, n, r, o) {
                    var i, a = 1, s = t.length, c = e.length;
                    if (void 0 !== r && ("ucs2" === (r = String(r).toLowerCase()) || "ucs-2" === r || "utf16le" === r || "utf-16le" === r)) {
                        if (t.length < 2 || e.length < 2) return -1;
                        a = 2, s /= 2, c /= 2, n /= 2
                    }

                    function u(t, e) {
                        return 1 === a ? t[e] : t.readUInt16BE(e * a)
                    }

                    if (o) {
                        var l = -1;
                        for (i = n; i < s; i++) if (u(t, i) === u(e, -1 === l ? 0 : i - l)) {
                            if (-1 === l && (l = i), i - l + 1 === c) return l * a
                        } else -1 !== l && (i -= i - l), l = -1
                    } else for (n + c > s && (n = s - c), i = n; i >= 0; i--) {
                        for (var f = !0, h = 0; h < c; h++) if (u(t, i + h) !== u(e, h)) {
                            f = !1;
                            break
                        }
                        if (f) return i
                    }
                    return -1
                }

                function x(t, e, n, r) {
                    n = Number(n) || 0;
                    var o = t.length - n;
                    r ? (r = Number(r)) > o && (r = o) : r = o;
                    var i = e.length;
                    if (i % 2 != 0) throw new TypeError("Invalid hex string");
                    r > i / 2 && (r = i / 2);
                    for (var a = 0; a < r; ++a) {
                        var s = parseInt(e.substr(2 * a, 2), 16);
                        if (isNaN(s)) return a;
                        t[n + a] = s
                    }
                    return a
                }

                function C(t, e, n, r) {
                    return j(_(e, t.length - n), t, n, r)
                }

                function m(t, e, n, r) {
                    return j(function (t) {
                        for (var e = [], n = 0; n < t.length; ++n) e.push(255 & t.charCodeAt(n));
                        return e
                    }(e), t, n, r)
                }

                function w(t, e, n, r) {
                    return m(t, e, n, r)
                }

                function k(t, e, n, r) {
                    return j(z(e), t, n, r)
                }

                function b(t, e, n, r) {
                    return j(function (t, e) {
                        for (var n, r, o, i = [], a = 0; a < t.length && !((e -= 2) < 0); ++a) r = (n = t.charCodeAt(a)) >> 8, o = n % 256, i.push(o), i.push(r);
                        return i
                    }(e, t.length - n), t, n, r)
                }

                function S(t, e, n) {
                    return 0 === e && n === t.length ? r.fromByteArray(t) : r.fromByteArray(t.slice(e, n))
                }

                function P(t, e, n) {
                    n = Math.min(t.length, n);
                    for (var r = [], o = e; o < n;) {
                        var i, a, s, c, u = t[o], l = null, f = u > 239 ? 4 : u > 223 ? 3 : u > 191 ? 2 : 1;
                        if (o + f <= n) switch (f) {
                            case 1:
                                u < 128 && (l = u);
                                break;
                            case 2:
                                128 == (192 & (i = t[o + 1])) && (c = (31 & u) << 6 | 63 & i) > 127 && (l = c);
                                break;
                            case 3:
                                i = t[o + 1], a = t[o + 2], 128 == (192 & i) && 128 == (192 & a) && (c = (15 & u) << 12 | (63 & i) << 6 | 63 & a) > 2047 && (c < 55296 || c > 57343) && (l = c);
                                break;
                            case 4:
                                i = t[o + 1], a = t[o + 2], s = t[o + 3], 128 == (192 & i) && 128 == (192 & a) && 128 == (192 & s) && (c = (15 & u) << 18 | (63 & i) << 12 | (63 & a) << 6 | 63 & s) > 65535 && c < 1114112 && (l = c)
                        }
                        null === l ? (l = 65533, f = 1) : l > 65535 && (l -= 65536, r.push(l >>> 10 & 1023 | 55296), l = 56320 | 1023 & l), r.push(l), o += f
                    }
                    return function (t) {
                        var e = t.length;
                        if (e <= 4096) return String.fromCharCode.apply(String, t);
                        for (var n = "", r = 0; r < e;) n += String.fromCharCode.apply(String, t.slice(r, r += 4096));
                        return n
                    }(r)
                }

                function A(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; ++o) r += String.fromCharCode(127 & t[o]);
                    return r
                }

                function E(t, e, n) {
                    var r = "";
                    n = Math.min(t.length, n);
                    for (var o = e; o < n; ++o) r += String.fromCharCode(t[o]);
                    return r
                }

                function R(t, e, n) {
                    var r = t.length;
                    (!e || e < 0) && (e = 0), (!n || n < 0 || n > r) && (n = r);
                    for (var o = "", i = e; i < n; ++i) o += B(t[i]);
                    return o
                }

                function I(t, e, n) {
                    for (var r = t.slice(e, n), o = "", i = 0; i < r.length; i += 2) o += String.fromCharCode(r[i] + 256 * r[i + 1]);
                    return o
                }

                function T(t, e, n) {
                    if (t % 1 != 0 || t < 0) throw new RangeError("offset is not uint");
                    if (t + e > n) throw new RangeError("Trying to access beyond buffer length")
                }

                function D(t, e, n, r, o, i) {
                    if (!c.isBuffer(t)) throw new TypeError('"buffer" argument must be a Buffer instance');
                    if (e > o || e < i) throw new RangeError('"value" argument is out of bounds');
                    if (n + r > t.length) throw new RangeError("Index out of range")
                }

                function L(t, e, n, r) {
                    e < 0 && (e = 65535 + e + 1);
                    for (var o = 0, i = Math.min(t.length - n, 2); o < i; ++o) t[n + o] = (e & 255 << 8 * (r ? o : 1 - o)) >>> 8 * (r ? o : 1 - o)
                }

                function F(t, e, n, r) {
                    e < 0 && (e = 4294967295 + e + 1);
                    for (var o = 0, i = Math.min(t.length - n, 4); o < i; ++o) t[n + o] = e >>> 8 * (r ? o : 3 - o) & 255
                }

                function O(t, e, n, r, o, i) {
                    if (n + r > t.length) throw new RangeError("Index out of range");
                    if (n < 0) throw new RangeError("Index out of range")
                }

                function U(t, e, n, r, i) {
                    return i || O(t, 0, n, 4), o.write(t, e, n, r, 23, 4), n + 4
                }

                function N(t, e, n, r, i) {
                    return i || O(t, 0, n, 8), o.write(t, e, n, r, 52, 8), n + 8
                }

                e.Buffer = c, e.SlowBuffer = function (t) {
                    return +t != t && (t = 0), c.alloc(+t)
                }, e.INSPECT_MAX_BYTES = 50, c.TYPED_ARRAY_SUPPORT = void 0 !== t.TYPED_ARRAY_SUPPORT ? t.TYPED_ARRAY_SUPPORT : function () {
                    try {
                        var t = new Uint8Array(1);
                        return t.__proto__ = {
                            __proto__: Uint8Array.prototype, foo: function () {
                                return 42
                            }
                        }, 42 === t.foo() && "function" == typeof t.subarray && 0 === t.subarray(1, 1).byteLength
                    } catch (t) {
                        return !1
                    }
                }(), e.kMaxLength = a(), c.poolSize = 8192, c._augment = function (t) {
                    return t.__proto__ = c.prototype, t
                }, c.from = function (t, e, n) {
                    return u(null, t, e, n)
                }, c.TYPED_ARRAY_SUPPORT && (c.prototype.__proto__ = Uint8Array.prototype, c.__proto__ = Uint8Array, "undefined" != typeof Symbol && Symbol.species && c[Symbol.species] === c && Object.defineProperty(c, Symbol.species, {
                    value: null,
                    configurable: !0
                })), c.alloc = function (t, e, n) {
                    return function (t, e, n, r) {
                        return l(e), e <= 0 ? s(t, e) : void 0 !== n ? "string" == typeof r ? s(t, e).fill(n, r) : s(t, e).fill(n) : s(t, e)
                    }(null, t, e, n)
                }, c.allocUnsafe = function (t) {
                    return f(null, t)
                }, c.allocUnsafeSlow = function (t) {
                    return f(null, t)
                }, c.isBuffer = function (t) {
                    return !(null == t || !t._isBuffer)
                }, c.compare = function (t, e) {
                    if (!c.isBuffer(t) || !c.isBuffer(e)) throw new TypeError("Arguments must be Buffers");
                    if (t === e) return 0;
                    for (var n = t.length, r = e.length, o = 0, i = Math.min(n, r); o < i; ++o) if (t[o] !== e[o]) {
                        n = t[o], r = e[o];
                        break
                    }
                    return n < r ? -1 : r < n ? 1 : 0
                }, c.isEncoding = function (t) {
                    switch (String(t).toLowerCase()) {
                        case"hex":
                        case"utf8":
                        case"utf-8":
                        case"ascii":
                        case"latin1":
                        case"binary":
                        case"base64":
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return !0;
                        default:
                            return !1
                    }
                }, c.concat = function (t, e) {
                    if (!i(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                    if (0 === t.length) return c.alloc(0);
                    var n;
                    if (void 0 === e) for (e = 0, n = 0; n < t.length; ++n) e += t[n].length;
                    var r = c.allocUnsafe(e), o = 0;
                    for (n = 0; n < t.length; ++n) {
                        var a = t[n];
                        if (!c.isBuffer(a)) throw new TypeError('"list" argument must be an Array of Buffers');
                        a.copy(r, o), o += a.length
                    }
                    return r
                }, c.byteLength = d, c.prototype._isBuffer = !0, c.prototype.swap16 = function () {
                    var t = this.length;
                    if (t % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (var e = 0; e < t; e += 2) v(this, e, e + 1);
                    return this
                }, c.prototype.swap32 = function () {
                    var t = this.length;
                    if (t % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (var e = 0; e < t; e += 4) v(this, e, e + 3), v(this, e + 1, e + 2);
                    return this
                }, c.prototype.swap64 = function () {
                    var t = this.length;
                    if (t % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (var e = 0; e < t; e += 8) v(this, e, e + 7), v(this, e + 1, e + 6), v(this, e + 2, e + 5), v(this, e + 3, e + 4);
                    return this
                }, c.prototype.toString = function () {
                    var t = 0 | this.length;
                    return 0 === t ? "" : 0 === arguments.length ? P(this, 0, t) : function (t, e, n) {
                        var r = !1;
                        if ((void 0 === e || e < 0) && (e = 0), e > this.length) return "";
                        if ((void 0 === n || n > this.length) && (n = this.length), n <= 0) return "";
                        if ((n >>>= 0) <= (e >>>= 0)) return "";
                        for (t || (t = "utf8"); ;) switch (t) {
                            case"hex":
                                return R(this, e, n);
                            case"utf8":
                            case"utf-8":
                                return P(this, e, n);
                            case"ascii":
                                return A(this, e, n);
                            case"latin1":
                            case"binary":
                                return E(this, e, n);
                            case"base64":
                                return S(this, e, n);
                            case"ucs2":
                            case"ucs-2":
                            case"utf16le":
                            case"utf-16le":
                                return I(this, e, n);
                            default:
                                if (r) throw new TypeError("Unknown encoding: " + t);
                                t = (t + "").toLowerCase(), r = !0
                        }
                    }.apply(this, arguments)
                }, c.prototype.equals = function (t) {
                    if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    return this === t || 0 === c.compare(this, t)
                }, c.prototype.inspect = function () {
                    var t = "", n = e.INSPECT_MAX_BYTES;
                    return this.length > 0 && (t = this.toString("hex", 0, n).match(/.{2}/g).join(" "), this.length > n && (t += " ... ")), "<Buffer " + t + ">"
                }, c.prototype.compare = function (t, e, n, r, o) {
                    if (!c.isBuffer(t)) throw new TypeError("Argument must be a Buffer");
                    if (void 0 === e && (e = 0), void 0 === n && (n = t ? t.length : 0), void 0 === r && (r = 0), void 0 === o && (o = this.length), e < 0 || n > t.length || r < 0 || o > this.length) throw new RangeError("out of range index");
                    if (r >= o && e >= n) return 0;
                    if (r >= o) return -1;
                    if (e >= n) return 1;
                    if (this === t) return 0;
                    for (var i = (o >>>= 0) - (r >>>= 0), a = (n >>>= 0) - (e >>>= 0), s = Math.min(i, a), u = this.slice(r, o), l = t.slice(e, n), f = 0; f < s; ++f) if (u[f] !== l[f]) {
                        i = u[f], a = l[f];
                        break
                    }
                    return i < a ? -1 : a < i ? 1 : 0
                }, c.prototype.includes = function (t, e, n) {
                    return -1 !== this.indexOf(t, e, n)
                }, c.prototype.indexOf = function (t, e, n) {
                    return g(this, t, e, n, !0)
                }, c.prototype.lastIndexOf = function (t, e, n) {
                    return g(this, t, e, n, !1)
                }, c.prototype.write = function (t, e, n, r) {
                    if (void 0 === e) r = "utf8", n = this.length, e = 0; else if (void 0 === n && "string" == typeof e) r = e, n = this.length, e = 0; else {
                        if (!isFinite(e)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                        e |= 0, isFinite(n) ? (n |= 0, void 0 === r && (r = "utf8")) : (r = n, n = void 0)
                    }
                    var o = this.length - e;
                    if ((void 0 === n || n > o) && (n = o), t.length > 0 && (n < 0 || e < 0) || e > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                    r || (r = "utf8");
                    for (var i = !1; ;) switch (r) {
                        case"hex":
                            return x(this, t, e, n);
                        case"utf8":
                        case"utf-8":
                            return C(this, t, e, n);
                        case"ascii":
                            return m(this, t, e, n);
                        case"latin1":
                        case"binary":
                            return w(this, t, e, n);
                        case"base64":
                            return k(this, t, e, n);
                        case"ucs2":
                        case"ucs-2":
                        case"utf16le":
                        case"utf-16le":
                            return b(this, t, e, n);
                        default:
                            if (i) throw new TypeError("Unknown encoding: " + r);
                            r = ("" + r).toLowerCase(), i = !0
                    }
                }, c.prototype.toJSON = function () {
                    return {type: "Buffer", data: Array.prototype.slice.call(this._arr || this, 0)}
                }, c.prototype.slice = function (t, e) {
                    var n, r = this.length;
                    if ((t = ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), (e = void 0 === e ? r : ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), e < t && (e = t), c.TYPED_ARRAY_SUPPORT) (n = this.subarray(t, e)).__proto__ = c.prototype; else {
                        var o = e - t;
                        n = new c(o, void 0);
                        for (var i = 0; i < o; ++i) n[i] = this[i + t]
                    }
                    return n
                }, c.prototype.readUIntLE = function (t, e, n) {
                    t |= 0, e |= 0, n || T(t, e, this.length);
                    for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                    return r
                }, c.prototype.readUIntBE = function (t, e, n) {
                    t |= 0, e |= 0, n || T(t, e, this.length);
                    for (var r = this[t + --e], o = 1; e > 0 && (o *= 256);) r += this[t + --e] * o;
                    return r
                }, c.prototype.readUInt8 = function (t, e) {
                    return e || T(t, 1, this.length), this[t]
                }, c.prototype.readUInt16LE = function (t, e) {
                    return e || T(t, 2, this.length), this[t] | this[t + 1] << 8
                }, c.prototype.readUInt16BE = function (t, e) {
                    return e || T(t, 2, this.length), this[t] << 8 | this[t + 1]
                }, c.prototype.readUInt32LE = function (t, e) {
                    return e || T(t, 4, this.length), (this[t] | this[t + 1] << 8 | this[t + 2] << 16) + 16777216 * this[t + 3]
                }, c.prototype.readUInt32BE = function (t, e) {
                    return e || T(t, 4, this.length), 16777216 * this[t] + (this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3])
                }, c.prototype.readIntLE = function (t, e, n) {
                    t |= 0, e |= 0, n || T(t, e, this.length);
                    for (var r = this[t], o = 1, i = 0; ++i < e && (o *= 256);) r += this[t + i] * o;
                    return r >= (o *= 128) && (r -= Math.pow(2, 8 * e)), r
                }, c.prototype.readIntBE = function (t, e, n) {
                    t |= 0, e |= 0, n || T(t, e, this.length);
                    for (var r = e, o = 1, i = this[t + --r]; r > 0 && (o *= 256);) i += this[t + --r] * o;
                    return i >= (o *= 128) && (i -= Math.pow(2, 8 * e)), i
                }, c.prototype.readInt8 = function (t, e) {
                    return e || T(t, 1, this.length), 128 & this[t] ? -1 * (255 - this[t] + 1) : this[t]
                }, c.prototype.readInt16LE = function (t, e) {
                    e || T(t, 2, this.length);
                    var n = this[t] | this[t + 1] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt16BE = function (t, e) {
                    e || T(t, 2, this.length);
                    var n = this[t + 1] | this[t] << 8;
                    return 32768 & n ? 4294901760 | n : n
                }, c.prototype.readInt32LE = function (t, e) {
                    return e || T(t, 4, this.length), this[t] | this[t + 1] << 8 | this[t + 2] << 16 | this[t + 3] << 24
                }, c.prototype.readInt32BE = function (t, e) {
                    return e || T(t, 4, this.length), this[t] << 24 | this[t + 1] << 16 | this[t + 2] << 8 | this[t + 3]
                }, c.prototype.readFloatLE = function (t, e) {
                    return e || T(t, 4, this.length), o.read(this, t, !0, 23, 4)
                }, c.prototype.readFloatBE = function (t, e) {
                    return e || T(t, 4, this.length), o.read(this, t, !1, 23, 4)
                }, c.prototype.readDoubleLE = function (t, e) {
                    return e || T(t, 8, this.length), o.read(this, t, !0, 52, 8)
                }, c.prototype.readDoubleBE = function (t, e) {
                    return e || T(t, 8, this.length), o.read(this, t, !1, 52, 8)
                }, c.prototype.writeUIntLE = function (t, e, n, r) {
                    t = +t, e |= 0, n |= 0, r || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = 1, i = 0;
                    for (this[e] = 255 & t; ++i < n && (o *= 256);) this[e + i] = t / o & 255;
                    return e + n
                }, c.prototype.writeUIntBE = function (t, e, n, r) {
                    t = +t, e |= 0, n |= 0, r || D(this, t, e, n, Math.pow(2, 8 * n) - 1, 0);
                    var o = n - 1, i = 1;
                    for (this[e + o] = 255 & t; --o >= 0 && (i *= 256);) this[e + o] = t / i & 255;
                    return e + n
                }, c.prototype.writeUInt8 = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 1, 255, 0), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), this[e] = 255 & t, e + 1
                }, c.prototype.writeUInt16LE = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2
                }, c.prototype.writeUInt16BE = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 2, 65535, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2
                }, c.prototype.writeUInt32LE = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e + 3] = t >>> 24, this[e + 2] = t >>> 16, this[e + 1] = t >>> 8, this[e] = 255 & t) : F(this, t, e, !0), e + 4
                }, c.prototype.writeUInt32BE = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 4, 4294967295, 0), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : F(this, t, e, !1), e + 4
                }, c.prototype.writeIntLE = function (t, e, n, r) {
                    if (t = +t, e |= 0, !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        D(this, t, e, n, o - 1, -o)
                    }
                    var i = 0, a = 1, s = 0;
                    for (this[e] = 255 & t; ++i < n && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i - 1] && (s = 1), this[e + i] = (t / a >> 0) - s & 255;
                    return e + n
                }, c.prototype.writeIntBE = function (t, e, n, r) {
                    if (t = +t, e |= 0, !r) {
                        var o = Math.pow(2, 8 * n - 1);
                        D(this, t, e, n, o - 1, -o)
                    }
                    var i = n - 1, a = 1, s = 0;
                    for (this[e + i] = 255 & t; --i >= 0 && (a *= 256);) t < 0 && 0 === s && 0 !== this[e + i + 1] && (s = 1), this[e + i] = (t / a >> 0) - s & 255;
                    return e + n
                }, c.prototype.writeInt8 = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 1, 127, -128), c.TYPED_ARRAY_SUPPORT || (t = Math.floor(t)), t < 0 && (t = 255 + t + 1), this[e] = 255 & t, e + 1
                }, c.prototype.writeInt16LE = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8) : L(this, t, e, !0), e + 2
                }, c.prototype.writeInt16BE = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 2, 32767, -32768), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 8, this[e + 1] = 255 & t) : L(this, t, e, !1), e + 2
                }, c.prototype.writeInt32LE = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 4, 2147483647, -2147483648), c.TYPED_ARRAY_SUPPORT ? (this[e] = 255 & t, this[e + 1] = t >>> 8, this[e + 2] = t >>> 16, this[e + 3] = t >>> 24) : F(this, t, e, !0), e + 4
                }, c.prototype.writeInt32BE = function (t, e, n) {
                    return t = +t, e |= 0, n || D(this, t, e, 4, 2147483647, -2147483648), t < 0 && (t = 4294967295 + t + 1), c.TYPED_ARRAY_SUPPORT ? (this[e] = t >>> 24, this[e + 1] = t >>> 16, this[e + 2] = t >>> 8, this[e + 3] = 255 & t) : F(this, t, e, !1), e + 4
                }, c.prototype.writeFloatLE = function (t, e, n) {
                    return U(this, t, e, !0, n)
                }, c.prototype.writeFloatBE = function (t, e, n) {
                    return U(this, t, e, !1, n)
                }, c.prototype.writeDoubleLE = function (t, e, n) {
                    return N(this, t, e, !0, n)
                }, c.prototype.writeDoubleBE = function (t, e, n) {
                    return N(this, t, e, !1, n)
                }, c.prototype.copy = function (t, e, n, r) {
                    if (n || (n = 0), r || 0 === r || (r = this.length), e >= t.length && (e = t.length), e || (e = 0), r > 0 && r < n && (r = n), r === n) return 0;
                    if (0 === t.length || 0 === this.length) return 0;
                    if (e < 0) throw new RangeError("targetStart out of bounds");
                    if (n < 0 || n >= this.length) throw new RangeError("sourceStart out of bounds");
                    if (r < 0) throw new RangeError("sourceEnd out of bounds");
                    r > this.length && (r = this.length), t.length - e < r - n && (r = t.length - e + n);
                    var o, i = r - n;
                    if (this === t && n < e && e < r) for (o = i - 1; o >= 0; --o) t[o + e] = this[o + n]; else if (i < 1e3 || !c.TYPED_ARRAY_SUPPORT) for (o = 0; o < i; ++o) t[o + e] = this[o + n]; else Uint8Array.prototype.set.call(t, this.subarray(n, n + i), e);
                    return i
                }, c.prototype.fill = function (t, e, n, r) {
                    if ("string" == typeof t) {
                        if ("string" == typeof e ? (r = e, e = 0, n = this.length) : "string" == typeof n && (r = n, n = this.length), 1 === t.length) {
                            var o = t.charCodeAt(0);
                            o < 256 && (t = o)
                        }
                        if (void 0 !== r && "string" != typeof r) throw new TypeError("encoding must be a string");
                        if ("string" == typeof r && !c.isEncoding(r)) throw new TypeError("Unknown encoding: " + r)
                    } else "number" == typeof t && (t &= 255);
                    if (e < 0 || this.length < e || this.length < n) throw new RangeError("Out of range index");
                    if (n <= e) return this;
                    var i;
                    if (e >>>= 0, n = void 0 === n ? this.length : n >>> 0, t || (t = 0), "number" == typeof t) for (i = e; i < n; ++i) this[i] = t; else {
                        var a = c.isBuffer(t) ? t : _(new c(t, r).toString()), s = a.length;
                        for (i = 0; i < n - e; ++i) this[i + e] = a[i % s]
                    }
                    return this
                };
                var M = /[^+\/0-9A-Za-z-_]/g;

                function B(t) {
                    return t < 16 ? "0" + t.toString(16) : t.toString(16)
                }

                function _(t, e) {
                    var n;
                    e = e || 1 / 0;
                    for (var r = t.length, o = null, i = [], a = 0; a < r; ++a) {
                        if ((n = t.charCodeAt(a)) > 55295 && n < 57344) {
                            if (!o) {
                                if (n > 56319) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                if (a + 1 === r) {
                                    (e -= 3) > -1 && i.push(239, 191, 189);
                                    continue
                                }
                                o = n;
                                continue
                            }
                            if (n < 56320) {
                                (e -= 3) > -1 && i.push(239, 191, 189), o = n;
                                continue
                            }
                            n = 65536 + (o - 55296 << 10 | n - 56320)
                        } else o && (e -= 3) > -1 && i.push(239, 191, 189);
                        if (o = null, n < 128) {
                            if ((e -= 1) < 0) break;
                            i.push(n)
                        } else if (n < 2048) {
                            if ((e -= 2) < 0) break;
                            i.push(n >> 6 | 192, 63 & n | 128)
                        } else if (n < 65536) {
                            if ((e -= 3) < 0) break;
                            i.push(n >> 12 | 224, n >> 6 & 63 | 128, 63 & n | 128)
                        } else {
                            if (!(n < 1114112)) throw new Error("Invalid code point");
                            if ((e -= 4) < 0) break;
                            i.push(n >> 18 | 240, n >> 12 & 63 | 128, n >> 6 & 63 | 128, 63 & n | 128)
                        }
                    }
                    return i
                }

                function z(t) {
                    return r.toByteArray(function (t) {
                        if ((t = function (t) {
                            return t.trim ? t.trim() : t.replace(/^\s+|\s+$/g, "")
                        }(t).replace(M, "")).length < 2) return "";
                        for (; t.length % 4 != 0;) t += "=";
                        return t
                    }(t))
                }

                function j(t, e, n, r) {
                    for (var o = 0; o < r && !(o + n >= e.length || o >= t.length); ++o) e[o + n] = t[o];
                    return o
                }
            }).call(this, n(141))
        }, function (t, e, n) {
            "use strict";
            e.byteLength = function (t) {
                var e = u(t), n = e[0], r = e[1];
                return 3 * (n + r) / 4 - r
            }, e.toByteArray = function (t) {
                var e, n, r = u(t), a = r[0], s = r[1], c = new i(3 * (a + s) / 4 - s), l = 0, f = s > 0 ? a - 4 : a;
                for (n = 0; n < f; n += 4) e = o[t.charCodeAt(n)] << 18 | o[t.charCodeAt(n + 1)] << 12 | o[t.charCodeAt(n + 2)] << 6 | o[t.charCodeAt(n + 3)], c[l++] = e >> 16 & 255, c[l++] = e >> 8 & 255, c[l++] = 255 & e;
                return 2 === s && (e = o[t.charCodeAt(n)] << 2 | o[t.charCodeAt(n + 1)] >> 4, c[l++] = 255 & e), 1 === s && (e = o[t.charCodeAt(n)] << 10 | o[t.charCodeAt(n + 1)] << 4 | o[t.charCodeAt(n + 2)] >> 2, c[l++] = e >> 8 & 255, c[l++] = 255 & e), c
            }, e.fromByteArray = function (t) {
                for (var e, n = t.length, o = n % 3, i = [], a = 0, s = n - o; a < s; a += 16383) i.push(l(t, a, a + 16383 > s ? s : a + 16383));
                return 1 === o ? (e = t[n - 1], i.push(r[e >> 2] + r[e << 4 & 63] + "==")) : 2 === o && (e = (t[n - 2] << 8) + t[n - 1], i.push(r[e >> 10] + r[e >> 4 & 63] + r[e << 2 & 63] + "=")), i.join("")
            };
            for (var r = [], o = [], i = "undefined" != typeof Uint8Array ? Uint8Array : Array, a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", s = 0, c = a.length; s < c; ++s) r[s] = a[s], o[a.charCodeAt(s)] = s;

            function u(t) {
                var e = t.length;
                if (e % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var n = t.indexOf("=");
                return -1 === n && (n = e), [n, n === e ? 0 : 4 - n % 4]
            }

            function l(t, e, n) {
                for (var o, i, a = [], s = e; s < n; s += 3) o = (t[s] << 16 & 16711680) + (t[s + 1] << 8 & 65280) + (255 & t[s + 2]), a.push(r[(i = o) >> 18 & 63] + r[i >> 12 & 63] + r[i >> 6 & 63] + r[63 & i]);
                return a.join("")
            }

            o["-".charCodeAt(0)] = 62, o["_".charCodeAt(0)] = 63
        }, function (t, e) {
            e.read = function (t, e, n, r, o) {
                var i, a, s = 8 * o - r - 1, c = (1 << s) - 1, u = c >> 1, l = -7, f = n ? o - 1 : 0, h = n ? -1 : 1,
                    p = t[e + f];
                for (f += h, i = p & (1 << -l) - 1, p >>= -l, l += s; l > 0; i = 256 * i + t[e + f], f += h, l -= 8) ;
                for (a = i & (1 << -l) - 1, i >>= -l, l += r; l > 0; a = 256 * a + t[e + f], f += h, l -= 8) ;
                if (0 === i) i = 1 - u; else {
                    if (i === c) return a ? NaN : 1 / 0 * (p ? -1 : 1);
                    a += Math.pow(2, r), i -= u
                }
                return (p ? -1 : 1) * a * Math.pow(2, i - r)
            }, e.write = function (t, e, n, r, o, i) {
                var a, s, c, u = 8 * i - o - 1, l = (1 << u) - 1, f = l >> 1,
                    h = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0, p = r ? 0 : i - 1, d = r ? 1 : -1,
                    v = e < 0 || 0 === e && 1 / e < 0 ? 1 : 0;
                for (e = Math.abs(e), isNaN(e) || e === 1 / 0 ? (s = isNaN(e) ? 1 : 0, a = l) : (a = Math.floor(Math.log(e) / Math.LN2), e * (c = Math.pow(2, -a)) < 1 && (a--, c *= 2), (e += a + f >= 1 ? h / c : h * Math.pow(2, 1 - f)) * c >= 2 && (a++, c /= 2), a + f >= l ? (s = 0, a = l) : a + f >= 1 ? (s = (e * c - 1) * Math.pow(2, o), a += f) : (s = e * Math.pow(2, f - 1) * Math.pow(2, o), a = 0)); o >= 8; t[n + p] = 255 & s, p += d, s /= 256, o -= 8) ;
                for (a = a << o | s, u += o; u > 0; t[n + p] = 255 & a, p += d, a /= 256, u -= 8) ;
                t[n + p - d] |= 128 * v
            }
        }, function (t, e) {
            var n = {}.toString;
            t.exports = Array.isArray || function (t) {
                return "[object Array]" == n.call(t)
            }
        }, function (t, e, n) {
            var r = n(422);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(423), i = Array.prototype;
            t.exports = function (t) {
                var e = t.splice;
                return t === i || r(i, t) && e === i.splice ? o : e
            }
        }, function (t, e, n) {
            n(424);
            var r = n(28);
            t.exports = r("Array").splice
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(34), i = n(110), a = n(97), s = n(36), c = n(425), u = n(127), l = n(108), f = n(76),
                h = n(195), p = n(88)("splice"), d = Math.max, v = Math.min;
            r({target: "Array", proto: !0, forced: !p}, {
                splice: function (t, e) {
                    var n, r, p, g, y, x, C = o(this), m = s(C), w = i(t, m), k = arguments.length;
                    for (0 === k ? n = r = 0 : 1 === k ? (n = 0, r = m - w) : (n = k - 2, r = v(d(a(e), 0), m - w)), u(m + n - r), p = l(C, r), g = 0; g < r; g++) (y = w + g) in C && f(p, g, C[y]);
                    if (p.length = r, n < r) {
                        for (g = w; g < m - r; g++) x = g + n, (y = g + r) in C ? C[x] = C[y] : h(C, x);
                        for (g = m; g > m - r + n; g--) h(C, g - 1)
                    } else if (n > r) for (g = m - r; g > w; g--) x = g + n - 1, (y = g + r - 1) in C ? C[x] = C[y] : h(C, x);
                    for (g = 0; g < n; g++) C[g + w] = arguments[g + 2];
                    return c(C, m - r + n), p
                }
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(22), o = n(58), i = TypeError, a = Object.getOwnPropertyDescriptor, s = r && !function () {
                if (void 0 !== this) return !0;
                try {
                    Object.defineProperty([], "length", {writable: !1}).length = 1
                } catch (t) {
                    return t instanceof TypeError
                }
            }();
            t.exports = s ? function (t, e) {
                if (o(t) && !a(t, "length").writable) throw i("Cannot set read only .length");
                return t.length = e
            } : function (t, e) {
                return t.length = e
            }
        }, function (t, e, n) {
            var r = n(427);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(428), i = Array.prototype;
            t.exports = function (t) {
                var e = t.concat;
                return t === i || r(i, t) && e === i.concat ? o : e
            }
        }, function (t, e, n) {
            n(148);
            var r = n(28);
            t.exports = r("Array").concat
        }, function (t, e, n) {
            var r = n(430);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(431), i = Array.prototype;
            t.exports = function (t) {
                var e = t.filter;
                return t === i || r(i, t) && e === i.filter ? o : e
            }
        }, function (t, e, n) {
            n(432);
            var r = n(28);
            t.exports = r("Array").filter
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(91).filter;
            r({target: "Array", proto: !0, forced: !n(88)("filter")}, {
                filter: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, function (t, e, n) {
            var r = n(434);
            n(50), t.exports = r
        }, function (t, e, n) {
            n(51), n(435);
            var r = n(16);
            t.exports = r.Object.fromEntries
        }, function (t, e, n) {
            var r = n(7), o = n(61), i = n(76);
            r({target: "Object", stat: !0}, {
                fromEntries: function (t) {
                    var e = {};
                    return o(t, function (t, n) {
                        i(e, t, n)
                    }, {AS_ENTRIES: !0}), e
                }
            })
        }, function (t, e, n) {
            var r = n(437);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(438), i = Array.prototype;
            t.exports = function (t) {
                var e = t.map;
                return t === i || r(i, t) && e === i.map ? o : e
            }
        }, function (t, e, n) {
            n(439);
            var r = n(28);
            t.exports = r("Array").map
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(91).map;
            r({target: "Array", proto: !0, forced: !n(88)("map")}, {
                map: function (t) {
                    return o(this, t, arguments.length > 1 ? arguments[1] : void 0)
                }
            })
        }, function (t, e, n) {
            var r = n(441);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(442), i = Array.prototype;
            t.exports = function (t) {
                var e = t.flatMap;
                return t === i || r(i, t) && e === i.flatMap ? o : e
            }
        }, function (t, e, n) {
            n(443), n(445);
            var r = n(28);
            t.exports = r("Array").flatMap
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(444), i = n(38), a = n(34), s = n(36), c = n(108);
            r({target: "Array", proto: !0}, {
                flatMap: function (t) {
                    var e, n = a(this), r = s(n);
                    return i(t), (e = c(n, 0)).length = o(e, n, n, r, 0, 1, t, arguments.length > 1 ? arguments[1] : void 0), e
                }
            })
        }, function (t, e, n) {
            "use strict";
            var r = n(58), o = n(36), i = n(127), a = n(43), s = function (t, e, n, c, u, l, f, h) {
                for (var p, d, v = u, g = 0, y = !!f && a(f, h); g < c;) g in n && (p = y ? y(n[g], g, e) : n[g], l > 0 && r(p) ? (d = o(p), v = s(t, e, p, d, v, l - 1) - 1) : (i(v + 1), t[v] = p), v++), g++;
                return v
            };
            t.exports = s
        }, function (t, e, n) {
            n(132)("flatMap")
        }, function (t, e, n) {
            n(50);
            var r = n(59), o = n(25), i = n(21), a = n(447), s = Array.prototype, c = {DOMTokenList: !0, NodeList: !0};
            t.exports = function (t) {
                var e = t.values;
                return t === s || i(s, t) && e === s.values || o(c, r(t)) ? a : e
            }
        }, function (t, e, n) {
            var r = n(448);
            t.exports = r
        }, function (t, e, n) {
            n(51), n(77);
            var r = n(28);
            t.exports = r("Array").values
        }, function (t, e, n) {
            var r = n(450);
            t.exports = r
        }, function (t, e, n) {
            n(451);
            var r = n(16);
            t.exports = r.Number.isInteger
        }, function (t, e, n) {
            n(7)({target: "Number", stat: !0}, {isInteger: n(452)})
        }, function (t, e, n) {
            var r = n(24), o = Math.floor;
            t.exports = Number.isInteger || function (t) {
                return !r(t) && isFinite(t) && o(t) === t
            }
        }, function (t, e, n) {
            var r = n(454);
            t.exports = r
        }, function (t, e, n) {
            var r = n(21), o = n(455), i = Array.prototype;
            t.exports = function (t) {
                var e = t.reduce;
                return t === i || r(i, t) && e === i.reduce ? o : e
            }
        }, function (t, e, n) {
            n(456);
            var r = n(28);
            t.exports = r("Array").reduce
        }, function (t, e, n) {
            "use strict";
            var r = n(7), o = n(457).left, i = n(98), a = n(74), s = n(93);
            r({target: "Array", proto: !0, forced: !i("reduce") || !s && a > 79 && a < 83}, {
                reduce: function (t) {
                    var e = arguments.length;
                    return o(this, t, e, e > 1 ? arguments[1] : void 0)
                }
            })
        }, function (t, e, n) {
            var r = n(38), o = n(34), i = n(103), a = n(36), s = TypeError, c = function (t) {
                return function (e, n, c, u) {
                    r(n);
                    var l = o(e), f = i(l), h = a(l), p = t ? h - 1 : 0, d = t ? -1 : 1;
                    if (c < 2) for (; ;) {
                        if (p in f) {
                            u = f[p], p += d;
                            break
                        }
                        if (p += d, t ? p < 0 : h <= p) throw s("Reduce of empty array with no initial value")
                    }
                    for (; t ? p >= 0 : h > p; p += d) p in f && (u = n(u, f[p], p, l));
                    return u
                }
            };
            t.exports = {left: c(!1), right: c(!0)}
        }, function (t, e, n) {
            var r = n(459);
            t.exports = r
        }, function (t, e, n) {
            n(460);
            var r = n(16);
            t.exports = r.parseInt
        }, function (t, e, n) {
            var r = n(7), o = n(194);
            r({global: !0, forced: parseInt != o}, {parseInt: o})
        }, function (t, e, n) {
            var r = n(462);
            t.exports = r
        }, function (t, e, n) {
            n(463), n(468), n(469);
            var r = n(16);
            t.exports = r.URL
        }, function (t, e, n) {
            n(464)
        }, function (t, e, n) {
            "use strict";
            n(64);
            var r, o = n(7), i = n(22), a = n(199), s = n(15), c = n(43), u = n(13), l = n(44), f = n(465), h = n(94),
                p = n(25), d = n(466), v = n(169), g = n(131), y = n(163).codeAt, x = n(467), C = n(37), m = n(49),
                w = n(118), k = n(200), b = n(60), S = b.set, P = b.getterFor("URL"), A = k.URLSearchParams,
                E = k.getState,
                R = s.URL, I = s.TypeError, T = s.parseInt, D = Math.floor, L = Math.pow, F = u("".charAt),
                O = u(/./.exec),
                U = u([].join), N = u(1..toString), M = u([].pop), B = u([].push), _ = u("".replace), z = u([].shift),
                j = u("".split), q = u("".slice), W = u("".toLowerCase), V = u([].unshift), G = /[a-z]/i,
                H = /[\d+-.a-z]/i,
                Y = /\d/, Q = /^0x/i, K = /^[0-7]+$/, X = /^\d+$/, $ = /^[\da-f]+$/i, J = /[\0\t\n\r #%/:<>?@[\\\]^|]/,
                Z = /[\0\t\n\r #/:<>?@[\\\]^|]/, tt = /^[\u0000-\u0020]+|[\u0000-\u0020]+$/g, et = /[\t\n\r]/g,
                nt = function (t) {
                    var e, n, r, o;
                    if ("number" == typeof t) {
                        for (e = [], n = 0; n < 4; n++) V(e, t % 256), t = D(t / 256);
                        return U(e, ".")
                    }
                    if ("object" == typeof t) {
                        for (e = "", r = function (t) {
                            for (var e = null, n = 1, r = null, o = 0, i = 0; i < 8; i++) 0 !== t[i] ? (o > n && (e = r, n = o), r = null, o = 0) : (null === r && (r = i), ++o);
                            return o > n && (e = r, n = o), e
                        }(t), n = 0; n < 8; n++) o && 0 === t[n] || (o && (o = !1), r === n ? (e += n ? ":" : "::", o = !0) : (e += N(t[n], 16), n < 7 && (e += ":")));
                        return "[" + e + "]"
                    }
                    return t
                }, rt = {}, ot = d({}, rt, {" ": 1, '"': 1, "<": 1, ">": 1, "`": 1}),
                it = d({}, ot, {"#": 1, "?": 1, "{": 1, "}": 1}),
                at = d({}, it, {"/": 1, ":": 1, ";": 1, "=": 1, "@": 1, "[": 1, "\\": 1, "]": 1, "^": 1, "|": 1}),
                st = function (t, e) {
                    var n = y(t, 0);
                    return n > 32 && n < 127 && !p(e, t) ? t : encodeURIComponent(t)
                }, ct = {ftp: 21, file: null, http: 80, https: 443, ws: 80, wss: 443}, ut = function (t, e) {
                    var n;
                    return 2 == t.length && O(G, F(t, 0)) && (":" == (n = F(t, 1)) || !e && "|" == n)
                }, lt = function (t) {
                    var e;
                    return t.length > 1 && ut(q(t, 0, 2)) && (2 == t.length || "/" === (e = F(t, 2)) || "\\" === e || "?" === e || "#" === e)
                }, ft = function (t) {
                    return "." === t || "%2e" === W(t)
                }, ht = {}, pt = {}, dt = {}, vt = {}, gt = {}, yt = {}, xt = {}, Ct = {}, mt = {}, wt = {}, kt = {},
                bt = {},
                St = {}, Pt = {}, At = {}, Et = {}, Rt = {}, It = {}, Tt = {}, Dt = {}, Lt = {},
                Ft = function (t, e, n) {
                    var r, o, i, a = C(t);
                    if (e) {
                        if (o = this.parse(a)) throw I(o);
                        this.searchParams = null
                    } else {
                        if (void 0 !== n && (r = new Ft(n, !0)), o = this.parse(a, null, r)) throw I(o);
                        (i = E(new A)).bindURL(this), this.searchParams = i
                    }
                };
            Ft.prototype = {
                type: "URL", parse: function (t, e, n) {
                    var o, i, a, s, c, u = this, l = e || ht, f = 0, h = "", d = !1, y = !1, x = !1;
                    for (t = C(t), e || (u.scheme = "", u.username = "", u.password = "", u.host = null, u.port = null, u.path = [], u.query = null, u.fragment = null, u.cannotBeABaseURL = !1, t = _(t, tt, "")), t = _(t, et, ""), o = v(t); f <= o.length;) {
                        switch (i = o[f], l) {
                            case ht:
                                if (!i || !O(G, i)) {
                                    if (e) return "Invalid scheme";
                                    l = dt;
                                    continue
                                }
                                h += W(i), l = pt;
                                break;
                            case pt:
                                if (i && (O(H, i) || "+" == i || "-" == i || "." == i)) h += W(i); else {
                                    if (":" != i) {
                                        if (e) return "Invalid scheme";
                                        h = "", l = dt, f = 0;
                                        continue
                                    }
                                    if (e && (u.isSpecial() != p(ct, h) || "file" == h && (u.includesCredentials() || null !== u.port) || "file" == u.scheme && !u.host)) return;
                                    if (u.scheme = h, e) return void (u.isSpecial() && ct[u.scheme] == u.port && (u.port = null));
                                    h = "", "file" == u.scheme ? l = Pt : u.isSpecial() && n && n.scheme == u.scheme ? l = vt : u.isSpecial() ? l = Ct : "/" == o[f + 1] ? (l = gt, f++) : (u.cannotBeABaseURL = !0, B(u.path, ""), l = Tt)
                                }
                                break;
                            case dt:
                                if (!n || n.cannotBeABaseURL && "#" != i) return "Invalid scheme";
                                if (n.cannotBeABaseURL && "#" == i) {
                                    u.scheme = n.scheme, u.path = g(n.path), u.query = n.query, u.fragment = "", u.cannotBeABaseURL = !0, l = Lt;
                                    break
                                }
                                l = "file" == n.scheme ? Pt : yt;
                                continue;
                            case vt:
                                if ("/" != i || "/" != o[f + 1]) {
                                    l = yt;
                                    continue
                                }
                                l = mt, f++;
                                break;
                            case gt:
                                if ("/" == i) {
                                    l = wt;
                                    break
                                }
                                l = It;
                                continue;
                            case yt:
                                if (u.scheme = n.scheme, i == r) u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = g(n.path), u.query = n.query; else if ("/" == i || "\\" == i && u.isSpecial()) l = xt; else if ("?" == i) u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = g(n.path), u.query = "", l = Dt; else {
                                    if ("#" != i) {
                                        u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = g(n.path), u.path.length--, l = It;
                                        continue
                                    }
                                    u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, u.path = g(n.path), u.query = n.query, u.fragment = "", l = Lt
                                }
                                break;
                            case xt:
                                if (!u.isSpecial() || "/" != i && "\\" != i) {
                                    if ("/" != i) {
                                        u.username = n.username, u.password = n.password, u.host = n.host, u.port = n.port, l = It;
                                        continue
                                    }
                                    l = wt
                                } else l = mt;
                                break;
                            case Ct:
                                if (l = mt, "/" != i || "/" != F(h, f + 1)) continue;
                                f++;
                                break;
                            case mt:
                                if ("/" != i && "\\" != i) {
                                    l = wt;
                                    continue
                                }
                                break;
                            case wt:
                                if ("@" == i) {
                                    d && (h = "%40" + h), d = !0, a = v(h);
                                    for (var m = 0; m < a.length; m++) {
                                        var w = a[m];
                                        if (":" != w || x) {
                                            var k = st(w, at);
                                            x ? u.password += k : u.username += k
                                        } else x = !0
                                    }
                                    h = ""
                                } else if (i == r || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial()) {
                                    if (d && "" == h) return "Invalid authority";
                                    f -= v(h).length + 1, h = "", l = kt
                                } else h += i;
                                break;
                            case kt:
                            case bt:
                                if (e && "file" == u.scheme) {
                                    l = Et;
                                    continue
                                }
                                if (":" != i || y) {
                                    if (i == r || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial()) {
                                        if (u.isSpecial() && "" == h) return "Invalid host";
                                        if (e && "" == h && (u.includesCredentials() || null !== u.port)) return;
                                        if (s = u.parseHost(h)) return s;
                                        if (h = "", l = Rt, e) return;
                                        continue
                                    }
                                    "[" == i ? y = !0 : "]" == i && (y = !1), h += i
                                } else {
                                    if ("" == h) return "Invalid host";
                                    if (s = u.parseHost(h)) return s;
                                    if (h = "", l = St, e == bt) return
                                }
                                break;
                            case St:
                                if (!O(Y, i)) {
                                    if (i == r || "/" == i || "?" == i || "#" == i || "\\" == i && u.isSpecial() || e) {
                                        if ("" != h) {
                                            var b = T(h, 10);
                                            if (b > 65535) return "Invalid port";
                                            u.port = u.isSpecial() && b === ct[u.scheme] ? null : b, h = ""
                                        }
                                        if (e) return;
                                        l = Rt;
                                        continue
                                    }
                                    return "Invalid port"
                                }
                                h += i;
                                break;
                            case Pt:
                                if (u.scheme = "file", "/" == i || "\\" == i) l = At; else {
                                    if (!n || "file" != n.scheme) {
                                        l = It;
                                        continue
                                    }
                                    if (i == r) u.host = n.host, u.path = g(n.path), u.query = n.query; else if ("?" == i) u.host = n.host, u.path = g(n.path), u.query = "", l = Dt; else {
                                        if ("#" != i) {
                                            lt(U(g(o, f), "")) || (u.host = n.host, u.path = g(n.path), u.shortenPath()), l = It;
                                            continue
                                        }
                                        u.host = n.host, u.path = g(n.path), u.query = n.query, u.fragment = "", l = Lt
                                    }
                                }
                                break;
                            case At:
                                if ("/" == i || "\\" == i) {
                                    l = Et;
                                    break
                                }
                                n && "file" == n.scheme && !lt(U(g(o, f), "")) && (ut(n.path[0], !0) ? B(u.path, n.path[0]) : u.host = n.host), l = It;
                                continue;
                            case Et:
                                if (i == r || "/" == i || "\\" == i || "?" == i || "#" == i) {
                                    if (!e && ut(h)) l = It; else if ("" == h) {
                                        if (u.host = "", e) return;
                                        l = Rt
                                    } else {
                                        if (s = u.parseHost(h)) return s;
                                        if ("localhost" == u.host && (u.host = ""), e) return;
                                        h = "", l = Rt
                                    }
                                    continue
                                }
                                h += i;
                                break;
                            case Rt:
                                if (u.isSpecial()) {
                                    if (l = It, "/" != i && "\\" != i) continue
                                } else if (e || "?" != i) if (e || "#" != i) {
                                    if (i != r && (l = It, "/" != i)) continue
                                } else u.fragment = "", l = Lt; else u.query = "", l = Dt;
                                break;
                            case It:
                                if (i == r || "/" == i || "\\" == i && u.isSpecial() || !e && ("?" == i || "#" == i)) {
                                    if (".." === (c = W(c = h)) || "%2e." === c || ".%2e" === c || "%2e%2e" === c ? (u.shortenPath(), "/" == i || "\\" == i && u.isSpecial() || B(u.path, "")) : ft(h) ? "/" == i || "\\" == i && u.isSpecial() || B(u.path, "") : ("file" == u.scheme && !u.path.length && ut(h) && (u.host && (u.host = ""), h = F(h, 0) + ":"), B(u.path, h)), h = "", "file" == u.scheme && (i == r || "?" == i || "#" == i)) for (; u.path.length > 1 && "" === u.path[0];) z(u.path);
                                    "?" == i ? (u.query = "", l = Dt) : "#" == i && (u.fragment = "", l = Lt)
                                } else h += st(i, it);
                                break;
                            case Tt:
                                "?" == i ? (u.query = "", l = Dt) : "#" == i ? (u.fragment = "", l = Lt) : i != r && (u.path[0] += st(i, rt));
                                break;
                            case Dt:
                                e || "#" != i ? i != r && ("'" == i && u.isSpecial() ? u.query += "%27" : u.query += "#" == i ? "%23" : st(i, rt)) : (u.fragment = "", l = Lt);
                                break;
                            case Lt:
                                i != r && (u.fragment += st(i, ot))
                        }
                        f++
                    }
                }, parseHost: function (t) {
                    var e, n, r;
                    if ("[" == F(t, 0)) {
                        if ("]" != F(t, t.length - 1)) return "Invalid host";
                        if (!(e = function (t) {
                            var e, n, r, o, i, a, s, c = [0, 0, 0, 0, 0, 0, 0, 0], u = 0, l = null, f = 0,
                                h = function () {
                                    return F(t, f)
                                };
                            if (":" == h()) {
                                if (":" != F(t, 1)) return;
                                f += 2, l = ++u
                            }
                            for (; h();) {
                                if (8 == u) return;
                                if (":" != h()) {
                                    for (e = n = 0; n < 4 && O($, h());) e = 16 * e + T(h(), 16), f++, n++;
                                    if ("." == h()) {
                                        if (0 == n) return;
                                        if (f -= n, u > 6) return;
                                        for (r = 0; h();) {
                                            if (o = null, r > 0) {
                                                if (!("." == h() && r < 4)) return;
                                                f++
                                            }
                                            if (!O(Y, h())) return;
                                            for (; O(Y, h());) {
                                                if (i = T(h(), 10), null === o) o = i; else {
                                                    if (0 == o) return;
                                                    o = 10 * o + i
                                                }
                                                if (o > 255) return;
                                                f++
                                            }
                                            c[u] = 256 * c[u] + o, 2 != ++r && 4 != r || u++
                                        }
                                        if (4 != r) return;
                                        break
                                    }
                                    if (":" == h()) {
                                        if (f++, !h()) return
                                    } else if (h()) return;
                                    c[u++] = e
                                } else {
                                    if (null !== l) return;
                                    f++, l = ++u
                                }
                            }
                            if (null !== l) for (a = u - l, u = 7; 0 != u && a > 0;) s = c[u], c[u--] = c[l + a - 1], c[l + --a] = s; else if (8 != u) return;
                            return c
                        }(q(t, 1, -1)))) return "Invalid host";
                        this.host = e
                    } else if (this.isSpecial()) {
                        if (t = x(t), O(J, t)) return "Invalid host";
                        if (null === (e = function (t) {
                            var e, n, r, o, i, a, s, c = j(t, ".");
                            if (c.length && "" == c[c.length - 1] && c.length--, (e = c.length) > 4) return t;
                            for (n = [], r = 0; r < e; r++) {
                                if ("" == (o = c[r])) return t;
                                if (i = 10, o.length > 1 && "0" == F(o, 0) && (i = O(Q, o) ? 16 : 8, o = q(o, 8 == i ? 1 : 2)), "" === o) a = 0; else {
                                    if (!O(10 == i ? X : 8 == i ? K : $, o)) return t;
                                    a = T(o, i)
                                }
                                B(n, a)
                            }
                            for (r = 0; r < e; r++) if (a = n[r], r == e - 1) {
                                if (a >= L(256, 5 - e)) return null
                            } else if (a > 255) return null;
                            for (s = M(n), r = 0; r < n.length; r++) s += n[r] * L(256, 3 - r);
                            return s
                        }(t))) return "Invalid host";
                        this.host = e
                    } else {
                        if (O(Z, t)) return "Invalid host";
                        for (e = "", n = v(t), r = 0; r < n.length; r++) e += st(n[r], rt);
                        this.host = e
                    }
                }, cannotHaveUsernamePasswordPort: function () {
                    return !this.host || this.cannotBeABaseURL || "file" == this.scheme
                }, includesCredentials: function () {
                    return "" != this.username || "" != this.password
                }, isSpecial: function () {
                    return p(ct, this.scheme)
                }, shortenPath: function () {
                    var t = this.path, e = t.length;
                    !e || "file" == this.scheme && 1 == e && ut(t[0], !0) || t.length--
                }, serialize: function () {
                    var t = this, e = t.scheme, n = t.username, r = t.password, o = t.host, i = t.port, a = t.path,
                        s = t.query, c = t.fragment, u = e + ":";
                    return null !== o ? (u += "//", t.includesCredentials() && (u += n + (r ? ":" + r : "") + "@"), u += nt(o), null !== i && (u += ":" + i)) : "file" == e && (u += "//"), u += t.cannotBeABaseURL ? a[0] : a.length ? "/" + U(a, "/") : "", null !== s && (u += "?" + s), null !== c && (u += "#" + c), u
                }, setHref: function (t) {
                    var e = this.parse(t);
                    if (e) throw I(e);
                    this.searchParams.update()
                }, getOrigin: function () {
                    var t = this.scheme, e = this.port;
                    if ("blob" == t) try {
                        return new Ot(t.path[0]).origin
                    } catch (t) {
                        return "null"
                    }
                    return "file" != t && this.isSpecial() ? t + "://" + nt(this.host) + (null !== e ? ":" + e : "") : "null"
                }, getProtocol: function () {
                    return this.scheme + ":"
                }, setProtocol: function (t) {
                    this.parse(C(t) + ":", ht)
                }, getUsername: function () {
                    return this.username
                }, setUsername: function (t) {
                    var e = v(C(t));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.username = "";
                        for (var n = 0; n < e.length; n++) this.username += st(e[n], at)
                    }
                }, getPassword: function () {
                    return this.password
                }, setPassword: function (t) {
                    var e = v(C(t));
                    if (!this.cannotHaveUsernamePasswordPort()) {
                        this.password = "";
                        for (var n = 0; n < e.length; n++) this.password += st(e[n], at)
                    }
                }, getHost: function () {
                    var t = this.host, e = this.port;
                    return null === t ? "" : null === e ? nt(t) : nt(t) + ":" + e
                }, setHost: function (t) {
                    this.cannotBeABaseURL || this.parse(t, kt)
                }, getHostname: function () {
                    var t = this.host;
                    return null === t ? "" : nt(t)
                }, setHostname: function (t) {
                    this.cannotBeABaseURL || this.parse(t, bt)
                }, getPort: function () {
                    var t = this.port;
                    return null === t ? "" : C(t)
                }, setPort: function (t) {
                    this.cannotHaveUsernamePasswordPort() || ("" == (t = C(t)) ? this.port = null : this.parse(t, St))
                }, getPathname: function () {
                    var t = this.path;
                    return this.cannotBeABaseURL ? t[0] : t.length ? "/" + U(t, "/") : ""
                }, setPathname: function (t) {
                    this.cannotBeABaseURL || (this.path = [], this.parse(t, Rt))
                }, getSearch: function () {
                    var t = this.query;
                    return t ? "?" + t : ""
                }, setSearch: function (t) {
                    "" == (t = C(t)) ? this.query = null : ("?" == F(t, 0) && (t = q(t, 1)), this.query = "", this.parse(t, Dt)), this.searchParams.update()
                }, getSearchParams: function () {
                    return this.searchParams.facade
                }, getHash: function () {
                    var t = this.fragment;
                    return t ? "#" + t : ""
                }, setHash: function (t) {
                    "" != (t = C(t)) ? ("#" == F(t, 0) && (t = q(t, 1)), this.fragment = "", this.parse(t, Lt)) : this.fragment = null
                }, update: function () {
                    this.query = this.searchParams.serialize() || null
                }
            };
            var Ot = function (t) {
                var e = h(this, Ut), n = w(arguments.length, 1) > 1 ? arguments[1] : void 0, r = S(e, new Ft(t, !1, n));
                i || (e.href = r.serialize(), e.origin = r.getOrigin(), e.protocol = r.getProtocol(), e.username = r.getUsername(), e.password = r.getPassword(), e.host = r.getHost(), e.hostname = r.getHostname(), e.port = r.getPort(), e.pathname = r.getPathname(), e.search = r.getSearch(), e.searchParams = r.getSearchParams(), e.hash = r.getHash())
            }, Ut = Ot.prototype, Nt = function (t, e) {
                return {
                    get: function () {
                        return P(this)[t]()
                    }, set: e && function (t) {
                        return P(this)[e](t)
                    }, configurable: !0, enumerable: !0
                }
            };
            if (i && (f(Ut, "href", Nt("serialize", "setHref")), f(Ut, "origin", Nt("getOrigin")), f(Ut, "protocol", Nt("getProtocol", "setProtocol")), f(Ut, "username", Nt("getUsername", "setUsername")), f(Ut, "password", Nt("getPassword", "setPassword")), f(Ut, "host", Nt("getHost", "setHost")), f(Ut, "hostname", Nt("getHostname", "setHostname")), f(Ut, "port", Nt("getPort", "setPort")), f(Ut, "pathname", Nt("getPathname", "setPathname")), f(Ut, "search", Nt("getSearch", "setSearch")), f(Ut, "searchParams", Nt("getSearchParams")), f(Ut, "hash", Nt("getHash", "setHash"))), l(Ut, "toJSON", function () {
                return P(this).serialize()
            }, {enumerable: !0}), l(Ut, "toString", function () {
                return P(this).serialize()
            }, {enumerable: !0}), R) {
                var Mt = R.createObjectURL, Bt = R.revokeObjectURL;
                Mt && l(Ot, "createObjectURL", c(Mt, R)), Bt && l(Ot, "revokeObjectURL", c(Bt, R))
            }
            m(Ot, "URL"), o({global: !0, constructor: !0, forced: !a, sham: !i}, {URL: Ot})
        }, function (t, e, n) {
            var r = n(31);
            t.exports = function (t, e, n) {
                return r.f(t, e, n)
            }
        }, function (t, e, n) {
            "use strict";
            var r = n(22), o = n(13), i = n(23), a = n(12), s = n(89), c = n(113), u = n(102), l = n(34), f = n(103),
                h = Object.assign, p = Object.defineProperty, d = o([].concat);
            t.exports = !h || a(function () {
                if (r && 1 !== h({b: 1}, h(p({}, "a", {
                    enumerable: !0, get: function () {
                        p(this, "b", {value: 3, enumerable: !1})
                    }
                }), {b: 2})).b) return !0;
                var t = {}, e = {}, n = Symbol();
                return t[n] = 7, "abcdefghijklmnopqrst".split("").forEach(function (t) {
                    e[t] = t
                }), 7 != h({}, t)[n] || "abcdefghijklmnopqrst" != s(h({}, e)).join("")
            }) ? function (t, e) {
                for (var n = l(t), o = arguments.length, a = 1, h = c.f, p = u.f; o > a;) for (var v, g = f(arguments[a++]), y = h ? d(s(g), h(g)) : s(g), x = y.length, C = 0; x > C;) v = y[C++], r && !i(p, g, v) || (n[v] = g[v]);
                return n
            } : h
        }, function (t, e, n) {
            "use strict";
            var r = n(13), o = /[^\0-\u007E]/, i = /[.\u3002\uFF0E\uFF61]/g,
                a = "Overflow: input needs wider integers to process", s = RangeError, c = r(i.exec), u = Math.floor,
                l = String.fromCharCode, f = r("".charCodeAt), h = r([].join), p = r([].push), d = r("".replace),
                v = r("".split), g = r("".toLowerCase), y = function (t) {
                    return t + 22 + 75 * (t < 26)
                }, x = function (t, e, n) {
                    var r = 0;
                    for (t = n ? u(t / 700) : t >> 1, t += u(t / e); t > 455;) t = u(t / 35), r += 36;
                    return u(r + 36 * t / (t + 38))
                }, C = function (t) {
                    var e, n, r = [], o = (t = function (t) {
                        for (var e = [], n = 0, r = t.length; n < r;) {
                            var o = f(t, n++);
                            if (o >= 55296 && o <= 56319 && n < r) {
                                var i = f(t, n++);
                                56320 == (64512 & i) ? p(e, ((1023 & o) << 10) + (1023 & i) + 65536) : (p(e, o), n--)
                            } else p(e, o)
                        }
                        return e
                    }(t)).length, i = 128, c = 0, d = 72;
                    for (e = 0; e < t.length; e++) (n = t[e]) < 128 && p(r, l(n));
                    var v = r.length, g = v;
                    for (v && p(r, "-"); g < o;) {
                        var C = 2147483647;
                        for (e = 0; e < t.length; e++) (n = t[e]) >= i && n < C && (C = n);
                        var m = g + 1;
                        if (C - i > u((2147483647 - c) / m)) throw s(a);
                        for (c += (C - i) * m, i = C, e = 0; e < t.length; e++) {
                            if ((n = t[e]) < i && ++c > 2147483647) throw s(a);
                            if (n == i) {
                                for (var w = c, k = 36; ;) {
                                    var b = k <= d ? 1 : k >= d + 26 ? 26 : k - d;
                                    if (w < b) break;
                                    var S = w - b, P = 36 - b;
                                    p(r, l(y(b + S % P))), w = u(S / P), k += 36
                                }
                                p(r, l(y(w))), d = x(c, m, g == v), c = 0, g++
                            }
                        }
                        c++, i++
                    }
                    return h(r, "")
                };
            t.exports = function (t) {
                var e, n, r = [], a = v(d(g(t), i, "."), ".");
                for (e = 0; e < a.length; e++) n = a[e], p(r, c(o, n) ? "xn--" + C(n) : n);
                return h(r, ".")
            }
        }, function (t, e) {
        }, function (t, e, n) {
            n(200)
        }])
});
