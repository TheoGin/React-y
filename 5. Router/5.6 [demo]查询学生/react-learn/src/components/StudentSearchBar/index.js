import React, { Component } from "react";
import PropTypes from "prop-types";

class StudentSearchBar extends Component {
  static propTypes = {
    searchBySexAndKeyword: PropTypes.func,
  };

  state = {
    keyword: "",
    sex: "",
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div>
        关键字：<input type="text" name="keyword" value={ this.state.keyword } onChange={ this.handleChange } />
        性别：
        <label>
          <input type="radio" name="sex" value="" checked={ this.state.sex === "" } onChange={ this.handleChange } />
          不限
        </label>
        <label>
          <input type="radio" name="sex" value="1" checked={ this.state.sex === "1" } onChange={ this.handleChange } />
          男
        </label>
        <label>
          <input type="radio" name="sex" value="2" checked={ this.state.sex === "2" } onChange={ this.handleChange } />
          女
        </label>
        <button onClick={ () => {
          this.props.searchBySexAndKeyword && this.props.searchBySexAndKeyword(this.state.keyword, this.state.sex);
        } }>查询
        </button>
      </div>
    );
  }
}

export default StudentSearchBar;