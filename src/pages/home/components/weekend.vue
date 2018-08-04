<template>
  <div class="weekend">
    <div class="weekend-title">
      <span class="iconfont icon-weekend">&#xe6e2;</span>
      周末去哪儿
    </div>
    <div class="weekend-cont">
      <div class="weekend-item">
        <div class="weekend-item-cont border-bottom">
          <img class="img" src="http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg">
          <div class="weekend-info">
            <div class="info-item">
              <div class="info-name">广州必游TOP10</div>
            </div>
            <div class="info-item">
              <div class="info-desc">感受现代与传统相融合的广州</div>
            </div>
          </div>
        </div>
      </div>
      <div class="weekend-item">
        <div class="weekend-item-cont border-bottom">
          <img class="img" src="http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg">
          <div class="weekend-info">
            <div class="info-item">
              <div class="info-name">广州必游TOP10</div>
            </div>
            <div class="info-item">
              <div class="info-desc">感受现代与传统相融合的广州</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {}
</script>

<style lang="stylus" scoped>
.weekend
  margin-top .2rem
  .weekend-title
    padding .2rem
    font-size .36rem
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
        margin .2rem 0
        .info-item
          margin-top .1rem
        .info-name
          margin-top .2rem
          max-height .88rem
          line-height .44rem
          font-size .32rem
          overflow hidden
        .info-desc
          color #666

</style>
