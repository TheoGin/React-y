import React from "react";

export class A extends React.Component{
  render() {
    return <h1>A组件</h1>
  }
}

export class B extends React.Component{
  render() {
    // 不再关注跟该组件不相关的事情
    return <h1>B组件</h1>
  }
}