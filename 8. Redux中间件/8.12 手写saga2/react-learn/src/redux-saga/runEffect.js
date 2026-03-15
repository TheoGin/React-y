import { effectTypes } from "./effectHelper";
import runCallEffect from "./effects/call";
import runSelectEffect from "./effects/select";
import runPutEffect from "./effects/put";

export default function runEffect(env, effect, next) {
  switch (effect.type) {
    case effectTypes.CALL:
      runCallEffect(env, effect, next);
      break;
    case effectTypes.PUT:
      runPutEffect(env, effect, next);
      break;
    case effectTypes.SELECT:
      runSelectEffect(env, effect, next);
      break;
    default:
      throw new TypeError(`${ effect.type } is invalid type.`)
  }
}