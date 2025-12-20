import React from "react";
import StudentList from "./StudentList";

const data = Array(10).fill(0).map((item, index) => ({
  name: `name${index}`,
  sex: `${index % 2 === 0 ? "女" : "男"}`,
  email: `${index}323125@qq.com`,
  birth: `200${index}`,
  id: index,
}));

async function fetchAllStudent() {
  // const response = await fetch('https://localhost/student/findAll');
  const response = await new Promise((resolve) => {
    setTimeout(()=>{
      resolve({ data })
    })
  });
  return response.data;
}

/*( async()=> {
  const data = await fetchAllStudent();
  console.log(data);
})();*/
/*let data = [];

( async()=> {
  data = await fetchAllStudent();
  console.log(data);
})();

export default function Student() {
  return  <StudentList data={data} />
}*/


export default class Student extends React.Component {

  constructor() {
    super();
    this.data = [];
    this.getData();
  }

  render() {
    /*if (this.data.length > 0) {
      console.log("render", this.data);
      return <StudentList data={this.data} />;
    }*/
    // return "数据加载中……";
    const d = this.data;
    console.log('render data', data);
    return <StudentList data={data} />;
  }

  async getData() {
    this.data = await fetchAllStudent();
    console.log('getData', this.data);
    this.render();
  }
}