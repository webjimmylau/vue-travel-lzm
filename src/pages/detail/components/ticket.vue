<template>
  <div class="ticket">
    <div
      class="ticket-item"
      v-for="(item, index) in list"
      :key="index">
      <div class="ticket-text">
        <span class="iconfont icon-ticket">&#xe601;</span>{{item.title}}
      </div>
      <detail-ticket :list="item.children"/>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'DetailTicket',
    props: {
      list: Array
    }
  }
</script>

<style lang="stylus" scoped>
  .ticket
    padding-left .4rem
    .ticket-item
      .ticket-text
        line-height .6rem
        color #666
        .icon-ticket
          padding-right .08rem
          color $defaultColor
</style>
