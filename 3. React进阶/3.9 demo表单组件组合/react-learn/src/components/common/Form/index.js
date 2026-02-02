import React, { Component } from "react";
import FormButton from "./FormButton";
import { Provider } from "./formContext";
import PropTypes from "prop-types";
import FormInput from "./FormInput";

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

  state = {
    formData: {  // 表单数据对象
      /* loginId: "",
       loginPwd: "", */
    },
    // 修改formData中的数据
    changeFormData: (name, value) => {
      // console.log(name, value);
      this.setState({
        formData: {
          ...this.state.formData,
          [name]: value,
        },
      });
    },
    onSubmit: () => {
      this.props.onSubmit(this.state.formData);
    },
  };

  render() {
    return (
      <div>
        <Provider value={ this.state }>
          { this.props.children }
          {/* <FormButton /> */ }
        </Provider>
      </div>
    );
  }
}

// 由于 FormInput、FormButton 数据依赖上下文，一定要作为 Form子组件，所以需要放到 Form 静态属性才能用 FormInput
Form.Input = FormInput;
Form.Button = FormButton;

export default Form;