import React from "react";
import { NavLink } from "react-router-dom";
import './page.css'

export function NavBar() {
  return (
    <nav className="nav">
      <NavLink exact to={ "/" }>首页</NavLink>
      <NavLink exact to={ "/news" }>新闻页</NavLink>
      <NavLink exact to={ "/personal" }>个人中心</NavLink>
    </nav>
  );
}

export function Home() {
  return (
    <div className="page home">
      <h1>首页</h1>
    </div>
  );
}

export function News() {
  return (
    <div className="page news">
      <h1>新闻页</h1>
    </div>
  );
}

export function Personal() {
  return (
    <div className="page personal">
      <h1>个人中心</h1>
    </div>
  );
}
