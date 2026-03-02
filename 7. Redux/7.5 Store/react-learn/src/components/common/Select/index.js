import React, {Component} from "react";
import PropTypes from "prop-types";
import WithDataGroup from "../hoc/withDataGroup";
import types from "../../../utils/commonTypes";

/**
 * 一组下拉框
 */
class Option extends Component {
  static propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    info: types.singleData.isRequired,
    onChange: PropTypes.func,
  };

  render() {
    return (
      <option value={this.props.info.value} key={this.props.info.value}>
        {this.props.info.text}
      </option>
    );
  }
}

const OptionsGroup = WithDataGroup(Option);
class Select extends Component {
  render() {
    return (
      <select
        name={this.props.name}
        onChange={(e) => {
          this.props.onChange && this.props.onChange(e.target.value);
        }}
      >
        {/*<OptionsGroup/>*/}
        {/* 属性还要接着往下传！！！ */}
        <OptionsGroup {...this.props} />
      </select>
    );
  }
}

export default Select;
