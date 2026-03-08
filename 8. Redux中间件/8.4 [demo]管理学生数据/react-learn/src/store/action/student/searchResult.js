import { getStudentsPageByKeywordAndSex } from "../../../services/student";

// export const SET_STUDENTS_TYPE = Symbol("set-students");
// export const SET_IS_LOADING_TYPE = Symbol("set-is-loading");

export const actionTypes = {
  // 设置学生查询结果数组和总数
  setStudentsAndTotal: Symbol('setStudentsAndTotal'),
  setIsLoading: Symbol('setIsLoading'),
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
// export function fetchStudentsByCondition() {
export function fetchStudents() {
  return async function (dispatch, getState) {
    dispatch(createIsLoadingAction(true));
    const condition = getState().student.condition; // {keyword: '111', sex: 1, page: 1, limit: 10}
    const resp = await getStudentsPageByKeywordAndSex(condition);
    dispatch(createSetStudentsAction(resp.data, resp.total));
    dispatch(createIsLoadingAction(false));
  };
}