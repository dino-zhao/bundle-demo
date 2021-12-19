const arr = [1, 4, 52, 1, 32, 434, 4566, 0, 7, 8, 54, 5343, 2, 23, 5, 6, 7];

function sort(arr) {
  arr.unshift(0);
  buildHeap(arr);
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[1], arr[i]] = [arr[i], arr[1]];
    ajustHeap(arr, 1, i - 1);
  }
  return arr;
}

function buildHeap(arr) {
  for (let i = Math.floor(arr.length - 1); i > 0; i--) {
    ajustHeap(arr, i, arr.length - 1);
  }
}

function ajustHeap(arr, cur, end) {
  arr[0] = arr[cur];
  for (let i = 2 * cur; i <= end; i *= 2) {
    if (i < end && arr[i] < arr[i + 1]) {
      i++;
    }
    if (arr[i] <= arr[0]) {
      break;
    } else {
      arr[cur] = arr[i];
      cur = i;
    }
  }
  arr[cur] = arr[0];
}

console.log(sort(arr));
