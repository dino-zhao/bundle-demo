module.exports = (arr) => {
  //当把数组当作树看待时，应在前面补充一个元素，使得下标一致,这样数组的最下下标为1
  arr.unshift(0)
  //首先将原序列调整为大根堆
  buildMaxHeap(arr)
  //从大根堆最后一个开始和第一个元素交换，即将最大元素调整至序列最后
  for (let i = arr.length - 1; i > 1; i--) {
    ;[arr[i], arr[1]] = [arr[1], arr[i]]
    //  然后把除了最后一个元素的序列调整成大根堆，重复以上过程直到子序列还剩最后一个元素，排序完成
    heapAjust(arr, 1, i - 1)
  }
  arr.shift()
  return arr
}
//调整以第k个元素为根的子树为大根堆
const heapAjust = (arr, k, end) => {
  //arr为原数组，k为指定待调整子树的根节点，len为调整范围，创建大根堆时不是必须的，主要是排序时使用
  //将根节点调整为该子树的最大值
  arr[0] = arr[k] //先把当前子树根节点暂存，随后就可以将该位置用更大的值覆盖
  for (let i = 2 * k; i <= end; i *= 2) {
    if (i < end && arr[i] < arr[i + 1]) {
      //如果有右子树且右子树大于左子树，则用右子树和当前父节点比较
      i += 1
    }
    if (arr[0] >= arr[i]) {
      break
    } else {
      arr[k] = arr[i] //较大的子结点成为根节点
      k = i //继续以新的k为根节点继续比较
    }
  }
  //最后k的位置是最终应该放的值
  arr[k] = arr[0]
}
//建立大根堆,大根堆中的父节点大于等于子结点
const buildMaxHeap = (arr) => {
  //将所有的非终端节点，从后往前依次遍历，使以各个节点为根的子树变为大根堆，
  //其中最后一个非终端节点为：不大于序列长度n/2的整数，此时n=arr.length-1

  //注意条件没用等号，因为0位置是后来补的
  for (let i = Math.floor((arr.length - 1) / 2); i > 0; i--) {
    heapAjust(arr, i, arr.length - 1)
  }
}
