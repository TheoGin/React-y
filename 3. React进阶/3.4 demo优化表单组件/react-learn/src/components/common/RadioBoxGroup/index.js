import React, {Component} from "react";
import PropTypes from "prop-types";
import WithDataGroup from "../../hoc/withDataGroup";
import types from "../../../utils/commonTypes";

/**
 * 一组单选框
 */
class RadioBoxGroup extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    info: types.singleData.isRequired,
    onChange: PropTypes.func,
  };

  render() {
    return (
      <label>
        <input
          name={this.props.name}
          type="radio"
          value={this.props.info.value}
          checked={this.props.info.value === this.props.value}
          onChange={(e) => {
            this.props.onChange && this.props.onChange(e.target.value);
          }}
        />
        {this.props.info.text}
      </label>
    );
  }
}

export default WithDataGroup(RadioBoxGroup);