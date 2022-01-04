export default function saveFile(buffer, fileName) {
  var a = document.createElement("a");
  var blob = new Blob([buffer], {
    type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
  });
  var url = URL.createObjectURL(blob);
  a.href = url;
  a.download = "".concat(fileName, ".xlsx");
  document.body.appendChild(a);
  a.click();
  queueMicrotask(function () {
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  });
}