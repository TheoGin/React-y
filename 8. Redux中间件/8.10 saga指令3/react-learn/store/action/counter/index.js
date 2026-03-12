export const actionTypes = {
  increase: Symbol("increase"),
  decrease: Symbol("decrease"),
  asyncIncrease: Symbol("increase"),
  asyncDecrease: Symbol("decrease"),
};

export function getIncreaseAction() {
  return {
    type: actionTypes.increase,
  };
}

export function getDecreaseAction() {
  return {
    type: actionTypes.decrease,
  };
}

export function getAsyncIncreaseAction() {
  return {
    type: actionTypes.asyncIncrease,
  };
}

export function getAsyncDecreaseAction() {
  return {
    type: actionTypes.asyncDecrease,
  };
}