import store from "./index";
import { createSetSearchConditionAction } from "./action/student/searchCondition";
import { getIncreaseAction } from "./action/counter";

window.dispatch = store.dispatch;
window.getIncreaseAction = getIncreaseAction;
store.dispatch(createSetSearchConditionAction({ keyword: "111", sex: 1 }));
