import React, { Component } from "react";
import ctx from "./formContext";

class FormButton extends Component {
  render() {
    return (
      <div>
        <ctx.Consumer >
          {
            (data) => {
              console.log(data.formData);
              return (
                <button>提交</button>
              );
            }
          }
        </ctx.Consumer>
      </div>
    );
  }
}

export default FormButton;