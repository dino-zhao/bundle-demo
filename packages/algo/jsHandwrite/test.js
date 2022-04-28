function myNew(Cons, ...args) {
  const obj = {};
  Object.setPrototypeOf(obj, Cons.protoType);
  const result = Cons.call(obj, ...args) ?? "";
  return typeof result === "object" ? result : obj;
}
