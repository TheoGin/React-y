import { createEffect, effectTypes } from "../effectHelper";

export default function runSelectEffect(env, effect, next) {
  const { store } = env;
  const { selectorFn, args } = effect.payload;
  let state = store.getState(); // 得到整个仓库的数据
  if (typeof selectorFn === "function") {
    state = selectorFn(store.getState(), ...args);
  }
  next(state);
}

// selectorFn取状态中的某个数据
export function select(selectorFn, ...args) {
  return createEffect(effectTypes.SELECT, {
    selectorFn,
    args,
  });
}