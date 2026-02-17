import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function News(props) {

  // 该对象中保存了，路由匹配的相关信息
  // 1. isExact：事实上，当前的路径和路由配置的路径是否是精确匹配的
  // 2. params：获取路径规则中对应的数据
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
        <Route path="/news/:year/:month/:day" component={ News } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;