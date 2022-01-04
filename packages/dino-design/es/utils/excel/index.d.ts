export interface Sheet {
    /**
     * @description       表示excel表格的二维数组
     * @default
     */
    rows: unknown[][];
    /**
     * @description       sheet名
     * @default sheet1
     */
    sheetName?: string;
}
export interface ExcelParams {
    /**
     * @description       导出的文件名
     * @default
     */
    fileName: string;
}
export interface ExcelParamsWithSingleSheet extends ExcelParams, Sheet {
}
export interface ExcelParamsWithMultupleSheets extends ExcelParams {
    /**
     * @description       导出的sheet列表
     * @default
     */
    sheets: Sheet[];
}
export default function exportExcel(excelParams: ExcelParamsWithSingleSheet | ExcelParamsWithMultupleSheets): void;
export { default as exportTableColumns } from "./exportTableColumns";
