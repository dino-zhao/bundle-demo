import React from "react";

import BackwardComponent from "./components/BackwardComponent";
// import { TestApp2, TestApp3 } from "./components";
const Btn = React.lazy(() => import("app2/Button"));
import ErrorBoundary from "./ErrorBoundary";
// import Btn from "app2/Button";
const App = () => {
  return (
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 1</h2>
      <ErrorBoundary>
        <React.Suspense fallback={<div>loading...</div>}>
          <Btn></Btn>
        </React.Suspense>
      </ErrorBoundary>

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
