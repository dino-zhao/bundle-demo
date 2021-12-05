import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import ExcelJS from "exceljs";
import saveFile from "./saveFile";
export default function exportExcel(excelParams) {
  var workbook = new ExcelJS.Workbook();
  var fileName = excelParams.fileName;

  if ("sheets" in excelParams) {
    var sheets = excelParams.sheets;

    for (var i = 0; i < sheets.length; i++) {
      var _sheets$i = sheets[i],
          sheetName = _sheets$i.sheetName,
          rows = _sheets$i.rows;
      addSheet({
        sheetName: sheetName || "sheet".concat(i + 1),
        rows: rows
      });
    }
  } else {
    var _sheetName = excelParams.sheetName,
        _rows = excelParams.rows;
    addSheet({
      rows: _rows,
      sheetName: _sheetName || "sheet1"
    });
  }

  workbook.creator = "Me";
  workbook.xlsx.writeBuffer().then(function (data) {
    saveFile(data, fileName);
  });

  function addSheet(_ref) {
    var sheetName = _ref.sheetName,
        rows = _ref.rows;
    var worksheet = workbook.addWorksheet(sheetName, {
      properties: {}
    });
    var columns = [];

    if (rows.length > 0 && rows[0].length > 0) {
      var length = rows[0].length;

      var _loop = function _loop(_i) {
        columns.push({
          width: Math.max.apply(Math, _toConsumableArray(rows.map(function (item) {
            return String(item[_i]).length + 2;
          }).concat(10)))
        });
      };

      for (var _i = 0; _i < length; _i++) {
        _loop(_i);
      }
    }

    worksheet.columns = columns;
    worksheet.addRows(rows);
  }
}
export { default as exportTableColumns } from "./exportTableColumns";