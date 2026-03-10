import store from "./index";
import { createSetSearchConditionAction } from "./action/student/searchCondition";

store.dispatch(createSetSearchConditionAction({ keyword: "111", sex: 1 }));
