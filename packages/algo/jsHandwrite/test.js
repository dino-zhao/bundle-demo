function throttle(fn, timeout) {
  //如果不要第一次
  let pre = Date.now();
  return function (...args) {
    const now = Date.now();
    if (now - pre >= timeout) {
      fn.call(this, ...args);
      pre = now;
    }
  };
}
const trigger = throttle((number) => {
  console.log(number);
  console.timeLog();
}, 2000);
setInterval(() => {
  trigger(1);
}, 1000);
console.time();
