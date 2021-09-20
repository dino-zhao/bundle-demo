import React from "react";
import src from "./images/m.jpg";

export default function () {
  return (
    <div>
      <div className="hello">hello world</div>

      <div>
        <img src={src} alt="" />
      </div>
    </div>
  );
}
