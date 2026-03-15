import { createEffect, effectTypes } from "../effectHelper";
import runSaga from "../runSaga";

export function fork(generatorFunc, ...args) {
  let context = null,
    iteratorFn = generatorFunc;
  if (Array.isArray(generatorFunc)) {
    context = generatorFunc[0];
    iteratorFn = generatorFunc[1];
  }
  return createEffect(effectTypes.FORK, {
    iteratorFn,
    context,
    args,
  });
}

export function runForkEffect(env, effect, next) {
  const {
    iteratorFn,
    context,
    args,
  } = effect.payload;
  const boundRunSaga = runSaga.bind(context, env);
  const task = boundRunSaga(iteratorFn, ...args);
  next(task);
}