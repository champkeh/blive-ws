!function (t, e) {
    "object" == typeof exports && "object" == typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define([], e) : "object" == typeof exports ? exports.LiveDanmakuEngine = e() : t.LiveDanmakuEngine = e()
}(self, (function () {
    return function () {
        var t, e, n = {
            3776: function (t, e, n) {
                "use strict";
                var i = n(8081), r = n.n(i), o = n(3645), a = n.n(o)()(r());
                a.push([t.id, ".bilibili-danmaku{-webkit-user-select:none;-moz-user-select:none;user-select:none;position:absolute;white-space:pre;pointer-events:none;display:inline-block;will-change:transform;font-family:SimHei,'Microsoft JhengHei',Arial,Helvetica,sans-serif;font-weight:var(--weight,bold);line-height:1;font-size:var(--size,25px);color:var(--color,#fff);opacity:var(--opacity,1);z-index:var(--zIndex,0);text-shadow:1px 0 1px var(--shadowColor),0 1px 1px var(--shadowColor),0 -1px 1px var(--shadowColor),-1px 0 1px var(--shadowColor);transform:translateZ(0)}.bilibili-danmaku.bulge-emoji img{border-radius:4px}", ""]), e.Z = a
            }, 4775: function (t, e, n) {
                "use strict";
                var i = n(8081), r = n.n(i), o = n(3645), a = n.n(o)()(r());
                a.push([t.id, ".bilibili-danmaku{line-height:1.125}.bilibili-danmaku.mode-topMiddleFLoat{top:var(--top);left:50%;transform:translateX(-50%);z-index:2}.bilibili-danmaku.mode-bottomMiddleFLoat{top:var(--top);left:50%;transform:translateX(-50%);z-index:2}.bilibili-danmaku.master-middleFLoat{padding-left:1px;padding-right:1px;border:1px solid var(--borderColor)}", ""]), e.Z = a
            }, 9877: function (t, e, n) {
                "use strict";
                var i = n(8081), r = n.n(i), o = n(3645), a = n.n(o), s = n(1667), c = n.n(s),
                    u = new URL(n(5179), n.b), l = new URL(n(8411), n.b), f = a()(r()), h = c()(u), d = c()(l);
                f.push([t.id, ".bilibili-danmaku{line-height:1.125;display:flex}.bilibili-danmaku .normal-icon{width:auto;height:calc(var(--size) * 1.125);order:-1;margin-right:3px}.bilibili-danmaku .nescafe-icon{content:url(" + h + ")}.bilibili-danmaku .anniversary-icon{content:url(" + d + ")}.bilibili-danmaku.mode-roll{top:var(--top);left:var(--offset);-webkit-animation:roll linear var(--duration) forwards;animation:roll linear var(--duration) forwards;z-index:1}.bilibili-danmaku.mode-roll img{line-height:1;font-size:initial;vertical-align:top}.bilibili-danmaku.mode-reverseRoll{top:var(--top);right:var(--offset);-webkit-animation:roll-reverse linear var(--duration) forwards;animation:roll-reverse linear var(--duration) forwards;z-index:1}.bilibili-danmaku.master-roll{padding-left:1px;padding-right:1px;border:1px solid var(--borderColor)}@-webkit-keyframes roll{0%{transform:translateX(0) translateZ(0)}100%{transform:translateX(var(--translateX)) translateZ(0)}}@keyframes roll{0%{transform:translateX(0) translateZ(0)}100%{transform:translateX(var(--translateX)) translateZ(0)}}@-webkit-keyframes roll-reverse{0%{transform:translateX(0) translateZ(0)}100%{transform:translateX(calc(var(--translateX) * -1)) translateZ(0)}}@keyframes roll-reverse{0%{transform:translateX(0) translateZ(0)}100%{transform:translateX(calc(var(--translateX) * -1)) translateZ(0)}}", ""]), e.Z = f
            }, 3645: function (t) {
                "use strict";
                t.exports = function (t) {
                    var e = [];
                    return e.toString = function () {
                        return this.map((function (e) {
                            var n = "", i = void 0 !== e[5];
                            return e[4] && (n += "@supports (".concat(e[4], ") {")), e[2] && (n += "@media ".concat(e[2], " {")), i && (n += "@layer".concat(e[5].length > 0 ? " ".concat(e[5]) : "", " {")), n += t(e), i && (n += "}"), e[2] && (n += "}"), e[4] && (n += "}"), n
                        })).join("")
                    }, e.i = function (t, n, i, r, o) {
                        "string" == typeof t && (t = [[null, t, void 0]]);
                        var a = {};
                        if (i) for (var s = 0; s < this.length; s++) {
                            var c = this[s][0];
                            null != c && (a[c] = !0)
                        }
                        for (var u = 0; u < t.length; u++) {
                            var l = [].concat(t[u]);
                            i && a[l[0]] || (void 0 !== o && (void 0 === l[5] || (l[1] = "@layer".concat(l[5].length > 0 ? " ".concat(l[5]) : "", " {").concat(l[1], "}")), l[5] = o), n && (l[2] ? (l[1] = "@media ".concat(l[2], " {").concat(l[1], "}"), l[2] = n) : l[2] = n), r && (l[4] ? (l[1] = "@supports (".concat(l[4], ") {").concat(l[1], "}"), l[4] = r) : l[4] = "".concat(r)), e.push(l))
                        }
                    }, e
                }
            }, 1667: function (t) {
                "use strict";
                t.exports = function (t, e) {
                    return e || (e = {}), t ? (t = String(t.__esModule ? t.default : t), /^['"].*['"]$/.test(t) && (t = t.slice(1, -1)), e.hash && (t += e.hash), /["'() \t\n]|(%20)/.test(t) || e.needQuotes ? '"'.concat(t.replace(/"/g, '\\"').replace(/\n/g, "\\n"), '"') : t) : t
                }
            }, 8081: function (t) {
                "use strict";
                t.exports = function (t) {
                    return t[1]
                }
            }, 3379: function (t) {
                "use strict";
                var e = [];

                function n(t) {
                    for (var n = -1, i = 0; i < e.length; i++) if (e[i].identifier === t) {
                        n = i;
                        break
                    }
                    return n
                }

                function i(t, i) {
                    for (var o = {}, a = [], s = 0; s < t.length; s++) {
                        var c = t[s], u = i.base ? c[0] + i.base : c[0], l = o[u] || 0, f = "".concat(u, " ").concat(l);
                        o[u] = l + 1;
                        var h = n(f), d = {css: c[1], media: c[2], sourceMap: c[3], supports: c[4], layer: c[5]};
                        if (-1 !== h) e[h].references++, e[h].updater(d); else {
                            var p = r(d, i);
                            i.byIndex = s, e.splice(s, 0, {identifier: f, updater: p, references: 1})
                        }
                        a.push(f)
                    }
                    return a
                }

                function r(t, e) {
                    var n = e.domAPI(e);
                    return n.update(t), function (e) {
                        if (e) {
                            if (e.css === t.css && e.media === t.media && e.sourceMap === t.sourceMap && e.supports === t.supports && e.layer === t.layer) return;
                            n.update(t = e)
                        } else n.remove()
                    }
                }

                t.exports = function (t, r) {
                    var o = i(t = t || [], r = r || {});
                    return function (t) {
                        t = t || [];
                        for (var a = 0; a < o.length; a++) {
                            var s = n(o[a]);
                            e[s].references--
                        }
                        for (var c = i(t, r), u = 0; u < o.length; u++) {
                            var l = n(o[u]);
                            0 === e[l].references && (e[l].updater(), e.splice(l, 1))
                        }
                        o = c
                    }
                }
            }, 569: function (t) {
                "use strict";
                var e = {};
                t.exports = function (t, n) {
                    var i = function (t) {
                        if (void 0 === e[t]) {
                            var n = document.querySelector(t);
                            if (window.HTMLIFrameElement && n instanceof window.HTMLIFrameElement) try {
                                n = n.contentDocument.head
                            } catch (t) {
                                n = null
                            }
                            e[t] = n
                        }
                        return e[t]
                    }(t);
                    if (!i) throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
                    i.appendChild(n)
                }
            }, 9216: function (t) {
                "use strict";
                t.exports = function (t) {
                    var e = document.createElement("style");
                    return t.setAttributes(e, t.attributes), t.insert(e, t.options), e
                }
            }, 3565: function (t, e, n) {
                "use strict";
                t.exports = function (t) {
                    var e = n.nc;
                    e && t.setAttribute("nonce", e)
                }
            }, 9037: function (t) {
                "use strict";
                var e, n = (e = [], function (t, n) {
                    return e[t] = n, e.filter(Boolean).join("\n")
                });

                function i(t, e, i, r) {
                    var o;
                    if (i) o = ""; else {
                        o = "", r.supports && (o += "@supports (".concat(r.supports, ") {")), r.media && (o += "@media ".concat(r.media, " {"));
                        var a = void 0 !== r.layer;
                        a && (o += "@layer".concat(r.layer.length > 0 ? " ".concat(r.layer) : "", " {")), o += r.css, a && (o += "}"), r.media && (o += "}"), r.supports && (o += "}")
                    }
                    if (t.styleSheet) t.styleSheet.cssText = n(e, o); else {
                        var s = document.createTextNode(o), c = t.childNodes;
                        c[e] && t.removeChild(c[e]), c.length ? t.insertBefore(s, c[e]) : t.appendChild(s)
                    }
                }

                var r = {singleton: null, singletonCounter: 0};
                t.exports = function (t) {
                    var e = r.singletonCounter++, n = r.singleton || (r.singleton = t.insertStyleElement(t));
                    return {
                        update: function (t) {
                            i(n, e, !1, t)
                        }, remove: function (t) {
                            i(n, e, !0, t)
                        }
                    }
                }
            }, 7477: function (t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    BaseMode: function () {
                        return u
                    }, BaseSpaceManager: function () {
                        return l
                    }, CSSRender: function () {
                        return c
                    }
                });
                var i, r = function () {
                        function t(t, e, n) {
                            this.textData = t, this.config = Object.assign({}, e), this.width = 0, this.height = 0, this.element = null, this.endTime = 0, this.speed = 0, this.x = 0, this.y = 0, this.bottom = 0, this.parent = this.config.container, this.recyclingDiv = n, this.init()
                        }

                        return t.prototype.init = function () {
                            var t;
                            null === (t = this.textData.text) || void 0 === t || t.trim(), this.setShape(this.textRender(this.textData, this.config), this.textData), this.initTime(this.config.curTime())
                        }, t.prototype.getOutlineColor = function (t) {
                            return t.color ? 0 : 16777215
                        }, t.prototype.setShape = function (t, e) {
                            this.element = t.element, this.width = t.width, this.height = t.height
                        }, Object.defineProperty(t.prototype, "_x", {
                            get: function () {
                                return this.x
                            }, enumerable: !1, configurable: !0
                        }), Object.defineProperty(t.prototype, "_y", {
                            get: function () {
                                return this.y
                            }, enumerable: !1, configurable: !0
                        }), t.prototype.free = function (t) {
                            var e = this.config && this.config.isRecycling && !t;
                            return this.config = null, this.textData = null, this.textFree(this.element, e), !e && (this.element = null), this.element
                        }, t.prototype.hide = function () {
                            this.element.style.visibility = "hidden"
                        }, t.prototype.show = function () {
                            this.element.style.visibility = ""
                        }, t
                    }(), o = n(5928), a = (i = function (t, e) {
                        return i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        }, i(t, e)
                    }, function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function n() {
                            this.constructor = t
                        }

                        i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    }), s = function (t) {
                        function e(e, n, i) {
                            return t.call(this, e, n, i) || this
                        }

                        return a(e, t), e.prototype.textRender = function (t, e) {
                            var n, i = {
                                tagName: "div",
                                style: {},
                                class: (n = {"bilibili-danmaku": !0}, n[t.divClassName] = !!t.divClassName, n),
                                textContent: t.html || (t.text ? t.text.trim().replace(/(\r\n)|(\n)|(\r)/g, " ") : ""),
                                useAsHTML: !!t.html
                            }, r = this.getEmojiOptions(t);
                            (0, o.xF)(i, r);
                            var a = this.getExtraOptions(i, t, e);
                            (0, o.xF)(i, a);
                            var s = this.changeDOM(i, this.recyclingDiv);
                            !this.recyclingDiv && this.parent.appendChild(s);
                            var c = this.getDivInfo(s, t);
                            return s.style.display = "none", {element: s, width: c.width, height: c.height}
                        }, e.prototype.render = function () {
                            this.running || (this.running = !0, this.changeDOM(this.getRenderOptions(), this.element), this.element.style.display = "")
                        }, e.prototype.textFree = function (t, e) {
                            e ? (this.running = !1, (0, o.DU)(t)) : this.parent.removeChild(t)
                        }, e.prototype.changeDOM = function (t, e) {
                            try {
                                return (0, o.PD)(t, e || this.element || null)
                            } catch (t) {
                                return console.warn("[ERROR: changeDOM]"), null
                            }
                        }, e.prototype.getDivInfo = function (t, e) {
                            return t.getBoundingClientRect()
                        }, e.prototype.getEmojiOptions = function (t) {
                            var e, n, i;
                            if (1 === t.dmType && t.html) {
                                var r = null === (i = (0, o.o3)(null !== (n = null === (e = t.modeInfo) || void 0 === e ? void 0 : e.extra) && void 0 !== n ? n : "")) || void 0 === i ? void 0 : i.bulge_display,
                                    a = (1 === r ? 1.8 : 1.125) * t.size;
                                return {
                                    style: {height: a.toFixed(1) + "px", width: (a * t.emojiRatio).toFixed(1) + "px"},
                                    class: {"danmaku-emoji": !0, "bulge-emoji": 1 === r}
                                }
                            }
                            return {}
                        }, e
                    }(r), c = s, u = function () {
                        function t(t) {
                            this.config = t, this.spaceManager = this.setSpaceManager(t)
                        }

                        return t.prototype.onStart = function (t) {
                            this.spaceManager.add(t), t.mode = this
                        }, t.prototype.onEnd = function (t, e) {
                            return this.spaceManager.remove(t), t.mode = null, t.free(e)
                        }, t.prototype.onUpdate = function (t, e) {
                            return t.endTime >= e
                        }, t
                    }(), l = function () {
                        function t(t) {
                            this.config = t
                        }

                        return t.prototype.discard = function (t) {
                            t.time = -1
                        }, t
                    }(), f = n(3379), h = n.n(f), d = n(9037), p = n.n(d), m = n(569), v = n.n(m), y = n(3565), g = n.n(y),
                    b = n(9216), x = n.n(b), w = n(3776), A = {};
                A.setAttributes = g(), A.insert = v().bind(null, "head"), A.domAPI = p(), A.insertStyleElement = x(), h()(w.Z, A), w.Z && w.Z.locals && w.Z.locals
            }, 927: function (t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    default: function () {
                        return C
                    }
                });
                var i, r = n(7477), o = (i = function (t, e) {
                        return i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        }, i(t, e)
                    }, function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function n() {
                            this.constructor = t
                        }

                        i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    }), a = function (t) {
                        function e(e) {
                            var n = t.call(this, e) || this;
                            return n.list = [], n
                        }

                        return o(e, t), e.prototype.clean = function () {
                            this.list = []
                        }, e.prototype.add = function (t) {
                            t.x = (this.config.width - t.width) / 2, this.setY(t)
                        }, e.prototype.remove = function (t) {
                            var e = this.list.indexOf(t);
                            -1 !== e && this.list.splice(e, 1)
                        }, e.prototype.vCheck = function (t, e) {
                            if (t < (this.config.offsetTop || 0)) return !1;
                            var n = t + e.height;
                            return this.list.every((function (e) {
                                return e.y > n || e.bottom < t
                            }))
                        }, e.prototype.setY = function (t) {
                            var e = this.config, n = e.offsetTop, i = e.offsetBottom, r = e.videoOffsetHeight,
                                o = e.videoOffsetTop, a = e.height, s = e.danmakuArea, c = n + o || 0, u = c;
                            if (0 === this.list.length || this.vCheck(u, t)) this.setIn(t, u); else for (var l = r ? r + o : a, f = l * (s ? s / 100 : 1), h = l - (i || 0), d = 0; d < this.list.length; d++) {
                                if ((u = this.list[d].bottom + 1) > f || u + t.height > h) return t.textData.isMaster ? void this.setIn(t, c) : void this.discard(t);
                                if (this.vCheck(u, t)) return void this.setIn(t, u)
                            }
                        }, e.prototype.setIn = function (t, e) {
                            t.y = e, t.bottom = e + t.height;
                            var n = this.list.findIndex((function (e) {
                                return e.bottom >= t.bottom
                            }));
                            this.list.splice(n < 0 ? this.list.length : n, 0, t)
                        }, e
                    }(r.BaseSpaceManager), s = function () {
                        var t = function (e, n) {
                            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            }, t(e, n)
                        };
                        return function (e, n) {
                            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                            function i() {
                                this.constructor = e
                            }

                            t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                        }
                    }(), c = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return s(e, t), e.prototype.setSpaceManager = function (t) {
                            return new a(t)
                        }, e
                    }(r.BaseMode), u = c, l = n(5928), f = function () {
                        var t = function (e, n) {
                            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            }, t(e, n)
                        };
                        return function (e, n) {
                            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                            function i() {
                                this.constructor = e
                            }

                            t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                        }
                    }(), h = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return f(e, t), e.prototype.initTime = function (t) {
                            this.startTime = t, this.endTime = this.startTime + 1e3 * (this.textData.duration || this.config.duration), this.time = (this.endTime - this.startTime) / 1e3
                        }, Object.defineProperty(e.prototype, "_x", {
                            get: function () {
                                return (this.config.width - this.width) / 2
                            }, enumerable: !1, configurable: !0
                        }), Object.defineProperty(e.prototype, "_y", {
                            get: function () {
                                if (4 === this.textData.mode) {
                                    var t = this.config, e = t.videoOffsetHeight, n = t.videoOffsetTop, i = t.height,
                                        r = t.offsetBottom, o = t.offsetTop;
                                    return (e ? e + n : i) - (r || 0) - this.y - this.height + (o + n || 0)
                                }
                                return this.y
                            }, enumerable: !1, configurable: !0
                        }), e.prototype.getExtraOptions = function (t, e, n) {
                            var i, r = 3010 === e.modeInfo.mode,
                                o = 3011 === e.modeInfo.mode && JSON.parse((null === (i = e.modeInfo) || void 0 === i ? void 0 : i.extra) || "{}").anniversary_crowd && 1 !== e.dmType,
                                a = e.size * n.fontSize * (n.isMobile ? .75 : 1);
                            return {
                                style: {
                                    "--size": (a > 12 ? a : 12) + "px",
                                    "--color": (0, l.Xv)(e.color),
                                    "--opacity": n.opacity < .1 ? .1 : n.opacity,
                                    "--shadowColor": (0, l.Xv)(this.getOutlineColor(e)),
                                    "--borderColor": !!e.isMaster && (0, l.Xv)(e.borderColor)
                                },
                                class: {
                                    "master-middleFLoat": e.isMaster,
                                    "mode-topMiddleFLoat": 5 === e.mode,
                                    "mode-bottomMiddleFLoat": 4 === e.mode
                                },
                                textContent: t.textContent.replace(/(\r\n)|(\n)|(\r)/g, ""),
                                childNode: (r || o) && {
                                    icon: {
                                        tagName: "img",
                                        class: {"anniversary-icon": o, "nescafe-icon": r, "normal-icon": !0}
                                    }
                                }
                            }
                        }, e.prototype.getRenderOptions = function () {
                            return {style: {"--top": this._y + "px"}}
                        }, e
                    }(r.CSSRender), d = h, p = n(3379), m = n.n(p), v = n(9037), y = n.n(v), g = n(569), b = n.n(g),
                    x = n(3565), w = n.n(x), A = n(9216), k = n.n(A), O = n(4775), M = {};
                M.setAttributes = w(), M.insert = b().bind(null, "head"), M.domAPI = y(), M.insertStyleElement = k(), m()(O.Z, M), O.Z && O.Z.locals && O.Z.locals;
                var C = {mode: u, render: d}
            }, 4346: function (t, e, n) {
                "use strict";
                n.r(e), n.d(e, {
                    default: function () {
                        return C
                    }
                });
                var i, r = n(7477), o = (i = function (t, e) {
                        return i = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                            t.__proto__ = e
                        } || function (t, e) {
                            for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                        }, i(t, e)
                    }, function (t, e) {
                        if ("function" != typeof e && null !== e) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");

                        function n() {
                            this.constructor = t
                        }

                        i(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
                    }), a = function (t) {
                        function e(e) {
                            var n = t.call(this, e) || this;
                            return n.list = [], n
                        }

                        return o(e, t), e.prototype.clean = function () {
                            this.list = []
                        }, e.prototype.add = function (t) {
                            t.x = this.config.width, this.setY(t)
                        }, e.prototype.remove = function (t) {
                            var e = this.list.indexOf(t);
                            -1 !== e && this.list.splice(e, 1)
                        }, e.prototype.vCheck = function (t, e) {
                            if (t < (this.config.offsetTop || 0)) return !1;
                            var n = t + e.height, i = e.x + e.width,
                                r = e.headArrivalTime - Math.floor(e.time * (1 - this.config.density) * 500);
                            return this.list.every((function (o) {
                                return o.y > n || o.bottom < t || (o._x + o.width < e.x || o._x > i) && o.endTime <= r
                            }))
                        }, e.prototype.setY = function (t) {
                            var e = this.config, n = e.offsetTop, i = e.offsetBottom, r = e.videoOffsetHeight,
                                o = e.videoOffsetTop, a = e.height, s = e.danmakuArea, c = e.density, u = n + o || 0, l = u;
                            if (0 === this.list.length || this.vCheck(l, t)) this.setIn(t, l); else for (var f = r ? r + o : a, h = f * (s ? s / 100 : 1), d = f - (i || 0), p = 0; p < this.list.length; p++) {
                                if ((l = this.list[p].bottom + 1 + 50 * (1 - c)) > h || l + t.height > d) return t.textData.isMaster ? void this.setIn(t, u) : void this.discard(t);
                                if (this.vCheck(l, t)) return void this.setIn(t, l)
                            }
                        }, e.prototype.setIn = function (t, e) {
                            t.y = e, t.bottom = e + t.height;
                            var n = this.list.findIndex((function (e) {
                                return e.bottom >= t.bottom
                            }));
                            this.list.splice(n < 0 ? this.list.length : n, 0, t)
                        }, e
                    }(r.BaseSpaceManager), s = function () {
                        var t = function (e, n) {
                            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            }, t(e, n)
                        };
                        return function (e, n) {
                            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                            function i() {
                                this.constructor = e
                            }

                            t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                        }
                    }(), c = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return s(e, t), e.prototype.setSpaceManager = function (t) {
                            return new a(t)
                        }, e
                    }(r.BaseMode), u = c, l = n(5928), f = function () {
                        var t = function (e, n) {
                            return t = Object.setPrototypeOf || {__proto__: []} instanceof Array && function (t, e) {
                                t.__proto__ = e
                            } || function (t, e) {
                                for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n])
                            }, t(e, n)
                        };
                        return function (e, n) {
                            if ("function" != typeof n && null !== n) throw new TypeError("Class extends value " + String(n) + " is not a constructor or null");

                            function i() {
                                this.constructor = e
                            }

                            t(e, n), e.prototype = null === n ? Object.create(n) : (i.prototype = n.prototype, new i)
                        }
                    }(), h = function (t) {
                        function e() {
                            return null !== t && t.apply(this, arguments) || this
                        }

                        return f(e, t), e.prototype.initTime = function (t) {
                            this.startTime = t, this.speed = (512 + this.width) / (this.textData.duration || this.config.duration) * this.config.speedPlus, this.endTime = this.startTime + (this.config.width + this.width) / this.speed * 1e3, this.headArrivalTime = this.startTime + this.config.width / this.speed * 1e3, this.time = (this.endTime - this.startTime) / 1e3
                        }, Object.defineProperty(e.prototype, "_x", {
                            get: function () {
                                return this.config.width - (this.config.curTime() - this.startTime) / 1e3 * this.speed
                            }, enumerable: !1, configurable: !0
                        }), e.prototype.getExtraOptions = function (t, e, n) {
                            var i, r = 3010 === e.modeInfo.mode,
                                o = 3011 === e.modeInfo.mode && JSON.parse((null === (i = e.modeInfo) || void 0 === i ? void 0 : i.extra) || "{}").anniversary_crowd && 1 !== e.dmType,
                                a = e.size * n.fontSize * (n.isMobile ? .75 : 1);
                            return {
                                style: {
                                    "--size": (a > 12 ? a : 12) + "px",
                                    "--color": (0, l.Xv)(e.color),
                                    "--opacity": n.opacity < .1 ? .1 : n.opacity,
                                    "--shadowColor": (0, l.Xv)(this.getOutlineColor(e)),
                                    "--borderColor": !!e.isMaster && (0, l.Xv)(e.borderColor)
                                },
                                class: {
                                    "master-roll": e.isMaster,
                                    "mode-roll": 1 === e.mode,
                                    "mode-reverseRoll": 6 === e.mode
                                },
                                textContent: t.textContent.replace(/(\r\n)|(\n)|(\r)/g, ""),
                                childNode: (r || o) && {
                                    icon: {
                                        tagName: "img",
                                        class: {"anniversary-icon": o, "nescafe-icon": r, "normal-icon": !0}
                                    }
                                }
                            }
                        }, e.prototype.getRenderOptions = function () {
                            return {
                                style: {
                                    "--top": this._y + "px",
                                    "--offset": this._x + "px",
                                    "--duration": this.time + "s",
                                    "--translateX": -(this.config.width + this.width) + "px"
                                }
                            }
                        }, e
                    }(r.CSSRender), d = h, p = n(3379), m = n.n(p), v = n(9037), y = n.n(v), g = n(569), b = n.n(g),
                    x = n(3565), w = n.n(x), A = n(9216), k = n.n(A), O = n(9877), M = {};
                M.setAttributes = w(), M.insert = b().bind(null, "head"), M.domAPI = y(), M.insertStyleElement = k(), m()(O.Z, M), O.Z && O.Z.locals && O.Z.locals;
                var C = {mode: u, render: d}
            }, 5928: function (t, e, n) {
                "use strict";

                function i(t, e) {
                    try {
                        return JSON.parse(t)
                    } catch (t) {
                        return e || {}
                    }
                }

                function r(t, e) {
                    var n = e || document.createElement(t.tagName || "div"), i = t.class || {};
                    for (var o in i) !1 !== i[o] && (n.className += " " + o);
                    var a = t.style || {};
                    for (var o in a) !1 !== a[o] && (n.style.cssText += ";" + o + ":" + a[o]);
                    var s = t.attributes || {};
                    for (var o in s) !1 !== s[o] && n.setAttribute(o, "" + s[o]);
                    t.textContent && (t.useAsHTML ? n.innerHTML = t.textContent : n.textContent = t.textContent);
                    var c = t.childNode || {};
                    for (var o in c) "object" == typeof c[o] && n.appendChild(r(c[o]));
                    return n
                }

                function o(t) {
                    if (t.innerHTML = "", t.hasAttributes()) for (var e = t.attributes, n = e.length - 1; n >= 0; n--) t.removeAttribute(e[n].name)
                }

                function a(t, e) {
                    for (var n in e) t[n] = t[n] && "[object Object]" === t[n].toString() ? a(t[n], e[n]) : t[n] = e[n];
                    return t
                }

                function s(t) {
                    return "#" + ("000000" + t.toString(16)).slice(-6)
                }

                function c(t) {
                    switch (t) {
                        case 3006:
                            return {fontColorCustom: "#B3DDFF", fontColorMain: "#FFCE9F"};
                        case 3007:
                            return {fontColorCustom: "#FFDADA", fontColorMain: "#FFF6E4"};
                        case 3e3:
                            return {fontColorCustom: "#F0EBFF", fontColorMain: "#FFE680"};
                        default:
                            return {fontColorCustom: "#FFFFFF", fontColorMain: "#FFFFFF"}
                    }
                }

                n.d(e, {
                    DU: function () {
                        return o
                    }, PD: function () {
                        return r
                    }, Xv: function () {
                        return s
                    }, bS: function () {
                        return c
                    }, o3: function () {
                        return i
                    }, xF: function () {
                        return a
                    }
                })
            }, 8695: function (t, e, n) {
                var i = {
                    "./base/index": [7477],
                    "./battle/index": [6312, 313],
                    "./bpu/index": [6596, 820],
                    "./firework/index": [8232, 679],
                    "./firework2/index": [7088, 100],
                    "./lantern/index": [8633, 401],
                    "./meteor/index": [7570, 101],
                    "./middleFloat/index": [927],
                    "./parallel/index": [8622, 729],
                    "./quartet/index": [1249, 994],
                    "./roll/index": [4346]
                };

                function r(t) {
                    if (!n.o(i, t)) return Promise.resolve().then((function () {
                        var e = new Error("Cannot find module '" + t + "'");
                        throw e.code = "MODULE_NOT_FOUND", e
                    }));
                    var e = i[t], r = e[0];
                    return Promise.all(e.slice(1).map(n.e)).then((function () {
                        return n(r)
                    }))
                }

                r.keys = function () {
                    return Object.keys(i)
                }, r.id = 8695, t.exports = r
            }, 5179: function (t) {
                "use strict";
                t.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAMAAABHPGVmAAAAnFBMVEUAAADfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxXfJxX3af/mAAAAM3RSTlMABLbq5K0c+/fy2DegmxLIWBcI7t29f3k7LCgOppaEdGldQjHCh29iVFBLRo0l0M2S0tHte+AnAAACm0lEQVRo3u3XybKiQBAF0AsoiiDO86ztc3rz/f9/635haGEXIpVgRy84S2qRYeUlU1AoFAr/CctfuHiuySGocYUnCptlj3/M8CyTZrnKswZitPdTu75BFsdph1cdSztf1x3+OEJq3K/xho8brcX35cSDSGvZ49+WUKzDtErlBGNt1YioKS781xJvzGFo+OkwVul87r40tKNfMBHuPniXC2AdMIZjlCaPCV5agy/GGyGd0bzLZJUK71ml6vXKZhafeGj82WE2H0hm7W2KVIKZNg7ijeclijReXFi8GuKug02R0vwcJxWVHeK1BjVhiZ2FM/XSzBDH3ValTZ7gYqFuD7pRUKExvcfDyMzRORTrQwl5NYZmQQk9R2pWNqHrUqjSQkSgBht0PoUcCxEDXtQRo5xLkVPySglzua43XtQQ55UyPiLCispwnEmFIntElZKLYEuRAaJqqkieP6WHCMt5UAR1SngWFPdu41U0RE5QhtqE1PQoUYfS155q/Mz39a6NFd03JQ5qY+ivj25FiTIupmn+Q1oeBaptnI15FUDJZ7as9H0xwn0ujamJa2tPck1xCMDqUdkgyYkSS8CvaVG4ryu6r8lCS0KSJSU8Rq3xgFVlVnM8VGdGNh4bMZse0nhnFmWk0mQGfaTkUcpZI60thWYTpNYSdmMDEzYFXmFmLVv1hkqy1WVmQYEmzISycWKoLFtdZoYU2MFQ91/c147mHBhqVyVFTAU0FsDUhqY6IVKS7y7bhbkmTfROEPGYmr2G0IzpVOo+xMZMozZoIYtGim14REZ7Juv2XaQk/e6y98jFlvd8Dd6QE5exnNkQObKpKzfbyNVRC2x/jNx1birMfTzDgReNwQbPsqz+dNpevuGZNv3tykWhUCik8xttvAtevYO9IQAAAABJRU5ErkJggg=="
            }, 8411: function (t) {
                "use strict";
                t.exports = "data:image/png;base64,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"
            }
        }, i = {};

        function r(t) {
            var e = i[t];
            if (void 0 !== e) return e.exports;
            var o = i[t] = {id: t, exports: {}};
            return n[t](o, o.exports, r), o.exports
        }

        r.m = n, r.n = function (t) {
            var e = t && t.__esModule ? function () {
                return t.default
            } : function () {
                return t
            };
            return r.d(e, {a: e}), e
        }, r.d = function (t, e) {
            for (var n in e) r.o(e, n) && !r.o(t, n) && Object.defineProperty(t, n, {enumerable: !0, get: e[n]})
        }, r.f = {}, r.e = function (t) {
            return Promise.all(Object.keys(r.f).reduce((function (e, n) {
                return r.f[n](t, e), e
            }), []))
        }, r.u = function (t) {
            return {
                100: "firework2-index",
                101: "meteor-index",
                313: "battle-index",
                401: "lantern-index",
                679: "firework-index",
                729: "parallel-index",
                820: "bpu-index",
                994: "quartet-index"
            }[t] + "." + r.h().slice(0, 7) + ".js"
        }, r.h = function () {
            return "a19aa6dd4202ee54c52f"
        }, r.g = function () {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (t) {
                if ("object" == typeof window) return window
            }
        }(), r.o = function (t, e) {
            return Object.prototype.hasOwnProperty.call(t, e)
        }, t = {}, e = "@bilibili-live/live-danmaku-engine-v2:", r.l = function (n, i, o, a) {
            if (t[n]) t[n].push(i); else {
                var s, c;
                if (void 0 !== o) for (var u = document.getElementsByTagName("script"), l = 0; l < u.length; l++) {
                    var f = u[l];
                    if (f.getAttribute("src") == n || f.getAttribute("data-webpack") == e + o) {
                        s = f;
                        break
                    }
                }
                s || (c = !0, (s = document.createElement("script")).charset = "utf-8", s.timeout = 120, r.nc && s.setAttribute("nonce", r.nc), s.setAttribute("data-webpack", e + o), s.src = n), t[n] = [i];
                var h = function (e, i) {
                    s.onerror = s.onload = null, clearTimeout(d);
                    var r = t[n];
                    if (delete t[n], s.parentNode && s.parentNode.removeChild(s), r && r.forEach((function (t) {
                        return t(i)
                    })), e) return e(i)
                }, d = setTimeout(h.bind(null, void 0, {type: "timeout", target: s}), 12e4);
                s.onerror = h.bind(null, s.onerror), s.onload = h.bind(null, s.onload), c && document.head.appendChild(s)
            }
        }, r.r = function (t) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, {value: "Module"}), Object.defineProperty(t, "__esModule", {value: !0})
        }, function () {
            var t;
            r.g.importScripts && (t = r.g.location + "");
            var e = r.g.document;
            if (!t && e && (e.currentScript && (t = e.currentScript.src), !t)) {
                var n = e.getElementsByTagName("script");
                n.length && (t = n[n.length - 1].src)
            }
            if (!t) throw new Error("Automatic publicPath is not supported in this browser");
            t = t.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), r.p = t
        }(), function () {
            r.b = document.baseURI || self.location.href;
            var t = {646: 0};
            r.f.j = function (e, n) {
                var i = r.o(t, e) ? t[e] : void 0;
                if (0 !== i) if (i) n.push(i[2]); else {
                    var o = new Promise((function (n, r) {
                        i = t[e] = [n, r]
                    }));
                    n.push(i[2] = o);
                    var a = r.p + r.u(e), s = new Error;
                    r.l(a, (function (n) {
                        if (r.o(t, e) && (0 !== (i = t[e]) && (t[e] = void 0), i)) {
                            var o = n && ("load" === n.type ? "missing" : n.type), a = n && n.target && n.target.src;
                            s.message = "Loading chunk " + e + " failed.\n(" + o + ": " + a + ")", s.name = "ChunkLoadError", s.type = o, s.request = a, i[1](s)
                        }
                    }), "chunk-" + e, e)
                }
            };
            var e = function (e, n) {
                    var i, o, a = n[0], s = n[1], c = n[2], u = 0;
                    if (a.some((function (e) {
                        return 0 !== t[e]
                    }))) {
                        for (i in s) r.o(s, i) && (r.m[i] = s[i]);
                        c && c(r)
                    }
                    for (e && e(n); u < a.length; u++) o = a[u], r.o(t, o) && t[o] && t[o][0](), t[o] = 0
                },
                n = self.webpackChunk_bilibili_live_live_danmaku_engine_v2 = self.webpackChunk_bilibili_live_live_danmaku_engine_v2 || [];
            n.forEach(e.bind(null, 0)), n.push = e.bind(null, n.push.bind(n))
        }(), r.nc = void 0;
        var o = {};
        return function () {
            "use strict";
            r.r(o), r.d(o, {
                default: function () {
                    return g
                }
            });
            var t, e = r(4346), n = r(927), i = new Map;
            i.set(1, e.default), i.set(6, e.default), i.set(5, n.default), i.set(4, n.default);
            var a = ((t = {})[0] = null, t[3010] = null, t[3011] = null, t[3001] = "meteor", t[3e3] = "battle", t[3003] = "parallel", t[3004] = "firework", t[3005] = "firework2", t[3006] = "bpu", t[3008] = "quartet", t[3007] = "lantern", t);

            function s(t, e) {
                if (e._extra.danmakuAsNormal) {
                    if (e.forbidNormalDanmaku) return;
                    return c(t.mode)
                }
                var n, o = t.modeInfo.mode;
                if (e._extra.useMode.includes(o)) return 0 === o ? c(t.mode) : (n = o, i.has(n) ? {
                    name: n,
                    module: i.get(n)
                } : a[n] ? r(8695)("./".concat(a[n], "/index")).then((function (t) {
                    return i.set(n, t.default), {name: n, module: t.default}
                })) : void 0)
            }

            function c(t) {
                return {name: t, module: i.get(t)}
            }

            var u = new Set, l = ["blue_collision_frame", "red_collision_frame", "main_state_bg_trailing"];

            function f(t) {
                return new Promise((function (e, n) {
                    var i = new Image;
                    i.onload = function () {
                        u.add(t), e(t)
                    }, i.onerror = function () {
                        console.log("图片加载失败：", t), n(t)
                    }, i.src = t
                }))
            }

            function h(t, e) {
                return void 0 === e && (e = !1), n = this, i = void 0, o = function () {
                    var n, i, r;
                    return function (t, e) {
                        var n, i, r, o, a = {
                            label: 0, sent: function () {
                                if (1 & r[0]) throw r[1];
                                return r[1]
                            }, trys: [], ops: []
                        };
                        return o = {
                            next: s(0),
                            throw: s(1),
                            return: s(2)
                        }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                            return this
                        }), o;

                        function s(o) {
                            return function (s) {
                                return function (o) {
                                    if (n) throw new TypeError("Generator is already executing.");
                                    for (; a;) try {
                                        if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                        switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                            case 0:
                                            case 1:
                                                r = o;
                                                break;
                                            case 4:
                                                return a.label++, {value: o[1], done: !1};
                                            case 5:
                                                a.label++, i = o[1], o = [0];
                                                continue;
                                            case 7:
                                                o = a.ops.pop(), a.trys.pop();
                                                continue;
                                            default:
                                                if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                    a = 0;
                                                    continue
                                                }
                                                if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                    a.label = o[1];
                                                    break
                                                }
                                                if (6 === o[0] && a.label < r[1]) {
                                                    a.label = r[1], r = o;
                                                    break
                                                }
                                                if (r && a.label < r[2]) {
                                                    a.label = r[2], a.ops.push(o);
                                                    break
                                                }
                                                r[2] && a.ops.pop(), a.trys.pop();
                                                continue
                                        }
                                        o = e.call(t, a)
                                    } catch (t) {
                                        o = [6, t], i = 0
                                    } finally {
                                        n = r = 0
                                    }
                                    if (5 & o[0]) throw o[1];
                                    return {value: o[0] ? o[1] : void 0, done: !0}
                                }([o, s])
                            }
                        }
                    }(this, (function (o) {
                        switch (o.label) {
                            case 0:
                                if (!t) return [2, !0];
                                for (i in n = [], t) r = !1, e && l.includes(i) && (r = !0), !t[i] || u.has(t[i]) || r || n.push(f(t[i]));
                                return n.length > 0 ? [4, Promise.all(n).then((function () {
                                    return !0
                                })).catch((function () {
                                    return !1
                                }))] : [3, 2];
                            case 1:
                                return [2, o.sent()];
                            case 2:
                                return [2, !0]
                        }
                    }))
                }, new ((r = void 0) || (r = Promise))((function (t, e) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (t) {
                            e(t)
                        }
                    }

                    function c(e) {
                        var n;
                        e.done ? t(e.value) : (n = e.value, n instanceof r ? n : new r((function (t) {
                            t(n)
                        }))).then(a, s)
                    }

                    c((o = o.apply(n, i || [])).next())
                }));
                var n, i, r, o
            }

            var d = function (t, e, n) {
                if (n || 2 === arguments.length) for (var i, r = 0, o = e.length; r < o; r++) !i && r in e || (i || (i = Array.prototype.slice.call(e, 0, r)), i[r] = e[r]);
                return t.concat(i || Array.prototype.slice.call(e))
            }, p = function () {
                function t(t, e) {
                    this.config = t.config, this.type = e, this.modeMap = new Map, this.visualArray = [], this.recyclingDivList = [], this.init(), this.resize()
                }

                return t.prototype.init = function () {
                    this.container = this.config.container
                }, t.prototype.validate = function (t) {
                    if (!t.mode) return !1;
                    var e = this.config.danmakuNumber;
                    if (!this.config._extra.danmakuAsNormal) {
                        if (1 === t.dmType) return !1;
                        e = 150
                    }
                    return !!t.isMaster || !(this.visualArray.length >= e && 0 !== e)
                }, t.prototype.getText = function (t, e) {
                    var n;
                    return this.config.isRecycling && this.recyclingDivList.length && (n = this.recyclingDivList.shift()), new e(t, this.config, n)
                }, t.prototype.getMode = function (t, e) {
                    var n = this.modeMap.get(t);
                    return n || (n = new e(this.config), this.modeMap.set(t, n)), n
                }, t.prototype.start = function (t) {
                    var e, n, i, r, o, a;
                    return i = this, r = void 0, a = function () {
                        var i, r, o, a, c, u, l;
                        return function (t, e) {
                            var n, i, r, o, a = {
                                label: 0, sent: function () {
                                    if (1 & r[0]) throw r[1];
                                    return r[1]
                                }, trys: [], ops: []
                            };
                            return o = {
                                next: s(0),
                                throw: s(1),
                                return: s(2)
                            }, "function" == typeof Symbol && (o[Symbol.iterator] = function () {
                                return this
                            }), o;

                            function s(o) {
                                return function (s) {
                                    return function (o) {
                                        if (n) throw new TypeError("Generator is already executing.");
                                        for (; a;) try {
                                            if (n = 1, i && (r = 2 & o[0] ? i.return : o[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, o[1])).done) return r;
                                            switch (i = 0, r && (o = [2 & o[0], r.value]), o[0]) {
                                                case 0:
                                                case 1:
                                                    r = o;
                                                    break;
                                                case 4:
                                                    return a.label++, {value: o[1], done: !1};
                                                case 5:
                                                    a.label++, i = o[1], o = [0];
                                                    continue;
                                                case 7:
                                                    o = a.ops.pop(), a.trys.pop();
                                                    continue;
                                                default:
                                                    if (!((r = (r = a.trys).length > 0 && r[r.length - 1]) || 6 !== o[0] && 2 !== o[0])) {
                                                        a = 0;
                                                        continue
                                                    }
                                                    if (3 === o[0] && (!r || o[1] > r[0] && o[1] < r[3])) {
                                                        a.label = o[1];
                                                        break
                                                    }
                                                    if (6 === o[0] && a.label < r[1]) {
                                                        a.label = r[1], r = o;
                                                        break
                                                    }
                                                    if (r && a.label < r[2]) {
                                                        a.label = r[2], a.ops.push(o);
                                                        break
                                                    }
                                                    r[2] && a.ops.pop(), a.trys.pop();
                                                    continue
                                            }
                                            o = e.call(t, a)
                                        } catch (t) {
                                            o = [6, t], i = 0
                                        } finally {
                                            n = r = 0
                                        }
                                        if (5 & o[0]) throw o[1];
                                        return {value: o[0] ? o[1] : void 0, done: !0}
                                    }([o, s])
                                }
                            }
                        }(this, (function (f) {
                            switch (f.label) {
                                case 0:
                                    return this.validate(t) ? [4, s(t, this.config)] : [2];
                                case 1:
                                    return i = f.sent() || {}, r = i.name, o = i.module, a = !0, (c = null === (e = this.config._extra) || void 0 === e ? void 0 : e.material) && c[t.modeInfo.mode] ? [4, h(null === (n = c[t.modeInfo.mode]) || void 0 === n ? void 0 : n.material, !0)] : [3, 3];
                                case 2:
                                    a = f.sent(), f.label = 3;
                                case 3:
                                    if (o && a) {
                                        if (u = this.getMode(r, o.mode), l = this.getText(t, o.render), u.onStart(l), l.time <= 0) return this.end(l), [2];
                                        this.visualArray.push(l), this.config.danmakuInserting(t)
                                    }
                                    return [2]
                            }
                        }))
                    }, new ((o = void 0) || (o = Promise))((function (t, e) {
                        function n(t) {
                            try {
                                c(a.next(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function s(t) {
                            try {
                                c(a.throw(t))
                            } catch (t) {
                                e(t)
                            }
                        }

                        function c(e) {
                            var i;
                            e.done ? t(e.value) : (i = e.value, i instanceof o ? i : new o((function (t) {
                                t(i)
                            }))).then(n, s)
                        }

                        c((a = a.apply(i, r || [])).next())
                    }))
                }, t.prototype.resize = function () {
                    this.config.width = this.container.offsetWidth || 680, this.config.height = this.container.offsetHeight || 420
                }, t.prototype.beforeRender = function (t) {
                }, t.prototype.afterRender = function (t) {
                }, t.prototype.render = function (t) {
                    var e = this;
                    this.beforeRender(t), this.visualArray = this.visualArray.reduce((function (n, i) {
                        if (i.wait) return d(d([], n, !0), [i], !1);
                        var r = i.mode;
                        return r && r.onUpdate(i, t) ? (i.render(), d(d([], n, !0), [i], !1)) : (e.end(i), n)
                    }), []), this.afterRender(t)
                }, t.prototype.end = function (t, e) {
                    var n = t.mode, i = n && n.onEnd(t, e);
                    this.config.isRecycling && i && this.recyclingDivList.push(i)
                }, t.prototype.clearVisualList = function () {
                    var t = this;
                    this.visualArray.forEach((function (e) {
                        t.end(e, !0)
                    })), this.visualArray = []
                }, t.prototype.clearRecyclingDivList = function () {
                    this.recyclingDivList.forEach((function (t) {
                        t.remove()
                    })), this.recyclingDivList = []
                }, t.prototype.destroy = function () {
                    this.clearVisualList(), this.clearRecyclingDivList()
                }, t
            }(), m = p, v = r(5928), y = function () {
                function t(t) {
                    this.config = Object.assign({
                        container: document.getElementById("player"),
                        duration: 4.5,
                        danmakuNumber: 500,
                        density: 1,
                        danmakuArea: 100,
                        fontSize: 1,
                        offsetTop: 0,
                        offsetBottom: 0,
                        opacity: 1,
                        speedPlus: 1,
                        type: "div",
                        visible: !0,
                        isRecycling: !0,
                        isMobile: !1,
                        forbidNormalDanmaku: !1,
                        videoOffsetTop: 0,
                        videoOffsetHeight: 0,
                        danmakuInserting: function () {
                        },
                        curTime: function () {
                            return window.performance.now()
                        }
                    }, t), this.setLocalExtra(this.config.extra, this.config), this.container = this.config.container, this.setType()
                }

                return t.prototype.setType = function (t, e) {
                    var n = ["div"];
                    t = t || this.config.type, n.includes(t) || (t = n[0]);
                    var i = this.config.container;
                    if (i.tagName.toLowerCase() !== t) {
                        var r = i.getAttribute("class"), o = i.getAttribute("id"), a = i.parentNode, s = i.offsetWidth,
                            c = i.offsetHeight;
                        a.removeChild(i), this.manager && this.manager.destroy();
                        var u = e || document.createElement(t);
                        a.appendChild(u), u.setAttribute("class", r), u.width = s, u.height = c, o && u.setAttribute("id", o), this.config.container = u, this.manager = this.createManager(t)
                    } else this.manager || (this.manager = this.createManager(t))
                }, t.prototype.createManager = function (t) {
                    return new m(this, t)
                }, t.prototype.play = function () {
                    this.isStarted = !0, this.nextFrame()
                }, t.prototype.add = function (t) {
                    if (this.visible() && this.isStarted) {
                        var e = this.typeParse(t);
                        e && this.manager && this.manager.start(e)
                    }
                }, t.prototype.searchAreaDanmaku = function (t, e) {
                    if (!this.manager) return [];
                    if (!this.config._extra.danmakuAsNormal) return [];
                    t = t || 0, e = e || 0;
                    for (var n = [], i = this.manager.visualArray.length - 1; i >= 0; i--) {
                        var r = this.manager.visualArray[i];
                        r.textData && 6 === r.textData.mode ? t >= r.x - r._x - r.width - 5 && t <= r.x - r._x + 5 && e >= r._y - 5 && e - r.height <= r._y + 5 && n.push(r) : t >= r._x - 5 && t <= r._x + r.width + 5 && e >= r._y - 5 && e - r.height <= r._y + 5 && n.push(r)
                    }
                    return n
                }, t.prototype.option = function (t, e) {
                    var n, i;
                    if (t && void 0 !== e) switch (t) {
                        case"container":
                            return 1 === arguments.length ? this.config.container : void (e && "object" == typeof e && 1 === e.nodeType && "string" == typeof e.nodeName && this.setType(this.config.type, e));
                        case"type":
                            if (1 === arguments.length) return this.config.type;
                            this.setType(e), this.clear(), this.play();
                            break;
                        case"speedplus":
                            if (1 === arguments.length) return this.config.speedPlus;
                            this.config.speedPlus = e;
                            break;
                        case"fontsize":
                            if (1 === arguments.length) return this.config.fontSize;
                            this.config.fontSize = e;
                            break;
                        case"danmakunumber":
                            if (1 === arguments.length) return this.config.danmakuNumber;
                            this.config.danmakuNumber = e;
                            break;
                        case"danmakuArea":
                            if (1 === arguments.length) return this.config.danmakuArea;
                            var r = +e;
                            (r || 0 === r) && (r = r < 0 ? 0 : r > 100 ? 100 : r, this.config.danmakuArea = r);
                            break;
                        case"extra":
                            if (1 === arguments.length) return this.config.extra;
                            this.setLocalExtra(e, this.manager.config), (null === (i = null === (n = this.config) || void 0 === n ? void 0 : n.extra) || void 0 === i ? void 0 : i.type) !== e.type && this.manager.clearVisualList(), this.config.extra = e, this.preLoadImage(this.manager.config._extra.material);
                            break;
                        default:
                            if (1 === arguments.length) return this.config[t];
                            this.config[t] = e
                    }
                }, t.prototype.preLoadImage = function (t) {
                    var e;
                    for (var n in t) (null === (e = t[n]) || void 0 === e ? void 0 : e.material) && h(t[n].material)
                }, t.prototype.nextFrame = function () {
                    var t = this;
                    if (this.isStarted) {
                        if (this.visible() && this.manager) {
                            var e = this.config.curTime();
                            this.manager.render(e)
                        }
                        window.requestAnimationFrame((function () {
                            t.nextFrame()
                        }))
                    }
                }, t.prototype.visible = function (t) {
                    return 0 === arguments.length ? this.config.visible : (this.config.visible !== t && (this.config.visible = t, !this.config.visible && this.manager && this.manager.clearVisualList()), t)
                }, t.prototype.resize = function () {
                    this.manager && this.manager.resize()
                }, t.prototype.clear = function () {
                    this.manager.clearVisualList()
                }, t.prototype.destroy = function () {
                    this.isStarted = !1, this.manager.destroy()
                }, t.prototype.typeParse = function (t) {
                    return Object.assign({}, t, {
                        isMaster: !!t.border,
                        border: t.border || !1,
                        borderColor: t.borderColor || 6750207
                    })
                }, t.prototype.setLocalExtra = function (t, e) {
                    var n, i, r, o, a, s = {};
                    (0, v.o3)(null == t ? void 0 : t.config, []).forEach((function (t) {
                        t.mode && t.value && (s[t.mode] = (0, v.o3)(t.value))
                    }));
                    var c = {};
                    null === (n = null == t ? void 0 : t.material) || void 0 === n || n.forEach((function (t) {
                        c[t.dm_mode] = {
                            fontColorCustom: t.objective_state_dm_color,
                            fontColorMain: t.main_state_dm_color,
                            material: (0, v.o3)(t.web_material)
                        }
                    })), e._extra = {
                        type: null !== (i = null == t ? void 0 : t.type) && void 0 !== i ? i : 0,
                        useMode: null !== (r = null == t ? void 0 : t.useMode) && void 0 !== r ? r : [],
                        config: Object.assign({}, (null === (o = e._extra) || void 0 === o ? void 0 : o.config) || {}, s),
                        material: c,
                        danmakuAsNormal: [0, 11, 12].includes(null !== (a = null == t ? void 0 : t.type) && void 0 !== a ? a : 0)
                    }
                }, t
            }(), g = y
        }(), o
    }()
}));
