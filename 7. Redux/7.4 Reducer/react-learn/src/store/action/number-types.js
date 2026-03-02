// 4. 在大型项目，由于操作类型非常多，为了避免硬编码（hard code），会将action的类型存放到一个或一些单独的文件中(样板代码)。
// export const INCREASE = "increase";
export const INCREASE = Symbol("increase"); // 即便是字符串一样，生成的 key 也是不一样的

export const DECREASE = Symbol("decrease");

export const SET = Symbol("set");