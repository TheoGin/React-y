import React from "react";
import ThreeLayout from "./components/common/ThreeLayout";
import './App.css'

function App(props) {
  return (
    <div className='app-container'>
      <ThreeLayout left={<div className='app-container-left'>左边栏</div>} right={<div className='app-container-right'>右边栏</div>}>
        <div className='app-container-main'>
          <h1>主区域</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam architecto consequatur consequuntur culpa cupiditate ducimus earum eius eligendi, eos facere id iure maiores obcaecati omnis possimus quas reprehenderit tenetur voluptas.
          </p>
        </div>
      </ThreeLayout>
    </div>
  );
}

export default App;