!function (global, factory) {
    "object" == typeof exports && "undefined" != typeof module
        ? factory(exports)
        : "function" == typeof define && define.amd
            ? define(["exports"], factory)
            : factory(global._ = {})
}(this, function factory(exports) {
    "use strict";

    function c(e) {
        return (c = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (e) {
            return typeof e
        } : function (e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(e)
    }

    function o(e) {
        return function (e) {
            if (Array.isArray(e)) return e
        }(e) || function (e) {
            if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
        }(e) || function (e, t) {
            if (e) {
                if ("string" == typeof e) return r(e, t);
                var n = Object.prototype.toString.call(e).slice(8, -1);
                return "Map" === (n = "Object" === n && e.constructor ? e.constructor.name : n) || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? r(e, t) : void 0
            }
        }(e) || function () {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function r(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
        return r
    }

    const u = "__css-map__", i = "__css-map-filter__", a = "map", l = "light_u", s = "light", f = "theme_style";

    function t(e) {
        var t = document.getElementById(i);
        if (t) {
            if (e === s && t.innerText.trim().startsWith("/*")) return;
            t.innerHTML = e === s ? "/*".concat(t.innerText, "*/") : t.innerText.trim().replace(/^[/*]+|[*/]+$/g, "")
        }
        h.set(f, e)
    }

    var m = "undefined" == typeof window, h = {
        get: function (e, t) {
            if (!(t = "object" === c(t = "string" == typeof t || m ? t : document.cookie) && m ? t && t.headers && t.headers.cookie : t)) return "";
            for (var n = t.split("; "), r = "", o = 0; o < n.length; o++) {
                var i = n[o].split("=");
                i[0] === e && (r = i[1])
            }
            return r
        }, set: function (e, t, n) {
            if (!m) {
                "number" == typeof (n = Object.assign({}, {path: "/"}, n)).expires && (n.expires = new Date(Date.now() + 864e5 * n.expires)), n.expires && (n.expires = n.expires.toUTCString());
                var r, o = "";
                for (r in n) n[r] && (o += "; " + r, !0 !== n[r] && (o += "=" + n[r].split(";")[0]));
                console.log("stringifyAttributes", o), document.cookie = e + "=" + t + o
            }
        }
    };

    function d(e) {
        e = e || s;
        return '\n  <link rel="stylesheet" href="'.concat(p(a), '"/>\n  <link rel="stylesheet" href="').concat(p(l), '"/>\n  <link id="').concat(u, '" rel="stylesheet" href="').concat(p(e), '"/>\n  ')
    }

    function y(e) {
        if (!document.getElementById(u)) for (var e = e || s, t = document.getElementsByTagName("head")[0], n = 0, r = [a, l, e]; n < r.length; n++) {
            var o = r[n], i = document.createElement("link");
            i.rel = "stylesheet", i.href = p(o), o !== a && o !== l && (i.id = u), t.insertBefore(i, t.firstChild)
        }
    }

    function p(e) {
        return "//s1.hdslb.com/bfs/static/jinkela/long/laputa-css/".concat(e, ".css")
    }

    function g(e, t, n) {
        t = 1 < arguments.length && void 0 !== t ? t : "", n = 2 < arguments.length && void 0 !== n ? n : s;
        if (1 === (e = e && 0 !== e.length ? e : ["html", "img"]).length) return r = "\n    ".concat(e[0], " {\n     filter: invert(0.9) hue-rotate(.5turn)\n    }\n    ").concat(t, "\n   "), n !== s ? r : "/* ".concat(r, "*/");
        var r = o(e), e = r[0], r = r.slice(1),
            e = "\n  ".concat(e + "", " {\n    filter: invert(0.9) hue-rotate(.5turn)\n  }\n\n  ").concat(r.join(","), "{\n    filter: invert(1) brightness(1) contrast(1) saturate(1) hue-rotate(0.5turn)\n  }\n  ").concat(t, "\n  ");
        return n !== s ? e : "/* ".concat(e, "*/")
    }

    exports.initThemeWithSSR = function (e, t) {
        return d(t || h.get(f, e.headers.cookie))
    }
    exports.initThemeWithCSR = function (e) {
        y(e || h.get(f, document.cookie))
    }
    exports.initTheme = function (e, t, n) {
        n = n || h.get(f, e);
        return (t ? d : y)(n)
    }
    exports.changeTheme = function (e) {
        document.getElementById(u).href = p(e), t(e)
    }
    exports.initThemeWithSSRByFilter = function (e, t, n, r) {
        n = n || h.get(f, e.headers.cookie);
        return "\n      <style id=".concat(i, ">\n        ").concat(g(t, r, n), "\n      </style>\n    ")
    }
    exports.initThemeWithCSRByFilter = function (e, t, n) {
        var r, o;
        document.getElementById(i) || (t = t || h.get(f, document.cookie), r = document.getElementsByTagName("head")[0], e = e, n = n, t = t, (o = document.createElement("style")).innerHTML = g(e, n, t), o.id = i, e = o, r.appendChild(e))
    }
    exports.changeThemeByFilter = t
    exports.getTheme = function () {
        var e = h.get(f, document.cookie);
        return e || s
    }

    Object.defineProperty(exports, "__esModule", {value: true})
});
