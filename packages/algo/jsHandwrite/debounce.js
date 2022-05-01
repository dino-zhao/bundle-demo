// 防抖，即事件停止触发后一段时间执行，如果这段时间中间再次触发会重新计时
//返回一个函数，先清除之前遗留的定时器，然后设置新的定时器
function debounce(fn, timeout) {
  let timer = null;
  return function (...args) {
    //每次调用都要设置新的定时器，如果之前已经设置过了那就清理，没设置过清理也没关系
    clearTimeout(timer);
    timer = setTimeout(fn, timeout, ...args);
  };
}
let fn = debounce((size) => {
  console.timeEnd();
  console.log(size);
}, 2000);
const interval = setInterval(() => {
  console.log("调用");
  fn(1);
}, 1000);

setTimeout(() => {
  clearInterval(interval);
}, 3000);
console.time();
