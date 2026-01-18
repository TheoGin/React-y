import React, {Component} from "react";

/**
 * 一组单选框
 */
class RadioBoxGroup extends Component {
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