import { take } from "redux-saga/effects";
import { actionTypes } from "../action/counter";

export default function* counterTask() {
  // 1. 在saga任务中，如果yield了一个普通数据，saga不作任何处理，仅仅将数据传递给yield表达式（把得到的数据放到next的参数中），因此，在saga中，yield一个普通数据没什么意义。
  // 2. saga需要你在yield后面放上一些合适的saga指令（saga effects），如果放的是指令，saga中间件会根据不同的指令进行特殊处理，以控制整个任务的流程。

  // 1. take指令：【阻塞】监听某个action，如果action发生了，则会进行下一步处理，take指令仅监听一次。yield得到的是完整的action对象
  /*
   console.log("counterTask start 执行");
   yield take(actionTypes.increase);
   console.log("counterTask end 执行");
   */

  // 一直监听
  while (true) {
    console.log("counterTask start 执行");
    yield take(actionTypes.increase);
    console.log("counterTask end 执行");
  }

}