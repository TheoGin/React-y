import React, {Component} from "react";
import types from "../../../utils/commonTypes";
import PropTypes from "prop-types";

/**
 * 一组单选框
 */
class RadioBoxGroup extends Component {

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
   * 得到一组单选框
   */
  getRadios() {
    return this.props.datas.map(item => (
      <label key={item.value}>
        <input
          name={this.props.name}
          type="radio"
          value={item.value}
          checked={item.value === this.props.value}
          onChange={this.handleChange}
        />
        {item.text}
      </label>
    ));
  }

  render() {
 const radios = this.getRadios();
    return (
      <div>
        {radios}
      </div>
    );
  }
}

export default RadioBoxGroup;