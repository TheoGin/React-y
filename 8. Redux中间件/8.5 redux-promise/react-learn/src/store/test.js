import store from "./index";
import { createSetSearchConditionAction } from "./action/student/searchCondition";
import { fetchStudentsByCondition } from "./action/student/searchResult";

store.dispatch(createSetSearchConditionAction({ keyword: "111", sex: 1 }));
store.dispatch(fetchStudentsByCondition(store.getState().student.condition))
