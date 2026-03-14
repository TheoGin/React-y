export const actionTypes = {
  increase: Symbol("increase"),
  decrease: Symbol("decrease"),
  asyncIncrease: Symbol("asyncIncrease"),
  asyncDecrease: Symbol("asyncDecrease"),
  autoIncrease: Symbol("autoIncrease"),
  autoDecrease: Symbol("autoDecrease"),
  stopAutoIncrease: Symbol("stopAutoIncrease"),
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

export function getAutoIncreaseAction() {
  return {
    type: actionTypes.autoIncrease,
  };
}

export function getAutoDecreaseAction() {
  return {
    type: actionTypes.autoDecrease,
  };
}



export function getStopAutoIncreaseAction() {
  return {
    type: actionTypes.stopAutoIncrease,
  };
}

