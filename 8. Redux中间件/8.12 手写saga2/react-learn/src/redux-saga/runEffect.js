import { effectTypes } from "./effectHelper";
import runCallEffect from "./effects/call";

export default function runEffect(env, effect, next) {
  switch (effect.type) {
    case effectTypes.CALL:
      runCallEffect(env, effect, next);
      break;
    default:
      throw new TypeError(`${ effect.type } is invalid type.`)
  }
}