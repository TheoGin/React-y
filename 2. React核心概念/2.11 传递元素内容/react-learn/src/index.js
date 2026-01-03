import ReactDOM from "react-dom";
import React from "react";
import Comp from "./Comp";


ReactDOM.render(<>
  <Comp content2={<h2>第2组内容</h2>} content3={<h2>第2组内容</h2>}>
    <h2>第1组内容</h2>
  </Comp>
  {/* 上面是语法糖，等价于： */}
  {/*<Comp children={<h2>第1组内容</h2>} />*/}
</>, document.getElementById('root'))
