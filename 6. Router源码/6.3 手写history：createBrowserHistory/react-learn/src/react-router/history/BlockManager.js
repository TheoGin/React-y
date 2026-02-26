export class BlockManager {
  prompt = null;

  constructor(getUserConfirmation) {
    this.getUserConfirmation = getUserConfirmation;
  }

  block(prompt, location, action) {
    if (typeof prompt === "string") {
      this.prompt = prompt;
    } else if (typeof prompt === "function") {
      this.prompt = prompt(location, action);
    } else {
      throw new TypeError("prompt must be string or function.");
    }

    return () => {
      this.prompt = null;
    }; // unBlock
  }

  triggerBlock(callback) {
    if (this.prompt) {
      this.getUserConfirmation(this.prompt, (isNext) => {
        if (isNext) {
          callback(true);
        }
      });
    } else {
      callback(true);
    }
  }
}