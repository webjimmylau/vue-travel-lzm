<template>
  <div class="list wrapper">
    <div class="content">
      <div class="area border-bottom">
        <div class="area-title">
          选择城市
        </div>
        <div class="area-cont fn-clear">
          <div class="area-item border active"><span>{{city.name}}</span></div>
        </div>
      </div>
      <div class="area border-bottom">
        <div class="area-title">
          热门城市
        </div>
        <div class="area-cont fn-clear">
          <div
            class="area-item border"
            v-for="item in hotCities"
            :key="item.id"
            @click="handleChangeCity(item)">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
      <div
        class="area border-bottom"
        v-for="(list, key) in cities"
        :key="key"
        :ref="key">
        <div class="area-title">
          {{key}}
        </div>
        <div class="area-cont fn-clear">
          <div
            class="area-item border"
            v-for="item in list"
            :key="item.id"
            @click="handleChangeCity(item)">
            <span>{{item.name}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      hotCitiesArr: Array,
      citiesObj: Object,
      currentLetter: String
    },
    computed: {
      city() {
        return this.$store.state.city
      },
      hotCities() {
        return this.hotCitiesArr
      },
      cities() {
        return this.citiesObj
      }
    },
    methods: {
      handleChangeCity(city){
        this.$store.dispatch('changeCity', city)
        this.$router.push('/')
      }
    },
    watch: {
      currentLetter() {
        if (this.currentLetter) {
          let element = this.$refs[this.currentLetter][0]
          this.scroll.scrollToElement(element)
        }

      }
    },
    mounted() {
      const BScroll = this.$scroll
      this.scroll = new BScroll('.wrapper')
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
