import Mock from "mockjs";
import qs from "querystring";

// 设置请求响应时间
Mock.setup({
  timeout: "100-500",
});

// 使用完整的URL正则匹配，支持任何参数组合
// 参考Vue示例中的正则模式 /^\/api\/blog(\?.+)?$/
Mock.mock(/^http:\/\/localhost:3000\/api\/student\/findByPage/, "get", function (options) {
  // console.log('Mock拦截到请求:', options);

  // 解析URL参数 - 与Vue示例中使用q s.parse的方式一致
  const url = options.url;
  const queryString = url.split("?")[1] || "";
  const params = qs.parse(queryString);

  // 获取页码和每页数量，默认值与Vue示例一致
  const page = parseInt(params.page) || 1;
  const limit = parseInt(params.limit) || 200;

  // 生成模拟数据，参考Vue示例的结构
  return Mock.mock({
    msg: "查询成功",
    status: "success",
    data: {
      total: 100,
      // 动态生成指定数量的数据行
      [`data|${ limit }`]: [{
        "id|+1": (page - 1) * limit + 1, // 确保ID根据页码正确计算
        name: "@cname",
        "sex|1": [1, 2],
        birthYear: "@date('yyyy')",
        // 属性名为 mail ，值为随机邮箱
        mail: "@email",
        // 属性名为 addr ，值为随机地址
        addr: "@county(true)",
        // 属性名为 iphone ，值为随机手机号，使用mock.js的方法，但不是 @phone 否则变为 iphone: "@phone"
        iphone:  /^1[3-9]\d{9}$/
      }],
    },
  });
});

/*// Mock.js 无法拦截到 fetch 请求
 (async ()=> {
 const xhr = new XMLHttpRequest();
 xhr.open('GET', 'http://localhost:8080/api/student/findByPage?page=1&limit=10', true);
 xhr.onreadystatechange = function() {
 if (xhr.readyState === 4 && xhr.status === 200) {
 console.log(JSON.parse(xhr.responseText));
 }
 };
 xhr.send();
 })()*/
