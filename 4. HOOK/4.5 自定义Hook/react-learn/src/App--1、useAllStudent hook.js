import React from "react";
import useAllStudent from "./myHooks/useAllStudent";

function StudentList() {
  const studentArr = useAllStudent();
  const list = studentArr.map(student => <li key={ student.id }>
    { student.name }, { student.sex === 1 ? "男" : "女" }
  </li>);
  return (
    <ul>
      { list }
    </ul>
  );
}

function App(props) {
  return (
    <StudentList />
  );
}

export default App;