import * as numberTypes from "./number-types";

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