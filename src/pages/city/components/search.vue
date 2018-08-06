<template>
  <div class="search">
      <div class="search-input">
        <input type="text" placeholder="输入城市名称或拼音...">
      </div>
      <div class="search-result search-result-wrapper hide">
        <div class="content">
          <div class="result-item border-bottom">北京</div>
          <div class="result-item border-bottom">上海</div>
        </div>
      </div>
  </div>
</template>

<script>
  export default {
    mounted(){
      const BScroll = this.$scroll
      const scroll = new BScroll('.search-result-wrapper')
    }
  }
</script>

<style lang="stylus" scoped>

  .search
    position relative
    z-index 1
    .search-input
      padding .2rem
      background $defaultColor
      input
        box-sizing border-box
        width 100%
        height .72rem
        padding 0 .2rem
        line-height .72rem
        text-align center
        color #666
        border-radius .04rem
    .search-result
      position fixed
      top 1.8rem
      right 0
      bottom 0
      left 0
      background $bgColor
      overflow hidden
      .result-item
        padding .2rem
        background #fff
</style>
