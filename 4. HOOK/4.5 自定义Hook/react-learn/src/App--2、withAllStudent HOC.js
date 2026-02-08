import React, { PureComponent } from "react";
import { getAllStudents } from "./services/student";

function withAllStudent(Comp) {
  return class AllStudentWrapper extends PureComponent {
    state = {
      studentArr: [],
    };

    async componentDidMount() {
      const studentArr = await getAllStudents();
      this.setState({
        studentArr,
      });
    }

    render() {
      return <Comp { ...this.props } studentArr={ this.state.studentArr } />;
    }
  };
}


function StudentList({ studentArr = [] }) {
  const list = studentArr.map(student => <li key={ student.id }>
    { student.name }, { student.sex === 1 ? "男" : "女" }
  </li>);
  return (
    <ul>
      { list }
    </ul>
  );
}

// 会导致组件层级变深
const AllStudent = withAllStudent(StudentList);

function App(props) {
  return (
    <AllStudent />
  );
}

export default App;