import React, {Component} from "react";

class FormTest extends Component {
  state = {
    loginId: "",
    loginPwd: "",
    sex: "male",
    loves: [
      {value: "football", text: "足球"},
      {value: "basketball", text: "篮球"},
      {value: "movie", text: "电影"},
      {value: "music", text: "音乐"},
      {value: "other", text: "其他"},
    ],
    chooseLoves: [],
    selectValue: "shenzhen",
  };

  handleChange = (e) => {
    let value = e.target.value; //读取表单的值
    const name = e.target.name; //读取表单的name属性

    if (e.target.type === "checkbox") {
      // 对val进行特殊处理
      if (e.target.checked) {
        value = [...this.state.chooseLoves, value];

        // 错误写法，不能直接改变 state的属性
        // this.state.chooseLoves.push(value);
      } else {
        value = this.state.chooseLoves.filter(item => item !== value);

        // 错误写法，不能直接改变 state的属性
        /*const startIndex = this.state.chooseLoves.indexOf(value);
        this.state.chooseLoves.splice(startIndex, 1);*/
      }
    }

    // 方式 1：
    /*const newPartialStateObj = {};
    newPartialStateObj[name] = value;
    this.setState(newPartialStateObj);*/

    // 方式 2：
    this.setState({
      [name]: value,
    });
  };


  /**
   * 获取所有的爱好多选框
   */
  getCheckboxesEle() {
    return this.state.loves.map(item => (
      <label key={item.value}>
        {/* name 是 chooseLoves 而不是 loves。否则会 map is not function  */}
        <input type="checkbox" name="chooseLoves" checked={this.state.chooseLoves.includes(item.value)}
               value={item.value}
               onChange={this.handleChange}/>
        {item.text}
      </label>
    ));
  }

  render() {
    const checkboxesEle = this.getCheckboxesEle();
    return (
      <div>
        {/* 文本框 */}
        <p>
          <input type="text" name="loginId" value={this.state.loginId} onChange={this.handleChange}/>
        </p>

        {/* 密码框 */}
        <p>
          <input type="password" name="loginPwd" value={this.state.loginPwd} onChange={this.handleChange}/>
        </p>

        {/* 单选框 */}
        <p>
          <label>
            <input type="radio" name="sex" value="male" checked={this.state.sex === "male"}
                   onChange={this.handleChange}/>
            男
          </label>
          <label>
            <input type="radio" name="sex" value="female" checked={this.state.sex === "female"}
                   onChange={this.handleChange}/>
            女
          </label>
        </p>

        {/* 复选框（多选） */}
        <p>
          {checkboxesEle}
        </p>

        {/* 下拉选择框 */}
        <p>
          <select name="selectValue" value={this.state.selectValue} onChange={this.handleChange}>
            <option value="beijing">北京</option>
            <option value="shanghai">上海</option>
            <option value="shenzhen">深圳</option>
          </select>
        </p>

        <button onClick={() => {
          console.log(this.state);
        }}>获取表单数据
        </button>
      </div>
    );
  }
}

export default FormTest;