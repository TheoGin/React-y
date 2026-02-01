import React, {Component} from "react";
import types from "../../../utils/commonTypes";
import PropTypes from "prop-types";

/**
 * 一组下拉框
 */
class Select extends Component {

  /**
   * 默认属性值
   */
  static defaultProps = {
    datas: [],
    value: '',
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    datas: types.groupDatas.isRequired, // 不在commonTypes加必填，可以在这加必填
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func, // 可以不是必填
  }

  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  };


  /**
   * 得到一组下拉框
   */
  getOptions() {
    return this.props.datas.map(item => (
      <option value={item.value} key={item.value}>
        {item.text}
      </option>
    ));
  }

  render() {
 const options = this.getOptions();
    return (
      <div>
        <select name={this.props.name} onChange={this.handleChange}>
          {options}
        </select>
      </div>
    );
  }
}

export default Select;