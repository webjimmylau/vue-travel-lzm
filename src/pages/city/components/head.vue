<template>
  <div class="head">
    <router-link to="/" tag="div" class="head-back">
      <span class="iconfont icon-back">&#xe600;</span>
    </router-link>
    <div class="head-title">选择城市</div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
  .head
    position relative
    background $defaultColor
    z-index 1
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
</style>
