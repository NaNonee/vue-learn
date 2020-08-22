// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import echarts from 'echarts'
import './plugins/element.js'
import axios from 'axios'
import '@/assets/css/global.css' //导入全局样式表
import 'element-ui/lib/theme-chalk/index.css' //Elment-ui的配置
// 导入字体图标
import './assets/fonts/iconfont.css'
Vue.config.productionTip = false
// 挂在到Vue实例，后面可通过this调用
Vue.prototype.$http = axios
axios.defaults.baseURL = 'https://www.liulongbin.top:8888/api/private/v1/'
Vue.prototype.$echarts = echarts
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
