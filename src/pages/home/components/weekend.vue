<template>
  <div class="weekend">
    <div class="weekend-title">
      <span class="iconfont icon-weekend">&#xe6e2;</span>
      周末去哪儿
    </div>
    <div class="weekend-cont">
      <div
        class="weekend-item"
        v-for="(item, index) in list"
        :key="item.id">
        <div class="weekend-item-cont border-bottom">
          <img class="img" :src="item.imgUrl">
          <div class="weekend-info">
            <div class="info-item">
              <div class="info-name">{{item.name}}</div>
            </div>
            <div class="info-item">
              <div class="info-desc">{{item.desc}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
.weekend
  margin-top .2rem
  .weekend-title
    padding .2rem
    font-size .32rem
    .icon-weekend
      font-size .40rem
      color $orangeRed
  .weekend-cont
    .weekend-item
      padding-bottom .1rem
      .weekend-item-cont
        padding .2rem
        background #fff
      .img
        width: 100%
      .weekend-info
        margin-top .2rem
        .info-item
          margin-top .1rem
        .info-name
          margin-top .2rem
          max-height .88rem
          line-height .44rem
          overflow hidden
        .info-desc
          color #999
</style>
