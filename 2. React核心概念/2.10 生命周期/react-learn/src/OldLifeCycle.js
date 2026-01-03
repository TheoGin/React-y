import React, {Component} from "react";

class OldLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      num: this.props.n,
    };
    // 1. constructor：同一个组件对象只会创建一次
    console.log("【初始化阶段】constructor 初始化阶段初始化属性和状态。一个新的组件诞生了！！！");

    // 1.1 不能在第一次挂载到页面之前，调用setState，为了避免问题，构造函数中严禁使用setState
    // this.setState({}); // Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the OldLifeCycle component.
  }


  // 新版已弃用
  componentWillMount() {
    //  2. componentWillMount：正常情况下，和构造函数一样，它只会运行一次
    console.log("【挂载阶段】componentWillMount 组件即将挂载到页面");

    // 2.1 可以使用setState，但是为了避免bug，不允许使用，因为在某些特殊情况下，该函数可能被调用多次（如ssr、客户端、服务端各一次）
    // this.setState({})
  }

  render() {
    // 3. render：组件渲染虚拟DOM
    //   3.1. 返回一个虚拟DOM，会被挂载到虚拟DOM树中，最终渲染到页面的真实DOM中
    //   3.2. render可能不只运行一次，只要需要重新渲染，就会重新运行
    console.log("【挂载阶段 / 更新阶段】render 渲染，返回的React元素会被挂载到虚拟DOM树中。");

    //   3.3. 严禁使用setState，因为可能会导致无限递归渲染
    // this.setState({}); // Uncaught Error: Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.

    return (
      <div>
        <h1>旧版生命周期组件</h1>
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
        <p>
          <button onClick={
            () => {
              this.setState({
                num: this.state.num + 0,
              });
            }
          }>子组件按钮：状态+0
          </button>
        </p>
      </div>
    );
  }

  // 生命周期钩子函数 可以不按顺序写
  componentDidMount() {
    /*
    4. componentDidMount
      4.1. 只会执行一次
      4.2. 可以使用setState
      4.3. 通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中
    * */
    console.log("【挂载阶段】componentDidMount 挂载完成 虚拟DOM已挂载到页面成为真实DOM");

    // 4.2. 可以使用setState
    /*this.setState({
      num: this.state.num + 1,
    });*/
  }

  // 新版已弃用
  componentWillReceiveProps(currentProps) {
    /*
    6. componentWillReceiveProps
      6.1. 即将接收新的属性值
      6.2. 参数为新的属性对象
      6.3. 该函数可能会导致一些bug，所以不推荐使用
    * */
    console.log('【更新阶段】componentWillReceiveProps 接收到新的属性值。', 'currentProps：', currentProps);
    /*
    componentWillReceiveProps {n: 2}
    render 组件渲染虚拟DOM
    componentWillReceiveProps {n: 3}
    render 组件渲染虚拟DOM
    * */
  }

  shouldComponentUpdate(currentProps, currentState) {
    /*
    7. shouldComponentUpdate：性能优化点
      7.1. 指示React是否要重新渲染该组件，通过返回true和false来指定
      7.2. 默认情况下，会直接返回true
    * */
    console.log('【更新阶段】shouldComponentUpdate 是否应该重新渲染组件，性能优化点。', 'currentProps：', currentProps, ', currentState：',  currentState);
    if (this.props.n === currentProps.n && this.state.num === currentState.num) {
      return false;
    }

    // Warning: OldLifeCycle.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.
    return true;
  }

  // 新版已弃用
  componentWillUpdate(currentProps, currentState) {
    // 8. componentWillUpdate：组件即将被重新渲染
    console.log('【更新阶段】componentWillUpdate 即将重新渲染组件。', 'currentProps：', currentProps, ', currentState：',  currentState);
  }

  componentDidUpdate(prevProps, prevState) {
    // 9. componentDidUpdate：往往在该函数中使用dom操作，改变元素
    console.log('【更新阶段】componentDidUpdate 组件已完成重新渲染 虚拟DOM已重新挂载到页面成为真实DOM。', 'prevProps：', prevProps, 'prevState：', prevState);
  }

  componentWillUnmount() {
    // 10. componentWillUnmount：通常在该函数中销毁一些组件依赖的资源，比如计时器
    console.log('【销毁阶段】componentWillUnmount 组件即将被销毁');
  }
}

export default OldLifeCycle;
/*
【初始化阶段】constructor 初始化阶段初始化属性和状态。一个新的组件诞生了！！！
【挂载阶段】componentWillMount 组件即将挂载到页面
【挂载阶段 / 更新阶段】render 渲染，返回的React元素会被挂载到虚拟DOM树中。
【挂载阶段】componentDidMount 挂载完成 虚拟DOM已挂载到页面成为真实DOM
【更新阶段】shouldComponentUpdate 是否应该重新渲染组件，性能优化点。 currentProps： {n: 1, showOldLifeCycle: true} , currentState： {num: 2}
【更新阶段】componentWillUpdate 即将重新渲染组件。 currentProps： {n: 1, showOldLifeCycle: true} , currentState： {num: 2}
【挂载阶段 / 更新阶段】render 渲染，返回的React元素会被挂载到虚拟DOM树中。
【更新阶段】componentDidUpdate 组件已完成重新渲染 虚拟DOM已重新挂载到页面成为真实DOM。 prevProps： {n: 1, showOldLifeCycle: true} prevState： {num: 1}
【更新阶段】shouldComponentUpdate 是否应该重新渲染组件，性能优化点。 currentProps： {n: 1, showOldLifeCycle: true} , currentState： {num: 2}
【更新阶段】componentWillReceiveProps 接收到新的属性值。 currentProps： {n: 2, showOldLifeCycle: true}
【更新阶段】shouldComponentUpdate 是否应该重新渲染组件，性能优化点。 currentProps： {n: 2, showOldLifeCycle: true} , currentState： {num: 2}
【更新阶段】componentWillUpdate 即将重新渲染组件。 currentProps： {n: 2, showOldLifeCycle: true} , currentState： {num: 2}
【挂载阶段 / 更新阶段】render 渲染，返回的React元素会被挂载到虚拟DOM树中。
【更新阶段】componentDidUpdate 组件已完成重新渲染 虚拟DOM已重新挂载到页面成为真实DOM。 prevProps： {n: 1, showOldLifeCycle: true} prevState： {num: 2}
【销毁阶段】componentWillUnmount 组件即将被销毁
* */