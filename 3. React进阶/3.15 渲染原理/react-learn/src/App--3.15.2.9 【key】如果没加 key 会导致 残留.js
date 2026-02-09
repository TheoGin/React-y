import React, { Component } from "react";

export default class App extends Component {
  state = {
    isRegister: false, // 是否是注册
  };

  render() {
    return (
      <div>
        <button onClick={ () => {
          this.setState({
            isRegister: !this.state.isRegister,
          });
        } }>登录/注册
        </button>
        {
          this.state.isRegister ? (
            <div className="register">
              <p>
                {/* 如果没加 key 会导致 残留 */}
                账号：<input key='register' type="text" />
              </p>
              <p>
                密码：<input key='register' type="password" />
              </p>
              <p>
                确认密码：<input type="password" />
              </p>
              <p>
                <button>注册</button>
              </p>
            </div>
          ) : (
            <div className="login">
              <p>
                账号：<input key='login' type="text" />
              </p>
              <p>
                密码：<input key='login' type="password" />
              </p>
              <p>
                <button>登录</button>
              </p>
            </div>
          )
        }
      </div>
    );

  }

}
/*
 一开始：
 var oldBtn = document.querySelector('button')

 点击按钮后：
 var newBtn = document.querySelector('button')
 oldBtn === newBtn //  true【没有显示 h1的时候，有空节点 null 占位，以便 oldBtn和 newBtn对比，一样，就不会导致重新创建、卸载】
 *  */