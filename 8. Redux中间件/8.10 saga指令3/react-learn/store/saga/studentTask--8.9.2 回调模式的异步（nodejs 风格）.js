import { actionTypes, createIsLoadingAction, createSetStudentsAndTotalAction } from "../action/student/searchResult";
// import { takeEvery, put, select, call } from "redux-saga/effects";
import { takeEvery, put, select, cps } from "redux-saga/effects";
// import { getStudentsPageByKeywordAndSex } from "../../services/student";

/**
 * 回调模式的异步
 * @param {*} condition
 * @param {*} callback
 */
function mockStudentsByTraditionCallback(condition, callback) {
  console.log('mockStudentsByTraditionCallback condition: ', condition);
  setTimeout(() => {
    if (Math.random() > 0.9) {
      // nodejs风格
      // 成功：第一个参数传 null，第二个传数据
      callback(null, {
        data: [
          { id: 1, name: "theo" },
          { id: 2, name: "jack" },
        ],
        total: 2,
      });
    } else {
      // 失败：第一个参数传 Error 对象，第二个传 null
      // callback(new Error(null, "出错了")); // 错误写法
      callback(new Error("出错了"), null);
    }
  }, 1000);
}

function* fetchUsers() {
  // 设置为正在加载中
  yield put(createIsLoadingAction(true));

  const value = yield select();

  // 6. cps指令：【可能阻塞】用于调用那些传统的回调方式的异步函数
  try {
    // const resp = yield cps(getStudentsPageByKeywordAndSex(mockStudentsByTraditionCallback, value.student.condition)); // 错误写法 会TypeError: Cannot read properties of undefined (reading 'apply')

    // 6.1 cps(fn, ...args)
    // const resp = yield cps(mockStudentsByTraditionCallback, value.student.condition);

    // 6.2 cps([context, fn], ...args)
    const resp = yield cps([null, mockStudentsByTraditionCallback], value.student.condition);
    console.log('resp', resp); // resp {data: Array(2), total: 2}
    yield put(createSetStudentsAndTotalAction(resp.data, resp.total));
  } catch (e) {
    console.log(e.message); // "出错了"
  } finally {
    yield put(createIsLoadingAction(false));
  }

  // yield put(createIsLoadingAction(false)); // 应该放到 finally
}

export default function* studentTask() {
  // 通配符：监听所有类型字符串
  // yield takeEvery('*', fetchUsers);
  yield takeEvery(actionTypes.fetchUsers, fetchUsers);
  console.log("正在监听 fetchUsers");
}