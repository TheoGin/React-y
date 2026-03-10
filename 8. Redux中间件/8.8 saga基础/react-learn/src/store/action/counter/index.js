export const actionTypes = {
  increase: Symbol("increase"),
  decrease: Symbol("decrease"),
};

export function getIncreaseAction() {
  return {
    type: actionTypes.increase,
  };
}

export function getDecreaseAction() {
  return {
    type: actionTypes.increase,
  };
}