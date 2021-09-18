module.exports = (arr) => {
  //归并排序另外开空间
  //最终是要分到每个元素一个数组，然后merge
  function sort(arr1) {
    if(arr.length<2) return arr
    let mid=Math.floor((arr.length-1)/2)
    //这个地方第一个参数右侧要加1，否则两个时一直无法分解
    return merge(sort(arr.slice(0,mid+1)),sort(arr.slice(mid+1,arr.length)))
  }
  function merge(arr1, arr2) {
    let arr=[]
    while(arr1.length&&arr2.length){
      arr.push(arr1[0]>arr2[0]?arr2.shift():arr1.shift())
    }
    arr.push(...(arr1.length?arr1:arr2))
    return arr
  }

  return sort(arr)
}
