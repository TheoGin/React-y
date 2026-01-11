import React, {Component} from "react";

class NumberInput extends Component {
  state = {
    val: 0,
  };

  render() {
    return (
      <div>
        {/* 默认情况下，它是一个非受控组件 */}
        <input type="text"/>

        {/*<input type="text" value={this.state.val} />*/}
        {/* Warning: Failed prop type: You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`. */}
        {/* 解决方案 */}
        {/* 1、加 readOnly */}
        <input type="text" value={this.state.val} readOnly/>

        {/* 2、用 defaultValue 代替 value  */}
        <input type="text" defaultValue={this.state.val}/>

        {/* 3、value + onChange */}
        <input type="text" value={this.state.val} onChange={(e) => {
          let value = e.target.value;

          // 非数字替换为空字符串
          value = value.replace(/\D/g, "");

          this.setState({
            val: value,
          });
        }}/>

        {/* 数字输入框 也可以用 HTML5 的type="number"  */}
        <input type="number"/>

        <button onClick={() => {
          console.log(this.state.val);
        }}>点击获取输入框的值</button>
      </div>
    );
  }
}

export default NumberInput;