module.exports = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    // binaryInsert(arr, i)
    compareInsert(arr, i)
  }
  return arr
}
//比较插入
function compareInsert(arr, i) {
  while (arr[i - 1] > arr[i] && i > 0) {
    ;[arr[i - 1], arr[i]] = [arr[i], arr[i - 1]]
    i--
  }
}

//二分插入
//对于二分插入，查找需要log(n)，但是移动还是需要n/2,因此复杂度不变，仍未n^2
function binaryInsert(arr, i) {
  let num = arr[i],
    end = i - 1
  arr.splice(i, 1)
  let start = 0
  while (start < end) {
    let mid = Math.floor((start + end) / 2)
    if (arr[mid] === num) {
      return arr.splice(mid, 0, num)
    } else if (arr[mid] > num) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  //此时start===end
  if (arr[start] > num) {
    arr.splice(start, 0, num)
  } else {
    arr.splice(start + 1, 0, num)
  }
}
