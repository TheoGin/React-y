import React, {Component} from "react";
import Student from "./Student";

class StudentList extends Component {

  render() {
    console.log();
    const students= this.props.stus.map(stu => <Student {...stu} key={stu.id} /> )
    return (
      <ul>
        {students}
      </ul>
    );
  }
}

export default StudentList;