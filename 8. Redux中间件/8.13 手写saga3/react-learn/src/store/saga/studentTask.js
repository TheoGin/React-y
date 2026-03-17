import { actionTypes, createIsLoadingAction } from "../action/student/searchResult";
// import { actionTypes, createIsLoadingAction, createSetStudentsAndTotalAction } from "../action/student/searchResult";
import { delay, put, takeEvery } from "../../redux-saga/effects";
// import { getStudentsPageByKeywordAndSex } from "../../services/student";
// import { call, put, select } from "../../redux-saga/effects";


function* fetchUsers() {
  /* yield put(createIsLoadingAction(true));

  const value = yield select();
  const resp = yield call(null, getStudentsPageByKeywordAndSex, value.student.condition);
  yield put(createSetStudentsAndTotalAction(resp.data, resp.total));

  yield put(createIsLoadingAction(false)); */
  yield delay(2000);
  yield put(createIsLoadingAction(true))
}

export default function* studentTask() {
  console.log('studentTask start');
  yield takeEvery(actionTypes.fetchUsers, fetchUsers);
  console.log("正在监听 fetchUsers");
}