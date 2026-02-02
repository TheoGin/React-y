import React, { Component } from "react";
import FormButton from "./FormButton";
import ctx from "./formContext";
import PropTypes from "prop-types";

class Form extends Component {
  static propTypes = {
    onSubmit: PropTypes.func,
  };

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
    onSubmit: this.props.onSubmit,
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