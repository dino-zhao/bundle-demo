// 防抖，即事件停止触发后一段时间执行，如果这段时间中间再次触发会重新计时
//返回一个函数，先清除之前遗留的定时器，然后设置新的定时器
function debounce(fn, time) {
  timer = null
  return function (...args) {
    clearTimeout(timer)
    timer = setTimeout(fn, times, ...args)
  }
}
let fn = debounce((size) => {
  console.timeEnd()
  console.log(size)
}, 2000)
const interval = setInterval(() => {
  console.log('调用')
  fn(1)
}, 1000)

setTimeout(() => {
  clearInterval(interval)
}, 3000)
console.time()
