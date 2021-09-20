import { cloneDeep } from "lodash";
import { add } from "ramda";
import { cube } from "./math";
export function log(v: string) {
  console.log(cloneDeep(v + "啊啊12"));
}

console.log(add(1, 2));
console.log(cube(2));
if ((module as any).hot) {
  (module as any).hot.accept();
}
