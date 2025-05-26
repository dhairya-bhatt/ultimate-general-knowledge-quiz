/*! For license information please see 335691c19e0be44ce3be3b931eb6fbb875bed505-f1d99437e9d59eb2d71c.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_hello_world = self.webpackChunkgatsby_starter_hello_world || []).push([
    [234], {
        8875: function(e, t, n) {
            var o;
            ! function() {
                "use strict";
                var r = !("undefined" == typeof window || !window.document || !window.document.createElement),
                    a = {
                        canUseDOM: r,
                        canUseWorkers: "undefined" != typeof Worker,
                        canUseEventListeners: r && !(!window.addEventListener && !window.attachEvent),
                        canUseViewport: r && !!window.screen
                    };
                void 0 === (o = function() {
                    return a
                }.call(t, n, t, e)) || (e.exports = o)
            }()
        },
        9712: function(e, t) {
            t.polyfill = e => e
        },
        9844: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return s
                }
            });
            var o = n(7294),
                r = n(8159),
                a = n(6820),
                u = n(150),
                i = n(8383),
                l = "index-module--explosion--dba20";
            var s = e => {
                let {
                    isVisible: t,
                    disableExplosion: n
                } = e;
                const s = (0, r.c)(),
                    c = (0, u.d)().x,
                    d = (0, a.k)().x,
                    f = null !== s[0] ? s[0] / 5 : (0, i.Z)(d, c) || 0;
                return t ? o.createElement("div", {
                    className: "index-module--aboveFoldBackground--d0050"
                }, o.createElement(o.Fragment, null, n ? null : o.createElement(o.Fragment, null, o.createElement("div", {
                    className: "index-module--shiny--b7fa3",
                    style: {
                        WebkitMaskImage: "\n                            conic-gradient(from " + (0 + 1 * (f || 0) * 45) + "deg at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 10%),\n                            conic-gradient(from " + (0 + 1 * (f || 0) * 45) + "deg at 50% 50%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%),\n                            conic-gradient(from " + (180 + .5 * (f || 0) * 45) + "deg at 50% 50%, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0) 10%),\n                            conic-gradient(from " + (180 + .5 * (f || 0) * 45) + "deg at 50% 50%, rgba(255, 255, 255, 0) 90%, rgba(255, 255, 255, 1) 100%)"
                    }
                }), o.createElement(o.Fragment, null, o.createElement("div", {
                    className: l + " index-module--explosion1--ea97f"
                }), o.createElement("div", {
                    className: l + " index-module--explosion2--b9bfb"
                }))))) : o.createElement("div", null)
            }
        },
        8232: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return Xe
                }
            });
            var o = n(7294),
                r = n(3253),
                a = n.n(r),
                u = n(4184),
                i = n.n(u),
                l = n(743),
                s = n.n(l);

            function c() {
                return c = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                }, c.apply(this, arguments)
            }
            var d = "data-focus-lock",
                f = "data-focus-lock-disabled";

            function p(e, t) {
                return n = t || null, r = function(t) {
                    return e.forEach((function(e) {
                        return function(e, t) {
                            return "function" == typeof e ? e(t) : e && (e.current = t), e
                        }(e, t)
                    }))
                }, (a = (0, o.useState)((function() {
                    return {
                        value: n,
                        callback: r,
                        facade: {
                            get current() {
                                return a.value
                            },
                            set current(e) {
                                var t = a.value;
                                t !== e && (a.value = e, a.callback(e, t))
                            }
                        }
                    }
                }))[0]).callback = r, a.facade;
                var n, r, a
            }
            var m = {
                    width: "1px",
                    height: "0px",
                    padding: 0,
                    overflow: "hidden",
                    position: "fixed",
                    top: "1px",
                    left: "1px"
                },
                v = function(e) {
                    var t = e.children;
                    return o.createElement(o.Fragment, null, o.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: m
                    }), t, t && o.createElement("div", {
                        key: "guard-last",
                        "data-focus-guard": !0,
                        "data-focus-auto-guard": !0,
                        style: m
                    }))
                };
            v.propTypes = {}, v.defaultProps = {
                children: null
            };
            var h = function() {
                return h = Object.assign || function(e) {
                    for (var t, n = 1, o = arguments.length; n < o; n++)
                        for (var r in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                    return e
                }, h.apply(this, arguments)
            };
            Object.create;
            Object.create;

            function b(e) {
                return e
            }

            function y(e, t) {
                void 0 === t && (t = b);
                var n = [],
                    o = !1;
                return {
                    read: function() {
                        if (o) throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
                        return n.length ? n[n.length - 1] : e
                    },
                    useMedium: function(e) {
                        var r = t(e, o);
                        return n.push(r),
                            function() {
                                n = n.filter((function(e) {
                                    return e !== r
                                }))
                            }
                    },
                    assignSyncMedium: function(e) {
                        for (o = !0; n.length;) {
                            var t = n;
                            n = [], t.forEach(e)
                        }
                        n = {
                            push: function(t) {
                                return e(t)
                            },
                            filter: function() {
                                return n
                            }
                        }
                    },
                    assignMedium: function(e) {
                        o = !0;
                        var t = [];
                        if (n.length) {
                            var r = n;
                            n = [], r.forEach(e), t = n
                        }
                        var a = function() {
                                var n = t;
                                t = [], n.forEach(e)
                            },
                            u = function() {
                                return Promise.resolve().then(a)
                            };
                        u(), n = {
                            push: function(e) {
                                t.push(e), u()
                            },
                            filter: function(e) {
                                return t = t.filter(e), n
                            }
                        }
                    }
                }
            }

            function g(e, t) {
                return void 0 === t && (t = b), y(e, t)
            }
            var w = g({}, (function(e) {
                    return {
                        target: e.target,
                        currentTarget: e.currentTarget
                    }
                })),
                O = g(),
                E = g(),
                C = function(e) {
                    void 0 === e && (e = {});
                    var t = y(null);
                    return t.options = h({
                        async: !0,
                        ssr: !1
                    }, e), t
                }({
                    async: !0
                }),
                N = [],
                M = o.forwardRef((function(e, t) {
                    var n, r = o.useState(),
                        a = r[0],
                        u = r[1],
                        i = o.useRef(),
                        l = o.useRef(!1),
                        s = o.useRef(null),
                        v = e.children,
                        h = e.disabled,
                        b = e.noFocusGuards,
                        y = e.persistentFocus,
                        g = e.crossFrame,
                        E = e.autoFocus,
                        M = (e.allowTextSelection, e.group),
                        S = e.className,
                        k = e.whiteList,
                        x = e.hasPositiveIndices,
                        T = e.shards,
                        _ = void 0 === T ? N : T,
                        A = e.as,
                        P = void 0 === A ? "div" : A,
                        F = e.lockProps,
                        j = void 0 === F ? {} : F,
                        R = e.sideCar,
                        D = e.returnFocus,
                        L = e.focusOptions,
                        I = e.onActivation,
                        q = e.onDeactivation,
                        U = o.useState({})[0],
                        W = o.useCallback((function() {
                            s.current = s.current || document && document.activeElement, i.current && I && I(i.current), l.current = !0
                        }), [I]),
                        B = o.useCallback((function() {
                            l.current = !1, q && q(i.current)
                        }), [q]);
                    (0, o.useEffect)((function() {
                        h || (s.current = null)
                    }), []);
                    var H = o.useCallback((function(e) {
                            var t = s.current;
                            if (t && t.focus) {
                                var n = "function" == typeof D ? D(t) : D;
                                if (n) {
                                    var o = "object" == typeof n ? n : void 0;
                                    s.current = null, e ? Promise.resolve().then((function() {
                                        return t.focus(o)
                                    })) : t.focus(o)
                                }
                            }
                        }), [D]),
                        G = o.useCallback((function(e) {
                            l.current && w.useMedium(e)
                        }), []),
                        Z = O.useMedium,
                        z = o.useCallback((function(e) {
                            i.current !== e && (i.current = e, u(e))
                        }), []);
                    var V = c(((n = {})[f] = h && "disabled", n[d] = M, n), j),
                        K = !0 !== b,
                        Y = K && "tail" !== b,
                        X = p([t, z]);
                    return o.createElement(o.Fragment, null, K && [o.createElement("div", {
                        key: "guard-first",
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 0,
                        style: m
                    }), x ? o.createElement("div", {
                        key: "guard-nearest",
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 1,
                        style: m
                    }) : null], !h && o.createElement(R, {
                        id: U,
                        sideCar: C,
                        observed: a,
                        disabled: h,
                        persistentFocus: y,
                        crossFrame: g,
                        autoFocus: E,
                        whiteList: k,
                        shards: _,
                        onActivation: W,
                        onDeactivation: B,
                        returnFocus: H,
                        focusOptions: L
                    }), o.createElement(P, c({
                        ref: X
                    }, V, {
                        className: S,
                        onBlur: Z,
                        onFocus: G
                    }), v), Y && o.createElement("div", {
                        "data-focus-guard": !0,
                        tabIndex: h ? -1 : 0,
                        style: m
                    }))
                }));
            M.propTypes = {}, M.defaultProps = {
                children: void 0,
                disabled: !1,
                returnFocus: !1,
                focusOptions: void 0,
                noFocusGuards: !1,
                autoFocus: !0,
                persistentFocus: !1,
                crossFrame: !0,
                hasPositiveIndices: void 0,
                allowTextSelection: void 0,
                group: void 0,
                className: void 0,
                whiteList: void 0,
                shards: void 0,
                as: "div",
                lockProps: {},
                onActivation: void 0,
                onDeactivation: void 0
            };
            var S = M,
                k = n(4578);

            function x(e) {
                return x = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                }, x(e)
            }

            function T(e) {
                var t = function(e, t) {
                    if ("object" !== x(e) || null === e) return e;
                    var n = e[Symbol.toPrimitive];
                    if (void 0 !== n) {
                        var o = n.call(e, t || "default");
                        if ("object" !== x(o)) return o;
                        throw new TypeError("@@toPrimitive must return a primitive value.")
                    }
                    return ("string" === t ? String : Number)(e)
                }(e, "string");
                return "symbol" === x(t) ? t : String(t)
            }
            var _ = function(e, t) {
                    return function(n) {
                        var r, a = [];

                        function u() {
                            r = e(a.map((function(e) {
                                return e.props
                            }))), t(r)
                        }
                        var i, l, s, c = function(e) {
                            function t() {
                                return e.apply(this, arguments) || this
                            }(0, k.Z)(t, e), t.peek = function() {
                                return r
                            };
                            var i = t.prototype;
                            return i.componentDidMount = function() {
                                a.push(this), u()
                            }, i.componentDidUpdate = function() {
                                u()
                            }, i.componentWillUnmount = function() {
                                var e = a.indexOf(this);
                                a.splice(e, 1), u()
                            }, i.render = function() {
                                return o.createElement(n, this.props)
                            }, t
                        }(o.PureComponent);
                        return i = c, l = "displayName", s = "SideEffect(" + function(e) {
                            return e.displayName || e.name || "Component"
                        }(n) + ")", (l = T(l)) in i ? Object.defineProperty(i, l, {
                            value: s,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : i[l] = s, c
                    }
                },
                A = function(e) {
                    for (var t = Array(e.length), n = 0; n < e.length; ++n) t[n] = e[n];
                    return t
                },
                P = function(e) {
                    return Array.isArray(e) ? e : [e]
                },
                F = function(e) {
                    return Array.isArray(e) ? e[0] : e
                },
                j = function(e) {
                    return e.parentNode && e.parentNode.nodeType === Node.DOCUMENT_FRAGMENT_NODE ? e.parentNode.host : e.parentNode
                },
                R = function(e) {
                    return e === document || e && e.nodeType === Node.DOCUMENT_NODE
                },
                D = function(e, t) {
                    return !e || R(e) || ! function(e) {
                        if (e.nodeType !== Node.ELEMENT_NODE) return !1;
                        var t = window.getComputedStyle(e, null);
                        return !(!t || !t.getPropertyValue || "none" !== t.getPropertyValue("display") && "hidden" !== t.getPropertyValue("visibility"))
                    }(e) && t(j(e))
                },
                L = function(e, t) {
                    var n = e.get(t);
                    if (void 0 !== n) return n;
                    var o = D(t, L.bind(void 0, e));
                    return e.set(t, o), o
                },
                I = function(e, t) {
                    var n = e.get(t);
                    if (void 0 !== n) return n;
                    var o = function(e, t) {
                        return !(e && !R(e)) || !!B(e) && t(j(e))
                    }(t, I.bind(void 0, e));
                    return e.set(t, o), o
                },
                q = function(e) {
                    return e.dataset
                },
                U = function(e) {
                    return "INPUT" === e.tagName
                },
                W = function(e) {
                    return U(e) && "radio" === e.type
                },
                B = function(e) {
                    var t = e.getAttribute("data-no-autofocus");
                    return ![!0, "true", ""].includes(t)
                },
                H = function(e) {
                    var t;
                    return Boolean(e && (null === (t = q(e)) || void 0 === t ? void 0 : t.focusGuard))
                },
                G = function(e) {
                    return !H(e)
                },
                Z = function(e) {
                    return Boolean(e)
                },
                z = function(e, t) {
                    var n = e.tabIndex - t.tabIndex,
                        o = e.index - t.index;
                    if (n) {
                        if (!e.tabIndex) return 1;
                        if (!t.tabIndex) return -1
                    }
                    return n || o
                },
                V = function(e, t, n) {
                    return A(e).map((function(e, t) {
                        return {
                            node: e,
                            index: t,
                            tabIndex: n && -1 === e.tabIndex ? (e.dataset || {}).focusGuard ? 0 : -1 : e.tabIndex
                        }
                    })).filter((function(e) {
                        return !t || e.tabIndex >= 0
                    })).sort(z)
                },
                K = ["button:enabled", "select:enabled", "textarea:enabled", "input:enabled", "a[href]", "area[href]", "summary", "iframe", "object", "embed", "audio[controls]", "video[controls]", "[tabindex]", "[contenteditable]", "[autofocus]"].join(","),
                Y = "".concat(K, ", [data-focus-guard]"),
                X = function(e, t) {
                    return A((e.shadowRoot || e).children).reduce((function(e, n) {
                        return e.concat(n.matches(t ? Y : K) ? [n] : [], X(n))
                    }), [])
                },
                J = function(e, t) {
                    return e.reduce((function(e, n) {
                        var o, r = X(n, t),
                            a = (o = []).concat.apply(o, r.map((function(e) {
                                return function(e, t) {
                                    var n;
                                    return e instanceof HTMLIFrameElement && (null === (n = e.contentDocument) || void 0 === n ? void 0 : n.body) ? J([e.contentDocument.body], t) : [e]
                                }(e, t)
                            })));
                        return e.concat(a, n.parentNode ? A(n.parentNode.querySelectorAll(K)).filter((function(e) {
                            return e === n
                        })) : [])
                    }), [])
                },
                Q = function(e, t) {
                    return A(e).filter((function(e) {
                        return L(t, e)
                    })).filter((function(e) {
                        return function(e) {
                            return !((U(e) || function(e) {
                                return "BUTTON" === e.tagName
                            }(e)) && ("hidden" === e.type || e.disabled))
                        }(e)
                    }))
                },
                $ = function(e, t) {
                    return void 0 === t && (t = new Map), A(e).filter((function(e) {
                        return I(t, e)
                    }))
                },
                ee = function(e, t, n) {
                    return V(Q(J(e, n), t), !0, n)
                },
                te = function(e, t) {
                    return V(Q(J(e), t), !1)
                },
                ne = function(e, t) {
                    return Q((n = e.querySelectorAll("[".concat("data-autofocus-inside", "]")), A(n).map((function(e) {
                        return J([e])
                    })).reduce((function(e, t) {
                        return e.concat(t)
                    }), [])), t);
                    var n
                },
                oe = function(e, t) {
                    return e.shadowRoot ? oe(e.shadowRoot, t) : !(void 0 === Object.getPrototypeOf(e).contains || !Object.getPrototypeOf(e).contains.call(e, t)) || A(e.children).some((function(e) {
                        var n;
                        if (e instanceof HTMLIFrameElement) {
                            var o = null === (n = e.contentDocument) || void 0 === n ? void 0 : n.body;
                            return !!o && oe(o, t)
                        }
                        return oe(e, t)
                    }))
                },
                re = function(e) {
                    if (void 0 === e && (e = document), e && e.activeElement) {
                        var t = e.activeElement;
                        return t.shadowRoot ? re(t.shadowRoot) : t instanceof HTMLIFrameElement && function(e) {
                            try {
                                return e()
                            } catch (t) {
                                return
                            }
                        }((function() {
                            return t.contentWindow.document
                        })) ? re(t.contentWindow.document) : t
                    }
                },
                ae = function(e) {
                    return e.parentNode ? ae(e.parentNode) : e
                },
                ue = function(e) {
                    return P(e).filter(Boolean).reduce((function(e, t) {
                        var n = t.getAttribute(d);
                        return e.push.apply(e, n ? function(e) {
                            for (var t = new Set, n = e.length, o = 0; o < n; o += 1)
                                for (var r = o + 1; r < n; r += 1) {
                                    var a = e[o].compareDocumentPosition(e[r]);
                                    (a & Node.DOCUMENT_POSITION_CONTAINED_BY) > 0 && t.add(r), (a & Node.DOCUMENT_POSITION_CONTAINS) > 0 && t.add(o)
                                }
                            return e.filter((function(e, n) {
                                return !t.has(n)
                            }))
                        }(A(ae(t).querySelectorAll("[".concat(d, '="').concat(n, '"]:not([').concat(f, '="disabled"])')))) : [t]), e
                    }), [])
                },
                ie = function(e, t) {
                    return void 0 === t && (t = re(F(e).ownerDocument)), !(!t || t.dataset && t.dataset.focusGuard) && ue(e).some((function(e) {
                        return oe(e, t) || function(e, t) {
                            return Boolean(A(e.querySelectorAll("iframe")).some((function(e) {
                                return function(e, t) {
                                    return e === t
                                }(e, t)
                            })))
                        }(e, t)
                    }))
                },
                le = function(e, t) {
                    return W(e) && e.name ? function(e, t) {
                        return t.filter(W).filter((function(t) {
                            return t.name === e.name
                        })).filter((function(e) {
                            return e.checked
                        }))[0] || e
                    }(e, t) : e
                },
                se = function(e) {
                    return e[0] && e.length > 1 ? le(e[0], e) : e[0]
                },
                ce = function(e, t) {
                    return e.length > 1 ? e.indexOf(le(e[t], e)) : t
                },
                de = "NEW_FOCUS",
                fe = function(e, t, n, o) {
                    var r = e.length,
                        a = e[0],
                        u = e[r - 1],
                        i = H(n);
                    if (!(n && e.indexOf(n) >= 0)) {
                        var l, s, c = void 0 !== n ? t.indexOf(n) : -1,
                            d = o ? t.indexOf(o) : c,
                            f = o ? e.indexOf(o) : -1,
                            p = c - d,
                            m = t.indexOf(a),
                            v = t.indexOf(u),
                            h = (l = t, s = new Set, l.forEach((function(e) {
                                return s.add(le(e, l))
                            })), l.filter((function(e) {
                                return s.has(e)
                            }))),
                            b = (void 0 !== n ? h.indexOf(n) : -1) - (o ? h.indexOf(o) : c),
                            y = ce(e, 0),
                            g = ce(e, r - 1);
                        return -1 === c || -1 === f ? de : !p && f >= 0 ? f : c <= m && i && Math.abs(p) > 1 ? g : c >= v && i && Math.abs(p) > 1 ? y : p && Math.abs(b) > 1 ? f : c <= m ? g : c > v ? y : p ? Math.abs(p) > 1 ? f : (r + f + p) % r : void 0
                    }
                },
                pe = function(e, t, n) {
                    var o, r = e.map((function(e) {
                            return e.node
                        })),
                        a = $(r.filter((o = n, function(e) {
                            var t, n = null === (t = q(e)) || void 0 === t ? void 0 : t.autofocus;
                            return e.autofocus || void 0 !== n && "false" !== n || o.indexOf(e) >= 0
                        })));
                    return a && a.length ? se(a) : se($(t))
                },
                me = function(e, t) {
                    return void 0 === t && (t = []), t.push(e), e.parentNode && me(e.parentNode.host || e.parentNode, t), t
                },
                ve = function(e, t) {
                    for (var n = me(e), o = me(t), r = 0; r < n.length; r += 1) {
                        var a = n[r];
                        if (o.indexOf(a) >= 0) return a
                    }
                    return !1
                },
                he = function(e, t, n) {
                    var o = P(e),
                        r = P(t),
                        a = o[0],
                        u = !1;
                    return r.filter(Boolean).forEach((function(e) {
                        u = ve(u || e, e) || u, n.filter(Boolean).forEach((function(e) {
                            var t = ve(a, e);
                            t && (u = !u || oe(t, u) ? t : ve(t, u))
                        }))
                    })), u
                },
                be = function(e, t) {
                    var n = re(P(e).length > 0 ? document : F(e).ownerDocument),
                        o = ue(e).filter(G),
                        r = he(n || e, e, o),
                        a = new Map,
                        u = te(o, a),
                        i = ee(o, a).filter((function(e) {
                            var t = e.node;
                            return G(t)
                        }));
                    if (i[0] || (i = u)[0]) {
                        var l, s, c, d = te([r], a).map((function(e) {
                                return e.node
                            })),
                            f = (l = d, s = i, c = new Map, s.forEach((function(e) {
                                return c.set(e.node, e)
                            })), l.map((function(e) {
                                return c.get(e)
                            })).filter(Z)),
                            p = f.map((function(e) {
                                return e.node
                            })),
                            m = fe(p, d, n, t);
                        if (m === de) {
                            var v = pe(u, p, function(e, t) {
                                return e.reduce((function(e, n) {
                                    return e.concat(ne(n, t))
                                }), [])
                            }(o, a));
                            return v ? {
                                node: v
                            } : void console.warn("focus-lock: cannot find any node to move focus into")
                        }
                        return void 0 === m ? m : f[m]
                    }
                },
                ye = 0,
                ge = !1,
                we = function(e, t, n) {
                    void 0 === n && (n = {});
                    var o, r, a = be(e, t);
                    if (!ge && a) {
                        if (ye > 2) return console.error("FocusLock: focus-fighting detected. Only one focus management system could be active. See https://github.com/theKashey/focus-lock/#focus-fighting"), ge = !0, void setTimeout((function() {
                            ge = !1
                        }), 1);
                        ye++, o = a.node, r = n.focusOptions, "focus" in o && o.focus(r), "contentWindow" in o && o.contentWindow && o.contentWindow.focus(), ye--
                    }
                },
                Oe = function(e) {
                    var t = ue(e).filter(G),
                        n = he(e, e, t),
                        o = new Map,
                        r = ee([n], o, !0),
                        a = ee(t, o).filter((function(e) {
                            var t = e.node;
                            return G(t)
                        })).map((function(e) {
                            return e.node
                        }));
                    return r.map((function(e) {
                        var t = e.node;
                        return {
                            node: t,
                            index: e.index,
                            lockItem: a.indexOf(t) >= 0,
                            guard: H(t)
                        }
                    }))
                };

            function Ee(e) {
                var t = window.setImmediate;
                void 0 !== t ? t(e) : setTimeout(e, 1)
            }
            var Ce = function() {
                    return document && document.activeElement === document.body || function(e) {
                        void 0 === e && (e = document);
                        var t = re(e);
                        return !!t && A(e.querySelectorAll("[".concat("data-no-focus-lock", "]"))).some((function(e) {
                            return oe(e, t)
                        }))
                    }()
                },
                Ne = null,
                Me = null,
                Se = null,
                ke = !1,
                xe = function() {
                    return !0
                };

            function Te(e, t, n, o) {
                var r = null,
                    a = e;
                do {
                    var u = o[a];
                    if (u.guard) u.node.dataset.focusAutoGuard && (r = u);
                    else {
                        if (!u.lockItem) break;
                        if (a !== e) return;
                        r = null
                    }
                } while ((a += n) !== t);
                r && (r.node.tabIndex = 0)
            }
            var _e = function(e) {
                    return e && "current" in e ? e.current : e
                },
                Ae = function e(t, n, o) {
                    return n && (n.host === t && (!n.activeElement || o.contains(n.activeElement)) || n.parentNode && e(t, n.parentNode, o))
                },
                Pe = function() {
                    var e, t = !1;
                    if (Ne) {
                        var n = Ne,
                            o = n.observed,
                            r = n.persistentFocus,
                            a = n.autoFocus,
                            u = n.shards,
                            i = n.crossFrame,
                            l = n.focusOptions,
                            s = o || Se && Se.portaledElement,
                            c = document && document.activeElement;
                        if (s) {
                            var d = [s].concat(u.map(_e).filter(Boolean));
                            if (c && ! function(e) {
                                    return (Ne.whiteList || xe)(e)
                                }(c) || (r || (i ? Boolean(ke) : "meanwhile" === ke) || !Ce() || !Me && a) && (s && !(ie(d) || c && function(e, t) {
                                    return t.some((function(t) {
                                        return Ae(e, t, t)
                                    }))
                                }(c, d) || (e = c, Se && Se.portaledElement === e)) && (document && !Me && c && !a ? (c.blur && c.blur(), document.body.focus()) : (t = we(d, Me, {
                                    focusOptions: l
                                }), Se = {})), ke = !1, Me = document && document.activeElement), document) {
                                var f = document && document.activeElement,
                                    p = Oe(d),
                                    m = p.map((function(e) {
                                        return e.node
                                    })).indexOf(f);
                                m > -1 && (p.filter((function(e) {
                                    var t = e.guard,
                                        n = e.node;
                                    return t && n.dataset.focusAutoGuard
                                })).forEach((function(e) {
                                    return e.node.removeAttribute("tabIndex")
                                })), Te(m, p.length, 1, p), Te(m, -1, -1, p))
                            }
                        }
                    }
                    return t
                },
                Fe = function(e) {
                    Pe() && e && (e.stopPropagation(), e.preventDefault())
                },
                je = function() {
                    return Ee(Pe)
                },
                Re = function(e) {
                    var t = e.target,
                        n = e.currentTarget;
                    n.contains(t) || (Se = {
                        observerNode: n,
                        portaledElement: t
                    })
                },
                De = function() {
                    ke = "just", setTimeout((function() {
                        ke = "meanwhile"
                    }), 0)
                };
            w.assignSyncMedium(Re), O.assignMedium(je), E.assignMedium((function(e) {
                return e({
                    moveFocusInside: we,
                    focusInside: ie
                })
            }));
            var Le = _((function(e) {
                    return e.filter((function(e) {
                        return !e.disabled
                    }))
                }), (function(e) {
                    var t = e.slice(-1)[0];
                    t && !Ne && (document.addEventListener("focusin", Fe), document.addEventListener("focusout", je), window.addEventListener("blur", De));
                    var n = Ne,
                        o = n && t && t.id === n.id;
                    Ne = t, n && !o && (n.onDeactivation(), e.filter((function(e) {
                        return e.id === n.id
                    })).length || n.returnFocus(!t)), t ? (Me = null, o && n.observed === t.observed || t.onActivation(), Pe(), Ee(Pe)) : (document.removeEventListener("focusin", Fe), document.removeEventListener("focusout", je), window.removeEventListener("blur", De), Me = null)
                }))((function() {
                    return null
                })),
                Ie = o.forwardRef((function(e, t) {
                    return o.createElement(S, c({
                        sideCar: Le,
                        ref: t
                    }, e))
                })),
                qe = S.propTypes || {};
            qe.sideCar,
                function(e, t) {
                    if (null == e) return {};
                    var n, o, r = {},
                        a = Object.keys(e);
                    for (o = 0; o < a.length; o++) n = a[o], t.indexOf(n) >= 0 || (r[n] = e[n])
                }(qe, ["sideCar"]);
            Ie.propTypes = {};
            var Ue = Ie,
                We = n(3734),
                Be = n(9302),
                He = n(6079),
                Ge = n(489),
                Ze = n(4849),
                ze = n(9826),
                Ve = n(3272);
            const Ke = [{
                name: "Amazon",
                link: "https://www.amazon.com/Coming-Wave-Technology-Twenty-first-Centurys/dp/0593593952"
            }, {
                name: "Barnes & Noble",
                link: "https://www.barnesandnoble.com/w/the-coming-wave-mustafa-suleyman/1143049890"
            }, {
                name: "Books A Million",
                link: "https://www.booksamillion.com/p/Coming-Wave/Mustafa-Suleyman/9780593593950?id=8825154032240"
            }, {
                name: "Bookshop.org",
                link: "https://bookshop.org/p/books/containment-is-not-possible-how-technology-fails-and-what-we-should-do-about-it-michael-bhaskar/19668961?ean=9780593593950"
            }, {
                name: "Hudson Booksellers",
                link: "https://www.hudsonbooksellers.com/book/9780593593950"
            }, {
                name: "Apple Books",
                link: "https://books.apple.com/us/audiobook/the-coming-wave-technology-power-and-the/id1670283950"
            }, {
                name: "Waterstones",
                link: "https://www.waterstones.com/book/the-coming-wave/mustafa-suleyman/michael-bhaskar/9781847927484"
            }, {
                name: "Amazon UK",
                link: "https://www.amazon.co.uk/Coming-Wave-Technology-Twenty-First-Centurys/dp/1847927483/ref=tmm_hrd_swatch_0?_encoding=UTF8&qid=1683103028&sr=8-1"
            }, {
                name: "Audiobook",
                link: "https://www.penguinrandomhouse.com/books/722674/the-coming-wave-by-mustafa-suleyman-with-michael-bhaskar/audio/"
            }];
            var Ye = "index-module--modal--72067";
            a().setAppElement("#___gatsby");
            var Xe = e => {
                let {
                    children: t,
                    page: n,
                    className: r,
                    preChildren: u,
                    headerProps: l,
                    headerVisible: c
                } = e;
                const {
                    0: d,
                    1: f
                } = (0, o.useState)(!1), p = e => {
                    e ? (s().on(), console.log("on")) : (s().off(), console.log("off")), f(e)
                }, m = i()("index-module--mobileMenu--46127", {
                    "index-module--mobileMenuOpen--61ebe": d
                }), v = (0, Ve.R)();
                return o.createElement(ze.r.Consumer, null, (e => o.createElement("main", {
                    className: (e.modalIsOpen ? "index-module--blur--e1732" : "") + " " + (r || "")
                }, o.createElement("div", {
                    className: "index-module--buyNowWrapper--bdd3e"
                }, o.createElement(He.Z, null)), u || null, o.createElement("div", {
                    className: "index-module--stickyContainer--75bc6 " + ("home" === n ? "index-module--stickyDelayedHeader--1d0c2" : "")
                }, o.createElement(Be.Z, {
                    visible: c || l,
                    toggleMobileMenu: p,
                    menuOpen: d,
                    transparent: "home" !== n && 0 === v
                }), t, o.createElement(Ge.Z, null)), o.createElement(a(), {
                    isOpen: e.modalIsOpen,
                    onRequestClose: e.toggleModal,
                    closeTimeoutMS: 200,
                    className: Ye,
                    overlayClassName: "index-module--modalOverlay--cd933",
                    contentLabel: "Modal"
                }, o.createElement("div", {
                    className: Ye
                }, o.createElement("button", {
                    className: "index-module--modalClose--a7505 button button-rainbow",
                    onClick: e.toggleModal,
                    "aria-label": "Close modal"
                }, o.createElement("div", null), o.createElement("div", null)), o.createElement("h2", null, "Buy The Coming Wave now"), o.createElement("ul", null, Ke.map(((e, t) => o.createElement("li", {
                    key: "buyLink" + (t + 1)
                }, o.createElement("a", {
                    href: e.link,
                    target: "_blank",
                    rel: "noreferrer",
                    className: "button button-rainbow button-external index-module--button--eb956"
                }, e.name))))))), o.createElement("div", {
                    className: m
                }, o.createElement(Ue, null, o.createElement("div", {
                    className: "index-module--mobileMenuWrapper--41faf"
                }, o.createElement("div", {
                    className: "index-module--mobileMenuHeader--bb730"
                }, o.createElement(Ze.Z, {
                    toggleMobileMenu: p,
                    menuOpen: d,
                    "aria-controls": "nav"
                })), o.createElement("div", {
                    className: "index-module--mobileMenuLinks--f9124"
                }, o.createElement(We.Z, {
                    activePage: n,
                    toggleMobileMenu: p,
                    menuOpen: d
                }), o.createElement("button", {
                    className: "button button-large",
                    onClick: e.toggleModal
                }, "Buy now"))))))))
            }
        },
        2832: function(e, t, n) {
            "use strict";
            var o = n(7294),
                r = n(1883);
            t.Z = e => {
                let {
                    title: t = "The Coming Wave Book",
                    description: n = "",
                    url: a
                } = e;
                const u = "https://the-coming-wave.vercel.app/social.jpg";
                return o.createElement(o.Fragment, null, o.createElement("title", null, t), o.createElement("meta", {
                    name: "description",
                    content: n
                }), o.createElement("meta", {
                    name: "image",
                    content: u
                }), o.createElement("meta", {
                    property: "og:url",
                    content: "https://the-coming-wave.com/"
                }), o.createElement("meta", {
                    property: "og:title",
                    content: t
                }), o.createElement("meta", {
                    property: "og:site_name",
                    content: t
                }), o.createElement("meta", {
                    property: "og:description",
                    content: n || ""
                }), o.createElement("meta", {
                    property: "og:type",
                    content: "website"
                }), o.createElement("meta", {
                    property: "og:image",
                    content: u
                }), o.createElement("meta", {
                    property: "og:image:secure_url",
                    content: u
                }), o.createElement("meta", {
                    property: "og:image:width",
                    content: "300"
                }), o.createElement("meta", {
                    property: "og:image:height",
                    content: "300"
                }), o.createElement("meta", {
                    name: "twitter:card",
                    content: "summary_large_image"
                }), o.createElement("meta", {
                    name: "twitter:title",
                    content: t
                }), o.createElement("meta", {
                    name: "twitter:description",
                    content: n || ""
                }), o.createElement("meta", {
                    name: "twitter:image",
                    content: u
                }), o.createElement(r.Script, null, "!function(s,a,e,v,n,t,z){if(s.saq)return;n=s.saq=function(){n.callMethod?n.callMethod.apply(n,arguments):n.queue.push(arguments)};if(!s._saq)s._saq=n;n.push=n;n.loaded=!0;n.version='1.0';n.queue=[];t=a.createElement(e);t.async=!0;t.src=v;z=a.getElementsByTagName(e)[0];z.parentNode.insertBefore(t,z)}(window,document,'script','https://tags.srv.stackadapt.com/events.js');saq('ts', 'vKAJbjDRGP7kX3uRcuTI2Q');"))
            }
        },
        8159: function(e, t, n) {
            "use strict";
            n.d(t, {
                c: function() {
                    return r
                }
            });
            var o = n(7294);
            const r = () => {
                const {
                    0: e,
                    1: t
                } = (0, o.useState)(!1), {
                    0: n,
                    1: r
                } = (0, o.useState)(null), {
                    0: a,
                    1: u
                } = (0, o.useState)(null);

                function i(e) {
                    r(e.accelerationIncludingGravity.x), u(e.accelerationIncludingGravity.y)
                }
                return (0, o.useEffect)((() => ("undefined" != typeof DeviceMotionEvent && "function" == typeof DeviceMotionEvent.requestPermission ? DeviceMotionEvent.requestPermission().then((e => {
                    "granted" === e && (t(!0), window.addEventListener("devicemotion", i))
                })).catch(console.error) : (t(!0), window.addEventListener("devicemotion", i)), () => {
                    window.removeEventListener("devicemotion", i)
                })), []), e ? [n, a] : [0, 0]
            }
        },
        8383: function(e, t) {
            "use strict";
            t.Z = (e, t) => Math.round((e - t / 2) / (t / 2) * 100) / 100
        },
        6820: function(e, t, n) {
            "use strict";
            n.d(t, {
                k: function() {
                    return r
                }
            });
            var o = n(7294);
            const r = () => {
                const {
                    0: e,
                    1: t
                } = (0, o.useState)({});
                return (0, o.useEffect)((() => {
                    const e = e => {
                        t({
                            x: e.clientX,
                            y: e.clientY
                        })
                    };
                    return window.addEventListener("mousemove", e), () => {
                        window.removeEventListener("mousemove", e)
                    }
                }), []), e
            }
        },
        3272: function(e, t, n) {
            "use strict";
            n.d(t, {
                R: function() {
                    return a
                }
            });
            var o = n(7294);
            var r = (e, t, n) => {
                let o;
                return r => {
                    let { ...a
                    } = r;
                    const u = void 0,
                        i = n && !o;
                    clearTimeout(o), o = setTimeout((() => {
                        o = null, n || e.apply(u, a)
                    }), t), i && e.apply(u, a)
                }
            };
            const a = () => {
                const {
                    0: e,
                    1: t
                } = (0, o.useState)(0), n = r((() => {
                    const e = window.pageYOffset;
                    t(e)
                }), 1);
                return (0, o.useEffect)((() => (window.addEventListener("scroll", n), () => window.removeEventListener("scroll", n))), [e, n]), e
            }
        },
        150: function(e, t, n) {
            "use strict";
            n.d(t, {
                d: function() {
                    return r
                }
            });
            var o = n(7294);
            const r = () => {
                const {
                    0: e,
                    1: t
                } = (0, o.useState)({
                    x: void 0,
                    y: void 0
                });
                return (0, o.useEffect)((() => {
                    "undefined" != typeof window && t({
                        x: window.innerWidth,
                        y: window.innerHeight
                    });
                    const e = () => {
                        t({
                            x: window.innerWidth,
                            y: window.innerHeight
                        })
                    };
                    return window.addEventListener("resize", e), () => {
                        window.removeEventListener("resize", e)
                    }
                }), []), e
            }
        },
        743: function(e) {
            ! function(t) {
                var n, o, r = !1;

                function a(e) {
                    if ("undefined" != typeof document && !r) {
                        var t = document.documentElement;
                        o = window.pageYOffset, document.documentElement.scrollHeight > window.innerHeight ? t.style.width = "calc(100% - " + function() {
                            if (void 0 !== n) return n;
                            var e = document.documentElement,
                                t = document.createElement("div");
                            return t.setAttribute("style", "width:99px;height:99px;position:absolute;top:-9999px;overflow:scroll;"), e.appendChild(t), n = t.offsetWidth - t.clientWidth, e.removeChild(t), n
                        }() + "px)" : t.style.width = "100%", t.style.position = "fixed", t.style.top = -o + "px", t.style.overflow = "hidden", r = !0
                    }
                }

                function u() {
                    if ("undefined" != typeof document && r) {
                        var e = document.documentElement;
                        e.style.width = "", e.style.position = "", e.style.top = "", e.style.overflow = "", window.scroll(0, o), r = !1
                    }
                }
                var i = {
                    on: a,
                    off: u,
                    toggle: function() {
                        r ? u() : a()
                    }
                };
                void 0 !== e.exports ? e.exports = i : t.noScroll = i
            }(this)
        },
        9983: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.bodyOpenClassName = t.portalClassName = void 0;
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                a = n(7294),
                u = m(a),
                i = m(n(3935)),
                l = m(n(5697)),
                s = m(n(8747)),
                c = function(e) {
                    if (e && e.__esModule) return e;
                    var t = {};
                    if (null != e)
                        for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                    return t.default = e, t
                }(n(7149)),
                d = n(1112),
                f = m(d),
                p = n(9712);

            function m(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }

            function v(e, t) {
                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
            }

            function h(e, t) {
                if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t ? e : t
            }
            var b = t.portalClassName = "ReactModalPortal",
                y = t.bodyOpenClassName = "ReactModal__Body--open",
                g = d.canUseDOM && void 0 !== i.default.createPortal,
                w = function(e) {
                    return document.createElement(e)
                },
                O = function() {
                    return g ? i.default.createPortal : i.default.unstable_renderSubtreeIntoContainer
                };

            function E(e) {
                return e()
            }
            var C = function(e) {
                function t() {
                    var e, n, r;
                    v(this, t);
                    for (var a = arguments.length, l = Array(a), c = 0; c < a; c++) l[c] = arguments[c];
                    return n = r = h(this, (e = t.__proto__ || Object.getPrototypeOf(t)).call.apply(e, [this].concat(l))), r.removePortal = function() {
                        !g && i.default.unmountComponentAtNode(r.node);
                        var e = E(r.props.parentSelector);
                        e && e.contains(r.node) ? e.removeChild(r.node) : console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')
                    }, r.portalRef = function(e) {
                        r.portal = e
                    }, r.renderPortal = function(e) {
                        var n = O()(r, u.default.createElement(s.default, o({
                            defaultStyles: t.defaultStyles
                        }, e)), r.node);
                        r.portalRef(n)
                    }, h(r, n)
                }
                return function(e, t) {
                    if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                    e.prototype = Object.create(t && t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                }(t, e), r(t, [{
                    key: "componentDidMount",
                    value: function() {
                        d.canUseDOM && (g || (this.node = w("div")), this.node.className = this.props.portalClassName, E(this.props.parentSelector).appendChild(this.node), !g && this.renderPortal(this.props))
                    }
                }, {
                    key: "getSnapshotBeforeUpdate",
                    value: function(e) {
                        return {
                            prevParent: E(e.parentSelector),
                            nextParent: E(this.props.parentSelector)
                        }
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e, t, n) {
                        if (d.canUseDOM) {
                            var o = this.props,
                                r = o.isOpen,
                                a = o.portalClassName;
                            e.portalClassName !== a && (this.node.className = a);
                            var u = n.prevParent,
                                i = n.nextParent;
                            i !== u && (u.removeChild(this.node), i.appendChild(this.node)), (e.isOpen || r) && !g && this.renderPortal(this.props)
                        }
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        if (d.canUseDOM && this.node && this.portal) {
                            var e = this.portal.state,
                                t = Date.now(),
                                n = e.isOpen && this.props.closeTimeoutMS && (e.closesAt || t + this.props.closeTimeoutMS);
                            n ? (e.beforeClose || this.portal.closeWithTimeout(), setTimeout(this.removePortal, n - t)) : this.removePortal()
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        return d.canUseDOM && g ? (!this.node && g && (this.node = w("div")), O()(u.default.createElement(s.default, o({
                            ref: this.portalRef,
                            defaultStyles: t.defaultStyles
                        }, this.props)), this.node)) : null
                    }
                }], [{
                    key: "setAppElement",
                    value: function(e) {
                        c.setElement(e)
                    }
                }]), t
            }(a.Component);
            C.propTypes = {
                isOpen: l.default.bool.isRequired,
                style: l.default.shape({
                    content: l.default.object,
                    overlay: l.default.object
                }),
                portalClassName: l.default.string,
                bodyOpenClassName: l.default.string,
                htmlOpenClassName: l.default.string,
                className: l.default.oneOfType([l.default.string, l.default.shape({
                    base: l.default.string.isRequired,
                    afterOpen: l.default.string.isRequired,
                    beforeClose: l.default.string.isRequired
                })]),
                overlayClassName: l.default.oneOfType([l.default.string, l.default.shape({
                    base: l.default.string.isRequired,
                    afterOpen: l.default.string.isRequired,
                    beforeClose: l.default.string.isRequired
                })]),
                appElement: l.default.oneOfType([l.default.instanceOf(f.default), l.default.instanceOf(d.SafeHTMLCollection), l.default.instanceOf(d.SafeNodeList), l.default.arrayOf(l.default.instanceOf(f.default))]),
                onAfterOpen: l.default.func,
                onRequestClose: l.default.func,
                closeTimeoutMS: l.default.number,
                ariaHideApp: l.default.bool,
                shouldFocusAfterRender: l.default.bool,
                shouldCloseOnOverlayClick: l.default.bool,
                shouldReturnFocusAfterClose: l.default.bool,
                preventScroll: l.default.bool,
                parentSelector: l.default.func,
                aria: l.default.object,
                data: l.default.object,
                role: l.default.string,
                contentLabel: l.default.string,
                shouldCloseOnEsc: l.default.bool,
                overlayRef: l.default.func,
                contentRef: l.default.func,
                id: l.default.string,
                overlayElement: l.default.func,
                contentElement: l.default.func
            }, C.defaultProps = {
                isOpen: !1,
                portalClassName: b,
                bodyOpenClassName: y,
                role: "dialog",
                ariaHideApp: !0,
                closeTimeoutMS: 0,
                shouldFocusAfterRender: !0,
                shouldCloseOnEsc: !0,
                shouldCloseOnOverlayClick: !0,
                shouldReturnFocusAfterClose: !0,
                preventScroll: !1,
                parentSelector: function() {
                    return document.body
                },
                overlayElement: function(e, t) {
                    return u.default.createElement("div", e, t)
                },
                contentElement: function(e, t) {
                    return u.default.createElement("div", e, t)
                }
            }, C.defaultStyles = {
                overlay: {
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: "rgba(255, 255, 255, 0.75)"
                },
                content: {
                    position: "absolute",
                    top: "40px",
                    left: "40px",
                    right: "40px",
                    bottom: "40px",
                    border: "1px solid #ccc",
                    background: "#fff",
                    overflow: "auto",
                    WebkitOverflowScrolling: "touch",
                    borderRadius: "4px",
                    outline: "none",
                    padding: "20px"
                }
            }, (0, p.polyfill)(C), t.default = C
        },
        8747: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var o in n) Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o])
                    }
                    return e
                },
                r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = function() {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var o = t[n];
                            o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, o.key, o)
                        }
                    }
                    return function(t, n, o) {
                        return n && e(t.prototype, n), o && e(t, o), t
                    }
                }(),
                u = n(7294),
                i = h(n(5697)),
                l = v(n(9685)),
                s = h(n(8338)),
                c = v(n(7149)),
                d = v(n(2409)),
                f = n(1112),
                p = h(f),
                m = h(n(9623));

            function v(e) {
                if (e && e.__esModule) return e;
                var t = {};
                if (null != e)
                    for (var n in e) Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
                return t.default = e, t
            }

            function h(e) {
                return e && e.__esModule ? e : {
                    default: e
                }
            }
            n(5063);
            var b = {
                    overlay: "ReactModal__Overlay",
                    content: "ReactModal__Content"
                },
                y = 0,
                g = function(e) {
                    function t(e) {
                        ! function(e, t) {
                            if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                        }(this, t);
                        var n = function(e, t) {
                            if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                            return !t || "object" != typeof t && "function" != typeof t ? e : t
                        }(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.setOverlayRef = function(e) {
                            n.overlay = e, n.props.overlayRef && n.props.overlayRef(e)
                        }, n.setContentRef = function(e) {
                            n.content = e, n.props.contentRef && n.props.contentRef(e)
                        }, n.afterClose = function() {
                            var e = n.props,
                                t = e.appElement,
                                o = e.ariaHideApp,
                                r = e.htmlOpenClassName,
                                a = e.bodyOpenClassName,
                                u = e.parentSelector,
                                i = u && u().ownerDocument || document;
                            a && d.remove(i.body, a), r && d.remove(i.getElementsByTagName("html")[0], r), o && y > 0 && 0 === (y -= 1) && c.show(t), n.props.shouldFocusAfterRender && (n.props.shouldReturnFocusAfterClose ? (l.returnFocus(n.props.preventScroll), l.teardownScopedFocus()) : l.popWithoutFocus()), n.props.onAfterClose && n.props.onAfterClose(), m.default.deregister(n)
                        }, n.open = function() {
                            n.beforeOpen(), n.state.afterOpen && n.state.beforeClose ? (clearTimeout(n.closeTimer), n.setState({
                                beforeClose: !1
                            })) : (n.props.shouldFocusAfterRender && (l.setupScopedFocus(n.node), l.markForFocusLater()), n.setState({
                                isOpen: !0
                            }, (function() {
                                n.openAnimationFrame = requestAnimationFrame((function() {
                                    n.setState({
                                        afterOpen: !0
                                    }), n.props.isOpen && n.props.onAfterOpen && n.props.onAfterOpen({
                                        overlayEl: n.overlay,
                                        contentEl: n.content
                                    })
                                }))
                            })))
                        }, n.close = function() {
                            n.props.closeTimeoutMS > 0 ? n.closeWithTimeout() : n.closeWithoutTimeout()
                        }, n.focusContent = function() {
                            return n.content && !n.contentHasFocus() && n.content.focus({
                                preventScroll: !0
                            })
                        }, n.closeWithTimeout = function() {
                            var e = Date.now() + n.props.closeTimeoutMS;
                            n.setState({
                                beforeClose: !0,
                                closesAt: e
                            }, (function() {
                                n.closeTimer = setTimeout(n.closeWithoutTimeout, n.state.closesAt - Date.now())
                            }))
                        }, n.closeWithoutTimeout = function() {
                            n.setState({
                                beforeClose: !1,
                                isOpen: !1,
                                afterOpen: !1,
                                closesAt: null
                            }, n.afterClose)
                        }, n.handleKeyDown = function(e) {
                            (function(e) {
                                return "Tab" === e.code || 9 === e.keyCode
                            })(e) && (0, s.default)(n.content, e), n.props.shouldCloseOnEsc && function(e) {
                                return "Escape" === e.code || 27 === e.keyCode
                            }(e) && (e.stopPropagation(), n.requestClose(e))
                        }, n.handleOverlayOnClick = function(e) {
                            null === n.shouldClose && (n.shouldClose = !0), n.shouldClose && n.props.shouldCloseOnOverlayClick && (n.ownerHandlesClose() ? n.requestClose(e) : n.focusContent()), n.shouldClose = null
                        }, n.handleContentOnMouseUp = function() {
                            n.shouldClose = !1
                        }, n.handleOverlayOnMouseDown = function(e) {
                            n.props.shouldCloseOnOverlayClick || e.target != n.overlay || e.preventDefault()
                        }, n.handleContentOnClick = function() {
                            n.shouldClose = !1
                        }, n.handleContentOnMouseDown = function() {
                            n.shouldClose = !1
                        }, n.requestClose = function(e) {
                            return n.ownerHandlesClose() && n.props.onRequestClose(e)
                        }, n.ownerHandlesClose = function() {
                            return n.props.onRequestClose
                        }, n.shouldBeClosed = function() {
                            return !n.state.isOpen && !n.state.beforeClose
                        }, n.contentHasFocus = function() {
                            return document.activeElement === n.content || n.content.contains(document.activeElement)
                        }, n.buildClassName = function(e, t) {
                            var o = "object" === (void 0 === t ? "undefined" : r(t)) ? t : {
                                    base: b[e],
                                    afterOpen: b[e] + "--after-open",
                                    beforeClose: b[e] + "--before-close"
                                },
                                a = o.base;
                            return n.state.afterOpen && (a = a + " " + o.afterOpen), n.state.beforeClose && (a = a + " " + o.beforeClose), "string" == typeof t && t ? a + " " + t : a
                        }, n.attributesFromObject = function(e, t) {
                            return Object.keys(t).reduce((function(n, o) {
                                return n[e + "-" + o] = t[o], n
                            }), {})
                        }, n.state = {
                            afterOpen: !1,
                            beforeClose: !1
                        }, n.shouldClose = null, n.moveFromContentToOverlay = null, n
                    }
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
                    }(t, e), a(t, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.isOpen && this.open()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e, t) {
                            this.props.isOpen && !e.isOpen ? this.open() : !this.props.isOpen && e.isOpen && this.close(), this.props.shouldFocusAfterRender && this.state.isOpen && !t.isOpen && this.focusContent()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.state.isOpen && this.afterClose(), clearTimeout(this.closeTimer), cancelAnimationFrame(this.openAnimationFrame)
                        }
                    }, {
                        key: "beforeOpen",
                        value: function() {
                            var e = this.props,
                                t = e.appElement,
                                n = e.ariaHideApp,
                                o = e.htmlOpenClassName,
                                r = e.bodyOpenClassName,
                                a = e.parentSelector,
                                u = a && a().ownerDocument || document;
                            r && d.add(u.body, r), o && d.add(u.getElementsByTagName("html")[0], o), n && (y += 1, c.hide(t)), m.default.register(this)
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.id,
                                n = e.className,
                                r = e.overlayClassName,
                                a = e.defaultStyles,
                                u = e.children,
                                i = n ? {} : a.content,
                                l = r ? {} : a.overlay;
                            if (this.shouldBeClosed()) return null;
                            var s = {
                                    ref: this.setOverlayRef,
                                    className: this.buildClassName("overlay", r),
                                    style: o({}, l, this.props.style.overlay),
                                    onClick: this.handleOverlayOnClick,
                                    onMouseDown: this.handleOverlayOnMouseDown
                                },
                                c = o({
                                    id: t,
                                    ref: this.setContentRef,
                                    style: o({}, i, this.props.style.content),
                                    className: this.buildClassName("content", n),
                                    tabIndex: "-1",
                                    onKeyDown: this.handleKeyDown,
                                    onMouseDown: this.handleContentOnMouseDown,
                                    onMouseUp: this.handleContentOnMouseUp,
                                    onClick: this.handleContentOnClick,
                                    role: this.props.role,
                                    "aria-label": this.props.contentLabel
                                }, this.attributesFromObject("aria", o({
                                    modal: !0
                                }, this.props.aria)), this.attributesFromObject("data", this.props.data || {}), {
                                    "data-testid": this.props.testId
                                }),
                                d = this.props.contentElement(c, u);
                            return this.props.overlayElement(s, d)
                        }
                    }]), t
                }(u.Component);
            g.defaultProps = {
                style: {
                    overlay: {},
                    content: {}
                },
                defaultStyles: {}
            }, g.propTypes = {
                isOpen: i.default.bool.isRequired,
                defaultStyles: i.default.shape({
                    content: i.default.object,
                    overlay: i.default.object
                }),
                style: i.default.shape({
                    content: i.default.object,
                    overlay: i.default.object
                }),
                className: i.default.oneOfType([i.default.string, i.default.object]),
                overlayClassName: i.default.oneOfType([i.default.string, i.default.object]),
                parentSelector: i.default.func,
                bodyOpenClassName: i.default.string,
                htmlOpenClassName: i.default.string,
                ariaHideApp: i.default.bool,
                appElement: i.default.oneOfType([i.default.instanceOf(p.default), i.default.instanceOf(f.SafeHTMLCollection), i.default.instanceOf(f.SafeNodeList), i.default.arrayOf(i.default.instanceOf(p.default))]),
                onAfterOpen: i.default.func,
                onAfterClose: i.default.func,
                onRequestClose: i.default.func,
                closeTimeoutMS: i.default.number,
                shouldFocusAfterRender: i.default.bool,
                shouldCloseOnOverlayClick: i.default.bool,
                shouldReturnFocusAfterClose: i.default.bool,
                preventScroll: i.default.bool,
                role: i.default.string,
                contentLabel: i.default.string,
                aria: i.default.object,
                data: i.default.object,
                children: i.default.node,
                shouldCloseOnEsc: i.default.bool,
                overlayRef: i.default.func,
                contentRef: i.default.func,
                id: i.default.string,
                overlayElement: i.default.func,
                contentElement: i.default.func,
                testId: i.default.string
            }, t.default = g, e.exports = t.default
        },
        7149: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resetState = function() {
                i && (i.removeAttribute ? i.removeAttribute("aria-hidden") : null != i.length ? i.forEach((function(e) {
                    return e.removeAttribute("aria-hidden")
                })) : document.querySelectorAll(i).forEach((function(e) {
                    return e.removeAttribute("aria-hidden")
                })));
                i = null
            }, t.log = function() {
                0
            }, t.assertNodeList = l, t.setElement = function(e) {
                var t = e;
                if ("string" == typeof t && u.canUseDOM) {
                    var n = document.querySelectorAll(t);
                    l(n, t), t = n
                }
                return i = t || i
            }, t.validateElement = s, t.hide = function(e) {
                var t = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var r, a = s(e)[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                        r.value.setAttribute("aria-hidden", "true")
                    }
                } catch (u) {
                    n = !0, o = u
                } finally {
                    try {
                        !t && a.return && a.return()
                    } finally {
                        if (n) throw o
                    }
                }
            }, t.show = function(e) {
                var t = !0,
                    n = !1,
                    o = void 0;
                try {
                    for (var r, a = s(e)[Symbol.iterator](); !(t = (r = a.next()).done); t = !0) {
                        r.value.removeAttribute("aria-hidden")
                    }
                } catch (u) {
                    n = !0, o = u
                } finally {
                    try {
                        !t && a.return && a.return()
                    } finally {
                        if (n) throw o
                    }
                }
            }, t.documentNotReadyOrSSRTesting = function() {
                i = null
            };
            var o, r = n(2473),
                a = (o = r) && o.__esModule ? o : {
                    default: o
                },
                u = n(1112);
            var i = null;

            function l(e, t) {
                if (!e || !e.length) throw new Error("react-modal: No elements were found for selector " + t + ".")
            }

            function s(e) {
                var t = e || i;
                return t ? Array.isArray(t) || t instanceof HTMLCollection || t instanceof NodeList ? t : [t] : ((0, a.default)(!1, ["react-modal: App element is not defined.", "Please use `Modal.setAppElement(el)` or set `appElement={el}`.", "This is needed so screen readers don't see main content", "when modal is opened. It is not recommended, but you can opt-out", "by setting `ariaHideApp={false}`."].join(" ")), [])
            }
        },
        5063: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resetState = function() {
                for (var e = [u, i], t = 0; t < e.length; t++) {
                    var n = e[t];
                    n && (n.parentNode && n.parentNode.removeChild(n))
                }
                u = i = null, l = []
            }, t.log = function() {
                console.log("bodyTrap ----------"), console.log(l.length);
                for (var e = [u, i], t = 0; t < e.length; t++) {
                    var n = e[t] || {};
                    console.log(n.nodeName, n.className, n.id)
                }
                console.log("edn bodyTrap ----------")
            };
            var o, r = n(9623),
                a = (o = r) && o.__esModule ? o : {
                    default: o
                };
            var u = void 0,
                i = void 0,
                l = [];

            function s() {
                0 !== l.length && l[l.length - 1].focusContent()
            }
            a.default.subscribe((function(e, t) {
                u || i || ((u = document.createElement("div")).setAttribute("data-react-modal-body-trap", ""), u.style.position = "absolute", u.style.opacity = "0", u.setAttribute("tabindex", "0"), u.addEventListener("focus", s), (i = u.cloneNode()).addEventListener("focus", s)), (l = t).length > 0 ? (document.body.firstChild !== u && document.body.insertBefore(u, document.body.firstChild), document.body.lastChild !== i && document.body.appendChild(i)) : (u.parentElement && u.parentElement.removeChild(u), i.parentElement && i.parentElement.removeChild(i))
            }))
        },
        2409: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resetState = function() {
                var e = document.getElementsByTagName("html")[0];
                for (var t in n) r(e, n[t]);
                var a = document.body;
                for (var u in o) r(a, o[u]);
                n = {}, o = {}
            }, t.log = function() {
                0
            };
            var n = {},
                o = {};

            function r(e, t) {
                e.classList.remove(t)
            }
            t.add = function(e, t) {
                return r = e.classList, a = "html" == e.nodeName.toLowerCase() ? n : o, void t.split(" ").forEach((function(e) {
                    ! function(e, t) {
                        e[t] || (e[t] = 0), e[t] += 1
                    }(a, e), r.add(e)
                }));
                var r, a
            }, t.remove = function(e, t) {
                return r = e.classList, a = "html" == e.nodeName.toLowerCase() ? n : o, void t.split(" ").forEach((function(e) {
                    ! function(e, t) {
                        e[t] && (e[t] -= 1)
                    }(a, e), 0 === a[e] && r.remove(e)
                }));
                var r, a
            }
        },
        9685: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.resetState = function() {
                u = []
            }, t.log = function() {
                0
            }, t.handleBlur = s, t.handleFocus = c, t.markForFocusLater = function() {
                u.push(document.activeElement)
            }, t.returnFocus = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = null;
                try {
                    return void(0 !== u.length && (t = u.pop()).focus({
                        preventScroll: e
                    }))
                } catch (n) {
                    console.warn(["You tried to return focus to", t, "but it is not in the DOM anymore"].join(" "))
                }
            }, t.popWithoutFocus = function() {
                u.length > 0 && u.pop()
            }, t.setupScopedFocus = function(e) {
                i = e, window.addEventListener ? (window.addEventListener("blur", s, !1), document.addEventListener("focus", c, !0)) : (window.attachEvent("onBlur", s), document.attachEvent("onFocus", c))
            }, t.teardownScopedFocus = function() {
                i = null, window.addEventListener ? (window.removeEventListener("blur", s), document.removeEventListener("focus", c)) : (window.detachEvent("onBlur", s), document.detachEvent("onFocus", c))
            };
            var o, r = n(7845),
                a = (o = r) && o.__esModule ? o : {
                    default: o
                };
            var u = [],
                i = null,
                l = !1;

            function s() {
                l = !0
            }

            function c() {
                if (l) {
                    if (l = !1, !i) return;
                    setTimeout((function() {
                        i.contains(document.activeElement) || ((0, a.default)(i)[0] || i).focus()
                    }), 0)
                }
            }
        },
        9623: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.log = function() {
                console.log("portalOpenInstances ----------"), console.log(o.openInstances.length), o.openInstances.forEach((function(e) {
                    return console.log(e)
                })), console.log("end portalOpenInstances ----------")
            }, t.resetState = function() {
                o = new n
            };
            var n = function e() {
                    var t = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.register = function(e) {
                        -1 === t.openInstances.indexOf(e) && (t.openInstances.push(e), t.emit("register"))
                    }, this.deregister = function(e) {
                        var n = t.openInstances.indexOf(e); - 1 !== n && (t.openInstances.splice(n, 1), t.emit("deregister"))
                    }, this.subscribe = function(e) {
                        t.subscribers.push(e)
                    }, this.emit = function(e) {
                        t.subscribers.forEach((function(n) {
                            return n(e, t.openInstances.slice())
                        }))
                    }, this.openInstances = [], this.subscribers = []
                },
                o = new n;
            t.default = o
        },
        1112: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.canUseDOM = t.SafeNodeList = t.SafeHTMLCollection = void 0;
            var o, r = n(8875);
            var a = ((o = r) && o.__esModule ? o : {
                    default: o
                }).default,
                u = a.canUseDOM ? window.HTMLElement : {};
            t.SafeHTMLCollection = a.canUseDOM ? window.HTMLCollection : {}, t.SafeNodeList = a.canUseDOM ? window.NodeList : {}, t.canUseDOM = a.canUseDOM;
            t.default = u
        },
        8338: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function(e, t) {
                var n = (0, a.default)(e);
                if (!n.length) return void t.preventDefault();
                var o = void 0,
                    r = t.shiftKey,
                    i = n[0],
                    l = n[n.length - 1],
                    s = u();
                if (e === s) {
                    if (!r) return;
                    o = l
                }
                l !== s || r || (o = i);
                i === s && r && (o = l);
                if (o) return t.preventDefault(), void o.focus();
                var c = /(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent);
                if (null == c || "Chrome" == c[1] || null != /\biPod\b|\biPad\b/g.exec(navigator.userAgent)) return;
                var d = n.indexOf(s);
                d > -1 && (d += r ? -1 : 1);
                if (void 0 === (o = n[d])) return t.preventDefault(), void(o = r ? l : i).focus();
                t.preventDefault(), o.focus()
            };
            var o, r = n(7845),
                a = (o = r) && o.__esModule ? o : {
                    default: o
                };

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : document;
                return e.activeElement.shadowRoot ? u(e.activeElement.shadowRoot) : e.activeElement
            }
            e.exports = t.default
        },
        7845: function(e, t) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            }), t.default = function e(t) {
                var n = [].slice.call(t.querySelectorAll("*"), 0).reduce((function(t, n) {
                    return t.concat(n.shadowRoot ? e(n.shadowRoot) : [n])
                }), []);
                return n.filter(a)
            };
            var n = /input|select|textarea|button|object|iframe/;

            function o(e) {
                var t = e.offsetWidth <= 0 && e.offsetHeight <= 0;
                if (t && !e.innerHTML) return !0;
                try {
                    var n = window.getComputedStyle(e),
                        o = n.getPropertyValue("display");
                    return t ? "contents" !== o && function(e, t) {
                        return "visible" !== t.getPropertyValue("overflow") || e.scrollWidth <= 0 && e.scrollHeight <= 0
                    }(e, n) : "none" === o
                } catch (r) {
                    return console.warn("Failed to inspect element style"), !1
                }
            }

            function r(e, t) {
                var r = e.nodeName.toLowerCase();
                return (n.test(r) && !e.disabled || "a" === r && e.href || t) && function(e) {
                    for (var t = e, n = e.getRootNode && e.getRootNode(); t && t !== document.body;) {
                        if (n && t === n && (t = n.host.parentNode), o(t)) return !1;
                        t = t.parentNode
                    }
                    return !0
                }(e)
            }

            function a(e) {
                var t = e.getAttribute("tabindex");
                null === t && (t = void 0);
                var n = isNaN(t);
                return (n || t >= 0) && r(e, !n)
            }
            e.exports = t.default
        },
        3253: function(e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var o, r = n(9983),
                a = (o = r) && o.__esModule ? o : {
                    default: o
                };
            t.default = a.default, e.exports = t.default
        },
        2473: function(e) {
            "use strict";
            var t = function() {};
            e.exports = t
        }
    }
]);
//# sourceMappingURL=335691c19e0be44ce3be3b931eb6fbb875bed505-f1d99437e9d59eb2d71c.js.map