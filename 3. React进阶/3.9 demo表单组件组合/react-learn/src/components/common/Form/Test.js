import React, { Component } from "react";
import Form from "./index";
import FormInput from "./FormInput";

class Test extends Component {
  render() {
    return (
      <div>
        <Form onSubmit={(formData) => {
          console.log('formData', formData);
        }}>
          <div>
            账号：<FormInput name='loginId' />
          </div>
          <div>
            密码：<FormInput name='loginPwd'  type='password' />
          </div>
        </Form>
      </div>
    );
  }
}

export default Test;