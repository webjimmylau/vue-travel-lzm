<template>
  <div class="like">
    <div class="like-title">
      猜你喜欢
    </div>
    <div class="like-cont">
      <div class="like-item">
        <img class="img" src="http://img1.qunarzz.com/sight/p0/1702/36/36b399f9cb55e519a3.water.jpg_200x200_0542ec91.jpg">
        <div class="like-info">
          <div class="info-name">西樵山国艺影视城</div>
          <div class="info-item flex">
            <div class="info-comments">1294条评论</div>
          </div>
          <div class="info-item flex">
            <div class="info-price"><span class="symbol-price"></span>18.00</div>
            <div class="info-address">南海区</div>
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
  padding 0 .2rem
  margin-top .2rem
  background #fff
  .like-title
    padding .2rem 0
    font-size .36rem
  .like-cont
    .like-item
      display flex
      .img
        width: 2rem
        height: 2rem
        margin-right .2rem
      .like-info
        flex 1
        .info-name
          font-size .32rem
        .info-item
          margin-top .2rem
          .info-price
            color $orangeRed

</style>
