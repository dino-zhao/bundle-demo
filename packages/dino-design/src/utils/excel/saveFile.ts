import { Buffer } from "exceljs";

export default function saveFile(buffer: Buffer, fileName: string) {
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
