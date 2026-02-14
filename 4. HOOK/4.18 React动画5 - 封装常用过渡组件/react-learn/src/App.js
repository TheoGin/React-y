import React, { Component } from "react";
import FadeTransition from "./components/common/FadeTransition";
import { TransitionGroup } from "react-transition-group";
import { v4 as uuid } from "uuid";

class App extends Component {
  state = {
    show: true,
    taskList: [
      { id: uuid(), name: "任务1" },
      { id: uuid(), name: "任务2" },
    ],
  };

  render() {
    return (
      <div>
        <TransitionGroup component="ul">
          { this.state.taskList.map((item => (
            <FadeTransition key={ item.id } appear timeout={ 1000 } in={ this.state.show }>
              <li>
                { item.name }
                <button onClick={ () => {
                  this.setState({
                    taskList: this.state.taskList.filter(it => it.id !== item.id),
                  });
                } }>删除
                </button>
              </li>
            </FadeTransition>
          ))) }

        </TransitionGroup>
        <button onClick={ () => {
          const name = window.prompt('请输入任务名称');
          this.setState({
            taskList: [...this.state.taskList, { id: uuid() , name}],
          });
        } }>添加
        </button>
      </div>
    );
  }
}

export default App;