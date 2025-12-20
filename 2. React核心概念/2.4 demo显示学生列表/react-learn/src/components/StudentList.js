import React from "react";
import Student from "./Student";

export default function StudentList(props) {
  console.log('StudentList', props);
   const students = props.stuArr.map(item => <Student key={item.id} {...item} />);
  return (
    <ul>{students}</ul>
  )
}