const arr = [1, 4, 52, 1, 32, 434, 4566, 0, 7, 8, 54, 5343, 2, 23, 5, 6, 7];

function sort(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let mid = Math.floor((arr.length - 1) / 2);
  return merge(sort(arr.slice(0, mid + 1)), sort(arr.slice(mid + 1)));
}

function merge(arr1, arr2) {
  let arr = [];
  while (arr1.length && arr2.length) {
    arr.push(arr1[0] < arr2[0] ? arr1.shift() : arr2.shift());
  }
  return arr.concat(arr1.length ? arr1 : arr2);
}

console.log(sort(arr));
