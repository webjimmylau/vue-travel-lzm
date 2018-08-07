<template>
  <div class="like" v-if="isShowList">
    <div class="like-title">
      <span class="iconfont icon-like">&#xe627;</span>
      猜你喜欢
    </div>
    <div class="like-cont">
      <router-link
        to="/detail"
        tag="div"
        class="like-item border-bottom"
        v-for="item in list"
        :key="item.id">
        <img class="img" :src="item.imgUrl">
        <div class="like-info">
          <div class="info-cont">
            <div class="info-t">
              <div class="info-name">{{item.name}}</div>
              <div class="info-item">
                <div class="info-comment">{{item.comment}}条评论</div>
              </div>
            </div>
            <div class="info-b">
              <div class="info-item">
                <div class="info-price"><span class="symbol-price"></span>{{item.price}}</div>
                <div class="info-address">{{item.address}}</div>
              </div>
            </div>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    computed: {
      isShowList() {
        return this.list.length
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .like
    margin-top .2rem
    background #fff
    .like-title
      padding .2rem
      font-size .32rem
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
            justify-content space-between
            height 2rem
          .info-name
            max-height .88rem
            line-height .44rem
            overflow hidden
          .info-item
            display flex
            justify-content space-between
            margin-top .1rem
            .info-comment, .info-address
              color #999
            .info-price
              font-size .32rem
              color $orangeRed
</style>
