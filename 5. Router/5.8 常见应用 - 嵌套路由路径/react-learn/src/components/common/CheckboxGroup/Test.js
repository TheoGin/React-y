import React, {Component} from "react";
import CheckboxGroup from "./index";
import {getAllStudents} from "../../../services/student";

class Test extends Component {
  state = {
    /*datas: [
      {value: "football", text: "足球"},
      {value: "basketball", text: "篮球"},
      {value: "movie", text: "电影"},
      {value: "music", text: "音乐"},
      {value: "other", text: "其他"},
    ],
    chooseDatas: ["football"],*/
    datas: [],
    chooseDatas: [],
  };

  async componentDidMount() {
    const datas = await getAllStudents();
    this.setState({
      datas: datas.map(item => ({
        value: item.id.toString(), // 传递的是数字，组件内部勾选，拿到 value={item.value} 是字符串，所以需要转为字符串
        text: item.name,
      }))
    });
  }

  render() {
    return (<div>
      <CheckboxGroup
        name="loves"
        datas={this.state.datas}
        chooseDatas={this.state.chooseDatas}
        onChange={(chooseDatas) => {
          this.setState({
            chooseDatas,
          });
        }}
      />
    </div>);
  }
}

export default Test;