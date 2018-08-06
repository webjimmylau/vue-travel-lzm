<template>
  <div class="list wrapper">
    <div class="content">
      <div class="area">
        <div class="area-title">
          选择城市
        </div>
        <div class="area-cont fn-clear">
          <div class="area-item border active"><span>{{currentCity}}</span></div>
        </div>
      </div>
      <div class="area">
        <div class="area-title">
          热门城市
        </div>
        <div class="area-cont fn-clear">
          <div
            class="area-item border"
            v-for="(item, index) in hotCity"
            :key="index">
            <span>{{item}}</span>
          </div>
        </div>
      </div>
      <div
        class="area"
        v-for="(list, index) in letterCity"
        :key="list.letter">
        <div class="area-title">
          {{list.letter}}
        </div>
        <div class="area-cont fn-clear">
          <div
            class="area-item border"
            v-for="(item, index) in list.list"
            :key="index">
            <span>{{item}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
      props: {
        data: Object
      },
      data(){
        return {
          currentCity: this.data.currentCity,
          hotCity: this.data.hotCity,
          letterCity: this.data.letterCity
        }
      },
      mounted(){
        const BScroll = this.$scroll
        const scroll = new BScroll('.wrapper')
      }
    }
</script>

<style lang="stylus" scoped>
  .list
    position fixed
    top 1.8rem
    right 0
    bottom 0
    left 0
    background $bgColor
    overflow hidden
    .area
      padding-top .2rem
      .area-title
        padding .2rem
      .area-cont
        padding .2rem .2rem 0 .2rem
        background #fff
        .area-item
          box-sizing border-box
          float left
          width 28%
          padding 0 .2rem
          margin 0 .2rem .2rem 0
          line-height .72rem
          text-align center
          background #fff
          border-radius .04rem
          &.active
            color #fff
            background $defaultColor
            &.border:before
              border-color $defaultColor

</style>
