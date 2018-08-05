<template>
    <div class="gallery hide">
      <div class="gallery-img">
        <img src="http://img1.qunarzz.com/sight/p0/1603/3b/3bd311262ee06d8c90.img.jpg_r_800x800_41637b9b.jpg">
      </div>
    </div>
</template>

<script>
    export default {
    }
</script>

<style lang="stylus" scoped>
.gallery
  position fixed
  top 0
  right 0
  bottom 0
  left 0
  background rgba(0, 0, 0, .9)
  z-index 9
  .gallery-img
    display flex
    justify-content center
    flex-direction column
    height: 100%
    img
      width: 100%

</style>
