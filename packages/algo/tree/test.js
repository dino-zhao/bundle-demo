const { tree } = require("./buildTree");
function search(root) {
  if (root === null) return [];
  let queue = [root],
    res = [];
  while (queue.length) {
    let nextQueue = [];
    while (queue.length) {
      let cur = queue.shift();
      res.push(cur.value);
      cur.left && nextQueue.push(cur.left);
      cur.right && nextQueue.push(cur.right);
    }
    queue = nextQueue;
  }
  return res;
}

console.log(search(tree));
