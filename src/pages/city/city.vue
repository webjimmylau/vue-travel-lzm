<template>
    <div class="city">
      <city-head></city-head>
      <city-list></city-list>
      <city-letter></city-letter>
    </div>
</template>

<script>
    import CityHead from './components/head'
    import CityList from './components/list'
    import CityLetter from './components/letter'

    export default {
      components: {
        CityHead,
        CityList,
        CityLetter
      }
    }
</script>

<style scoped>

</style>
