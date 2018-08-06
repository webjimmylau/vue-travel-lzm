<template>
    <div class="banner">
      <img class="banner-img" @click="showGallery" :src="data.imgUrl">
      <div class="banner-cont">
        <div class="banner-title t-hide">
          {{data.name}}
        </div>
        <div class="banner-num">
          <span class="iconfont icon-img">&#xe716;</span>
          {{data.num}}
        </div>
      </div>
      <c-fade>
        <c-gallery v-if="isShowGallery" :list="list" @click="hideGallery"></c-gallery>
      </c-fade>
    </div>
</template>

<script>
    export default {
      props: {
        data: Object,
        list: Array
      },
      data(){
        return {
          isShowGallery: false
        }
      },
      methods: {
        showGallery(){
          this.isShowGallery = true
        },
        hideGallery(){
          this.isShowGallery = false
        }
      }
    }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-cont
      display flex
      justify-content space-between
      box-sizing border-box
      position absolute
      left 0
      bottom 0
      width 100%
      line-height .6rem
      padding 0 .2rem
      color #fff
      background linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .6))
      .banner-title
        max-width 60%
</style>
