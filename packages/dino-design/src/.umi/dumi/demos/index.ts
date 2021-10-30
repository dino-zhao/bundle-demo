// @ts-nocheck
import React from 'react';
import { dynamic } from 'dumi';

export default {
  'Foo-demo': {
    component: function DumiDemo() {
  var _interopRequireDefault = require("F:/Downloads/webpack-hmr-example-master/node_modules/@umijs/babel-preset-umi/node_modules/@babel/runtime/helpers/interopRequireDefault");

  var _react = _interopRequireDefault(require("react"));

  var _c = require("c");

  var _default = function _default() {
    return /*#__PURE__*/_react["default"].createElement(_c.Foo, {
      title: "First Demo"
    });
  };

  return _react["default"].createElement(_default);
},
    previewerProps: {"sources":{"_":{"tsx":"import React from \"react\";\nimport { Foo } from \"c\";\n\nexport default () => <Foo title=\"First Demo\" />;"}},"dependencies":{"react":{"version":"17.0.2"},"c":{"version":"1.0.0"}},"componentName":"Foo","identifier":"Foo-demo"},
  },
};
