import React, { PureComponent } from "react";
import Task from "./Task";

class TaskList extends PureComponent {

  render() {
    console.log('TaskList render');
    // const tasks = this.props.tasks.map((item) => <Task key={ item.id } { ...item } />);
    const tasks = this.props.tasks.map((item) => <Task key={ item.id } task={ item } />);
    return (
      <ul>
        { tasks }
      </ul>
    );
  }
}

export default TaskList;