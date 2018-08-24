import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Index from './components/Index'
import List from './components/List'
import Artists from './components/Artists'
import Artist from './components/Artist'
import Album from './components/Album'

import './assets/animate.scss'
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Index,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/list',
    component: List,
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/artists',
    name: 'artists',
    component: Artists,
    meta: {
      keepAlive: false
    }
  },
  {
    path: '/artists/:artist',
    component: Artist,
    meta: {
      keepAlive: false
    },
  },
  {
    path: '/albums/:album',
    component: Album,
    meta: {
      keepAlive: false
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
