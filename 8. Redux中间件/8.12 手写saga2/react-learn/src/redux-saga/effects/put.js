// import isPlainObject from "../../redux/utils/isPlainObject";

import { createEffect, effectTypes } from "../effectHelper";

export default function runPutEffect(env, effect, next) {
  const { store } = env;
  const { action } = effect.payload;
  store.dispatch(action);
  next();
}

export function put(action) {
  /* if (isPlainObject(action)) {
   throw new Error("action must be a plain object");
   } */

  return createEffect(effectTypes.PUT, {
    action,
  });
}