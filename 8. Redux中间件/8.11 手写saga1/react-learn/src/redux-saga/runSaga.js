import isGenerator from "is-generator";
import isPromise from "is-promise";
import Task from "./Task";
import effectHelper from "./effectHelper";

export default function runSaga(env, rootSaga) {
  const iterator = rootSaga();

  if (!isGenerator(iterator)) {
    throw new Error("rootSaga must be a generator function.");
  }

  next();

  function next(val, err, isOver) {
    let { value, done } = iterator.next(val);
    if (done) {
      return;
    }
    if (err) {
      iterator.throw(err);
    } else if (isOver) {
      iterator.return(value);
    } else {
      if (isPromise(value)) {
        value.then(v => {
          effectHelper(env, v);
          next(v);
        });
      } else {
        effectHelper(env, value);
        next(value);
      }
    }
  }

  return new Task();
}