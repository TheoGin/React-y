import { createEffect, effectTypes } from "../effectHelper";
import channel from "../Channel";

export function take(actionType) {
  return createEffect(effectTypes.TAKE, {
    actionType,
  });
}

export function runTakeEffect(env, effect, next) {
  const actionType = effect.payload.actionType;

  channel.take(actionType, (action) => {
    // 阻塞，直到有发布渠道
    next(action);
  });
}