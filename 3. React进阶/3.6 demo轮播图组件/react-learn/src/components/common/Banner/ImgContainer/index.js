import React, { Component } from "react";
import "./index.css";
import { imgPathArr } from "../types";

ImgContainer.propTypes = {
  srcs: imgPathArr.srcs.isRequired,
};

function ImgContainer(props) {
  return (
    <img src={ props.srcs[props.currentIndex] } alt="" />
  );
}

export default ImgContainer;

/*
 class ImgContainer extends Component {
 static propTypes = {
 srcs: imgPathArr.srcs.isRequired,
 };

 render() {
 return (
 <img src={ this.props.srcs[this.props.currentIndex] } alt="" />
 );
 }
 }

 export default ImgContainer;*/
