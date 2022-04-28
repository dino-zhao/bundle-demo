"use strict";
//https://github.com/koajs/compose/blob/master/index.js
module.exports = compose;
//参数是函数组成的数组
function compose(middleware) {
  //这里的next就是bind后的dispatch
  //源码 https://www.jianshu.com/p/b37d2afc9082
  return function (context, next) {
    return dispatch(0);
    function dispatch(i) {
      let fn = middleware[i];
      if (i === middleware.length) fn = next;
      if (!fn) return Promise.resolve();
      try {
        return Promise.resolve(fn(context, dispatch.bind(null, i + 1)));
      } catch (err) {
        return Promise.reject(err);
      }
    }
  };
}
