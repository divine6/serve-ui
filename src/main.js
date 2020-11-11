import Vue from 'vue'
import App from './App'
import router from './router'
// 导入全部组件
import './components'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
