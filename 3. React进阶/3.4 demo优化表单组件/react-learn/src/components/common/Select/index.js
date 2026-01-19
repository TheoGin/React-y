import React, {Component} from "react";
import PropTypes from "prop-types";

/**
 * 一组下拉框
 */
class Select extends Component {

  /**
   * 默认属性值
   */
  static defaultProps = {
    value: '',
  }

  static propTypes = {
    value: PropTypes.string.isRequired,
  }

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
        <select name={this.props.name} onChange={this.props.handleChange}>
          {options}
        </select>
      </div>
    );
  }
}

export default Select;