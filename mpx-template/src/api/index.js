import fetch from "./fetch";

export default {
  // get请求
  getRequest() {
    return fetch.get("https://url");
  },
  // post请求
  potRequest(params) {
    return fetch.post("https://url", params);
  }
};
