import { actionTypes, createIsLoadingAction, createSetStudentsAndTotalAction } from "../action/student/searchResult";
// import { takeEvery, put, select, call } from "redux-saga/effects";
import { takeEvery, put, select, apply } from "redux-saga/effects";
import { getStudentsPageByKeywordAndSex } from "../../services/student";

function* fetchUsers() {
  // 设置为正在加载中
  yield put(createIsLoadingAction(true));
  // getAllStudents().then(() => { /* 这里无法用 yield，就无法用指令 put */ })

  // 5. select指令：用于得到当前仓库中的数据
  const value = yield select();
  // console.log(value); // {student: {…}, counter: 10}

  /*
  try {
    // 当saga发现得到的结果是一个Promise对象，它会自动等待该Promise完成
    // 完成之后，会把完成的结果作为值传递到下一次next
    // 如果Promise对象被拒绝，saga会使用generator.throw抛出一个错误
    const resp = yield getStudentsPageByKeywordAndSex(value.student.condition);
    yield put(createSetStudentsAndTotalAction(resp.data, resp.total));
  } catch (err) {
   // err表示reject的内容
    console.log(err);
  } finally {
    yield put(createIsLoadingAction(false));
  }
  */

  // 3. call(fn, ...args) 指令：【可能阻塞（如Promise会阻塞）】用于副作用（通常是异步）函数调用
  // const resp = yield call(getStudentsPageByKeywordAndSex, value.student.condition); // 一般会用指令？使用call指令，按照当前仓库中的条件

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