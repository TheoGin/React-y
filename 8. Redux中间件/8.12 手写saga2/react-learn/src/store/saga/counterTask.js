// import { delay, put, fork, take, call, race } from "redux-saga/effects";
// import { actionTypes, getIncreaseAction } from "../action/counter";


export default function* counterTask() {
  const value = yield 1;
  console.log("counterTask value", value);
}
