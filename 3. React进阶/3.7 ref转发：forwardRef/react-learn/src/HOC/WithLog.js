import React, {Component} from "react";

/**
 * 高阶组件
 * @param {*} Comp 组件
 */
function WithLog(Comp) {

  class WithLogWrapper extends Component {

    componentDidMount() {
      console.log(`日志：组件${Comp.name}被创建了！，时间为：${Date.now()}`);
    }

    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了！，时间为：${Date.now()}`);
    }

    render() {
      console.log(this.props);
      // 除了forwardRef，结构剩下的到 restProps
      // forwardRef代表要转发的ref  {current:null}
      const {forwardRef, ...restProps} = this.props;
      return (
        <>
          <h1>123</h1>
          <Comp ref={forwardRef} {...restProps} />
        </>
      );
    }
  }

  // return React.createRef((props, ref) => {
  return React.forwardRef((props, ref) => {
    return <WithLogWrapper {...props} forwardRef={ref} />
  })
}

export default WithLog;