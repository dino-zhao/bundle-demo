import { cloneDeep } from "lodash";
import { cube } from "./math";
export function log(v: string) {
  console.log(cloneDeep(v + "啊啊12"));
}

log("22");
console.log(cube(2));
if ((module as any).hot) {
  (module as any).hot.accept();
}
