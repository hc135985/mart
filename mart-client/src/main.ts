import Vue from 'vue';
import App from './App.vue';
import store from './store';
import router from './router';

import 'amfe-flexible';
import './registerServiceWorker';

Vue.config.productionTip = false;

new Vue({
  el: '#app',
  router,
  store,
  render: (h) => h(App),
});
