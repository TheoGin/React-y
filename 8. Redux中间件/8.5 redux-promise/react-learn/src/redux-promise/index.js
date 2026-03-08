import _ from "lodash";
import isPromise from "is-promise";

export default store => next => action => {
  console.log("action", action);
  console.log("isPromise(action.payload)", isPromise(action.payload));
  console.log("isFSA(action)", isFSA(action));
  if (!isFSA(action)) {
    // 1. 如果action是一个promise，则会等待promise完成，将完成的结果作为action触发
    return isPromise(action) ? action.then(store.dispatch) : next(action);
  }
  // 2. 如果action不是一个promise，则判断其payload是否是一个promise，如果是，等待promise完成，然后将得到的结果作为payload的值触发。
  return isPromise(action.payload)
         ? action.payload
                 .then(payload => {
                   store.dispatch({
                     ...action,
                     payload,
                   });
                 })
                 .catch(error => next(error))
         : next(action);
}

/* isFluxStandardAction https://github.com/redux-utilities/flux-standard-action
 An action MUST
 * be a plain JavaScript object.
 * have a type property.
 *
 An action MAY
 * have an error property.
 * have a payload property.
 * have a meta property.
 *  */
function isFSA(action) {
  if (!_.isObject(action)) {
    return false;
  }

  return _.isString(action.type) && Object.keys(action).every(prop => ["type", "payload", "meta", "error"].includes(prop));
}

/*
 function isPromise(obj) {
 return !!obj && (typeof obj === 'object' || typeof obj === 'function') && typeof obj.then === 'function';
 }
 *  */