import React from "react";
import qs from "query-string";
import { loginInfo } from "./loginInfo";

function Login(props) {
  return (
    <div>
      <h1>登录页</h1>
      <h2>仅做测试，没有实际做登录</h2>
      <button onClick={ () => {
        const search = qs.parse(props.location.search);
        loginInfo.login();
        if (search.returnurl) {
          props.history.push(search.returnurl);
        } else {
          props.history.push("/");
        }
      } }>登录
      </button>
    </div>
  );
}

export default Login;