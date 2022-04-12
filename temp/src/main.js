import Vue from 'vue'
import App from './App.vue'
import Home from './Home.vue';
import VueRouter from 'vue-router'

Vue.config.productionTip = false

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/electric',
    name: 'Electric',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './themes/electric/ElectricHome.vue')
  },
  {
    path: '/classic',
    name: 'Classic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './themes/classic/ClassicHome.vue')
  },
  {
    path: '/sporty',
    name: 'E-Sports',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ './themes/esports/ESportsHome.vue')
  }
];

const router = VueRouter.createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: VueRouter.createWebHashHistory(),
  routes, // short for `routes: routes`
});

const app = Vue.createApp({
  render: h => h(App)
});
app.use(router);
app.mount('#app');
