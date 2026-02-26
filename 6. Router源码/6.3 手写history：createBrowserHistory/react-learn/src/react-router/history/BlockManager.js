export class BlockManager {
  prompt = null;

  constructor(getUserConfirmation) {
    this.getUserConfirmation = getUserConfirmation;
  }

  block(prompt) {
    /* if (typeof prompt === "string") {
      this.prompt = prompt;
    } else if (typeof prompt === "function") {
      this.prompt = prompt(location, action); // 错误写法，触发的时候才能运行
    } else {
      throw new TypeError("prompt must be string or function.");
    } */

    if (typeof prompt !== "string" && typeof prompt !== "function") {
      throw new TypeError("prompt must be string or function.");
    }

    this.prompt = prompt;

    return () => {
      this.prompt = null;
    }; // unBlock
  }

  triggerBlock(location, action, callback) {
    if (this.prompt) {
      let message;
      if (typeof this.prompt === 'function') {
        message = this.prompt()
      } else {
        message = this.prompt
      }
      this.getUserConfirmation(message, (isNext) => {
        if (isNext) {
          callback(true);
        }
      });
    } else {
      callback(true);
    }
  }
}