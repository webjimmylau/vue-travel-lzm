<template>
    <div class="head">
      <span class="iconfont icon-back">&#xe788;</span>
      <div class="head-fix">
        <span class="iconfont icon-back">&#xe600;</span>
        <span class="head-name">详情页</span>
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" scoped>
  .head
    position relative
    line-height $headHeight
    z-index 1
    .head-fix
      position fixed
      top 0
      left 0
      width 100%
      text-align center
      color #fff
      background $defaultColor
    .icon-back
        position absolute
        top 0
        left 0
        width $headHeight
        font-size .48rem
        text-align center
</style>
