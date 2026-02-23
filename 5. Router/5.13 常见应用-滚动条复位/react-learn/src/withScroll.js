import React, { Component } from "react";
import { resetScroll } from "./resetScroll";

export function withScroll(Comp) {
  return class ScrollWrapper extends Component {
    componentDidMount() {
      // window.scrollTo(0, 0);
      resetScroll();
    }

    render() {
      return <Comp { ...this.props } />;
    }
  };
}