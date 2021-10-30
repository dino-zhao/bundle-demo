const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  constructor(executor) {
    try {
      executor(this.resolve, this.reject);
    } catch (e) {
      reject(e);
    }
  }
  status = PENDING;
  reason = null;
  value = null;
  rejectCallback = [];
  fulfilledCallback = [];
  resolve = (v) => {
    if (this.status === PENDING) {
      this.value = v;
      this.status = FULFILLED;
      this.fulfilledCallback.forEach((fn) => fn(v));
    }
  };
  reject = (r) => {
    if (this.status === PENDING) {
      this.reason = r;
      this.status = REJECTED;
      this.rejectCallback.forEach((fn) => fn(r));
    }
  };
  then = (resolveFn, rejectFn) => {
    let realResolveFn = typeof resolveFn === "function" ? resolveFn : (v) => v;
    let realRejectFn =
      typeof rejectFn === "function"
        ? rejectFn
        : (v) => {
            throw v;
          };

    const promise = new MyPromise(() => {
      const resolvePromise = (v) => {
        queueMicrotask(() => {
          let value = realResolveFn(v);
          doResolve(promise, value, this.resolve, this.reject);
        });
      };
      const rejectPromise = (r) => {
        queueMicrotask(() => {
          let value = realRejectFn(r);
          doResolve(promise, value, this.resolve, this.reject);
        });
      };
      if (this.status === FULFILLED) {
        resolvePromise(v);
      } else {
      }
    });

    return promise;
  };
}

function doresolve(promise, y, resolve, reject) {
  if (promise === y) {
    throw new TypeError("");
  }
  if ((typeof y === "object" && y !== null) || typeof y === "function") {
    let then;
    try {
      then = y.then;
    } catch (error) {
      reject(error);
    }
    let called = false;
    let rejectPromise = (v) => {
      if (called) return;
      called = true;
      reject(v);
    };
    let resolvePromise = (v) => {
      if (called) return;
      called = true;
      doresolve(promise, v, resolve, reject);
    };
    then.call(y, resolvePromise, rejectPromise);
  } else {
    reject(y);
  }
}
