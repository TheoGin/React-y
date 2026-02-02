import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";


class SwitchDot extends Component {
  static propTypes = {
    total: PropTypes.number.isRequired,
    currentIndex: PropTypes.number.isRequired,
    onChange: PropTypes.func,
  };

  render() {
    const dots = this.getDots();

    return (
      <div className="dots">
        { dots }
      </div>
    );
  }

  getDots() {
    const dots = [];
    for (let i = 0; i < this.props.total; i++) {
      dots.push(
        <span
          key={ i }
          className={ i === this.props.currentIndex ? "dot active" : "dot" }
          onClick={ () => {
            this.props.onChange && this.props.onChange(i);
          } } />,
      );
    }
    return dots;
  }
}

export default SwitchDot;