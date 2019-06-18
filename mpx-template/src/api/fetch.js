import mpx from "@mpxjs/core";
import mpxFetch from "@mpxjs/fetch";
mpx.use(mpxFetch);

mpx.xfetch.interceptors.request.use(function(config) {
  // 也可以返回promise
  return config;
});
mpx.xfetch.interceptors.response.use(function(res) {
  // 也可以返回promise
  return res.data;
});

export default {
  get(url, params) {
    let cookieStr = "";
    let keyValue = wx.getStorageSync("key");
    if (keyValue) {
      cookieStr = cookieStr + "key=" + keyValue + "; ";
    }
    return mpx.xfetch.fetch({
      url,
      data: params,
      credentials: "include",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        Cookie: cookieStr
      },
      method: "GET"
    });
  },
  post(url, params) {
    let cookieStr = "";
    let keyValue = wx.getStorageSync("key");
    if (keyValue) {
      cookieStr = cookieStr + "key=" + keyValue + "; ";
    }
    return mpx.xfetch.fetch({
      url,
      data: params,
      credentials: "include",
      header: {
        "content-type": "application/x-www-form-urlencoded",
        Cookie: cookieStr
      },
      method: "POST"
    });
  }
};
