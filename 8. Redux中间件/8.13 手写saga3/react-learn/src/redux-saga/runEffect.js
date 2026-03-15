import { effectTypes } from "./effectHelper";
import runCallEffect from "./effects/call";
import runSelectEffect from "./effects/select";
import runPutEffect from "./effects/put";
import { runTakeEffect } from "./effects/take";

/**
 * 处理一个effect对象，根据不同的effect.type值，做不同的处理
 * @param {*} env 全局的环境对象
 * @param {*} effect effect 对象
 * @param {*} next 下一个处理
 */
export default function runEffect(env, effect, next) {
  switch (effect.type) {
    case effectTypes.CALL:
      // 对call的处理
      runCallEffect(env, effect, next);
      break;
    case effectTypes.PUT:
      // 对put的处理
      runPutEffect(env, effect, next);
      break;
    case effectTypes.SELECT:
      // 对select的处理
      runSelectEffect(env, effect, next);
      break;
    case effectTypes.TAKE:
      // 对take的处理
      runTakeEffect(env, effect, next);
      break;
    default:
      throw new TypeError(`${ effect.type } is invalid type.`);
  }
}