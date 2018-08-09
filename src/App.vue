<template>
  <div id="app">
    <keep-alive :exclude="exclude">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
      return {
        exclude: [
          'Detail' // 需要缓存的组件
        ]
      }
    }
  }
</script>

<style>
  #app {
  }
</style>
