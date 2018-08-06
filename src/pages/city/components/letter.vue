<template>
    <div class="letter">
      <span
        class="letter-item"
        v-for="(item, index) in list"
        :key="index">{{item}}</span>
    </div>
</template>

<script>
    export default {
      props: {
        list: Array
      }
    }
</script>

<style lang="stylus" scoped>
  .letter
    display flex
    flex-direction column
    position fixed
    justify-content center
    top 1.8rem
    right 0
    bottom 0
    width .6rem
    text-align center
    .letter-item
      line-height .4rem
      color $defaultColor
</style>
