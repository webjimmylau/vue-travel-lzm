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
        iconList: [
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
          {name: '景点门票', imgUrl: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png'},
        ],
        likeList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1702/36/36b399f9cb55e519a3.water.jpg_200x200_0542ec91.jpg',
            name: '西樵山国艺影视城',
            comments: '1924',
            price: '18.00',
            address: '南海区'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1702/36/36b399f9cb55e519a3.water.jpg_200x200_0542ec91.jpg',
            name: '西樵山国艺影视城',
            comments: '1924',
            price: '18.00',
            address: '南海区'
          }
        ],
        weekendList: [
          {
            id: '0001',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
            title: '广州必游TOP10',
            desc: '感受现代与传统相融合的广州'
          },
          {
            id: '0002',
            imgUrl: 'http://img1.qunarzz.com/sight/source/1505/92/580e9ea4f37a1b.jpg_r_640x214_72112761.jpg',
            title: '广州必游TOP10',
            desc: '感受现代与传统相融合的广州'
          }
        ]
      }
    },
    methods: {
      getHomeData(){
        this.$http
          .get('/api/index.json')
          .then((res) => {
            let resData = res.data;
            if(resData.ret && resData.data){
              let data = resData.data
              this.bannerList = data.bannerList
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
