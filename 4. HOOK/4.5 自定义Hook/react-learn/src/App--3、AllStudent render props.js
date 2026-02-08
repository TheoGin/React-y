import React, { PureComponent } from "react";
import { getAllStudents } from "./services/student";

class AllStudent extends PureComponent {
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
    if (typeof this.props.render === "function") {
      return this.props.render(this.state.studentArr);
    }
    return null;
  }
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

function App(props) {
  return (
    <AllStudent render={ (studentArr) => {
      return <StudentList studentArr={ studentArr } />;
    } } />
  );
}

export default App;