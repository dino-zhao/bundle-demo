import React, { useEffect, useState } from "react";
import { hot } from "react-hot-loader/root";
import { useStore } from "react-redux";
import Home, { ContextType } from "./components/Home";
let store = {
  state: { a: 2 },
  setObj(v: number) {
    store.state = { a: store.state.a + v };
  },
}; //模拟redux
function App() {
  const [state, setState] = useState(1);
  const setObj = (v: number) => {
    store.setObj(v);
    setState((c) => c + 1);
  };
  return <Home state={store.state} setObj={setObj} />;
}
export default hot(App);
