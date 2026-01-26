import React, { PureComponent } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";


class TaskContainer extends PureComponent {
  state = {
    tasks: [],
  };

  componentDidMount() {
    const tasks = [];
    for (let i = 1; i <= 10; i++) {
      tasks.push({
        id: i,
        name: `任务${ i }`,
        // isFinish: Math.random() > 0.5 ? true : false,
        isFinish: Math.random() > 0.5,
      });
    }
    this.setState({
      tasks,
    });
  }

  handleAdd = (taskName) => {
    const newTask = {
      id: this.state.tasks.length + 1,
      name: taskName,
      isFinish: false,
    };

    /*
    // 浅比较的时候，会导致地址不一样，从而导致页面没有发生变化
    this.state.tasks.push(newTask);
    this.setState({
      tasks: this.state.tasks,
    }); */

    this.setState({
      tasks: [...this.state.tasks, newTask],
    });
  };

  render() {
    console.log("TaskContainer render, tasks长度：", this.state.tasks.length);
    return (
      <div>
        <AddTask onAdd={ this.handleAdd } />
        <TaskList tasks={ this.state.tasks } />
      </div>
    );
  }
}

export default TaskContainer;