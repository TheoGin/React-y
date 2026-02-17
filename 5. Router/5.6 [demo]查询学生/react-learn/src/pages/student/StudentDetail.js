import React from "react";

function StudentDetail(props) {
  console.log(props.match.params);
  return (
    <div>
      <h1>学生详情页</h1>
      <h2>学生学号：{props.match.params.id}</h2>
    </div>
  );
}

export default StudentDetail;