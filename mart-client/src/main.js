import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './config/vant'
import ui from 'hc-vue-ui'
Vue.use(ui.BScroll)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
