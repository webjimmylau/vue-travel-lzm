// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import fastClick from 'fastclick' // 延迟300毫秒

import 'styles/reset.css' // 重置
import 'styles/common.css' // 公共
import 'styles/border.css' // 1像素边
import 'styles/iconfont.css' // 文字图标

import Gallery from '@/pages/common/gallery'

Vue.component('c-gallery', Gallery)

fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
