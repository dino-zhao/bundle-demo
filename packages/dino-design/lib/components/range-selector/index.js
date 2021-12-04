import _extends from "@babel/runtime/helpers/extends";
import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import _objectWithoutProperties from "@babel/runtime/helpers/objectWithoutProperties";
import _taggedTemplateLiteral from "@babel/runtime/helpers/taggedTemplateLiteral";
import "antd/es/date-picker/style/css";
import _DatePicker from "antd/es/date-picker";
var _excluded = ["value", "btnArr", "onRangeChange"];

var _templateObject;

import React, { useImperativeHandle } from "react";
import moment from "moment";
import { useImmer } from "use-immer";
import styled from "styled-components";
import { $Link_COLOR } from "../common/varible";
var RangePicker = _DatePicker.RangePicker;
var Wrap = styled.div(_templateObject || (_templateObject = _taggedTemplateLiteral(["\n  span {\n    margin-right: 10px;\n    cursor: pointer;\n  }\n  .on {\n    color: ", ";\n  }\n"])), $Link_COLOR);
var rangeOptions = {};
Object.defineProperties(rangeOptions, {
  THIS_MONTH: {
    get: function get() {
      return {
        label: "本月",
        range: [moment().startOf("month"), moment()]
      };
    }
  },
  LAST_MONTH: {
    get: function get() {
      return {
        range: [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")],
        label: "上月"
      };
    }
  },
  YESTODAY: {
    get: function get() {
      return {
        range: [moment().subtract(1, "day").startOf("day"), moment().subtract(1, "day").endOf("day")],
        label: "昨天"
      };
    }
  },
  LAST_SEVEN_DAYS: {
    get: function get() {
      return {
        range: [moment().subtract(6, "day").startOf("day"), moment()],
        label: "近七天"
      };
    }
  },
  LAST_SEVEN_DAYS_WITHOUT_TODAY: {
    get: function get() {
      return {
        range: [moment().subtract(7, "day").startOf("day"), moment().subtract(1, "day").endOf("day")],
        label: "近七天"
      };
    }
  }
});

//根据父组件传的value值对当前组件state进行初始化和修改
var getDateValue = function getDateValue(targetValue) {
  return {
    range: Array.isArray(targetValue) ? targetValue : rangeOptions[targetValue].range,
    selectedBtn: Array.isArray(targetValue) ? "" : targetValue
  };
};

var Ranger = function Ranger(_ref, ref) {
  var value = _ref.value,
      btnArr = _ref.btnArr,
      onRangeChange = _ref.onRangeChange,
      others = _objectWithoutProperties(_ref, _excluded);

  var _useImmer = useImmer(getDateValue(value)),
      _useImmer2 = _slicedToArray(_useImmer, 2),
      date = _useImmer2[0],
      _setDate = _useImmer2[1];

  useImperativeHandle(ref, function () {
    return {
      setDate: function setDate() {
        var targetValue = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : value;

        _setDate(function () {
          return getDateValue(targetValue);
        });
      }
    };
  });
  return /*#__PURE__*/React.createElement(Wrap, null, btnArr.map(function (item) {
    return /*#__PURE__*/React.createElement("span", {
      className: date.selectedBtn === item ? "on" : "",
      onClick: function onClick(e) {
        _setDate(function () {
          return getDateValue(item);
        });

        onRangeChange(rangeOptions[item].range);
      },
      key: item
    }, rangeOptions[item].label);
  }), /*#__PURE__*/React.createElement(RangePicker, _extends({
    style: {
      marginLeft: "15px"
    },
    allowClear: false,
    onChange: function onChange(dates) {
      var start = dates[0];
      var end = dates[1].endOf("day");

      _setDate(function () {
        return getDateValue([start, end]);
      });

      onRangeChange([start, end]);
    }
  }, others, {
    value: date.range
  })));
};

export default /*#__PURE__*/React.forwardRef(Ranger);