const MAP_TAG = "[object Map]";
const SET_TAG = "[object Set]";
const OBJECT_TAG = "[object Object]";
const ARRAY_TAG = "[object Array]";

const NUMBER_TAG = "[object Number]";
const BOOLEAN_TAG = "[object Boolean]";
const STRING_TAG = "[object String]";
const SYMBOL_TAG = "[object Symbol]";
const FUNCTION_TAG = "[object Function]";
const BIGINT_TAG = "[object BigInt]";
const ERROR_TAG = "[object Error]";
const REG_EXP_TAG = "[object RegExp]";
const DATE_TAG = "[object Date]";
const NULL_TAG = "[object Null]";
const UNDEFINED_TAG = "[object Undefined]";

// 可以继续遍历克隆的类型
const deepCloneableTags = [MAP_TAG, SET_TAG, OBJECT_TAG, ARRAY_TAG];

/**
 * 复制函数
 * @param {*} func 目标函数
 */
function cloneFunction(func) {
  const paramReg = /(?<=\().+(?=\)\s+{)/; // 参数正则
  const bodyReg = /(?<={)(.|\n)+(?=})/m; // 函数体正则
  const funcString = func.toString(); // 获取函数字符串

  // 有原型表示是普通函数，否则是箭头函数
  if (func.prototype) {
    const param = paramReg.exec(funcString);
    const body = bodyReg.exec(funcString);

    if (body) {
      if (param) {
        const args = param[0].split(",");
        return new Function(...args, body[0]);
      }
      return new Function(body[0]);
    } else {
      return null;
    }
  } else {
    return eval(funcString);
  }
}

/**
 * 克隆正则表达式
 * @param {*} target 正则对象
 * @returns
 */
function cloneRegExp(regexp) {
  const reFlags = /\w*$/;
  const Ctor = regexp.constructor;
  const result = new Ctor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

/**
 * 克隆其它不需要深克隆的类型
 * @param {*} target 目标
 * @param {*} type 类型
 * @returns
 */
function cloneOtherType(target, type) {
  const Ctor = target.constructor;
  switch (type) {
    case BOOLEAN_TAG:
    case NUMBER_TAG:
    case STRING_TAG:
    case ERROR_TAG:
    case DATE_TAG:
      return new Ctor(target);
    case SYMBOL_TAG:
    case BIGINT_TAG:
      return Object(target.constructor.prototype.valueOf.call(target));
    case REG_EXP_TAG:
      return cloneRegExp(target);
    case FUNCTION_TAG:
      return cloneFunction(target);
    default:
      return null;
  }
}

/**
 * 获取目标类型
 * @param {*} target 目标
 * @returns
 */
function getType(target) {
  return Object.prototype.toString.call(target);
}

/**
 * 是否是对象或者函数
 * @param {*} target 目标
 * @returns
 */
function isObject(target) {
  const type = typeof target;
  return target !== null && (type === "object" || type === "function");
}

/**
 * 生成一个新的相同类型的对象
 * @param {*} target 目标对象
 * @returns
 */
function getInit(target) {
  const Ctor = target.constructor;
  return new Ctor();
}

/**
 * 迭代数组或者对象，优化效率
 * @param {*} collection 集合
 * @param {*} iteratee 迭代回调
 * @returns
 */
function forEach(collection, iteratee) {
  if (collection === null) {
    return collection;
  }
  const { length } = collection;
  for (let i = 0; i < length; i++) {
    iteratee(collection[i], i);
  }
  return collection;
}

function cloneDeep(target, cache = new WeakMap()) {
  // 原始类型直接返回
  if (!isObject(target)) {
    return target;
  }

  // 循环引用直接返回
  if (cache.has(target)) {
    return cache.get(target);
  }

  // 获取类型
  const type = getType(target);

  let cloneTarget;
  if (deepCloneableTags.includes(type)) {
    // 初始化
    cloneTarget = getInit(target);
  } else {
    return cloneOtherType(target, type);
  }

  // 设置缓存
  cache.set(target, cloneTarget);

  // 克隆Set
  if (type === SET_TAG) {
    target.forEach((value) => {
      cloneTarget.add(cloneDeep(value));
    });
    return cloneTarget;
  }

  // 克隆Map
  if (type === MAP_TAG) {
    target.forEach((value, key) => {
      cloneTarget.set(key, cloneDeep(value));
    });
    return cloneTarget;
  }

  // 克隆对象或数组
  const isArray = type === ARRAY_TAG;
  let collection = isArray
    ? target
    : Object.keys(target).concat(Object.getOwnPropertySymbols(target));
  forEach(collection, (value, key) => {
    if (!isArray) {
      key = value;
    }
    cloneTarget[key] = cloneDeep(target[key], cache);
  });

  return cloneTarget;
}

const obj = {
  ud: undefined,
  bool: new Boolean(true),
  num: new Number(2),
  str: new String(2),
  date: new Date(),
  sb: Symbol(1),
  bi: BigInt(1),
  err: new Error(),
  null: null,
  reg: /(?<=\().+(?=\)\s+{)/,
  map: new Map([[1, 1]]),
  set: new Set([1]),
  child: {
    child: "child",
  },
  [Symbol("key")]: Symbol("value"),
  arr: [1, 2, 3],
  func1: () => {
    console.log("雮尘");
  },
  func2: function (a, b) {
    return a + b;
  },
};
obj.obj = obj;
console.log(cloneDeep(obj));
