import React, {Component} from "react";
import Pager from "./Pager";
import StudentList from "./StudentList";
import Modal from "./Modal";

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
    console.log(props);
    // Warning: Can't call setState on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the PagerTest component.
    // this.getStudentss()
  }

  componentDidMount() {
    this.getStudentss()
  }

  async getStudentss() {
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
          isLoading: false,
        })
      }
    };
    xhr.send();
  }

  handlePageChange = (newPage)=> {
    this.setState({
      current: newPage
    })
    this.getStudentss()
  }

  render() {
    /*if (this.state.isLoading) {
      return <Modal show={this.state.isLoading} />
    }*/
    return (
      <div style={
        {
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }
      }>
        <StudentList stus={this.state.students} />
        <Pager {...this.state} onPageChange={ this.handlePageChange }  />
        <Modal show={this.state.isLoading} />
      </div>
    );
  }
}

export default PagerTest;