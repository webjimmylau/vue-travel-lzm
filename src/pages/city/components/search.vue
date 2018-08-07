<template>
  <div class="search">
    <div class="search-input">
      <input type="text" placeholder="输入城市名称或拼音..." v-model.trim="keyword">
    </div>
    <div class="search-result search-result-wrapper" v-show="show">
      <div class="result-empty" v-if="!cityResultLen">搜索结果为空！</div>
      <div class="content" v-else>
        <div
          class="result-item border-bottom"
          v-for="(item, index) in cityResult"
          :key="item.id">{{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      citiesObj: Object
    },
    data() {
      return {
        keyword: '',
        show: false,
        cityResult: []
      }
    },
    computed: {
      allCities() {
        let arr = []
        for (let item in this.citiesObj) {
          let list = this.citiesObj[item]
          for (let i = 0, len = list.length; i < len; i++) {
            arr.push(list[i])
          }
        }
        return arr
      },
      cityResultLen() {
        return this.cityResult.length
      }
    },
    watch: {
      keyword() {
        this.cityResult = []
        if (!this.keyword) {
          this.show = false
        } else {
          this.show = true
          this.allCities.forEach(item => {
            let spellIndex = item.spell.indexOf(this.keyword)
            let nameIndex = item.name.indexOf(this.keyword)
            if (spellIndex > -1 || nameIndex > -1) {
              this.cityResult.push(item)
            }
          })
        }
      }
    },
    mounted() {
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
      .result-empty
        height 100%;
        display flex;
        justify-content center;
        align-items center;
      .result-item
        padding .2rem
        background #fff
</style>
