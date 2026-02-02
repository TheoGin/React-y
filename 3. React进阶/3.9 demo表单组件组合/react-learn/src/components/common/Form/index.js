import React, { Component } from "react";
import FormButton from "./FormButton";
import ctx from "./formContext";

class Form extends Component {
  state = {
    formData: {
      loginId: "",
      loginPwd: "",
    },
    onChange: (prop, value) => {
      // console.log(prop, value);
      this.setState({
        formData: {
          ...this.state.formData,
          [prop]: value,
        },
      });
    },
  };

  render() {
    return (
      <div>
        <ctx.Provider value={ this.state }>
          { this.props.children }
          <FormButton />
        </ctx.Provider>
      </div>
    );
  }
}

export default Form;