const { tree } = require('./buildTree')

function levelOrder(root) {
  let res = [],
    cur = [root]
  while (cur.length) {
    let curNodes = []
    while (cur.length) {
      let node = cur.shift()
      res.push(node.value)
      node.left && curNodes.push(node.left)
      node.right && curNodes.push(node.right)
    }
    cur = curNodes
  }

  return res
}
console.log(levelOrder(tree))
