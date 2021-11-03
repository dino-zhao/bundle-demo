import React, { useEffect, useState } from "react";
// const RemoteButton = React.lazy(() => import("app2/Button"));

function loadComponent(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

function loadFn(scope, module) {
  return async () => {
    // Initializes the share scope. This fills it with known provided modules from this build and all remotes
    await __webpack_init_sharing__("default");

    const container = window[scope]; // or get the container somewhere else
    // Initialize the container, it may provide shared modules
    if (!container) return;
    await container.init(__webpack_share_scopes__.default);
    const factory = await window[scope].get(module);
    const Module = factory();
    return Module;
  };
}

const useDynamicScript = (args) => {
  const [ready, setReady] = React.useState(false);
  const [failed, setFailed] = React.useState(false);

  React.useEffect(() => {
    if (!args.url) {
      return;
    }

    const element = document.createElement("script");

    element.src = args.url;
    element.type = "text/javascript";
    element.async = true;

    setReady(false);
    setFailed(false);

    element.onload = () => {
      console.log(`Dynamic Script Loaded: ${args.url}`);
      setReady(true);
    };

    element.onerror = () => {
      console.error(`Dynamic Script Error: ${args.url}`);
      setReady(false);
      setFailed(true);
    };

    document.head.appendChild(element);

    return () => {
      console.log(`Dynamic Script Removed: ${args.url}`);
      document.head.removeChild(element);
    };
  }, [args.url]);

  return {
    ready,
    failed,
  };
};

function System(props) {
  const { ready, failed } = useDynamicScript({
    url: props.system && props.system.url,
  });

  if (!props.system) {
    return <h2>Not system specified</h2>;
  }
  if (failed) {
    return <h2>Failed to load dynamic script: {props.system.url}</h2>;
  }
  if (!ready) {
    return <h2>Loading dynamic script: {props.system.url}</h2>;
  }

  const Component = React.lazy(
    loadComponent(props.system.scope, props.system.module)
  );

  return (
    <React.Suspense fallback="Loading System">
      <Component />
    </React.Suspense>
  );
}

function useRemoteFn({ url, scope, module }) {
  const { ready, failed } = useDynamicScript({
    url,
  });
  const [c, setC] = useState();
  useEffect(() => {
    loadFn(scope, module)().then((res) => {
      if (!res) return;
      console.log(res);
      res.default(222);
      res.cake();
      setC(res);
    });
  });
  if (!ready || failed) {
    return;
  }

  return c;
}

const App = () => {
  const c = useRemoteFn({
    url: "http://localhost:3011/remoteEntry.js",
    scope: "app2",
    module: "./log",
  });
  useEffect(() => {
    console.log(c?.cake);
  }, [c]);
  return (
    <div>
      <h1>Basic Host-Remote</h1>
      <h2>App 1</h2>
      <button onClick={c?.cake}>做蛋糕</button>
      {/* <React.Suspense fallback="Loading Button">
        <RemoteButton />
      </React.Suspense> */}
      <System
        system={{
          url: "http://localhost:3011/remoteEntry.js",
          scope: "app2",
          module: "./Button",
        }}
      />
    </div>
  );
};

export default App;
