import React, {Component} from "react";

class RadioBoxGroup extends Component {
  handleChange = (e) => {
    this.props.onChange && this.props.onChange(e.target.value, this.props.name, e);
  };

  getRadioboxes() {
    return this.props.datas.map(item => (
      <label key={item.value}>
        <input
          name={this.props.name}
          type="radio"
          value={item.value}
          checked={item.value === this.props.checked}
          onChange={this.handleChange}
        />
        {item.text}
      </label>
    ));
  }

  render() {
 const radioboxes = this.getRadioboxes();
    return (
      <div>
        {radioboxes}
      </div>
    );
  }
}

export default RadioBoxGroup;