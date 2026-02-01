import React, { Component } from "react";
import "./index.css";
import { imgPathArr } from "../types";
import PropTypes from "prop-types";


class SwitchDot extends Component {
  static propTypes = {
    srcs: imgPathArr.srcs.isRequired,
    currentIndex: PropTypes.number.isRequired,
    onChange: PropTypes.func,
  };

  render() {
    const dots = this.props.srcs.map((src, index) => (
      <span
        key={ src }
        className={ index === this.props.currentIndex ? "dot active" : "dot" }
        onClick={ () => {
          this.props.onChange && this.props.onChange(index);
        } } />
    ));

    return (
      <div className="dots">
        { dots }
      </div>
    );
  }
}

export default SwitchDot;