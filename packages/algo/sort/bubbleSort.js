module.exports = (arr) => {
  //冒泡排序，从头开始比较，把最大的放到最后
  //范围是第1个到最后一个
  for (let i = arr.length - 1; i > 0; i--) {
    // 实际比较时第0个到i-1
    for (let j = 0; j < i; j++) {
      if (arr[j] > arr[j + 1]) {
        ;[arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
    }
  }
  return arr
}
