import React, {Component} from "react";
import RadioBoxGroup from "./index";
import {fetchStudent} from "../../../services/student";

class Test extends Component {
  state = {
    datas: [],
    checked: '3',
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
      <RadioBoxGroup
        name="loves"
        datas={this.state.datas}
        checked={this.state.checked}
        onChange={(checked) => {
          this.setState({
            checked,
          });
        }}
      />
    </div>);
  }
}

export default Test;