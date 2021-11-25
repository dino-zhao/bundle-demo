import React from "react";

import BackwardComponent from "./components/BackwardComponent";
// import { TestApp2, TestApp3 } from "./components";
import Btn from "app2/Button";

const App = () => {
  return (
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 1</h2>
      <Btn></Btn>
      {/* <TestApp2 /> */}
      {/* <TestApp3 /> */}
      {/* <BackwardComponent
        system={{
          url: "http://localhost:3011/remoteEntry.js",
          scope: "app2",
          module: "./Button",
        }}
      /> */}
    </div>
  );
};

export default App;
