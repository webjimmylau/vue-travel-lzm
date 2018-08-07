<template>
  <div class="head">
    <router-link
      to="/" tag="div"
      class="head-abs"
      v-if="!isShowHeadFix"
      ref="iconBack">
      <span class="iconfont icon-back">&#xe600;</span>
    </router-link>
    <div
      class="head-fix"
      :style="addStyle"
      v-if="isShowHeadFix">
      <router-link
        to="/"
        tag="span"
        class="iconfont icon-back">&#xe600;
      </router-link>
      <span class="head-name">{{title}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      title: String
    },
    data() {
      return {
        isShowHeadFix: false,
        headHeight: 0,
        addStyle: {
          opacity: 0
        }
      }
    },
    methods: {
      handleScroll() {
        const sTop = document.body.scrollTop
        if (sTop > this.headHeight) {
          const opacity = (sTop - this.headHeight) / this.headHeight / 2
          this.addStyle.opacity = opacity < 1 ? opacity : 1
          this.isShowHeadFix = true
        } else {
          this.isShowHeadFix = false
        }
      }
    },
    mounted() {
      this.headHeight = this.$refs.iconBack.$el.clientHeight
      window.addEventListener('scroll', this.handleScroll)
    },
    destroyed() {
      window.removeEventListener('scroll', this.handleScroll)
    }
  }
</script>

<style lang="stylus" scoped>
  .head
    position relative
    line-height $headHeight
    z-index 1
    .head-abs
      position absolute
      top 0
      left 0
      .icon-back
        display block
        width .6rem
        line-height .6rem
        margin .14rem
        text-align center
        font-size .32rem
        color #fff
        background rgba(0, 0, 0, .6)
        border-radius: .34rem
    .head-fix
      position fixed
      top 0
      left 0
      width 100%
      text-align center
      color #fff
      background $defaultColor
      .icon-back
        position absolute
        top 0
        left 0
        width $headHeight
        font-size .32rem
        text-align center
        color #fff
</style>
