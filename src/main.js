import Vue from 'vue'
import ElementUI from 'element-ui'
import zrender from 'zrender'
import App from './App.vue'
import router from './router'
import store from './store'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/common.less'

Vue.config.productionTip = false
Vue.prototype.zrender = zrender
Vue.use(ElementUI)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
