import store from "./index";
import { createSetSearchConditionAction } from "./action/student/searchCondition";
import { getAsyncDecreaseAction, getAsyncIncreaseAction, getDecreaseAction, getIncreaseAction } from "./action/counter";


store.dispatch(createSetSearchConditionAction({ keyword: "111", sex: 1 }));

window.increase = function () {
  store.dispatch(getIncreaseAction())
}

window.decrease = function () {
  store.dispatch(getDecreaseAction())
}


window.asyncIncrease = function () {
  store.dispatch(getAsyncIncreaseAction())
}


window.asyncDecrease = function () {
  store.dispatch(getAsyncDecreaseAction())
}
