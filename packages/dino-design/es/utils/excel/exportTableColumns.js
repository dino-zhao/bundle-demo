import _toConsumableArray from "@babel/runtime/helpers/toConsumableArray";
import exportExcel from ".";
export default function exportTableColumns(_ref) {
  var columns = _ref.columns,
      dataSource = _ref.dataSource,
      fileName = _ref.fileName;
  exportExcel({
    sheets: [{
      rows: transformDataForExport({
        columns: columns,
        dataSource: dataSource
      })
    }],
    fileName: fileName
  });
}

function transformDataForExport(_ref2) {
  var columns = _ref2.columns,
      dataSource = _ref2.dataSource;
  var content = dataSource.map(function (item, index) {
    return columns.map(function (column) {
      var _ref3, _column$outputText;

      var fn = (_ref3 = (_column$outputText = column.outputText) !== null && _column$outputText !== void 0 ? _column$outputText : column.render) !== null && _ref3 !== void 0 ? _ref3 : function (v) {
        return v;
      };
      return fn(item[column.dataIndex], item, index);
    });
  });
  return [columns.map(function (item) {
    return item.title;
  })].concat(_toConsumableArray(content));
}