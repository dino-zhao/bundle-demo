"use strict";
//https://github.com/koajs/compose/blob/master/index.js
module.exports = compose;
//参数是函数组成的数组
function compose(middleware) {
  //源码 https://zhuanlan.zhihu.com/p/417163957
  //这里的context就是下面每次使用的context，next一般用于处理res
  return function (context, next) {
    return dispatch(0);
    function dispatch(i) {
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      //每个fn的第二个参数都是插件的next函数，会调用下一个插件
      return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
    }
  };
}

async function A(context, next) {
  console.log("A before");
  //这里的next会调用下一个插件，当下一个插件执行结束才会往下执行，因此洋葱模型回溯时是倒叙。
  await next();
  console.log("A after");
}

async function B(context, next) {
  console.log("B before");
  await next();
  console.log("B after");
}

async function C(context, next) {
  console.log("C before");
  await next();
  console.log("C after");
}

compose([A, B, C])(null, async (...args) => {
  console.log(...args);
});
