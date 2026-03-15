import { createEffect, effectTypes } from "../effectHelper";
import isPromise from "is-promise";

export function call(fn, ...args) {
  return createEffect(effectTypes.CALL, {
    fn,
    args,
  });
}

export default function runCallEffect(env, effect, next) {
  const { args, fn, context } = effect.payload;
  const result = fn.call(context, ...args);
  if (isPromise(result)) {
    result.then(r => next(r));
  } else {
    next(result);
  }
}

