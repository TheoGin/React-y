import React, { Component } from "react";
import Form from "./index";
import FormInput from "./FormInput";

class Test extends Component {
  render() {
    return (
      <div>
        <Form>
          <div>
            账号：<FormInput name='loginId' />
          </div>
          <div>
            密码：<FormInput name='loginPwd' />
          </div>
        </Form>
      </div>
    );
  }
}

export default Test;