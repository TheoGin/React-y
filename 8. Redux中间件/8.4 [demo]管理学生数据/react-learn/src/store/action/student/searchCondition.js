export const SET_SEARCH_CONDITION = Symbol("set-search-condition");

export function createSetSearchConditionAction(newCondition) {
  return {
    type: SET_SEARCH_CONDITION,
    payload: newCondition,
  };
}

