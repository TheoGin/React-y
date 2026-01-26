import React, { Component } from "react";

function hasChange(task, nextTask) {
  for (const prop in task) {
    if (task[prop] !== nextTask[prop]) {
      return true;
    }
  }
  return false;
}

class Task extends Component {

  shouldComponentUpdate(nextProps, nextState) {
    // if (hasChange(this.props.task, nextProps) || hasChange(this.state.task, nextState)) {
    if (hasChange(this.props.task, nextProps.task)) {
      return true;
    }

    return false;
  }

  render() {
    console.log("Task render");
    return (
      <li
        className={ this.props.task.isFinish ? "finish" : "" }>第{ this.props.task.id }个：{ this.props.task.name }</li>
    );
  }
}

export default Task;