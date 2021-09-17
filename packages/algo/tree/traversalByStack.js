const { tree } = require('./buildTree')
function traversalByStack(current) {
  const stk = []
  while (current || stk.length) {
    while (current) {
      // console.log(current.value); //先序
      stk.push(current)
      current = current.left
    }
    current = stk.pop()
    console.log(current.value)
    // console.log(current.value); //中序
    current = current.right
  }
}

function postOrderTraversal(current) {
  const stk = [],
    res = []
  while (current || stk.length) {
    while (current) {
      res.push(current.value)
      stk.push(current)
      current = current.right
    }
    current = stk.pop()
    current = current.left
  }
  return res.reverse()
}
console.log(postOrderTraversal(tree))
// traversalByStack(tree)
