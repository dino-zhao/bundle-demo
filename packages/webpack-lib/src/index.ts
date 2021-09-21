import { cloneDeep } from "lodash";
import { add as randaAdd } from "ramda";
import { cube } from "./math";
export function log(v: string) {
  console.log(cloneDeep(v + "啊啊12"));
}

export function add(v: number) {
  return randaAdd(v, v);
}

console.log(cube(2));
if ((module as any).hot) {
  (module as any).hot.accept();
}
