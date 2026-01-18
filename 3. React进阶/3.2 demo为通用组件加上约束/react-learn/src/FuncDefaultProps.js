import React from "react";

function FuncDefaultProps(props) {
  // 调用函数前，已经完成了混合，将 defaultProps 和 props 混合好 `Object.assign({}, defaultProps, props);`
  console.log(props); // {a: 10, b: 20, c: 3}
  return (
    <div>
      a: {props.a},
      b: {props.b},
      c: {props.c},
    </div>
  );
}

// 属性默认值
FuncDefaultProps.defaultProps = {
  a: 1,
  b: 2,
  c: 3,
};

export default FuncDefaultProps;