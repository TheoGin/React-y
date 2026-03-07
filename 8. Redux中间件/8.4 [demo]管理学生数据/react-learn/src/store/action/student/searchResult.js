import { getStudentsPageByKeywordAndSex } from "../../../services/student";

export const SET_STUDENTS_TYPE = Symbol("set-students");
export const SET_IS_LOADING_TYPE = Symbol("set-is-loading");

export function createSetStudentsAction(students, total) {
  return {
    type: SET_STUDENTS_TYPE,
    payload: {
      data: students,
      total,
    },
  };
}

export function createIsLoadingAction(isLoading) {
  return {
    type: SET_IS_LOADING_TYPE,
    payload: isLoading,
  };
}

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