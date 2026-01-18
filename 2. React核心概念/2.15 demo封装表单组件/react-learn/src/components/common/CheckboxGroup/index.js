import React, {Component} from "react";

class CheckboxGroup extends Component {
  state = {
    datas: this.props.datas || [],
    chooseDatas: this.props.chooseDatas || [],
  };

  stateAfterCb = () => {
    this.props.onChoose(this.state.chooseDatas);
  };

  handleChange = (e) => {
    const value = e.target.value;
    if (e.target.checked) {
      this.setState({
        chooseDatas: [...this.state.chooseDatas, value],
      }, this.stateAfterCb);
    } else {
      this.setState({
        chooseDatas: this.state.chooseDatas.filter(item => item !== value),
      }, this.stateAfterCb);
    }
  };

  render() {
    const checkboxGroup = this.state.datas.map(item => (
      <label className="checkbox-item" key={item.value}>
        <input
          type="checkbox"
          value={item.value}
          checked={this.state.chooseDatas.includes(item.value)}
          onChange={this.handleChange}
        />
        <span>{item.text}</span>
      </label>
    ));
    return (
      <div>
        {checkboxGroup}
      </div>
    );
  }
}

export default CheckboxGroup;