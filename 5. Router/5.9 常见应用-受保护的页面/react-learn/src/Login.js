import React from "react";
// import qs from "query-string";
import { loginInfo } from "./loginInfo";

function Login(props) {
  return (
    <div>
      <h1>登录页</h1>
      <h2>仅做测试，没有实际做登录</h2>
      <button onClick={ () => {
        loginInfo.login();

        /*
         // 1、使用 url 中的 returnurl
         const search = qs.parse(props.location.search);
        if (search.returnurl) { */

        // 2、使用 state
        if (props.location.state) {
          props.history.push(props.location.state);
        } else {
          props.history.push("/");
        }
      } }>登录
      </button>
    </div>
  );
}

export default Login;