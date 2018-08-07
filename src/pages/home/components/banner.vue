<template>
  <div class="banner" v-if="isShowList">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item in list" :key="item.id">
        <img :src="item.imgUrl">
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
          autoplay: {
            delay: 3000,
            stopOnLastSlide: false,
            disableOnInteraction: false,
          },
          loop: true
        }
      }
    },
    computed: {
      isShowList() {
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner >>> .swiper-pagination-bullet-active
    background $defaultColor

  .banner
    height 0
    padding-bottom 31.25%
    overflow hidden
    img
      width 100%

</style>
