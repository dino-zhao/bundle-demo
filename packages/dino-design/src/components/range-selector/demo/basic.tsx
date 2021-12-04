import React from "react";

import "../style";
import RangeSelector from "..";
// import "antd/lib/date-picker/style/css";
export default function () {
  return (
    <RangeSelector
      onRangeChange={() => {}}
      btnArr={["YESTODAY", "LAST_SEVEN_DAYS_WITHOUT_TODAY"]}
      value={"YESTODAY"}
    ></RangeSelector>
  );
}
