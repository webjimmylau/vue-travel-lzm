<template>
    <div class="banner">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg">
      <div class="banner-cont">
        <div class="banner-title t-hide">
          详情名称
        </div>
        <div class="banner-num">
          <span class="iconfont icon-img">&#xe716;</span>
          23
        </div>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    height 0
    padding-bottom 55%
    overflow hidden
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
