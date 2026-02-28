import React from "react";
import PropTypes from "prop-types";
import context from "./RouterContext";
import { matchPath } from "../matchPath";

export class Router extends React.Component {
  static propTypes = {
    children: PropTypes.node,
    // history: PropTypes.object
  };

  state = {
    location: this.props.history.location,
  };

  componentDidMount() {
    this.props.history.listen((location, action) => {
      // action
      this.setState({
        location,
      });
    });
  }

  render() {

    const ctxValue = {
      history: this.props.history,
      location: this.state.location,
      match: matchPath("/"),
    };
    console.log(ctxValue);

    return (
      <context.Provider value={ ctxValue }>
        { this.props.children }
      </context.Provider>
    );
  }
}