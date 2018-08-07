<template>
  <div class="home">
    <home-head></home-head>
    <home-banner :list="bannerList"></home-banner>
    <home-icon :list="iconList"></home-icon>
    <home-like :list="likeList"></home-like>
    <home-weekend :list="weekendList"></home-weekend>
  </div>
</template>

<script>
  import HomeHead from './components/head'
  import HomeBanner from './components/banner'
  import HomeIcon from './components/icon'
  import HomeLike from './components/like'
  import HomeWeekend from './components/weekend'

  export default {
    data(){
      return {
        bannerList: [],
        iconList: [],
        likeList: [],
        weekendList: []
      }
    },
    methods: {
      getHomeData(){
        this.$http
          .get(this.$api.home)
          .then(res => {
            let resData = res.data;
            if(resData.ret && resData.data){
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
    created(){
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
