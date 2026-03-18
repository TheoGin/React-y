class Channel {
  listeners = {};

  // 添加监听
  take(actionType, listener) {
    if (this.listeners[actionType]) {
      this.listeners[actionType].push(listener);
    } else {
      this.listeners[actionType] = [listener];
    }
    console.log("this.listeners", this.listeners);
  }

  // 发布渠道
  put(action) {
    const { type } = action;
    if (!this.listeners[type]) {
      return;
    }

    // 先保留，再删除
    const funcs = this.listeners[type];
    delete this.listeners[type];
    funcs.forEach(listener => {
    /* funcs.forEach((listener, index) => {
      this.listeners[type].splice(index, 1); */
      listener(action);
    });
    // take 只监听一次，运行完就删掉
    // delete this.listeners[type]; // 由于运行 listener()可能会添加监听???会导致新添加的没有运行就被删除了，所以要写在前面
  }
}

// const channel = new Channel();
// 只有 new一次即可

export default Channel;