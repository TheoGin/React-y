import React, {Component} from "react";

function WithLog(Comp) {

  class WithLogWrapper extends Component {

    componentDidMount() {
      console.log(`日志：组件${Comp.name}被创建了！，时间为：${Date.now()}`);
    }

    componentWillUnmount() {
      console.log(`日志：组件${Comp.name}被销毁了！，时间为：${Date.now()}`);
    }

    render() {
      // console.log(this.props);
      // 除了forwardRef，结构剩下的到 restProps
      const {forwardRef, ...restProps} = this.props;
      return (
        <>
          <h1>123</h1>
          <Comp ref={forwardRef} {...restProps} />
        </>
      );
    }
  }

  return React.createRef((props, ref) => {
    return <WithLogWrapper {...props} forwardRef={ref} />
  })
}

export default WithLog;