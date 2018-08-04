<template>
    <div class="head">
      <div class="head-back">
        <span class="iconfont icon-back">&#xe600;</span>
      </div>
      <div class="head-title">选择城市</div>
      <div class="head-search">
        <input type="text" placeholder="输入城市名称或拼音...">
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
  background $defaultColor
  .head-back
    position absolute
    left .2rem
    top .28rem
    color #fff
  .head-title
    padding-top .2rem
    line-height .48rem
    text-align center
    color #fff
  .head-search
    padding .2rem
    input
      box-sizing border-box
      width 100%
      height .72rem
      padding 0 .2rem
      line-height .72rem
      text-align center
      color #666
      border-radius .04rem
</style>
