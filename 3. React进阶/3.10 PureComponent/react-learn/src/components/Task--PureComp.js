import React, { PureComponent } from "react";
import PropTypes from "prop-types";

/* function hasChange(task, nextTask) {
 for (const prop in task) {
 if (task[prop] !== nextTask[prop]) {
 return true;
 }
 }
 return false;
 } */

// PureComponent是一个组件，如果某个组件继承自该组件，则该组件的shouldComponentUpdate会进行优化，对属性和状态进行浅比较，如果相等则不会重新渲染
class Task extends PureComponent {

  static propTypes = {
    name: PropTypes.string.isRequired,
    isFinish: PropTypes.bool.isRequired,
  }

  /* shouldComponentUpdate(nextProps, nextState) {
   // if (hasChange(this.props.task, nextProps) || hasChange(this.state.task, nextState)) {
   // if (hasChange(this.props.task, nextProps.task)) {
   if (nextProps.name !== this.props.name || nextProps.isFinish !== this.props.isFinish) {
   return true;
   }

   return false;
   } */

  render() {
    console.log("Task render");
    return (
      // <li className={ this.props.task.isFinish ? "finish" : "" }>第{ this.props.task.id }个：{ this.props.task.name }</li>
      <li className={ this.props.isFinish ? "finish" : "" }>第{ this.props.id }个：{ this.props.name }</li>
    );
  }
}

export default Task;