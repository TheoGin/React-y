import React, { Component } from "react";
import PropTypes from "prop-types";

class StudentSearchBar extends Component {
  static propTypes = {
    searchBySexAndKeyword: PropTypes.func,
  };

  /* state = {
    keyword: "abc",
    sex: -1,
  }; */

  constructor(props) {
    super(props);

    const def = {
      keyword: "",
      sex: -1,
    };

    // 地址栏 和 搜索栏 两边同时同步
    this.state = Object.assign({}, def, props.defaultValue);
    // console.log(this.state);
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.name === "sex" ? +e.target.value : e.target.value,
    });
  };

  render() {
    return (
      <div>
        关键字：<input type="text" name="keyword" value={ this.state.keyword } onChange={ this.handleChange } />
        性别：
        <label>
          {/* 注：sex 的值是 number 类型 */ }
          <input type="radio" name="sex" value={ -1 } checked={ this.state.sex === -1 }
                 onChange={ this.handleChange } />
          不限
        </label>
        <label>
          <input type="radio" name="sex" value={ 1 } checked={ this.state.sex === 1 } onChange={ this.handleChange } />
          男
        </label>
        <label>
          <input type="radio" name="sex" value={ 0 } checked={ this.state.sex === 0 } onChange={ this.handleChange } />
          女
        </label>
        <button onClick={ () => {
          /* this.props.searchBySexAndKeyword && this.props.searchBySexAndKeyword({
            keyword: this.state.keyword,
            sex: this.state.sex,
          }); */
          this.props.searchBySexAndKeyword && this.props.searchBySexAndKeyword(this.state);
        } }>查询
        </button>
      </div>
    );
  }
}

export default StudentSearchBar;