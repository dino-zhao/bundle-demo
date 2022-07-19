function create(C, ...args) {
  const obj = {};

  Object.setPrototypeOf(obj, C.prototype);

  const res = C.apply(obj, args);

  return typeof 
}
