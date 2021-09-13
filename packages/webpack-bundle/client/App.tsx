import React, { useState } from "react";
import { hot } from "react-hot-loader/root";
function App() {
  const [state, setState] = useState(0);
  return (
    <div
      onClick={() => {
        setState((c) => c + 1);
      }}
    >
      hello world555 :+{state}
    </div>
  );
}
export default hot(App);
