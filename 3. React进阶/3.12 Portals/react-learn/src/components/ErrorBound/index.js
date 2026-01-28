import React, { PureComponent } from "react";

class Index extends PureComponent {
  state = {
    hasError: false,
  };

  // 1. 静态函数 getDerivedStateFromError
  // 2. 运行时间点：渲染子组件的过程中，发生错误之后，在更新页面之前
  // 3. 注意：只有【子组件】发生错误，才会运行该函数
  // 5. 参数：错误对象
  static getDerivedStateFromError(error) {
    // 总结：仅处理渲染子组件期间的同步错误
    console.log("error", error);

    // 4. 该函数返回一个对象，React会将该对象的属性覆盖掉当前组件的state
    // 6. 通常，该函数用于改变状态
    return {
      hasError: true,
    };
  }

  // 1. 实例方法 componentDidCatch
  componentDidCatch(error, errorInfo) {
    console.log("发生错误了");
    console.log("error", error);
    console.log("errorInfo", errorInfo);

    // 2. 运行时间点：渲染子组件的过程中，发生错误，更新页面之后，由于其运行时间点比较靠后，因此不太会在该函数中改变状态
    /* this.setState({
     hasError: true
     }) */

    // 3. 通常，该函数用于记录错误消息
    console.log("记录错误消息日志");
  }

  render() {
    // 某些错误，错误边界组件无法捕获
    // 1. 自身的错误
    // throw new Error("ErrorBound error");

    // 2. 异步的错误
    /* setTimeout(() => {
     throw new Error('ErrorBound error');
     }, 1000); */

    if (this.state.hasError) {
      return <div>error</div>;
    }

    return (
      <div>
        <h1>ErrorBound</h1>
        { this.props.children }
      </div>
    );
  }
}

export default Index;