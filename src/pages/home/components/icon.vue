<template>
  <div class="icons fn-clear" v-if="isIconData">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, i) in pages" :key="i">
        <div class="icon-item" v-for="(item, index) in page" :key="index">
          <img :src="item.imgUrl">
          {{item.name}}
        </div>
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
          }
        }
      }
    },
    computed: {
      pages(){
        let arr = []
        let len = this.list.length
        if(len){
          this.list.forEach((item, index)=>{
            let page = Math.floor(index / 8)
            if(!arr[page]){
              arr[page] = []
            }
            arr[page].push(item)
          })
        }
        return arr
      },
      isIconData(){
        return this.pages.length
      },
    }
  }
</script>

<style lang="stylus" scoped>
.icons >>>
  .swiper-container
    overflow inherit
  .swiper-pagination-bullets
    bottom -10px
.icons
  padding-bottom .4rem
  background #fff
  .icon-item
    float left
    width 25%
    height 0
    padding-bottom 25%
    text-align center
    overflow hidden
    img
      width 60%
      margin 10% 20% 5% 20%
</style>
