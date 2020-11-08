import Vue from 'vue';
import Router from 'vue-router';

import Home from '@/views/Home.vue';
import Store from '@/views/Store.vue';

Vue.use(Router);

const routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: '/store/:id?',
    component: Store,
  },
];

const router = new Router({
  mode: 'history',
  routes,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default router;
