! function() {
    "use strict";
    var e, t, n, r, o, i, a, u = {},
        c = {};

    function f(e) {
        var t = c[e];
        if (void 0 !== t) return t.exports;
        var n = c[e] = {
            exports: {}
        };
        return u[e].call(n.exports, n, n.exports, f), n.exports
    }
    f.m = u, e = [], f.O = function(t, n, r, o) {
            if (!n) {
                var i = 1 / 0;
                for (s = 0; s < e.length; s++) {
                    n = e[s][0], r = e[s][1], o = e[s][2];
                    for (var a = !0, u = 0; u < n.length; u++)(!1 & o || i >= o) && Object.keys(f.O).every((function(e) {
                        return f.O[e](n[u])
                    })) ? n.splice(u--, 1) : (a = !1, o < i && (i = o));
                    if (a) {
                        e.splice(s--, 1);
                        var c = r();
                        void 0 !== c && (t = c)
                    }
                }
                return t
            }
            o = o || 0;
            for (var s = e.length; s > 0 && e[s - 1][2] > o; s--) e[s] = e[s - 1];
            e[s] = [n, r, o]
        }, f.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return f.d(t, {
                a: t
            }), t
        }, n = Object.getPrototypeOf ? function(e) {
            return Object.getPrototypeOf(e)
        } : function(e) {
            return e.__proto__
        }, f.t = function(e, r) {
            if (1 & r && (e = this(e)), 8 & r) return e;
            if ("object" == typeof e && e) {
                if (4 & r && e.__esModule) return e;
                if (16 & r && "function" == typeof e.then) return e
            }
            var o = Object.create(null);
            f.r(o);
            var i = {};
            t = t || [null, n({}), n([]), n(n)];
            for (var a = 2 & r && e;
                "object" == typeof a && !~t.indexOf(a); a = n(a)) Object.getOwnPropertyNames(a).forEach((function(t) {
                i[t] = function() {
                    return e[t]
                }
            }));
            return i.default = function() {
                return e
            }, f.d(o, i), o
        }, f.d = function(e, t) {
            for (var n in t) f.o(t, n) && !f.o(e, n) && Object.defineProperty(e, n, {
                enumerable: !0,
                get: t[n]
            })
        }, f.f = {}, f.e = function(e) {
            return Promise.all(Object.keys(f.f).reduce((function(t, n) {
                return f.f[n](e, t), t
            }), []))
        }, f.u = function(e) {
            return ({
                234: "335691c19e0be44ce3be3b931eb6fbb875bed505",
                250: "component---src-pages-bibliography-js",
                303: "component---src-pages-reviews-js",
                351: "commons",
                354: "component---src-pages-glossary-js",
                526: "component---src-pages-explainer-js",
                532: "styles",
                678: "component---src-pages-index-js",
                883: "component---src-pages-404-js"
            }[e] || e) + "-" + {
                234: "f1d99437e9d59eb2d71c",
                250: "af6dfa2f2af4362a1dc5",
                303: "367dd132082f55a86a31",
                351: "b4ba7901d1c8e5ecec24",
                354: "a05659d6f47f45ddd4da",
                526: "be4ed754c4475d78ace4",
                532: "0da30c4868f80da13552",
                678: "6224e2feb04ef0d16f6d",
                731: "d514c11a3e170a503556",
                843: "ec4302638027797cca24",
                883: "c786ae86e9c803111df4"
            }[e] + ".js"
        }, f.miniCssF = function(e) {
            return "styles.e2c0a95921aceacbab32.css"
        }, f.g = function() {
            if ("object" == typeof globalThis) return globalThis;
            try {
                return this || new Function("return this")()
            } catch (e) {
                if ("object" == typeof window) return window
            }
        }(), f.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, r = {}, o = "gatsby-starter-hello-world:", f.l = function(e, t, n, i) {
            if (r[e]) r[e].push(t);
            else {
                var a, u;
                if (void 0 !== n)
                    for (var c = document.getElementsByTagName("script"), s = 0; s < c.length; s++) {
                        var l = c[s];
                        if (l.getAttribute("src") == e || l.getAttribute("data-webpack") == o + n) {
                            a = l;
                            break
                        }
                    }
                a || (u = !0, (a = document.createElement("script")).charset = "utf-8", a.timeout = 120, f.nc && a.setAttribute("nonce", f.nc), a.setAttribute("data-webpack", o + n), a.src = e), r[e] = [t];
                var d = function(t, n) {
                        a.onerror = a.onload = null, clearTimeout(p);
                        var o = r[e];
                        if (delete r[e], a.parentNode && a.parentNode.removeChild(a), o && o.forEach((function(e) {
                                return e(n)
                            })), t) return t(n)
                    },
                    p = setTimeout(d.bind(null, void 0, {
                        type: "timeout",
                        target: a
                    }), 12e4);
                a.onerror = d.bind(null, a.onerror), a.onload = d.bind(null, a.onload), u && document.head.appendChild(a)
            }
        }, f.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, f.p = "/", i = function(e) {
            return new Promise((function(t, n) {
                var r = f.miniCssF(e),
                    o = f.p + r;
                if (function(e, t) {
                        for (var n = document.getElementsByTagName("link"), r = 0; r < n.length; r++) {
                            var o = (a = n[r]).getAttribute("data-href") || a.getAttribute("href");
                            if ("stylesheet" === a.rel && (o === e || o === t)) return a
                        }
                        var i = document.getElementsByTagName("style");
                        for (r = 0; r < i.length; r++) {
                            var a;
                            if ((o = (a = i[r]).getAttribute("data-href")) === e || o === t) return a
                        }
                    }(r, o)) return t();
                ! function(e, t, n, r) {
                    var o = document.createElement("link");
                    o.rel = "stylesheet", o.type = "text/css", o.onerror = o.onload = function(i) {
                        if (o.onerror = o.onload = null, "load" === i.type) n();
                        else {
                            var a = i && ("load" === i.type ? "missing" : i.type),
                                u = i && i.target && i.target.href || t,
                                c = new Error("Loading CSS chunk " + e + " failed.\n(" + u + ")");
                            c.code = "CSS_CHUNK_LOAD_FAILED", c.type = a, c.request = u, o.parentNode.removeChild(o), r(c)
                        }
                    }, o.href = t, document.head.appendChild(o)
                }(e, o, t, n)
            }))
        }, a = {
            658: 0
        }, f.f.miniCss = function(e, t) {
            a[e] ? t.push(a[e]) : 0 !== a[e] && {
                532: 1
            }[e] && t.push(a[e] = i(e).then((function() {
                a[e] = 0
            }), (function(t) {
                throw delete a[e], t
            })))
        },
        function() {
            var e = {
                658: 0
            };
            f.f.j = function(t, n) {
                var r = f.o(e, t) ? e[t] : void 0;
                if (0 !== r)
                    if (r) n.push(r[2]);
                    else if (/^(532|658)$/.test(t)) e[t] = 0;
                else {
                    var o = new Promise((function(n, o) {
                        r = e[t] = [n, o]
                    }));
                    n.push(r[2] = o);
                    var i = f.p + f.u(t),
                        a = new Error;
                    f.l(i, (function(n) {
                        if (f.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            a.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", a.name = "ChunkLoadError", a.type = o, a.request = i, r[1](a)
                        }
                    }), "chunk-" + t, t)
                }
            }, f.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, n) {
                    var r, o, i = n[0],
                        a = n[1],
                        u = n[2],
                        c = 0;
                    if (i.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (r in a) f.o(a, r) && (f.m[r] = a[r]);
                        if (u) var s = u(f)
                    }
                    for (t && t(n); c < i.length; c++) o = i[c], f.o(e, o) && e[o] && e[o][0](), e[o] = 0;
                    return f.O(s)
                },
                n = self.webpackChunkgatsby_starter_hello_world = self.webpackChunkgatsby_starter_hello_world || [];
            n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
        }()
}();
//# sourceMappingURL=webpack-runtime-b2e8703fcfe0e402f2b8.js.map