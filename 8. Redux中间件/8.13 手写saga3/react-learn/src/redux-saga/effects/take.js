import { createEffect, effectTypes } from "../effectHelper";

export function take(actionType) {
  return createEffect(effectTypes.TAKE, {
    actionType,
  });
}

export function runTakeEffect(env, effect, next) {
  const actionType = effect.payload.actionType;

  const { channel } = env;
  // 订阅函数，当action发生的时候要运行的函数
  channel.take(actionType, (action) => {
    // 阻塞，直到有发布渠道
    next(action);
  });
}