import App from './App'

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
App.mpType = 'app'
import uView from "node_modules/uview-ui";
Vue.use(uView);
const app = new Vue({
    ...App
})
// http拦截器，此为需要加入的内容
import httpInterceptor from 'api/http.interceptor.js'
// 这里需要写在最后，是为了等Vue创建对象完成，引入"app"对象(也即页面的"this"实例)
Vue.use(httpInterceptor, app)

// http接口API集中管理引入部分
import indexApi from 'api/index.api.js'
Vue.use(indexApi, app)

import myApi from 'api/my.api.js' 
Vue.use(myApi, app)

import commonApi from 'api/common.api.js' 
Vue.use(commonApi, app)

import socketIO from 'utils/websocket.js'
Vue.prototype.socketIo = new socketIO()

app.$mount()
// #endif

// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif