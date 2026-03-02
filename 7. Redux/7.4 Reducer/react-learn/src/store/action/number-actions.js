import * as numberTypes from "./number-types";

/**
 * 得到一个用于增加数字操作的action
 */
export function getIncreaseAction() {
  return {
    type: numberTypes.INCREASE,
  };
}

export function getDecreaseAction() {
  return {
    type: numberTypes.DECREASE,
  };
}

export function getSetAction(newNum) {
  return {
    type: numberTypes.SET,
    payload: newNum,
  };
}