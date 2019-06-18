import { createStore } from "@mpxjs/core";
let appid = "";
// 条件编译
if (__mpx_mode__ === "wx") {
  appid = "wxeaf2f625d9601d9b";
} else {
  appid = "ttid";
}
const store = createStore({
  state: {
    msg: "",
    appid: appid
  },
  mutations: {
    update(state, parms) {
      for (let i in parms) {
        state[i] = parms[i];
      }
    }
  }
});

export default store;
