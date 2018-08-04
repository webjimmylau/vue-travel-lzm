<template>
  <div class="like">
    <div class="like-title">
      <span class="iconfont icon-like">&#xe627;</span>
      猜你喜欢
    </div>
    <div class="like-cont">
      <div class="like-item border-bottom">
        <img class="img" src="http://img1.qunarzz.com/sight/p0/1702/36/36b399f9cb55e519a3.water.jpg_200x200_0542ec91.jpg">
        <div class="like-info">
          <div class="info-cont">
            <div class="info-t">
              <div class="info-name">西樵山国艺影视城</div>
              <div class="info-item">
                <div class="info-comments">1294条评论</div>
              </div>
            </div>
            <div class="info-b">
              <div class="info-item">
                <div class="info-price"><span class="symbol-price"></span>18.00</div>
                <div class="info-address">南海区</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="like-item border-bottom">
        <img class="img" src="http://img1.qunarzz.com/sight/p0/1702/36/36b399f9cb55e519a3.water.jpg_200x200_0542ec91.jpg">
        <div class="like-info">
          <div class="info-cont">
            <div class="info-t">
              <div class="info-name">西樵山国艺影视城</div>
              <div class="info-item">
                <div class="info-comments">1294条评论</div>
              </div>
            </div>
            <div class="info-b">
              <div class="info-item">
                <div class="info-price"><span class="symbol-price"></span>18.00</div>
                <div class="info-address">南海区</div>
              </div>
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
.like
  margin-top .2rem
  background #fff
  .like-title
    padding .2rem
    font-size .36rem
    .icon-like
      color $orangeRed
  .like-cont
    padding-left .2rem
    .like-item:last-child.border-bottom:before
        border-bottom none
    .like-item
      display flex
      padding .2rem .2rem .2rem 0
      .img
        width: 2rem
        height: 2rem
        margin-right .2rem
      .like-info
        flex 1
        .info-cont
          display flex
          flex-direction column
          justify-content  space-between
          height 2rem
        .info-name
          max-height .88rem
          line-height .44rem
          font-size .32rem
          overflow hidden
        .info-item
          display flex
          justify-content space-between
          margin-top .1rem
          .info-price
            font-size .32rem
            color $orangeRed

</style>
