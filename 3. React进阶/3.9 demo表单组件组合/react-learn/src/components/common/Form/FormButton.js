import React from "react";
import { Consumer } from "./formContext";

// 一定处于上下文中
function FormButton(props) {
  return (
    <Consumer>
      {
        (ctx) => {
          return (
            <button onClick={ () => {
              // ctx.onSubmit && ctx.onSubmit(ctx.formData);
              // 数据传递可以在 Form组件，这里直接调用
              ctx.onSubmit();
            } }>
              {/* 提交 */ }
              {/* 文本不要写死，应该由外部传入 */ }
              { props.children }
            </button>
          );
        }
      }
    </Consumer>
  );
}

export default FormButton;