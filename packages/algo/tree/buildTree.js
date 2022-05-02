class TreeNode {
  left = null;
  right = null;
  constructor(v) {
    this.value = v;
  }
}

function buildTree(nums) {
  //每次取中间作为顶点
  if (nums.length === 0) return null;
  let mid = Math.floor((nums.length - 1) / 2);
  let cur = new TreeNode(nums[mid]);
  cur.left = buildTree(nums.slice(0, mid));
  cur.right = buildTree(nums.slice(mid + 1));
  return cur;
}
exports.tree = buildTree([1, 2, 3, 4, 5, 6, 7]);
//   4
// 2   6
//1 3 5  7
