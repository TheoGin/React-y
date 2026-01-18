import React, {Component} from "react";

/**
 * 一组单选框
 */
class Select extends Component {
  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  };


  /**
   * 得到一组单选框
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