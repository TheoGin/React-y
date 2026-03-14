import store from "./index";
import { createSetSearchConditionAction } from "./action/student/searchCondition";
import {
  getAsyncDecreaseAction,
  getAsyncIncreaseAction, getAutoDecreaseAction,
  getAutoIncreaseAction,
  getDecreaseAction,
  getIncreaseAction, getStopAutoIncreaseAction,
} from "./action/counter";
import { fetchUsersAction } from "./action/student/searchResult";


store.dispatch(createSetSearchConditionAction({ keyword: "111", sex: 1 }));

window.increase = function () {
  store.dispatch(getIncreaseAction());
};

window.decrease = function () {
  store.dispatch(getDecreaseAction());
};


window.asyncIncrease = function () {
  store.dispatch(getAsyncIncreaseAction());
};


window.asyncDecrease = function () {
  store.dispatch(getAsyncDecreaseAction());
};

window.fetchUsers = function () {
  store.dispatch(fetchUsersAction());
};

window.autoIncrease = function () {
  store.dispatch(getAutoIncreaseAction());
};

window.autoDecrease = function () {
  store.dispatch(getAutoDecreaseAction());
};

window.stopAutoIncrease = function () {
  store.dispatch(getStopAutoIncreaseAction());
};

