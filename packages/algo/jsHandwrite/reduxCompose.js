//compose(f1, f2, f3)(1);等价于f1(f2(f3(1)))
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  //第一轮 f1 f2 => (a)=>f1(f2(a))
  //第二轮 (a)=>f1(f2(a)) f3 => (a)=>f1(f2(f3(a)))

  return funcs.reduce((a, b) => {
    return (...args) => a(b(...args));
  });
}

function f1(v) {
  const cur = "f1" + v;
  console.log(cur);
  return cur;
}
function f2(v) {
  const cur = "f2" + v;
  console.log(cur);
  return cur;
}
function f3(v) {
  const cur = "f3" + v;
  console.log(cur);
  return cur;
}

compose(f1, f2, f3)("222");
