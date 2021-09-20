!(function (e, r) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = r(require("lodash")))
    : "function" == typeof define && define.amd
    ? define(["lodash"], r)
    : "object" == typeof exports
    ? (exports.MyLibrary = r(require("lodash")))
    : (e.MyLibrary = r(e._));
})(self, function (e) {
  return (() => {
    "use strict";
    var r = {
        720: (r) => {
          r.exports = e;
        },
      },
      t = {};
    function o(e) {
      var n = t[e];
      if (void 0 !== n) return n.exports;
      var u = (t[e] = { exports: {} });
      return r[e](u, u.exports, o), u.exports;
    }
    (o.d = (e, r) => {
      for (var t in r)
        o.o(r, t) &&
          !o.o(e, t) &&
          Object.defineProperty(e, t, { enumerable: !0, get: r[t] });
    }),
      (o.o = (e, r) => Object.prototype.hasOwnProperty.call(e, r)),
      (o.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        o.r(n), o.d(n, { log: () => c });
        var e = o(720);
        function r(e) {
          return (
            null != e &&
            "object" == typeof e &&
            !0 === e["@@functional/placeholder"]
          );
        }
        function t(e) {
          return function t(o) {
            return 0 === arguments.length || r(o)
              ? t
              : e.apply(this, arguments);
          };
        }
        function u(e) {
          return function o(n, u) {
            switch (arguments.length) {
              case 0:
                return o;
              case 1:
                return r(n)
                  ? o
                  : t(function (r) {
                      return e(n, r);
                    });
              default:
                return r(n) && r(u)
                  ? o
                  : r(n)
                  ? t(function (r) {
                      return e(r, u);
                    })
                  : r(u)
                  ? t(function (r) {
                      return e(n, r);
                    })
                  : e(n, u);
            }
          };
        }
        const i = u(function (e, r) {
          return Number(e) + Number(r);
        });
        function c(r) {
          console.log((0, e.cloneDeep)(r + "啊啊12"));
        }
        console.log(i(1, 2));
      })(),
      n
    );
  })();
});
