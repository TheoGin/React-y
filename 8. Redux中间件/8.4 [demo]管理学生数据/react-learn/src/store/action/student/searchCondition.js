// export const SET_SEARCH_CONDITION = Symbol("set-search-condition");

export const actionTypes = {
  change: Symbol('change')
}

export function createSetSearchConditionAction(newCondition) {
  return {
    // type: SET_SEARCH_CONDITION,
    type: actionTypes.change,
    payload: newCondition,
  };
}

