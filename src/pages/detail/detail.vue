<template>
  <div class="detail">
    <detail-head :title="headTitle"></detail-head>
    <detail-banner :data="bannerData" :list="galleryList"></detail-banner>
    <detail-ticket :list="ticketList"></detail-ticket>
    <div class="content">

    </div>
  </div>
</template>

<script>
  import DetailHead from './components/head'
  import DetailBanner from './components/banner'
  import DetailTicket from './components/ticket'

  export default {
    name: 'Detail',
    data() {
      return {
        headTitle: '',
        bannerData: {
          name: '',
          num: 0,
          imgUrl: ''
        },
        galleryList: [],
        ticketList: []
      }
    },
    methods: {
      getDetailInfo() {
        this.$http
          .get(this.$api.detail)
          .then(res => {
            const resData = res.data
            if (resData.ret && resData.data) {
              const data = resData.data
              this.headTitle = data.sightName
              this.bannerData.imgUrl = data.bannerImg
              this.bannerData.name = data.sightName
              this.bannerData.num = data.gallaryImgs.length
              this.galleryList = data.gallaryImgs
              this.ticketList = data.categoryList
            }
          })
      }
    },
    mounted() {
      this.getDetailInfo()
    },
    components: {
      DetailHead,
      DetailBanner,
      DetailTicket
    }
  }
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
