Function.prototype.apply = function (ctx, ...params) {
  const context = ctx ?? globalThis;
  context.fn = this;
  return context.fn(...params);
};
