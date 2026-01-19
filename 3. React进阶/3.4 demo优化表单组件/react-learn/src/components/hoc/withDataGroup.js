import React, {Component} from "react";
import types from "../../utils/commonTypes";
import PropTypes from "prop-types";


export default function WithDataGroup(Comp) {
  return class WithDataGroupWrapper extends Component {

    /**
     * 默认属性值
     */
    static defaultProps = {
      datas: [],
      value: "",
    };

    static propTypes = {
      name: PropTypes.string.isRequired,
      datas: types.groupDatas.isRequired, // 不在commonTypes加必填，可以在这加必填
      value: PropTypes.string.isRequired,
      onChange: PropTypes.func, // 可以不是必填
    };

    handleChange = (e) => {
      let value = e.target.value;
      if (e.target.type === "checkbox") {
        if (e.target.checked) {
          value = [...this.props.chooseDatas, value];
        } else {
          value = this.props.chooseDatas.filter(item => item !== value);
        }
      }
      this.props.onChange && this.props.onChange(value, this.props.name, e);
    };

    render() {
      return <Comp {...this.props} handleChange={this.handleChange} />;
    }
  };
}