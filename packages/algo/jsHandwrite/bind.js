//bind的参数和call一样，而且要返回一个函数
Function.prototype.myBind = function (ctx, ...args) {
  const context = ctx ?? globalThis
  return (...params)=> {
    this.apply(context, args.concat(params))
  }
}
var obj = {
  name: '小红',
}

function sayName(age, height) {
  return this.name + age + height
}

console.log(sayName.bind(obj, 1)(2))
