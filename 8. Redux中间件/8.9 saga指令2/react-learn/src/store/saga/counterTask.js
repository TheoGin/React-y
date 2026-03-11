import { takeEvery, take } from "redux-saga/effects";
import { actionTypes } from "../action/counter";

function* asyncIncrease() {
  console.log("触发了asyncIncrease");
}

function* asyncDecrease() {
  console.log("触发了asyncDecrease");
}

export default function* counterTask() {
  // 1. 在saga任务中，如果yield了一个普通数据，saga不作任何处理，仅仅将数据传递给yield表达式（把得到的数据放到next的参数中），因此，在saga中，yield一个普通数据没什么意义。
  // 2. saga需要你在yield后面放上一些合适的saga指令（saga effects），如果放的是指令，saga中间件会根据不同的指令进行特殊处理，以控制整个任务的流程。

  // 1. take指令：【阻塞】监听某个action，如果action发生了，则会进行下一步处理，take指令仅监听一次。yield得到的是完整的action对象
  /* const action = yield take(actionTypes.asyncIncrease);
  console.log("发生了异步的increase，得到action: ", action); // 发生了异步的increase，得到action:  {type: Symbol(increase)} */

  // 一直监听
  /* while (true) {
    const action = yield take(actionTypes.asyncIncrease);
    console.log("发生了异步的increase，得到action: ", action); // 发生了异步的increase，得到action:  {type: Symbol(increase)}
  } */

  // 3. takeEvery指令：不断的监听某个action，当某个action到达之后，运行一个函数。takeEvery永远不会结束当前的生成器
  yield takeEvery(actionTypes.asyncIncrease, asyncIncrease);
   yield takeEvery(actionTypes.asyncDecrease, asyncDecrease);
   console.log('正在监听 asyncIncrease、asyncDecrease');
}