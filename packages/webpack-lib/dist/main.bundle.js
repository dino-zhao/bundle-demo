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
      var l = (r[e] = { exports: {} });
      return o[e](l, l.exports, t), l.exports;
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
        t.r(n), t.d(n, { log: () => o });
        var e = t(720);
        function o(o) {
          console.log((0, e.cloneDeep)(o + "啊啊12"));
        }
        console.log("副作用"), o("22"), console.log(2 * 2 * 2);
      })(),
      n
    );
  })();
});
