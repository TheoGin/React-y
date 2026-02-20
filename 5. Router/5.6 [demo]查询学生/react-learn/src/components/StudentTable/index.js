import React from "react";
import "./index.css";

function StudentTable({ studentArr }) {
  const trs = studentArr.map(item => (
    <tr key={ item.id } /* onDoubleClick={ () => {
      history.push(`/students/detail/${ item.id }`);
    } } */>
      <td>
        { item.name }
        {/* <a href={ `/students/detail/${ item.id }` }>
         { item.name }
         </a> */ }
      </td>
      <td>{ item.sex === 1 ? "男" : "女" }</td>
      <td>{ item.birthYear }</td>
      <td>{ item.mail }</td>
      <td>{ item.addr }</td>
      <td>{ item.iphone }</td>
      <td>
        <a href={ `/students/detail/${ item.id }` }>
          详情
        </a>
      </td>
    </tr>
  ));

  return (
    <table>
      <thead>
        <tr>
          <th>姓名</th>
          <th>性别</th>
          <th>出生年份</th>
          <th>邮件</th>
          <th>地址</th>
          <th>手机号码</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        { trs }
      </tbody>
    </table>
  );
}

export default StudentTable;