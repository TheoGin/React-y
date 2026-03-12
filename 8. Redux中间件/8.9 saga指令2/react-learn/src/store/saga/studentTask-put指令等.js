import { actionTypes, createIsLoadingAction, createSetStudentsAndTotalAction } from "../action/student/searchResult";
// import { takeEvery, put, select, call } from "redux-saga/effects";
import { takeEvery, put, select, apply } from "redux-saga/effects";
import { getStudentsPageByKeywordAndSex } from "../../services/student";

function* fetchUsers() {
  yield put(createIsLoadingAction(true));
  // getAllStudents().then(() => { /* 这里无法用 yield，就无法用指令 put */ })

  // 5. select指令：用于得到当前仓库中的数据
  const value = yield select();
  // console.log(value); // {student: {…}, counter: 10}
  // const resp = yield getStudentsPageByKeywordAndSex(value.student.condition);

  // 3. call(fn, ...args) 指令：【可能阻塞（如Promise会阻塞）】用于副作用（通常是异步）函数调用
  // const resp = yield call(getStudentsPageByKeywordAndSex, value.student.condition); // 一般会用指令？

  // 4. apply(this, fn, args) 指令：【可能阻塞】用于副作用（通常是异步）函数调用
  const resp = yield apply(null, getStudentsPageByKeywordAndSex, value.student.condition);
  // const resp = yield apply('abc', getStudentsPageByKeywordAndSex, value.student.condition);
  yield put(createSetStudentsAndTotalAction(resp.data, resp.total));

  yield put(createIsLoadingAction(false));
}

export default function* studentTask() {
  yield takeEvery(actionTypes.fetchUsers, fetchUsers);
  console.log("正在监听 fetchUsers");
}