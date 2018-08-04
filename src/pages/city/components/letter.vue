<template>
    <div class="letter">
      <span class="letter-item">A</span>
      <span class="letter-item">B</span>
      <span class="letter-item">C</span>
    </div>
</template>

<script>
    export default {
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
