// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

import fastClick from 'fastclick' // 延迟300毫秒
import VueAwesomeSwiper from 'vue-awesome-swiper' // 图片轮播
import BScroll from 'better-scroll'

import 'styles/reset.css' // 重置
import 'styles/common.css' // 公共
import 'styles/border.css' // 1像素边
import 'styles/iconfont.css' // 文字图标
import 'swiper/dist/css/swiper.css' // 图片轮播

import Fade from '@/pages/common/fade/' // 显隐过渡
import Gallery from '@/pages/common/gallery/' // 画廊

Vue.component('c-fade', Fade)
Vue.component('c-gallery', Gallery)
Vue.use(VueAwesomeSwiper, /*{default global options}*/)
Vue.prototype.$scroll = BScroll

fastClick.attach(document.body)

Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
