// @ts-nocheck
import Vue from 'vue';

import store from '@/store/index';
import router from '@/router/router';
import App from './App.vue';

Vue.config.productionTip = true;

new Vue({
  router,
  store,
  render: (h) => h(App, { }),
}).$mount('#app');
