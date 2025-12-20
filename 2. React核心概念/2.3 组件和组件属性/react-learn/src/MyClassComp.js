import React from "react";

export class MyClassComp extends React.Component {

  /**
   * 通过构造器可以拿到父组件传递过来的数据【以下构造器可以省略不写，React 会帮你完成 】
   * @param props 一个对象
   */
  constructor(props) {
    // ReferenceError: Must call super constructor in derived class before accessing 'this' or returning from derived constructor
    super(props); // 内部会：this.props = props
    console.log(props, this.props === props); // {number: '2'} true
  }

  render() {
    if (this.props.obj) {
      // 由于只对浅层做了处理，对象里面改的没有报错，能改成功，但是不推荐这样做！！！因为 React中的哲学：数据属于谁，谁才有权力改动
      // this.props.obj.name = 'theo';
      return (<div>
        <p>这是类组件内容：</p>
        <p>名字：{ this.props.obj.name }，年龄：{ this.props.obj.age }</p>
      </div>)
    } else if (this.props.ui) {
      return (<div>
        <p>这是类组件内容：</p>
        {this.props.ui}
      </div>)
    } else if (this.props.number) {
      // 和 内置组件(div、h1、...) 的 props 一样，不能改
      // this.props.number = 123; // TypeError: Cannot assign to read only property 'number' of object '#<Object>'
      return <h1>这是类组件内容。数字：{this.props.number}</h1>;
    }
    return <h1>这是类组件内容</h1>;
  }
}