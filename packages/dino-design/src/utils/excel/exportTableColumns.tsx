import { ColumnType } from "antd/lib/table";
import exportExcel from ".";
export type DataSource = Record<string, any>;
export interface ExportColumnType<T> extends ColumnType<T> {
  outputText?: (v: unknown, item: DataSource) => string;
}

export interface TransformParams<T> {
  /**
   * @description       添加自定义属性的Table.ColumnType
   * @default
   */
  columns: ExportColumnType<T>[];
  /**
   * @description       即Table的dataSource
   * @default
   */
  dataSource: T[];
}

export interface ExportColumns<T> extends TransformParams<T> {
  /**
   * @description       导出的文件名
   * @default
   */
  fileName: string;
}

export default function exportTableColumns({
  columns,
  dataSource,
  fileName,
}: ExportColumns<DataSource>) {
  exportExcel({
    rows: transformDataForExport({ columns, dataSource }),
    fileName,
  });
}

function transformDataForExport({
  columns,
  dataSource,
}: TransformParams<DataSource>) {
  const content = dataSource.map((item, index) => {
    return columns.map((column) => {
      let fn = column.outputText ?? column.render ?? ((v) => v);
      return fn(item[column.dataIndex as string], item, index);
    });
  });
  return [columns.map((item) => item.title), ...content];
}
