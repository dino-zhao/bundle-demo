import "antd/lib/config-provider/style/css";
import _ConfigProvider from "antd/lib/config-provider";
import zhCN from "antd/es/locale/zh_CN";
import React from "react";
export default function AntdWrapper(_ref) {
  var children = _ref.children;
  return /*#__PURE__*/React.createElement(_ConfigProvider, {
    locale: zhCN
  }, children);
}