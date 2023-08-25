!function (global, factory) {
    "object" == typeof exports && "undefined" != typeof module
        ? factory(exports)
        : "function" == typeof define && define.amd
            ? define(["exports"], factory)
            : factory(global.roomBuffService = {})
}(this, function (exports) {

    let e = function () {
        return (e = Object.assign || function (t) {
            for (var n, e = 1, i = arguments.length; e < i; e++) for (var o in n = arguments[e]) Object.prototype.hasOwnProperty.call(n, o) && (t[o] = n[o]);
            return t
        }).apply(this, arguments)
    }

    function i(t, n, e, i) {
        return new (e || (e = Promise))(function (o, r) {
            function s(t) {
                try {
                    a(i.next(t))
                } catch (t) {
                    r(t)
                }
            }

            function u(t) {
                try {
                    a(i.throw(t))
                } catch (t) {
                    r(t)
                }
            }

            function a(t) {
                var n;
                t.done ? o(t.value) : (n = t.value, n instanceof e ? n : new e(function (t) {
                    t(n)
                })).then(s, u)
            }

            a((i = i.apply(t, n || [])).next())
        })
    }

    function o(t, n) {
        var e, i, o, r, s = {
            label: 0, sent: function () {
                if (1 & o[0]) throw o[1];
                return o[1]
            }, trys: [], ops: []
        };
        return r = {
            next: u(0),
            throw: u(1),
            return: u(2)
        }, "function" == typeof Symbol && (r[Symbol.iterator] = function () {
            return this
        }), r;

        function u(r) {
            return function (u) {
                return function (r) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (e = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                        switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                            case 0:
                            case 1:
                                o = r;
                                break;
                            case 4:
                                return s.label++, {value: r[1], done: !1};
                            case 5:
                                s.label++, i = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < o[1]) {
                                    s.label = o[1], o = r;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(r);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = n.call(t, s)
                    } catch (t) {
                        r = [6, t], i = 0
                    } finally {
                        e = o = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {value: r[0] ? r[1] : void 0, done: !0}
                }([r, u])
            }
        }
    }

    const n = {
        mainText: "mainText",
        normalText: "normalText",
        highlight: "highlightContent",
        separate: "border",
        headInfoBgPic: "headInfoBgPic",
        giftControlBgPic: "giftControlBgPic",
        rankListBgPic: "rankListBgPic",
        buttonText: "buttonText",
        infoCardBgPic: "infoCardBgPic",
    }


    const r = [
        {
            key: ".live-skin-main-text",
            pro: {color: n.mainText, fill: n.mainText}
        },
        {
            key: ".live-skin-main-a-text:link,.live-skin-main-a-text:visited",
            pro: {color: n.mainText}
        },
        {
            key: ".week-icon",
            pro: {color: n.mainText, "border-color": n.mainText}
        },
        {
            key: ".live-skin-main-a-text:hover,.live-skin-main-a-text:active",
            pro: {color: n.highlight}
        },
        {
            key: ".live-skin-normal-text",
            pro: {color: n.normalText}
        },
        {
            key: ".live-skin-normal-a-text",
            pro: {color: n.normalText}
        },
        {
            key: ".live-skin-normal-a-text:link,.live-skin-normal-a-text:visited",
            pro: {color: n.normalText}
        },
        {
            key: ".live-skin-normal-a-text:hover,.live-skin-normal-a-text:active",
            pro: {color: n.highlight}
        },
        {
            key: ".live-skin-highlight-text",
            pro: {color: n.highlight}
        },
        {
            key: ".live-skin-highlight-bg",
            pro: {"background-color": n.highlight}
        },
        {
            key: ".live-skin-highlight-border",
            pro: {"border-color": n.highlight}
        },
        {
            key: ".live-skin-highlight-button-bg.bl-button--primary",
            pro: {"background-color": n.highlight}
        },
        {
            key: ".live-skin-highlight-button-bg.bl-button--primary:hover",
            pro: {"background-color": n.highlight}
        },
        {
            key: ".live-skin-highlight-button-bg.bl-button--primary:active",
            pro: {"background-color": n.highlight}
        },
        {
            key: ".live-skin-separate-border",
            pro: {"border-color": n.separate}
        },
        {
            key: ".live-skin-separate-area",
            pro: {"background-color": n.separate}
        },
        {
            key: ".live-skin-separate-area-hover:hover",
            pro: {"background-color": n.separate}
        },
        {
            key: ".live-skin-button-text",
            pro: {color: n.buttonText, fill: n.buttonText}
        },
        {
            key: ".live-skin-normal-div-text",
            pro: {color: n.normalText}
        }
    ]
    const s = [
        {
            key: "#head-info-vm",
            pro: {"background-image": n.headInfoBgPic}
        },
        {
            key: "#gift-control-vm",
            pro: {"background-image": n.giftControlBgPic}
        },
        {
            key: "#rank-list-vm,#rank-list-ctnr-box",
            pro: {"background-image": n.rankListBgPic}
        },
        {
            key: "#chat-control-panel-vm",
            pro: {"background-image": n.rankListBgPic}
        },
        {
            key: "#anchor-card-skin-pic",
            pro: {"background-image": n.infoCardBgPic}
        }
    ]
    const u = [
        {
            key: "#head-info-vm,#gift-control-vm",
            pro: {border: "none !important", padding: "1px"}
        },
        {
            key: "#aside-area-vm",
            pro: {border: "none !important"}
        },
        {
            key: "#rank-list-vm,#rank-list-ctnr-box",
            pro: {"background-repeat": "no-repeat", "background-size": "100% auto"}
        },
        {
            key: "#chat-control-panel-vm",
            pro: {
                "background-repeat": "no-repeat",
                "background-size": "100% auto",
                "background-position": "bottom left"
            }
        },
        {
            key: "#anchor-card-skin-pic",
            pro: {"background-size": "cover"}
        }
    ]
    let a = "text/css"
    let l = "skin-css"
    let c = "data-skin-id"

    function f(t, n) {
        for (var e = [], i = "", o = t.length, r = "#" === t[0] ? 1 : 0; r < o; r++) (i += t[r]).length >= 2 && (e.push(i), i = "");
        if (e.length > 3) if (void 0 === n) {
            var s = e.splice(0, 1)[0];
            n = parseFloat((parseInt(s, 16) / 255).toFixed(1))
        } else e.splice(0, 1);
        return "rgba(" + (e.map(function (t) {
            return parseInt(t, 16)
        }).join(",") + "," + (void 0 === n ? 1 : n)) + ")"
    }

    function h(t) {
        void 0 === t && (t = {});
        var n = t.styles, e = t.renderCls, i = t.renderProp, o = t.prefixCls, r = "";
        return n.forEach(function (t) {
            var n = t.key, s = t.pro, u = Object.keys(s).map(function (t) {
                return i(t, s[t], n)
            }).join("\n    "), a = n.split(",").map(function (t) {
                return t.trim()
            }).map(function (t) {
                return e ? e(t) : t
            }).map(function (t) {
                return o ? o + " " + t : t
            }).join(",");
            r += "\n" + a + " {\n  " + u + "\n}\n      "
        }), r
    }

    function p(t) {
        var n = "";
        try {
            n += h({
                styles: r, prefixCls: ".live-skin-coloration-area", renderCls: function (t) {
                    return /button/.test(t) ? t + ":not(:disabled)" : t
                }, renderProp: function (n, e, i) {
                    var o = t[e];
                    return /button/.test(i) ? o = /active|hover/.test(i) ? f(o, .8) : f(o) : /color|fill/.test(n) ? o = f(o) + " !important" : o += " !important", n + ": " + o + ";"
                }
            }), n += h({
                styles: s, renderProp: function (n, e) {
                    return n + ': url("' + t[e] + '");'
                }
            }), n += h({
                styles: s, prefixCls: ".supportWebp", renderProp: function (n, e) {
                    return n + ': url("' + t[e] + '@90q.webp");'
                }
            }), n += h({
                styles: u, renderProp: function (t, n) {
                    return t + ": " + n + ";"
                }
            })
        } catch (t) {
            console.log(t)
        }
        return n
    }

    let d = function () {
        return function (t) {
            void 0 === t && (t = {}), this.id = null, this.skinConfig = null, this.leftTime = null, this.scatter = null;
            var n = t.id, i = void 0 === n ? 0 : n, o = t.skinConfig, r = t.leftTime, s = void 0 === r ? 0 : r,
                u = t.scatter;
            this.id = i, this.skinConfig = o ? e({buttonText: "#ffffff"}, o) : null, this.leftTime = s, this.scatter = u
        }
    }()

    function k() {
        const args = []
        for (let i = 0; i < arguments.length; i++) {
            args[i] = arguments[i]
        }
    }

    let g = function () {
        function t(t) {
            this.val = 1, this.time = null, this.val = t
        }

        return t.prototype.start = function () {
            var t = this;
            return new Promise(function (n, e) {
                t.time = setInterval(function () {
                    --t.val, t.val <= 0 && (t.stop(), n())
                }, 1e3)
            })
        }, t.prototype.stop = function () {
            this.time && (clearInterval(this.time), this.time = null)
        }, t
    }()
    let isBooted
    let m = {
        beforeMount: k,
        afterMount: k,
        beforeUnmount: k,
        afterUnmount: k,
    }
    let b = {
        checkAndUnmount: true,
        openScheduleTask: true,
        enableDebug: false,
    }
    let y = function () {
        function t(t, n) {
            this.countdown = null, this.skinProps = null, this.skinState = {style: null}, this.lifeCycles = m, this.options = b, this.lifeCycles = e(e({}, m), t), this.options = e(e({}, b), n)
        }

        return t.prototype.check = function (t) {
            return new Promise(function (n, e) {
                t.skinConfig ? t.leftTime <= 1 ? e("生效时间有误") : n() : e("没有配置信息")
            })
        }, t.prototype.task = function () {
            return i(this, void 0, void 0, function () {
                return o(this, function (t) {
                    switch (t.label) {
                        case 0:
                            return this.countdown = new g(this.skinProps.leftTime), [4, this.countdown.start()];
                        case 1:
                            return t.sent(), [4, this.unmount()];
                        case 2:
                            return t.sent(), [2]
                    }
                })
            })
        }, t.prototype.mount = function (t) {
            return i(this, void 0, void 0, function () {
                var n, e, i, r, s, u, a, l;
                return o(this, function (o) {
                    switch (o.label) {
                        case 0:
                            n = this.lifeCycles, e = n.beforeMount, i = n.afterMount, o.label = 1;
                        case 1:
                            return o.trys.push([1, 9, , 10]), [4, e(t, {})];
                        case 2:
                            return o.sent(), t.scatter ? (r = t.scatter, s = r.max, u = r.min, a = function (t, n) {
                                return Math.max(Math.ceil(Math.random() * t), n)
                            }(s, u), this.options.enableDebug && console.log("[@RoomBuffService debug]: lazyTime " + a + "s"), [4, function (t) {
                                return new Promise(function (n, e) {
                                    setTimeout(function () {
                                        n(t)
                                    }, 1e3 * t)
                                })
                            }(a)]) : [3, 4];
                        case 3:
                            o.sent(), o.label = 4;
                        case 4:
                            return this.options.checkAndUnmount ? [4, this.check(t)] : [3, 7];
                        case 5:
                            return o.sent(), [4, this.unmount()];
                        case 6:
                            o.sent(), o.label = 7;
                        case 7:
                            return this.countdown && (this.countdown.stop(), this.countdown = null), this.skinState = {style: p(t.skinConfig)}, this.skinProps = t, [4, i(this.skinProps, this.skinState)];
                        case 8:
                            return o.sent(), this.options.openScheduleTask && this.task().catch(function () {
                                return null
                            }), [3, 10];
                        case 9:
                            return l = o.sent(), this.options.enableDebug && console.log("[@RoomBuffService debug]: " + l), [3, 10];
                        case 10:
                            return [2]
                    }
                })
            })
        }, t.prototype.unmount = function (t) {
            return i(this, void 0, void 0, function () {
                var n, e, i;
                return o(this, function (o) {
                    switch (o.label) {
                        case 0:
                            return t && t.id && this.skinProps && this.skinProps.id && t.id.toString() !== this.skinProps.id.toString() ? [2] : (n = this.lifeCycles, e = n.beforeUnmount, i = n.afterUnmount, [4, e(this.skinProps, this.skinState)]);
                        case 1:
                            return o.sent(), this.countdown && (this.countdown.stop(), this.countdown = null), this.skinState.style = null, this.skinProps = null, [4, i(null, {})];
                        case 2:
                            return o.sent(), [2]
                    }
                })
            })
        }, t
    }()
    let x = function () {
        function t() {}

        t.filterSingleConfig = function (t) {
            var n = t || {}, e = n.id, i = void 0 === e ? 0 : e, o = n.skin_config, r = void 0 === o ? null : o,
                s = null;
            try {
                Boolean(r) && (s = JSON.parse(r))
            } catch (t) {
                console.error(t)
            }
            return {id: i, skinConfig: s}
        }
        t.filterServerSkinInfo = function (t) {
            var n = t || {}, e = n.end_time, i = void 0 === e ? 0 : e, o = n.current_time,
                r = i - (void 0 === o ? 0 : o), s = this.filterSingleConfig(t);
            return Object.assign({leftTime: r}, s)
        }
        t.filterSocketSkinInfo = function (t) {
            var n = t || {}, e = n.end_time, i = void 0 === e ? 0 : e, o = n.current_time, r = void 0 === o ? 0 : o,
                s = n.scatter, u = void 0 === s ? null : s, a = i - r,
                l = {id: t.skin_id, skinConfig: t.skin_config.web[1]};
            return Object.assign({leftTime: a, scatter: u}, l)
        }
        return t
    }()
    let w = false
    let P = null

    function T(t) {
        if (!w) {
            w = !0;
            var n = document.querySelector("#" + l), e = n && n.getAttribute(c);
            if (n) {
                if (e && t && t.id && e.toString() === t.id.toString()) return void (P = n);
                n.parentNode.removeChild(n)
            }
        }
    }

    function C(t) {
        (P = P || document.createElement("style")).type = a, P.setAttribute("id", l), P.setAttribute(c, "" + t.id), P.textContent = p(t.skinConfig), document.head.appendChild(P)
    }

    function S() {
        P && P.parentNode.removeChild(P), P = null
    }

    function B(config) {
        return "cmd" in config
            ? x.filterSocketSkinInfo(config)
            : "skin_config" in config
                ? x.filterServerSkinInfo(config)
                : config
    }

    exports.bootstrap = function (t, options) {
        return function (t, options) {
            if (isBooted) {
                throw new Error("The room-buff service cant be repeat bootstrap.")
            }
            isBooted = new y(t, options)
            return Promise.resolve().then(() => isBooted)
        }(e({
            beforeMount: "undefined" !== typeof window ? T : k,
            afterMount: "undefined" !== typeof window ? C : k,
            afterUnmount: "undefined" !== typeof window ? S : k
        }, t), options)
    }
    exports.mount = function (skinInfo) {
        return function (skinInfo) {
            if (!isBooted) {
                throw new Error("The room-buff service must be bootstrap.")
            }
            let n = new d(skinInfo)
            return Promise.resolve().then(() => {
                return isBooted.mount({
                    id: n.id,
                    skinConfig: n.skinConfig,
                    leftTime: n.leftTime,
                    scatter: n.scatter,
                })
            }).then(() => {
                return isBooted
            })
        }(skinInfo ? B(skinInfo) : {})
    }
    exports.unmount = function (t) {
        return function (t) {
            if (!isBooted) {
                throw new Error("The room-buff service must be bootstrap.")
            }
            let n = new d(t);
            return Promise.resolve().then(() => {
                return isBooted.unmount({id: n.id})
            }).then(() => {
                return isBooted
            })
        }(t ? B(t) : {})
    }

    Object.defineProperty(exports, "__esModule", {value: true})
})
