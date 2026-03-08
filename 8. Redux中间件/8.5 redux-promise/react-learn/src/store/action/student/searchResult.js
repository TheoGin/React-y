import { getStudentsPageByKeywordAndSex } from "../../../services/student";

// export const SET_STUDENTS_TYPE = Symbol("set-students");
// export const SET_IS_LOADING_TYPE = Symbol("set-is-loading");

export const actionTypes = {
  // 设置学生查询结果数组和总数
  setStudentsAndTotal: Symbol("setStudentsAndTotal"),
  setIsLoading: Symbol("setIsLoading"),
};

/**
 * action creator
 * 得到一个设置是否正在加载中的action
 * @param {*} isLoading
 */
export function createIsLoadingAction(isLoading) {
  return {
    // type: SET_IS_LOADING_TYPE,
    type: actionTypes.setIsLoading,
    payload: isLoading,
  };
}

/**
 * 根据当前仓库中的查询条件，查询学生
 */

/*
 export function fetchStudents() {
 return async function (dispatch, getState) {
 dispatch(createIsLoadingAction(true));
 const condition = getState().student.condition; // {keyword: '111', sex: 1, page: 1, limit: 10}
 const resp = await getStudentsPageByKeywordAndSex(condition);
 dispatch(createSetStudentsAction(resp.data, resp.total));
 dispatch(createIsLoadingAction(false));
 };
 }*/

// 用法 1：一个 Promise，resolve 的是 action 对象
/* export function fetchStudentsByCondition(condition) {
  // 1. 如果action是一个promise，则会等待promise完成，将完成的结果作为action触发
  return new Promise(resolve => {
    getStudentsPageByKeywordAndSex(condition)
      .then(resp => {
        resolve(createSetStudentsAction(resp.data, resp.total));
      });
  });
} */

// 用法 2：返回 action对象，其中的 payload是 Promise
export async function fetchStudentsByCondition(condition) {
  // 2. 如果action不是一个promise，则判断其payload是否是一个promise，如果是，等待promise完成，然后将得到的结果作为payload的值触发。
  return {
    // type: actionTypes.setStudentsAndTotal,
    type: "setStudentsAndTotal", // redux-promise 要求，type 必须为字符串才能触发
    payload: getStudentsPageByKeywordAndSex(condition)
      .then(resp => ({
        data: resp.data,
        total: resp.total,
      })),
  };
}

/**
 * action creator
 * 得到一个设置学生数组和总数的action
 * @param {*} students
 * @param {*} total
 */
export function createSetStudentsAction(students, total) {
  return {
    // type: SET_STUDENTS_TYPE,
    type: actionTypes.setStudentsAndTotal,
    payload: {
      data: students,
      total,
    },
  };
}


