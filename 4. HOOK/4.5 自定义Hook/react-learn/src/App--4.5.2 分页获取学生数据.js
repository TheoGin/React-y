import React, { PureComponent, useState } from "react";
import usePageStudent from "./myHooks/usePageStudent";

function StudentList() {
  const [page, setPage] = useState(1);
  const resp = usePageStudent(page, 5);
  if (resp.total) {
    const list = resp.data.map(student => <li key={ student.id }>
      { student.name }, { student.sex === 1 ? "男" : "女" }
    </li>);
    return (
      <>
        <h1>数据总数: { resp.total }</h1>
        <ul>
          { list }
        </ul>
        当前页：<input type="number" value={ page } onChange={ e => {
        setPage(parseInt(e.target.value));
      } } />
      </>
    );
  }

  return null;
}

function App() {
  return (
    <StudentList />
  );
}

export default App;