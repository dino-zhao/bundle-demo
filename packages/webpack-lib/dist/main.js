!(function (e, o) {
  "object" == typeof exports && "object" == typeof module
    ? (module.exports = o(require("lodash")))
    : "function" == typeof define && define.amd
    ? define(["lodash"], o)
    : "object" == typeof exports
    ? (exports.MyLibrary = o(require("lodash")))
    : (e.MyLibrary = o(e._));
})(self, function (e) {
  return (() => {
    "use strict";
    var o = {
        720: (o) => {
          o.exports = e;
        },
      },
      r = {};
    function t(e) {
      var n = r[e];
      if (void 0 !== n) return n.exports;
      var u = (r[e] = { exports: {} });
      return o[e](u, u.exports, t), u.exports;
    }
    (t.d = (e, o) => {
      for (var r in o)
        t.o(o, r) &&
          !t.o(e, r) &&
          Object.defineProperty(e, r, { enumerable: !0, get: o[r] });
    }),
      (t.o = (e, o) => Object.prototype.hasOwnProperty.call(e, o)),
      (t.r = (e) => {
        "undefined" != typeof Symbol &&
          Symbol.toStringTag &&
          Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }),
          Object.defineProperty(e, "__esModule", { value: !0 });
      });
    var n = {};
    return (
      (() => {
        t.r(n), t.d(n, { default: () => i });
        var e = t(720);
        function o(e) {
          return (
            null != e &&
            "object" == typeof e &&
            !0 === e["@@functional/placeholder"]
          );
        }
        function r(e) {
          return function r(t) {
            return 0 === arguments.length || o(t)
              ? r
              : e.apply(this, arguments);
          };
        }
        var u,
          l =
            ((u = function (e, o) {
              return Number(e) + Number(o);
            }),
            function e(t, n) {
              switch (arguments.length) {
                case 0:
                  return e;
                case 1:
                  return o(t)
                    ? e
                    : r(function (e) {
                        return u(t, e);
                      });
                default:
                  return o(t) && o(n)
                    ? e
                    : o(t)
                    ? r(function (e) {
                        return u(e, n);
                      })
                    : o(n)
                    ? r(function (e) {
                        return u(t, e);
                      })
                    : u(t, n);
              }
            });
        const c = l;
        function i(o) {
          console.log((0, e.cloneDeep)(o + "啊啊1"));
        }
        console.log("副作用"),
          console.log(c(1, 2)),
          console.log((2, console.log("使用到的代码"), 8));
      })(),
      n
    );
  })();
});
