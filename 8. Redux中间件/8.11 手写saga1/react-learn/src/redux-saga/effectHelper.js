/* import isPlainObject from "../redux/utils/isPlainObject";
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
 throw new Error(`${ type } is invalid type.`);
 }
 } */
//该模块为创建effect和判断effect提供支持

/**
 * effect的可用类型
 */
export const effectTypes = {
  CALL: "CALL",
  APPLY: "APPLY",
};

/**
 * effect对象特殊的属性名
 */
const specailEffectName = "@@redux-saga/IO";

/**
 * 创建effect
 * @param {*} type 有效的effect类型
 * @param {*} payload
 */
export function createEffect(type, payload) {

  // 验证type值
  // if (!effectTypes[type]) {
  if (!Object.values(effectTypes).includes(type)) {
    throw new TypeError(`${ type } is invalid type.`);
  }

  return {
    [specailEffectName]: true,
    type,
    payload,
  };
}

/**
 * 判断一个对象是否是effect
 * @param {*} obj
 */
export function isEffect(obj) {
  if (typeof obj !== "object") {
    return false;
  }
  /* if (effectTypes[obj[type]]) {
   return true;
   } */
  if (obj[specailEffectName] === true) {
    return true;
  }

  return false;
}