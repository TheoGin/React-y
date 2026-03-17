import { createEffect, effectTypes } from "../effectHelper";
import { processRunSagaIterator } from "../runSaga";

export function all(generators) {
  return createEffect(effectTypes.ALL, {
    generators: generators || [],
  });
}

export function runAllEffect(env, effect, next) {
  const generators = effect.payload.generators;
  console.log('generators',  generators);
  // Uncaught TypeError: Cannot read properties of undefined (reading 'call')
  const tasks = generators.map(g => processRunSagaIterator(env, g));

  // 得到一个promise的数组
  const promises = tasks.map(g => g.toPromise());

  // 等待所有的 promise 完成，整个 saga 才能完成，否则一直得阻塞
  Promise.all(promises).then(r => {
    next(); // 等待所有的tasks全部完成之后，再调用next
  })
}