import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function News(props) {
  console.log(props.match); // {path: '/news/:year(\d+)/:month(\d+)/:day(\d+)', url: '/news/2035/10/01', isExact: true, params: {…}}
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
        {/* http://localhost:3000/news/2026/10/01sd 会匹配不上 */}
        <Route path="/news/:year(\d+)/:month(\d+)/:day(\d+)" component={ News } />
        <Route component={ NotFound } />
      </Switch>
    </Router>
  );
}

export default App;