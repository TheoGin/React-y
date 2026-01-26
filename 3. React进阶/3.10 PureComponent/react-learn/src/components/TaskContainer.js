import React, { PureComponent } from "react";
import TaskList from "./TaskList";
import AddTask from "./AddTask";

// 1. 为了效率， 应该尽量使用PureComponent
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

    // 要求不要改动之前的状态，永远是创建新的状态来覆盖之前的状态（Immutable，不可变对象）
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