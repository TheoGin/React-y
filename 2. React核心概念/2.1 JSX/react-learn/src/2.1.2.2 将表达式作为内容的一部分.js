import React from "react";
import ReactDOM from "react-dom";

const obj = {
  a: 1,
};

// Warning: Each child in a list should have a unique "key" prop.
const liArr = Array(10).fill(0).map((item, index) => <li key={index}>{index}</li>);

const reactHTMLSpanElement = React.createElement('span', {}, 'React span元素 对象');

const a = 2, b = 3;

const arrIncludeUndef = [
  1,
  null,
  undefined,
  false,
  3
]

const div = (
  <div>
    <p> { a } * { b} = { a * b }</p>
    {/* 1. null、undefined、false不会显示（如果要显示可以用字符串包起来） */}
    <p>{null}</p>
    <p>{undefined}</p>
    <p>{false}</p>
    {/* 如果要显示可以用字符串包起来 */}
    <p>{"false"}</p>

    {/* 2. 普通对象，不可以作为子元素
    Error: Objects are not valid as a React child (found: object with keys {}). If you meant to render a collection of children, use an array instead.
    */}
    {/*<p>{ obj }</p>*/}

    {/* 3. 可以放置React元素对象 */}
    <p>{ reactHTMLSpanElement }</p>

    {/* 数组会自动循环 */}
    <ul>
      { liArr }
    </ul>

    {/* 会自动过滤掉不能显示的 */}
    <p>{ arrIncludeUndef }</p>
  </div>
);

ReactDOM.render(div, document.getElementById("root"));
