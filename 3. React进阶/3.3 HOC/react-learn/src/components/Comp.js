import React from "react";

export function A(props) {
  //不再关注跟该组件不相关的事情
  return (
    <h1>A：{props.a}</h1>
  );
}

export function B(props) {
  // 不再关注跟该组件不相关的事情
  return (
    <h1>B：{props.b}</h1>
  );
}