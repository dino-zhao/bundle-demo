import React, { useEffect, useState } from "react";
import useLoadRemoteModule from "./common/useLoadRemoteModule";
import BackwardComponent from "./common/BackwardComponent";

const App = () => {
  const [log, Btn] = useLoadRemoteModule({
    url: "http://localhost:3011/remoteEntry.js",
    scope: "app2",
    modules: ["./log", "./Button"],
  });

  useEffect(() => {
    console.log(Btn);
  }, [Btn]);
  return (
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 1</h2>
      <button onClick={log?.cake}>做蛋糕1</button>
      {Btn && <Btn.default></Btn.default>}
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
