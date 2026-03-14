import isPlainObject from "../redux/utils/isPlainObject";
import { effectTypes } from "./createEffect";

export default function effectHelper(env, value) {
  if (!isPlainObject(value)) {
    return;
  }
  const { type, payload } = value;
  switch (type) {
    case effectTypes.CALL:
      // runCallEffect(env, payload)
      break;
    default:
      throw new Error(`${type} is invalid type.`)
  }
}