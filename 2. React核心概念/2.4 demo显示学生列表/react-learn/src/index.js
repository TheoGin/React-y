import React from "react";
import ReactDOM from "react-dom";
import StudentList from "./components/StudentList";

const data = Array(10).fill(0).map((item, index) => ({
  name: `name${index}`,
  sex: `${index % 2 === 0 ? "女" : "男"}`,
  email: `${index}323125@qq.com`,
  birth: `200${index}`,
  id: index,
}));

/**
 * 获取所有的学生数据
 */
async function fetchAllStudent() {
  // const response = await fetch('https://localhost/student/findAll');
  const response = await new Promise((resolve) => {
    setTimeout(() => {
      resolve({data});
    }, 1000);
  });
  return response.data;
}

async function render() {
  ReactDOM.render(<div>正在加载中……</div>, document.getElementById("root"));
  const stuArr = await fetchAllStudent(); // 获取学生数组
  ReactDOM.render(<div><StudentList stuArr={stuArr} /></div>, document.getElementById("root"));
}

render();