import React, { Component } from "react";
import ctx from "./formContext";
import PropTypes from "prop-types";

// 由于 FormInput 数据依赖上下文，一定要作为 Form子组件，所以需要放到 Form 静态属性才能用 FormInput
class FormInput extends Component {

  // static contextTypes = ctx
  // 不是复数
  static contextType = ctx;

  static defaultProps = {
    type: 'text'
  }

  static propTypes = {
    name: PropTypes.string.isRequired, // 文本框的名称
    type: PropTypes.string, // 文本框的类型
    onChange: PropTypes.func,
  };

  render() {
    return (
      /* 一开始data.formData[this.props.name] 是 undefined。就会：Warning: A component is changing an uncontrolled input of type text to be controlled. Input elements should not switch from uncontrolled to controlled (or vice versa). Decide between using a controlled or uncontrolled input element for the lifetime of the component.
       ——》给个默认值
       */
      <input
        // type={ this.props.name === "loginPwd" ? "password" : "text" }
        // type={ this.props.type || "text" } 默认值可以用 defaultProps
        type={ this.props.type }
        value={ this.context.formData[this.props.name] || "" }
        onChange={ (e) => {
          this.context.changeFormData && this.context.changeFormData(this.props.name, e.target.value);
        } }
      />
      /* <ctx.Consumer>
        {
          (data) => {
            return (
               <input
               // type={ this.props.name === "loginPwd" ? "password" : "text" }
               type={ this.props.type || "text" }
               value={ data.formData[this.props.name] || "" }
               onChange={ (e) => {
               data.onChange && data.onChange(this.props.name, e.target.value);
               } }
               />
            );
          }
        }
      </ctx.Consumer> */
    );
  }
}

export default FormInput;