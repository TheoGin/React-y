import React, {Component} from "react";
import types from "../../../utils/commonTypes";

// 实现根据数据渲染出的一组表单组件
export default function WithDataGroup(Comp) {
  return class WithDataGroupWrapper extends Component {

    /**
     * 默认属性值
     */
    static defaultProps = {
      datas: [],
    };

    static propTypes = {
      datas: types.groupDatas.isRequired, // 不在commonTypes加必填，可以在这加必填
    };

    render() {
      // 只做一件事
      return this.props.datas.map(item => (
        <Comp
          info={item}
          key={item.value}
          {...this.props}
        />
      ));
    }
  };
}