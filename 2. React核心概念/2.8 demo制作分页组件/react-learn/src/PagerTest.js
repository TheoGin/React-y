import React, {Component} from "react";
import Pager from "./components/Pager";

class PagerTest extends Component {
  state = {
    current: 12, // 当前页码
    // total: 0, // 总数据条数
    total: 100, // 总数据条数
    // limit: 10, // 每页显示多少条
    limit: 9, // 每页显示多少条
    panelNumer: 5, // 每个分页组件面板显示多少个可点击的数字
  }

  handlePageChange = (newPage)=> {
    this.setState({
      current: newPage
    })
  }

  render() {
    return (
      <Pager {...this.state} onPageChange={ this.handlePageChange }  />
    );
  }
}

export default PagerTest;