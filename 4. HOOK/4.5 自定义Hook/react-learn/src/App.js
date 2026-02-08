import React, { PureComponent } from "react";
import usePageStudent from "./myHooks/usePageStudent";

function StudentList() {
  const resp = usePageStudent(1, 10);
  if (resp.total) {
    console.log(resp);
    const list = resp.data.map(student => <li key={ student.id }>
      { student.name }, { student.sex === 1 ? "男" : "女" }
    </li>);
    return (
      <>
        <h1>数据总数: {resp.total}</h1>
        <ul>
          { list }
        </ul>
      </>
    );
  }

  return null;
}

function App(props) {
  return (
    <StudentList />
  );
}

export default App;