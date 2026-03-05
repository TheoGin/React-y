export default function compose(...fns) {
  if (fns.length === 0) {
    return fns; // 没有传递时 报错？
  } else if (fns.length === 1) {
    // 只有一个时，返回这一个函数
    return fns;
  } else {
    // acc: fn1, fn: fn2
    return fns.reduce((acc, fn) => (...args) => acc(fn(...args)));
    /* return function (...args) {
     let currentArg = args;
     for (let i = fns.length - 1; i >= 0; i--) {
     const fn = fns[i];
     if (i === fns.length - 1) {
     currentArg = fn(...currentArg);
     } else {
     currentArg = fn(currentArg);
     }
     }
     return currentArg;
     }; */
  }
}


/*
 function fn1(n) {
 return n * 2;
 }

 function fn2(n) {
 return n + 2;
 }

 function fn3(n) {
 return n + 3;
 }

 // 先理解 2 个，再理解 3 个，就好理解了
 let compute;
 compute = compose(fn1, fn2);
 console.log(compute(3)); // 10

 compute = compose(fn1, fn2, fn3);
 console.log(compute(3)); // 16*/
