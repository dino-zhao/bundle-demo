import React, { useState } from "react";
import { Button } from "antd";
import midImg from "@/assets/m.jpg";

import { useAppSelector, useAppDispatch } from "@redux/store";
import { decrement, increment, testAsync } from "@/redux/countSlice";

export default function Counter() {
  const { value, loading } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const [state, setState] = useState(0);
  return (
    <div>
      <img style={{ display: "none" }} src={midImg} alt="" />
      <div>
        <Button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment12
        </Button>
        <span>{value}</span>
        <Button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </Button>
      </div>
      <div>
        <span onClick={() => setState((c) => c + 1)}>{state}</span>
        <input type="text" />
      </div>
      <div
        onClick={() => {
          dispatch(testAsync());
        }}
      >
        异步调用 {loading ? "调用中" : "完成"}
      </div>
    </div>
  );
}
