import React, {Component} from "react";

class ClassDefaultProps extends Component {
  // 书写位置1：属性默认值
  static defaultProps = {
    a: 1,
    b: 2,
    c: 3,
  }
  constructor(props) {
    // 调用constructor前，已经完成了混合，将 defaultProps 和 props 混合好 `Object.assign({}, defaultProps, props);`
    console.log(props); // {a: 10, b: 20, c: 3}
    super(props);
  }

  render() {
    return (
      <div>
        a: {this.props.a},
        b: {this.props.b},
        c: {this.props.c},
      </div>
    );
  }
}

/*
// 书写位置2：属性默认值
ClassDefaultProps.defaultProps = {
  a: 1,
  b: 2,
  c: 3,
};*/

export default ClassDefaultProps;