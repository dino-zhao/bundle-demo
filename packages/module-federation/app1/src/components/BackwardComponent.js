import React from "react";
import useDynamicScript from "../common/useDynamicScript";
import { loadModule } from "../common/loadModules";
export default function BackwardComponent(props) {
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
    loadModule(props.system.scope, props.system.module)
  );

  return (
    <React.Suspense fallback="Loading BackwardComponent">
      <Component />
    </React.Suspense>
  );
}
