import React, { Component } from "react";
import { Router } from "../react-router/history/Router";
import { createBrowserHistory } from "../react-router/history";

class BrowserRouter extends Component {

  constructor(props) {
    super(props);
    const { children, ...rest } = props;
    this.history = createBrowserHistory({
      ...rest,
    });
  }

  render() {
    return (
      <Router history={ this.history }>
        { this.props.children }
      </Router>
    );
  }
}

export default BrowserRouter;