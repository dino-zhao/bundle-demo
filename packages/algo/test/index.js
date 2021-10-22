const map = new Map([
  [
    ["a", "b"],
    function () {
      console.log("1");
    },
  ],
  [
    ["c"],
    function () {
      console.log("2");
    },
  ],
]);
const arr = ["c", "a"];
for (let [k, v] of map.entries()) {
  if (k.some((i) => arr.includes(i))) {
    v();
  }
}
