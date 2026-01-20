import React, {Component} from "react";
import types from "../../../utils/commonTypes";
import WithDataGroup from "../../hoc/withDataGroup";

/**
 * 一组多选框
 */
class CheckboxGroup extends Component {

  static defaultProps = {
    chooseDatas: [],
  }

  static propTypes = {
    chooseDatas: types.chooseDatas,
  }

  /**
   * 得到一组多选框
   */
  getCheckboxes() {
    return this.props.datas.map(item => (
      <label className="checkbox-item" key={item.value}>
        <input
          name={this.props.name}
          type="checkbox"
          value={item.value}
          checked={this.props.chooseDatas.includes(item.value)}
          onChange={this.props.handleChange}
        />
        <span>{item.text}</span>
      </label>
    ));
  }

  render() {
    const checkboxes = this.getCheckboxes();
    return (
      <div>
        {checkboxes}
      </div>
    );
  }
}

export default WithDataGroup(CheckboxGroup);
