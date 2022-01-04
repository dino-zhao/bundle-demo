import ExcelJS from "exceljs";
import saveFile from "./saveFile";

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

export interface ExcelParamsWithSingleSheet extends ExcelParams, Sheet {}
export interface ExcelParamsWithMultupleSheets extends ExcelParams {
  /**
   * @description       导出的sheet列表
   * @default
   */

  sheets: Sheet[];
}

export default function exportExcel(
  excelParams: ExcelParamsWithSingleSheet | ExcelParamsWithMultupleSheets
) {
  const workbook = new ExcelJS.Workbook();
  const { fileName } = excelParams;

  if ("sheets" in excelParams) {
    const { sheets } = excelParams;
    for (let i = 0; i < sheets.length; i++) {
      let { sheetName, rows } = sheets[i];
      addSheet({
        sheetName: sheetName || `sheet${i + 1}`,
        rows,
      });
    }
  } else {
    const { sheetName, rows } = excelParams;
    addSheet({
      rows,
      sheetName: sheetName || "sheet1",
    });
  }

  workbook.creator = "Me";
  workbook.xlsx.writeBuffer().then((data) => {
    saveFile(data, fileName);
  });

  function addSheet({ sheetName, rows }: Sheet) {
    const worksheet = workbook.addWorksheet(sheetName, {
      properties: {},
    });
    let columns = [];
    if (rows.length > 0 && rows[0].length > 0) {
      let length = rows[0].length;
      for (let i = 0; i < length; i++) {
        columns.push({
          width: Math.max(
            ...rows.map((item) => String(item[i]).length + 2).concat(10)
          ),
        });
      }
    }
    worksheet.columns = columns;
    worksheet.addRows(rows);
  }
}

export { default as exportTableColumns } from "./exportTableColumns";
