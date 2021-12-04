import React, { useImperativeHandle } from "react";
import { DatePicker } from "antd";
import moment, { Moment } from "moment";
import { useImmer } from "use-immer";
import styled from "styled-components";
import { $Link_COLOR } from "../common/varible";
const { RangePicker } = DatePicker;
const Wrap = styled.div`
  span {
    margin-right: 10px;
    cursor: pointer;
  }
  .on {
    color: ${$Link_COLOR};
  }
`;
const rangeOptions: {
  [props: string]: {
    range: [Moment, Moment];
    label: string;
  };
} = {};
Object.defineProperties(rangeOptions, {
  THIS_MONTH: {
    get() {
      return {
        label: "本月",
        range: [moment().startOf("month"), moment()],
      };
    },
  },
  LAST_MONTH: {
    get() {
      return {
        range: [
          moment().subtract(1, "month").startOf("month"),
          moment().subtract(1, "month").endOf("month"),
        ],
        label: "上月",
      };
    },
  },
  YESTODAY: {
    get() {
      return {
        range: [
          moment().subtract(1, "day").startOf("day"),
          moment().subtract(1, "day").endOf("day"),
        ],
        label: "昨天",
      };
    },
  },
  LAST_SEVEN_DAYS: {
    get() {
      return {
        range: [moment().subtract(6, "day").startOf("day"), moment()],
        label: "近七天",
      };
    },
  },
  LAST_SEVEN_DAYS_WITHOUT_TODAY: {
    get() {
      return {
        range: [
          moment().subtract(7, "day").startOf("day"),
          moment().subtract(1, "day").endOf("day"),
        ],
        label: "近七天",
      };
    },
  },
});
export type BtnKind =
  | "THIS_MONTH"
  | "LAST_MONTH"
  | ""
  | "LAST_SEVEN_DAYS"
  | "YESTODAY"
  | "LAST_SEVEN_DAYS_WITHOUT_TODAY";
interface Props {
  value: [Moment, Moment] | BtnKind; //默认值
  btnArr: BtnKind[]; //显示的按钮数组
  onRangeChange: (p: [Moment, Moment]) => void; //子组件时间变化引起调用的父组件传入的事件
  [propsName: string]: any;
}

//根据父组件传的value值对当前组件state进行初始化和修改
const getDateValue = (targetValue: [Moment, Moment] | BtnKind) => ({
  range: Array.isArray(targetValue)
    ? targetValue
    : rangeOptions[targetValue].range,
  selectedBtn: Array.isArray(targetValue) ? "" : targetValue,
});
const Ranger = (
  { value, btnArr, onRangeChange, ...others }: Props,
  ref?: any
) => {
  const [date, setDate] = useImmer(getDateValue(value));

  useImperativeHandle(ref, () => ({
    setDate: (targetValue: [Moment, Moment] | BtnKind = value) => {
      setDate(() => getDateValue(targetValue));
    },
  }));

  return (
    <Wrap>
      {btnArr.map((item) => {
        return (
          <span
            className={date.selectedBtn === item ? "on" : ""}
            onClick={(e: any) => {
              setDate(() => getDateValue(item));
              onRangeChange(rangeOptions[item].range);
            }}
            key={item}
          >
            {rangeOptions[item].label}
          </span>
        );
      })}

      <RangePicker
        style={{ marginLeft: "15px" }}
        allowClear={false}
        onChange={(dates: any) => {
          const start = dates[0] as Moment;
          const end = dates[1].endOf("day") as Moment;
          setDate(() => getDateValue([start, end]));
          onRangeChange([start, end]);
        }}
        {...others}
        value={date.range}
      />
    </Wrap>
  );
};

export default React.forwardRef(Ranger) as React.ForwardRefExoticComponent<
  Props & {
    ref?: React.MutableRefObject<{
      setDate: () => void;
    }>;
  }
>;
