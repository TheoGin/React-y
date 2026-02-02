import React, { Component } from "react";
import ctx from "./formContext";
import PropTypes from "prop-types";

class FormInput extends Component {

  static propTypes = {
    name: PropTypes.string.isRequired,
    type: PropTypes.string,
    onChange: PropTypes.func,
  };

  handleChange = (e, data) => {
    data.onChange && data.onChange(this.props.name, e.target.value);
  };

  render() {
    return (
      <ctx.Consumer>
        {
          (data) => {
            return (
              <input
                // type={ this.props.name === "loginPwd" ? "password" : "text" }
                type={ this.props.type || "text" }
                value={ data.formData[this.props.name] }
                onChange={ (e) => this.handleChange(e, data) }
              />
            );
          }
        }
      </ctx.Consumer>
    );
  }
}

export default FormInput;