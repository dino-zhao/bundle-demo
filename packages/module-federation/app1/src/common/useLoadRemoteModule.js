import { useState, useEffect } from "react";
import useDynamicScript from "./useDynamicScript";
import loadModules from "./loadModules";

export default function useLoadRemoteModule({ url, scope, modules }) {
  const { ready, failed } = useDynamicScript({
    url,
  });
  const [res, setRes] = useState([]);
  useEffect(() => {
    if (ready) {
      loadModules(scope, modules)().then((res) => {
        setRes(res);
      });
    }
  }, [ready]);
  if (!ready || failed) {
    return [];
  }
  return res;
}
