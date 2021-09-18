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
    var o = {
        663: (e, o, r) => {
          e.exports = r(26)(221);
        },
        720: (o) => {
          "use strict";
          o.exports = e;
        },
        26: (e) => {
          "use strict";
          e.exports = main_1b121cf10190c72dabf7;
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
        "use strict";
        t.r(n), t.d(n, { default: () => r });
        var e = t(720),
          o = t(663);
        function r(o) {
          console.log((0, e.cloneDeep)(o + "啊啊1"));
        }
        console.log("副作用"),
          console.log((0, o.add)(1, 2)),
          console.log((2, console.log("使用到的代码"), 8));
      })(),
      n
    );
  })();
});
