export const loginInfo = {
  isLogin: false,
  login() {
    this.isLogin = true;
  },
  loginOut() {
    this.isLogin = false;
  },
};