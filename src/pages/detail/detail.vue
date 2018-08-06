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
      data(){
        return {
          headTitle: '详情名称',
          bannerData: {
            name: '详情名称',
            num: 23,
            imgUrl: 'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_600x330_cd2e3bf7.jpg'
          },
          galleryList: [
            'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg',
            'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg',
            'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg',
            'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg',
            'http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg',
          ],
          ticketList: [
            {
              name: 'A1',
              children: [
                {
                  name: 'A2',
                  children: [
                    {name: 'A3'},
                    {name: 'A3'},
                    {name: 'A3'},
                  ]
                },
                {
                  name: 'A2',
                  children: [
                    {name: 'A3'},
                    {name: 'A3'},
                    {name: 'A3'},
                  ]
                }
              ]
            },
            {
              name: 'B1'
            },
            {
              name: 'C1'
            }
          ]
        }
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
