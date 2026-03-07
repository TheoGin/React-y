import { SET_IS_LOADING_TYPE, SET_STUDENTS_TYPE } from "../../action/student/searchResult";

const initState = {
  data: [], // 学生数组
  total: 0, // 学生总数
  isLoading: false, // 查询状态：是否正在查询中【由于和查询结果逻辑在同一块，所以放到这，而不是接口返回同一块，才放到这】
};

export default function searchResult(state = initState, { type, payload }) {
  switch (type) {
    case SET_STUDENTS_TYPE:
      return {
        ...state,
        ...payload,
      };
    case SET_IS_LOADING_TYPE:
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
}

