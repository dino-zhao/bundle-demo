import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "@redux/store";
import { decrement, increment } from "@redux/counter/slice";
import Query from "./Query";
export default function Counter() {
  const count = useAppSelector((state) => state.counter.value);
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
        <span>{count}</span>
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
      {/* <Query /> */}
    </div>
  );
}
