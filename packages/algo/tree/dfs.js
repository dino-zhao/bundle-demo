const { tree } = require('./buildTree')
function dfs(root) {
  if (root === null) return
  dfs(root.left)
  dfs(root.right)
  console.log(root.value)
}

dfs(tree)
