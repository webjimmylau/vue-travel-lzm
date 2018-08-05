<template>
  <div class="ticket">
    <div class="ticket-item">
      <div class="ticket-text">
        <span class="iconfont icon-ticket">&#xe601;</span>成人票
      </div>
      <div class="ticket">
        <div class="ticket-item">
          <div class="ticket-text">
            <span class="iconfont icon-ticket">&#xe601;</span>成人票
          </div>
          <div class="ticket">
            <div class="ticket-item">
              <div class="ticket-text">
                <span class="iconfont icon-ticket">&#xe601;</span>成人票
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="ticket-item">
      <div class="ticket-text">
        <span class="iconfont icon-ticket">&#xe601;</span>成人票
      </div>
    </div>

    <div class="ticket-item">
      <div class="ticket-text">
        <span class="iconfont icon-ticket">&#xe601;</span>成人票
      </div>
    </div>
  </div>
</template>

<script>
    export default {
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
