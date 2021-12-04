import React from "react";
import { Button } from "antd";
import exportTableColumns, { ExportColumnType } from "../exportTableColumns";
interface DataType {
  id: string;
  age: number;
  name: string;
}

export default function () {
  const exportE = () => {
    const dataSource: DataType[] = [
      {
        id: "111",
        age: 2,
        name: "小明",
      },
    ];
    const columns: ExportColumnType<DataType>[] = [
      {
        title: "id",
        dataIndex: "id",
      },
      {
        title: "性名",
        dataIndex: "name",
        render: (i, item) => "叫" + i + item.id,
      },
      {
        title: "年龄",
        dataIndex: "age",
        outputText: (i) => i + "岁",
      },
    ];

    exportTableColumns({
      columns: columns as any,
      dataSource,
      fileName: "test",
    });
  };
  return (
    <div>
      <Button onClick={exportE}>下载ColumnType格式的数据</Button>
    </div>
  );
}
