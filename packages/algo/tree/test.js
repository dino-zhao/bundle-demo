const { tree } = require("./buildTree");
function search(root) {
  if (root === null) return [];
  let queue = [root],
    res = [root.value];
  while (queue.length) {
    console.log(queue.map((i) => i.value));
    let temps = [];
    while (queue.length) {
      let cur = queue.shift();
      cur.left && temps.push(cur.left);
      cur.right && temps.push(cur.right);
    }
    res.push(...temps.map((i) => i.value));
    queue = temps;
  }
  return res;
}

console.log(search(tree));
