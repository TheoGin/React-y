import { actionTypes } from "../../action/student/searchResult";

// 默认状态
const initState = {
  data: [], // 学生数组
  total: 0, // 学生总数
  isLoading: false, // 查询状态：是否正在查询中【由于和查询结果逻辑在同一块，所以放到这，而不是接口返回同一块，才放到这】
};

/**
 * 控制查询结果的reducer
 * @param {*} state
 * @param {*} action
 */
export default function searchResult(state = initState, { type, payload }) {
  switch (type) {
    // case SET_STUDENTS_TYPE:
    case actionTypes.setStudentsAndTotal:
      return {
        ...state,
        ...payload,
      };
    // case SET_IS_LOADING_TYPE:
    case actionTypes.setIsLoading:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
}

