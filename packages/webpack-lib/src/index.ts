import { cloneDeep } from "lodash";
import { add } from "ramda";

export default function log(v: string) {
  console.log(cloneDeep(v + "啊啊1"));
}

console.log(add(1, 2));
if ((module as any).hot) {
  (module as any).hot.accept();
}
