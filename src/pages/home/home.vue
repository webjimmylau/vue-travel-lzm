<template>
  <div class="home">
    <home-head></home-head>
    <home-banner></home-banner>
    <home-icon></home-icon>
    <home-like></home-like>
  </div>
</template>

<script>
  import HomeHead from './components/head'
  import HomeBanner from './components/banner'
  import HomeIcon from './components/icon'
  import HomeLike from './components/like'

  export default {
    components: {
      HomeHead,
      HomeBanner,
      HomeIcon,
      HomeLike
    }
  }
</script>

<style lang="stylus" scoped>
  .home
    background $bgColor
</style>
