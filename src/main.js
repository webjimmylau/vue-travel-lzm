// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import api from './utility/api'
import axios from 'axios'

import 'babel-polyfill' // 解决低版本浏览器出现的一些白屏问题，ie9和一些低版本的浏览器对es6新语法的不支持问题
import fastClick from 'fastclick' // 延迟300毫秒
import VueAwesomeSwiper from 'vue-awesome-swiper' // 图片轮播
import BScroll from 'better-scroll' // 拖动插件

import 'styles/reset.css' // 重置
import 'styles/common.css' // 公共
import 'styles/border.css' // 1像素边
import 'styles/iconfont.css' // 文字图标
import 'swiper/dist/css/swiper.css' // 图片轮播

import Fade from '@/pages/common/fade/' // 显隐过渡
import Gallery from '@/pages/common/gallery/' // 画廊

// 公用组件
Vue.component('c-fade', Fade)
Vue.component('c-gallery', Gallery)

Vue.use(VueAwesomeSwiper, /*{default global options}*/) // 图片轮播
Vue.prototype.$scroll = BScroll
Vue.prototype.$http = axios
Vue.prototype.$api = api

fastClick.attach(document.body) // 为消除移动端浏览器，从物理触摸到触发点击事件之间的300ms延时的问题

Vue.config.productionTip = false // 编译完成之后，不是否在浏览器打开地址

new Vue({
  el: '#app',
  router,
  store,
  components: {App},
  template: '<App/>'
})
