const { tree } = require("./buildTree");
function search(root) {
  if (root === null) return [];
  let res = [],
    queue = [root];

  while (queue.length) {
    let innerQueue = [];
    while (queue.length) {
      let cur = queue.shift();
      res.push(cur.value);
      cur.left && innerQueue.push(cur.left);
      cur.right && innerQueue.push(cur.right);
    }
    queue = innerQueue;
  }
  return res;
}
console.log(search(tree));
