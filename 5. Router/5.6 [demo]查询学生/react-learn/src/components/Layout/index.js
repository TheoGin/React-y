import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

class Layout extends Component {

  static propTypes = {
    header: PropTypes.element,
    aside: PropTypes.element,
    // children: PropTypes.element,

    // Warning: Failed prop type: Invalid prop `children` of type `array` supplied to `Layout`, expected a single ReactElement. 另一种处理方式，改为 node
    children: PropTypes.node,
  };

  render() {
    return (
      <div className="layout-container">
        <header
          className="header"
        >
          { this.props.header }
        </header>
        <div className="middle">
          <aside className="aside">
            { this.props.aside }
          </aside>
          <main className="main">
            { this.props.children }
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;