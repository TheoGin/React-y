import React from "react";
import BetterLink from "./BetterLink";
// import { Link, Route } from "react-router-dom";
// import NewsHome from "./NewsHome";
// import NewsDetail from "./NewsDetail";
// import NewsSearch from "./NewsSearch";

function News(props) {
  return (
    <div>
      {/* <Link to={ "/news/" }>新闻首页</Link>
      <Link to={ "/news/detail" }>新闻详情页</Link>
      <Link to={ "/news/search" }>新闻搜索页</Link> */}
      <BetterLink to={ { name: 'newsHome' } }>新闻首页</BetterLink>
      <BetterLink to={ { name: 'newsDetail' } }>新闻详情页</BetterLink>
      <BetterLink  to={ { name: 'newsSearch' } }>新闻搜索页</BetterLink>
      <div>
        {/* <Route path={'/news/'} exact component={NewsHome} />
         <Route path={'/news/detail'} exact component={NewsDetail} />
         <Route path={'/news/search'} exact component={NewsSearch} /> */ }
        { props.children }
      </div>
    </div>
  );
}

export default News;