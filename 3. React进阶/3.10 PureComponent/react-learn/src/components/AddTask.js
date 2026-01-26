import React, { PureComponent } from "react";

class AddTask extends PureComponent {
  state = {
    taskName: "",
  };

  handleInput = (e) => {
    this.setState({
      taskName: e.target.value,
    });
  };

  handleClick = () => {
    this.props.onAdd && this.props.onAdd(this.state.taskName);

    this.setState({
      taskName: '',
    });
  };

  render() {
    console.log("AddTask render");
    return (
      <div>
        <input type="text" value={ this.state.taskName } onChange={ this.handleInput } />
        <button onClick={ this.handleClick }>添加一个任务
        </button>
      </div>
    );
  }
}

export default AddTask;