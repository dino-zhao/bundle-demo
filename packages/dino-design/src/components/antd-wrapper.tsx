import { ConfigProvider } from "antd";
import zhCN from "antd/es/locale/zh_CN";
import React from "react";
export default function AntdWrapper({
  children,
}: {
  children: React.ReactElement;
}) {
  return <ConfigProvider locale={zhCN}>{children}</ConfigProvider>;
}
