/* export const routerConfig = {
 user: {
 root: "/user",
 update: "/user/update",
 pay: {
 root: "/user/pay",
 before: "/user/pay/before",
 after: "/user/pay/after",
 },
 },
 }; */
const routerConfig = {
  user: {
    root: "/u",
    update: "/update",
    pay: {
      root: "/pay",
      before: "/before",
      after: "/after",
    },
  },
};

function setRouterConfigPrefix() {
  _setRouterConfigPrefix(routerConfig, "");
}


/**
 * 将该对象的每一个字符串属性，前面添加basePath
 * 如果属性名为root，则直接添加basePath
 * 如果属性名不是root，则添加basePath/root属性值
 * 如果属性不是字符串，递归调用该方法
 * @param {*} obj
 * @param {*} basePath
 */
function _setRouterConfigPrefix(obj, basePath) {
  // const newBaseUrl = obj.root || "";
  const newBaseUrl =basePath + (obj.root || "");
  for (const prop in obj) {
    const value = obj[prop];
    if (typeof value === "string") {
      if (prop === "root") {
        obj[prop] = basePath + value;
      } else {
        obj[prop] = newBaseUrl + value;
      }
    } else {
      // 递归
      _setRouterConfigPrefix(value, newBaseUrl);
    }
  }
}

setRouterConfigPrefix();
// console.log(routerConfig);

export {routerConfig};