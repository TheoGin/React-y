import React from "react";

function StudentList(props) {

  const lis = props.studentArr.map(student => <li
    key={ student.id }>{ student.name }, { student.sex === 1 ? "男" : "女" }</li>);

  return (
    <ul>
      { lis }
    </ul>
  );
}

export default StudentList;