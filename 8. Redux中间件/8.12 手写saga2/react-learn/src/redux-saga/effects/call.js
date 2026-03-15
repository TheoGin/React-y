import { createEffect, effectTypes } from "../effectHelper";
import isPromise from "is-promise";

// 1. 提供了call函数，用于产生call effect
export function call(fn, ...args) {
  let context = null,
    cb = fn;
  if (Array.isArray(fn)) {
    context = fn[0];
    cb = fn[1];
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
  console.log("context", context);
  const result = fn.call(context, ...args);
  if (isPromise(result)) {
    result.then(r => next(r));
  } else {
    next(result);
  }
}

