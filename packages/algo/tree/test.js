const { tree } = require("./buildTree");
function search(root) {
  if (root === null) return [];
  let cur = [root],
    res = [];
  while (cur.length) {
    const curNodes = [];
    while (cur.length) {
      const node = cur.shift();
      res.push(node.value);
      node.left && curNodes.push(node.left);
      node.right && curNodes.push(node.right);
    }
    cur = curNodes;
  }
  return res;
}
console.log(search(tree));
