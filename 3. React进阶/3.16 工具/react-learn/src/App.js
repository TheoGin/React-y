import React, { Component } from "react";
import { fetchStudent } from "./services/student";

class StudentList extends Component {
  render() {

    return  this.props.studentList.map(student => <Student
      key={ student.id }
      { ...student }
    />);
  }
}

function Student(props) {
  return (
    <li
      key={ props.id }>{ props.name } { props.sex === 1 ? "男" : "女" } { props.addr } { props.mail } { props.iphone }</li>
  )
}

class App extends Component {

  state = {
    studentList: [],
  };

  async getStudent() {
    const data = await fetchStudent();
    this.setState({
      studentList: data,
    });
  }

  render() {
    return (
      <>
        <button onClick={ () => {
          this.getStudent();
        } }>
          获取学生列表
        </button>
        <button onClick={ () => {
          this.setState({ studentList: [] });
        } }>
          清空学生列表
        </button>
        <button onClick={ () => {
          this.setState({ studentList: [...this.state.studentList.sort(() => Math.random() - 0.5)] });
        } }>
          打乱学生列表顺序
        </button>
        <p>数据总数：{ this.state.studentList.length }</p>
        <ul>
          <StudentList studentList={ this.state.studentList } />
        </ul>
      </>
    );
  }
}

export default App;