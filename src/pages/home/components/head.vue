<template>
  <div class="head">
    <div class="head-l">
      <span class="iconfont icon-scan">&#xe62e;</span>
    </div>
    <div class="head-c">
      <div class="search">
        <span class="iconfont">&#xe632;</span>
        输入城市/景点/游玩主题...
      </div>
    </div>
    <router-link to="/city" tag="div" class="head-r">
      <span class="city-name t-hide">{{city.name}}</span>
      <span class="iconfont icon-bottom">&#xe6a4;</span>
    </router-link>
  </div>
</template>

<script>
  import { mapState } from 'vuex'

  export default {
    computed: {
      ...mapState(['city'])
    }
  }
</script>

<style lang="stylus" scoped>
  .head
    display flex
    height $headHeight
    line-height $headHeight
    background $defaultColor
    .head-l
      padding 0 .1rem
      color #fff
      .icon-scan
        font-size .48rem
    .head-c
      flex 1
      padding 0 .1rem
      .search
        display block
        box-sizing border-box
        width 100%
        height .6rem
        padding 0 .2rem
        line-height .6rem
        margin .14rem 0
        color #ccc
        background #fff
        border-radius .04rem
    .head-r
      display flex
      padding 0 .1rem
      color #fff
      .city-name
        max-width 1.2rem
        .icon-bottom
          vertical-align top

</style>
