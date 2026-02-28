import React from "react";

const context = React.createContext();

// 改变调试工具 Components 面板组件展示名字
context.displayName = 'Router'

export default context;