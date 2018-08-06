<template>
  <div class="banner" v-if="hasList">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in swiperSlides" :key="index">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          },
          loop: true
        },
        swiperSlides: this.list
      }
    },
    computed: {
      hasList(){
        return this.swiperSlides.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    height 0
    padding-bottom 26.67%
    overflow hidden
    img
      width 100%

</style>
