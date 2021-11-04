import React from "react";

export default function TestApp3() {
  return (
    <button
      onClick={() => {
        import("app3/tools").then((res) => {
          res.logWitha(222);
        });
      }}
    >
      55555
    </button>
  );
}
