import App from './App'

// #ifndef VUE3
import Vue from 'vue'
import './uni.promisify.adaptor'
import uView from './uni_modules/uview-ui'
import api from './common/api.js'
Vue.use(uView)



Vue.prototype.$url="http://8.130.36.149:8008/api"
const MQTT = require('mqtt/dist/mqtt.js')
Vue.prototype.$MQTT = MQTT;  //挂载在 Vue 实例上
Vue.prototype.$request = api

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif
uni.$u.http.setConfig((config) => {
    /* config 为默认全局配置*/
    config.baseURL = `http://8.130.36.149:8008/api`; /* 根域名 */
    return config
})
// #ifdef VUE3
import { createSSRApp } from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif

// #ifndef MP
// 处理 wx.connectSocket promisify 兼容问题，强制返回 SocketTask
uni.connectSocket = (function (connectSocket) {
  return function (options) {
    options.success = options.success || function () {}
    return connectSocket.call(this, options)
  }
})(uni.connectSocket)
// #endif
