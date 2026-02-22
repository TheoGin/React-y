import Home from "./Home";
import News from "./News";
import NewsHome from "./NewsHome";
import NewsDetail from "./NewsDetail";
import NewsSearch from "./NewsSearch";

export const routesConfig = [
  {
    path: "/",
    component: Home,
    exact: true,
    name: 'home',
  },
  {
    path: "/news",
    component: News,
    // exact: true,
    name: 'news',
    children: [
      {
        path: "/",
        component: NewsHome,
        exact: true,
        name: 'newsHome',
      },
      {
        path: "/detail",
        component: NewsDetail,
        exact: true,
        name: 'newsDetail',
      },
      {
        path: "/search",
        component: NewsSearch,
        exact: true,
        name: 'newsSearch',
      },
    ]
  },
];