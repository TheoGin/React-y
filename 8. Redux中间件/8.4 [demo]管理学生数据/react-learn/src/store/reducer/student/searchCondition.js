import { actionTypes } from "../../action/student/searchCondition";

// 默认状态
const initState = {
  keyword: "", // 关键字：字符串，可为空字符串
  sex: -1, // 性别：1、0、-1，分别表示查询女、男、不限
  page: 1, // 当前页码
  limit: 10, // 页容量
};

/**
 * 控制查询条件数据的reducer
 * @param {*} state
 * @param {*} action
 */
export default function searchCondition(state = initState, { type, payload }) {
  switch (type) {
    // case SET_SEARCH_CONDITION:
    case actionTypes.change:
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
}