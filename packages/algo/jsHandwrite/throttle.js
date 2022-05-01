// 节流指的是一段时间内只能触发一次，
//这个的基本实现包括时间戳和定时器的,时间戳的实现,只要当前时间-初始时间>time就执行,结果是首次执行,最后一次不执行
// 定时器的是第一次触发定时,结果是第一次不执行,最后一次执行

//定时器版本添加一个flag标记首次

function throttle(fn, time) {
  let timer = null;
  let isFirst = true;
  return function (...args) {
    if (isFirst) {
      fn.apply(this, args);
      isFirst = false;
    }
    if (timer === null) {
      timer = setTimeout(() => {
        timer = null;
        fn.apply(this, args);
      }, time);
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

function throttleWithStamp(fn, timeout) {
  //最后一次不执行
  let pre = Date.now();
  return function (...args) {
    const now = Date.now();
    if (now - pre >= timeout) {
      fn.call(this, ...args);
      pre = now;
    }
  };
}
