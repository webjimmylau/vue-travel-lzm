<template>
  <div
    class="letter"
    @click="handleClickLetter"
    @touchstart="handleTouchStart"
    @touchmove="handleTouchMove"
    ref="letter">
    <div class="letter-cont" ref="letterCont">
      <span
        class="letter-item"
        v-for="item in list"
        :key="item">{{item}}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      list: Array
    },
    data() {
      return {
        letterHeight: 0,
        letterOffsetTop: 0,
        letterIndex: 0,
        timer: null
      }
    },
    computed: {
      letterLen() {
        return this.list.length
      }
    },
    watch: {
      letterIndex() {
        const letter = this.list[this.letterIndex]
        this.$emit('change', letter)
      }
    },
    methods: {
      handleClickLetter(e) {
        const letter = e.target.innerHTML
        this.$emit('change', letter)
      },
      handleTouchStart() {
        this.letterHeight = this.$refs.letterCont.clientHeight / this.letterLen
        this.letterOffsetTop = this.$refs.letter.offsetTop + this.$refs.letterCont.offsetTop
      },
      handleTouchMove(e) {
        let touchY = e.touches[0].clientY
        let letterScope = (touchY - this.letterOffsetTop) / this.letterHeight
        if (letterScope > 0 && letterScope < this.letterLen) {
          if (this.timer) clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            this.letterIndex = Math.floor(letterScope)
          }, 16)
        }
      }
    }
  }
</script>

<style lang="stylus" scoped>
  .letter
    display flex
    flex-direction column
    justify-content center
    position fixed
    top 1.8rem
    right 0
    bottom 0
    width .6rem
    text-align center
    .letter-item
      display block
      line-height .4rem
      color $defaultColor
</style>
