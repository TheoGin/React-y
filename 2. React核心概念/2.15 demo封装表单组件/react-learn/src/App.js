import React from "react";
import ThreeLayout from "./components/common/ThreeLayout";

function App() {
  return (
    <div className="app-container">
      <ThreeLayout
        gap={50}
        left={<div style={{
          border: "1px solid #008c8c",
          // ThreeLayout 组件内部的 aside-left 是弹性项，默认纵轴拉伸，才是等高。而传递元素不是弹性项，需要等高可以设置 height: '100%'
          // height: "100%",
        }}>左边栏</div>}
        right={<div style={{
          border: "1px solid #008c8c",
        }}>右边栏</div>}
      >
        <div style={{
          border: "1px solid #f40",
        }}>
          <h1>主区域</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequatur consequuntur culpa
            cupiditate ducimus earum eius eligendi, eos facere id iure maiores obcaecati omnis possimus quas
            reprehenderit tenetur voluptas.
          </p>
        </div>
      </ThreeLayout>
    </div>
  );
}

export default App;