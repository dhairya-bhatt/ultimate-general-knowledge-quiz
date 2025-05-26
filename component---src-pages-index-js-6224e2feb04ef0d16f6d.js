(self.webpackChunkgatsby_starter_hello_world = self.webpackChunkgatsby_starter_hello_world || []).push([
    [678], {
        3871: function(e, t, a) {
            "use strict";
            a.d(t, {
                Z: function() {
                    return r
                }
            });
            var n = a(7294),
                i = a(4184),
                o = a.n(i);
            var r = e => {
                let {
                    content: t,
                    author: a,
                    affiliation: i,
                    link: r,
                    large: l,
                    showcase: c,
                    topMargin: s
                } = e;
                const d = o()("index-module--quote--c0d5e", {
                    largeBodyFont: l,
                    "index-module--showcase--afd26": c,
                    "index-module--topMargin--d2d16": s
                });
                return n.createElement("div", {
                    className: d
                }, n.createElement("blockquote", null, '"', t, '"'), n.createElement("p", {
                    className: "index-module--author--29dea " + (c ? "h3" : "h4")
                }, r ? n.createElement("a", {
                    href: r,
                    target: "_blank",
                    rel: "noreferrer"
                }, a) : a), n.createElement("p", {
                    className: "index-module--affiliation--f9331 smallBodyFont"
                }, i))
            }
        },
        9879: function(e, t, a) {
            "use strict";
            a.r(t), a.d(t, {
                Head: function() {
                    return X
                },
                default: function() {
                    return q
                }
            });
            var n = a(7294),
                i = a(1883),
                o = a(8032),
                r = a(3096),
                l = a.n(r);
            const c = "animate__animated",
                s = "undefined" == typeof window;
            let d;
            s || (d = window);
            const u = ({
                offset: e = 150,
                duration: t = 1,
                style: a,
                className: i,
                initiallyVisible: o = !1,
                animateIn: r,
                afterAnimatedIn: u,
                animateOut: m,
                delay: f = 0,
                animatePreScroll: h = !0,
                afterAnimatedOut: p,
                scrollableParentSelector: g,
                animateOnce: b = !1,
                children: w
            }) => {
                const [E, y] = (0, n.useState)(c), [v, k] = (0, n.useState)({
                    animationDuration: `${t}s`,
                    opacity: o ? 1 : 0
                }), C = (0, n.useRef)(null), x = (0, n.useRef)(!1), N = (0, n.useRef)({
                    onScreen: !1,
                    inViewport: !1
                }), Z = (0, n.useRef)(void 0), S = (0, n.useRef)(void 0), T = (0, n.useRef)(d), I = (0, n.useCallback)((e => {
                    let t = 0;
                    for (; e && void 0 !== e.offsetTop && void 0 !== e.clientTop;) t += e.offsetTop + e.clientTop, e = e.offsetParent;
                    return t
                }), []), M = (0, n.useCallback)((() => void 0 !== T.current.pageYOffset ? T.current.pageYOffset : T.current.scrollTop), [T]), A = (0, n.useCallback)((() => void 0 !== T.current.innerHeight ? T.current.innerHeight : T.current.clientHeight), [T]), P = (0, n.useCallback)((() => M() + e), [e, M]), _ = (0, n.useCallback)((() => M() + A() - e), [e, M, A]), H = (0, n.useCallback)((e => e >= P() && e <= _()), [P, _]), J = (0, n.useCallback)((e => e < P()), [P]), B = (0, n.useCallback)((e => e > _()), [_]), O = (0, n.useCallback)(((e, t) => H(e) || H(t) || J(e) && B(t)), [H, J, B]), j = (0, n.useCallback)((e => e < M()), [M]), L = (0, n.useCallback)((e => e > M() + A()), [M, A]), R = (0, n.useCallback)(((e, t) => !j(t) && !L(e)), [j, L]), F = (0, n.useCallback)((() => {
                    const e = I(C.current) - I(T.current),
                        t = e + C.current.clientHeight;
                    return {
                        inViewport: O(e, t),
                        onScreen: R(e, t)
                    }
                }), [I, C, O, R, T]), V = (0, n.useCallback)(((e, t) => e.inViewport !== t.inViewport || e.onScreen !== t.onScreen), []), W = (0, n.useCallback)(((e, a) => {
                    Z.current = setTimeout((() => {
                        x.current = !0, y(`${c} ${e}`), k({
                            animationDuration: `${t}s`
                        }), S.current = setTimeout(a, 1e3 * t)
                    }), f)
                }), [x, f, t]), z = (0, n.useCallback)((e => {
                    W(r, (() => {
                        b || (k({
                            animationDuration: `${t}s`,
                            opacity: 1
                        }), x.current = !1);
                        const a = F();
                        e && e(a)
                    }))
                }), [x, r, b, t, W, F]), D = (0, n.useCallback)((e => {
                    W(m, (() => {
                        y(c), k({
                            animationDuration: `${t}s`,
                            opacity: 0
                        });
                        const a = F();
                        a.inViewport && r ? z(u) : x.current = !1, e && e(a)
                    }))
                }), [x, W, r, t, u, z, m, F]), $ = (0, n.useCallback)((() => {
                    if (!x.current) {
                        const {
                            current: e
                        } = N, a = F();
                        V(e, a) && (clearTimeout(Z.current), a.onScreen ? a.inViewport && r ? z(u) : a.onScreen && e.inViewport && m && "1" === C.current.style.opacity && D(p) : (y(c), k({
                            animationDuration: `${t}s`,
                            opacity: o ? 1 : 0
                        })), N.current = a)
                    }
                }), [u, p, r, z, m, t, o, V, D, F]), U = (0, n.useMemo)((() => l()((() => {
                    $()
                }), 50)), [$]);
                return (0, n.useEffect)((() => {
                    if (!s) {
                        const e = g;
                        return T.current = e ? document.querySelector(e) : window, T.current && T.current.addEventListener ? T.current.addEventListener("scroll", U) : console.warn(`Cannot find element by locator: ${g}`), h && $(), () => {
                            clearTimeout(Z.current), clearTimeout(S.current), window && window.removeEventListener && window.removeEventListener("scroll", U)
                        }
                    }
                }), [$, g, T, U, h]), n.createElement("div", {
                    ref: C,
                    className: i ? `${i} ${E}` : E,
                    style: Object.assign({}, v, a)
                }, w)
            };
            var m = a(8232),
                f = a(6696),
                h = a(3505);
            const p = "The Coming Wave Book",
                g = "This groundbreaking new book from AI entrepreneur Mustafa Suleyman is a must-read guide to the technological revolution just starting, and the transformed world it will create.",
                b = "We are approaching a critical threshold in the history of our species.",
                w = "Everything is about to change.",
                E = "This is a story of 21st century technology, why it matters so much and what we can do to make it work for everyone.",
                y = "Soon we will live surrounded by AIs. They will carry out complex tasks—operating businesses, producing unlimited digital content and running core government services.",
                v = "The coming wave will make this next decade the most productive in history. It represents nothing less than a step change in human capability and human society, introducing both risks and innovations on an awesome scale.",
                k = "This is what is coming.",
                C = "Out Now",
                x = "This groundbreaking new book from AI entrepreneur Mustafa Suleyman is a must-read guide to the technological revolution just starting, and the transformed world it will create.",
                N = "In it Suleyman establishes “the containment problem”—the task of maintaining control over powerful technologies—as the essential challenge of our age.",
                Z = "Over the last year, we've seen the first signs this wave of powerful, fast-proliferating new technologies is breaking. These tools will help address global challenges and create vast wealth—but also upheaval on a once unimaginable scale. Understand this wave, and you will begin to understand the future.",
                S = "In The Coming Wave, Mustafa Suleyman shows how these forces threaten the nation state itself, and how we can successfully contain history's most powerful technologies to avoid catastrophic or dystopian outcomes. Amidst unprecedented peril and extraordinary promise, here is both a stark warning and a hopeful guide to where society goes next.",
                T = "Glossary of Terms",
                I = "Mustafa Suleyman",
                M = "Mustafa Suleyman is the CEO of Microsoft AI. Previously he co-founded Inflection AI and DeepMind. He brings 15 years of experience as an entrepreneur, technologist and leader in artificial intelligence.",
                A = "He is on the board of directors of The Economist and is a Senior Fellow at the Belfer Center for Science and International Affairs at the Harvard Kennedy School. He lives in Palo Alto, California.",
                P = "Michael Bhaskar",
                _ = "Praise for The Coming Wave",
                H = "More Reviews";
            var J = e => {
                    let {
                        screenPosX: t,
                        screenPosY: a,
                        scrolled: i
                    } = e;
                    return n.createElement("div", {
                        className: "index-module--showcase--121fb"
                    }, n.createElement(f.Z, {
                        fullHeight: !0,
                        className: "index-module--aboveFold--985c0"
                    }, n.createElement("div", {
                        className: "index-module--zIndexFix--25db8"
                    }, n.createElement(u, {
                        animateIn: "animate__zoomIn",
                        duration: "2"
                    }, n.createElement("div", {
                        className: "index-module--titleWrapper--c6a97"
                    }, n.createElement("h1", {
                        className: "index-module--title--09528",
                        style: {
                            transform: "rotateX(" + 12 * a + "deg) rotateY(" + 12 * t + "deg) translateZ(0)"
                        }
                    }, n.createElement("span", {
                        className: "index-module--titleWordThe--7fc40"
                    }, "THE"), n.createElement("span", {
                        className: "index-module--titleWordComing--f03a2"
                    }, "COMING"), n.createElement("span", {
                        className: "index-module--titleWordWave--4fe43"
                    }, "WAVE"), n.createElement("span", {
                        className: "index-module--titleTech--7b8ee"
                    }, "Technology, Power, and the", n.createElement("br", null), "21st Century's greatest dilemma")))), n.createElement("a", {
                        className: "index-module--downArrow--0bbe2 " + (i ? "index-module--downArrowTransitionOut--c0abc" : ""),
                        href: "#intro",
                        "aria-label": "Next content"
                    }))), n.createElement(f.Z, {
                        className: "index-module--introBlurb--5489a",
                        id: "intro"
                    }, n.createElement(h.Z, null, n.createElement(h.J, {
                        span: 6,
                        start: 4
                    }, n.createElement(u, {
                        animateIn: "animate__fadeIn"
                    }, n.createElement("div", {
                        className: "h2"
                    }, n.createElement("p", null, b))), n.createElement(u, {
                        animateIn: "animate__fadeIn",
                        delay: "200"
                    }, n.createElement("div", {
                        className: "h2"
                    }, n.createElement("p", {
                        className: "noMargin"
                    }, w))), n.createElement(u, {
                        animateIn: "animate__fadeIn",
                        delay: "200"
                    }, n.createElement("p", {
                        className: "textMarginTopLarge"
                    }, E), n.createElement("p", null, y), n.createElement("p", null, v), n.createElement("p", null, k))))))
                },
                B = a(9844),
                O = a(3871),
                j = a(6079),
                L = a(2832);
            var R = () => n.createElement("svg", {
                viewBox: "0 0 15 17",
                fill: "none"
            }, n.createElement("title", null, "Linked In"), n.createElement("path", {
                d: "M11.8508 16.2502H15V9.75965C15 6.55411 13.1011 5.46077 11.3439 5.46077C9.71905 5.46077 8.61527 6.56372 8.31052 7.20981V5.75574H5.28196V16.2502H8.43111V10.5605C8.43111 9.04338 9.3471 8.30559 10.2816 8.30559C11.1654 8.30559 11.8508 8.82715 11.8508 10.5184V16.2502Z",
                fill: "#141356"
            }), n.createElement("path", {
                d: "M0 2.39729C0 3.49292 0.812854 4.29358 1.81554 4.29358C2.81837 4.29358 3.63122 3.49292 3.63122 2.39729C3.63122 1.30182 2.81837 0.500244 1.81554 0.500244C0.812854 0.500244 0 1.30182 0 2.39729Z",
                fill: "#141356"
            }), n.createElement("path", {
                d: "M0.241035 16.2422H3.39004V5.74765H0.241035V16.2422Z",
                fill: "#141356"
            }));
            var F = () => n.createElement("svg", {
                    viewBox: "0 0 19 15",
                    fill: "none"
                }, n.createElement("title", null, "Twitter"), n.createElement("path", {
                    d: "M9.2109 3.74694L9.24867 4.35613L8.61914 4.28154C6.32765 3.99559 4.32574 3.02585 2.626 1.39719L1.79502 0.589077L1.58098 1.18584C1.12772 2.51612 1.4173 3.92099 2.3616 4.86587C2.86523 5.38803 2.75191 5.46263 1.88316 5.15182C1.58098 5.05235 1.31658 4.97776 1.2914 5.01506C1.20326 5.10209 1.50544 6.23345 1.74466 6.68102C2.07202 7.30264 2.73932 7.91184 3.46958 8.27238L4.08652 8.55833L3.35626 8.57076C2.65118 8.57076 2.626 8.58319 2.70155 8.84428C2.95336 9.65239 3.94802 10.5102 5.05599 10.8832L5.83661 11.1443L5.15672 11.5421C4.14947 12.114 2.96595 12.4373 1.78243 12.4621C1.21585 12.4746 0.75 12.5243 0.75 12.5616C0.75 12.6859 2.28606 13.3821 3.17999 13.6557C5.86179 14.4638 9.04722 14.1157 11.4394 12.7357C13.1392 11.7535 14.8389 9.80158 15.6321 7.91184C16.0602 6.9048 16.4883 5.06479 16.4883 4.18208C16.4883 3.61018 16.5261 3.53559 17.2311 2.8518C17.6466 2.45396 18.0369 2.01882 18.1125 1.89449C18.2384 1.65827 18.2258 1.65827 17.5837 1.86963C16.5135 2.2426 16.3624 2.19287 16.8912 1.63341C17.2815 1.23557 17.7473 0.514482 17.7473 0.303129C17.7473 0.265831 17.5585 0.327994 17.3444 0.439886C17.1178 0.564212 16.6142 0.7507 16.2365 0.862592L15.5566 1.07395L14.9396 0.663672C14.5997 0.439886 14.1212 0.191236 13.8694 0.116641C13.2273 -0.0574148 12.2452 -0.0325497 11.6661 0.166371C10.0922 0.725835 9.09759 2.16801 9.2109 3.74694Z",
                    fill: "#141356"
                })),
                V = a(8159),
                W = a(6820),
                z = a(150),
                D = a(3272),
                $ = a(8383);
            const U = [{
                    content: "A heartfelt and candid exploration of what the future may hold for us... Eloquently articulated.",
                    author: "The Guardian",
                    affiliation: "",
                    id: "testimonial0a",
                    link: "https://www.theguardian.com/books/2023/aug/28/the-coming-wave-by-mustafa-suleyman-review-ai-synthetic-biology-and-a-new-dawn-for-humanity"
                }, {
                    content: "Dazzling... You have by now read a great deal of both hype and doom-mongering on the subject [of AI]. But Suleyman’s is the book you cannot afford not to read... Brilliant.",
                    author: "Niall Ferguson",
                    affiliation: "Bloomberg",
                    id: "testimonial0b",
                    link: "https://www.bloomberg.com/opinion/articles/2023-08-27/ai-arms-control-can-keep-the-new-cold-war-from-turning-hot#xj4y7vzkg"
                }, {
                    content: "[Suleyman] states his case with clarity and authority, and the result is a worrying, provocative book... An informative yet disturbing study and a clear warning from someone whose voice cannot be ignored.",
                    author: "Kirkus Reviews (starred review)",
                    affiliation: "",
                    id: "testimonial0c",
                    link: "https://www.kirkusreviews.com/book-reviews/mustafa-suleyman/the-coming-wave-technology/"
                }, {
                    content: "An erudite, clear-eyed guide to both the history of radical technological change and to the deep political challenges that lay ahead.",
                    author: "Anne Applebaum",
                    affiliation: "Pulitzer Prize-winning historian",
                    id: "testimonial01"
                }, {
                    content: "Brilliant... Confronts what may be the most crucial question of our century: How can we ensure the breathtaking, fast-paced technological revolutions ahead create the world we want?",
                    author: "Eric Lander",
                    affiliation: "Founding director, Broad Institute of MIT and Harvard",
                    id: "testimonial02"
                }, {
                    content: "Truly remarkable, ambitious and impossible to ignore... A persuasively argued tour-de-force.",
                    author: "Nouriel Roubini",
                    affiliation: "Professor emeritus, New York University",
                    id: "testimonial03"
                }, {
                    content: "A practical and optimistic roadmap.",
                    author: "Stuart Russell",
                    affiliation: "Professor of computer science, University of California, Berkeley",
                    id: "testimonial04"
                }, {
                    content: "Extraordinary... Utterly unmissable.",
                    author: "Eric Schmidt",
                    affiliation: "Former CEO, Google",
                    id: "testimonial05"
                }, {
                    content: "A panoramic survey and a clarion call to action... Everyone should read it.",
                    author: "Fei-Fei Li",
                    affiliation: "Co-director, Stanford Institute for Human-Centered AI",
                    id: "testimonial06"
                }, {
                    content: "Calm, pragmatic and deeply ethical... Enthralling reading.",
                    author: "Angela Kane",
                    affiliation: "Former United Nations Under-Secretary-General",
                    id: "testimonial07"
                }, {
                    content: "A brave wake-up call... Indispensable reading.",
                    author: "Tristan Harris",
                    affiliation: "Co-founder, Center for Humane Technology",
                    id: "testimonial08"
                }, {
                    content: "Sharp, compassionate, and uncompromising.",
                    author: "Qi Lu",
                    affiliation: "Former COO, Baidu; former EVP, Microsoft Bing",
                    id: "testimonial09"
                }, {
                    content: "An extraordinary and necessary book... One leaves energized and thrilled to be alive right now.",
                    author: "Alain de Botton",
                    affiliation: "Philosopher and bestselling author",
                    id: "testimonial10"
                }, {
                    content: "Deeply rewarding and consistently astonishing.",
                    author: "Stephen Fry",
                    affiliation: "Actor, broadcaster, and bestselling author",
                    id: "testimonial11"
                }, {
                    content: "Honest, passionate, and unafraid to confront what is clearly one of the great challenges our species will face this century.",
                    author: "Andrew McAfee",
                    affiliation: "Principal research scientist at MIT Sloan",
                    id: "testimonial12"
                }, {
                    content: "A must-read",
                    author: "Mehgan L. O’Sullivan",
                    affiliation: "Director of the Belfer Center for Science and International Affairs at the Harvard Kennedy School of Government",
                    id: "testimonial13"
                }, {
                    content: "The best analysis yet of what AI means for the future of humanity…",
                    author: "Reid Hoffman",
                    affiliation: "Co-founder of LinkedIn and Inflection",
                    id: "testimonial14"
                }, {
                    content: "An eye-opening and convincing case…",
                    author: "Jeffrey D. Sachs",
                    affiliation: "University Professor at Columbia University",
                    id: "testimonial15"
                }],
                Y = [{
                    id: "topShortReview01",
                    content: "A fascinating, well-written, and important book.",
                    author: "Yuval Noah Harari",
                    affiliation: "Bestselling author of Sapiens"
                }, {
                    id: "topShortReview02",
                    content: "An excellent guide for navigating unprecedented times.",
                    author: "Bill Gates",
                    affiliation: "Co-founder of Microsoft"
                }, {
                    id: "topShortReview03",
                    content: "Rich with interesting facts, arresting arguments, and compelling observations; it is essential reading.",
                    author: "Daniel Kahneman",
                    affiliation: "Bestselling author of Thinking, Fast and Slow"
                }];
            var G = "index-module--authorHeader--538e7",
                K = "index-module--authorSocials--9a53c";
            var q = () => {
                const e = (0, V.c)(),
                    t = (0, z.d)().x,
                    r = (0, z.d)().y,
                    l = (0, W.k)().x || 0,
                    c = (0, W.k)().y || 0,
                    s = null !== e[0] ? e[0] / 3 : (0, $.Z)(l, t) || 0,
                    d = null !== e[0] ? -1 * (e[1] - 5) / 3 : (0, $.Z)(c, r) || 0,
                    p = (0, D.R)(),
                    g = 2.3,
                    b = (0, n.useRef)();
                let w, E, y = 0,
                    v = 0,
                    k = 0,
                    L = 0;
                p > r * g && (y = b.current.getBoundingClientRect().top, v = b.current.getBoundingClientRect().left, k = b.current.getBoundingClientRect().width, L = b.current.getBoundingClientRect().height), null !== e[0] ? (w = (e[0] + 4) / 4, E = -1 * (e[1] - 10) / 4) : (w = l - v > k ? 1 : l < v ? 0 : Math.ceil((l - v) / k * 100) / 100, E = c - y > L ? 1 : c < y ? 0 : Math.ceil((c - y) / L * 100) / 100);
                const q = w > 0 && w < 1 && E > 0 && E < 1 || e[0];
                return n.createElement(m.Z, {
                    page: "home",
                    preChildren: n.createElement(n.Fragment, null, n.createElement(B.Z, {
                        isVisible: !0,
                        disableExplosion: p > 2.5 * r
                    }), n.createElement(J, {
                        screenPosX: s,
                        screenPosY: d,
                        scrolled: p > 0
                    })),
                    headerProps: p > r * g
                }, n.createElement("div", {
                    className: "index-module--bookSticky--a3881",
                    id: "default"
                }, n.createElement(f.Z, {
                    fullHeight: !0,
                    className: "index-module--bookWrap--703fb"
                }, n.createElement(h.Z, {
                    verticalCenter: !0
                }, n.createElement(h.J, {
                    start: 2,
                    span: 5,
                    className: "index-module--bookCoverCol--125bd"
                }, n.createElement("div", {
                    ref: b,
                    className: "index-module--bookCoverWrapper--a9d98",
                    style: {
                        transform: "scale(0.8) translate3d(" + (p < r * g && t > 1023 ? "60%" : 0) + ", 0, 0)"
                    }
                }, n.createElement("div", {
                    className: "index-module--bookCover--63cc3",
                    style: {
                        transform: "rotateY(" + (q ? -20 * (w - .5) : 0) + "deg) rotateX(" + (q ? 10 * (E - .5) : 0) + "deg)",
                        zIndex: 99
                    }
                }, n.createElement(o.S, {
                    src: "../assets/images/book-background-large.jpg",
                    alt: "",
                    className: "index-module--bookBackground--d0ae2",
                    style: {
                        transform: "scale(1.8) translate3d(" + (q ? 30 * w - 40 : 0) + "px, " + (q ? 50 * E - 40 : 0) + "px, 0)"
                    },
                    __imageData: a(6724)
                }), n.createElement("div", {
                    className: "index-module--bookCoverMiddle--c686d",
                    style: {
                        backgroundPosition: (q ? 50 + -40 * (w - .5) : 50) + "% " + (q ? 50 + 30 * (E - .5) : 50) + "%",
                        opacity: q ? .6 : .2,
                        backgroundImage: "\n                        linear-gradient(" + (90 + 90 * (E - .5 + (w - .5))) + "deg,\n                        transparent 25%,\n                        rgba(255, 0, 13, 1),\n                        rgba(252, 143, 0, 1),\n                        rgba(255, 255, 0, 1),\n                        rgba(0, 255, 138, 1),\n                        rgba(0, 207, 255, 1),\n                        rgba(204, 76, 250, 1),\n                        transparent 75%)\n                      ",
                        WebkitMaskImage: "\n                        radial-gradient(circle at " + 40 * w + "% " + 40 * E + "%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 70%)"
                    }
                }), n.createElement("div", {
                    className: "index-module--bookWords--f4c73"
                }, n.createElement(o.S, {
                    src: "../assets/images/book-foreground.png",
                    alt: "",
                    __imageData: a(1299)
                }))))), n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement("div", {
                    className: "index-module--bookContent--7d8ce",
                    style: {
                        opacity: "" + (p < r * g && t > 1023 ? 0 : 1),
                        transform: "translateX(" + (p < r * g && t > 1023 ? "-52%" : 0) + ")"
                    }
                }, n.createElement("h1", {
                    className: "h2"
                }, C), n.createElement("p", null, x), n.createElement("p", null, N), n.createElement("div", {
                    className: "index-module--buttons--f98cd"
                }, n.createElement(j.Z, null))))))), n.createElement(f.Z, {
                    padding: "both",
                    className: "index-module--topQuote--ba869"
                }, n.createElement(h.Z, null, n.createElement(h.J, {
                    start: 3,
                    span: 8
                }, Y.map(((e, t) => n.createElement(u, {
                    animateIn: "animate__fadeIn"
                }, n.createElement(O.Z, {
                    key: e.id,
                    content: e.content,
                    author: e.author,
                    affiliation: e.affiliation,
                    showcase: !0,
                    large: !0,
                    topMargin: t > 0
                }))))))), n.createElement(f.Z, {
                    padding: "both",
                    className: "index-module--moreInfo--652ac"
                }, n.createElement(h.Z, null, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement(u, {
                    animateIn: "animate__fadeIn"
                }, n.createElement("p", null, Z))), n.createElement(h.J, {
                    start: 7,
                    span: 6
                }, n.createElement(u, {
                    animateIn: "animate__fadeIn",
                    delay: "200"
                }, n.createElement("p", null, S), n.createElement(i.Link, {
                    to: "/glossary",
                    className: "button-secondary"
                }, T))))), n.createElement(f.Z, {
                    padding: "both",
                    className: "index-module--authors--8fab3",
                    beforeChildren: n.createElement(o.S, {
                        src: "../assets/images/mustafa-suleyman-profile.jpg",
                        alt: "",
                        className: "index-module--authorProfile--2b384",
                        __imageData: a(9485)
                    })
                }, n.createElement(h.Z, {
                    orderFix: !0
                }, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement("div", {
                    className: G
                }, n.createElement("h2", {
                    className: "noMargin"
                }, I), n.createElement("ul", {
                    className: K
                }, n.createElement("li", null, n.createElement("a", {
                    href: "https://www.linkedin.com/in/mustafa-suleyman/",
                    "aria-label": "LinkedIn"
                }, n.createElement(R, null))), n.createElement("li", null, n.createElement("a", {
                    href: "https://twitter.com/mustafasuleyman",
                    "aria-label": "Twitter"
                }, n.createElement(F, null))))), n.createElement("p", null, M), n.createElement("p", null, A), n.createElement("div", {
                    className: G + " textMarginTopLarge"
                }, n.createElement("h2", {
                    className: "noMargin"
                }, P), n.createElement("ul", {
                    className: K
                }, n.createElement("li", null, n.createElement("a", {
                    href: "https://twitter.com/michaelbhaskar",
                    "aria-label": "Twitter"
                }, n.createElement(F, null))))), n.createElement("p", null, "Michael Bhaskar is a writer and publisher based in the UK, author of ", n.createElement("i", null, "The Content Machine"), ", ", n.createElement("i", null, "Curation"), " and ", n.createElement("i", null, "Human Frontiers"), ".")))), n.createElement(f.Z, {
                    padding: "both",
                    className: "index-module--shortReviews--3a4b1"
                }, n.createElement(h.Z, null, n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement("h2", null, _))), n.createElement(h.Z, {
                    desktopPadding: "top"
                }, n.createElement(h.J, {
                    start: 1,
                    span: 6
                }, n.createElement(O.Z, {
                    content: U[0].content,
                    author: U[0].author,
                    affiliation: U[0].affiliation,
                    link: U[0].link,
                    large: !0
                }))), n.createElement(h.Z, {
                    padding: "top"
                }, n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[1].content,
                    author: U[1].author,
                    affiliation: U[1].affiliation,
                    link: U[1].link
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[2].content,
                    author: U[2].author,
                    affiliation: U[2].affiliation,
                    link: U[2].link
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[3].content,
                    author: U[3].author,
                    affiliation: U[3].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[4].content,
                    author: U[4].author,
                    affiliation: U[4].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[5].content,
                    author: U[5].author,
                    affiliation: U[5].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[6].content,
                    author: U[6].author,
                    affiliation: U[6].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[7].content,
                    author: U[7].author,
                    affiliation: U[7].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[8].content,
                    author: U[8].author,
                    affiliation: U[8].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[9].content,
                    author: U[9].author,
                    affiliation: U[9].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[10].content,
                    author: U[10].author,
                    affiliation: U[10].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[11].content,
                    author: U[11].author,
                    affiliation: U[11].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[12].content,
                    author: U[12].author,
                    affiliation: U[12].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 7,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[13].content,
                    author: U[13].author,
                    affiliation: U[13].affiliation
                }))), n.createElement(h.Z, {
                    mobilePadding: "top"
                }, n.createElement(h.J, {
                    start: 1,
                    span: 5
                }, n.createElement(O.Z, {
                    content: U[14].content,
                    author: U[14].author,
                    affiliation: U[14].affiliation
                }))), n.createElement(h.Z, {
                    padding: "top"
                }, n.createElement(h.J, {
                    start: 3,
                    span: 8,
                    className: "index-module--readMoreReviews--b6a0a"
                }, n.createElement(i.Link, {
                    to: "/reviews/",
                    className: "button-secondary"
                }, H)))))
            };
            const X = () => n.createElement(L.Z, {
                title: p,
                description: g
            })
        },
        3096: function(e, t, a) {
            var n = "Expected a function",
                i = /^\s+|\s+$/g,
                o = /^[-+]0x[0-9a-f]+$/i,
                r = /^0b[01]+$/i,
                l = /^0o[0-7]+$/i,
                c = parseInt,
                s = "object" == typeof a.g && a.g && a.g.Object === Object && a.g,
                d = "object" == typeof self && self && self.Object === Object && self,
                u = s || d || Function("return this")(),
                m = Object.prototype.toString,
                f = Math.max,
                h = Math.min,
                p = function() {
                    return u.Date.now()
                };

            function g(e, t, a) {
                var i, o, r, l, c, s, d = 0,
                    u = !1,
                    m = !1,
                    g = !0;
                if ("function" != typeof e) throw new TypeError(n);

                function E(t) {
                    var a = i,
                        n = o;
                    return i = o = void 0, d = t, l = e.apply(n, a)
                }

                function y(e) {
                    return d = e, c = setTimeout(k, t), u ? E(e) : l
                }

                function v(e) {
                    var a = e - s;
                    return void 0 === s || a >= t || a < 0 || m && e - d >= r
                }

                function k() {
                    var e = p();
                    if (v(e)) return C(e);
                    c = setTimeout(k, function(e) {
                        var a = t - (e - s);
                        return m ? h(a, r - (e - d)) : a
                    }(e))
                }

                function C(e) {
                    return c = void 0, g && i ? E(e) : (i = o = void 0, l)
                }

                function x() {
                    var e = p(),
                        a = v(e);
                    if (i = arguments, o = this, s = e, a) {
                        if (void 0 === c) return y(s);
                        if (m) return c = setTimeout(k, t), E(s)
                    }
                    return void 0 === c && (c = setTimeout(k, t)), l
                }
                return t = w(t) || 0, b(a) && (u = !!a.leading, r = (m = "maxWait" in a) ? f(w(a.maxWait) || 0, t) : r, g = "trailing" in a ? !!a.trailing : g), x.cancel = function() {
                    void 0 !== c && clearTimeout(c), d = 0, i = s = o = c = void 0
                }, x.flush = function() {
                    return void 0 === c ? l : C(p())
                }, x
            }

            function b(e) {
                var t = typeof e;
                return !!e && ("object" == t || "function" == t)
            }

            function w(e) {
                if ("number" == typeof e) return e;
                if (function(e) {
                        return "symbol" == typeof e || function(e) {
                            return !!e && "object" == typeof e
                        }(e) && "[object Symbol]" == m.call(e)
                    }(e)) return NaN;
                if (b(e)) {
                    var t = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = b(t) ? t + "" : t
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(i, "");
                var a = r.test(e);
                return a || l.test(e) ? c(e.slice(2), a ? 2 : 8) : o.test(e) ? NaN : +e
            }
            e.exports = function(e, t, a) {
                var i = !0,
                    o = !0;
                if ("function" != typeof e) throw new TypeError(n);
                return b(a) && (i = "leading" in a ? !!a.leading : i, o = "trailing" in a ? !!a.trailing : o), g(e, t, {
                    leading: i,
                    maxWait: t,
                    trailing: o
                })
            }
        },
        6724: function(e) {
            "use strict";
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#d8d8d8","images":{"fallback":{"src":"/static/7ee4a2702bac28d5891f41a402df28ed/75630/book-background-large.jpg","srcSet":"/static/7ee4a2702bac28d5891f41a402df28ed/f1657/book-background-large.jpg 610w,\\n/static/7ee4a2702bac28d5891f41a402df28ed/db540/book-background-large.jpg 1219w,\\n/static/7ee4a2702bac28d5891f41a402df28ed/75630/book-background-large.jpg 2438w","sizes":"(min-width: 2438px) 2438px, 100vw"},"sources":[{"srcSet":"/static/7ee4a2702bac28d5891f41a402df28ed/69f6a/book-background-large.webp 610w,\\n/static/7ee4a2702bac28d5891f41a402df28ed/8aaf9/book-background-large.webp 1219w,\\n/static/7ee4a2702bac28d5891f41a402df28ed/044c5/book-background-large.webp 2438w","type":"image/webp","sizes":"(min-width: 2438px) 2438px, 100vw"}]},"width":2438,"height":3705}')
        },
        1299: function(e) {
            "use strict";
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/static/61ea0bd84cafb1a08fa7201526a8b7fe/49fd1/book-foreground.png","srcSet":"/static/61ea0bd84cafb1a08fa7201526a8b7fe/2b790/book-foreground.png 469w,\\n/static/61ea0bd84cafb1a08fa7201526a8b7fe/d823a/book-foreground.png 938w,\\n/static/61ea0bd84cafb1a08fa7201526a8b7fe/49fd1/book-foreground.png 1875w","sizes":"(min-width: 1875px) 1875px, 100vw"},"sources":[{"srcSet":"/static/61ea0bd84cafb1a08fa7201526a8b7fe/4edc2/book-foreground.webp 469w,\\n/static/61ea0bd84cafb1a08fa7201526a8b7fe/54cd4/book-foreground.webp 938w,\\n/static/61ea0bd84cafb1a08fa7201526a8b7fe/9f429/book-foreground.webp 1875w","type":"image/webp","sizes":"(min-width: 1875px) 1875px, 100vw"}]},"width":1875,"height":2850}')
        },
        9485: function(e) {
            "use strict";
            e.exports = JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/static/1916eae7183ac9cee8ac2142472349b0/f1ddc/mustafa-suleyman-profile.jpg","srcSet":"/static/1916eae7183ac9cee8ac2142472349b0/68121/mustafa-suleyman-profile.jpg 325w,\\n/static/1916eae7183ac9cee8ac2142472349b0/f7538/mustafa-suleyman-profile.jpg 650w,\\n/static/1916eae7183ac9cee8ac2142472349b0/f1ddc/mustafa-suleyman-profile.jpg 1300w","sizes":"(min-width: 1300px) 1300px, 100vw"},"sources":[{"srcSet":"/static/1916eae7183ac9cee8ac2142472349b0/3721b/mustafa-suleyman-profile.webp 325w,\\n/static/1916eae7183ac9cee8ac2142472349b0/aaaa8/mustafa-suleyman-profile.webp 650w,\\n/static/1916eae7183ac9cee8ac2142472349b0/075de/mustafa-suleyman-profile.webp 1300w","type":"image/webp","sizes":"(min-width: 1300px) 1300px, 100vw"}]},"width":1300,"height":1568}')
        }
    }
]);
//# sourceMappingURL=component---src-pages-index-js-6224e2feb04ef0d16f6d.js.map