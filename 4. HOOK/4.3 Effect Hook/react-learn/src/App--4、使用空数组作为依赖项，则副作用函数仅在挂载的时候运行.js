import React, { useEffect, useState } from "react";

function Test(props) {

  const [, forceUpdate] = useState({});
  useEffect(() => {
    // 没有依赖任何数据
    console.log("副作用函数，仅挂载时运行一次");

    return () => {
      console.log("清理函数，仅卸载时运行一次");
    };
  }, []); // 使用空数组作为依赖项，则副作用函数仅在挂载的时候运行(无论如何点击 “刷新组件”按钮，都不会再运行)

  console.log("渲染组件");

  return (
    <div>
      <h1>
        Test组件
        <button onClick={ () => {
          forceUpdate({});
        } }>刷新组件
        </button>
      </h1>
    </div>
  );
}

/*
渲染组件
副作用函数，仅挂载时运行一次      (无论如何点击 “刷新组件”按钮，都不会再运行)
⑤渲染组件
清理函数，仅卸载时运行一次
 *  */

export default function App() {

  const [visible, setVisible] = useState(true);

  return (
    <div>
      { visible && (
        <div>
          <Test />
        </div>
      ) }
      <button onClick={ () => {
        setVisible(!visible);
      } }>显示/隐藏
      </button>
    </div>
  )
    ;
}