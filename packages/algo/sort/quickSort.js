module.exports = (arr) => {
  function sort(l, r) {
    //由于l和r的来源，这里l可能大于r
    if (l >= r) {
      return
    }
    let pivot = arr[l], //挖坑
      left = l,
      right = r
    while (left < right) {
      //此时第0个位置为空，则遇到右边小于pivot的就移动过来
      //后面需要等于号，不然如果有重复数据永远不会走出循环
      while (left < right && arr[right] >= pivot) {
        right--
      }
      arr[left] = arr[right]
      //此时right的位子为空
      while (left < right && arr[left] <= pivot) {
        left++
      }
      arr[right] = arr[left]
    }
    //此时left===right
    arr[left] = pivot
    sort(l, left - 1)
    sort(left + 1, r)
  }
  sort(0, arr.length - 1)
  return arr
}
