import "antd/es/config-provider/style/css";
import _ConfigProvider from "antd/es/config-provider";
import zhCN from "antd/es/locale/zh_CN";
import React from "react";
export default function AntdWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(_ConfigProvider, {
    locale: zhCN
  }, children);
}