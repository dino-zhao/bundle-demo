import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@redux/store";
import { decrement, increment, testAsync } from "@redux/counter/slice";
export default function Counter() {
  const { value, loading } = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();
  const [state, setState] = useState(0);
  return (
    <div>
      <div>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment111
        </button>
        <span>{value}</span>
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
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
