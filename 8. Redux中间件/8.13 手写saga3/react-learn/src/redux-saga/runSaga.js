import isGenerator from "is-generator";
import isPromise from "is-promise";
import Task from "./Task";
import { isEffect } from "./effectHelper";
import runEffect from "./runEffect";

/**
 * 开启一个新任务
 * @param {*} env 全局环境的数据，被saga执行期共享的数据
 * @param {*} sagaGeneratorFunc 生成器函数
 * @param {*} args 生成器函数的参数
 */
export default function runSaga(env, sagaGeneratorFunc, ...args) {
  const iterator = sagaGeneratorFunc(...args);

  return processRunSagaIterator(env, iterator);
}

export function processRunSagaIterator(env, iterator) {
  if (isGenerator(iterator)) {
    // 不断调用next，直到迭代结束
    next();
  } else {
    console.log("普通函数");
  }

  /**
   *
   * @param {*} nextValue 正常调用iterator.next时，传递的值
   * @param {*} err 错误对象
   * @param {boolean} isOver 是否结束
   */
  function next(nextValue, err, isOver) {
    let result; // 记录迭代的结果 {value: xxx, done: false}
    if (err) {
      // iterator.throw(err);
      result = iterator.throw(err);
    } else if (isOver) {
      // iterator.return(value);
      result = iterator.return(); //结束整个迭代
    } else {
      result = iterator.next(nextValue);
    }

    // 解构出value和done
    let { value: effectOrPromiseOrOtherValue, done } = result;
    if (done) {
      // 迭代结束了
      return;
    }

    // 没有结束
    if (isEffect(effectOrPromiseOrOtherValue)) {
      // 情况1：是一个effect对象
      console.log("是一个effect", effectOrPromiseOrOtherValue);
      runEffect(env, effectOrPromiseOrOtherValue, next);
    } else if (isPromise(effectOrPromiseOrOtherValue)) {
      // 情况2：value是一个promise
      effectOrPromiseOrOtherValue
        .then(v => next(v))
        .catch(err => next(null, err));
    } else {
      // 情况3：其他
      next(effectOrPromiseOrOtherValue); // 直接进行下一步
    }
  }

  return new Task();
}
