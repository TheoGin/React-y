import { actionTypes } from "../action/student/searchResult";
// import { takeEvery, put, select, call } from "redux-saga/effects";
import { takeEvery, put, select, cps } from "redux-saga/effects";

function* fetchUsers() {

}

export default function* studentTask() {
  yield takeEvery(actionTypes.fetchUsers, fetchUsers);
  console.log("正在监听 fetchUsers");
}