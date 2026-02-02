import React from "react";

const context = React.createContext(/* {
 formData: {
 loginId: "",
 loginPwd: "",
 },
 } */);

export default context;

// 方便外部使用
export const { Provider, Consumer } = context;