import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Task from "./Task";

class TaskList extends PureComponent {

  static propTypes = {
    tasks: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      isFinish: PropTypes.bool.isRequired,
    })).isRequired,
  };

  render() {
    console.log("TaskList render");
    const tasks = this.props.tasks.map((item) => <Task key={ item.id } { ...item } />);
    // const tasks = this.props.tasks.map((item) => <Task key={ item.id } task={ item } />);
    return (
      <ul>
        { tasks }
      </ul>
    );
  }
}

export default TaskList;