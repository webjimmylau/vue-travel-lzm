import Vue from 'vue'
import Router from 'vue-router'
import path from './path'

import Home from '@/pages/home/home'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: path.home,
      component: Home
    }
  ]
})
