<template>
  <div class="detail">
    <detail-head></detail-head>
    <detail-banner></detail-banner>
    <c-gallery></c-gallery>
    <detail-ticket></detail-ticket>
    <div class="content">

    </div>
  </div>
</template>

<script>
    import DetailHead from './components/head'
    import DetailBanner from './components/banner'
    import DetailTicket from './components/ticket'

    export default {
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
