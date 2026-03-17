export default class Task {
  constructor(next, objCallback) {
    this.next = next;
    this.objCallback = objCallback;
    objCallback.finishCb = function () {
      this.resolve && this.resolve();
    }
  }

  cancel() {
    // 调用 next(null, null, true) 间接 iterator.return()
    this.next(null, null, true);
  }

  // all 指令需要
  toPromise() {
    return new Promise(resolve => {
      // resolve(this); // 错误写法，此时还不能 resolve，要没有 sage 任务阻塞才能完成
      this.resolve = resolve;
    });
  }
}