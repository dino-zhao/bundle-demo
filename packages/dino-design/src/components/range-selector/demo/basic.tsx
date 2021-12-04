import React from "react";
import RangeSelector from "..";
import zhCN from "antd/es/locale/zh_CN";
import { ConfigProvider } from "antd";
export default function () {
  return (
    <ConfigProvider locale={zhCN}>
      <RangeSelector
        onRangeChange={() => {}}
        btnArr={["YESTODAY", "LAST_SEVEN_DAYS_WITHOUT_TODAY"]}
        value={"YESTODAY"}
      ></RangeSelector>
    </ConfigProvider>
  );
}
