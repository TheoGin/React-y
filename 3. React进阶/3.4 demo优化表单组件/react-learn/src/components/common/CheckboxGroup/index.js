import React, {Component} from "react";
import types from "../../../utils/commonTypes";
import WithDataGroup from "../../hoc/withDataGroup";
import PropTypes from "prop-types";

/**
 * 一组多选框
 */
class CheckboxGroup extends Component {

  static defaultProps = {
    chooseDatas: [],
  }

  static propTypes = {
    name: PropTypes.string.isRequired,
    chooseDatas: types.chooseDatas,
    info: types.singleData.isRequired,
    onChange: PropTypes.func
  }

  handleChange = (e) => {
    const value = e.target.value;
    let newArr;
    if (e.target.type === "checkbox") {
      if (e.target.checked) {
        newArr = [...this.props.chooseDatas, value];
      } else {
        newArr = this.props.chooseDatas.filter(item => item !== value);
      }
    }
    this.props.onChange && this.props.onChange(newArr);
  };

  render() {
    return (
      <label>
        <input
          name={this.props.name}
          type="checkbox"
          value={this.props.info.value}
          checked={this.props.chooseDatas.includes(this.props.info.value)}
          onChange={this.handleChange}
        />
        <span>{this.props.info.text}</span>
      </label>
    );
  }
}

export default WithDataGroup(CheckboxGroup);
