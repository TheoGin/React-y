import React, {Component} from "react";

class NewLifeCycle extends Component {
  state = {
    num: this.props.n,
  };

  /*
  1. getDerivedStateFromProps：静态方法。从属性中获取新的状态
    1.1. 通过参数可以获取新的属性和状态
    1.2. 该函数是静态的
    1.4. 该函数几乎是没有什么用
  * */
  static getDerivedStateFromProps(currentProps, currentState) {
    console.log('--------------------------');
    console.log("getDerivedStateFromProps 从属性中获取新的状态。", 'currentProps：', currentProps, ', currentState：',  currentState);

    // Warning: NewLifeCycle.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.
    // 1.3. 该函数的返回值会覆盖掉组件状态
    /*return {  // 用新的对象替换掉之前的状态
      num: currentProps.n
    };*/
    return null; //不改变当前状态
  }


  render() {
    return (
      <div>
        <h1>新版生命周期组件</h1>
        <h2>属性：{this.props.n}</h2>
        <h2>状态：{this.state.num}</h2>
        <p>
          <button onClick={
            () => {
              this.setState({
                num: this.state.num + 1,
              });
            }
          }>子组件按钮：状态+1
          </button>
        </p>
      </div>
    );
  }

  /*
  2. getSnapshotBeforeUpdate：获取更新前的快照
    2.1. 真实的DOM构建完成，但还未实际渲染到页面中。
    2.2. 在该函数中，通常用于实现一些附加的dom操作
  * */
  getSnapshotBeforeUpdate(currentProps, currentState) {
    console.log("getSnapshotBeforeUpdate 获取更新前的快照。", 'currentProps：', currentProps, ', currentState：',  currentState);

    // Warning: NewLifeCycle.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.
    // 2.3. 该函数的返回值，会作为componentDidUpdate的第三个参数
    return 123;
  }

  // Warning: NewLifeCycle: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.
  componentDidUpdate(prevProps, prevState, valueFromSnapshot) {
    // valueFromSnapshot：getSnapshotBeforeUpdate 函数的返回值
    console.log("getSnapshotBeforeUpdate 获取更新前的快照。", 'prevProps：', prevProps, ', prevState：',  prevState, ', valueFromSnapshot：',  valueFromSnapshot);
  }
}

export default NewLifeCycle;