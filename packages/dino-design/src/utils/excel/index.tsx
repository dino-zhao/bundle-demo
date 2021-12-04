import ExcelJS, { Buffer } from "exceljs";
export interface Rows {
  /**
   * @description       表示excel表格的二维数组
   * @default
   */
  rows: unknown[][];
  /**
   * @description       导出的文件名
   * @default
   */
  fileName: string;
}

export default function exportExcel({ rows, fileName }: Rows) {
  const workbook = new ExcelJS.Workbook();
  const worksheet = workbook.addWorksheet("My Sheet", {
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
  workbook.creator = "Me";
  workbook.xlsx.writeBuffer().then((data) => {
    saveFile(data, fileName);
  });
}

function saveFile(buffer: Buffer, fileName: string) {
  const a = document.createElement("a");
  const blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  });
  const url = URL.createObjectURL(blob);
  a.href = url;
  a.download = `${fileName}.xlsx`;
  document.body.appendChild(a);
  a.click();
  queueMicrotask(() => {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  });
}

export { default as exportTableColumns } from "./exportTableColumns";
