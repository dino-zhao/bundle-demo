function create(ctr, ...args) {
  const obj = Object.create(ctr.prototype);
  const result = ctr.apply(obj, args);
  return typeof result === "object" && result !== null ? result : obj;
}

function FF(name) {
  this.name = name;
}
console.log(CNew(FF, "小红").name);
