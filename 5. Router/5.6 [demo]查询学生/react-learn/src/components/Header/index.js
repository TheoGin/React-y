import React, { Component } from "react";
import "./index.css";

class Header extends Component {
  render() {
    return (
      <div className='header-content'>
        <div className="left">
          <h1>学生管理系统</h1>
        </div>
        <div className="right">
          <span>用户名</span>
          <button>退出</button>
        </div>
      </div>
    );
  }
}

export default Header;