import cloneDeep from "lodash/cloneDeep";

export default (v: string) => {
  console.log("test1");
  console.log(cloneDeep(v));
};
