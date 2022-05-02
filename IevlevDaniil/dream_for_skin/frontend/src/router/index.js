import Vue from 'vue'
import VueRouter from 'vue-router'

import User from '@/views/UserView.vue'
import Home from '@/views/HomeView.vue'
import Product from "@/views/ProductView.vue"
import Cart from "@/views/CartView.vue"
import Favorites from "@/views/FavoriteView.vue"
import Auth from "@/views/AuthView.vue"

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name : 'home',
    component: Home,
    meta: {
      layout: 'main-layout',
    },
  },
  {
    path: '/auth/:name',
    name : 'auth',
    component: Auth,
    meta: {
      layout: 'auth-layout',
    },

  },
  {
    path: '/user/:id',
    name : 'user',
    component: User,
    meta: {
      layout: 'main-layout',
    },

  },
  {
    path: "/product/:id",
    name: "product",
    component: Product,
    meta: {
      layout: 'main-layout',
    },
  },
  {
    path: "/cart",
    name: "cart",
    component: Cart,
    meta: {
      layout: 'main-layout',
    },
  },
  {
    path: "/favorites",
    name: "favorites",
    component: Favorites,
    meta: {
      layout: 'main-layout',
    },
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
