!function(e,o){"object"==typeof exports&&"object"==typeof module?module.exports=o(require("lodash")):"function"==typeof define&&define.amd?define(["lodash"],o):"object"==typeof exports?exports.MyLibrary=o(require("lodash")):e.MyLibrary=o(e._)}(self,(function(e){return(()=>{"use strict";var o={720:o=>{o.exports=e}},r={};function t(e){var n=r[e];if(void 0!==n)return n.exports;var u=r[e]={exports:{}};return o[e](u,u.exports,t),u.exports}t.d=(e,o)=>{for(var r in o)t.o(o,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:o[r]})},t.o=(e,o)=>Object.prototype.hasOwnProperty.call(e,o),t.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};return(()=>{t.r(n),t.d(n,{log:()=>c});var e=t(720);function o(e){return null!=e&&"object"==typeof e&&!0===e["@@functional/placeholder"]}function r(e){return function r(t){return 0===arguments.length||o(t)?r:e.apply(this,arguments)}}function u(e){return function t(n,u){switch(arguments.length){case 0:return t;case 1:return o(n)?t:r((function(o){return e(n,o)}));default:return o(n)&&o(u)?t:o(n)?r((function(o){return e(o,u)})):o(u)?r((function(o){return e(n,o)})):e(n,u)}}}const l=u((function(e,o){return Number(e)+Number(o)}));function c(o){console.log((0,e.cloneDeep)(o+"啊啊12"))}console.log("副作用"),console.log(l(1,2)),console.log((2,console.log("使用到的代码"),8))})(),n})()}));