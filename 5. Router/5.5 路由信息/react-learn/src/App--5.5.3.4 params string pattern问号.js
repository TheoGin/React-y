import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function News(props) {
  console.log(props.match); // {path: '/news/:year/:month/:day', url: '/news/2035/10/01', isExact: true, params: {…}}
  console.log(props.match.params); // {year: '2035', month: '10', day: '01'}
  const { year, month, day } = props.match.params;

  return (
    <div>
      <h1>显示{ year }年{ month }月{ day }日的新闻</h1>
    </div>
  );
}


function NotFound() {
  return <h1>找不到页面</h1>;
}

function App() {

  return (
    <Router>
      <Switch>
        {/*
         实际上，在书写Route组件的path属性时，可以书写一个string pattern（字符串正则）
         react-router使用了第三方库：Path-to-RegExp，该库的作用是，将一个字符串正则转换成一个真正的正则表达式。
         */ }
        {/* http://localhost:3000/news/2035/10 少一个就匹配不了
         -》正则中的 ?: 匹配前面的子表达式零次或一次。例如，"do(es)?" 可以匹配 "do" 或 "does" 。? 等价于 {0,1}。 */}
        <Route path="/news/:year?/:month?/:day?" component={ News } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;