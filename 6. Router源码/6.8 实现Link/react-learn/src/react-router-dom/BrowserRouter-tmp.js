import React, { Component } from "react";
import { Router } from "./index";
import { createBrowserHistory } from "./history";
import PropTypes from "prop-types";

/* class BrowserRouter extends Component {
 static propTypes = {
 basename: PropTypes.string,
 keyLength: PropTypes.number,
 forceRefresh: PropTypes.bool,
 getUserConfirmation: PropTypes.func,
 };

 history = createBrowserHistory(this.props);

 setHistoryAction = (action) => {
 this.history.action = action;
 };

 render() {
 return (
 <Router history={ this.history } setHistoryAction={ this.setHistoryAction }>
 { this.props.children }
 </Router>
 );
 }
 } */

export let history;

class BrowserRouter extends Component {
  static propTypes = {
    basename: PropTypes.string,
    keyLength: PropTypes.number,
    forceRefresh: PropTypes.bool,
    getUserConfirmation: PropTypes.func,
  };

  constructor(props) {
    super(props);
    this.history = createBrowserHistory(this.props);
    history = this.history;
  }

  setHistoryAction = (action) => {
    this.history.action = action;
  };

  render() {
    console.log(this.props.children);
    return (
      <Router history={ this.history } setHistoryAction={ this.setHistoryAction }>
        { this.props.children }
      </Router>
    );
  }
}

export default BrowserRouter;