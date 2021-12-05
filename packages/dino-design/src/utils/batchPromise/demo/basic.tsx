import React, { useState } from "react";
import batchPromise from "..";
import { Button } from "antd";

export default function () {
  const [state, setState] = useState(new Array(20).fill(1).map((k, v) => v));
  const exec = () => {
    batchPromise({
      paramArr: state,
      iteratorFun: fetchData,
    }).then((res) => {
      setState(res);
    });

    function fetchData(v: number): Promise<number> {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(v * 2);
        }, 300);
      });
    }
  };

  return (
    <div>
      <Button onClick={exec}>发起请求</Button>
      <div>点击按钮后将数据异步批量*2</div>
      <div>{state.join()}</div>
    </div>
  );
}
