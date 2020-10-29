import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';
import Plugin from '@/utils/plugin';
import 'amfe-flexible';

Vue.use(Plugin)
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
