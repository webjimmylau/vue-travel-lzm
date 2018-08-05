import Vue from 'vue'
import Router from 'vue-router'
import path from './path'

import Home from '@/pages/home/home'
import City from '@/pages/city/city'
import Detail from '@/pages/detail/detail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: path.home,
      component: Home
    },
    {
      path: path.city,
      component: City
    },
    {
      path: path.detail,
      component: Detail
    }
  ]
})
