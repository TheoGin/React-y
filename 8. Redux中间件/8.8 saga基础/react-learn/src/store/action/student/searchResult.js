export const actionTypes = {
  // 设置学生查询结果数组和总数
  // setStudentsAndTotal: Symbol("setStudentsAndTotal"), // redux-promise 要求，type 必须为字符串才能触发
  setStudentsAndTotal: "setStudentsAndTotal",
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


