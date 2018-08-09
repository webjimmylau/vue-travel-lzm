<template>
  <div class="home">
    <home-head></home-head>
    <home-banner :list="bannerList"/>
    <home-icon :list="iconList"/>
    <home-like :list="likeList"/>
    <home-weekend :list="weekendList"/>
  </div>
</template>

<script>
  import HomeHead from './components/head'
  import HomeBanner from './components/banner'
  import HomeIcon from './components/icon'
  import HomeLike from './components/like'
  import HomeWeekend from './components/weekend'

  import { mapState } from 'vuex'

  export default {
    name: 'Home',
    data() {
      return {
        bannerList: [],
        iconList: [],
        likeList: [],
        weekendList: []
      }
    },
    computed: {
      ...mapState(['city'])
    },
    watch: {
      city(){
        this.getHomeData()
      }
    },
    methods: {
      getHomeData() {
        this.$http
          .get(this.$api.home, {
            params: {
              name: this.city.name
            }
          })
          .then(res => {
            let resData = res.data;
            if (resData.ret && resData.data) {
              let data = resData.data
              this.bannerList = data.bannerList
              this.iconList = data.iconList
              this.likeList = data.recommendList
              this.weekendList = data.weekendList
            }
          })
          .catch((err) => {
            console.log(err)
          })
      }
    },
    created() {
      this.getHomeData()
    },
    components: {
      HomeHead,
      HomeBanner,
      HomeIcon,
      HomeLike,
      HomeWeekend
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    background $bgColor
</style>
