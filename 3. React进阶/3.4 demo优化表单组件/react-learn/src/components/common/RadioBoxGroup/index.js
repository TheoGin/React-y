import React, {Component} from "react";
import PropTypes from "prop-types";
import WithDataGroup from "../../hoc/withDataGroup";

/**
 * 一组单选框
 */
class RadioBoxGroup extends Component {

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
          onChange={this.props.handleChange}
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

export default WithDataGroup(RadioBoxGroup);