module.exports = (arr) => {
  //限制范围
  for (let i = arr.length - 1; i > 0; i--) {
    let max = 0
    //在范围内找最大值
    for (let j = 1; j <= i; j++) {
      if (arr[max] < arr[j]) {
        max = j
      }
    }
    ;[arr[max], arr[i]] = [arr[i], arr[max]]
  }
  return arr
}
