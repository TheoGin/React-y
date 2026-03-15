class Channel {
  listeners = {};

  // 添加监听
  take(actionType, listener) {
    if (this.listeners[actionType]) {
      this.listeners.push(listener);
    } else {
      this.listeners[actionType] = [listener];
    }
  }

  // 发布渠道
  put(action) {
    const { type } = action;
    if (!this.listeners[type]) {
      return;
    }

    // delete this.listeners[type];
    this.listeners[type].forEach(listener => {
      listener(action);
    });
    // take 只监听一次，运行完就删掉
    delete this.listeners[type]; // 由于运行 listener()可能会添加监听，会导致新添加的没有运行就被删除了，所以要写在前面
  }
}

const channel = new Channel();
// 只有 new一次即可

export default channel;