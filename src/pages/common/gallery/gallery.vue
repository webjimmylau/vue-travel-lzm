<template>
  <div class="gallery" v-if="show" @click="handleClick">
    <swiper :options="swiperOption">
      <swiper-slide class="gallery-img" v-for="(item, index) in swiperSlides" :key="index">
        <img :src="item">
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    props: {
      show: {
        type: Boolean,
        default: false
      },
      list: Array
    },
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination',
            type: 'fraction'
          }
        },
        swiperSlides: this.list
      }
    },
    methods: {
      handleClick() {
        this.$emit('click')
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .gallery >>>
  .swiper-container
    height 100%

  .swiper-pagination-fraction
    bottom .4rem
    color #fff

  .gallery
    position fixed
    top 0
    right 0
    bottom 0
    left 0
    background rgba(0, 0, 0, .8)
    z-index 9
    .gallery-img
      display flex
      flex-direction column
      justify-content center
      img
        width 100%

</style>
