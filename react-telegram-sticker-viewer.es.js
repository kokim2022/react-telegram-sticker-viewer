import * as React from "react";
import React__default, { useState, useEffect } from "react";
var jsxRuntime = { exports: {} }, reactJsxRuntime_production_min = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_production_min;
function requireReactJsxRuntime_production_min() {
  if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
  hasRequiredReactJsxRuntime_production_min = 1;
  var t = React__default, e = Symbol.for("react.element"), i = Symbol.for("react.fragment"), r = Object.prototype.hasOwnProperty, a = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(s, d, h) {
    var o, u = {}, m = null, f = null;
    h !== void 0 && (m = "" + h), d.key !== void 0 && (m = "" + d.key), d.ref !== void 0 && (f = d.ref);
    for (o in d) r.call(d, o) && !n.hasOwnProperty(o) && (u[o] = d[o]);
    if (s && s.defaultProps) for (o in d = s.defaultProps, d) u[o] === void 0 && (u[o] = d[o]);
    return { $$typeof: e, type: s, key: m, ref: f, props: u, _owner: a.current };
  }
  return reactJsxRuntime_production_min.Fragment = i, reactJsxRuntime_production_min.jsx = l, reactJsxRuntime_production_min.jsxs = l, reactJsxRuntime_production_min;
}
var reactJsxRuntime_development = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var hasRequiredReactJsxRuntime_development;
function requireReactJsxRuntime_development() {
  return hasRequiredReactJsxRuntime_development || (hasRequiredReactJsxRuntime_development = 1, process.env.NODE_ENV !== "production" && function() {
    var t = React__default, e = Symbol.for("react.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), a = Symbol.for("react.strict_mode"), n = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), s = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), o = Symbol.for("react.suspense_list"), u = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), f = Symbol.for("react.offscreen"), c = Symbol.iterator, g = "@@iterator";
    function p(E) {
      if (E === null || typeof E != "object")
        return null;
      var R = c && E[c] || E[g];
      return typeof R == "function" ? R : null;
    }
    var y = t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(E) {
      {
        for (var R = arguments.length, O = new Array(R > 1 ? R - 1 : 0), H = 1; H < R; H++)
          O[H - 1] = arguments[H];
        _("error", E, O);
      }
    }
    function _(E, R, O) {
      {
        var H = y.ReactDebugCurrentFrame, W = H.getStackAddendum();
        W !== "" && (R += "%s", O = O.concat([W]));
        var K = O.map(function($) {
          return String($);
        });
        K.unshift("Warning: " + R), Function.prototype.apply.call(console[E], console, K);
      }
    }
    var b = !1, T = !1, k = !1, x = !1, A = !1, w;
    w = Symbol.for("react.module.reference");
    function S(E) {
      return !!(typeof E == "string" || typeof E == "function" || E === r || E === n || A || E === a || E === h || E === o || x || E === f || b || T || k || typeof E == "object" && E !== null && (E.$$typeof === m || E.$$typeof === u || E.$$typeof === l || E.$$typeof === s || E.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      E.$$typeof === w || E.getModuleId !== void 0));
    }
    function P(E, R, O) {
      var H = E.displayName;
      if (H)
        return H;
      var W = R.displayName || R.name || "";
      return W !== "" ? O + "(" + W + ")" : O;
    }
    function F(E) {
      return E.displayName || "Context";
    }
    function I(E) {
      if (E == null)
        return null;
      if (typeof E.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof E == "function")
        return E.displayName || E.name || null;
      if (typeof E == "string")
        return E;
      switch (E) {
        case r:
          return "Fragment";
        case i:
          return "Portal";
        case n:
          return "Profiler";
        case a:
          return "StrictMode";
        case h:
          return "Suspense";
        case o:
          return "SuspenseList";
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case s:
            var R = E;
            return F(R) + ".Consumer";
          case l:
            var O = E;
            return F(O._context) + ".Provider";
          case d:
            return P(E, E.render, "ForwardRef");
          case u:
            var H = E.displayName || null;
            return H !== null ? H : I(E.type) || "Memo";
          case m: {
            var W = E, K = W._payload, $ = W._init;
            try {
              return I($(K));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var M = Object.assign, L = 0, N, Y, C, D, B, V, X;
    function q() {
    }
    q.__reactDisabledLog = !0;
    function J() {
      {
        if (L === 0) {
          N = console.log, Y = console.info, C = console.warn, D = console.error, B = console.group, V = console.groupCollapsed, X = console.groupEnd;
          var E = {
            configurable: !0,
            enumerable: !0,
            value: q,
            writable: !0
          };
          Object.defineProperties(console, {
            info: E,
            log: E,
            warn: E,
            error: E,
            group: E,
            groupCollapsed: E,
            groupEnd: E
          });
        }
        L++;
      }
    }
    function U() {
      {
        if (L--, L === 0) {
          var E = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: M({}, E, {
              value: N
            }),
            info: M({}, E, {
              value: Y
            }),
            warn: M({}, E, {
              value: C
            }),
            error: M({}, E, {
              value: D
            }),
            group: M({}, E, {
              value: B
            }),
            groupCollapsed: M({}, E, {
              value: V
            }),
            groupEnd: M({}, E, {
              value: X
            })
          });
        }
        L < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = y.ReactCurrentDispatcher, Z;
    function j(E, R, O) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (W) {
            var H = W.stack.trim().match(/\n( *(at )?)/);
            Z = H && H[1] || "";
          }
        return `
` + Z + E;
      }
    }
    var it = !1, rt;
    {
      var lt = typeof WeakMap == "function" ? WeakMap : Map;
      rt = new lt();
    }
    function st(E, R) {
      if (!E || it)
        return "";
      {
        var O = rt.get(E);
        if (O !== void 0)
          return O;
      }
      var H;
      it = !0;
      var W = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var K;
      K = Q.current, Q.current = null, J();
      try {
        if (R) {
          var $ = function() {
            throw Error();
          };
          if (Object.defineProperty($.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct($, []);
            } catch (ft) {
              H = ft;
            }
            Reflect.construct(E, [], $);
          } else {
            try {
              $.call();
            } catch (ft) {
              H = ft;
            }
            E.call($.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ft) {
            H = ft;
          }
          E();
        }
      } catch (ft) {
        if (ft && H && typeof ft.stack == "string") {
          for (var G = ft.stack.split(`
`), ot = H.stack.split(`
`), tt = G.length - 1, et = ot.length - 1; tt >= 1 && et >= 0 && G[tt] !== ot[et]; )
            et--;
          for (; tt >= 1 && et >= 0; tt--, et--)
            if (G[tt] !== ot[et]) {
              if (tt !== 1 || et !== 1)
                do
                  if (tt--, et--, et < 0 || G[tt] !== ot[et]) {
                    var gt = `
` + G[tt].replace(" at new ", " at ");
                    return E.displayName && gt.includes("<anonymous>") && (gt = gt.replace("<anonymous>", E.displayName)), typeof E == "function" && rt.set(E, gt), gt;
                  }
                while (tt >= 1 && et >= 0);
              break;
            }
        }
      } finally {
        it = !1, Q.current = K, U(), Error.prepareStackTrace = W;
      }
      var kt = E ? E.displayName || E.name : "", Tt = kt ? j(kt) : "";
      return typeof E == "function" && rt.set(E, Tt), Tt;
    }
    function at(E, R, O) {
      return st(E, !1);
    }
    function z(E) {
      var R = E.prototype;
      return !!(R && R.isReactComponent);
    }
    function yt(E, R, O) {
      if (E == null)
        return "";
      if (typeof E == "function")
        return st(E, z(E));
      if (typeof E == "string")
        return j(E);
      switch (E) {
        case h:
          return j("Suspense");
        case o:
          return j("SuspenseList");
      }
      if (typeof E == "object")
        switch (E.$$typeof) {
          case d:
            return at(E.render);
          case u:
            return yt(E.type, R, O);
          case m: {
            var H = E, W = H._payload, K = H._init;
            try {
              return yt(K(W), R, O);
            } catch {
            }
          }
        }
      return "";
    }
    var ut = Object.prototype.hasOwnProperty, vt = {}, ct = y.ReactDebugCurrentFrame;
    function ht(E) {
      if (E) {
        var R = E._owner, O = yt(E.type, E._source, R ? R.type : null);
        ct.setExtraStackFrame(O);
      } else
        ct.setExtraStackFrame(null);
    }
    function nt(E, R, O, H, W) {
      {
        var K = Function.call.bind(ut);
        for (var $ in E)
          if (K(E, $)) {
            var G = void 0;
            try {
              if (typeof E[$] != "function") {
                var ot = Error((H || "React class") + ": " + O + " type `" + $ + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof E[$] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw ot.name = "Invariant Violation", ot;
              }
              G = E[$](R, $, H, O, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (tt) {
              G = tt;
            }
            G && !(G instanceof Error) && (ht(W), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", H || "React class", O, $, typeof G), ht(null)), G instanceof Error && !(G.message in vt) && (vt[G.message] = !0, ht(W), v("Failed %s type: %s", O, G.message), ht(null));
          }
      }
    }
    var _t = Array.isArray;
    function mt(E) {
      return _t(E);
    }
    function dt(E) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, O = R && E[Symbol.toStringTag] || E.constructor.name || "Object";
        return O;
      }
    }
    function bt(E) {
      try {
        return pt(E), !1;
      } catch {
        return !0;
      }
    }
    function pt(E) {
      return "" + E;
    }
    function Et(E) {
      if (bt(E))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", dt(E)), pt(E);
    }
    var St = y.ReactCurrentOwner, Ct = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, xt, Pt, wt;
    wt = {};
    function Ht(E) {
      if (ut.call(E, "ref")) {
        var R = Object.getOwnPropertyDescriptor(E, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return E.ref !== void 0;
    }
    function Gt(E) {
      if (ut.call(E, "key")) {
        var R = Object.getOwnPropertyDescriptor(E, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return E.key !== void 0;
    }
    function $t(E, R) {
      if (typeof E.ref == "string" && St.current && R && St.current.stateNode !== R) {
        var O = I(St.current.type);
        wt[O] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', I(St.current.type), E.ref), wt[O] = !0);
      }
    }
    function Zt(E, R) {
      {
        var O = function() {
          xt || (xt = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        O.isReactWarning = !0, Object.defineProperty(E, "key", {
          get: O,
          configurable: !0
        });
      }
    }
    function jt(E, R) {
      {
        var O = function() {
          Pt || (Pt = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        O.isReactWarning = !0, Object.defineProperty(E, "ref", {
          get: O,
          configurable: !0
        });
      }
    }
    var Ut = function(E, R, O, H, W, K, $) {
      var G = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: e,
        // Built-in properties that belong on the element
        type: E,
        key: R,
        ref: O,
        props: $,
        // Record the component responsible for creating this element.
        _owner: K
      };
      return G._store = {}, Object.defineProperty(G._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(G, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: H
      }), Object.defineProperty(G, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: W
      }), Object.freeze && (Object.freeze(G.props), Object.freeze(G)), G;
    };
    function Wt(E, R, O, H, W) {
      {
        var K, $ = {}, G = null, ot = null;
        O !== void 0 && (Et(O), G = "" + O), Gt(R) && (Et(R.key), G = "" + R.key), Ht(R) && (ot = R.ref, $t(R, W));
        for (K in R)
          ut.call(R, K) && !Ct.hasOwnProperty(K) && ($[K] = R[K]);
        if (E && E.defaultProps) {
          var tt = E.defaultProps;
          for (K in tt)
            $[K] === void 0 && ($[K] = tt[K]);
        }
        if (G || ot) {
          var et = typeof E == "function" ? E.displayName || E.name || "Unknown" : E;
          G && Zt($, et), ot && jt($, et);
        }
        return Ut(E, G, ot, W, H, St.current, $);
      }
    }
    var Dt = y.ReactCurrentOwner, Rt = y.ReactDebugCurrentFrame;
    function At(E) {
      if (E) {
        var R = E._owner, O = yt(E.type, E._source, R ? R.type : null);
        Rt.setExtraStackFrame(O);
      } else
        Rt.setExtraStackFrame(null);
    }
    var Mt;
    Mt = !1;
    function It(E) {
      return typeof E == "object" && E !== null && E.$$typeof === e;
    }
    function Lt() {
      {
        if (Dt.current) {
          var E = I(Dt.current.type);
          if (E)
            return `

Check the render method of \`` + E + "`.";
        }
        return "";
      }
    }
    function Kt(E) {
      return "";
    }
    var Bt = {};
    function Yt(E) {
      {
        var R = Lt();
        if (!R) {
          var O = typeof E == "string" ? E : E.displayName || E.name;
          O && (R = `

Check the top-level render call using <` + O + ">.");
        }
        return R;
      }
    }
    function Ot(E, R) {
      {
        if (!E._store || E._store.validated || E.key != null)
          return;
        E._store.validated = !0;
        var O = Yt(R);
        if (Bt[O])
          return;
        Bt[O] = !0;
        var H = "";
        E && E._owner && E._owner !== Dt.current && (H = " It was passed a child from " + I(E._owner.type) + "."), At(E), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', O, H), At(null);
      }
    }
    function Nt(E, R) {
      {
        if (typeof E != "object")
          return;
        if (mt(E))
          for (var O = 0; O < E.length; O++) {
            var H = E[O];
            It(H) && Ot(H, R);
          }
        else if (It(E))
          E._store && (E._store.validated = !0);
        else if (E) {
          var W = p(E);
          if (typeof W == "function" && W !== E.entries)
            for (var K = W.call(E), $; !($ = K.next()).done; )
              It($.value) && Ot($.value, R);
        }
      }
    }
    function qt(E) {
      {
        var R = E.type;
        if (R == null || typeof R == "string")
          return;
        var O;
        if (typeof R == "function")
          O = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === u))
          O = R.propTypes;
        else
          return;
        if (O) {
          var H = I(R);
          nt(O, E.props, "prop", H, E);
        } else if (R.PropTypes !== void 0 && !Mt) {
          Mt = !0;
          var W = I(R);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Xt(E) {
      {
        for (var R = Object.keys(E.props), O = 0; O < R.length; O++) {
          var H = R[O];
          if (H !== "children" && H !== "key") {
            At(E), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", H), At(null);
            break;
          }
        }
        E.ref !== null && (At(E), v("Invalid attribute `ref` supplied to `React.Fragment`."), At(null));
      }
    }
    var Vt = {};
    function zt(E, R, O, H, W, K) {
      {
        var $ = S(E);
        if (!$) {
          var G = "";
          (E === void 0 || typeof E == "object" && E !== null && Object.keys(E).length === 0) && (G += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var ot = Kt();
          ot ? G += ot : G += Lt();
          var tt;
          E === null ? tt = "null" : mt(E) ? tt = "array" : E !== void 0 && E.$$typeof === e ? (tt = "<" + (I(E.type) || "Unknown") + " />", G = " Did you accidentally export a JSX literal instead of a component?") : tt = typeof E, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", tt, G);
        }
        var et = Wt(E, R, O, W, K);
        if (et == null)
          return et;
        if ($) {
          var gt = R.children;
          if (gt !== void 0)
            if (H)
              if (mt(gt)) {
                for (var kt = 0; kt < gt.length; kt++)
                  Nt(gt[kt], E);
                Object.freeze && Object.freeze(gt);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Nt(gt, E);
        }
        if (ut.call(R, "key")) {
          var Tt = I(E), ft = Object.keys(R).filter(function(re) {
            return re !== "key";
          }), Ft = ft.length > 0 ? "{key: someKey, " + ft.join(": ..., ") + ": ...}" : "{key: someKey}";
          if (!Vt[Tt + Ft]) {
            var ie = ft.length > 0 ? "{" + ft.join(": ..., ") + ": ...}" : "{}";
            v(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`, Ft, Tt, ie, Tt), Vt[Tt + Ft] = !0;
          }
        }
        return E === r ? Xt(et) : qt(et), et;
      }
    }
    function Jt(E, R, O) {
      return zt(E, R, O, !0);
    }
    function Qt(E, R, O) {
      return zt(E, R, O, !1);
    }
    var te = Qt, ee = Jt;
    reactJsxRuntime_development.Fragment = r, reactJsxRuntime_development.jsx = te, reactJsxRuntime_development.jsxs = ee;
  }()), reactJsxRuntime_development;
}
process.env.NODE_ENV === "production" ? jsxRuntime.exports = requireReactJsxRuntime_production_min() : jsxRuntime.exports = requireReactJsxRuntime_development();
var jsxRuntimeExports = jsxRuntime.exports;
/*! pako 2.1.0 https://github.com/nodeca/pako @license (MIT AND Zlib) */
const Z_FIXED$1 = 4, Z_BINARY = 0, Z_TEXT = 1, Z_UNKNOWN$1 = 2;
function zero$1(t) {
  let e = t.length;
  for (; --e >= 0; )
    t[e] = 0;
}
const STORED_BLOCK = 0, STATIC_TREES = 1, DYN_TREES = 2, MIN_MATCH$1 = 3, MAX_MATCH$1 = 258, LENGTH_CODES$1 = 29, LITERALS$1 = 256, L_CODES$1 = LITERALS$1 + 1 + LENGTH_CODES$1, D_CODES$1 = 30, BL_CODES$1 = 19, HEAP_SIZE$1 = 2 * L_CODES$1 + 1, MAX_BITS$1 = 15, Buf_size = 16, MAX_BL_BITS = 7, END_BLOCK = 256, REP_3_6 = 16, REPZ_3_10 = 17, REPZ_11_138 = 18, extra_lbits = (
  /* extra bits for each length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0])
), extra_dbits = (
  /* extra bits for each distance code */
  new Uint8Array([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13])
), extra_blbits = (
  /* extra bits for each bit length code */
  new Uint8Array([0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3, 7])
), bl_order = new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]), DIST_CODE_LEN = 512, static_ltree = new Array((L_CODES$1 + 2) * 2);
zero$1(static_ltree);
const static_dtree = new Array(D_CODES$1 * 2);
zero$1(static_dtree);
const _dist_code = new Array(DIST_CODE_LEN);
zero$1(_dist_code);
const _length_code = new Array(MAX_MATCH$1 - MIN_MATCH$1 + 1);
zero$1(_length_code);
const base_length = new Array(LENGTH_CODES$1);
zero$1(base_length);
const base_dist = new Array(D_CODES$1);
zero$1(base_dist);
function StaticTreeDesc(t, e, i, r, a) {
  this.static_tree = t, this.extra_bits = e, this.extra_base = i, this.elems = r, this.max_length = a, this.has_stree = t && t.length;
}
let static_l_desc, static_d_desc, static_bl_desc;
function TreeDesc(t, e) {
  this.dyn_tree = t, this.max_code = 0, this.stat_desc = e;
}
const d_code = (t) => t < 256 ? _dist_code[t] : _dist_code[256 + (t >>> 7)], put_short = (t, e) => {
  t.pending_buf[t.pending++] = e & 255, t.pending_buf[t.pending++] = e >>> 8 & 255;
}, send_bits = (t, e, i) => {
  t.bi_valid > Buf_size - i ? (t.bi_buf |= e << t.bi_valid & 65535, put_short(t, t.bi_buf), t.bi_buf = e >> Buf_size - t.bi_valid, t.bi_valid += i - Buf_size) : (t.bi_buf |= e << t.bi_valid & 65535, t.bi_valid += i);
}, send_code = (t, e, i) => {
  send_bits(
    t,
    i[e * 2],
    i[e * 2 + 1]
    /*.Len*/
  );
}, bi_reverse = (t, e) => {
  let i = 0;
  do
    i |= t & 1, t >>>= 1, i <<= 1;
  while (--e > 0);
  return i >>> 1;
}, bi_flush = (t) => {
  t.bi_valid === 16 ? (put_short(t, t.bi_buf), t.bi_buf = 0, t.bi_valid = 0) : t.bi_valid >= 8 && (t.pending_buf[t.pending++] = t.bi_buf & 255, t.bi_buf >>= 8, t.bi_valid -= 8);
}, gen_bitlen = (t, e) => {
  const i = e.dyn_tree, r = e.max_code, a = e.stat_desc.static_tree, n = e.stat_desc.has_stree, l = e.stat_desc.extra_bits, s = e.stat_desc.extra_base, d = e.stat_desc.max_length;
  let h, o, u, m, f, c, g = 0;
  for (m = 0; m <= MAX_BITS$1; m++)
    t.bl_count[m] = 0;
  for (i[t.heap[t.heap_max] * 2 + 1] = 0, h = t.heap_max + 1; h < HEAP_SIZE$1; h++)
    o = t.heap[h], m = i[i[o * 2 + 1] * 2 + 1] + 1, m > d && (m = d, g++), i[o * 2 + 1] = m, !(o > r) && (t.bl_count[m]++, f = 0, o >= s && (f = l[o - s]), c = i[o * 2], t.opt_len += c * (m + f), n && (t.static_len += c * (a[o * 2 + 1] + f)));
  if (g !== 0) {
    do {
      for (m = d - 1; t.bl_count[m] === 0; )
        m--;
      t.bl_count[m]--, t.bl_count[m + 1] += 2, t.bl_count[d]--, g -= 2;
    } while (g > 0);
    for (m = d; m !== 0; m--)
      for (o = t.bl_count[m]; o !== 0; )
        u = t.heap[--h], !(u > r) && (i[u * 2 + 1] !== m && (t.opt_len += (m - i[u * 2 + 1]) * i[u * 2], i[u * 2 + 1] = m), o--);
  }
}, gen_codes = (t, e, i) => {
  const r = new Array(MAX_BITS$1 + 1);
  let a = 0, n, l;
  for (n = 1; n <= MAX_BITS$1; n++)
    a = a + i[n - 1] << 1, r[n] = a;
  for (l = 0; l <= e; l++) {
    let s = t[l * 2 + 1];
    s !== 0 && (t[l * 2] = bi_reverse(r[s]++, s));
  }
}, tr_static_init = () => {
  let t, e, i, r, a;
  const n = new Array(MAX_BITS$1 + 1);
  for (i = 0, r = 0; r < LENGTH_CODES$1 - 1; r++)
    for (base_length[r] = i, t = 0; t < 1 << extra_lbits[r]; t++)
      _length_code[i++] = r;
  for (_length_code[i - 1] = r, a = 0, r = 0; r < 16; r++)
    for (base_dist[r] = a, t = 0; t < 1 << extra_dbits[r]; t++)
      _dist_code[a++] = r;
  for (a >>= 7; r < D_CODES$1; r++)
    for (base_dist[r] = a << 7, t = 0; t < 1 << extra_dbits[r] - 7; t++)
      _dist_code[256 + a++] = r;
  for (e = 0; e <= MAX_BITS$1; e++)
    n[e] = 0;
  for (t = 0; t <= 143; )
    static_ltree[t * 2 + 1] = 8, t++, n[8]++;
  for (; t <= 255; )
    static_ltree[t * 2 + 1] = 9, t++, n[9]++;
  for (; t <= 279; )
    static_ltree[t * 2 + 1] = 7, t++, n[7]++;
  for (; t <= 287; )
    static_ltree[t * 2 + 1] = 8, t++, n[8]++;
  for (gen_codes(static_ltree, L_CODES$1 + 1, n), t = 0; t < D_CODES$1; t++)
    static_dtree[t * 2 + 1] = 5, static_dtree[t * 2] = bi_reverse(t, 5);
  static_l_desc = new StaticTreeDesc(static_ltree, extra_lbits, LITERALS$1 + 1, L_CODES$1, MAX_BITS$1), static_d_desc = new StaticTreeDesc(static_dtree, extra_dbits, 0, D_CODES$1, MAX_BITS$1), static_bl_desc = new StaticTreeDesc(new Array(0), extra_blbits, 0, BL_CODES$1, MAX_BL_BITS);
}, init_block = (t) => {
  let e;
  for (e = 0; e < L_CODES$1; e++)
    t.dyn_ltree[e * 2] = 0;
  for (e = 0; e < D_CODES$1; e++)
    t.dyn_dtree[e * 2] = 0;
  for (e = 0; e < BL_CODES$1; e++)
    t.bl_tree[e * 2] = 0;
  t.dyn_ltree[END_BLOCK * 2] = 1, t.opt_len = t.static_len = 0, t.sym_next = t.matches = 0;
}, bi_windup = (t) => {
  t.bi_valid > 8 ? put_short(t, t.bi_buf) : t.bi_valid > 0 && (t.pending_buf[t.pending++] = t.bi_buf), t.bi_buf = 0, t.bi_valid = 0;
}, smaller = (t, e, i, r) => {
  const a = e * 2, n = i * 2;
  return t[a] < t[n] || t[a] === t[n] && r[e] <= r[i];
}, pqdownheap = (t, e, i) => {
  const r = t.heap[i];
  let a = i << 1;
  for (; a <= t.heap_len && (a < t.heap_len && smaller(e, t.heap[a + 1], t.heap[a], t.depth) && a++, !smaller(e, r, t.heap[a], t.depth)); )
    t.heap[i] = t.heap[a], i = a, a <<= 1;
  t.heap[i] = r;
}, compress_block = (t, e, i) => {
  let r, a, n = 0, l, s;
  if (t.sym_next !== 0)
    do
      r = t.pending_buf[t.sym_buf + n++] & 255, r += (t.pending_buf[t.sym_buf + n++] & 255) << 8, a = t.pending_buf[t.sym_buf + n++], r === 0 ? send_code(t, a, e) : (l = _length_code[a], send_code(t, l + LITERALS$1 + 1, e), s = extra_lbits[l], s !== 0 && (a -= base_length[l], send_bits(t, a, s)), r--, l = d_code(r), send_code(t, l, i), s = extra_dbits[l], s !== 0 && (r -= base_dist[l], send_bits(t, r, s)));
    while (n < t.sym_next);
  send_code(t, END_BLOCK, e);
}, build_tree = (t, e) => {
  const i = e.dyn_tree, r = e.stat_desc.static_tree, a = e.stat_desc.has_stree, n = e.stat_desc.elems;
  let l, s, d = -1, h;
  for (t.heap_len = 0, t.heap_max = HEAP_SIZE$1, l = 0; l < n; l++)
    i[l * 2] !== 0 ? (t.heap[++t.heap_len] = d = l, t.depth[l] = 0) : i[l * 2 + 1] = 0;
  for (; t.heap_len < 2; )
    h = t.heap[++t.heap_len] = d < 2 ? ++d : 0, i[h * 2] = 1, t.depth[h] = 0, t.opt_len--, a && (t.static_len -= r[h * 2 + 1]);
  for (e.max_code = d, l = t.heap_len >> 1; l >= 1; l--)
    pqdownheap(t, i, l);
  h = n;
  do
    l = t.heap[
      1
      /*SMALLEST*/
    ], t.heap[
      1
      /*SMALLEST*/
    ] = t.heap[t.heap_len--], pqdownheap(
      t,
      i,
      1
      /*SMALLEST*/
    ), s = t.heap[
      1
      /*SMALLEST*/
    ], t.heap[--t.heap_max] = l, t.heap[--t.heap_max] = s, i[h * 2] = i[l * 2] + i[s * 2], t.depth[h] = (t.depth[l] >= t.depth[s] ? t.depth[l] : t.depth[s]) + 1, i[l * 2 + 1] = i[s * 2 + 1] = h, t.heap[
      1
      /*SMALLEST*/
    ] = h++, pqdownheap(
      t,
      i,
      1
      /*SMALLEST*/
    );
  while (t.heap_len >= 2);
  t.heap[--t.heap_max] = t.heap[
    1
    /*SMALLEST*/
  ], gen_bitlen(t, e), gen_codes(i, d, t.bl_count);
}, scan_tree = (t, e, i) => {
  let r, a = -1, n, l = e[0 * 2 + 1], s = 0, d = 7, h = 4;
  for (l === 0 && (d = 138, h = 3), e[(i + 1) * 2 + 1] = 65535, r = 0; r <= i; r++)
    n = l, l = e[(r + 1) * 2 + 1], !(++s < d && n === l) && (s < h ? t.bl_tree[n * 2] += s : n !== 0 ? (n !== a && t.bl_tree[n * 2]++, t.bl_tree[REP_3_6 * 2]++) : s <= 10 ? t.bl_tree[REPZ_3_10 * 2]++ : t.bl_tree[REPZ_11_138 * 2]++, s = 0, a = n, l === 0 ? (d = 138, h = 3) : n === l ? (d = 6, h = 3) : (d = 7, h = 4));
}, send_tree = (t, e, i) => {
  let r, a = -1, n, l = e[0 * 2 + 1], s = 0, d = 7, h = 4;
  for (l === 0 && (d = 138, h = 3), r = 0; r <= i; r++)
    if (n = l, l = e[(r + 1) * 2 + 1], !(++s < d && n === l)) {
      if (s < h)
        do
          send_code(t, n, t.bl_tree);
        while (--s !== 0);
      else n !== 0 ? (n !== a && (send_code(t, n, t.bl_tree), s--), send_code(t, REP_3_6, t.bl_tree), send_bits(t, s - 3, 2)) : s <= 10 ? (send_code(t, REPZ_3_10, t.bl_tree), send_bits(t, s - 3, 3)) : (send_code(t, REPZ_11_138, t.bl_tree), send_bits(t, s - 11, 7));
      s = 0, a = n, l === 0 ? (d = 138, h = 3) : n === l ? (d = 6, h = 3) : (d = 7, h = 4);
    }
}, build_bl_tree = (t) => {
  let e;
  for (scan_tree(t, t.dyn_ltree, t.l_desc.max_code), scan_tree(t, t.dyn_dtree, t.d_desc.max_code), build_tree(t, t.bl_desc), e = BL_CODES$1 - 1; e >= 3 && t.bl_tree[bl_order[e] * 2 + 1] === 0; e--)
    ;
  return t.opt_len += 3 * (e + 1) + 5 + 5 + 4, e;
}, send_all_trees = (t, e, i, r) => {
  let a;
  for (send_bits(t, e - 257, 5), send_bits(t, i - 1, 5), send_bits(t, r - 4, 4), a = 0; a < r; a++)
    send_bits(t, t.bl_tree[bl_order[a] * 2 + 1], 3);
  send_tree(t, t.dyn_ltree, e - 1), send_tree(t, t.dyn_dtree, i - 1);
}, detect_data_type = (t) => {
  let e = 4093624447, i;
  for (i = 0; i <= 31; i++, e >>>= 1)
    if (e & 1 && t.dyn_ltree[i * 2] !== 0)
      return Z_BINARY;
  if (t.dyn_ltree[9 * 2] !== 0 || t.dyn_ltree[10 * 2] !== 0 || t.dyn_ltree[13 * 2] !== 0)
    return Z_TEXT;
  for (i = 32; i < LITERALS$1; i++)
    if (t.dyn_ltree[i * 2] !== 0)
      return Z_TEXT;
  return Z_BINARY;
};
let static_init_done = !1;
const _tr_init$1 = (t) => {
  static_init_done || (tr_static_init(), static_init_done = !0), t.l_desc = new TreeDesc(t.dyn_ltree, static_l_desc), t.d_desc = new TreeDesc(t.dyn_dtree, static_d_desc), t.bl_desc = new TreeDesc(t.bl_tree, static_bl_desc), t.bi_buf = 0, t.bi_valid = 0, init_block(t);
}, _tr_stored_block$1 = (t, e, i, r) => {
  send_bits(t, (STORED_BLOCK << 1) + (r ? 1 : 0), 3), bi_windup(t), put_short(t, i), put_short(t, ~i), i && t.pending_buf.set(t.window.subarray(e, e + i), t.pending), t.pending += i;
}, _tr_align$1 = (t) => {
  send_bits(t, STATIC_TREES << 1, 3), send_code(t, END_BLOCK, static_ltree), bi_flush(t);
}, _tr_flush_block$1 = (t, e, i, r) => {
  let a, n, l = 0;
  t.level > 0 ? (t.strm.data_type === Z_UNKNOWN$1 && (t.strm.data_type = detect_data_type(t)), build_tree(t, t.l_desc), build_tree(t, t.d_desc), l = build_bl_tree(t), a = t.opt_len + 3 + 7 >>> 3, n = t.static_len + 3 + 7 >>> 3, n <= a && (a = n)) : a = n = i + 5, i + 4 <= a && e !== -1 ? _tr_stored_block$1(t, e, i, r) : t.strategy === Z_FIXED$1 || n === a ? (send_bits(t, (STATIC_TREES << 1) + (r ? 1 : 0), 3), compress_block(t, static_ltree, static_dtree)) : (send_bits(t, (DYN_TREES << 1) + (r ? 1 : 0), 3), send_all_trees(t, t.l_desc.max_code + 1, t.d_desc.max_code + 1, l + 1), compress_block(t, t.dyn_ltree, t.dyn_dtree)), init_block(t), r && bi_windup(t);
}, _tr_tally$1 = (t, e, i) => (t.pending_buf[t.sym_buf + t.sym_next++] = e, t.pending_buf[t.sym_buf + t.sym_next++] = e >> 8, t.pending_buf[t.sym_buf + t.sym_next++] = i, e === 0 ? t.dyn_ltree[i * 2]++ : (t.matches++, e--, t.dyn_ltree[(_length_code[i] + LITERALS$1 + 1) * 2]++, t.dyn_dtree[d_code(e) * 2]++), t.sym_next === t.sym_end);
var _tr_init_1 = _tr_init$1, _tr_stored_block_1 = _tr_stored_block$1, _tr_flush_block_1 = _tr_flush_block$1, _tr_tally_1 = _tr_tally$1, _tr_align_1 = _tr_align$1, trees = {
  _tr_init: _tr_init_1,
  _tr_stored_block: _tr_stored_block_1,
  _tr_flush_block: _tr_flush_block_1,
  _tr_tally: _tr_tally_1,
  _tr_align: _tr_align_1
};
const adler32 = (t, e, i, r) => {
  let a = t & 65535 | 0, n = t >>> 16 & 65535 | 0, l = 0;
  for (; i !== 0; ) {
    l = i > 2e3 ? 2e3 : i, i -= l;
    do
      a = a + e[r++] | 0, n = n + a | 0;
    while (--l);
    a %= 65521, n %= 65521;
  }
  return a | n << 16 | 0;
};
var adler32_1 = adler32;
const makeTable = () => {
  let t, e = [];
  for (var i = 0; i < 256; i++) {
    t = i;
    for (var r = 0; r < 8; r++)
      t = t & 1 ? 3988292384 ^ t >>> 1 : t >>> 1;
    e[i] = t;
  }
  return e;
}, crcTable = new Uint32Array(makeTable()), crc32 = (t, e, i, r) => {
  const a = crcTable, n = r + i;
  t ^= -1;
  for (let l = r; l < n; l++)
    t = t >>> 8 ^ a[(t ^ e[l]) & 255];
  return t ^ -1;
};
var crc32_1 = crc32, messages = {
  2: "need dictionary",
  /* Z_NEED_DICT       2  */
  1: "stream end",
  /* Z_STREAM_END      1  */
  0: "",
  /* Z_OK              0  */
  "-1": "file error",
  /* Z_ERRNO         (-1) */
  "-2": "stream error",
  /* Z_STREAM_ERROR  (-2) */
  "-3": "data error",
  /* Z_DATA_ERROR    (-3) */
  "-4": "insufficient memory",
  /* Z_MEM_ERROR     (-4) */
  "-5": "buffer error",
  /* Z_BUF_ERROR     (-5) */
  "-6": "incompatible version"
  /* Z_VERSION_ERROR (-6) */
}, constants$2 = {
  /* Allowed flush values; see deflate() and inflate() below for details */
  Z_NO_FLUSH: 0,
  Z_PARTIAL_FLUSH: 1,
  Z_SYNC_FLUSH: 2,
  Z_FULL_FLUSH: 3,
  Z_FINISH: 4,
  Z_BLOCK: 5,
  Z_TREES: 6,
  /* Return codes for the compression/decompression functions. Negative values
  * are errors, positive values are used for special but normal events.
  */
  Z_OK: 0,
  Z_STREAM_END: 1,
  Z_NEED_DICT: 2,
  Z_ERRNO: -1,
  Z_STREAM_ERROR: -2,
  Z_DATA_ERROR: -3,
  Z_MEM_ERROR: -4,
  Z_BUF_ERROR: -5,
  //Z_VERSION_ERROR: -6,
  /* compression levels */
  Z_NO_COMPRESSION: 0,
  Z_BEST_SPEED: 1,
  Z_BEST_COMPRESSION: 9,
  Z_DEFAULT_COMPRESSION: -1,
  Z_FILTERED: 1,
  Z_HUFFMAN_ONLY: 2,
  Z_RLE: 3,
  Z_FIXED: 4,
  Z_DEFAULT_STRATEGY: 0,
  /* Possible values of the data_type field (though see inflate()) */
  Z_BINARY: 0,
  Z_TEXT: 1,
  //Z_ASCII:                1, // = Z_TEXT (deprecated)
  Z_UNKNOWN: 2,
  /* The deflate compression method */
  Z_DEFLATED: 8
  //Z_NULL:                 null // Use -1 or null inline, depending on var type
};
const { _tr_init, _tr_stored_block, _tr_flush_block, _tr_tally, _tr_align } = trees, {
  Z_NO_FLUSH: Z_NO_FLUSH$2,
  Z_PARTIAL_FLUSH,
  Z_FULL_FLUSH: Z_FULL_FLUSH$1,
  Z_FINISH: Z_FINISH$3,
  Z_BLOCK: Z_BLOCK$1,
  Z_OK: Z_OK$3,
  Z_STREAM_END: Z_STREAM_END$3,
  Z_STREAM_ERROR: Z_STREAM_ERROR$2,
  Z_DATA_ERROR: Z_DATA_ERROR$2,
  Z_BUF_ERROR: Z_BUF_ERROR$1,
  Z_DEFAULT_COMPRESSION: Z_DEFAULT_COMPRESSION$1,
  Z_FILTERED,
  Z_HUFFMAN_ONLY,
  Z_RLE,
  Z_FIXED,
  Z_DEFAULT_STRATEGY: Z_DEFAULT_STRATEGY$1,
  Z_UNKNOWN,
  Z_DEFLATED: Z_DEFLATED$2
} = constants$2, MAX_MEM_LEVEL = 9, MAX_WBITS$1 = 15, DEF_MEM_LEVEL = 8, LENGTH_CODES = 29, LITERALS = 256, L_CODES = LITERALS + 1 + LENGTH_CODES, D_CODES = 30, BL_CODES = 19, HEAP_SIZE = 2 * L_CODES + 1, MAX_BITS = 15, MIN_MATCH = 3, MAX_MATCH = 258, MIN_LOOKAHEAD = MAX_MATCH + MIN_MATCH + 1, PRESET_DICT = 32, INIT_STATE = 42, GZIP_STATE = 57, EXTRA_STATE = 69, NAME_STATE = 73, COMMENT_STATE = 91, HCRC_STATE = 103, BUSY_STATE = 113, FINISH_STATE = 666, BS_NEED_MORE = 1, BS_BLOCK_DONE = 2, BS_FINISH_STARTED = 3, BS_FINISH_DONE = 4, OS_CODE = 3, err = (t, e) => (t.msg = messages[e], e), rank = (t) => t * 2 - (t > 4 ? 9 : 0), zero = (t) => {
  let e = t.length;
  for (; --e >= 0; )
    t[e] = 0;
}, slide_hash = (t) => {
  let e, i, r, a = t.w_size;
  e = t.hash_size, r = e;
  do
    i = t.head[--r], t.head[r] = i >= a ? i - a : 0;
  while (--e);
  e = a, r = e;
  do
    i = t.prev[--r], t.prev[r] = i >= a ? i - a : 0;
  while (--e);
};
let HASH_ZLIB = (t, e, i) => (e << t.hash_shift ^ i) & t.hash_mask, HASH = HASH_ZLIB;
const flush_pending = (t) => {
  const e = t.state;
  let i = e.pending;
  i > t.avail_out && (i = t.avail_out), i !== 0 && (t.output.set(e.pending_buf.subarray(e.pending_out, e.pending_out + i), t.next_out), t.next_out += i, e.pending_out += i, t.total_out += i, t.avail_out -= i, e.pending -= i, e.pending === 0 && (e.pending_out = 0));
}, flush_block_only = (t, e) => {
  _tr_flush_block(t, t.block_start >= 0 ? t.block_start : -1, t.strstart - t.block_start, e), t.block_start = t.strstart, flush_pending(t.strm);
}, put_byte = (t, e) => {
  t.pending_buf[t.pending++] = e;
}, putShortMSB = (t, e) => {
  t.pending_buf[t.pending++] = e >>> 8 & 255, t.pending_buf[t.pending++] = e & 255;
}, read_buf = (t, e, i, r) => {
  let a = t.avail_in;
  return a > r && (a = r), a === 0 ? 0 : (t.avail_in -= a, e.set(t.input.subarray(t.next_in, t.next_in + a), i), t.state.wrap === 1 ? t.adler = adler32_1(t.adler, e, a, i) : t.state.wrap === 2 && (t.adler = crc32_1(t.adler, e, a, i)), t.next_in += a, t.total_in += a, a);
}, longest_match = (t, e) => {
  let i = t.max_chain_length, r = t.strstart, a, n, l = t.prev_length, s = t.nice_match;
  const d = t.strstart > t.w_size - MIN_LOOKAHEAD ? t.strstart - (t.w_size - MIN_LOOKAHEAD) : 0, h = t.window, o = t.w_mask, u = t.prev, m = t.strstart + MAX_MATCH;
  let f = h[r + l - 1], c = h[r + l];
  t.prev_length >= t.good_match && (i >>= 2), s > t.lookahead && (s = t.lookahead);
  do
    if (a = e, !(h[a + l] !== c || h[a + l - 1] !== f || h[a] !== h[r] || h[++a] !== h[r + 1])) {
      r += 2, a++;
      do
        ;
      while (h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && h[++r] === h[++a] && r < m);
      if (n = MAX_MATCH - (m - r), r = m - MAX_MATCH, n > l) {
        if (t.match_start = e, l = n, n >= s)
          break;
        f = h[r + l - 1], c = h[r + l];
      }
    }
  while ((e = u[e & o]) > d && --i !== 0);
  return l <= t.lookahead ? l : t.lookahead;
}, fill_window = (t) => {
  const e = t.w_size;
  let i, r, a;
  do {
    if (r = t.window_size - t.lookahead - t.strstart, t.strstart >= e + (e - MIN_LOOKAHEAD) && (t.window.set(t.window.subarray(e, e + e - r), 0), t.match_start -= e, t.strstart -= e, t.block_start -= e, t.insert > t.strstart && (t.insert = t.strstart), slide_hash(t), r += e), t.strm.avail_in === 0)
      break;
    if (i = read_buf(t.strm, t.window, t.strstart + t.lookahead, r), t.lookahead += i, t.lookahead + t.insert >= MIN_MATCH)
      for (a = t.strstart - t.insert, t.ins_h = t.window[a], t.ins_h = HASH(t, t.ins_h, t.window[a + 1]); t.insert && (t.ins_h = HASH(t, t.ins_h, t.window[a + MIN_MATCH - 1]), t.prev[a & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = a, a++, t.insert--, !(t.lookahead + t.insert < MIN_MATCH)); )
        ;
  } while (t.lookahead < MIN_LOOKAHEAD && t.strm.avail_in !== 0);
}, deflate_stored = (t, e) => {
  let i = t.pending_buf_size - 5 > t.w_size ? t.w_size : t.pending_buf_size - 5, r, a, n, l = 0, s = t.strm.avail_in;
  do {
    if (r = 65535, n = t.bi_valid + 42 >> 3, t.strm.avail_out < n || (n = t.strm.avail_out - n, a = t.strstart - t.block_start, r > a + t.strm.avail_in && (r = a + t.strm.avail_in), r > n && (r = n), r < i && (r === 0 && e !== Z_FINISH$3 || e === Z_NO_FLUSH$2 || r !== a + t.strm.avail_in)))
      break;
    l = e === Z_FINISH$3 && r === a + t.strm.avail_in ? 1 : 0, _tr_stored_block(t, 0, 0, l), t.pending_buf[t.pending - 4] = r, t.pending_buf[t.pending - 3] = r >> 8, t.pending_buf[t.pending - 2] = ~r, t.pending_buf[t.pending - 1] = ~r >> 8, flush_pending(t.strm), a && (a > r && (a = r), t.strm.output.set(t.window.subarray(t.block_start, t.block_start + a), t.strm.next_out), t.strm.next_out += a, t.strm.avail_out -= a, t.strm.total_out += a, t.block_start += a, r -= a), r && (read_buf(t.strm, t.strm.output, t.strm.next_out, r), t.strm.next_out += r, t.strm.avail_out -= r, t.strm.total_out += r);
  } while (l === 0);
  return s -= t.strm.avail_in, s && (s >= t.w_size ? (t.matches = 2, t.window.set(t.strm.input.subarray(t.strm.next_in - t.w_size, t.strm.next_in), 0), t.strstart = t.w_size, t.insert = t.strstart) : (t.window_size - t.strstart <= s && (t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, t.insert > t.strstart && (t.insert = t.strstart)), t.window.set(t.strm.input.subarray(t.strm.next_in - s, t.strm.next_in), t.strstart), t.strstart += s, t.insert += s > t.w_size - t.insert ? t.w_size - t.insert : s), t.block_start = t.strstart), t.high_water < t.strstart && (t.high_water = t.strstart), l ? BS_FINISH_DONE : e !== Z_NO_FLUSH$2 && e !== Z_FINISH$3 && t.strm.avail_in === 0 && t.strstart === t.block_start ? BS_BLOCK_DONE : (n = t.window_size - t.strstart, t.strm.avail_in > n && t.block_start >= t.w_size && (t.block_start -= t.w_size, t.strstart -= t.w_size, t.window.set(t.window.subarray(t.w_size, t.w_size + t.strstart), 0), t.matches < 2 && t.matches++, n += t.w_size, t.insert > t.strstart && (t.insert = t.strstart)), n > t.strm.avail_in && (n = t.strm.avail_in), n && (read_buf(t.strm, t.window, t.strstart, n), t.strstart += n, t.insert += n > t.w_size - t.insert ? t.w_size - t.insert : n), t.high_water < t.strstart && (t.high_water = t.strstart), n = t.bi_valid + 42 >> 3, n = t.pending_buf_size - n > 65535 ? 65535 : t.pending_buf_size - n, i = n > t.w_size ? t.w_size : n, a = t.strstart - t.block_start, (a >= i || (a || e === Z_FINISH$3) && e !== Z_NO_FLUSH$2 && t.strm.avail_in === 0 && a <= n) && (r = a > n ? n : a, l = e === Z_FINISH$3 && t.strm.avail_in === 0 && r === a ? 1 : 0, _tr_stored_block(t, t.block_start, r, l), t.block_start += r, flush_pending(t.strm)), l ? BS_FINISH_STARTED : BS_NEED_MORE);
}, deflate_fast = (t, e) => {
  let i, r;
  for (; ; ) {
    if (t.lookahead < MIN_LOOKAHEAD) {
      if (fill_window(t), t.lookahead < MIN_LOOKAHEAD && e === Z_NO_FLUSH$2)
        return BS_NEED_MORE;
      if (t.lookahead === 0)
        break;
    }
    if (i = 0, t.lookahead >= MIN_MATCH && (t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), i !== 0 && t.strstart - i <= t.w_size - MIN_LOOKAHEAD && (t.match_length = longest_match(t, i)), t.match_length >= MIN_MATCH)
      if (r = _tr_tally(t, t.strstart - t.match_start, t.match_length - MIN_MATCH), t.lookahead -= t.match_length, t.match_length <= t.max_lazy_match && t.lookahead >= MIN_MATCH) {
        t.match_length--;
        do
          t.strstart++, t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart;
        while (--t.match_length !== 0);
        t.strstart++;
      } else
        t.strstart += t.match_length, t.match_length = 0, t.ins_h = t.window[t.strstart], t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + 1]);
    else
      r = _tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++;
    if (r && (flush_block_only(t, !1), t.strm.avail_out === 0))
      return BS_NEED_MORE;
  }
  return t.insert = t.strstart < MIN_MATCH - 1 ? t.strstart : MIN_MATCH - 1, e === Z_FINISH$3 ? (flush_block_only(t, !0), t.strm.avail_out === 0 ? BS_FINISH_STARTED : BS_FINISH_DONE) : t.sym_next && (flush_block_only(t, !1), t.strm.avail_out === 0) ? BS_NEED_MORE : BS_BLOCK_DONE;
}, deflate_slow = (t, e) => {
  let i, r, a;
  for (; ; ) {
    if (t.lookahead < MIN_LOOKAHEAD) {
      if (fill_window(t), t.lookahead < MIN_LOOKAHEAD && e === Z_NO_FLUSH$2)
        return BS_NEED_MORE;
      if (t.lookahead === 0)
        break;
    }
    if (i = 0, t.lookahead >= MIN_MATCH && (t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart), t.prev_length = t.match_length, t.prev_match = t.match_start, t.match_length = MIN_MATCH - 1, i !== 0 && t.prev_length < t.max_lazy_match && t.strstart - i <= t.w_size - MIN_LOOKAHEAD && (t.match_length = longest_match(t, i), t.match_length <= 5 && (t.strategy === Z_FILTERED || t.match_length === MIN_MATCH && t.strstart - t.match_start > 4096) && (t.match_length = MIN_MATCH - 1)), t.prev_length >= MIN_MATCH && t.match_length <= t.prev_length) {
      a = t.strstart + t.lookahead - MIN_MATCH, r = _tr_tally(t, t.strstart - 1 - t.prev_match, t.prev_length - MIN_MATCH), t.lookahead -= t.prev_length - 1, t.prev_length -= 2;
      do
        ++t.strstart <= a && (t.ins_h = HASH(t, t.ins_h, t.window[t.strstart + MIN_MATCH - 1]), i = t.prev[t.strstart & t.w_mask] = t.head[t.ins_h], t.head[t.ins_h] = t.strstart);
      while (--t.prev_length !== 0);
      if (t.match_available = 0, t.match_length = MIN_MATCH - 1, t.strstart++, r && (flush_block_only(t, !1), t.strm.avail_out === 0))
        return BS_NEED_MORE;
    } else if (t.match_available) {
      if (r = _tr_tally(t, 0, t.window[t.strstart - 1]), r && flush_block_only(t, !1), t.strstart++, t.lookahead--, t.strm.avail_out === 0)
        return BS_NEED_MORE;
    } else
      t.match_available = 1, t.strstart++, t.lookahead--;
  }
  return t.match_available && (r = _tr_tally(t, 0, t.window[t.strstart - 1]), t.match_available = 0), t.insert = t.strstart < MIN_MATCH - 1 ? t.strstart : MIN_MATCH - 1, e === Z_FINISH$3 ? (flush_block_only(t, !0), t.strm.avail_out === 0 ? BS_FINISH_STARTED : BS_FINISH_DONE) : t.sym_next && (flush_block_only(t, !1), t.strm.avail_out === 0) ? BS_NEED_MORE : BS_BLOCK_DONE;
}, deflate_rle = (t, e) => {
  let i, r, a, n;
  const l = t.window;
  for (; ; ) {
    if (t.lookahead <= MAX_MATCH) {
      if (fill_window(t), t.lookahead <= MAX_MATCH && e === Z_NO_FLUSH$2)
        return BS_NEED_MORE;
      if (t.lookahead === 0)
        break;
    }
    if (t.match_length = 0, t.lookahead >= MIN_MATCH && t.strstart > 0 && (a = t.strstart - 1, r = l[a], r === l[++a] && r === l[++a] && r === l[++a])) {
      n = t.strstart + MAX_MATCH;
      do
        ;
      while (r === l[++a] && r === l[++a] && r === l[++a] && r === l[++a] && r === l[++a] && r === l[++a] && r === l[++a] && r === l[++a] && a < n);
      t.match_length = MAX_MATCH - (n - a), t.match_length > t.lookahead && (t.match_length = t.lookahead);
    }
    if (t.match_length >= MIN_MATCH ? (i = _tr_tally(t, 1, t.match_length - MIN_MATCH), t.lookahead -= t.match_length, t.strstart += t.match_length, t.match_length = 0) : (i = _tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++), i && (flush_block_only(t, !1), t.strm.avail_out === 0))
      return BS_NEED_MORE;
  }
  return t.insert = 0, e === Z_FINISH$3 ? (flush_block_only(t, !0), t.strm.avail_out === 0 ? BS_FINISH_STARTED : BS_FINISH_DONE) : t.sym_next && (flush_block_only(t, !1), t.strm.avail_out === 0) ? BS_NEED_MORE : BS_BLOCK_DONE;
}, deflate_huff = (t, e) => {
  let i;
  for (; ; ) {
    if (t.lookahead === 0 && (fill_window(t), t.lookahead === 0)) {
      if (e === Z_NO_FLUSH$2)
        return BS_NEED_MORE;
      break;
    }
    if (t.match_length = 0, i = _tr_tally(t, 0, t.window[t.strstart]), t.lookahead--, t.strstart++, i && (flush_block_only(t, !1), t.strm.avail_out === 0))
      return BS_NEED_MORE;
  }
  return t.insert = 0, e === Z_FINISH$3 ? (flush_block_only(t, !0), t.strm.avail_out === 0 ? BS_FINISH_STARTED : BS_FINISH_DONE) : t.sym_next && (flush_block_only(t, !1), t.strm.avail_out === 0) ? BS_NEED_MORE : BS_BLOCK_DONE;
};
function Config(t, e, i, r, a) {
  this.good_length = t, this.max_lazy = e, this.nice_length = i, this.max_chain = r, this.func = a;
}
const configuration_table = [
  /*      good lazy nice chain */
  new Config(0, 0, 0, 0, deflate_stored),
  /* 0 store only */
  new Config(4, 4, 8, 4, deflate_fast),
  /* 1 max speed, no lazy matches */
  new Config(4, 5, 16, 8, deflate_fast),
  /* 2 */
  new Config(4, 6, 32, 32, deflate_fast),
  /* 3 */
  new Config(4, 4, 16, 16, deflate_slow),
  /* 4 lazy matches */
  new Config(8, 16, 32, 32, deflate_slow),
  /* 5 */
  new Config(8, 16, 128, 128, deflate_slow),
  /* 6 */
  new Config(8, 32, 128, 256, deflate_slow),
  /* 7 */
  new Config(32, 128, 258, 1024, deflate_slow),
  /* 8 */
  new Config(32, 258, 258, 4096, deflate_slow)
  /* 9 max compression */
], lm_init = (t) => {
  t.window_size = 2 * t.w_size, zero(t.head), t.max_lazy_match = configuration_table[t.level].max_lazy, t.good_match = configuration_table[t.level].good_length, t.nice_match = configuration_table[t.level].nice_length, t.max_chain_length = configuration_table[t.level].max_chain, t.strstart = 0, t.block_start = 0, t.lookahead = 0, t.insert = 0, t.match_length = t.prev_length = MIN_MATCH - 1, t.match_available = 0, t.ins_h = 0;
};
function DeflateState() {
  this.strm = null, this.status = 0, this.pending_buf = null, this.pending_buf_size = 0, this.pending_out = 0, this.pending = 0, this.wrap = 0, this.gzhead = null, this.gzindex = 0, this.method = Z_DEFLATED$2, this.last_flush = -1, this.w_size = 0, this.w_bits = 0, this.w_mask = 0, this.window = null, this.window_size = 0, this.prev = null, this.head = null, this.ins_h = 0, this.hash_size = 0, this.hash_bits = 0, this.hash_mask = 0, this.hash_shift = 0, this.block_start = 0, this.match_length = 0, this.prev_match = 0, this.match_available = 0, this.strstart = 0, this.match_start = 0, this.lookahead = 0, this.prev_length = 0, this.max_chain_length = 0, this.max_lazy_match = 0, this.level = 0, this.strategy = 0, this.good_match = 0, this.nice_match = 0, this.dyn_ltree = new Uint16Array(HEAP_SIZE * 2), this.dyn_dtree = new Uint16Array((2 * D_CODES + 1) * 2), this.bl_tree = new Uint16Array((2 * BL_CODES + 1) * 2), zero(this.dyn_ltree), zero(this.dyn_dtree), zero(this.bl_tree), this.l_desc = null, this.d_desc = null, this.bl_desc = null, this.bl_count = new Uint16Array(MAX_BITS + 1), this.heap = new Uint16Array(2 * L_CODES + 1), zero(this.heap), this.heap_len = 0, this.heap_max = 0, this.depth = new Uint16Array(2 * L_CODES + 1), zero(this.depth), this.sym_buf = 0, this.lit_bufsize = 0, this.sym_next = 0, this.sym_end = 0, this.opt_len = 0, this.static_len = 0, this.matches = 0, this.insert = 0, this.bi_buf = 0, this.bi_valid = 0;
}
const deflateStateCheck = (t) => {
  if (!t)
    return 1;
  const e = t.state;
  return !e || e.strm !== t || e.status !== INIT_STATE && //#ifdef GZIP
  e.status !== GZIP_STATE && //#endif
  e.status !== EXTRA_STATE && e.status !== NAME_STATE && e.status !== COMMENT_STATE && e.status !== HCRC_STATE && e.status !== BUSY_STATE && e.status !== FINISH_STATE ? 1 : 0;
}, deflateResetKeep = (t) => {
  if (deflateStateCheck(t))
    return err(t, Z_STREAM_ERROR$2);
  t.total_in = t.total_out = 0, t.data_type = Z_UNKNOWN;
  const e = t.state;
  return e.pending = 0, e.pending_out = 0, e.wrap < 0 && (e.wrap = -e.wrap), e.status = //#ifdef GZIP
  e.wrap === 2 ? GZIP_STATE : (
    //#endif
    e.wrap ? INIT_STATE : BUSY_STATE
  ), t.adler = e.wrap === 2 ? 0 : 1, e.last_flush = -2, _tr_init(e), Z_OK$3;
}, deflateReset = (t) => {
  const e = deflateResetKeep(t);
  return e === Z_OK$3 && lm_init(t.state), e;
}, deflateSetHeader = (t, e) => deflateStateCheck(t) || t.state.wrap !== 2 ? Z_STREAM_ERROR$2 : (t.state.gzhead = e, Z_OK$3), deflateInit2 = (t, e, i, r, a, n) => {
  if (!t)
    return Z_STREAM_ERROR$2;
  let l = 1;
  if (e === Z_DEFAULT_COMPRESSION$1 && (e = 6), r < 0 ? (l = 0, r = -r) : r > 15 && (l = 2, r -= 16), a < 1 || a > MAX_MEM_LEVEL || i !== Z_DEFLATED$2 || r < 8 || r > 15 || e < 0 || e > 9 || n < 0 || n > Z_FIXED || r === 8 && l !== 1)
    return err(t, Z_STREAM_ERROR$2);
  r === 8 && (r = 9);
  const s = new DeflateState();
  return t.state = s, s.strm = t, s.status = INIT_STATE, s.wrap = l, s.gzhead = null, s.w_bits = r, s.w_size = 1 << s.w_bits, s.w_mask = s.w_size - 1, s.hash_bits = a + 7, s.hash_size = 1 << s.hash_bits, s.hash_mask = s.hash_size - 1, s.hash_shift = ~~((s.hash_bits + MIN_MATCH - 1) / MIN_MATCH), s.window = new Uint8Array(s.w_size * 2), s.head = new Uint16Array(s.hash_size), s.prev = new Uint16Array(s.w_size), s.lit_bufsize = 1 << a + 6, s.pending_buf_size = s.lit_bufsize * 4, s.pending_buf = new Uint8Array(s.pending_buf_size), s.sym_buf = s.lit_bufsize, s.sym_end = (s.lit_bufsize - 1) * 3, s.level = e, s.strategy = n, s.method = i, deflateReset(t);
}, deflateInit = (t, e) => deflateInit2(t, e, Z_DEFLATED$2, MAX_WBITS$1, DEF_MEM_LEVEL, Z_DEFAULT_STRATEGY$1), deflate$2 = (t, e) => {
  if (deflateStateCheck(t) || e > Z_BLOCK$1 || e < 0)
    return t ? err(t, Z_STREAM_ERROR$2) : Z_STREAM_ERROR$2;
  const i = t.state;
  if (!t.output || t.avail_in !== 0 && !t.input || i.status === FINISH_STATE && e !== Z_FINISH$3)
    return err(t, t.avail_out === 0 ? Z_BUF_ERROR$1 : Z_STREAM_ERROR$2);
  const r = i.last_flush;
  if (i.last_flush = e, i.pending !== 0) {
    if (flush_pending(t), t.avail_out === 0)
      return i.last_flush = -1, Z_OK$3;
  } else if (t.avail_in === 0 && rank(e) <= rank(r) && e !== Z_FINISH$3)
    return err(t, Z_BUF_ERROR$1);
  if (i.status === FINISH_STATE && t.avail_in !== 0)
    return err(t, Z_BUF_ERROR$1);
  if (i.status === INIT_STATE && i.wrap === 0 && (i.status = BUSY_STATE), i.status === INIT_STATE) {
    let a = Z_DEFLATED$2 + (i.w_bits - 8 << 4) << 8, n = -1;
    if (i.strategy >= Z_HUFFMAN_ONLY || i.level < 2 ? n = 0 : i.level < 6 ? n = 1 : i.level === 6 ? n = 2 : n = 3, a |= n << 6, i.strstart !== 0 && (a |= PRESET_DICT), a += 31 - a % 31, putShortMSB(i, a), i.strstart !== 0 && (putShortMSB(i, t.adler >>> 16), putShortMSB(i, t.adler & 65535)), t.adler = 1, i.status = BUSY_STATE, flush_pending(t), i.pending !== 0)
      return i.last_flush = -1, Z_OK$3;
  }
  if (i.status === GZIP_STATE) {
    if (t.adler = 0, put_byte(i, 31), put_byte(i, 139), put_byte(i, 8), i.gzhead)
      put_byte(
        i,
        (i.gzhead.text ? 1 : 0) + (i.gzhead.hcrc ? 2 : 0) + (i.gzhead.extra ? 4 : 0) + (i.gzhead.name ? 8 : 0) + (i.gzhead.comment ? 16 : 0)
      ), put_byte(i, i.gzhead.time & 255), put_byte(i, i.gzhead.time >> 8 & 255), put_byte(i, i.gzhead.time >> 16 & 255), put_byte(i, i.gzhead.time >> 24 & 255), put_byte(i, i.level === 9 ? 2 : i.strategy >= Z_HUFFMAN_ONLY || i.level < 2 ? 4 : 0), put_byte(i, i.gzhead.os & 255), i.gzhead.extra && i.gzhead.extra.length && (put_byte(i, i.gzhead.extra.length & 255), put_byte(i, i.gzhead.extra.length >> 8 & 255)), i.gzhead.hcrc && (t.adler = crc32_1(t.adler, i.pending_buf, i.pending, 0)), i.gzindex = 0, i.status = EXTRA_STATE;
    else if (put_byte(i, 0), put_byte(i, 0), put_byte(i, 0), put_byte(i, 0), put_byte(i, 0), put_byte(i, i.level === 9 ? 2 : i.strategy >= Z_HUFFMAN_ONLY || i.level < 2 ? 4 : 0), put_byte(i, OS_CODE), i.status = BUSY_STATE, flush_pending(t), i.pending !== 0)
      return i.last_flush = -1, Z_OK$3;
  }
  if (i.status === EXTRA_STATE) {
    if (i.gzhead.extra) {
      let a = i.pending, n = (i.gzhead.extra.length & 65535) - i.gzindex;
      for (; i.pending + n > i.pending_buf_size; ) {
        let s = i.pending_buf_size - i.pending;
        if (i.pending_buf.set(i.gzhead.extra.subarray(i.gzindex, i.gzindex + s), i.pending), i.pending = i.pending_buf_size, i.gzhead.hcrc && i.pending > a && (t.adler = crc32_1(t.adler, i.pending_buf, i.pending - a, a)), i.gzindex += s, flush_pending(t), i.pending !== 0)
          return i.last_flush = -1, Z_OK$3;
        a = 0, n -= s;
      }
      let l = new Uint8Array(i.gzhead.extra);
      i.pending_buf.set(l.subarray(i.gzindex, i.gzindex + n), i.pending), i.pending += n, i.gzhead.hcrc && i.pending > a && (t.adler = crc32_1(t.adler, i.pending_buf, i.pending - a, a)), i.gzindex = 0;
    }
    i.status = NAME_STATE;
  }
  if (i.status === NAME_STATE) {
    if (i.gzhead.name) {
      let a = i.pending, n;
      do {
        if (i.pending === i.pending_buf_size) {
          if (i.gzhead.hcrc && i.pending > a && (t.adler = crc32_1(t.adler, i.pending_buf, i.pending - a, a)), flush_pending(t), i.pending !== 0)
            return i.last_flush = -1, Z_OK$3;
          a = 0;
        }
        i.gzindex < i.gzhead.name.length ? n = i.gzhead.name.charCodeAt(i.gzindex++) & 255 : n = 0, put_byte(i, n);
      } while (n !== 0);
      i.gzhead.hcrc && i.pending > a && (t.adler = crc32_1(t.adler, i.pending_buf, i.pending - a, a)), i.gzindex = 0;
    }
    i.status = COMMENT_STATE;
  }
  if (i.status === COMMENT_STATE) {
    if (i.gzhead.comment) {
      let a = i.pending, n;
      do {
        if (i.pending === i.pending_buf_size) {
          if (i.gzhead.hcrc && i.pending > a && (t.adler = crc32_1(t.adler, i.pending_buf, i.pending - a, a)), flush_pending(t), i.pending !== 0)
            return i.last_flush = -1, Z_OK$3;
          a = 0;
        }
        i.gzindex < i.gzhead.comment.length ? n = i.gzhead.comment.charCodeAt(i.gzindex++) & 255 : n = 0, put_byte(i, n);
      } while (n !== 0);
      i.gzhead.hcrc && i.pending > a && (t.adler = crc32_1(t.adler, i.pending_buf, i.pending - a, a));
    }
    i.status = HCRC_STATE;
  }
  if (i.status === HCRC_STATE) {
    if (i.gzhead.hcrc) {
      if (i.pending + 2 > i.pending_buf_size && (flush_pending(t), i.pending !== 0))
        return i.last_flush = -1, Z_OK$3;
      put_byte(i, t.adler & 255), put_byte(i, t.adler >> 8 & 255), t.adler = 0;
    }
    if (i.status = BUSY_STATE, flush_pending(t), i.pending !== 0)
      return i.last_flush = -1, Z_OK$3;
  }
  if (t.avail_in !== 0 || i.lookahead !== 0 || e !== Z_NO_FLUSH$2 && i.status !== FINISH_STATE) {
    let a = i.level === 0 ? deflate_stored(i, e) : i.strategy === Z_HUFFMAN_ONLY ? deflate_huff(i, e) : i.strategy === Z_RLE ? deflate_rle(i, e) : configuration_table[i.level].func(i, e);
    if ((a === BS_FINISH_STARTED || a === BS_FINISH_DONE) && (i.status = FINISH_STATE), a === BS_NEED_MORE || a === BS_FINISH_STARTED)
      return t.avail_out === 0 && (i.last_flush = -1), Z_OK$3;
    if (a === BS_BLOCK_DONE && (e === Z_PARTIAL_FLUSH ? _tr_align(i) : e !== Z_BLOCK$1 && (_tr_stored_block(i, 0, 0, !1), e === Z_FULL_FLUSH$1 && (zero(i.head), i.lookahead === 0 && (i.strstart = 0, i.block_start = 0, i.insert = 0))), flush_pending(t), t.avail_out === 0))
      return i.last_flush = -1, Z_OK$3;
  }
  return e !== Z_FINISH$3 ? Z_OK$3 : i.wrap <= 0 ? Z_STREAM_END$3 : (i.wrap === 2 ? (put_byte(i, t.adler & 255), put_byte(i, t.adler >> 8 & 255), put_byte(i, t.adler >> 16 & 255), put_byte(i, t.adler >> 24 & 255), put_byte(i, t.total_in & 255), put_byte(i, t.total_in >> 8 & 255), put_byte(i, t.total_in >> 16 & 255), put_byte(i, t.total_in >> 24 & 255)) : (putShortMSB(i, t.adler >>> 16), putShortMSB(i, t.adler & 65535)), flush_pending(t), i.wrap > 0 && (i.wrap = -i.wrap), i.pending !== 0 ? Z_OK$3 : Z_STREAM_END$3);
}, deflateEnd = (t) => {
  if (deflateStateCheck(t))
    return Z_STREAM_ERROR$2;
  const e = t.state.status;
  return t.state = null, e === BUSY_STATE ? err(t, Z_DATA_ERROR$2) : Z_OK$3;
}, deflateSetDictionary = (t, e) => {
  let i = e.length;
  if (deflateStateCheck(t))
    return Z_STREAM_ERROR$2;
  const r = t.state, a = r.wrap;
  if (a === 2 || a === 1 && r.status !== INIT_STATE || r.lookahead)
    return Z_STREAM_ERROR$2;
  if (a === 1 && (t.adler = adler32_1(t.adler, e, i, 0)), r.wrap = 0, i >= r.w_size) {
    a === 0 && (zero(r.head), r.strstart = 0, r.block_start = 0, r.insert = 0);
    let d = new Uint8Array(r.w_size);
    d.set(e.subarray(i - r.w_size, i), 0), e = d, i = r.w_size;
  }
  const n = t.avail_in, l = t.next_in, s = t.input;
  for (t.avail_in = i, t.next_in = 0, t.input = e, fill_window(r); r.lookahead >= MIN_MATCH; ) {
    let d = r.strstart, h = r.lookahead - (MIN_MATCH - 1);
    do
      r.ins_h = HASH(r, r.ins_h, r.window[d + MIN_MATCH - 1]), r.prev[d & r.w_mask] = r.head[r.ins_h], r.head[r.ins_h] = d, d++;
    while (--h);
    r.strstart = d, r.lookahead = MIN_MATCH - 1, fill_window(r);
  }
  return r.strstart += r.lookahead, r.block_start = r.strstart, r.insert = r.lookahead, r.lookahead = 0, r.match_length = r.prev_length = MIN_MATCH - 1, r.match_available = 0, t.next_in = l, t.input = s, t.avail_in = n, r.wrap = a, Z_OK$3;
};
var deflateInit_1 = deflateInit, deflateInit2_1 = deflateInit2, deflateReset_1 = deflateReset, deflateResetKeep_1 = deflateResetKeep, deflateSetHeader_1 = deflateSetHeader, deflate_2$1 = deflate$2, deflateEnd_1 = deflateEnd, deflateSetDictionary_1 = deflateSetDictionary, deflateInfo = "pako deflate (from Nodeca project)", deflate_1$2 = {
  deflateInit: deflateInit_1,
  deflateInit2: deflateInit2_1,
  deflateReset: deflateReset_1,
  deflateResetKeep: deflateResetKeep_1,
  deflateSetHeader: deflateSetHeader_1,
  deflate: deflate_2$1,
  deflateEnd: deflateEnd_1,
  deflateSetDictionary: deflateSetDictionary_1,
  deflateInfo
};
const _has = (t, e) => Object.prototype.hasOwnProperty.call(t, e);
var assign = function(t) {
  const e = Array.prototype.slice.call(arguments, 1);
  for (; e.length; ) {
    const i = e.shift();
    if (i) {
      if (typeof i != "object")
        throw new TypeError(i + "must be non-object");
      for (const r in i)
        _has(i, r) && (t[r] = i[r]);
    }
  }
  return t;
}, flattenChunks = (t) => {
  let e = 0;
  for (let r = 0, a = t.length; r < a; r++)
    e += t[r].length;
  const i = new Uint8Array(e);
  for (let r = 0, a = 0, n = t.length; r < n; r++) {
    let l = t[r];
    i.set(l, a), a += l.length;
  }
  return i;
}, common = {
  assign,
  flattenChunks
};
let STR_APPLY_UIA_OK = !0;
try {
  String.fromCharCode.apply(null, new Uint8Array(1));
} catch {
  STR_APPLY_UIA_OK = !1;
}
const _utf8len = new Uint8Array(256);
for (let t = 0; t < 256; t++)
  _utf8len[t] = t >= 252 ? 6 : t >= 248 ? 5 : t >= 240 ? 4 : t >= 224 ? 3 : t >= 192 ? 2 : 1;
_utf8len[254] = _utf8len[254] = 1;
var string2buf = (t) => {
  if (typeof TextEncoder == "function" && TextEncoder.prototype.encode)
    return new TextEncoder().encode(t);
  let e, i, r, a, n, l = t.length, s = 0;
  for (a = 0; a < l; a++)
    i = t.charCodeAt(a), (i & 64512) === 55296 && a + 1 < l && (r = t.charCodeAt(a + 1), (r & 64512) === 56320 && (i = 65536 + (i - 55296 << 10) + (r - 56320), a++)), s += i < 128 ? 1 : i < 2048 ? 2 : i < 65536 ? 3 : 4;
  for (e = new Uint8Array(s), n = 0, a = 0; n < s; a++)
    i = t.charCodeAt(a), (i & 64512) === 55296 && a + 1 < l && (r = t.charCodeAt(a + 1), (r & 64512) === 56320 && (i = 65536 + (i - 55296 << 10) + (r - 56320), a++)), i < 128 ? e[n++] = i : i < 2048 ? (e[n++] = 192 | i >>> 6, e[n++] = 128 | i & 63) : i < 65536 ? (e[n++] = 224 | i >>> 12, e[n++] = 128 | i >>> 6 & 63, e[n++] = 128 | i & 63) : (e[n++] = 240 | i >>> 18, e[n++] = 128 | i >>> 12 & 63, e[n++] = 128 | i >>> 6 & 63, e[n++] = 128 | i & 63);
  return e;
};
const buf2binstring = (t, e) => {
  if (e < 65534 && t.subarray && STR_APPLY_UIA_OK)
    return String.fromCharCode.apply(null, t.length === e ? t : t.subarray(0, e));
  let i = "";
  for (let r = 0; r < e; r++)
    i += String.fromCharCode(t[r]);
  return i;
};
var buf2string = (t, e) => {
  const i = e || t.length;
  if (typeof TextDecoder == "function" && TextDecoder.prototype.decode)
    return new TextDecoder().decode(t.subarray(0, e));
  let r, a;
  const n = new Array(i * 2);
  for (a = 0, r = 0; r < i; ) {
    let l = t[r++];
    if (l < 128) {
      n[a++] = l;
      continue;
    }
    let s = _utf8len[l];
    if (s > 4) {
      n[a++] = 65533, r += s - 1;
      continue;
    }
    for (l &= s === 2 ? 31 : s === 3 ? 15 : 7; s > 1 && r < i; )
      l = l << 6 | t[r++] & 63, s--;
    if (s > 1) {
      n[a++] = 65533;
      continue;
    }
    l < 65536 ? n[a++] = l : (l -= 65536, n[a++] = 55296 | l >> 10 & 1023, n[a++] = 56320 | l & 1023);
  }
  return buf2binstring(n, a);
}, utf8border = (t, e) => {
  e = e || t.length, e > t.length && (e = t.length);
  let i = e - 1;
  for (; i >= 0 && (t[i] & 192) === 128; )
    i--;
  return i < 0 || i === 0 ? e : i + _utf8len[t[i]] > e ? i : e;
}, strings = {
  string2buf,
  buf2string,
  utf8border
};
function ZStream() {
  this.input = null, this.next_in = 0, this.avail_in = 0, this.total_in = 0, this.output = null, this.next_out = 0, this.avail_out = 0, this.total_out = 0, this.msg = "", this.state = null, this.data_type = 2, this.adler = 0;
}
var zstream = ZStream;
const toString$1 = Object.prototype.toString, {
  Z_NO_FLUSH: Z_NO_FLUSH$1,
  Z_SYNC_FLUSH,
  Z_FULL_FLUSH,
  Z_FINISH: Z_FINISH$2,
  Z_OK: Z_OK$2,
  Z_STREAM_END: Z_STREAM_END$2,
  Z_DEFAULT_COMPRESSION,
  Z_DEFAULT_STRATEGY,
  Z_DEFLATED: Z_DEFLATED$1
} = constants$2;
function Deflate$1(t) {
  this.options = common.assign({
    level: Z_DEFAULT_COMPRESSION,
    method: Z_DEFLATED$1,
    chunkSize: 16384,
    windowBits: 15,
    memLevel: 8,
    strategy: Z_DEFAULT_STRATEGY
  }, t || {});
  let e = this.options;
  e.raw && e.windowBits > 0 ? e.windowBits = -e.windowBits : e.gzip && e.windowBits > 0 && e.windowBits < 16 && (e.windowBits += 16), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new zstream(), this.strm.avail_out = 0;
  let i = deflate_1$2.deflateInit2(
    this.strm,
    e.level,
    e.method,
    e.windowBits,
    e.memLevel,
    e.strategy
  );
  if (i !== Z_OK$2)
    throw new Error(messages[i]);
  if (e.header && deflate_1$2.deflateSetHeader(this.strm, e.header), e.dictionary) {
    let r;
    if (typeof e.dictionary == "string" ? r = strings.string2buf(e.dictionary) : toString$1.call(e.dictionary) === "[object ArrayBuffer]" ? r = new Uint8Array(e.dictionary) : r = e.dictionary, i = deflate_1$2.deflateSetDictionary(this.strm, r), i !== Z_OK$2)
      throw new Error(messages[i]);
    this._dict_set = !0;
  }
}
Deflate$1.prototype.push = function(t, e) {
  const i = this.strm, r = this.options.chunkSize;
  let a, n;
  if (this.ended)
    return !1;
  for (e === ~~e ? n = e : n = e === !0 ? Z_FINISH$2 : Z_NO_FLUSH$1, typeof t == "string" ? i.input = strings.string2buf(t) : toString$1.call(t) === "[object ArrayBuffer]" ? i.input = new Uint8Array(t) : i.input = t, i.next_in = 0, i.avail_in = i.input.length; ; ) {
    if (i.avail_out === 0 && (i.output = new Uint8Array(r), i.next_out = 0, i.avail_out = r), (n === Z_SYNC_FLUSH || n === Z_FULL_FLUSH) && i.avail_out <= 6) {
      this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
      continue;
    }
    if (a = deflate_1$2.deflate(i, n), a === Z_STREAM_END$2)
      return i.next_out > 0 && this.onData(i.output.subarray(0, i.next_out)), a = deflate_1$2.deflateEnd(this.strm), this.onEnd(a), this.ended = !0, a === Z_OK$2;
    if (i.avail_out === 0) {
      this.onData(i.output);
      continue;
    }
    if (n > 0 && i.next_out > 0) {
      this.onData(i.output.subarray(0, i.next_out)), i.avail_out = 0;
      continue;
    }
    if (i.avail_in === 0) break;
  }
  return !0;
};
Deflate$1.prototype.onData = function(t) {
  this.chunks.push(t);
};
Deflate$1.prototype.onEnd = function(t) {
  t === Z_OK$2 && (this.result = common.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
};
const BAD$1 = 16209, TYPE$1 = 16191;
var inffast = function(e, i) {
  let r, a, n, l, s, d, h, o, u, m, f, c, g, p, y, v, _, b, T, k, x, A, w, S;
  const P = e.state;
  r = e.next_in, w = e.input, a = r + (e.avail_in - 5), n = e.next_out, S = e.output, l = n - (i - e.avail_out), s = n + (e.avail_out - 257), d = P.dmax, h = P.wsize, o = P.whave, u = P.wnext, m = P.window, f = P.hold, c = P.bits, g = P.lencode, p = P.distcode, y = (1 << P.lenbits) - 1, v = (1 << P.distbits) - 1;
  t:
    do {
      c < 15 && (f += w[r++] << c, c += 8, f += w[r++] << c, c += 8), _ = g[f & y];
      e:
        for (; ; ) {
          if (b = _ >>> 24, f >>>= b, c -= b, b = _ >>> 16 & 255, b === 0)
            S[n++] = _ & 65535;
          else if (b & 16) {
            T = _ & 65535, b &= 15, b && (c < b && (f += w[r++] << c, c += 8), T += f & (1 << b) - 1, f >>>= b, c -= b), c < 15 && (f += w[r++] << c, c += 8, f += w[r++] << c, c += 8), _ = p[f & v];
            i:
              for (; ; ) {
                if (b = _ >>> 24, f >>>= b, c -= b, b = _ >>> 16 & 255, b & 16) {
                  if (k = _ & 65535, b &= 15, c < b && (f += w[r++] << c, c += 8, c < b && (f += w[r++] << c, c += 8)), k += f & (1 << b) - 1, k > d) {
                    e.msg = "invalid distance too far back", P.mode = BAD$1;
                    break t;
                  }
                  if (f >>>= b, c -= b, b = n - l, k > b) {
                    if (b = k - b, b > o && P.sane) {
                      e.msg = "invalid distance too far back", P.mode = BAD$1;
                      break t;
                    }
                    if (x = 0, A = m, u === 0) {
                      if (x += h - b, b < T) {
                        T -= b;
                        do
                          S[n++] = m[x++];
                        while (--b);
                        x = n - k, A = S;
                      }
                    } else if (u < b) {
                      if (x += h + u - b, b -= u, b < T) {
                        T -= b;
                        do
                          S[n++] = m[x++];
                        while (--b);
                        if (x = 0, u < T) {
                          b = u, T -= b;
                          do
                            S[n++] = m[x++];
                          while (--b);
                          x = n - k, A = S;
                        }
                      }
                    } else if (x += u - b, b < T) {
                      T -= b;
                      do
                        S[n++] = m[x++];
                      while (--b);
                      x = n - k, A = S;
                    }
                    for (; T > 2; )
                      S[n++] = A[x++], S[n++] = A[x++], S[n++] = A[x++], T -= 3;
                    T && (S[n++] = A[x++], T > 1 && (S[n++] = A[x++]));
                  } else {
                    x = n - k;
                    do
                      S[n++] = S[x++], S[n++] = S[x++], S[n++] = S[x++], T -= 3;
                    while (T > 2);
                    T && (S[n++] = S[x++], T > 1 && (S[n++] = S[x++]));
                  }
                } else if (b & 64) {
                  e.msg = "invalid distance code", P.mode = BAD$1;
                  break t;
                } else {
                  _ = p[(_ & 65535) + (f & (1 << b) - 1)];
                  continue i;
                }
                break;
              }
          } else if (b & 64)
            if (b & 32) {
              P.mode = TYPE$1;
              break t;
            } else {
              e.msg = "invalid literal/length code", P.mode = BAD$1;
              break t;
            }
          else {
            _ = g[(_ & 65535) + (f & (1 << b) - 1)];
            continue e;
          }
          break;
        }
    } while (r < a && n < s);
  T = c >> 3, r -= T, c -= T << 3, f &= (1 << c) - 1, e.next_in = r, e.next_out = n, e.avail_in = r < a ? 5 + (a - r) : 5 - (r - a), e.avail_out = n < s ? 257 + (s - n) : 257 - (n - s), P.hold = f, P.bits = c;
};
const MAXBITS = 15, ENOUGH_LENS$1 = 852, ENOUGH_DISTS$1 = 592, CODES$1 = 0, LENS$1 = 1, DISTS$1 = 2, lbase = new Uint16Array([
  /* Length codes 257..285 base */
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  13,
  15,
  17,
  19,
  23,
  27,
  31,
  35,
  43,
  51,
  59,
  67,
  83,
  99,
  115,
  131,
  163,
  195,
  227,
  258,
  0,
  0
]), lext = new Uint8Array([
  /* Length codes 257..285 extra */
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  16,
  17,
  17,
  17,
  17,
  18,
  18,
  18,
  18,
  19,
  19,
  19,
  19,
  20,
  20,
  20,
  20,
  21,
  21,
  21,
  21,
  16,
  72,
  78
]), dbase = new Uint16Array([
  /* Distance codes 0..29 base */
  1,
  2,
  3,
  4,
  5,
  7,
  9,
  13,
  17,
  25,
  33,
  49,
  65,
  97,
  129,
  193,
  257,
  385,
  513,
  769,
  1025,
  1537,
  2049,
  3073,
  4097,
  6145,
  8193,
  12289,
  16385,
  24577,
  0,
  0
]), dext = new Uint8Array([
  /* Distance codes 0..29 extra */
  16,
  16,
  16,
  16,
  17,
  17,
  18,
  18,
  19,
  19,
  20,
  20,
  21,
  21,
  22,
  22,
  23,
  23,
  24,
  24,
  25,
  25,
  26,
  26,
  27,
  27,
  28,
  28,
  29,
  29,
  64,
  64
]), inflate_table = (t, e, i, r, a, n, l, s) => {
  const d = s.bits;
  let h = 0, o = 0, u = 0, m = 0, f = 0, c = 0, g = 0, p = 0, y = 0, v = 0, _, b, T, k, x, A = null, w;
  const S = new Uint16Array(MAXBITS + 1), P = new Uint16Array(MAXBITS + 1);
  let F = null, I, M, L;
  for (h = 0; h <= MAXBITS; h++)
    S[h] = 0;
  for (o = 0; o < r; o++)
    S[e[i + o]]++;
  for (f = d, m = MAXBITS; m >= 1 && S[m] === 0; m--)
    ;
  if (f > m && (f = m), m === 0)
    return a[n++] = 1 << 24 | 64 << 16 | 0, a[n++] = 1 << 24 | 64 << 16 | 0, s.bits = 1, 0;
  for (u = 1; u < m && S[u] === 0; u++)
    ;
  for (f < u && (f = u), p = 1, h = 1; h <= MAXBITS; h++)
    if (p <<= 1, p -= S[h], p < 0)
      return -1;
  if (p > 0 && (t === CODES$1 || m !== 1))
    return -1;
  for (P[1] = 0, h = 1; h < MAXBITS; h++)
    P[h + 1] = P[h] + S[h];
  for (o = 0; o < r; o++)
    e[i + o] !== 0 && (l[P[e[i + o]]++] = o);
  if (t === CODES$1 ? (A = F = l, w = 20) : t === LENS$1 ? (A = lbase, F = lext, w = 257) : (A = dbase, F = dext, w = 0), v = 0, o = 0, h = u, x = n, c = f, g = 0, T = -1, y = 1 << f, k = y - 1, t === LENS$1 && y > ENOUGH_LENS$1 || t === DISTS$1 && y > ENOUGH_DISTS$1)
    return 1;
  for (; ; ) {
    I = h - g, l[o] + 1 < w ? (M = 0, L = l[o]) : l[o] >= w ? (M = F[l[o] - w], L = A[l[o] - w]) : (M = 96, L = 0), _ = 1 << h - g, b = 1 << c, u = b;
    do
      b -= _, a[x + (v >> g) + b] = I << 24 | M << 16 | L | 0;
    while (b !== 0);
    for (_ = 1 << h - 1; v & _; )
      _ >>= 1;
    if (_ !== 0 ? (v &= _ - 1, v += _) : v = 0, o++, --S[h] === 0) {
      if (h === m)
        break;
      h = e[i + l[o]];
    }
    if (h > f && (v & k) !== T) {
      for (g === 0 && (g = f), x += u, c = h - g, p = 1 << c; c + g < m && (p -= S[c + g], !(p <= 0)); )
        c++, p <<= 1;
      if (y += 1 << c, t === LENS$1 && y > ENOUGH_LENS$1 || t === DISTS$1 && y > ENOUGH_DISTS$1)
        return 1;
      T = v & k, a[T] = f << 24 | c << 16 | x - n | 0;
    }
  }
  return v !== 0 && (a[x + v] = h - g << 24 | 64 << 16 | 0), s.bits = f, 0;
};
var inftrees = inflate_table;
const CODES = 0, LENS = 1, DISTS = 2, {
  Z_FINISH: Z_FINISH$1,
  Z_BLOCK,
  Z_TREES,
  Z_OK: Z_OK$1,
  Z_STREAM_END: Z_STREAM_END$1,
  Z_NEED_DICT: Z_NEED_DICT$1,
  Z_STREAM_ERROR: Z_STREAM_ERROR$1,
  Z_DATA_ERROR: Z_DATA_ERROR$1,
  Z_MEM_ERROR: Z_MEM_ERROR$1,
  Z_BUF_ERROR,
  Z_DEFLATED
} = constants$2, HEAD = 16180, FLAGS = 16181, TIME = 16182, OS = 16183, EXLEN = 16184, EXTRA = 16185, NAME = 16186, COMMENT = 16187, HCRC = 16188, DICTID = 16189, DICT = 16190, TYPE = 16191, TYPEDO = 16192, STORED = 16193, COPY_ = 16194, COPY = 16195, TABLE = 16196, LENLENS = 16197, CODELENS = 16198, LEN_ = 16199, LEN = 16200, LENEXT = 16201, DIST = 16202, DISTEXT = 16203, MATCH = 16204, LIT = 16205, CHECK = 16206, LENGTH = 16207, DONE = 16208, BAD = 16209, MEM = 16210, SYNC = 16211, ENOUGH_LENS = 852, ENOUGH_DISTS = 592, MAX_WBITS = 15, DEF_WBITS = MAX_WBITS, zswap32 = (t) => (t >>> 24 & 255) + (t >>> 8 & 65280) + ((t & 65280) << 8) + ((t & 255) << 24);
function InflateState() {
  this.strm = null, this.mode = 0, this.last = !1, this.wrap = 0, this.havedict = !1, this.flags = 0, this.dmax = 0, this.check = 0, this.total = 0, this.head = null, this.wbits = 0, this.wsize = 0, this.whave = 0, this.wnext = 0, this.window = null, this.hold = 0, this.bits = 0, this.length = 0, this.offset = 0, this.extra = 0, this.lencode = null, this.distcode = null, this.lenbits = 0, this.distbits = 0, this.ncode = 0, this.nlen = 0, this.ndist = 0, this.have = 0, this.next = null, this.lens = new Uint16Array(320), this.work = new Uint16Array(288), this.lendyn = null, this.distdyn = null, this.sane = 0, this.back = 0, this.was = 0;
}
const inflateStateCheck = (t) => {
  if (!t)
    return 1;
  const e = t.state;
  return !e || e.strm !== t || e.mode < HEAD || e.mode > SYNC ? 1 : 0;
}, inflateResetKeep = (t) => {
  if (inflateStateCheck(t))
    return Z_STREAM_ERROR$1;
  const e = t.state;
  return t.total_in = t.total_out = e.total = 0, t.msg = "", e.wrap && (t.adler = e.wrap & 1), e.mode = HEAD, e.last = 0, e.havedict = 0, e.flags = -1, e.dmax = 32768, e.head = null, e.hold = 0, e.bits = 0, e.lencode = e.lendyn = new Int32Array(ENOUGH_LENS), e.distcode = e.distdyn = new Int32Array(ENOUGH_DISTS), e.sane = 1, e.back = -1, Z_OK$1;
}, inflateReset = (t) => {
  if (inflateStateCheck(t))
    return Z_STREAM_ERROR$1;
  const e = t.state;
  return e.wsize = 0, e.whave = 0, e.wnext = 0, inflateResetKeep(t);
}, inflateReset2 = (t, e) => {
  let i;
  if (inflateStateCheck(t))
    return Z_STREAM_ERROR$1;
  const r = t.state;
  return e < 0 ? (i = 0, e = -e) : (i = (e >> 4) + 5, e < 48 && (e &= 15)), e && (e < 8 || e > 15) ? Z_STREAM_ERROR$1 : (r.window !== null && r.wbits !== e && (r.window = null), r.wrap = i, r.wbits = e, inflateReset(t));
}, inflateInit2 = (t, e) => {
  if (!t)
    return Z_STREAM_ERROR$1;
  const i = new InflateState();
  t.state = i, i.strm = t, i.window = null, i.mode = HEAD;
  const r = inflateReset2(t, e);
  return r !== Z_OK$1 && (t.state = null), r;
}, inflateInit = (t) => inflateInit2(t, DEF_WBITS);
let virgin = !0, lenfix, distfix;
const fixedtables = (t) => {
  if (virgin) {
    lenfix = new Int32Array(512), distfix = new Int32Array(32);
    let e = 0;
    for (; e < 144; )
      t.lens[e++] = 8;
    for (; e < 256; )
      t.lens[e++] = 9;
    for (; e < 280; )
      t.lens[e++] = 7;
    for (; e < 288; )
      t.lens[e++] = 8;
    for (inftrees(LENS, t.lens, 0, 288, lenfix, 0, t.work, { bits: 9 }), e = 0; e < 32; )
      t.lens[e++] = 5;
    inftrees(DISTS, t.lens, 0, 32, distfix, 0, t.work, { bits: 5 }), virgin = !1;
  }
  t.lencode = lenfix, t.lenbits = 9, t.distcode = distfix, t.distbits = 5;
}, updatewindow = (t, e, i, r) => {
  let a;
  const n = t.state;
  return n.window === null && (n.wsize = 1 << n.wbits, n.wnext = 0, n.whave = 0, n.window = new Uint8Array(n.wsize)), r >= n.wsize ? (n.window.set(e.subarray(i - n.wsize, i), 0), n.wnext = 0, n.whave = n.wsize) : (a = n.wsize - n.wnext, a > r && (a = r), n.window.set(e.subarray(i - r, i - r + a), n.wnext), r -= a, r ? (n.window.set(e.subarray(i - r, i), 0), n.wnext = r, n.whave = n.wsize) : (n.wnext += a, n.wnext === n.wsize && (n.wnext = 0), n.whave < n.wsize && (n.whave += a))), 0;
}, inflate$2 = (t, e) => {
  let i, r, a, n, l, s, d, h, o, u, m, f, c, g, p = 0, y, v, _, b, T, k, x, A;
  const w = new Uint8Array(4);
  let S, P;
  const F = (
    /* permutation of code lengths */
    new Uint8Array([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15])
  );
  if (inflateStateCheck(t) || !t.output || !t.input && t.avail_in !== 0)
    return Z_STREAM_ERROR$1;
  i = t.state, i.mode === TYPE && (i.mode = TYPEDO), l = t.next_out, a = t.output, d = t.avail_out, n = t.next_in, r = t.input, s = t.avail_in, h = i.hold, o = i.bits, u = s, m = d, A = Z_OK$1;
  t:
    for (; ; )
      switch (i.mode) {
        case HEAD:
          if (i.wrap === 0) {
            i.mode = TYPEDO;
            break;
          }
          for (; o < 16; ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          if (i.wrap & 2 && h === 35615) {
            i.wbits === 0 && (i.wbits = 15), i.check = 0, w[0] = h & 255, w[1] = h >>> 8 & 255, i.check = crc32_1(i.check, w, 2, 0), h = 0, o = 0, i.mode = FLAGS;
            break;
          }
          if (i.head && (i.head.done = !1), !(i.wrap & 1) || /* check if zlib header allowed */
          (((h & 255) << 8) + (h >> 8)) % 31) {
            t.msg = "incorrect header check", i.mode = BAD;
            break;
          }
          if ((h & 15) !== Z_DEFLATED) {
            t.msg = "unknown compression method", i.mode = BAD;
            break;
          }
          if (h >>>= 4, o -= 4, x = (h & 15) + 8, i.wbits === 0 && (i.wbits = x), x > 15 || x > i.wbits) {
            t.msg = "invalid window size", i.mode = BAD;
            break;
          }
          i.dmax = 1 << i.wbits, i.flags = 0, t.adler = i.check = 1, i.mode = h & 512 ? DICTID : TYPE, h = 0, o = 0;
          break;
        case FLAGS:
          for (; o < 16; ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          if (i.flags = h, (i.flags & 255) !== Z_DEFLATED) {
            t.msg = "unknown compression method", i.mode = BAD;
            break;
          }
          if (i.flags & 57344) {
            t.msg = "unknown header flags set", i.mode = BAD;
            break;
          }
          i.head && (i.head.text = h >> 8 & 1), i.flags & 512 && i.wrap & 4 && (w[0] = h & 255, w[1] = h >>> 8 & 255, i.check = crc32_1(i.check, w, 2, 0)), h = 0, o = 0, i.mode = TIME;
        case TIME:
          for (; o < 32; ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          i.head && (i.head.time = h), i.flags & 512 && i.wrap & 4 && (w[0] = h & 255, w[1] = h >>> 8 & 255, w[2] = h >>> 16 & 255, w[3] = h >>> 24 & 255, i.check = crc32_1(i.check, w, 4, 0)), h = 0, o = 0, i.mode = OS;
        case OS:
          for (; o < 16; ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          i.head && (i.head.xflags = h & 255, i.head.os = h >> 8), i.flags & 512 && i.wrap & 4 && (w[0] = h & 255, w[1] = h >>> 8 & 255, i.check = crc32_1(i.check, w, 2, 0)), h = 0, o = 0, i.mode = EXLEN;
        case EXLEN:
          if (i.flags & 1024) {
            for (; o < 16; ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            i.length = h, i.head && (i.head.extra_len = h), i.flags & 512 && i.wrap & 4 && (w[0] = h & 255, w[1] = h >>> 8 & 255, i.check = crc32_1(i.check, w, 2, 0)), h = 0, o = 0;
          } else i.head && (i.head.extra = null);
          i.mode = EXTRA;
        case EXTRA:
          if (i.flags & 1024 && (f = i.length, f > s && (f = s), f && (i.head && (x = i.head.extra_len - i.length, i.head.extra || (i.head.extra = new Uint8Array(i.head.extra_len)), i.head.extra.set(
            r.subarray(
              n,
              // extra field is limited to 65536 bytes
              // - no need for additional size check
              n + f
            ),
            /*len + copy > state.head.extra_max - len ? state.head.extra_max : copy,*/
            x
          )), i.flags & 512 && i.wrap & 4 && (i.check = crc32_1(i.check, r, f, n)), s -= f, n += f, i.length -= f), i.length))
            break t;
          i.length = 0, i.mode = NAME;
        case NAME:
          if (i.flags & 2048) {
            if (s === 0)
              break t;
            f = 0;
            do
              x = r[n + f++], i.head && x && i.length < 65536 && (i.head.name += String.fromCharCode(x));
            while (x && f < s);
            if (i.flags & 512 && i.wrap & 4 && (i.check = crc32_1(i.check, r, f, n)), s -= f, n += f, x)
              break t;
          } else i.head && (i.head.name = null);
          i.length = 0, i.mode = COMMENT;
        case COMMENT:
          if (i.flags & 4096) {
            if (s === 0)
              break t;
            f = 0;
            do
              x = r[n + f++], i.head && x && i.length < 65536 && (i.head.comment += String.fromCharCode(x));
            while (x && f < s);
            if (i.flags & 512 && i.wrap & 4 && (i.check = crc32_1(i.check, r, f, n)), s -= f, n += f, x)
              break t;
          } else i.head && (i.head.comment = null);
          i.mode = HCRC;
        case HCRC:
          if (i.flags & 512) {
            for (; o < 16; ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            if (i.wrap & 4 && h !== (i.check & 65535)) {
              t.msg = "header crc mismatch", i.mode = BAD;
              break;
            }
            h = 0, o = 0;
          }
          i.head && (i.head.hcrc = i.flags >> 9 & 1, i.head.done = !0), t.adler = i.check = 0, i.mode = TYPE;
          break;
        case DICTID:
          for (; o < 32; ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          t.adler = i.check = zswap32(h), h = 0, o = 0, i.mode = DICT;
        case DICT:
          if (i.havedict === 0)
            return t.next_out = l, t.avail_out = d, t.next_in = n, t.avail_in = s, i.hold = h, i.bits = o, Z_NEED_DICT$1;
          t.adler = i.check = 1, i.mode = TYPE;
        case TYPE:
          if (e === Z_BLOCK || e === Z_TREES)
            break t;
        case TYPEDO:
          if (i.last) {
            h >>>= o & 7, o -= o & 7, i.mode = CHECK;
            break;
          }
          for (; o < 3; ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          switch (i.last = h & 1, h >>>= 1, o -= 1, h & 3) {
            case 0:
              i.mode = STORED;
              break;
            case 1:
              if (fixedtables(i), i.mode = LEN_, e === Z_TREES) {
                h >>>= 2, o -= 2;
                break t;
              }
              break;
            case 2:
              i.mode = TABLE;
              break;
            case 3:
              t.msg = "invalid block type", i.mode = BAD;
          }
          h >>>= 2, o -= 2;
          break;
        case STORED:
          for (h >>>= o & 7, o -= o & 7; o < 32; ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          if ((h & 65535) !== (h >>> 16 ^ 65535)) {
            t.msg = "invalid stored block lengths", i.mode = BAD;
            break;
          }
          if (i.length = h & 65535, h = 0, o = 0, i.mode = COPY_, e === Z_TREES)
            break t;
        case COPY_:
          i.mode = COPY;
        case COPY:
          if (f = i.length, f) {
            if (f > s && (f = s), f > d && (f = d), f === 0)
              break t;
            a.set(r.subarray(n, n + f), l), s -= f, n += f, d -= f, l += f, i.length -= f;
            break;
          }
          i.mode = TYPE;
          break;
        case TABLE:
          for (; o < 14; ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          if (i.nlen = (h & 31) + 257, h >>>= 5, o -= 5, i.ndist = (h & 31) + 1, h >>>= 5, o -= 5, i.ncode = (h & 15) + 4, h >>>= 4, o -= 4, i.nlen > 286 || i.ndist > 30) {
            t.msg = "too many length or distance symbols", i.mode = BAD;
            break;
          }
          i.have = 0, i.mode = LENLENS;
        case LENLENS:
          for (; i.have < i.ncode; ) {
            for (; o < 3; ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            i.lens[F[i.have++]] = h & 7, h >>>= 3, o -= 3;
          }
          for (; i.have < 19; )
            i.lens[F[i.have++]] = 0;
          if (i.lencode = i.lendyn, i.lenbits = 7, S = { bits: i.lenbits }, A = inftrees(CODES, i.lens, 0, 19, i.lencode, 0, i.work, S), i.lenbits = S.bits, A) {
            t.msg = "invalid code lengths set", i.mode = BAD;
            break;
          }
          i.have = 0, i.mode = CODELENS;
        case CODELENS:
          for (; i.have < i.nlen + i.ndist; ) {
            for (; p = i.lencode[h & (1 << i.lenbits) - 1], y = p >>> 24, v = p >>> 16 & 255, _ = p & 65535, !(y <= o); ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            if (_ < 16)
              h >>>= y, o -= y, i.lens[i.have++] = _;
            else {
              if (_ === 16) {
                for (P = y + 2; o < P; ) {
                  if (s === 0)
                    break t;
                  s--, h += r[n++] << o, o += 8;
                }
                if (h >>>= y, o -= y, i.have === 0) {
                  t.msg = "invalid bit length repeat", i.mode = BAD;
                  break;
                }
                x = i.lens[i.have - 1], f = 3 + (h & 3), h >>>= 2, o -= 2;
              } else if (_ === 17) {
                for (P = y + 3; o < P; ) {
                  if (s === 0)
                    break t;
                  s--, h += r[n++] << o, o += 8;
                }
                h >>>= y, o -= y, x = 0, f = 3 + (h & 7), h >>>= 3, o -= 3;
              } else {
                for (P = y + 7; o < P; ) {
                  if (s === 0)
                    break t;
                  s--, h += r[n++] << o, o += 8;
                }
                h >>>= y, o -= y, x = 0, f = 11 + (h & 127), h >>>= 7, o -= 7;
              }
              if (i.have + f > i.nlen + i.ndist) {
                t.msg = "invalid bit length repeat", i.mode = BAD;
                break;
              }
              for (; f--; )
                i.lens[i.have++] = x;
            }
          }
          if (i.mode === BAD)
            break;
          if (i.lens[256] === 0) {
            t.msg = "invalid code -- missing end-of-block", i.mode = BAD;
            break;
          }
          if (i.lenbits = 9, S = { bits: i.lenbits }, A = inftrees(LENS, i.lens, 0, i.nlen, i.lencode, 0, i.work, S), i.lenbits = S.bits, A) {
            t.msg = "invalid literal/lengths set", i.mode = BAD;
            break;
          }
          if (i.distbits = 6, i.distcode = i.distdyn, S = { bits: i.distbits }, A = inftrees(DISTS, i.lens, i.nlen, i.ndist, i.distcode, 0, i.work, S), i.distbits = S.bits, A) {
            t.msg = "invalid distances set", i.mode = BAD;
            break;
          }
          if (i.mode = LEN_, e === Z_TREES)
            break t;
        case LEN_:
          i.mode = LEN;
        case LEN:
          if (s >= 6 && d >= 258) {
            t.next_out = l, t.avail_out = d, t.next_in = n, t.avail_in = s, i.hold = h, i.bits = o, inffast(t, m), l = t.next_out, a = t.output, d = t.avail_out, n = t.next_in, r = t.input, s = t.avail_in, h = i.hold, o = i.bits, i.mode === TYPE && (i.back = -1);
            break;
          }
          for (i.back = 0; p = i.lencode[h & (1 << i.lenbits) - 1], y = p >>> 24, v = p >>> 16 & 255, _ = p & 65535, !(y <= o); ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          if (v && !(v & 240)) {
            for (b = y, T = v, k = _; p = i.lencode[k + ((h & (1 << b + T) - 1) >> b)], y = p >>> 24, v = p >>> 16 & 255, _ = p & 65535, !(b + y <= o); ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            h >>>= b, o -= b, i.back += b;
          }
          if (h >>>= y, o -= y, i.back += y, i.length = _, v === 0) {
            i.mode = LIT;
            break;
          }
          if (v & 32) {
            i.back = -1, i.mode = TYPE;
            break;
          }
          if (v & 64) {
            t.msg = "invalid literal/length code", i.mode = BAD;
            break;
          }
          i.extra = v & 15, i.mode = LENEXT;
        case LENEXT:
          if (i.extra) {
            for (P = i.extra; o < P; ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            i.length += h & (1 << i.extra) - 1, h >>>= i.extra, o -= i.extra, i.back += i.extra;
          }
          i.was = i.length, i.mode = DIST;
        case DIST:
          for (; p = i.distcode[h & (1 << i.distbits) - 1], y = p >>> 24, v = p >>> 16 & 255, _ = p & 65535, !(y <= o); ) {
            if (s === 0)
              break t;
            s--, h += r[n++] << o, o += 8;
          }
          if (!(v & 240)) {
            for (b = y, T = v, k = _; p = i.distcode[k + ((h & (1 << b + T) - 1) >> b)], y = p >>> 24, v = p >>> 16 & 255, _ = p & 65535, !(b + y <= o); ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            h >>>= b, o -= b, i.back += b;
          }
          if (h >>>= y, o -= y, i.back += y, v & 64) {
            t.msg = "invalid distance code", i.mode = BAD;
            break;
          }
          i.offset = _, i.extra = v & 15, i.mode = DISTEXT;
        case DISTEXT:
          if (i.extra) {
            for (P = i.extra; o < P; ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            i.offset += h & (1 << i.extra) - 1, h >>>= i.extra, o -= i.extra, i.back += i.extra;
          }
          if (i.offset > i.dmax) {
            t.msg = "invalid distance too far back", i.mode = BAD;
            break;
          }
          i.mode = MATCH;
        case MATCH:
          if (d === 0)
            break t;
          if (f = m - d, i.offset > f) {
            if (f = i.offset - f, f > i.whave && i.sane) {
              t.msg = "invalid distance too far back", i.mode = BAD;
              break;
            }
            f > i.wnext ? (f -= i.wnext, c = i.wsize - f) : c = i.wnext - f, f > i.length && (f = i.length), g = i.window;
          } else
            g = a, c = l - i.offset, f = i.length;
          f > d && (f = d), d -= f, i.length -= f;
          do
            a[l++] = g[c++];
          while (--f);
          i.length === 0 && (i.mode = LEN);
          break;
        case LIT:
          if (d === 0)
            break t;
          a[l++] = i.length, d--, i.mode = LEN;
          break;
        case CHECK:
          if (i.wrap) {
            for (; o < 32; ) {
              if (s === 0)
                break t;
              s--, h |= r[n++] << o, o += 8;
            }
            if (m -= d, t.total_out += m, i.total += m, i.wrap & 4 && m && (t.adler = i.check = /*UPDATE_CHECK(state.check, put - _out, _out);*/
            i.flags ? crc32_1(i.check, a, m, l - m) : adler32_1(i.check, a, m, l - m)), m = d, i.wrap & 4 && (i.flags ? h : zswap32(h)) !== i.check) {
              t.msg = "incorrect data check", i.mode = BAD;
              break;
            }
            h = 0, o = 0;
          }
          i.mode = LENGTH;
        case LENGTH:
          if (i.wrap && i.flags) {
            for (; o < 32; ) {
              if (s === 0)
                break t;
              s--, h += r[n++] << o, o += 8;
            }
            if (i.wrap & 4 && h !== (i.total & 4294967295)) {
              t.msg = "incorrect length check", i.mode = BAD;
              break;
            }
            h = 0, o = 0;
          }
          i.mode = DONE;
        case DONE:
          A = Z_STREAM_END$1;
          break t;
        case BAD:
          A = Z_DATA_ERROR$1;
          break t;
        case MEM:
          return Z_MEM_ERROR$1;
        case SYNC:
        default:
          return Z_STREAM_ERROR$1;
      }
  return t.next_out = l, t.avail_out = d, t.next_in = n, t.avail_in = s, i.hold = h, i.bits = o, (i.wsize || m !== t.avail_out && i.mode < BAD && (i.mode < CHECK || e !== Z_FINISH$1)) && updatewindow(t, t.output, t.next_out, m - t.avail_out), u -= t.avail_in, m -= t.avail_out, t.total_in += u, t.total_out += m, i.total += m, i.wrap & 4 && m && (t.adler = i.check = /*UPDATE_CHECK(state.check, strm.next_out - _out, _out);*/
  i.flags ? crc32_1(i.check, a, m, t.next_out - m) : adler32_1(i.check, a, m, t.next_out - m)), t.data_type = i.bits + (i.last ? 64 : 0) + (i.mode === TYPE ? 128 : 0) + (i.mode === LEN_ || i.mode === COPY_ ? 256 : 0), (u === 0 && m === 0 || e === Z_FINISH$1) && A === Z_OK$1 && (A = Z_BUF_ERROR), A;
}, inflateEnd = (t) => {
  if (inflateStateCheck(t))
    return Z_STREAM_ERROR$1;
  let e = t.state;
  return e.window && (e.window = null), t.state = null, Z_OK$1;
}, inflateGetHeader = (t, e) => {
  if (inflateStateCheck(t))
    return Z_STREAM_ERROR$1;
  const i = t.state;
  return i.wrap & 2 ? (i.head = e, e.done = !1, Z_OK$1) : Z_STREAM_ERROR$1;
}, inflateSetDictionary = (t, e) => {
  const i = e.length;
  let r, a, n;
  return inflateStateCheck(t) || (r = t.state, r.wrap !== 0 && r.mode !== DICT) ? Z_STREAM_ERROR$1 : r.mode === DICT && (a = 1, a = adler32_1(a, e, i, 0), a !== r.check) ? Z_DATA_ERROR$1 : (n = updatewindow(t, e, i, i), n ? (r.mode = MEM, Z_MEM_ERROR$1) : (r.havedict = 1, Z_OK$1));
};
var inflateReset_1 = inflateReset, inflateReset2_1 = inflateReset2, inflateResetKeep_1 = inflateResetKeep, inflateInit_1 = inflateInit, inflateInit2_1 = inflateInit2, inflate_2$1 = inflate$2, inflateEnd_1 = inflateEnd, inflateGetHeader_1 = inflateGetHeader, inflateSetDictionary_1 = inflateSetDictionary, inflateInfo = "pako inflate (from Nodeca project)", inflate_1$2 = {
  inflateReset: inflateReset_1,
  inflateReset2: inflateReset2_1,
  inflateResetKeep: inflateResetKeep_1,
  inflateInit: inflateInit_1,
  inflateInit2: inflateInit2_1,
  inflate: inflate_2$1,
  inflateEnd: inflateEnd_1,
  inflateGetHeader: inflateGetHeader_1,
  inflateSetDictionary: inflateSetDictionary_1,
  inflateInfo
};
function GZheader() {
  this.text = 0, this.time = 0, this.xflags = 0, this.os = 0, this.extra = null, this.extra_len = 0, this.name = "", this.comment = "", this.hcrc = 0, this.done = !1;
}
var gzheader = GZheader;
const toString = Object.prototype.toString, {
  Z_NO_FLUSH,
  Z_FINISH,
  Z_OK,
  Z_STREAM_END,
  Z_NEED_DICT,
  Z_STREAM_ERROR,
  Z_DATA_ERROR,
  Z_MEM_ERROR
} = constants$2;
function Inflate$1(t) {
  this.options = common.assign({
    chunkSize: 1024 * 64,
    windowBits: 15,
    to: ""
  }, t || {});
  const e = this.options;
  e.raw && e.windowBits >= 0 && e.windowBits < 16 && (e.windowBits = -e.windowBits, e.windowBits === 0 && (e.windowBits = -15)), e.windowBits >= 0 && e.windowBits < 16 && !(t && t.windowBits) && (e.windowBits += 32), e.windowBits > 15 && e.windowBits < 48 && (e.windowBits & 15 || (e.windowBits |= 15)), this.err = 0, this.msg = "", this.ended = !1, this.chunks = [], this.strm = new zstream(), this.strm.avail_out = 0;
  let i = inflate_1$2.inflateInit2(
    this.strm,
    e.windowBits
  );
  if (i !== Z_OK)
    throw new Error(messages[i]);
  if (this.header = new gzheader(), inflate_1$2.inflateGetHeader(this.strm, this.header), e.dictionary && (typeof e.dictionary == "string" ? e.dictionary = strings.string2buf(e.dictionary) : toString.call(e.dictionary) === "[object ArrayBuffer]" && (e.dictionary = new Uint8Array(e.dictionary)), e.raw && (i = inflate_1$2.inflateSetDictionary(this.strm, e.dictionary), i !== Z_OK)))
    throw new Error(messages[i]);
}
Inflate$1.prototype.push = function(t, e) {
  const i = this.strm, r = this.options.chunkSize, a = this.options.dictionary;
  let n, l, s;
  if (this.ended) return !1;
  for (e === ~~e ? l = e : l = e === !0 ? Z_FINISH : Z_NO_FLUSH, toString.call(t) === "[object ArrayBuffer]" ? i.input = new Uint8Array(t) : i.input = t, i.next_in = 0, i.avail_in = i.input.length; ; ) {
    for (i.avail_out === 0 && (i.output = new Uint8Array(r), i.next_out = 0, i.avail_out = r), n = inflate_1$2.inflate(i, l), n === Z_NEED_DICT && a && (n = inflate_1$2.inflateSetDictionary(i, a), n === Z_OK ? n = inflate_1$2.inflate(i, l) : n === Z_DATA_ERROR && (n = Z_NEED_DICT)); i.avail_in > 0 && n === Z_STREAM_END && i.state.wrap > 0 && t[i.next_in] !== 0; )
      inflate_1$2.inflateReset(i), n = inflate_1$2.inflate(i, l);
    switch (n) {
      case Z_STREAM_ERROR:
      case Z_DATA_ERROR:
      case Z_NEED_DICT:
      case Z_MEM_ERROR:
        return this.onEnd(n), this.ended = !0, !1;
    }
    if (s = i.avail_out, i.next_out && (i.avail_out === 0 || n === Z_STREAM_END))
      if (this.options.to === "string") {
        let d = strings.utf8border(i.output, i.next_out), h = i.next_out - d, o = strings.buf2string(i.output, d);
        i.next_out = h, i.avail_out = r - h, h && i.output.set(i.output.subarray(d, d + h), 0), this.onData(o);
      } else
        this.onData(i.output.length === i.next_out ? i.output : i.output.subarray(0, i.next_out));
    if (!(n === Z_OK && s === 0)) {
      if (n === Z_STREAM_END)
        return n = inflate_1$2.inflateEnd(this.strm), this.onEnd(n), this.ended = !0, !0;
      if (i.avail_in === 0) break;
    }
  }
  return !0;
};
Inflate$1.prototype.onData = function(t) {
  this.chunks.push(t);
};
Inflate$1.prototype.onEnd = function(t) {
  t === Z_OK && (this.options.to === "string" ? this.result = this.chunks.join("") : this.result = common.flattenChunks(this.chunks)), this.chunks = [], this.err = t, this.msg = this.strm.msg;
};
function inflate$1(t, e) {
  const i = new Inflate$1(e);
  if (i.push(t), i.err) throw i.msg || messages[i.err];
  return i.result;
}
function inflateRaw$1(t, e) {
  return e = e || {}, e.raw = !0, inflate$1(t, e);
}
var Inflate_1$1 = Inflate$1, inflate_2 = inflate$1, inflateRaw_1$1 = inflateRaw$1, ungzip$1 = inflate$1, constants = constants$2, inflate_1$1 = {
  Inflate: Inflate_1$1,
  inflate: inflate_2,
  inflateRaw: inflateRaw_1$1,
  ungzip: ungzip$1,
  constants
};
const { Inflate, inflate, inflateRaw, ungzip } = inflate_1$1;
var ungzip_1 = ungzip;
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var extendStatics = function(t, e) {
  return (extendStatics = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, r) {
    i.__proto__ = r;
  } || function(i, r) {
    for (var a in r) Object.prototype.hasOwnProperty.call(r, a) && (i[a] = r[a]);
  })(t, e);
};
function __extends(t, e) {
  if (typeof e != "function" && e !== null) throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  function i() {
    this.constructor = t;
  }
  extendStatics(t, e), t.prototype = e === null ? Object.create(e) : (i.prototype = e.prototype, new i());
}
var __assign = function() {
  return (__assign = Object.assign || function(t) {
    for (var e, i = 1, r = arguments.length; i < r; i++) for (var a in e = arguments[i]) Object.prototype.hasOwnProperty.call(e, a) && (t[a] = e[a]);
    return t;
  }).apply(this, arguments);
};
function __awaiter(t, e, i, r) {
  return new (i || (i = Promise))(function(a, n) {
    function l(h) {
      try {
        d(r.next(h));
      } catch (o) {
        n(o);
      }
    }
    function s(h) {
      try {
        d(r.throw(h));
      } catch (o) {
        n(o);
      }
    }
    function d(h) {
      var o;
      h.done ? a(h.value) : (o = h.value, o instanceof i ? o : new i(function(u) {
        u(o);
      })).then(l, s);
    }
    d((r = r.apply(t, [])).next());
  });
}
function __generator(t, e) {
  var i, r, a, n, l = { label: 0, sent: function() {
    if (1 & a[0]) throw a[1];
    return a[1];
  }, trys: [], ops: [] };
  return n = { next: s(0), throw: s(1), return: s(2) }, typeof Symbol == "function" && (n[Symbol.iterator] = function() {
    return this;
  }), n;
  function s(d) {
    return function(h) {
      return function(o) {
        if (i) throw new TypeError("Generator is already executing.");
        for (; l; ) try {
          if (i = 1, r && (a = 2 & o[0] ? r.return : o[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, o[1])).done) return a;
          switch (r = 0, a && (o = [2 & o[0], a.value]), o[0]) {
            case 0:
            case 1:
              a = o;
              break;
            case 4:
              return l.label++, { value: o[1], done: !1 };
            case 5:
              l.label++, r = o[1], o = [0];
              continue;
            case 7:
              o = l.ops.pop(), l.trys.pop();
              continue;
            default:
              if (a = l.trys, !((a = a.length > 0 && a[a.length - 1]) || o[0] !== 6 && o[0] !== 2)) {
                l = 0;
                continue;
              }
              if (o[0] === 3 && (!a || o[1] > a[0] && o[1] < a[3])) {
                l.label = o[1];
                break;
              }
              if (o[0] === 6 && l.label < a[1]) {
                l.label = a[1], a = o;
                break;
              }
              if (a && l.label < a[2]) {
                l.label = a[2], l.ops.push(o);
                break;
              }
              a[2] && l.ops.pop(), l.trys.pop();
              continue;
          }
          o = e.call(t, l);
        } catch (u) {
          o = [6, u], r = 0;
        } finally {
          i = a = 0;
        }
        if (5 & o[0]) throw o[1];
        return { value: o[0] ? o[1] : void 0, done: !0 };
      }([d, h]);
    };
  }
}
function createCommonjsModule(t, e) {
  return t(e = { exports: {} }, e.exports), e.exports;
}
var lottie = createCommonjsModule(function(module, exports) {
  typeof navigator < "u" && function(t, e) {
    module.exports = e();
  }(0, function() {
    var svgNS = "http://www.w3.org/2000/svg", locationHref = "", _useWebWorker = !1, initialDefaultFrame = -999999, setWebWorker = function(t) {
      _useWebWorker = !!t;
    }, getWebWorker = function() {
      return _useWebWorker;
    }, setLocationHref = function(t) {
      locationHref = t;
    }, getLocationHref = function() {
      return locationHref;
    };
    function createTag(t) {
      return document.createElement(t);
    }
    function extendPrototype(t, e) {
      var i, r, a = t.length;
      for (i = 0; i < a; i += 1) for (var n in r = t[i].prototype) Object.prototype.hasOwnProperty.call(r, n) && (e.prototype[n] = r[n]);
    }
    function getDescriptor(t, e) {
      return Object.getOwnPropertyDescriptor(t, e);
    }
    function createProxyFunction(t) {
      function e() {
      }
      return e.prototype = t, e;
    }
    var audioControllerFactory = function() {
      function t(e) {
        this.audios = [], this.audioFactory = e, this._volume = 1, this._isMuted = !1;
      }
      return t.prototype = { addAudio: function(e) {
        this.audios.push(e);
      }, pause: function() {
        var e, i = this.audios.length;
        for (e = 0; e < i; e += 1) this.audios[e].pause();
      }, resume: function() {
        var e, i = this.audios.length;
        for (e = 0; e < i; e += 1) this.audios[e].resume();
      }, setRate: function(e) {
        var i, r = this.audios.length;
        for (i = 0; i < r; i += 1) this.audios[i].setRate(e);
      }, createAudio: function(e) {
        return this.audioFactory ? this.audioFactory(e) : window.Howl ? new window.Howl({ src: [e] }) : { isPlaying: !1, play: function() {
          this.isPlaying = !0;
        }, seek: function() {
          this.isPlaying = !1;
        }, playing: function() {
        }, rate: function() {
        }, setVolume: function() {
        } };
      }, setAudioFactory: function(e) {
        this.audioFactory = e;
      }, setVolume: function(e) {
        this._volume = e, this._updateVolume();
      }, mute: function() {
        this._isMuted = !0, this._updateVolume();
      }, unmute: function() {
        this._isMuted = !1, this._updateVolume();
      }, getVolume: function() {
        return this._volume;
      }, _updateVolume: function() {
        var e, i = this.audios.length;
        for (e = 0; e < i; e += 1) this.audios[e].volume(this._volume * (this._isMuted ? 0 : 1));
      } }, function() {
        return new t();
      };
    }(), createTypedArray = /* @__PURE__ */ function() {
      function t(e, i) {
        var r, a = 0, n = [];
        switch (e) {
          case "int16":
          case "uint8c":
            r = 1;
            break;
          default:
            r = 1.1;
        }
        for (a = 0; a < i; a += 1) n.push(r);
        return n;
      }
      return typeof Uint8ClampedArray == "function" && typeof Float32Array == "function" ? function(e, i) {
        return e === "float32" ? new Float32Array(i) : e === "int16" ? new Int16Array(i) : e === "uint8c" ? new Uint8ClampedArray(i) : t(e, i);
      } : t;
    }();
    function createSizedArray(t) {
      return Array.apply(null, { length: t });
    }
    function _typeof$6(t) {
      return (_typeof$6 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(t);
    }
    var subframeEnabled = !0, expressionsPlugin = null, expressionsInterfaces = null, idPrefix$1 = "", isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), bmPow = Math.pow, bmSqrt = Math.sqrt, bmFloor = Math.floor, bmMax = Math.max, bmMin = Math.min, BMMath = {};
    (function() {
      var t, e = ["abs", "acos", "acosh", "asin", "asinh", "atan", "atanh", "atan2", "ceil", "cbrt", "expm1", "clz32", "cos", "cosh", "exp", "floor", "fround", "hypot", "imul", "log", "log1p", "log2", "log10", "max", "min", "pow", "random", "round", "sign", "sin", "sinh", "sqrt", "tan", "tanh", "trunc", "E", "LN10", "LN2", "LOG10E", "LOG2E", "PI", "SQRT1_2", "SQRT2"], i = e.length;
      for (t = 0; t < i; t += 1) BMMath[e[t]] = Math[e[t]];
    })(), BMMath.random = Math.random, BMMath.abs = function(t) {
      if (_typeof$6(t) === "object" && t.length) {
        var e, i = createSizedArray(t.length), r = t.length;
        for (e = 0; e < r; e += 1) i[e] = Math.abs(t[e]);
        return i;
      }
      return Math.abs(t);
    };
    var defaultCurveSegments = 150, degToRads = Math.PI / 180, roundCorner = 0.5519;
    function styleDiv(t) {
      t.style.position = "absolute", t.style.top = 0, t.style.left = 0, t.style.display = "block", t.style.transformOrigin = "0 0", t.style.webkitTransformOrigin = "0 0", t.style.backfaceVisibility = "visible", t.style.webkitBackfaceVisibility = "visible", t.style.transformStyle = "preserve-3d", t.style.webkitTransformStyle = "preserve-3d", t.style.mozTransformStyle = "preserve-3d";
    }
    function BMEnterFrameEvent(t, e, i, r) {
      this.type = t, this.currentTime = e, this.totalTime = i, this.direction = r < 0 ? -1 : 1;
    }
    function BMCompleteEvent(t, e) {
      this.type = t, this.direction = e < 0 ? -1 : 1;
    }
    function BMCompleteLoopEvent(t, e, i, r) {
      this.type = t, this.currentLoop = i, this.totalLoops = e, this.direction = r < 0 ? -1 : 1;
    }
    function BMSegmentStartEvent(t, e, i) {
      this.type = t, this.firstFrame = e, this.totalFrames = i;
    }
    function BMDestroyEvent(t, e) {
      this.type = t, this.target = e;
    }
    function BMRenderFrameErrorEvent(t, e) {
      this.type = "renderFrameError", this.nativeError = t, this.currentTime = e;
    }
    function BMConfigErrorEvent(t) {
      this.type = "configError", this.nativeError = t;
    }
    var createElementID = (_count = 0, function() {
      return idPrefix$1 + "__lottie_element_" + (_count += 1);
    }), _count;
    function HSVtoRGB(t, e, i) {
      var r, a, n, l, s, d, h, o;
      switch (d = i * (1 - e), h = i * (1 - (s = 6 * t - (l = Math.floor(6 * t))) * e), o = i * (1 - (1 - s) * e), l % 6) {
        case 0:
          r = i, a = o, n = d;
          break;
        case 1:
          r = h, a = i, n = d;
          break;
        case 2:
          r = d, a = i, n = o;
          break;
        case 3:
          r = d, a = h, n = i;
          break;
        case 4:
          r = o, a = d, n = i;
          break;
        case 5:
          r = i, a = d, n = h;
      }
      return [r, a, n];
    }
    function RGBtoHSV(t, e, i) {
      var r, a = Math.max(t, e, i), n = Math.min(t, e, i), l = a - n, s = a === 0 ? 0 : l / a, d = a / 255;
      switch (a) {
        case n:
          r = 0;
          break;
        case t:
          r = e - i + l * (e < i ? 6 : 0), r /= 6 * l;
          break;
        case e:
          r = i - t + 2 * l, r /= 6 * l;
          break;
        case i:
          r = t - e + 4 * l, r /= 6 * l;
      }
      return [r, s, d];
    }
    function addSaturationToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[1] += e, i[1] > 1 ? i[1] = 1 : i[1] <= 0 && (i[1] = 0), HSVtoRGB(i[0], i[1], i[2]);
    }
    function addBrightnessToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[2] += e, i[2] > 1 ? i[2] = 1 : i[2] < 0 && (i[2] = 0), HSVtoRGB(i[0], i[1], i[2]);
    }
    function addHueToRGB(t, e) {
      var i = RGBtoHSV(255 * t[0], 255 * t[1], 255 * t[2]);
      return i[0] += e / 360, i[0] > 1 ? i[0] -= 1 : i[0] < 0 && (i[0] += 1), HSVtoRGB(i[0], i[1], i[2]);
    }
    var rgbToHex = function() {
      var t, e, i = [];
      for (t = 0; t < 256; t += 1) e = t.toString(16), i[t] = e.length === 1 ? "0" + e : e;
      return function(r, a, n) {
        return r < 0 && (r = 0), a < 0 && (a = 0), n < 0 && (n = 0), "#" + i[r] + i[a] + i[n];
      };
    }(), setSubframeEnabled = function(t) {
      subframeEnabled = !!t;
    }, getSubframeEnabled = function() {
      return subframeEnabled;
    }, setExpressionsPlugin = function(t) {
      expressionsPlugin = t;
    }, getExpressionsPlugin = function() {
      return expressionsPlugin;
    }, setExpressionInterfaces = function(t) {
      expressionsInterfaces = t;
    }, getExpressionInterfaces = function() {
      return expressionsInterfaces;
    }, setDefaultCurveSegments = function(t) {
      defaultCurveSegments = t;
    }, getDefaultCurveSegments = function() {
      return defaultCurveSegments;
    }, setIdPrefix = function(t) {
      idPrefix$1 = t;
    };
    function createNS(t) {
      return document.createElementNS(svgNS, t);
    }
    function _typeof$5(t) {
      return (_typeof$5 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(t);
    }
    var dataManager = /* @__PURE__ */ function() {
      var t, e, i = 1, r = [], a = { onmessage: function() {
      }, postMessage: function(d) {
        t({ data: d });
      } }, n = { postMessage: function(d) {
        a.onmessage({ data: d });
      } };
      function l() {
        e || ((e = function(d) {
          if (window.Worker && window.Blob && getWebWorker()) {
            var h = new Blob(["var _workerSelf = self; self.onmessage = ", d.toString()], { type: "text/javascript" }), o = URL.createObjectURL(h);
            return new Worker(o);
          }
          return t = d, a;
        }(function(d) {
          if (n.dataManager || (n.dataManager = function() {
            function o(x, A) {
              var w, S, P, F, I, M, L = x.length;
              for (S = 0; S < L; S += 1) if ("ks" in (w = x[S]) && !w.completed) {
                if (w.completed = !0, w.hasMask) {
                  var N = w.masksProperties;
                  for (F = N.length, P = 0; P < F; P += 1) if (N[P].pt.k.i) f(N[P].pt.k);
                  else for (M = N[P].pt.k.length, I = 0; I < M; I += 1) N[P].pt.k[I].s && f(N[P].pt.k[I].s[0]), N[P].pt.k[I].e && f(N[P].pt.k[I].e[0]);
                }
                w.ty === 0 ? (w.layers = u(w.refId, A), o(w.layers, A)) : w.ty === 4 ? m(w.shapes) : w.ty === 5 && T(w);
              }
            }
            function u(x, A) {
              var w = function(S, P) {
                for (var F = 0, I = P.length; F < I; ) {
                  if (P[F].id === S) return P[F];
                  F += 1;
                }
                return null;
              }(x, A);
              return w ? w.layers.__used ? JSON.parse(JSON.stringify(w.layers)) : (w.layers.__used = !0, w.layers) : null;
            }
            function m(x) {
              var A, w, S;
              for (A = x.length - 1; A >= 0; A -= 1) if (x[A].ty === "sh") if (x[A].ks.k.i) f(x[A].ks.k);
              else for (S = x[A].ks.k.length, w = 0; w < S; w += 1) x[A].ks.k[w].s && f(x[A].ks.k[w].s[0]), x[A].ks.k[w].e && f(x[A].ks.k[w].e[0]);
              else x[A].ty === "gr" && m(x[A].it);
            }
            function f(x) {
              var A, w = x.i.length;
              for (A = 0; A < w; A += 1) x.i[A][0] += x.v[A][0], x.i[A][1] += x.v[A][1], x.o[A][0] += x.v[A][0], x.o[A][1] += x.v[A][1];
            }
            function c(x, A) {
              var w = A ? A.split(".") : [100, 100, 100];
              return x[0] > w[0] || !(w[0] > x[0]) && (x[1] > w[1] || !(w[1] > x[1]) && (x[2] > w[2] || !(w[2] > x[2]) && null));
            }
            var g, p = /* @__PURE__ */ function() {
              var x = [4, 4, 14];
              function A(w) {
                var S, P, F, I = w.length;
                for (S = 0; S < I; S += 1) w[S].ty === 5 && (P = w[S], F = void 0, F = P.t.d, P.t.d = { k: [{ s: F, t: 0 }] });
              }
              return function(w) {
                if (c(x, w.v) && (A(w.layers), w.assets)) {
                  var S, P = w.assets.length;
                  for (S = 0; S < P; S += 1) w.assets[S].layers && A(w.assets[S].layers);
                }
              };
            }(), y = (g = [4, 7, 99], function(x) {
              if (x.chars && !c(g, x.v)) {
                var A, w = x.chars.length;
                for (A = 0; A < w; A += 1) {
                  var S = x.chars[A];
                  S.data && S.data.shapes && (m(S.data.shapes), S.data.ip = 0, S.data.op = 99999, S.data.st = 0, S.data.sr = 1, S.data.ks = { p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 } }, x.chars[A].t || (S.data.shapes.push({ ty: "no" }), S.data.shapes[0].it.push({ p: { k: [0, 0], a: 0 }, s: { k: [100, 100], a: 0 }, a: { k: [0, 0], a: 0 }, r: { k: 0, a: 0 }, o: { k: 100, a: 0 }, sk: { k: 0, a: 0 }, sa: { k: 0, a: 0 }, ty: "tr" })));
                }
              }
            }), v = /* @__PURE__ */ function() {
              var x = [5, 7, 15];
              function A(w) {
                var S, P, F, I = w.length;
                for (S = 0; S < I; S += 1) w[S].ty === 5 && (P = w[S], F = void 0, typeof (F = P.t.p).a == "number" && (F.a = { a: 0, k: F.a }), typeof F.p == "number" && (F.p = { a: 0, k: F.p }), typeof F.r == "number" && (F.r = { a: 0, k: F.r }));
              }
              return function(w) {
                if (c(x, w.v) && (A(w.layers), w.assets)) {
                  var S, P = w.assets.length;
                  for (S = 0; S < P; S += 1) w.assets[S].layers && A(w.assets[S].layers);
                }
              };
            }(), _ = /* @__PURE__ */ function() {
              var x = [4, 1, 9];
              function A(S) {
                var P, F, I, M = S.length;
                for (P = 0; P < M; P += 1) if (S[P].ty === "gr") A(S[P].it);
                else if (S[P].ty === "fl" || S[P].ty === "st") if (S[P].c.k && S[P].c.k[0].i) for (I = S[P].c.k.length, F = 0; F < I; F += 1) S[P].c.k[F].s && (S[P].c.k[F].s[0] /= 255, S[P].c.k[F].s[1] /= 255, S[P].c.k[F].s[2] /= 255, S[P].c.k[F].s[3] /= 255), S[P].c.k[F].e && (S[P].c.k[F].e[0] /= 255, S[P].c.k[F].e[1] /= 255, S[P].c.k[F].e[2] /= 255, S[P].c.k[F].e[3] /= 255);
                else S[P].c.k[0] /= 255, S[P].c.k[1] /= 255, S[P].c.k[2] /= 255, S[P].c.k[3] /= 255;
              }
              function w(S) {
                var P, F = S.length;
                for (P = 0; P < F; P += 1) S[P].ty === 4 && A(S[P].shapes);
              }
              return function(S) {
                if (c(x, S.v) && (w(S.layers), S.assets)) {
                  var P, F = S.assets.length;
                  for (P = 0; P < F; P += 1) S.assets[P].layers && w(S.assets[P].layers);
                }
              };
            }(), b = /* @__PURE__ */ function() {
              var x = [4, 4, 18];
              function A(S) {
                var P, F, I;
                for (P = S.length - 1; P >= 0; P -= 1) if (S[P].ty === "sh") if (S[P].ks.k.i) S[P].ks.k.c = S[P].closed;
                else for (I = S[P].ks.k.length, F = 0; F < I; F += 1) S[P].ks.k[F].s && (S[P].ks.k[F].s[0].c = S[P].closed), S[P].ks.k[F].e && (S[P].ks.k[F].e[0].c = S[P].closed);
                else S[P].ty === "gr" && A(S[P].it);
              }
              function w(S) {
                var P, F, I, M, L, N, Y = S.length;
                for (F = 0; F < Y; F += 1) {
                  if ((P = S[F]).hasMask) {
                    var C = P.masksProperties;
                    for (M = C.length, I = 0; I < M; I += 1) if (C[I].pt.k.i) C[I].pt.k.c = C[I].cl;
                    else for (N = C[I].pt.k.length, L = 0; L < N; L += 1) C[I].pt.k[L].s && (C[I].pt.k[L].s[0].c = C[I].cl), C[I].pt.k[L].e && (C[I].pt.k[L].e[0].c = C[I].cl);
                  }
                  P.ty === 4 && A(P.shapes);
                }
              }
              return function(S) {
                if (c(x, S.v) && (w(S.layers), S.assets)) {
                  var P, F = S.assets.length;
                  for (P = 0; P < F; P += 1) S.assets[P].layers && w(S.assets[P].layers);
                }
              };
            }();
            function T(x) {
              x.t.a.length === 0 && x.t.p;
            }
            var k = { completeData: function(x) {
              x.__complete || (_(x), p(x), y(x), v(x), b(x), o(x.layers, x.assets), function(A, w) {
                if (A) {
                  var S = 0, P = A.length;
                  for (S = 0; S < P; S += 1) A[S].t === 1 && (A[S].data.layers = u(A[S].data.refId, w), o(A[S].data.layers, w));
                }
              }(x.chars, x.assets), x.__complete = !0);
            } };
            return k.checkColors = _, k.checkChars = y, k.checkPathProperties = v, k.checkShapes = b, k.completeLayers = o, k;
          }()), n.assetLoader || (n.assetLoader = /* @__PURE__ */ function() {
            function o(u) {
              var m = u.getResponseHeader("content-type");
              return m && u.responseType === "json" && m.indexOf("json") !== -1 || u.response && _typeof$5(u.response) === "object" ? u.response : u.response && typeof u.response == "string" ? JSON.parse(u.response) : u.responseText ? JSON.parse(u.responseText) : null;
            }
            return { load: function(u, m, f, c) {
              var g, p = new XMLHttpRequest();
              try {
                p.responseType = "json";
              } catch {
              }
              p.onreadystatechange = function() {
                if (p.readyState === 4) if (p.status === 200) g = o(p), f(g);
                else try {
                  g = o(p), f(g);
                } catch (y) {
                  c && c(y);
                }
              };
              try {
                p.open(["G", "E", "T"].join(""), u, !0);
              } catch {
                p.open(["G", "E", "T"].join(""), m + "/" + u, !0);
              }
              p.send();
            } };
          }()), d.data.type === "loadAnimation") n.assetLoader.load(d.data.path, d.data.fullPath, function(o) {
            n.dataManager.completeData(o), n.postMessage({ id: d.data.id, payload: o, status: "success" });
          }, function() {
            n.postMessage({ id: d.data.id, status: "error" });
          });
          else if (d.data.type === "complete") {
            var h = d.data.animation;
            n.dataManager.completeData(h), n.postMessage({ id: d.data.id, payload: h, status: "success" });
          } else d.data.type === "loadData" && n.assetLoader.load(d.data.path, d.data.fullPath, function(o) {
            n.postMessage({ id: d.data.id, payload: o, status: "success" });
          }, function() {
            n.postMessage({ id: d.data.id, status: "error" });
          });
        })).onmessage = function(d) {
          var h = d.data, o = h.id, u = r[o];
          r[o] = null, h.status === "success" ? u.onComplete(h.payload) : u.onError && u.onError();
        });
      }
      function s(d, h) {
        var o = "processId_" + (i += 1);
        return r[o] = { onComplete: d, onError: h }, o;
      }
      return { loadAnimation: function(d, h, o) {
        l();
        var u = s(h, o);
        e.postMessage({ type: "loadAnimation", path: d, fullPath: window.location.origin + window.location.pathname, id: u });
      }, loadData: function(d, h, o) {
        l();
        var u = s(h, o);
        e.postMessage({ type: "loadData", path: d, fullPath: window.location.origin + window.location.pathname, id: u });
      }, completeAnimation: function(d, h, o) {
        l();
        var u = s(h, o);
        e.postMessage({ type: "complete", animation: d, id: u });
      } };
    }(), ImagePreloader = function() {
      var t = function() {
        var s = createTag("canvas");
        s.width = 1, s.height = 1;
        var d = s.getContext("2d");
        return d.fillStyle = "rgba(0,0,0,0)", d.fillRect(0, 0, 1, 1), s;
      }();
      function e() {
        this.loadedAssets += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function i() {
        this.loadedFootagesCount += 1, this.loadedAssets === this.totalImages && this.loadedFootagesCount === this.totalFootages && this.imagesLoadedCb && this.imagesLoadedCb(null);
      }
      function r(s, d, h) {
        var o = "";
        if (s.e) o = s.p;
        else if (d) {
          var u = s.p;
          u.indexOf("images/") !== -1 && (u = u.split("/")[1]), o = d + u;
        } else o = h, o += s.u ? s.u : "", o += s.p;
        return o;
      }
      function a(s) {
        var d = 0, h = setInterval((function() {
          (s.getBBox().width || d > 500) && (this._imageLoaded(), clearInterval(h)), d += 1;
        }).bind(this), 50);
      }
      function n(s) {
        var d = { assetData: s }, h = r(s, this.assetsPath, this.path);
        return dataManager.loadData(h, (function(o) {
          d.img = o, this._footageLoaded();
        }).bind(this), (function() {
          d.img = {}, this._footageLoaded();
        }).bind(this)), d;
      }
      function l() {
        this._imageLoaded = e.bind(this), this._footageLoaded = i.bind(this), this.testImageLoaded = a.bind(this), this.createFootageData = n.bind(this), this.assetsPath = "", this.path = "", this.totalImages = 0, this.totalFootages = 0, this.loadedAssets = 0, this.loadedFootagesCount = 0, this.imagesLoadedCb = null, this.images = [];
      }
      return l.prototype = { loadAssets: function(s, d) {
        var h;
        this.imagesLoadedCb = d;
        var o = s.length;
        for (h = 0; h < o; h += 1) s[h].layers || (s[h].t && s[h].t !== "seq" ? s[h].t === 3 && (this.totalFootages += 1, this.images.push(this.createFootageData(s[h]))) : (this.totalImages += 1, this.images.push(this._createImageData(s[h]))));
      }, setAssetsPath: function(s) {
        this.assetsPath = s || "";
      }, setPath: function(s) {
        this.path = s || "";
      }, loadedImages: function() {
        return this.totalImages === this.loadedAssets;
      }, loadedFootages: function() {
        return this.totalFootages === this.loadedFootagesCount;
      }, destroy: function() {
        this.imagesLoadedCb = null, this.images.length = 0;
      }, getAsset: function(s) {
        for (var d = 0, h = this.images.length; d < h; ) {
          if (this.images[d].assetData === s) return this.images[d].img;
          d += 1;
        }
        return null;
      }, createImgData: function(s) {
        var d = r(s, this.assetsPath, this.path), h = createTag("img");
        h.crossOrigin = "anonymous", h.addEventListener("load", this._imageLoaded, !1), h.addEventListener("error", (function() {
          o.img = t, this._imageLoaded();
        }).bind(this), !1), h.src = d;
        var o = { img: h, assetData: s };
        return o;
      }, createImageData: function(s) {
        var d = r(s, this.assetsPath, this.path), h = createNS("image");
        isSafari ? this.testImageLoaded(h) : h.addEventListener("load", this._imageLoaded, !1), h.addEventListener("error", (function() {
          o.img = t, this._imageLoaded();
        }).bind(this), !1), h.setAttributeNS("http://www.w3.org/1999/xlink", "href", d), this._elementHelper.append ? this._elementHelper.append(h) : this._elementHelper.appendChild(h);
        var o = { img: h, assetData: s };
        return o;
      }, imageLoaded: e, footageLoaded: i, setCacheType: function(s, d) {
        s === "svg" ? (this._elementHelper = d, this._createImageData = this.createImageData.bind(this)) : this._createImageData = this.createImgData.bind(this);
      } }, l;
    }();
    function BaseEvent() {
    }
    BaseEvent.prototype = { triggerEvent: function(t, e) {
      if (this._cbs[t]) for (var i = this._cbs[t], r = 0; r < i.length; r += 1) i[r](e);
    }, addEventListener: function(t, e) {
      return this._cbs[t] || (this._cbs[t] = []), this._cbs[t].push(e), (function() {
        this.removeEventListener(t, e);
      }).bind(this);
    }, removeEventListener: function(t, e) {
      if (e) {
        if (this._cbs[t]) {
          for (var i = 0, r = this._cbs[t].length; i < r; ) this._cbs[t][i] === e && (this._cbs[t].splice(i, 1), i -= 1, r -= 1), i += 1;
          this._cbs[t].length || (this._cbs[t] = null);
        }
      } else this._cbs[t] = null;
    } };
    var markerParser = /* @__PURE__ */ function() {
      function t(e) {
        for (var i, r = e.split(`\r
`), a = {}, n = 0, l = 0; l < r.length; l += 1) (i = r[l].split(":")).length === 2 && (a[i[0]] = i[1].trim(), n += 1);
        if (n === 0) throw new Error();
        return a;
      }
      return function(e) {
        for (var i = [], r = 0; r < e.length; r += 1) {
          var a = e[r], n = { time: a.tm, duration: a.dr };
          try {
            n.payload = JSON.parse(e[r].cm);
          } catch {
            try {
              n.payload = t(e[r].cm);
            } catch {
              n.payload = { name: e[r].cm };
            }
          }
          i.push(n);
        }
        return i;
      };
    }(), ProjectInterface = /* @__PURE__ */ function() {
      function t(e) {
        this.compositions.push(e);
      }
      return function() {
        function e(i) {
          for (var r = 0, a = this.compositions.length; r < a; ) {
            if (this.compositions[r].data && this.compositions[r].data.nm === i) return this.compositions[r].prepareFrame && this.compositions[r].data.xt && this.compositions[r].prepareFrame(this.currentFrame), this.compositions[r].compInterface;
            r += 1;
          }
          return null;
        }
        return e.compositions = [], e.currentFrame = 0, e.registerComposition = t, e;
      };
    }(), renderers = {}, registerRenderer = function(t, e) {
      renderers[t] = e;
    };
    function getRenderer(t) {
      return renderers[t];
    }
    function getRegisteredRenderer() {
      if (renderers.canvas) return "canvas";
      for (var t in renderers) if (renderers[t]) return t;
      return "";
    }
    function _typeof$4(t) {
      return (_typeof$4 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(t);
    }
    var AnimationItem = function() {
      this._cbs = [], this.name = "", this.path = "", this.isLoaded = !1, this.currentFrame = 0, this.currentRawFrame = 0, this.firstFrame = 0, this.totalFrames = 0, this.frameRate = 0, this.frameMult = 0, this.playSpeed = 1, this.playDirection = 1, this.playCount = 0, this.animationData = {}, this.assets = [], this.isPaused = !0, this.autoplay = !1, this.loop = !0, this.renderer = null, this.animationID = createElementID(), this.assetsPath = "", this.timeCompleted = 0, this.segmentPos = 0, this.isSubframeEnabled = getSubframeEnabled(), this.segments = [], this._idle = !0, this._completedLoop = !1, this.projectInterface = ProjectInterface(), this.imagePreloader = new ImagePreloader(), this.audioController = audioControllerFactory(), this.markers = [], this.configAnimation = this.configAnimation.bind(this), this.onSetupError = this.onSetupError.bind(this), this.onSegmentComplete = this.onSegmentComplete.bind(this), this.drawnFrameEvent = new BMEnterFrameEvent("drawnFrame", 0, 0, 0), this.expressionsPlugin = getExpressionsPlugin();
    };
    extendPrototype([BaseEvent], AnimationItem), AnimationItem.prototype.setParams = function(t) {
      (t.wrapper || t.container) && (this.wrapper = t.wrapper || t.container);
      var e = "svg";
      t.animType ? e = t.animType : t.renderer && (e = t.renderer);
      var i = getRenderer(e);
      this.renderer = new i(this, t.rendererSettings), this.imagePreloader.setCacheType(e, this.renderer.globalData.defs), this.renderer.setProjectInterface(this.projectInterface), this.animType = e, t.loop === "" || t.loop === null || t.loop === void 0 || t.loop === !0 ? this.loop = !0 : t.loop === !1 ? this.loop = !1 : this.loop = parseInt(t.loop, 10), this.autoplay = !("autoplay" in t) || t.autoplay, this.name = t.name ? t.name : "", this.autoloadSegments = !Object.prototype.hasOwnProperty.call(t, "autoloadSegments") || t.autoloadSegments, this.assetsPath = t.assetsPath, this.initialSegment = t.initialSegment, t.audioFactory && this.audioController.setAudioFactory(t.audioFactory), t.animationData ? this.setupAnimation(t.animationData) : t.path && (t.path.lastIndexOf("\\") !== -1 ? this.path = t.path.substr(0, t.path.lastIndexOf("\\") + 1) : this.path = t.path.substr(0, t.path.lastIndexOf("/") + 1), this.fileName = t.path.substr(t.path.lastIndexOf("/") + 1), this.fileName = this.fileName.substr(0, this.fileName.lastIndexOf(".json")), dataManager.loadAnimation(t.path, this.configAnimation, this.onSetupError));
    }, AnimationItem.prototype.onSetupError = function() {
      this.trigger("data_failed");
    }, AnimationItem.prototype.setupAnimation = function(t) {
      dataManager.completeAnimation(t, this.configAnimation);
    }, AnimationItem.prototype.setData = function(t, e) {
      e && _typeof$4(e) !== "object" && (e = JSON.parse(e));
      var i = { wrapper: t, animationData: e }, r = t.attributes;
      i.path = r.getNamedItem("data-animation-path") ? r.getNamedItem("data-animation-path").value : r.getNamedItem("data-bm-path") ? r.getNamedItem("data-bm-path").value : r.getNamedItem("bm-path") ? r.getNamedItem("bm-path").value : "", i.animType = r.getNamedItem("data-anim-type") ? r.getNamedItem("data-anim-type").value : r.getNamedItem("data-bm-type") ? r.getNamedItem("data-bm-type").value : r.getNamedItem("bm-type") ? r.getNamedItem("bm-type").value : r.getNamedItem("data-bm-renderer") ? r.getNamedItem("data-bm-renderer").value : r.getNamedItem("bm-renderer") ? r.getNamedItem("bm-renderer").value : getRegisteredRenderer() || "canvas";
      var a = r.getNamedItem("data-anim-loop") ? r.getNamedItem("data-anim-loop").value : r.getNamedItem("data-bm-loop") ? r.getNamedItem("data-bm-loop").value : r.getNamedItem("bm-loop") ? r.getNamedItem("bm-loop").value : "";
      a === "false" ? i.loop = !1 : a === "true" ? i.loop = !0 : a !== "" && (i.loop = parseInt(a, 10));
      var n = r.getNamedItem("data-anim-autoplay") ? r.getNamedItem("data-anim-autoplay").value : r.getNamedItem("data-bm-autoplay") ? r.getNamedItem("data-bm-autoplay").value : !r.getNamedItem("bm-autoplay") || r.getNamedItem("bm-autoplay").value;
      i.autoplay = n !== "false", i.name = r.getNamedItem("data-name") ? r.getNamedItem("data-name").value : r.getNamedItem("data-bm-name") ? r.getNamedItem("data-bm-name").value : r.getNamedItem("bm-name") ? r.getNamedItem("bm-name").value : "", (r.getNamedItem("data-anim-prerender") ? r.getNamedItem("data-anim-prerender").value : r.getNamedItem("data-bm-prerender") ? r.getNamedItem("data-bm-prerender").value : r.getNamedItem("bm-prerender") ? r.getNamedItem("bm-prerender").value : "") === "false" && (i.prerender = !1), i.path ? this.setParams(i) : this.trigger("destroy");
    }, AnimationItem.prototype.includeLayers = function(t) {
      t.op > this.animationData.op && (this.animationData.op = t.op, this.totalFrames = Math.floor(t.op - this.animationData.ip));
      var e, i, r = this.animationData.layers, a = r.length, n = t.layers, l = n.length;
      for (i = 0; i < l; i += 1) for (e = 0; e < a; ) {
        if (r[e].id === n[i].id) {
          r[e] = n[i];
          break;
        }
        e += 1;
      }
      if ((t.chars || t.fonts) && (this.renderer.globalData.fontManager.addChars(t.chars), this.renderer.globalData.fontManager.addFonts(t.fonts, this.renderer.globalData.defs)), t.assets) for (a = t.assets.length, e = 0; e < a; e += 1) this.animationData.assets.push(t.assets[e]);
      this.animationData.__complete = !1, dataManager.completeAnimation(this.animationData, this.onSegmentComplete);
    }, AnimationItem.prototype.onSegmentComplete = function(t) {
      this.animationData = t;
      var e = getExpressionsPlugin();
      e && e.initExpressions(this), this.loadNextSegment();
    }, AnimationItem.prototype.loadNextSegment = function() {
      var t = this.animationData.segments;
      if (!t || t.length === 0 || !this.autoloadSegments) return this.trigger("data_ready"), void (this.timeCompleted = this.totalFrames);
      var e = t.shift();
      this.timeCompleted = e.time * this.frameRate;
      var i = this.path + this.fileName + "_" + this.segmentPos + ".json";
      this.segmentPos += 1, dataManager.loadData(i, this.includeLayers.bind(this), (function() {
        this.trigger("data_failed");
      }).bind(this));
    }, AnimationItem.prototype.loadSegments = function() {
      this.animationData.segments || (this.timeCompleted = this.totalFrames), this.loadNextSegment();
    }, AnimationItem.prototype.imagesLoaded = function() {
      this.trigger("loaded_images"), this.checkLoaded();
    }, AnimationItem.prototype.preloadImages = function() {
      this.imagePreloader.setAssetsPath(this.assetsPath), this.imagePreloader.setPath(this.path), this.imagePreloader.loadAssets(this.animationData.assets, this.imagesLoaded.bind(this));
    }, AnimationItem.prototype.configAnimation = function(t) {
      if (this.renderer) try {
        this.animationData = t, this.initialSegment ? (this.totalFrames = Math.floor(this.initialSegment[1] - this.initialSegment[0]), this.firstFrame = Math.round(this.initialSegment[0])) : (this.totalFrames = Math.floor(this.animationData.op - this.animationData.ip), this.firstFrame = Math.round(this.animationData.ip)), this.renderer.configAnimation(t), t.assets || (t.assets = []), this.assets = this.animationData.assets, this.frameRate = this.animationData.fr, this.frameMult = this.animationData.fr / 1e3, this.renderer.searchExtraCompositions(t.assets), this.markers = markerParser(t.markers || []), this.trigger("config_ready"), this.preloadImages(), this.loadSegments(), this.updaFrameModifier(), this.waitForFontsLoaded(), this.isPaused && this.audioController.pause();
      } catch (e) {
        this.triggerConfigError(e);
      }
    }, AnimationItem.prototype.waitForFontsLoaded = function() {
      this.renderer && (this.renderer.globalData.fontManager.isLoaded ? this.checkLoaded() : setTimeout(this.waitForFontsLoaded.bind(this), 20));
    }, AnimationItem.prototype.checkLoaded = function() {
      if (!this.isLoaded && this.renderer.globalData.fontManager.isLoaded && (this.imagePreloader.loadedImages() || this.renderer.rendererType !== "canvas") && this.imagePreloader.loadedFootages()) {
        this.isLoaded = !0;
        var t = getExpressionsPlugin();
        t && t.initExpressions(this), this.renderer.initItems(), setTimeout((function() {
          this.trigger("DOMLoaded");
        }).bind(this), 0), this.gotoFrame(), this.autoplay && this.play();
      }
    }, AnimationItem.prototype.resize = function(t, e) {
      var i = typeof t == "number" ? t : void 0, r = typeof e == "number" ? e : void 0;
      this.renderer.updateContainerSize(i, r);
    }, AnimationItem.prototype.setSubframe = function(t) {
      this.isSubframeEnabled = !!t;
    }, AnimationItem.prototype.gotoFrame = function() {
      this.currentFrame = this.isSubframeEnabled ? this.currentRawFrame : ~~this.currentRawFrame, this.timeCompleted !== this.totalFrames && this.currentFrame > this.timeCompleted && (this.currentFrame = this.timeCompleted), this.trigger("enterFrame"), this.renderFrame(), this.trigger("drawnFrame");
    }, AnimationItem.prototype.renderFrame = function() {
      if (this.isLoaded !== !1 && this.renderer) try {
        this.expressionsPlugin && this.expressionsPlugin.resetFrame(), this.renderer.renderFrame(this.currentFrame + this.firstFrame);
      } catch (t) {
        this.triggerRenderFrameError(t);
      }
    }, AnimationItem.prototype.play = function(t) {
      t && this.name !== t || this.isPaused === !0 && (this.isPaused = !1, this.trigger("_play"), this.audioController.resume(), this._idle && (this._idle = !1, this.trigger("_active")));
    }, AnimationItem.prototype.pause = function(t) {
      t && this.name !== t || this.isPaused === !1 && (this.isPaused = !0, this.trigger("_pause"), this._idle = !0, this.trigger("_idle"), this.audioController.pause());
    }, AnimationItem.prototype.togglePause = function(t) {
      t && this.name !== t || (this.isPaused === !0 ? this.play() : this.pause());
    }, AnimationItem.prototype.stop = function(t) {
      t && this.name !== t || (this.pause(), this.playCount = 0, this._completedLoop = !1, this.setCurrentRawFrameValue(0));
    }, AnimationItem.prototype.getMarkerData = function(t) {
      for (var e, i = 0; i < this.markers.length; i += 1) if ((e = this.markers[i]).payload && e.payload.name === t) return e;
      return null;
    }, AnimationItem.prototype.goToAndStop = function(t, e, i) {
      if (!i || this.name === i) {
        var r = Number(t);
        if (isNaN(r)) {
          var a = this.getMarkerData(t);
          a && this.goToAndStop(a.time, !0);
        } else e ? this.setCurrentRawFrameValue(t) : this.setCurrentRawFrameValue(t * this.frameModifier);
        this.pause();
      }
    }, AnimationItem.prototype.goToAndPlay = function(t, e, i) {
      if (!i || this.name === i) {
        var r = Number(t);
        if (isNaN(r)) {
          var a = this.getMarkerData(t);
          a && (a.duration ? this.playSegments([a.time, a.time + a.duration], !0) : this.goToAndStop(a.time, !0));
        } else this.goToAndStop(r, e, i);
        this.play();
      }
    }, AnimationItem.prototype.advanceTime = function(t) {
      if (this.isPaused !== !0 && this.isLoaded !== !1) {
        var e = this.currentRawFrame + t * this.frameModifier, i = !1;
        e >= this.totalFrames - 1 && this.frameModifier > 0 ? this.loop && this.playCount !== this.loop ? e >= this.totalFrames ? (this.playCount += 1, this.checkSegments(e % this.totalFrames) || (this.setCurrentRawFrameValue(e % this.totalFrames), this._completedLoop = !0, this.trigger("loopComplete"))) : this.setCurrentRawFrameValue(e) : this.checkSegments(e > this.totalFrames ? e % this.totalFrames : 0) || (i = !0, e = this.totalFrames - 1) : e < 0 ? this.checkSegments(e % this.totalFrames) || (!this.loop || this.playCount-- <= 0 && this.loop !== !0 ? (i = !0, e = 0) : (this.setCurrentRawFrameValue(this.totalFrames + e % this.totalFrames), this._completedLoop ? this.trigger("loopComplete") : this._completedLoop = !0)) : this.setCurrentRawFrameValue(e), i && (this.setCurrentRawFrameValue(e), this.pause(), this.trigger("complete"));
      }
    }, AnimationItem.prototype.adjustSegment = function(t, e) {
      this.playCount = 0, t[1] < t[0] ? (this.frameModifier > 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(-1)), this.totalFrames = t[0] - t[1], this.timeCompleted = this.totalFrames, this.firstFrame = t[1], this.setCurrentRawFrameValue(this.totalFrames - 1e-3 - e)) : t[1] > t[0] && (this.frameModifier < 0 && (this.playSpeed < 0 ? this.setSpeed(-this.playSpeed) : this.setDirection(1)), this.totalFrames = t[1] - t[0], this.timeCompleted = this.totalFrames, this.firstFrame = t[0], this.setCurrentRawFrameValue(1e-3 + e)), this.trigger("segmentStart");
    }, AnimationItem.prototype.setSegment = function(t, e) {
      var i = -1;
      this.isPaused && (this.currentRawFrame + this.firstFrame < t ? i = t : this.currentRawFrame + this.firstFrame > e && (i = e - t)), this.firstFrame = t, this.totalFrames = e - t, this.timeCompleted = this.totalFrames, i !== -1 && this.goToAndStop(i, !0);
    }, AnimationItem.prototype.playSegments = function(t, e) {
      if (e && (this.segments.length = 0), _typeof$4(t[0]) === "object") {
        var i, r = t.length;
        for (i = 0; i < r; i += 1) this.segments.push(t[i]);
      } else this.segments.push(t);
      this.segments.length && e && this.adjustSegment(this.segments.shift(), 0), this.isPaused && this.play();
    }, AnimationItem.prototype.resetSegments = function(t) {
      this.segments.length = 0, this.segments.push([this.animationData.ip, this.animationData.op]), t && this.checkSegments(0);
    }, AnimationItem.prototype.checkSegments = function(t) {
      return !!this.segments.length && (this.adjustSegment(this.segments.shift(), t), !0);
    }, AnimationItem.prototype.destroy = function(t) {
      t && this.name !== t || !this.renderer || (this.renderer.destroy(), this.imagePreloader.destroy(), this.trigger("destroy"), this._cbs = null, this.onEnterFrame = null, this.onLoopComplete = null, this.onComplete = null, this.onSegmentStart = null, this.onDestroy = null, this.renderer = null, this.expressionsPlugin = null, this.imagePreloader = null, this.projectInterface = null);
    }, AnimationItem.prototype.setCurrentRawFrameValue = function(t) {
      this.currentRawFrame = t, this.gotoFrame();
    }, AnimationItem.prototype.setSpeed = function(t) {
      this.playSpeed = t, this.updaFrameModifier();
    }, AnimationItem.prototype.setDirection = function(t) {
      this.playDirection = t < 0 ? -1 : 1, this.updaFrameModifier();
    }, AnimationItem.prototype.setLoop = function(t) {
      this.loop = t;
    }, AnimationItem.prototype.setVolume = function(t, e) {
      e && this.name !== e || this.audioController.setVolume(t);
    }, AnimationItem.prototype.getVolume = function() {
      return this.audioController.getVolume();
    }, AnimationItem.prototype.mute = function(t) {
      t && this.name !== t || this.audioController.mute();
    }, AnimationItem.prototype.unmute = function(t) {
      t && this.name !== t || this.audioController.unmute();
    }, AnimationItem.prototype.updaFrameModifier = function() {
      this.frameModifier = this.frameMult * this.playSpeed * this.playDirection, this.audioController.setRate(this.playSpeed * this.playDirection);
    }, AnimationItem.prototype.getPath = function() {
      return this.path;
    }, AnimationItem.prototype.getAssetsPath = function(t) {
      var e = "";
      if (t.e) e = t.p;
      else if (this.assetsPath) {
        var i = t.p;
        i.indexOf("images/") !== -1 && (i = i.split("/")[1]), e = this.assetsPath + i;
      } else e = this.path, e += t.u ? t.u : "", e += t.p;
      return e;
    }, AnimationItem.prototype.getAssetData = function(t) {
      for (var e = 0, i = this.assets.length; e < i; ) {
        if (t === this.assets[e].id) return this.assets[e];
        e += 1;
      }
      return null;
    }, AnimationItem.prototype.hide = function() {
      this.renderer.hide();
    }, AnimationItem.prototype.show = function() {
      this.renderer.show();
    }, AnimationItem.prototype.getDuration = function(t) {
      return t ? this.totalFrames : this.totalFrames / this.frameRate;
    }, AnimationItem.prototype.updateDocumentData = function(t, e, i) {
      try {
        this.renderer.getElementByPath(t).updateDocumentData(e, i);
      } catch {
      }
    }, AnimationItem.prototype.trigger = function(t) {
      if (this._cbs && this._cbs[t]) switch (t) {
        case "enterFrame":
          this.triggerEvent(t, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameModifier));
          break;
        case "drawnFrame":
          this.drawnFrameEvent.currentTime = this.currentFrame, this.drawnFrameEvent.totalTime = this.totalFrames, this.drawnFrameEvent.direction = this.frameModifier, this.triggerEvent(t, this.drawnFrameEvent);
          break;
        case "loopComplete":
          this.triggerEvent(t, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult));
          break;
        case "complete":
          this.triggerEvent(t, new BMCompleteEvent(t, this.frameMult));
          break;
        case "segmentStart":
          this.triggerEvent(t, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames));
          break;
        case "destroy":
          this.triggerEvent(t, new BMDestroyEvent(t, this));
          break;
        default:
          this.triggerEvent(t);
      }
      t === "enterFrame" && this.onEnterFrame && this.onEnterFrame.call(this, new BMEnterFrameEvent(t, this.currentFrame, this.totalFrames, this.frameMult)), t === "loopComplete" && this.onLoopComplete && this.onLoopComplete.call(this, new BMCompleteLoopEvent(t, this.loop, this.playCount, this.frameMult)), t === "complete" && this.onComplete && this.onComplete.call(this, new BMCompleteEvent(t, this.frameMult)), t === "segmentStart" && this.onSegmentStart && this.onSegmentStart.call(this, new BMSegmentStartEvent(t, this.firstFrame, this.totalFrames)), t === "destroy" && this.onDestroy && this.onDestroy.call(this, new BMDestroyEvent(t, this));
    }, AnimationItem.prototype.triggerRenderFrameError = function(t) {
      var e = new BMRenderFrameErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    }, AnimationItem.prototype.triggerConfigError = function(t) {
      var e = new BMConfigErrorEvent(t, this.currentFrame);
      this.triggerEvent("error", e), this.onError && this.onError.call(this, e);
    };
    var animationManager = function() {
      var t = {}, e = [], i = 0, r = 0, a = 0, n = !0, l = !1;
      function s(g) {
        for (var p = 0, y = g.target; p < r; ) e[p].animation === y && (e.splice(p, 1), p -= 1, r -= 1, y.isPaused || o()), p += 1;
      }
      function d(g, p) {
        if (!g) return null;
        for (var y = 0; y < r; ) {
          if (e[y].elem === g && e[y].elem !== null) return e[y].animation;
          y += 1;
        }
        var v = new AnimationItem();
        return u(v, g), v.setData(g, p), v;
      }
      function h() {
        a += 1, c();
      }
      function o() {
        a -= 1;
      }
      function u(g, p) {
        g.addEventListener("destroy", s), g.addEventListener("_active", h), g.addEventListener("_idle", o), e.push({ elem: p, animation: g }), r += 1;
      }
      function m(g) {
        var p, y = g - i;
        for (p = 0; p < r; p += 1) e[p].animation.advanceTime(y);
        i = g, a && !l ? window.requestAnimationFrame(m) : n = !0;
      }
      function f(g) {
        i = g, window.requestAnimationFrame(m);
      }
      function c() {
        !l && a && n && (window.requestAnimationFrame(f), n = !1);
      }
      return t.registerAnimation = d, t.loadAnimation = function(g) {
        var p = new AnimationItem();
        return u(p, null), p.setParams(g), p;
      }, t.setSpeed = function(g, p) {
        var y;
        for (y = 0; y < r; y += 1) e[y].animation.setSpeed(g, p);
      }, t.setDirection = function(g, p) {
        var y;
        for (y = 0; y < r; y += 1) e[y].animation.setDirection(g, p);
      }, t.play = function(g) {
        var p;
        for (p = 0; p < r; p += 1) e[p].animation.play(g);
      }, t.pause = function(g) {
        var p;
        for (p = 0; p < r; p += 1) e[p].animation.pause(g);
      }, t.stop = function(g) {
        var p;
        for (p = 0; p < r; p += 1) e[p].animation.stop(g);
      }, t.togglePause = function(g) {
        var p;
        for (p = 0; p < r; p += 1) e[p].animation.togglePause(g);
      }, t.searchAnimations = function(g, p, y) {
        var v, _ = [].concat([].slice.call(document.getElementsByClassName("lottie")), [].slice.call(document.getElementsByClassName("bodymovin"))), b = _.length;
        for (v = 0; v < b; v += 1) y && _[v].setAttribute("data-bm-type", y), d(_[v], g);
        if (p && b === 0) {
          y || (y = "svg");
          var T = document.getElementsByTagName("body")[0];
          T.innerText = "";
          var k = createTag("div");
          k.style.width = "100%", k.style.height = "100%", k.setAttribute("data-bm-type", y), T.appendChild(k), d(k, g);
        }
      }, t.resize = function() {
        var g;
        for (g = 0; g < r; g += 1) e[g].animation.resize();
      }, t.goToAndStop = function(g, p, y) {
        var v;
        for (v = 0; v < r; v += 1) e[v].animation.goToAndStop(g, p, y);
      }, t.destroy = function(g) {
        var p;
        for (p = r - 1; p >= 0; p -= 1) e[p].animation.destroy(g);
      }, t.freeze = function() {
        l = !0;
      }, t.unfreeze = function() {
        l = !1, c();
      }, t.setVolume = function(g, p) {
        var y;
        for (y = 0; y < r; y += 1) e[y].animation.setVolume(g, p);
      }, t.mute = function(g) {
        var p;
        for (p = 0; p < r; p += 1) e[p].animation.mute(g);
      }, t.unmute = function(g) {
        var p;
        for (p = 0; p < r; p += 1) e[p].animation.unmute(g);
      }, t.getRegisteredAnimations = function() {
        var g, p = e.length, y = [];
        for (g = 0; g < p; g += 1) y.push(e[g].animation);
        return y;
      }, t;
    }(), BezierFactory = function() {
      var t = { getBezierEasing: function(h, o, u, m, f) {
        var c = f || ("bez_" + h + "_" + o + "_" + u + "_" + m).replace(/\./g, "p");
        if (e[c]) return e[c];
        var g = new d([h, o, u, m]);
        return e[c] = g, g;
      } }, e = {}, i = typeof Float32Array == "function";
      function r(h, o) {
        return 1 - 3 * o + 3 * h;
      }
      function a(h, o) {
        return 3 * o - 6 * h;
      }
      function n(h) {
        return 3 * h;
      }
      function l(h, o, u) {
        return ((r(o, u) * h + a(o, u)) * h + n(o)) * h;
      }
      function s(h, o, u) {
        return 3 * r(o, u) * h * h + 2 * a(o, u) * h + n(o);
      }
      function d(h) {
        this._p = h, this._mSampleValues = i ? new Float32Array(11) : new Array(11), this._precomputed = !1, this.get = this.get.bind(this);
      }
      return d.prototype = { get: function(h) {
        var o = this._p[0], u = this._p[1], m = this._p[2], f = this._p[3];
        return this._precomputed || this._precompute(), o === u && m === f ? h : h === 0 ? 0 : h === 1 ? 1 : l(this._getTForX(h), u, f);
      }, _precompute: function() {
        var h = this._p[0], o = this._p[1], u = this._p[2], m = this._p[3];
        this._precomputed = !0, h === o && u === m || this._calcSampleValues();
      }, _calcSampleValues: function() {
        for (var h = this._p[0], o = this._p[2], u = 0; u < 11; ++u) this._mSampleValues[u] = l(0.1 * u, h, o);
      }, _getTForX: function(h) {
        for (var o = this._p[0], u = this._p[2], m = this._mSampleValues, f = 0, c = 1; c !== 10 && m[c] <= h; ++c) f += 0.1;
        var g = f + 0.1 * ((h - m[--c]) / (m[c + 1] - m[c])), p = s(g, o, u);
        return p >= 1e-3 ? function(y, v, _, b) {
          for (var T = 0; T < 4; ++T) {
            var k = s(v, _, b);
            if (k === 0) return v;
            v -= (l(v, _, b) - y) / k;
          }
          return v;
        }(h, g, o, u) : p === 0 ? g : function(y, v, _, b, T) {
          var k, x, A = 0;
          do
            (k = l(x = v + (_ - v) / 2, b, T) - y) > 0 ? _ = x : v = x;
          while (Math.abs(k) > 1e-7 && ++A < 10);
          return x;
        }(h, f, f + 0.1, o, u);
      } }, t;
    }(), pooling = { double: function(t) {
      return t.concat(createSizedArray(t.length));
    } }, poolFactory = function(t, e, i) {
      var r = 0, a = t, n = createSizedArray(a);
      return { newElement: function() {
        return r ? n[r -= 1] : e();
      }, release: function(l) {
        r === a && (n = pooling.double(n), a *= 2), i && i(l), n[r] = l, r += 1;
      } };
    }, bezierLengthPool = poolFactory(8, function() {
      return { addedLength: 0, percents: createTypedArray("float32", getDefaultCurveSegments()), lengths: createTypedArray("float32", getDefaultCurveSegments()) };
    }), segmentsLengthPool = poolFactory(8, function() {
      return { lengths: [], totalLength: 0 };
    }, function(t) {
      var e, i = t.lengths.length;
      for (e = 0; e < i; e += 1) bezierLengthPool.release(t.lengths[e]);
      t.lengths.length = 0;
    });
    function bezFunction() {
      var t = Math;
      function e(h, o, u, m, f, c) {
        var g = h * m + o * f + u * c - f * m - c * h - u * o;
        return g > -1e-3 && g < 1e-3;
      }
      var i = function(h, o, u, m) {
        var f, c, g, p, y, v, _ = getDefaultCurveSegments(), b = 0, T = [], k = [], x = bezierLengthPool.newElement();
        for (g = u.length, f = 0; f < _; f += 1) {
          for (y = f / (_ - 1), v = 0, c = 0; c < g; c += 1) p = bmPow(1 - y, 3) * h[c] + 3 * bmPow(1 - y, 2) * y * u[c] + 3 * (1 - y) * bmPow(y, 2) * m[c] + bmPow(y, 3) * o[c], T[c] = p, k[c] !== null && (v += bmPow(T[c] - k[c], 2)), k[c] = T[c];
          v && (b += v = bmSqrt(v)), x.percents[f] = y, x.lengths[f] = b;
        }
        return x.addedLength = b, x;
      };
      function r(h) {
        this.segmentLength = 0, this.points = new Array(h);
      }
      function a(h, o) {
        this.partialLength = h, this.point = o;
      }
      var n, l = (n = {}, function(h, o, u, m) {
        var f = (h[0] + "_" + h[1] + "_" + o[0] + "_" + o[1] + "_" + u[0] + "_" + u[1] + "_" + m[0] + "_" + m[1]).replace(/\./g, "p");
        if (!n[f]) {
          var c, g, p, y, v, _, b, T = getDefaultCurveSegments(), k = 0, x = null;
          h.length === 2 && (h[0] !== o[0] || h[1] !== o[1]) && e(h[0], h[1], o[0], o[1], h[0] + u[0], h[1] + u[1]) && e(h[0], h[1], o[0], o[1], o[0] + m[0], o[1] + m[1]) && (T = 2);
          var A = new r(T);
          for (p = u.length, c = 0; c < T; c += 1) {
            for (b = createSizedArray(p), v = c / (T - 1), _ = 0, g = 0; g < p; g += 1) y = bmPow(1 - v, 3) * h[g] + 3 * bmPow(1 - v, 2) * v * (h[g] + u[g]) + 3 * (1 - v) * bmPow(v, 2) * (o[g] + m[g]) + bmPow(v, 3) * o[g], b[g] = y, x !== null && (_ += bmPow(b[g] - x[g], 2));
            k += _ = bmSqrt(_), A.points[c] = new a(_, b), x = b;
          }
          A.segmentLength = k, n[f] = A;
        }
        return n[f];
      });
      function s(h, o) {
        var u = o.percents, m = o.lengths, f = u.length, c = bmFloor((f - 1) * h), g = h * o.addedLength, p = 0;
        if (c === f - 1 || c === 0 || g === m[c]) return u[c];
        for (var y = m[c] > g ? -1 : 1, v = !0; v; ) if (m[c] <= g && m[c + 1] > g ? (p = (g - m[c]) / (m[c + 1] - m[c]), v = !1) : c += y, c < 0 || c >= f - 1) {
          if (c === f - 1) return u[c];
          v = !1;
        }
        return u[c] + (u[c + 1] - u[c]) * p;
      }
      var d = createTypedArray("float32", 8);
      return { getSegmentsLength: function(h) {
        var o, u = segmentsLengthPool.newElement(), m = h.c, f = h.v, c = h.o, g = h.i, p = h._length, y = u.lengths, v = 0;
        for (o = 0; o < p - 1; o += 1) y[o] = i(f[o], f[o + 1], c[o], g[o + 1]), v += y[o].addedLength;
        return m && p && (y[o] = i(f[o], f[0], c[o], g[0]), v += y[o].addedLength), u.totalLength = v, u;
      }, getNewSegment: function(h, o, u, m, f, c, g) {
        f < 0 ? f = 0 : f > 1 && (f = 1);
        var p, y = s(f, g), v = s(c = c > 1 ? 1 : c, g), _ = h.length, b = 1 - y, T = 1 - v, k = b * b * b, x = y * b * b * 3, A = y * y * b * 3, w = y * y * y, S = b * b * T, P = y * b * T + b * y * T + b * b * v, F = y * y * T + b * y * v + y * b * v, I = y * y * v, M = b * T * T, L = y * T * T + b * v * T + b * T * v, N = y * v * T + b * v * v + y * T * v, Y = y * v * v, C = T * T * T, D = v * T * T + T * v * T + T * T * v, B = v * v * T + T * v * v + v * T * v, V = v * v * v;
        for (p = 0; p < _; p += 1) d[4 * p] = t.round(1e3 * (k * h[p] + x * u[p] + A * m[p] + w * o[p])) / 1e3, d[4 * p + 1] = t.round(1e3 * (S * h[p] + P * u[p] + F * m[p] + I * o[p])) / 1e3, d[4 * p + 2] = t.round(1e3 * (M * h[p] + L * u[p] + N * m[p] + Y * o[p])) / 1e3, d[4 * p + 3] = t.round(1e3 * (C * h[p] + D * u[p] + B * m[p] + V * o[p])) / 1e3;
        return d;
      }, getPointInSegment: function(h, o, u, m, f, c) {
        var g = s(f, c), p = 1 - g;
        return [t.round(1e3 * (p * p * p * h[0] + (g * p * p + p * g * p + p * p * g) * u[0] + (g * g * p + p * g * g + g * p * g) * m[0] + g * g * g * o[0])) / 1e3, t.round(1e3 * (p * p * p * h[1] + (g * p * p + p * g * p + p * p * g) * u[1] + (g * g * p + p * g * g + g * p * g) * m[1] + g * g * g * o[1])) / 1e3];
      }, buildBezierData: l, pointOnLine2D: e, pointOnLine3D: function(h, o, u, m, f, c, g, p, y) {
        if (u === 0 && c === 0 && y === 0) return e(h, o, m, f, g, p);
        var v, _ = t.sqrt(t.pow(m - h, 2) + t.pow(f - o, 2) + t.pow(c - u, 2)), b = t.sqrt(t.pow(g - h, 2) + t.pow(p - o, 2) + t.pow(y - u, 2)), T = t.sqrt(t.pow(g - m, 2) + t.pow(p - f, 2) + t.pow(y - c, 2));
        return (v = _ > b ? _ > T ? _ - b - T : T - b - _ : T > b ? T - b - _ : b - _ - T) > -1e-4 && v < 1e-4;
      } };
    }
    var bez = bezFunction(), initFrame = initialDefaultFrame, mathAbs = Math.abs;
    function interpolateValue(t, e) {
      var i, r = this.offsetTime;
      this.propType === "multidimensional" && (i = createTypedArray("float32", this.pv.length));
      for (var a, n, l, s, d, h, o, u, m, f = e.lastIndex, c = f, g = this.keyframes.length - 1, p = !0; p; ) {
        if (a = this.keyframes[c], n = this.keyframes[c + 1], c === g - 1 && t >= n.t - r) {
          a.h && (a = n), f = 0;
          break;
        }
        if (n.t - r > t) {
          f = c;
          break;
        }
        c < g - 1 ? c += 1 : (f = 0, p = !1);
      }
      l = this.keyframesMetadata[c] || {};
      var y, v = n.t - r, _ = a.t - r;
      if (a.to) {
        l.bezierData || (l.bezierData = bez.buildBezierData(a.s, n.s || a.e, a.to, a.ti));
        var b = l.bezierData;
        if (t >= v || t < _) {
          var T = t >= v ? b.points.length - 1 : 0;
          for (d = b.points[T].point.length, s = 0; s < d; s += 1) i[s] = b.points[T].point[s];
        } else {
          l.__fnct ? m = l.__fnct : (m = BezierFactory.getBezierEasing(a.o.x, a.o.y, a.i.x, a.i.y, a.n).get, l.__fnct = m), h = m((t - _) / (v - _));
          var k, x = b.segmentLength * h, A = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastAddedLength : 0;
          for (u = e.lastFrame < t && e._lastKeyframeIndex === c ? e._lastPoint : 0, p = !0, o = b.points.length; p; ) {
            if (A += b.points[u].partialLength, x === 0 || h === 0 || u === b.points.length - 1) {
              for (d = b.points[u].point.length, s = 0; s < d; s += 1) i[s] = b.points[u].point[s];
              break;
            }
            if (x >= A && x < A + b.points[u + 1].partialLength) {
              for (k = (x - A) / b.points[u + 1].partialLength, d = b.points[u].point.length, s = 0; s < d; s += 1) i[s] = b.points[u].point[s] + (b.points[u + 1].point[s] - b.points[u].point[s]) * k;
              break;
            }
            u < o - 1 ? u += 1 : p = !1;
          }
          e._lastPoint = u, e._lastAddedLength = A - b.points[u].partialLength, e._lastKeyframeIndex = c;
        }
      } else {
        var w, S, P, F, I;
        if (g = a.s.length, y = n.s || a.e, this.sh && a.h !== 1) t >= v ? (i[0] = y[0], i[1] = y[1], i[2] = y[2]) : t <= _ ? (i[0] = a.s[0], i[1] = a.s[1], i[2] = a.s[2]) : quaternionToEuler(i, slerp(createQuaternion(a.s), createQuaternion(y), (t - _) / (v - _)));
        else for (c = 0; c < g; c += 1) a.h !== 1 && (t >= v ? h = 1 : t < _ ? h = 0 : (a.o.x.constructor === Array ? (l.__fnct || (l.__fnct = []), l.__fnct[c] ? m = l.__fnct[c] : (w = a.o.x[c] === void 0 ? a.o.x[0] : a.o.x[c], S = a.o.y[c] === void 0 ? a.o.y[0] : a.o.y[c], P = a.i.x[c] === void 0 ? a.i.x[0] : a.i.x[c], F = a.i.y[c] === void 0 ? a.i.y[0] : a.i.y[c], m = BezierFactory.getBezierEasing(w, S, P, F).get, l.__fnct[c] = m)) : l.__fnct ? m = l.__fnct : (w = a.o.x, S = a.o.y, P = a.i.x, F = a.i.y, m = BezierFactory.getBezierEasing(w, S, P, F).get, a.keyframeMetadata = m), h = m((t - _) / (v - _)))), y = n.s || a.e, I = a.h === 1 ? a.s[c] : a.s[c] + (y[c] - a.s[c]) * h, this.propType === "multidimensional" ? i[c] = I : i = I;
      }
      return e.lastIndex = f, i;
    }
    function slerp(t, e, i) {
      var r, a, n, l, s, d = [], h = t[0], o = t[1], u = t[2], m = t[3], f = e[0], c = e[1], g = e[2], p = e[3];
      return (a = h * f + o * c + u * g + m * p) < 0 && (a = -a, f = -f, c = -c, g = -g, p = -p), 1 - a > 1e-6 ? (r = Math.acos(a), n = Math.sin(r), l = Math.sin((1 - i) * r) / n, s = Math.sin(i * r) / n) : (l = 1 - i, s = i), d[0] = l * h + s * f, d[1] = l * o + s * c, d[2] = l * u + s * g, d[3] = l * m + s * p, d;
    }
    function quaternionToEuler(t, e) {
      var i = e[0], r = e[1], a = e[2], n = e[3], l = Math.atan2(2 * r * n - 2 * i * a, 1 - 2 * r * r - 2 * a * a), s = Math.asin(2 * i * r + 2 * a * n), d = Math.atan2(2 * i * n - 2 * r * a, 1 - 2 * i * i - 2 * a * a);
      t[0] = l / degToRads, t[1] = s / degToRads, t[2] = d / degToRads;
    }
    function createQuaternion(t) {
      var e = t[0] * degToRads, i = t[1] * degToRads, r = t[2] * degToRads, a = Math.cos(e / 2), n = Math.cos(i / 2), l = Math.cos(r / 2), s = Math.sin(e / 2), d = Math.sin(i / 2), h = Math.sin(r / 2);
      return [s * d * l + a * n * h, s * n * l + a * d * h, a * d * l - s * n * h, a * n * l - s * d * h];
    }
    function getValueAtCurrentTime() {
      var t = this.comp.renderedFrame - this.offsetTime, e = this.keyframes[0].t - this.offsetTime, i = this.keyframes[this.keyframes.length - 1].t - this.offsetTime;
      if (!(t === this._caching.lastFrame || this._caching.lastFrame !== initFrame && (this._caching.lastFrame >= i && t >= i || this._caching.lastFrame < e && t < e))) {
        this._caching.lastFrame >= t && (this._caching._lastKeyframeIndex = -1, this._caching.lastIndex = 0);
        var r = this.interpolateValue(t, this._caching);
        this.pv = r;
      }
      return this._caching.lastFrame = t, this.pv;
    }
    function setVValue(t) {
      var e;
      if (this.propType === "unidimensional") e = t * this.mult, mathAbs(this.v - e) > 1e-5 && (this.v = e, this._mdf = !0);
      else for (var i = 0, r = this.v.length; i < r; ) e = t[i] * this.mult, mathAbs(this.v[i] - e) > 1e-5 && (this.v[i] = e, this._mdf = !0), i += 1;
    }
    function processEffectsSequence() {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length) if (this.lock) this.setVValue(this.pv);
      else {
        var t;
        this.lock = !0, this._mdf = this._isFirstFrame;
        var e = this.effectsSequence.length, i = this.kf ? this.pv : this.data.k;
        for (t = 0; t < e; t += 1) i = this.effectsSequence[t](i);
        this.setVValue(i), this._isFirstFrame = !1, this.lock = !1, this.frameId = this.elem.globalData.frameId;
      }
    }
    function addEffect(t) {
      this.effectsSequence.push(t), this.container.addDynamicProperty(this);
    }
    function ValueProperty(t, e, i, r) {
      this.propType = "unidimensional", this.mult = i || 1, this.data = e, this.v = i ? e.k * i : e.k, this.pv = e.k, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.vel = 0, this.effectsSequence = [], this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function MultiDimensionalProperty(t, e, i, r) {
      var a;
      this.propType = "multidimensional", this.mult = i || 1, this.data = e, this._mdf = !1, this.elem = t, this.container = r, this.comp = t.comp, this.k = !1, this.kf = !1, this.frameId = -1;
      var n = e.k.length;
      for (this.v = createTypedArray("float32", n), this.pv = createTypedArray("float32", n), this.vel = createTypedArray("float32", n), a = 0; a < n; a += 1) this.v[a] = e.k[a] * this.mult, this.pv[a] = e.k[a];
      this._isFirstFrame = !0, this.effectsSequence = [], this.getValue = processEffectsSequence, this.setVValue = setVValue, this.addEffect = addEffect;
    }
    function KeyframedValueProperty(t, e, i, r) {
      this.propType = "unidimensional", this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.frameId = -1, this._caching = { lastFrame: initFrame, lastIndex: 0, value: 0, _lastKeyframeIndex: -1 }, this.k = !0, this.kf = !0, this.data = e, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.v = initFrame, this.pv = initFrame, this._isFirstFrame = !0, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.addEffect = addEffect;
    }
    function KeyframedMultidimensionalProperty(t, e, i, r) {
      var a;
      this.propType = "multidimensional";
      var n, l, s, d, h = e.k.length;
      for (a = 0; a < h - 1; a += 1) e.k[a].to && e.k[a].s && e.k[a + 1] && e.k[a + 1].s && (n = e.k[a].s, l = e.k[a + 1].s, s = e.k[a].to, d = e.k[a].ti, (n.length === 2 && (n[0] !== l[0] || n[1] !== l[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], n[0] + s[0], n[1] + s[1]) && bez.pointOnLine2D(n[0], n[1], l[0], l[1], l[0] + d[0], l[1] + d[1]) || n.length === 3 && (n[0] !== l[0] || n[1] !== l[1] || n[2] !== l[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], n[0] + s[0], n[1] + s[1], n[2] + s[2]) && bez.pointOnLine3D(n[0], n[1], n[2], l[0], l[1], l[2], l[0] + d[0], l[1] + d[1], l[2] + d[2])) && (e.k[a].to = null, e.k[a].ti = null), n[0] === l[0] && n[1] === l[1] && s[0] === 0 && s[1] === 0 && d[0] === 0 && d[1] === 0 && (n.length === 2 || n[2] === l[2] && s[2] === 0 && d[2] === 0) && (e.k[a].to = null, e.k[a].ti = null));
      this.effectsSequence = [getValueAtCurrentTime.bind(this)], this.data = e, this.keyframes = e.k, this.keyframesMetadata = [], this.offsetTime = t.data.st, this.k = !0, this.kf = !0, this._isFirstFrame = !0, this.mult = i || 1, this.elem = t, this.container = r, this.comp = t.comp, this.getValue = processEffectsSequence, this.setVValue = setVValue, this.interpolateValue = interpolateValue, this.frameId = -1;
      var o = e.k[0].s.length;
      for (this.v = createTypedArray("float32", o), this.pv = createTypedArray("float32", o), a = 0; a < o; a += 1) this.v[a] = initFrame, this.pv[a] = initFrame;
      this._caching = { lastFrame: initFrame, lastIndex: 0, value: createTypedArray("float32", o) }, this.addEffect = addEffect;
    }
    var PropertyFactory = { getProp: function(t, e, i, r, a) {
      var n;
      if (e.sid && (e = t.globalData.slotManager.getProp(e)), e.k.length) if (typeof e.k[0] == "number") n = new MultiDimensionalProperty(t, e, r, a);
      else switch (i) {
        case 0:
          n = new KeyframedValueProperty(t, e, r, a);
          break;
        case 1:
          n = new KeyframedMultidimensionalProperty(t, e, r, a);
      }
      else n = new ValueProperty(t, e, r, a);
      return n.effectsSequence.length && a.addDynamicProperty(n), n;
    } };
    function DynamicPropertyContainer() {
    }
    DynamicPropertyContainer.prototype = { addDynamicProperty: function(t) {
      this.dynamicProperties.indexOf(t) === -1 && (this.dynamicProperties.push(t), this.container.addDynamicProperty(this), this._isAnimated = !0);
    }, iterateDynamicProperties: function() {
      var t;
      this._mdf = !1;
      var e = this.dynamicProperties.length;
      for (t = 0; t < e; t += 1) this.dynamicProperties[t].getValue(), this.dynamicProperties[t]._mdf && (this._mdf = !0);
    }, initDynamicPropertyContainer: function(t) {
      this.container = t, this.dynamicProperties = [], this._mdf = !1, this._isAnimated = !1;
    } };
    var pointPool = poolFactory(8, function() {
      return createTypedArray("float32", 2);
    });
    function ShapePath() {
      this.c = !1, this._length = 0, this._maxLength = 8, this.v = createSizedArray(this._maxLength), this.o = createSizedArray(this._maxLength), this.i = createSizedArray(this._maxLength);
    }
    ShapePath.prototype.setPathData = function(t, e) {
      this.c = t, this.setLength(e);
      for (var i = 0; i < e; ) this.v[i] = pointPool.newElement(), this.o[i] = pointPool.newElement(), this.i[i] = pointPool.newElement(), i += 1;
    }, ShapePath.prototype.setLength = function(t) {
      for (; this._maxLength < t; ) this.doubleArrayLength();
      this._length = t;
    }, ShapePath.prototype.doubleArrayLength = function() {
      this.v = this.v.concat(createSizedArray(this._maxLength)), this.i = this.i.concat(createSizedArray(this._maxLength)), this.o = this.o.concat(createSizedArray(this._maxLength)), this._maxLength *= 2;
    }, ShapePath.prototype.setXYAt = function(t, e, i, r, a) {
      var n;
      switch (this._length = Math.max(this._length, r + 1), this._length >= this._maxLength && this.doubleArrayLength(), i) {
        case "v":
          n = this.v;
          break;
        case "i":
          n = this.i;
          break;
        case "o":
          n = this.o;
          break;
        default:
          n = [];
      }
      (!n[r] || n[r] && !a) && (n[r] = pointPool.newElement()), n[r][0] = t, n[r][1] = e;
    }, ShapePath.prototype.setTripleAt = function(t, e, i, r, a, n, l, s) {
      this.setXYAt(t, e, "v", l, s), this.setXYAt(i, r, "o", l, s), this.setXYAt(a, n, "i", l, s);
    }, ShapePath.prototype.reverse = function() {
      var t = new ShapePath();
      t.setPathData(this.c, this._length);
      var e = this.v, i = this.o, r = this.i, a = 0;
      this.c && (t.setTripleAt(e[0][0], e[0][1], r[0][0], r[0][1], i[0][0], i[0][1], 0, !1), a = 1);
      var n, l = this._length - 1, s = this._length;
      for (n = a; n < s; n += 1) t.setTripleAt(e[l][0], e[l][1], r[l][0], r[l][1], i[l][0], i[l][1], n, !1), l -= 1;
      return t;
    }, ShapePath.prototype.length = function() {
      return this._length;
    };
    var shapePool = (factory = poolFactory(4, function() {
      return new ShapePath();
    }, function(t) {
      var e, i = t._length;
      for (e = 0; e < i; e += 1) pointPool.release(t.v[e]), pointPool.release(t.i[e]), pointPool.release(t.o[e]), t.v[e] = null, t.i[e] = null, t.o[e] = null;
      t._length = 0, t.c = !1;
    }), factory.clone = function(t) {
      var e, i = factory.newElement(), r = t._length === void 0 ? t.v.length : t._length;
      for (i.setLength(r), i.c = t.c, e = 0; e < r; e += 1) i.setTripleAt(t.v[e][0], t.v[e][1], t.o[e][0], t.o[e][1], t.i[e][0], t.i[e][1], e);
      return i;
    }, factory), factory;
    function ShapeCollection() {
      this._length = 0, this._maxLength = 4, this.shapes = createSizedArray(this._maxLength);
    }
    ShapeCollection.prototype.addShape = function(t) {
      this._length === this._maxLength && (this.shapes = this.shapes.concat(createSizedArray(this._maxLength)), this._maxLength *= 2), this.shapes[this._length] = t, this._length += 1;
    }, ShapeCollection.prototype.releaseShapes = function() {
      var t;
      for (t = 0; t < this._length; t += 1) shapePool.release(this.shapes[t]);
      this._length = 0;
    };
    var shapeCollectionPool = (ob = { newShapeCollection: function() {
      return _length ? pool[_length -= 1] : new ShapeCollection();
    }, release: function(t) {
      var e, i = t._length;
      for (e = 0; e < i; e += 1) shapePool.release(t.shapes[e]);
      t._length = 0, _length === _maxLength && (pool = pooling.double(pool), _maxLength *= 2), pool[_length] = t, _length += 1;
    } }, _length = 0, _maxLength = 4, pool = createSizedArray(_maxLength), ob), ob, _length, _maxLength, pool, ShapePropertyFactory = function() {
      function t(m, f, c) {
        var g, p, y, v, _, b, T, k, x, A = c.lastIndex, w = this.keyframes;
        if (m < w[0].t - this.offsetTime) g = w[0].s[0], y = !0, A = 0;
        else if (m >= w[w.length - 1].t - this.offsetTime) g = w[w.length - 1].s ? w[w.length - 1].s[0] : w[w.length - 2].e[0], y = !0;
        else {
          for (var S, P, F, I = A, M = w.length - 1, L = !0; L && (S = w[I], !((P = w[I + 1]).t - this.offsetTime > m)); ) I < M - 1 ? I += 1 : L = !1;
          if (F = this.keyframesMetadata[I] || {}, A = I, !(y = S.h === 1)) {
            if (m >= P.t - this.offsetTime) k = 1;
            else if (m < S.t - this.offsetTime) k = 0;
            else {
              var N;
              F.__fnct ? N = F.__fnct : (N = BezierFactory.getBezierEasing(S.o.x, S.o.y, S.i.x, S.i.y).get, F.__fnct = N), k = N((m - (S.t - this.offsetTime)) / (P.t - this.offsetTime - (S.t - this.offsetTime)));
            }
            p = P.s ? P.s[0] : S.e[0];
          }
          g = S.s[0];
        }
        for (b = f._length, T = g.i[0].length, c.lastIndex = A, v = 0; v < b; v += 1) for (_ = 0; _ < T; _ += 1) x = y ? g.i[v][_] : g.i[v][_] + (p.i[v][_] - g.i[v][_]) * k, f.i[v][_] = x, x = y ? g.o[v][_] : g.o[v][_] + (p.o[v][_] - g.o[v][_]) * k, f.o[v][_] = x, x = y ? g.v[v][_] : g.v[v][_] + (p.v[v][_] - g.v[v][_]) * k, f.v[v][_] = x;
      }
      function e() {
        var m = this.comp.renderedFrame - this.offsetTime, f = this.keyframes[0].t - this.offsetTime, c = this.keyframes[this.keyframes.length - 1].t - this.offsetTime, g = this._caching.lastFrame;
        return g !== -999999 && (g < f && m < f || g > c && m > c) || (this._caching.lastIndex = g < m ? this._caching.lastIndex : 0, this.interpolateShape(m, this.pv, this._caching)), this._caching.lastFrame = m, this.pv;
      }
      function i() {
        this.paths = this.localShapeCollection;
      }
      function r(m) {
        (function(f, c) {
          if (f._length !== c._length || f.c !== c.c) return !1;
          var g, p = f._length;
          for (g = 0; g < p; g += 1) if (f.v[g][0] !== c.v[g][0] || f.v[g][1] !== c.v[g][1] || f.o[g][0] !== c.o[g][0] || f.o[g][1] !== c.o[g][1] || f.i[g][0] !== c.i[g][0] || f.i[g][1] !== c.i[g][1]) return !1;
          return !0;
        })(this.v, m) || (this.v = shapePool.clone(m), this.localShapeCollection.releaseShapes(), this.localShapeCollection.addShape(this.v), this._mdf = !0, this.paths = this.localShapeCollection);
      }
      function a() {
        if (this.elem.globalData.frameId !== this.frameId) if (this.effectsSequence.length) if (this.lock) this.setVValue(this.pv);
        else {
          var m, f;
          this.lock = !0, this._mdf = !1, m = this.kf ? this.pv : this.data.ks ? this.data.ks.k : this.data.pt.k;
          var c = this.effectsSequence.length;
          for (f = 0; f < c; f += 1) m = this.effectsSequence[f](m);
          this.setVValue(m), this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
        else this._mdf = !1;
      }
      function n(m, f, c) {
        this.propType = "shape", this.comp = m.comp, this.container = m, this.elem = m, this.data = f, this.k = !1, this.kf = !1, this._mdf = !1;
        var g = c === 3 ? f.pt.k : f.ks.k;
        this.v = shapePool.clone(g), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.reset = i, this.effectsSequence = [];
      }
      function l(m) {
        this.effectsSequence.push(m), this.container.addDynamicProperty(this);
      }
      function s(m, f, c) {
        this.propType = "shape", this.comp = m.comp, this.elem = m, this.container = m, this.offsetTime = m.data.st, this.keyframes = c === 3 ? f.pt.k : f.ks.k, this.keyframesMetadata = [], this.k = !0, this.kf = !0;
        var g = this.keyframes[0].s[0].i.length;
        this.v = shapePool.newElement(), this.v.setPathData(this.keyframes[0].s[0].c, g), this.pv = shapePool.clone(this.v), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.paths.addShape(this.v), this.lastFrame = -999999, this.reset = i, this._caching = { lastFrame: -999999, lastIndex: 0 }, this.effectsSequence = [e.bind(this)];
      }
      n.prototype.interpolateShape = t, n.prototype.getValue = a, n.prototype.setVValue = r, n.prototype.addEffect = l, s.prototype.getValue = a, s.prototype.interpolateShape = t, s.prototype.setVValue = r, s.prototype.addEffect = l;
      var d = function() {
        var m = roundCorner;
        function f(c, g) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 4), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.paths = this.localShapeCollection, this.localShapeCollection.addShape(this.v), this.d = g.d, this.elem = c, this.comp = c.comp, this.frameId = -1, this.initDynamicPropertyContainer(c), this.p = PropertyFactory.getProp(c, g.p, 1, 0, this), this.s = PropertyFactory.getProp(c, g.s, 1, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertEllToPath());
        }
        return f.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertEllToPath());
        }, convertEllToPath: function() {
          var c = this.p.v[0], g = this.p.v[1], p = this.s.v[0] / 2, y = this.s.v[1] / 2, v = this.d !== 3, _ = this.v;
          _.v[0][0] = c, _.v[0][1] = g - y, _.v[1][0] = v ? c + p : c - p, _.v[1][1] = g, _.v[2][0] = c, _.v[2][1] = g + y, _.v[3][0] = v ? c - p : c + p, _.v[3][1] = g, _.i[0][0] = v ? c - p * m : c + p * m, _.i[0][1] = g - y, _.i[1][0] = v ? c + p : c - p, _.i[1][1] = g - y * m, _.i[2][0] = v ? c + p * m : c - p * m, _.i[2][1] = g + y, _.i[3][0] = v ? c - p : c + p, _.i[3][1] = g + y * m, _.o[0][0] = v ? c + p * m : c - p * m, _.o[0][1] = g - y, _.o[1][0] = v ? c + p : c - p, _.o[1][1] = g + y * m, _.o[2][0] = v ? c - p * m : c + p * m, _.o[2][1] = g + y, _.o[3][0] = v ? c - p : c + p, _.o[3][1] = g - y * m;
        } }, extendPrototype([DynamicPropertyContainer], f), f;
      }(), h = function() {
        function m(f, c) {
          this.v = shapePool.newElement(), this.v.setPathData(!0, 0), this.elem = f, this.comp = f.comp, this.data = c, this.frameId = -1, this.d = c.d, this.initDynamicPropertyContainer(f), c.sy === 1 ? (this.ir = PropertyFactory.getProp(f, c.ir, 0, 0, this), this.is = PropertyFactory.getProp(f, c.is, 0, 0.01, this), this.convertToPath = this.convertStarToPath) : this.convertToPath = this.convertPolygonToPath, this.pt = PropertyFactory.getProp(f, c.pt, 0, 0, this), this.p = PropertyFactory.getProp(f, c.p, 1, 0, this), this.r = PropertyFactory.getProp(f, c.r, 0, degToRads, this), this.or = PropertyFactory.getProp(f, c.or, 0, 0, this), this.os = PropertyFactory.getProp(f, c.os, 0, 0.01, this), this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertToPath());
        }
        return m.prototype = { reset: i, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertToPath());
        }, convertStarToPath: function() {
          var f, c, g, p, y = 2 * Math.floor(this.pt.v), v = 2 * Math.PI / y, _ = !0, b = this.or.v, T = this.ir.v, k = this.os.v, x = this.is.v, A = 2 * Math.PI * b / (2 * y), w = 2 * Math.PI * T / (2 * y), S = -Math.PI / 2;
          S += this.r.v;
          var P = this.data.d === 3 ? -1 : 1;
          for (this.v._length = 0, f = 0; f < y; f += 1) {
            g = _ ? k : x, p = _ ? A : w;
            var F = (c = _ ? b : T) * Math.cos(S), I = c * Math.sin(S), M = F === 0 && I === 0 ? 0 : I / Math.sqrt(F * F + I * I), L = F === 0 && I === 0 ? 0 : -F / Math.sqrt(F * F + I * I);
            F += +this.p.v[0], I += +this.p.v[1], this.v.setTripleAt(F, I, F - M * p * g * P, I - L * p * g * P, F + M * p * g * P, I + L * p * g * P, f, !0), _ = !_, S += v * P;
          }
        }, convertPolygonToPath: function() {
          var f, c = Math.floor(this.pt.v), g = 2 * Math.PI / c, p = this.or.v, y = this.os.v, v = 2 * Math.PI * p / (4 * c), _ = 0.5 * -Math.PI, b = this.data.d === 3 ? -1 : 1;
          for (_ += this.r.v, this.v._length = 0, f = 0; f < c; f += 1) {
            var T = p * Math.cos(_), k = p * Math.sin(_), x = T === 0 && k === 0 ? 0 : k / Math.sqrt(T * T + k * k), A = T === 0 && k === 0 ? 0 : -T / Math.sqrt(T * T + k * k);
            T += +this.p.v[0], k += +this.p.v[1], this.v.setTripleAt(T, k, T - x * v * y * b, k - A * v * y * b, T + x * v * y * b, k + A * v * y * b, f, !0), _ += g * b;
          }
          this.paths.length = 0, this.paths[0] = this.v;
        } }, extendPrototype([DynamicPropertyContainer], m), m;
      }(), o = function() {
        function m(f, c) {
          this.v = shapePool.newElement(), this.v.c = !0, this.localShapeCollection = shapeCollectionPool.newShapeCollection(), this.localShapeCollection.addShape(this.v), this.paths = this.localShapeCollection, this.elem = f, this.comp = f.comp, this.frameId = -1, this.d = c.d, this.initDynamicPropertyContainer(f), this.p = PropertyFactory.getProp(f, c.p, 1, 0, this), this.s = PropertyFactory.getProp(f, c.s, 1, 0, this), this.r = PropertyFactory.getProp(f, c.r, 0, 0, this), this.dynamicProperties.length ? this.k = !0 : (this.k = !1, this.convertRectToPath());
        }
        return m.prototype = { convertRectToPath: function() {
          var f = this.p.v[0], c = this.p.v[1], g = this.s.v[0] / 2, p = this.s.v[1] / 2, y = bmMin(g, p, this.r.v), v = y * (1 - roundCorner);
          this.v._length = 0, this.d === 2 || this.d === 1 ? (this.v.setTripleAt(f + g, c - p + y, f + g, c - p + y, f + g, c - p + v, 0, !0), this.v.setTripleAt(f + g, c + p - y, f + g, c + p - v, f + g, c + p - y, 1, !0), y !== 0 ? (this.v.setTripleAt(f + g - y, c + p, f + g - y, c + p, f + g - v, c + p, 2, !0), this.v.setTripleAt(f - g + y, c + p, f - g + v, c + p, f - g + y, c + p, 3, !0), this.v.setTripleAt(f - g, c + p - y, f - g, c + p - y, f - g, c + p - v, 4, !0), this.v.setTripleAt(f - g, c - p + y, f - g, c - p + v, f - g, c - p + y, 5, !0), this.v.setTripleAt(f - g + y, c - p, f - g + y, c - p, f - g + v, c - p, 6, !0), this.v.setTripleAt(f + g - y, c - p, f + g - v, c - p, f + g - y, c - p, 7, !0)) : (this.v.setTripleAt(f - g, c + p, f - g + v, c + p, f - g, c + p, 2), this.v.setTripleAt(f - g, c - p, f - g, c - p + v, f - g, c - p, 3))) : (this.v.setTripleAt(f + g, c - p + y, f + g, c - p + v, f + g, c - p + y, 0, !0), y !== 0 ? (this.v.setTripleAt(f + g - y, c - p, f + g - y, c - p, f + g - v, c - p, 1, !0), this.v.setTripleAt(f - g + y, c - p, f - g + v, c - p, f - g + y, c - p, 2, !0), this.v.setTripleAt(f - g, c - p + y, f - g, c - p + y, f - g, c - p + v, 3, !0), this.v.setTripleAt(f - g, c + p - y, f - g, c + p - v, f - g, c + p - y, 4, !0), this.v.setTripleAt(f - g + y, c + p, f - g + y, c + p, f - g + v, c + p, 5, !0), this.v.setTripleAt(f + g - y, c + p, f + g - v, c + p, f + g - y, c + p, 6, !0), this.v.setTripleAt(f + g, c + p - y, f + g, c + p - y, f + g, c + p - v, 7, !0)) : (this.v.setTripleAt(f - g, c - p, f - g + v, c - p, f - g, c - p, 1, !0), this.v.setTripleAt(f - g, c + p, f - g, c + p - v, f - g, c + p, 2, !0), this.v.setTripleAt(f + g, c + p, f + g - v, c + p, f + g, c + p, 3, !0)));
        }, getValue: function() {
          this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf && this.convertRectToPath());
        }, reset: i }, extendPrototype([DynamicPropertyContainer], m), m;
      }(), u = { getShapeProp: function(m, f, c) {
        var g;
        return c === 3 || c === 4 ? g = (c === 3 ? f.pt : f.ks).k.length ? new s(m, f, c) : new n(m, f, c) : c === 5 ? g = new o(m, f) : c === 6 ? g = new d(m, f) : c === 7 && (g = new h(m, f)), g.k && m.addDynamicProperty(g), g;
      }, getConstructorFunction: function() {
        return n;
      }, getKeyframedConstructorFunction: function() {
        return s;
      } };
      return u;
    }(), Matrix = /* @__PURE__ */ function() {
      var t = Math.cos, e = Math.sin, i = Math.tan, r = Math.round;
      function a() {
        return this.props[0] = 1, this.props[1] = 0, this.props[2] = 0, this.props[3] = 0, this.props[4] = 0, this.props[5] = 1, this.props[6] = 0, this.props[7] = 0, this.props[8] = 0, this.props[9] = 0, this.props[10] = 1, this.props[11] = 0, this.props[12] = 0, this.props[13] = 0, this.props[14] = 0, this.props[15] = 1, this;
      }
      function n(C) {
        if (C === 0) return this;
        var D = t(C), B = e(C);
        return this._t(D, -B, 0, 0, B, D, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function l(C) {
        if (C === 0) return this;
        var D = t(C), B = e(C);
        return this._t(1, 0, 0, 0, 0, D, -B, 0, 0, B, D, 0, 0, 0, 0, 1);
      }
      function s(C) {
        if (C === 0) return this;
        var D = t(C), B = e(C);
        return this._t(D, 0, B, 0, 0, 1, 0, 0, -B, 0, D, 0, 0, 0, 0, 1);
      }
      function d(C) {
        if (C === 0) return this;
        var D = t(C), B = e(C);
        return this._t(D, -B, 0, 0, B, D, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function h(C, D) {
        return this._t(1, D, C, 1, 0, 0);
      }
      function o(C, D) {
        return this.shear(i(C), i(D));
      }
      function u(C, D) {
        var B = t(D), V = e(D);
        return this._t(B, V, 0, 0, -V, B, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(1, 0, 0, 0, i(C), 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)._t(B, -V, 0, 0, V, B, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1);
      }
      function m(C, D, B) {
        return B || B === 0 || (B = 1), C === 1 && D === 1 && B === 1 ? this : this._t(C, 0, 0, 0, 0, D, 0, 0, 0, 0, B, 0, 0, 0, 0, 1);
      }
      function f(C, D, B, V, X, q, J, U, Q, Z, j, it, rt, lt, st, at) {
        return this.props[0] = C, this.props[1] = D, this.props[2] = B, this.props[3] = V, this.props[4] = X, this.props[5] = q, this.props[6] = J, this.props[7] = U, this.props[8] = Q, this.props[9] = Z, this.props[10] = j, this.props[11] = it, this.props[12] = rt, this.props[13] = lt, this.props[14] = st, this.props[15] = at, this;
      }
      function c(C, D, B) {
        return B = B || 0, C !== 0 || D !== 0 || B !== 0 ? this._t(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, C, D, B, 1) : this;
      }
      function g(C, D, B, V, X, q, J, U, Q, Z, j, it, rt, lt, st, at) {
        var z = this.props;
        if (C === 1 && D === 0 && B === 0 && V === 0 && X === 0 && q === 1 && J === 0 && U === 0 && Q === 0 && Z === 0 && j === 1 && it === 0) return z[12] = z[12] * C + z[15] * rt, z[13] = z[13] * q + z[15] * lt, z[14] = z[14] * j + z[15] * st, z[15] *= at, this._identityCalculated = !1, this;
        var yt = z[0], ut = z[1], vt = z[2], ct = z[3], ht = z[4], nt = z[5], _t = z[6], mt = z[7], dt = z[8], bt = z[9], pt = z[10], Et = z[11], St = z[12], Ct = z[13], xt = z[14], Pt = z[15];
        return z[0] = yt * C + ut * X + vt * Q + ct * rt, z[1] = yt * D + ut * q + vt * Z + ct * lt, z[2] = yt * B + ut * J + vt * j + ct * st, z[3] = yt * V + ut * U + vt * it + ct * at, z[4] = ht * C + nt * X + _t * Q + mt * rt, z[5] = ht * D + nt * q + _t * Z + mt * lt, z[6] = ht * B + nt * J + _t * j + mt * st, z[7] = ht * V + nt * U + _t * it + mt * at, z[8] = dt * C + bt * X + pt * Q + Et * rt, z[9] = dt * D + bt * q + pt * Z + Et * lt, z[10] = dt * B + bt * J + pt * j + Et * st, z[11] = dt * V + bt * U + pt * it + Et * at, z[12] = St * C + Ct * X + xt * Q + Pt * rt, z[13] = St * D + Ct * q + xt * Z + Pt * lt, z[14] = St * B + Ct * J + xt * j + Pt * st, z[15] = St * V + Ct * U + xt * it + Pt * at, this._identityCalculated = !1, this;
      }
      function p(C) {
        var D = C.props;
        return this.transform(D[0], D[1], D[2], D[3], D[4], D[5], D[6], D[7], D[8], D[9], D[10], D[11], D[12], D[13], D[14], D[15]);
      }
      function y() {
        return this._identityCalculated || (this._identity = !(this.props[0] !== 1 || this.props[1] !== 0 || this.props[2] !== 0 || this.props[3] !== 0 || this.props[4] !== 0 || this.props[5] !== 1 || this.props[6] !== 0 || this.props[7] !== 0 || this.props[8] !== 0 || this.props[9] !== 0 || this.props[10] !== 1 || this.props[11] !== 0 || this.props[12] !== 0 || this.props[13] !== 0 || this.props[14] !== 0 || this.props[15] !== 1), this._identityCalculated = !0), this._identity;
      }
      function v(C) {
        for (var D = 0; D < 16; ) {
          if (C.props[D] !== this.props[D]) return !1;
          D += 1;
        }
        return !0;
      }
      function _(C) {
        var D;
        for (D = 0; D < 16; D += 1) C.props[D] = this.props[D];
        return C;
      }
      function b(C) {
        var D;
        for (D = 0; D < 16; D += 1) this.props[D] = C[D];
      }
      function T(C, D, B) {
        return { x: C * this.props[0] + D * this.props[4] + B * this.props[8] + this.props[12], y: C * this.props[1] + D * this.props[5] + B * this.props[9] + this.props[13], z: C * this.props[2] + D * this.props[6] + B * this.props[10] + this.props[14] };
      }
      function k(C, D, B) {
        return C * this.props[0] + D * this.props[4] + B * this.props[8] + this.props[12];
      }
      function x(C, D, B) {
        return C * this.props[1] + D * this.props[5] + B * this.props[9] + this.props[13];
      }
      function A(C, D, B) {
        return C * this.props[2] + D * this.props[6] + B * this.props[10] + this.props[14];
      }
      function w() {
        var C = this.props[0] * this.props[5] - this.props[1] * this.props[4], D = this.props[5] / C, B = -this.props[1] / C, V = -this.props[4] / C, X = this.props[0] / C, q = (this.props[4] * this.props[13] - this.props[5] * this.props[12]) / C, J = -(this.props[0] * this.props[13] - this.props[1] * this.props[12]) / C, U = new Matrix();
        return U.props[0] = D, U.props[1] = B, U.props[4] = V, U.props[5] = X, U.props[12] = q, U.props[13] = J, U;
      }
      function S(C) {
        return this.getInverseMatrix().applyToPointArray(C[0], C[1], C[2] || 0);
      }
      function P(C) {
        var D, B = C.length, V = [];
        for (D = 0; D < B; D += 1) V[D] = S(C[D]);
        return V;
      }
      function F(C, D, B) {
        var V = createTypedArray("float32", 6);
        if (this.isIdentity()) V[0] = C[0], V[1] = C[1], V[2] = D[0], V[3] = D[1], V[4] = B[0], V[5] = B[1];
        else {
          var X = this.props[0], q = this.props[1], J = this.props[4], U = this.props[5], Q = this.props[12], Z = this.props[13];
          V[0] = C[0] * X + C[1] * J + Q, V[1] = C[0] * q + C[1] * U + Z, V[2] = D[0] * X + D[1] * J + Q, V[3] = D[0] * q + D[1] * U + Z, V[4] = B[0] * X + B[1] * J + Q, V[5] = B[0] * q + B[1] * U + Z;
        }
        return V;
      }
      function I(C, D, B) {
        return this.isIdentity() ? [C, D, B] : [C * this.props[0] + D * this.props[4] + B * this.props[8] + this.props[12], C * this.props[1] + D * this.props[5] + B * this.props[9] + this.props[13], C * this.props[2] + D * this.props[6] + B * this.props[10] + this.props[14]];
      }
      function M(C, D) {
        if (this.isIdentity()) return C + "," + D;
        var B = this.props;
        return Math.round(100 * (C * B[0] + D * B[4] + B[12])) / 100 + "," + Math.round(100 * (C * B[1] + D * B[5] + B[13])) / 100;
      }
      function L() {
        for (var C = 0, D = this.props, B = "matrix3d("; C < 16; ) B += r(1e4 * D[C]) / 1e4, B += C === 15 ? ")" : ",", C += 1;
        return B;
      }
      function N(C) {
        return C < 1e-6 && C > 0 || C > -1e-6 && C < 0 ? r(1e4 * C) / 1e4 : C;
      }
      function Y() {
        var C = this.props;
        return "matrix(" + N(C[0]) + "," + N(C[1]) + "," + N(C[4]) + "," + N(C[5]) + "," + N(C[12]) + "," + N(C[13]) + ")";
      }
      return function() {
        this.reset = a, this.rotate = n, this.rotateX = l, this.rotateY = s, this.rotateZ = d, this.skew = o, this.skewFromAxis = u, this.shear = h, this.scale = m, this.setTransform = f, this.translate = c, this.transform = g, this.multiply = p, this.applyToPoint = T, this.applyToX = k, this.applyToY = x, this.applyToZ = A, this.applyToPointArray = I, this.applyToTriplePoints = F, this.applyToPointStringified = M, this.toCSS = L, this.to2dCSS = Y, this.clone = _, this.cloneFromProps = b, this.equals = v, this.inversePoints = P, this.inversePoint = S, this.getInverseMatrix = w, this._t = this.transform, this.isIdentity = y, this._identity = !0, this._identityCalculated = !1, this.props = createTypedArray("float32", 16), this.reset();
      };
    }();
    function _typeof$3(t) {
      return (_typeof$3 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(t);
    }
    var lottie = {};
    function setLocation(t) {
      setLocationHref(t);
    }
    function searchAnimations() {
      animationManager.searchAnimations();
    }
    function setSubframeRendering(t) {
      setSubframeEnabled(t);
    }
    function setPrefix(t) {
      setIdPrefix(t);
    }
    function loadAnimation(t) {
      return animationManager.loadAnimation(t);
    }
    function setQuality(t) {
      if (typeof t == "string") switch (t) {
        case "high":
          setDefaultCurveSegments(200);
          break;
        default:
        case "medium":
          setDefaultCurveSegments(50);
          break;
        case "low":
          setDefaultCurveSegments(10);
      }
      else !isNaN(t) && t > 1 && setDefaultCurveSegments(t);
    }
    function inBrowser() {
      return typeof navigator < "u";
    }
    function installPlugin(t, e) {
      t === "expressions" && setExpressionsPlugin(e);
    }
    function getFactory(t) {
      switch (t) {
        case "propertyFactory":
          return PropertyFactory;
        case "shapePropertyFactory":
          return ShapePropertyFactory;
        case "matrix":
          return Matrix;
        default:
          return null;
      }
    }
    function checkReady() {
      document.readyState === "complete" && (clearInterval(readyStateCheckInterval), searchAnimations());
    }
    function getQueryVariable(t) {
      for (var e = queryString.split("&"), i = 0; i < e.length; i += 1) {
        var r = e[i].split("=");
        if (decodeURIComponent(r[0]) == t) return decodeURIComponent(r[1]);
      }
      return null;
    }
    lottie.play = animationManager.play, lottie.pause = animationManager.pause, lottie.setLocationHref = setLocation, lottie.togglePause = animationManager.togglePause, lottie.setSpeed = animationManager.setSpeed, lottie.setDirection = animationManager.setDirection, lottie.stop = animationManager.stop, lottie.searchAnimations = searchAnimations, lottie.registerAnimation = animationManager.registerAnimation, lottie.loadAnimation = loadAnimation, lottie.setSubframeRendering = setSubframeRendering, lottie.resize = animationManager.resize, lottie.goToAndStop = animationManager.goToAndStop, lottie.destroy = animationManager.destroy, lottie.setQuality = setQuality, lottie.inBrowser = inBrowser, lottie.installPlugin = installPlugin, lottie.freeze = animationManager.freeze, lottie.unfreeze = animationManager.unfreeze, lottie.setVolume = animationManager.setVolume, lottie.mute = animationManager.mute, lottie.unmute = animationManager.unmute, lottie.getRegisteredAnimations = animationManager.getRegisteredAnimations, lottie.useWebWorker = setWebWorker, lottie.setIDPrefix = setPrefix, lottie.__getFactory = getFactory, lottie.version = "5.12.2";
    var queryString = "";
    {
      var scripts = document.getElementsByTagName("script"), index = scripts.length - 1, myScript = scripts[index] || { src: "" };
      queryString = myScript.src ? myScript.src.replace(/^[^\?]+\??/, "") : "", getQueryVariable("renderer");
    }
    var readyStateCheckInterval = setInterval(checkReady, 100);
    try {
      _typeof$3(exports) !== "object" && (window.bodymovin = lottie);
    } catch (t) {
    }
    var ShapeModifiers = function() {
      var t = {}, e = {};
      return t.registerModifier = function(i, r) {
        e[i] || (e[i] = r);
      }, t.getModifier = function(i, r, a) {
        return new e[i](r, a);
      }, t;
    }();
    function ShapeModifier() {
    }
    function TrimModifier() {
    }
    function PuckerAndBloatModifier() {
    }
    ShapeModifier.prototype.initModifierProperties = function() {
    }, ShapeModifier.prototype.addShapeToModifier = function() {
    }, ShapeModifier.prototype.addShape = function(t) {
      if (!this.closed) {
        t.sh.container.addDynamicProperty(t.sh);
        var e = { shape: t.sh, data: t, localShapeCollection: shapeCollectionPool.newShapeCollection() };
        this.shapes.push(e), this.addShapeToModifier(e), this._isAnimated && t.setAsAnimated();
      }
    }, ShapeModifier.prototype.init = function(t, e) {
      this.shapes = [], this.elem = t, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e), this.frameId = initialDefaultFrame, this.closed = !1, this.k = !1, this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, ShapeModifier.prototype.processKeys = function() {
      this.elem.globalData.frameId !== this.frameId && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties());
    }, extendPrototype([DynamicPropertyContainer], ShapeModifier), extendPrototype([ShapeModifier], TrimModifier), TrimModifier.prototype.initModifierProperties = function(t, e) {
      this.s = PropertyFactory.getProp(t, e.s, 0, 0.01, this), this.e = PropertyFactory.getProp(t, e.e, 0, 0.01, this), this.o = PropertyFactory.getProp(t, e.o, 0, 0, this), this.sValue = 0, this.eValue = 0, this.getValue = this.processKeys, this.m = e.m, this._isAnimated = !!this.s.effectsSequence.length || !!this.e.effectsSequence.length || !!this.o.effectsSequence.length;
    }, TrimModifier.prototype.addShapeToModifier = function(t) {
      t.pathsData = [];
    }, TrimModifier.prototype.calculateShapeEdges = function(t, e, i, r, a) {
      var n = [];
      e <= 1 ? n.push({ s: t, e }) : t >= 1 ? n.push({ s: t - 1, e: e - 1 }) : (n.push({ s: t, e: 1 }), n.push({ s: 0, e: e - 1 }));
      var l, s, d = [], h = n.length;
      for (l = 0; l < h; l += 1) {
        var o, u;
        (s = n[l]).e * a < r || s.s * a > r + i || (o = s.s * a <= r ? 0 : (s.s * a - r) / i, u = s.e * a >= r + i ? 1 : (s.e * a - r) / i, d.push([o, u]));
      }
      return d.length || d.push([0, 0]), d;
    }, TrimModifier.prototype.releasePathsData = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) segmentsLengthPool.release(t[e]);
      return t.length = 0, t;
    }, TrimModifier.prototype.processShapes = function(t) {
      var e, i, r, a;
      if (this._mdf || t) {
        var n = this.o.v % 360 / 360;
        if (n < 0 && (n += 1), (e = this.s.v > 1 ? 1 + n : this.s.v < 0 ? 0 + n : this.s.v + n) > (i = this.e.v > 1 ? 1 + n : this.e.v < 0 ? 0 + n : this.e.v + n)) {
          var l = e;
          e = i, i = l;
        }
        e = 1e-4 * Math.round(1e4 * e), i = 1e-4 * Math.round(1e4 * i), this.sValue = e, this.eValue = i;
      } else e = this.sValue, i = this.eValue;
      var s, d, h, o, u, m = this.shapes.length, f = 0;
      if (i === e) for (a = 0; a < m; a += 1) this.shapes[a].localShapeCollection.releaseShapes(), this.shapes[a].shape._mdf = !0, this.shapes[a].shape.paths = this.shapes[a].localShapeCollection, this._mdf && (this.shapes[a].pathsData.length = 0);
      else if (i === 1 && e === 0 || i === 0 && e === 1) {
        if (this._mdf) for (a = 0; a < m; a += 1) this.shapes[a].pathsData.length = 0, this.shapes[a].shape._mdf = !0;
      } else {
        var c, g, p = [];
        for (a = 0; a < m; a += 1) if ((c = this.shapes[a]).shape._mdf || this._mdf || t || this.m === 2) {
          if (d = (r = c.shape.paths)._length, u = 0, !c.shape._mdf && c.pathsData.length) u = c.totalShapeLength;
          else {
            for (h = this.releasePathsData(c.pathsData), s = 0; s < d; s += 1) o = bez.getSegmentsLength(r.shapes[s]), h.push(o), u += o.totalLength;
            c.totalShapeLength = u, c.pathsData = h;
          }
          f += u, c.shape._mdf = !0;
        } else c.shape.paths = c.localShapeCollection;
        var y, v = e, _ = i, b = 0;
        for (a = m - 1; a >= 0; a -= 1) if ((c = this.shapes[a]).shape._mdf) {
          for ((g = c.localShapeCollection).releaseShapes(), this.m === 2 && m > 1 ? (y = this.calculateShapeEdges(e, i, c.totalShapeLength, b, f), b += c.totalShapeLength) : y = [[v, _]], d = y.length, s = 0; s < d; s += 1) {
            v = y[s][0], _ = y[s][1], p.length = 0, _ <= 1 ? p.push({ s: c.totalShapeLength * v, e: c.totalShapeLength * _ }) : v >= 1 ? p.push({ s: c.totalShapeLength * (v - 1), e: c.totalShapeLength * (_ - 1) }) : (p.push({ s: c.totalShapeLength * v, e: c.totalShapeLength }), p.push({ s: 0, e: c.totalShapeLength * (_ - 1) }));
            var T = this.addShapes(c, p[0]);
            if (p[0].s !== p[0].e) {
              if (p.length > 1) if (c.shape.paths.shapes[c.shape.paths._length - 1].c) {
                var k = T.pop();
                this.addPaths(T, g), T = this.addShapes(c, p[1], k);
              } else this.addPaths(T, g), T = this.addShapes(c, p[1]);
              this.addPaths(T, g);
            }
          }
          c.shape.paths = g;
        }
      }
    }, TrimModifier.prototype.addPaths = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) e.addShape(t[i]);
    }, TrimModifier.prototype.addSegment = function(t, e, i, r, a, n, l) {
      a.setXYAt(e[0], e[1], "o", n), a.setXYAt(i[0], i[1], "i", n + 1), l && a.setXYAt(t[0], t[1], "v", n), a.setXYAt(r[0], r[1], "v", n + 1);
    }, TrimModifier.prototype.addSegmentFromArray = function(t, e, i, r) {
      e.setXYAt(t[1], t[5], "o", i), e.setXYAt(t[2], t[6], "i", i + 1), r && e.setXYAt(t[0], t[4], "v", i), e.setXYAt(t[3], t[7], "v", i + 1);
    }, TrimModifier.prototype.addShapes = function(t, e, i) {
      var r, a, n, l, s, d, h, o, u = t.pathsData, m = t.shape.paths.shapes, f = t.shape.paths._length, c = 0, g = [], p = !0;
      for (i ? (s = i._length, o = i._length) : (i = shapePool.newElement(), s = 0, o = 0), g.push(i), r = 0; r < f; r += 1) {
        for (d = u[r].lengths, i.c = m[r].c, n = m[r].c ? d.length : d.length + 1, a = 1; a < n; a += 1) if (c + (l = d[a - 1]).addedLength < e.s) c += l.addedLength, i.c = !1;
        else {
          if (c > e.e) {
            i.c = !1;
            break;
          }
          e.s <= c && e.e >= c + l.addedLength ? (this.addSegment(m[r].v[a - 1], m[r].o[a - 1], m[r].i[a], m[r].v[a], i, s, p), p = !1) : (h = bez.getNewSegment(m[r].v[a - 1], m[r].v[a], m[r].o[a - 1], m[r].i[a], (e.s - c) / l.addedLength, (e.e - c) / l.addedLength, d[a - 1]), this.addSegmentFromArray(h, i, s, p), p = !1, i.c = !1), c += l.addedLength, s += 1;
        }
        if (m[r].c && d.length) {
          if (l = d[a - 1], c <= e.e) {
            var y = d[a - 1].addedLength;
            e.s <= c && e.e >= c + y ? (this.addSegment(m[r].v[a - 1], m[r].o[a - 1], m[r].i[0], m[r].v[0], i, s, p), p = !1) : (h = bez.getNewSegment(m[r].v[a - 1], m[r].v[0], m[r].o[a - 1], m[r].i[0], (e.s - c) / y, (e.e - c) / y, d[a - 1]), this.addSegmentFromArray(h, i, s, p), p = !1, i.c = !1);
          } else i.c = !1;
          c += l.addedLength, s += 1;
        }
        if (i._length && (i.setXYAt(i.v[o][0], i.v[o][1], "i", o), i.setXYAt(i.v[i._length - 1][0], i.v[i._length - 1][1], "o", i._length - 1)), c > e.e) break;
        r < f - 1 && (i = shapePool.newElement(), p = !0, g.push(i), s = 0);
      }
      return g;
    }, extendPrototype([ShapeModifier], PuckerAndBloatModifier), PuckerAndBloatModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this._isAnimated = !!this.amount.effectsSequence.length;
    }, PuckerAndBloatModifier.prototype.processPath = function(t, e) {
      var i = e / 100, r = [0, 0], a = t._length, n = 0;
      for (n = 0; n < a; n += 1) r[0] += t.v[n][0], r[1] += t.v[n][1];
      r[0] /= a, r[1] /= a;
      var l, s, d, h, o, u, m = shapePool.newElement();
      for (m.c = t.c, n = 0; n < a; n += 1) l = t.v[n][0] + (r[0] - t.v[n][0]) * i, s = t.v[n][1] + (r[1] - t.v[n][1]) * i, d = t.o[n][0] + (r[0] - t.o[n][0]) * -i, h = t.o[n][1] + (r[1] - t.o[n][1]) * -i, o = t.i[n][0] + (r[0] - t.i[n][0]) * -i, u = t.i[n][1] + (r[1] - t.i[n][1]) * -i, m.setTripleAt(l, s, d, h, o, u, n);
      return m;
    }, PuckerAndBloatModifier.prototype.processShapes = function(t) {
      var e, i, r, a, n, l, s = this.shapes.length, d = this.amount.v;
      if (d !== 0) for (i = 0; i < s; i += 1) {
        if (l = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t) for (l.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, a = n.shape.paths._length, r = 0; r < a; r += 1) l.addShape(this.processPath(e[r], d));
        n.shape.paths = n.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var TransformPropertyFactory = function() {
      var t = [0, 0];
      function e(i, r, a) {
        if (this.elem = i, this.frameId = -1, this.propType = "transform", this.data = r, this.v = new Matrix(), this.pre = new Matrix(), this.appliedTransformations = 0, this.initDynamicPropertyContainer(a || i), r.p && r.p.s ? (this.px = PropertyFactory.getProp(i, r.p.x, 0, 0, this), this.py = PropertyFactory.getProp(i, r.p.y, 0, 0, this), r.p.z && (this.pz = PropertyFactory.getProp(i, r.p.z, 0, 0, this))) : this.p = PropertyFactory.getProp(i, r.p || { k: [0, 0, 0] }, 1, 0, this), r.rx) {
          if (this.rx = PropertyFactory.getProp(i, r.rx, 0, degToRads, this), this.ry = PropertyFactory.getProp(i, r.ry, 0, degToRads, this), this.rz = PropertyFactory.getProp(i, r.rz, 0, degToRads, this), r.or.k[0].ti) {
            var n, l = r.or.k.length;
            for (n = 0; n < l; n += 1) r.or.k[n].to = null, r.or.k[n].ti = null;
          }
          this.or = PropertyFactory.getProp(i, r.or, 1, degToRads, this), this.or.sh = !0;
        } else this.r = PropertyFactory.getProp(i, r.r || { k: 0 }, 0, degToRads, this);
        r.sk && (this.sk = PropertyFactory.getProp(i, r.sk, 0, degToRads, this), this.sa = PropertyFactory.getProp(i, r.sa, 0, degToRads, this)), this.a = PropertyFactory.getProp(i, r.a || { k: [0, 0, 0] }, 1, 0, this), this.s = PropertyFactory.getProp(i, r.s || { k: [100, 100, 100] }, 1, 0.01, this), r.o ? this.o = PropertyFactory.getProp(i, r.o, 0, 0.01, i) : this.o = { _mdf: !1, v: 1 }, this._isDirty = !0, this.dynamicProperties.length || this.getValue(!0);
      }
      return e.prototype = { applyToMatrix: function(i) {
        var r = this._mdf;
        this.iterateDynamicProperties(), this._mdf = this._mdf || r, this.a && i.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.s && i.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && i.skewFromAxis(-this.sk.v, this.sa.v), this.r ? i.rotate(-this.r.v) : i.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.data.p.s ? this.data.p.z ? i.translate(this.px.v, this.py.v, -this.pz.v) : i.translate(this.px.v, this.py.v, 0) : i.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
      }, getValue: function(i) {
        if (this.elem.globalData.frameId !== this.frameId) {
          if (this._isDirty && (this.precalculateMatrix(), this._isDirty = !1), this.iterateDynamicProperties(), this._mdf || i) {
            var r;
            if (this.v.cloneFromProps(this.pre.props), this.appliedTransformations < 1 && this.v.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations < 2 && this.v.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.sk && this.appliedTransformations < 3 && this.v.skewFromAxis(-this.sk.v, this.sa.v), this.r && this.appliedTransformations < 4 ? this.v.rotate(-this.r.v) : !this.r && this.appliedTransformations < 4 && this.v.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.autoOriented) {
              var a, n;
              if (r = this.elem.globalData.frameRate, this.p && this.p.keyframes && this.p.getValueAtTime) this.p._caching.lastFrame + this.p.offsetTime <= this.p.keyframes[0].t ? (a = this.p.getValueAtTime((this.p.keyframes[0].t + 0.01) / r, 0), n = this.p.getValueAtTime(this.p.keyframes[0].t / r, 0)) : this.p._caching.lastFrame + this.p.offsetTime >= this.p.keyframes[this.p.keyframes.length - 1].t ? (a = this.p.getValueAtTime(this.p.keyframes[this.p.keyframes.length - 1].t / r, 0), n = this.p.getValueAtTime((this.p.keyframes[this.p.keyframes.length - 1].t - 0.05) / r, 0)) : (a = this.p.pv, n = this.p.getValueAtTime((this.p._caching.lastFrame + this.p.offsetTime - 0.01) / r, this.p.offsetTime));
              else if (this.px && this.px.keyframes && this.py.keyframes && this.px.getValueAtTime && this.py.getValueAtTime) {
                a = [], n = [];
                var l = this.px, s = this.py;
                l._caching.lastFrame + l.offsetTime <= l.keyframes[0].t ? (a[0] = l.getValueAtTime((l.keyframes[0].t + 0.01) / r, 0), a[1] = s.getValueAtTime((s.keyframes[0].t + 0.01) / r, 0), n[0] = l.getValueAtTime(l.keyframes[0].t / r, 0), n[1] = s.getValueAtTime(s.keyframes[0].t / r, 0)) : l._caching.lastFrame + l.offsetTime >= l.keyframes[l.keyframes.length - 1].t ? (a[0] = l.getValueAtTime(l.keyframes[l.keyframes.length - 1].t / r, 0), a[1] = s.getValueAtTime(s.keyframes[s.keyframes.length - 1].t / r, 0), n[0] = l.getValueAtTime((l.keyframes[l.keyframes.length - 1].t - 0.01) / r, 0), n[1] = s.getValueAtTime((s.keyframes[s.keyframes.length - 1].t - 0.01) / r, 0)) : (a = [l.pv, s.pv], n[0] = l.getValueAtTime((l._caching.lastFrame + l.offsetTime - 0.01) / r, l.offsetTime), n[1] = s.getValueAtTime((s._caching.lastFrame + s.offsetTime - 0.01) / r, s.offsetTime));
              } else a = n = t;
              this.v.rotate(-Math.atan2(a[1] - n[1], a[0] - n[0]));
            }
            this.data.p && this.data.p.s ? this.data.p.z ? this.v.translate(this.px.v, this.py.v, -this.pz.v) : this.v.translate(this.px.v, this.py.v, 0) : this.v.translate(this.p.v[0], this.p.v[1], -this.p.v[2]);
          }
          this.frameId = this.elem.globalData.frameId;
        }
      }, precalculateMatrix: function() {
        if (this.appliedTransformations = 0, this.pre.reset(), !this.a.effectsSequence.length && (this.pre.translate(-this.a.v[0], -this.a.v[1], this.a.v[2]), this.appliedTransformations = 1, !this.s.effectsSequence.length)) {
          if (this.pre.scale(this.s.v[0], this.s.v[1], this.s.v[2]), this.appliedTransformations = 2, this.sk) {
            if (this.sk.effectsSequence.length || this.sa.effectsSequence.length) return;
            this.pre.skewFromAxis(-this.sk.v, this.sa.v), this.appliedTransformations = 3;
          }
          this.r ? this.r.effectsSequence.length || (this.pre.rotate(-this.r.v), this.appliedTransformations = 4) : this.rz.effectsSequence.length || this.ry.effectsSequence.length || this.rx.effectsSequence.length || this.or.effectsSequence.length || (this.pre.rotateZ(-this.rz.v).rotateY(this.ry.v).rotateX(this.rx.v).rotateZ(-this.or.v[2]).rotateY(this.or.v[1]).rotateX(this.or.v[0]), this.appliedTransformations = 4);
        }
      }, autoOrient: function() {
      } }, extendPrototype([DynamicPropertyContainer], e), e.prototype.addDynamicProperty = function(i) {
        this._addDynamicProperty(i), this.elem.addDynamicProperty(i), this._isDirty = !0;
      }, e.prototype._addDynamicProperty = DynamicPropertyContainer.prototype.addDynamicProperty, { getTransformProperty: function(i, r, a) {
        return new e(i, r, a);
      } };
    }();
    function RepeaterModifier() {
    }
    function RoundCornersModifier() {
    }
    function floatEqual(t, e) {
      return 1e5 * Math.abs(t - e) <= Math.min(Math.abs(t), Math.abs(e));
    }
    function floatZero(t) {
      return Math.abs(t) <= 1e-5;
    }
    function lerp(t, e, i) {
      return t * (1 - i) + e * i;
    }
    function lerpPoint(t, e, i) {
      return [lerp(t[0], e[0], i), lerp(t[1], e[1], i)];
    }
    function quadRoots(t, e, i) {
      if (t === 0) return [];
      var r = e * e - 4 * t * i;
      if (r < 0) return [];
      var a = -e / (2 * t);
      if (r === 0) return [a];
      var n = Math.sqrt(r) / (2 * t);
      return [a - n, a + n];
    }
    function polynomialCoefficients(t, e, i, r) {
      return [3 * e - t - 3 * i + r, 3 * t - 6 * e + 3 * i, -3 * t + 3 * e, t];
    }
    function singlePoint(t) {
      return new PolynomialBezier(t, t, t, t, !1);
    }
    function PolynomialBezier(t, e, i, r, a) {
      a && pointEqual(t, e) && (e = lerpPoint(t, r, 1 / 3)), a && pointEqual(i, r) && (i = lerpPoint(t, r, 2 / 3));
      var n = polynomialCoefficients(t[0], e[0], i[0], r[0]), l = polynomialCoefficients(t[1], e[1], i[1], r[1]);
      this.a = [n[0], l[0]], this.b = [n[1], l[1]], this.c = [n[2], l[2]], this.d = [n[3], l[3]], this.points = [t, e, i, r];
    }
    function extrema(t, e) {
      var i = t.points[0][e], r = t.points[t.points.length - 1][e];
      if (i > r) {
        var a = r;
        r = i, i = a;
      }
      for (var n = quadRoots(3 * t.a[e], 2 * t.b[e], t.c[e]), l = 0; l < n.length; l += 1) if (n[l] > 0 && n[l] < 1) {
        var s = t.point(n[l])[e];
        s < i ? i = s : s > r && (r = s);
      }
      return { min: i, max: r };
    }
    function intersectData(t, e, i) {
      var r = t.boundingBox();
      return { cx: r.cx, cy: r.cy, width: r.width, height: r.height, bez: t, t: (e + i) / 2, t1: e, t2: i };
    }
    function splitData(t) {
      var e = t.bez.split(0.5);
      return [intersectData(e[0], t.t1, t.t), intersectData(e[1], t.t, t.t2)];
    }
    function boxIntersect(t, e) {
      return 2 * Math.abs(t.cx - e.cx) < t.width + e.width && 2 * Math.abs(t.cy - e.cy) < t.height + e.height;
    }
    function intersectsImpl(t, e, i, r, a, n) {
      if (boxIntersect(t, e)) if (i >= n || t.width <= r && t.height <= r && e.width <= r && e.height <= r) a.push([t.t, e.t]);
      else {
        var l = splitData(t), s = splitData(e);
        intersectsImpl(l[0], s[0], i + 1, r, a, n), intersectsImpl(l[0], s[1], i + 1, r, a, n), intersectsImpl(l[1], s[0], i + 1, r, a, n), intersectsImpl(l[1], s[1], i + 1, r, a, n);
      }
    }
    function crossProduct(t, e) {
      return [t[1] * e[2] - t[2] * e[1], t[2] * e[0] - t[0] * e[2], t[0] * e[1] - t[1] * e[0]];
    }
    function lineIntersection(t, e, i, r) {
      var a = [t[0], t[1], 1], n = [e[0], e[1], 1], l = [i[0], i[1], 1], s = [r[0], r[1], 1], d = crossProduct(crossProduct(a, n), crossProduct(l, s));
      return floatZero(d[2]) ? null : [d[0] / d[2], d[1] / d[2]];
    }
    function polarOffset(t, e, i) {
      return [t[0] + Math.cos(e) * i, t[1] - Math.sin(e) * i];
    }
    function pointDistance(t, e) {
      return Math.hypot(t[0] - e[0], t[1] - e[1]);
    }
    function pointEqual(t, e) {
      return floatEqual(t[0], e[0]) && floatEqual(t[1], e[1]);
    }
    function ZigZagModifier() {
    }
    function setPoint(t, e, i, r, a, n, l) {
      var s = i - Math.PI / 2, d = i + Math.PI / 2, h = e[0] + Math.cos(i) * r * a, o = e[1] - Math.sin(i) * r * a;
      t.setTripleAt(h, o, h + Math.cos(s) * n, o - Math.sin(s) * n, h + Math.cos(d) * l, o - Math.sin(d) * l, t.length());
    }
    function getPerpendicularVector(t, e) {
      var i = [e[0] - t[0], e[1] - t[1]], r = 0.5 * -Math.PI;
      return [Math.cos(r) * i[0] - Math.sin(r) * i[1], Math.sin(r) * i[0] + Math.cos(r) * i[1]];
    }
    function getProjectingAngle(t, e) {
      var i = e === 0 ? t.length() - 1 : e - 1, r = (e + 1) % t.length(), a = getPerpendicularVector(t.v[i], t.v[r]);
      return Math.atan2(0, 1) - Math.atan2(a[1], a[0]);
    }
    function zigZagCorner(t, e, i, r, a, n, l) {
      var s = getProjectingAngle(e, i), d = e.v[i % e._length], h = e.v[i === 0 ? e._length - 1 : i - 1], o = e.v[(i + 1) % e._length], u = n === 2 ? Math.sqrt(Math.pow(d[0] - h[0], 2) + Math.pow(d[1] - h[1], 2)) : 0, m = n === 2 ? Math.sqrt(Math.pow(d[0] - o[0], 2) + Math.pow(d[1] - o[1], 2)) : 0;
      setPoint(t, e.v[i % e._length], s, l, r, m / (2 * (a + 1)), u / (2 * (a + 1)));
    }
    function zigZagSegment(t, e, i, r, a, n) {
      for (var l = 0; l < r; l += 1) {
        var s = (l + 1) / (r + 1), d = a === 2 ? Math.sqrt(Math.pow(e.points[3][0] - e.points[0][0], 2) + Math.pow(e.points[3][1] - e.points[0][1], 2)) : 0, h = e.normalAngle(s);
        setPoint(t, e.point(s), h, n, i, d / (2 * (r + 1)), d / (2 * (r + 1))), n = -n;
      }
      return n;
    }
    function linearOffset(t, e, i) {
      var r = Math.atan2(e[0] - t[0], e[1] - t[1]);
      return [polarOffset(t, r, i), polarOffset(e, r, i)];
    }
    function offsetSegment(t, e) {
      var i, r, a, n, l, s, d;
      i = (d = linearOffset(t.points[0], t.points[1], e))[0], r = d[1], a = (d = linearOffset(t.points[1], t.points[2], e))[0], n = d[1], l = (d = linearOffset(t.points[2], t.points[3], e))[0], s = d[1];
      var h = lineIntersection(i, r, a, n);
      h === null && (h = r);
      var o = lineIntersection(l, s, a, n);
      return o === null && (o = l), new PolynomialBezier(i, h, o, s);
    }
    function joinLines(t, e, i, r, a) {
      var n = e.points[3], l = i.points[0];
      if (r === 3 || pointEqual(n, l)) return n;
      if (r === 2) {
        var s = -e.tangentAngle(1), d = -i.tangentAngle(0) + Math.PI, h = lineIntersection(n, polarOffset(n, s + Math.PI / 2, 100), l, polarOffset(l, s + Math.PI / 2, 100)), o = h ? pointDistance(h, n) : pointDistance(n, l) / 2, u = polarOffset(n, s, 2 * o * roundCorner);
        return t.setXYAt(u[0], u[1], "o", t.length() - 1), u = polarOffset(l, d, 2 * o * roundCorner), t.setTripleAt(l[0], l[1], l[0], l[1], u[0], u[1], t.length()), l;
      }
      var m = lineIntersection(pointEqual(n, e.points[2]) ? e.points[0] : e.points[2], n, l, pointEqual(l, i.points[1]) ? i.points[3] : i.points[1]);
      return m && pointDistance(m, n) < a ? (t.setTripleAt(m[0], m[1], m[0], m[1], m[0], m[1], t.length()), m) : n;
    }
    function getIntersection(t, e) {
      var i = t.intersections(e);
      return i.length && floatEqual(i[0][0], 1) && i.shift(), i.length ? i[0] : null;
    }
    function pruneSegmentIntersection(t, e) {
      var i = t.slice(), r = e.slice(), a = getIntersection(t[t.length - 1], e[0]);
      return a && (i[t.length - 1] = t[t.length - 1].split(a[0])[0], r[0] = e[0].split(a[1])[1]), t.length > 1 && e.length > 1 && (a = getIntersection(t[0], e[e.length - 1])) ? [[t[0].split(a[0])[0]], [e[e.length - 1].split(a[1])[1]]] : [i, r];
    }
    function pruneIntersections(t) {
      for (var e, i = 1; i < t.length; i += 1) e = pruneSegmentIntersection(t[i - 1], t[i]), t[i - 1] = e[0], t[i] = e[1];
      return t.length > 1 && (e = pruneSegmentIntersection(t[t.length - 1], t[0]), t[t.length - 1] = e[0], t[0] = e[1]), t;
    }
    function offsetSegmentSplit(t, e) {
      var i, r, a, n, l = t.inflectionPoints();
      if (l.length === 0) return [offsetSegment(t, e)];
      if (l.length === 1 || floatEqual(l[1], 1)) return i = (a = t.split(l[0]))[0], r = a[1], [offsetSegment(i, e), offsetSegment(r, e)];
      i = (a = t.split(l[0]))[0];
      var s = (l[1] - l[0]) / (1 - l[0]);
      return n = (a = a[1].split(s))[0], r = a[1], [offsetSegment(i, e), offsetSegment(n, e), offsetSegment(r, e)];
    }
    function OffsetPathModifier() {
    }
    function getFontProperties(t) {
      for (var e = t.fStyle ? t.fStyle.split(" ") : [], i = "normal", r = "normal", a = e.length, n = 0; n < a; n += 1) switch (e[n].toLowerCase()) {
        case "italic":
          r = "italic";
          break;
        case "bold":
          i = "700";
          break;
        case "black":
          i = "900";
          break;
        case "medium":
          i = "500";
          break;
        case "regular":
        case "normal":
          i = "400";
          break;
        case "light":
        case "thin":
          i = "200";
      }
      return { style: r, weight: t.fWeight || i };
    }
    extendPrototype([ShapeModifier], RepeaterModifier), RepeaterModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.c = PropertyFactory.getProp(t, e.c, 0, null, this), this.o = PropertyFactory.getProp(t, e.o, 0, null, this), this.tr = TransformPropertyFactory.getTransformProperty(t, e.tr, this), this.so = PropertyFactory.getProp(t, e.tr.so, 0, 0.01, this), this.eo = PropertyFactory.getProp(t, e.tr.eo, 0, 0.01, this), this.data = e, this.dynamicProperties.length || this.getValue(!0), this._isAnimated = !!this.dynamicProperties.length, this.pMatrix = new Matrix(), this.rMatrix = new Matrix(), this.sMatrix = new Matrix(), this.tMatrix = new Matrix(), this.matrix = new Matrix();
    }, RepeaterModifier.prototype.applyTransforms = function(t, e, i, r, a, n) {
      var l = n ? -1 : 1, s = r.s.v[0] + (1 - r.s.v[0]) * (1 - a), d = r.s.v[1] + (1 - r.s.v[1]) * (1 - a);
      t.translate(r.p.v[0] * l * a, r.p.v[1] * l * a, r.p.v[2]), e.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), e.rotate(-r.r.v * l * a), e.translate(r.a.v[0], r.a.v[1], r.a.v[2]), i.translate(-r.a.v[0], -r.a.v[1], r.a.v[2]), i.scale(n ? 1 / s : s, n ? 1 / d : d), i.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
    }, RepeaterModifier.prototype.init = function(t, e, i, r) {
      for (this.elem = t, this.arr = e, this.pos = i, this.elemsData = r, this._currentCopies = 0, this._elements = [], this._groups = [], this.frameId = -1, this.initDynamicPropertyContainer(t), this.initModifierProperties(t, e[i]); i > 0; ) i -= 1, this._elements.unshift(e[i]);
      this.dynamicProperties.length ? this.k = !0 : this.getValue(!0);
    }, RepeaterModifier.prototype.resetElements = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e]._processed = !1, t[e].ty === "gr" && this.resetElements(t[e].it);
    }, RepeaterModifier.prototype.cloneElements = function(t) {
      var e = JSON.parse(JSON.stringify(t));
      return this.resetElements(e), e;
    }, RepeaterModifier.prototype.changeGroupRender = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) t[i]._render = e, t[i].ty === "gr" && this.changeGroupRender(t[i].it, e);
    }, RepeaterModifier.prototype.processShapes = function(t) {
      var e, i, r, a, n, l = !1;
      if (this._mdf || t) {
        var s, d = Math.ceil(this.c.v);
        if (this._groups.length < d) {
          for (; this._groups.length < d; ) {
            var h = { it: this.cloneElements(this._elements), ty: "gr" };
            h.it.push({ a: { a: 0, ix: 1, k: [0, 0] }, nm: "Transform", o: { a: 0, ix: 7, k: 100 }, p: { a: 0, ix: 2, k: [0, 0] }, r: { a: 1, ix: 6, k: [{ s: 0, e: 0, t: 0 }, { s: 0, e: 0, t: 1 }] }, s: { a: 0, ix: 3, k: [100, 100] }, sa: { a: 0, ix: 5, k: 0 }, sk: { a: 0, ix: 4, k: 0 }, ty: "tr" }), this.arr.splice(0, 0, h), this._groups.splice(0, 0, h), this._currentCopies += 1;
          }
          this.elem.reloadShapes(), l = !0;
        }
        for (n = 0, r = 0; r <= this._groups.length - 1; r += 1) {
          if (s = n < d, this._groups[r]._render = s, this.changeGroupRender(this._groups[r].it, s), !s) {
            var o = this.elemsData[r].it, u = o[o.length - 1];
            u.transform.op.v !== 0 ? (u.transform.op._mdf = !0, u.transform.op.v = 0) : u.transform.op._mdf = !1;
          }
          n += 1;
        }
        this._currentCopies = d;
        var m = this.o.v, f = m % 1, c = m > 0 ? Math.floor(m) : Math.ceil(m), g = this.pMatrix.props, p = this.rMatrix.props, y = this.sMatrix.props;
        this.pMatrix.reset(), this.rMatrix.reset(), this.sMatrix.reset(), this.tMatrix.reset(), this.matrix.reset();
        var v, _, b = 0;
        if (m > 0) {
          for (; b < c; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), b += 1;
          f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, f, !1), b += f);
        } else if (m < 0) {
          for (; b > c; ) this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !0), b -= 1;
          f && (this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, -f, !0), b -= f);
        }
        for (r = this.data.m === 1 ? 0 : this._currentCopies - 1, a = this.data.m === 1 ? 1 : -1, n = this._currentCopies; n; ) {
          if (_ = (i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props).length, e[e.length - 1].transform.mProps._mdf = !0, e[e.length - 1].transform.op._mdf = !0, e[e.length - 1].transform.op.v = this._currentCopies === 1 ? this.so.v : this.so.v + (this.eo.v - this.so.v) * (r / (this._currentCopies - 1)), b !== 0) {
            for ((r !== 0 && a === 1 || r !== this._currentCopies - 1 && a === -1) && this.applyTransforms(this.pMatrix, this.rMatrix, this.sMatrix, this.tr, 1, !1), this.matrix.transform(p[0], p[1], p[2], p[3], p[4], p[5], p[6], p[7], p[8], p[9], p[10], p[11], p[12], p[13], p[14], p[15]), this.matrix.transform(y[0], y[1], y[2], y[3], y[4], y[5], y[6], y[7], y[8], y[9], y[10], y[11], y[12], y[13], y[14], y[15]), this.matrix.transform(g[0], g[1], g[2], g[3], g[4], g[5], g[6], g[7], g[8], g[9], g[10], g[11], g[12], g[13], g[14], g[15]), v = 0; v < _; v += 1) i[v] = this.matrix.props[v];
            this.matrix.reset();
          } else for (this.matrix.reset(), v = 0; v < _; v += 1) i[v] = this.matrix.props[v];
          b += 1, n -= 1, r += a;
        }
      } else for (n = this._currentCopies, r = 0, a = 1; n; ) i = (e = this.elemsData[r].it)[e.length - 1].transform.mProps.v.props, e[e.length - 1].transform.mProps._mdf = !1, e[e.length - 1].transform.op._mdf = !1, n -= 1, r += a;
      return l;
    }, RepeaterModifier.prototype.addShape = function() {
    }, extendPrototype([ShapeModifier], RoundCornersModifier), RoundCornersModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.rd = PropertyFactory.getProp(t, e.r, 0, null, this), this._isAnimated = !!this.rd.effectsSequence.length;
    }, RoundCornersModifier.prototype.processPath = function(t, e) {
      var i, r = shapePool.newElement();
      r.c = t.c;
      var a, n, l, s, d, h, o, u, m, f, c, g, p = t._length, y = 0;
      for (i = 0; i < p; i += 1) a = t.v[i], l = t.o[i], n = t.i[i], a[0] === l[0] && a[1] === l[1] && a[0] === n[0] && a[1] === n[1] ? i !== 0 && i !== p - 1 || t.c ? (s = i === 0 ? t.v[p - 1] : t.v[i - 1], h = (d = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2))) ? Math.min(d / 2, e) / d : 0, o = c = a[0] + (s[0] - a[0]) * h, u = g = a[1] - (a[1] - s[1]) * h, m = o - (o - a[0]) * roundCorner, f = u - (u - a[1]) * roundCorner, r.setTripleAt(o, u, m, f, c, g, y), y += 1, s = i === p - 1 ? t.v[0] : t.v[i + 1], h = (d = Math.sqrt(Math.pow(a[0] - s[0], 2) + Math.pow(a[1] - s[1], 2))) ? Math.min(d / 2, e) / d : 0, o = m = a[0] + (s[0] - a[0]) * h, u = f = a[1] + (s[1] - a[1]) * h, c = o - (o - a[0]) * roundCorner, g = u - (u - a[1]) * roundCorner, r.setTripleAt(o, u, m, f, c, g, y), y += 1) : (r.setTripleAt(a[0], a[1], l[0], l[1], n[0], n[1], y), y += 1) : (r.setTripleAt(t.v[i][0], t.v[i][1], t.o[i][0], t.o[i][1], t.i[i][0], t.i[i][1], y), y += 1);
      return r;
    }, RoundCornersModifier.prototype.processShapes = function(t) {
      var e, i, r, a, n, l, s = this.shapes.length, d = this.rd.v;
      if (d !== 0) for (i = 0; i < s; i += 1) {
        if (l = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t) for (l.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, a = n.shape.paths._length, r = 0; r < a; r += 1) l.addShape(this.processPath(e[r], d));
        n.shape.paths = n.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    }, PolynomialBezier.prototype.point = function(t) {
      return [((this.a[0] * t + this.b[0]) * t + this.c[0]) * t + this.d[0], ((this.a[1] * t + this.b[1]) * t + this.c[1]) * t + this.d[1]];
    }, PolynomialBezier.prototype.derivative = function(t) {
      return [(3 * t * this.a[0] + 2 * this.b[0]) * t + this.c[0], (3 * t * this.a[1] + 2 * this.b[1]) * t + this.c[1]];
    }, PolynomialBezier.prototype.tangentAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[1], e[0]);
    }, PolynomialBezier.prototype.normalAngle = function(t) {
      var e = this.derivative(t);
      return Math.atan2(e[0], e[1]);
    }, PolynomialBezier.prototype.inflectionPoints = function() {
      var t = this.a[1] * this.b[0] - this.a[0] * this.b[1];
      if (floatZero(t)) return [];
      var e = -0.5 * (this.a[1] * this.c[0] - this.a[0] * this.c[1]) / t, i = e * e - 1 / 3 * (this.b[1] * this.c[0] - this.b[0] * this.c[1]) / t;
      if (i < 0) return [];
      var r = Math.sqrt(i);
      return floatZero(r) ? r > 0 && r < 1 ? [e] : [] : [e - r, e + r].filter(function(a) {
        return a > 0 && a < 1;
      });
    }, PolynomialBezier.prototype.split = function(t) {
      if (t <= 0) return [singlePoint(this.points[0]), this];
      if (t >= 1) return [this, singlePoint(this.points[this.points.length - 1])];
      var e = lerpPoint(this.points[0], this.points[1], t), i = lerpPoint(this.points[1], this.points[2], t), r = lerpPoint(this.points[2], this.points[3], t), a = lerpPoint(e, i, t), n = lerpPoint(i, r, t), l = lerpPoint(a, n, t);
      return [new PolynomialBezier(this.points[0], e, a, l, !0), new PolynomialBezier(l, n, r, this.points[3], !0)];
    }, PolynomialBezier.prototype.bounds = function() {
      return { x: extrema(this, 0), y: extrema(this, 1) };
    }, PolynomialBezier.prototype.boundingBox = function() {
      var t = this.bounds();
      return { left: t.x.min, right: t.x.max, top: t.y.min, bottom: t.y.max, width: t.x.max - t.x.min, height: t.y.max - t.y.min, cx: (t.x.max + t.x.min) / 2, cy: (t.y.max + t.y.min) / 2 };
    }, PolynomialBezier.prototype.intersections = function(t, e, i) {
      e === void 0 && (e = 2), i === void 0 && (i = 7);
      var r = [];
      return intersectsImpl(intersectData(this, 0, 1), intersectData(t, 0, 1), 0, e, r, i), r;
    }, PolynomialBezier.shapeSegment = function(t, e) {
      var i = (e + 1) % t.length();
      return new PolynomialBezier(t.v[e], t.o[e], t.i[i], t.v[i], !0);
    }, PolynomialBezier.shapeSegmentInverted = function(t, e) {
      var i = (e + 1) % t.length();
      return new PolynomialBezier(t.v[i], t.i[i], t.o[e], t.v[e], !0);
    }, extendPrototype([ShapeModifier], ZigZagModifier), ZigZagModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amplitude = PropertyFactory.getProp(t, e.s, 0, null, this), this.frequency = PropertyFactory.getProp(t, e.r, 0, null, this), this.pointsType = PropertyFactory.getProp(t, e.pt, 0, null, this), this._isAnimated = this.amplitude.effectsSequence.length !== 0 || this.frequency.effectsSequence.length !== 0 || this.pointsType.effectsSequence.length !== 0;
    }, ZigZagModifier.prototype.processPath = function(t, e, i, r) {
      var a = t._length, n = shapePool.newElement();
      if (n.c = t.c, t.c || (a -= 1), a === 0) return n;
      var l = -1, s = PolynomialBezier.shapeSegment(t, 0);
      zigZagCorner(n, t, 0, e, i, r, l);
      for (var d = 0; d < a; d += 1) l = zigZagSegment(n, s, e, i, r, -l), s = d !== a - 1 || t.c ? PolynomialBezier.shapeSegment(t, (d + 1) % a) : null, zigZagCorner(n, t, d + 1, e, i, r, l);
      return n;
    }, ZigZagModifier.prototype.processShapes = function(t) {
      var e, i, r, a, n, l, s = this.shapes.length, d = this.amplitude.v, h = Math.max(0, Math.round(this.frequency.v)), o = this.pointsType.v;
      if (d !== 0) for (i = 0; i < s; i += 1) {
        if (l = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t) for (l.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, a = n.shape.paths._length, r = 0; r < a; r += 1) l.addShape(this.processPath(e[r], d, h, o));
        n.shape.paths = n.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    }, extendPrototype([ShapeModifier], OffsetPathModifier), OffsetPathModifier.prototype.initModifierProperties = function(t, e) {
      this.getValue = this.processKeys, this.amount = PropertyFactory.getProp(t, e.a, 0, null, this), this.miterLimit = PropertyFactory.getProp(t, e.ml, 0, null, this), this.lineJoin = e.lj, this._isAnimated = this.amount.effectsSequence.length !== 0;
    }, OffsetPathModifier.prototype.processPath = function(t, e, i, r) {
      var a = shapePool.newElement();
      a.c = t.c;
      var n, l, s, d = t.length();
      t.c || (d -= 1);
      var h = [];
      for (n = 0; n < d; n += 1) s = PolynomialBezier.shapeSegment(t, n), h.push(offsetSegmentSplit(s, e));
      if (!t.c) for (n = d - 1; n >= 0; n -= 1) s = PolynomialBezier.shapeSegmentInverted(t, n), h.push(offsetSegmentSplit(s, e));
      h = pruneIntersections(h);
      var o = null, u = null;
      for (n = 0; n < h.length; n += 1) {
        var m = h[n];
        for (u && (o = joinLines(a, u, m[0], i, r)), u = m[m.length - 1], l = 0; l < m.length; l += 1) s = m[l], o && pointEqual(s.points[0], o) ? a.setXYAt(s.points[1][0], s.points[1][1], "o", a.length() - 1) : a.setTripleAt(s.points[0][0], s.points[0][1], s.points[1][0], s.points[1][1], s.points[0][0], s.points[0][1], a.length()), a.setTripleAt(s.points[3][0], s.points[3][1], s.points[3][0], s.points[3][1], s.points[2][0], s.points[2][1], a.length()), o = s.points[3];
      }
      return h.length && joinLines(a, u, h[0][0], i, r), a;
    }, OffsetPathModifier.prototype.processShapes = function(t) {
      var e, i, r, a, n, l, s = this.shapes.length, d = this.amount.v, h = this.miterLimit.v, o = this.lineJoin;
      if (d !== 0) for (i = 0; i < s; i += 1) {
        if (l = (n = this.shapes[i]).localShapeCollection, n.shape._mdf || this._mdf || t) for (l.releaseShapes(), n.shape._mdf = !0, e = n.shape.paths.shapes, a = n.shape.paths._length, r = 0; r < a; r += 1) l.addShape(this.processPath(e[r], d, o, h));
        n.shape.paths = n.localShapeCollection;
      }
      this.dynamicProperties.length || (this._mdf = !1);
    };
    var FontManager = function() {
      var t = { w: 0, size: 0, shapes: [], data: { shapes: [] } }, e = [];
      e = e.concat([2304, 2305, 2306, 2307, 2362, 2363, 2364, 2364, 2366, 2367, 2368, 2369, 2370, 2371, 2372, 2373, 2374, 2375, 2376, 2377, 2378, 2379, 2380, 2381, 2382, 2383, 2387, 2388, 2389, 2390, 2391, 2402, 2403]);
      var i = ["d83cdffb", "d83cdffc", "d83cdffd", "d83cdffe", "d83cdfff"];
      function r(d, h) {
        var o = createTag("span");
        o.setAttribute("aria-hidden", !0), o.style.fontFamily = h;
        var u = createTag("span");
        u.innerText = "giItT1WQy@!-/#", o.style.position = "absolute", o.style.left = "-10000px", o.style.top = "-10000px", o.style.fontSize = "300px", o.style.fontVariant = "normal", o.style.fontStyle = "normal", o.style.fontWeight = "normal", o.style.letterSpacing = "0", o.appendChild(u), document.body.appendChild(o);
        var m = u.offsetWidth;
        return u.style.fontFamily = function(f) {
          var c, g = f.split(","), p = g.length, y = [];
          for (c = 0; c < p; c += 1) g[c] !== "sans-serif" && g[c] !== "monospace" && y.push(g[c]);
          return y.join(",");
        }(d) + ", " + h, { node: u, w: m, parent: o };
      }
      function a(d, h) {
        var o, u = document.body && h ? "svg" : "canvas", m = getFontProperties(d);
        if (u === "svg") {
          var f = createNS("text");
          f.style.fontSize = "100px", f.setAttribute("font-family", d.fFamily), f.setAttribute("font-style", m.style), f.setAttribute("font-weight", m.weight), f.textContent = "1", d.fClass ? (f.style.fontFamily = "inherit", f.setAttribute("class", d.fClass)) : f.style.fontFamily = d.fFamily, h.appendChild(f), o = f;
        } else {
          var c = new OffscreenCanvas(500, 500).getContext("2d");
          c.font = m.style + " " + m.weight + " 100px " + d.fFamily, o = c;
        }
        return { measureText: function(g) {
          return u === "svg" ? (o.textContent = g, o.getComputedTextLength()) : o.measureText(g).width;
        } };
      }
      function n(d) {
        var h = 0, o = d.charCodeAt(0);
        if (o >= 55296 && o <= 56319) {
          var u = d.charCodeAt(1);
          u >= 56320 && u <= 57343 && (h = 1024 * (o - 55296) + u - 56320 + 65536);
        }
        return h;
      }
      function l(d) {
        var h = n(d);
        return h >= 127462 && h <= 127487;
      }
      var s = function() {
        this.fonts = [], this.chars = null, this.typekitLoaded = 0, this.isLoaded = !1, this._warned = !1, this.initTime = Date.now(), this.setIsLoadedBinded = this.setIsLoaded.bind(this), this.checkLoadedFontsBinded = this.checkLoadedFonts.bind(this);
      };
      return s.isModifier = function(d, h) {
        var o = d.toString(16) + h.toString(16);
        return i.indexOf(o) !== -1;
      }, s.isZeroWidthJoiner = function(d) {
        return d === 8205;
      }, s.isFlagEmoji = function(d) {
        return l(d.substr(0, 2)) && l(d.substr(2, 2));
      }, s.isRegionalCode = l, s.isCombinedCharacter = function(d) {
        return e.indexOf(d) !== -1;
      }, s.isRegionalFlag = function(d, h) {
        var o = n(d.substr(h, 2));
        if (o !== 127988) return !1;
        var u = 0;
        for (h += 2; u < 5; ) {
          if ((o = n(d.substr(h, 2))) < 917601 || o > 917626) return !1;
          u += 1, h += 2;
        }
        return n(d.substr(h, 2)) === 917631;
      }, s.isVariationSelector = function(d) {
        return d === 65039;
      }, s.BLACK_FLAG_CODE_POINT = 127988, s.prototype = { addChars: function(d) {
        if (d) {
          var h;
          this.chars || (this.chars = []);
          var o, u, m = d.length, f = this.chars.length;
          for (h = 0; h < m; h += 1) {
            for (o = 0, u = !1; o < f; ) this.chars[o].style === d[h].style && this.chars[o].fFamily === d[h].fFamily && this.chars[o].ch === d[h].ch && (u = !0), o += 1;
            u || (this.chars.push(d[h]), f += 1);
          }
        }
      }, addFonts: function(d, h) {
        if (d) {
          if (this.chars) return this.isLoaded = !0, void (this.fonts = d.list);
          if (!document.body) return this.isLoaded = !0, d.list.forEach(function(b) {
            b.helper = a(b), b.cache = {};
          }), void (this.fonts = d.list);
          var o, u = d.list, m = u.length, f = m;
          for (o = 0; o < m; o += 1) {
            var c, g, p = !0;
            if (u[o].loaded = !1, u[o].monoCase = r(u[o].fFamily, "monospace"), u[o].sansCase = r(u[o].fFamily, "sans-serif"), u[o].fPath) {
              if (u[o].fOrigin === "p" || u[o].origin === 3) {
                if ((c = document.querySelectorAll('style[f-forigin="p"][f-family="' + u[o].fFamily + '"], style[f-origin="3"][f-family="' + u[o].fFamily + '"]')).length > 0 && (p = !1), p) {
                  var y = createTag("style");
                  y.setAttribute("f-forigin", u[o].fOrigin), y.setAttribute("f-origin", u[o].origin), y.setAttribute("f-family", u[o].fFamily), y.type = "text/css", y.innerText = "@font-face {font-family: " + u[o].fFamily + "; font-style: normal; src: url('" + u[o].fPath + "');}", h.appendChild(y);
                }
              } else if (u[o].fOrigin === "g" || u[o].origin === 1) {
                for (c = document.querySelectorAll('link[f-forigin="g"], link[f-origin="1"]'), g = 0; g < c.length; g += 1) c[g].href.indexOf(u[o].fPath) !== -1 && (p = !1);
                if (p) {
                  var v = createTag("link");
                  v.setAttribute("f-forigin", u[o].fOrigin), v.setAttribute("f-origin", u[o].origin), v.type = "text/css", v.rel = "stylesheet", v.href = u[o].fPath, document.body.appendChild(v);
                }
              } else if (u[o].fOrigin === "t" || u[o].origin === 2) {
                for (c = document.querySelectorAll('script[f-forigin="t"], script[f-origin="2"]'), g = 0; g < c.length; g += 1) u[o].fPath === c[g].src && (p = !1);
                if (p) {
                  var _ = createTag("link");
                  _.setAttribute("f-forigin", u[o].fOrigin), _.setAttribute("f-origin", u[o].origin), _.setAttribute("rel", "stylesheet"), _.setAttribute("href", u[o].fPath), h.appendChild(_);
                }
              }
            } else u[o].loaded = !0, f -= 1;
            u[o].helper = a(u[o], h), u[o].cache = {}, this.fonts.push(u[o]);
          }
          f === 0 ? this.isLoaded = !0 : setTimeout(this.checkLoadedFonts.bind(this), 100);
        } else this.isLoaded = !0;
      }, getCharData: function(d, h, o) {
        for (var u = 0, m = this.chars.length; u < m; ) {
          if (this.chars[u].ch === d && this.chars[u].style === h && this.chars[u].fFamily === o) return this.chars[u];
          u += 1;
        }
        return (typeof d == "string" && d.charCodeAt(0) !== 13 || !d) && console && console.warn && !this._warned && (this._warned = !0), t;
      }, getFontByName: function(d) {
        for (var h = 0, o = this.fonts.length; h < o; ) {
          if (this.fonts[h].fName === d) return this.fonts[h];
          h += 1;
        }
        return this.fonts[0];
      }, measureText: function(d, h, o) {
        var u = this.getFontByName(h), m = d;
        if (!u.cache[m]) {
          var f = u.helper;
          if (d === " ") {
            var c = f.measureText("|" + d + "|"), g = f.measureText("||");
            u.cache[m] = (c - g) / 100;
          } else u.cache[m] = f.measureText(d) / 100;
        }
        return u.cache[m] * o;
      }, checkLoadedFonts: function() {
        var d, h, o, u = this.fonts.length, m = u;
        for (d = 0; d < u; d += 1) this.fonts[d].loaded ? m -= 1 : this.fonts[d].fOrigin === "n" || this.fonts[d].origin === 0 ? this.fonts[d].loaded = !0 : (h = this.fonts[d].monoCase.node, o = this.fonts[d].monoCase.w, h.offsetWidth !== o ? (m -= 1, this.fonts[d].loaded = !0) : (h = this.fonts[d].sansCase.node, o = this.fonts[d].sansCase.w, h.offsetWidth !== o && (m -= 1, this.fonts[d].loaded = !0)), this.fonts[d].loaded && (this.fonts[d].sansCase.parent.parentNode.removeChild(this.fonts[d].sansCase.parent), this.fonts[d].monoCase.parent.parentNode.removeChild(this.fonts[d].monoCase.parent)));
        m !== 0 && Date.now() - this.initTime < 5e3 ? setTimeout(this.checkLoadedFontsBinded, 20) : setTimeout(this.setIsLoadedBinded, 10);
      }, setIsLoaded: function() {
        this.isLoaded = !0;
      } }, s;
    }();
    function SlotManager(t) {
      this.animationData = t;
    }
    function slotFactory(t) {
      return new SlotManager(t);
    }
    function RenderableElement() {
    }
    SlotManager.prototype.getProp = function(t) {
      return this.animationData.slots && this.animationData.slots[t.sid] ? Object.assign(t, this.animationData.slots[t.sid].p) : t;
    }, RenderableElement.prototype = { initRenderable: function() {
      this.isInRange = !1, this.hidden = !1, this.isTransparent = !1, this.renderableComponents = [];
    }, addRenderableComponent: function(t) {
      this.renderableComponents.indexOf(t) === -1 && this.renderableComponents.push(t);
    }, removeRenderableComponent: function(t) {
      this.renderableComponents.indexOf(t) !== -1 && this.renderableComponents.splice(this.renderableComponents.indexOf(t), 1);
    }, prepareRenderableFrame: function(t) {
      this.checkLayerLimits(t);
    }, checkTransparency: function() {
      this.finalTransform.mProp.o.v <= 0 ? !this.isTransparent && this.globalData.renderConfig.hideOnTransparent && (this.isTransparent = !0, this.hide()) : this.isTransparent && (this.isTransparent = !1, this.show());
    }, checkLayerLimits: function(t) {
      this.data.ip - this.data.st <= t && this.data.op - this.data.st > t ? this.isInRange !== !0 && (this.globalData._mdf = !0, this._mdf = !0, this.isInRange = !0, this.show()) : this.isInRange !== !1 && (this.globalData._mdf = !0, this.isInRange = !1, this.hide());
    }, renderRenderable: function() {
      var t, e = this.renderableComponents.length;
      for (t = 0; t < e; t += 1) this.renderableComponents[t].renderFrame(this._isFirstFrame);
    }, sourceRectAtTime: function() {
      return { top: 0, left: 0, width: 100, height: 100 };
    }, getLayerSize: function() {
      return this.data.ty === 5 ? { w: this.data.textData.width, h: this.data.textData.height } : { w: this.data.width, h: this.data.height };
    } };
    var getBlendMode = (blendModeEnums = { 0: "source-over", 1: "multiply", 2: "screen", 3: "overlay", 4: "darken", 5: "lighten", 6: "color-dodge", 7: "color-burn", 8: "hard-light", 9: "soft-light", 10: "difference", 11: "exclusion", 12: "hue", 13: "saturation", 14: "color", 15: "luminosity" }, function(t) {
      return blendModeEnums[t] || "";
    }), blendModeEnums;
    function SliderEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function AngleEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function ColorEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
    }
    function PointEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 1, 0, i);
    }
    function LayerIndexEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function MaskIndexEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function CheckboxEffect(t, e, i) {
      this.p = PropertyFactory.getProp(e, t.v, 0, 0, i);
    }
    function NoValueEffect() {
      this.p = {};
    }
    function EffectsManager(t, e) {
      var i, r = t.ef || [];
      this.effectElements = [];
      var a, n = r.length;
      for (i = 0; i < n; i += 1) a = new GroupEffect(r[i], e), this.effectElements.push(a);
    }
    function GroupEffect(t, e) {
      this.init(t, e);
    }
    function BaseElement() {
    }
    function FrameElement() {
    }
    function FootageElement(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.footageData = e.imageLoader.getAsset(this.assetData), this.initBaseData(t, e, i);
    }
    function AudioElement(t, e, i) {
      this.initFrame(), this.initRenderable(), this.assetData = e.getAssetData(t.refId), this.initBaseData(t, e, i), this._isPlaying = !1, this._canPlay = !1;
      var r = this.globalData.getAssetsPath(this.assetData);
      this.audio = this.globalData.audioController.createAudio(r), this._currentTime = 0, this.globalData.audioController.addAudio(this), this._volumeMultiplier = 1, this._volume = 1, this._previousVolume = null, this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 }, this.lv = PropertyFactory.getProp(this, t.au && t.au.lv ? t.au.lv : { k: [100] }, 1, 0.01, this);
    }
    function BaseRenderer() {
    }
    extendPrototype([DynamicPropertyContainer], GroupEffect), GroupEffect.prototype.getValue = GroupEffect.prototype.iterateDynamicProperties, GroupEffect.prototype.init = function(t, e) {
      var i;
      this.data = t, this.effectElements = [], this.initDynamicPropertyContainer(e);
      var r, a = this.data.ef.length, n = this.data.ef;
      for (i = 0; i < a; i += 1) {
        switch (r = null, n[i].ty) {
          case 0:
            r = new SliderEffect(n[i], e, this);
            break;
          case 1:
            r = new AngleEffect(n[i], e, this);
            break;
          case 2:
            r = new ColorEffect(n[i], e, this);
            break;
          case 3:
            r = new PointEffect(n[i], e, this);
            break;
          case 4:
          case 7:
            r = new CheckboxEffect(n[i], e, this);
            break;
          case 10:
            r = new LayerIndexEffect(n[i], e, this);
            break;
          case 11:
            r = new MaskIndexEffect(n[i], e, this);
            break;
          case 5:
            r = new EffectsManager(n[i], e);
            break;
          default:
            r = new NoValueEffect(n[i]);
        }
        r && this.effectElements.push(r);
      }
    }, BaseElement.prototype = { checkMasks: function() {
      if (!this.data.hasMask) return !1;
      for (var t = 0, e = this.data.masksProperties.length; t < e; ) {
        if (this.data.masksProperties[t].mode !== "n" && this.data.masksProperties[t].cl !== !1) return !0;
        t += 1;
      }
      return !1;
    }, initExpressions: function() {
      var t = getExpressionInterfaces();
      if (t) {
        var e = t("layer"), i = t("effects"), r = t("shape"), a = t("text"), n = t("comp");
        this.layerInterface = e(this), this.data.hasMask && this.maskManager && this.layerInterface.registerMaskInterface(this.maskManager);
        var l = i.createEffectsInterface(this, this.layerInterface);
        this.layerInterface.registerEffectsInterface(l), this.data.ty === 0 || this.data.xt ? this.compInterface = n(this) : this.data.ty === 4 ? (this.layerInterface.shapeInterface = r(this.shapesData, this.itemsData, this.layerInterface), this.layerInterface.content = this.layerInterface.shapeInterface) : this.data.ty === 5 && (this.layerInterface.textInterface = a(this), this.layerInterface.text = this.layerInterface.textInterface);
      }
    }, setBlendMode: function() {
      var t = getBlendMode(this.data.bm);
      (this.baseElement || this.layerElement).style["mix-blend-mode"] = t;
    }, initBaseData: function(t, e, i) {
      this.globalData = e, this.comp = i, this.data = t, this.layerId = createElementID(), this.data.sr || (this.data.sr = 1), this.effectsManager = new EffectsManager(this.data, this, this.dynamicProperties);
    }, getType: function() {
      return this.type;
    }, sourceRectAtTime: function() {
    } }, FrameElement.prototype = { initFrame: function() {
      this._isFirstFrame = !1, this.dynamicProperties = [], this._mdf = !1;
    }, prepareProperties: function(t, e) {
      var i, r = this.dynamicProperties.length;
      for (i = 0; i < r; i += 1) (e || this._isParent && this.dynamicProperties[i].propType === "transform") && (this.dynamicProperties[i].getValue(), this.dynamicProperties[i]._mdf && (this.globalData._mdf = !0, this._mdf = !0));
    }, addDynamicProperty: function(t) {
      this.dynamicProperties.indexOf(t) === -1 && this.dynamicProperties.push(t);
    } }, FootageElement.prototype.prepareFrame = function() {
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], FootageElement), FootageElement.prototype.getBaseElement = function() {
      return null;
    }, FootageElement.prototype.renderFrame = function() {
    }, FootageElement.prototype.destroy = function() {
    }, FootageElement.prototype.initExpressions = function() {
      var t = getExpressionInterfaces();
      if (t) {
        var e = t("footage");
        this.layerInterface = e(this);
      }
    }, FootageElement.prototype.getFootageData = function() {
      return this.footageData;
    }, AudioElement.prototype.prepareFrame = function(t) {
      if (this.prepareRenderableFrame(t, !0), this.prepareProperties(t, !0), this.tm._placeholder) this._currentTime = t / this.data.sr;
      else {
        var e = this.tm.v;
        this._currentTime = e;
      }
      this._volume = this.lv.v[0];
      var i = this._volume * this._volumeMultiplier;
      this._previousVolume !== i && (this._previousVolume = i, this.audio.volume(i));
    }, extendPrototype([RenderableElement, BaseElement, FrameElement], AudioElement), AudioElement.prototype.renderFrame = function() {
      this.isInRange && this._canPlay && (this._isPlaying ? (!this.audio.playing() || Math.abs(this._currentTime / this.globalData.frameRate - this.audio.seek()) > 0.1) && this.audio.seek(this._currentTime / this.globalData.frameRate) : (this.audio.play(), this.audio.seek(this._currentTime / this.globalData.frameRate), this._isPlaying = !0));
    }, AudioElement.prototype.show = function() {
    }, AudioElement.prototype.hide = function() {
      this.audio.pause(), this._isPlaying = !1;
    }, AudioElement.prototype.pause = function() {
      this.audio.pause(), this._isPlaying = !1, this._canPlay = !1;
    }, AudioElement.prototype.resume = function() {
      this._canPlay = !0;
    }, AudioElement.prototype.setRate = function(t) {
      this.audio.rate(t);
    }, AudioElement.prototype.volume = function(t) {
      this._volumeMultiplier = t, this._previousVolume = t * this._volume, this.audio.volume(this._previousVolume);
    }, AudioElement.prototype.getBaseElement = function() {
      return null;
    }, AudioElement.prototype.destroy = function() {
    }, AudioElement.prototype.sourceRectAtTime = function() {
    }, AudioElement.prototype.initExpressions = function() {
    }, BaseRenderer.prototype.checkLayers = function(t) {
      var e, i, r = this.layers.length;
      for (this.completeLayers = !0, e = r - 1; e >= 0; e -= 1) this.elements[e] || (i = this.layers[e]).ip - i.st <= t - this.layers[e].st && i.op - i.st > t - this.layers[e].st && this.buildItem(e), this.completeLayers = !!this.elements[e] && this.completeLayers;
      this.checkPendingElements();
    }, BaseRenderer.prototype.createItem = function(t) {
      switch (t.ty) {
        case 2:
          return this.createImage(t);
        case 0:
          return this.createComp(t);
        case 1:
          return this.createSolid(t);
        case 3:
          return this.createNull(t);
        case 4:
          return this.createShape(t);
        case 5:
          return this.createText(t);
        case 6:
          return this.createAudio(t);
        case 13:
          return this.createCamera(t);
        case 15:
          return this.createFootage(t);
        default:
          return this.createNull(t);
      }
    }, BaseRenderer.prototype.createCamera = function() {
      throw new Error("You're using a 3d camera. Try the html renderer.");
    }, BaseRenderer.prototype.createAudio = function(t) {
      return new AudioElement(t, this.globalData, this);
    }, BaseRenderer.prototype.createFootage = function(t) {
      return new FootageElement(t, this.globalData, this);
    }, BaseRenderer.prototype.buildAllItems = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.buildItem(t);
      this.checkPendingElements();
    }, BaseRenderer.prototype.includeLayers = function(t) {
      var e;
      this.completeLayers = !1;
      var i, r = t.length, a = this.layers.length;
      for (e = 0; e < r; e += 1) for (i = 0; i < a; ) {
        if (this.layers[i].id === t[e].id) {
          this.layers[i] = t[e];
          break;
        }
        i += 1;
      }
    }, BaseRenderer.prototype.setProjectInterface = function(t) {
      this.globalData.projectInterface = t;
    }, BaseRenderer.prototype.initItems = function() {
      this.globalData.progressiveLoad || this.buildAllItems();
    }, BaseRenderer.prototype.buildElementParenting = function(t, e, i) {
      for (var r = this.elements, a = this.layers, n = 0, l = a.length; n < l; ) a[n].ind == e && (r[n] && r[n] !== !0 ? (i.push(r[n]), r[n].setAsParent(), a[n].parent !== void 0 ? this.buildElementParenting(t, a[n].parent, i) : t.setHierarchy(i)) : (this.buildItem(n), this.addPendingElement(t))), n += 1;
    }, BaseRenderer.prototype.addPendingElement = function(t) {
      this.pendingElements.push(t);
    }, BaseRenderer.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) if (t[e].xt) {
        var r = this.createComp(t[e]);
        r.initExpressions(), this.globalData.projectInterface.registerComposition(r);
      }
    }, BaseRenderer.prototype.getElementById = function(t) {
      var e, i = this.elements.length;
      for (e = 0; e < i; e += 1) if (this.elements[e].data.ind === t) return this.elements[e];
      return null;
    }, BaseRenderer.prototype.getElementByPath = function(t) {
      var e, i = t.shift();
      if (typeof i == "number") e = this.elements[i];
      else {
        var r, a = this.elements.length;
        for (r = 0; r < a; r += 1) if (this.elements[r].data.nm === i) {
          e = this.elements[r];
          break;
        }
      }
      return t.length === 0 ? e : e.getElementByPath(t);
    }, BaseRenderer.prototype.setupGlobalData = function(t, e) {
      this.globalData.fontManager = new FontManager(), this.globalData.slotManager = slotFactory(t), this.globalData.fontManager.addChars(t.chars), this.globalData.fontManager.addFonts(t.fonts, e), this.globalData.getAssetData = this.animationItem.getAssetData.bind(this.animationItem), this.globalData.getAssetsPath = this.animationItem.getAssetsPath.bind(this.animationItem), this.globalData.imageLoader = this.animationItem.imagePreloader, this.globalData.audioController = this.animationItem.audioController, this.globalData.frameId = 0, this.globalData.frameRate = t.fr, this.globalData.nm = t.nm, this.globalData.compSize = { w: t.w, h: t.h };
    };
    var effectTypes = { TRANSFORM_EFFECT: "transformEFfect" };
    function TransformElement() {
    }
    function MaskElement(t, e, i) {
      this.data = t, this.element = e, this.globalData = i, this.storedData = [], this.masksProperties = this.data.masksProperties || [], this.maskElement = null;
      var r, a, n = this.globalData.defs, l = this.masksProperties ? this.masksProperties.length : 0;
      this.viewData = createSizedArray(l), this.solidPath = "";
      var s, d, h, o, u, m, f = this.masksProperties, c = 0, g = [], p = createElementID(), y = "clipPath", v = "clip-path";
      for (r = 0; r < l; r += 1) if ((f[r].mode !== "a" && f[r].mode !== "n" || f[r].inv || f[r].o.k !== 100 || f[r].o.x) && (y = "mask", v = "mask"), f[r].mode !== "s" && f[r].mode !== "i" || c !== 0 ? h = null : ((h = createNS("rect")).setAttribute("fill", "#ffffff"), h.setAttribute("width", this.element.comp.data.w || 0), h.setAttribute("height", this.element.comp.data.h || 0), g.push(h)), a = createNS("path"), f[r].mode === "n") this.viewData[r] = { op: PropertyFactory.getProp(this.element, f[r].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3), elem: a, lastPath: "" }, n.appendChild(a);
      else {
        var _;
        if (c += 1, a.setAttribute("fill", f[r].mode === "s" ? "#000000" : "#ffffff"), a.setAttribute("clip-rule", "nonzero"), f[r].x.k !== 0 ? (y = "mask", v = "mask", m = PropertyFactory.getProp(this.element, f[r].x, 0, null, this.element), _ = createElementID(), (o = createNS("filter")).setAttribute("id", _), (u = createNS("feMorphology")).setAttribute("operator", "erode"), u.setAttribute("in", "SourceGraphic"), u.setAttribute("radius", "0"), o.appendChild(u), n.appendChild(o), a.setAttribute("stroke", f[r].mode === "s" ? "#000000" : "#ffffff")) : (u = null, m = null), this.storedData[r] = { elem: a, x: m, expan: u, lastPath: "", lastOperator: "", filterId: _, lastRadius: 0 }, f[r].mode === "i") {
          d = g.length;
          var b = createNS("g");
          for (s = 0; s < d; s += 1) b.appendChild(g[s]);
          var T = createNS("mask");
          T.setAttribute("mask-type", "alpha"), T.setAttribute("id", p + "_" + c), T.appendChild(a), n.appendChild(T), b.setAttribute("mask", "url(" + getLocationHref() + "#" + p + "_" + c + ")"), g.length = 0, g.push(b);
        } else g.push(a);
        f[r].inv && !this.solidPath && (this.solidPath = this.createLayerSolidPath()), this.viewData[r] = { elem: a, lastPath: "", op: PropertyFactory.getProp(this.element, f[r].o, 0, 0.01, this.element), prop: ShapePropertyFactory.getShapeProp(this.element, f[r], 3), invRect: h }, this.viewData[r].prop.k || this.drawPath(f[r], this.viewData[r].prop.v, this.viewData[r]);
      }
      for (this.maskElement = createNS(y), l = g.length, r = 0; r < l; r += 1) this.maskElement.appendChild(g[r]);
      c > 0 && (this.maskElement.setAttribute("id", p), this.element.maskedElement.setAttribute(v, "url(" + getLocationHref() + "#" + p + ")"), n.appendChild(this.maskElement)), this.viewData.length && this.element.addRenderableComponent(this);
    }
    TransformElement.prototype = { initTransform: function() {
      var t = new Matrix();
      this.finalTransform = { mProp: this.data.ks ? TransformPropertyFactory.getTransformProperty(this, this.data.ks, this) : { o: 0 }, _matMdf: !1, _localMatMdf: !1, _opMdf: !1, mat: t, localMat: t, localOpacity: 1 }, this.data.ao && (this.finalTransform.mProp.autoOriented = !0), this.data.ty;
    }, renderTransform: function() {
      if (this.finalTransform._opMdf = this.finalTransform.mProp.o._mdf || this._isFirstFrame, this.finalTransform._matMdf = this.finalTransform.mProp._mdf || this._isFirstFrame, this.hierarchy) {
        var t, e = this.finalTransform.mat, i = 0, r = this.hierarchy.length;
        if (!this.finalTransform._matMdf) for (; i < r; ) {
          if (this.hierarchy[i].finalTransform.mProp._mdf) {
            this.finalTransform._matMdf = !0;
            break;
          }
          i += 1;
        }
        if (this.finalTransform._matMdf) for (t = this.finalTransform.mProp.v.props, e.cloneFromProps(t), i = 0; i < r; i += 1) e.multiply(this.hierarchy[i].finalTransform.mProp.v);
      }
      this.finalTransform._matMdf && (this.finalTransform._localMatMdf = this.finalTransform._matMdf), this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v);
    }, renderLocalTransform: function() {
      if (this.localTransforms) {
        var t = 0, e = this.localTransforms.length;
        if (this.finalTransform._localMatMdf = this.finalTransform._matMdf, !this.finalTransform._localMatMdf || !this.finalTransform._opMdf) for (; t < e; ) this.localTransforms[t]._mdf && (this.finalTransform._localMatMdf = !0), this.localTransforms[t]._opMdf && !this.finalTransform._opMdf && (this.finalTransform.localOpacity = this.finalTransform.mProp.o.v, this.finalTransform._opMdf = !0), t += 1;
        if (this.finalTransform._localMatMdf) {
          var i = this.finalTransform.localMat;
          for (this.localTransforms[0].matrix.clone(i), t = 1; t < e; t += 1) {
            var r = this.localTransforms[t].matrix;
            i.multiply(r);
          }
          i.multiply(this.finalTransform.mat);
        }
        if (this.finalTransform._opMdf) {
          var a = this.finalTransform.localOpacity;
          for (t = 0; t < e; t += 1) a *= 0.01 * this.localTransforms[t].opacity;
          this.finalTransform.localOpacity = a;
        }
      }
    }, searchEffectTransforms: function() {
      if (this.renderableEffectsManager) {
        var t = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
        if (t.length) {
          this.localTransforms = [], this.finalTransform.localMat = new Matrix();
          var e = 0, i = t.length;
          for (e = 0; e < i; e += 1) this.localTransforms.push(t[e]);
        }
      }
    }, globalToLocal: function(t) {
      var e = [];
      e.push(this.finalTransform);
      for (var i, r = !0, a = this.comp; r; ) a.finalTransform ? (a.data.hasMask && e.splice(0, 0, a.finalTransform), a = a.comp) : r = !1;
      var n, l = e.length;
      for (i = 0; i < l; i += 1) n = e[i].mat.applyToPointArray(0, 0, 0), t = [t[0] - n[0], t[1] - n[1], 0];
      return t;
    }, mHelper: new Matrix() }, MaskElement.prototype.getMaskProperty = function(t) {
      return this.viewData[t].prop;
    }, MaskElement.prototype.renderFrame = function(t) {
      var e, i = this.element.finalTransform.mat, r = this.masksProperties.length;
      for (e = 0; e < r; e += 1) if ((this.viewData[e].prop._mdf || t) && this.drawPath(this.masksProperties[e], this.viewData[e].prop.v, this.viewData[e]), (this.viewData[e].op._mdf || t) && this.viewData[e].elem.setAttribute("fill-opacity", this.viewData[e].op.v), this.masksProperties[e].mode !== "n" && (this.viewData[e].invRect && (this.element.finalTransform.mProp._mdf || t) && this.viewData[e].invRect.setAttribute("transform", i.getInverseMatrix().to2dCSS()), this.storedData[e].x && (this.storedData[e].x._mdf || t))) {
        var a = this.storedData[e].expan;
        this.storedData[e].x.v < 0 ? (this.storedData[e].lastOperator !== "erode" && (this.storedData[e].lastOperator = "erode", this.storedData[e].elem.setAttribute("filter", "url(" + getLocationHref() + "#" + this.storedData[e].filterId + ")")), a.setAttribute("radius", -this.storedData[e].x.v)) : (this.storedData[e].lastOperator !== "dilate" && (this.storedData[e].lastOperator = "dilate", this.storedData[e].elem.setAttribute("filter", null)), this.storedData[e].elem.setAttribute("stroke-width", 2 * this.storedData[e].x.v));
      }
    }, MaskElement.prototype.getMaskelement = function() {
      return this.maskElement;
    }, MaskElement.prototype.createLayerSolidPath = function() {
      var t = "M0,0 ";
      return t += " h" + this.globalData.compSize.w, t += " v" + this.globalData.compSize.h, t += " h-" + this.globalData.compSize.w, t += " v-" + this.globalData.compSize.h + " ";
    }, MaskElement.prototype.drawPath = function(t, e, i) {
      var r, a, n = " M" + e.v[0][0] + "," + e.v[0][1];
      for (a = e._length, r = 1; r < a; r += 1) n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[r][0] + "," + e.i[r][1] + " " + e.v[r][0] + "," + e.v[r][1];
      if (e.c && a > 1 && (n += " C" + e.o[r - 1][0] + "," + e.o[r - 1][1] + " " + e.i[0][0] + "," + e.i[0][1] + " " + e.v[0][0] + "," + e.v[0][1]), i.lastPath !== n) {
        var l = "";
        i.elem && (e.c && (l = t.inv ? this.solidPath + n : n), i.elem.setAttribute("d", l)), i.lastPath = n;
      }
    }, MaskElement.prototype.destroy = function() {
      this.element = null, this.globalData = null, this.maskElement = null, this.data = null, this.masksProperties = null;
    };
    var filtersFactory = function() {
      var t = {};
      return t.createFilter = function(e, i) {
        var r = createNS("filter");
        return r.setAttribute("id", e), i !== !0 && (r.setAttribute("filterUnits", "objectBoundingBox"), r.setAttribute("x", "0%"), r.setAttribute("y", "0%"), r.setAttribute("width", "100%"), r.setAttribute("height", "100%")), r;
      }, t.createAlphaToLuminanceFilter = function() {
        var e = createNS("feColorMatrix");
        return e.setAttribute("type", "matrix"), e.setAttribute("color-interpolation-filters", "sRGB"), e.setAttribute("values", "0 0 0 1 0  0 0 0 1 0  0 0 0 1 0  0 0 0 1 1"), e;
      }, t;
    }(), featureSupport = function() {
      var t = { maskType: !0, svgLumaHidden: !0, offscreenCanvas: typeof OffscreenCanvas < "u" };
      return (/MSIE 10/i.test(navigator.userAgent) || /MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent) || /Edge\/\d./i.test(navigator.userAgent)) && (t.maskType = !1), /firefox/i.test(navigator.userAgent) && (t.svgLumaHidden = !1), t;
    }(), registeredEffects$1 = {}, idPrefix = "filter_result_";
    function SVGEffects(t) {
      var e, i, r = "SourceGraphic", a = t.data.ef ? t.data.ef.length : 0, n = createElementID(), l = filtersFactory.createFilter(n, !0), s = 0;
      for (this.filters = [], e = 0; e < a; e += 1) {
        i = null;
        var d = t.data.ef[e].ty;
        registeredEffects$1[d] && (i = new registeredEffects$1[d].effect(l, t.effectsManager.effectElements[e], t, idPrefix + s, r), r = idPrefix + s, registeredEffects$1[d].countsAsEffect && (s += 1)), i && this.filters.push(i);
      }
      s && (t.globalData.defs.appendChild(l), t.layerElement.setAttribute("filter", "url(" + getLocationHref() + "#" + n + ")")), this.filters.length && t.addRenderableComponent(this);
    }
    function registerEffect$1(t, e, i) {
      registeredEffects$1[t] = { effect: e, countsAsEffect: i };
    }
    function SVGBaseElement() {
    }
    function HierarchyElement() {
    }
    function RenderableDOMElement() {
    }
    function IImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.assetData && this.assetData.sid && (this.assetData = e.slotManager.getProp(this.assetData)), this.initElement(t, e, i), this.sourceRect = { top: 0, left: 0, width: this.assetData.w, height: this.assetData.h };
    }
    function ProcessedElement(t, e) {
      this.elem = t, this.pos = e;
    }
    function IShapeElement() {
    }
    SVGEffects.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
    }, SVGEffects.prototype.getEffects = function(t) {
      var e, i = this.filters.length, r = [];
      for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
      return r;
    }, SVGBaseElement.prototype = { initRendererElement: function() {
      this.layerElement = createNS("g");
    }, createContainerElements: function() {
      this.matteElement = createNS("g"), this.transformedElement = this.layerElement, this.maskedElement = this.layerElement, this._sizeChanged = !1;
      var t = null;
      if (this.data.td) {
        this.matteMasks = {};
        var e = createNS("g");
        e.setAttribute("id", this.layerId), e.appendChild(this.layerElement), t = e, this.globalData.defs.appendChild(e);
      } else this.data.tt ? (this.matteElement.appendChild(this.layerElement), t = this.matteElement, this.baseElement = this.matteElement) : this.baseElement = this.layerElement;
      if (this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.ty === 0 && !this.data.hd) {
        var i = createNS("clipPath"), r = createNS("path");
        r.setAttribute("d", "M0,0 L" + this.data.w + ",0 L" + this.data.w + "," + this.data.h + " L0," + this.data.h + "z");
        var a = createElementID();
        if (i.setAttribute("id", a), i.appendChild(r), this.globalData.defs.appendChild(i), this.checkMasks()) {
          var n = createNS("g");
          n.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), n.appendChild(this.layerElement), this.transformedElement = n, t ? t.appendChild(this.transformedElement) : this.baseElement = this.transformedElement;
        } else this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")");
      }
      this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      this.finalTransform._localMatMdf && this.transformedElement.setAttribute("transform", this.finalTransform.localMat.to2dCSS()), this.finalTransform._opMdf && this.transformedElement.setAttribute("opacity", this.finalTransform.localOpacity);
    }, destroyBaseElement: function() {
      this.layerElement = null, this.matteElement = null, this.maskManager.destroy();
    }, getBaseElement: function() {
      return this.data.hd ? null : this.baseElement;
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData), this.renderableEffectsManager = new SVGEffects(this), this.searchEffectTransforms();
    }, getMatte: function(t) {
      if (this.matteMasks || (this.matteMasks = {}), !this.matteMasks[t]) {
        var e, i, r, a, n = this.layerId + "_" + t;
        if (t === 1 || t === 3) {
          var l = createNS("mask");
          l.setAttribute("id", n), l.setAttribute("mask-type", t === 3 ? "luminance" : "alpha"), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), l.appendChild(r), this.globalData.defs.appendChild(l), featureSupport.maskType || t !== 1 || (l.setAttribute("mask-type", "luminance"), e = createElementID(), i = filtersFactory.createFilter(e), this.globalData.defs.appendChild(i), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), (a = createNS("g")).appendChild(r), l.appendChild(a), a.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"));
        } else if (t === 2) {
          var s = createNS("mask");
          s.setAttribute("id", n), s.setAttribute("mask-type", "alpha");
          var d = createNS("g");
          s.appendChild(d), e = createElementID(), i = filtersFactory.createFilter(e);
          var h = createNS("feComponentTransfer");
          h.setAttribute("in", "SourceGraphic"), i.appendChild(h);
          var o = createNS("feFuncA");
          o.setAttribute("type", "table"), o.setAttribute("tableValues", "1.0 0.0"), h.appendChild(o), this.globalData.defs.appendChild(i);
          var u = createNS("rect");
          u.setAttribute("width", this.comp.data.w), u.setAttribute("height", this.comp.data.h), u.setAttribute("x", "0"), u.setAttribute("y", "0"), u.setAttribute("fill", "#ffffff"), u.setAttribute("opacity", "0"), d.setAttribute("filter", "url(" + getLocationHref() + "#" + e + ")"), d.appendChild(u), (r = createNS("use")).setAttributeNS("http://www.w3.org/1999/xlink", "href", "#" + this.layerId), d.appendChild(r), featureSupport.maskType || (s.setAttribute("mask-type", "luminance"), i.appendChild(filtersFactory.createAlphaToLuminanceFilter()), a = createNS("g"), d.appendChild(u), a.appendChild(this.layerElement), d.appendChild(a)), this.globalData.defs.appendChild(s);
        }
        this.matteMasks[t] = n;
      }
      return this.matteMasks[t];
    }, setMatte: function(t) {
      this.matteElement && this.matteElement.setAttribute("mask", "url(" + getLocationHref() + "#" + t + ")");
    } }, HierarchyElement.prototype = { initHierarchy: function() {
      this.hierarchy = [], this._isParent = !1, this.checkParenting();
    }, setHierarchy: function(t) {
      this.hierarchy = t;
    }, setAsParent: function() {
      this._isParent = !0;
    }, checkParenting: function() {
      this.data.parent !== void 0 && this.comp.buildElementParenting(this, this.data.parent, []);
    } }, extendPrototype([RenderableElement, createProxyFunction({ initElement: function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide();
    }, hide: function() {
      this.hidden || this.isInRange && !this.isTransparent || ((this.baseElement || this.layerElement).style.display = "none", this.hidden = !0);
    }, show: function() {
      this.isInRange && !this.isTransparent && (this.data.hd || ((this.baseElement || this.layerElement).style.display = "block"), this.hidden = !1, this._isFirstFrame = !0);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
    }, renderInnerContent: function() {
    }, prepareFrame: function(t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.checkTransparency();
    }, destroy: function() {
      this.innerElem = null, this.destroyBaseElement();
    } })], RenderableDOMElement), extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], IImageElement), IImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData);
      this.innerElem = createNS("image"), this.innerElem.setAttribute("width", this.assetData.w + "px"), this.innerElem.setAttribute("height", this.assetData.h + "px"), this.innerElem.setAttribute("preserveAspectRatio", this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio), this.innerElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.innerElem);
    }, IImageElement.prototype.sourceRectAtTime = function() {
      return this.sourceRect;
    }, IShapeElement.prototype = { addShapeToModifiers: function(t) {
      var e, i = this.shapeModifiers.length;
      for (e = 0; e < i; e += 1) this.shapeModifiers[e].addShape(t);
    }, isShapeInAnimatedModifiers: function(t) {
      for (var e = this.shapeModifiers.length; 0 < e; ) if (this.shapeModifiers[0].isAnimatedWithShape(t)) return !0;
      return !1;
    }, renderModifiers: function() {
      if (this.shapeModifiers.length) {
        var t, e = this.shapes.length;
        for (t = 0; t < e; t += 1) this.shapes[t].sh.reset();
        for (t = (e = this.shapeModifiers.length) - 1; t >= 0 && !this.shapeModifiers[t].processShapes(this._isFirstFrame); t -= 1) ;
      }
    }, searchProcessedElement: function(t) {
      for (var e = this.processedElements, i = 0, r = e.length; i < r; ) {
        if (e[i].elem === t) return e[i].pos;
        i += 1;
      }
      return 0;
    }, addProcessedElement: function(t, e) {
      for (var i = this.processedElements, r = i.length; r; ) if (i[r -= 1].elem === t) return void (i[r].pos = e);
      i.push(new ProcessedElement(t, e));
    }, prepareFrame: function(t) {
      this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    } };
    var lineCapEnum = { 1: "butt", 2: "round", 3: "square" }, lineJoinEnum = { 1: "miter", 2: "round", 3: "bevel" };
    function SVGShapeData(t, e, i) {
      this.caches = [], this.styles = [], this.transformers = t, this.lStr = "", this.sh = i, this.lvl = e, this._isAnimated = !!i.k;
      for (var r = 0, a = t.length; r < a; ) {
        if (t[r].mProps.dynamicProperties.length) {
          this._isAnimated = !0;
          break;
        }
        r += 1;
      }
    }
    function SVGStyleData(t, e) {
      this.data = t, this.type = t.ty, this.d = "", this.lvl = e, this._mdf = !1, this.closed = t.hd === !0, this.pElem = createNS("path"), this.msElem = null;
    }
    function DashProperty(t, e, i, r) {
      var a;
      this.elem = t, this.frameId = -1, this.dataProps = createSizedArray(e.length), this.renderer = i, this.k = !1, this.dashStr = "", this.dashArray = createTypedArray("float32", e.length ? e.length - 1 : 0), this.dashoffset = createTypedArray("float32", 1), this.initDynamicPropertyContainer(r);
      var n, l = e.length || 0;
      for (a = 0; a < l; a += 1) n = PropertyFactory.getProp(t, e[a].v, 0, 0, this), this.k = n.k || this.k, this.dataProps[a] = { n: e[a].n, p: n };
      this.k || this.getValue(!0), this._isAnimated = this.k;
    }
    function SVGStrokeStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i, this._isAnimated = !!this._isAnimated;
    }
    function SVGFillStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.c = PropertyFactory.getProp(t, e.c, 1, 255, this), this.style = i;
    }
    function SVGNoStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.style = i;
    }
    function GradientProperty(t, e, i) {
      this.data = e, this.c = createTypedArray("uint8c", 4 * e.p);
      var r = e.k.k[0].s ? e.k.k[0].s.length - 4 * e.p : e.k.k.length - 4 * e.p;
      this.o = createTypedArray("float32", r), this._cmdf = !1, this._omdf = !1, this._collapsable = this.checkCollapsable(), this._hasOpacity = r, this.initDynamicPropertyContainer(i), this.prop = PropertyFactory.getProp(t, e.k, 1, null, this), this.k = this.prop.k, this.getValue(!0);
    }
    function SVGGradientFillStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.initGradientData(t, e, i);
    }
    function SVGGradientStrokeStyleData(t, e, i) {
      this.initDynamicPropertyContainer(t), this.getValue = this.iterateDynamicProperties, this.w = PropertyFactory.getProp(t, e.w, 0, null, this), this.d = new DashProperty(t, e.d || {}, "svg", this), this.initGradientData(t, e, i), this._isAnimated = !!this._isAnimated;
    }
    function ShapeGroupData() {
      this.it = [], this.prevViewData = [], this.gr = createNS("g");
    }
    function SVGTransformData(t, e, i) {
      this.transform = { mProps: t, op: e, container: i }, this.elements = [], this._isAnimated = this.transform.mProps.dynamicProperties.length || this.transform.op.effectsSequence.length;
    }
    SVGShapeData.prototype.setAsAnimated = function() {
      this._isAnimated = !0;
    }, SVGStyleData.prototype.reset = function() {
      this.d = "", this._mdf = !1;
    }, DashProperty.prototype.getValue = function(t) {
      if ((this.elem.globalData.frameId !== this.frameId || t) && (this.frameId = this.elem.globalData.frameId, this.iterateDynamicProperties(), this._mdf = this._mdf || t, this._mdf)) {
        var e = 0, i = this.dataProps.length;
        for (this.renderer === "svg" && (this.dashStr = ""), e = 0; e < i; e += 1) this.dataProps[e].n !== "o" ? this.renderer === "svg" ? this.dashStr += " " + this.dataProps[e].p.v : this.dashArray[e] = this.dataProps[e].p.v : this.dashoffset[0] = this.dataProps[e].p.v;
      }
    }, extendPrototype([DynamicPropertyContainer], DashProperty), extendPrototype([DynamicPropertyContainer], SVGStrokeStyleData), extendPrototype([DynamicPropertyContainer], SVGFillStyleData), extendPrototype([DynamicPropertyContainer], SVGNoStyleData), GradientProperty.prototype.comparePoints = function(t, e) {
      for (var i = 0, r = this.o.length / 2; i < r; ) {
        if (Math.abs(t[4 * i] - t[4 * e + 2 * i]) > 0.01) return !1;
        i += 1;
      }
      return !0;
    }, GradientProperty.prototype.checkCollapsable = function() {
      if (this.o.length / 2 != this.c.length / 4) return !1;
      if (this.data.k.k[0].s) for (var t = 0, e = this.data.k.k.length; t < e; ) {
        if (!this.comparePoints(this.data.k.k[t].s, this.data.p)) return !1;
        t += 1;
      }
      else if (!this.comparePoints(this.data.k.k, this.data.p)) return !1;
      return !0;
    }, GradientProperty.prototype.getValue = function(t) {
      if (this.prop.getValue(), this._mdf = !1, this._cmdf = !1, this._omdf = !1, this.prop._mdf || t) {
        var e, i, r, a = 4 * this.data.p;
        for (e = 0; e < a; e += 1) i = e % 4 == 0 ? 100 : 255, r = Math.round(this.prop.v[e] * i), this.c[e] !== r && (this.c[e] = r, this._cmdf = !t);
        if (this.o.length) for (a = this.prop.v.length, e = 4 * this.data.p; e < a; e += 1) i = e % 2 == 0 ? 100 : 1, r = e % 2 == 0 ? Math.round(100 * this.prop.v[e]) : this.prop.v[e], this.o[e - 4 * this.data.p] !== r && (this.o[e - 4 * this.data.p] = r, this._omdf = !t);
        this._mdf = !t;
      }
    }, extendPrototype([DynamicPropertyContainer], GradientProperty), SVGGradientFillStyleData.prototype.initGradientData = function(t, e, i) {
      this.o = PropertyFactory.getProp(t, e.o, 0, 0.01, this), this.s = PropertyFactory.getProp(t, e.s, 1, null, this), this.e = PropertyFactory.getProp(t, e.e, 1, null, this), this.h = PropertyFactory.getProp(t, e.h || { k: 0 }, 0, 0.01, this), this.a = PropertyFactory.getProp(t, e.a || { k: 0 }, 0, degToRads, this), this.g = new GradientProperty(t, e.g, this), this.style = i, this.stops = [], this.setGradientData(i.pElem, e), this.setGradientOpacity(e, i), this._isAnimated = !!this._isAnimated;
    }, SVGGradientFillStyleData.prototype.setGradientData = function(t, e) {
      var i = createElementID(), r = createNS(e.t === 1 ? "linearGradient" : "radialGradient");
      r.setAttribute("id", i), r.setAttribute("spreadMethod", "pad"), r.setAttribute("gradientUnits", "userSpaceOnUse");
      var a, n, l, s = [];
      for (l = 4 * e.g.p, n = 0; n < l; n += 4) a = createNS("stop"), r.appendChild(a), s.push(a);
      t.setAttribute(e.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + i + ")"), this.gf = r, this.cst = s;
    }, SVGGradientFillStyleData.prototype.setGradientOpacity = function(t, e) {
      if (this.g._hasOpacity && !this.g._collapsable) {
        var i, r, a, n = createNS("mask"), l = createNS("path");
        n.appendChild(l);
        var s = createElementID(), d = createElementID();
        n.setAttribute("id", d);
        var h = createNS(t.t === 1 ? "linearGradient" : "radialGradient");
        h.setAttribute("id", s), h.setAttribute("spreadMethod", "pad"), h.setAttribute("gradientUnits", "userSpaceOnUse"), a = t.g.k.k[0].s ? t.g.k.k[0].s.length : t.g.k.k.length;
        var o = this.stops;
        for (r = 4 * t.g.p; r < a; r += 2) (i = createNS("stop")).setAttribute("stop-color", "rgb(255,255,255)"), h.appendChild(i), o.push(i);
        l.setAttribute(t.ty === "gf" ? "fill" : "stroke", "url(" + getLocationHref() + "#" + s + ")"), t.ty === "gs" && (l.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), l.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), t.lj === 1 && l.setAttribute("stroke-miterlimit", t.ml)), this.of = h, this.ms = n, this.ost = o, this.maskId = d, e.msElem = l;
      }
    }, extendPrototype([DynamicPropertyContainer], SVGGradientFillStyleData), extendPrototype([SVGGradientFillStyleData, DynamicPropertyContainer], SVGGradientStrokeStyleData);
    var buildShapeString = function(t, e, i, r) {
      if (e === 0) return "";
      var a, n = t.o, l = t.i, s = t.v, d = " M" + r.applyToPointStringified(s[0][0], s[0][1]);
      for (a = 1; a < e; a += 1) d += " C" + r.applyToPointStringified(n[a - 1][0], n[a - 1][1]) + " " + r.applyToPointStringified(l[a][0], l[a][1]) + " " + r.applyToPointStringified(s[a][0], s[a][1]);
      return i && e && (d += " C" + r.applyToPointStringified(n[a - 1][0], n[a - 1][1]) + " " + r.applyToPointStringified(l[0][0], l[0][1]) + " " + r.applyToPointStringified(s[0][0], s[0][1]), d += "z"), d;
    }, SVGElementsRenderer = function() {
      var t = new Matrix(), e = new Matrix();
      function i(h, o, u) {
        (u || o.transform.op._mdf) && o.transform.container.setAttribute("opacity", o.transform.op.v), (u || o.transform.mProps._mdf) && o.transform.container.setAttribute("transform", o.transform.mProps.v.to2dCSS());
      }
      function r() {
      }
      function a(h, o, u) {
        var m, f, c, g, p, y, v, _, b, T, k = o.styles.length, x = o.lvl;
        for (y = 0; y < k; y += 1) {
          if (g = o.sh._mdf || u, o.styles[y].lvl < x) {
            for (_ = e.reset(), b = x - o.styles[y].lvl, T = o.transformers.length - 1; !g && b > 0; ) g = o.transformers[T].mProps._mdf || g, b -= 1, T -= 1;
            if (g) for (b = x - o.styles[y].lvl, T = o.transformers.length - 1; b > 0; ) _.multiply(o.transformers[T].mProps.v), b -= 1, T -= 1;
          } else _ = t;
          if (f = (v = o.sh.paths)._length, g) {
            for (c = "", m = 0; m < f; m += 1) (p = v.shapes[m]) && p._length && (c += buildShapeString(p, p._length, p.c, _));
            o.caches[y] = c;
          } else c = o.caches[y];
          o.styles[y].d += h.hd === !0 ? "" : c, o.styles[y]._mdf = g || o.styles[y]._mdf;
        }
      }
      function n(h, o, u) {
        var m = o.style;
        (o.c._mdf || u) && m.pElem.setAttribute("fill", "rgb(" + bmFloor(o.c.v[0]) + "," + bmFloor(o.c.v[1]) + "," + bmFloor(o.c.v[2]) + ")"), (o.o._mdf || u) && m.pElem.setAttribute("fill-opacity", o.o.v);
      }
      function l(h, o, u) {
        s(h, o, u), d(h, o, u);
      }
      function s(h, o, u) {
        var m, f, c, g, p, y = o.gf, v = o.g._hasOpacity, _ = o.s.v, b = o.e.v;
        if (o.o._mdf || u) {
          var T = h.ty === "gf" ? "fill-opacity" : "stroke-opacity";
          o.style.pElem.setAttribute(T, o.o.v);
        }
        if (o.s._mdf || u) {
          var k = h.t === 1 ? "x1" : "cx", x = k === "x1" ? "y1" : "cy";
          y.setAttribute(k, _[0]), y.setAttribute(x, _[1]), v && !o.g._collapsable && (o.of.setAttribute(k, _[0]), o.of.setAttribute(x, _[1]));
        }
        if (o.g._cmdf || u) {
          m = o.cst;
          var A = o.g.c;
          for (c = m.length, f = 0; f < c; f += 1) (g = m[f]).setAttribute("offset", A[4 * f] + "%"), g.setAttribute("stop-color", "rgb(" + A[4 * f + 1] + "," + A[4 * f + 2] + "," + A[4 * f + 3] + ")");
        }
        if (v && (o.g._omdf || u)) {
          var w = o.g.o;
          for (c = (m = o.g._collapsable ? o.cst : o.ost).length, f = 0; f < c; f += 1) g = m[f], o.g._collapsable || g.setAttribute("offset", w[2 * f] + "%"), g.setAttribute("stop-opacity", w[2 * f + 1]);
        }
        if (h.t === 1) (o.e._mdf || u) && (y.setAttribute("x2", b[0]), y.setAttribute("y2", b[1]), v && !o.g._collapsable && (o.of.setAttribute("x2", b[0]), o.of.setAttribute("y2", b[1])));
        else if ((o.s._mdf || o.e._mdf || u) && (p = Math.sqrt(Math.pow(_[0] - b[0], 2) + Math.pow(_[1] - b[1], 2)), y.setAttribute("r", p), v && !o.g._collapsable && o.of.setAttribute("r", p)), o.e._mdf || o.h._mdf || o.a._mdf || u) {
          p || (p = Math.sqrt(Math.pow(_[0] - b[0], 2) + Math.pow(_[1] - b[1], 2)));
          var S = Math.atan2(b[1] - _[1], b[0] - _[0]), P = o.h.v;
          P >= 1 ? P = 0.99 : P <= -1 && (P = -0.99);
          var F = p * P, I = Math.cos(S + o.a.v) * F + _[0], M = Math.sin(S + o.a.v) * F + _[1];
          y.setAttribute("fx", I), y.setAttribute("fy", M), v && !o.g._collapsable && (o.of.setAttribute("fx", I), o.of.setAttribute("fy", M));
        }
      }
      function d(h, o, u) {
        var m = o.style, f = o.d;
        f && (f._mdf || u) && f.dashStr && (m.pElem.setAttribute("stroke-dasharray", f.dashStr), m.pElem.setAttribute("stroke-dashoffset", f.dashoffset[0])), o.c && (o.c._mdf || u) && m.pElem.setAttribute("stroke", "rgb(" + bmFloor(o.c.v[0]) + "," + bmFloor(o.c.v[1]) + "," + bmFloor(o.c.v[2]) + ")"), (o.o._mdf || u) && m.pElem.setAttribute("stroke-opacity", o.o.v), (o.w._mdf || u) && (m.pElem.setAttribute("stroke-width", o.w.v), m.msElem && m.msElem.setAttribute("stroke-width", o.w.v));
      }
      return { createRenderFunction: function(h) {
        switch (h.ty) {
          case "fl":
            return n;
          case "gf":
            return s;
          case "gs":
            return l;
          case "st":
            return d;
          case "sh":
          case "el":
          case "rc":
          case "sr":
            return a;
          case "tr":
            return i;
          case "no":
            return r;
          default:
            return null;
        }
      } };
    }();
    function SVGShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.initElement(t, e, i), this.prevViewData = [];
    }
    function LetterProps(t, e, i, r, a, n) {
      this.o = t, this.sw = e, this.sc = i, this.fc = r, this.m = a, this.p = n, this._mdf = { o: !0, sw: !!e, sc: !!i, fc: !!r, m: !0, p: !0 };
    }
    function TextProperty(t, e) {
      this._frameId = initialDefaultFrame, this.pv = "", this.v = "", this.kf = !1, this._isFirstFrame = !0, this._mdf = !1, e.d && e.d.sid && (e.d = t.globalData.slotManager.getProp(e.d)), this.data = e, this.elem = t, this.comp = this.elem.comp, this.keysIndex = 0, this.canResize = !1, this.minimumFontSize = 1, this.effectsSequence = [], this.currentData = { ascent: 0, boxWidth: this.defaultBoxWidth, f: "", fStyle: "", fWeight: "", fc: "", j: "", justifyOffset: "", l: [], lh: 0, lineWidths: [], ls: "", of: "", s: "", sc: "", sw: 0, t: 0, tr: 0, sz: 0, ps: null, fillColorAnim: !1, strokeColorAnim: !1, strokeWidthAnim: !1, yOffset: 0, finalSize: 0, finalText: [], finalLineHeight: 0, __complete: !1 }, this.copyData(this.currentData, this.data.d.k[0].s), this.searchProperty() || this.completeTextData(this.currentData);
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableDOMElement], SVGShapeElement), SVGShapeElement.prototype.initSecondaryElement = function() {
    }, SVGShapeElement.prototype.identityMatrix = new Matrix(), SVGShapeElement.prototype.buildExpressionInterface = function() {
    }, SVGShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes();
    }, SVGShapeElement.prototype.filterUniqueShapes = function() {
      var t, e, i, r, a = this.shapes.length, n = this.stylesList.length, l = [], s = !1;
      for (i = 0; i < n; i += 1) {
        for (r = this.stylesList[i], s = !1, l.length = 0, t = 0; t < a; t += 1) (e = this.shapes[t]).styles.indexOf(r) !== -1 && (l.push(e), s = e._isAnimated || s);
        l.length > 1 && s && this.setShapesAsAnimated(l);
      }
    }, SVGShapeElement.prototype.setShapesAsAnimated = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].setAsAnimated();
    }, SVGShapeElement.prototype.createStyleElement = function(t, e) {
      var i, r = new SVGStyleData(t, e), a = r.pElem;
      return t.ty === "st" ? i = new SVGStrokeStyleData(this, t, r) : t.ty === "fl" ? i = new SVGFillStyleData(this, t, r) : t.ty === "gf" || t.ty === "gs" ? (i = new (t.ty === "gf" ? SVGGradientFillStyleData : SVGGradientStrokeStyleData)(this, t, r), this.globalData.defs.appendChild(i.gf), i.maskId && (this.globalData.defs.appendChild(i.ms), this.globalData.defs.appendChild(i.of), a.setAttribute("mask", "url(" + getLocationHref() + "#" + i.maskId + ")"))) : t.ty === "no" && (i = new SVGNoStyleData(this, t, r)), t.ty !== "st" && t.ty !== "gs" || (a.setAttribute("stroke-linecap", lineCapEnum[t.lc || 2]), a.setAttribute("stroke-linejoin", lineJoinEnum[t.lj || 2]), a.setAttribute("fill-opacity", "0"), t.lj === 1 && a.setAttribute("stroke-miterlimit", t.ml)), t.r === 2 && a.setAttribute("fill-rule", "evenodd"), t.ln && a.setAttribute("id", t.ln), t.cl && a.setAttribute("class", t.cl), t.bm && (a.style["mix-blend-mode"] = getBlendMode(t.bm)), this.stylesList.push(r), this.addToAnimatedContents(t, i), i;
    }, SVGShapeElement.prototype.createGroupElement = function(t) {
      var e = new ShapeGroupData();
      return t.ln && e.gr.setAttribute("id", t.ln), t.cl && e.gr.setAttribute("class", t.cl), t.bm && (e.gr.style["mix-blend-mode"] = getBlendMode(t.bm)), e;
    }, SVGShapeElement.prototype.createTransformElement = function(t, e) {
      var i = TransformPropertyFactory.getTransformProperty(this, t, this), r = new SVGTransformData(i, i.o, e);
      return this.addToAnimatedContents(t, r), r;
    }, SVGShapeElement.prototype.createShapeElement = function(t, e, i) {
      var r = 4;
      t.ty === "rc" ? r = 5 : t.ty === "el" ? r = 6 : t.ty === "sr" && (r = 7);
      var a = new SVGShapeData(e, i, ShapePropertyFactory.getShapeProp(this, t, r, this));
      return this.shapes.push(a), this.addShapeToModifiers(a), this.addToAnimatedContents(t, a), a;
    }, SVGShapeElement.prototype.addToAnimatedContents = function(t, e) {
      for (var i = 0, r = this.animatedContents.length; i < r; ) {
        if (this.animatedContents[i].element === e) return;
        i += 1;
      }
      this.animatedContents.push({ fn: SVGElementsRenderer.createRenderFunction(t), element: e, data: t });
    }, SVGShapeElement.prototype.setElementStyles = function(t) {
      var e, i = t.styles, r = this.stylesList.length;
      for (e = 0; e < r; e += 1) this.stylesList[e].closed || i.push(this.stylesList[e]);
    }, SVGShapeElement.prototype.reloadShapes = function() {
      var t;
      this._isFirstFrame = !0;
      var e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.layerElement, 0, [], !0), this.filterUniqueShapes(), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers();
    }, SVGShapeElement.prototype.searchShapes = function(t, e, i, r, a, n, l) {
      var s, d, h, o, u, m, f = [].concat(n), c = t.length - 1, g = [], p = [];
      for (s = c; s >= 0; s -= 1) {
        if ((m = this.searchProcessedElement(t[s])) ? e[s] = i[m - 1] : t[s]._render = l, t[s].ty === "fl" || t[s].ty === "st" || t[s].ty === "gf" || t[s].ty === "gs" || t[s].ty === "no") m ? e[s].style.closed = !1 : e[s] = this.createStyleElement(t[s], a), t[s]._render && e[s].style.pElem.parentNode !== r && r.appendChild(e[s].style.pElem), g.push(e[s].style);
        else if (t[s].ty === "gr") {
          if (m) for (h = e[s].it.length, d = 0; d < h; d += 1) e[s].prevViewData[d] = e[s].it[d];
          else e[s] = this.createGroupElement(t[s]);
          this.searchShapes(t[s].it, e[s].it, e[s].prevViewData, e[s].gr, a + 1, f, l), t[s]._render && e[s].gr.parentNode !== r && r.appendChild(e[s].gr);
        } else t[s].ty === "tr" ? (m || (e[s] = this.createTransformElement(t[s], r)), o = e[s].transform, f.push(o)) : t[s].ty === "sh" || t[s].ty === "rc" || t[s].ty === "el" || t[s].ty === "sr" ? (m || (e[s] = this.createShapeElement(t[s], f, a)), this.setElementStyles(e[s])) : t[s].ty === "tm" || t[s].ty === "rd" || t[s].ty === "ms" || t[s].ty === "pb" || t[s].ty === "zz" || t[s].ty === "op" ? (m ? (u = e[s]).closed = !1 : ((u = ShapeModifiers.getModifier(t[s].ty)).init(this, t[s]), e[s] = u, this.shapeModifiers.push(u)), p.push(u)) : t[s].ty === "rp" && (m ? (u = e[s]).closed = !0 : (u = ShapeModifiers.getModifier(t[s].ty), e[s] = u, u.init(this, t, s, e), this.shapeModifiers.push(u), l = !1), p.push(u));
        this.addProcessedElement(t[s], s + 1);
      }
      for (c = g.length, s = 0; s < c; s += 1) g[s].closed = !0;
      for (c = p.length, s = 0; s < c; s += 1) p[s].closed = !0;
    }, SVGShapeElement.prototype.renderInnerContent = function() {
      var t;
      this.renderModifiers();
      var e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].reset();
      for (this.renderShape(), t = 0; t < e; t += 1) (this.stylesList[t]._mdf || this._isFirstFrame) && (this.stylesList[t].msElem && (this.stylesList[t].msElem.setAttribute("d", this.stylesList[t].d), this.stylesList[t].d = "M0 0" + this.stylesList[t].d), this.stylesList[t].pElem.setAttribute("d", this.stylesList[t].d || "M0 0"));
    }, SVGShapeElement.prototype.renderShape = function() {
      var t, e, i = this.animatedContents.length;
      for (t = 0; t < i; t += 1) e = this.animatedContents[t], (this._isFirstFrame || e.element._isAnimated) && e.data !== !0 && e.fn(e.data, e.element, this._isFirstFrame);
    }, SVGShapeElement.prototype.destroy = function() {
      this.destroyBaseElement(), this.shapesData = null, this.itemsData = null;
    }, LetterProps.prototype.update = function(t, e, i, r, a, n) {
      this._mdf.o = !1, this._mdf.sw = !1, this._mdf.sc = !1, this._mdf.fc = !1, this._mdf.m = !1, this._mdf.p = !1;
      var l = !1;
      return this.o !== t && (this.o = t, this._mdf.o = !0, l = !0), this.sw !== e && (this.sw = e, this._mdf.sw = !0, l = !0), this.sc !== i && (this.sc = i, this._mdf.sc = !0, l = !0), this.fc !== r && (this.fc = r, this._mdf.fc = !0, l = !0), this.m !== a && (this.m = a, this._mdf.m = !0, l = !0), !n.length || this.p[0] === n[0] && this.p[1] === n[1] && this.p[4] === n[4] && this.p[5] === n[5] && this.p[12] === n[12] && this.p[13] === n[13] || (this.p = n, this._mdf.p = !0, l = !0), l;
    }, TextProperty.prototype.defaultBoxWidth = [0, 0], TextProperty.prototype.copyData = function(t, e) {
      for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (t[i] = e[i]);
      return t;
    }, TextProperty.prototype.setCurrentData = function(t) {
      t.__complete || this.completeTextData(t), this.currentData = t, this.currentData.boxWidth = this.currentData.boxWidth || this.defaultBoxWidth, this._mdf = !0;
    }, TextProperty.prototype.searchProperty = function() {
      return this.searchKeyframes();
    }, TextProperty.prototype.searchKeyframes = function() {
      return this.kf = this.data.d.k.length > 1, this.kf && this.addEffect(this.getKeyframeValue.bind(this)), this.kf;
    }, TextProperty.prototype.addEffect = function(t) {
      this.effectsSequence.push(t), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.getValue = function(t) {
      if (this.elem.globalData.frameId !== this.frameId && this.effectsSequence.length || t) {
        this.currentData.t = this.data.d.k[this.keysIndex].s.t;
        var e = this.currentData, i = this.keysIndex;
        if (this.lock) this.setCurrentData(this.currentData);
        else {
          var r;
          this.lock = !0, this._mdf = !1;
          var a = this.effectsSequence.length, n = t || this.data.d.k[this.keysIndex].s;
          for (r = 0; r < a; r += 1) n = i !== this.keysIndex ? this.effectsSequence[r](n, n.t) : this.effectsSequence[r](this.currentData, n.t);
          e !== n && this.setCurrentData(n), this.v = this.currentData, this.pv = this.v, this.lock = !1, this.frameId = this.elem.globalData.frameId;
        }
      }
    }, TextProperty.prototype.getKeyframeValue = function() {
      for (var t = this.data.d.k, e = this.elem.comp.renderedFrame, i = 0, r = t.length; i <= r - 1 && !(i === r - 1 || t[i + 1].t > e); ) i += 1;
      return this.keysIndex !== i && (this.keysIndex = i), this.data.d.k[this.keysIndex].s;
    }, TextProperty.prototype.buildFinalText = function(t) {
      for (var e, i, r = [], a = 0, n = t.length, l = !1, s = !1, d = ""; a < n; ) l = s, s = !1, e = t.charCodeAt(a), d = t.charAt(a), FontManager.isCombinedCharacter(e) ? l = !0 : e >= 55296 && e <= 56319 ? FontManager.isRegionalFlag(t, a) ? d = t.substr(a, 14) : (i = t.charCodeAt(a + 1)) >= 56320 && i <= 57343 && (FontManager.isModifier(e, i) ? (d = t.substr(a, 2), l = !0) : d = FontManager.isFlagEmoji(t.substr(a, 4)) ? t.substr(a, 4) : t.substr(a, 2)) : e > 56319 ? (i = t.charCodeAt(a + 1), FontManager.isVariationSelector(e) && (l = !0)) : FontManager.isZeroWidthJoiner(e) && (l = !0, s = !0), l ? (r[r.length - 1] += d, l = !1) : r.push(d), a += d.length;
      return r;
    }, TextProperty.prototype.completeTextData = function(t) {
      t.__complete = !0;
      var e, i, r, a, n, l, s, d = this.elem.globalData.fontManager, h = this.data, o = [], u = 0, m = h.m.g, f = 0, c = 0, g = 0, p = [], y = 0, v = 0, _ = d.getFontByName(t.f), b = 0, T = getFontProperties(_);
      t.fWeight = T.weight, t.fStyle = T.style, t.finalSize = t.s, t.finalText = this.buildFinalText(t.t), i = t.finalText.length, t.finalLineHeight = t.lh;
      var k, x = t.tr / 1e3 * t.finalSize;
      if (t.sz) for (var A, w, S = !0, P = t.sz[0], F = t.sz[1]; S; ) {
        A = 0, y = 0, i = (w = this.buildFinalText(t.t)).length, x = t.tr / 1e3 * t.finalSize;
        var I = -1;
        for (e = 0; e < i; e += 1) k = w[e].charCodeAt(0), r = !1, w[e] === " " ? I = e : k !== 13 && k !== 3 || (y = 0, r = !0, A += t.finalLineHeight || 1.2 * t.finalSize), d.chars ? (s = d.getCharData(w[e], _.fStyle, _.fFamily), b = r ? 0 : s.w * t.finalSize / 100) : b = d.measureText(w[e], t.f, t.finalSize), y + b > P && w[e] !== " " ? (I === -1 ? i += 1 : e = I, A += t.finalLineHeight || 1.2 * t.finalSize, w.splice(e, I === e ? 1 : 0, "\r"), I = -1, y = 0) : (y += b, y += x);
        A += _.ascent * t.finalSize / 100, this.canResize && t.finalSize > this.minimumFontSize && F < A ? (t.finalSize -= 1, t.finalLineHeight = t.finalSize * t.lh / t.s) : (t.finalText = w, i = t.finalText.length, S = !1);
      }
      y = -x, b = 0;
      var M, L = 0;
      for (e = 0; e < i; e += 1) if (r = !1, (k = (M = t.finalText[e]).charCodeAt(0)) === 13 || k === 3 ? (L = 0, p.push(y), v = y > v ? y : v, y = -2 * x, a = "", r = !0, g += 1) : a = M, d.chars ? (s = d.getCharData(M, _.fStyle, d.getFontByName(t.f).fFamily), b = r ? 0 : s.w * t.finalSize / 100) : b = d.measureText(a, t.f, t.finalSize), M === " " ? L += b + x : (y += b + x + L, L = 0), o.push({ l: b, an: b, add: f, n: r, anIndexes: [], val: a, line: g, animatorJustifyOffset: 0 }), m == 2) {
        if (f += b, a === "" || a === " " || e === i - 1) {
          for (a !== "" && a !== " " || (f -= b); c <= e; ) o[c].an = f, o[c].ind = u, o[c].extra = b, c += 1;
          u += 1, f = 0;
        }
      } else if (m == 3) {
        if (f += b, a === "" || e === i - 1) {
          for (a === "" && (f -= b); c <= e; ) o[c].an = f, o[c].ind = u, o[c].extra = b, c += 1;
          f = 0, u += 1;
        }
      } else o[u].ind = u, o[u].extra = 0, u += 1;
      if (t.l = o, v = y > v ? y : v, p.push(y), t.sz) t.boxWidth = t.sz[0], t.justifyOffset = 0;
      else switch (t.boxWidth = v, t.j) {
        case 1:
          t.justifyOffset = -t.boxWidth;
          break;
        case 2:
          t.justifyOffset = -t.boxWidth / 2;
          break;
        default:
          t.justifyOffset = 0;
      }
      t.lineWidths = p;
      var N, Y, C, D, B = h.a;
      l = B.length;
      var V = [];
      for (n = 0; n < l; n += 1) {
        for ((N = B[n]).a.sc && (t.strokeColorAnim = !0), N.a.sw && (t.strokeWidthAnim = !0), (N.a.fc || N.a.fh || N.a.fs || N.a.fb) && (t.fillColorAnim = !0), D = 0, C = N.s.b, e = 0; e < i; e += 1) (Y = o[e]).anIndexes[n] = D, (C == 1 && Y.val !== "" || C == 2 && Y.val !== "" && Y.val !== " " || C == 3 && (Y.n || Y.val == " " || e == i - 1) || C == 4 && (Y.n || e == i - 1)) && (N.s.rn === 1 && V.push(D), D += 1);
        h.a[n].s.totalChars = D;
        var X, q = -1;
        if (N.s.rn === 1) for (e = 0; e < i; e += 1) q != (Y = o[e]).anIndexes[n] && (q = Y.anIndexes[n], X = V.splice(Math.floor(Math.random() * V.length), 1)[0]), Y.anIndexes[n] = X;
      }
      t.yOffset = t.finalLineHeight || 1.2 * t.finalSize, t.ls = t.ls || 0, t.ascent = _.ascent * t.finalSize / 100;
    }, TextProperty.prototype.updateDocumentData = function(t, e) {
      e = e === void 0 ? this.keysIndex : e;
      var i = this.copyData({}, this.data.d.k[e].s);
      i = this.copyData(i, t), this.data.d.k[e].s = i, this.recalculate(e), this.setCurrentData(i), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.recalculate = function(t) {
      var e = this.data.d.k[t].s;
      e.__complete = !1, this.keysIndex = 0, this._isFirstFrame = !0, this.getValue(e);
    }, TextProperty.prototype.canResizeFont = function(t) {
      this.canResize = t, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    }, TextProperty.prototype.setMinimumFontSize = function(t) {
      this.minimumFontSize = Math.floor(t) || 1, this.recalculate(this.keysIndex), this.elem.addDynamicProperty(this);
    };
    var TextSelectorProp = function() {
      var t = Math.max, e = Math.min, i = Math.floor;
      function r(a, n) {
        this._currentTextLength = -1, this.k = !1, this.data = n, this.elem = a, this.comp = a.comp, this.finalS = 0, this.finalE = 0, this.initDynamicPropertyContainer(a), this.s = PropertyFactory.getProp(a, n.s || { k: 0 }, 0, 0, this), this.e = "e" in n ? PropertyFactory.getProp(a, n.e, 0, 0, this) : { v: 100 }, this.o = PropertyFactory.getProp(a, n.o || { k: 0 }, 0, 0, this), this.xe = PropertyFactory.getProp(a, n.xe || { k: 0 }, 0, 0, this), this.ne = PropertyFactory.getProp(a, n.ne || { k: 0 }, 0, 0, this), this.sm = PropertyFactory.getProp(a, n.sm || { k: 100 }, 0, 0, this), this.a = PropertyFactory.getProp(a, n.a, 0, 0.01, this), this.dynamicProperties.length || this.getValue();
      }
      return r.prototype = { getMult: function(a) {
        this._currentTextLength !== this.elem.textProperty.currentData.l.length && this.getValue();
        var n = 0, l = 0, s = 1, d = 1;
        this.ne.v > 0 ? n = this.ne.v / 100 : l = -this.ne.v / 100, this.xe.v > 0 ? s = 1 - this.xe.v / 100 : d = 1 + this.xe.v / 100;
        var h = BezierFactory.getBezierEasing(n, l, s, d).get, o = 0, u = this.finalS, m = this.finalE, f = this.data.sh;
        if (f === 2) o = h(o = m === u ? a >= m ? 1 : 0 : t(0, e(0.5 / (m - u) + (a - u) / (m - u), 1)));
        else if (f === 3) o = h(o = m === u ? a >= m ? 0 : 1 : 1 - t(0, e(0.5 / (m - u) + (a - u) / (m - u), 1)));
        else if (f === 4) m === u ? o = 0 : (o = t(0, e(0.5 / (m - u) + (a - u) / (m - u), 1))) < 0.5 ? o *= 2 : o = 1 - 2 * (o - 0.5), o = h(o);
        else if (f === 5) {
          if (m === u) o = 0;
          else {
            var c = m - u, g = -c / 2 + (a = e(t(0, a + 0.5 - u), m - u)), p = c / 2;
            o = Math.sqrt(1 - g * g / (p * p));
          }
          o = h(o);
        } else f === 6 ? (m === u ? o = 0 : (a = e(t(0, a + 0.5 - u), m - u), o = (1 + Math.cos(Math.PI + 2 * Math.PI * a / (m - u))) / 2), o = h(o)) : (a >= i(u) && (o = t(0, e(a - u < 0 ? e(m, 1) - (u - a) : m - a, 1))), o = h(o));
        if (this.sm.v !== 100) {
          var y = 0.01 * this.sm.v;
          y === 0 && (y = 1e-8);
          var v = 0.5 - 0.5 * y;
          o < v ? o = 0 : (o = (o - v) / y) > 1 && (o = 1);
        }
        return o * this.a.v;
      }, getValue: function(a) {
        this.iterateDynamicProperties(), this._mdf = a || this._mdf, this._currentTextLength = this.elem.textProperty.currentData.l.length || 0, a && this.data.r === 2 && (this.e.v = this._currentTextLength);
        var n = this.data.r === 2 ? 1 : 100 / this.data.totalChars, l = this.o.v / n, s = this.s.v / n + l, d = this.e.v / n + l;
        if (s > d) {
          var h = s;
          s = d, d = h;
        }
        this.finalS = s, this.finalE = d;
      } }, extendPrototype([DynamicPropertyContainer], r), { getTextSelectorProp: function(a, n, l) {
        return new r(a, n);
      } };
    }();
    function TextAnimatorDataProperty(t, e, i) {
      var r = { propType: !1 }, a = PropertyFactory.getProp, n = e.a;
      this.a = { r: n.r ? a(t, n.r, 0, degToRads, i) : r, rx: n.rx ? a(t, n.rx, 0, degToRads, i) : r, ry: n.ry ? a(t, n.ry, 0, degToRads, i) : r, sk: n.sk ? a(t, n.sk, 0, degToRads, i) : r, sa: n.sa ? a(t, n.sa, 0, degToRads, i) : r, s: n.s ? a(t, n.s, 1, 0.01, i) : r, a: n.a ? a(t, n.a, 1, 0, i) : r, o: n.o ? a(t, n.o, 0, 0.01, i) : r, p: n.p ? a(t, n.p, 1, 0, i) : r, sw: n.sw ? a(t, n.sw, 0, 0, i) : r, sc: n.sc ? a(t, n.sc, 1, 0, i) : r, fc: n.fc ? a(t, n.fc, 1, 0, i) : r, fh: n.fh ? a(t, n.fh, 0, 0, i) : r, fs: n.fs ? a(t, n.fs, 0, 0.01, i) : r, fb: n.fb ? a(t, n.fb, 0, 0.01, i) : r, t: n.t ? a(t, n.t, 0, 0, i) : r }, this.s = TextSelectorProp.getTextSelectorProp(t, e.s, i), this.s.t = e.s.t;
    }
    function TextAnimatorProperty(t, e, i) {
      this._isFirstFrame = !0, this._hasMaskedPath = !1, this._frameId = -1, this._textData = t, this._renderType = e, this._elem = i, this._animatorsData = createSizedArray(this._textData.a.length), this._pathData = {}, this._moreOptions = { alignment: {} }, this.renderedLetters = [], this.lettersChangedFlag = !1, this.initDynamicPropertyContainer(i);
    }
    function ITextElement() {
    }
    TextAnimatorProperty.prototype.searchProperties = function() {
      var t, e, i = this._textData.a.length, r = PropertyFactory.getProp;
      for (t = 0; t < i; t += 1) e = this._textData.a[t], this._animatorsData[t] = new TextAnimatorDataProperty(this._elem, e, this);
      this._textData.p && "m" in this._textData.p ? (this._pathData = { a: r(this._elem, this._textData.p.a, 0, 0, this), f: r(this._elem, this._textData.p.f, 0, 0, this), l: r(this._elem, this._textData.p.l, 0, 0, this), r: r(this._elem, this._textData.p.r, 0, 0, this), p: r(this._elem, this._textData.p.p, 0, 0, this), m: this._elem.maskManager.getMaskProperty(this._textData.p.m) }, this._hasMaskedPath = !0) : this._hasMaskedPath = !1, this._moreOptions.alignment = r(this._elem, this._textData.m.a, 1, 0, this);
    }, TextAnimatorProperty.prototype.getMeasures = function(t, e) {
      if (this.lettersChangedFlag = e, this._mdf || this._isFirstFrame || e || this._hasMaskedPath && this._pathData.m._mdf) {
        this._isFirstFrame = !1;
        var i, r, a, n, l, s, d, h, o, u, m, f, c, g, p, y, v, _, b, T = this._moreOptions.alignment.v, k = this._animatorsData, x = this._textData, A = this.mHelper, w = this._renderType, S = this.renderedLetters.length, P = t.l;
        if (this._hasMaskedPath) {
          if (b = this._pathData.m, !this._pathData.n || this._pathData._mdf) {
            var F, I = b.v;
            for (this._pathData.r.v && (I = I.reverse()), l = { tLength: 0, segments: [] }, n = I._length - 1, y = 0, a = 0; a < n; a += 1) F = bez.buildBezierData(I.v[a], I.v[a + 1], [I.o[a][0] - I.v[a][0], I.o[a][1] - I.v[a][1]], [I.i[a + 1][0] - I.v[a + 1][0], I.i[a + 1][1] - I.v[a + 1][1]]), l.tLength += F.segmentLength, l.segments.push(F), y += F.segmentLength;
            a = n, b.v.c && (F = bez.buildBezierData(I.v[a], I.v[0], [I.o[a][0] - I.v[a][0], I.o[a][1] - I.v[a][1]], [I.i[0][0] - I.v[0][0], I.i[0][1] - I.v[0][1]]), l.tLength += F.segmentLength, l.segments.push(F), y += F.segmentLength), this._pathData.pi = l;
          }
          if (l = this._pathData.pi, s = this._pathData.f.v, m = 0, u = 1, h = 0, o = !0, g = l.segments, s < 0 && b.v.c) for (l.tLength < Math.abs(s) && (s = -Math.abs(s) % l.tLength), u = (c = g[m = g.length - 1].points).length - 1; s < 0; ) s += c[u].partialLength, (u -= 1) < 0 && (u = (c = g[m -= 1].points).length - 1);
          f = (c = g[m].points)[u - 1], p = (d = c[u]).partialLength;
        }
        n = P.length, i = 0, r = 0;
        var M, L, N, Y, C, D = 1.2 * t.finalSize * 0.714, B = !0;
        N = k.length;
        var V, X, q, J, U, Q, Z, j, it, rt, lt, st, at = -1, z = s, yt = m, ut = u, vt = -1, ct = "", ht = this.defaultPropsArray;
        if (t.j === 2 || t.j === 1) {
          var nt = 0, _t = 0, mt = t.j === 2 ? -0.5 : -1, dt = 0, bt = !0;
          for (a = 0; a < n; a += 1) if (P[a].n) {
            for (nt && (nt += _t); dt < a; ) P[dt].animatorJustifyOffset = nt, dt += 1;
            nt = 0, bt = !0;
          } else {
            for (L = 0; L < N; L += 1) (M = k[L].a).t.propType && (bt && t.j === 2 && (_t += M.t.v * mt), (C = k[L].s.getMult(P[a].anIndexes[L], x.a[L].s.totalChars)).length ? nt += M.t.v * C[0] * mt : nt += M.t.v * C * mt);
            bt = !1;
          }
          for (nt && (nt += _t); dt < a; ) P[dt].animatorJustifyOffset = nt, dt += 1;
        }
        for (a = 0; a < n; a += 1) {
          if (A.reset(), J = 1, P[a].n) i = 0, r += t.yOffset, r += B ? 1 : 0, s = z, B = !1, this._hasMaskedPath && (u = ut, f = (c = g[m = yt].points)[u - 1], p = (d = c[u]).partialLength, h = 0), ct = "", lt = "", it = "", st = "", ht = this.defaultPropsArray;
          else {
            if (this._hasMaskedPath) {
              if (vt !== P[a].line) {
                switch (t.j) {
                  case 1:
                    s += y - t.lineWidths[P[a].line];
                    break;
                  case 2:
                    s += (y - t.lineWidths[P[a].line]) / 2;
                }
                vt = P[a].line;
              }
              at !== P[a].ind && (P[at] && (s += P[at].extra), s += P[a].an / 2, at = P[a].ind), s += T[0] * P[a].an * 5e-3;
              var pt = 0;
              for (L = 0; L < N; L += 1) (M = k[L].a).p.propType && ((C = k[L].s.getMult(P[a].anIndexes[L], x.a[L].s.totalChars)).length ? pt += M.p.v[0] * C[0] : pt += M.p.v[0] * C), M.a.propType && ((C = k[L].s.getMult(P[a].anIndexes[L], x.a[L].s.totalChars)).length ? pt += M.a.v[0] * C[0] : pt += M.a.v[0] * C);
              for (o = !0, this._pathData.a.v && (s = 0.5 * P[0].an + (y - this._pathData.f.v - 0.5 * P[0].an - 0.5 * P[P.length - 1].an) * at / (n - 1), s += this._pathData.f.v); o; ) h + p >= s + pt || !c ? (v = (s + pt - h) / d.partialLength, X = f.point[0] + (d.point[0] - f.point[0]) * v, q = f.point[1] + (d.point[1] - f.point[1]) * v, A.translate(-T[0] * P[a].an * 5e-3, -T[1] * D * 0.01), o = !1) : c && (h += d.partialLength, (u += 1) >= c.length && (u = 0, g[m += 1] ? c = g[m].points : b.v.c ? (u = 0, c = g[m = 0].points) : (h -= d.partialLength, c = null)), c && (f = d, p = (d = c[u]).partialLength));
              V = P[a].an / 2 - P[a].add, A.translate(-V, 0, 0);
            } else V = P[a].an / 2 - P[a].add, A.translate(-V, 0, 0), A.translate(-T[0] * P[a].an * 5e-3, -T[1] * D * 0.01, 0);
            for (L = 0; L < N; L += 1) (M = k[L].a).t.propType && (C = k[L].s.getMult(P[a].anIndexes[L], x.a[L].s.totalChars), i === 0 && t.j === 0 || (this._hasMaskedPath ? C.length ? s += M.t.v * C[0] : s += M.t.v * C : C.length ? i += M.t.v * C[0] : i += M.t.v * C));
            for (t.strokeWidthAnim && (Q = t.sw || 0), t.strokeColorAnim && (U = t.sc ? [t.sc[0], t.sc[1], t.sc[2]] : [0, 0, 0]), t.fillColorAnim && t.fc && (Z = [t.fc[0], t.fc[1], t.fc[2]]), L = 0; L < N; L += 1) (M = k[L].a).a.propType && ((C = k[L].s.getMult(P[a].anIndexes[L], x.a[L].s.totalChars)).length ? A.translate(-M.a.v[0] * C[0], -M.a.v[1] * C[1], M.a.v[2] * C[2]) : A.translate(-M.a.v[0] * C, -M.a.v[1] * C, M.a.v[2] * C));
            for (L = 0; L < N; L += 1) (M = k[L].a).s.propType && ((C = k[L].s.getMult(P[a].anIndexes[L], x.a[L].s.totalChars)).length ? A.scale(1 + (M.s.v[0] - 1) * C[0], 1 + (M.s.v[1] - 1) * C[1], 1) : A.scale(1 + (M.s.v[0] - 1) * C, 1 + (M.s.v[1] - 1) * C, 1));
            for (L = 0; L < N; L += 1) {
              if (M = k[L].a, C = k[L].s.getMult(P[a].anIndexes[L], x.a[L].s.totalChars), M.sk.propType && (C.length ? A.skewFromAxis(-M.sk.v * C[0], M.sa.v * C[1]) : A.skewFromAxis(-M.sk.v * C, M.sa.v * C)), M.r.propType && (C.length ? A.rotateZ(-M.r.v * C[2]) : A.rotateZ(-M.r.v * C)), M.ry.propType && (C.length ? A.rotateY(M.ry.v * C[1]) : A.rotateY(M.ry.v * C)), M.rx.propType && (C.length ? A.rotateX(M.rx.v * C[0]) : A.rotateX(M.rx.v * C)), M.o.propType && (C.length ? J += (M.o.v * C[0] - J) * C[0] : J += (M.o.v * C - J) * C), t.strokeWidthAnim && M.sw.propType && (C.length ? Q += M.sw.v * C[0] : Q += M.sw.v * C), t.strokeColorAnim && M.sc.propType) for (j = 0; j < 3; j += 1) C.length ? U[j] += (M.sc.v[j] - U[j]) * C[0] : U[j] += (M.sc.v[j] - U[j]) * C;
              if (t.fillColorAnim && t.fc) {
                if (M.fc.propType) for (j = 0; j < 3; j += 1) C.length ? Z[j] += (M.fc.v[j] - Z[j]) * C[0] : Z[j] += (M.fc.v[j] - Z[j]) * C;
                M.fh.propType && (Z = C.length ? addHueToRGB(Z, M.fh.v * C[0]) : addHueToRGB(Z, M.fh.v * C)), M.fs.propType && (Z = C.length ? addSaturationToRGB(Z, M.fs.v * C[0]) : addSaturationToRGB(Z, M.fs.v * C)), M.fb.propType && (Z = C.length ? addBrightnessToRGB(Z, M.fb.v * C[0]) : addBrightnessToRGB(Z, M.fb.v * C));
              }
            }
            for (L = 0; L < N; L += 1) (M = k[L].a).p.propType && (C = k[L].s.getMult(P[a].anIndexes[L], x.a[L].s.totalChars), this._hasMaskedPath ? C.length ? A.translate(0, M.p.v[1] * C[0], -M.p.v[2] * C[1]) : A.translate(0, M.p.v[1] * C, -M.p.v[2] * C) : C.length ? A.translate(M.p.v[0] * C[0], M.p.v[1] * C[1], -M.p.v[2] * C[2]) : A.translate(M.p.v[0] * C, M.p.v[1] * C, -M.p.v[2] * C));
            if (t.strokeWidthAnim && (it = Q < 0 ? 0 : Q), t.strokeColorAnim && (rt = "rgb(" + Math.round(255 * U[0]) + "," + Math.round(255 * U[1]) + "," + Math.round(255 * U[2]) + ")"), t.fillColorAnim && t.fc && (lt = "rgb(" + Math.round(255 * Z[0]) + "," + Math.round(255 * Z[1]) + "," + Math.round(255 * Z[2]) + ")"), this._hasMaskedPath) {
              if (A.translate(0, -t.ls), A.translate(0, T[1] * D * 0.01 + r, 0), this._pathData.p.v) {
                _ = (d.point[1] - f.point[1]) / (d.point[0] - f.point[0]);
                var Et = 180 * Math.atan(_) / Math.PI;
                d.point[0] < f.point[0] && (Et += 180), A.rotate(-Et * Math.PI / 180);
              }
              A.translate(X, q, 0), s -= T[0] * P[a].an * 5e-3, P[a + 1] && at !== P[a + 1].ind && (s += P[a].an / 2, s += 1e-3 * t.tr * t.finalSize);
            } else {
              switch (A.translate(i, r, 0), t.ps && A.translate(t.ps[0], t.ps[1] + t.ascent, 0), t.j) {
                case 1:
                  A.translate(P[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[P[a].line]), 0, 0);
                  break;
                case 2:
                  A.translate(P[a].animatorJustifyOffset + t.justifyOffset + (t.boxWidth - t.lineWidths[P[a].line]) / 2, 0, 0);
              }
              A.translate(0, -t.ls), A.translate(V, 0, 0), A.translate(T[0] * P[a].an * 5e-3, T[1] * D * 0.01, 0), i += P[a].l + 1e-3 * t.tr * t.finalSize;
            }
            w === "html" ? ct = A.toCSS() : w === "svg" ? ct = A.to2dCSS() : ht = [A.props[0], A.props[1], A.props[2], A.props[3], A.props[4], A.props[5], A.props[6], A.props[7], A.props[8], A.props[9], A.props[10], A.props[11], A.props[12], A.props[13], A.props[14], A.props[15]], st = J;
          }
          S <= a ? (Y = new LetterProps(st, it, rt, lt, ct, ht), this.renderedLetters.push(Y), S += 1, this.lettersChangedFlag = !0) : (Y = this.renderedLetters[a], this.lettersChangedFlag = Y.update(st, it, rt, lt, ct, ht) || this.lettersChangedFlag);
        }
      }
    }, TextAnimatorProperty.prototype.getValue = function() {
      this._elem.globalData.frameId !== this._frameId && (this._frameId = this._elem.globalData.frameId, this.iterateDynamicProperties());
    }, TextAnimatorProperty.prototype.mHelper = new Matrix(), TextAnimatorProperty.prototype.defaultPropsArray = [], extendPrototype([DynamicPropertyContainer], TextAnimatorProperty), ITextElement.prototype.initElement = function(t, e, i) {
      this.lettersChangedFlag = !0, this.initFrame(), this.initBaseData(t, e, i), this.textProperty = new TextProperty(this, t.t, this.dynamicProperties), this.textAnimator = new TextAnimatorProperty(t.t, this.renderType, this), this.initTransform(t, e, i), this.initHierarchy(), this.initRenderable(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), this.createContent(), this.hide(), this.textAnimator.searchProperties(this.dynamicProperties);
    }, ITextElement.prototype.prepareFrame = function(t) {
      this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange);
    }, ITextElement.prototype.createPathShape = function(t, e) {
      var i, r, a = e.length, n = "";
      for (i = 0; i < a; i += 1) e[i].ty === "sh" && (r = e[i].ks.k, n += buildShapeString(r, r.i.length, !0, t));
      return n;
    }, ITextElement.prototype.updateDocumentData = function(t, e) {
      this.textProperty.updateDocumentData(t, e);
    }, ITextElement.prototype.canResizeFont = function(t) {
      this.textProperty.canResizeFont(t);
    }, ITextElement.prototype.setMinimumFontSize = function(t) {
      this.textProperty.setMinimumFontSize(t);
    }, ITextElement.prototype.applyTextPropertiesToMatrix = function(t, e, i, r, a) {
      switch (t.ps && e.translate(t.ps[0], t.ps[1] + t.ascent, 0), e.translate(0, -t.ls, 0), t.j) {
        case 1:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]), 0, 0);
          break;
        case 2:
          e.translate(t.justifyOffset + (t.boxWidth - t.lineWidths[i]) / 2, 0, 0);
      }
      e.translate(r, a, 0);
    }, ITextElement.prototype.buildColor = function(t) {
      return "rgb(" + Math.round(255 * t[0]) + "," + Math.round(255 * t[1]) + "," + Math.round(255 * t[2]) + ")";
    }, ITextElement.prototype.emptyProp = new LetterProps(), ITextElement.prototype.destroy = function() {
    }, ITextElement.prototype.validateText = function() {
      (this.textProperty._mdf || this.textProperty._isFirstFrame) && (this.buildNewText(), this.textProperty._isFirstFrame = !1, this.textProperty._mdf = !1);
    };
    var emptyShapeData = { shapes: [] };
    function SVGTextLottieElement(t, e, i) {
      this.textSpans = [], this.renderType = "svg", this.initElement(t, e, i);
    }
    function ISolidElement(t, e, i) {
      this.initElement(t, e, i);
    }
    function NullElement(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initFrame(), this.initTransform(t, e, i), this.initHierarchy();
    }
    function SVGRendererBase() {
    }
    function ICompElement() {
    }
    function SVGCompElement(t, e, i) {
      this.layers = t.layers, this.supports3d = !0, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 };
    }
    function SVGRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.svgElement = createNS("svg");
      var i = "";
      if (e && e.title) {
        var r = createNS("title"), a = createElementID();
        r.setAttribute("id", a), r.textContent = e.title, this.svgElement.appendChild(r), i += a;
      }
      if (e && e.description) {
        var n = createNS("desc"), l = createElementID();
        n.setAttribute("id", l), n.textContent = e.description, this.svgElement.appendChild(n), i += " " + l;
      }
      i && this.svgElement.setAttribute("aria-labelledby", i);
      var s = createNS("defs");
      this.svgElement.appendChild(s);
      var d = createNS("g");
      this.svgElement.appendChild(d), this.layerElement = d, this.renderConfig = { preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", progressiveLoad: e && e.progressiveLoad || !1, hideOnTransparent: !(e && e.hideOnTransparent === !1), viewBoxOnly: e && e.viewBoxOnly || !1, viewBoxSize: e && e.viewBoxSize || !1, className: e && e.className || "", id: e && e.id || "", focusable: e && e.focusable, filterSize: { width: e && e.filterSize && e.filterSize.width || "100%", height: e && e.filterSize && e.filterSize.height || "100%", x: e && e.filterSize && e.filterSize.x || "0%", y: e && e.filterSize && e.filterSize.y || "0%" }, width: e && e.width, height: e && e.height, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: !1, frameNum: -1, defs: s, renderConfig: this.renderConfig }, this.elements = [], this.pendingElements = [], this.destroyed = !1, this.rendererType = "svg";
    }
    function ShapeTransformManager() {
      this.sequences = {}, this.sequenceList = [], this.transform_key_count = 0;
    }
    extendPrototype([BaseElement, TransformElement, SVGBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], SVGTextLottieElement), SVGTextLottieElement.prototype.createContent = function() {
      this.data.singleShape && !this.globalData.fontManager.chars && (this.textContainer = createNS("text"));
    }, SVGTextLottieElement.prototype.buildTextContents = function(t) {
      for (var e = 0, i = t.length, r = [], a = ""; e < i; ) t[e] === "\r" || t[e] === "" ? (r.push(a), a = "") : a += t[e], e += 1;
      return r.push(a), r;
    }, SVGTextLottieElement.prototype.buildShapeData = function(t, e) {
      if (t.shapes && t.shapes.length) {
        var i = t.shapes[0];
        if (i.it) {
          var r = i.it[i.it.length - 1];
          r.s && (r.s.k[0] = e, r.s.k[1] = e);
        }
      }
      return t;
    }, SVGTextLottieElement.prototype.buildNewText = function() {
      var t, e;
      this.addDynamicProperty(this);
      var i = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(i ? i.l.length : 0), i.fc ? this.layerElement.setAttribute("fill", this.buildColor(i.fc)) : this.layerElement.setAttribute("fill", "rgba(0,0,0,0)"), i.sc && (this.layerElement.setAttribute("stroke", this.buildColor(i.sc)), this.layerElement.setAttribute("stroke-width", i.sw)), this.layerElement.setAttribute("font-size", i.finalSize);
      var r = this.globalData.fontManager.getFontByName(i.f);
      if (r.fClass) this.layerElement.setAttribute("class", r.fClass);
      else {
        this.layerElement.setAttribute("font-family", r.fFamily);
        var a = i.fWeight, n = i.fStyle;
        this.layerElement.setAttribute("font-style", n), this.layerElement.setAttribute("font-weight", a);
      }
      this.layerElement.setAttribute("aria-label", i.t);
      var l, s = i.l || [], d = !!this.globalData.fontManager.chars;
      e = s.length;
      var h = this.mHelper, o = this.data.singleShape, u = 0, m = 0, f = !0, c = 1e-3 * i.tr * i.finalSize;
      if (!o || d || i.sz) {
        var g, p = this.textSpans.length;
        for (t = 0; t < e; t += 1) {
          if (this.textSpans[t] || (this.textSpans[t] = { span: null, childSpan: null, glyph: null }), !d || !o || t === 0) {
            if (l = p > t ? this.textSpans[t].span : createNS(d ? "g" : "text"), p <= t) {
              if (l.setAttribute("stroke-linecap", "butt"), l.setAttribute("stroke-linejoin", "round"), l.setAttribute("stroke-miterlimit", "4"), this.textSpans[t].span = l, d) {
                var y = createNS("g");
                l.appendChild(y), this.textSpans[t].childSpan = y;
              }
              this.textSpans[t].span = l, this.layerElement.appendChild(l);
            }
            l.style.display = "inherit";
          }
          if (h.reset(), o && (s[t].n && (u = -c, m += i.yOffset, m += f ? 1 : 0, f = !1), this.applyTextPropertiesToMatrix(i, h, s[t].line, u, m), u += s[t].l || 0, u += c), d) {
            var v;
            if ((g = this.globalData.fontManager.getCharData(i.finalText[t], r.fStyle, this.globalData.fontManager.getFontByName(i.f).fFamily)).t === 1) v = new SVGCompElement(g.data, this.globalData, this);
            else {
              var _ = emptyShapeData;
              g.data && g.data.shapes && (_ = this.buildShapeData(g.data, i.finalSize)), v = new SVGShapeElement(_, this.globalData, this);
            }
            if (this.textSpans[t].glyph) {
              var b = this.textSpans[t].glyph;
              this.textSpans[t].childSpan.removeChild(b.layerElement), b.destroy();
            }
            this.textSpans[t].glyph = v, v._debug = !0, v.prepareFrame(0), v.renderFrame(), this.textSpans[t].childSpan.appendChild(v.layerElement), g.t === 1 && this.textSpans[t].childSpan.setAttribute("transform", "scale(" + i.finalSize / 100 + "," + i.finalSize / 100 + ")");
          } else o && l.setAttribute("transform", "translate(" + h.props[12] + "," + h.props[13] + ")"), l.textContent = s[t].val, l.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
        }
        o && l && l.setAttribute("d", "");
      } else {
        var T = this.textContainer, k = "start";
        switch (i.j) {
          case 1:
            k = "end";
            break;
          case 2:
            k = "middle";
            break;
          default:
            k = "start";
        }
        T.setAttribute("text-anchor", k), T.setAttribute("letter-spacing", c);
        var x = this.buildTextContents(i.finalText);
        for (e = x.length, m = i.ps ? i.ps[1] + i.ascent : 0, t = 0; t < e; t += 1) (l = this.textSpans[t].span || createNS("tspan")).textContent = x[t], l.setAttribute("x", 0), l.setAttribute("y", m), l.style.display = "inherit", T.appendChild(l), this.textSpans[t] || (this.textSpans[t] = { span: null, glyph: null }), this.textSpans[t].span = l, m += i.finalLineHeight;
        this.layerElement.appendChild(T);
      }
      for (; t < this.textSpans.length; ) this.textSpans[t].span.style.display = "none", t += 1;
      this._sizeChanged = !0;
    }, SVGTextLottieElement.prototype.sourceRectAtTime = function() {
      if (this.prepareFrame(this.comp.renderedFrame - this.data.st), this.renderInnerContent(), this._sizeChanged) {
        this._sizeChanged = !1;
        var t = this.layerElement.getBBox();
        this.bbox = { top: t.y, left: t.x, width: t.width, height: t.height };
      }
      return this.bbox;
    }, SVGTextLottieElement.prototype.getValue = function() {
      var t, e, i = this.textSpans.length;
      for (this.renderedFrame = this.comp.renderedFrame, t = 0; t < i; t += 1) (e = this.textSpans[t].glyph) && (e.prepareFrame(this.comp.renderedFrame - this.data.st), e._mdf && (this._mdf = !0));
    }, SVGTextLottieElement.prototype.renderInnerContent = function() {
      if (this.validateText(), (!this.data.singleShape || this._mdf) && (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag)) {
        var t, e;
        this._sizeChanged = !0;
        var i, r, a, n = this.textAnimator.renderedLetters, l = this.textProperty.currentData.l;
        for (e = l.length, t = 0; t < e; t += 1) l[t].n || (i = n[t], r = this.textSpans[t].span, (a = this.textSpans[t].glyph) && a.renderFrame(), i._mdf.m && r.setAttribute("transform", i.m), i._mdf.o && r.setAttribute("opacity", i.o), i._mdf.sw && r.setAttribute("stroke-width", i.sw), i._mdf.sc && r.setAttribute("stroke", i.sc), i._mdf.fc && r.setAttribute("fill", i.fc));
      }
    }, extendPrototype([IImageElement], ISolidElement), ISolidElement.prototype.createContent = function() {
      var t = createNS("rect");
      t.setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.layerElement.appendChild(t);
    }, NullElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0);
    }, NullElement.prototype.renderFrame = function() {
    }, NullElement.prototype.getBaseElement = function() {
      return null;
    }, NullElement.prototype.destroy = function() {
    }, NullElement.prototype.sourceRectAtTime = function() {
    }, NullElement.prototype.hide = function() {
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement], NullElement), extendPrototype([BaseRenderer], SVGRendererBase), SVGRendererBase.prototype.createNull = function(t) {
      return new NullElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createShape = function(t) {
      return new SVGShapeElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createText = function(t) {
      return new SVGTextLottieElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createImage = function(t) {
      return new IImageElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.createSolid = function(t) {
      return new ISolidElement(t, this.globalData, this);
    }, SVGRendererBase.prototype.configAnimation = function(t) {
      this.svgElement.setAttribute("xmlns", "http://www.w3.org/2000/svg"), this.svgElement.setAttribute("xmlns:xlink", "http://www.w3.org/1999/xlink"), this.renderConfig.viewBoxSize ? this.svgElement.setAttribute("viewBox", this.renderConfig.viewBoxSize) : this.svgElement.setAttribute("viewBox", "0 0 " + t.w + " " + t.h), this.renderConfig.viewBoxOnly || (this.svgElement.setAttribute("width", t.w), this.svgElement.setAttribute("height", t.h), this.svgElement.style.width = "100%", this.svgElement.style.height = "100%", this.svgElement.style.transform = "translate3d(0,0,0)", this.svgElement.style.contentVisibility = this.renderConfig.contentVisibility), this.renderConfig.width && this.svgElement.setAttribute("width", this.renderConfig.width), this.renderConfig.height && this.svgElement.setAttribute("height", this.renderConfig.height), this.renderConfig.className && this.svgElement.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.svgElement.setAttribute("id", this.renderConfig.id), this.renderConfig.focusable !== void 0 && this.svgElement.setAttribute("focusable", this.renderConfig.focusable), this.svgElement.setAttribute("preserveAspectRatio", this.renderConfig.preserveAspectRatio), this.animationItem.wrapper.appendChild(this.svgElement);
      var e = this.globalData.defs;
      this.setupGlobalData(t, e), this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.data = t;
      var i = createNS("clipPath"), r = createNS("rect");
      r.setAttribute("width", t.w), r.setAttribute("height", t.h), r.setAttribute("x", 0), r.setAttribute("y", 0);
      var a = createElementID();
      i.setAttribute("id", a), i.appendChild(r), this.layerElement.setAttribute("clip-path", "url(" + getLocationHref() + "#" + a + ")"), e.appendChild(i), this.layers = t.layers, this.elements = createSizedArray(t.layers.length);
    }, SVGRendererBase.prototype.destroy = function() {
      var t;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.layerElement = null, this.globalData.defs = null;
      var e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, SVGRendererBase.prototype.updateContainerSize = function() {
    }, SVGRendererBase.prototype.findIndexByInd = function(t) {
      var e = 0, i = this.layers.length;
      for (e = 0; e < i; e += 1) if (this.layers[e].ind === t) return e;
      return -1;
    }, SVGRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!e[t] && this.layers[t].ty !== 99) {
        e[t] = !0;
        var i = this.createItem(this.layers[t]);
        if (e[t] = i, getExpressionsPlugin() && (this.layers[t].ty === 0 && this.globalData.projectInterface.registerComposition(i), i.initExpressions()), this.appendElementInPos(i, t), this.layers[t].tt) {
          var r = "tp" in this.layers[t] ? this.findIndexByInd(this.layers[t].tp) : t - 1;
          if (r === -1) return;
          if (this.elements[r] && this.elements[r] !== !0) {
            var a = e[r].getMatte(this.layers[t].tt);
            i.setMatte(a);
          } else this.buildItem(r), this.addPendingElement(i);
        }
      }
    }, SVGRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; ) {
        var t = this.pendingElements.pop();
        if (t.checkParenting(), t.data.tt) for (var e = 0, i = this.elements.length; e < i; ) {
          if (this.elements[e] === t) {
            var r = "tp" in t.data ? this.findIndexByInd(t.data.tp) : e - 1, a = this.elements[r].getMatte(this.layers[e].tt);
            t.setMatte(a);
            break;
          }
          e += 1;
        }
      }
    }, SVGRendererBase.prototype.renderFrame = function(t) {
      if (this.renderedFrame !== t && !this.destroyed) {
        var e;
        t === null ? t = this.renderedFrame : this.renderedFrame = t, this.globalData.frameNum = t, this.globalData.frameId += 1, this.globalData.projectInterface.currentFrame = t, this.globalData._mdf = !1;
        var i = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), e = i - 1; e >= 0; e -= 1) (this.completeLayers || this.elements[e]) && this.elements[e].prepareFrame(t - this.layers[e].st);
        if (this.globalData._mdf) for (e = 0; e < i; e += 1) (this.completeLayers || this.elements[e]) && this.elements[e].renderFrame();
      }
    }, SVGRendererBase.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        for (var r, a = 0; a < e; ) this.elements[a] && this.elements[a] !== !0 && this.elements[a].getBaseElement() && (r = this.elements[a].getBaseElement()), a += 1;
        r ? this.layerElement.insertBefore(i, r) : this.layerElement.appendChild(i);
      }
    }, SVGRendererBase.prototype.hide = function() {
      this.layerElement.style.display = "none";
    }, SVGRendererBase.prototype.show = function() {
      this.layerElement.style.display = "block";
    }, extendPrototype([BaseElement, TransformElement, HierarchyElement, FrameElement, RenderableDOMElement], ICompElement), ICompElement.prototype.initElement = function(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initTransform(t, e, i), this.initRenderable(), this.initHierarchy(), this.initRendererElement(), this.createContainerElements(), this.createRenderableComponents(), !this.data.xt && e.progressiveLoad || this.buildAllItems(), this.hide();
    }, ICompElement.prototype.prepareFrame = function(t) {
      if (this._mdf = !1, this.prepareRenderableFrame(t), this.prepareProperties(t, this.isInRange), this.isInRange || this.data.xt) {
        if (this.tm._placeholder) this.renderedFrame = t / this.data.sr;
        else {
          var e = this.tm.v;
          e === this.data.op && (e = this.data.op - 1), this.renderedFrame = e;
        }
        var i, r = this.elements.length;
        for (this.completeLayers || this.checkLayers(this.renderedFrame), i = r - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && (this.elements[i].prepareFrame(this.renderedFrame - this.layers[i].st), this.elements[i]._mdf && (this._mdf = !0));
      }
    }, ICompElement.prototype.renderInnerContent = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, ICompElement.prototype.setElements = function(t) {
      this.elements = t;
    }, ICompElement.prototype.getElements = function() {
      return this.elements;
    }, ICompElement.prototype.destroyElements = function() {
      var t, e = this.layers.length;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy();
    }, ICompElement.prototype.destroy = function() {
      this.destroyElements(), this.destroyBaseElement();
    }, extendPrototype([SVGRendererBase, ICompElement, SVGBaseElement], SVGCompElement), SVGCompElement.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    }, extendPrototype([SVGRendererBase], SVGRenderer), SVGRenderer.prototype.createComp = function(t) {
      return new SVGCompElement(t, this.globalData, this);
    }, ShapeTransformManager.prototype = { addTransformSequence: function(t) {
      var e, i = t.length, r = "_";
      for (e = 0; e < i; e += 1) r += t[e].transform.key + "_";
      var a = this.sequences[r];
      return a || (a = { transforms: [].concat(t), finalTransform: new Matrix(), _mdf: !1 }, this.sequences[r] = a, this.sequenceList.push(a)), a;
    }, processSequence: function(t, e) {
      for (var i = 0, r = t.transforms.length, a = e; i < r && !e; ) {
        if (t.transforms[i].transform.mProps._mdf) {
          a = !0;
          break;
        }
        i += 1;
      }
      if (a) for (t.finalTransform.reset(), i = r - 1; i >= 0; i -= 1) t.finalTransform.multiply(t.transforms[i].transform.mProps.v);
      t._mdf = a;
    }, processSequences: function(t) {
      var e, i = this.sequenceList.length;
      for (e = 0; e < i; e += 1) this.processSequence(this.sequenceList[e], t);
    }, getNewKey: function() {
      return this.transform_key_count += 1, "_" + this.transform_key_count;
    } };
    var lumaLoader = function() {
      var t = "__lottie_element_luma_buffer", e = null, i = null, r = null;
      function a() {
        var n, l, s;
        e || (n = createNS("svg"), l = createNS("filter"), s = createNS("feColorMatrix"), l.setAttribute("id", t), s.setAttribute("type", "matrix"), s.setAttribute("color-interpolation-filters", "sRGB"), s.setAttribute("values", "0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0, 0.3, 0.3, 0.3, 0, 0"), l.appendChild(s), n.appendChild(l), n.setAttribute("id", t + "_svg"), featureSupport.svgLumaHidden && (n.style.display = "none"), r = n, document.body.appendChild(r), e = createTag("canvas"), (i = e.getContext("2d")).filter = "url(#" + t + ")", i.fillStyle = "rgba(0,0,0,0)", i.fillRect(0, 0, 1, 1));
      }
      return { load: a, get: function(n) {
        return e || a(), e.width = n.width, e.height = n.height, i.filter = "url(#" + t + ")", e;
      } };
    };
    function createCanvas(t, e) {
      if (featureSupport.offscreenCanvas) return new OffscreenCanvas(t, e);
      var i = createTag("canvas");
      return i.width = t, i.height = e, i;
    }
    var assetLoader = { loadLumaCanvas: lumaLoader.load, getLumaCanvas: lumaLoader.get, createCanvas }, registeredEffects = {};
    function CVEffects(t) {
      var e, i, r = t.data.ef ? t.data.ef.length : 0;
      for (this.filters = [], e = 0; e < r; e += 1) {
        i = null;
        var a = t.data.ef[e].ty;
        registeredEffects[a] && (i = new registeredEffects[a].effect(t.effectsManager.effectElements[e], t)), i && this.filters.push(i);
      }
      this.filters.length && t.addRenderableComponent(this);
    }
    function registerEffect(t, e) {
      registeredEffects[t] = { effect: e };
    }
    function CVMaskElement(t, e) {
      var i;
      this.data = t, this.element = e, this.masksProperties = this.data.masksProperties || [], this.viewData = createSizedArray(this.masksProperties.length);
      var r = this.masksProperties.length, a = !1;
      for (i = 0; i < r; i += 1) this.masksProperties[i].mode !== "n" && (a = !0), this.viewData[i] = ShapePropertyFactory.getShapeProp(this.element, this.masksProperties[i], 3);
      this.hasMasks = a, a && this.element.addRenderableComponent(this);
    }
    function CVBaseElement() {
    }
    CVEffects.prototype.renderFrame = function(t) {
      var e, i = this.filters.length;
      for (e = 0; e < i; e += 1) this.filters[e].renderFrame(t);
    }, CVEffects.prototype.getEffects = function(t) {
      var e, i = this.filters.length, r = [];
      for (e = 0; e < i; e += 1) this.filters[e].type === t && r.push(this.filters[e]);
      return r;
    }, CVMaskElement.prototype.renderFrame = function() {
      if (this.hasMasks) {
        var t, e, i, r, a = this.element.finalTransform.mat, n = this.element.canvasContext, l = this.masksProperties.length;
        for (n.beginPath(), t = 0; t < l; t += 1) if (this.masksProperties[t].mode !== "n") {
          var s;
          this.masksProperties[t].inv && (n.moveTo(0, 0), n.lineTo(this.element.globalData.compSize.w, 0), n.lineTo(this.element.globalData.compSize.w, this.element.globalData.compSize.h), n.lineTo(0, this.element.globalData.compSize.h), n.lineTo(0, 0)), r = this.viewData[t].v, e = a.applyToPointArray(r.v[0][0], r.v[0][1], 0), n.moveTo(e[0], e[1]);
          var d = r._length;
          for (s = 1; s < d; s += 1) i = a.applyToTriplePoints(r.o[s - 1], r.i[s], r.v[s]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
          i = a.applyToTriplePoints(r.o[s - 1], r.i[0], r.v[0]), n.bezierCurveTo(i[0], i[1], i[2], i[3], i[4], i[5]);
        }
        this.element.globalData.renderer.save(!0), n.clip();
      }
    }, CVMaskElement.prototype.getMaskProperty = MaskElement.prototype.getMaskProperty, CVMaskElement.prototype.destroy = function() {
      this.element = null;
    };
    var operationsMap = { 1: "source-in", 2: "source-out", 3: "source-in", 4: "source-out" };
    function CVShapeData(t, e, i, r) {
      this.styledShapes = [], this.tr = [0, 0, 0, 0, 0, 0];
      var a, n = 4;
      e.ty === "rc" ? n = 5 : e.ty === "el" ? n = 6 : e.ty === "sr" && (n = 7), this.sh = ShapePropertyFactory.getShapeProp(t, e, n, t);
      var l, s = i.length;
      for (a = 0; a < s; a += 1) i[a].closed || (l = { transforms: r.addTransformSequence(i[a].transforms), trNodes: [] }, this.styledShapes.push(l), i[a].elements.push(l));
    }
    function CVShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.itemsData = [], this.prevViewData = [], this.shapeModifiers = [], this.processedElements = [], this.transformsManager = new ShapeTransformManager(), this.initElement(t, e, i);
    }
    function CVTextElement(t, e, i) {
      this.textSpans = [], this.yOffset = 0, this.fillColorAnim = !1, this.strokeColorAnim = !1, this.strokeWidthAnim = !1, this.stroke = !1, this.fill = !1, this.justifyOffset = 0, this.currentRender = null, this.renderType = "canvas", this.values = { fill: "rgba(0,0,0,0)", stroke: "rgba(0,0,0,0)", sWidth: 0, fValue: "" }, this.initElement(t, e, i);
    }
    function CVImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.img = e.imageLoader.getAsset(this.assetData), this.initElement(t, e, i);
    }
    function CVSolidElement(t, e, i) {
      this.initElement(t, e, i);
    }
    function CanvasRendererBase() {
    }
    function CanvasContext() {
      this.opacity = -1, this.transform = createTypedArray("float32", 16), this.fillStyle = "", this.strokeStyle = "", this.lineWidth = "", this.lineCap = "", this.lineJoin = "", this.miterLimit = "", this.id = Math.random();
    }
    function CVContextData() {
      var t;
      for (this.stack = [], this.cArrPos = 0, this.cTr = new Matrix(), t = 0; t < 15; t += 1) {
        var e = new CanvasContext();
        this.stack[t] = e;
      }
      this._length = 15, this.nativeContext = null, this.transformMat = new Matrix(), this.currentOpacity = 1, this.currentFillStyle = "", this.appliedFillStyle = "", this.currentStrokeStyle = "", this.appliedStrokeStyle = "", this.currentLineWidth = "", this.appliedLineWidth = "", this.currentLineCap = "", this.appliedLineCap = "", this.currentLineJoin = "", this.appliedLineJoin = "", this.appliedMiterLimit = "", this.currentMiterLimit = "";
    }
    function CVCompElement(t, e, i) {
      this.completeLayers = !1, this.layers = t.layers, this.pendingElements = [], this.elements = createSizedArray(this.layers.length), this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 };
    }
    function CanvasRenderer(t, e) {
      this.animationItem = t, this.renderConfig = { clearCanvas: !e || e.clearCanvas === void 0 || e.clearCanvas, context: e && e.context || null, progressiveLoad: e && e.progressiveLoad || !1, preserveAspectRatio: e && e.preserveAspectRatio || "xMidYMid meet", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", contentVisibility: e && e.contentVisibility || "visible", className: e && e.className || "", id: e && e.id || "", runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.renderConfig.dpr = e && e.dpr || 1, this.animationItem.wrapper && (this.renderConfig.dpr = e && e.dpr || window.devicePixelRatio || 1), this.renderedFrame = -1, this.globalData = { frameNum: -1, _mdf: !1, renderConfig: this.renderConfig, currentGlobalAlpha: -1 }, this.contextData = new CVContextData(), this.elements = [], this.pendingElements = [], this.transformMat = new Matrix(), this.completeLayers = !1, this.rendererType = "canvas", this.renderConfig.clearCanvas && (this.ctxTransform = this.contextData.transform.bind(this.contextData), this.ctxOpacity = this.contextData.opacity.bind(this.contextData), this.ctxFillStyle = this.contextData.fillStyle.bind(this.contextData), this.ctxStrokeStyle = this.contextData.strokeStyle.bind(this.contextData), this.ctxLineWidth = this.contextData.lineWidth.bind(this.contextData), this.ctxLineCap = this.contextData.lineCap.bind(this.contextData), this.ctxLineJoin = this.contextData.lineJoin.bind(this.contextData), this.ctxMiterLimit = this.contextData.miterLimit.bind(this.contextData), this.ctxFill = this.contextData.fill.bind(this.contextData), this.ctxFillRect = this.contextData.fillRect.bind(this.contextData), this.ctxStroke = this.contextData.stroke.bind(this.contextData), this.save = this.contextData.save.bind(this.contextData));
    }
    function HBaseElement() {
    }
    function HSolidElement(t, e, i) {
      this.initElement(t, e, i);
    }
    function HShapeElement(t, e, i) {
      this.shapes = [], this.shapesData = t.shapes, this.stylesList = [], this.shapeModifiers = [], this.itemsData = [], this.processedElements = [], this.animatedContents = [], this.shapesContainer = createNS("g"), this.initElement(t, e, i), this.prevViewData = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 };
    }
    function HTextElement(t, e, i) {
      this.textSpans = [], this.textPaths = [], this.currentBBox = { x: 999999, y: -999999, h: 0, w: 0 }, this.renderType = "svg", this.isMasked = !1, this.initElement(t, e, i);
    }
    function HCameraElement(t, e, i) {
      this.initFrame(), this.initBaseData(t, e, i), this.initHierarchy();
      var r = PropertyFactory.getProp;
      if (this.pe = r(this, t.pe, 0, 0, this), t.ks.p.s ? (this.px = r(this, t.ks.p.x, 1, 0, this), this.py = r(this, t.ks.p.y, 1, 0, this), this.pz = r(this, t.ks.p.z, 1, 0, this)) : this.p = r(this, t.ks.p, 1, 0, this), t.ks.a && (this.a = r(this, t.ks.a, 1, 0, this)), t.ks.or.k.length && t.ks.or.k[0].to) {
        var a, n = t.ks.or.k.length;
        for (a = 0; a < n; a += 1) t.ks.or.k[a].to = null, t.ks.or.k[a].ti = null;
      }
      this.or = r(this, t.ks.or, 1, degToRads, this), this.or.sh = !0, this.rx = r(this, t.ks.rx, 0, degToRads, this), this.ry = r(this, t.ks.ry, 0, degToRads, this), this.rz = r(this, t.ks.rz, 0, degToRads, this), this.mat = new Matrix(), this._prevMat = new Matrix(), this._isFirstFrame = !0, this.finalTransform = { mProp: this };
    }
    function HImageElement(t, e, i) {
      this.assetData = e.getAssetData(t.refId), this.initElement(t, e, i);
    }
    function HybridRendererBase(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && e.hideOnTransparent === !1), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" } }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    function HCompElement(t, e, i) {
      this.layers = t.layers, this.supports3d = !t.hasMask, this.completeLayers = !1, this.pendingElements = [], this.elements = this.layers ? createSizedArray(this.layers.length) : [], this.initElement(t, e, i), this.tm = t.tm ? PropertyFactory.getProp(this, t.tm, 0, e.frameRate, this) : { _placeholder: !0 };
    }
    function HybridRenderer(t, e) {
      this.animationItem = t, this.layers = null, this.renderedFrame = -1, this.renderConfig = { className: e && e.className || "", imagePreserveAspectRatio: e && e.imagePreserveAspectRatio || "xMidYMid slice", hideOnTransparent: !(e && e.hideOnTransparent === !1), filterSize: { width: e && e.filterSize && e.filterSize.width || "400%", height: e && e.filterSize && e.filterSize.height || "400%", x: e && e.filterSize && e.filterSize.x || "-100%", y: e && e.filterSize && e.filterSize.y || "-100%" }, runExpressions: !e || e.runExpressions === void 0 || e.runExpressions }, this.globalData = { _mdf: !1, frameNum: -1, renderConfig: this.renderConfig }, this.pendingElements = [], this.elements = [], this.threeDElements = [], this.destroyed = !1, this.camera = null, this.supports3d = !0, this.rendererType = "html";
    }
    CVBaseElement.prototype = { createElements: function() {
    }, initRendererElement: function() {
    }, createContainerElements: function() {
      if (this.data.tt >= 1) {
        this.buffers = [];
        var t = this.globalData.canvasContext, e = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
        this.buffers.push(e);
        var i = assetLoader.createCanvas(t.canvas.width, t.canvas.height);
        this.buffers.push(i), this.data.tt >= 3 && !document._isProxy && assetLoader.loadLumaCanvas();
      }
      this.canvasContext = this.globalData.canvasContext, this.transformCanvas = this.globalData.transformCanvas, this.renderableEffectsManager = new CVEffects(this), this.searchEffectTransforms();
    }, createContent: function() {
    }, setBlendMode: function() {
      var t = this.globalData;
      if (t.blendMode !== this.data.bm) {
        t.blendMode = this.data.bm;
        var e = getBlendMode(this.data.bm);
        t.canvasContext.globalCompositeOperation = e;
      }
    }, createRenderableComponents: function() {
      this.maskManager = new CVMaskElement(this.data, this), this.transformEffects = this.renderableEffectsManager.getEffects(effectTypes.TRANSFORM_EFFECT);
    }, hideElement: function() {
      this.hidden || this.isInRange && !this.isTransparent || (this.hidden = !0);
    }, showElement: function() {
      this.isInRange && !this.isTransparent && (this.hidden = !1, this._isFirstFrame = !0, this.maskManager._isFirstFrame = !0);
    }, clearCanvas: function(t) {
      t.clearRect(this.transformCanvas.tx, this.transformCanvas.ty, this.transformCanvas.w * this.transformCanvas.sx, this.transformCanvas.h * this.transformCanvas.sy);
    }, prepareLayer: function() {
      if (this.data.tt >= 1) {
        var t = this.buffers[0].getContext("2d");
        this.clearCanvas(t), t.drawImage(this.canvasContext.canvas, 0, 0), this.currentTransform = this.canvasContext.getTransform(), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform);
      }
    }, exitLayer: function() {
      if (this.data.tt >= 1) {
        var t = this.buffers[1], e = t.getContext("2d");
        if (this.clearCanvas(e), e.drawImage(this.canvasContext.canvas, 0, 0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.setTransform(this.currentTransform), this.comp.getElementById("tp" in this.data ? this.data.tp : this.data.ind - 1).renderFrame(!0), this.canvasContext.setTransform(1, 0, 0, 1, 0, 0), this.data.tt >= 3 && !document._isProxy) {
          var i = assetLoader.getLumaCanvas(this.canvasContext.canvas);
          i.getContext("2d").drawImage(this.canvasContext.canvas, 0, 0), this.clearCanvas(this.canvasContext), this.canvasContext.drawImage(i, 0, 0);
        }
        this.canvasContext.globalCompositeOperation = operationsMap[this.data.tt], this.canvasContext.drawImage(t, 0, 0), this.canvasContext.globalCompositeOperation = "destination-over", this.canvasContext.drawImage(this.buffers[0], 0, 0), this.canvasContext.setTransform(this.currentTransform), this.canvasContext.globalCompositeOperation = "source-over";
      }
    }, renderFrame: function(t) {
      if (!this.hidden && !this.data.hd && (this.data.td !== 1 || t)) {
        this.renderTransform(), this.renderRenderable(), this.renderLocalTransform(), this.setBlendMode();
        var e = this.data.ty === 0;
        this.prepareLayer(), this.globalData.renderer.save(e), this.globalData.renderer.ctxTransform(this.finalTransform.localMat.props), this.globalData.renderer.ctxOpacity(this.finalTransform.localOpacity), this.renderInnerContent(), this.globalData.renderer.restore(e), this.exitLayer(), this.maskManager.hasMasks && this.globalData.renderer.restore(!0), this._isFirstFrame && (this._isFirstFrame = !1);
      }
    }, destroy: function() {
      this.canvasContext = null, this.data = null, this.globalData = null, this.maskManager.destroy();
    }, mHelper: new Matrix() }, CVBaseElement.prototype.hide = CVBaseElement.prototype.hideElement, CVBaseElement.prototype.show = CVBaseElement.prototype.showElement, CVShapeData.prototype.setAsAnimated = SVGShapeData.prototype.setAsAnimated, extendPrototype([BaseElement, TransformElement, CVBaseElement, IShapeElement, HierarchyElement, FrameElement, RenderableElement], CVShapeElement), CVShapeElement.prototype.initElement = RenderableDOMElement.prototype.initElement, CVShapeElement.prototype.transformHelper = { opacity: 1, _opMdf: !1 }, CVShapeElement.prototype.dashResetter = [], CVShapeElement.prototype.createContent = function() {
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []);
    }, CVShapeElement.prototype.createStyleElement = function(t, e) {
      var i = { data: t, type: t.ty, preTransforms: this.transformsManager.addTransformSequence(e), transforms: [], elements: [], closed: t.hd === !0 }, r = {};
      if (t.ty === "fl" || t.ty === "st" ? (r.c = PropertyFactory.getProp(this, t.c, 1, 255, this), r.c.k || (i.co = "rgb(" + bmFloor(r.c.v[0]) + "," + bmFloor(r.c.v[1]) + "," + bmFloor(r.c.v[2]) + ")")) : t.ty !== "gf" && t.ty !== "gs" || (r.s = PropertyFactory.getProp(this, t.s, 1, null, this), r.e = PropertyFactory.getProp(this, t.e, 1, null, this), r.h = PropertyFactory.getProp(this, t.h || { k: 0 }, 0, 0.01, this), r.a = PropertyFactory.getProp(this, t.a || { k: 0 }, 0, degToRads, this), r.g = new GradientProperty(this, t.g, this)), r.o = PropertyFactory.getProp(this, t.o, 0, 0.01, this), t.ty === "st" || t.ty === "gs") {
        if (i.lc = lineCapEnum[t.lc || 2], i.lj = lineJoinEnum[t.lj || 2], t.lj == 1 && (i.ml = t.ml), r.w = PropertyFactory.getProp(this, t.w, 0, null, this), r.w.k || (i.wi = r.w.v), t.d) {
          var a = new DashProperty(this, t.d, "canvas", this);
          r.d = a, r.d.k || (i.da = r.d.dashArray, i.do = r.d.dashoffset[0]);
        }
      } else i.r = t.r === 2 ? "evenodd" : "nonzero";
      return this.stylesList.push(i), r.style = i, r;
    }, CVShapeElement.prototype.createGroupElement = function() {
      return { it: [], prevViewData: [] };
    }, CVShapeElement.prototype.createTransformElement = function(t) {
      return { transform: { opacity: 1, _opMdf: !1, key: this.transformsManager.getNewKey(), op: PropertyFactory.getProp(this, t.o, 0, 0.01, this), mProps: TransformPropertyFactory.getTransformProperty(this, t, this) } };
    }, CVShapeElement.prototype.createShapeElement = function(t) {
      var e = new CVShapeData(this, t, this.stylesList, this.transformsManager);
      return this.shapes.push(e), this.addShapeToModifiers(e), e;
    }, CVShapeElement.prototype.reloadShapes = function() {
      var t;
      this._isFirstFrame = !0;
      var e = this.itemsData.length;
      for (t = 0; t < e; t += 1) this.prevViewData[t] = this.itemsData[t];
      for (this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, !0, []), e = this.dynamicProperties.length, t = 0; t < e; t += 1) this.dynamicProperties[t].getValue();
      this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame);
    }, CVShapeElement.prototype.addTransformToStyleList = function(t) {
      var e, i = this.stylesList.length;
      for (e = 0; e < i; e += 1) this.stylesList[e].closed || this.stylesList[e].transforms.push(t);
    }, CVShapeElement.prototype.removeTransformFromStyleList = function() {
      var t, e = this.stylesList.length;
      for (t = 0; t < e; t += 1) this.stylesList[t].closed || this.stylesList[t].transforms.pop();
    }, CVShapeElement.prototype.closeStyles = function(t) {
      var e, i = t.length;
      for (e = 0; e < i; e += 1) t[e].closed = !0;
    }, CVShapeElement.prototype.searchShapes = function(t, e, i, r, a) {
      var n, l, s, d, h, o, u = t.length - 1, m = [], f = [], c = [].concat(a);
      for (n = u; n >= 0; n -= 1) {
        if ((d = this.searchProcessedElement(t[n])) ? e[n] = i[d - 1] : t[n]._shouldRender = r, t[n].ty === "fl" || t[n].ty === "st" || t[n].ty === "gf" || t[n].ty === "gs") d ? e[n].style.closed = !1 : e[n] = this.createStyleElement(t[n], c), m.push(e[n].style);
        else if (t[n].ty === "gr") {
          if (d) for (s = e[n].it.length, l = 0; l < s; l += 1) e[n].prevViewData[l] = e[n].it[l];
          else e[n] = this.createGroupElement(t[n]);
          this.searchShapes(t[n].it, e[n].it, e[n].prevViewData, r, c);
        } else t[n].ty === "tr" ? (d || (o = this.createTransformElement(t[n]), e[n] = o), c.push(e[n]), this.addTransformToStyleList(e[n])) : t[n].ty === "sh" || t[n].ty === "rc" || t[n].ty === "el" || t[n].ty === "sr" ? d || (e[n] = this.createShapeElement(t[n])) : t[n].ty === "tm" || t[n].ty === "rd" || t[n].ty === "pb" || t[n].ty === "zz" || t[n].ty === "op" ? (d ? (h = e[n]).closed = !1 : ((h = ShapeModifiers.getModifier(t[n].ty)).init(this, t[n]), e[n] = h, this.shapeModifiers.push(h)), f.push(h)) : t[n].ty === "rp" && (d ? (h = e[n]).closed = !0 : (h = ShapeModifiers.getModifier(t[n].ty), e[n] = h, h.init(this, t, n, e), this.shapeModifiers.push(h), r = !1), f.push(h));
        this.addProcessedElement(t[n], n + 1);
      }
      for (this.removeTransformFromStyleList(), this.closeStyles(m), u = f.length, n = 0; n < u; n += 1) f[n].closed = !0;
    }, CVShapeElement.prototype.renderInnerContent = function() {
      this.transformHelper.opacity = 1, this.transformHelper._opMdf = !1, this.renderModifiers(), this.transformsManager.processSequences(this._isFirstFrame), this.renderShape(this.transformHelper, this.shapesData, this.itemsData, !0);
    }, CVShapeElement.prototype.renderShapeTransform = function(t, e) {
      (t._opMdf || e.op._mdf || this._isFirstFrame) && (e.opacity = t.opacity, e.opacity *= e.op.v, e._opMdf = !0);
    }, CVShapeElement.prototype.drawLayer = function() {
      var t, e, i, r, a, n, l, s, d, h = this.stylesList.length, o = this.globalData.renderer, u = this.globalData.canvasContext;
      for (t = 0; t < h; t += 1) if (((s = (d = this.stylesList[t]).type) !== "st" && s !== "gs" || d.wi !== 0) && d.data._shouldRender && d.coOp !== 0 && this.globalData.currentGlobalAlpha !== 0) {
        for (o.save(), n = d.elements, s === "st" || s === "gs" ? (o.ctxStrokeStyle(s === "st" ? d.co : d.grd), o.ctxLineWidth(d.wi), o.ctxLineCap(d.lc), o.ctxLineJoin(d.lj), o.ctxMiterLimit(d.ml || 0)) : o.ctxFillStyle(s === "fl" ? d.co : d.grd), o.ctxOpacity(d.coOp), s !== "st" && s !== "gs" && u.beginPath(), o.ctxTransform(d.preTransforms.finalTransform.props), i = n.length, e = 0; e < i; e += 1) {
          for (s !== "st" && s !== "gs" || (u.beginPath(), d.da && (u.setLineDash(d.da), u.lineDashOffset = d.do)), a = (l = n[e].trNodes).length, r = 0; r < a; r += 1) l[r].t === "m" ? u.moveTo(l[r].p[0], l[r].p[1]) : l[r].t === "c" ? u.bezierCurveTo(l[r].pts[0], l[r].pts[1], l[r].pts[2], l[r].pts[3], l[r].pts[4], l[r].pts[5]) : u.closePath();
          s !== "st" && s !== "gs" || (o.ctxStroke(), d.da && u.setLineDash(this.dashResetter));
        }
        s !== "st" && s !== "gs" && this.globalData.renderer.ctxFill(d.r), o.restore();
      }
    }, CVShapeElement.prototype.renderShape = function(t, e, i, r) {
      var a, n;
      for (n = t, a = e.length - 1; a >= 0; a -= 1) e[a].ty === "tr" ? (n = i[a].transform, this.renderShapeTransform(t, n)) : e[a].ty === "sh" || e[a].ty === "el" || e[a].ty === "rc" || e[a].ty === "sr" ? this.renderPath(e[a], i[a]) : e[a].ty === "fl" ? this.renderFill(e[a], i[a], n) : e[a].ty === "st" ? this.renderStroke(e[a], i[a], n) : e[a].ty === "gf" || e[a].ty === "gs" ? this.renderGradientFill(e[a], i[a], n) : e[a].ty === "gr" ? this.renderShape(n, e[a].it, i[a].it) : e[a].ty;
      r && this.drawLayer();
    }, CVShapeElement.prototype.renderStyledShape = function(t, e) {
      if (this._isFirstFrame || e._mdf || t.transforms._mdf) {
        var i, r, a, n = t.trNodes, l = e.paths, s = l._length;
        n.length = 0;
        var d = t.transforms.finalTransform;
        for (a = 0; a < s; a += 1) {
          var h = l.shapes[a];
          if (h && h.v) {
            for (r = h._length, i = 1; i < r; i += 1) i === 1 && n.push({ t: "m", p: d.applyToPointArray(h.v[0][0], h.v[0][1], 0) }), n.push({ t: "c", pts: d.applyToTriplePoints(h.o[i - 1], h.i[i], h.v[i]) });
            r === 1 && n.push({ t: "m", p: d.applyToPointArray(h.v[0][0], h.v[0][1], 0) }), h.c && r && (n.push({ t: "c", pts: d.applyToTriplePoints(h.o[i - 1], h.i[0], h.v[0]) }), n.push({ t: "z" }));
          }
        }
        t.trNodes = n;
      }
    }, CVShapeElement.prototype.renderPath = function(t, e) {
      if (t.hd !== !0 && t._shouldRender) {
        var i, r = e.styledShapes.length;
        for (i = 0; i < r; i += 1) this.renderStyledShape(e.styledShapes[i], e.sh);
      }
    }, CVShapeElement.prototype.renderFill = function(t, e, i) {
      var r = e.style;
      (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity);
    }, CVShapeElement.prototype.renderGradientFill = function(t, e, i) {
      var r, a = e.style;
      if (!a.grd || e.g._mdf || e.s._mdf || e.e._mdf || t.t !== 1 && (e.h._mdf || e.a._mdf)) {
        var n, l = this.globalData.canvasContext, s = e.s.v, d = e.e.v;
        if (t.t === 1) r = l.createLinearGradient(s[0], s[1], d[0], d[1]);
        else {
          var h = Math.sqrt(Math.pow(s[0] - d[0], 2) + Math.pow(s[1] - d[1], 2)), o = Math.atan2(d[1] - s[1], d[0] - s[0]), u = e.h.v;
          u >= 1 ? u = 0.99 : u <= -1 && (u = -0.99);
          var m = h * u, f = Math.cos(o + e.a.v) * m + s[0], c = Math.sin(o + e.a.v) * m + s[1];
          r = l.createRadialGradient(f, c, 0, s[0], s[1], h);
        }
        var g = t.g.p, p = e.g.c, y = 1;
        for (n = 0; n < g; n += 1) e.g._hasOpacity && e.g._collapsable && (y = e.g.o[2 * n + 1]), r.addColorStop(p[4 * n] / 100, "rgba(" + p[4 * n + 1] + "," + p[4 * n + 2] + "," + p[4 * n + 3] + "," + y + ")");
        a.grd = r;
      }
      a.coOp = e.o.v * i.opacity;
    }, CVShapeElement.prototype.renderStroke = function(t, e, i) {
      var r = e.style, a = e.d;
      a && (a._mdf || this._isFirstFrame) && (r.da = a.dashArray, r.do = a.dashoffset[0]), (e.c._mdf || this._isFirstFrame) && (r.co = "rgb(" + bmFloor(e.c.v[0]) + "," + bmFloor(e.c.v[1]) + "," + bmFloor(e.c.v[2]) + ")"), (e.o._mdf || i._opMdf || this._isFirstFrame) && (r.coOp = e.o.v * i.opacity), (e.w._mdf || this._isFirstFrame) && (r.wi = e.w.v);
    }, CVShapeElement.prototype.destroy = function() {
      this.shapesData = null, this.globalData = null, this.canvasContext = null, this.stylesList.length = 0, this.itemsData.length = 0;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement, ITextElement], CVTextElement), CVTextElement.prototype.tHelper = createTag("canvas").getContext("2d"), CVTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = !1;
      t.fc ? (e = !0, this.values.fill = this.buildColor(t.fc)) : this.values.fill = "rgba(0,0,0,0)", this.fill = e;
      var i = !1;
      t.sc && (i = !0, this.values.stroke = this.buildColor(t.sc), this.values.sWidth = t.sw);
      var r, a, n, l, s, d, h, o, u, m, f, c, g = this.globalData.fontManager.getFontByName(t.f), p = t.l, y = this.mHelper;
      this.stroke = i, this.values.fValue = t.finalSize + "px " + this.globalData.fontManager.getFontByName(t.f).fFamily, a = t.finalText.length;
      var v = this.data.singleShape, _ = 1e-3 * t.tr * t.finalSize, b = 0, T = 0, k = !0, x = 0;
      for (r = 0; r < a; r += 1) {
        l = (n = this.globalData.fontManager.getCharData(t.finalText[r], g.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily)) && n.data || {}, y.reset(), v && p[r].n && (b = -_, T += t.yOffset, T += k ? 1 : 0, k = !1), u = (h = l.shapes ? l.shapes[0].it : []).length, y.scale(t.finalSize / 100, t.finalSize / 100), v && this.applyTextPropertiesToMatrix(t, y, p[r].line, b, T), f = createSizedArray(u - 1);
        var A = 0;
        for (o = 0; o < u; o += 1) if (h[o].ty === "sh") {
          for (d = h[o].ks.k.i.length, m = h[o].ks.k, c = [], s = 1; s < d; s += 1) s === 1 && c.push(y.applyToX(m.v[0][0], m.v[0][1], 0), y.applyToY(m.v[0][0], m.v[0][1], 0)), c.push(y.applyToX(m.o[s - 1][0], m.o[s - 1][1], 0), y.applyToY(m.o[s - 1][0], m.o[s - 1][1], 0), y.applyToX(m.i[s][0], m.i[s][1], 0), y.applyToY(m.i[s][0], m.i[s][1], 0), y.applyToX(m.v[s][0], m.v[s][1], 0), y.applyToY(m.v[s][0], m.v[s][1], 0));
          c.push(y.applyToX(m.o[s - 1][0], m.o[s - 1][1], 0), y.applyToY(m.o[s - 1][0], m.o[s - 1][1], 0), y.applyToX(m.i[0][0], m.i[0][1], 0), y.applyToY(m.i[0][0], m.i[0][1], 0), y.applyToX(m.v[0][0], m.v[0][1], 0), y.applyToY(m.v[0][0], m.v[0][1], 0)), f[A] = c, A += 1;
        }
        v && (b += p[r].l, b += _), this.textSpans[x] ? this.textSpans[x].elem = f : this.textSpans[x] = { elem: f }, x += 1;
      }
    }, CVTextElement.prototype.renderInnerContent = function() {
      var t, e, i, r, a, n;
      this.validateText(), this.canvasContext.font = this.values.fValue, this.globalData.renderer.ctxLineCap("butt"), this.globalData.renderer.ctxLineJoin("miter"), this.globalData.renderer.ctxMiterLimit(4), this.data.singleShape || this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag);
      var l, s = this.textAnimator.renderedLetters, d = this.textProperty.currentData.l;
      e = d.length;
      var h, o, u = null, m = null, f = null, c = this.globalData.renderer;
      for (t = 0; t < e; t += 1) if (!d[t].n) {
        if ((l = s[t]) && (c.save(), c.ctxTransform(l.p), c.ctxOpacity(l.o)), this.fill) {
          for (l && l.fc ? u !== l.fc && (c.ctxFillStyle(l.fc), u = l.fc) : u !== this.values.fill && (u = this.values.fill, c.ctxFillStyle(this.values.fill)), r = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1) for (n = (o = h[i]).length, this.globalData.canvasContext.moveTo(o[0], o[1]), a = 2; a < n; a += 6) this.globalData.canvasContext.bezierCurveTo(o[a], o[a + 1], o[a + 2], o[a + 3], o[a + 4], o[a + 5]);
          this.globalData.canvasContext.closePath(), c.ctxFill();
        }
        if (this.stroke) {
          for (l && l.sw ? f !== l.sw && (f = l.sw, c.ctxLineWidth(l.sw)) : f !== this.values.sWidth && (f = this.values.sWidth, c.ctxLineWidth(this.values.sWidth)), l && l.sc ? m !== l.sc && (m = l.sc, c.ctxStrokeStyle(l.sc)) : m !== this.values.stroke && (m = this.values.stroke, c.ctxStrokeStyle(this.values.stroke)), r = (h = this.textSpans[t].elem).length, this.globalData.canvasContext.beginPath(), i = 0; i < r; i += 1) for (n = (o = h[i]).length, this.globalData.canvasContext.moveTo(o[0], o[1]), a = 2; a < n; a += 6) this.globalData.canvasContext.bezierCurveTo(o[a], o[a + 1], o[a + 2], o[a + 3], o[a + 4], o[a + 5]);
          this.globalData.canvasContext.closePath(), c.ctxStroke();
        }
        l && this.globalData.renderer.restore();
      }
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVImageElement), CVImageElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVImageElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVImageElement.prototype.createContent = function() {
      if (this.img.width && (this.assetData.w !== this.img.width || this.assetData.h !== this.img.height)) {
        var t = createTag("canvas");
        t.width = this.assetData.w, t.height = this.assetData.h;
        var e, i, r = t.getContext("2d"), a = this.img.width, n = this.img.height, l = a / n, s = this.assetData.w / this.assetData.h, d = this.assetData.pr || this.globalData.renderConfig.imagePreserveAspectRatio;
        l > s && d === "xMidYMid slice" || l < s && d !== "xMidYMid slice" ? e = (i = n) * s : i = (e = a) / s, r.drawImage(this.img, (a - e) / 2, (n - i) / 2, e, i, 0, 0, this.assetData.w, this.assetData.h), this.img = t;
      }
    }, CVImageElement.prototype.renderInnerContent = function() {
      this.canvasContext.drawImage(this.img, 0, 0);
    }, CVImageElement.prototype.destroy = function() {
      this.img = null;
    }, extendPrototype([BaseElement, TransformElement, CVBaseElement, HierarchyElement, FrameElement, RenderableElement], CVSolidElement), CVSolidElement.prototype.initElement = SVGShapeElement.prototype.initElement, CVSolidElement.prototype.prepareFrame = IImageElement.prototype.prepareFrame, CVSolidElement.prototype.renderInnerContent = function() {
      this.globalData.renderer.ctxFillStyle(this.data.sc), this.globalData.renderer.ctxFillRect(0, 0, this.data.sw, this.data.sh);
    }, extendPrototype([BaseRenderer], CanvasRendererBase), CanvasRendererBase.prototype.createShape = function(t) {
      return new CVShapeElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createText = function(t) {
      return new CVTextElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createImage = function(t) {
      return new CVImageElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createSolid = function(t) {
      return new CVSolidElement(t, this.globalData, this);
    }, CanvasRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, CanvasRendererBase.prototype.ctxTransform = function(t) {
      t[0] === 1 && t[1] === 0 && t[4] === 0 && t[5] === 1 && t[12] === 0 && t[13] === 0 || this.canvasContext.transform(t[0], t[1], t[4], t[5], t[12], t[13]);
    }, CanvasRendererBase.prototype.ctxOpacity = function(t) {
      this.canvasContext.globalAlpha *= t < 0 ? 0 : t;
    }, CanvasRendererBase.prototype.ctxFillStyle = function(t) {
      this.canvasContext.fillStyle = t;
    }, CanvasRendererBase.prototype.ctxStrokeStyle = function(t) {
      this.canvasContext.strokeStyle = t;
    }, CanvasRendererBase.prototype.ctxLineWidth = function(t) {
      this.canvasContext.lineWidth = t;
    }, CanvasRendererBase.prototype.ctxLineCap = function(t) {
      this.canvasContext.lineCap = t;
    }, CanvasRendererBase.prototype.ctxLineJoin = function(t) {
      this.canvasContext.lineJoin = t;
    }, CanvasRendererBase.prototype.ctxMiterLimit = function(t) {
      this.canvasContext.miterLimit = t;
    }, CanvasRendererBase.prototype.ctxFill = function(t) {
      this.canvasContext.fill(t);
    }, CanvasRendererBase.prototype.ctxFillRect = function(t, e, i, r) {
      this.canvasContext.fillRect(t, e, i, r);
    }, CanvasRendererBase.prototype.ctxStroke = function() {
      this.canvasContext.stroke();
    }, CanvasRendererBase.prototype.reset = function() {
      this.renderConfig.clearCanvas ? this.contextData.reset() : this.canvasContext.restore();
    }, CanvasRendererBase.prototype.save = function() {
      this.canvasContext.save();
    }, CanvasRendererBase.prototype.restore = function(t) {
      this.renderConfig.clearCanvas ? (t && (this.globalData.blendMode = "source-over"), this.contextData.restore(t)) : this.canvasContext.restore();
    }, CanvasRendererBase.prototype.configAnimation = function(t) {
      if (this.animationItem.wrapper) {
        this.animationItem.container = createTag("canvas");
        var e = this.animationItem.container.style;
        e.width = "100%", e.height = "100%";
        var i = "0px 0px 0px";
        e.transformOrigin = i, e.mozTransformOrigin = i, e.webkitTransformOrigin = i, e["-webkit-transform"] = i, e.contentVisibility = this.renderConfig.contentVisibility, this.animationItem.wrapper.appendChild(this.animationItem.container), this.canvasContext = this.animationItem.container.getContext("2d"), this.renderConfig.className && this.animationItem.container.setAttribute("class", this.renderConfig.className), this.renderConfig.id && this.animationItem.container.setAttribute("id", this.renderConfig.id);
      } else this.canvasContext = this.renderConfig.context;
      this.contextData.setContext(this.canvasContext), this.data = t, this.layers = t.layers, this.transformCanvas = { w: t.w, h: t.h, sx: 0, sy: 0, tx: 0, ty: 0 }, this.setupGlobalData(t, document.body), this.globalData.canvasContext = this.canvasContext, this.globalData.renderer = this, this.globalData.isDashed = !1, this.globalData.progressiveLoad = this.renderConfig.progressiveLoad, this.globalData.transformCanvas = this.transformCanvas, this.elements = createSizedArray(t.layers.length), this.updateContainerSize();
    }, CanvasRendererBase.prototype.updateContainerSize = function(t, e) {
      var i, r, a, n;
      if (this.reset(), t ? (i = t, r = e, this.canvasContext.canvas.width = i, this.canvasContext.canvas.height = r) : (this.animationItem.wrapper && this.animationItem.container ? (i = this.animationItem.wrapper.offsetWidth, r = this.animationItem.wrapper.offsetHeight) : (i = this.canvasContext.canvas.width, r = this.canvasContext.canvas.height), this.canvasContext.canvas.width = i * this.renderConfig.dpr, this.canvasContext.canvas.height = r * this.renderConfig.dpr), this.renderConfig.preserveAspectRatio.indexOf("meet") !== -1 || this.renderConfig.preserveAspectRatio.indexOf("slice") !== -1) {
        var l = this.renderConfig.preserveAspectRatio.split(" "), s = l[1] || "meet", d = l[0] || "xMidYMid", h = d.substr(0, 4), o = d.substr(4);
        a = i / r, (n = this.transformCanvas.w / this.transformCanvas.h) > a && s === "meet" || n < a && s === "slice" ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = i / (this.transformCanvas.w / this.renderConfig.dpr)) : (this.transformCanvas.sx = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr)), this.transformCanvas.tx = h === "xMid" && (n < a && s === "meet" || n > a && s === "slice") ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) / 2 * this.renderConfig.dpr : h === "xMax" && (n < a && s === "meet" || n > a && s === "slice") ? (i - this.transformCanvas.w * (r / this.transformCanvas.h)) * this.renderConfig.dpr : 0, this.transformCanvas.ty = o === "YMid" && (n > a && s === "meet" || n < a && s === "slice") ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) / 2 * this.renderConfig.dpr : o === "YMax" && (n > a && s === "meet" || n < a && s === "slice") ? (r - this.transformCanvas.h * (i / this.transformCanvas.w)) * this.renderConfig.dpr : 0;
      } else this.renderConfig.preserveAspectRatio === "none" ? (this.transformCanvas.sx = i / (this.transformCanvas.w / this.renderConfig.dpr), this.transformCanvas.sy = r / (this.transformCanvas.h / this.renderConfig.dpr), this.transformCanvas.tx = 0, this.transformCanvas.ty = 0) : (this.transformCanvas.sx = this.renderConfig.dpr, this.transformCanvas.sy = this.renderConfig.dpr, this.transformCanvas.tx = 0, this.transformCanvas.ty = 0);
      this.transformCanvas.props = [this.transformCanvas.sx, 0, 0, 0, 0, this.transformCanvas.sy, 0, 0, 0, 0, 1, 0, this.transformCanvas.tx, this.transformCanvas.ty, 0, 1], this.ctxTransform(this.transformCanvas.props), this.canvasContext.beginPath(), this.canvasContext.rect(0, 0, this.transformCanvas.w, this.transformCanvas.h), this.canvasContext.closePath(), this.canvasContext.clip(), this.renderFrame(this.renderedFrame, !0);
    }, CanvasRendererBase.prototype.destroy = function() {
      var t;
      for (this.renderConfig.clearCanvas && this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), t = (this.layers ? this.layers.length : 0) - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.globalData.canvasContext = null, this.animationItem.container = null, this.destroyed = !0;
    }, CanvasRendererBase.prototype.renderFrame = function(t, e) {
      if ((this.renderedFrame !== t || this.renderConfig.clearCanvas !== !0 || e) && !this.destroyed && t !== -1) {
        var i;
        this.renderedFrame = t, this.globalData.frameNum = t - this.animationItem._isFirstFrame, this.globalData.frameId += 1, this.globalData._mdf = !this.renderConfig.clearCanvas || e, this.globalData.projectInterface.currentFrame = t;
        var r = this.layers.length;
        for (this.completeLayers || this.checkLayers(t), i = r - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && this.elements[i].prepareFrame(t - this.layers[i].st);
        if (this.globalData._mdf) {
          for (this.renderConfig.clearCanvas === !0 ? this.canvasContext.clearRect(0, 0, this.transformCanvas.w, this.transformCanvas.h) : this.save(), i = r - 1; i >= 0; i -= 1) (this.completeLayers || this.elements[i]) && this.elements[i].renderFrame();
          this.renderConfig.clearCanvas !== !0 && this.restore();
        }
      }
    }, CanvasRendererBase.prototype.buildItem = function(t) {
      var e = this.elements;
      if (!e[t] && this.layers[t].ty !== 99) {
        var i = this.createItem(this.layers[t], this, this.globalData);
        e[t] = i, i.initExpressions();
      }
    }, CanvasRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; )
        this.pendingElements.pop().checkParenting();
    }, CanvasRendererBase.prototype.hide = function() {
      this.animationItem.container.style.display = "none";
    }, CanvasRendererBase.prototype.show = function() {
      this.animationItem.container.style.display = "block";
    }, CVContextData.prototype.duplicate = function() {
      var t = 2 * this._length, e = 0;
      for (e = this._length; e < t; e += 1) this.stack[e] = new CanvasContext();
      this._length = t;
    }, CVContextData.prototype.reset = function() {
      this.cArrPos = 0, this.cTr.reset(), this.stack[this.cArrPos].opacity = 1;
    }, CVContextData.prototype.restore = function(t) {
      this.cArrPos -= 1;
      var e, i = this.stack[this.cArrPos], r = i.transform, a = this.cTr.props;
      for (e = 0; e < 16; e += 1) a[e] = r[e];
      if (t) {
        this.nativeContext.restore();
        var n = this.stack[this.cArrPos + 1];
        this.appliedFillStyle = n.fillStyle, this.appliedStrokeStyle = n.strokeStyle, this.appliedLineWidth = n.lineWidth, this.appliedLineCap = n.lineCap, this.appliedLineJoin = n.lineJoin, this.appliedMiterLimit = n.miterLimit;
      }
      this.nativeContext.setTransform(r[0], r[1], r[4], r[5], r[12], r[13]), (t || i.opacity !== -1 && this.currentOpacity !== i.opacity) && (this.nativeContext.globalAlpha = i.opacity, this.currentOpacity = i.opacity), this.currentFillStyle = i.fillStyle, this.currentStrokeStyle = i.strokeStyle, this.currentLineWidth = i.lineWidth, this.currentLineCap = i.lineCap, this.currentLineJoin = i.lineJoin, this.currentMiterLimit = i.miterLimit;
    }, CVContextData.prototype.save = function(t) {
      t && this.nativeContext.save();
      var e = this.cTr.props;
      this._length <= this.cArrPos && this.duplicate();
      var i, r = this.stack[this.cArrPos];
      for (i = 0; i < 16; i += 1) r.transform[i] = e[i];
      this.cArrPos += 1;
      var a = this.stack[this.cArrPos];
      a.opacity = r.opacity, a.fillStyle = r.fillStyle, a.strokeStyle = r.strokeStyle, a.lineWidth = r.lineWidth, a.lineCap = r.lineCap, a.lineJoin = r.lineJoin, a.miterLimit = r.miterLimit;
    }, CVContextData.prototype.setOpacity = function(t) {
      this.stack[this.cArrPos].opacity = t;
    }, CVContextData.prototype.setContext = function(t) {
      this.nativeContext = t;
    }, CVContextData.prototype.fillStyle = function(t) {
      this.stack[this.cArrPos].fillStyle !== t && (this.currentFillStyle = t, this.stack[this.cArrPos].fillStyle = t);
    }, CVContextData.prototype.strokeStyle = function(t) {
      this.stack[this.cArrPos].strokeStyle !== t && (this.currentStrokeStyle = t, this.stack[this.cArrPos].strokeStyle = t);
    }, CVContextData.prototype.lineWidth = function(t) {
      this.stack[this.cArrPos].lineWidth !== t && (this.currentLineWidth = t, this.stack[this.cArrPos].lineWidth = t);
    }, CVContextData.prototype.lineCap = function(t) {
      this.stack[this.cArrPos].lineCap !== t && (this.currentLineCap = t, this.stack[this.cArrPos].lineCap = t);
    }, CVContextData.prototype.lineJoin = function(t) {
      this.stack[this.cArrPos].lineJoin !== t && (this.currentLineJoin = t, this.stack[this.cArrPos].lineJoin = t);
    }, CVContextData.prototype.miterLimit = function(t) {
      this.stack[this.cArrPos].miterLimit !== t && (this.currentMiterLimit = t, this.stack[this.cArrPos].miterLimit = t);
    }, CVContextData.prototype.transform = function(t) {
      this.transformMat.cloneFromProps(t);
      var e = this.cTr;
      this.transformMat.multiply(e), e.cloneFromProps(this.transformMat.props);
      var i = e.props;
      this.nativeContext.setTransform(i[0], i[1], i[4], i[5], i[12], i[13]);
    }, CVContextData.prototype.opacity = function(t) {
      var e = this.stack[this.cArrPos].opacity;
      e *= t < 0 ? 0 : t, this.stack[this.cArrPos].opacity !== e && (this.currentOpacity !== t && (this.nativeContext.globalAlpha = t, this.currentOpacity = t), this.stack[this.cArrPos].opacity = e);
    }, CVContextData.prototype.fill = function(t) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fill(t);
    }, CVContextData.prototype.fillRect = function(t, e, i, r) {
      this.appliedFillStyle !== this.currentFillStyle && (this.appliedFillStyle = this.currentFillStyle, this.nativeContext.fillStyle = this.appliedFillStyle), this.nativeContext.fillRect(t, e, i, r);
    }, CVContextData.prototype.stroke = function() {
      this.appliedStrokeStyle !== this.currentStrokeStyle && (this.appliedStrokeStyle = this.currentStrokeStyle, this.nativeContext.strokeStyle = this.appliedStrokeStyle), this.appliedLineWidth !== this.currentLineWidth && (this.appliedLineWidth = this.currentLineWidth, this.nativeContext.lineWidth = this.appliedLineWidth), this.appliedLineCap !== this.currentLineCap && (this.appliedLineCap = this.currentLineCap, this.nativeContext.lineCap = this.appliedLineCap), this.appliedLineJoin !== this.currentLineJoin && (this.appliedLineJoin = this.currentLineJoin, this.nativeContext.lineJoin = this.appliedLineJoin), this.appliedMiterLimit !== this.currentMiterLimit && (this.appliedMiterLimit = this.currentMiterLimit, this.nativeContext.miterLimit = this.appliedMiterLimit), this.nativeContext.stroke();
    }, extendPrototype([CanvasRendererBase, ICompElement, CVBaseElement], CVCompElement), CVCompElement.prototype.renderInnerContent = function() {
      var t, e = this.canvasContext;
      for (e.beginPath(), e.moveTo(0, 0), e.lineTo(this.data.w, 0), e.lineTo(this.data.w, this.data.h), e.lineTo(0, this.data.h), e.lineTo(0, 0), e.clip(), t = this.layers.length - 1; t >= 0; t -= 1) (this.completeLayers || this.elements[t]) && this.elements[t].renderFrame();
    }, CVCompElement.prototype.destroy = function() {
      var t;
      for (t = this.layers.length - 1; t >= 0; t -= 1) this.elements[t] && this.elements[t].destroy();
      this.layers = null, this.elements = null;
    }, CVCompElement.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    }, extendPrototype([CanvasRendererBase], CanvasRenderer), CanvasRenderer.prototype.createComp = function(t) {
      return new CVCompElement(t, this.globalData, this);
    }, HBaseElement.prototype = { checkBlendMode: function() {
    }, initRendererElement: function() {
      this.baseElement = createTag(this.data.tg || "div"), this.data.hasMask ? (this.svgElement = createNS("svg"), this.layerElement = createNS("g"), this.maskedElement = this.layerElement, this.svgElement.appendChild(this.layerElement), this.baseElement.appendChild(this.svgElement)) : this.layerElement = this.baseElement, styleDiv(this.baseElement);
    }, createContainerElements: function() {
      this.renderableEffectsManager = new CVEffects(this), this.transformedElement = this.baseElement, this.maskedElement = this.layerElement, this.data.ln && this.layerElement.setAttribute("id", this.data.ln), this.data.cl && this.layerElement.setAttribute("class", this.data.cl), this.data.bm !== 0 && this.setBlendMode();
    }, renderElement: function() {
      var t = this.transformedElement ? this.transformedElement.style : {};
      if (this.finalTransform._matMdf) {
        var e = this.finalTransform.mat.toCSS();
        t.transform = e, t.webkitTransform = e;
      }
      this.finalTransform._opMdf && (t.opacity = this.finalTransform.mProp.o.v);
    }, renderFrame: function() {
      this.data.hd || this.hidden || (this.renderTransform(), this.renderRenderable(), this.renderElement(), this.renderInnerContent(), this._isFirstFrame && (this._isFirstFrame = !1));
    }, destroy: function() {
      this.layerElement = null, this.transformedElement = null, this.matteElement && (this.matteElement = null), this.maskManager && (this.maskManager.destroy(), this.maskManager = null);
    }, createRenderableComponents: function() {
      this.maskManager = new MaskElement(this.data, this, this.globalData);
    }, addEffects: function() {
    }, setMatte: function() {
    } }, HBaseElement.prototype.getBaseElement = SVGBaseElement.prototype.getBaseElement, HBaseElement.prototype.destroyBaseElement = HBaseElement.prototype.destroy, HBaseElement.prototype.buildElementParenting = BaseRenderer.prototype.buildElementParenting, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement], HSolidElement), HSolidElement.prototype.createContent = function() {
      var t;
      this.data.hasMask ? ((t = createNS("rect")).setAttribute("width", this.data.sw), t.setAttribute("height", this.data.sh), t.setAttribute("fill", this.data.sc), this.svgElement.setAttribute("width", this.data.sw), this.svgElement.setAttribute("height", this.data.sh)) : ((t = createTag("div")).style.width = this.data.sw + "px", t.style.height = this.data.sh + "px", t.style.backgroundColor = this.data.sc), this.layerElement.appendChild(t);
    }, extendPrototype([BaseElement, TransformElement, HSolidElement, SVGShapeElement, HBaseElement, HierarchyElement, FrameElement, RenderableElement], HShapeElement), HShapeElement.prototype._renderShapeFrame = HShapeElement.prototype.renderInnerContent, HShapeElement.prototype.createContent = function() {
      var t;
      if (this.baseElement.style.fontSize = 0, this.data.hasMask) this.layerElement.appendChild(this.shapesContainer), t = this.svgElement;
      else {
        t = createNS("svg");
        var e = this.comp.data ? this.comp.data : this.globalData.compSize;
        t.setAttribute("width", e.w), t.setAttribute("height", e.h), t.appendChild(this.shapesContainer), this.layerElement.appendChild(t);
      }
      this.searchShapes(this.shapesData, this.itemsData, this.prevViewData, this.shapesContainer, 0, [], !0), this.filterUniqueShapes(), this.shapeCont = t;
    }, HShapeElement.prototype.getTransformedPoint = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) e = t[i].mProps.v.applyToPointArray(e[0], e[1], 0);
      return e;
    }, HShapeElement.prototype.calculateShapeBoundingBox = function(t, e) {
      var i, r, a, n, l, s = t.sh.v, d = t.transformers, h = s._length;
      if (!(h <= 1)) {
        for (i = 0; i < h - 1; i += 1) r = this.getTransformedPoint(d, s.v[i]), a = this.getTransformedPoint(d, s.o[i]), n = this.getTransformedPoint(d, s.i[i + 1]), l = this.getTransformedPoint(d, s.v[i + 1]), this.checkBounds(r, a, n, l, e);
        s.c && (r = this.getTransformedPoint(d, s.v[i]), a = this.getTransformedPoint(d, s.o[i]), n = this.getTransformedPoint(d, s.i[0]), l = this.getTransformedPoint(d, s.v[0]), this.checkBounds(r, a, n, l, e));
      }
    }, HShapeElement.prototype.checkBounds = function(t, e, i, r, a) {
      this.getBoundsOfCurve(t, e, i, r);
      var n = this.shapeBoundingBox;
      a.x = bmMin(n.left, a.x), a.xMax = bmMax(n.right, a.xMax), a.y = bmMin(n.top, a.y), a.yMax = bmMax(n.bottom, a.yMax);
    }, HShapeElement.prototype.shapeBoundingBox = { left: 0, right: 0, top: 0, bottom: 0 }, HShapeElement.prototype.tempBoundingBox = { x: 0, xMax: 0, y: 0, yMax: 0, width: 0, height: 0 }, HShapeElement.prototype.getBoundsOfCurve = function(t, e, i, r) {
      for (var a, n, l, s, d, h, o, u = [[t[0], r[0]], [t[1], r[1]]], m = 0; m < 2; ++m) n = 6 * t[m] - 12 * e[m] + 6 * i[m], a = -3 * t[m] + 9 * e[m] - 9 * i[m] + 3 * r[m], l = 3 * e[m] - 3 * t[m], n |= 0, l |= 0, (a |= 0) === 0 && n === 0 || (a === 0 ? (s = -l / n) > 0 && s < 1 && u[m].push(this.calculateF(s, t, e, i, r, m)) : (d = n * n - 4 * l * a) >= 0 && ((h = (-n + bmSqrt(d)) / (2 * a)) > 0 && h < 1 && u[m].push(this.calculateF(h, t, e, i, r, m)), (o = (-n - bmSqrt(d)) / (2 * a)) > 0 && o < 1 && u[m].push(this.calculateF(o, t, e, i, r, m))));
      this.shapeBoundingBox.left = bmMin.apply(null, u[0]), this.shapeBoundingBox.top = bmMin.apply(null, u[1]), this.shapeBoundingBox.right = bmMax.apply(null, u[0]), this.shapeBoundingBox.bottom = bmMax.apply(null, u[1]);
    }, HShapeElement.prototype.calculateF = function(t, e, i, r, a, n) {
      return bmPow(1 - t, 3) * e[n] + 3 * bmPow(1 - t, 2) * t * i[n] + 3 * (1 - t) * bmPow(t, 2) * r[n] + bmPow(t, 3) * a[n];
    }, HShapeElement.prototype.calculateBoundingBox = function(t, e) {
      var i, r = t.length;
      for (i = 0; i < r; i += 1) t[i] && t[i].sh ? this.calculateShapeBoundingBox(t[i], e) : t[i] && t[i].it ? this.calculateBoundingBox(t[i].it, e) : t[i] && t[i].style && t[i].w && this.expandStrokeBoundingBox(t[i].w, e);
    }, HShapeElement.prototype.expandStrokeBoundingBox = function(t, e) {
      var i = 0;
      if (t.keyframes) {
        for (var r = 0; r < t.keyframes.length; r += 1) {
          var a = t.keyframes[r].s;
          a > i && (i = a);
        }
        i *= t.mult;
      } else i = t.v * t.mult;
      e.x -= i, e.xMax += i, e.y -= i, e.yMax += i;
    }, HShapeElement.prototype.currentBoxContains = function(t) {
      return this.currentBBox.x <= t.x && this.currentBBox.y <= t.y && this.currentBBox.width + this.currentBBox.x >= t.x + t.width && this.currentBBox.height + this.currentBBox.y >= t.y + t.height;
    }, HShapeElement.prototype.renderInnerContent = function() {
      if (this._renderShapeFrame(), !this.hidden && (this._isFirstFrame || this._mdf)) {
        var t = this.tempBoundingBox, e = 999999;
        if (t.x = e, t.xMax = -e, t.y = e, t.yMax = -e, this.calculateBoundingBox(this.itemsData, t), t.width = t.xMax < t.x ? 0 : t.xMax - t.x, t.height = t.yMax < t.y ? 0 : t.yMax - t.y, this.currentBoxContains(t)) return;
        var i = !1;
        if (this.currentBBox.w !== t.width && (this.currentBBox.w = t.width, this.shapeCont.setAttribute("width", t.width), i = !0), this.currentBBox.h !== t.height && (this.currentBBox.h = t.height, this.shapeCont.setAttribute("height", t.height), i = !0), i || this.currentBBox.x !== t.x || this.currentBBox.y !== t.y) {
          this.currentBBox.w = t.width, this.currentBBox.h = t.height, this.currentBBox.x = t.x, this.currentBBox.y = t.y, this.shapeCont.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h);
          var r = this.shapeCont.style, a = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
          r.transform = a, r.webkitTransform = a;
        }
      }
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HierarchyElement, FrameElement, RenderableDOMElement, ITextElement], HTextElement), HTextElement.prototype.createContent = function() {
      if (this.isMasked = this.checkMasks(), this.isMasked) {
        this.renderType = "svg", this.compW = this.comp.data.w, this.compH = this.comp.data.h, this.svgElement.setAttribute("width", this.compW), this.svgElement.setAttribute("height", this.compH);
        var t = createNS("g");
        this.maskedElement.appendChild(t), this.innerElem = t;
      } else this.renderType = "html", this.innerElem = this.layerElement;
      this.checkParenting();
    }, HTextElement.prototype.buildNewText = function() {
      var t = this.textProperty.currentData;
      this.renderedLetters = createSizedArray(t.l ? t.l.length : 0);
      var e = this.innerElem.style, i = t.fc ? this.buildColor(t.fc) : "rgba(0,0,0,0)";
      e.fill = i, e.color = i, t.sc && (e.stroke = this.buildColor(t.sc), e.strokeWidth = t.sw + "px");
      var r, a, n = this.globalData.fontManager.getFontByName(t.f);
      if (!this.globalData.fontManager.chars) if (e.fontSize = t.finalSize + "px", e.lineHeight = t.finalSize + "px", n.fClass) this.innerElem.className = n.fClass;
      else {
        e.fontFamily = n.fFamily;
        var l = t.fWeight, s = t.fStyle;
        e.fontStyle = s, e.fontWeight = l;
      }
      var d, h, o, u = t.l;
      a = u.length;
      var m, f = this.mHelper, c = "", g = 0;
      for (r = 0; r < a; r += 1) {
        if (this.globalData.fontManager.chars ? (this.textPaths[g] ? d = this.textPaths[g] : ((d = createNS("path")).setAttribute("stroke-linecap", lineCapEnum[1]), d.setAttribute("stroke-linejoin", lineJoinEnum[2]), d.setAttribute("stroke-miterlimit", "4")), this.isMasked || (this.textSpans[g] ? o = (h = this.textSpans[g]).children[0] : ((h = createTag("div")).style.lineHeight = 0, (o = createNS("svg")).appendChild(d), styleDiv(h)))) : this.isMasked ? d = this.textPaths[g] ? this.textPaths[g] : createNS("text") : this.textSpans[g] ? (h = this.textSpans[g], d = this.textPaths[g]) : (styleDiv(h = createTag("span")), styleDiv(d = createTag("span")), h.appendChild(d)), this.globalData.fontManager.chars) {
          var p, y = this.globalData.fontManager.getCharData(t.finalText[r], n.fStyle, this.globalData.fontManager.getFontByName(t.f).fFamily);
          if (p = y ? y.data : null, f.reset(), p && p.shapes && p.shapes.length && (m = p.shapes[0].it, f.scale(t.finalSize / 100, t.finalSize / 100), c = this.createPathShape(f, m), d.setAttribute("d", c)), this.isMasked) this.innerElem.appendChild(d);
          else {
            if (this.innerElem.appendChild(h), p && p.shapes) {
              document.body.appendChild(o);
              var v = o.getBBox();
              o.setAttribute("width", v.width + 2), o.setAttribute("height", v.height + 2), o.setAttribute("viewBox", v.x - 1 + " " + (v.y - 1) + " " + (v.width + 2) + " " + (v.height + 2));
              var _ = o.style, b = "translate(" + (v.x - 1) + "px," + (v.y - 1) + "px)";
              _.transform = b, _.webkitTransform = b, u[r].yOffset = v.y - 1;
            } else o.setAttribute("width", 1), o.setAttribute("height", 1);
            h.appendChild(o);
          }
        } else if (d.textContent = u[r].val, d.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve"), this.isMasked) this.innerElem.appendChild(d);
        else {
          this.innerElem.appendChild(h);
          var T = d.style, k = "translate3d(0," + -t.finalSize / 1.2 + "px,0)";
          T.transform = k, T.webkitTransform = k;
        }
        this.isMasked ? this.textSpans[g] = d : this.textSpans[g] = h, this.textSpans[g].style.display = "block", this.textPaths[g] = d, g += 1;
      }
      for (; g < this.textSpans.length; ) this.textSpans[g].style.display = "none", g += 1;
    }, HTextElement.prototype.renderInnerContent = function() {
      var t;
      if (this.validateText(), this.data.singleShape) {
        if (!this._isFirstFrame && !this.lettersChangedFlag) return;
        if (this.isMasked && this.finalTransform._matMdf) {
          this.svgElement.setAttribute("viewBox", -this.finalTransform.mProp.p.v[0] + " " + -this.finalTransform.mProp.p.v[1] + " " + this.compW + " " + this.compH), t = this.svgElement.style;
          var e = "translate(" + -this.finalTransform.mProp.p.v[0] + "px," + -this.finalTransform.mProp.p.v[1] + "px)";
          t.transform = e, t.webkitTransform = e;
        }
      }
      if (this.textAnimator.getMeasures(this.textProperty.currentData, this.lettersChangedFlag), this.lettersChangedFlag || this.textAnimator.lettersChangedFlag) {
        var i, r, a, n, l, s = 0, d = this.textAnimator.renderedLetters, h = this.textProperty.currentData.l;
        for (r = h.length, i = 0; i < r; i += 1) h[i].n ? s += 1 : (n = this.textSpans[i], l = this.textPaths[i], a = d[s], s += 1, a._mdf.m && (this.isMasked ? n.setAttribute("transform", a.m) : (n.style.webkitTransform = a.m, n.style.transform = a.m)), n.style.opacity = a.o, a.sw && a._mdf.sw && l.setAttribute("stroke-width", a.sw), a.sc && a._mdf.sc && l.setAttribute("stroke", a.sc), a.fc && a._mdf.fc && (l.setAttribute("fill", a.fc), l.style.color = a.fc));
        if (this.innerElem.getBBox && !this.hidden && (this._isFirstFrame || this._mdf)) {
          var o = this.innerElem.getBBox();
          if (this.currentBBox.w !== o.width && (this.currentBBox.w = o.width, this.svgElement.setAttribute("width", o.width)), this.currentBBox.h !== o.height && (this.currentBBox.h = o.height, this.svgElement.setAttribute("height", o.height)), this.currentBBox.w !== o.width + 2 || this.currentBBox.h !== o.height + 2 || this.currentBBox.x !== o.x - 1 || this.currentBBox.y !== o.y - 1) {
            this.currentBBox.w = o.width + 2, this.currentBBox.h = o.height + 2, this.currentBBox.x = o.x - 1, this.currentBBox.y = o.y - 1, this.svgElement.setAttribute("viewBox", this.currentBBox.x + " " + this.currentBBox.y + " " + this.currentBBox.w + " " + this.currentBBox.h), t = this.svgElement.style;
            var u = "translate(" + this.currentBBox.x + "px," + this.currentBBox.y + "px)";
            t.transform = u, t.webkitTransform = u;
          }
        }
      }
    }, extendPrototype([BaseElement, FrameElement, HierarchyElement], HCameraElement), HCameraElement.prototype.setup = function() {
      var t, e, i, r, a = this.comp.threeDElements.length;
      for (t = 0; t < a; t += 1) if ((e = this.comp.threeDElements[t]).type === "3d") {
        i = e.perspectiveElem.style, r = e.container.style;
        var n = this.pe.v + "px", l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        i.perspective = n, i.webkitPerspective = n, r.transformOrigin = "0px 0px 0px", r.mozTransformOrigin = "0px 0px 0px", r.webkitTransformOrigin = "0px 0px 0px", i.transform = l, i.webkitTransform = l;
      }
    }, HCameraElement.prototype.createElements = function() {
    }, HCameraElement.prototype.hide = function() {
    }, HCameraElement.prototype.renderFrame = function() {
      var t, e, i = this._isFirstFrame;
      if (this.hierarchy) for (e = this.hierarchy.length, t = 0; t < e; t += 1) i = this.hierarchy[t].finalTransform.mProp._mdf || i;
      if (i || this.pe._mdf || this.p && this.p._mdf || this.px && (this.px._mdf || this.py._mdf || this.pz._mdf) || this.rx._mdf || this.ry._mdf || this.rz._mdf || this.or._mdf || this.a && this.a._mdf) {
        if (this.mat.reset(), this.hierarchy) for (t = e = this.hierarchy.length - 1; t >= 0; t -= 1) {
          var r = this.hierarchy[t].finalTransform.mProp;
          this.mat.translate(-r.p.v[0], -r.p.v[1], r.p.v[2]), this.mat.rotateX(-r.or.v[0]).rotateY(-r.or.v[1]).rotateZ(r.or.v[2]), this.mat.rotateX(-r.rx.v).rotateY(-r.ry.v).rotateZ(r.rz.v), this.mat.scale(1 / r.s.v[0], 1 / r.s.v[1], 1 / r.s.v[2]), this.mat.translate(r.a.v[0], r.a.v[1], r.a.v[2]);
        }
        if (this.p ? this.mat.translate(-this.p.v[0], -this.p.v[1], this.p.v[2]) : this.mat.translate(-this.px.v, -this.py.v, this.pz.v), this.a) {
          var a;
          a = this.p ? [this.p.v[0] - this.a.v[0], this.p.v[1] - this.a.v[1], this.p.v[2] - this.a.v[2]] : [this.px.v - this.a.v[0], this.py.v - this.a.v[1], this.pz.v - this.a.v[2]];
          var n = Math.sqrt(Math.pow(a[0], 2) + Math.pow(a[1], 2) + Math.pow(a[2], 2)), l = [a[0] / n, a[1] / n, a[2] / n], s = Math.sqrt(l[2] * l[2] + l[0] * l[0]), d = Math.atan2(l[1], s), h = Math.atan2(l[0], -l[2]);
          this.mat.rotateY(h).rotateX(-d);
        }
        this.mat.rotateX(-this.rx.v).rotateY(-this.ry.v).rotateZ(this.rz.v), this.mat.rotateX(-this.or.v[0]).rotateY(-this.or.v[1]).rotateZ(this.or.v[2]), this.mat.translate(this.globalData.compSize.w / 2, this.globalData.compSize.h / 2, 0), this.mat.translate(0, 0, this.pe.v);
        var o = !this._prevMat.equals(this.mat);
        if ((o || this.pe._mdf) && this.comp.threeDElements) {
          var u, m, f;
          for (e = this.comp.threeDElements.length, t = 0; t < e; t += 1) if ((u = this.comp.threeDElements[t]).type === "3d") {
            if (o) {
              var c = this.mat.toCSS();
              (f = u.container.style).transform = c, f.webkitTransform = c;
            }
            this.pe._mdf && ((m = u.perspectiveElem.style).perspective = this.pe.v + "px", m.webkitPerspective = this.pe.v + "px");
          }
          this.mat.clone(this._prevMat);
        }
      }
      this._isFirstFrame = !1;
    }, HCameraElement.prototype.prepareFrame = function(t) {
      this.prepareProperties(t, !0);
    }, HCameraElement.prototype.destroy = function() {
    }, HCameraElement.prototype.getBaseElement = function() {
      return null;
    }, extendPrototype([BaseElement, TransformElement, HBaseElement, HSolidElement, HierarchyElement, FrameElement, RenderableElement], HImageElement), HImageElement.prototype.createContent = function() {
      var t = this.globalData.getAssetsPath(this.assetData), e = new Image();
      this.data.hasMask ? (this.imageElem = createNS("image"), this.imageElem.setAttribute("width", this.assetData.w + "px"), this.imageElem.setAttribute("height", this.assetData.h + "px"), this.imageElem.setAttributeNS("http://www.w3.org/1999/xlink", "href", t), this.layerElement.appendChild(this.imageElem), this.baseElement.setAttribute("width", this.assetData.w), this.baseElement.setAttribute("height", this.assetData.h)) : this.layerElement.appendChild(e), e.crossOrigin = "anonymous", e.src = t, this.data.ln && this.baseElement.setAttribute("id", this.data.ln);
    }, extendPrototype([BaseRenderer], HybridRendererBase), HybridRendererBase.prototype.buildItem = SVGRenderer.prototype.buildItem, HybridRendererBase.prototype.checkPendingElements = function() {
      for (; this.pendingElements.length; )
        this.pendingElements.pop().checkParenting();
    }, HybridRendererBase.prototype.appendElementInPos = function(t, e) {
      var i = t.getBaseElement();
      if (i) {
        var r = this.layers[e];
        if (r.ddd && this.supports3d) this.addTo3dContainer(i, e);
        else if (this.threeDElements) this.addTo3dContainer(i, e);
        else {
          for (var a, n, l = 0; l < e; ) this.elements[l] && this.elements[l] !== !0 && this.elements[l].getBaseElement && (n = this.elements[l], a = (this.layers[l].ddd ? this.getThreeDContainerByPos(l) : n.getBaseElement()) || a), l += 1;
          a ? r.ddd && this.supports3d || this.layerElement.insertBefore(i, a) : r.ddd && this.supports3d || this.layerElement.appendChild(i);
        }
      }
    }, HybridRendererBase.prototype.createShape = function(t) {
      return this.supports3d ? new HShapeElement(t, this.globalData, this) : new SVGShapeElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createText = function(t) {
      return this.supports3d ? new HTextElement(t, this.globalData, this) : new SVGTextLottieElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createCamera = function(t) {
      return this.camera = new HCameraElement(t, this.globalData, this), this.camera;
    }, HybridRendererBase.prototype.createImage = function(t) {
      return this.supports3d ? new HImageElement(t, this.globalData, this) : new IImageElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createSolid = function(t) {
      return this.supports3d ? new HSolidElement(t, this.globalData, this) : new ISolidElement(t, this.globalData, this);
    }, HybridRendererBase.prototype.createNull = SVGRenderer.prototype.createNull, HybridRendererBase.prototype.getThreeDContainerByPos = function(t) {
      for (var e = 0, i = this.threeDElements.length; e < i; ) {
        if (this.threeDElements[e].startPos <= t && this.threeDElements[e].endPos >= t) return this.threeDElements[e].perspectiveElem;
        e += 1;
      }
      return null;
    }, HybridRendererBase.prototype.createThreeDContainer = function(t, e) {
      var i, r, a = createTag("div");
      styleDiv(a);
      var n = createTag("div");
      if (styleDiv(n), e === "3d") {
        (i = a.style).width = this.globalData.compSize.w + "px", i.height = this.globalData.compSize.h + "px", i.webkitTransformOrigin = "50% 50%", i.mozTransformOrigin = "50% 50%", i.transformOrigin = "50% 50%";
        var l = "matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1)";
        (r = n.style).transform = l, r.webkitTransform = l;
      }
      a.appendChild(n);
      var s = { container: n, perspectiveElem: a, startPos: t, endPos: t, type: e };
      return this.threeDElements.push(s), s;
    }, HybridRendererBase.prototype.build3dContainers = function() {
      var t, e, i = this.layers.length, r = "";
      for (t = 0; t < i; t += 1) this.layers[t].ddd && this.layers[t].ty !== 3 ? (r !== "3d" && (r = "3d", e = this.createThreeDContainer(t, "3d")), e.endPos = Math.max(e.endPos, t)) : (r !== "2d" && (r = "2d", e = this.createThreeDContainer(t, "2d")), e.endPos = Math.max(e.endPos, t));
      for (t = (i = this.threeDElements.length) - 1; t >= 0; t -= 1) this.resizerElem.appendChild(this.threeDElements[t].perspectiveElem);
    }, HybridRendererBase.prototype.addTo3dContainer = function(t, e) {
      for (var i = 0, r = this.threeDElements.length; i < r; ) {
        if (e <= this.threeDElements[i].endPos) {
          for (var a, n = this.threeDElements[i].startPos; n < e; ) this.elements[n] && this.elements[n].getBaseElement && (a = this.elements[n].getBaseElement()), n += 1;
          a ? this.threeDElements[i].container.insertBefore(t, a) : this.threeDElements[i].container.appendChild(t);
          break;
        }
        i += 1;
      }
    }, HybridRendererBase.prototype.configAnimation = function(t) {
      var e = createTag("div"), i = this.animationItem.wrapper, r = e.style;
      r.width = t.w + "px", r.height = t.h + "px", this.resizerElem = e, styleDiv(e), r.transformStyle = "flat", r.mozTransformStyle = "flat", r.webkitTransformStyle = "flat", this.renderConfig.className && e.setAttribute("class", this.renderConfig.className), i.appendChild(e), r.overflow = "hidden";
      var a = createNS("svg");
      a.setAttribute("width", "1"), a.setAttribute("height", "1"), styleDiv(a), this.resizerElem.appendChild(a);
      var n = createNS("defs");
      a.appendChild(n), this.data = t, this.setupGlobalData(t, a), this.globalData.defs = n, this.layers = t.layers, this.layerElement = this.resizerElem, this.build3dContainers(), this.updateContainerSize();
    }, HybridRendererBase.prototype.destroy = function() {
      var t;
      this.animationItem.wrapper && (this.animationItem.wrapper.innerText = ""), this.animationItem.container = null, this.globalData.defs = null;
      var e = this.layers ? this.layers.length : 0;
      for (t = 0; t < e; t += 1) this.elements[t] && this.elements[t].destroy && this.elements[t].destroy();
      this.elements.length = 0, this.destroyed = !0, this.animationItem = null;
    }, HybridRendererBase.prototype.updateContainerSize = function() {
      var t, e, i, r, a = this.animationItem.wrapper.offsetWidth, n = this.animationItem.wrapper.offsetHeight, l = a / n;
      this.globalData.compSize.w / this.globalData.compSize.h > l ? (t = a / this.globalData.compSize.w, e = a / this.globalData.compSize.w, i = 0, r = (n - this.globalData.compSize.h * (a / this.globalData.compSize.w)) / 2) : (t = n / this.globalData.compSize.h, e = n / this.globalData.compSize.h, i = (a - this.globalData.compSize.w * (n / this.globalData.compSize.h)) / 2, r = 0);
      var s = this.resizerElem.style;
      s.webkitTransform = "matrix3d(" + t + ",0,0,0,0," + e + ",0,0,0,0,1,0," + i + "," + r + ",0,1)", s.transform = s.webkitTransform;
    }, HybridRendererBase.prototype.renderFrame = SVGRenderer.prototype.renderFrame, HybridRendererBase.prototype.hide = function() {
      this.resizerElem.style.display = "none";
    }, HybridRendererBase.prototype.show = function() {
      this.resizerElem.style.display = "block";
    }, HybridRendererBase.prototype.initItems = function() {
      if (this.buildAllItems(), this.camera) this.camera.setup();
      else {
        var t, e = this.globalData.compSize.w, i = this.globalData.compSize.h, r = this.threeDElements.length;
        for (t = 0; t < r; t += 1) {
          var a = this.threeDElements[t].perspectiveElem.style;
          a.webkitPerspective = Math.sqrt(Math.pow(e, 2) + Math.pow(i, 2)) + "px", a.perspective = a.webkitPerspective;
        }
      }
    }, HybridRendererBase.prototype.searchExtraCompositions = function(t) {
      var e, i = t.length, r = createTag("div");
      for (e = 0; e < i; e += 1) if (t[e].xt) {
        var a = this.createComp(t[e], r, this.globalData.comp, null);
        a.initExpressions(), this.globalData.projectInterface.registerComposition(a);
      }
    }, extendPrototype([HybridRendererBase, ICompElement, HBaseElement], HCompElement), HCompElement.prototype._createBaseContainerElements = HCompElement.prototype.createContainerElements, HCompElement.prototype.createContainerElements = function() {
      this._createBaseContainerElements(), this.data.hasMask ? (this.svgElement.setAttribute("width", this.data.w), this.svgElement.setAttribute("height", this.data.h), this.transformedElement = this.baseElement) : this.transformedElement = this.layerElement;
    }, HCompElement.prototype.addTo3dContainer = function(t, e) {
      for (var i, r = 0; r < e; ) this.elements[r] && this.elements[r].getBaseElement && (i = this.elements[r].getBaseElement()), r += 1;
      i ? this.layerElement.insertBefore(t, i) : this.layerElement.appendChild(t);
    }, HCompElement.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    }, extendPrototype([HybridRendererBase], HybridRenderer), HybridRenderer.prototype.createComp = function(t) {
      return this.supports3d ? new HCompElement(t, this.globalData, this) : new SVGCompElement(t, this.globalData, this);
    };
    var CompExpressionInterface = function(t) {
      function e(i) {
        for (var r = 0, a = t.layers.length; r < a; ) {
          if (t.layers[r].nm === i || t.layers[r].ind === i) return t.elements[r].layerInterface;
          r += 1;
        }
        return null;
      }
      return Object.defineProperty(e, "_name", { value: t.data.nm }), e.layer = e, e.pixelAspect = 1, e.height = t.data.h || t.globalData.compSize.h, e.width = t.data.w || t.globalData.compSize.w, e.pixelAspect = 1, e.frameDuration = 1 / t.globalData.frameRate, e.displayStartTime = 0, e.numLayers = t.layers.length, e;
    };
    function _typeof$2(t) {
      return (_typeof$2 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(t);
    }
    function seedRandom(t, e) {
      var i = this, r = e.pow(256, 6), a = e.pow(2, 52), n = 2 * a;
      function l(o) {
        var u, m = o.length, f = this, c = 0, g = f.i = f.j = 0, p = f.S = [];
        for (m || (o = [m++]); c < 256; ) p[c] = c++;
        for (c = 0; c < 256; c++) p[c] = p[g = 255 & g + o[c % m] + (u = p[c])], p[g] = u;
        f.g = function(y) {
          for (var v, _ = 0, b = f.i, T = f.j, k = f.S; y--; ) v = k[b = 255 & b + 1], _ = 256 * _ + k[255 & (k[b] = k[T = 255 & T + v]) + (k[T] = v)];
          return f.i = b, f.j = T, _;
        };
      }
      function s(o, u) {
        return u.i = o.i, u.j = o.j, u.S = o.S.slice(), u;
      }
      function d(o, u) {
        for (var m, f = o + "", c = 0; c < f.length; ) u[255 & c] = 255 & (m ^= 19 * u[255 & c]) + f.charCodeAt(c++);
        return h(u);
      }
      function h(o) {
        return String.fromCharCode.apply(0, o);
      }
      e.seedrandom = function(o, u, m) {
        var f = [], c = d(function y(v, _) {
          var b, T = [], k = _typeof$2(v);
          if (_ && k == "object") for (b in v) try {
            T.push(y(v[b], _ - 1));
          } catch {
          }
          return T.length ? T : k == "string" ? v : v + "\0";
        }((u = u === !0 ? { entropy: !0 } : u || {}).entropy ? [o, h(t)] : o === null ? function() {
          try {
            var y = new Uint8Array(256);
            return (i.crypto || i.msCrypto).getRandomValues(y), h(y);
          } catch {
            var v = i.navigator, _ = v && v.plugins;
            return [+/* @__PURE__ */ new Date(), i, _, i.screen, h(t)];
          }
        }() : o, 3), f), g = new l(f), p = function() {
          for (var y = g.g(6), v = r, _ = 0; y < a; ) y = 256 * (y + _), v *= 256, _ = g.g(1);
          for (; y >= n; ) y /= 2, v /= 2, _ >>>= 1;
          return (y + _) / v;
        };
        return p.int32 = function() {
          return 0 | g.g(4);
        }, p.quick = function() {
          return g.g(4) / 4294967296;
        }, p.double = p, d(h(g.S), t), (u.pass || m || function(y, v, _, b) {
          return b && (b.S && s(b, g), y.state = function() {
            return s(g, {});
          }), _ ? (e.random = y, v) : y;
        })(p, c, "global" in u ? u.global : this == e, u.state);
      }, d(e.random(), t);
    }
    function initialize$2(t) {
      seedRandom([], t);
    }
    var propTypes = { SHAPE: "shape" };
    function _typeof$1(t) {
      return (_typeof$1 = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(t);
    }
    var ExpressionManager = function() {
      var ob = {}, Math = BMMath, window = null, document = null, XMLHttpRequest = null, fetch = null, frames = null, _lottieGlobal = {};
      function resetFrame() {
        _lottieGlobal = {};
      }
      function $bm_isInstanceOfArray(t) {
        return t.constructor === Array || t.constructor === Float32Array;
      }
      function isNumerable(t, e) {
        return t === "number" || e instanceof Number || t === "boolean" || t === "string";
      }
      function $bm_neg(t) {
        var e = _typeof$1(t);
        if (e === "number" || t instanceof Number || e === "boolean") return -t;
        if ($bm_isInstanceOfArray(t)) {
          var i, r = t.length, a = [];
          for (i = 0; i < r; i += 1) a[i] = -t[i];
          return a;
        }
        return t.propType ? t.v : -t;
      }
      initialize$2(BMMath);
      var easeInBez = BezierFactory.getBezierEasing(0.333, 0, 0.833, 0.833, "easeIn").get, easeOutBez = BezierFactory.getBezierEasing(0.167, 0.167, 0.667, 1, "easeOut").get, easeInOutBez = BezierFactory.getBezierEasing(0.33, 0, 0.667, 1, "easeInOut").get;
      function sum(t, e) {
        var i = _typeof$1(t), r = _typeof$1(e);
        if (isNumerable(i, t) && isNumerable(r, e) || i === "string" || r === "string") return t + e;
        if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] += e, t;
        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t + e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var a = 0, n = t.length, l = e.length, s = []; a < n || a < l; ) (typeof t[a] == "number" || t[a] instanceof Number) && (typeof e[a] == "number" || e[a] instanceof Number) ? s[a] = t[a] + e[a] : s[a] = e[a] === void 0 ? t[a] : t[a] || e[a], a += 1;
          return s;
        }
        return 0;
      }
      var add = sum;
      function sub(t, e) {
        var i = _typeof$1(t), r = _typeof$1(e);
        if (isNumerable(i, t) && isNumerable(r, e)) return i === "string" && (t = parseInt(t, 10)), r === "string" && (e = parseInt(e, 10)), t - e;
        if ($bm_isInstanceOfArray(t) && isNumerable(r, e)) return (t = t.slice(0))[0] -= e, t;
        if (isNumerable(i, t) && $bm_isInstanceOfArray(e)) return (e = e.slice(0))[0] = t - e[0], e;
        if ($bm_isInstanceOfArray(t) && $bm_isInstanceOfArray(e)) {
          for (var a = 0, n = t.length, l = e.length, s = []; a < n || a < l; ) (typeof t[a] == "number" || t[a] instanceof Number) && (typeof e[a] == "number" || e[a] instanceof Number) ? s[a] = t[a] - e[a] : s[a] = e[a] === void 0 ? t[a] : t[a] || e[a], a += 1;
          return s;
        }
        return 0;
      }
      function mul(t, e) {
        var i, r, a, n = _typeof$1(t), l = _typeof$1(e);
        if (isNumerable(n, t) && isNumerable(l, e)) return t * e;
        if ($bm_isInstanceOfArray(t) && isNumerable(l, e)) {
          for (a = t.length, i = createTypedArray("float32", a), r = 0; r < a; r += 1) i[r] = t[r] * e;
          return i;
        }
        if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
          for (a = e.length, i = createTypedArray("float32", a), r = 0; r < a; r += 1) i[r] = t * e[r];
          return i;
        }
        return 0;
      }
      function div(t, e) {
        var i, r, a, n = _typeof$1(t), l = _typeof$1(e);
        if (isNumerable(n, t) && isNumerable(l, e)) return t / e;
        if ($bm_isInstanceOfArray(t) && isNumerable(l, e)) {
          for (a = t.length, i = createTypedArray("float32", a), r = 0; r < a; r += 1) i[r] = t[r] / e;
          return i;
        }
        if (isNumerable(n, t) && $bm_isInstanceOfArray(e)) {
          for (a = e.length, i = createTypedArray("float32", a), r = 0; r < a; r += 1) i[r] = t / e[r];
          return i;
        }
        return 0;
      }
      function mod(t, e) {
        return typeof t == "string" && (t = parseInt(t, 10)), typeof e == "string" && (e = parseInt(e, 10)), t % e;
      }
      var $bm_sum = sum, $bm_sub = sub, $bm_mul = mul, $bm_div = div, $bm_mod = mod;
      function clamp(t, e, i) {
        if (e > i) {
          var r = i;
          i = e, e = r;
        }
        return Math.min(Math.max(t, e), i);
      }
      function radiansToDegrees(t) {
        return t / degToRads;
      }
      var radians_to_degrees = radiansToDegrees;
      function degreesToRadians(t) {
        return t * degToRads;
      }
      var degrees_to_radians = radiansToDegrees, helperLengthArray = [0, 0, 0, 0, 0, 0];
      function length(t, e) {
        if (typeof t == "number" || t instanceof Number) return e = e || 0, Math.abs(t - e);
        var i;
        e || (e = helperLengthArray);
        var r = Math.min(t.length, e.length), a = 0;
        for (i = 0; i < r; i += 1) a += Math.pow(e[i] - t[i], 2);
        return Math.sqrt(a);
      }
      function normalize(t) {
        return div(t, length(t));
      }
      function rgbToHsl(t) {
        var e, i, r = t[0], a = t[1], n = t[2], l = Math.max(r, a, n), s = Math.min(r, a, n), d = (l + s) / 2;
        if (l === s) e = 0, i = 0;
        else {
          var h = l - s;
          switch (i = d > 0.5 ? h / (2 - l - s) : h / (l + s), l) {
            case r:
              e = (a - n) / h + (a < n ? 6 : 0);
              break;
            case a:
              e = (n - r) / h + 2;
              break;
            case n:
              e = (r - a) / h + 4;
          }
          e /= 6;
        }
        return [e, i, d, t[3]];
      }
      function hue2rgb(t, e, i) {
        return i < 0 && (i += 1), i > 1 && (i -= 1), i < 1 / 6 ? t + 6 * (e - t) * i : i < 0.5 ? e : i < 2 / 3 ? t + (e - t) * (2 / 3 - i) * 6 : t;
      }
      function hslToRgb(t) {
        var e, i, r, a = t[0], n = t[1], l = t[2];
        if (n === 0) e = l, r = l, i = l;
        else {
          var s = l < 0.5 ? l * (1 + n) : l + n - l * n, d = 2 * l - s;
          e = hue2rgb(d, s, a + 1 / 3), i = hue2rgb(d, s, a), r = hue2rgb(d, s, a - 1 / 3);
        }
        return [e, i, r, t[3]];
      }
      function linear(t, e, i, r, a) {
        if (r !== void 0 && a !== void 0 || (r = e, a = i, e = 0, i = 1), i < e) {
          var n = i;
          i = e, e = n;
        }
        if (t <= e) return r;
        if (t >= i) return a;
        var l, s = i === e ? 0 : (t - e) / (i - e);
        if (!r.length) return r + (a - r) * s;
        var d = r.length, h = createTypedArray("float32", d);
        for (l = 0; l < d; l += 1) h[l] = r[l] + (a[l] - r[l]) * s;
        return h;
      }
      function random(t, e) {
        if (e === void 0 && (t === void 0 ? (t = 0, e = 1) : (e = t, t = void 0)), e.length) {
          var i, r = e.length;
          t || (t = createTypedArray("float32", r));
          var a = createTypedArray("float32", r), n = BMMath.random();
          for (i = 0; i < r; i += 1) a[i] = t[i] + n * (e[i] - t[i]);
          return a;
        }
        return t === void 0 && (t = 0), t + BMMath.random() * (e - t);
      }
      function createPath(t, e, i, r) {
        var a, n = t.length, l = shapePool.newElement();
        l.setPathData(!!r, n);
        var s, d, h = [0, 0];
        for (a = 0; a < n; a += 1) s = e && e[a] ? e[a] : h, d = i && i[a] ? i[a] : h, l.setTripleAt(t[a][0], t[a][1], d[0] + t[a][0], d[1] + t[a][1], s[0] + t[a][0], s[1] + t[a][1], a, !0);
        return l;
      }
      function initiateExpression(elem, data, property) {
        function noOp(t) {
          return t;
        }
        if (!elem.globalData.renderConfig.runExpressions) return noOp;
        var val = data.x, needsVelocity = /velocity(?![\w\d])/.test(val), _needsRandom = val.indexOf("random") !== -1, elemType = elem.data.ty, transform, $bm_transform, content, effect, thisProperty = property;
        thisProperty.valueAtTime = thisProperty.getValueAtTime, Object.defineProperty(thisProperty, "value", { get: function() {
          return thisProperty.v;
        } }), elem.comp.frameDuration = 1 / elem.comp.globalData.frameRate, elem.comp.displayStartTime = 0;
        var inPoint = elem.data.ip / elem.comp.globalData.frameRate, outPoint = elem.data.op / elem.comp.globalData.frameRate, width = elem.data.sw ? elem.data.sw : 0, height = elem.data.sh ? elem.data.sh : 0, name = elem.data.nm, loopIn, loop_in, loopOut, loop_out, smooth, toWorld, fromWorld, fromComp, toComp, fromCompToSurface, position, rotation, anchorPoint, scale, thisLayer, thisComp, mask, valueAtTime, velocityAtTime, scoped_bm_rt, expression_function = eval("[function _expression_function(){" + val + ";scoped_bm_rt=$bm_rt}]")[0], numKeys = property.kf ? data.k.length : 0, active = !this.data || this.data.hd !== !0, wiggle = (function(t, e) {
          var i, r, a = this.pv.length ? this.pv.length : 1, n = createTypedArray("float32", a), l = Math.floor(5 * time);
          for (i = 0, r = 0; i < l; ) {
            for (r = 0; r < a; r += 1) n[r] += -e + 2 * e * BMMath.random();
            i += 1;
          }
          var s = 5 * time, d = s - Math.floor(s), h = createTypedArray("float32", a);
          if (a > 1) {
            for (r = 0; r < a; r += 1) h[r] = this.pv[r] + n[r] + (-e + 2 * e * BMMath.random()) * d;
            return h;
          }
          return this.pv + n[0] + (-e + 2 * e * BMMath.random()) * d;
        }).bind(this);
        function loopInDuration(t, e) {
          return loopIn(t, e, !0);
        }
        function loopOutDuration(t, e) {
          return loopOut(t, e, !0);
        }
        thisProperty.loopIn && (loopIn = thisProperty.loopIn.bind(thisProperty), loop_in = loopIn), thisProperty.loopOut && (loopOut = thisProperty.loopOut.bind(thisProperty), loop_out = loopOut), thisProperty.smooth && (smooth = thisProperty.smooth.bind(thisProperty)), this.getValueAtTime && (valueAtTime = this.getValueAtTime.bind(this)), this.getVelocityAtTime && (velocityAtTime = this.getVelocityAtTime.bind(this));
        var comp = elem.comp.globalData.projectInterface.bind(elem.comp.globalData.projectInterface), time, velocity, value, text, textIndex, textTotal, selectorValue;
        function lookAt(t, e) {
          var i = [e[0] - t[0], e[1] - t[1], e[2] - t[2]], r = Math.atan2(i[0], Math.sqrt(i[1] * i[1] + i[2] * i[2])) / degToRads;
          return [-Math.atan2(i[1], i[2]) / degToRads, r, 0];
        }
        function easeOut(t, e, i, r, a) {
          return applyEase(easeOutBez, t, e, i, r, a);
        }
        function easeIn(t, e, i, r, a) {
          return applyEase(easeInBez, t, e, i, r, a);
        }
        function ease(t, e, i, r, a) {
          return applyEase(easeInOutBez, t, e, i, r, a);
        }
        function applyEase(t, e, i, r, a, n) {
          a === void 0 ? (a = i, n = r) : e = (e - i) / (r - i), e > 1 ? e = 1 : e < 0 && (e = 0);
          var l = t(e);
          if ($bm_isInstanceOfArray(a)) {
            var s, d = a.length, h = createTypedArray("float32", d);
            for (s = 0; s < d; s += 1) h[s] = (n[s] - a[s]) * l + a[s];
            return h;
          }
          return (n - a) * l + a;
        }
        function nearestKey(t) {
          var e, i, r, a = data.k.length;
          if (data.k.length && typeof data.k[0] != "number") if (i = -1, (t *= elem.comp.globalData.frameRate) < data.k[0].t) i = 1, r = data.k[0].t;
          else {
            for (e = 0; e < a - 1; e += 1) {
              if (t === data.k[e].t) {
                i = e + 1, r = data.k[e].t;
                break;
              }
              if (t > data.k[e].t && t < data.k[e + 1].t) {
                t - data.k[e].t > data.k[e + 1].t - t ? (i = e + 2, r = data.k[e + 1].t) : (i = e + 1, r = data.k[e].t);
                break;
              }
            }
            i === -1 && (i = e + 1, r = data.k[e].t);
          }
          else i = 0, r = 0;
          var n = {};
          return n.index = i, n.time = r / elem.comp.globalData.frameRate, n;
        }
        function key(t) {
          var e, i, r;
          if (!data.k.length || typeof data.k[0] == "number") throw new Error("The property has no keyframe at index " + t);
          t -= 1, e = { time: data.k[t].t / elem.comp.globalData.frameRate, value: [] };
          var a = Object.prototype.hasOwnProperty.call(data.k[t], "s") ? data.k[t].s : data.k[t - 1].e;
          for (r = a.length, i = 0; i < r; i += 1) e[i] = a[i], e.value[i] = a[i];
          return e;
        }
        function framesToTime(t, e) {
          return e || (e = elem.comp.globalData.frameRate), t / e;
        }
        function timeToFrames(t, e) {
          return t || t === 0 || (t = time), e || (e = elem.comp.globalData.frameRate), t * e;
        }
        function seedRandom(t) {
          BMMath.seedrandom(randSeed + t);
        }
        function sourceRectAtTime() {
          return elem.sourceRectAtTime();
        }
        function substring(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substring(t) : value.substring(t, e) : "";
        }
        function substr(t, e) {
          return typeof value == "string" ? e === void 0 ? value.substr(t) : value.substr(t, e) : "";
        }
        function posterizeTime(t) {
          time = t === 0 ? 0 : Math.floor(time * t) / t, value = valueAtTime(time);
        }
        var index = elem.data.ind;
        !elem.hierarchy || elem.hierarchy.length;
        var parent, randSeed = Math.floor(1e6 * Math.random()), globalData = elem.globalData;
        function executeExpression(t) {
          return value = t, this.frameExpressionId === elem.globalData.frameId && this.propType !== "textSelector" ? value : (this.propType === "textSelector" && (textIndex = this.textIndex, textTotal = this.textTotal, selectorValue = this.selectorValue), thisLayer || (text = elem.layerInterface.text, thisLayer = elem.layerInterface, thisComp = elem.comp.compInterface, toWorld = thisLayer.toWorld.bind(thisLayer), fromWorld = thisLayer.fromWorld.bind(thisLayer), fromComp = thisLayer.fromComp.bind(thisLayer), toComp = thisLayer.toComp.bind(thisLayer), mask = thisLayer.mask ? thisLayer.mask.bind(thisLayer) : null, fromCompToSurface = fromComp), transform || (transform = elem.layerInterface("ADBE Transform Group"), $bm_transform = transform, transform && (anchorPoint = transform.anchorPoint)), elemType !== 4 || content || (content = thisLayer("ADBE Root Vectors Group")), effect || (effect = thisLayer(4)), !(!elem.hierarchy || !elem.hierarchy.length) && !parent && (parent = elem.hierarchy[0].layerInterface), time = this.comp.renderedFrame / this.comp.globalData.frameRate, _needsRandom && seedRandom(randSeed + time), needsVelocity && (velocity = velocityAtTime(time)), expression_function(), this.frameExpressionId = elem.globalData.frameId, scoped_bm_rt = scoped_bm_rt.propType === propTypes.SHAPE ? scoped_bm_rt.v : scoped_bm_rt);
        }
        return executeExpression.__preventDeadCodeRemoval = [$bm_transform, anchorPoint, time, velocity, inPoint, outPoint, width, height, name, loop_in, loop_out, smooth, toComp, fromCompToSurface, toWorld, fromWorld, mask, position, rotation, scale, thisComp, numKeys, active, wiggle, loopInDuration, loopOutDuration, comp, lookAt, easeOut, easeIn, ease, nearestKey, key, text, textIndex, textTotal, selectorValue, framesToTime, timeToFrames, sourceRectAtTime, substring, substr, posterizeTime, index, globalData], executeExpression;
      }
      return ob.initiateExpression = initiateExpression, ob.__preventDeadCodeRemoval = [window, document, XMLHttpRequest, fetch, frames, $bm_neg, add, $bm_sum, $bm_sub, $bm_mul, $bm_div, $bm_mod, clamp, radians_to_degrees, degreesToRadians, degrees_to_radians, normalize, rgbToHsl, hslToRgb, linear, random, createPath, _lottieGlobal], ob.resetFrame = resetFrame, ob;
    }(), Expressions = function() {
      var t = {};
      return t.initExpressions = function(e) {
        var i = 0, r = [];
        e.renderer.compInterface = CompExpressionInterface(e.renderer), e.renderer.globalData.projectInterface.registerComposition(e.renderer), e.renderer.globalData.pushExpression = function() {
          i += 1;
        }, e.renderer.globalData.popExpression = function() {
          (i -= 1) === 0 && function() {
            var a, n = r.length;
            for (a = 0; a < n; a += 1) r[a].release();
            r.length = 0;
          }();
        }, e.renderer.globalData.registerExpressionProperty = function(a) {
          r.indexOf(a) === -1 && r.push(a);
        };
      }, t.resetFrame = ExpressionManager.resetFrame, t;
    }(), MaskManagerInterface = function() {
      function t(e, i) {
        this._mask = e, this._data = i;
      }
      return Object.defineProperty(t.prototype, "maskPath", { get: function() {
        return this._mask.prop.k && this._mask.prop.getValue(), this._mask.prop;
      } }), Object.defineProperty(t.prototype, "maskOpacity", { get: function() {
        return this._mask.op.k && this._mask.op.getValue(), 100 * this._mask.op.v;
      } }), function(e) {
        var i, r = createSizedArray(e.viewData.length), a = e.viewData.length;
        for (i = 0; i < a; i += 1) r[i] = new t(e.viewData[i], e.masksProperties[i]);
        return function(n) {
          for (i = 0; i < a; ) {
            if (e.masksProperties[i].nm === n) return r[i];
            i += 1;
          }
          return null;
        };
      };
    }(), ExpressionPropertyInterface = /* @__PURE__ */ function() {
      var t = { pv: 0, v: 0, mult: 1 }, e = { pv: [0, 0, 0], v: [0, 0, 0], mult: 1 };
      function i(a, n, l) {
        Object.defineProperty(a, "velocity", { get: function() {
          return n.getVelocityAtTime(n.comp.currentFrame);
        } }), a.numKeys = n.keyframes ? n.keyframes.length : 0, a.key = function(s) {
          if (!a.numKeys) return 0;
          var d = "";
          d = "s" in n.keyframes[s - 1] ? n.keyframes[s - 1].s : "e" in n.keyframes[s - 2] ? n.keyframes[s - 2].e : n.keyframes[s - 2].s;
          var h = l === "unidimensional" ? new Number(d) : Object.assign({}, d);
          return h.time = n.keyframes[s - 1].t / n.elem.comp.globalData.frameRate, h.value = l === "unidimensional" ? d[0] : d, h;
        }, a.valueAtTime = n.getValueAtTime, a.speedAtTime = n.getSpeedAtTime, a.velocityAtTime = n.getVelocityAtTime, a.propertyGroup = n.propertyGroup;
      }
      function r() {
        return t;
      }
      return function(a) {
        return a ? a.propType === "unidimensional" ? function(n) {
          n && "pv" in n || (n = t);
          var l = 1 / n.mult, s = n.pv * l, d = new Number(s);
          return d.value = s, i(d, n, "unidimensional"), function() {
            return n.k && n.getValue(), s = n.v * l, d.value !== s && ((d = new Number(s)).value = s, i(d, n, "unidimensional")), d;
          };
        }(a) : function(n) {
          n && "pv" in n || (n = e);
          var l = 1 / n.mult, s = n.data && n.data.l || n.pv.length, d = createTypedArray("float32", s), h = createTypedArray("float32", s);
          return d.value = h, i(d, n, "multidimensional"), function() {
            n.k && n.getValue();
            for (var o = 0; o < s; o += 1) h[o] = n.v[o] * l, d[o] = h[o];
            return d;
          };
        }(a) : r;
      };
    }(), TransformExpressionInterface = function(t) {
      function e(l) {
        switch (l) {
          case "scale":
          case "Scale":
          case "ADBE Scale":
          case 6:
            return e.scale;
          case "rotation":
          case "Rotation":
          case "ADBE Rotation":
          case "ADBE Rotate Z":
          case 10:
            return e.rotation;
          case "ADBE Rotate X":
            return e.xRotation;
          case "ADBE Rotate Y":
            return e.yRotation;
          case "position":
          case "Position":
          case "ADBE Position":
          case 2:
            return e.position;
          case "ADBE Position_0":
            return e.xPosition;
          case "ADBE Position_1":
            return e.yPosition;
          case "ADBE Position_2":
            return e.zPosition;
          case "anchorPoint":
          case "AnchorPoint":
          case "Anchor Point":
          case "ADBE AnchorPoint":
          case 1:
            return e.anchorPoint;
          case "opacity":
          case "Opacity":
          case 11:
            return e.opacity;
          default:
            return null;
        }
      }
      var i, r, a, n;
      return Object.defineProperty(e, "rotation", { get: ExpressionPropertyInterface(t.r || t.rz) }), Object.defineProperty(e, "zRotation", { get: ExpressionPropertyInterface(t.rz || t.r) }), Object.defineProperty(e, "xRotation", { get: ExpressionPropertyInterface(t.rx) }), Object.defineProperty(e, "yRotation", { get: ExpressionPropertyInterface(t.ry) }), Object.defineProperty(e, "scale", { get: ExpressionPropertyInterface(t.s) }), t.p ? n = ExpressionPropertyInterface(t.p) : (i = ExpressionPropertyInterface(t.px), r = ExpressionPropertyInterface(t.py), t.pz && (a = ExpressionPropertyInterface(t.pz))), Object.defineProperty(e, "position", { get: function() {
        return t.p ? n() : [i(), r(), a ? a() : 0];
      } }), Object.defineProperty(e, "xPosition", { get: ExpressionPropertyInterface(t.px) }), Object.defineProperty(e, "yPosition", { get: ExpressionPropertyInterface(t.py) }), Object.defineProperty(e, "zPosition", { get: ExpressionPropertyInterface(t.pz) }), Object.defineProperty(e, "anchorPoint", { get: ExpressionPropertyInterface(t.a) }), Object.defineProperty(e, "opacity", { get: ExpressionPropertyInterface(t.o) }), Object.defineProperty(e, "skew", { get: ExpressionPropertyInterface(t.sk) }), Object.defineProperty(e, "skewAxis", { get: ExpressionPropertyInterface(t.sa) }), Object.defineProperty(e, "orientation", { get: ExpressionPropertyInterface(t.or) }), e;
    }, LayerExpressionInterface = /* @__PURE__ */ function() {
      function t(h) {
        var o = new Matrix();
        return h !== void 0 ? this._elem.finalTransform.mProp.getValueAtTime(h).clone(o) : this._elem.finalTransform.mProp.applyToMatrix(o), o;
      }
      function e(h, o) {
        var u = this.getMatrix(o);
        return u.props[12] = 0, u.props[13] = 0, u.props[14] = 0, this.applyPoint(u, h);
      }
      function i(h, o) {
        var u = this.getMatrix(o);
        return this.applyPoint(u, h);
      }
      function r(h, o) {
        var u = this.getMatrix(o);
        return u.props[12] = 0, u.props[13] = 0, u.props[14] = 0, this.invertPoint(u, h);
      }
      function a(h, o) {
        var u = this.getMatrix(o);
        return this.invertPoint(u, h);
      }
      function n(h, o) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var u, m = this._elem.hierarchy.length;
          for (u = 0; u < m; u += 1) this._elem.hierarchy[u].finalTransform.mProp.applyToMatrix(h);
        }
        return h.applyToPointArray(o[0], o[1], o[2] || 0);
      }
      function l(h, o) {
        if (this._elem.hierarchy && this._elem.hierarchy.length) {
          var u, m = this._elem.hierarchy.length;
          for (u = 0; u < m; u += 1) this._elem.hierarchy[u].finalTransform.mProp.applyToMatrix(h);
        }
        return h.inversePoint(o);
      }
      function s(h) {
        var o = new Matrix();
        if (o.reset(), this._elem.finalTransform.mProp.applyToMatrix(o), this._elem.hierarchy && this._elem.hierarchy.length) {
          var u, m = this._elem.hierarchy.length;
          for (u = 0; u < m; u += 1) this._elem.hierarchy[u].finalTransform.mProp.applyToMatrix(o);
          return o.inversePoint(h);
        }
        return o.inversePoint(h);
      }
      function d() {
        return [1, 1, 1, 1];
      }
      return function(h) {
        var o;
        function u(f) {
          switch (f) {
            case "ADBE Root Vectors Group":
            case "Contents":
            case 2:
              return u.shapeInterface;
            case 1:
            case 6:
            case "Transform":
            case "transform":
            case "ADBE Transform Group":
              return o;
            case 4:
            case "ADBE Effect Parade":
            case "effects":
            case "Effects":
              return u.effect;
            case "ADBE Text Properties":
              return u.textInterface;
            default:
              return null;
          }
        }
        u.getMatrix = t, u.invertPoint = l, u.applyPoint = n, u.toWorld = i, u.toWorldVec = e, u.fromWorld = a, u.fromWorldVec = r, u.toComp = i, u.fromComp = s, u.sampleImage = d, u.sourceRectAtTime = h.sourceRectAtTime.bind(h), u._elem = h;
        var m = getDescriptor(o = TransformExpressionInterface(h.finalTransform.mProp), "anchorPoint");
        return Object.defineProperties(u, { hasParent: { get: function() {
          return h.hierarchy.length;
        } }, parent: { get: function() {
          return h.hierarchy[0].layerInterface;
        } }, rotation: getDescriptor(o, "rotation"), scale: getDescriptor(o, "scale"), position: getDescriptor(o, "position"), opacity: getDescriptor(o, "opacity"), anchorPoint: m, anchor_point: m, transform: { get: function() {
          return o;
        } }, active: { get: function() {
          return h.isInRange;
        } } }), u.startTime = h.data.st, u.index = h.data.ind, u.source = h.data.refId, u.height = h.data.ty === 0 ? h.data.h : 100, u.width = h.data.ty === 0 ? h.data.w : 100, u.inPoint = h.data.ip / h.comp.globalData.frameRate, u.outPoint = h.data.op / h.comp.globalData.frameRate, u._name = h.data.nm, u.registerMaskInterface = function(f) {
          u.mask = new MaskManagerInterface(f, h);
        }, u.registerEffectsInterface = function(f) {
          u.effect = f;
        }, u;
      };
    }(), propertyGroupFactory = function(t, e) {
      return function(i) {
        return (i = i === void 0 ? 1 : i) <= 0 ? t : e(i - 1);
      };
    }, PropertyInterface = function(t, e) {
      var i = { _name: t };
      return function(r) {
        return (r = r === void 0 ? 1 : r) <= 0 ? i : e(r - 1);
      };
    }, EffectsExpressionInterface = /* @__PURE__ */ function() {
      function t(i, r, a, n) {
        function l(u) {
          for (var m = i.ef, f = 0, c = m.length; f < c; ) {
            if (u === m[f].nm || u === m[f].mn || u === m[f].ix) return m[f].ty === 5 ? h[f] : h[f]();
            f += 1;
          }
          throw new Error();
        }
        var s, d = propertyGroupFactory(l, a), h = [], o = i.ef.length;
        for (s = 0; s < o; s += 1) i.ef[s].ty === 5 ? h.push(t(i.ef[s], r.effectElements[s], r.effectElements[s].propertyGroup, n)) : h.push(e(r.effectElements[s], i.ef[s].ty, n, d));
        return i.mn === "ADBE Color Control" && Object.defineProperty(l, "color", { get: function() {
          return h[0]();
        } }), Object.defineProperties(l, { numProperties: { get: function() {
          return i.np;
        } }, _name: { value: i.nm }, propertyGroup: { value: d } }), l.enabled = i.en !== 0, l.active = l.enabled, l;
      }
      function e(i, r, a, n) {
        var l = ExpressionPropertyInterface(i.p);
        return i.p.setGroupProperty && i.p.setGroupProperty(PropertyInterface("", n)), function() {
          return r === 10 ? a.comp.compInterface(i.p.v) : l();
        };
      }
      return { createEffectsInterface: function(i, r) {
        if (i.effectsManager) {
          var a, n = [], l = i.data.ef, s = i.effectsManager.effectElements.length;
          for (a = 0; a < s; a += 1) n.push(t(l[a], i.effectsManager.effectElements[a], r, i));
          var d = i.data.ef || [], h = function(o) {
            for (a = 0, s = d.length; a < s; ) {
              if (o === d[a].nm || o === d[a].mn || o === d[a].ix) return n[a];
              a += 1;
            }
            return null;
          };
          return Object.defineProperty(h, "numProperties", { get: function() {
            return d.length;
          } }), h;
        }
        return null;
      } };
    }(), ShapePathInterface = function(t, e, i) {
      var r = e.sh;
      function a(l) {
        return l === "Shape" || l === "shape" || l === "Path" || l === "path" || l === "ADBE Vector Shape" || l === 2 ? a.path : null;
      }
      var n = propertyGroupFactory(a, i);
      return r.setGroupProperty(PropertyInterface("Path", n)), Object.defineProperties(a, { path: { get: function() {
        return r.k && r.getValue(), r;
      } }, shape: { get: function() {
        return r.k && r.getValue(), r;
      } }, _name: { value: t.nm }, ix: { value: t.ix }, propertyIndex: { value: t.ix }, mn: { value: t.mn }, propertyGroup: { value: i } }), a;
    }, ShapeExpressionInterface = /* @__PURE__ */ function() {
      function t(f, c, g) {
        var p, y = [], v = f ? f.length : 0;
        for (p = 0; p < v; p += 1) f[p].ty === "gr" ? y.push(e(f[p], c[p], g)) : f[p].ty === "fl" ? y.push(i(f[p], c[p], g)) : f[p].ty === "st" ? y.push(n(f[p], c[p], g)) : f[p].ty === "tm" ? y.push(l(f[p], c[p], g)) : f[p].ty === "tr" || (f[p].ty === "el" ? y.push(d(f[p], c[p], g)) : f[p].ty === "sr" ? y.push(h(f[p], c[p], g)) : f[p].ty === "sh" ? y.push(ShapePathInterface(f[p], c[p], g)) : f[p].ty === "rc" ? y.push(o(f[p], c[p], g)) : f[p].ty === "rd" ? y.push(u(f[p], c[p], g)) : f[p].ty === "rp" ? y.push(m(f[p], c[p], g)) : f[p].ty === "gf" ? y.push(r(f[p], c[p], g)) : y.push(a(f[p], c[p])));
        return y;
      }
      function e(f, c, g) {
        var p = function(_) {
          switch (_) {
            case "ADBE Vectors Group":
            case "Contents":
            case 2:
              return p.content;
            default:
              return p.transform;
          }
        };
        p.propertyGroup = propertyGroupFactory(p, g);
        var y = function(_, b, T) {
          var k, x = function(w) {
            for (var S = 0, P = k.length; S < P; ) {
              if (k[S]._name === w || k[S].mn === w || k[S].propertyIndex === w || k[S].ix === w || k[S].ind === w) return k[S];
              S += 1;
            }
            return typeof w == "number" ? k[w - 1] : null;
          };
          x.propertyGroup = propertyGroupFactory(x, T), k = t(_.it, b.it, x.propertyGroup), x.numProperties = k.length;
          var A = s(_.it[_.it.length - 1], b.it[b.it.length - 1], x.propertyGroup);
          return x.transform = A, x.propertyIndex = _.cix, x._name = _.nm, x;
        }(f, c, p.propertyGroup), v = s(f.it[f.it.length - 1], c.it[c.it.length - 1], p.propertyGroup);
        return p.content = y, p.transform = v, Object.defineProperty(p, "_name", { get: function() {
          return f.nm;
        } }), p.numProperties = f.np, p.propertyIndex = f.ix, p.nm = f.nm, p.mn = f.mn, p;
      }
      function i(f, c, g) {
        function p(y) {
          return y === "Color" || y === "color" ? p.color : y === "Opacity" || y === "opacity" ? p.opacity : null;
        }
        return Object.defineProperties(p, { color: { get: ExpressionPropertyInterface(c.c) }, opacity: { get: ExpressionPropertyInterface(c.o) }, _name: { value: f.nm }, mn: { value: f.mn } }), c.c.setGroupProperty(PropertyInterface("Color", g)), c.o.setGroupProperty(PropertyInterface("Opacity", g)), p;
      }
      function r(f, c, g) {
        function p(y) {
          return y === "Start Point" || y === "start point" ? p.startPoint : y === "End Point" || y === "end point" ? p.endPoint : y === "Opacity" || y === "opacity" ? p.opacity : null;
        }
        return Object.defineProperties(p, { startPoint: { get: ExpressionPropertyInterface(c.s) }, endPoint: { get: ExpressionPropertyInterface(c.e) }, opacity: { get: ExpressionPropertyInterface(c.o) }, type: { get: function() {
          return "a";
        } }, _name: { value: f.nm }, mn: { value: f.mn } }), c.s.setGroupProperty(PropertyInterface("Start Point", g)), c.e.setGroupProperty(PropertyInterface("End Point", g)), c.o.setGroupProperty(PropertyInterface("Opacity", g)), p;
      }
      function a() {
        return function() {
          return null;
        };
      }
      function n(f, c, g) {
        var p, y = propertyGroupFactory(k, g), v = propertyGroupFactory(T, y);
        function _(x) {
          Object.defineProperty(T, f.d[x].nm, { get: ExpressionPropertyInterface(c.d.dataProps[x].p) });
        }
        var b = f.d ? f.d.length : 0, T = {};
        for (p = 0; p < b; p += 1) _(p), c.d.dataProps[p].p.setGroupProperty(v);
        function k(x) {
          return x === "Color" || x === "color" ? k.color : x === "Opacity" || x === "opacity" ? k.opacity : x === "Stroke Width" || x === "stroke width" ? k.strokeWidth : null;
        }
        return Object.defineProperties(k, { color: { get: ExpressionPropertyInterface(c.c) }, opacity: { get: ExpressionPropertyInterface(c.o) }, strokeWidth: { get: ExpressionPropertyInterface(c.w) }, dash: { get: function() {
          return T;
        } }, _name: { value: f.nm }, mn: { value: f.mn } }), c.c.setGroupProperty(PropertyInterface("Color", y)), c.o.setGroupProperty(PropertyInterface("Opacity", y)), c.w.setGroupProperty(PropertyInterface("Stroke Width", y)), k;
      }
      function l(f, c, g) {
        function p(v) {
          return v === f.e.ix || v === "End" || v === "end" ? p.end : v === f.s.ix ? p.start : v === f.o.ix ? p.offset : null;
        }
        var y = propertyGroupFactory(p, g);
        return p.propertyIndex = f.ix, c.s.setGroupProperty(PropertyInterface("Start", y)), c.e.setGroupProperty(PropertyInterface("End", y)), c.o.setGroupProperty(PropertyInterface("Offset", y)), p.propertyIndex = f.ix, p.propertyGroup = g, Object.defineProperties(p, { start: { get: ExpressionPropertyInterface(c.s) }, end: { get: ExpressionPropertyInterface(c.e) }, offset: { get: ExpressionPropertyInterface(c.o) }, _name: { value: f.nm } }), p.mn = f.mn, p;
      }
      function s(f, c, g) {
        function p(v) {
          return f.a.ix === v || v === "Anchor Point" ? p.anchorPoint : f.o.ix === v || v === "Opacity" ? p.opacity : f.p.ix === v || v === "Position" ? p.position : f.r.ix === v || v === "Rotation" || v === "ADBE Vector Rotation" ? p.rotation : f.s.ix === v || v === "Scale" ? p.scale : f.sk && f.sk.ix === v || v === "Skew" ? p.skew : f.sa && f.sa.ix === v || v === "Skew Axis" ? p.skewAxis : null;
        }
        var y = propertyGroupFactory(p, g);
        return c.transform.mProps.o.setGroupProperty(PropertyInterface("Opacity", y)), c.transform.mProps.p.setGroupProperty(PropertyInterface("Position", y)), c.transform.mProps.a.setGroupProperty(PropertyInterface("Anchor Point", y)), c.transform.mProps.s.setGroupProperty(PropertyInterface("Scale", y)), c.transform.mProps.r.setGroupProperty(PropertyInterface("Rotation", y)), c.transform.mProps.sk && (c.transform.mProps.sk.setGroupProperty(PropertyInterface("Skew", y)), c.transform.mProps.sa.setGroupProperty(PropertyInterface("Skew Angle", y))), c.transform.op.setGroupProperty(PropertyInterface("Opacity", y)), Object.defineProperties(p, { opacity: { get: ExpressionPropertyInterface(c.transform.mProps.o) }, position: { get: ExpressionPropertyInterface(c.transform.mProps.p) }, anchorPoint: { get: ExpressionPropertyInterface(c.transform.mProps.a) }, scale: { get: ExpressionPropertyInterface(c.transform.mProps.s) }, rotation: { get: ExpressionPropertyInterface(c.transform.mProps.r) }, skew: { get: ExpressionPropertyInterface(c.transform.mProps.sk) }, skewAxis: { get: ExpressionPropertyInterface(c.transform.mProps.sa) }, _name: { value: f.nm } }), p.ty = "tr", p.mn = f.mn, p.propertyGroup = g, p;
      }
      function d(f, c, g) {
        function p(_) {
          return f.p.ix === _ ? p.position : f.s.ix === _ ? p.size : null;
        }
        var y = propertyGroupFactory(p, g);
        p.propertyIndex = f.ix;
        var v = c.sh.ty === "tm" ? c.sh.prop : c.sh;
        return v.s.setGroupProperty(PropertyInterface("Size", y)), v.p.setGroupProperty(PropertyInterface("Position", y)), Object.defineProperties(p, { size: { get: ExpressionPropertyInterface(v.s) }, position: { get: ExpressionPropertyInterface(v.p) }, _name: { value: f.nm } }), p.mn = f.mn, p;
      }
      function h(f, c, g) {
        function p(_) {
          return f.p.ix === _ ? p.position : f.r.ix === _ ? p.rotation : f.pt.ix === _ ? p.points : f.or.ix === _ || _ === "ADBE Vector Star Outer Radius" ? p.outerRadius : f.os.ix === _ ? p.outerRoundness : !f.ir || f.ir.ix !== _ && _ !== "ADBE Vector Star Inner Radius" ? f.is && f.is.ix === _ ? p.innerRoundness : null : p.innerRadius;
        }
        var y = propertyGroupFactory(p, g), v = c.sh.ty === "tm" ? c.sh.prop : c.sh;
        return p.propertyIndex = f.ix, v.or.setGroupProperty(PropertyInterface("Outer Radius", y)), v.os.setGroupProperty(PropertyInterface("Outer Roundness", y)), v.pt.setGroupProperty(PropertyInterface("Points", y)), v.p.setGroupProperty(PropertyInterface("Position", y)), v.r.setGroupProperty(PropertyInterface("Rotation", y)), f.ir && (v.ir.setGroupProperty(PropertyInterface("Inner Radius", y)), v.is.setGroupProperty(PropertyInterface("Inner Roundness", y))), Object.defineProperties(p, { position: { get: ExpressionPropertyInterface(v.p) }, rotation: { get: ExpressionPropertyInterface(v.r) }, points: { get: ExpressionPropertyInterface(v.pt) }, outerRadius: { get: ExpressionPropertyInterface(v.or) }, outerRoundness: { get: ExpressionPropertyInterface(v.os) }, innerRadius: { get: ExpressionPropertyInterface(v.ir) }, innerRoundness: { get: ExpressionPropertyInterface(v.is) }, _name: { value: f.nm } }), p.mn = f.mn, p;
      }
      function o(f, c, g) {
        function p(_) {
          return f.p.ix === _ ? p.position : f.r.ix === _ ? p.roundness : f.s.ix === _ || _ === "Size" || _ === "ADBE Vector Rect Size" ? p.size : null;
        }
        var y = propertyGroupFactory(p, g), v = c.sh.ty === "tm" ? c.sh.prop : c.sh;
        return p.propertyIndex = f.ix, v.p.setGroupProperty(PropertyInterface("Position", y)), v.s.setGroupProperty(PropertyInterface("Size", y)), v.r.setGroupProperty(PropertyInterface("Rotation", y)), Object.defineProperties(p, { position: { get: ExpressionPropertyInterface(v.p) }, roundness: { get: ExpressionPropertyInterface(v.r) }, size: { get: ExpressionPropertyInterface(v.s) }, _name: { value: f.nm } }), p.mn = f.mn, p;
      }
      function u(f, c, g) {
        function p(_) {
          return f.r.ix === _ || _ === "Round Corners 1" ? p.radius : null;
        }
        var y = propertyGroupFactory(p, g), v = c;
        return p.propertyIndex = f.ix, v.rd.setGroupProperty(PropertyInterface("Radius", y)), Object.defineProperties(p, { radius: { get: ExpressionPropertyInterface(v.rd) }, _name: { value: f.nm } }), p.mn = f.mn, p;
      }
      function m(f, c, g) {
        function p(_) {
          return f.c.ix === _ || _ === "Copies" ? p.copies : f.o.ix === _ || _ === "Offset" ? p.offset : null;
        }
        var y = propertyGroupFactory(p, g), v = c;
        return p.propertyIndex = f.ix, v.c.setGroupProperty(PropertyInterface("Copies", y)), v.o.setGroupProperty(PropertyInterface("Offset", y)), Object.defineProperties(p, { copies: { get: ExpressionPropertyInterface(v.c) }, offset: { get: ExpressionPropertyInterface(v.o) }, _name: { value: f.nm } }), p.mn = f.mn, p;
      }
      return function(f, c, g) {
        var p;
        function y(v) {
          if (typeof v == "number") return (v = v === void 0 ? 1 : v) === 0 ? g : p[v - 1];
          for (var _ = 0, b = p.length; _ < b; ) {
            if (p[_]._name === v) return p[_];
            _ += 1;
          }
          return null;
        }
        return y.propertyGroup = propertyGroupFactory(y, function() {
          return g;
        }), p = t(f, c, y.propertyGroup), y.numProperties = p.length, y._name = "Contents", y;
      };
    }(), TextExpressionInterface = function(t) {
      var e;
      function i(r) {
        switch (r) {
          case "ADBE Text Document":
            return i.sourceText;
          default:
            return null;
        }
      }
      return Object.defineProperty(i, "sourceText", { get: function() {
        t.textProperty.getValue();
        var r = t.textProperty.currentData.t;
        return e && r === e.value || ((e = new String(r)).value = r || new String(r), Object.defineProperty(e, "style", { get: function() {
          return { fillColor: t.textProperty.currentData.fc };
        } })), e;
      } }), i;
    };
    function _typeof(t) {
      return (_typeof = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
        return typeof e;
      } : function(e) {
        return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e;
      })(t);
    }
    var FootageInterface = (dataInterfaceFactory = function(t) {
      function e(i) {
        return i === "Outline" ? e.outlineInterface() : null;
      }
      return e._name = "Outline", e.outlineInterface = function(i) {
        var r = "", a = i.getFootageData();
        function n(l) {
          if (a[l]) return r = l, _typeof(a = a[l]) === "object" ? n : a;
          var s = l.indexOf(r);
          if (s !== -1) {
            var d = parseInt(l.substr(s + r.length), 10);
            return _typeof(a = a[d]) === "object" ? n : a;
          }
          return "";
        }
        return function() {
          return r = "", a = i.getFootageData(), n;
        };
      }(t), e;
    }, function(t) {
      function e(i) {
        return i === "Data" ? e.dataInterface : null;
      }
      return e._name = "Data", e.dataInterface = dataInterfaceFactory(t), e;
    }), dataInterfaceFactory, interfaces = { layer: LayerExpressionInterface, effects: EffectsExpressionInterface, comp: CompExpressionInterface, shape: ShapeExpressionInterface, text: TextExpressionInterface, footage: FootageInterface };
    function getInterface(t) {
      return interfaces[t] || null;
    }
    var expressionHelpers = { searchExpressions: function(t, e, i) {
      e.x && (i.k = !0, i.x = !0, i.initiateExpression = ExpressionManager.initiateExpression, i.effectsSequence.push(i.initiateExpression(t, e, i).bind(i)));
    }, getSpeedAtTime: function(t) {
      var e = this.getValueAtTime(t), i = this.getValueAtTime(t + -0.01), r = 0;
      if (e.length) {
        var a;
        for (a = 0; a < e.length; a += 1) r += Math.pow(i[a] - e[a], 2);
        r = 100 * Math.sqrt(r);
      } else r = 0;
      return r;
    }, getVelocityAtTime: function(t) {
      if (this.vel !== void 0) return this.vel;
      var e, i, r = this.getValueAtTime(t), a = this.getValueAtTime(t + -1e-3);
      if (r.length) for (e = createTypedArray("float32", r.length), i = 0; i < r.length; i += 1) e[i] = (a[i] - r[i]) / -1e-3;
      else e = (a - r) / -1e-3;
      return e;
    }, getValueAtTime: function(t) {
      return t *= this.elem.globalData.frameRate, (t -= this.offsetTime) !== this._cachingAtTime.lastFrame && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastFrame < t ? this._cachingAtTime.lastIndex : 0, this._cachingAtTime.value = this.interpolateValue(t, this._cachingAtTime), this._cachingAtTime.lastFrame = t), this._cachingAtTime.value;
    }, getStaticValueAtTime: function() {
      return this.pv;
    }, setGroupProperty: function(t) {
      this.propertyGroup = t;
    } };
    function addPropertyDecorator() {
      function t(u, m, f) {
        if (!this.k || !this.keyframes) return this.pv;
        u = u ? u.toLowerCase() : "";
        var c, g, p, y, v, _ = this.comp.renderedFrame, b = this.keyframes, T = b[b.length - 1].t;
        if (_ <= T) return this.pv;
        if (f ? g = T - (c = m ? Math.abs(T - this.elem.comp.globalData.frameRate * m) : Math.max(0, T - this.elem.data.ip)) : ((!m || m > b.length - 1) && (m = b.length - 1), c = T - (g = b[b.length - 1 - m].t)), u === "pingpong") {
          if (Math.floor((_ - g) / c) % 2 != 0) return this.getValueAtTime((c - (_ - g) % c + g) / this.comp.globalData.frameRate, 0);
        } else {
          if (u === "offset") {
            var k = this.getValueAtTime(g / this.comp.globalData.frameRate, 0), x = this.getValueAtTime(T / this.comp.globalData.frameRate, 0), A = this.getValueAtTime(((_ - g) % c + g) / this.comp.globalData.frameRate, 0), w = Math.floor((_ - g) / c);
            if (this.pv.length) {
              for (y = (v = new Array(k.length)).length, p = 0; p < y; p += 1) v[p] = (x[p] - k[p]) * w + A[p];
              return v;
            }
            return (x - k) * w + A;
          }
          if (u === "continue") {
            var S = this.getValueAtTime(T / this.comp.globalData.frameRate, 0), P = this.getValueAtTime((T - 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (y = (v = new Array(S.length)).length, p = 0; p < y; p += 1) v[p] = S[p] + (S[p] - P[p]) * ((_ - T) / this.comp.globalData.frameRate) / 5e-4;
              return v;
            }
            return S + (_ - T) / 1e-3 * (S - P);
          }
        }
        return this.getValueAtTime(((_ - g) % c + g) / this.comp.globalData.frameRate, 0);
      }
      function e(u, m, f) {
        if (!this.k) return this.pv;
        u = u ? u.toLowerCase() : "";
        var c, g, p, y, v, _ = this.comp.renderedFrame, b = this.keyframes, T = b[0].t;
        if (_ >= T) return this.pv;
        if (f ? g = T + (c = m ? Math.abs(this.elem.comp.globalData.frameRate * m) : Math.max(0, this.elem.data.op - T)) : ((!m || m > b.length - 1) && (m = b.length - 1), c = (g = b[m].t) - T), u === "pingpong") {
          if (Math.floor((T - _) / c) % 2 == 0) return this.getValueAtTime(((T - _) % c + T) / this.comp.globalData.frameRate, 0);
        } else {
          if (u === "offset") {
            var k = this.getValueAtTime(T / this.comp.globalData.frameRate, 0), x = this.getValueAtTime(g / this.comp.globalData.frameRate, 0), A = this.getValueAtTime((c - (T - _) % c + T) / this.comp.globalData.frameRate, 0), w = Math.floor((T - _) / c) + 1;
            if (this.pv.length) {
              for (y = (v = new Array(k.length)).length, p = 0; p < y; p += 1) v[p] = A[p] - (x[p] - k[p]) * w;
              return v;
            }
            return A - (x - k) * w;
          }
          if (u === "continue") {
            var S = this.getValueAtTime(T / this.comp.globalData.frameRate, 0), P = this.getValueAtTime((T + 1e-3) / this.comp.globalData.frameRate, 0);
            if (this.pv.length) {
              for (y = (v = new Array(S.length)).length, p = 0; p < y; p += 1) v[p] = S[p] + (S[p] - P[p]) * (T - _) / 1e-3;
              return v;
            }
            return S + (S - P) * (T - _) / 1e-3;
          }
        }
        return this.getValueAtTime((c - ((T - _) % c + T)) / this.comp.globalData.frameRate, 0);
      }
      function i(u, m) {
        if (!this.k) return this.pv;
        if (u = 0.5 * (u || 0.4), (m = Math.floor(m || 5)) <= 1) return this.pv;
        var f, c, g = this.comp.renderedFrame / this.comp.globalData.frameRate, p = g - u, y = m > 1 ? (g + u - p) / (m - 1) : 1, v = 0, _ = 0;
        for (f = this.pv.length ? createTypedArray("float32", this.pv.length) : 0; v < m; ) {
          if (c = this.getValueAtTime(p + v * y), this.pv.length) for (_ = 0; _ < this.pv.length; _ += 1) f[_] += c[_];
          else f += c;
          v += 1;
        }
        if (this.pv.length) for (_ = 0; _ < this.pv.length; _ += 1) f[_] /= m;
        else f /= m;
        return f;
      }
      function r(u) {
        this._transformCachingAtTime || (this._transformCachingAtTime = { v: new Matrix() });
        var m = this._transformCachingAtTime.v;
        if (m.cloneFromProps(this.pre.props), this.appliedTransformations < 1) {
          var f = this.a.getValueAtTime(u);
          m.translate(-f[0] * this.a.mult, -f[1] * this.a.mult, f[2] * this.a.mult);
        }
        if (this.appliedTransformations < 2) {
          var c = this.s.getValueAtTime(u);
          m.scale(c[0] * this.s.mult, c[1] * this.s.mult, c[2] * this.s.mult);
        }
        if (this.sk && this.appliedTransformations < 3) {
          var g = this.sk.getValueAtTime(u), p = this.sa.getValueAtTime(u);
          m.skewFromAxis(-g * this.sk.mult, p * this.sa.mult);
        }
        if (this.r && this.appliedTransformations < 4) {
          var y = this.r.getValueAtTime(u);
          m.rotate(-y * this.r.mult);
        } else if (!this.r && this.appliedTransformations < 4) {
          var v = this.rz.getValueAtTime(u), _ = this.ry.getValueAtTime(u), b = this.rx.getValueAtTime(u), T = this.or.getValueAtTime(u);
          m.rotateZ(-v * this.rz.mult).rotateY(_ * this.ry.mult).rotateX(b * this.rx.mult).rotateZ(-T[2] * this.or.mult).rotateY(T[1] * this.or.mult).rotateX(T[0] * this.or.mult);
        }
        if (this.data.p && this.data.p.s) {
          var k = this.px.getValueAtTime(u), x = this.py.getValueAtTime(u);
          if (this.data.p.z) {
            var A = this.pz.getValueAtTime(u);
            m.translate(k * this.px.mult, x * this.py.mult, -A * this.pz.mult);
          } else m.translate(k * this.px.mult, x * this.py.mult, 0);
        } else {
          var w = this.p.getValueAtTime(u);
          m.translate(w[0] * this.p.mult, w[1] * this.p.mult, -w[2] * this.p.mult);
        }
        return m;
      }
      function a() {
        return this.v.clone(new Matrix());
      }
      var n = TransformPropertyFactory.getTransformProperty;
      TransformPropertyFactory.getTransformProperty = function(u, m, f) {
        var c = n(u, m, f);
        return c.dynamicProperties.length ? c.getValueAtTime = r.bind(c) : c.getValueAtTime = a.bind(c), c.setGroupProperty = expressionHelpers.setGroupProperty, c;
      };
      var l = PropertyFactory.getProp;
      PropertyFactory.getProp = function(u, m, f, c, g) {
        var p = l(u, m, f, c, g);
        p.kf ? p.getValueAtTime = expressionHelpers.getValueAtTime.bind(p) : p.getValueAtTime = expressionHelpers.getStaticValueAtTime.bind(p), p.setGroupProperty = expressionHelpers.setGroupProperty, p.loopOut = t, p.loopIn = e, p.smooth = i, p.getVelocityAtTime = expressionHelpers.getVelocityAtTime.bind(p), p.getSpeedAtTime = expressionHelpers.getSpeedAtTime.bind(p), p.numKeys = m.a === 1 ? m.k.length : 0, p.propertyIndex = m.ix;
        var y = 0;
        return f !== 0 && (y = createTypedArray("float32", m.a === 1 ? m.k[0].s.length : m.k.length)), p._cachingAtTime = { lastFrame: initialDefaultFrame, lastIndex: 0, value: y }, expressionHelpers.searchExpressions(u, m, p), p.k && g.addDynamicProperty(p), p;
      };
      var s = ShapePropertyFactory.getConstructorFunction(), d = ShapePropertyFactory.getKeyframedConstructorFunction();
      function h() {
      }
      h.prototype = { vertices: function(u, m) {
        this.k && this.getValue();
        var f, c = this.v;
        m !== void 0 && (c = this.getValueAtTime(m, 0));
        var g = c._length, p = c[u], y = c.v, v = createSizedArray(g);
        for (f = 0; f < g; f += 1) v[f] = u === "i" || u === "o" ? [p[f][0] - y[f][0], p[f][1] - y[f][1]] : [p[f][0], p[f][1]];
        return v;
      }, points: function(u) {
        return this.vertices("v", u);
      }, inTangents: function(u) {
        return this.vertices("i", u);
      }, outTangents: function(u) {
        return this.vertices("o", u);
      }, isClosed: function() {
        return this.v.c;
      }, pointOnPath: function(u, m) {
        var f = this.v;
        m !== void 0 && (f = this.getValueAtTime(m, 0)), this._segmentsLength || (this._segmentsLength = bez.getSegmentsLength(f));
        for (var c, g = this._segmentsLength, p = g.lengths, y = g.totalLength * u, v = 0, _ = p.length, b = 0; v < _; ) {
          if (b + p[v].addedLength > y) {
            var T = v, k = f.c && v === _ - 1 ? 0 : v + 1, x = (y - b) / p[v].addedLength;
            c = bez.getPointInSegment(f.v[T], f.v[k], f.o[T], f.i[k], x, p[v]);
            break;
          }
          b += p[v].addedLength, v += 1;
        }
        return c || (c = f.c ? [f.v[0][0], f.v[0][1]] : [f.v[f._length - 1][0], f.v[f._length - 1][1]]), c;
      }, vectorOnPath: function(u, m, f) {
        u == 1 ? u = this.v.c : u == 0 && (u = 0.999);
        var c = this.pointOnPath(u, m), g = this.pointOnPath(u + 1e-3, m), p = g[0] - c[0], y = g[1] - c[1], v = Math.sqrt(Math.pow(p, 2) + Math.pow(y, 2));
        return v === 0 ? [0, 0] : f === "tangent" ? [p / v, y / v] : [-y / v, p / v];
      }, tangentOnPath: function(u, m) {
        return this.vectorOnPath(u, m, "tangent");
      }, normalOnPath: function(u, m) {
        return this.vectorOnPath(u, m, "normal");
      }, setGroupProperty: expressionHelpers.setGroupProperty, getValueAtTime: expressionHelpers.getStaticValueAtTime }, extendPrototype([h], s), extendPrototype([h], d), d.prototype.getValueAtTime = function(u) {
        return this._cachingAtTime || (this._cachingAtTime = { shapeValue: shapePool.clone(this.pv), lastIndex: 0, lastTime: initialDefaultFrame }), u *= this.elem.globalData.frameRate, (u -= this.offsetTime) !== this._cachingAtTime.lastTime && (this._cachingAtTime.lastIndex = this._cachingAtTime.lastTime < u ? this._caching.lastIndex : 0, this._cachingAtTime.lastTime = u, this.interpolateShape(u, this._cachingAtTime.shapeValue, this._cachingAtTime)), this._cachingAtTime.shapeValue;
      }, d.prototype.initiateExpression = ExpressionManager.initiateExpression;
      var o = ShapePropertyFactory.getShapeProp;
      ShapePropertyFactory.getShapeProp = function(u, m, f, c, g) {
        var p = o(u, m, f, c, g);
        return p.propertyIndex = m.ix, p.lock = !1, f === 3 ? expressionHelpers.searchExpressions(u, m.pt, p) : f === 4 && expressionHelpers.searchExpressions(u, m.ks, p), p.k && u.addDynamicProperty(p), p;
      };
    }
    function initialize$1() {
      addPropertyDecorator();
    }
    function addDecorator() {
      TextProperty.prototype.getExpressionValue = function(t, e) {
        var i = this.calculateExpression(e);
        if (t.t !== i) {
          var r = {};
          return this.copyData(r, t), r.t = i.toString(), r.__complete = !1, r;
        }
        return t;
      }, TextProperty.prototype.searchProperty = function() {
        var t = this.searchKeyframes(), e = this.searchExpressions();
        return this.kf = t || e, this.kf;
      }, TextProperty.prototype.searchExpressions = function() {
        return this.data.d.x ? (this.calculateExpression = ExpressionManager.initiateExpression.bind(this)(this.elem, this.data.d, this), this.addEffect(this.getExpressionValue.bind(this)), !0) : null;
      };
    }
    function initialize() {
      addDecorator();
    }
    function SVGComposableEffect() {
    }
    SVGComposableEffect.prototype = { createMergeNode: function(t, e) {
      var i, r, a = createNS("feMerge");
      for (a.setAttribute("result", t), r = 0; r < e.length; r += 1) (i = createNS("feMergeNode")).setAttribute("in", e[r]), a.appendChild(i), a.appendChild(i);
      return a;
    } };
    var linearFilterValue = "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0";
    function SVGTintFilter(t, e, i, r, a) {
      this.filterManager = e;
      var n = createNS("feColorMatrix");
      n.setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "linearRGB"), n.setAttribute("values", linearFilterValue + " 1 0"), this.linearFilter = n, n.setAttribute("result", r + "_tint_1"), t.appendChild(n), (n = createNS("feColorMatrix")).setAttribute("type", "matrix"), n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), n.setAttribute("result", r + "_tint_2"), t.appendChild(n), this.matrixFilter = n;
      var l = this.createMergeNode(r, [a, r + "_tint_1", r + "_tint_2"]);
      t.appendChild(l);
    }
    function SVGFillFilter(t, e, i, r) {
      this.filterManager = e;
      var a = createNS("feColorMatrix");
      a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "sRGB"), a.setAttribute("values", "1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0"), a.setAttribute("result", r), t.appendChild(a), this.matrixFilter = a;
    }
    function SVGStrokeEffect(t, e, i) {
      this.initialized = !1, this.filterManager = e, this.elem = i, this.paths = [];
    }
    function SVGTritoneFilter(t, e, i, r) {
      this.filterManager = e;
      var a = createNS("feColorMatrix");
      a.setAttribute("type", "matrix"), a.setAttribute("color-interpolation-filters", "linearRGB"), a.setAttribute("values", "0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0"), t.appendChild(a);
      var n = createNS("feComponentTransfer");
      n.setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", r), this.matrixFilter = n;
      var l = createNS("feFuncR");
      l.setAttribute("type", "table"), n.appendChild(l), this.feFuncR = l;
      var s = createNS("feFuncG");
      s.setAttribute("type", "table"), n.appendChild(s), this.feFuncG = s;
      var d = createNS("feFuncB");
      d.setAttribute("type", "table"), n.appendChild(d), this.feFuncB = d, t.appendChild(n);
    }
    function SVGProLevelsFilter(t, e, i, r) {
      this.filterManager = e;
      var a = this.filterManager.effectElements, n = createNS("feComponentTransfer");
      (a[10].p.k || a[10].p.v !== 0 || a[11].p.k || a[11].p.v !== 1 || a[12].p.k || a[12].p.v !== 1 || a[13].p.k || a[13].p.v !== 0 || a[14].p.k || a[14].p.v !== 1) && (this.feFuncR = this.createFeFunc("feFuncR", n)), (a[17].p.k || a[17].p.v !== 0 || a[18].p.k || a[18].p.v !== 1 || a[19].p.k || a[19].p.v !== 1 || a[20].p.k || a[20].p.v !== 0 || a[21].p.k || a[21].p.v !== 1) && (this.feFuncG = this.createFeFunc("feFuncG", n)), (a[24].p.k || a[24].p.v !== 0 || a[25].p.k || a[25].p.v !== 1 || a[26].p.k || a[26].p.v !== 1 || a[27].p.k || a[27].p.v !== 0 || a[28].p.k || a[28].p.v !== 1) && (this.feFuncB = this.createFeFunc("feFuncB", n)), (a[31].p.k || a[31].p.v !== 0 || a[32].p.k || a[32].p.v !== 1 || a[33].p.k || a[33].p.v !== 1 || a[34].p.k || a[34].p.v !== 0 || a[35].p.k || a[35].p.v !== 1) && (this.feFuncA = this.createFeFunc("feFuncA", n)), (this.feFuncR || this.feFuncG || this.feFuncB || this.feFuncA) && (n.setAttribute("color-interpolation-filters", "sRGB"), t.appendChild(n)), (a[3].p.k || a[3].p.v !== 0 || a[4].p.k || a[4].p.v !== 1 || a[5].p.k || a[5].p.v !== 1 || a[6].p.k || a[6].p.v !== 0 || a[7].p.k || a[7].p.v !== 1) && ((n = createNS("feComponentTransfer")).setAttribute("color-interpolation-filters", "sRGB"), n.setAttribute("result", r), t.appendChild(n), this.feFuncRComposed = this.createFeFunc("feFuncR", n), this.feFuncGComposed = this.createFeFunc("feFuncG", n), this.feFuncBComposed = this.createFeFunc("feFuncB", n));
    }
    function SVGDropShadowEffect(t, e, i, r, a) {
      var n = e.container.globalData.renderConfig.filterSize, l = e.data.fs || n;
      t.setAttribute("x", l.x || n.x), t.setAttribute("y", l.y || n.y), t.setAttribute("width", l.width || n.width), t.setAttribute("height", l.height || n.height), this.filterManager = e;
      var s = createNS("feGaussianBlur");
      s.setAttribute("in", "SourceAlpha"), s.setAttribute("result", r + "_drop_shadow_1"), s.setAttribute("stdDeviation", "0"), this.feGaussianBlur = s, t.appendChild(s);
      var d = createNS("feOffset");
      d.setAttribute("dx", "25"), d.setAttribute("dy", "0"), d.setAttribute("in", r + "_drop_shadow_1"), d.setAttribute("result", r + "_drop_shadow_2"), this.feOffset = d, t.appendChild(d);
      var h = createNS("feFlood");
      h.setAttribute("flood-color", "#00ff00"), h.setAttribute("flood-opacity", "1"), h.setAttribute("result", r + "_drop_shadow_3"), this.feFlood = h, t.appendChild(h);
      var o = createNS("feComposite");
      o.setAttribute("in", r + "_drop_shadow_3"), o.setAttribute("in2", r + "_drop_shadow_2"), o.setAttribute("operator", "in"), o.setAttribute("result", r + "_drop_shadow_4"), t.appendChild(o);
      var u = this.createMergeNode(r, [r + "_drop_shadow_4", a]);
      t.appendChild(u);
    }
    extendPrototype([SVGComposableEffect], SVGTintFilter), SVGTintFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v / 100;
        this.linearFilter.setAttribute("values", linearFilterValue + " " + r + " 0"), this.matrixFilter.setAttribute("values", i[0] - e[0] + " 0 0 0 " + e[0] + " " + (i[1] - e[1]) + " 0 0 0 " + e[1] + " " + (i[2] - e[2]) + " 0 0 0 " + e[2] + " 0 0 0 1 0");
      }
    }, SVGFillFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[2].p.v, i = this.filterManager.effectElements[6].p.v;
        this.matrixFilter.setAttribute("values", "0 0 0 0 " + e[0] + " 0 0 0 0 " + e[1] + " 0 0 0 0 " + e[2] + " 0 0 0 " + i + " 0");
      }
    }, SVGStrokeEffect.prototype.initialize = function() {
      var t, e, i, r, a = this.elem.layerElement.children || this.elem.layerElement.childNodes;
      for (this.filterManager.effectElements[1].p.v === 1 ? (r = this.elem.maskManager.masksProperties.length, i = 0) : r = (i = this.filterManager.effectElements[0].p.v - 1) + 1, (e = createNS("g")).setAttribute("fill", "none"), e.setAttribute("stroke-linecap", "round"), e.setAttribute("stroke-dashoffset", 1); i < r; i += 1) t = createNS("path"), e.appendChild(t), this.paths.push({ p: t, m: i });
      if (this.filterManager.effectElements[10].p.v === 3) {
        var n = createNS("mask"), l = createElementID();
        n.setAttribute("id", l), n.setAttribute("mask-type", "alpha"), n.appendChild(e), this.elem.globalData.defs.appendChild(n);
        var s = createNS("g");
        for (s.setAttribute("mask", "url(" + getLocationHref() + "#" + l + ")"); a[0]; ) s.appendChild(a[0]);
        this.elem.layerElement.appendChild(s), this.masker = n, e.setAttribute("stroke", "#fff");
      } else if (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) {
        if (this.filterManager.effectElements[10].p.v === 2) for (a = this.elem.layerElement.children || this.elem.layerElement.childNodes; a.length; ) this.elem.layerElement.removeChild(a[0]);
        this.elem.layerElement.appendChild(e), this.elem.layerElement.removeAttribute("mask"), e.setAttribute("stroke", "#fff");
      }
      this.initialized = !0, this.pathMasker = e;
    }, SVGStrokeEffect.prototype.renderFrame = function(t) {
      var e;
      this.initialized || this.initialize();
      var i, r, a = this.paths.length;
      for (e = 0; e < a; e += 1) if (this.paths[e].m !== -1 && (i = this.elem.maskManager.viewData[this.paths[e].m], r = this.paths[e].p, (t || this.filterManager._mdf || i.prop._mdf) && r.setAttribute("d", i.lastPath), t || this.filterManager.effectElements[9].p._mdf || this.filterManager.effectElements[4].p._mdf || this.filterManager.effectElements[7].p._mdf || this.filterManager.effectElements[8].p._mdf || i.prop._mdf)) {
        var n;
        if (this.filterManager.effectElements[7].p.v !== 0 || this.filterManager.effectElements[8].p.v !== 100) {
          var l = 0.01 * Math.min(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), s = 0.01 * Math.max(this.filterManager.effectElements[7].p.v, this.filterManager.effectElements[8].p.v), d = r.getTotalLength();
          n = "0 0 0 " + d * l + " ";
          var h, o = d * (s - l), u = 1 + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01, m = Math.floor(o / u);
          for (h = 0; h < m; h += 1) n += "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01 + " ";
          n += "0 " + 10 * d + " 0 0";
        } else n = "1 " + 2 * this.filterManager.effectElements[4].p.v * this.filterManager.effectElements[9].p.v * 0.01;
        r.setAttribute("stroke-dasharray", n);
      }
      if ((t || this.filterManager.effectElements[4].p._mdf) && this.pathMasker.setAttribute("stroke-width", 2 * this.filterManager.effectElements[4].p.v), (t || this.filterManager.effectElements[6].p._mdf) && this.pathMasker.setAttribute("opacity", this.filterManager.effectElements[6].p.v), (this.filterManager.effectElements[10].p.v === 1 || this.filterManager.effectElements[10].p.v === 2) && (t || this.filterManager.effectElements[3].p._mdf)) {
        var f = this.filterManager.effectElements[3].p.v;
        this.pathMasker.setAttribute("stroke", "rgb(" + bmFloor(255 * f[0]) + "," + bmFloor(255 * f[1]) + "," + bmFloor(255 * f[2]) + ")");
      }
    }, SVGTritoneFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = this.filterManager.effectElements[2].p.v, a = r[0] + " " + i[0] + " " + e[0], n = r[1] + " " + i[1] + " " + e[1], l = r[2] + " " + i[2] + " " + e[2];
        this.feFuncR.setAttribute("tableValues", a), this.feFuncG.setAttribute("tableValues", n), this.feFuncB.setAttribute("tableValues", l);
      }
    }, SVGProLevelsFilter.prototype.createFeFunc = function(t, e) {
      var i = createNS(t);
      return i.setAttribute("type", "table"), e.appendChild(i), i;
    }, SVGProLevelsFilter.prototype.getTableValue = function(t, e, i, r, a) {
      for (var n, l, s = 0, d = Math.min(t, e), h = Math.max(t, e), o = Array.call(null, { length: 256 }), u = 0, m = a - r, f = e - t; s <= 256; ) l = (n = s / 256) <= d ? f < 0 ? a : r : n >= h ? f < 0 ? r : a : r + m * Math.pow((n - t) / f, 1 / i), o[u] = l, u += 1, s += 256 / 255;
      return o.join(" ");
    }, SVGProLevelsFilter.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e, i = this.filterManager.effectElements;
        this.feFuncRComposed && (t || i[3].p._mdf || i[4].p._mdf || i[5].p._mdf || i[6].p._mdf || i[7].p._mdf) && (e = this.getTableValue(i[3].p.v, i[4].p.v, i[5].p.v, i[6].p.v, i[7].p.v), this.feFuncRComposed.setAttribute("tableValues", e), this.feFuncGComposed.setAttribute("tableValues", e), this.feFuncBComposed.setAttribute("tableValues", e)), this.feFuncR && (t || i[10].p._mdf || i[11].p._mdf || i[12].p._mdf || i[13].p._mdf || i[14].p._mdf) && (e = this.getTableValue(i[10].p.v, i[11].p.v, i[12].p.v, i[13].p.v, i[14].p.v), this.feFuncR.setAttribute("tableValues", e)), this.feFuncG && (t || i[17].p._mdf || i[18].p._mdf || i[19].p._mdf || i[20].p._mdf || i[21].p._mdf) && (e = this.getTableValue(i[17].p.v, i[18].p.v, i[19].p.v, i[20].p.v, i[21].p.v), this.feFuncG.setAttribute("tableValues", e)), this.feFuncB && (t || i[24].p._mdf || i[25].p._mdf || i[26].p._mdf || i[27].p._mdf || i[28].p._mdf) && (e = this.getTableValue(i[24].p.v, i[25].p.v, i[26].p.v, i[27].p.v, i[28].p.v), this.feFuncB.setAttribute("tableValues", e)), this.feFuncA && (t || i[31].p._mdf || i[32].p._mdf || i[33].p._mdf || i[34].p._mdf || i[35].p._mdf) && (e = this.getTableValue(i[31].p.v, i[32].p.v, i[33].p.v, i[34].p.v, i[35].p.v), this.feFuncA.setAttribute("tableValues", e));
      }
    }, extendPrototype([SVGComposableEffect], SVGDropShadowEffect), SVGDropShadowEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        if ((t || this.filterManager.effectElements[4].p._mdf) && this.feGaussianBlur.setAttribute("stdDeviation", this.filterManager.effectElements[4].p.v / 4), t || this.filterManager.effectElements[0].p._mdf) {
          var e = this.filterManager.effectElements[0].p.v;
          this.feFlood.setAttribute("flood-color", rgbToHex(Math.round(255 * e[0]), Math.round(255 * e[1]), Math.round(255 * e[2])));
        }
        if ((t || this.filterManager.effectElements[1].p._mdf) && this.feFlood.setAttribute("flood-opacity", this.filterManager.effectElements[1].p.v / 255), t || this.filterManager.effectElements[2].p._mdf || this.filterManager.effectElements[3].p._mdf) {
          var i = this.filterManager.effectElements[3].p.v, r = (this.filterManager.effectElements[2].p.v - 90) * degToRads, a = i * Math.cos(r), n = i * Math.sin(r);
          this.feOffset.setAttribute("dx", a), this.feOffset.setAttribute("dy", n);
        }
      }
    };
    var _svgMatteSymbols = [];
    function SVGMatte3Effect(t, e, i) {
      this.initialized = !1, this.filterManager = e, this.filterElem = t, this.elem = i, i.matteElement = createNS("g"), i.matteElement.appendChild(i.layerElement), i.matteElement.appendChild(i.transformedElement), i.baseElement = i.matteElement;
    }
    function SVGGaussianBlurEffect(t, e, i, r) {
      t.setAttribute("x", "-100%"), t.setAttribute("y", "-100%"), t.setAttribute("width", "300%"), t.setAttribute("height", "300%"), this.filterManager = e;
      var a = createNS("feGaussianBlur");
      a.setAttribute("result", r), t.appendChild(a), this.feGaussianBlur = a;
    }
    function TransformEffect() {
    }
    function SVGTransformEffect(t, e) {
      this.init(e);
    }
    function CVTransformEffect(t) {
      this.init(t);
    }
    return SVGMatte3Effect.prototype.findSymbol = function(t) {
      for (var e = 0, i = _svgMatteSymbols.length; e < i; ) {
        if (_svgMatteSymbols[e] === t) return _svgMatteSymbols[e];
        e += 1;
      }
      return null;
    }, SVGMatte3Effect.prototype.replaceInParent = function(t, e) {
      var i = t.layerElement.parentNode;
      if (i) {
        for (var r, a = i.children, n = 0, l = a.length; n < l && a[n] !== t.layerElement; ) n += 1;
        n <= l - 2 && (r = a[n + 1]);
        var s = createNS("use");
        s.setAttribute("href", "#" + e), r ? i.insertBefore(s, r) : i.appendChild(s);
      }
    }, SVGMatte3Effect.prototype.setElementAsMask = function(t, e) {
      if (!this.findSymbol(e)) {
        var i = createElementID(), r = createNS("mask");
        r.setAttribute("id", e.layerId), r.setAttribute("mask-type", "alpha"), _svgMatteSymbols.push(e);
        var a = t.globalData.defs;
        a.appendChild(r);
        var n = createNS("symbol");
        n.setAttribute("id", i), this.replaceInParent(e, i), n.appendChild(e.layerElement), a.appendChild(n);
        var l = createNS("use");
        l.setAttribute("href", "#" + i), r.appendChild(l), e.data.hd = !1, e.show();
      }
      t.setMatte(e.layerId);
    }, SVGMatte3Effect.prototype.initialize = function() {
      for (var t = this.filterManager.effectElements[0].p.v, e = this.elem.comp.elements, i = 0, r = e.length; i < r; ) e[i] && e[i].data.ind === t && this.setElementAsMask(this.elem, e[i]), i += 1;
      this.initialized = !0;
    }, SVGMatte3Effect.prototype.renderFrame = function() {
      this.initialized || this.initialize();
    }, SVGGaussianBlurEffect.prototype.renderFrame = function(t) {
      if (t || this.filterManager._mdf) {
        var e = 0.3 * this.filterManager.effectElements[0].p.v, i = this.filterManager.effectElements[1].p.v, r = i == 3 ? 0 : e, a = i == 2 ? 0 : e;
        this.feGaussianBlur.setAttribute("stdDeviation", r + " " + a);
        var n = this.filterManager.effectElements[2].p.v == 1 ? "wrap" : "duplicate";
        this.feGaussianBlur.setAttribute("edgeMode", n);
      }
    }, TransformEffect.prototype.init = function(t) {
      this.effectsManager = t, this.type = effectTypes.TRANSFORM_EFFECT, this.matrix = new Matrix(), this.opacity = -1, this._mdf = !1, this._opMdf = !1;
    }, TransformEffect.prototype.renderFrame = function(t) {
      if (this._opMdf = !1, this._mdf = !1, t || this.effectsManager._mdf) {
        var e = this.effectsManager.effectElements, i = e[0].p.v, r = e[1].p.v, a = e[2].p.v === 1, n = e[3].p.v, l = a ? n : e[4].p.v, s = e[5].p.v, d = e[6].p.v, h = e[7].p.v;
        this.matrix.reset(), this.matrix.translate(-i[0], -i[1], i[2]), this.matrix.scale(0.01 * l, 0.01 * n, 1), this.matrix.rotate(-h * degToRads), this.matrix.skewFromAxis(-s * degToRads, (d + 90) * degToRads), this.matrix.translate(r[0], r[1], 0), this._mdf = !0, this.opacity !== e[8].p.v && (this.opacity = e[8].p.v, this._opMdf = !0);
      }
    }, extendPrototype([TransformEffect], SVGTransformEffect), extendPrototype([TransformEffect], CVTransformEffect), registerRenderer("canvas", CanvasRenderer), registerRenderer("html", HybridRenderer), registerRenderer("svg", SVGRenderer), ShapeModifiers.registerModifier("tm", TrimModifier), ShapeModifiers.registerModifier("pb", PuckerAndBloatModifier), ShapeModifiers.registerModifier("rp", RepeaterModifier), ShapeModifiers.registerModifier("rd", RoundCornersModifier), ShapeModifiers.registerModifier("zz", ZigZagModifier), ShapeModifiers.registerModifier("op", OffsetPathModifier), setExpressionsPlugin(Expressions), setExpressionInterfaces(getInterface), initialize$1(), initialize(), registerEffect$1(20, SVGTintFilter, !0), registerEffect$1(21, SVGFillFilter, !0), registerEffect$1(22, SVGStrokeEffect, !1), registerEffect$1(23, SVGTritoneFilter, !0), registerEffect$1(24, SVGProLevelsFilter, !0), registerEffect$1(25, SVGDropShadowEffect, !0), registerEffect$1(28, SVGMatte3Effect, !1), registerEffect$1(29, SVGGaussianBlurEffect, !0), registerEffect$1(35, SVGTransformEffect, !1), registerEffect(35, CVTransformEffect), lottie;
  });
}), REACT_LOTTIE_PLAYER_VERSION = "3.5.4", LOTTIE_WEB_VERSION = "^5.12.2", PlayerState, PlayerEvent;
function parseSrc(t) {
  if (typeof t == "object") return t;
  try {
    return JSON.parse(t);
  } catch {
  }
  try {
    return new URL(t).toString();
  } catch {
  }
  return t;
}
(function(t) {
  t.Loading = "loading", t.Playing = "playing", t.Paused = "paused", t.Stopped = "stopped", t.Frozen = "frozen", t.Error = "error";
})(PlayerState || (PlayerState = {})), function(t) {
  t.Load = "load", t.InstanceSaved = "instanceSaved", t.Error = "error", t.Ready = "ready", t.Play = "play", t.Pause = "pause", t.Stop = "stop", t.Freeze = "freeze", t.Loop = "loop", t.Complete = "complete", t.Frame = "frame";
}(PlayerEvent || (PlayerEvent = {}));
var defaultOptions = { clearCanvas: !1, hideOnTransparent: !0, progressiveLoad: !0 }, Player = function(t) {
  function e(i) {
    var r = t.call(this, i) || this;
    return r.container = null, r.unmounted = !1, r.handleBgChange = function(a) {
      r.setState({ background: a });
    }, r.triggerDownload = function(a, n) {
      var l = document.createElement("a");
      l.href = a, l.download = n, document.body.appendChild(l), l.click(), document.body.removeChild(l);
    }, r.snapshot = function(a) {
      var n;
      a === void 0 && (a = !0);
      var l = r.props.id ? r.props.id : "lottie", s = document.getElementById(l);
      if (r.props.renderer === "svg") {
        if (s) {
          var d = s.querySelector("svg");
          if (d) {
            var h = new XMLSerializer().serializeToString(d);
            n = "data:image/svg+xml;charset=utf-8," + encodeURIComponent(h);
          }
        }
        a && r.triggerDownload(n, "snapshot.svg");
      } else if (r.props.renderer === "canvas") {
        if (s) {
          var o = s.querySelector("canvas");
          o && (n = o.toDataURL("image/png"));
        }
        a && r.triggerDownload(n, "snapshot.png");
      }
      return n;
    }, typeof window < "u" && (window.lottie = lottie), r.state = { animationData: null, background: "transparent", containerRef: React.createRef(), debug: !0, instance: null, playerState: PlayerState.Loading, seeker: 0 }, r;
  }
  return __extends(e, t), e.getDerivedStateFromProps = function(i, r) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(a) {
        return i.background !== r.background ? [2, { background: i.background }] : [2, null];
      });
    });
  }, e.prototype.getVersions = function() {
    return { lottieWebVersion: LOTTIE_WEB_VERSION, lottiePlayerVersion: REACT_LOTTIE_PLAYER_VERSION };
  }, e.prototype.componentDidMount = function() {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(i) {
        switch (i.label) {
          case 0:
            return this.unmounted ? [3, 2] : [4, this.createLottie()];
          case 1:
            i.sent(), i.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype.componentWillUnmount = function() {
    this.unmounted = !0, this.state.instance && this.state.instance.destroy();
  }, e.prototype.componentDidUpdate = function(i) {
    return __awaiter(this, void 0, void 0, function() {
      return __generator(this, function(r) {
        switch (r.label) {
          case 0:
            return this.props.src === i.src ? [3, 2] : (this.state.instance && this.state.instance.destroy(), [4, this.createLottie()]);
          case 1:
            r.sent(), r.label = 2;
          case 2:
            return [2];
        }
      });
    });
  }, e.prototype.render = function() {
    var i = this, r = this.props, a = r.children, n = r.loop, l = r.style, s = r.onBackgroundChange, d = r.className, h = this.state, o = h.animationData, u = h.instance, m = h.playerState, f = h.seeker, c = h.debug, g = h.background;
    return React.createElement("div", { className: "lf-player-container" }, this.state.playerState === PlayerState.Error ? React.createElement("div", { className: "lf-error" }, React.createElement("span", { "aria-label": "error-symbol", role: "img" }, "⚠️")) : React.createElement("div", { id: this.props.id ? this.props.id : "lottie", ref: function(p) {
      return i.container = p;
    }, style: __assign({ background: g, margin: "0 auto", outline: "none", overflow: "hidden" }, l), className: d }), React.Children.map(a, function(p) {
      return React.isValidElement(p) ? React.cloneElement(p, { animationData: o, background: g, debug: c, instance: u, loop: n, pause: function() {
        return i.pause();
      }, play: function() {
        return i.play();
      }, playerState: m, seeker: f, setBackground: function(y) {
        i.setState({ background: y }), typeof s == "function" && s(y);
      }, setSeeker: function(y, v) {
        return i.setSeeker(y, v);
      }, stop: function() {
        return i.stop();
      }, toggleDebug: function() {
        return i.toggleDebug();
      }, setLoop: function(y) {
        return i.setLoop(y);
      }, colorChangedEvent: function(y) {
        i.handleBgChange(y);
      }, snapshot: function() {
        i.snapshot();
      } }) : null;
    }));
  }, e.prototype.toggleDebug = function() {
    this.setState({ debug: !this.state.debug });
  }, e.prototype.createLottie = function() {
    return __awaiter(this, void 0, void 0, function() {
      var i, r, a, n, l, s, d, h, o, u, m, f, c, g, p = this;
      return __generator(this, function(y) {
        switch (y.label) {
          case 0:
            if (i = this.props, r = i.autoplay, a = i.direction, n = i.loop, l = i.lottieRef, s = i.renderer, d = i.speed, h = i.src, o = i.background, u = i.rendererSettings, m = i.hover, f = this.state.instance, !h || !this.container) return [2];
            y.label = 1;
          case 1:
            return y.trys.push([1, 5, , 6]), typeof (c = parseSrc(h)) != "string" ? [3, 4] : [4, fetch(c).catch(function() {
              throw p.setState({ playerState: PlayerState.Error }), p.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.");
            })];
          case 2:
            return [4, y.sent().json().catch(function() {
              throw p.setState({ playerState: PlayerState.Error }), p.triggerEvent(PlayerEvent.Error), new Error("@LottieFiles/lottie-react: Animation data could not be fetched.");
            })];
          case 3:
            c = y.sent(), y.label = 4;
          case 4:
            return f && f.destroy(), g = lottie.loadAnimation({ rendererSettings: u || defaultOptions, animationData: c, autoplay: r || !1, container: this.container, loop: n || !1, renderer: s }), d && g.setSpeed(d), this.setState({ animationData: c }), this.setState({ instance: g }, function() {
              p.triggerEvent(PlayerEvent.InstanceSaved), typeof l == "function" && l(g), r && p.play();
            }), g.addEventListener("enterFrame", function() {
              p.triggerEvent(PlayerEvent.Frame), p.setState({ seeker: Math.floor(g.currentFrame) });
            }), g.addEventListener("DOMLoaded", function() {
              p.triggerEvent(PlayerEvent.Load);
            }), g.addEventListener("data_ready", function() {
              p.triggerEvent(PlayerEvent.Ready);
            }), g.addEventListener("data_failed", function() {
              p.setState({ playerState: PlayerState.Error }), p.triggerEvent(PlayerEvent.Error);
            }), g.addEventListener("loopComplete", function() {
              p.triggerEvent(PlayerEvent.Loop);
            }), g.addEventListener("complete", function() {
              p.triggerEvent(PlayerEvent.Complete), p.setState({ playerState: PlayerState.Paused }), p.props.keepLastFrame && !p.props.loop || p.setSeeker(0);
            }), this.container && (this.container.addEventListener("mouseenter", function() {
              m && p.state.playerState !== PlayerState.Playing && (p.props.keepLastFrame && p.stop(), p.play());
            }), this.container.addEventListener("mouseleave", function() {
              m && p.state.playerState === PlayerState.Playing && p.stop();
            })), d && this.setPlayerSpeed(d), a && this.setPlayerDirection(a), o && this.setState({ background: o }), [3, 6];
          case 5:
            return y.sent(), this.setState({ playerState: PlayerState.Error }), this.triggerEvent(PlayerEvent.Error), [3, 6];
          case 6:
            return [2];
        }
      });
    });
  }, e.prototype.play = function() {
    var i = this.state.instance;
    i && (this.triggerEvent(PlayerEvent.Play), i.play(), this.setState({ playerState: PlayerState.Playing }));
  }, e.prototype.pause = function() {
    var i = this.state.instance;
    i && (this.triggerEvent(PlayerEvent.Pause), i.pause(), this.setState({ playerState: PlayerState.Paused }));
  }, e.prototype.stop = function() {
    var i = this.state.instance;
    i && (this.triggerEvent(PlayerEvent.Stop), i.stop(), this.setState({ playerState: PlayerState.Stopped }));
  }, e.prototype.setPlayerSpeed = function(i) {
    var r = this.state.instance;
    r && r.setSpeed(i);
  }, e.prototype.setPlayerDirection = function(i) {
    var r = this.state.instance;
    r && r.setDirection(i);
  }, e.prototype.setSeeker = function(i, r) {
    r === void 0 && (r = !1);
    var a = this.state, n = a.instance, l = a.playerState;
    n && (r && l === PlayerState.Playing ? n.goToAndPlay(i, !0) : (n.goToAndStop(i, !0), this.triggerEvent(PlayerEvent.Pause), this.setState({ playerState: PlayerState.Paused })));
  }, e.prototype.setLoop = function(i) {
    var r = this.state.instance;
    r && (r.loop = i, this.setState({ instance: r }));
  }, e.prototype.triggerEvent = function(i) {
    var r = this.props.onEvent;
    r && r(i);
  }, e.defaultProps = { loop: !1 }, e;
}(React.Component);
function styleInject(t, e) {
  e === void 0 && (e = {});
  var i = e.insertAt;
  if (typeof document < "u") {
    var r = document.head || document.getElementsByTagName("head")[0], a = document.createElement("style");
    a.type = "text/css", i === "top" && r.firstChild ? r.insertBefore(a, r.firstChild) : r.appendChild(a), a.styleSheet ? a.styleSheet.cssText = t : a.appendChild(document.createTextNode(t));
  }
}
var css_248z = `.lf-progress {
  -webkit-appearance: none;
  -moz-apperance: none;
  width: 100%;
  /* margin: 0 10px; */
  height: 4px;
  border-radius: 3px;
  cursor: pointer;
}
.lf-progress:focus {
  outline: none;
  border: none;
}
.lf-progress::-moz-range-track {
  cursor: pointer;
  background: none;
  border: none;
  outline: none;
}
.lf-progress::-webkit-slider-thumb {
  -webkit-appearance: none !important;
  height: 13px;
  width: 13px;
  border: 0;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress::-moz-range-thumb {
  -moz-appearance: none !important;
  height: 13px;
  width: 13px;
  border: 0;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress::-ms-track {
  width: 100%;
  height: 3px;
  cursor: pointer;
  background: transparent;
  border-color: transparent;
  color: transparent;
}
.lf-progress::-ms-fill-lower {
  background: #ccc;
  border-radius: 3px;
}
.lf-progress::-ms-fill-upper {
  background: #ccc;
  border-radius: 3px;
}
.lf-progress::-ms-thumb {
  border: 0;
  height: 15px;
  width: 15px;
  border-radius: 50%;
  background: #0fccce;
  cursor: pointer;
}
.lf-progress:focus::-ms-fill-lower {
  background: #ccc;
}
.lf-progress:focus::-ms-fill-upper {
  background: #ccc;
}
.lf-player-container :focus {
  outline: 0;
}
.lf-popover {
  position: relative;
}

.lf-popover-content {
  display: inline-block;
  position: absolute;
  opacity: 1;
  visibility: visible;
  transform: translate(0, -10px);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
}

.lf-popover-content.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, 0px);
}

.lf-player-btn-container {
  display: flex;
  align-items: center;
}
.lf-player-btn {
  cursor: pointer;
  fill: #999;
  width: 14px;
}

.lf-player-btn.active {
  fill: #555;
}

.lf-popover {
  position: relative;
}

.lf-popover-content {
  display: inline-block;
  position: absolute;
  background-color: #ffffff;
  opacity: 1;

  transform: translate(0, -10px);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
  transition: all 0.3s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  padding: 10px;
}

.lf-popover-content.hidden {
  opacity: 0;
  visibility: hidden;
  transform: translate(0, 0px);
}

.lf-arrow {
  position: absolute;
  z-index: -1;
  content: '';
  bottom: -9px;
  border-style: solid;
  border-width: 10px 10px 0px 10px;
}

.lf-left-align,
.lf-left-align .lfarrow {
  left: 0;
  right: unset;
}

.lf-right-align,
.lf-right-align .lf-arrow {
  right: 0;
  left: unset;
}

.lf-text-input {
  border: 1px #ccc solid;
  border-radius: 5px;
  padding: 3px;
  width: 60px;
  margin: 0;
}

.lf-color-picker {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 90px;
}

.lf-color-selectors {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.lf-color-component {
  display: flex;
  flex-direction: row;
  font-size: 12px;
  align-items: center;
  justify-content: center;
}

.lf-color-component strong {
  width: 40px;
}

.lf-color-component input[type='range'] {
  margin: 0 0 0 10px;
}

.lf-color-component input[type='number'] {
  width: 50px;
  margin: 0 0 0 10px;
}

.lf-color-preview {
  font-size: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-left: 5px;
}

.lf-preview {
  height: 60px;
  width: 60px;
}

.lf-popover-snapshot {
  width: 150px;
}
.lf-popover-snapshot h5 {
  margin: 5px 0 10px 0;
  font-size: 0.75rem;
}
.lf-popover-snapshot a {
  display: block;
  text-decoration: none;
}
.lf-popover-snapshot a:before {
  content: '⥼';
  margin-right: 5px;
}
.lf-popover-snapshot .lf-note {
  display: block;
  margin-top: 10px;
  color: #999;
}
.lf-player-controls > div {
  margin-right: 5px;
  margin-left: 5px;
}
.lf-player-controls > div:first-child {
  margin-left: 0px;
}
.lf-player-controls > div:last-child {
  margin-right: 0px;
}
`;
styleInject(css_248z);
var ColorPicker = function(t) {
  function e() {
    var i = t !== null && t.apply(this, arguments) || this;
    return i.state = { red: 0, green: 0, blue: 0, rgba: null, hex: "#000000", colorComponents: [] }, i.handleChange = function(r, a) {
      if (r === "r") {
        var n = "#" + (256 | a).toString(16).slice(1) + (256 | i.state.green).toString(16).slice(1) + (256 | i.state.blue).toString(16).slice(1);
        i.setState({ hex: n });
      } else r === "g" ? (n = "#" + (256 | i.state.red).toString(16).slice(1) + (256 | a).toString(16).slice(1) + (256 | i.state.blue).toString(16).slice(1), i.setState({ hex: n })) : r === "b" && (n = "#" + (256 | i.state.red).toString(16).slice(1) + (256 | i.state.green).toString(16).slice(1) + (256 | a).toString(16).slice(1), i.setState({ hex: n }));
    }, i.parseColor = function(r) {
      var a;
      if (typeof r == "string") {
        if (r[0] === "#") {
          var n = r.length === 4 ? [r.slice(1, 2), r.slice(2, 3), r.slice(3, 4)].map(function(l) {
            return parseInt("" + l + l, 16);
          }) : [r.slice(1, 3), r.slice(3, 5), r.slice(5, 7)].map(function(l) {
            return parseInt(l, 16);
          });
          i.setState({ colorComponents: n });
        } else r.startsWith("rgb") && (n = (a = r.match(/\d+/g)) === null || a === void 0 ? void 0 : a.map(function(l) {
          return parseInt(l);
        })) !== void 0 && i.setState({ colorComponents: n });
        i.state.colorComponents.length && (i.setState({ red: i.state.colorComponents[0] }), i.setState({ green: i.state.colorComponents[1] }), i.setState({ blue: i.state.colorComponents[2] }));
      }
    }, i;
  }
  return __extends(e, t), e.prototype.componentDidUpdate = function(i, r) {
    return this.props.colorChangedEvent && this.state.hex !== r.hex && this.props.colorChangedEvent(this.state.hex), !0;
  }, e.prototype.render = function() {
    var i = this;
    return React.createElement("div", { className: "lf-color-picker" }, React.createElement("div", { className: "lf-color-selectors" }, React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Red"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.red, onChange: function(r) {
      i.setState({ red: r.target.value }), i.handleChange("r", r.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.red, onChange: function(r) {
      i.setState({ red: r.target.value }), i.handleChange("r", r.target.value);
    } })), React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Green"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.green, onChange: function(r) {
      i.setState({ green: r.target.value }), i.handleChange("g", r.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.green, onChange: function(r) {
      i.setState({ green: r.target.value }), i.handleChange("g", r.target.value);
    } })), React.createElement("div", { className: "lf-color-component" }, React.createElement("strong", null, "Blue"), React.createElement("input", { type: "range", min: "0", max: "255", value: this.state.blue, onChange: function(r) {
      i.setState({ blue: r.target.value }), i.handleChange("b", r.target.value);
    } }), React.createElement("input", { className: "lf-text-input", type: "number", min: "0", max: "255", value: this.state.blue, onChange: function(r) {
      i.setState({ blue: r.target.value }), i.handleChange("b", r.target.value);
    } }))), React.createElement("div", { className: "lf-color-preview" }, React.createElement("div", { className: "lf-preview", style: { background: "rgb(" + this.state.red + ", " + this.state.green + ", " + this.state.blue + ")" } }), React.createElement("div", null, React.createElement("input", { className: "lf-text-input", type: "text", value: this.state.hex, onChange: function(r) {
      i.setState({ hex: r.target.value }), i.parseColor(r.target.value);
    } }))));
  }, e;
}(React.Component), Popover = function(t) {
  var e = t.children, i = t.icon, r = useState(null), a = r[0], n = r[1], l = useState(null), s = l[0], d = l[1], h = useState(null), o = h[0], u = h[1], m = useState(!1), f = m[0], c = m[1];
  return useEffect(function() {
    if (a && s) {
      var g = a.getBoundingClientRect(), p = s.getBoundingClientRect(), y = g.left + p.width > window.innerWidth ? -1 : 0;
      u(y);
    }
  }, [o, s, a]), React.createElement("div", { className: "lf-popover", onMouseOver: function() {
    c(!0);
  }, onMouseLeave: function() {
    c(!1);
  }, ref: function(g) {
    n(g);
  } }, React.createElement("div", { className: " lf-player-btn" }, i), React.createElement("div", { className: "lf-popover-content", ref: function(g) {
    d(g);
  }, style: { bottom: "22px", right: "0px", zIndex: 2, visibility: f ? "visible" : "hidden" } }, e));
}, Seeker = function(t) {
  function e(i) {
    var r = t.call(this, i) || this;
    return r.inputRef = React.createRef(), r.handleChange = function() {
      return function(a) {
        var n = a.target.value, l = Math.floor(n / 100 * r.props.max);
        r.props.onChange(l);
      };
    }, r.state = { value: 0 }, r;
  }
  return __extends(e, t), e.prototype.render = function() {
    var i = this.props.value / this.props.max * 100, r = { backgroundImage: "-webkit-gradient(linear, left top, right top, color-stop(" + i + "%, rgba(15, 204, 206, 0.4)), color-stop(" + i + "%, #DAE1E7))" }, a = { position: "absolute", left: 0, marginTop: "8px", width: "20px", display: "block", border: "0px", backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)", color: this.props.darkTheme ? "#B9B9B9" : "#555", padding: "2px", textAlign: "center", borderRadius: "3px", fontSize: "8px", fontWeight: "bold" }, n = { position: "absolute", right: 0, marginTop: "8px", width: "20px", display: "block", border: "0px", backgroundColor: this.props.darkTheme ? "#505050" : "rgb(218, 225, 231)", color: this.props.darkTheme ? "#B9B9B9" : "#555", padding: "2px", textAlign: "center", borderRadius: "3px", fontSize: "8px", fontWeight: "bold" };
    return React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", width: "100%", marginRight: "5px", marginLeft: "5px", position: "relative" } }, React.createElement("input", { ref: this.inputRef, id: "track", className: "lf-progress", name: "progress", "aria-label": "progress", type: "range", min: "0", max: "100", step: "0.1", value: i, onInput: this.handleChange(), onChange: this.handleChange(), style: r }), this.props.showLabels && React.createElement("div", { style: { display: "flex", justifyContent: "space-between" } }, React.createElement("div", { style: a }, this.props.min), React.createElement("div", { style: n }, this.props.max)));
  }, e;
}(React.Component), ControlButtonStyle = { display: "inline-flex", cursor: "pointer" }, Controls = function(t) {
  function e(i) {
    var r = t.call(this, i) || this;
    return r.state = { activeFrame: 0, mouseDown: !1 }, r;
  }
  return __extends(e, t), e.prototype.render = function() {
    var i = this, r = this.props, a = r.instance, n = r.playerState, l = r.seeker, s = r.setLoop, d = r.setSeeker, h = r.play, o = r.pause, u = r.stop, m = r.visible, f = r.buttons;
    if (!a || !m) return null;
    var c = !f || f.includes("play"), g = !f || f.includes("stop"), p = !f || f.includes("repeat"), y = !f || f.includes("frame"), v = !f || f.includes("background"), _ = !f || f.includes("snapshot"), b = { width: 14, height: 14, viewBox: "0 0 24 24" }, T = Math.round(a.currentFrame);
    return React.createElement("div", { className: "lf-player-controls", style: { display: "flex", justifyContent: "space-between", height: "60px", alignItems: "center", backgroundColor: this.props.transparentTheme ? "transparent" : this.props.darkTheme ? "#3C3C3C" : "#ffffff", paddingLeft: "10px", paddingRight: "10px" } }, c && React.createElement("div", { role: "button", "aria-label": n === PlayerState.Playing ? PlayerEvent.Pause : PlayerEvent.Play, tabIndex: 0, onClick: function() {
      n === PlayerState.Playing ? typeof o == "function" && o() : typeof h == "function" && h();
    }, onKeyDown: function() {
      n === PlayerState.Playing ? typeof o == "function" && o() : typeof h == "function" && h();
    }, className: "lf-player-btn", style: ControlButtonStyle }, n === PlayerState.Playing ? React.createElement("svg", __assign({}, b), React.createElement("rect", { height: "22.9", rx: "1.9", width: "7.6", x: "14", y: ".5" }), React.createElement("rect", { height: "22.9", rx: "1.9", width: "7.6", x: "2", y: ".5" })) : React.createElement("svg", __assign({}, b), React.createElement("path", { d: "M2 3.4C2 1.9 3.5 1 4.8 1.8l16.5 9.6c1.2.7 1.2 2.5 0 3.2L4.8 24.2C3.5 25 2 24.1 2 22.6V3.4z" }))), g && React.createElement("div", { tabIndex: 0, role: "button", "aria-label": PlayerEvent.Stop, onClick: function() {
      return u && u();
    }, onKeyDown: function() {
      return u && u();
    }, className: n === PlayerState.Stopped ? "lf-player-btn active" : "lf-player-btn", style: ControlButtonStyle }, React.createElement("svg", __assign({}, b), React.createElement("path", { d: `M2 3.667A1.67 1.67 0 0 1 3.667 2h16.666A1.67 1.67 0 0 1 22 3.667v16.666A1.67 1.67 0 0 1 20.333
            22H3.667A1.67 1.67 0 0 1 2 20.333z` }))), React.createElement(Seeker, { min: 0, step: 1, max: a ? a.totalFrames : 1, value: l || 0, onChange: function(k) {
      d && i.setState({ activeFrame: k }, function() {
        d(k, !1);
      });
    }, onChangeEnd: function(k) {
      d && i.setState({ activeFrame: k }, function() {
        d(k, !1);
      });
    }, showLabels: this.props.showLabels, darkTheme: this.props.darkTheme }), y && React.createElement("div", { role: "button", className: "lf-player-btn-container" }, React.createElement("input", { style: { outline: "none", border: this.props.darkTheme ? "1px #505050 solid" : "1px #ccc solid", borderRadius: "3px", width: "40px", textAlign: "center", backgroundColor: this.props.darkTheme ? "#505050" : "#ffffff", color: this.props.darkTheme ? "#B9B9B9" : "#999", fontSize: "0.7rem", padding: "0", fontFamily: "inherit" }, type: "text", value: T, readOnly: !0 })), p && React.createElement("div", { role: "button", "aria-label": PlayerEvent.Loop, tabIndex: 0, onClick: function() {
      a && s && s(!a.loop);
    }, onKeyDown: function() {
      a && s && s(!a.loop);
    }, className: a.loop ? "lf-player-btn active" : "lf-player-btn", style: ControlButtonStyle }, React.createElement("svg", __assign({}, b), React.createElement("path", { d: `M12.5 16.8137h-.13v1.8939h4.9696c3.6455 0 6.6113-2.9658 6.6113-6.6116
            0-3.64549-2.9658-6.61131-6.6113-6.61131-.5231 0-.947.42391-.947.94696 0 .52304.4239.94696.947.94696 2.6011 0
            4.7174 2.11634 4.7174 4.71739 0 2.6014-2.1166 4.7177-4.7174 4.7177H12.5zM13.6025
            5.61469v-.13H7.48137C3.83582 5.48469.87 8.45051.87 12.096c0 3.6509 3.17269 6.6117 6.81304 6.6117.52304 0
            .94696-.424.94696-.947 0-.5231-.42392-.947-.94696-.947-2.60804 0-4.91907-2.1231-4.91907-4.7176 0-2.60115
            2.11634-4.71744 4.7174-4.71744h6.12113V5.61469z`, stroke: "#8795A1", strokeWidth: ".26" }), React.createElement("path", { d: `M11.1482
            2.20355h0l-.001-.00116c-.3412-.40061-.9405-.44558-1.33668-.0996h-.00001c-.39526.34519-.43936.94795-.09898
            1.34767l2.51487 3.03683-2.51894 3.06468c-.33872.40088-.29282 1.00363.10347
            1.34723l.08517-.0982-.08517.0982c.17853.1549.39807.2308.61647.2308.2671 0 .5328-.114.72-.3347h0l.0011-.0014
            3.0435-3.68655.0006-.00068c.3035-.35872.3025-.88754-.0019-1.24526l-3.0425-3.65786zM13.9453
            21.7965h0l.001.0011c.3413.4006.9407.4456 1.337.0996h0c.3953-.3452.4395-.9479.099-1.3477l-2.5154-3.0368
            2.5195-3.0647c.3388-.4008.2929-1.0036-.1035-1.3472l-.0852.0982.0852-.0982c-.1786-.1549-.3981-.2308-.6166-.2308-.2671
            0-.5329.114-.7202.3347h0l-.0011.0014-3.0442
            3.6865c-.0001.0003-.0003.0005-.0005.0007-.3036.3587-.3027.8876.0019 1.2453l3.0431 3.6579z`, fill: "#8795A1", stroke: "#8795A1", strokeWidth: ".26" }))), v && React.createElement(Popover, { icon: React.createElement("svg", __assign({}, b), React.createElement("path", { d: `M12 3.1L6.1 8.6a7.6 7.6 0 00-2.2 4 7.2 7.2 0 00.4 4.4 7.9 7.9 0 003 3.5 8.7 8.7 0 004.7 1.3c1.6 0
            3.2-.5 4.6-1.3s2.4-2 3-3.5a7.2 7.2 0 00.5-4.5 7.6 7.6 0 00-2.2-4L12 3.2zM12 0l7.5 7a9.8 9.8 0 013 5.1
            9.3 9.3 0 01-.6 5.8c-.9 1.8-2.2 3.3-4 4.4A11.2 11.2 0 0112 24a11.2 11.2 0
            01-6-1.7c-1.7-1-3-2.6-3.9-4.4a9.3 9.3 0 01-.6-5.8c.4-2 1.5-3.7 3-5L12 0zM6 14h12c0 1.5-.7 3-1.8 4s-2.6
            1.6-4.2 1.6S9 19 7.8 18s-1.7-2.5-1.7-4z` })) }, React.createElement("div", { slot: "content", className: "lf-popover popover-background" }, React.createElement(ColorPicker, { colorChangedEvent: this.props.colorChangedEvent }))), _ && React.createElement(Popover, { icon: React.createElement("svg", __assign({}, b), React.createElement("path", { clipRule: "evenodd", d: `M0 3.01A2.983 2.983 0 012.983.027H16.99a2.983 2.983 0 012.983 2.983v14.008a2.982 2.982 0 01-2.983
              2.983H2.983A2.983 2.983 0 010 17.018zm2.983-.941a.941.941 0 00-.942.94v14.01c0
              .52.422.94.942.94H16.99a.94.94 0 00.941-.94V3.008a.941.941 0 00-.94-.94H2.981z`, fillRule: "evenodd" }), React.createElement("path", { d: "M12.229 7.945l-2.07 4.598-2.586-2.605-2.414 2.758v2.146h9.656V11.93z" }), React.createElement("circle", { cx: "7.444", cy: "6.513", r: "2.032" }), React.createElement("path", { d: `M9.561 23.916h11.25a2.929 2.929 0 002.926-2.927V9.954a1.06 1.06 0 10-2.122 0v11.035a.805.805 0
              01-.803.804H9.562a1.061 1.061 0 100 2.123z`, stroke: "#8795a1", strokeWidth: ".215" })) }, React.createElement("div", { slot: "content", className: "lf-popover lf-popover-snapshot", onWheel: function(k) {
      d && d(T + (k.deltaY > 0 ? -1 : 1), !1);
    } }, React.createElement("h5", null, "Frame ", T), React.createElement("div", { style: { cursor: "pointer", color: "#0FCCCE" }, onClick: this.props.snapshot }, "Download SVG"), React.createElement("div", { style: { cursor: "pointer", color: "#0FCCCE" }, onClick: this.props.snapshot }, "Download PNG"), React.createElement("i", { className: "lf-note" }, "Scroll with mousewheel to find exact frame"))));
  }, e;
}(React.Component);
const DEFAULT_CORS_PROXY = "https://u60ta2bi82.execute-api.ap-southeast-1.amazonaws.com/cors-server?url=", ReactTelegramStickerViewer = ({
  tgsUrl: t,
  corsProxyServerUrl: e = DEFAULT_CORS_PROXY,
  style: i = { height: "300px", width: "300px" }
}) => {
  const [r, a] = useState(null), [n, l] = useState(null), [s, d] = useState(!1);
  return useEffect(() => {
    if (!t) {
      a(null), l(null);
      return;
    }
    if (l(null), d(!0), !t.endsWith(".tgs")) {
      l("Invalid URL: The URL does not end with .tgs"), a(null), d(!1);
      return;
    }
    fetch(e + encodeURIComponent(t)).then((h) => {
      if (!h.ok)
        throw new Error(`Network response was not ok (${h.status})`);
      return h.arrayBuffer();
    }).then((h) => {
      if (h instanceof ArrayBuffer)
        try {
          const o = ungzip_1(new Uint8Array(h)), u = new TextDecoder("utf-8").decode(o), m = JSON.parse(u);
          a(m), console.log("lottieJsonData", m);
        } catch (o) {
          throw console.log("tgs fetch error", o), new Error("Error decompressing or parsing the .tgs file.");
        }
      else
        throw new Error("Received data is not an ArrayBuffer.");
    }).catch((h) => {
      console.error("Error fetching or parsing .tgs file:", h), l(h.message), a(null);
    }).finally(() => {
      d(!1);
    });
  }, [t, e]), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-center justify-center", children: [
    s && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-blue-500", children: "Loading..." }),
    n && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-red-500", children: n }),
    r && /* @__PURE__ */ jsxRuntimeExports.jsx(Player, { autoplay: !0, loop: !0, src: r, style: i, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Controls,
      {
        visible: !0,
        buttons: ["play", "repeat", "frame", "debug"]
      }
    ) })
  ] });
};
export {
  ReactTelegramStickerViewer as default
};
