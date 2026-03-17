import { createEffect, effectTypes } from "../effectHelper";
import { processRunSagaIterator } from "../runSaga";

export function all(generators) {
  return createEffect(effectTypes.ALL, {
    generators,
  });
}

export function runAllEffect(env, effect, next) {
  console.log('generators',  effect.payload.generators);
  // Uncaught TypeError: Cannot read properties of undefined (reading 'call')
  const tasks = effect.payload.generators.map(g => processRunSagaIterator(env, g));

  // const promises = tasks.map(g => g.toPromise());

  // // 等待所有的 promise 完成，整个 saga 才能完成，否则一直得阻塞
  // Promise.all(promises).then(r => {
  //   next();
  // })
}