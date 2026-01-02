import React from "react";
import './Pager.css'

/**
 * 总共有多少页
 * @param props 所有属性对象
 * @returns {number} 返回总共有多少页数
 */
function getPageNumber(props) {
  // 如 100 / 9 = 11.11111...，则需要 12页，所以需要向上取整才放得下多出的一条数据
  return Math.ceil(props.total / props.limit);
}

/**
 * 要跳转哪一页
 * @param target 目标页码
 * @param props 所有属性对象
 */
function toPage(target, props) {
  props.onPageChange && props.onPageChange(target);
}

/**
 * 面板展示最小页码
 * @param props 所有属性对象
 * @returns {number} 面板展示最小页码
 */
function getMinPanelNumber(props) {
  // 5 / 2 = 2.5，需要向下取整
  let min = props.current - Math.floor(props.panelNumer / 2);
  if (min < 1) {
    // 如果 props.current为 1，则 1 - 2 = -1
    min = 1;
  }
  return min;
}

/**
 * 面板展示最大页码
 * @param props
 * @param minPanelNumber
 * @param pageNumber 总共有多少页
 * @returns {number} 面板展示最大页码
 */
function getMaxPanelNumber(props, minPanelNumber, pageNumber) {
  let max = minPanelNumber + props.panelNumer - 1; // 最小面板页码自身占一个位置
  if (max > pageNumber) {
    // 如果 props.current为 pageNumber，则相加会超过 总页数
    max = pageNumber;
  }
  return max;
}

/**
 * 分页组件
 * @param props 所有属性对象
 * @returns {JSX.Element} React元素
 * @constructor
 */
function Pager(props) {
  if (props.total === 0) {
    // 没有数据的时候不显示，避免显示： 0 / 100
    return null;
  }

  // 总共有多少页
  const pageNumber = getPageNumber(props);

  // 面板展示最小页码
  const minPanelNumber = getMinPanelNumber(props);

  // 面板展示最大页码
  const maxPanelNumber = getMaxPanelNumber(props, minPanelNumber, pageNumber);

  // 页码生成
  const panelNumbers = [];
  for (let i = minPanelNumber; i <= maxPanelNumber; i++) {
    panelNumbers.push(
      <span
        className={props.current === i ? 'item active' : 'item'}
        key={i}
        onClick={ () => (toPage(i, props)) }
      >
        { i }
      </span>
    )
  }

  return (
    <div>
      {/* onClick={toPage(1, props)} 不能直接调用，要当做回调传递 */}
      <span
        className={props.current === 1 ? 'item disabled' : 'item'}
        onClick={() => toPage(1, props)}
      >
        首页
      </span>
      <span
        className={props.current === 1 ? 'item disabled' : 'item'}
        onClick={ () => toPage(props.current - 1 < 1 ? 1 : props.current - 1, props)}
      >
        上一页
      </span>
      {/* 页码 */}
      {panelNumbers}
      <span
        className={props.current === pageNumber ? 'item disabled' : 'item'}
        onClick={ () => toPage(props.current + 1 > pageNumber ? pageNumber : props.current + 1, props)}
      >
        下一页
      </span>
      <span
        className={props.current === pageNumber ? 'item disabled' : 'item'}
        onClick={() => toPage(pageNumber, props)}
      >
        尾页
      </span>
      <span className="current">{props.current} </span>
       /
      <span> {props.total}</span>
    </div>
  );
}

export default Pager;