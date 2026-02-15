import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

class Layout extends Component {

  static propTypes = {
    header: PropTypes.node,
    headerHeight: PropTypes.number,
    headerBg: PropTypes.string,
    left: PropTypes.node,
    leftWidth: PropTypes.number,
    leftBg: PropTypes.string,
    children: PropTypes.node,
  };

  static defaultProps = {
    headerHeight: 60,
    headerBg: "#333333",
    leftWidth: 200,
    leftBg: "lightblue",
  };

  render() {
    return (
      <div className='layout'>
        <header
          className="header"
          style={ {
            height: this.props.headerHeight,
            background: this.props.headerBg,
          } }
        >
          { this.props.header }
        </header>
        <aside
          className="aside-left"
          style={ {
            width: this.props.leftWidth,
            background: this.props.leftBg,
          } }
        >
          { this.props.left }
        </aside>
        { this.props.children }
      </div>
    );
  }
}

export default Layout;