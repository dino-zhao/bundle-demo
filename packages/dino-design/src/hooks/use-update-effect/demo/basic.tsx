import React, { useEffect, useState } from "react";
import useUpdateEffect from "..";
export default function () {
  const [count, setCount] = useState(0);
  const [effectCount, setEffectCount] = useState(0);
  const [updateEffectCount, setUpdateEffectCount] = useState(0);
  useEffect(() => {
    setEffectCount((c) => c + 1);
    return (() => {
      console.log("test");
    })();
  }, [count]);

  useUpdateEffect(() => {
    setUpdateEffectCount((c) => c + 1);
    console.log("注册");
    return () => {
      console.log("销毁");
    };
  }, [count]);

  return (
    <div>
      <p>effectCount: {effectCount}</p>
      <p>updateEffectCount: {updateEffectCount}</p>
      <p>
        <button type="button" onClick={() => setCount((c) => c + 1)}>
          reRender
        </button>
      </p>
    </div>
  );
}
