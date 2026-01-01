import ReactDOM from "react-dom";
import React from "react";
import Pager from "./components/Pager";


ReactDOM.render(<Pager data={Array(10).fill(0).map(item => ({a: item, href: 'link' + item}))}  />, document.getElementById('root'))