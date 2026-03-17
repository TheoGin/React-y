import { createEffect, effectTypes } from "../effectHelper";
import { processRunSagaIterator } from "../runSaga";

export function fork(generatorFunc, ...args) {
  /* let context = null,
    iteratorFn = generatorFunc;
  if (Array.isArray(generatorFunc)) {
    context = generatorFunc[0];
    iteratorFn = generatorFunc[1];
  }
 */
  return createEffect(effectTypes.FORK, {
    // iteratorFn,
    // context,
    iteratorFn: generatorFunc,
    args,
  });
}

export function runForkEffect(env, effect, next) {
  const {
    iteratorFn,
    context,
    args,
  } = effect.payload;

  // const boundIteratorFn = iteratorFn.bind(context, ...args); // 不能用 bind，因为 bind之后就不是生成器函数了
  /* const iterator = iteratorFn.call(context, ...args);
  const task = processRunSagaIterator(env, iterator); */
  // 启动一个新的任务
  const task = processRunSagaIterator(env, iteratorFn, ...args);
  next(task); // 当前任务不会阻塞
}