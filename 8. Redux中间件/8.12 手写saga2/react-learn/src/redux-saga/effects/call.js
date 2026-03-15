import { createEffect, effectTypes } from "../effectHelper";
import isPromise from "is-promise";

// 1. 提供了call函数，用于产生call effect
export function call(fn, ...args) {
  let context = null, // this指向
    cb = fn; // 要运行的函数

  if (Array.isArray(fn)) {
    context = fn[0]; // this指向数组的第一项
    if (typeof fn[1] === "function") {
      cb = fn[1]; // 运行的函数指向数组的第二项
    } else if (typeof fn[1] === "string") {
      cb = context[fn[1]];
    } else {
      throw new TypeError(`${ fn } must be a function or functionName`);
    }
  }

  return createEffect(effectTypes.CALL, {
    fn: cb,
    args,
    context,
  });
}

// 2. 处理call effect
export default function runCallEffect(env, effect, next) {
  const { args, fn, context } = effect.payload;

  // 调用函数，得到函数的返回结果
  const result = fn.call(context, ...args);

  if (isPromise(result)) {
    result.then(r => next(r))
      .catch(err => next(err));
  } else {
    next(result);
  }
}

