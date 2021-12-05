import React from "react";
import { Button } from "antd";
import exportExcel from "..";

export default function () {
  const exportE = () => {
    exportExcel({
      sheets: [
        {
          rows: [
            [5, "Bob", "22222222"],
            [5, "Bob", "wwwwwwwwwwwwww"],
          ],
        },
        {
          rows: [
            [33333, "Bob", "22222222"],
            [5, "Bob", "wwwwwwwwwwwwww"],
          ],
          sheetName: "sss",
        },
      ],
      fileName: "test",
    });
  };
  return (
    <div>
      <Button onClick={exportE}>下载多个sheet</Button>
    </div>
  );
}
