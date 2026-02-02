import React from "react";
import ReactDOM from "react-dom";

const app = (
  <div className="test">
    <h1>
      标题
      { ["abc", null, <p>段落</p>] }
    </h1>
    <p>
      { undefined }
    </p>
  </div>
);

console.log(app);

ReactDOM.render(app, document.getElementById("root"));

