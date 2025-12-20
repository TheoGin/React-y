import React from "react";

export default function StudentList(props) {
  console.log('props', props);
  if (props.data) {
   const lis =  props.data.map(item => <li key={item.id}>
     【姓名】{item.name}，【email】{item.email}，【性别】{item.sex}，【出生年份】{item.birth}
   </li>)
    console.log(lis);
    return (
      <ul>{lis}</ul>
    )
  }
  return (
    <div>子组件 数据加载中……</div>
  )
}