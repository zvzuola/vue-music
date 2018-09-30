import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import store from './store'
import Index from './components/Index'
import List from './components/List'
import Item from './components/Item'
import Artists from './components/Artists'
import Artist from './components/Artist'
import Album from './components/Album'

import './assets/animate.scss'
Vue.config.productionTip = false
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    component: Index
  },
  {
    path: '/list',
    component: List
  },
  {
    path: '/:id',
    name: 'item',
    component: Item
  },
  {
    path: '/artists',
    name: 'artists',
    component: Artists
  },
  {
    path: '/artists/:artist',
    component: Artist
  },
  {
    path: '/albums/:album',
    component: Album
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
