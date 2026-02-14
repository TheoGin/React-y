import React from "react";
import { CSSTransition } from "react-transition-group";
import PropTypes from "prop-types";
import "./index.css";

FadeTransition.defaultProps = {
  timeout: 500, // 同时控制 状态切换 和 过渡时间
};

FadeTransition.propTypes = {
  timeout: PropTypes.number,
};

function FadeTransition(props) {

  function addTransition(domNode) {
    // 指定过渡元素为 opacity
    domNode.style.transition = `opacity ${ props.timeout }ms`;
  }

  function removeTransition(domNode) {
    domNode.style.transition = ``;
  }

  return (
    // 不希望外面使用者传递的 classNames 覆盖"fade"，classNames 需要写在 {...props} 的后面
    // appear 也是调用 onEnter 和 onEntered 钩子
    // onEntered: An extra parameter isAppearing is supplied to indicate if the enter stage is occurring on the initial mount
    // timeout={ props.timeout }可以不用写，{ ...props }已经展开了
    <CSSTransition
      { ...props }
      classNames="fade"
      onEnter={ addTransition }
      onEntered={ (domNode, isAppearing) => {
        removeTransition(domNode);

        props.onEntered && props.onEntered(domNode, isAppearing);
      } }
      onExit={ addTransition }
      onExited={ domNode => {
        removeTransition(domNode);

        props.onExited && props.onExited(domNode);
      } }
    >
      { props.children }
    </CSSTransition>
  );
}

export default FadeTransition;