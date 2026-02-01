import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";


class SwitchArrow extends Component {
  static propTypes = {
    currentIndex: PropTypes.number.isRequired,
    onChange: PropTypes.func,
  };

  render() {
    return (
      <div>
        <div className="left arrow" onClick={ () => {
          this.props.onChange && this.props.onChange(this.props.currentIndex - 1);
        } }>&lt;</div>
        <div className="right arrow" onClick={ () => {
          this.props.onChange && this.props.onChange(this.props.currentIndex + 1);
        } }>&gt;</div>
      </div>
    );
  }
}

export default SwitchArrow;