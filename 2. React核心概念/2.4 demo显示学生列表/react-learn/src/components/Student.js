import React from "react";

export default class Student extends React.Component {

  render() {
    console.log("this.props", this.props);
    //假设，所有的学生信息，都是分开传递的：this.props {name: 'name0', sex: '女', email: '0323125@qq.com', birth: '2000', id: 0,…}
    return (
      <li>
        {/* 显示一个学生的所有数据 */}
        【姓名】{this.props.name}，【email】{this.props.email}，【性别】{this.props.sex}，【出生年份】{this.props.birth}
      </li>
    );
  }
}