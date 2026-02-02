import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";


class SwitchArrow extends Component {
  static propTypes = {
    onChange: PropTypes.func,
  };

  render() {
    return (
      <div className="arrow-container">
        <div
          className="left arrow"
          onClick={ () => {
            this.props.onChange && this.props.onChange("left");
          } }
        >
          &lt;
        </div>
        <div
          className="right arrow"
          onClick={ () => {
            this.props.onChange && this.props.onChange("right");
          } }
        >
          &gt;
        </div>
      </div>
    );
  }
}

export default SwitchArrow;