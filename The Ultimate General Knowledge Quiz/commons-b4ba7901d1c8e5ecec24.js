/*! For license information please see commons-b4ba7901d1c8e5ecec24.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world = self.webpackChunkgatsby_starter_hello_world || []).push([
    [351], {
        3204: function(e) {
            "use strict";
            const t = /[\p{Lu}]/u,
                a = /[\p{Ll}]/u,
                n = /^[\p{Lu}](?![\p{Lu}])/gu,
                r = /([\p{Alpha}\p{N}_]|$)/u,
                i = /[_.\- ]+/,
                o = new RegExp("^" + i.source),
                l = new RegExp(i.source + r.source, "gu"),
                s = new RegExp("\\d+" + r.source, "gu"),
                c = (e, r) => {
                    if ("string" != typeof e && !Array.isArray(e)) throw new TypeError("Expected the input to be `string | string[]`");
                    if (r = {
                            pascalCase: !1,
                            preserveConsecutiveUppercase: !1,
                            ...r
                        }, 0 === (e = Array.isArray(e) ? e.map((e => e.trim())).filter((e => e.length)).join("-") : e.trim()).length) return "";
                    const i = !1 === r.locale ? e => e.toLowerCase() : e => e.toLocaleLowerCase(r.locale),
                        c = !1 === r.locale ? e => e.toUpperCase() : e => e.toLocaleUpperCase(r.locale);
                    if (1 === e.length) return r.pascalCase ? c(e) : i(e);
                    return e !== i(e) && (e = ((e, n, r) => {
                        let i = !1,
                            o = !1,
                            l = !1;
                        for (let s = 0; s < e.length; s++) {
                            const c = e[s];
                            i && t.test(c) ? (e = e.slice(0, s) + "-" + e.slice(s), i = !1, l = o, o = !0, s++) : o && l && a.test(c) ? (e = e.slice(0, s - 1) + "-" + e.slice(s - 1), l = o, o = !1, i = !0) : (i = n(c) === c && r(c) !== c, l = o, o = r(c) === c && n(c) !== c)
                        }
                        return e
                    })(e, i, c)), e = e.replace(o, ""), e = r.preserveConsecutiveUppercase ? ((e, t) => (n.lastIndex = 0, e.replace(n, (e => t(e)))))(e, i) : i(e), r.pascalCase && (e = c(e.charAt(0)) + e.slice(1)), ((e, t) => (l.lastIndex = 0, s.lastIndex = 0, e.replace(l, ((e, a) => t(a))).replace(s, (e => t(e)))))(e, c)
                };
            e.exports = c, e.exports.default = c
        },
        4184: function(e, t) {
            var a;
            ! function() {
                "use strict";
                var n = {}.hasOwnProperty;

                function r() {
                    for (var e = [], t = 0; t < arguments.length; t++) {
                        var a = arguments[t];
                        if (a) {
                            var i = typeof a;
                            if ("string" === i || "number" === i) e.push(a);
                            else if (Array.isArray(a)) {
                                if (a.length) {
                                    var o = r.apply(null, a);
                                    o && e.push(o)
                                }
                            } else if ("object" === i) {
                                if (a.toString !== Object.prototype.toString && !a.toString.toString().includes("[native code]")) {
                                    e.push(a.toString());
                                    continue
                                }
                                for (var l in a) n.call(a, l) && a[l] && e.push(l)
                            }
                        }
                    }
                    return e.join(" ")
                }
                e.exports ? (r.default = r, e.exports = r) : void 0 === (a = function() {
                    return r
                }.apply(t, [])) || (e.exports = a)
            }()
        },
        8032: function(e, t, a) {
            "use strict";
            a.d(t, {
                L: function() {
                    return g
                },
                M: function() {
                    return E
                },
                P: function() {
                    return x
                },
                S: function() {
                    return Z
                },
                _: function() {
                    return l
                },
                a: function() {
                    return o
                },
                b: function() {
                    return d
                },
                g: function() {
                    return u
                },
                h: function() {
                    return s
                }
            });
            var n = a(7294),
                r = (a(3204), a(5697)),
                i = a.n(r);

            function o() {
                return o = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var n in a) Object.prototype.hasOwnProperty.call(a, n) && (e[n] = a[n])
                    }
                    return e
                }, o.apply(this, arguments)
            }

            function l(e, t) {
                if (null == e) return {};
                var a, n, r = {},
                    i = Object.keys(e);
                for (n = 0; n < i.length; n++) t.indexOf(a = i[n]) >= 0 || (r[a] = e[a]);
                return r
            }
            const s = () => "undefined" != typeof HTMLImageElement && "loading" in HTMLImageElement.prototype;

            function c(e, t, a) {
                const n = {};
                let r = "gatsby-image-wrapper";
                return "fixed" === a ? (n.width = e, n.height = t) : "constrained" === a && (r = "gatsby-image-wrapper gatsby-image-wrapper-constrained"), {
                    className: r,
                    "data-gatsby-image-wrapper": "",
                    style: n
                }
            }

            function d(e, t, a, n, r) {
                return void 0 === r && (r = {}), o({}, a, {
                    loading: n,
                    shouldLoad: e,
                    "data-main-image": "",
                    style: o({}, r, {
                        opacity: t ? 1 : 0
                    })
                })
            }

            function u(e, t, a, n, r, i, l, s) {
                const c = {};
                i && (c.backgroundColor = i, "fixed" === a ? (c.width = n, c.height = r, c.backgroundColor = i, c.position = "relative") : ("constrained" === a || "fullWidth" === a) && (c.position = "absolute", c.top = 0, c.left = 0, c.bottom = 0, c.right = 0)), l && (c.objectFit = l), s && (c.objectPosition = s);
                const d = o({}, e, {
                    "aria-hidden": !0,
                    "data-placeholder-image": "",
                    style: o({
                        opacity: t ? 0 : 1,
                        transition: "opacity 500ms linear"
                    }, c)
                });
                return d
            }
            const m = ["children"],
                p = function(e) {
                    let {
                        layout: t,
                        width: a,
                        height: r
                    } = e;
                    return "fullWidth" === t ? n.createElement("div", {
                        "aria-hidden": !0,
                        style: {
                            paddingTop: r / a * 100 + "%"
                        }
                    }) : "constrained" === t ? n.createElement("div", {
                        style: {
                            maxWidth: a,
                            display: "block"
                        }
                    }, n.createElement("img", {
                        alt: "",
                        role: "presentation",
                        "aria-hidden": "true",
                        src: "data:image/svg+xml;charset=utf-8,%3Csvg%20height='" + r + "'%20width='" + a + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",
                        style: {
                            maxWidth: "100%",
                            display: "block",
                            position: "static"
                        }
                    })) : null
                },
                g = function(e) {
                    let {
                        children: t
                    } = e, a = l(e, m);
                    return n.createElement(n.Fragment, null, n.createElement(p, o({}, a)), t, null)
                },
                f = ["src", "srcSet", "loading", "alt", "shouldLoad"],
                h = ["fallback", "sources", "shouldLoad"],
                b = function(e) {
                    let {
                        src: t,
                        srcSet: a,
                        loading: r,
                        alt: i = "",
                        shouldLoad: s
                    } = e, c = l(e, f);
                    return n.createElement("img", o({}, c, {
                        decoding: "async",
                        loading: r,
                        src: s ? t : void 0,
                        "data-src": s ? void 0 : t,
                        srcSet: s ? a : void 0,
                        "data-srcset": s ? void 0 : a,
                        alt: i
                    }))
                },
                v = function(e) {
                    let {
                        fallback: t,
                        sources: a = [],
                        shouldLoad: r = !0
                    } = e, i = l(e, h);
                    const s = i.sizes || (null == t ? void 0 : t.sizes),
                        c = n.createElement(b, o({}, i, t, {
                            sizes: s,
                            shouldLoad: r
                        }));
                    return a.length ? n.createElement("picture", null, a.map((e => {
                        let {
                            media: t,
                            srcSet: a,
                            type: i
                        } = e;
                        return n.createElement("source", {
                            key: t + "-" + i + "-" + a,
                            type: i,
                            media: t,
                            srcSet: r ? a : void 0,
                            "data-srcset": r ? void 0 : a,
                            sizes: s
                        })
                    })), c) : c
                };
            var y;
            b.propTypes = {
                src: r.string.isRequired,
                alt: r.string.isRequired,
                sizes: r.string,
                srcSet: r.string,
                shouldLoad: r.bool
            }, v.displayName = "Picture", v.propTypes = {
                alt: r.string.isRequired,
                shouldLoad: r.bool,
                fallback: r.exact({
                    src: r.string.isRequired,
                    srcSet: r.string,
                    sizes: r.string
                }),
                sources: r.arrayOf(r.oneOfType([r.exact({
                    media: r.string.isRequired,
                    type: r.string,
                    sizes: r.string,
                    srcSet: r.string.isRequired
                }), r.exact({
                    media: r.string,
                    type: r.string.isRequired,
                    sizes: r.string,
                    srcSet: r.string.isRequired
                })]))
            };
            const w = ["fallback"],
                x = function(e) {
                    let {
                        fallback: t
                    } = e, a = l(e, w);
                    return t ? n.createElement(v, o({}, a, {
                        fallback: {
                            src: t
                        },
                        "aria-hidden": !0,
                        alt: ""
                    })) : n.createElement("div", o({}, a))
                };
            x.displayName = "Placeholder", x.propTypes = {
                fallback: r.string,
                sources: null == (y = v.propTypes) ? void 0 : y.sources,
                alt: function(e, t, a) {
                    return e[t] ? new Error("Invalid prop `" + t + "` supplied to `" + a + "`. Validation failed.") : null
                }
            };
            const E = function(e) {
                return n.createElement(n.Fragment, null, n.createElement(v, o({}, e)), n.createElement("noscript", null, n.createElement(v, o({}, e, {
                    shouldLoad: !0
                }))))
            };
            E.displayName = "MainImage", E.propTypes = v.propTypes;
            const k = ["as", "className", "class", "style", "image", "loading", "imgClassName", "imgStyle", "backgroundColor", "objectFit", "objectPosition"],
                C = ["style", "className"],
                N = e => e.replace(/\n/g, ""),
                S = function(e, t, a) {
                    for (var n = arguments.length, r = new Array(n > 3 ? n - 3 : 0), o = 3; o < n; o++) r[o - 3] = arguments[o];
                    return e.alt || "" === e.alt ? i().string.apply(i(), [e, t, a].concat(r)) : new Error('The "alt" prop is required in ' + a + '. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')
                },
                L = {
                    image: i().object.isRequired,
                    alt: S
                },
                T = ["as", "image", "style", "backgroundColor", "className", "class", "onStartLoad", "onLoad", "onError"],
                O = ["style", "className"],
                j = new Set;
            let _, I;
            const M = function(e) {
                    let {
                        as: t = "div",
                        image: r,
                        style: i,
                        backgroundColor: d,
                        className: u,
                        class: m,
                        onStartLoad: p,
                        onLoad: g,
                        onError: f
                    } = e, h = l(e, T);
                    const {
                        width: b,
                        height: v,
                        layout: y
                    } = r, w = c(b, v, y), {
                        style: x,
                        className: E
                    } = w, k = l(w, O), C = (0, n.useRef)(), N = (0, n.useMemo)((() => JSON.stringify(r.images)), [r.images]);
                    m && (u = m);
                    const S = function(e, t, a) {
                        let n = "";
                        return "fullWidth" === e && (n = '<div aria-hidden="true" style="padding-top: ' + a / t * 100 + '%;"></div>'), "constrained" === e && (n = '<div style="max-width: ' + t + 'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\'' + a + "'%20width='" + t + "'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"), n
                    }(y, b, v);
                    return (0, n.useEffect)((() => {
                        _ || (_ = a.e(731).then(a.bind(a, 6731)).then((e => {
                            let {
                                renderImageToString: t,
                                swapPlaceholderImage: a
                            } = e;
                            return I = t, {
                                renderImageToString: t,
                                swapPlaceholderImage: a
                            }
                        })));
                        const e = C.current.querySelector("[data-gatsby-image-ssr]");
                        if (e && s()) return e.complete ? (null == p || p({
                            wasCached: !0
                        }), null == g || g({
                            wasCached: !0
                        }), setTimeout((() => {
                            e.removeAttribute("data-gatsby-image-ssr")
                        }), 0)) : (null == p || p({
                            wasCached: !0
                        }), e.addEventListener("load", (function t() {
                            e.removeEventListener("load", t), null == g || g({
                                wasCached: !0
                            }), setTimeout((() => {
                                e.removeAttribute("data-gatsby-image-ssr")
                            }), 0)
                        }))), void j.add(N);
                        if (I && j.has(N)) return;
                        let t, n;
                        return _.then((e => {
                            let {
                                renderImageToString: a,
                                swapPlaceholderImage: l
                            } = e;
                            C.current && (C.current.innerHTML = a(o({
                                isLoading: !0,
                                isLoaded: j.has(N),
                                image: r
                            }, h)), j.has(N) || (t = requestAnimationFrame((() => {
                                C.current && (n = l(C.current, N, j, i, p, g, f))
                            }))))
                        })), () => {
                            t && cancelAnimationFrame(t), n && n()
                        }
                    }), [r]), (0, n.useLayoutEffect)((() => {
                        j.has(N) && I && (C.current.innerHTML = I(o({
                            isLoading: j.has(N),
                            isLoaded: j.has(N),
                            image: r
                        }, h)), null == p || p({
                            wasCached: !0
                        }), null == g || g({
                            wasCached: !0
                        }))
                    }), [r]), (0, n.createElement)(t, o({}, k, {
                        style: o({}, x, i, {
                            backgroundColor: d
                        }),
                        className: E + (u ? " " + u : ""),
                        ref: C,
                        dangerouslySetInnerHTML: {
                            __html: S
                        },
                        suppressHydrationWarning: !0
                    }))
                },
                P = (0, n.memo)((function(e) {
                    return e.image ? (0, n.createElement)(M, e) : null
                }));
            P.propTypes = L, P.displayName = "GatsbyImage";
            const R = ["src", "__imageData", "__error", "width", "height", "aspectRatio", "tracedSVGOptions", "placeholder", "formats", "quality", "transformOptions", "jpgOptions", "pngOptions", "webpOptions", "avifOptions", "blurredOptions", "breakpoints", "outputPixelDensities"];

            function A(e) {
                return function(t) {
                    let {
                        src: a,
                        __imageData: r,
                        __error: i
                    } = t, s = l(t, R);
                    return i && console.warn(i), r ? n.createElement(e, o({
                        image: r
                    }, s)) : (console.warn("Image not loaded", a), null)
                }
            }
            const q = A((function(e) {
                    let {
                        as: t = "div",
                        className: a,
                        class: r,
                        style: i,
                        image: s,
                        loading: m = "lazy",
                        imgClassName: p,
                        imgStyle: f,
                        backgroundColor: h,
                        objectFit: b,
                        objectPosition: v
                    } = e, y = l(e, k);
                    if (!s) return console.warn("[gatsby-plugin-image] Missing image prop"), null;
                    r && (a = r), f = o({
                        objectFit: b,
                        objectPosition: v,
                        backgroundColor: h
                    }, f);
                    const {
                        width: w,
                        height: S,
                        layout: L,
                        images: T,
                        placeholder: O,
                        backgroundColor: j
                    } = s, _ = c(w, S, L), {
                        style: I,
                        className: M
                    } = _, P = l(_, C), R = {
                        fallback: void 0,
                        sources: []
                    };
                    return T.fallback && (R.fallback = o({}, T.fallback, {
                        srcSet: T.fallback.srcSet ? N(T.fallback.srcSet) : void 0
                    })), T.sources && (R.sources = T.sources.map((e => o({}, e, {
                        srcSet: N(e.srcSet)
                    })))), n.createElement(t, o({}, P, {
                        style: o({}, I, i, {
                            backgroundColor: h
                        }),
                        className: M + (a ? " " + a : "")
                    }), n.createElement(g, {
                        layout: L,
                        width: w,
                        height: S
                    }, n.createElement(x, o({}, u(O, !1, L, w, S, j, b, v))), n.createElement(E, o({
                        "data-gatsby-image-ssr": "",
                        className: p
                    }, y, d("eager" === m, !1, R, m, f)))))
                })),
                z = function(e, t) {
                    for (var a = arguments.length, n = new Array(a > 2 ? a - 2 : 0), r = 2; r < a; r++) n[r - 2] = arguments[r];
                    return "fullWidth" !== e.layout || "width" !== t && "height" !== t || !e[t] ? i().number.apply(i(), [e, t].concat(n)) : new Error('"' + t + '" ' + e[t] + " may not be passed when layout is fullWidth.")
                },
                W = new Set(["fixed", "fullWidth", "constrained"]),
                F = {
                    src: i().string.isRequired,
                    alt: S,
                    width: z,
                    height: z,
                    sizes: i().string,
                    layout: e => {
                        if (void 0 !== e.layout && !W.has(e.layout)) return new Error("Invalid value " + e.layout + '" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')
                    }
                };
            q.displayName = "StaticImage", q.propTypes = F;
            const Z = A(P);
            Z.displayName = "StaticImage", Z.propTypes = F
        },
        4849: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = a(4184),
                r = a.n(n),
                i = a(7294);
            var o = e => {
                let {
                    toggleMobileMenu: t,
                    menuOpen: a
                } = e;
                const n = r()("index-module--mobileNavButton--fbbe2", {
                    "index-module--active--4afdf": a
                });
                return i.createElement("button", {
                    onClick: () => t(!a),
                    className: n,
                    "aria-label": a ? "Close website navigation" : "Open website navigation",
                    "aria-expanded": a
                }, i.createElement("span", {
                    className: "index-module--top--84b60"
                }), i.createElement("span", {
                    className: "index-module--middle--56059"
                }), i.createElement("span", {
                    className: "index-module--bottom--1e435"
                }))
            }
        },
        6079: function(e, t, a) {
            "use strict";
            var n = a(7294),
                r = a(9826);
            t.Z = e => {
                let {
                    footer: t
                } = e;
                return n.createElement(r.r.Consumer, null, (e => n.createElement("button", {
                    className: "button button-rainbow " + (t && "button-rainbowAlt button-footer"),
                    onClick: e.toggleModal
                }, "Buy now")))
            }
        },
        489: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = a(7294),
                r = a(6079),
                i = a(8032);
            var o = () => n.createElement("footer", {
                className: "index-module--footer--18067"
            }, n.createElement("div", {
                className: "index-module--textLeft--8e0e2 h1"
            }, "Everything is"), n.createElement("div", {
                className: "index-module--bookCoverWrapper--fb573"
            }, n.createElement(i.S, {
                src: "../../assets/images/book-cover-flattened.jpg",
                alt: "The book cover",
                __imageData: a(9542)
            }), n.createElement(r.Z, {
                footer: !0
            })), n.createElement("div", {
                className: "index-module--textRight--8f270 h1"
            }, "about to change"))
        },
        3505: function(e, t, a) {
            "use strict";
            a.d(t, {
                J: function() {
                    return o
                },
                Z: function() {
                    return l
                }
            });
            var n = a(7294),
                r = a(4184),
                i = a.n(r);
            const o = e => {
                let {
                    children: t,
                    span: a,
                    start: r,
                    verticalStretch: o,
                    className: l,
                    noBottomMargin: s
                } = e;
                const c = i()("index-module--col--6cdff", l, {
                    "index-module--verticalStretch--1c43e": o,
                    "index-module--noBottomMargin--ad664": s
                });
                return n.createElement("div", {
                    className: c,
                    style: {
                        gridColumn: (r || "1") + " / span " + (a || "12")
                    }
                }, t)
            };
            var l = e => {
                let {
                    children: t,
                    className: a,
                    columns: r,
                    reverseOrder: o,
                    padding: l,
                    mobilePadding: s,
                    desktopPadding: c,
                    singleColumn: d,
                    verticalCenter: u,
                    verticalEnd: m,
                    verticalSpaceBetween: p,
                    orderFix: g
                } = e;
                const f = i()("index-module--gridContainer--c68d5", a, {
                    "index-module--oneColumn--93c65": 1 === r,
                    "index-module--twoColumns--77551": 2 === r,
                    "index-module--threeColumns--b0e12": 3 === r,
                    "index-module--fourColumns--c826d": 4 === r,
                    "index-module--reverseOrder--c3b25": o,
                    "index-module--paddingTop--37fac": "top" === l || "both" === l,
                    "index-module--paddingBottom--d7057": "bottom" === l || "both" === l,
                    "index-module--mobilePaddingTop--49b47": "top" === s,
                    "index-module--desktopPaddingTop--716e7": "top" === c,
                    "index-module--singleColumn--b6f44": d,
                    "index-module--verticalCenter--0e27b": u,
                    "index-module--verticalEnd--ec392": m,
                    "index-module--verticalSpaceBetween--69eae": p,
                    "index-module--orderFix--09ea2": g
                });
                return n.createElement("div", {
                    className: f
                }, t)
            }
        },
        9302: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = a(7294),
                r = a(3734),
                i = a(4849);
            var o = e => {
                let {
                    visible: t,
                    toggleMobileMenu: a,
                    menuOpen: o,
                    transparent: l
                } = e;
                return n.createElement("header", {
                    className: "index-module--header--85658 " + (t && "index-module--visible--035d5") + " " + (l && "index-module--transparent--90234")
                }, n.createElement("nav", {
                    className: "index-module--menu--72108"
                }, n.createElement(i.Z, {
                    toggleMobileMenu: a,
                    menuOpen: o,
                    "aria-controls": "nav"
                }), n.createElement(r.Z, null)))
            }
        },
        3734: function(e, t, a) {
            "use strict";
            var n = a(7294),
                r = a(1883);
            t.Z = e => {
                let {
                    activePage: t,
                    toggleMobileMenu: a,
                    menuOpen: i
                } = e;
                return n.createElement("ul", null, n.createElement("li", {
                    className: "home" === t ? "active" : null
                }, n.createElement(r.Link, {
                    onClick: () => a ? a(!i) : null,
                    to: "/"
                }, "Home")), n.createElement("li", {
                    className: "explainer" === t ? "active" : null
                }, n.createElement(r.Link, {
                    onClick: () => a ? a(!i) : null,
                    to: "/explainer/"
                }, "Explainer")), n.createElement("li", {
                    className: "glossary" === t ? "active" : null
                }, n.createElement(r.Link, {
                    onClick: () => a ? a(!i) : null,
                    to: "/glossary/"
                }, "Glossary")), n.createElement("li", {
                    className: "reviews" === t ? "active" : null
                }, n.createElement(r.Link, {
                    onClick: () => a ? a(!i) : null,
                    to: "/reviews/"
                }, "Reviews")), n.createElement("li", {
                    className: "bibliography" === t ? "active" : null
                }, n.createElement(r.Link, {
                    onClick: () => a ? a(!i) : null,
                    to: "/bibliography/"
                }, "Bibliography")))
            }
        },
        6696: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return o
                }
            });
            var n = a(7294),
                r = a(4184),
                i = a.n(r);
            var o = e => {
                let {
                    children: t,
                    id: a,
                    className: r,
                    fullHeight: o,
                    afterChildren: l,
                    beforeChildren: s,
                    padding: c,
                    verticalCenter: d,
                    backgroundColor: u
                } = e;
                const m = i()("index-module--section--30662", r, {
                    "index-module--fullHeight--26dce": o,
                    "index-module--paddingTop--10f06": "top" === c || "both" === c,
                    "index-module--paddingBottom--e1441": "bottom" === c || "both" === c,
                    "index-module--verticalCenter--1cf59": d
                });
                return n.createElement("section", {
                    className: m,
                    style: {
                        backgroundColor: u
                    },
                    id: a
                }, s && s, n.createElement("div", {
                    className: "index-module--inner--27812"
                }, t), l && l)
            }
        },
        9542: function(e) {
            "use strict";
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/f02c39cc58e8a4552fd153882e6ac023/2c798/book-cover-flattened.jpg","srcSet":"/static/f02c39cc58e8a4552fd153882e6ac023/0cbb7/book-cover-flattened.jpg 225w,\\n/static/f02c39cc58e8a4552fd153882e6ac023/35f08/book-cover-flattened.jpg 450w,\\n/static/f02c39cc58e8a4552fd153882e6ac023/2c798/book-cover-flattened.jpg 900w","sizes":"(min-width: 900px) 900px, 100vw"},"sources":[{"srcSet":"/static/f02c39cc58e8a4552fd153882e6ac023/9077a/book-cover-flattened.webp 225w,\\n/static/f02c39cc58e8a4552fd153882e6ac023/dc7ed/book-cover-flattened.webp 450w,\\n/static/f02c39cc58e8a4552fd153882e6ac023/ba01f/book-cover-flattened.webp 900w","type":"image/webp","sizes":"(min-width: 900px) 900px, 100vw"}]},"width":900,"height":1368}')
        }
    }
]);
//# sourceMappingURL=commons-b4ba7901d1c8e5ecec24.js.map