import React, {Component} from "react";
import Pager from "./components/Pager";
import StudentList from "./components/StudentList";
import Modal from "./components/Modal";

class PagerTest extends Component {
  state = {
    current: 1, // 当前页码
    total: 0, // 总数据条数
    // total: 100, // 总数据条数
    limit: 10, // 每页显示多少条
    // limit: 9, // 每页显示多少条
    panelNumer: 5, // 每个分页组件面板显示多少个可点击的数字
    students: [],
    isLoading: false,
  }
  constructor(props) {
    super(props);
    this.fetchStudentList()
  }

  async fetchStudentList() {
    // Mock.js 无法拦截到 fetch 请求
    /*const resp = await fetch(`http://localhost:8080/api/student/findByPage?page=${this.state.current}&limit=${this.state.limit}`)
      .then(resp => resp.json());
      .then(resp => resp.data);
     */
    this.setState({
      isLoading: true,
    });
    const xhr = new XMLHttpRequest();
    xhr.open('GET', `http://localhost:8080/api/student/findByPage?page=${this.state.current}&limit=${this.state.limit}`, true);
    xhr.onreadystatechange = ()=> {
      if (xhr.readyState === 4 && xhr.status === 200) {
        const data = JSON.parse(xhr.responseText).data;
        // console.log(data.data);
        this.setState({
          students: data.data,
          total: data.total,
        })
      }
    };
    xhr.send();
    this.setState({
      isLoading: false,
    });
  }

  handlePageChange = (newPage)=> {
    this.setState({
      current: newPage
    })
    this.fetchStudentList()
  }

  render() {
    if (this.state.isLoading) {
      return <Modal show={this.state.isLoading} />
    }
    return (
      <>
        <StudentList stus={this.state.students} />
        <Pager {...this.state} onPageChange={ this.handlePageChange }  />
      </>
    );
  }
}

export default PagerTest;