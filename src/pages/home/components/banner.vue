<template>
  <div class="banner" v-if="hasList">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(item, index) in list" :key="item.id">
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
          loop: true
        }
      }
    },
    computed: {
      hasList(){
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .banner
    height 0
    padding-bottom 31.25%
    overflow hidden
    img
      width 100%

</style>
