export default function compose(...fns) {
  if (fns.length === 0) {
    return fns;
  } else if (fns.length === 1) {
    return fns;
  } else {
    return fns.reduce((acc, fn) => (...args) => acc(fn(...args)))
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

const arr = [1, 2, 3];

function fn1(n) {
  return n * 2;
}

function fn2(n) {
  return n + 2;
}

const compute = compose(fn1, fn2);
console.log(compute(3));