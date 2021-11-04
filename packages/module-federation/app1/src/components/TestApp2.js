import React, { useEffect } from "react";
import useLoadRemoteModule from "../common/useLoadRemoteModule";
export default function TestApp2() {
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
      <button onClick={log?.cake}>做蛋糕1</button>
      {Btn && <Btn.default></Btn.default>}
    </div>
  );
}
