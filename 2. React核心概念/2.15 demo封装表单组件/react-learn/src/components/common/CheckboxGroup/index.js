import React, {Component} from "react";

class CheckboxGroup extends Component {
  handleChange = (e) => {
    const value = e.target.value;
    let newArr;
    if (e.target.checked) {
      newArr = [...this.props.chooseDatas, value];
    } else {
      newArr = this.props.chooseDatas.filter(item => item !== value);
    }
    // 加上 this.props.onChange &&  防止没有报错
    this.props.onChange && this.props.onChange(newArr, this.props.name, e);
  };

  getCheckboxes() {
    return this.props.datas.map(item => (
      <label className="checkbox-item" key={item.value}>
        <input
          name={this.props.name}
          type="checkbox"
          value={item.value}
          checked={this.props.chooseDatas.includes(item.value)}
          onChange={this.handleChange}
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

export default CheckboxGroup;