function myNew(constructor, ...args) {
  let obj = {};
  Object.setPrototypeOf(obj, constructor.prototype);
  let res = constructor.call(obj, ...args);
  if (typeof res === "object") {
    return res;
  }
  return obj;
}
