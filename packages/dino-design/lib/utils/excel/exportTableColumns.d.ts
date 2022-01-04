import { ColumnType } from "antd/lib/table";
export interface ExportColumnType<T> extends ColumnType<T> {
    outputText?: (v: unknown, item: T) => string;
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
export default function exportTableColumns({ columns, dataSource, fileName, }: ExportColumns<any>): void;
