import React, { Component } from "react";
import "./index.css";
import PropTypes from "prop-types";

class Layout extends Component {

  static propTypes = {
    header: PropTypes.element,
    aside: PropTypes.element,
    children: PropTypes.element,
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
          <aside
            className="aside"
          >
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