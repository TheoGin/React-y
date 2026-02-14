import React, { useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { v4 as uuidv4 } from "uuid";
import './App.css'

function App() {

  // console.log(uuidv4()); // 生成全球唯一的 c5bd1132-69d3-4b87-893f-84d334390ca0
  const [taskList, setTaskList] = useState([
    { id: uuidv4(), name: "任务1" },
    { id: uuidv4(), name: "任务2" },
  ]);

  return (
    <div>
      {/* 该组件的children，接收多个Transition或CSSTransition组件，该组件用于根据这些子组件的key值，控制他们的进入和退出状态 */}
      <TransitionGroup appear component='ul'>
      {/* component={null} 不生成元素 */}
      {/* <TransitionGroup appear component={null}> */}

        { taskList.map(item => (
          // 1、CSSTransition 不需要给 in 属性
          // 2、appear 可以加在 CSSTransition 或 TransitionGroup
          <CSSTransition key={ item.id } timeout={ 500 }>
            <li>
              { item.name }
              <button onClick={ () => {
                setTaskList(taskList.filter(it => it.id !== item.id));
              } }>
                删除
              </button>
            </li>
          </CSSTransition>
        )) }
      </TransitionGroup>
      <button onClick={ () => {
        const name = window.prompt("请输入任务名称");
        setTaskList([...taskList, { id: uuidv4(), name }]);
      } }>
        添加一个任务
      </button>
    </div>
  );
}

export default App;