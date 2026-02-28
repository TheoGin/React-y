import React, { Component } from "react";
import { Router } from "../react-router/history/Router";
import { createBrowserHistory } from "../react-router/history";
import PropTypes from "prop-types";

class BrowserRouter extends Component {
  static propTypes = {
    basename: PropTypes.string,
    keyLength: PropTypes.number,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
  };

  /* constructor(props) {
   super(props);
   const { children, ...rest } = props;
   this.history = createBrowserHistory({
   ...rest,
   });
   window.h = this.history;
   } */

  history = createBrowserHistory(this.props);

  setHistoryAction = (action) => {
    this.history.action = action;
  };

  render() {
    return (
      <Router history={ this.history } setHistoryAction={ this.setHistoryAction }>
        { this.props.children }
        <button onClick={ () => {
          this.history.push("/aaa");
        } }>to aaa
        </button>
      </Router>
    );
  }
}

export default BrowserRouter;