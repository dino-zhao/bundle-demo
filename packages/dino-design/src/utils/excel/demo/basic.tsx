import React from "react";
import { Button } from "antd";
import exportExcel from "..";

export default function () {
  const exportE = () => {
    exportExcel({
      rows: [
        [5, "Bob", "22222222"],
        [5, "Bob", "wwwwwwwwwwwwww"],
      ],
      fileName: "test",
    });
  };
  return (
    <div>
      <Button onClick={exportE}>下载单个sheet</Button>
    </div>
  );
}
