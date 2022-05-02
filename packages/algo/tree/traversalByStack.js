const { tree } = require("./buildTree");
function traversalByStack(current) {
  const stk = [];
  while (current || stk.length) {
    //不断遍历左子树直到为null
    while (current) {
      // console.log(current.value); //先序
      stk.push(current);
      current = current.left;
    }
    //出栈最后一个入栈的，这个出栈的节点就是最左边子树的根节点，然后从右子树开始重复上个过程
    current = stk.pop();
    console.log(current.value);
    // console.log(current.value); //中序
    current = current.right;
  }
}

function postOrderTraversal(current) {
  const stk = [],
    res = [];
  while (current || stk.length) {
    while (current) {
      res.push(current.value);
      stk.push(current);
      current = current.right;
    }
    current = stk.pop();
    current = current.left;
  }
  return res.reverse();
}
console.log(postOrderTraversal(tree));
// traversalByStack(tree)
