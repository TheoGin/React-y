import store from "./index";
import { fetchStudents } from "./action/student/searchResult";
import { createSetSearchConditionAction } from "./action/student/searchCondition";

store.dispatch(createSetSearchConditionAction({ keyword: "111", sex: 1 }));
store.dispatch(fetchStudents())

console.log(window.store1.dispatch === window.store2.dispatch); // false