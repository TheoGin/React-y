import React, {Component} from "react";
import RadioBoxGroup from "./index";
import {fetchStudent} from "../../../services/student";
import WithDataGroup from "../../hoc/withDataGroup";

const RadioWithDataGroup = WithDataGroup(RadioBoxGroup);

class Test extends Component {
  state = {
    datas: [],
    value: '',
  };

  async componentDidMount() {
    const datas = await fetchStudent();
    this.setState({
      datas: datas.map(item => ({
        value: item.id.toString(), // 传递的是数字，组件内部勾选，拿到 value={item.value} 是字符串，所以需要转为字符串
        text: item.name,
      }))
    });
  }

  render() {
    return (<div>
      <RadioWithDataGroup
        name="loves"
        datas={this.state.datas}
        value={this.state.value}
        onChange={(value) => {
          this.setState({
            value,
          });
        }}
      />
    </div>);
  }
}

export default Test;