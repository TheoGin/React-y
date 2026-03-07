export default function compose(...funcs) {
  if (funcs.length === 0) {
    // return funcs; // 没有传递时 报错？不是，传啥，返回啥
    return args => args; // 如果没有要组合的函数，则返回的函数原封不动的返回参数
  } else if (funcs.length === 1) {
    // 要组合的函数只有一个，返回这一个函数
    // return funcs; // funcs 是数组
    return funcs[0];
  } // 最后可以不需要 else
  // acc: fn1, fn: fn2
  return funcs.reduce((acc, fn) => (...args) => acc(fn(...args)));
  /* return function (...args) {
    // let lastReturn = args;
    let lastReturn = null; // 记录上一个函数返回的值，它将作为下一个函数的参数

    for (let i = funcs.length - 1; i >= 0; i--) {
      const func = funcs[i];
      if (i === funcs.length - 1) { // 数组最后一项
        // lastReturn = func(...lastReturn);
        lastReturn = func(...args);
      } else {
        lastReturn = func(lastReturn);
      }
    }
    return lastReturn;
  }; */
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
console.log(compute(3)); // 16
*/
