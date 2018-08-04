<template>
  <div class="list">
    <div class="area">
      <div class="area-title">
        选择城市
      </div>
      <div class="area-cont fn-clear">
        <div class="area-item border active"><span>北京</span></div>
      </div>
    </div>
    <div class="area">
      <div class="area-title">
        热门城市
      </div>
      <div class="area-cont fn-clear">
        <div class="area-item border"><span>北京</span></div>
        <div class="area-item border"><span>上海</span></div>
        <div class="area-item border"><span>广州</span></div>
        <div class="area-item border"><span>深圳</span></div>
        <div class="area-item border"><span>杭州</span></div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" scoped>
  .list
    background $bgColor
    .area
      padding-top .2rem
      .area-title
        padding .2rem
      .area-cont
        padding .2rem .2rem 0 .2rem
        background #fff
        .area-item
          box-sizing border-box
          float left
          width 28%
          padding 0 .2rem
          margin 0 .2rem .2rem 0
          line-height .72rem
          text-align center
          background #fff
          border-radius .04rem
          &.active
            color #fff
            background $defaultColor
            &.border:before
              border-color $defaultColor

</style>
