import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
import Home from "./components/Home";
import { Spin } from "antd";
const store = {
  state: { a: 2 },
  setObj(v: number) {
    store.state = { a: store.state.a + v };
  },
}; //模拟redux
function App() {
  const [, setState] = useState(1);
  const setObj = (v: number) => {
    store.setObj(v);
    setState((c) => c + 1);
  };
  return (
    <React.Suspense fallback={<Spin />}>
      <Home state={store.state} setObj={setObj} />
    </React.Suspense>
  );
}
export default hot(App);
